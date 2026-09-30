// The hero's backdrops, for r3-hero.js. Most visits look down on a planet, but a visit, and every
// jump, can land somewhere else: in view of a whole solar system, a binary star pouring itself into
// its companion, a lone star, a dwarf, a black hole bending the sky round itself, a quasar, a
// shipyard, or, very rarely, the Death Star.
//
// placeVista() composes a backdrop on the stage, in pixels, as the hero first frames it; liftVista()
// stands that composition up in three dimensions, in the backdrop's own frame (the sky's) about its
// focus, the body the orbit camera turns round, so that seen from home it lands where placeVista()
// put it. VISTA_GLSL is spliced into the sky shader, which traces each pixel's ray through those
// bodies and is compiled once per backdrop with VISTA defined as its number, so only the backdrop
// showing is compiled.

import * as THREE from './vendor/three.module.min.js';
import { generator } from './r3-worlds.js'; // [r3:chart]

export const KINDS = { planet: 0, system: 1, binary: 2, star: 3, dwarf: 4, blackHole: 5, quasar: 6, shipyard: 7, deathStar: 8, heatDeath: 9 };

// How often each backdrop comes up, out of the whole.
const WEIGHTS = [['planet', 44], ['system', 9], ['binary', 8], ['star', 8], ['dwarf', 7], ['blackHole', 7], ['quasar', 5], ['shipyard', 10], ['deathStar', 2], ['heatDeath', 2]];

// Names for the survey readout, each backdrop drawing one.
const NAMES = {
  system: [['Corellian system', 'Corellian sector · five worlds'], ['Hoth system', 'Anoat sector · six worlds'], ['Yavin system', 'Gordian Reach · gas giant and moons'], ['Kuat system', 'Core Worlds · shipbuilders'], ['Tatoo system', 'Arkanis sector · twin suns'], ['Dantooine system', 'Outer Rim · Raioballo sector']],
  binary: [['Tatoo I and II', 'Arkanis sector · twin suns'], ['Talus and Tralus', 'Corellian sector · contact binary'], ['Kessel binary', 'Outer Rim · mass transfer'], ['Nal Hutta primaries', 'Hutt Space · binary']],
  star: [['Coruscant Prime', 'Core Worlds · G-type'], ['Corell', 'Corellian sector · G-type'], ['Alderaan\'s sun', 'Core Worlds · G-type'], ['Yavin Prime', 'Gordian Reach · K-type'], ['Bespin\'s sun', 'Anoat sector · F-type'], ['Taris Prime', 'Outer Rim · K-type']],
  dwarf: [['Anoat', 'Anoat sector · red dwarf'], ['Ilum\'s sun', 'Unknown Regions · white dwarf'], ['Exegol\'s light', 'Unknown Regions · brown dwarf'], ['Hoth\'s sun', 'Anoat sector · white dwarf'], ['Dagobah\'s sun', 'Sluis sector · red dwarf']],
  blackHole: [['The Maw', 'Kessel sector · black hole cluster'], ['Chiss singularity', 'Unknown Regions · black hole'], ['Galactic core', 'Deep Core · black hole']],
  quasar: [['Deep Core quasar', 'Deep Core · active nucleus'], ['Rishi Maze', 'Satellite galaxy · quasar']],
  shipyard: [['Kuat Drive Yards', 'Kuat · orbital drydocks'], ['Corellian Engineering', 'Corellia · orbital yards'], ['Fondor Shipyards', 'Colonies · orbital yards'], ['Mon Cala yards', 'Calamari · orbital yards']],
  deathStar: [['DS-1 Orbital Battle Station', 'Horuz system · Death Star'], ['Death Star II', 'Endor system · under construction']],
  heatDeath: [['The last light', 'Heat death · 10^106 years · click to begin again'], ['Entropy', 'Heat death · no work remains · click to begin again']],
};

// Star colours by class, bright enough to bloom.
const STAR_CLASSES = [
  ['O', [0.55, 0.7, 1.4]], ['B', [0.7, 0.82, 1.3]], ['F', [1.15, 1.1, 0.95]], ['G', [1.2, 1.0, 0.72]],
  ['K', [1.25, 0.78, 0.45]], ['M', [1.2, 0.5, 0.28]],
];

export function pickVista(random, { fresh = false, exclude = null, kind: forcedKind = null, vseed = null } = {}) {
  const query = new URLSearchParams(fresh ? '' : location.search);
  // [r3:chart] The backdrop draws from its own sequence, seeded from the world's, and its roll is
  // drawn whether or not the kind is forced: a kind and a seed replay it.
  const drawn = Math.floor(random() * 2 ** 32);
  const asked = Number.parseInt(query.get('vseed') || '', 10);
  const vistaSeed = Number.isFinite(vseed) ? vseed >>> 0 : Number.isFinite(asked) ? asked >>> 0 : drawn;
  random = generator(vistaSeed);
  const kindRoll = random();
  let kind = forcedKind || query.get('vista');
  if (!kind || !(kind in KINDS)) {
    const choices = WEIGHTS.filter(([name]) => name !== exclude || name === 'planet');
    const total = choices.reduce((sum, [, weight]) => sum + weight, 0);
    let roll = kindRoll * total;
    kind = choices[0][0];
    for (const [name, weight] of choices) {
      roll -= weight;
      if (roll < 0) {
        kind = name;
        break;
      }
    }
  }
  const vista = { kind, index: KINDS[kind], seed: random() * 100, vseed: vistaSeed }; // [r3:chart] vseed
  if (kind === 'planet') return vista;
  const pick = (list) => list[Math.floor(random() * list.length)];
  const starColour = (classes) => {
    const [, colour] = pick(STAR_CLASSES.filter(([name]) => classes.includes(name)));
    return colour.map((c) => c * (0.9 + 0.2 * random()));
  };
  if (NAMES[kind]) [vista.name, vista.note] = pick(NAMES[kind]);
  if (kind === 'star') {
    vista.colour = starColour('FGKM');
    vista.activity = 0.3 + 0.7 * random();
  } else if (kind === 'dwarf') {
    vista.type = vista.note.includes('red') ? 0 : vista.note.includes('white') ? 1 : 2;
    vista.colour = [[1.3, 0.42, 0.2], [0.8, 0.92, 1.5], [0.55, 0.22, 0.28]][vista.type];
    vista.nebula = [0.2 + 0.6 * random(), random()];
  } else if (kind === 'binary') {
    vista.colour = starColour('KM');
    vista.companion = starColour('OB');
    vista.ratio = 0.28 + 0.12 * random();
    vista.period = 150 + 90 * random();
  } else if (kind === 'blackHole' || kind === 'quasar') {
    vista.tilt = 1.42 + 0.1 * random() * (random() < 0.5 ? 1 : -1);
    vista.roll = (random() - 0.5) * 0.5;
    vista.spin = random() < 0.5 ? 1 : -1;
    vista.hot = kind === 'quasar' ? 1 : 0.3 + 0.4 * random();
  } else if (kind === 'system') {
    vista.colour = starColour('FGK');
    const count = 4 + Math.floor(random() * 4);
    vista.orbits = [];
    for (let i = 0; i < count; i++) vista.orbits.push({ at: 0.18 + (i + random() * 0.6) / count * 0.82, phase: random() * Math.PI * 2, size: random(), world: random() });
    vista.belt = Math.floor(random() * count);
    vista.incline = 0.22 + 0.2 * random();
    vista.turn = (random() - 0.5) * 0.4;
  } else if (kind === 'deathStar') {
    vista.second = vista.name.includes('II');
  } else if (kind === 'heatDeath') {
    vista.bang = null;
  } else if (kind === 'shipyard') {
    vista.world = { 'Kuat Drive Yards': 'Kuat', 'Corellian Engineering': 'Corellia', 'Fondor Shipyards': 'Fondor', 'Mon Cala yards': 'Mon Cala' }[vista.name];
  }
  return vista;
}

// Where the backdrop's bodies are this frame, in device pixels with y up, and every uniform the
// shader reads for it. region: the free sky, css pixels with y down (left, top, right, bottom).
export function placeVista(vista, { width, height, ratio, region, time, worlds }) {
  const out = { a: [0, 0, 0, 0], b: [0, 0, 0, 0], params: [0, 0, 0, 0], colourA: [1, 1, 1], colourB: [1, 1, 1], planets: [], light: null };
  const [left, top, right, bottom] = region;
  const cx = (left + right) / 2;
  const cy = (top + bottom) / 2;
  const spanX = Math.max(right - left, 60);
  const spanY = Math.max(bottom - top, 60);
  const up = (y) => (height - y) * ratio;
  if (vista.kind === 'star') {
    const radius = Math.max(spanX * 0.55, height * 0.9);
    const x = cx + spanX * 0.15;
    const y = height + radius * 0.62;
    out.a = [x * ratio, up(y), radius * ratio, vista.seed];
    out.colourA = vista.colour;
    out.params = [vista.activity, 0, 0, 0];
    out.light = [x, y - radius];
  } else if (vista.kind === 'dwarf') {
    const radius = [34, 16, 40][vista.type] * Math.min(1, spanY / 300);
    const x = cx + spanX * 0.1;
    const y = cy - spanY * 0.05;
    out.a = [x * ratio, up(y), radius * ratio, vista.seed];
    out.colourA = vista.colour;
    out.params = [vista.type, vista.nebula[0], vista.nebula[1], 0];
    out.light = [x, y];
  } else if (vista.kind === 'binary') {
    const reach = Math.min(spanX * 0.26, spanY * 0.5);
    const angle = (time / vista.period) * Math.PI * 2 + vista.seed;
    const giant = reach * 0.55;
    const smaller = giant * vista.ratio;
    const ax = cx - Math.cos(angle) * reach * 0.45;
    const ay = cy - Math.sin(angle) * reach * 0.45 * 0.22;
    const bx = cx + Math.cos(angle) * reach * 1.35;
    const by = cy + Math.sin(angle) * reach * 1.35 * 0.22;
    out.a = [ax * ratio, up(ay), giant * ratio, vista.seed];
    out.b = [bx * ratio, up(by), smaller * ratio, Math.sin(angle)];
    out.colourA = vista.colour;
    out.colourB = vista.companion;
    out.light = [(ax + bx) / 2, (ay + by) / 2];
    out.centre = [cx, cy];
    out.reach = reach;
    out.angle = angle;
  } else if (vista.kind === 'blackHole' || vista.kind === 'quasar') {
    const schwarzschild = Math.min(spanX / 22, spanY / 12, 40);
    const x = cx + spanX * 0.05;
    const y = cy;
    out.a = [x * ratio, up(y), schwarzschild * ratio, vista.seed];
    out.params = [vista.tilt, vista.roll, vista.spin, vista.hot];
    out.colourA = vista.kind === 'quasar' ? [1.2, 1.1, 1.3] : [1.4, 0.8, 0.45];
    out.light = [x, y];
  } else if (vista.kind === 'heatDeath') {
    // How far the end has gone: most of the stars out in about a minute and a half, a few left.
    const elapsed = vista.born === undefined ? 0 : time - vista.born;
    const x = cx + spanX * 0.18;
    const y = cy - spanY * 0.12;
    out.a = [x * ratio, up(y), 5 * ratio, vista.seed];
    out.params = [Math.min(0.975, 0.1 + elapsed / 90), 0, 0, 0];
    if (vista.bang) out.b = [vista.bang.x * ratio, up(vista.bang.y), Math.max(1e-3, time - vista.bang.born), 0];
    out.light = [x, y];
  } else if (vista.kind === 'system') {
    const x = left + spanX * 0.42;
    const y = cy + spanY * 0.06;
    const reach = Math.min(spanX * 0.62, spanY * 1.7);
    out.a = [x * ratio, up(y), Math.max(9, reach * 0.028) * ratio, vista.seed];
    out.colourA = vista.colour;
    out.params = [vista.incline, vista.turn, vista.belt, reach * ratio];
    out.light = [x, y];
    out.centre = [x, y];
    const c = Math.cos(vista.turn);
    const s = Math.sin(vista.turn);
    vista.orbits.forEach((orbit, i) => {
      const a = reach * orbit.at;
      const b = a * vista.incline;
      const speed = 0.08 / Math.pow(orbit.at, 1.5);
      const angle = orbit.phase + time * speed * 0.2;
      const ox = Math.cos(angle) * a;
      const oy = Math.sin(angle) * b;
      const px = x + ox * c - oy * s;
      const py = y + ox * s + oy * c;
      const size = (5 + orbit.size * 10) * Math.min(1, spanY / 300);
      const world = worlds[Math.floor(orbit.world * worlds.length)];
      out.planets.push({ x: px, y: py, radius: size, orbit: [a * ratio, b * ratio], world, behind: Math.sin(angle) < 0, index: i, angle, reach: a });
    });
  }
  return out;
}

// How far off a backdrop other than a planet stands, in the ships' units: beyond every ship's path,
// so a fleet always crosses in front of it, and far enough that perspective leaves the composition
// as placeVista() drew it.
const FAR = 120;

// A body placeVista() drew as a disc, stood up as a sphere seen from home: its centre along the
// ray through the disc's centre, at distance, its radius from the angle the disc subtends. A large
// body is measured from its crown, the point of its limb highest on the stage, so the arc the page
// shows lands where it was drawn.
function sphereFrom(lens, x, y, radiusPx, distance, centre) {
  const direction = lens.ray(x, y, scratchA);
  const crown = lens.ray(x, y - radiusPx, scratchB);
  const angle = Math.acos(THREE.MathUtils.clamp(direction.dot(crown), -1, 1));
  centre.copy(lens.home).addScaledVector(direction, distance);
  return distance * Math.sin(angle);
}
const scratchA = new THREE.Vector3();
const scratchB = new THREE.Vector3();
const scratchC = new THREE.Vector3();

export function createLift() {
  return {
    focus: new THREE.Vector3(),
    a: new THREE.Vector4(),
    b: new THREE.Vector4(),
    px: new THREE.Vector4(),
    light: new THREE.Vector3(),
    lightB: new THREE.Vector3(),
    orbitU: new THREE.Vector3(1, 0, 0),
    orbitV: new THREE.Vector3(0, 0, 1),
    orbitN: new THREE.Vector3(0, 1, 0),
    radii: new Float32Array(8),
    worlds: Array.from({ length: 8 }, () => ({ centre: new THREE.Vector3(), radius: 0, world: null, index: 0 })),
    count: 0,
    bang: new THREE.Vector4(0, 0, 0, 0),
    zoom: [0.5, 1.8],
  };
}

// The backdrop placeVista() composed, in three dimensions: its focus in the camera's frame, and its
// bodies about that focus in the sky's, which at home is the camera's frame moved to the focus.
// lens: ray(x, y, out) the unit direction from the home camera through a css pixel (y down), home
// the camera's place, pxTan the tangent a css pixel spans at the stage's centre, ratio and height.
export function liftVista(vista, placed, lens, out, time) {
  const css = (body) => [body[0] / lens.ratio, lens.height - body[1] / lens.ratio, body[2] / lens.ratio];
  const pxWorld = FAR * lens.pxTan;
  out.px.set(0, 0, pxWorld, 0);
  out.count = 0;
  out.bang.set(0, 0, 0, 0);
  out.zoom = [0.45, 1.8];
  const [ax, ay, ar] = css(placed.a);
  if (vista.kind === 'star') {
    // A star filling the foot of the stage: near enough to fill it, never near enough for a ship to
    // pass behind its face.
    const direction = lens.ray(ax, ay, scratchA);
    const crown = lens.ray(ax, ay - ar, scratchB);
    const angle = Math.acos(THREE.MathUtils.clamp(direction.dot(crown), -1, 1));
    const distance = Math.max(60 / Math.max(1 - Math.sin(angle), 0.05), 140);
    out.focus.copy(lens.home).addScaledVector(direction, distance);
    out.a.set(0, 0, 0, distance * Math.sin(angle));
    out.px.set(ar, 0, distance * lens.pxTan, placed.a[3]);
    out.zoom = [0.8, 1.6];
  } else if (vista.kind === 'binary') {
    // The pair wheel about their barycentre on an orbit seen nearly edge on: the companion nearer
    // the viewer while it swings down across the giant.
    const [cx, cy] = placed.centre;
    // One css pixel's width at the barycentre, which also stands the focus there.
    const perPx = sphereFrom(lens, cx, cy, 1, FAR, out.focus);
    const tilt = scratchC.set(0, -0.22, 0.975).normalize();
    const c = Math.cos(placed.angle);
    const s = Math.sin(placed.angle);
    const rA = placed.reach * 0.45 * perPx;
    const rB = placed.reach * 1.35 * perPx;
    const giant = placed.reach * 0.55 * perPx;
    out.a.set(-rA * c, -rA * s * tilt.y, -rA * s * tilt.z, giant);
    out.b.set(rB * c, rB * s * tilt.y, rB * s * tilt.z, giant * vista.ratio);
    out.orbitU.set(1, 0, 0);
    out.orbitV.copy(tilt);
    out.orbitN.crossVectors(out.orbitU, out.orbitV).normalize();
    out.px.set(placed.reach * 0.55, placed.reach * 0.55 * vista.ratio, perPx, vista.seed);
  } else if (vista.kind === 'system') {
    // An orrery: the star, and each world on a circle in one plane, the plane tipped so its circles
    // look like placeVista()'s ellipses; a world on the far side of its orbit passes behind the star.
    const [incline, turn] = placed.params;
    const radius = sphereFrom(lens, ax, ay, ar, FAR, out.focus);
    out.a.set(0, 0, 0, radius);
    out.px.set(ar, 0, pxWorld, placed.a[3]);
    const c = Math.cos(turn);
    const s = Math.sin(turn);
    out.orbitU.set(c, -s, 0);
    out.orbitV.set(-s * incline, -c * incline, Math.sqrt(Math.max(0, 1 - incline * incline)));
    out.orbitN.crossVectors(out.orbitU, out.orbitV).normalize();
    for (const planet of placed.planets) {
      const slot = out.worlds[out.count];
      const reach = planet.reach * lens.pxTan * FAR;
      slot.centre.copy(out.orbitU).multiplyScalar(Math.cos(planet.angle) * reach).addScaledVector(out.orbitV, Math.sin(planet.angle) * reach);
      slot.radius = planet.radius * pxWorld;
      slot.world = planet.world;
      slot.index = planet.index;
      out.radii[out.count] = reach;
      out.count += 1;
      if (out.count >= 8) break;
    }
  } else {
    // A dwarf, a black hole, a quasar, the end: one small body at the focus.
    const radius = sphereFrom(lens, ax, ay, ar, FAR, out.focus);
    out.a.set(0, 0, 0, radius);
    out.px.set(ar, 0, pxWorld, placed.a[3]);
    if (vista.kind === 'heatDeath' && vista.bang) {
      // The new beginning, where it was clicked: its direction kept in the sky's frame, blown out
      // until it fills everything.
      const age = Math.max(1e-3, time - vista.bang.born);
      const reach = 1600 * (1 - Math.exp(-age * 1.2)) * pxWorld;
      out.bang.set(vista.bang.at.x, vista.bang.at.y, vista.bang.at.z, reach);
      out.px.w = age;
    }
  }
  // The light the backdrop throws: its main body, or for a binary both.
  out.light.set(out.a.x, out.a.y, out.a.z);
  out.lightB.set(out.b.x, out.b.y, out.b.z);
  return out;
}

export const VISTA_GLSL = /* glsl */ `
  uniform float uVista;
  uniform vec4 uBodyA;       // the main body, in the sky's frame: centre and radius (a hole's: its Schwarzschild radius)
  uniform vec4 uBodyB;       // a binary's companion; the new beginning at the heat death (centre and reach)
  uniform vec4 uBodyPx;      // the main body's radius and the companion's, in css pixels; a css pixel's width at the focus; a seed
  uniform vec4 uVistaParams;
  uniform vec3 uColourA;
  uniform vec3 uColourB;
  uniform vec4 uWorlds[8];   // a solar system's worlds: centre and radius
  uniform vec3 uWorldTint[8];
  uniform vec3 uWorldTintB[8];
  uniform float uOrbitRadii[8];
  uniform vec3 uOrbitU;      // the orbits' plane: two axes along it, and square to it
  uniform vec3 uOrbitV;
  uniform vec3 uOrbitN;
  uniform float uWorldCount;
  uniform float uBangAge;

  vec3 turnY(vec3 p, float a) {
    float c = cos(a);
    float s = sin(a);
    return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
  }

  // A sphere met along a ray from o in direction d (unit): x the distance to its near side, or -1
  // if the ray misses it or it lies behind; y how near the ray passes its centre, in its radii.
  vec2 sphereHit(vec3 o, vec3 d, vec4 s) {
    vec3 p = o - s.xyz;
    float b = dot(p, d);
    float impact = sqrt(max(dot(p, p) - b * b, 0.0)) / s.w;
    float h = b * b - dot(p, p) + s.w * s.w;
    if (h < 0.0 || b > 0.0) return vec2(-1.0, impact);
    return vec2(-b - sqrt(h), impact);
  }
  // The point of a sphere's surface a ray meets, or for a ray just past its limb the limb's nearest
  // point, as a normal: so the pixels the edge antialiases over are shaded as the rim.
  vec3 sphereNormal(vec3 o, vec3 d, vec4 s, float t) {
    vec3 p = o - s.xyz;
    vec3 q = t > 0.0 ? p + d * t : p - d * dot(p, d);
    return q * inversesqrt(max(dot(q, q), 1e-12));
  }

  // Three octaves, for glows and gas, which need no finer detail.
  float fbm3Lite(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
      v += a * noise3(p);
      p = p * 2.03 + vec3(1.7, 9.2, 3.1);
      a *= 0.5;
    }
    return v + 0.125;
  }

  #if VISTA >= 1 && VISTA <= 4
  // A star's face: darker toward the limb, boiling with granulation, spotted where it is active and
  // brighter round the spots, the pattern its own as it turns. fw: how far its impact parameter
  // moves across a pixel, which fades detail finer than one and softens the edge.
  vec4 starFace(vec3 o, vec3 d, vec4 body, vec3 colour, float activity, float seed, float fw, out float t) {
    vec2 hit = sphereHit(o, d, body);
    t = hit.x;
    float edge = (1.0 - smoothstep(1.0 - 1.5 * fw, 1.0 + 0.5 * fw, hit.y)) * step(0.0, -dot(o - body.xyz, d));
    if (edge <= 0.0) return vec4(0.0);
    vec3 n = sphereNormal(o, d, body, hit.x);
    float mu = max(dot(n, -d), 0.0);
    vec3 s = turnY(n, uTime * 0.004 + seed);
    float granules = fbm3Filtered(s * 34.0 + vec3(0.0, uTime * 0.03, seed), fw * 34.0);
    float magnetic = fbm3Filtered(s * 3.5 + seed * 7.0, fw * 3.5);
    float spots = smoothstep(0.66, 0.72, magnetic) * activity;
    float faculae = smoothstep(0.56, 0.64, magnetic) * (1.0 - spots) * activity;
    float limb = 0.3 + 0.7 * pow(mu, 0.6);
    vec3 face = colour * colour * limb * (0.7 + 0.6 * granules);
    face = mix(face, colour * vec3(0.35, 0.18, 0.1) * limb, spots * 0.85);
    face += colour * faculae * 0.35 * (1.0 - mu);
    return vec4(face * 1.35, edge);
  }

  // A star's corona and prominences: streamers fading out from the limb, and bright loops of
  // plasma standing just above it, fixed to the star as it turns. radiusPx: its radius in css
  // pixels, so heights read in pixels whatever its size.
  vec3 starHalo(vec3 o, vec3 d, vec4 body, vec3 colour, float activity, float seed, float radiusPx) {
    vec3 p = o - body.xyz;
    float along = -dot(p, d);
    if (along <= 0.0) return vec3(0.0);
    vec3 closest = p + d * along;
    float r = length(closest) / body.w;
    if (r < 0.995) return vec3(0.0);
    vec3 c = closest / max(length(closest), 1e-6);
    float h = (r - 1.0) * radiusPx;
    float streamers = 0.55 + 0.45 * fbm3Lite(c * 3.0 + vec3(seed, h * 0.006 - uTime * 0.012, 0.0));
    float corona = exp(-h / 45.0) * streamers;
    float loops = smoothstep(0.62, 0.82, fbm3Lite(c * max(14.0, radiusPx * 0.08) + vec3(seed * 3.0, uTime * 0.04 + h * 0.03, 0.0)));
    float prominence = loops * exp(-h / 10.0) * activity;
    return colour * (corona * 0.55 + prominence * 1.6 + exp(-h / 220.0) * 0.06);
  }
  #endif

  #if VISTA == 4
  // A dwarf: a red one flaring, a white one tiny and fierce inside the shell of gas it threw off,
  // or a brown one, banded and dim.
  vec3 dwarf(vec3 o, vec3 d, vec3 col, float fw, inout float nearest) {
    vec4 body = uBodyA;
    vec2 hit = sphereHit(o, d, body);
    float r = hit.y;
    bool front = dot(body.xyz - o, d) > 0.0;
    float type = uVistaParams.x;
    if (type > 0.5 && type < 1.5 && front) {
      // The planetary nebula: a shell seen through, brightest where the line of sight grazes it.
      float shell = uVistaParams.y * 7.0 + 5.0;
      float s = r / shell;
      float path = s < 1.0 ? sqrt(max(0.0, 1.0 - s * s)) - sqrt(max(0.0, 0.72 * 0.72 - s * s)) : 0.0;
      vec3 p = o - body.xyz;
      vec3 closest = p - d * dot(p, d);
      float lumps = 0.6 + 0.8 * fbm3Lite(closest / (shell * body.w) * 5.0 + uBodyPx.w);
      vec3 gas = mix(vec3(0.2, 0.9, 0.85), vec3(1.0, 0.3, 0.35), smoothstep(0.75, 1.0, s));
      gas = mix(gas, vec3(0.5, 0.4, 1.0), uVistaParams.z * 0.5);
      col += gas * path * lumps * 0.55;
    }
    float disc = (1.0 - smoothstep(1.0 - 1.5 * fw, 1.0, r)) * (front ? 1.0 : 0.0);
    float glowFrom = max(r - 1.0, 0.0);
    if (type < 0.5) {
      float t;
      vec4 surface = starFace(o, d, body, uColourA, 1.0, uBodyPx.w, fw, t);
      // Flares: now and then a patch of the surface flashes and throws off a loop.
      float flare = pow(max(0.0, sin(uTime * 0.23 + uBodyPx.w)), 30.0);
      col = mix(col, surface.rgb * (1.0 + flare * 1.5), surface.a);
      if (front) col += starHalo(o, d, body, uColourA, 1.0 + flare * 2.0, uBodyPx.w, uBodyPx.x) * (1.0 + flare);
    } else if (type < 1.5) {
      col = mix(col, uColourA * 4.0, disc);
      if (front) col += uColourA * (exp(-glowFrom * 1.1) * 0.9 + exp(-glowFrom * 0.15) * 0.12);
    } else {
      if (hit.x > 0.0 || disc > 0.0) {
        vec3 n = sphereNormal(o, d, body, hit.x);
        float mu = max(dot(n, -d), 0.0);
        vec3 s = turnY(n, uTime * 0.02 + uBodyPx.w);
        float bands = 0.5 + 0.5 * sin(s.y * 14.0 + fbm3Filtered(s * vec3(2.0, 8.0, 2.0), fw * 8.0) * 4.0);
        vec3 face = mix(uColourA, uColourA * vec3(1.6, 0.9, 1.2), bands) * (0.3 + 0.7 * mu);
        col = mix(col, face * 1.3, disc);
      }
      if (front) col += uColourA * exp(-glowFrom * 2.5) * 0.35;
    }
    if (hit.x > 0.0 && disc > 0.5) nearest = min(nearest, hit.x);
    return col;
  }
  #endif

  #if VISTA == 2
  // A binary: a giant drawn out toward its small hot companion, and the stream of gas it loses
  // curling round into the disc about the companion, all on their orbit's plane. Whichever star is
  // nearer covers the other, by distance along the ray.
  vec3 binary(vec3 o, vec3 d, vec3 col, float fwA, float fwB, inout float nearest) {
    vec4 a = uBodyA;
    vec4 b = uBodyB;
    vec3 toward = b.xyz - a.xyz;
    float apart = length(toward);
    vec3 axis = apart > 1e-4 ? toward / apart : vec3(1.0, 0.0, 0.0);
    vec3 across = normalize(cross(uOrbitN, axis));
    // The giant, an ellipsoid drawn out along the axis: the ray met in the space that makes it round.
    const float stretch = 1.15;
    vec3 ao = o - a.xyz;
    vec3 so = ao - axis * dot(ao, axis) * (1.0 - 1.0 / stretch);
    vec3 sd = d - axis * dot(d, axis) * (1.0 - 1.0 / stretch);
    float qa = dot(sd, sd);
    float qb = dot(so, sd);
    float qc = dot(so, so) - a.w * a.w;
    float qh = qb * qb - qa * qc;
    float tA = qh > 0.0 ? (-qb - sqrt(qh)) / qa : -1.0;
    float impactA = sqrt(max(dot(so, so) - qb * qb / qa, 0.0)) / a.w;
    float edgeA = (1.0 - smoothstep(1.0 - 1.5 * fwA, 1.0 + 0.5 * fwA, impactA)) * step(0.0, -dot(ao, d));
    vec4 giant = vec4(0.0);
    if (edgeA > 0.0) {
      vec3 sp = tA > 0.0 ? so + sd * tA : so - sd * (qb / qa);
      vec3 n = normalize(sp - axis * dot(sp, axis) * (1.0 - 1.0 / stretch));
      float mu = max(dot(n, -d), 0.0);
      vec3 s = turnY(n, uTime * 0.004 + uBodyPx.w);
      float granules = fbm3Filtered(s * 30.0 + vec3(0.0, uTime * 0.03, uBodyPx.w), fwA * 30.0);
      float magnetic = fbm3Filtered(s * 3.5 + uBodyPx.w * 7.0, fwA * 3.5);
      float spots = smoothstep(0.66, 0.72, magnetic) * 0.8;
      float limb = 0.3 + 0.7 * pow(mu, 0.6);
      vec3 face = uColourA * uColourA * limb * (0.7 + 0.6 * granules);
      face = mix(face, uColourA * vec3(0.35, 0.18, 0.1) * limb, spots * 0.85);
      giant = vec4(face * 1.35, edgeA);
    }
    col += starHalo(o, d, a, uColourA, 0.8, uBodyPx.w, uBodyPx.x) * 0.7;
    float tB;
    vec4 small = starFace(o, d, b, uColourB, 0.2, uBodyPx.w + 3.0, fwB, tB);
    // Draw the farther star first.
    bool giantNearer = tA > 0.0 && (tB <= 0.0 || tA < tB);
    if (giantNearer) col = mix(col, small.rgb * 1.3, small.a);
    else col = mix(col, giant.rgb, giant.a);
    float farT = giantNearer ? tB : tA;
    float nearT = giantNearer ? tA : tB;

    // The disc about the companion: on the orbit's plane, hot within, swirling round.
    float denom = dot(d, uOrbitN);
    if (abs(denom) > 1e-4) {
      float tDisc = dot(b.xyz - o, uOrbitN) / denom;
      if (tDisc > 0.0 && (nearT <= 0.0 || tDisc < nearT || small.a < 0.5 && giant.a < 0.5)) {
        vec3 rel = o + d * tDisc - b.xyz;
        float r = length(rel) / (b.w * 2.4);
        float ring = smoothstep(0.35, 0.45, r) * (1.0 - smoothstep(0.8, 1.0, r));
        float angle = atan(dot(rel, across), dot(rel, axis));
        float swirl = 0.55 + 0.55 * fbm2(vec2(angle * 3.0 - uTime * 0.6, r * 6.0));
        col += mix(uColourB, uColourA, r) * ring * swirl * 0.8;
      }
    }
    // The stream: from the giant's nearest point, bowed round, into the disc's rim.
    vec3 start = a.xyz + axis * a.w * 1.2 * stretch;
    vec3 end = b.xyz + across * b.w * 2.3 * 0.3 - axis * b.w * 0.6;
    vec3 bend = mix(start, end, 0.5) + across * apart * 0.16;
    float nearestGap = 1e9;
    float at = 0.0;
    float atT = 0.0;
    for (int i = 0; i <= 16; i++) {
      float f = float(i) / 16.0;
      vec3 point = mix(mix(start, bend, f), mix(bend, end, f), f);
      vec3 rel = point - o;
      float along = dot(rel, d);
      float gap = length(rel - d * along);
      if (along > 0.0 && gap < nearestGap) {
        nearestGap = gap;
        at = f;
        atT = along;
      }
    }
    float width = max(mix(a.w * 0.07, b.w * 0.3, at), uBodyPx.z * 1.2);
    float hidden = (nearT > 0.0 && atT > nearT && (giant.a > 0.5 || small.a > 0.5)) ? 1.0 : 0.0;
    float stream = exp(-pow(nearestGap / width, 2.0)) * (0.6 + 0.5 * noise2(vec2(at * 20.0 - uTime * 1.5, 3.0))) * (1.0 - hidden);
    col += mix(uColourA, uColourB, at) * stream * 0.9;
    // The companion's glow, and the nearer star over everything behind it.
    vec3 bp = o - b.xyz;
    float bAlong = -dot(bp, d);
    if (bAlong > 0.0) col += uColourB * exp(-max(length(bp + d * bAlong) / b.w - 1.0, 0.0) * 1.4) * 0.4;
    if (giantNearer) col = mix(col, giant.rgb, giant.a);
    else col = mix(col, small.rgb * 1.3, small.a);
    if (nearT > 0.0 && (giantNearer ? giant.a : small.a) > 0.5) nearest = min(nearest, nearT);
    else if (farT > 0.0 && (giantNearer ? small.a : giant.a) > 0.5) nearest = min(nearest, farT);
    return col;
  }
  #endif

  #if VISTA == 5 || VISTA == 6
  // The accretion disc's axis, in the sky's frame: nearly square to the line of sight from home, so
  // the disc is seen nearly edge on, tipped toward the viewer by the tilt and turned by the roll.
  vec3 discNormal() {
    float tilt = uVistaParams.x;
    float roll = uVistaParams.y;
    #if VISTA == 5
      // A lone hole's spin axis precesses slowly by itself (a quasar's, r3-environment.js turns).
      roll += 0.18 * sin(uTime * 0.03);
      tilt += 0.04 * cos(uTime * 0.03);
    #endif
    return normalize(vec3(sin(roll), sin(tilt) * cos(roll), cos(tilt)));
  }

  // The disc's gas at an angle round the hole and a radius (in its radii): streaks drawn out along
  // the orbit, their lanes warped by a second noise, so the shear reads as turbulence.
  float discGas(float angle, float radius, float seed) {
    vec3 p = vec3(cos(angle) * 2.2, sin(angle) * 2.2, radius * 1.7 + seed);
    vec3 warp = vec3(fbm3Lite(p * 1.3 + seed), fbm3Lite(p * 1.3 + seed + 5.1), fbm3Lite(p * 1.3 - seed));
    return fbm3(vec3(p.xy, p.z * 3.2) + (warp - 0.5) * 1.6);
  }

  // Clumps of gas falling in: each spirals from the disc's rim to its inner edge over nine seconds,
  // speeding up as it goes, flares there and is gone, and another starts. Returns the light at a
  // point of the disc's plane.
  float clumps(float angle, float radius) {
    float light = 0.0;
    for (int i = 0; i < 3; i++) {
      float fi = float(i);
      float life = uTime / 9.0 + fi / 3.0 + uBodyPx.w * 0.37;
      float f = fract(life);
      float cycle = floor(life);
      float rc = mix(9.0, 3.1, pow(f, 1.6));
      float ac = hash21(vec2(cycle, fi) + uBodyPx.w) * 6.2832 + 5.4 * pow(rc, -1.5) * f * 9.0 * uVistaParams.z;
      float da = mod(angle - ac + 3.1416, 6.2832) - 3.1416;
      float along = da * radius;
      float dr = radius - rc;
      float spot = exp(-(dr * dr) / 0.06 - (along * along) / 0.9);
      float flare = 1.0 + 5.0 * smoothstep(0.86, 0.97, f);
      light += spot * flare * (1.0 - smoothstep(0.97, 1.0, f)) * smoothstep(0.0, 0.08, f);
    }
    return light;
  }

  // A black hole, or a quasar: each ray is traced back from the eye and bent round the hole as
  // light is (Schwarzschild, in units of its radius), gathering the accretion disc's light each time
  // it crosses the disc's plane, until it falls in or leaves for the sky behind, which is then read
  // where the ray finally points, lensed. The disc's inner edge is hot and its side coming toward
  // the viewer, whichever that is from here, brighter.
  vec3 blackHole(vec3 o, vec3 d, vec3 col, inout float nearest, out bool lensed) {
    lensed = false;
    vec4 hole = uBodyA;
    vec3 p0 = (o - hole.xyz) / hole.w;
    float tc = -dot(p0, d);
    if (tc <= 0.0) return col;
    vec3 closest = p0 + d * tc;
    float b = length(closest);
    if (b > 22.0) return col;
    lensed = true;
    vec3 out1 = closest / max(b, 1e-5);
    // Past the disc's reach a ray only bends a little, by the weak-field angle, and needs no tracing.
    if (b > 11.5) {
      vec3 bent = normalize(d - out1 * (2.0 / b));
      return mix(skyBehind(bent), col, smoothstep(15.0, 22.0, b));
    }
    vec3 normal = discNormal();
    // A disc seen square on has no line across it to measure from; any in-plane one will do.
    vec3 acrossDisc = cross(normal, vec3(0.0, 0.0, 1.0));
    vec3 e1 = dot(acrossDisc, acrossDisc) > 1e-8 ? normalize(acrossDisc) : vec3(1.0, 0.0, 0.0);
    vec3 e2 = cross(normal, e1);
    vec3 pos = p0 + d * max(tc - 40.0, 0.0);
    vec3 vel = d;
    vec3 h = cross(pos, vel);
    float h2 = dot(h, h);
    vec3 disc = vec3(0.0);
    float alpha = 0.0;
    float solidAt = -1.0;
    bool captured = false;
    float side = dot(pos, normal);
    float inner = 3.0;
    float outer = 10.0;
    for (int i = 0; i < 140; i++) {
      float r = length(pos);
      if (r < 1.0) {
        captured = true;
        break;
      }
      float stepLength = clamp(0.06 * r * r / (1.0 + r), 0.03, 1.6);
      vec3 acceleration = -1.5 * h2 * pos / pow(r, 5.0);
      vec3 before = pos;
      vel += acceleration * stepLength;
      pos += vel * stepLength;
      float nowSide = dot(pos, normal);
      if (nowSide * side < 0.0) {
        // Where exactly the ray crossed the disc's plane, between this step's ends, so the disc's
        // bands come out smooth rather than in steps.
        vec3 crossing = mix(before, pos, side / (side - nowSide));
        vec3 flatPos = crossing - normal * dot(crossing, normal);
        float radius = length(flatPos);
        if (radius > inner && radius < outer && alpha < 0.99) {
          float angle = atan(dot(flatPos, e2), dot(flatPos, e1));
          // The gas's speed, as a fraction of light's, and its Doppler factor toward the eye: the side
          // coming toward it brighter and bluer, the side going away dimmer and redder.
          float speed = sqrt(0.5 / radius);
          vec3 orbit = cross(normal, flatPos) / radius * uVistaParams.z;
          vec3 heading = vel * inversesqrt(max(dot(vel, vel), 1e-12));
          float doppler = 1.0 / max(0.2, 1.0 - speed * dot(orbit, -heading));
          float beaming = pow(doppler, 3.0);
          float shift = clamp(log2(doppler) * 1.6, -1.0, 1.0);
          vec3 tint = shift > 0.0 ? mix(vec3(1.0), vec3(0.72, 0.9, 1.45), shift) : mix(vec3(1.0), vec3(1.3, 0.72, 0.45), -shift);
          float heat = pow(inner / radius, 1.6);
          // Keplerian: the inner edge round in about six seconds, the rim in forty. The gas is
          // carried round by two copies of its pattern, each for eight seconds before it fades and
          // starts again, so the shear winds it into streaks but never winds it up for good.
          float omega = 5.4 * pow(radius, -1.5) * uVistaParams.z;
          float phase = fract(uTime / 8.0);
          float phaseB = fract(uTime / 8.0 + 0.5);
          float weight = 1.0 - abs(2.0 * phase - 1.0);
          float gasA = discGas(angle - omega * phase * 8.0, radius, uBodyPx.w + floor(uTime / 8.0) * 7.3);
          float gasB = discGas(angle - omega * phaseB * 8.0, radius, uBodyPx.w + floor(uTime / 8.0 + 0.5) * 7.3 + 3.7);
          float swirl = mix(gasB, gasA, weight);
          float bands = 0.6 + 0.4 * sin(radius * 6.0 + swirl * 7.0);
          float density = smoothstep(inner, inner + 0.5, radius) * (1.0 - smoothstep(outer * 0.6, outer, radius)) * (0.2 + 0.8 * bands) * smoothstep(0.2, 0.75, swirl) * 1.6;
          float clump = clumps(angle, radius);
          density = max(density, min(clump, 1.0));
          // Hot at the inner edge, cooling outward to a dull red.
          vec3 base = mix(vec3(1.0, 0.32, 0.1), uColourA, smoothstep(0.08, 0.5, heat));
          vec3 hot = mix(base, vec3(1.0, 0.95, 1.1) * 1.6, heat * (0.6 + 0.4 * uVistaParams.w));
          vec3 light = hot * tint * (heat + clump * 0.8) * beaming * (0.7 + 0.7 * uVistaParams.w);
          float a = clamp(density * 0.8, 0.0, 1.0);
          disc += (1.0 - alpha) * light * a;
          alpha += (1.0 - alpha) * a;
          if (solidAt < 0.0 && alpha > 0.5) solidAt = max(dot(crossing - p0, d), 0.0);
        }
      }
      side = nowSide;
      if (dot(pos, d) > 40.0 || r > 60.0) break;
    }
    vec3 behind = vec3(0.0);
    if (!captured) {
      behind = skyBehind(normalize(vel));
      // The photon ring: light that has circled the hole, a thin bright band at its shadow's edge.
      float ring = exp(-pow(abs(b - 2.6) / max(0.05, 1.2 / max(uBodyPx.x * uRatio, 1.0)), 2.0));
      behind += uColourA * ring * (0.2 + 0.2 * uVistaParams.w);
    }
    if (solidAt >= 0.0) nearest = min(nearest, solidAt * hole.w);
    else if (captured) nearest = min(nearest, tc * hole.w);
    // Far out the bending is slight: the lensed sky fades into the plain one, without a seam.
    return mix(behind * (1.0 - alpha) + disc, col, smoothstep(15.0, 22.0, b));
  }

  // A quasar's jets: along the disc's axis, both ways, knotted and flickering. Seen down its length
  // a jet is a blinding point; seen side on, two beams.
  vec3 jets(vec3 o, vec3 d, float nearest) {
    vec4 hole = uBodyA;
    vec3 normal = discNormal();
    vec3 p0 = (o - hole.xyz) / hole.w;
    float a = dot(d, normal);
    float dd = dot(d, p0);
    float e = dot(normal, p0);
    float denom = 1.0 - a * a;
    float tRay;
    float reach;
    float gap;
    if (denom < 1e-4) {
      tRay = -dd;
      reach = 40.0;
      gap = length(p0 - normal * e);
    } else {
      tRay = (a * e - dd) / denom;
      float s = (e - a * dd) / denom;
      reach = s;
      gap = length(p0 + d * tRay - normal * s);
    }
    if (tRay <= 0.0 || tRay * hole.w > nearest) return vec3(0.0);
    float along = abs(reach);
    float width = 0.25 + along * 0.045;
    float beam = exp(-pow(gap / width, 2.0)) * smoothstep(1.5, 4.0, along) * exp(-along * 0.018);
    float knots = 0.55 + 0.45 * sin(along * 0.9 - uTime * 3.0) * noise2(vec2(along * 0.3, uTime * 0.5));
    // Pulses running out along each beam, a few a second, fading as they go.
    float pulse = pow(0.5 + 0.5 * sin(along * 0.32 - uTime * 4.0 + hash21(vec2(sign(reach), 1.0)) * 6.0), 8.0) * exp(-along * 0.02);
    float nearSide = sign(reach) * dot(normal, -d) > 0.0 ? 1.0 : 0.55;
    vec3 colour = mix(vec3(0.55, 0.7, 1.4), vec3(0.8, 0.5, 1.2), smoothstep(10.0, 60.0, along));
    return colour * beam * (0.6 + knots + pulse * 1.8) * nearSide * 1.3;
  }
  #endif

  #if VISTA == 1
  // A solar system as an orrery: the star, each world's orbit traced as a faint dashed circle in the
  // site's cyan on one plane, an asteroid belt on one of them, and the worlds themselves, lit from
  // the star, passing behind it on the far side of their orbits and in front of it on the near.
  vec3 solarSystem(vec3 o, vec3 d, vec3 col, float fwStar, inout float nearest) {
    vec4 star = uBodyA;
    float belt = uVistaParams.z;
    float pxWorld = uBodyPx.z;
    // The orbits' plane: where the ray meets it, and how far that is from the star.
    float denom = dot(d, uOrbitN);
    float tPlane = abs(denom) > 1e-5 ? dot(star.xyz - o, uOrbitN) / denom : -1.0;
    vec3 rel = o + d * tPlane - star.xyz;
    float rho = length(rel);
    float fwRho = max(fwidth(rho), 1e-5);
    float angle = atan(dot(rel, uOrbitV), dot(rel, uOrbitU));
    // Every solid thing along the ray, nearest first by distance, found before anything is drawn.
    float tStar;
    vec2 starHit = sphereHit(o, d, star);
    tStar = starHit.x;
    float starEdge = (1.0 - smoothstep(1.0 - 1.5 * fwStar, 1.0 + 0.5 * fwStar, starHit.y)) * step(0.0, -dot(o - star.xyz, d));
    float tSolid = starEdge > 0.5 && tStar > 0.0 ? tStar : 1e9;
    vec4 worldLit[8];
    float worldT[8];
    for (int i = 0; i < 8; i++) {
      worldLit[i] = vec4(0.0);
      worldT[i] = -1.0;
      if (float(i) >= uWorldCount) break;
      vec4 w = uWorlds[i];
      vec2 hit = sphereHit(o, d, w);
      float fw = max(fwidth(hit.y), 1e-4);
      bool front = dot(w.xyz - o, d) > 0.0;
      float disc = (1.0 - smoothstep(1.0 - 1.5 * fw, 1.0, hit.y)) * (front ? 1.0 : 0.0);
      // A thin cyan halo round each world, to show it can be jumped to.
      float halo = front ? exp(-pow(abs(hit.y - 1.35) / 0.07, 2.0)) * 0.12 : 0.0;
      if (disc <= 0.0 && halo <= 0.0) continue;
      vec3 n = sphereNormal(o, d, w, hit.x);
      vec3 toStar = normalize(star.xyz - w.xyz);
      float bands = fbm3Filtered(n * 3.0 + float(i) * 13.0, fw * 3.0);
      vec3 surface = mix(uWorldTint[i], uWorldTintB[i], smoothstep(0.4, 0.6, bands));
      vec3 lit = surface * (max(dot(n, toStar), 0.0) * uColourA * 2.6 + 0.08);
      lit += uColourA * pow(1.0 - max(dot(n, -d), 0.0), 3.0) * max(dot(n, toStar), 0.0) * 0.5;
      worldLit[i] = vec4(lit, disc);
      worldT[i] = front ? max(hit.x, dot(w.xyz - o, d) - w.w) : -1.0;
      col += uAccent * halo * (tSolid < worldT[i] ? 0.0 : 1.0);
      if (disc > 0.5 && hit.x > 0.0) tSolid = min(tSolid, hit.x);
    }
    // The orbits and the belt, on their plane, where nothing solid stands in front of them.
    if (tPlane > 0.0 && tPlane < tSolid) {
      for (int i = 0; i < 8; i++) {
        if (float(i) >= uWorldCount) break;
        float a = uOrbitRadii[i];
        float gap = abs(rho - a);
        if (abs(float(i) - belt) < 0.5) {
          vec2 cell = vec2(angle * a / pxWorld * 0.12, (rho - a) / pxWorld * 0.25);
          vec2 id = floor(cell);
          float rock = step(0.75, hash21(id)) * exp(-dot(fract(cell) - 0.5, fract(cell) - 0.5) * 30.0);
          col += vec3(0.7, 0.65, 0.6) * rock * exp(-gap * gap / (a * a * 0.0016)) * 0.6;
        } else {
          float dash = step(0.4, fract(angle * a / (pxWorld * 44.0)));
          col += uAccent * exp(-pow(gap / fwRho, 2.0) * 1.4 / (uRatio * uRatio)) * 0.08 * dash;
        }
      }
    }
    // The worlds behind the star, the star and its glow, then the worlds before it.
    for (int pass = 0; pass < 2; pass++) {
      if (pass == 1) {
        vec3 sp = o - star.xyz;
        float along = -dot(sp, d);
        if (along > 0.0) col += uColourA * exp(-max(length(sp + d * along) / star.w - 1.0, 0.0) * 0.9) * 0.45;
        float t;
        vec4 face = starFace(o, d, star, uColourA, 0.5, uBodyPx.w, fwStar, t);
        col = mix(col, face.rgb * 1.3, face.a);
      }
      for (int i = 0; i < 8; i++) {
        if (float(i) >= uWorldCount) break;
        if (worldLit[i].a <= 0.0) continue;
        bool behindStar = starEdge > 0.5 && tStar > 0.0 && worldT[i] > tStar;
        if (behindStar != (pass == 0)) continue;
        col = mix(col, worldLit[i].rgb, worldLit[i].a);
      }
    }
    if (tSolid < 1e8) nearest = min(nearest, tSolid);
    return col;
  }
  #endif

  #if VISTA == 9
  // The heat death: what is left after the stars (dimmed and put out in the star field itself) is a
  // small black hole, glowing faintly as it evaporates, until it goes with a last flash. A click
  // starts it all again: a point of light blowing out into a fireball, white-hot, cooling through
  // yellow and orange to a mottled red as it fills the sky and swallows the viewer.
  vec3 heatDeath(vec3 o, vec3 d, vec3 col, float fw, inout float nearest) {
    float progress = uVistaParams.x;
    vec4 hole = uBodyA;
    vec2 hit = sphereHit(o, d, hole);
    float r = hit.y;
    bool front = dot(hole.xyz - o, d) > 0.0;
    float gone = smoothstep(0.9, 0.905, progress);
    float disc = (1.0 - smoothstep(1.0 - 1.5 * fw, 1.0, r)) * (front ? 1.0 : 0.0);
    col = mix(col, vec3(0.0), disc * (1.0 - gone));
    if (front) {
      col += vec3(0.7, 0.45, 1.0) * exp(-max(r - 1.0, 0.0) * 0.9) * (0.1 + 0.06 * sin(uTime * 2.3)) * (1.0 - gone);
      col += vec3(1.3, 1.2, 1.4) * exp(-pow(abs(progress - 0.9) * 90.0, 2.0)) * exp(-r * 0.25) * 3.0;
    }
    if (hit.x > 0.0 && disc * (1.0 - gone) > 0.5) nearest = min(nearest, hit.x);
    vec4 bang = uBodyB;
    if (bang.w > 0.0) {
      float age = uBangAge;
      vec3 p = o - bang.xyz;
      float along = -dot(p, d);
      float inside = 0.0;
      float rr = 1.0;
      float gapPx = 1e6;
      if (dot(p, p) < bang.w * bang.w) {
        inside = 1.0;
        rr = length(p) / bang.w * 0.6;
      } else if (along > 0.0) {
        float gap = length(p + d * along);
        inside = 1.0 - smoothstep(0.9 * bang.w, bang.w, gap);
        rr = gap / bang.w;
        gapPx = gap / uBodyPx.z;
      }
      float temperature = exp(-age * 0.8) * (1.25 - 0.45 * rr);
      vec3 fire = mix(vec3(0.7, 0.12, 0.04), vec3(1.4, 1.1, 0.7), smoothstep(0.08, 0.5, temperature));
      fire = mix(fire, vec3(1.5, 1.6, 2.0), smoothstep(0.55, 1.1, temperature));
      float mottle = 0.7 + 0.6 * fbm3Lite(d * 6.0 + vec3(age * 0.2, 3.0, 0.0));
      col = mix(col, fire * (0.8 + 2.4 * temperature) * mottle, inside);
      col += vec3(1.5, 1.4, 1.3) * exp(-gapPx / (6.0 + age * 50.0)) * exp(-age * 0.9) * 5.0;
    }
    return col;
  }
  #endif

  #if VISTA == 8
  // The Death Star's surface, for the planet's sphere: grey plating in rectangles, the equatorial
  // trench, the superlaser's dish in the northern hemisphere, and lights across the dark side. The
  // second one is unfinished: past a ragged edge only its skeleton stands against the stars.
  vec4 deathStar(vec3 n, vec3 t, vec3 sun, float footprint, bool second) {
    float latitude = asin(clamp(t.y, -1.0, 1.0));
    float longitude = atan(t.z, t.x);
    vec2 grid = vec2(longitude * 24.0, latitude * 18.0);
    vec2 id = floor(grid);
    float tone = 0.72 + 0.28 * hash21(id);
    vec2 f = abs(fract(grid) - 0.5);
    float seams = 1.0 - smoothstep(0.0, max(0.05, footprint * 24.0), 0.5 - max(f.x, f.y));
    vec2 fine = vec2(longitude * 120.0, latitude * 90.0);
    float detail = 0.85 + 0.3 * hash21(floor(fine)) * (1.0 - smoothstep(0.2, 0.5, footprint * 120.0));
    vec3 grey = vec3(0.5, 0.52, 0.55) * tone * detail * (1.0 - 0.35 * seams);
    float trench = 1.0 - smoothstep(0.012, 0.02, abs(latitude));
    grey *= 1.0 - 0.7 * trench;
    // The dish: a crater at 30 degrees north, its rim raised, its bowl lit from the far side.
    vec3 dishAt = normalize(vec3(0.45, 0.5, 0.74));
    float dishAngle = acos(clamp(dot(t, dishAt), -1.0, 1.0));
    float dish = 1.0 - smoothstep(0.2, 0.215, dishAngle);
    float rim = exp(-pow(abs(dishAngle - 0.215) / 0.012, 2.0));
    vec3 bowl = normalize(dishAt - t * 0.6);
    float light = max(dot(n, sun), 0.0);
    float bowlLight = max(dot(-bowl, sun), 0.0) * 0.8;
    vec3 lit = mix(grey * light, grey * 0.8 * bowlLight, dish) + vec3(0.7) * rim * light;
    lit += vec3(0.3, 1.0, 0.35) * exp(-dishAngle * dishAngle * 900.0) * 0.6;
    // Lights along the latitudes on the dark side, and in the trench.
    vec2 lamp = vec2(longitude * 160.0, latitude * 60.0);
    float lamps = step(0.93, hash21(floor(lamp))) * (1.0 - smoothstep(0.15, 0.45, footprint * 160.0));
    vec3 night = vec3(1.0, 0.85, 0.6) * (lamps * 0.8 + trench * 0.25) * (1.0 - smoothstep(-0.1, 0.25, dot(n, sun)));
    vec3 surface = lit * 1.2 + night + grey * 0.03;
    float built = 1.0;
    if (second) {
      // Past this edge only the frame is up: lines of latitude and longitude, open between.
      float edge = dot(t, normalize(vec3(-0.8, -0.2, 0.3))) + 0.15 * fbm3(t * 4.0);
      if (edge > 0.25) {
        vec2 frame = abs(fract(vec2(longitude * 12.0, latitude * 10.0)) - 0.5);
        float strut = 1.0 - smoothstep(0.0, max(0.03, footprint * 12.0), 0.5 - max(frame.x, frame.y));
        built = strut;
        surface = vec3(0.35, 0.36, 0.38) * (light * 0.9 + 0.05) * strut;
      }
    }
    return vec4(surface, built);
  }
  #endif
`;
