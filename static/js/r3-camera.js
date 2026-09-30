// The orbit camera: a drag turns the view round the backdrop's focus (the planet's centre, the black
// hole, a binary's barycentre, a system's star), yaw all the way round and pitch to 75 degrees either
// way, so a black hole's disc can be seen from above or edge on and a quasar looked down. Two fingers
// on a touch screen orbit freely and pinch the distance; Ctrl and the wheel (a trackpad's pinch)
// zoom too. A release carries on and fades; after half a minute untouched the view eases home.
//
// The ships fly near the viewer, in the camera's own frame, so a battle stays on screen however the
// backdrop turns: nothing here moves the three.js camera. Instead the orbit is the rotation from that
// frame to the backdrop's (the sky's), which r3-hero.js hands to the sky shader and uses to turn the
// sun and the backdrop's bodies into the camera's frame. Nothing here allocates per frame.

import * as THREE from './vendor/three.module.min.js';

const PITCH_LIMIT = 1.31;     // about 75 degrees
const RETURN_AFTER = 30;      // seconds untouched before the view drifts home
const RETURN_RATE = 0.28;     // how quickly it drifts home, per second
const FLING_DECAY = 2.2;      // how quickly a release's spin fades, per second
const DRAG_START = 4;         // css pixels a press must move before it orbits

export function createOrbit({ hero, stage = hero, isFree, reduceMotion = false, onMove = () => {}, zoomRange = () => [1, 1] }) {
  const state = { yaw: 0, pitch: 0, zoom: 1, vyaw: 0, vpitch: 0, idle: Infinity, active: false };
  // Sky from camera: turns a direction in the camera's frame into the backdrop's.
  const quaternion = new THREE.Quaternion();
  // Camera from sky.
  const inverse = new THREE.Quaternion();
  const matrix3 = new THREE.Matrix3();
  const matrix4 = new THREE.Matrix4();
  const euler = new THREE.Euler(0, 0, 0, 'YXZ');
  const pointers = new Map();
  let drag = null;
  let pinch = null;

  const point = (event) => {
    const bounds = stage.getBoundingClientRect(); // [r3:stage]
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top, width: bounds.width, height: bounds.height };
  };
  const clampPitch = (pitch) => THREE.MathUtils.clamp(pitch, -PITCH_LIMIT, PITCH_LIMIT);
  const clampZoom = (zoom) => {
    const [low, high] = zoomRange();
    return THREE.MathUtils.clamp(zoom, low, high);
  };
  function turn(dx, dy, width, elapsed) {
    // Grab the backdrop: its near side follows the pointer and the sky behind swings the other way,
    // a full width of drag half a turn.
    const perPixel = Math.PI / Math.max(width, 320);
    state.yaw -= dx * perPixel;
    state.pitch = clampPitch(state.pitch - dy * perPixel * 0.8);
    state.vyaw = -(dx * perPixel) / elapsed;
    state.vpitch = -(dy * perPixel * 0.8) / elapsed;
    state.idle = 0;
    onMove();
  }
  function begin(event) {
    if (!state.active) {
      state.active = true;
      hero.classList.add('r3-orbiting');
    }
    try { hero.setPointerCapture(event.pointerId); } catch { /* the pointer may already be gone */ }
  }

  hero.addEventListener('pointerdown', (event) => {
    const at = point(event);
    if (event.pointerType === 'touch' && pointers.size === 1 && !event.r3Taken) {
      // A second finger: the two orbit together and pinch the distance.
      pointers.set(event.pointerId, at);
      const [a, b] = [...pointers.values()];
      pinch = { distance: Math.hypot(a.x - b.x, a.y - b.y) || 1, zoom: state.zoom, x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, time: performance.now(), width: at.width };
      drag = null;
      begin(event);
      return;
    }
    if (event.button !== 0 || drag || pinch) return;
    if (!isFree(at, event)) return;
    if (event.pointerType === 'touch') pointers.set(event.pointerId, at);
    drag = { id: event.pointerId, x: at.x, y: at.y, lastX: at.x, lastY: at.y, time: performance.now(), touch: event.pointerType === 'touch', moving: false, width: at.width };
  }, { passive: true });

  hero.addEventListener('pointermove', (event) => {
    if (pointers.has(event.pointerId)) pointers.set(event.pointerId, point(event));
    if (pinch && pointers.size >= 2) {
      const [a, b] = [...pointers.values()];
      const x = (a.x + b.x) / 2;
      const y = (a.y + b.y) / 2;
      const now = performance.now();
      const elapsed = Math.max(1, now - pinch.time) / 1000;
      turn(x - pinch.x, y - pinch.y, pinch.width, elapsed);
      state.zoom = clampZoom(pinch.zoom * pinch.distance / Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)));
      pinch.x = x;
      pinch.y = y;
      pinch.time = now;
      return;
    }
    if (!drag || event.pointerId !== drag.id) return;
    const at = point(event);
    if (!drag.moving) {
      const sx = Math.abs(at.x - drag.x);
      const sy = Math.abs(at.y - drag.y);
      if (sx + sy < DRAG_START) return;
      // On touch only a sideways drag orbits; a vertical one is the page scrolling.
      if (drag.touch && sy > sx) {
        drag = null;
        pointers.delete(event.pointerId);
        return;
      }
      drag.moving = true;
      begin(event);
    }
    const now = performance.now();
    const elapsed = Math.max(1, now - drag.time) / 1000;
    // One finger turns the view round only: a vertical movement is left to the page.
    turn(at.x - drag.lastX, drag.touch ? 0 : at.y - drag.lastY, drag.width, elapsed);
    drag.lastX = at.x;
    drag.lastY = at.y;
    drag.time = now;
  }, { passive: true });

  const release = (event) => {
    pointers.delete(event.pointerId);
    if (pinch && pointers.size < 2) pinch = null;
    if (drag && event.pointerId !== drag.id) return;
    const was = state.active;
    drag = null;
    if (pinch) return;
    if (was) {
      state.active = false;
      hero.classList.remove('r3-orbiting');
      // Swallow the click that ends a drag, so an orbit never also shoots, flies or jumps.
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

  // Ctrl and the wheel, which is also how a trackpad reports a pinch, move the camera in or out.
  // The plain wheel is the page's.
  hero.addEventListener('wheel', (event) => {
    if (!event.ctrlKey) return;
    const at = point(event);
    if (at.x < 0 || at.y < 0 || at.x > at.width || at.y > at.height) return;
    event.preventDefault();
    state.zoom = clampZoom(state.zoom * Math.exp(event.deltaY * 0.0025));
    state.idle = 0;
    onMove();
  }, { passive: false });

  function rebuild() {
    if (!Number.isFinite(state.yaw)) state.yaw = 0;
    if (!Number.isFinite(state.pitch)) state.pitch = 0;
    if (!Number.isFinite(state.zoom)) state.zoom = 1;
    euler.set(state.pitch, state.yaw, 0, 'YXZ');
    quaternion.setFromEuler(euler);
    inverse.copy(quaternion).invert();
    matrix4.makeRotationFromQuaternion(quaternion);
    matrix3.setFromMatrix4(matrix4);
  }
  rebuild();

  return {
    state,
    quaternion,
    inverse,
    // Sky from camera, for the sky shader.
    matrix: matrix3,
    get dragging() { return state.active; },
    // Advance the fling and the drift home, and rebuild the rotation.
    update(dt) {
      if (!state.active) {
        if (state.vyaw !== 0 || state.vpitch !== 0) {
          const decay = Math.exp(-dt * FLING_DECAY);
          state.vyaw *= decay;
          state.vpitch *= decay;
          state.yaw += state.vyaw * dt;
          state.pitch = clampPitch(state.pitch + state.vpitch * dt);
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
          state.zoom += (1 - state.zoom) * k;
        }
      }
      state.zoom = clampZoom(state.zoom);
      rebuild();
    },
    // Whether the view is away from home, so a hero at rest can skip work.
    get turned() { return Math.abs(state.yaw) > 1e-4 || Math.abs(state.pitch) > 1e-4 || Math.abs(state.zoom - 1) > 1e-4; },
    // Put the view somewhere at once: for tests, and for a permalink.
    set(yaw, pitch = 0, zoom = 1) {
      state.yaw = yaw;
      state.pitch = clampPitch(pitch);
      state.zoom = clampZoom(zoom);
      state.vyaw = 0;
      state.vpitch = 0;
      state.idle = 0;
      rebuild();
      onMove();
    },
    // Jump the view home at once, as a hyperspace jump arrives.
    reset() {
      state.yaw = 0;
      state.pitch = 0;
      state.zoom = 1;
      state.vyaw = 0;
      state.vpitch = 0;
      state.idle = Infinity;
      rebuild();
    },
  };
}
