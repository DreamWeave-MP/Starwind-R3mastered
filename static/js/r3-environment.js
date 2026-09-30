// The backdrop as weather, for r3-hero.js: what the sky is doing reaches the ships. A star flares and
// knocks every shield down for a few seconds, the fighters scattering; a black hole bends laser
// bolts and fighters' paths toward itself; a binary's two stars take turns lighting the hulls, each
// in its own colour; a quasar's jet precesses across the sky and the ships in its way turn for
// hyperspace one by one; and over a world, the ships' light reddens and fails as the sun grazes the
// limb, or a moon crosses it.
//
// The ships get their own copy of the sun, so the sky keeps the light it draws by while the hulls
// take the weather. Everything here is state and a few uniforms: no new geometry, and nothing is
// allocated per frame.
//
// ?env=flare|blackhole|binary|quasar|eclipse forces an effect, and sooner, for screenshots.

import * as THREE from './vendor/three.module.min.js';

const FLARE_KINDS = ['star', 'system', 'binary', 'dwarf'];
const FLARE_LENGTH = 1.3;
const SHIELDS_DOWN = 5.5;

export function createEnvironment({ sky, composite, sunDir, sunColor, reduceMotion = false }) {
  const jetAxis = new THREE.Vector3(); // [r3:orbit]
  const forced = new URLSearchParams(location.search).get('env');
  // The ships' own sun: where it is and what colour, recomputed each frame from the sky's.
  const shipSun = { value: new THREE.Vector3(0.3, 0.6, -0.7).normalize() };
  const shipColor = new THREE.Color();
  let kit = null;
  let vista = null;
  let placed = null;
  let clock = 0;

  const flare = { next: Infinity, age: Infinity, scatter: 0, source: new THREE.Vector2(), shieldsUntil: 0 };
  const saved = new Map();
  const statuses = new Map();
  const hole = new THREE.Vector3();
  const away = new THREE.Vector3();
  const pull = new THREE.Vector3();
  const screen = new THREE.Vector3();
  const lightA = new THREE.Vector3();
  const lightB = new THREE.Vector3();
  const colourA = new THREE.Color();
  const colourB = new THREE.Color();
  const reddened = new THREE.Color(1.0, 0.5, 0.3);
  const quasar = { roll: 0, jumped: new Set() };
  const holePx = new THREE.Vector2();
  let bendStrength = 0;

  const is = (effect) => forced === effect;
  const wants = (effect, kinds) => is(effect) || (!forced && kinds.includes(vista.kind));

  // A small line under a contact's name, for what the weather is doing to that ship.
  function status(visit, text) {
    let element = statuses.get(visit.contact);
    if (!element) {
      element = document.createElement('span');
      element.className = 'r3-contact__weather'; // [r3:environment] styled in brand.sass
      visit.contact.element.append(element);
      statuses.set(visit.contact, element);
    }
    element.textContent = text || '';
    element.classList.toggle('is-shown', !!text);
  }

  // Css pixels, y down, of a body the backdrop placed in device pixels, y up.
  function css(body, out) {
    const view = kit.view;
    return out.set(body[0] / view.ratio, view.height - body[1] / view.ratio);
  }
  // The direction the hero would light the scene from, for a point of the sky in css pixels.
  function lightFrom(x, y, out) {
    const { width, height } = kit.view;
    return out.set((x - width * 0.62) / height, -(y - height * 0.45) / height, -0.75).normalize();
  }

  // Bolts and fighters in a black hole's pull: toward the hole in its own plane, harder the closer.
  function deflect(shot, dt) {
    if (!bendStrength) return;
    kit.worldAt(holePx.x, holePx.y, shot.position.z, hole);
    pull.subVectors(hole, shot.position);
    const distance = pull.length();
    if (distance < 1e-3) return;
    const strength = (bendStrength * dt) / (distance * distance + 0.6);
    shot.direction.addScaledVector(pull, strength / distance);
    const length = shot.direction.length();
    if (length > 1e-6) shot.direction.divideScalar(length);
  }
  function bend(position) {
    if (bendStrength) {
      kit.worldAt(holePx.x, holePx.y, position.z, hole);
      pull.subVectors(hole, position);
      const distance = pull.length();
      if (distance > 1e-3) position.addScaledVector(pull, Math.min(0.45, (bendStrength * 0.22) / (distance + 1.5)) / distance);
    }
    if (flare.scatter > 0.001) {
      kit.worldAt(flare.source.x, flare.source.y, position.z, hole);
      away.subVectors(position, hole);
      const distance = away.length();
      if (distance > 1e-3) position.addScaledVector(away, (flare.scatter * 1.6) / distance);
    }
  }

  function restoreShields() {
    for (const [visit, shield] of saved) {
      if (visit.state === 'cruising' && visit.shield <= 0) visit.shield = shield;
      status(visit, '');
    }
    saved.clear();
  }

  function startFlare() {
    flare.age = 0;
    flare.next = clock + (is('flare') ? 9 : 26 + Math.random() * 22);
    const light = placed && placed.light ? placed.light : [kit.view.width * 0.7, kit.view.height * 0.3];
    flare.source.set(light[0], light[1]);
  }

  function updateFlare(dt) {
    if (clock >= flare.next && flare.age === Infinity) startFlare();
    let white = 0;
    if (flare.age !== Infinity) {
      flare.age += dt;
      const k = flare.age / FLARE_LENGTH;
      // A fast swell and a slower fade: one pulse, well under three a second.
      white = k < 0.25 ? THREE.MathUtils.smoothstep(k, 0, 0.25) : 1 - THREE.MathUtils.smoothstep(k, 0.25, 1);
      if (flare.age >= FLARE_LENGTH * 0.25 && !flare.hit) {
        flare.hit = true;
        flare.scatter = 1;
        flare.shieldsUntil = clock + SHIELDS_DOWN;
        for (const visit of kit.visits) {
          if (visit.state !== 'cruising' || visit.shield <= 0) continue;
          saved.set(visit, visit.shield);
          visit.shield = 0;
          status(visit, 'Shields ▸ down');
        }
      }
      if (flare.age >= FLARE_LENGTH) {
        flare.age = Infinity;
        flare.hit = false;
      }
    }
    flare.scatter = Math.max(0, flare.scatter - dt * 0.55);
    if (saved.size && clock >= flare.shieldsUntil) restoreShields();
    return white;
  }

  return {
    // A new world and fleet: rebind the hulls to the ships' sun and plan this sky's weather.
    onArrive({ kit: fleetKit, vista: arrived }) {
      restoreShields();
      statuses.clear();
      kit = fleetKit;
      vista = arrived;
      placed = null;
      quasar.jumped.clear();
      quasar.roll = 0;
      flare.age = Infinity;
      flare.scatter = 0;
      flare.next = wants('flare', FLARE_KINDS) ? clock + (is('flare') ? 3 : 12 + Math.random() * 14) : Infinity;
      const bind = (material) => {
        material.uniforms.uSunDir = shipSun;
        material.uniforms.uSunColor.value = shipColor;
      };
      for (const ship of kit.capitals) bind(ship.material);
      for (const fighter of kit.fighters) bind(fighter.material);
      kit.env.deflect = deflect;
      kit.env.bend = bend;
      bendStrength = 0;
    },
    // Where the backdrop put its bodies this frame, or null over a world.
    place(bodies) {
      placed = bodies;
    },
    update(dt, jumping) {
      if (!kit) return;
      clock += dt;
      shipSun.value.copy(sunDir.value);
      shipColor.copy(sunColor);
      if (reduceMotion) return;

      // A flare: the scene overexposes for a moment; the hulls take it hardest.
      const white = updateFlare(dt);
      if (!jumping) composite.uWhite.value = white * 0.32;
      shipColor.multiplyScalar(1 + white * 4.5);

      // A black hole: bolts and fighters bend toward it, harder than the sky suggests, so it reads.
      bendStrength = 0;
      if (placed && wants('blackhole', ['blackHole', 'quasar'])) {
        css(placed.a, holePx);
        bendStrength = 2.4;
      }

      // A binary: the stars take turns lighting the hulls as the companion swings round, each in
      // its own colour, so highlights and shadows slide across every ship.
      if (placed && (vista.kind === 'binary' || is('binary')) && placed.b[2] > 0) {
        // [r3:orbit] Toward each star where it stands, when the hero knows.
        if (placed.dirA) lightA.copy(placed.dirA);
        else lightFrom(placed.a[0] / kit.view.ratio, kit.view.height - placed.a[1] / kit.view.ratio, lightA);
        if (placed.dirB) lightB.copy(placed.dirB);
        else lightFrom(placed.b[0] / kit.view.ratio, kit.view.height - placed.b[1] / kit.view.ratio, lightB);
        const turn = 0.5 + 0.5 * Math.sin(clock * 0.45 + placed.a[3]);
        const w = turn * turn * (3 - 2 * turn);
        shipSun.value.copy(lightA).lerp(lightB, w);
        if (shipSun.value.lengthSq() > 1e-6) shipSun.value.normalize();
        else shipSun.value.copy(lightA);
        colourA.setRGB(...placed.colourA);
        colourB.setRGB(...placed.colourB);
        const strongest = Math.max(colourA.r, colourA.g, colourA.b, colourB.r, colourB.g, colourB.b, 1e-3);
        shipColor.copy(colourA).lerp(colourB, w).multiplyScalar(1.6 / strongest);
      }

      // A quasar: the disc precesses, so the jet sweeps the sky; ships it crosses turn and jump.
      if (placed && (vista.kind === 'quasar' || is('quasar'))) {
        quasar.roll = 0.75 * Math.sin(clock * 0.16 + placed.a[3]);
        sky.uVistaParams.value.y = placed.params[1] + quasar.roll;
        const tilt = placed.params[0];
        const roll = sky.uVistaParams.value.y;
        let ax = Math.sin(roll);
        let ay = Math.sin(tilt) * Math.cos(roll);
        // [r3:orbit] The axis as it shows from where the view has turned, when the hero says.
        if (placed.turn) {
          jetAxis.set(ax, ay, Math.cos(tilt)).normalize().applyQuaternion(placed.turn);
          ax = jetAxis.x;
          ay = jetAxis.y;
        }
        const axisLength = Math.hypot(ax, ay) || 1;
        const radius = placed.a[2] / kit.view.ratio;
        css(placed.a, holePx);
        let order = 0;
        for (const visit of kit.visits) {
          if (visit.state !== 'cruising' || quasar.jumped.has(visit)) continue;
          kit.screenOf(visit.position, screen);
          const dx = (screen.x - holePx.x) / radius;
          const dy = -(screen.y - holePx.y) / radius;
          const along = Math.abs((dx * ax + dy * ay) / axisLength);
          const across = Math.abs((-dx * ay + dy * ax) / axisLength);
          if (along > 1.5 && across < 0.9 + along * 0.06) {
            quasar.jumped.add(visit);
            visit.cruise = Math.min(visit.cruise, visit.age + 0.7 + order * 0.6);
            status(visit, 'Jet ▸ jumping clear');
            order += 1;
          }
        }
        // The jet's light on the hulls as it passes nearest.
        shipColor.lerp(colourA.setRGB(0.8, 0.9, 1.6), 0.15 + 0.1 * Math.sin(clock * 3.0));
      }

      // Over a world: the ships' sun grazes the limb (and reddens through the air), or a moon
      // crosses it and the light fails.
      if (!placed && (vista.kind === 'planet' || is('eclipse'))) {
        const sunPx = composite.uSunPx.value;
        const disc = composite.uPlanetPx.value;
        const elevation = (Math.hypot(sunPx.x - disc.x, sunPx.y - disc.y) - disc.z) / Math.max(disc.z, 1);
        let graze = 1 - THREE.MathUtils.smoothstep(elevation, 0.004, 0.02);
        let shade = 0;
        for (const moon of sky.uMoonPxA ? [sky.uMoonPxA.value, sky.uMoonPxB.value] : [sky.uMoonA.value, sky.uMoonB.value]) { // [r3:orbit] where they show
          if (moon.z <= 0) continue;
          const overlap = 1 - THREE.MathUtils.smoothstep(Math.hypot(sunPx.x - moon.x, sunPx.y - moon.y), moon.z * 0.4, moon.z * 1.3);
          shade = Math.max(shade, overlap);
        }
        if (is('eclipse')) {
          graze = Math.max(graze, 0.5 + 0.5 * Math.sin(clock * 0.5));
          shade = Math.max(shade, 0.5 + 0.5 * Math.sin(clock * 0.5 + 1.2));
        }
        shipColor.lerp(reddened.setRGB(shipColor.r * 1.0, shipColor.g * 0.5, shipColor.b * 0.3), graze * 0.8);
        shipColor.multiplyScalar(1 - 0.35 * graze - 0.75 * shade);
      }
    },
  };
}
