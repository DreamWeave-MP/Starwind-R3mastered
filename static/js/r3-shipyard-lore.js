// [r3:lore] Hulls the shipyard lacked: the Old Republic's own ships for Starwind's era, the Clone
// Wars Republic's fighter, and the Gungans'. Each is built like the rest of r3-shipyard.js: one unit
// long along +z, nose forward, from primitives merged into one geometry whose `aKind` picks the
// shading (see r3-shipyard.js; this file adds 8, luminous paint, and 9, a hydrostatic bubble).
//
// What each is based on, and which parts are extrapolation, is recorded in
// content/docs/hero-shipyard.md.

import * as THREE from './vendor/three.module.min.js';
import { hull, merge } from './r3-shipyard.js';

const at = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
const along = new THREE.Matrix4().makeRotationX(Math.PI / 2);
const facingBack = new THREE.Matrix4().makeRotationY(Math.PI);
const scaled = (x, y, z) => new THREE.Matrix4().makeScale(x, y, z);
const turnY = (angle) => new THREE.Matrix4().makeRotationY(angle);
const turnZ = (angle) => new THREE.Matrix4().makeRotationZ(angle);
const v3 = (points) => points.map((point) => new THREE.Vector3(...point));

// A flat shape seen from above, (x, forward) pairs for its right half from the nose round to the
// tail, mirrored for the left and smoothed through, then given a rounded edge: a manta's wings.
// For a spline, three.js divides each span by `detail`, so the outline has about detail times as
// many points as `right` has pairs.
function planform(right, { nose, depth = 0.02, bevel = 0.016, smooth = true, detail = 6, bevels = 3 }) {
  const shape = new THREE.Shape();
  shape.moveTo(0, nose);
  const left = right.slice(0, -1).reverse().map(([x, s]) => [-x, s]);
  const points = [...right, ...left, [0, nose]].map(([x, s]) => new THREE.Vector2(x, s));
  if (smooth) shape.splineThru(points);
  else for (const point of points) shape.lineTo(point.x, point.y);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: bevels, curveSegments: detail, steps: 1,
  });
  // Shape y is forward (+z); the extrusion becomes the thickness, centred on y = 0.
  geometry.applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI / 2));
  geometry.applyMatrix4(at(0, depth / 2, 0));
  return geometry;
}

// A tentacle that spirals back from a root, as a bongo's electromotive drive does.
function tentacle(root, { reach = 0.25, turns = 1.2, radius = 0.012, phase = 0, spread = 0.03, segments = 36, sides = 7 }) {
  const points = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    const angle = phase + t * turns * Math.PI * 2;
    const r = spread * t * (1 - 0.4 * t);
    points.push(new THREE.Vector3(root[0] + Math.cos(angle) * r + root[0] * t * 0.5, root[1] + Math.sin(angle) * r, root[2] - reach * t));
  }
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), segments, radius, sides, false);
}

const sphere = (radius, x, y, z, kind, segments = 20) => ({ geometry: new THREE.SphereGeometry(radius, segments, Math.round(segments * 0.65)), matrix: at(x, y, z), kind });

// Capital ships ------------------------------------------------------------------------------------

// The Interdictor-class cruiser of the Mandalorian Wars and the Jedi Civil War, the Leviathan's
// class: 600 m, its hull split into a dorsal and a ventral structure, commanded from a sternward
// tower, driven by three main thrusters and four auxiliaries, and carrying four gravity-well
// projectors (Legends, the KOTOR sourcebooks). Where the projectors sit is not described; here they
// stand on the two hulls' flanks.
export function interdictor(random) {
  const parts = [];
  const blade = (y, noseY, half, ridge, belly, t = 0.011) => {
    const nose = [0, noseY + t * 0.5, 0.5];
    const keel = [0, noseY - t * 0.5, 0.5];
    const leftTop = [-half, y + t, -0.5];
    const leftBottom = [-half, y - t, -0.5];
    const rightTop = [half, y + t, -0.5];
    const rightBottom = [half, y - t, -0.5];
    const crest = [0, y + ridge, -0.5];
    const under = [0, y - belly, -0.5];
    const stern = [0, y, -0.5];
    return hull([
      [nose, leftTop, crest], [nose, crest, rightTop],
      [keel, under, leftBottom], [keel, rightBottom, under],
      [nose, keel, leftBottom], [nose, leftBottom, leftTop],
      [nose, rightTop, rightBottom], [nose, rightBottom, keel],
      [stern, leftTop, crest], [stern, crest, rightTop], [stern, rightTop, rightBottom],
      [stern, rightBottom, under], [stern, under, leftBottom], [stern, leftBottom, leftTop],
    ], new THREE.Vector3(0, y, -0.17));
  };
  // The split: the dorsal blade rises toward the bow and the ventral one falls, like a jaw.
  const upper = { y: 0.05, noseY: 0.11, half: 0.27, ridge: 0.055, belly: 0.012, t: 0.011 };
  const lower = { y: -0.05, noseY: -0.1, half: 0.23, ridge: 0.024, belly: 0.05, t: 0.018 };
  for (const b of [upper, lower]) parts.push({ geometry: blade(b.y, b.noseY, b.half, b.ridge, b.belly, b.t), kind: 0 });
  // A point on a blade's outer face (the upper's top, the lower's bottom), at x across and z along.
  const surface = (b, x, z, top) => {
    const u = THREE.MathUtils.clamp(0.5 - z, 0, 1);
    const tip = b.noseY + (top ? b.t * 0.5 : -b.t * 0.5);
    const centre = tip + ((top ? b.y + b.ridge : b.y - b.belly) - tip) * u;
    const edge = tip + ((top ? b.y + b.t : b.y - b.t) - tip) * u;
    return centre + (edge - centre) * Math.min(1, Math.abs(x) / Math.max(b.half * u, 1e-3));
  };
  const box = (w, h, d, x, y, z, kind) => parts.push({ geometry: new THREE.BoxGeometry(w, h, d), matrix: at(x, y, z), kind });
  // The stern block that joins them, and the command tower on it.
  box(0.3, 0.15, 0.17, 0, 0, -0.43, 3);
  box(0.26, 0.02, 0.2, 0, 0.085, -0.42, 1);
  box(0.075, 0.11, 0.08, 0, 0.14, -0.43, 3);
  box(0.17, 0.032, 0.055, 0, 0.205, -0.43, 3);
  box(0.004, 0.05, 0.004, 0.028, 0.245, -0.44, 1);
  box(0.003, 0.034, 0.003, -0.02, 0.236, -0.44, 1);
  // A red spine down the dorsal blade.
  box(0.018, 0.012, 0.62, 0, 0.078, -0.12, 6);
  // Four gravity-well projectors.
  for (const [x, y] of [[-0.12, surface(upper, 0.12, -0.16, true) + 0.01], [0.12, surface(upper, 0.12, -0.16, true) + 0.01], [-0.1, surface(lower, 0.1, -0.16, false) - 0.01], [0.1, surface(lower, 0.1, -0.16, false) - 0.01]]) {
    parts.push(sphere(0.042, x, y, -0.16, 1, 24));
    parts.push({ geometry: new THREE.TorusGeometry(0.046, 0.006, 8, 32), matrix: at(x, y, -0.16).multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2)), kind: 1 });
  }
  // Guns and plating along both blades.
  for (let i = 0; i < 70; i++) {
    const z = 0.3 - Math.pow(random(), 0.8) * 0.72;
    const top = random() < 0.6;
    const b = top ? upper : lower;
    const x = (random() * 2 - 1) * b.half * (0.5 - z) * 0.8;
    const w = 0.006 + random() * 0.018;
    const h = 0.003 + random() * 0.006;
    box(w, h, 0.008 + random() * 0.03, x, surface(b, x, z, top) + (top ? h / 2 : -h / 2), z, 1);
  }
  // Three main thrusters and four auxiliaries.
  for (const x of [-0.1, 0, 0.1]) {
    parts.push({ geometry: new THREE.CylinderGeometry(0.042, 0.048, 0.07, 24), matrix: at(x, 0, -0.54).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(0.034, 24), matrix: at(x, 0, -0.5755).multiply(facingBack), kind: 2 });
  }
  for (const [x, y] of [[-0.135, 0.05], [0.135, 0.05], [-0.135, -0.05], [0.135, -0.05]]) {
    parts.push({ geometry: new THREE.CylinderGeometry(0.016, 0.018, 0.04, 12), matrix: at(x, y, -0.53).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(0.013, 12), matrix: at(x, y, -0.5505).multiply(facingBack), kind: 2 });
  }
  return {
    geometry: merge(parts),
    extremes: v3([[0, 0.11, 0.5], [0, -0.1, 0.5], [-0.27, 0.05, -0.5], [0.27, 0.05, -0.5], [0, 0.25, -0.44], [0, -0.1, -0.5], [-0.1, 0, -0.58], [0.1, 0, -0.58]]),
    lights: [[-0.27, 0.05, -0.49], [0.27, 0.05, -0.49], [0, 0.25, -0.44], [0, 0.112, 0.495]],
  };
}

// The Mantaris-class amphibious medium transport, "the Ray", built by the Naboo and the Gungans
// together on a bongo's frame (Legends): 98 m, a manta ray with flat swept wings, two sabre-like
// tails (heat-sink finials, 30 m, a little under a third of its length), knobs at the wingtips that
// shine red, and horn-like fins at the bow that are its twin concussion-missile launchers. Its
// cockpit bubbles follow the tribubble bongo it grew from.
export function mantaris() {
  const parts = [];
  const wing = [[0.06, 0.43], [0.16, 0.34], [0.29, 0.18], [0.39, 0.05], [0.44, -0.02], [0.37, -0.045], [0.24, -0.075], [0.12, -0.135], [0.05, -0.19], [0, -0.2]];
  parts.push({ geometry: planform(wing, { nose: 0.44, depth: 0.018, bevel: 0.014 }), kind: 0 });
  parts.push({ geometry: new THREE.SphereGeometry(0.5, 36, 20), matrix: at(0, 0.018, 0.1).multiply(scaled(0.2, 0.075, 0.62)), kind: 0 });
  parts.push({ geometry: new THREE.SphereGeometry(0.5, 28, 16), matrix: at(0, -0.02, 0.08).multiply(scaled(0.16, 0.05, 0.5)), kind: 0 });
  // Cockpit bubbles at the head, as on a bongo.
  parts.push(sphere(0.034, 0, 0.05, 0.3, 9));
  parts.push(sphere(0.024, -0.046, 0.038, 0.26, 9));
  parts.push(sphere(0.024, 0.046, 0.038, 0.26, 9));
  // Luminous markings down the back.
  for (let i = 0; i < 5; i++) parts.push({ geometry: new THREE.SphereGeometry(0.5, 12, 8), matrix: at(0, 0.054 - i * 0.003, 0.18 - i * 0.075).multiply(scaled(0.022, 0.008, 0.03)), kind: 8 });
  // The bow horns: twin concussion-missile launchers.
  for (const side of [-1, 1]) {
    parts.push({ geometry: new THREE.ConeGeometry(0.017, 0.11, 14), matrix: at(side * 0.075, 0.006, 0.47).multiply(turnY(side * 0.18)).multiply(along), kind: 1 });
    // The tails: long, thin, a little apart.
    parts.push({ geometry: new THREE.CylinderGeometry(0.004, 0.012, 0.32, 10), matrix: at(side * 0.036, 0.004, -0.34).multiply(turnY(side * 0.05)).multiply(along), kind: 0 });
    // The knobs at the wingtips.
    parts.push(sphere(0.014, side * 0.44, 0.004, -0.02, 8, 14));
    // Engines under the tail root, and the electromotive stabilizers under the wings.
    parts.push({ geometry: new THREE.CylinderGeometry(0.02, 0.024, 0.06, 16), matrix: at(side * 0.04, 0.01, -0.18).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(0.017, 16), matrix: at(side * 0.04, 0.01, -0.2105).multiply(facingBack), kind: 2 });
    parts.push({ geometry: new THREE.BoxGeometry(0.008, 0.03, 0.09), matrix: at(side * 0.12, -0.03, 0.0), kind: 1 });
  }
  return {
    geometry: merge(parts),
    extremes: v3([[0, 0, 0.52], [-0.45, 0, -0.02], [0.45, 0, -0.02], [0, 0.085, 0.3], [-0.05, 0, -0.5], [0.05, 0, -0.5], [0, -0.05, 0.08]]),
    lights: [[-0.44, 0.012, -0.02], [0.44, 0.012, -0.02], [0, 0.085, 0.3]],
    tilt: 0.75,
  };
}

// A Gungan capital ship, which no source describes: a war bongo grown to 410 m, the "big bongo" of
// the Mantaris taken further. A coral hull with swept fins and a bow driving plane; a tribubble
// bridge; the back crowded with hydrostatic bubbles like Otoh Gunga's, where the crew live dry;
// cradles of booma plasma along the fins for its catapults; and a crown of electromotive tentacles
// astern that spin for propulsion, as a bongo's do. Its whole hull sits in one hydrostatic bubble,
// the shield (r3-ships.js draws it for a side whose `shield` is 'bubble').
export function warBongo(random) {
  const parts = [];
  parts.push({ geometry: new THREE.SphereGeometry(0.5, 44, 26), matrix: at(0, 0, 0.06).multiply(scaled(0.36, 0.16, 0.76)), kind: 0 });
  const fins = [[0.14, 0.3], [0.3, 0.12], [0.41, -0.06], [0.43, -0.15], [0.33, -0.17], [0.2, -0.2], [0.1, -0.27], [0, -0.29]];
  parts.push({ geometry: planform(fins, { nose: 0.36, depth: 0.012, bevel: 0.012 }), matrix: at(0, -0.012, 0), kind: 0 });
  // The driving plane at the bow, painted in the army's red.
  parts.push({ geometry: planform([[0.05, 0.515], [0.12, 0.47], [0.11, 0.41], [0.04, 0.385], [0, 0.38]], { nose: 0.53, depth: 0.008, bevel: 0.008 }), matrix: at(0, -0.006, 0), kind: 6 });
  // The tribubble bridge.
  parts.push(sphere(0.055, 0, 0.095, 0.3, 9, 28));
  parts.push(sphere(0.04, -0.072, 0.075, 0.26, 9, 24));
  parts.push(sphere(0.04, 0.072, 0.075, 0.26, 9, 24));
  // Otoh Gunga on its back.
  for (let i = 0; i < 13; i++) {
    const z = -0.24 + random() * 0.42;
    const x = (random() * 2 - 1) * 0.11;
    const r = 0.022 + random() * 0.036;
    const surface = 0.078 * Math.sqrt(Math.max(0, 1 - ((z - 0.06) / 0.38) ** 2 - (x / 0.18) ** 2));
    parts.push(sphere(r, x, surface + r * 0.45, z, 9, 18));
  }
  // Luminous streaks down both flanks.
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      parts.push({ geometry: new THREE.SphereGeometry(0.5, 14, 8), matrix: at(side * 0.172, 0.018, 0.22 - i * 0.2).multiply(scaled(0.012, 0.01, 0.12)), kind: 8 });
    }
    // Booma cradles on the fins, each holding a ball of plasma.
    for (const [x, z] of [[0.3, -0.03], [0.22, 0.12]]) {
      parts.push({ geometry: new THREE.TorusGeometry(0.026, 0.007, 8, 24), matrix: at(side * x, 0.03, z).multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2)), kind: 1 });
      parts.push(sphere(0.02, side * x, 0.036, z, 2, 16));
    }
  }
  // The electromotive drive: a ring at the stern and six tentacles spiralling back from it.
  parts.push({ geometry: new THREE.TorusGeometry(0.075, 0.012, 10, 40), matrix: at(0, 0, -0.3), kind: 2 });
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const root = [Math.cos(angle) * 0.075, Math.sin(angle) * 0.045, -0.3];
    parts.push({ geometry: tentacle(root, { reach: 0.24, turns: 1.1, radius: 0.011, phase: angle, spread: 0.04 }), kind: 0 });
    const tip = [root[0] * 1.5, root[1], -0.54];
    parts.push(sphere(0.014, tip[0], tip[1], tip[2], 2, 12));
  }
  return {
    geometry: merge(parts),
    extremes: v3([[0, 0, 0.52], [-0.44, 0, -0.14], [0.44, 0, -0.14], [0, 0.16, 0.1], [0, -0.09, 0.05], [-0.12, 0, -0.56], [0.12, 0, -0.56], [0, 0.15, 0.3]]),
    lights: [[-0.43, 0.01, -0.15], [0.43, 0.01, -0.15], [0, 0.155, 0.3]],
    tilt: 0.4,
  };
}

// Fighters -------------------------------------------------------------------------------------------

// The ARC-170 of the Clone Wars (canon, 12.71 m): a long nose and cockpit, a tail gunner's canopy,
// two wide wings that split into upper and lower foils with a heavy laser cannon along each, the
// engines at the wing roots, and twin fins at the tail.
export function arc170() {
  const parts = [];
  parts.push({ geometry: new THREE.BoxGeometry(0.1, 0.085, 0.7), matrix: at(0, 0, -0.02), kind: 0 });
  const w = 0.05;
  const h = 0.042;
  parts.push({ geometry: hull([
    [[-w, -h, 0.33], [w, -h, 0.33], [w, h, 0.33]], [[-w, -h, 0.33], [w, h, 0.33], [-w, h, 0.33]],
    [[-w, h, 0.33], [w, h, 0.33], [0.016, 0.012, 0.56]], [[-w, h, 0.33], [0.016, 0.012, 0.56], [-0.016, 0.012, 0.56]],
    [[-w, -h, 0.33], [0.016, -0.02, 0.56], [w, -h, 0.33]], [[-w, -h, 0.33], [-0.016, -0.02, 0.56], [0.016, -0.02, 0.56]],
    [[w, -h, 0.33], [0.016, -0.02, 0.56], [0.016, 0.012, 0.56]], [[w, -h, 0.33], [0.016, 0.012, 0.56], [w, h, 0.33]],
    [[-w, -h, 0.33], [-0.016, 0.012, 0.56], [-0.016, -0.02, 0.56]], [[-w, -h, 0.33], [-w, h, 0.33], [-0.016, 0.012, 0.56]],
    [[-0.016, -0.02, 0.56], [-0.016, 0.012, 0.56], [0.016, 0.012, 0.56]], [[-0.016, -0.02, 0.56], [0.016, 0.012, 0.56], [0.016, -0.02, 0.56]],
  ], new THREE.Vector3(0, 0, 0.44)), kind: 0 });
  parts.push({ geometry: new THREE.BoxGeometry(0.07, 0.04, 0.17), matrix: at(0, 0.058, 0.17), kind: 5 });
  parts.push({ geometry: new THREE.BoxGeometry(0.05, 0.035, 0.07), matrix: at(0, 0.055, -0.3), kind: 5 });
  const cannons = [];
  for (const side of [-1, 1]) {
    for (const foil of [-1, 1]) {
      parts.push({ geometry: new THREE.BoxGeometry(0.4, 0.012, 0.2), matrix: turnZ(side * foil * 0.075).multiply(at(side * 0.25, foil * 0.012, -0.08)), kind: 4 });
    }
    parts.push({ geometry: new THREE.CylinderGeometry(0.017, 0.02, 0.5, 12), matrix: at(side * 0.27, 0, 0.12).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CylinderGeometry(0.026, 0.026, 0.05, 12), matrix: at(side * 0.27, 0, 0.02).multiply(along), kind: 1 });
    cannons.push([side * 0.27, 0, 0.38]);
    parts.push({ geometry: new THREE.CylinderGeometry(0.034, 0.038, 0.2, 14), matrix: at(side * 0.1, 0, -0.26).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(0.03, 14), matrix: at(side * 0.1, 0, -0.3605).multiply(facingBack), kind: 2 });
    parts.push({ geometry: new THREE.BoxGeometry(0.01, 0.12, 0.14), matrix: at(side * 0.042, 0.095, -0.32).multiply(turnZ(side * 0.12)), kind: 6 });
  }
  return { geometry: merge(parts), engines: [[0.1, 0, -0.37], [-0.1, 0, -0.37]], cannons };
}

// The Sith fighter of the Jedi Civil War, built at the Star Forge (Legends, 7 m with its wings out):
// a short, stubby carriage for the cockpit and reactor, wings that fold out for combat with a laser
// cannon at each outward edge, and a twin ion drive.
export function sithFighter() {
  const parts = [];
  parts.push({ geometry: new THREE.BoxGeometry(0.16, 0.13, 0.32), kind: 0 });
  parts.push({ geometry: new THREE.SphereGeometry(0.5, 20, 14), matrix: at(0, 0.015, 0.16).multiply(scaled(0.14, 0.11, 0.14)), kind: 5 });
  parts.push({ geometry: new THREE.BoxGeometry(0.11, 0.03, 0.2), matrix: at(0, 0.075, -0.04), kind: 1 });
  const cannons = [];
  for (const side of [-1, 1]) {
    // A wing folded out and down from the carriage's side, with a red leading edge.
    const droop = turnZ(side * -0.42);
    const root = side * 0.08;
    const tip = side * 0.42;
    const h = 0.007;
    const wing = hull([
      [[root, h, 0.12], [tip, h, 0.07], [tip, h, -0.1]], [[root, h, 0.12], [tip, h, -0.1], [root, h, -0.18]],
      [[root, -h, 0.12], [tip, -h, -0.1], [tip, -h, 0.07]], [[root, -h, 0.12], [root, -h, -0.18], [tip, -h, -0.1]],
      [[root, h, 0.12], [root, -h, 0.12], [tip, -h, 0.07]], [[root, h, 0.12], [tip, -h, 0.07], [tip, h, 0.07]],
      [[tip, h, 0.07], [tip, -h, 0.07], [tip, -h, -0.1]], [[tip, h, 0.07], [tip, -h, -0.1], [tip, h, -0.1]],
      [[tip, h, -0.1], [tip, -h, -0.1], [root, -h, -0.18]], [[tip, h, -0.1], [root, -h, -0.18], [root, h, -0.18]],
      [[root, h, -0.18], [root, -h, -0.18], [root, -h, 0.12]], [[root, h, -0.18], [root, -h, 0.12], [root, h, 0.12]],
    ], new THREE.Vector3(side * 0.25, 0, -0.03));
    parts.push({ geometry: wing, matrix: droop, kind: 0 });
    // The red leading edge, along the wing's front from root to tip.
    const edge = new THREE.Vector3(tip - root, 0, 0.07 - 0.12);
    parts.push({ geometry: new THREE.BoxGeometry(edge.length(), 0.016, 0.022), matrix: droop.clone().multiply(at((root + tip) / 2, 0.001, 0.095)).multiply(turnY(-Math.atan2(edge.z, edge.x))), kind: 6 });
    parts.push({ geometry: new THREE.CylinderGeometry(0.012, 0.014, 0.26, 10), matrix: droop.clone().multiply(at(tip, 0, 0.06)).multiply(along), kind: 1 });
    const muzzle = new THREE.Vector3(tip, 0, 0.19).applyMatrix4(droop);
    cannons.push([muzzle.x, muzzle.y, muzzle.z]);
    parts.push({ geometry: new THREE.CylinderGeometry(0.03, 0.034, 0.12, 14), matrix: at(side * 0.05, -0.01, -0.2).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(0.026, 14), matrix: at(side * 0.05, -0.01, -0.2605).multiply(facingBack), kind: 2 });
  }
  return { geometry: merge(parts), engines: [[0.05, -0.01, -0.27], [-0.05, -0.01, -0.27]], cannons };
}

// A Gungan starfighter. Legends says only that the Gungans based their starfighter designs on the
// bongo; the rest is extrapolation. A small manta with a bubble cockpit and two smaller bubbles
// (the tribubble), a red bow plane, luminous wing markings, a ball of booma plasma slung under the
// belly for it to throw, and three electromotive tentacles astern.
export function starbongo() {
  const parts = [];
  const wing = [[0.07, 0.34], [0.2, 0.16], [0.3, 0.0], [0.31, -0.08], [0.2, -0.085], [0.08, -0.16], [0, -0.18]];
  parts.push({ geometry: planform(wing, { nose: 0.4, depth: 0.02, bevel: 0.018, detail: 4, bevels: 2 }), kind: 0 });
  parts.push({ geometry: new THREE.SphereGeometry(0.5, 18, 10), matrix: at(0, 0.02, 0.07).multiply(scaled(0.13, 0.08, 0.44)), kind: 0 });
  parts.push(sphere(0.06, 0, 0.06, 0.19, 9, 18));
  parts.push(sphere(0.034, -0.07, 0.035, 0.11, 9, 16));
  parts.push(sphere(0.034, 0.07, 0.035, 0.11, 9, 16));
  parts.push({ geometry: planform([[0.05, 0.47], [0.08, 0.43], [0.04, 0.4], [0, 0.4]], { nose: 0.48, depth: 0.006, bevel: 0.006, detail: 3, bevels: 1 }), matrix: at(0, -0.012, 0), kind: 6 });
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) parts.push(sphere(0.011, side * (0.12 + i * 0.06), 0.02, 0.1 - i * 0.07, 8, 10));
  }
  parts.push({ geometry: new THREE.TorusGeometry(0.046, 0.009, 8, 24), matrix: at(0, -0.06, 0.08).multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2)), kind: 1 });
  parts.push(sphere(0.038, 0, -0.064, 0.08, 2, 18));
  parts.push({ geometry: new THREE.TorusGeometry(0.03, 0.008, 8, 20), matrix: at(0, 0.01, -0.17), kind: 2 });
  for (let i = 0; i < 3; i++) {
    const angle = (i / 3) * Math.PI * 2 + Math.PI / 2;
    const root = [Math.cos(angle) * 0.03, 0.01 + Math.sin(angle) * 0.02, -0.17];
    parts.push({ geometry: tentacle(root, { reach: 0.34, turns: 1.4, radius: 0.008, phase: angle, spread: 0.035, segments: 22, sides: 5 }), kind: 0 });
  }
  return { geometry: merge(parts), engines: [[0, 0.01, -0.2]], cannons: [[0, -0.064, 0.13]] };
}

// Freighters -----------------------------------------------------------------------------------------

// The Ebon Hawk, a Dynamic-class freighter (Legends; 24 m in the StarWars.com databank). Seen from
// above it is roughly the Aurebesh letter "ae": three prongs forward, the middle one flush with
// the outer two, and the mass filling the stern to the middle of the ship, with only a small prong
// on the starboard side. White, with the prongs picked out in red and red stripes curving across
// the stern from two cylindrical engines that meet the middle prong at its base; a turret above
// and one below.
export function ebonHawk() {
  const parts = [];
  const outline = new THREE.Shape();
  const points = [
    [0, -0.5], [0.3, -0.45], [0.45, -0.25], [0.46, 0.05], [0.44, 0.44], [0.3, 0.44], [0.29, 0.05], [0.12, 0.03], [0.1, 0.44],
    [-0.1, 0.44], [-0.12, 0.03], [-0.27, 0.03], [-0.3, 0.2], [-0.43, 0.2], [-0.46, 0.0], [-0.45, -0.25], [-0.3, -0.45],
  ];
  outline.moveTo(...points[0]);
  for (const point of points.slice(1)) outline.lineTo(...point);
  outline.closePath();
  const plate = new THREE.ExtrudeGeometry(outline, { depth: 0.07, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02, bevelSegments: 3, steps: 1 });
  plate.applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI / 2));
  plate.applyMatrix4(at(0, 0.035, 0));
  parts.push({ geometry: plate, kind: 0 });
  // Red accents on the prongs' tips.
  for (const [x, z, w] of [[0.37, 0.4, 0.15], [0, 0.4, 0.2], [-0.365, 0.17, 0.13]]) {
    parts.push({ geometry: new THREE.BoxGeometry(w, 0.012, 0.06), matrix: at(x, 0.068, z), kind: 6 });
  }
  // The cockpit at the base of the middle prong.
  parts.push({ geometry: new THREE.SphereGeometry(0.5, 20, 12), matrix: at(0, 0.075, 0.2).multiply(scaled(0.14, 0.06, 0.2)), kind: 5 });
  // The two engines, across the stern to either side of the middle prong's base, with their
  // exhausts astern, and the red stripes that curve back from them.
  for (const side of [-1, 1]) {
    parts.push({ geometry: new THREE.CylinderGeometry(0.055, 0.055, 0.26, 18), matrix: at(side * 0.2, 0.055, -0.08).multiply(new THREE.Matrix4().makeRotationZ(Math.PI / 2)), kind: 1 });
    parts.push({ geometry: new THREE.CylinderGeometry(0.045, 0.05, 0.12, 16), matrix: at(side * 0.2, 0.03, -0.44).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(0.04, 16), matrix: at(side * 0.2, 0.03, -0.5005).multiply(facingBack), kind: 2 });
    parts.push({ geometry: new THREE.TorusGeometry(0.3, 0.008, 6, 40, 0.9), matrix: at(0, 0.071, -0.12).multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2)).multiply(turnZ(side < 0 ? Math.PI * 1.07 : Math.PI * 1.93 - 0.9)), kind: 6 });
  }
  // The dorsal turret, and the ventral one deployed.
  parts.push(sphere(0.045, 0, 0.09, -0.15, 1, 16));
  parts.push({ geometry: new THREE.BoxGeometry(0.01, 0.01, 0.09), matrix: at(0.012, 0.12, -0.12), kind: 1 });
  parts.push(sphere(0.04, -0.3, -0.03, -0.1, 1, 14));
  return { geometry: merge(parts) };
}
