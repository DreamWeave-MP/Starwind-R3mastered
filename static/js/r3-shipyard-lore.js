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
