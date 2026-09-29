// The hero's ships, for r3-hero.js: a star destroyer that drops out of hyperspace, crosses the sky
// behind the star and jumps away again, and a pair of starfighters that make passes, banking into
// their turns with their engines trailing.
//
// Both are modelled here from boxes, cylinders and a hand-made hull, and share one shader: panel
// seams and tones from their own coordinates, the sun from behind the planet, the planet's glow
// from below, a backlit rim, lit windows along the superstructure, and engines that burn. Going to
// or coming from hyperspace, a ship is stretched along its heading into a streak and washed white,
// and a flash marks the moment. They fly only in the part of the hero the text leaves free, and
// under prefers-reduced-motion the destroyer holds still in the middle of its crossing and the
// fighters stay away.

import * as THREE from './vendor/three.module.min.js';

const SHIP_VERTEX = /* glsl */ `
  attribute float aKind;
  uniform float uStretch;
  uniform float uAnchor;
  varying vec3 vObject;
  varying vec3 vObjectNormal;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vKind;
  void main() {
    vec3 p = position;
    // Hyperspace: stretched along the heading about one end, which stays put.
    p.z = (p.z - uAnchor) * uStretch + uAnchor;
    vObject = position;
    vObjectNormal = normal;
    vKind = aKind;
    vec4 world = modelMatrix * vec4(p, 1.0);
    vWorld = world.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

// Kinds: 0 hull, 1 fittings, 2 engine, 3 superstructure with windows, 4 painted, 5 canopy.
const SHIP_FRAGMENT = /* glsl */ `
  precision highp float;
  varying vec3 vObject;
  varying vec3 vObjectNormal;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vKind;
  uniform vec3 uCamera;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec3 uAir;
  uniform vec3 uHull;
  uniform vec3 uPaint;
  uniform vec3 uEngine;
  uniform vec2 uPanels;
  uniform float uTime;
  uniform float uWarp;
  uniform float uFade;
  uniform float uBoost;
  uniform float uWindows;
  uniform float uHaze;       // how far off it is: distance greys it toward the sky
  uniform float uTextured;   // 1 where the hull maps below dress the plating
  uniform sampler2D uHullMap;    // plate colours
  uniform sampler2D uDetailMap;  // r: relief, g: lit ports
  uniform float uMapScale;
  uniform mat3 uRotation;    // the ship's turn, object to world

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  vec3 safeNormalize(vec3 v, vec3 fallback) {
    float l = length(v);
    return l > 1e-5 ? v / l : fallback;
  }
  // A seam one pixel wide wherever x crosses a whole number.
  float seam(float x) {
    float w = max(fwidth(x), 1e-4);
    float d = min(fract(x), 1.0 - fract(x));
    return 1.0 - smoothstep(0.0, w * 1.2, d);
  }

  void main() {
    if (uFade <= 0.001) discard;
    vec3 n = normalize(vNormal);
    vec3 v = safeNormalize(uCamera - vWorld, vec3(0.0, 0.0, 1.0));
    if (dot(n, v) < 0.0) n = -n;

    if (vKind > 1.5 && vKind < 2.5) {
      float flicker = 0.85 + 0.15 * sin(uTime * 31.0 + vObject.x * 50.0 + vObject.y * 37.0);
      vec3 burn = uEngine * (2.6 + 4.0 * uBoost) * flicker;
      gl_FragColor = vec4(mix(burn, vec3(2.4, 2.8, 3.4), uWarp) * uFade, 1.0);
      return;
    }

    // Panels, on the plane the face lies most nearly in.
    vec3 an = abs(vObjectNormal);
    bool onTop = an.y > max(an.x, an.z);
    bool sideways = !onTop && an.x > an.z;
    vec2 uv = onTop ? vObject.xz : (sideways ? vObject.zy : vObject.xy);
    vec2 cell = uv * uPanels;
    float tone = 0.8 + 0.32 * hash21(floor(cell) + floor(vKind * 7.0));
    float seams = max(seam(cell.x), seam(cell.y * 0.5));
    vec3 base = uHull;
    float ports = 0.0;
    if (uTextured > 0.5 && (vKind < 1.5 || (vKind > 2.5 && vKind < 3.5))) {
      // The painted plating: its colour, and its relief turned into a tilt of the normal, measured
      // a screen pixel apart so it neither vanishes up close nor shimmers far off.
      vec2 mapUv = uv * uMapScale + vec2(vKind * 0.37, 0.0);
      vec2 step2 = max(fwidth(mapUv), vec2(1.0 / 2048.0));
      vec4 detail = texture2D(uDetailMap, mapUv);
      float hx = texture2D(uDetailMap, mapUv + vec2(step2.x, 0.0)).r;
      float hy = texture2D(uDetailMap, mapUv + vec2(0.0, step2.y)).r;
      vec3 tu = onTop ? vec3(1.0, 0.0, 0.0) : (sideways ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0));
      vec3 tv = onTop ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
      vec3 objectNormal = normalize(vObjectNormal);
      vec3 bumped = objectNormal - (tu * (hx - detail.r) + tv * (hy - detail.r)) * 3.0;
      n = safeNormalize(uRotation * bumped, n);
      if (dot(n, v) < 0.0) n = -n;
      base = texture2D(uHullMap, mapUv).rgb * mix(0.55, 1.0, smoothstep(0.1, 0.35, detail.r));
      ports = detail.g;
      tone = 1.0;
      seams = 0.0;
    }
    if (vKind > 3.5 && vKind < 4.5) {
      float r = length(vObject.xy);
      base = mix(uHull, uPaint, step(0.2, r) * step(r, 0.27));
    }
    if (vKind > 4.5) base = vec3(0.02, 0.025, 0.035);
    base *= tone * (1.0 - 0.4 * seams);

    float sunLight = max(dot(n, uSunDir), 0.0);
    vec3 col = base * (uSunColor * sunLight * 0.95 + uAir * (0.07 + 0.2 * max(-n.y, 0.0)) + vec3(0.025, 0.03, 0.04));
    vec3 h = safeNormalize(uSunDir + v, n);
    col += uSunColor * pow(max(dot(n, h), 0.0), vKind > 4.5 ? 160.0 : 48.0) * (vKind > 4.5 ? 2.0 : 0.45) * tone;
    float facing = max(dot(n, v), 0.0);
    col += uAir * pow(1.0 - facing, 4.0) * 0.35;
    col += uSunColor * pow(1.0 - facing, 3.0) * max(dot(-v, uSunDir), 0.0) * 0.9;

    col += vec3(1.0, 0.84, 0.58) * ports * 2.6 * uWindows;

    // Windows: rows of lit ports on the superstructure's walls, some dark.
    if (uTextured < 0.5 && vKind > 2.5 && vKind < 3.5 && an.y < 0.5) {
      vec2 w = uv * vec2(90.0, 70.0);
      vec2 f = abs(fract(w) - 0.5);
      float port = (1.0 - smoothstep(0.12, 0.26, f.x)) * (1.0 - smoothstep(0.1, 0.24, f.y));
      float row = step(0.45, hash21(vec2(floor(w.y), 3.0)));
      col += vec3(1.0, 0.86, 0.62) * port * row * step(0.72, hash21(floor(w))) * 1.8 * uWindows;
    }

    col = mix(col, uAir * 0.12 + vec3(0.01, 0.015, 0.02), uHaze);
    col = mix(col, vec3(2.2, 2.6, 3.2), uWarp);
    gl_FragColor = vec4(col * uFade, 1.0);
  }
`;

// Running lights and engine trails: additive points and lines.
const LIGHT_VERTEX = /* glsl */ `
  attribute vec3 aColor;
  attribute float aPhase;
  uniform float uTime;
  uniform float uSize;
  uniform float uShow;
  varying vec3 vColor;
  varying float vOn;
  void main() {
    vColor = aColor;
    // A negative phase burns steadily; the others strobe.
    float strobe = smoothstep(0.93, 1.0, sin(uTime * 2.6 + aPhase));
    vOn = uShow * (aPhase < 0.0 ? 0.75 : strobe);
    vec4 view = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * view;
    gl_PointSize = uSize;
  }
`;

const LIGHT_FRAGMENT = /* glsl */ `
  varying vec3 vColor;
  varying float vOn;
  void main() {
    vec2 d = gl_PointCoord - 0.5;
    float a = exp(-dot(d, d) * 36.0);
    gl_FragColor = vec4(vColor * a * vOn * 3.0, 1.0);
  }
`;

const LINE_VERTEX = /* glsl */ `
  attribute float aAlpha;
  varying float vAlpha;
  void main() {
    vAlpha = aAlpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const LINE_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(uColor * vAlpha, 1.0);
  }
`;

// Geometry -----------------------------------------------------------------------------------------

function merge(parts) {
  const positions = [];
  const normals = [];
  const kinds = [];
  for (const { geometry, matrix, kind } of parts) {
    const flat = geometry.index ? geometry.toNonIndexed() : geometry;
    if (matrix) flat.applyMatrix4(matrix);
    const position = flat.getAttribute('position');
    const normal = flat.getAttribute('normal');
    for (let i = 0; i < position.count; i++) {
      positions.push(position.getX(i), position.getY(i), position.getZ(i));
      normals.push(normal.getX(i), normal.getY(i), normal.getZ(i));
      kinds.push(kind);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('aKind', new THREE.Float32BufferAttribute(kinds, 1));
  return geometry;
}

// A closed hull from triangles, each turned to face away from the given centre, with flat normals.
function hull(triangles, centre) {
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

// The destroyer: a dagger one unit long, nose at +z. The hull has walls along its edges, where the
// trench runs; a second, narrower wedge rises along the spine; the superstructure steps up toward
// the stern to the bridge tower; turbolaser batteries line both edges; greebles cover the deck;
// and three main engines and two smaller ones burn astern.
function destroyerGeometry() {
  const nose = [0, 0.006, 0.5];
  const keel = [0, -0.006, 0.5];
  const leftTop = [-0.38, 0.014, -0.5];
  const leftBottom = [-0.38, -0.014, -0.5];
  const rightTop = [0.38, 0.014, -0.5];
  const rightBottom = [0.38, -0.014, -0.5];
  const ridge = [0, 0.075, -0.5];
  const belly = [0, -0.05, -0.5];
  const stern = [0, 0.004, -0.5];
  const body = hull([
    [nose, leftTop, ridge], [nose, ridge, rightTop],
    [keel, belly, leftBottom], [keel, rightBottom, belly],
    [nose, keel, leftBottom], [nose, leftBottom, leftTop],
    [nose, rightTop, rightBottom], [nose, rightBottom, keel],
    [stern, leftTop, ridge], [stern, ridge, rightTop], [stern, rightTop, rightBottom],
    [stern, rightBottom, belly], [stern, belly, leftBottom], [stern, leftBottom, leftTop],
  ], new THREE.Vector3(0, 0, -0.17));
  const parts = [{ geometry: body, kind: 0 }];
  // The dorsal wedge along the spine.
  const spine = hull([
    [[0, 0.03, 0.2], [-0.14, 0.05, -0.5], [0, 0.1, -0.5]], [[0, 0.03, 0.2], [0, 0.1, -0.5], [0.14, 0.05, -0.5]],
    [[0, 0.03, 0.2], [0, 0.02, -0.5], [-0.14, 0.05, -0.5]], [[0, 0.03, 0.2], [0.14, 0.05, -0.5], [0, 0.02, -0.5]],
    [[-0.14, 0.05, -0.5], [0, 0.02, -0.5], [0, 0.1, -0.5]], [[0, 0.1, -0.5], [0, 0.02, -0.5], [0.14, 0.05, -0.5]],
  ], new THREE.Vector3(0, 0.05, -0.27));
  parts.push({ geometry: spine, kind: 0 });
  const box = (w, h, d, x, y, z, kind) => parts.push({ geometry: new THREE.BoxGeometry(w, h, d), matrix: at(x, y, z), kind });
  // The superstructure, stepping up toward the stern.
  box(0.3, 0.05, 0.3, 0, 0.09, -0.36, 3);
  box(0.22, 0.045, 0.22, 0, 0.13, -0.4, 3);
  box(0.15, 0.04, 0.15, 0, 0.165, -0.43, 3);
  box(0.36, 0.02, 0.06, 0, 0.1, -0.24, 1);
  box(0.045, 0.07, 0.05, 0, 0.215, -0.44, 1);
  box(0.21, 0.028, 0.055, 0, 0.26, -0.44, 3);
  box(0.004, 0.05, 0.004, 0.03, 0.3, -0.45, 1);
  box(0.003, 0.035, 0.003, -0.025, 0.29, -0.45, 1);
  for (const x of [-0.07, 0.07]) {
    parts.push({ geometry: new THREE.SphereGeometry(0.02, 12, 10), matrix: at(x, 0.285, -0.44), kind: 1 });
  }
  // The deck: height of the upper hull at a point, so fittings sit on it.
  const deck = (x, z) => {
    const u = THREE.MathUtils.clamp(0.5 - z, 0, 1);
    const half = Math.max(0.38 * u, 1e-3);
    const crest = 0.006 + 0.069 * u;
    const edge = 0.006 + 0.008 * u;
    return crest + (edge - crest) * Math.min(1, Math.abs(x) / half);
  };
  // Turbolaser batteries along both edges.
  for (let i = 0; i < 11; i++) {
    const z = 0.28 - i * 0.07;
    const u = 0.5 - z;
    for (const s of [-1, 1]) {
      const x = s * 0.38 * u * 0.78;
      const y = deck(x, z);
      parts.push({ geometry: new THREE.CylinderGeometry(0.009, 0.011, 0.008, 10), matrix: at(x, y + 0.004, z), kind: 1 });
      box(0.004, 0.004, 0.022, x - 0.003, y + 0.009, z + 0.01, 1);
      box(0.004, 0.004, 0.022, x + 0.003, y + 0.009, z + 0.01, 1);
    }
  }
  // Greebles scattered over the deck, denser toward the stern.
  for (let i = 0; i < 110; i++) {
    const z = 0.35 - Math.pow(Math.random(), 0.7) * 0.8;
    const u = 0.5 - z;
    const x = (Math.random() * 2 - 1) * 0.38 * u * 0.85;
    const w = 0.006 + Math.random() * 0.02;
    const h = 0.002 + Math.random() * 0.008;
    const d = 0.006 + Math.random() * 0.03;
    box(w, h, d, x, deck(x, z) + h / 2, z, 1);
  }
  for (const [x, y, r] of [[-0.12, 0.0, 0.045], [0, 0.025, 0.05], [0.12, 0.0, 0.045]]) {
    parts.push({ geometry: new THREE.CylinderGeometry(r, r * 1.15, 0.08, 24), matrix: at(x, y, -0.53).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CylinderGeometry(r * 0.8, r * 0.8, 0.012, 24), matrix: at(x, y, -0.57).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(r * 0.78, 24), matrix: at(x, y, -0.5765).multiply(facingBack), kind: 2 });
  }
  for (const x of [-0.21, 0.21]) {
    parts.push({ geometry: new THREE.CylinderGeometry(0.016, 0.018, 0.05, 12), matrix: at(x, 0.0, -0.52).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(0.013, 12), matrix: at(x, 0.0, -0.5455).multiply(facingBack), kind: 2 });
  }
  return merge(parts);
}

// The fighter: a fuselage one unit long with a tapering nose, a canopy, four wings open in an X,
// an engine at each wing root and a cannon at each tip.
function fighterGeometry() {
  const parts = [];
  parts.push({ geometry: new THREE.BoxGeometry(0.12, 0.11, 0.55), matrix: at(0, 0, -0.2), kind: 0 });
  const w = 0.06;
  const h = 0.055;
  const nose = hull([
    [[-w, -h, 0.075], [w, -h, 0.075], [w, h, 0.075]], [[-w, -h, 0.075], [w, h, 0.075], [-w, h, 0.075]],
    [[-w, h, 0.075], [w, h, 0.075], [0.02, 0.02, 0.5]], [[-w, h, 0.075], [0.02, 0.02, 0.5], [-0.02, 0.02, 0.5]],
    [[-w, -h, 0.075], [0.02, -0.02, 0.5], [w, -h, 0.075]], [[-w, -h, 0.075], [-0.02, -0.02, 0.5], [0.02, -0.02, 0.5]],
    [[w, -h, 0.075], [0.02, -0.02, 0.5], [0.02, 0.02, 0.5]], [[w, -h, 0.075], [0.02, 0.02, 0.5], [w, h, 0.075]],
    [[-w, -h, 0.075], [-0.02, 0.02, 0.5], [-0.02, -0.02, 0.5]], [[-w, -h, 0.075], [-w, h, 0.075], [-0.02, 0.02, 0.5]],
    [[-0.02, -0.02, 0.5], [-0.02, 0.02, 0.5], [0.02, 0.02, 0.5]], [[-0.02, -0.02, 0.5], [0.02, 0.02, 0.5], [0.02, -0.02, 0.5]],
  ], new THREE.Vector3(0, 0, 0.22));
  parts.push({ geometry: nose, kind: 4 });
  parts.push({ geometry: new THREE.BoxGeometry(0.07, 0.045, 0.14), matrix: at(0, 0.07, -0.02), kind: 5 });
  const open = 0.24;
  for (const angle of [open, -open, Math.PI - open, Math.PI + open]) {
    const turn = new THREE.Matrix4().makeRotationZ(angle);
    parts.push({ geometry: new THREE.BoxGeometry(0.42, 0.012, 0.2), matrix: turn.clone().multiply(at(0.26, 0, -0.32)), kind: 4 });
    parts.push({ geometry: new THREE.BoxGeometry(0.012, 0.012, 0.52), matrix: turn.clone().multiply(at(0.47, 0, -0.16)), kind: 1 });
    parts.push({ geometry: new THREE.CylinderGeometry(0.03, 0.034, 0.22, 14), matrix: turn.clone().multiply(at(0.1, 0, -0.32)).multiply(along), kind: 1 });
    parts.push({ geometry: new THREE.CircleGeometry(0.026, 14), matrix: turn.clone().multiply(at(0.1, 0, -0.4305)).multiply(facingBack), kind: 2 });
  }
  return merge(parts);
}

// The destroyer's plating, painted once per load on two canvases: plates of unequal size split
// from the square, each its own shade, with grooves between them; greebles, vents and lit ports on
// some; and long trenches across. The first canvas is colour; the second carries relief in red
// and the lit ports in green.
function hullMaps(anisotropy) {
  const size = 1024;
  const colour = document.createElement('canvas');
  const detail = document.createElement('canvas');
  colour.width = colour.height = detail.width = detail.height = size;
  const c = colour.getContext('2d');
  const d = detail.getContext('2d');
  c.fillStyle = '#3b3f45';
  c.fillRect(0, 0, size, size);
  d.fillStyle = 'rgb(20, 0, 0)';
  d.fillRect(0, 0, size, size);
  const random = Math.random;
  const plates = [];
  (function split(x, y, w, h, depth) {
    const small = w < 100 && h < 100;
    if (depth > 7 || w < 28 || h < 28 || (small && random() < 0.45)) {
      plates.push([x, y, w, h]);
      return;
    }
    if (w > h * (0.7 + random() * 0.6)) {
      const cut = Math.round(w * (0.25 + random() * 0.5));
      split(x, y, cut, h, depth + 1);
      split(x + cut, y, w - cut, h, depth + 1);
    } else {
      const cut = Math.round(h * (0.25 + random() * 0.5));
      split(x, y, w, cut, depth + 1);
      split(x, y + cut, w, h - cut, depth + 1);
    }
  })(0, 0, size, size, 0);
  const grey = (value, blue = 6) => `rgb(${value}, ${value + 3}, ${value + blue})`;
  for (const [x, y, w, h] of plates) {
    const tone = 112 + Math.floor(random() * 50);
    const lift = 110 + Math.floor(random() * 90);
    c.fillStyle = grey(tone);
    c.fillRect(x + 1, y + 1, w - 2, h - 2);
    d.fillStyle = `rgb(${lift}, 0, 0)`;
    d.fillRect(x + 1, y + 1, w - 2, h - 2);
    const roll = random();
    if (roll < 0.45) {
      // Greebles: small raised boxes, lit on one edge and shadowed on the other.
      const count = 2 + Math.floor(random() * 12);
      for (let i = 0; i < count; i++) {
        const gw = 3 + Math.floor(random() * Math.min(22, w / 3));
        const gh = 3 + Math.floor(random() * Math.min(22, h / 3));
        const gx = x + 3 + Math.floor(random() * Math.max(1, w - gw - 6));
        const gy = y + 3 + Math.floor(random() * Math.max(1, h - gh - 6));
        const gtone = tone + Math.floor(random() * 40) - 20;
        c.fillStyle = grey(Math.max(40, gtone - 30));
        c.fillRect(gx + 1, gy + 1, gw, gh);
        c.fillStyle = grey(Math.min(230, gtone));
        c.fillRect(gx, gy, gw, gh);
        d.fillStyle = `rgb(${Math.min(255, lift + 50)}, 0, 0)`;
        d.fillRect(gx, gy, gw, gh);
      }
    } else if (roll < 0.6) {
      // Vents: close grooves across the plate.
      for (let i = x + 4; i < x + w - 4; i += 4) {
        c.fillStyle = grey(Math.max(40, tone - 45));
        c.fillRect(i, y + 4, 2, h - 8);
        d.fillStyle = `rgb(${Math.max(30, lift - 60)}, 0, 0)`;
        d.fillRect(i, y + 4, 2, h - 8);
      }
    } else if (roll < 0.78) {
      // Ports: rows of small windows, some lit.
      for (let row = y + 5; row < y + h - 4; row += 7) {
        for (let col = x + 4; col < x + w - 4; col += 5) {
          const lit = random() < 0.5;
          c.fillStyle = lit ? '#e8d2a0' : grey(40);
          c.fillRect(col, row, 2, 2);
          d.fillStyle = `rgb(${Math.max(30, lift - 40)}, ${lit ? 255 : 0}, 0)`;
          d.fillRect(col, row, 2, 2);
        }
      }
    } else if (roll < 0.86) {
      // An inset hatch.
      c.fillStyle = grey(Math.max(40, tone - 35));
      c.fillRect(x + w * 0.25, y + h * 0.25, w * 0.5, h * 0.5);
      d.fillStyle = `rgb(${Math.max(30, lift - 70)}, 0, 0)`;
      d.fillRect(x + w * 0.25, y + h * 0.25, w * 0.5, h * 0.5);
    }
  }
  for (let i = 0; i < 5; i++) {
    const ty = Math.floor(random() * size);
    const th = 4 + Math.floor(random() * 8);
    c.fillStyle = grey(58);
    c.fillRect(0, ty, size, th);
    d.fillStyle = 'rgb(35, 0, 0)';
    d.fillRect(0, ty, size, th);
  }
  const textures = [new THREE.CanvasTexture(colour), new THREE.CanvasTexture(detail)];
  textures[0].colorSpace = THREE.SRGBColorSpace;
  for (const texture of textures) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = anisotropy;
  }
  return textures;
}

// Paths ------------------------------------------------------------------------------------------

function bezier(p0, p1, p2, p3, s, out) {
  const u = 1 - s;
  return out.set(0, 0, 0)
    .addScaledVector(p0, u * u * u)
    .addScaledVector(p1, 3 * u * u * s)
    .addScaledVector(p2, 3 * u * s * s)
    .addScaledVector(p3, s * s * s);
}

function bezierTangent(p0, p1, p2, p3, s, out) {
  const u = 1 - s;
  return out.set(0, 0, 0)
    .addScaledVector(p1.clone().sub(p0), 3 * u * u)
    .addScaledVector(p2.clone().sub(p1), 6 * u * s)
    .addScaledVector(p3.clone().sub(p2), 3 * s * s);
}

// Points a group along a heading with the given up, falling back to world up.
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

const CLASSES = ['Imperial-class · 1,600 m', 'Victory-class · 900 m', 'Venator-class · 1,137 m', 'Interdictor · 1,129 m', 'Tector-class · 1,600 m', 'Resurgent-class · 2,916 m'];

export function createFleet({ scene, camera, time, sunDir, sunColor, air, accent, reduceMotion, overlay, anisotropy = 1 }) {
  const [hullMap, detailMap] = hullMaps(anisotropy);
  const shipMaterial = (hull, paint, engine, panels) => new THREE.ShaderMaterial({
    vertexShader: SHIP_VERTEX,
    fragmentShader: SHIP_FRAGMENT,
    uniforms: {
      uCamera: { value: camera.position },
      uSunDir: sunDir,
      uSunColor: { value: sunColor },
      uAir: { value: air },
      uHull: { value: new THREE.Color(hull).convertSRGBToLinear() },
      uPaint: { value: new THREE.Color(paint).convertSRGBToLinear() },
      uEngine: { value: new THREE.Color(engine).convertSRGBToLinear() },
      uPanels: { value: new THREE.Vector2(panels, panels * 0.6) },
      uTime: time,
      uWarp: { value: 0 },
      uFade: { value: 0 },
      uBoost: { value: 0 },
      uWindows: { value: 1 },
      uHaze: { value: 0 },
      uTextured: { value: 0 },
      uHullMap: { value: hullMap },
      uDetailMap: { value: detailMap },
      uMapScale: { value: 2.4 },
      uRotation: { value: new THREE.Matrix3() },
      uStretch: { value: 1 },
      uAnchor: { value: 0 },
    },
    side: THREE.DoubleSide,
  });

  // The destroyer.
  const destroyer = new THREE.Group();
  const destroyerMaterial = shipMaterial('#7a7f87', '#7a7f87', '#9fd8ff', 30);
  destroyerMaterial.uniforms.uHaze.value = 0.1;
  destroyerMaterial.uniforms.uTextured.value = 1;
  const destroyerMesh = new THREE.Mesh(destroyerGeometry(), destroyerMaterial);
  // The hull's extremes, which the contact brackets fit: nose, stern corners, keel, mast, engines.
  const hullCorners = [[0, 0, 0.5], [-0.38, 0, -0.5], [0.38, 0, -0.5], [0, -0.05, -0.5], [0, 0.33, -0.45], [-0.11, 0.26, -0.44], [0.11, 0.26, -0.44], [-0.12, 0, -0.58], [0.12, 0, -0.58], [0, 0.07, -0.58]].map((point) => new THREE.Vector3(...point));
  destroyerMesh.frustumCulled = false;
  destroyer.add(destroyerMesh);
  const lightPositions = [-0.375, 0.0, -0.49, 0.375, 0.0, -0.49, 0.03, 0.33, -0.45, 0, 0.012, 0.495];
  const lightColors = [1, 0.15, 0.1, 0.2, 1, 0.35, 1, 1, 1, 1, 1, 1];
  const lightPhases = [-1, -1, 0.5, 2.6];
  const lightGeometry = new THREE.BufferGeometry();
  lightGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lightPositions, 3));
  lightGeometry.setAttribute('aColor', new THREE.Float32BufferAttribute(lightColors, 3));
  lightGeometry.setAttribute('aPhase', new THREE.Float32BufferAttribute(lightPhases, 1));
  const lightUniforms = { uTime: time, uSize: { value: 6 }, uShow: { value: 0 } };
  const lights = new THREE.Points(lightGeometry, new THREE.ShaderMaterial({
    vertexShader: LIGHT_VERTEX,
    fragmentShader: LIGHT_FRAGMENT,
    uniforms: lightUniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  lights.frustumCulled = false;
  destroyer.add(lights);
  destroyer.visible = false;
  scene.add(destroyer);

  // The fighters, each with a trail from either side of its engines.
  const fighterGeo = fighterGeometry();
  const fighters = [0, 1].map(() => {
    const group = new THREE.Group();
    const material = shipMaterial('#c9ccd1', '#b8321f', '#ff7a52', 22);
    material.uniforms.uWindows.value = 0;
    const mesh = new THREE.Mesh(fighterGeo, material);
    mesh.frustumCulled = false;
    group.add(mesh);
    group.visible = false;
    scene.add(group);
    const trails = [0, 1].map(() => {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(96 * 3), 3));
      geometry.setAttribute('aAlpha', new THREE.BufferAttribute(new Float32Array(96), 1));
      geometry.setDrawRange(0, 0);
      const line = new THREE.Line(geometry, new THREE.ShaderMaterial({
        vertexShader: LINE_VERTEX,
        fragmentShader: LINE_FRAGMENT,
        uniforms: { uColor: { value: new THREE.Color('#ff7a52').convertSRGBToLinear().multiplyScalar(2.2) } },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      line.frustumCulled = false;
      scene.add(line);
      return { line, samples: [] };
    });
    return { group, material, trails };
  });

  // The contact brackets: the destroyer is tracked like a target on a scope.
  const contact = document.createElement('div');
  contact.className = 'r3-contact';
  contact.setAttribute('aria-hidden', 'true');
  const contactLabel = document.createElement('span');
  contactLabel.className = 'r3-contact__label';
  contact.append(contactLabel);
  overlay.append(contact);

  // Layout, from r3-hero.js: where the ships may fly.
  const view = { width: 1, height: 1, free: 0, narrow: false, ratio: 1 };
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  function worldAt(px, py, z, out = new THREE.Vector3()) {
    const visible = 2 * (10 - z) * tanHalf;
    return out.set(((px - view.width / 2) / view.height) * visible, ((view.height / 2 - py) / view.height) * visible, z);
  }
  function screenOf(point, out) {
    const p = point.clone().project(camera);
    return out.set((p.x * 0.5 + 0.5) * view.width, (0.5 - p.y * 0.5) * view.height, p.z);
  }

  // The destroyer's visit: arrive, cruise, charge, leave, then wait.
  const visit = { state: 'waiting', until: reduceMotion ? 0 : 2.5, start: new THREE.Vector3(), velocity: new THREE.Vector3(), heading: new THREE.Vector3(), up: new THREE.Vector3(), length: 1, cruise: 30, age: 0, label: CLASSES[0] };
  function planVisit() {
    const { width, height, free, narrow } = view;
    // As long as a third of the free sky, within reason; the hull's centre keeps half its length
    // clear of the text and the hero's edges.
    // On a phone the text fills the hero, so the destroyer keeps low and small, over the planet's
    // limb beside the status strip.
    const start = narrow ? width * 0.46 : Math.max(free + 30, width * 0.45);
    const lengthPx = narrow ? Math.min(width * 0.26, 100) : THREE.MathUtils.clamp((width - start) * 0.42, 180, 340);
    const leftEdge = start + lengthPx * 0.55;
    const rightEdge = width - 24 - lengthPx * 0.7;
    const span = Math.max(rightEdge - leftEdge, 40);
    const direction = Math.random() < 0.6 ? -1 : 1;
    const x = direction < 0 ? leftEdge + span * (0.7 + 0.3 * Math.random()) : leftEdge + span * (0.3 * Math.random());
    const y = narrow ? height * (0.74 + 0.05 * Math.random()) : THREE.MathUtils.clamp(height * (0.22 + 0.16 * Math.random()), lengthPx * 0.32 + 12, height * 0.55);
    const depth = -7 - Math.random() * 4;
    worldAt(x, y, depth, visit.start);
    visit.length = (lengthPx / height) * 2 * (10 - depth) * tanHalf;
    visit.cruise = reduceMotion ? 30 : 26 + Math.random() * 12;
    const travelPx = span * (0.55 + 0.15 * Math.random());
    const travel = (travelPx / height) * 2 * (10 - depth) * tanHalf;
    visit.velocity.set(direction * travel, (Math.random() - 0.5) * travel * 0.08, 0).divideScalar(visit.cruise);
    // The hull points where it goes, turned a little toward the viewer so the deck shows.
    visit.heading.copy(visit.velocity).normalize();
    visit.heading.z += 0.25;
    visit.heading.normalize();
    visit.up.set((Math.random() - 0.5) * 0.3, 1, 0.3).normalize();
    visit.label = CLASSES[Math.floor(Math.random() * CLASSES.length)];
    contactLabel.textContent = `Contact ▸ ${visit.label}`;
  }

  // The fighters' passes.
  const pass = { active: false, age: 0, duration: 3.4, next: reduceMotion ? Infinity : 5 + Math.random() * 4, points: [] };
  function planPass() {
    const { width, height, free, narrow } = view;
    const left = narrow ? width * 0.5 : Math.max(free + 40, width * 0.48);
    const right = width * 0.98;
    const mid = (left + right) / 2;
    const kind = Math.floor(Math.random() * 3);
    let screen;
    if (kind === 0) {
      // A dive: from beside the viewer down toward the planet's limb.
      screen = [[right + 60, height * 1.15, 5], [right - (right - left) * 0.1, height * 0.75, 1.5], [mid, height * 0.5, -8], [left + (right - left) * 0.2, height * 0.72, -28]];
    } else if (kind === 1) {
      // A climb: up from the horizon, past the star and out over the viewer's shoulder.
      screen = [[mid, height * 0.8, -28], [mid + (right - mid) * 0.3, height * 0.55, -10], [right - 40, height * 0.3, -1], [right + 120, -height * 0.3, 5]];
    } else {
      // A crossing, high and fast, away into the distance.
      screen = [[right + 80, height * 0.3, -1], [right - (right - left) * 0.25, height * 0.12, -3], [left + (right - left) * 0.35, height * 0.35, -9], [left, height * 0.18, -24]];
    }
    pass.points = screen.map(([x, y, z]) => worldAt(x, y, z));
    pass.duration = 3.0 + Math.random() * 1.2;
    pass.age = 0;
    pass.active = true;
    for (const fighter of fighters) {
      for (const trail of fighter.trails) trail.samples.length = 0;
    }
  }

  const flash = { x: 0, y: 0, strength: 0, size: 1 };
  const tmp = new THREE.Vector3();
  const tangent = new THREE.Vector3();
  const nextTangent = new THREE.Vector3();
  const screen = new THREE.Vector3();
  const up = new THREE.Vector3();
  const side = new THREE.Vector3();
  const upWorld = new THREE.Vector3(0, 1, 0);
  const localPoint = new THREE.Vector3();
  let clock = 0;

  function flashAt(point, strength, size) {
    screenOf(point, screen);
    flash.x = screen.x;
    flash.y = screen.y;
    flash.strength = strength;
    flash.size = size;
  }

  function updateDestroyer(dt) {
    const uniforms = destroyerMaterial.uniforms;
    if (reduceMotion && visit.state === 'waiting') {
      planVisit();
      visit.state = 'cruising';
      visit.age = visit.cruise * 0.45;
    }
    visit.age += dt;
    if (visit.state === 'waiting') {
      destroyer.visible = false;
      contact.classList.remove('is-locked');
      if (clock >= visit.until) {
        planVisit();
        visit.state = 'arriving';
        visit.age = 0;
      } else {
        return;
      }
    }
    destroyer.visible = true;
    let stretch = 1;
    let anchor = 0;
    let warp = 0;
    let fade = 1;
    let boost = 0;
    const position = tmp.copy(visit.start);
    if (visit.state === 'arriving') {
      const a = Math.min(1, visit.age / 0.55);
      stretch = 1 + 60 * Math.pow(1 - a, 3);
      anchor = 0.5;
      warp = Math.pow(1 - a, 1.5);
      fade = Math.min(1, a * 6);
      if (a >= 1) {
        flashAt(localPoint.set(0, 0, 0.5).multiplyScalar(visit.length).applyQuaternion(destroyer.quaternion).add(visit.start), 1.4, 1);
        visit.state = 'cruising';
        visit.age = 0;
      }
    } else if (visit.state === 'cruising') {
      position.addScaledVector(visit.velocity, visit.age);
      boost = Math.max(0, (visit.age - (visit.cruise - 1.6)) / 1.6);
      if (visit.age >= visit.cruise && !reduceMotion) {
        visit.state = 'leaving';
        visit.start.copy(position);
        visit.age = 0;
        flashAt(position, 0.9, 0.7);
      }
    } else if (visit.state === 'leaving') {
      const l = Math.min(1, visit.age / 0.4);
      stretch = 1 + 90 * Math.pow(l, 2.4);
      anchor = -0.5;
      warp = Math.min(1, l * 1.6);
      fade = 1 - Math.pow(l, 3);
      boost = 1;
      if (l >= 1) {
        visit.state = 'waiting';
        visit.until = clock + 7 + Math.random() * 9;
        destroyer.visible = false;
      }
    }
    destroyer.position.copy(position);
    destroyer.scale.setScalar(visit.length);
    orient(destroyer, visit.heading, visit.up);
    uniforms.uRotation.value.setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(destroyer.quaternion));
    uniforms.uStretch.value = stretch;
    uniforms.uAnchor.value = anchor;
    uniforms.uWarp.value = warp;
    uniforms.uFade.value = fade;
    uniforms.uBoost.value = boost;
    lightUniforms.uShow.value = warp < 0.05 && visit.state === 'cruising' ? 1 : 0;
    lightUniforms.uSize.value = Math.max(3, (visit.length / (2 * (10 - position.z) * tanHalf)) * view.height * 0.035) * view.ratio;

    // The brackets: the hull's bounds as the camera sees them, locked on while it cruises and
    // closing in over half a second after it arrives.
    if (visit.state === 'cruising') {
      destroyer.updateMatrixWorld(true);
      camera.updateMatrixWorld();
      let left = Infinity;
      let top = Infinity;
      let right = -Infinity;
      let bottom = -Infinity;
      for (const corner of hullCorners) {
        screenOf(localPoint.copy(corner).applyMatrix4(destroyer.matrixWorld), screen);
        left = Math.min(left, screen.x);
        right = Math.max(right, screen.x);
        top = Math.min(top, screen.y);
        bottom = Math.max(bottom, screen.y);
      }
      const lock = Math.min(1, visit.age / 0.6);
      const pad = 8 + 70 * Math.pow(1 - lock, 2);
      contact.style.transform = `translate(${(left - pad).toFixed(1)}px, ${(top - pad).toFixed(1)}px)`;
      contact.style.width = `${(right - left + pad * 2).toFixed(1)}px`;
      contact.style.height = `${(bottom - top + pad * 2).toFixed(1)}px`;
      contact.classList.add('is-locked');
    } else {
      contact.classList.remove('is-locked');
    }
  }

  function trailSample(fighter, index, point) {
    const trail = fighter.trails[index];
    trail.samples.unshift({ point: point.clone(), at: clock });
    while (trail.samples.length > 95 || (trail.samples.length && clock - trail.samples[trail.samples.length - 1].at > 0.6)) trail.samples.pop();
  }

  function drawTrails() {
    for (const fighter of fighters) {
      for (const trail of fighter.trails) {
        const positions = trail.line.geometry.getAttribute('position');
        const alphas = trail.line.geometry.getAttribute('aAlpha');
        trail.samples.forEach((sample, i) => {
          positions.setXYZ(i, sample.point.x, sample.point.y, sample.point.z);
          alphas.setX(i, Math.max(0, 1 - (clock - sample.at) / 0.6) * fighter.material.uniforms.uFade.value);
        });
        positions.needsUpdate = true;
        alphas.needsUpdate = true;
        trail.line.geometry.setDrawRange(0, trail.samples.length);
      }
    }
  }

  function updateFighters(dt) {
    if (!pass.active) {
      for (const fighter of fighters) fighter.group.visible = false;
      if (clock >= pass.next) planPass();
      else return;
    }
    pass.age += dt;
    const [p0, p1, p2, p3] = pass.points;
    fighters.forEach((fighter, index) => {
      const delay = index * 0.16;
      const s = Math.min(1, Math.max(0, (pass.age - delay) / pass.duration));
      const eased = s * s * (3 - 2 * s) * 0.35 + s * 0.65;
      bezier(p0, p1, p2, p3, eased, tmp);
      bezierTangent(p0, p1, p2, p3, eased, tangent);
      bezierTangent(p0, p1, p2, p3, Math.min(1, eased + 0.02), nextTangent);
      // Bank into the turn: the heading's swing to one side rolls the wings that way.
      const heading = tangent.clone().normalize();
      const swing = nextTangent.clone().normalize().sub(heading);
      side.crossVectors(upWorld, heading);
      if (side.lengthSq() < 1e-6) side.set(1, 0, 0);
      side.normalize();
      const roll = THREE.MathUtils.clamp(swing.dot(side) * 40, -1.1, 1.1) + (index ? 0.15 : -0.1);
      up.copy(upWorld).applyAxisAngle(heading, roll);
      if (index === 1) {
        // The wingman keeps station off the leader's right and a little low.
        const right = new THREE.Vector3().crossVectors(heading, up).normalize();
        tmp.addScaledVector(right, -0.9).addScaledVector(up, -0.3);
      }
      fighter.group.position.copy(tmp);
      fighter.group.scale.setScalar(0.55);
      orient(fighter.group, heading, up);
      fighter.group.visible = s > 0 && s < 1;
      const fade = Math.min(1, s * 12) * (1 - THREE.MathUtils.smoothstep(s, 0.86, 1.0));
      fighter.material.uniforms.uFade.value = fade;
      fighter.material.uniforms.uBoost.value = 0.4;
      if (fighter.group.visible) {
        fighter.group.updateMatrixWorld(true);
        for (const [trailIndex, x] of [[0, 0.1], [1, -0.1]]) trailSample(fighter, trailIndex, localPoint.set(x, 0, -0.44).applyMatrix4(fighter.group.matrixWorld));
      }
    });
    if (pass.age > pass.duration + 0.9) {
      pass.active = false;
      pass.next = clock + 9 + Math.random() * 9;
    }
  }

  return {
    // The star calls the fleet: the destroyer drops out of hyperspace now, or if it is already
    // here it jumps away, and the fighters make a pass if they are not making one.
    summon() {
      if (reduceMotion) return;
      if (visit.state === 'waiting') visit.until = clock;
      else if (visit.state === 'cruising') visit.age = Math.max(visit.age, visit.cruise);
      if (!pass.active) pass.next = clock + 0.4;
    },
    layout({ width, height, free, narrow, ratio }) {
      Object.assign(view, { width, height, free, narrow, ratio });
      if (reduceMotion) visit.state = 'waiting';
    },
    // Advances the ships; returns the flash to draw, in hero pixels, if any.
    update(dt) {
      clock += dt;
      flash.strength = Math.max(0, flash.strength - dt * 3.2);
      updateDestroyer(dt);
      updateFighters(dt);
      drawTrails();
      return flash;
    },
  };
}
