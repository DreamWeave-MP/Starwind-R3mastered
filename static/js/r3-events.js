// Rare encounters over whatever world the hero is at: the director. It builds only from the kit the
// fleet hands out (its ship material, fire, flashes, bolts and contact brackets) and from the
// shipyard's hulls, so an encounter looks like the rest of the scene. The fleet owns ordinary traffic
// and the hero owns astronomy and jumps; this commits the crimes in between.
//
// Every so often, while nothing else is happening, an eligible event is drawn by weight: a distress
// call, a convoy ambushed, a disabled capital venting air and launching pods, a new cruiser leaving
// a shipyard, a bounty on the run, a probe droid, a derelict tumbling past. ?event=<id> forces one a
// few seconds after arrival, for screenshots. Ships the fleet loses leave wreckage that drifts until
// the next jump, and now and then a salvage tug comes for the biggest piece.

import * as THREE from './vendor/three.module.min.js';
import { buildCapital, buildFighter, merge, FACTIONS } from './r3-shipyard.js';
import { ebonHawk } from './r3-shipyard-lore.js'; // [r3:lore]

// Across jumps: the last events run, so none comes back twice running, and when one last ended.
const session = { recent: [], lastEnded: -Infinity, arrivals: 0 };

const CIVILIAN = { key: 'civilian', name: 'Civilian', hull: '#b3a58c', paint: '#c7902e', engine: '#ffb070', laser: '#ffd27a' };
// [r3:lore] The Ebon Hawk's own colours: white, the prongs in red. Its turrets' bolts are not
// described; orange keeps them apart from the Sith fighters' red.
const HAWK = { key: 'hawk', name: 'Ebon Hawk', hull: '#d8d4ca', paint: '#a52a1e', engine: '#9fd8ff', laser: '#ff8a3a' };
// Where the Ebon Hawk flew in Knights of the Old Republic and its sequel.
const HAWK_WORLDS = new Set(['Taris', 'Dantooine', 'Tatooine', 'Kashyyyk', 'Manaan', 'Korriban', 'Nar Shaddaa', 'Onderon', 'Malachor V']);
const PIRATE = { key: 'pirates', name: 'Unregistered', hull: '#6b5a4a', paint: '#8a3a1a', engine: '#ff8a4a', laser: '#ff7a2a' };
const FREIGHTER_NAMES = ['Moldy Crow', 'Stellar Envoy', 'Wild Karrde', "Mynock's Luck", 'Ghtroc Wanderer', 'Kuat Runner', 'Bantha Drift', 'Corellian Promise'];
const BOUNTIES = ['Dengar Vosk', 'Tessek Mul', 'Rhen Var-Oto', 'Garm Tebb', 'Sise Fromm Jr.', 'Kaar Delvin', 'Oppo Rancisis Jr.', 'Nym Kasdan'];

// Smoke and venting air: dull, soft puffs drawn over the scene with ordinary blending, where the
// kit's particles are fire and add light. Kinds: 0 smoke, 1 venting air, 2 steam.
const HAZE_VERTEX = /* glsl */ `
  attribute vec3 aVelocity;
  attribute vec4 aLife;
  uniform float uNow;
  uniform float uScale;
  uniform float uMaxSize;
  varying float vAge;
  varying float vKind;
  varying float vDepth;
  void main() {
    float t = uNow - aLife.x;
    float age = t / max(aLife.y, 1e-3);
    vAge = age;
    vKind = aLife.w;
    if (age < 0.0 || age > 1.0) {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = 0.0;
      return;
    }
    vec3 p = position + aVelocity * t * (1.0 - 0.45 * age);
    vec4 view = modelViewMatrix * vec4(p, 1.0);
    vDepth = -view.z;
    gl_Position = projectionMatrix * view;
    float grow = 0.35 + 1.9 * sqrt(age);
    gl_PointSize = min(aLife.z * grow * uScale / max(-view.z, 0.1), uMaxSize);
  }
`;
const HAZE_FRAGMENT = /* glsl */ `
  uniform vec3 uPlanetDisc;
  uniform vec2 uPlanetDepth;
  varying float vAge;
  varying float vKind;
  varying float vDepth;
  void main() {
    float d = length(gl_FragCoord.xy - uPlanetDisc.xy) / max(uPlanetDisc.z, 1.0);
    if (d < 1.0 && vDepth > uPlanetDepth.x - uPlanetDepth.y * sqrt(1.0 - d * d)) discard;
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    float soft = (1.0 - smoothstep(0.25, 1.0, r));
    float life = smoothstep(0.0, 0.12, vAge) * (1.0 - smoothstep(0.55, 1.0, vAge));
    vec3 col;
    float alpha;
    if (vKind < 0.5) {
      col = mix(vec3(0.16, 0.15, 0.14), vec3(0.09, 0.09, 0.1), vAge);
      alpha = 0.55 * soft * life;
    } else if (vKind < 1.5) {
      col = vec3(0.78, 0.86, 0.95);
      alpha = 0.32 * soft * life;
    } else {
      col = vec3(0.92, 0.94, 0.96);
      alpha = 0.22 * soft * life;
    }
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;

// Lamps: running strobes, beacons and pod engines, as additive points that blink on their own.
const LAMP_VERTEX = /* glsl */ `
  attribute vec3 aColor;
  attribute vec2 aBlink;     // rate in Hz (0 steady), phase
  uniform float uTime;
  uniform float uScale;
  varying vec3 vColor;
  varying float vDepth;
  void main() {
    float on = aBlink.x > 0.0 ? step(0.55, fract(uTime * aBlink.x + aBlink.y)) : 1.0;
    vColor = aColor * on;
    vec4 view = modelViewMatrix * vec4(position, 1.0);
    vDepth = -view.z;
    gl_Position = projectionMatrix * view;
    gl_PointSize = on > 0.0 ? uScale : 0.0;
  }
`;
const LAMP_FRAGMENT = /* glsl */ `
  uniform vec3 uPlanetDisc;
  uniform vec2 uPlanetDepth;
  varying vec3 vColor;
  varying float vDepth;
  void main() {
    float d = length(gl_FragCoord.xy - uPlanetDisc.xy) / max(uPlanetDisc.z, 1.0);
    if (d < 1.0 && vDepth > uPlanetDepth.x - uPlanetDepth.y * sqrt(1.0 - d * d)) discard;
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * (1.0 - smoothstep(0.0, 1.0, r)), 1.0);
  }
`;

const at = (x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) => new THREE.Matrix4().compose(
  new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));

// Small craft of our own, one unit long, nose toward +z, in the shipyard's part kinds
// (0 hull, 1 fittings, 2 engine, 3 superstructure with windows, 6 painted).
function freighterGeometry() {
  const parts = [];
  parts.push({ geometry: new THREE.BoxGeometry(0.22, 0.16, 0.72), matrix: at(0, 0, 0), kind: 0 });
  parts.push({ geometry: new THREE.CylinderGeometry(0.1, 0.12, 0.22, 10), matrix: at(0, 0.02, 0.44, Math.PI / 2), kind: 3 });
  for (const x of [-0.19, 0.19]) {
    parts.push({ geometry: new THREE.BoxGeometry(0.12, 0.12, 0.46), matrix: at(x, -0.02, -0.02), kind: 6 });
    parts.push({ geometry: new THREE.CylinderGeometry(0.045, 0.05, 0.1, 10), matrix: at(x, -0.02, -0.3, Math.PI / 2), kind: 2 });
  }
  parts.push({ geometry: new THREE.BoxGeometry(0.06, 0.12, 0.2), matrix: at(0, 0.13, -0.18), kind: 1 });
  parts.push({ geometry: new THREE.CylinderGeometry(0.07, 0.08, 0.06, 12), matrix: at(0, 0, -0.39, Math.PI / 2), kind: 2 });
  return merge(parts);
}
function probeGeometry() {
  const parts = [];
  parts.push({ geometry: new THREE.IcosahedronGeometry(0.2, 1), matrix: at(0, 0.1, 0), kind: 0 });
  parts.push({ geometry: new THREE.SphereGeometry(0.05, 10, 8), matrix: at(0, 0.1, 0.19), kind: 2 });
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;
    parts.push({ geometry: new THREE.BoxGeometry(0.018, 0.5, 0.018), matrix: at(Math.cos(angle) * 0.1, -0.2, Math.sin(angle) * 0.1, Math.sin(angle) * 0.25, 0, -Math.cos(angle) * 0.25), kind: 1 });
  }
  parts.push({ geometry: new THREE.BoxGeometry(0.01, 0.28, 0.01), matrix: at(0.06, 0.38, 0), kind: 1 });
  return merge(parts);
}
function podGeometry() {
  return merge([
    { geometry: new THREE.CylinderGeometry(0.16, 0.2, 0.7, 10), matrix: at(0, 0, 0, Math.PI / 2), kind: 0 },
    { geometry: new THREE.CylinderGeometry(0.1, 0.12, 0.08, 10), matrix: at(0, 0, -0.38, Math.PI / 2), kind: 2 },
  ]);
}
function tugGeometry() {
  const parts = [];
  parts.push({ geometry: new THREE.BoxGeometry(0.3, 0.2, 0.5), matrix: at(0, 0, -0.1), kind: 6 });
  parts.push({ geometry: new THREE.BoxGeometry(0.16, 0.12, 0.2), matrix: at(0, 0.14, -0.05), kind: 3 });
  for (const x of [-0.14, 0.14]) parts.push({ geometry: new THREE.BoxGeometry(0.05, 0.05, 0.42), matrix: at(x, -0.04, 0.3), kind: 1 });
  for (const x of [-0.1, 0.1]) parts.push({ geometry: new THREE.CylinderGeometry(0.06, 0.07, 0.08, 10), matrix: at(x, 0, -0.39, Math.PI / 2), kind: 2 });
  return merge(parts);
}
// A torn piece of hull: an icosahedron pulled out of shape, plating and a band of windows.
function chunkGeometry(seed) {
  const base = new THREE.IcosahedronGeometry(0.5, 0).toNonIndexed();
  const position = base.getAttribute('position');
  let s = seed * 9301 + 49297;
  const next = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const moved = new Map();
  for (let i = 0; i < position.count; i++) {
    const key = `${position.getX(i).toFixed(3)},${position.getY(i).toFixed(3)},${position.getZ(i).toFixed(3)}`;
    if (!moved.has(key)) moved.set(key, [0.55 + next() * 0.8, 0.4 + next() * 0.7, 0.7 + next() * 1.1]);
    const [a, b, c] = moved.get(key);
    position.setXYZ(i, position.getX(i) * a, position.getY(i) * b, position.getZ(i) * c);
  }
  base.computeVertexNormals();
  return merge([
    { geometry: base, kind: 0 },
    { geometry: new THREE.BoxGeometry(0.5, 0.08, 0.6), matrix: at(0.05, 0.12, 0.05, 0.3, 0.2, 0.1), kind: 3 },
  ]);
}

function extremesOf(geometry) {
  geometry.computeBoundingBox();
  const { min, max } = geometry.boundingBox;
  const out = [];
  for (const x of [min.x, max.x]) for (const y of [min.y, max.y]) for (const z of [min.z, max.z]) out.push(new THREE.Vector3(x, y, z));
  return out;
}

function randomAxis(random) {
  const out = new THREE.Vector3();
  do out.set(random() * 2 - 1, random() * 2 - 1, random() * 2 - 1); while (out.lengthSq() < 0.05);
  return out.normalize();
}

function orient(object, forward, up) {
  const z = forward.clone();
  if (z.lengthSq() < 1e-8) return;
  z.normalize();
  let y = up.clone().addScaledVector(z, -up.dot(z));
  if (y.lengthSq() < 1e-6) y = new THREE.Vector3(0, 0, 1).addScaledVector(z, -z.z);
  y.normalize();
  const x = new THREE.Vector3().crossVectors(y, z).normalize();
  object.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z));
}

export function createDirector({ kit, fleet = null, memory = null, random = kit.random }) {
  const {
    scene, camera, view, time, reduceMotion, planetUniforms, linear, own, shipMaterial, makeContact, frame,
    makeTrail, drawTrail, emit, blast, shockwave, flashAt, bolt, worldAt, screenOf, perPixelAt, now, onDestroyed, scenario, sides,
  } = kit;
  const query = new URLSearchParams(location.search);
  const forced = query.get('event');
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  session.arrivals += 1;

  // Pools ---------------------------------------------------------------------------------------
  const HAZE = 900;
  const hazeGeometry = new THREE.BufferGeometry();
  hazeGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(HAZE * 3), 3));
  hazeGeometry.setAttribute('aVelocity', new THREE.BufferAttribute(new Float32Array(HAZE * 3), 3));
  hazeGeometry.setAttribute('aLife', new THREE.BufferAttribute(new Float32Array(HAZE * 4).fill(-1000), 4));
  const hazeUniforms = { uNow: { value: 0 }, uScale: { value: 1 }, uMaxSize: { value: 64 }, ...planetUniforms };
  const haze = new THREE.Points(hazeGeometry, new THREE.ShaderMaterial({
    vertexShader: HAZE_VERTEX, fragmentShader: HAZE_FRAGMENT, uniforms: hazeUniforms, transparent: true, depthWrite: false,
  }));
  haze.frustumCulled = false;
  haze.renderOrder = 2;
  own(haze);
  let nextHaze = 0;
  let hazeDirty = false;
  const scratch = new THREE.Vector3();
  function puff(origin, count, kind, [speedLow, speedHigh], [sizeLow, sizeHigh], [lifeLow, lifeHigh], toward = null, spread = 1) {
    const start = hazeGeometry.getAttribute('position');
    const velocity = hazeGeometry.getAttribute('aVelocity');
    const life = hazeGeometry.getAttribute('aLife');
    for (let i = 0; i < count; i++) {
      const index = nextHaze;
      nextHaze = (nextHaze + 1) % HAZE;
      scratch.set(random() * 2 - 1, random() * 2 - 1, random() * 2 - 1);
      if (scratch.lengthSq() < 1e-4) scratch.set(0, 1, 0);
      scratch.normalize();
      if (toward) scratch.multiplyScalar(spread).add(toward).normalize();
      scratch.multiplyScalar(speedLow + (speedHigh - speedLow) * random());
      start.setXYZ(index, origin.x, origin.y, origin.z);
      velocity.setXYZ(index, scratch.x, scratch.y, scratch.z);
      life.setXYZW(index, now(), lifeLow + (lifeHigh - lifeLow) * random(), sizeLow + (sizeHigh - sizeLow) * random(), kind);
    }
    hazeDirty = true;
  }

  const LAMPS = 64;
  const lampGeometry = new THREE.BufferGeometry();
  lampGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(LAMPS * 3).fill(9999), 3));
  lampGeometry.setAttribute('aColor', new THREE.BufferAttribute(new Float32Array(LAMPS * 3), 3));
  lampGeometry.setAttribute('aBlink', new THREE.BufferAttribute(new Float32Array(LAMPS * 2), 2));
  const lampUniforms = { uTime: time, uScale: { value: 7 }, ...planetUniforms };
  const lamps = new THREE.Points(lampGeometry, new THREE.ShaderMaterial({
    vertexShader: LAMP_VERTEX, fragmentShader: LAMP_FRAGMENT, uniforms: lampUniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  lamps.frustumCulled = false;
  own(lamps);
  const freeLamps = Array.from({ length: LAMPS }, (_, i) => i);
  function takeLamp(color, blink = 0, phase = 0) {
    const index = freeLamps.pop();
    if (index === undefined) return -1;
    lampGeometry.getAttribute('aColor').setXYZ(index, color[0], color[1], color[2]);
    lampGeometry.getAttribute('aBlink').setXY(index, blink, phase);
    lampGeometry.getAttribute('aColor').needsUpdate = true;
    lampGeometry.getAttribute('aBlink').needsUpdate = true;
    return index;
  }
  function placeLamp(index, point) {
    if (index < 0) return;
    lampGeometry.getAttribute('position').setXYZ(index, point.x, point.y, point.z);
    lampGeometry.getAttribute('position').needsUpdate = true;
  }
  function freeLamp(index) {
    if (index < 0) return;
    placeLamp(index, scratch.set(9999, 9999, 9999));
    freeLamps.push(index);
  }

  // Designs, built as needed and kept for the visit.
  const designs = new Map();
  function design(key) {
    if (!designs.has(key)) {
      let geometry;
      if (key === 'freighter') geometry = freighterGeometry();
      else if (key === 'probe') geometry = probeGeometry();
      else if (key === 'pod') geometry = podGeometry();
      else if (key === 'tug') geometry = tugGeometry();
      else if (key === 'ebonHawk') geometry = ebonHawk().geometry; // [r3:lore]
      else if (key.startsWith('chunk')) geometry = chunkGeometry(Number(key.slice(5)) + 1);
      else if (key.startsWith('fighter:')) geometry = buildFighter(key.slice(8)).geometry;
      else {
        const built = buildCapital(key.slice(8), random);
        designs.set(key, { geometry: built.geometry, extremes: built.extremes });
        return designs.get(key);
      }
      designs.set(key, { geometry, extremes: extremesOf(geometry) });
    }
    return designs.get(key);
  }

  // Actors ----------------------------------------------------------------------------------------
  const actors = [];
  const localPoint = new THREE.Vector3();
  const screen = new THREE.Vector3();
  const rotation = new THREE.Matrix4();
  const spinQuat = new THREE.Quaternion();
  // A craft in the scene: its hull and material, where it is and how it moves, how it came and
  // how it goes, and a contact if it is tracked.
  function spawn({ key, side, length, position, velocity, heading = null, up = new THREE.Vector3(0, 1, 0), label = null, contactClass = null,
    textured = false, windows = 1, haze: distance = 0, char = 0, tumble = null, hyper = true, hp = 1, shootable = true, think = null }) {
    const { geometry, extremes } = design(key);
    const material = shipMaterial(side, { textured, panels: textured ? 30 : 18, windows, haze: distance });
    if (char > 0) {
      material.uniforms.uHull.value.multiplyScalar(1 - char * 0.75);
      material.uniforms.uPaint.value.multiplyScalar(1 - char * 0.8);
      material.uniforms.uEngine.value.multiplyScalar(0);
    }
    const mesh = new THREE.Mesh(geometry, material);
    mesh.frustumCulled = false;
    const group = new THREE.Group();
    group.add(mesh);
    own(group);
    group.position.copy(position);
    group.scale.setScalar(length);
    orient(group, heading || velocity.clone().add(new THREE.Vector3(0, 0, 0.001)), up);
    let contact = null;
    if (label) {
      contact = makeContact();
      contact.label.textContent = label;
      if (contactClass) contact.element.classList.add(contactClass);
    }
    const actor = {
      key, side, length, group, material, extremes, contact, velocity: velocity.clone(), tumble,
      state: hyper && !reduceMotion ? 'arriving' : 'present', age: 0, hp, shootable, think, rect: null, dead: false, gone: false, boost: 0, data: {},
    };
    material.uniforms.uFade.value = actor.state === 'present' ? 1 : 0;
    actors.push(actor);
    return actor;
  }

  // Leaves by hyperspace, as the fleet's ships do.
  function depart(actor) {
    if (actor.state === 'leaving' || actor.dead) return;
    actor.state = 'leaving';
    actor.age = 0;
    if (reduceMotion) return;
    localPoint.copy(actor.group.position);
    if (actor.velocity.lengthSq() > 1e-8) localPoint.addScaledVector(scratch.copy(actor.velocity).normalize(), actor.length * 0.5);
    flashAt(localPoint, 0.7, 0.5);
  }
  function remove(actor) {
    actor.gone = true;
    actor.group.visible = false;
    if (actor.contact) actor.contact.element.classList.remove('is-locked', 'is-lost');
    if (actor.data.lamps) for (const lamp of actor.data.lamps) freeLamp(lamp);
    actor.data.lamps = null;
  }
  // Destroyed: a blast sized to it, and for anything big, wreckage.
  function destroy(actor, { big = actor.length > 1.2 } = {}) {
    if (actor.dead) return;
    actor.dead = true;
    const position = actor.group.position;
    if (!reduceMotion) {
      blast(position, actor.length, big ? 3.5 : 1.2);
      flashAt(position, big ? 1.2 : 0.7, big ? 1.2 : 0.5);
      kit.shake(big ? 0.8 : 0.3);
      if (big) shockwave(position, actor.group.quaternion, actor.length * 1.6);
    }
    if (actor.contact) {
      actor.contact.label.textContent = `Contact lost ▸ ${actor.contact.label.textContent.split(' ▸ ').pop()}`;
      actor.contact.element.classList.add('is-lost');
    }
    if (big || actor.length > 0.7) wreckage({ position: position.clone(), length: actor.length, quaternion: actor.group.quaternion.clone(), velocity: actor.velocity.clone(), side: actor.side });
    actor.group.visible = false;
    actor.data.lostUntil = now() + 1.6;
    if (actor.data.lamps) for (const lamp of actor.data.lamps) freeLamp(lamp);
    actor.data.lamps = null;
  }

  function updateActor(actor, dt) {
    if (actor.gone) return;
    if (actor.dead) {
      if (actor.contact && now() < actor.data.lostUntil) {
        frame(actor.contact, actor.group, actor.extremes, 1);
        actor.contact.element.classList.add('is-lost');
      } else {
        remove(actor);
      }
      return;
    }
    actor.age += dt;
    const uniforms = actor.material.uniforms;
    let stretch = 1;
    let anchor = 0;
    let warp = 0;
    let fade = 1;
    if (actor.think) actor.think(actor, dt);
    if (actor.gone) return;
    const travel = uniforms.uStretchAxis.value;
    if (actor.state === 'arriving' || actor.state === 'leaving') {
      travel.copy(actor.velocity);
      if (travel.lengthSq() < 1e-8) travel.set(0, 0, 1);
      travel.normalize().applyQuaternion(spinQuat.copy(actor.group.quaternion).invert());
    }
    if (actor.state === 'arriving') {
      const a = Math.min(1, actor.age / 0.55);
      stretch = 1 + 50 * Math.pow(1 - a, 3);
      anchor = 0.5;
      warp = Math.pow(1 - a, 1.5);
      fade = Math.min(1, a * 6);
      if (a >= 1) {
        flashAt(actor.group.position, 0.9, 0.6);
        actor.state = 'present';
        actor.age = 0;
      }
    } else if (actor.state === 'leaving') {
      const l = Math.min(1, actor.age / 0.4);
      stretch = 1 + 80 * Math.pow(l, 2.4);
      anchor = -0.5;
      warp = Math.min(1, l * 1.6);
      fade = 1 - Math.pow(l, 3);
      actor.boost = 1;
      if (l >= 1) {
        remove(actor);
        if (actor.onEscape) actor.onEscape(actor);
        return;
      }
    }
    if (actor.state !== 'arriving') actor.group.position.addScaledVector(actor.velocity, dt);
    if (actor.tumble) {
      spinQuat.setFromAxisAngle(actor.tumble.axis, actor.tumble.rate * dt);
      actor.group.quaternion.premultiply(spinQuat);
    }
    uniforms.uRotation.value.setFromMatrix4(rotation.makeRotationFromQuaternion(actor.group.quaternion));
    uniforms.uStretch.value = stretch;
    uniforms.uAnchor.value = anchor;
    uniforms.uWarp.value = warp;
    uniforms.uFade.value = actor.data.fadeOut !== undefined ? Math.min(fade, actor.data.fadeOut) : fade;
    uniforms.uBoost.value = actor.boost;
    if (actor.contact && actor.state === 'present' && !actor.dead) {
      actor.rect = frame(actor.contact, actor.group, actor.extremes, actor.age);
    } else if (actor.contact) {
      actor.contact.element.classList.remove('is-locked');
      actor.rect = null;
    }
  }

  // Where in the hero a ship may go: the free sky beside the text, or low on a phone.
  function lane({ depth = -8, size = 200, high = false } = {}) {
    const { width, height, free, narrow } = view;
    // On a narrow hero the text fills it, so encounters keep low over the planet's limb, as the
    // fleet's ships do.
    const start = narrow ? width * 0.42 : Math.max(free + 40, width * 0.48);
    const x0 = start + size * 0.4;
    const x1 = Math.max(x0 + 40, width - 30 - size * 0.4);
    const y = narrow ? height * (0.68 + 0.1 * random()) : height * (high ? 0.14 + 0.12 * random() : 0.22 + 0.3 * random());
    return { x0, x1, y, depth, perPx: perPixelAt(depth) };
  }
  const toWorld = (px, py, depth) => worldAt(px, py, depth, new THREE.Vector3());

  // Wreckage --------------------------------------------------------------------------------------
  const chunks = [];
  const MAX_CHUNKS = 18;
  function wreckage({ position, length, quaternion, velocity, side }) {
    if (reduceMotion) return;
    const count = 3 + Math.floor(random() * 6);
    for (let i = 0; i < count; i++) {
      while (chunks.filter((chunk) => !chunk.gone).length >= MAX_CHUNKS) {
        const oldest = chunks.find((chunk) => !chunk.gone);
        remove(oldest);
      }
      const size = length * (0.1 + 0.18 * random()) * (i === 0 ? 1.8 : 1);
      const offset = new THREE.Vector3(random() - 0.5, (random() - 0.5) * 0.4, random() - 0.5).multiplyScalar(length * 0.5).applyQuaternion(quaternion);
      const outward = (offset.lengthSq() > 1e-8 ? offset.clone().normalize() : randomAxis(random)).multiplyScalar(length * (0.02 + 0.05 * random()));
      const chunk = spawn({
        key: `chunk${Math.floor(random() * 4)}`, side, length: size, position: position.clone().add(offset),
        velocity: velocity.clone().multiplyScalar(0.55).add(outward), heading: randomAxis(random),
        textured: true, windows: 0, char: 0.55, hyper: false, shootable: false,
        tumble: { axis: randomAxis(random), rate: (0.15 + 0.5 * random()) * (random() < 0.5 ? -1 : 1) },
        think: burnChunk,
      });
      chunk.data.nextFire = now() + random() * 0.3;
      chunks.push(chunk);
    }
    lastWreck = now();
    if (random() < 0.45) salvage.at = now() + 7 + random() * 7;
  }
  function burnChunk(chunk) {
    if (now() < chunk.data.nextFire) return;
    chunk.data.nextFire = now() + 0.18 + random() * 0.35;
    chunk.group.updateMatrixWorld(true);
    localPoint.set((random() - 0.5) * 0.6, (random() - 0.5) * 0.4, (random() - 0.5) * 0.6).applyMatrix4(chunk.group.matrixWorld);
    emit(localPoint, 2, 0, [chunk.length * 0.02, chunk.length * 0.08], [chunk.length * 0.05, chunk.length * 0.1], [0.5, 0.9]);
    puff(localPoint, 1, 0, [chunk.length * 0.03, chunk.length * 0.1], [chunk.length * 0.12, chunk.length * 0.22], [1.6, 2.8]);
    if (random() < 0.12) emit(localPoint, 6, 1, [chunk.length * 0.2, chunk.length * 0.6], [chunk.length * 0.005, chunk.length * 0.01], [0.3, 0.6]);
  }
  let lastWreck = -Infinity;
  const salvage = { at: Infinity, tug: null };
  onDestroyed((event) => wreckage(event));

  // A salvage tug drops in, closes on the biggest piece, holds it in a tractor beam and tows it off.
  function updateSalvage() {
    if (now() < salvage.at || salvage.tug || reduceMotion) return;
    salvage.at = Infinity;
    const target = chunks.filter((chunk) => !chunk.gone).sort((a, b) => b.length - a.length)[0];
    if (!target) return;
    const from = target.group.position.clone().add(new THREE.Vector3(view.narrow ? 1.5 : 3.5, 1.2, 1.5));
    const beam = makeTrail(linear('#8fd8ff').multiplyScalar(2.4));
    const tug = spawn({
      key: 'tug', side: CIVILIAN, length: Math.max(0.35, target.length * 0.5), position: from, velocity: target.group.position.clone().sub(from).multiplyScalar(0.25),
      label: 'Salvage ▸ Tug · Ugnaught Guild', contactClass: 'r3-contact--civil',
      think(actor) {
        if (actor.state !== 'present') return;
        if (target.gone) {
          beam.line.geometry.setDrawRange(0, 0);
          depart(actor);
          return;
        }
        const offset = target.group.position.clone().sub(actor.group.position);
        if (!actor.data.latched && offset.length() < target.length * 1.4) {
          actor.data.latched = now();
          actor.velocity.set(-0.25, 0.08, 0);
        } else if (!actor.data.latched) {
          actor.velocity.copy(offset).multiplyScalar(0.45);
        }
        if (actor.data.latched) {
          target.velocity.copy(actor.velocity);
          target.tumble.rate *= 0.98;
          beam.samples.length = 0;
          beam.samples.push({ point: actor.group.position.clone(), at: now() }, { point: target.group.position.clone(), at: now() });
          drawTrail(beam, 0.55 + 0.35 * Math.sin(now() * 21));
          if (now() - actor.data.latched > 6) {
            beam.line.geometry.setDrawRange(0, 0);
            depart(actor);
            target.data.fadeOut = 1;
            target.think = (chunk, dt) => {
              chunk.data.fadeOut = Math.max(0, chunk.data.fadeOut - dt * 2.5);
              if (chunk.data.fadeOut <= 0) remove(chunk);
            };
          }
        }
      },
    });
    salvage.tug = tug;
  }

  // Events ------------------------------------------------------------------------------------------
  const pick = (list) => list[Math.floor(random() * list.length)];
  const fighterOf = (side) => pick(side.fighters || ['xwing']);
  const hostileTo = (side) => sides.find((other) => other !== side) || PIRATE;
  let destroyedThisVisit = 0;
  onDestroyed(() => { destroyedThisVisit += 1; });

  function damaged(actor, level) {
    const at = now();
    if (at < (actor.data.nextSmoke || 0)) return;
    actor.data.nextSmoke = at + 0.12 / level;
    actor.group.updateMatrixWorld(true);
    localPoint.set((random() - 0.5) * 0.3, 0.05, -0.3 + random() * 0.4).applyMatrix4(actor.group.matrixWorld);
    puff(localPoint, 1, 0, [actor.length * 0.02, actor.length * 0.07], [actor.length * 0.14, actor.length * 0.28], [1.4, 2.4]);
    if (random() < 0.08 * level) emit(localPoint, 7, 1, [actor.length * 0.3, actor.length * 0.8], [actor.length * 0.006, actor.length * 0.012], [0.25, 0.5]);
    if (random() < 0.05 * level) emit(localPoint, 3, 0, [actor.length * 0.02, actor.length * 0.06], [actor.length * 0.04, actor.length * 0.08], [0.4, 0.7]);
  }

  const EVENTS = {
    // [r3:lore] The Ebon Hawk runs past with two Sith fighters on its tail, as it ran from Taris,
    // its dorsal turret answering now and then. Rare, and only in Starwind's era or over the
    // worlds it flew to.
    hawk: {
      weight: 0.45,
      eligible: (context) => sides.some((side) => side.key === 'oldRepublic' || side.key === 'sith') || HAWK_WORLDS.has(context.world),
      start() {
        const sith = { key: 'sith', ...FACTIONS.sith };
        const plan = lane({ depth: -7, size: 130 });
        const direction = random() < 0.5 ? -1 : 1;
        const velocity = new THREE.Vector3(direction * (plan.x1 - plan.x0) * plan.perPx / 6.5, 0.02, 0);
        const pursuers = [];
        const hawk = spawn({
          key: 'ebonHawk', side: HAWK, length: (view.narrow ? 70 : 130) * plan.perPx,
          position: toWorld(direction < 0 ? plan.x1 : plan.x0, plan.y, plan.depth), velocity, heading: velocity.clone().setZ(0.2), windows: 0,
          label: 'Ebon Hawk ▸ Dynamic-class freighter · 24 m', contactClass: 'r3-contact--civil', hp: 6,
          think(actor) {
            actor.velocity.y = Math.sin(now() * 2.3) * 0.28 + Math.sin(now() * 5.1) * 0.08;
            orient(actor.group, actor.velocity.clone().setZ(0.2), new THREE.Vector3(Math.sin(now() * 2.3) * 0.5, 1, 0));
            const chaser = pursuers.find((one) => !one.dead && !one.gone && one.state === 'present');
            if (chaser && actor.state === 'present' && now() >= (actor.data.nextShot || 0)) {
              actor.data.nextShot = now() + 0.6 + random() * 0.5;
              const aim = chaser.group.position.clone().sub(actor.group.position);
              const distance = aim.length();
              if (distance > 1e-3) bolt(actor.group.position, aim.divideScalar(distance), { speed: 30, length: 0.3, life: distance / 30, color: linear(HAWK.laser).multiplyScalar(3) });
            }
            if (actor.state === 'present' && actor.age > 7.5) depart(actor);
          },
        });
        for (let i = 0; i < 2; i++) {
          const pursuer = spawn({
            key: 'fighter:sithFighter', side: sith, length: 0.5,
            position: hawk.group.position.clone().add(new THREE.Vector3(-direction * (2.4 + i * 1.1), 0.5 - i * 0.9, 0.8)),
            velocity: velocity.clone(), label: i === 0 ? `${sith.name} ▸ Sith fighters` : null, contactClass: 'r3-contact--hostile', windows: 0,
            think(actor) {
              if (actor.state !== 'present') return;
              if (hawk.dead || hawk.gone) {
                if (actor.age > 3) depart(actor);
                return;
              }
              const aim = hawk.group.position.clone().sub(actor.group.position);
              const distance = aim.length();
              actor.velocity.lerp(aim.clone().normalize().multiplyScalar(velocity.length() * 1.15).add(new THREE.Vector3(0, Math.sin(now() * 3 + i) * 0.35, 0)), 0.05);
              orient(actor.group, actor.velocity, new THREE.Vector3(0, 1, 0));
              if (now() >= (actor.data.nextShot || 0) && distance < 6 && distance > 1e-3) {
                actor.data.nextShot = now() + 0.3 + random() * 0.25;
                bolt(actor.group.position, aim.divideScalar(distance), { speed: 30, length: 0.35, life: distance / 30, color: linear(sith.laser).multiplyScalar(3) });
                if (random() < 0.25) emit(hawk.group.position, 6, 1, [0.2, 0.6], [0.01, 0.02], [0.3, 0.5]);
              }
              if (actor.age > 9) depart(actor);
            },
          });
          pursuer.onKilled = () => memory?.record?.('kill', { faction: 'sith', capital: false });
          pursuers.push(pursuer);
        }
        return { actors: [hawk], extra: pursuers };
      },
    },
    // A freighter drops out of hyperspace smoking, its beacon blinking, two battered fighters with
    // it. Left alone they limp across and jump on; that counts as a rescue.
    distress: {
      weight: 1.2,
      eligible: () => true,
      start() {
        const escortSide = sides[0];
        const size = view.narrow ? 90 : 170;
        const lanePlan = lane({ depth: -7.5, size });
        const direction = random() < 0.5 ? -1 : 1;
        const x = direction < 0 ? lanePlan.x1 : lanePlan.x0;
        const velocity = new THREE.Vector3(direction * (lanePlan.x1 - lanePlan.x0) * lanePlan.perPx * 0.7 / 16, -0.02, 0);
        const name = pick(FREIGHTER_NAMES);
        const freighter = spawn({
          key: 'freighter', side: CIVILIAN, length: size * lanePlan.perPx, position: toWorld(x, lanePlan.y, lanePlan.depth), velocity,
          heading: velocity.clone().setZ(0.3), label: `Distress ▸ ${name} · freighter`, contactClass: 'r3-contact--distress', hp: 3,
          think(actor) {
            damaged(actor, 1.4);
            actor.group.updateMatrixWorld(true);
            placeLamp(actor.data.lamps[0], localPoint.set(0, 0.16, 0.1).applyMatrix4(actor.group.matrixWorld));
            if (actor.state === 'present' && actor.age > 15) depart(actor);
          },
        });
        freighter.data.lamps = [takeLamp([2.4, 0.2, 0.15], 1.6, 0)];
        freighter.onEscape = () => {
          if (escorts.some((escort) => !escort.dead)) memory?.record?.('rescue', { ship: name });
        };
        const escorts = [-1, 1].map((sign) => spawn({
          key: `fighter:${fighterOf(escortSide)}`, side: escortSide, length: 0.5, position: freighter.group.position.clone().add(new THREE.Vector3(-direction * 0.8, sign * 0.55, 0.4)),
          velocity, heading: velocity.clone().setZ(0.2), windows: 0,
          think(actor) {
            damaged(actor, 0.7);
            actor.velocity.y = velocity.y + Math.sin(now() * 1.3 + sign) * 0.05;
            if (freighter.state === 'leaving' || freighter.gone) depart(actor);
          },
        }));
        return { actors: [freighter, ...escorts] };
      },
    },

    // Three freighters in line; then raiders fall on them from behind. Shooting the raiders saves
    // the convoy, and the side it flies for remembers.
    convoy: {
      weight: 1,
      eligible: () => !view.narrow || random() < 0.5,
      start() {
        const owner = sides[0];
        const raiders = scenario.war ? hostileTo(owner) : PIRATE;
        const size = view.narrow ? 70 : 120;
        const plan = lane({ depth: -8.5, size });
        const direction = random() < 0.5 ? -1 : 1;
        const velocity = new THREE.Vector3(direction * (plan.x1 - plan.x0) * plan.perPx / 14, 0.01, 0);
        const convoy = [0, 1, 2].map((i) => spawn({
          key: 'freighter', side: { ...CIVILIAN, paint: owner.paint }, length: size * plan.perPx,
          position: toWorld(direction < 0 ? plan.x1 + i * size * 0.9 : plan.x0 - i * size * 0.9, plan.y + i * 14, plan.depth - i * 0.4), velocity,
          heading: velocity.clone().setZ(0.25), label: i === 0 ? `${owner.name} ▸ convoy of three` : null, contactClass: 'r3-contact--civil', hp: 4,
          think(actor) {
            if (actor.data.hits) damaged(actor, actor.data.hits * 0.5);
            if (actor.state === 'present' && actor.age > 14) depart(actor);
          },
        }));
        convoy[0].data.lamps = [takeLamp([0.3, 1.2, 0.5], 0.8, 0)];
        const kind = raiders === PIRATE ? pick(['trifighter', 'tie']) : fighterOf(raiders);
        const attackers = [];
        const state = { raidAt: now() + 2.5, raided: false, saved: false };
        const director = {
          update() {
            placeLamp(convoy[0].data.lamps?.[0] ?? -1, convoy[0].group.position);
            if (!state.raided && now() >= state.raidAt) {
              state.raided = true;
              for (let i = 0; i < 2; i++) {
                const behind = convoy[1].group.position.clone().add(new THREE.Vector3(-direction * 3.2, 0.6 - i * 1.2, 1.4));
                const attacker = spawn({
                  key: `fighter:${kind}`, side: raiders, length: 0.55, position: behind, velocity: velocity.clone().multiplyScalar(2.2),
                  label: i === 0 ? `${raiders.name} ▸ raiders` : null, contactClass: 'r3-contact--hostile', windows: 0,
                  think(actor) {
                    const target = convoy.find((ship) => !ship.dead && !ship.gone && ship.state === 'present');
                    if (!target || actor.state !== 'present') return;
                    const aim = target.group.position.clone().sub(actor.group.position);
                    const distance = aim.length();
                    actor.velocity.lerp(aim.clone().normalize().multiplyScalar(velocity.length() * 2.4).add(new THREE.Vector3(0, Math.sin(now() * 2 + i) * 0.4, 0)), 0.04);
                    orient(actor.group, actor.velocity, new THREE.Vector3(0, 1, 0));
                    if (now() >= (actor.data.nextShot || 0) && distance < 7) {
                      actor.data.nextShot = now() + 0.35 + random() * 0.3;
                      bolt(actor.group.position, aim.normalize(), { speed: 28, length: 0.35, life: distance / 28, color: linear(raiders.laser).multiplyScalar(3) });
                      actor.data.pending = actor.data.pending || [];
                      actor.data.pending.push({ at: now() + distance / 28, target });
                    }
                    for (const shot of actor.data.pending || []) {
                      if (shot.done || now() < shot.at) continue;
                      shot.done = true;
                      if (shot.target.dead || shot.target.gone) continue;
                      shot.target.data.hits = (shot.target.data.hits || 0) + 1;
                      emit(shot.target.group.position, 8, 1, [0.2, 0.7], [0.01, 0.02], [0.3, 0.6]);
                      if (shot.target.data.hits >= shot.target.hp) destroy(shot.target, { big: false });
                    }
                    if (actor.age > 9) depart(actor);
                  },
                });
                attacker.onKilled = () => {
                  memory?.record?.('kill', { faction: raiders.key, capital: false });
                  if (attackers.every((one) => one.dead)) {
                    state.saved = true;
                    memory?.record?.('helped', { faction: owner.key });
                  }
                };
                attackers.push(attacker);
              }
            }
          },
        };
        return { actors: convoy, extra: attackers, update: director.update };
      },
    },

    // A capital ship adrift, venting air from torn compartments, its crew leaving by pod. It may
    // break up; if it does not, it drifts out of sight.
    venting: {
      weight: 1,
      eligible: (context) => context.destroyed > 0 || scenario.war || random() < 0.35,
      start() {
        const side = pick(sides);
        const [kind, label] = pick(side.capitals);
        const size = view.narrow ? 110 : 280;
        const plan = lane({ depth: -9.5, size });
        const velocity = new THREE.Vector3((random() < 0.5 ? -1 : 1) * 0.05, -0.015, 0);
        const ship = spawn({
          key: `capital:${kind}`, side, length: size * plan.perPx, position: toWorld((plan.x0 + plan.x1) / 2, plan.y + (view.narrow ? 0 : 20), plan.depth), velocity,
          heading: new THREE.Vector3(velocity.x < 0 ? -1 : 1, -0.1, 0.35), up: new THREE.Vector3(0.35, 1, 0.2), textured: true, haze: 0.1, char: 0.15, hyper: false,
          label: `${side.name} ▸ ${label} · disabled`, contactClass: 'r3-contact--derelict', hp: 5,
          tumble: { axis: new THREE.Vector3(0.2, 0.1, 1).normalize(), rate: 0.035 },
          think(actor) {
            const at = now();
            actor.group.updateMatrixWorld(true);
            if (at >= (actor.data.nextVent || 0)) {
              actor.data.nextVent = at + 0.05;
              const vent = actor.data.vents[Math.floor(random() * actor.data.vents.length)];
              localPoint.copy(vent).applyMatrix4(actor.group.matrixWorld);
              const out = vent.clone().normalize().applyQuaternion(actor.group.quaternion);
              puff(localPoint, 2, 1, [actor.length * 0.05, actor.length * 0.14], [actor.length * 0.03, actor.length * 0.07], [1.2, 2.2], out, 0.35);
              if (random() < 0.06) emit(localPoint, 8, 1, [actor.length * 0.05, actor.length * 0.2], [actor.length * 0.002, actor.length * 0.004], [0.3, 0.7]);
              if (random() < 0.03) {
                emit(localPoint, 6, 0, [actor.length * 0.01, actor.length * 0.04], [actor.length * 0.02, actor.length * 0.04], [0.5, 0.9]);
                flashAt(localPoint, 0.2, 0.3);
              }
            }
            if (at >= (actor.data.nextPod || 0) && actor.data.pods < 9 && actor.age > 1.5) {
              actor.data.nextPod = at + 0.5 + random() * 1.1;
              actor.data.pods += 1;
              const start = localPoint.copy(pick(actor.extremes)).multiplyScalar(0.35).applyMatrix4(actor.group.matrixWorld).clone();
              const away = start.clone().sub(actor.group.position).setZ(0.4).normalize().multiplyScalar(0.9 + random() * 0.6);
              const pod = spawn({
                key: 'pod', side, length: 0.16, position: start, velocity: away, windows: 0, hyper: false, shootable: false,
                think(p) {
                  if (!p.data.lamp) p.data.lamp = [takeLamp([2.2, 1.5, 0.6])];
                  p.data.lamps = p.data.lamp;
                  placeLamp(p.data.lamp[0], p.group.position);
                  if (p.age > 3 + random() * 0.05 && p.state === 'present') depart(p);
                },
              });
              pod.onEscape = () => { actor.data.saved += 1; };
            }
            if (actor.age > 18 && !actor.data.ended) {
              actor.data.ended = true;
              if (random() < 0.5) destroy(actor, { big: true });
              else actor.velocity.multiplyScalar(4);
            }
            if (actor.age > 26) remove(actor);
          },
        });
        ship.data.pods = 0;
        ship.data.saved = 0;
        ship.data.vents = [0, 1, 2].map(() => pick(ship.extremes).clone().multiplyScalar(0.55 + 0.25 * random()));
        ship.onKilled = () => memory?.record?.('kill', { faction: side.key, capital: true });
        return { actors: [ship], end: () => { if (ship.data.saved) memory?.record?.('rescue', { pods: ship.data.saved }); } };
      },
    },

    // A new cruiser eases out of the yards, held by two tugs; its engines light, the tugs let go,
    // and it goes to hyperspace for the first time.
    launch: {
      weight: 2.5,
      eligible: (context) => context.vista === 'shipyard',
      start() {
        const side = sides[0];
        const [kind, label] = pick(side.capitals);
        const size = view.narrow ? 120 : 300;
        const plan = lane({ depth: -8, size });
        const velocity = new THREE.Vector3(0.09, 0.012, 0);
        const cruiser = spawn({
          key: `capital:${kind}`, side, length: size * plan.perPx, position: toWorld(plan.x0 - size * 0.2, plan.y + 10, plan.depth), velocity,
          heading: new THREE.Vector3(1, 0.03, 0.35), textured: true, haze: 0.05, hyper: false, label: `${side.name} ▸ new build · ${label}`, contactClass: 'r3-contact--civil', hp: 6,
          think(actor) {
            if (actor.age < 7) {
              actor.boost = 0;
              for (const [i, tug] of tugs.entries()) {
                if (tug.gone) continue;
                tug.velocity.copy(actor.velocity);
                beams[i].samples.length = 0;
                beams[i].samples.push({ point: tug.group.position.clone(), at: now() }, { point: actor.group.position.clone().add(new THREE.Vector3(0, (i ? -1 : 1) * actor.length * 0.18, 0)), at: now() });
                drawTrail(beams[i], 0.6 + 0.3 * Math.sin(now() * 19 + i));
              }
            } else if (!actor.data.lit) {
              actor.data.lit = true;
              for (const [i, tug] of tugs.entries()) {
                beams[i].line.geometry.setDrawRange(0, 0);
                tug.velocity.set(-0.3, (i ? -1 : 1) * 0.4, 0.3);
              }
              flashAt(actor.group.position, 0.5, 0.6);
            } else {
              actor.boost = Math.min(1, actor.boost + 0.01);
              actor.velocity.multiplyScalar(1.012);
              if (actor.age > 11) depart(actor);
            }
          },
        });
        const beams = [0, 1].map(() => makeTrail(linear('#8fd8ff').multiplyScalar(2.2)));
        const tugs = [0, 1].map((i) => spawn({
          key: 'tug', side: CIVILIAN, length: cruiser.length * 0.12, position: cruiser.group.position.clone().add(new THREE.Vector3(cruiser.length * 0.25, (i ? -1 : 1) * cruiser.length * 0.45, 0.4)),
          velocity, heading: new THREE.Vector3(1, 0, 0.3), hyper: false,
          think(actor) {
            if (cruiser.data.lit && actor.age > 9 && actor.state === 'present') depart(actor);
          },
        }));
        cruiser.onKilled = () => memory?.record?.('kill', { faction: side.key, capital: true });
        return { actors: [cruiser, ...tugs] };
      },
    },

    // A wanted pilot drops in, sees the fleet and runs, jinking. Stop them before they jump.
    bounty: {
      weight: 1,
      eligible: () => true,
      start() {
        const name = pick(BOUNTIES);
        const amount = (5 + Math.floor(random() * 45)) * 1000;
        const plan = lane({ depth: -6.5, size: 110 });
        const direction = random() < 0.5 ? -1 : 1;
        const velocity = new THREE.Vector3(direction * (plan.x1 - plan.x0) * plan.perPx / 7.5, 0.03, 0);
        const bountyLabel = `Bounty ▸ ${name} · ${amount.toLocaleString('en-US')} cr`;
        const runner = spawn({
          key: random() < 0.5 ? 'freighter' : `fighter:${pick(['trifighter', 'awing', 'xwing'])}`, side: PIRATE, length: (view.narrow ? 60 : 110) * plan.perPx,
          position: toWorld(direction < 0 ? plan.x1 : plan.x0, plan.y, plan.depth), velocity, heading: velocity.clone().setZ(0.3), windows: 0,
          label: bountyLabel, contactClass: 'r3-contact--bounty',
          think(actor) {
            actor.velocity.y = Math.sin(now() * 3.1) * 0.35 + Math.sin(now() * 7.3) * 0.12;
            orient(actor.group, actor.velocity.clone().setZ(0.3), new THREE.Vector3(Math.sin(now() * 3.1) * 0.6, 1, 0));
            if (actor.state === 'present' && actor.age > 7) {
              actor.contact.label.textContent = `Target escaped ▸ ${name}`;
              depart(actor);
            }
          },
        });
        runner.onKilled = () => {
          runner.contact.label.textContent = `Bounty claimed ▸ ${name} · ${amount.toLocaleString('en-US')} cr`;
          memory?.record?.('bounty', { name, amount });
        };
        return { actors: [runner] };
      },
    },

    // An Imperial probe droid sinks into view, sweeps the sector and, unless shot, jumps out to
    // report what it found.
    probe: {
      weight: 1,
      eligible: () => true,
      start() {
        const plan = lane({ depth: -6, size: 70, high: true });
        const x = plan.x0 + (plan.x1 - plan.x0) * (0.3 + 0.4 * random());
        const probe = spawn({
          key: 'probe', side: FACTIONS.empire ? { key: 'empire', ...FACTIONS.empire } : PIRATE, length: (view.narrow ? 38 : 70) * plan.perPx,
          position: toWorld(x, -40, plan.depth), velocity: new THREE.Vector3(0, -0.12, 0), heading: new THREE.Vector3(0, 0, 1), windows: 0, hyper: false,
          label: 'Unknown ▸ probe droid · Arakyd Viper', contactClass: 'r3-contact--hostile',
          think(actor) {
            const target = toWorld(x, plan.y + 30, plan.depth);
            const dy = target.y - actor.group.position.y;
            actor.velocity.y = THREE.MathUtils.clamp(dy * 0.6, -0.5, 0.5);
            actor.group.rotation.y += 0.004;
            if (actor.age > 3 && now() >= (actor.data.nextScan || 0) && actor.state === 'present') {
              actor.data.nextScan = now() + 2.2;
              shockwave(actor.group.position, new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), 0.35), actor.length * 5, 1.6);
            }
            if (actor.age > 10 && actor.state === 'present') {
              actor.velocity.set(0, 0.5, 0.2);
              depart(actor);
            }
          },
        });
        probe.onKilled = () => memory?.record?.('kill', { faction: 'empire', capital: false, probe: true });
        return { actors: [probe] };
      },
    },

    // After a fight, the dead half of a capital ship tumbles through far off, still burning.
    hulk: {
      weight: 1,
      eligible: (context) => context.destroyed > 0 || scenario.war,
      start() {
        const side = pick(Object.entries(FACTIONS).map(([key, value]) => ({ key, ...value })));
        const [kind, label] = pick(side.capitals);
        const size = view.narrow ? 160 : 420;
        const plan = lane({ depth: -13, size });
        const leftward = random() < 0.5;
        const speed = (view.width - plan.x0 + size) * plan.perPx / 28;
        const hulk = spawn({
          key: `capital:${kind}`, side, length: size * plan.perPx, position: toWorld(leftward ? view.width + size * 0.35 : plan.x0 - size * 0.1, plan.y + 30, plan.depth),
          velocity: new THREE.Vector3(leftward ? -speed : speed, -speed * 0.08, 0), heading: new THREE.Vector3(1, 0.2, 0.4), textured: true, haze: 0.25, char: 0.7, hyper: false,
          label: `Wreck ▸ ${label}`, contactClass: 'r3-contact--derelict', hp: 8, tumble: { axis: new THREE.Vector3(0.3, 1, 0.4).normalize(), rate: 0.06 },
          think(actor) {
            if (now() >= (actor.data.nextFire || 0)) {
              actor.data.nextFire = now() + 0.1;
              actor.group.updateMatrixWorld(true);
              localPoint.copy(pick(actor.extremes)).multiplyScalar(0.2 + 0.6 * random()).applyMatrix4(actor.group.matrixWorld);
              emit(localPoint, 2, 0, [actor.length * 0.005, actor.length * 0.02], [actor.length * 0.012, actor.length * 0.025], [0.6, 1.1]);
              puff(localPoint, 1, 0, [actor.length * 0.004, actor.length * 0.015], [actor.length * 0.03, actor.length * 0.06], [2, 3.5]);
              if (random() < 0.03) {
                blast(localPoint, actor.length * 0.2, 0.4);
                flashAt(localPoint, 0.25, 0.4);
              }
            }
            if (actor.age > 30) remove(actor);
          },
        });
        hulk.onKilled = () => {};
        return { actors: [hulk] };
      },
    },
  };

  // The director ---------------------------------------------------------------------------------------
  let active = null;
  let arrived = now();
  let nextRoll = arrived + 14 + random() * 10;
  let forcedDone = false;
  let context = { vista: null, world: null };

  function begin(id) {
    const event = EVENTS[id];
    if (!event) return;
    const run = event.start();
    active = { id, ...run, started: now() };
    session.recent.unshift(id);
    session.recent.length = Math.min(session.recent.length, 2);
  }
  function eventContext() {
    return { ...context, destroyed: destroyedThisVisit, since: now() - arrived, war: scenario.war, memory: memory?.get?.() || null };
  }
  function roll() {
    const state = eventContext();
    const candidates = Object.entries(EVENTS).filter(([id, event]) => !session.recent.includes(id) && event.eligible(state));
    if (!candidates.length) return;
    // Memory tilts the odds: a pilot who has rescued people hears more calls for help, and one with
    // kills to their name draws bounty hunters' quarry.
    const saved = state.memory?.rescues || 0;
    const kills = state.memory ? Object.values(state.memory.killsByFaction || {}).reduce((sum, count) => sum + count, 0) : 0;
    const weights = candidates.map(([id, event]) => event.weight * (id === 'distress' ? 1 + saved * 0.3 : 1) * (id === 'bounty' ? 1 + kills * 0.05 : 1));
    let total = weights.reduce((sum, weight) => sum + weight, 0) * random();
    for (let i = 0; i < candidates.length; i++) {
      total -= weights[i];
      if (total <= 0) return begin(candidates[i][0]);
    }
  }

  return {
    // The hero reports where it has arrived: the world, the backdrop and the fleet's scenario.
    onArrive(state = {}) {
      context = { vista: state.vista || null, world: state.world || null };
      arrived = now();
      nextRoll = context.vista === 'heatDeath' ? Infinity : arrived + 14 + random() * 12;
      if (context.vista === 'heatDeath') forcedDone = true;
    },
    // A jump is starting: whatever is here jumps too.
    onDepart() {
      for (const actor of actors) if (!actor.gone && !actor.dead && actor.state === 'present' && actor.shootable) depart(actor);
      active = null;
      nextRoll = Infinity;
    },
    update(dt) {
      if (reduceMotion) return;
      hazeUniforms.uNow.value = now();
      hazeUniforms.uScale.value = (view.height * view.ratio) / (2 * tanHalf);
      hazeUniforms.uMaxSize.value = view.height * view.ratio * 0.2;
      lampUniforms.uScale.value = Math.max(4, 7 * view.ratio);
      if (forced && !forcedDone && now() - arrived > 1.2 && EVENTS[forced]) {
        forcedDone = true;
        begin(forced);
      }
      if (!active && now() >= nextRoll) {
        nextRoll = now() + 6 + random() * 6;
        if (now() - session.lastEnded > 35 && random() < 0.45) roll();
      }
      if (active?.update) active.update(dt);
      for (let i = 0; i < actors.length; i++) updateActor(actors[i], dt);
      updateSalvage();
      if (salvage.tug?.gone) salvage.tug = null;
      if (active) {
        const all = [...active.actors, ...(active.extra || [])];
        if (all.every((actor) => actor.gone || actor.dead) && now() - active.started > 3) {
          active.end?.();
          active = null;
          session.lastEnded = now();
          nextRoll = now() + 20 + random() * 20;
        }
      }
      // Forget what has finished, now and then, so the list stays short.
      if (actors.length > 80) {
        for (let i = actors.length - 1; i >= 0; i--) if (actors[i].gone) actors.splice(i, 1);
        for (let i = chunks.length - 1; i >= 0; i--) if (chunks[i].gone) chunks.splice(i, 1);
      }
      if (hazeDirty) {
        hazeGeometry.getAttribute('position').needsUpdate = true;
        hazeGeometry.getAttribute('aVelocity').needsUpdate = true;
        hazeGeometry.getAttribute('aLife').needsUpdate = true;
        hazeDirty = false;
      }
    },
    // Whether a point of the hero is over one of this director's ships, and shooting it.
    aimed(x, y) {
      return !!targetAt(x, y);
    },
    shoot(x, y) {
      const actor = targetAt(x, y);
      if (!actor) return false;
      actor.data.shots = (actor.data.shots || 0) + 1;
      if (actor.data.shots < actor.hp && actor.length > 1) {
        emit(actor.group.position, 10, 1, [actor.length * 0.1, actor.length * 0.3], [actor.length * 0.005, actor.length * 0.01], [0.3, 0.6]);
        blast(localPoint.copy(pick(actor.extremes)).multiplyScalar(0.4).applyMatrix4(actor.group.matrixWorld), actor.length * 0.3, 0.4);
        return true;
      }
      if (actor.onKilled) actor.onKilled(actor);
      else memory?.record?.('kill', { faction: actor.side?.key || 'unknown', capital: actor.length > 1.2 });
      destroy(actor);
      return true;
    },
    // How many of its ships are in view, for anything that wants to know the director is busy.
    get busy() {
      return !!active;
    },
    dispose() {
      active = null;
      nextRoll = Infinity;
    },
  };

  function targetAt(x, y) {
    for (let i = actors.length - 1; i >= 0; i--) {
      const actor = actors[i];
      if (actor.gone || actor.dead || !actor.shootable || actor.state !== 'present') continue;
      if (actor.rect && actor.length > 1) {
        const { left, right, top, bottom } = actor.rect;
        const insetX = (right - left) * 0.12;
        const insetY = (bottom - top) * 0.12;
        if (x > left + insetX && x < right - insetX && y > top + insetY && y < bottom - insetY) return actor;
        continue;
      }
      screenOf(actor.group.position, screen);
      const radius = (actor.length / (2 * Math.max(10 - actor.group.position.z, 0.5) * tanHalf)) * view.height * 0.6 + 12;
      if ((screen.x - x) ** 2 + (screen.y - y) ** 2 < radius * radius) return actor;
    }
    return null;
  }
}
