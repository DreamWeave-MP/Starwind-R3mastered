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
  const blade = (y, noseY, half, ridge, belly) => {
    const t = 0.011;
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
  parts.push({ geometry: blade(0.05, 0.11, 0.27, 0.055, 0.012), kind: 0 });
  parts.push({ geometry: blade(-0.05, -0.1, 0.23, 0.012, 0.045), kind: 0 });
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
  for (const [x, y] of [[-0.12, 0.074], [0.12, 0.074], [-0.1, -0.078], [0.1, -0.078]]) {
    parts.push(sphere(0.042, x, y, -0.16, 1, 24));
    parts.push({ geometry: new THREE.TorusGeometry(0.046, 0.006, 8, 32), matrix: at(x, y, -0.16).multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2)), kind: 1 });
  }
  // Guns and plating along both blades.
  for (let i = 0; i < 70; i++) {
    const z = 0.3 - Math.pow(random(), 0.8) * 0.72;
    const upper = random() < 0.6;
    const half = (upper ? 0.27 : 0.23) * (0.5 - z) * 0.8;
    const x = (random() * 2 - 1) * half;
    const w = 0.006 + random() * 0.018;
    const h = 0.003 + random() * 0.006;
    box(w, h, 0.008 + random() * 0.03, x, upper ? 0.05 + 0.03 * (0.5 - z) + h / 2 : -0.05 - 0.025 * (0.5 - z) - h / 2, z, 1);
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
    parts.push({ geometry: new THREE.BoxGeometry(0.34, 0.014, 0.3), matrix: droop.clone().multiply(at(side * 0.25, 0, -0.03)), kind: 0 });
    parts.push({ geometry: new THREE.BoxGeometry(0.34, 0.018, 0.03), matrix: droop.clone().multiply(at(side * 0.25, 0.002, 0.12)), kind: 6 });
    parts.push({ geometry: new THREE.CylinderGeometry(0.012, 0.014, 0.26, 10), matrix: droop.clone().multiply(at(side * 0.42, 0, 0.06)).multiply(along), kind: 1 });
    const tip = new THREE.Vector3(side * 0.42, 0, 0.19).applyMatrix4(droop);
    cannons.push([tip.x, tip.y, tip.z]);
    parts.push({ geometry: new THREE.CylinderGeometry(0.03, 0.034, 0.12, 14), matrix: at(side * 0.05, -0.01, -0.2).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(0.026, 14), matrix: at(side * 0.05, -0.01, -0.2605).multiply(facingBack), kind: 2 });
  }
  return { geometry: merge(parts), engines: [[0.05, -0.01, -0.27], [-0.05, -0.01, -0.27]], cannons };
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
