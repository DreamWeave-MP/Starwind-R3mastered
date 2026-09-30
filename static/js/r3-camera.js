// The orbit camera: dragging empty sky turns the view about the scene's focus, the world under the
// planet's centre. Yaw is free, pitch limited. A release carries on and fades, and after a while
// untouched the view eases back to the framing the hero chose. The sky is drawn in screen space, so
// the hero applies the same turn to it: the planet's surface, its rings, the sun on its limb and the
// stars' scroll. Nothing here allocates per frame.

import * as THREE from './vendor/three.module.min.js';

const PITCH_LIMIT = 0.42;
const RETURN_AFTER = 9;       // seconds untouched before the view drifts home
const RETURN_RATE = 0.35;     // how quickly it drifts home, per second
const FLING_DECAY = 2.4;      // how quickly a release's spin fades, per second

export function createOrbit({ hero, stage = hero, isFree, reduceMotion = false, onMove = () => {} }) {
  const state = { yaw: 0, pitch: 0, vyaw: 0, vpitch: 0, idle: Infinity, active: false };
  const quaternion = new THREE.Quaternion();
  const inverse = new THREE.Quaternion();
  const matrix = new THREE.Matrix4();
  const euler = new THREE.Euler(0, 0, 0, 'YXZ');
  const scratch = new THREE.Vector3();
  let drag = null;

  const point = (event) => {
    const bounds = stage.getBoundingClientRect(); // [r3:stage]
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top, width: bounds.width, height: bounds.height };
  };

  hero.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || drag) return;
    const at = point(event);
    if (!isFree(at, event)) return;
    drag = { id: event.pointerId, x: at.x, y: at.y, lastX: at.x, lastY: at.y, time: performance.now(), touch: event.pointerType === 'touch', decided: event.pointerType !== 'touch', width: at.width };
  }, { passive: true });

  hero.addEventListener('pointermove', (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const at = point(event);
    const dx = at.x - drag.lastX;
    const dy = at.y - drag.lastY;
    if (!drag.decided) {
      // On touch only a sideways drag orbits; a vertical one is the page scrolling.
      const sx = Math.abs(at.x - drag.x);
      const sy = Math.abs(at.y - drag.y);
      if (sx + sy < 8) return;
      if (sy > sx) {
        drag = null;
        return;
      }
      drag.decided = true;
    }
    if (!state.active) {
      state.active = true;
      hero.classList.add('r3-orbiting');
      try { hero.setPointerCapture(event.pointerId); } catch { /* the pointer may already be gone */ }
    }
    const perPixel = Math.PI / Math.max(drag.width, 320);
    const now = performance.now();
    const elapsed = Math.max(1, now - drag.time) / 1000;
    // Grab the sky: it follows the pointer, so the camera turns the other way.
    state.yaw += dx * perPixel;
    state.pitch = THREE.MathUtils.clamp(state.pitch + dy * perPixel * 0.7, -PITCH_LIMIT, PITCH_LIMIT);
    state.vyaw = (dx * perPixel) / elapsed;
    state.vpitch = (dy * perPixel * 0.7) / elapsed;
    drag.lastX = at.x;
    drag.lastY = at.y;
    drag.time = now;
    state.idle = 0;
    onMove();
  }, { passive: true });

  const release = (event) => {
    if (!drag || (event && event.pointerId !== drag.id)) return;
    drag = null;
    if (state.active) {
      state.active = false;
      hero.classList.remove('r3-orbiting');
      // Swallow the click that ends a drag, so an orbit never also shoots or jumps.
      const swallow = (click) => { click.stopPropagation(); click.preventDefault(); };
      hero.addEventListener('click', swallow, { capture: true, once: true });
      setTimeout(() => hero.removeEventListener('click', swallow, { capture: true }), 0);
    }
    if (reduceMotion) {
      state.vyaw = 0;
      state.vpitch = 0;
    }
  };
  hero.addEventListener('pointerup', release, { passive: true });
  hero.addEventListener('pointercancel', release, { passive: true });

  return {
    state,
    quaternion,
    inverse,
    matrix,
    // Whether a drag is orbiting now, so the hero can hold other pointer effects back.
    get dragging() { return state.active; },
    // Advance the fling and the drift home, and rebuild the rotation.
    update(dt) {
      if (!state.active) {
        if (state.vyaw !== 0 || state.vpitch !== 0) {
          const decay = Math.exp(-dt * FLING_DECAY);
          state.vyaw *= decay;
          state.vpitch *= decay;
          state.yaw += state.vyaw * dt;
          state.pitch = THREE.MathUtils.clamp(state.pitch + state.vpitch * dt, -PITCH_LIMIT, PITCH_LIMIT);
          if (Math.abs(state.vyaw) + Math.abs(state.vpitch) < 0.002) {
            state.vyaw = 0;
            state.vpitch = 0;
          }
        }
        state.idle += dt;
        if (state.idle > RETURN_AFTER) {
          // Home by the short way round.
          state.yaw = Math.atan2(Math.sin(state.yaw), Math.cos(state.yaw));
          const k = 1 - Math.exp(-dt * RETURN_RATE);
          state.yaw -= state.yaw * k;
          state.pitch -= state.pitch * k;
        }
      }
      if (!Number.isFinite(state.yaw)) state.yaw = 0;
      if (!Number.isFinite(state.pitch)) state.pitch = 0;
      euler.set(state.pitch, state.yaw, 0, 'YXZ');
      quaternion.setFromEuler(euler);
      inverse.copy(quaternion).invert();
      matrix.makeRotationFromQuaternion(quaternion);
    },
    // Whether the view is turned at all, to skip work at rest.
    get turned() { return Math.abs(state.yaw) > 1e-4 || Math.abs(state.pitch) > 1e-4; },
    // Turn an object rigidly about the focus, as the camera turns: the camera, or anything that
    // should stay put on screen (the jewel).
    carry(object, focus) {
      object.position.sub(focus).applyQuaternion(quaternion).add(focus);
      object.quaternion.premultiply(quaternion);
    },
    // A view-space direction for the sky, from a world-space one.
    toView(direction, out = scratch) {
      return out.copy(direction).applyQuaternion(inverse);
    },
    // Jump the view home at once, as a hyperspace jump arrives.
    reset() {
      state.yaw = 0;
      state.pitch = 0;
      state.vyaw = 0;
      state.vpitch = 0;
      state.idle = Infinity;
    },
  };
}
