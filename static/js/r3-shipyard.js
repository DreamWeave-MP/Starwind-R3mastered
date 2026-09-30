// The hero's shipyard, for r3-ships.js: every hull and fighter it can fly, the factions that fly
// them, and the scenarios a load can pick from.
//
// Each ship is built from a few primitives (boxes, cylinders, spheres, tori and hand-made hulls)
// merged into one geometry whose `aKind` attribute tells the shader what each part is: 0 hull,
// 1 fittings, 2 engine, 3 superstructure with ports, 4 wing with a painted band, 5 canopy,
// 6 painted, 7 solar panel. A hull is one unit long along +z, its nose forward. With it comes where its
// extremes are, which the contact brackets fit, and where its running lights, engines and cannons
// sit.
//
// A faction is a livery (hull, paint, engine and laser colours), a fleet of capital ships and a
// wing of fighters. A scenario picks an era's two sides and whether this load shows one side on
// patrol or the two at war, so the same few primitives make many different skies.

import * as THREE from './vendor/three.module.min.js';
import { arc170, interdictor, mantaris, sithFighter, starbongo, warBongo } from './r3-shipyard-lore.js'; // [r3:lore]

// Geometry --------------------------------------------------------------------------------------

// [r3:lore] Counted first and copied a part at a time into typed arrays, rather than a vertex at a
// time through getters: a Gungan war bongo took twice as long to build as a star destroyer.
export function merge(parts) {
  const flats = parts.map(({ geometry, matrix, kind }) => {
    const flat = geometry.index ? geometry.toNonIndexed() : geometry;
    if (matrix) flat.applyMatrix4(matrix);
    return { position: flat.getAttribute('position'), normal: flat.getAttribute('normal'), kind };
  });
  const count = flats.reduce((sum, { position }) => sum + position.count, 0);
  const positions = new Float32Array(count * 3);
  const normals = new Float32Array(count * 3);
  const kinds = new Float32Array(count);
  let offset = 0;
  for (const { position, normal, kind } of flats) {
    positions.set(position.array.subarray(0, position.count * 3), offset * 3);
    normals.set(normal.array.subarray(0, position.count * 3), offset * 3);
    kinds.fill(kind, offset, offset + position.count);
    offset += position.count;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geometry.setAttribute('aKind', new THREE.BufferAttribute(kinds, 1));
  return geometry;
}

// A closed hull from triangles, each turned to face away from the given centre, with flat normals.
export function hull(triangles, centre) {
  const positions = [];
  const normals = [];
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  const n = new THREE.Vector3();
  const mid = new THREE.Vector3();
  for (const [p, q, r] of triangles) {
    a.fromArray(p);
    b.fromArray(q);
    c.fromArray(r);
    n.subVectors(b, a).cross(c.clone().sub(a)).normalize();
    mid.copy(a).add(b).add(c).divideScalar(3).sub(centre);
    if (n.dot(mid) < 0) {
      [b.x, b.y, b.z, c.x, c.y, c.z] = [c.x, c.y, c.z, b.x, b.y, b.z];
      n.negate();
    }
    for (const v of [a, b, c]) {
      positions.push(v.x, v.y, v.z);
      normals.push(n.x, n.y, n.z);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  return geometry;
}

const at = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
const along = new THREE.Matrix4().makeRotationX(Math.PI / 2);
const facingBack = new THREE.Matrix4().makeRotationY(Math.PI);
const scaled = (x, y, z) => new THREE.Matrix4().makeScale(x, y, z);
const v3 = (points) => points.map((point) => new THREE.Vector3(...point));

// Capital ships ------------------------------------------------------------------------------------

// The wedge: a dagger with walls along its edges, a dorsal wedge on the spine, a stepped
// superstructure up to a masted bridge tower, turbolaser batteries down both edges and greebles
// over the deck. Star destroyers of every era are this, in different liveries.
// [r3:lore] `half` is half the beam for a length of one: an Imperial-class is 1,600 by 985 m
// (0.31), a Venator 1,137-1,155 by 548 m (0.24), a Resurgent 2,916 by 1,484 m (0.25). `towers` is
// 2 for the Venator's twin command towers.
function wedge(random, { half: W = 0.38, towers = 1 } = {}) {
  const k = W / 0.38;
  const nose = [0, 0.006, 0.5];
  const keel = [0, -0.006, 0.5];
  const leftTop = [-W, 0.014, -0.5];
  const leftBottom = [-W, -0.014, -0.5];
  const rightTop = [W, 0.014, -0.5];
  const rightBottom = [W, -0.014, -0.5];
  const ridge = [0, 0.075, -0.5];
  const belly = [0, -0.05, -0.5];
  const stern = [0, 0.004, -0.5];
  const parts = [{ geometry: hull([
    [nose, leftTop, ridge], [nose, ridge, rightTop],
    [keel, belly, leftBottom], [keel, rightBottom, belly],
    [nose, keel, leftBottom], [nose, leftBottom, leftTop],
    [nose, rightTop, rightBottom], [nose, rightBottom, keel],
    [stern, leftTop, ridge], [stern, ridge, rightTop], [stern, rightTop, rightBottom],
    [stern, rightBottom, belly], [stern, belly, leftBottom], [stern, leftBottom, leftTop],
  ], new THREE.Vector3(0, 0, -0.17)), kind: 0 }];
  // The dorsal wedge, painted in liveries that stripe it (a Venator's red).
  parts.push({ geometry: hull([
    [[0, 0.03, 0.2], [-0.14 * k, 0.05, -0.5], [0, 0.1, -0.5]], [[0, 0.03, 0.2], [0, 0.1, -0.5], [0.14 * k, 0.05, -0.5]],
    [[0, 0.03, 0.2], [0, 0.02, -0.5], [-0.14 * k, 0.05, -0.5]], [[0, 0.03, 0.2], [0.14 * k, 0.05, -0.5], [0, 0.02, -0.5]],
    [[-0.14 * k, 0.05, -0.5], [0, 0.02, -0.5], [0, 0.1, -0.5]], [[0, 0.1, -0.5], [0, 0.02, -0.5], [0.14 * k, 0.05, -0.5]],
  ], new THREE.Vector3(0, 0.05, -0.27)), kind: 6 });
  const box = (w, h, d, x, y, z, kind) => parts.push({ geometry: new THREE.BoxGeometry(w, h, d), matrix: at(x, y, z), kind });
  box(0.3 * k, 0.05, 0.3, 0, 0.09, -0.36, 3);
  box(0.22 * k, 0.045, 0.22, 0, 0.13, -0.4, 3);
  box(0.15 * k, 0.04, 0.15, 0, 0.165, -0.43, 3);
  box(0.36 * k, 0.02, 0.06, 0, 0.1, -0.24, 1);
  // The command tower, or two side by side.
  const towerAt = towers === 2 ? [-0.075, 0.075] : [0];
  const bar = towers === 2 ? 0.08 : 0.21;
  for (const tx of towerAt) {
    box(0.04, 0.07, 0.05, tx, 0.215, -0.44, 1);
    box(bar, 0.028, 0.055, tx, 0.26, -0.44, 3);
    for (const dx of towers === 2 ? [-0.028, 0.028] : [-0.07, 0.07]) parts.push({ geometry: new THREE.SphereGeometry(towers === 2 ? 0.014 : 0.02, 12, 10), matrix: at(tx + dx, 0.285, -0.44), kind: 1 });
  }
  box(0.004, 0.05, 0.004, towerAt[0] + 0.03, 0.3, -0.45, 1);
  box(0.003, 0.035, 0.003, towerAt[towerAt.length - 1] - 0.025, 0.29, -0.45, 1);
  const deck = (x, z) => {
    const u = THREE.MathUtils.clamp(0.5 - z, 0, 1);
    const half = Math.max(W * u, 1e-3);
    const crest = 0.006 + 0.069 * u;
    const edge = 0.006 + 0.008 * u;
    return crest + (edge - crest) * Math.min(1, Math.abs(x) / half);
  };
  for (let i = 0; i < 11; i++) {
    const z = 0.28 - i * 0.07;
    for (const s of [-1, 1]) {
      const x = s * W * (0.5 - z) * 0.78;
      const y = deck(x, z);
      parts.push({ geometry: new THREE.CylinderGeometry(0.009, 0.011, 0.008, 10), matrix: at(x, y + 0.004, z), kind: 1 });
      box(0.004, 0.004, 0.022, x - 0.003, y + 0.009, z + 0.01, 1);
      box(0.004, 0.004, 0.022, x + 0.003, y + 0.009, z + 0.01, 1);
    }
  }
  for (let i = 0; i < 110; i++) {
    const z = 0.35 - Math.pow(random(), 0.7) * 0.8;
    const x = (random() * 2 - 1) * W * (0.5 - z) * 0.85;
    const w = 0.006 + random() * 0.02;
    const h = 0.002 + random() * 0.008;
    box(w, h, 0.006 + random() * 0.03, x, deck(x, z) + h / 2, z, 1);
  }
  for (const [x, y, r] of [[-0.12 * k, 0.0, 0.045], [0, 0.025, 0.05], [0.12 * k, 0.0, 0.045]]) {
    parts.push({ geometry: new THREE.CylinderGeometry(r, r * 1.15, 0.08, 24), matrix: at(x, y, -0.53).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CylinderGeometry(r * 0.8, r * 0.8, 0.012, 24), matrix: at(x, y, -0.57).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(r * 0.78, 24), matrix: at(x, y, -0.5765).multiply(facingBack), kind: 2 });
  }
  for (const x of [-0.21 * k, 0.21 * k]) {
    parts.push({ geometry: new THREE.CylinderGeometry(0.016, 0.018, 0.05, 12), matrix: at(x, 0.0, -0.52).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(0.013, 12), matrix: at(x, 0.0, -0.5455).multiply(facingBack), kind: 2 });
  }
  return {
    geometry: merge(parts),
    extremes: v3([[0, 0, 0.5], [-W, 0, -0.5], [W, 0, -0.5], [0, -0.05, -0.5], [0, 0.33, -0.45], [-0.11, 0.26, -0.44], [0.11, 0.26, -0.44], [-0.12 * k, 0, -0.58], [0.12 * k, 0, -0.58], [0, 0.07, -0.58]]),
    lights: [[-W + 0.005, 0.0, -0.49], [W - 0.005, 0.0, -0.49], [towerAt[0] + 0.03, 0.33, -0.45], [0, 0.012, 0.495]],
  };
}

// The ring and core: a Separatist battleship. A flattened ring open at the bow round a central
// sphere with its command tower, engines across the ring's stern, hangar lights along its inner edge.
function ringAndCore(random) {
  const parts = [];
  const gap = 0.7;
  const ring = new THREE.TorusGeometry(0.4, 0.1, 14, 72, Math.PI * 2 - gap);
  // The torus lies in xy from +x round to its gap; stood in xz and turned, its gap faces the bow.
  parts.push({ geometry: ring, matrix: new THREE.Matrix4().makeRotationY(-Math.PI / 2 - gap / 2).multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2)).multiply(scaled(1, 1, 0.38)), kind: 3 });
  // [r3:lore] The core and its tower stand 0.31 of the length tall, as the canon 3,356.9 by
  // 1,028.77 m does; the core was a sphere of 0.34 before, and the whole 0.39 tall.
  parts.push({ geometry: new THREE.SphereGeometry(0.133, 32, 20), matrix: at(0, 0, 0.05), kind: 0 });
  parts.push({ geometry: new THREE.SphereGeometry(0.04, 16, 10), matrix: at(0, 0.165, 0.02), kind: 1 });
  parts.push({ geometry: new THREE.CylinderGeometry(0.022, 0.034, 0.06, 12), matrix: at(0, 0.135, 0.03), kind: 1 });
  parts.push({ geometry: new THREE.BoxGeometry(0.34, 0.07, 0.1), matrix: at(0, 0, -0.44), kind: 1 });
  for (let i = 0; i < 6; i++) {
    const x = -0.14 + i * 0.056;
    parts.push({ geometry: new THREE.CircleGeometry(0.021, 14), matrix: at(x, 0, -0.4905).multiply(facingBack), kind: 2 });
  }
  // Hangar bays: lit slots along the ring's inner rim.
  for (let i = 0; i < 16; i++) {
    const angle = Math.PI + gap / 2 + (i + 0.5) * ((Math.PI * 2 - gap) / 16);
    const radius = 0.3;
    parts.push({ geometry: new THREE.BoxGeometry(0.03, 0.02, 0.006), matrix: at(Math.sin(angle) * radius, 0, Math.cos(angle) * radius).multiply(new THREE.Matrix4().makeRotationY(angle)), kind: 3 });
  }
  for (let i = 0; i < 40; i++) {
    const angle = random() * Math.PI * 2;
    if (Math.abs(((angle + Math.PI) % (Math.PI * 2)) - Math.PI) < gap / 2 + 0.05) continue;
    const radius = 0.34 + random() * 0.12;
    parts.push({ geometry: new THREE.BoxGeometry(0.01 + random() * 0.03, 0.006 + random() * 0.01, 0.01 + random() * 0.03), matrix: at(Math.sin(angle) * radius, 0.035, Math.cos(angle) * radius), kind: 1 });
  }
  return {
    geometry: merge(parts),
    extremes: v3([[-0.5, 0, 0], [0.5, 0, 0], [0, 0, -0.5], [0.2, 0, 0.46], [-0.2, 0, 0.46], [0, 0.205, 0.02], [0, -0.133, 0.05]]),
    lights: [[0.18, 0.02, 0.45], [-0.18, 0.02, 0.45], [0, 0.205, 0.02]],
  };
}

// The organic cruiser: a Mon Calamari ship, a long rounded hull swollen with pods and blisters, a
// bridge dome at the bow and a crescent of engines astern.
function organicCruiser(random) {
  const parts = [];
  parts.push({ geometry: new THREE.SphereGeometry(0.5, 40, 24), matrix: scaled(0.2, 0.13, 1), kind: 3 });
  for (let i = 0; i < 14; i++) {
    const z = -0.35 + random() * 0.7;
    const side = random() < 0.5 ? -1 : 1;
    const span = Math.sqrt(Math.max(0, 1 - (z / 0.5) ** 2));
    const x = side * 0.085 * span;
    const y = (random() - 0.35) * 0.06 * span;
    const r = 0.035 + random() * 0.05;
    parts.push({ geometry: new THREE.SphereGeometry(0.5, 20, 12), matrix: at(x, y, z).multiply(scaled(r * 1.4, r, r * 3)), kind: random() < 0.5 ? 3 : 0 });
  }
  parts.push({ geometry: new THREE.SphereGeometry(0.5, 20, 12), matrix: at(0, 0.075, 0.3).multiply(scaled(0.07, 0.05, 0.12)), kind: 5 });
  parts.push({ geometry: new THREE.BoxGeometry(0.012, 0.09, 0.2), matrix: at(0, 0.1, -0.2), kind: 1 });
  parts.push({ geometry: new THREE.CylinderGeometry(0.058, 0.07, 0.1, 20), matrix: at(0, 0, -0.45).multiply(along).multiply(scaled(1, 1, 0.7)), kind: 1 });
  for (let i = 0; i < 7; i++) {
    const angle = -1.1 + i * 0.366;
    parts.push({ geometry: new THREE.CircleGeometry(0.013, 12), matrix: at(Math.sin(angle) * 0.04, Math.cos(angle) * 0.022 - 0.005, -0.5005).multiply(facingBack), kind: 2 });
  }
  return {
    geometry: merge(parts),
    extremes: v3([[0, 0, 0.5], [0, 0, -0.5], [-0.13, 0, 0], [0.13, 0, 0], [0, 0.15, -0.2], [0, -0.08, 0]]),
    lights: [[0, 0.1, 0.33], [0.1, 0, 0], [-0.1, 0, 0]],
  };
}

// The hammerhead: a long box of a hull with the wide flat bow it is named for, a dorsal tower and
// an engine block, painted along the bow's edge. The Republic of the old wars flew these.
function hammerhead(random) {
  const parts = [];
  const box = (w, h, d, x, y, z, kind) => parts.push({ geometry: new THREE.BoxGeometry(w, h, d), matrix: at(x, y, z), kind });
  box(0.1, 0.09, 0.72, 0, 0, -0.08, 0);
  box(0.46, 0.035, 0.12, 0, 0.005, 0.38, 3);
  box(0.46, 0.012, 0.03, 0, 0.005, 0.455, 6);
  box(0.14, 0.03, 0.2, 0, 0.005, 0.26, 0);
  box(0.05, 0.12, 0.1, 0, 0.1, -0.12, 3);
  box(0.09, 0.02, 0.05, 0, 0.165, -0.12, 1);
  box(0.2, 0.13, 0.16, 0, 0, -0.42, 1);
  box(0.21, 0.02, 0.17, 0, 0.0, -0.42, 6);
  for (const x of [-0.26, 0.26]) box(0.016, 0.1, 0.06, x * 0.6, 0, -0.3, 1);
  for (let i = 0; i < 30; i++) box(0.006 + random() * 0.02, 0.006 + random() * 0.01, 0.01 + random() * 0.04, (random() - 0.5) * 0.08, 0.045 + random() * 0.01, -0.4 + random() * 0.6, 1);
  for (const [x, y] of [[-0.055, 0.03], [0.055, 0.03], [-0.055, -0.03], [0.055, -0.03]]) {
    parts.push({ geometry: new THREE.CircleGeometry(0.026, 16), matrix: at(x, y, -0.5005).multiply(facingBack), kind: 2 });
  }
  return {
    geometry: merge(parts),
    extremes: v3([[-0.23, 0, 0.44], [0.23, 0, 0.44], [0, 0.18, -0.12], [0, -0.07, -0.42], [-0.1, 0, -0.5], [0.1, 0, -0.5]]),
    lights: [[-0.23, 0.01, 0.44], [0.23, 0.01, 0.44], [0, 0.18, -0.12]],
  };
}

const CAPITALS = { wedge, ringAndCore, organicCruiser, hammerhead, interdictor, mantaris, warBongo }; // [r3:lore] the last three

// [r3:lore] options: a side's proportions for this hull (FACTIONS[side].shapes[kind]).
export function buildCapital(kind, random, options = undefined) {
  return CAPITALS[kind](random, options);
}

// Fighters -------------------------------------------------------------------------------------------

// An X-wing: a fuselage with a tapering nose and a canopy, four wings open in an X with a painted
// band, an engine at each wing root and a cannon at each tip.
function xwing() {
  const parts = [];
  parts.push({ geometry: new THREE.BoxGeometry(0.12, 0.11, 0.55), matrix: at(0, 0, -0.2), kind: 0 });
  const w = 0.06;
  const h = 0.055;
  parts.push({ geometry: hull([
    [[-w, -h, 0.075], [w, -h, 0.075], [w, h, 0.075]], [[-w, -h, 0.075], [w, h, 0.075], [-w, h, 0.075]],
    [[-w, h, 0.075], [w, h, 0.075], [0.02, 0.02, 0.5]], [[-w, h, 0.075], [0.02, 0.02, 0.5], [-0.02, 0.02, 0.5]],
    [[-w, -h, 0.075], [0.02, -0.02, 0.5], [w, -h, 0.075]], [[-w, -h, 0.075], [-0.02, -0.02, 0.5], [0.02, -0.02, 0.5]],
    [[w, -h, 0.075], [0.02, -0.02, 0.5], [0.02, 0.02, 0.5]], [[w, -h, 0.075], [0.02, 0.02, 0.5], [w, h, 0.075]],
    [[-w, -h, 0.075], [-0.02, 0.02, 0.5], [-0.02, -0.02, 0.5]], [[-w, -h, 0.075], [-w, h, 0.075], [-0.02, 0.02, 0.5]],
    [[-0.02, -0.02, 0.5], [-0.02, 0.02, 0.5], [0.02, 0.02, 0.5]], [[-0.02, -0.02, 0.5], [0.02, 0.02, 0.5], [0.02, -0.02, 0.5]],
  ], new THREE.Vector3(0, 0, 0.22)), kind: 0 });
  parts.push({ geometry: new THREE.BoxGeometry(0.07, 0.045, 0.14), matrix: at(0, 0.07, -0.02), kind: 5 });
  const open = 0.24;
  const tips = [];
  for (const angle of [open, -open, Math.PI - open, Math.PI + open]) {
    const turn = new THREE.Matrix4().makeRotationZ(angle);
    parts.push({ geometry: new THREE.BoxGeometry(0.42, 0.012, 0.2), matrix: turn.clone().multiply(at(0.26, 0, -0.32)), kind: 4 });
    parts.push({ geometry: new THREE.BoxGeometry(0.012, 0.012, 0.52), matrix: turn.clone().multiply(at(0.47, 0, -0.16)), kind: 1 });
    parts.push({ geometry: new THREE.CylinderGeometry(0.03, 0.034, 0.22, 14), matrix: turn.clone().multiply(at(0.1, 0, -0.32)).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(0.026, 14), matrix: turn.clone().multiply(at(0.1, 0, -0.4305)).multiply(facingBack), kind: 2 });
    tips.push([Math.cos(angle) * 0.47, Math.sin(angle) * 0.47, 0.1]);
  }
  return { geometry: merge(parts), engines: [[0.1, 0, -0.44], [-0.1, 0, -0.44]], cannons: tips };
}

// A TIE: a ball cockpit on two pylons between hexagonal solar panels, each a dark field in a frame.
function tie() {
  const parts = [];
  parts.push({ geometry: new THREE.SphereGeometry(0.13, 24, 16), kind: 0 });
  parts.push({ geometry: new THREE.CircleGeometry(0.07, 8), matrix: at(0, 0, 0.1305), kind: 5 });
  parts.push({ geometry: new THREE.BoxGeometry(0.54, 0.035, 0.05), kind: 1 });
  const edgeOn = new THREE.Matrix4().makeRotationZ(Math.PI / 2);
  for (const x of [-0.27, 0.27]) {
    parts.push({ geometry: new THREE.CylinderGeometry(0.42, 0.42, 0.012, 6), matrix: at(x, 0, 0).multiply(edgeOn), kind: 7 });
    parts.push({ geometry: new THREE.CylinderGeometry(0.43, 0.43, 0.02, 6, 1, true), matrix: at(x, 0, 0).multiply(edgeOn), kind: 0 });
    for (let i = 0; i < 3; i++) {
      parts.push({ geometry: new THREE.BoxGeometry(0.02, 0.83, 0.022), matrix: at(x, 0, 0).multiply(new THREE.Matrix4().makeRotationX((i * Math.PI) / 3)), kind: 0 });
    }
  }
  parts.push({ geometry: new THREE.CircleGeometry(0.03, 12), matrix: at(0, 0, -0.1305).multiply(facingBack), kind: 2 });
  return { geometry: merge(parts), engines: [[0, 0, -0.14]], cannons: [[0.04, -0.06, 0.12], [-0.04, -0.06, 0.12]] };
}

// An A-wing: a flat wedge between two big engines, painted.
function awing() {
  const parts = [];
  parts.push({ geometry: hull([
    [[0, 0.03, 0.5], [-0.28, 0, -0.25], [0, 0.07, -0.25]], [[0, 0.03, 0.5], [0, 0.07, -0.25], [0.28, 0, -0.25]],
    [[0, -0.01, 0.5], [0, -0.03, -0.25], [-0.28, 0, -0.25]], [[0, -0.01, 0.5], [0.28, 0, -0.25], [0, -0.03, -0.25]],
    [[-0.28, 0, -0.25], [0, -0.03, -0.25], [0, 0.07, -0.25]], [[0, 0.07, -0.25], [0, -0.03, -0.25], [0.28, 0, -0.25]],
    [[0, 0.03, 0.5], [0, -0.01, 0.5], [-0.28, 0, -0.25]], [[0, 0.03, 0.5], [0.28, 0, -0.25], [0, -0.01, 0.5]],
  ], new THREE.Vector3(0, 0.01, 0)), kind: 6 });
  parts.push({ geometry: new THREE.BoxGeometry(0.06, 0.035, 0.12), matrix: at(0, 0.075, -0.05), kind: 5 });
  for (const x of [-0.25, 0.25]) {
    parts.push({ geometry: new THREE.CylinderGeometry(0.045, 0.05, 0.36, 14), matrix: at(x, 0, -0.2).multiply(along), kind: 0 });
    parts.push({ geometry: new THREE.CircleGeometry(0.04, 14), matrix: at(x, 0, -0.3805).multiply(facingBack), kind: 2 });
    parts.push({ geometry: new THREE.BoxGeometry(0.01, 0.1, 0.12), matrix: at(x, 0.06, -0.3), kind: 1 });
  }
  return { geometry: merge(parts), engines: [[0.25, 0, -0.39], [-0.25, 0, -0.39]], cannons: [[0.26, -0.03, 0.02], [-0.26, -0.03, 0.02]] };
}

// A tri-fighter: a ball with three long arms at a third of a turn apart, and an eye.
function trifighter() {
  const parts = [];
  parts.push({ geometry: new THREE.SphereGeometry(0.12, 24, 16), kind: 0 });
  parts.push({ geometry: new THREE.CircleGeometry(0.045, 16), matrix: at(0, 0, 0.1205), kind: 5 });
  const tips = [];
  for (let i = 0; i < 3; i++) {
    const angle = Math.PI / 2 + (i * Math.PI * 2) / 3;
    const turn = new THREE.Matrix4().makeRotationZ(angle - Math.PI / 2);
    parts.push({ geometry: new THREE.BoxGeometry(0.05, 0.4, 0.06), matrix: turn.clone().multiply(at(0, 0.28, -0.02)), kind: 6 });
    parts.push({ geometry: new THREE.BoxGeometry(0.014, 0.014, 0.16), matrix: turn.clone().multiply(at(0, 0.46, 0.05)), kind: 1 });
    tips.push([Math.cos(angle) * 0.46, Math.sin(angle) * 0.46, 0.13]);
  }
  parts.push({ geometry: new THREE.CircleGeometry(0.035, 12), matrix: at(0, 0, -0.1205).multiply(facingBack), kind: 2 });
  return { geometry: merge(parts), engines: [[0, 0, -0.13]], cannons: tips };
}

const FIGHTERS = { xwing, tie, awing, trifighter, arc170, sithFighter, starbongo }; // [r3:lore] the last three

export function buildFighter(kind) {
  return FIGHTERS[kind]();
}

// Factions and scenarios ------------------------------------------------------------------------

// [r3:lore] Checked ship by ship in content/docs/hero-shipyard.md: canon where canon speaks, Legends
// for the Old Republic that Starwind is set in. A capital is [hull, class and length, shape]; the
// shape is the hull's proportions for that class (see wedge), and ships of one side with the same
// hull and shape share one model.
const IMPERIAL = { half: 0.31 };
export const FACTIONS = {
  empire: { name: 'Imperial Navy', hull: '#7a7f87', paint: '#6a6f76', engine: '#9fd8ff', laser: '#56ff6a', fighters: ['tie'],
    capitals: [['wedge', 'Imperial-class · 1,600 m', IMPERIAL], ['wedge', 'Victory-class · 900 m', IMPERIAL], ['wedge', 'Tector-class · 1,600 m', IMPERIAL], ['wedge', 'Interdictor-class · 1,600 m', IMPERIAL]] },
  rebels: { name: 'Rebel Alliance', hull: '#b8bcc2', paint: '#b8321f', engine: '#ff7a52', laser: '#ff4a3a', fighters: ['xwing', 'awing'],
    capitals: [['organicCruiser', 'MC80 Liberty · 1,200 m'], ['organicCruiser', 'MC80A Home One · 1,300 m'], ['hammerhead', 'Sphyrna-class · 117 m']] },
  republic: { name: 'Republic Navy', hull: '#cfccc4', paint: '#9a2a22', engine: '#8fd0ff', laser: '#5ab8ff', fighters: ['arc170'],
    capitals: [['wedge', 'Venator-class · 1,137 m', { half: 0.24, towers: 2 }], ['wedge', 'Acclamator I-class · 752 m', { half: 0.3 }]] },
  separatists: { name: 'Separatist Navy', hull: '#9a8a6a', paint: '#6e6a74', engine: '#7ab8ff', laser: '#ff5a3a', fighters: ['trifighter'],
    capitals: [['ringAndCore', 'Lucrehulk-class · 3,357 m']] },
  firstOrder: { name: 'First Order', hull: '#4c5058', paint: '#2e3136', engine: '#9fd8ff', laser: '#56ff6a', fighters: ['tie'],
    capitals: [['wedge', 'Resurgent-class · 2,916 m', { half: 0.255 }]] },
  resistance: { name: 'Resistance', hull: '#c4c0b8', paint: '#d4722a', engine: '#ff8a4a', laser: '#ff4a3a', fighters: ['xwing', 'awing'],
    capitals: [['organicCruiser', 'MC85 Raddus · 3,438 m'], ['hammerhead', 'Sphyrna-class · 117 m']] },
  oldRepublic: { name: 'Old Republic', hull: '#c4bca8', paint: '#8a2a22', engine: '#9fd8ff', laser: '#ff6a3a', fighters: ['awing'],
    capitals: [['hammerhead', 'Hammerhead-class · 315 m'], ['hammerhead', 'Endar Spire · Hammerhead-class · 315 m']] },
  sith: { name: 'Sith Empire', hull: '#3e3a40', paint: '#8a1a1a', engine: '#ff6a4a', laser: '#ff3a3a', fighters: ['sithFighter'],
    capitals: [['interdictor', 'Leviathan · Interdictor-class · 600 m'], ['interdictor', 'Interdictor-class · 600 m']] },
  // The Gungan Grand Army took to space alongside the Republic: the Mantaris is Legends; the war
  // bongo, the fighters and the armada's name are this site's extrapolation. Boomas, not lasers; a
  // hydrostatic bubble for a shield; coral hulls, not plating.
  gungan: { name: 'Gungan Grand Armada', hull: '#b87a40', paint: '#b8402c', engine: '#5ad8ff', laser: '#7fe6ff', bolt: 'booma', shield: 'bubble',
    material: { textured: false, panels: 2.5, windows: 0.7, selfLit: 0.22 }, fighterMaterial: { panels: 2, selfLit: 0.22 }, fighters: ['starbongo'],
    capitals: [['mantaris', 'Mantaris-class · 98 m'], ['warBongo', 'Bombad-class war bongo · 410 m']] },
};

// An era's two sides.
// [r3:memory] Exported for r3-memory.js's steering.
export const ERAS = [['rebels', 'empire'], ['republic', 'separatists'], ['resistance', 'firstOrder'], ['oldRepublic', 'sith'], ['gungan', 'separatists']]; // [r3:lore] Gungans fought the Separatists (The Clone Wars, "Shadow Warrior")

// This load's scenario: one side on patrol, or two sides at war, when the capital ships fight and the
// fighters meet in dogfights. After a jump the address no longer counts (fresh).
export function pickScenario(random, { fresh = false } = {}) {
  const query = new URLSearchParams(fresh ? '' : location.search);
  const eraIndex = ERAS.findIndex(([a, b]) => a === query.get('fleet') || b === query.get('fleet'));
  const era = eraIndex >= 0 ? ERAS[eraIndex] : ERAS[Math.floor(random() * ERAS.length)];
  const war = query.has('war') ? query.get('war') !== '0' : random() < 0.5;
  const first = query.get('fleet') && era.includes(query.get('fleet')) ? query.get('fleet') : era[Math.floor(random() * 2)];
  const second = era[0] === first ? era[1] : era[0];
  return { war, sides: war ? [first, second] : [first] };
}
