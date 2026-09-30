// The Starwind jewel is the visitor's ship, though nothing says so.
//
// Left alone it drifts and bounces as it always has. Press it and drag, and it flies where it is
// steered, with some inertia, banking into turns and lighting its engine; let go and it coasts, then
// takes up its drift again along the way it was last flying. The sky notices it: a capital ship's
// brackets now and then acknowledge it as it passes, a fighter buzzes it and waggles its wings, a
// friendly pair forms up on it for a few seconds, and rarely a hostile fighter takes a shot at it,
// which splashes on a shield that shows only then. In hyperspace it leads: it moves to the tunnel's
// vanishing point and holds there, and after arrival it goes back to where it was. There is no health,
// no death and no display: only enough answer that someone who has played with it a while realises
// the mark is them.
//
// r3-hero.js owns the jewel's mesh, its lean toward the pointer and its drift; this module moves it
// while it is flown (fly()), takes presses on it (press()), draws the engine, trail and shield, and
// hooks the fleet (kit.escort) to bend fighter passes toward it.

import * as THREE from './vendor/three.module.min.js';

const HOSTILE = new Set(['empire', 'separatists', 'firstOrder', 'sith']);
const DRIFT_SPEED = 34;
const TRAIL_SAMPLES = 64;

const GLOW_VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
// The engine: a hot core and a soft bloom-feeding halo, brighter the harder the ship is pushed.
const GLOW_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  uniform float uPower;
  varying vec2 vUv;
  void main() {
    vec2 d = vUv * 2.0 - 1.0;
    float r2 = dot(d, d);
    float core = exp(-r2 * 26.0);
    float halo = exp(-r2 * 4.5) * 0.35;
    vec3 c = uColor * (halo + core * 2.4) * uPower + vec3(1.0) * core * uPower * 0.8;
    gl_FragColor = vec4(max(c, vec3(0.0)), 1.0);
  }
`;

const SHIELD_VERTEX = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vLocal;
  void main() {
    vLocal = normalize(position);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vNormal = normalize(mat3(modelMatrix) * normal);
    vView = cameraPosition - world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;
// A deflector shield: a faint fresnel shell with a hot spot where the shot struck and rings running
// out from it, all fading together.
const SHIELD_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  uniform vec3 uHit;
  uniform float uFlare;
  uniform float uAge;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vLocal;
  void main() {
    float viewLength = length(vView);
    vec3 v = viewLength > 1e-5 ? vView / viewLength : vec3(0.0, 0.0, 1.0);
    float facing = clamp(abs(dot(normalize(vNormal), v)), 0.0, 1.0);
    float rim = pow(1.0 - facing, 3.0);
    float toward = clamp(dot(vLocal, uHit), -1.0, 1.0);
    float spot = pow(max(toward, 0.0), 10.0);
    float angle = acos(toward);
    float rings = max(0.0, sin(angle * 14.0 - uAge * 22.0)) * exp(-angle * 1.4) * (1.0 - clamp(uAge / 0.7, 0.0, 1.0));
    float strength = (rim * 0.55 + spot * 1.6 + rings * 0.8) * uFlare;
    gl_FragColor = vec4(max(uColor * strength + vec3(0.6) * spot * spot * uFlare, vec3(0.0)), 1.0);
  }
`;

export function createPilot({ hero, stage = hero, scene, camera, getFleet, jewelPx, starVelocity, reduceMotion, overText, overJewel, hyperCenter, jumping, onClick, requestFrame, accent }) {
  const color = accent ? accent.clone() : new THREE.Color(0.5, 0.9, 1.0);

  // What the jewel does now: drifting (the hero's own bounce), held (steered), coasting after a
  // release, or leading a jump and then going home.
  let mode = 'drift';
  const velocity = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  const held = { id: -1, startX: 0, startY: 0, dragging: false };
  const home = { x: 0, y: 0, saved: false };
  let bank = 0;
  let speedEase = 0;
  let heldAt = 0;
  const bounds = { width: 1, height: 1 };

  // The engine and shield live in the scene the jewel does, made once.
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
    vertexShader: GLOW_VERTEX,
    fragmentShader: GLOW_FRAGMENT,
    uniforms: { uColor: { value: color }, uPower: { value: 0 } },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  glow.frustumCulled = false;
  glow.visible = false;
  scene.add(glow);
  const shieldUniforms = { uColor: { value: color.clone().lerp(new THREE.Color(1, 1, 1), 0.2) }, uHit: { value: new THREE.Vector3(1, 0, 0) }, uFlare: { value: 0 }, uAge: { value: 1 } };
  const shield = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 3), new THREE.ShaderMaterial({
    vertexShader: SHIELD_VERTEX,
    fragmentShader: SHIELD_FRAGMENT,
    uniforms: shieldUniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  shield.frustumCulled = false;
  shield.visible = false;
  scene.add(shield);

  // The fleet changes with every jump; the trail and the escort hook go with it and are made again.
  let kit = null;
  let trail = null;
  const samplePool = Array.from({ length: TRAIL_SAMPLES }, () => ({ point: new THREE.Vector3(), at: -Infinity }));
  let sampleNext = 0;
  const jewelWorld = new THREE.Vector3();
  const rear = new THREE.Vector3();
  const scratch = new THREE.Vector3();
  const toJewel = new THREE.Vector3();
  const pending = [];
  let jewelScale = 1;

  // What the fighters are up to with the jewel: one buzzing it, a pair formed up on it, or a hostile
  // lining up a shot. Only one at a time, and not often.
  const escort = { kind: null, flight: null, fighter: null, start: 0, until: 0, next: 12, shots: 0, shotAt: 0, forced: null };
  const acknowledged = new Map();
  let nextHail = 6;

  function attach(nextKit) {
    kit = nextKit;
    trail = kit.makeTrail(color.clone().multiplyScalar(1.4));
    trail.samples.length = 0;
    for (const sample of samplePool) sample.at = -Infinity;
    sampleNext = 0;
    escort.kind = null;
    escort.next = kit.now() + 10 + Math.random() * 8;
    acknowledged.clear();
    nextHail = kit.now() + 5;
    if (kit.escort) kit.escort(bendPass);
  }

  // Presses: a press on the jewel is the pilot's. A click (no drag) still calls the fleet; a drag
  // steers. Everything else is left to the page and the rest of the hero.
  function heroPoint(event) {
    const rect = stage.getBoundingClientRect(); // [r3:stage]
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }
  function press(event, point) {
    if (!overJewel(point)) return false;
    held.id = event.pointerId;
    held.startX = point.x;
    held.startY = point.y;
    held.dragging = false;
    heldAt = performance.now();
    target.x = point.x;
    target.y = point.y;
    try { hero.setPointerCapture(event.pointerId); } catch { /* the pointer may already be gone */ }
    return true;
  }
  hero.addEventListener('pointermove', (event) => {
    if (event.pointerId !== held.id) return;
    const point = heroPoint(event);
    if (!held.dragging && (point.x - held.startX) ** 2 + (point.y - held.startY) ** 2 > 36 && !reduceMotion) {
      held.dragging = true;
      mode = 'held';
      velocity.x = starVelocity.x;
      velocity.y = starVelocity.y;
      hero.style.cursor = 'grabbing';
    }
    target.x = point.x;
    target.y = point.y;
    requestFrame();
  }, { passive: true });
  function release(event) {
    if (event.pointerId !== held.id) return;
    held.id = -1;
    hero.style.cursor = '';
    if (!held.dragging) {
      if (performance.now() - heldAt < 900) onClick();
      return;
    }
    held.dragging = false;
    mode = 'coast';
    requestFrame();
  }
  hero.addEventListener('pointerup', release, { passive: true });
  hero.addEventListener('pointercancel', release, { passive: true });
  // A touch that starts on the jewel steers it instead of scrolling the page; any other touch scrolls.
  hero.addEventListener('touchstart', (event) => {
    if (reduceMotion || event.touches.length !== 1) return;
    const touch = event.touches[0];
    const rect = stage.getBoundingClientRect(); // [r3:stage]
    if (overJewel({ x: touch.clientX - rect.left, y: touch.clientY - rect.top })) event.preventDefault();
  }, { passive: false });

  // Keeps a move of the jewel on the stage: a step that would bring its disc off it is dropped on that
  // axis, so it slides along the stage's edge. [r3:stage]
  function blocked(x, y) {
    const r = jewelPx.radius;
    return overText({ x, y }) || overText({ x: x + r, y }) || overText({ x: x - r, y }) || overText({ x, y: y + r }) || overText({ x, y: y - r });
  }
  function moveBy(dx, dy, margin) {
    const nx = THREE.MathUtils.clamp(jewelPx.x + dx, margin, Math.max(margin, bounds.width - margin));
    const ny = THREE.MathUtils.clamp(jewelPx.y + dy, margin, Math.max(margin, bounds.height - margin));
    if (!blocked(nx, ny)) {
      jewelPx.x = nx;
      jewelPx.y = ny;
    } else if (!blocked(nx, jewelPx.y)) {
      jewelPx.x = nx;
      velocity.y *= -0.3;
    } else if (!blocked(jewelPx.x, ny)) {
      jewelPx.y = ny;
      velocity.x *= -0.3;
    } else {
      velocity.x *= -0.3;
      velocity.y *= -0.3;
    }
  }

  // The flight, in css pixels. Returns whether it moved the jewel this frame (the hero's drift
  // stands down if so).
  function fly(dt, width, height) {
    bounds.width = width;
    bounds.height = height;
    if (reduceMotion) return false;
    const margin = jewelPx.radius * 1.25;
    let ax = 0;
    let ay = 0;
    // On a phone the vanishing point lies over the text, so there the jewel does not lead the jump.
    if (jumping() && width >= 761) {
      // Leading the jump: to the vanishing point, and held there while the tunnel runs.
      if (!home.saved) {
        home.x = jewelPx.x;
        home.y = jewelPx.y;
        home.saved = true;
        held.dragging = false;
        held.id = -1;
      }
      mode = 'hyper';
      const centre = hyperCenter();
      ax = (centre.x - jewelPx.x) * 22 - velocity.x * 8;
      ay = (centre.y - jewelPx.y) * 22 - velocity.y * 8;
    } else if (home.saved) {
      // Home again after arrival, then the drift takes over.
      mode = 'return';
      ax = (home.x - jewelPx.x) * 9 - velocity.x * 5.5;
      ay = (home.y - jewelPx.y) * 9 - velocity.y * 5.5;
      if ((home.x - jewelPx.x) ** 2 + (home.y - jewelPx.y) ** 2 < 4 && velocity.x ** 2 + velocity.y ** 2 < 400) {
        home.saved = false;
        mode = 'drift';
      }
    } else if (mode === 'held') {
      // A spring to the finger or pointer, stiff enough to follow and soft enough to swing.
      ax = (target.x - jewelPx.x) * 60 - velocity.x * 13;
      ay = (target.y - jewelPx.y) * 60 - velocity.y * 13;
    } else if (mode === 'coast') {
      const drag = Math.exp(-dt * 1.4);
      velocity.x *= drag;
      velocity.y *= drag;
      const speed = Math.hypot(velocity.x, velocity.y);
      if (speed < DRIFT_SPEED * 1.4) {
        // The drift again, along the way it was going.
        if (speed > 1) {
          starVelocity.x = (velocity.x / speed) * DRIFT_SPEED;
          starVelocity.y = (velocity.y / speed) * DRIFT_SPEED;
        }
        mode = 'drift';
      }
    }
    if (mode === 'drift') {
      velocity.x = starVelocity.x;
      velocity.y = starVelocity.y;
      steer(dt, 0, 0);
      return false;
    }
    velocity.x += ax * dt;
    velocity.y += ay * dt;
    const speed = Math.hypot(velocity.x, velocity.y);
    const top = mode === 'hyper' ? 1400 : 950;
    if (speed > top) {
      velocity.x *= top / speed;
      velocity.y *= top / speed;
    }
    if (mode === 'hyper' || mode === 'return') {
      jewelPx.x += velocity.x * dt;
      jewelPx.y += velocity.y * dt;
    } else {
      moveBy(velocity.x * dt, velocity.y * dt, margin);
      // Walls bounce a coasting ship as they bounce the drift.
      if (mode === 'coast') {
        if (jewelPx.x <= margin || jewelPx.x >= width - margin) velocity.x = -velocity.x * 0.7;
        if (jewelPx.y <= margin || jewelPx.y >= height - margin) velocity.y = -velocity.y * 0.7;
      }
    }
    steer(dt, ax, ay);
    return true;
  }

  // Banking: into the turn, as far as the sideways pull asks, easing back when it straightens.
  const lean = { x: 0, y: 0 };
  function steer(dt, ax, ay) {
    const speed = Math.hypot(velocity.x, velocity.y);
    let pull = 0;
    if (speed > 1) pull = (velocity.x * ay - velocity.y * ax) / speed;
    const wanted = THREE.MathUtils.clamp(-pull / 2600, -0.75, 0.75);
    bank += (wanted - bank) * Math.min(1, dt * 6);
    lean.x += (THREE.MathUtils.clamp(velocity.y / 1400, -0.35, 0.35) - lean.x) * Math.min(1, dt * 5);
    lean.y += (THREE.MathUtils.clamp(velocity.x / 1400, -0.35, 0.35) - lean.y) * Math.min(1, dt * 5);
    const push = THREE.MathUtils.smoothstep(speed, DRIFT_SPEED * 1.2, 520);
    speedEase += (Math.max(push, mode === 'hyper' ? 1 : 0) - speedEase) * Math.min(1, dt * 4);
  }

  // The fighters' side of it (called by r3-ships.js for every fighter it flies, every frame): bend a
  // pass toward the jewel for a buzz or a formation, and let a hostile take its shot.
  const heading = new THREE.Vector3();
  const offset = new THREE.Vector3();
  const flyAt = new THREE.Vector3();
  function bendPass(fighter, position, headingOut, up, flight, index) {
    if (!kit || reduceMotion || jumping() || mode === 'hyper') return;
    const now = kit.now();
    if (!escort.kind && now >= escort.next && index === 0) {
      kit.screenOf(position, scratch);
      if (scratch.x > 0 && scratch.x < bounds.width && scratch.y > 0 && scratch.y < bounds.height) {
        const hostile = HOSTILE.has(fighter.side.key || '');
        const roll = Math.random();
        escort.kind = escort.forced || (hostile ? (roll < 0.55 ? 'shot' : 'buzz') : (roll < 0.5 ? 'formation' : 'buzz'));
        escort.forced = null;
        escort.flight = flight;
        escort.fighter = fighter;
        escort.start = now;
        escort.until = now + (escort.kind === 'formation' ? 4.5 : escort.kind === 'buzz' ? 1.8 : 2.4);
        escort.shots = 0;
        escort.shotAt = now + 0.5;
      } else {
        return;
      }
    }
    if (!escort.kind || escort.flight !== flight) return;
    if (now > escort.until) {
      escort.kind = null;
      escort.flight = null;
      escort.next = now + 16 + Math.random() * 18;
      return;
    }
    const age = now - escort.start;
    const span = escort.until - escort.start;
    const weight = THREE.MathUtils.smoothstep(age, 0, 0.8) * (1 - THREE.MathUtils.smoothstep(age, span - 0.8, span));
    if (escort.kind === 'formation') {
      // A pair falls in on the jewel's wings, heading the way it heads, rocking gently.
      const speed = Math.hypot(velocity.x, velocity.y);
      heading.set(speed > 5 ? velocity.x / speed : 1, speed > 5 ? -velocity.y / speed : 0, -0.15).normalize();
      offset.set(-heading.y, heading.x, 0).multiplyScalar((index ? -1.4 : 1.4) * Math.max(jewelScale, 0.2) * 1.6);
      flyAt.copy(jewelWorld).add(offset).addScaledVector(heading, -1.0 * Math.max(jewelScale, 0.2));
      flyAt.z = 0.6;
      position.lerp(flyAt, weight);
      headingOut.lerp(heading, weight).normalize();
      up.applyAxisAngle(headingOut, Math.sin(now * 2.3 + index) * 0.2 * weight);
    } else if (escort.kind === 'buzz' && index === 0) {
      // One fighter swings close past the jewel and waggles its wings as it goes.
      toJewel.copy(jewelWorld).sub(position);
      const reach = toJewel.length();
      if (reach > 1e-4) position.addScaledVector(toJewel, weight * Math.min(1, 0.85 - 0.6 / Math.max(reach, 0.6)));
      up.applyAxisAngle(headingOut, Math.sin(age * 11) * 0.6 * weight);
    } else if (escort.kind === 'shot' && index === 0) {
      // A hostile turns its nose to the jewel and fires a short burst.
      toJewel.copy(jewelWorld).sub(position);
      const reach = toJewel.length();
      if (reach > 1e-4) {
        headingOut.lerp(scratch.copy(toJewel).divideScalar(reach), weight * 0.8).normalize();
        if (weight > 0.6 && escort.shots < 3 && now >= escort.shotAt) {
          escort.shots += 1;
          escort.shotAt = now + 0.18;
          const from = rear.copy(position).addScaledVector(headingOut, 0.4);
          const aim = scratch.copy(jewelWorld).sub(from);
          const distance = aim.length();
          if (distance > 1e-4) {
            aim.divideScalar(distance);
            const laser = kit.linear(fighter.side.laser || '#ff4a3a');
            kit.bolt(from, aim, { speed: 40, length: 0.45, life: Math.min(1.2, distance / 40), color: laser });
            pending.push({ at: now + distance / 40, x: -aim.x, y: -aim.y, z: -aim.z });
          }
        }
      }
    }
  }

  // Once a frame, after the hero has placed the jewel: the engine, the trail, the shield, and the
  // capital ships' greetings.
  function update(dt, world, scale) {
    const fleet = getFleet();
    if (fleet && fleet.kit !== kit) attach(fleet.kit);
    if (!kit) return;
    jewelScale = scale;
    jewelWorld.copy(world);
    const now = kit.now();
    const speed = Math.hypot(velocity.x, velocity.y);
    const dirX = speed > 1 ? velocity.x / speed : 0;
    const dirY = speed > 1 ? -velocity.y / speed : 0;
    rear.copy(world).set(world.x - dirX * scale * 1.05, world.y - dirY * scale * 1.05, world.z + 0.05);

    // The engine glows as it is pushed, and leaves a faint ion trail.
    const power = reduceMotion ? 0 : speedEase;
    glow.visible = power > 0.02;
    if (glow.visible) {
      glow.position.copy(rear);
      glow.quaternion.copy(camera.quaternion);
      glow.scale.setScalar(scale * (1.1 + power * 1.4));
      glow.material.uniforms.uPower.value = power;
    }
    if (trail && !reduceMotion) {
      while (trail.samples.length && now - trail.samples[0].at > 0.6) trail.samples.shift();
      if (power > 0.05) {
        const sample = samplePool[sampleNext];
        sampleNext = (sampleNext + 1) % TRAIL_SAMPLES;
        if (trail.samples[0] === sample) trail.samples.shift();
        sample.point.copy(rear);
        sample.at = now;
        trail.samples.push(sample);
      }
      kit.drawTrail(trail, 0.55 * Math.max(power, trail.samples.length ? 0.4 : 0));
    }

    // Shots that reach the jewel splash on its shield.
    for (let i = pending.length - 1; i >= 0; i--) {
      if (now < pending[i].at) continue;
      const hit = pending.splice(i, 1)[0];
      shieldUniforms.uHit.value.set(hit.x, hit.y, hit.z).normalize();
      shieldUniforms.uFlare.value = 1;
      shieldUniforms.uAge.value = 0;
      kit.emit(scratch.copy(world).addScaledVector(shieldUniforms.uHit.value, scale * 1.35), 6, 1, [0.4, 1.2], [0.01, 0.02], [0.2, 0.45], shieldUniforms.uHit.value, 0.8);
    }
    shieldUniforms.uAge.value += dt;
    shieldUniforms.uFlare.value = Math.max(0, shieldUniforms.uFlare.value - dt * 1.6);
    shield.visible = shieldUniforms.uFlare.value > 0.01;
    if (shield.visible) {
      shield.position.copy(world);
      shield.scale.setScalar(scale * 1.45);
    }

    // A capital ship the jewel flies near now and then acknowledges it on its brackets.
    if (!reduceMotion && now >= nextHail) {
      for (const visit of kit.visits) {
        if (visit.state !== 'cruising' || !visit.rect || !visit.contact) continue;
        const r = visit.rect;
        const near = jewelPx.x > r.left - 80 && jewelPx.x < r.right + 80 && jewelPx.y > r.top - 80 && jewelPx.y < r.bottom + 80;
        if (!near || (acknowledged.get(visit) || -Infinity) > now - 25) continue;
        acknowledged.set(visit, now);
        hail(visit.contact, HOSTILE.has(visit.ship?.side?.key || ''));
        nextHail = now + 8;
        break;
      }
    }
  }

  function hail(contact, hostile) {
    let tag = contact.element.querySelector('.r3-contact__hail');
    if (!tag) {
      tag = document.createElement('span');
      tag.className = 'r3-contact__hail';
      contact.element.append(tag);
    }
    tag.textContent = hostile ? 'IFF ▸ Starwind · tracking' : 'IFF ▸ Starwind · acknowledged';
    contact.element.classList.remove('is-hailing');
    void contact.element.offsetWidth;
    contact.element.classList.add('is-hailing');
    setTimeout(() => contact.element.classList.remove('is-hailing'), 2600);
  }

  const api = {
    press,
    fly,
    update,
    // For tests and screenshots: where the jewel is, and a way to have the fighters' next pass
    // bring on a particular encounter at once.
    jewel: () => ({ x: jewelPx.x, y: jewelPx.y, radius: jewelPx.radius }),
    force(kind) {
      escort.next = 0;
      escort.forced = kind;
    },
    // The jewel's roll into its turns, and its lean along its flight, added to the hero's own.
    get bank() { return bank; },
    get lean() { return lean; },
    get flying() { return mode !== 'drift'; },
    dispose() {
      scene.remove(glow);
      scene.remove(shield);
      glow.geometry.dispose();
      glow.material.dispose();
      shield.geometry.dispose();
      shield.material.dispose();
    },
  };
  hero.r3Pilot = api;
  return api;
}
