// The hero's ships, for r3-hero.js, built from r3-shipyard.js. Each load picks a scenario: one side
// of an era on patrol, or two sides at war. Capital ships drop out of hyperspace, cross the sky
// behind the star under contact brackets naming their navy and class, charge their engines and
// jump away, the two sides taking turns in a war. Fighters make passes in pairs, banking into their
// turns with their engines trailing; at war they meet in dogfights, the pursuers following the
// leaders' line a beat behind and firing on them in their own laser colour.
//
// Every ship shares one shader: panel seams and tones from its own coordinates, a painted plating
// on the capital ships tinted by their livery, the sun from behind the planet, the planet's glow
// from below, a backlit rim, lit ports and burning engines. Going to or coming from hyperspace, a
// ship is stretched along its heading into a streak and washed white, and a flash marks the moment.
// They fly only in the part of the hero the text leaves free, and under prefers-reduced-motion a
// capital ship holds still in the middle of its crossing and the fighters stay away.

import * as THREE from './vendor/three.module.min.js';
import { FACTIONS, buildCapital, buildFighter, pickScenario } from './r3-shipyard.js';

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

// Kinds: 0 hull, 1 fittings, 2 engine, 3 superstructure with windows, 4 wing with a painted band,
// 5 canopy, 6 painted, 7 solar panel. See r3-shipyard.js.
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
  // A seam one pixel wide wherever x crosses a whole number; w is how far x moves across a pixel.
  float seam(float x, float w) {
    float d = min(fract(x), 1.0 - fract(x));
    return 1.0 - smoothstep(0.0, max(w, 1e-4) * 1.2, d);
  }

  void main() {
    if (uFade <= 0.001) discard;
    vec3 n = normalize(vNormal);
    vec3 v = safeNormalize(uCamera - vWorld, vec3(0.0, 0.0, 1.0));
    if (dot(n, v) < 0.0) n = -n;

    // Panels, on the plane the face lies most nearly in. Their screen derivatives are taken here,
    // before the engines return early: inside a branch they are undefined along its edges.
    vec3 an = abs(vObjectNormal);
    bool onTop = an.y > max(an.x, an.z);
    bool sideways = !onTop && an.x > an.z;
    vec2 uv = onTop ? vObject.xz : (sideways ? vObject.zy : vObject.xy);
    vec2 cell = uv * uPanels;
    vec2 cellWidth = fwidth(cell);
    vec2 mapUv = uv * uMapScale + vec2(vKind * 0.37, 0.0);
    vec2 mapDx = dFdx(mapUv);
    vec2 mapDy = dFdy(mapUv);
    vec2 step2 = max(abs(mapDx) + abs(mapDy), vec2(1.0 / 2048.0));

    if (vKind > 1.5 && vKind < 2.5) {
      float flicker = 0.85 + 0.15 * sin(uTime * 31.0 + vObject.x * 50.0 + vObject.y * 37.0);
      vec3 burn = uEngine * (2.6 + 4.0 * uBoost) * flicker;
      gl_FragColor = vec4(mix(burn, vec3(2.4, 2.8, 3.4), uWarp) * uFade, 1.0);
      return;
    }

    float tone = 0.8 + 0.32 * hash21(floor(cell) + floor(vKind * 7.0));
    float seams = max(seam(cell.x, cellWidth.x), seam(cell.y * 0.5, cellWidth.y * 0.5));
    vec3 base = uHull;
    float ports = 0.0;
    bool painted = vKind > 5.5 && vKind < 6.5;
    bool canopy = vKind > 4.5 && vKind < 5.5;
    bool solar = vKind > 6.5;
    if (painted) base = uPaint;
    if (uTextured > 0.5 && (vKind < 1.5 || (vKind > 2.5 && vKind < 3.5) || painted)) {
      // The painted plating: its colour, and its relief turned into a tilt of the normal, measured
      // a screen pixel apart so it neither vanishes up close nor shimmers far off.
      vec4 detail = textureGrad(uDetailMap, mapUv, mapDx, mapDy);
      float hx = textureGrad(uDetailMap, mapUv + vec2(step2.x, 0.0), mapDx, mapDy).r;
      float hy = textureGrad(uDetailMap, mapUv + vec2(0.0, step2.y), mapDx, mapDy).r;
      vec3 tu = onTop ? vec3(1.0, 0.0, 0.0) : (sideways ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0));
      vec3 tv = onTop ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
      vec3 objectNormal = normalize(vObjectNormal);
      vec3 bumped = objectNormal - (tu * (hx - detail.r) + tv * (hy - detail.r)) * 3.0;
      n = safeNormalize(uRotation * bumped, n);
      if (dot(n, v) < 0.0) n = -n;
      // The plating is grey; the livery tints it, the paint where the hull is painted.
      base = textureGrad(uHullMap, mapUv, mapDx, mapDy).rgb * mix(0.55, 1.0, smoothstep(0.1, 0.35, detail.r)) * (painted ? uPaint : uHull) * 4.0;
      ports = detail.g;
      tone = 1.0;
      seams = 0.0;
    }
    if (vKind > 3.5 && vKind < 4.5) {
      float r = length(vObject.xy);
      base = mix(uHull, uPaint, step(0.2, r) * step(r, 0.27));
    }
    if (canopy) base = vec3(0.02, 0.025, 0.035);
    // A solar panel: near black, ribbed, with a soft sheen rather than a canopy's hard glint.
    if (solar) {
      float ribs = seam(uv.y * 26.0, cellWidth.y * 26.0 / uPanels.y);
      base = vec3(0.012, 0.014, 0.018) + uHull * 0.05 * ribs;
      tone = 1.0;
      seams = 0.0;
    }
    base *= tone * (1.0 - 0.4 * seams);

    float sunLight = max(dot(n, uSunDir), 0.0);
    vec3 col = base * (uSunColor * sunLight * 0.95 + uAir * (0.07 + 0.2 * max(-n.y, 0.0)) + vec3(0.025, 0.03, 0.04));
    vec3 h = safeNormalize(uSunDir + v, n);
    col += uSunColor * pow(max(dot(n, h), 0.0), canopy ? 160.0 : (solar ? 24.0 : 48.0)) * (canopy ? 2.0 : (solar ? 0.12 : 0.45)) * tone;
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

// Explosions: fire, sparks and burning debris as points whose whole flight is worked out here from
// where and when each was born, so the CPU only writes a particle once. Fire swells and cools from
// white through yellow and orange to a dull red; sparks fly on straight and small; debris burns
// orange and slows.
const PARTICLE_VERTEX = /* glsl */ `
  attribute vec3 aVelocity;
  attribute vec4 aLife;      // birth, lifetime, size, kind: 0 fire, 1 spark, 2 debris
  uniform float uNow;
  uniform float uScale;      // device pixels per world unit at a distance of one
  uniform float uMaxSize;    // no sprite larger than this, device pixels
  varying float vAge;
  varying float vKind;
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
    float slowing = aLife.w > 0.5 && aLife.w < 1.5 ? 0.15 : 0.55;
    vec3 p = position + aVelocity * t * (1.0 - slowing * age);
    vec4 view = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * view;
    float grow = aLife.w < 0.5 ? 0.45 + 1.6 * sqrt(age) : 1.0;
    gl_PointSize = min(aLife.z * grow * uScale / max(-view.z, 0.1), uMaxSize);
  }
`;

const PARTICLE_FRAGMENT = /* glsl */ `
  varying float vAge;
  varying float vKind;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    vec3 col;
    if (vKind < 0.5) {
      vec3 hot = mix(vec3(1.9, 1.75, 1.5), vec3(1.7, 1.05, 0.3), smoothstep(0.0, 0.18, vAge));
      vec3 cooling = mix(vec3(1.1, 0.38, 0.08), vec3(0.25, 0.05, 0.02), smoothstep(0.35, 0.9, vAge));
      col = mix(hot, cooling, smoothstep(0.15, 0.45, vAge)) * (1.0 - r * r) * pow(1.0 - vAge, 1.2);
    } else if (vKind < 1.5) {
      col = vec3(2.6, 2.1, 1.3) * (1.0 - smoothstep(0.2, 1.0, r)) * (1.0 - vAge);
    } else {
      col = vec3(2.2, 0.9, 0.25) * (1.0 - smoothstep(0.3, 1.0, r)) * (1.0 - vAge * vAge);
    }
    gl_FragColor = vec4(col, 1.0);
  }
`;

// The shockwave: a ring blown out across the ship's plane, bright at its leading edge.
const SHOCK_VERTEX = /* glsl */ `
  varying float vRadius;
  void main() {
    vRadius = length(position.xy);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SHOCK_FRAGMENT = /* glsl */ `
  uniform float uAge;
  varying float vRadius;
  void main() {
    float edge = smoothstep(0.82, 0.985, vRadius) * (1.0 - smoothstep(0.985, 1.0, vRadius));
    vec3 col = mix(vec3(1.3, 1.5, 1.7), vec3(0.9, 0.45, 0.25), uAge) * edge * pow(1.0 - uAge, 1.5);
    gl_FragColor = vec4(col, 1.0);
  }
`;

// Laser bolts: short segments, each in its faction's colour.
const BOLT_VERTEX = /* glsl */ `
  attribute float aAlpha;
  attribute vec3 aColor;
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    vAlpha = aAlpha;
    vColor = aColor;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const BOLT_FRAGMENT = /* glsl */ `
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    gl_FragColor = vec4(vColor * vAlpha * 3.5, 1.0);
  }
`;

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

export function createFleet({ scene, camera, time, sunDir, sunColor, air, reduceMotion, overlay, anisotropy = 1, random = Math.random }) {
  const [hullMap, detailMap] = hullMaps(anisotropy);
  const linear = (hex) => new THREE.Color(hex).convertSRGBToLinear();
  const shipMaterial = (side, { textured = false, panels = 22, windows = 1, haze = 0 } = {}) => new THREE.ShaderMaterial({
    vertexShader: SHIP_VERTEX,
    fragmentShader: SHIP_FRAGMENT,
    uniforms: {
      uCamera: { value: camera.position },
      uSunDir: sunDir,
      uSunColor: { value: sunColor },
      uAir: { value: air },
      uHull: { value: linear(side.hull) },
      uPaint: { value: linear(side.paint) },
      uEngine: { value: linear(side.engine) },
      uPanels: { value: new THREE.Vector2(panels, panels * 0.6) },
      uTime: time,
      uWarp: { value: 0 },
      uFade: { value: 0 },
      uBoost: { value: 0 },
      uWindows: { value: windows },
      uHaze: { value: haze },
      uTextured: { value: textured ? 1 : 0 },
      uHullMap: { value: hullMap },
      uDetailMap: { value: detailMap },
      uMapScale: { value: 2.4 },
      uRotation: { value: new THREE.Matrix3() },
      uStretch: { value: 1 },
      uAnchor: { value: 0 },
    },
    side: THREE.DoubleSide,
  });

  const scenario = pickScenario(random);
  const sides = scenario.sides.map((key) => ({ key, ...FACTIONS[key] }));

  // Running lights: red to port, green to starboard, white strobes on the rest.
  function runningLights(positions) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions.flat(), 3));
    geometry.setAttribute('aColor', new THREE.Float32BufferAttribute(positions.flatMap((_, i) => (i === 0 ? [1, 0.15, 0.1] : i === 1 ? [0.2, 1, 0.35] : [1, 1, 1])), 3));
    geometry.setAttribute('aPhase', new THREE.Float32BufferAttribute(positions.map((_, i) => (i < 2 ? -1 : 0.5 + i * 2.1)), 1));
    const uniforms = { uTime: time, uSize: { value: 6 }, uShow: { value: 0 } };
    const points = new THREE.Points(geometry, new THREE.ShaderMaterial({
      vertexShader: LIGHT_VERTEX,
      fragmentShader: LIGHT_FRAGMENT,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    points.frustumCulled = false;
    return { points, uniforms };
  }

  // Capital ships: one of each hull the sides fly, built once. Each visit picks one.
  const capitals = [];
  for (const side of sides) {
    for (const [kind, label] of side.capitals) {
      let ship = capitals.find((entry) => entry.side === side && entry.kind === kind);
      if (!ship) {
        const design = buildCapital(kind, random);
        const material = shipMaterial(side, { textured: true, panels: 30, haze: 0.1 });
        const mesh = new THREE.Mesh(design.geometry, material);
        mesh.frustumCulled = false;
        const group = new THREE.Group();
        group.add(mesh);
        const lights = runningLights(design.lights);
        group.add(lights.points);
        group.visible = false;
        scene.add(group);
        ship = { side, kind, design, material, group, lights, labels: [] };
        capitals.push(ship);
      }
      ship.labels.push(label);
    }
  }

  // Fighters: a pair of each type each side flies, each with a trail from every engine.
  const fighterDesigns = new Map();
  const pools = new Map();
  for (const side of sides) {
    for (const kind of side.fighters) {
      if (!fighterDesigns.has(kind)) fighterDesigns.set(kind, buildFighter(kind));
      const design = fighterDesigns.get(kind);
      pools.set(`${side.key}:${kind}`, [0, 1].map(() => {
        const material = shipMaterial(side, { windows: 0 });
        const mesh = new THREE.Mesh(design.geometry, material);
        mesh.frustumCulled = false;
        const group = new THREE.Group();
        group.add(mesh);
        group.visible = false;
        scene.add(group);
        const trails = design.engines.map(() => {
          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(96 * 3), 3));
          geometry.setAttribute('aAlpha', new THREE.BufferAttribute(new Float32Array(96), 1));
          geometry.setDrawRange(0, 0);
          const line = new THREE.Line(geometry, new THREE.ShaderMaterial({
            vertexShader: LINE_VERTEX,
            fragmentShader: LINE_FRAGMENT,
            uniforms: { uColor: { value: linear(side.engine).multiplyScalar(2.2) } },
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
          }));
          line.frustumCulled = false;
          scene.add(line);
          return { line, samples: [] };
        });
        return { side, design, group, material, trails, nextShot: 0, cannon: 0 };
      }));
    }
  }
  const allFighters = [...pools.values()].flat();

  // Laser bolts, fired only in a dogfight, at the ships being chased.
  const BOLTS = 40;
  const boltGeometry = new THREE.BufferGeometry();
  boltGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(BOLTS * 6), 3));
  boltGeometry.setAttribute('aAlpha', new THREE.BufferAttribute(new Float32Array(BOLTS * 2), 1));
  boltGeometry.setAttribute('aColor', new THREE.BufferAttribute(new Float32Array(BOLTS * 6), 3));
  const boltLines = new THREE.LineSegments(boltGeometry, new THREE.ShaderMaterial({
    vertexShader: BOLT_VERTEX,
    fragmentShader: BOLT_FRAGMENT,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  boltLines.frustumCulled = false;
  scene.add(boltLines);
  const bolts = Array.from({ length: BOLTS }, () => ({ age: Infinity, position: new THREE.Vector3(), direction: new THREE.Vector3(), color: new THREE.Color() }));
  let nextBolt = 0;

  // Explosions: a pool of particles written round-robin, and a few shockwave rings.
  const PARTICLES = 1600;
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(PARTICLES * 3), 3));
  particleGeometry.setAttribute('aVelocity', new THREE.BufferAttribute(new Float32Array(PARTICLES * 3), 3));
  particleGeometry.setAttribute('aLife', new THREE.BufferAttribute(new Float32Array(PARTICLES * 4).fill(-1000), 4));
  const particleUniforms = { uNow: { value: 0 }, uScale: { value: 1 }, uMaxSize: { value: 64 } };
  const particles = new THREE.Points(particleGeometry, new THREE.ShaderMaterial({
    vertexShader: PARTICLE_VERTEX,
    fragmentShader: PARTICLE_FRAGMENT,
    uniforms: particleUniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  particles.frustumCulled = false;
  scene.add(particles);
  let nextParticle = 0;
  const direction = new THREE.Vector3();
  // count particles of a kind from origin, their speed, size and life drawn from the given ranges.
  function emit(origin, count, kind, [speedLow, speedHigh], [sizeLow, sizeHigh], [lifeLow, lifeHigh]) {
    const start = particleGeometry.getAttribute('position');
    const velocity = particleGeometry.getAttribute('aVelocity');
    const life = particleGeometry.getAttribute('aLife');
    for (let i = 0; i < count; i++) {
      const index = nextParticle;
      nextParticle = (nextParticle + 1) % PARTICLES;
      direction.set(random() * 2 - 1, random() * 2 - 1, random() * 2 - 1);
      if (direction.lengthSq() < 1e-4) direction.set(0, 1, 0);
      direction.normalize().multiplyScalar(speedLow + (speedHigh - speedLow) * Math.pow(random(), 0.6));
      start.setXYZ(index, origin.x, origin.y, origin.z);
      velocity.setXYZ(index, direction.x, direction.y, direction.z);
      life.setXYZW(index, clock + random() * 0.06, lifeLow + (lifeHigh - lifeLow) * random(), sizeLow + (sizeHigh - sizeLow) * random(), kind);
    }
    start.needsUpdate = true;
    velocity.needsUpdate = true;
    life.needsUpdate = true;
  }
  const shocks = [0, 1, 2].map(() => {
    const uniforms = { uAge: { value: 1 } };
    const mesh = new THREE.Mesh(new THREE.RingGeometry(0.0, 1.0, 96, 1), new THREE.ShaderMaterial({
      vertexShader: SHOCK_VERTEX,
      fragmentShader: SHOCK_FRAGMENT,
      uniforms,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    }));
    mesh.frustumCulled = false;
    mesh.visible = false;
    scene.add(mesh);
    return { mesh, uniforms, age: Infinity, reach: 1, life: 1.4 };
  });
  let nextShock = 0;
  const flatten = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
  function shockwave(origin, quaternion, reach) {
    const shock = shocks[nextShock];
    nextShock = (nextShock + 1) % shocks.length;
    shock.age = 0;
    shock.reach = reach;
    shock.mesh.position.copy(origin);
    shock.mesh.quaternion.copy(quaternion).multiply(flatten);
    shock.mesh.visible = true;
  }
  let shake = 0;

  // A fireball: fire, sparks and some burning debris, sized to what blew up. The intensity sets how
  // much of each there is, and only a little how far it reaches.
  function blast(origin, size, intensity = 1) {
    emit(origin, Math.round(40 * intensity), 0, [size * 0.05, size * (0.16 + 0.05 * intensity)], [size * 0.03, size * (0.06 + 0.008 * intensity)], [0.7, 1.1 + 0.15 * intensity]);
    emit(origin, Math.round(18 * intensity), 1, [size * 0.3, size * (0.65 + 0.1 * intensity)], [size * 0.006, size * 0.012], [0.5, 1.1]);
    emit(origin, Math.round(5 * intensity), 2, [size * 0.1, size * 0.35], [size * 0.014, size * 0.024], [1.4, 2.6]);
  }

  // The contact brackets: a capital ship is tracked like a target on a scope.
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

  // A capital ship's visit: arrive, cruise, charge, leave, then wait.
  const visit = { state: 'waiting', until: reduceMotion ? 0 : 2.5, start: new THREE.Vector3(), velocity: new THREE.Vector3(), heading: new THREE.Vector3(), up: new THREE.Vector3(), length: 1, cruise: 30, age: 0, count: 0, ship: capitals[0] };
  function planVisit() {
    const { width, height, free, narrow } = view;
    // At war the sides take turns; either way the ship is one its side flies.
    // ?ship=organicCruiser asks for a hull by name, where a side flies one.
    const asked = capitals.filter((entry) => entry.kind === new URLSearchParams(location.search).get('ship'));
    const side = asked.length ? asked[0].side : sides[visit.count % sides.length];
    const fleet = asked.length ? asked : capitals.filter((entry) => entry.side === side);
    const ship = fleet[Math.floor(random() * fleet.length)];
    visit.count += 1;
    for (const entry of capitals) entry.group.visible = false;
    visit.ship = ship;
    // As long as a third of the free sky, within reason; the hull's centre keeps half its length
    // clear of the text and the hero's edges. On a phone the text fills the hero, so the ship keeps
    // low and small, over the planet's limb beside the status strip.
    const start = narrow ? width * 0.46 : Math.max(free + 30, width * 0.45);
    const lengthPx = narrow ? Math.min(width * 0.26, 100) : THREE.MathUtils.clamp((width - start) * 0.42, 180, 340);
    const leftEdge = start + lengthPx * 0.55;
    const rightEdge = width - 24 - lengthPx * 0.7;
    const span = Math.max(rightEdge - leftEdge, 40);
    const direction = random() < 0.6 ? -1 : 1;
    const x = direction < 0 ? leftEdge + span * (0.7 + 0.3 * random()) : leftEdge + span * (0.3 * random());
    const y = narrow ? height * (0.74 + 0.05 * random()) : THREE.MathUtils.clamp(height * (0.22 + 0.16 * random()), lengthPx * 0.32 + 12, height * 0.55);
    const depth = -7 - random() * 4;
    worldAt(x, y, depth, visit.start);
    visit.length = (lengthPx / height) * 2 * (10 - depth) * tanHalf;
    visit.cruise = reduceMotion ? 30 : 26 + random() * 12;
    const travelPx = span * (0.55 + 0.15 * random());
    const travel = (travelPx / height) * 2 * (10 - depth) * tanHalf;
    visit.velocity.set(direction * travel, (random() - 0.5) * travel * 0.08, 0).divideScalar(visit.cruise);
    // The hull points where it goes, turned a little toward the viewer so the deck shows.
    visit.heading.copy(visit.velocity).normalize();
    visit.heading.z += 0.25;
    visit.heading.normalize();
    visit.up.set((random() - 0.5) * 0.3, 1, 0.3).normalize();
    contactLabel.textContent = `${ship.side.name} ▸ ${ship.labels[Math.floor(random() * ship.labels.length)]}`;
  }

  // The fighters' passes: a patrol of one side, or at war a dogfight, one side chased by the other.
  const pass = { active: false, age: 0, duration: 3.4, next: reduceMotion ? Infinity : 5 + random() * 4, points: [], flights: [] };
  function pairOf(side) {
    const kind = side.fighters[Math.floor(random() * side.fighters.length)];
    return pools.get(`${side.key}:${kind}`);
  }
  function planPass() {
    const { width, height, free, narrow } = view;
    const left = narrow ? width * 0.5 : Math.max(free + 40, width * 0.48);
    const right = width * 0.98;
    const mid = (left + right) / 2;
    const kind = Math.floor(random() * 3);
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
    pass.duration = 3.0 + random() * 1.2;
    pass.age = 0;
    pass.active = true;
    const dogfight = scenario.war && random() < 0.7;
    const leaders = dogfight ? sides[Math.floor(random() * sides.length)] : sides[0];
    pass.flights = [{ fighters: pairOf(leaders), delay: 0, chasing: null }];
    if (dogfight) {
      const pursuers = sides.find((side) => side !== leaders);
      pass.flights.push({ fighters: pairOf(pursuers), delay: 0.5 + random() * 0.2, chasing: pass.flights[0].fighters });
      pass.duration += 0.4;
    }
    for (const fighter of allFighters) {
      fighter.group.visible = false;
      fighter.dead = false;
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
  const aim = new THREE.Vector3();
  let clock = 0;

  function flashAt(point, strength, size) {
    screenOf(point, screen);
    flash.x = screen.x;
    flash.y = screen.y;
    flash.strength = strength;
    flash.size = size;
  }

  function updateCapital(dt) {
    if (reduceMotion && visit.state === 'waiting') {
      planVisit();
      visit.state = 'cruising';
      visit.age = visit.cruise * 0.45;
    }
    visit.age += dt;
    if (visit.state === 'waiting') {
      for (const entry of capitals) entry.group.visible = false;
      contact.classList.remove('is-locked');
      if (clock >= visit.until) {
        planVisit();
        visit.state = 'arriving';
        visit.age = 0;
      } else {
        return;
      }
    }
    const ship = visit.ship;
    const uniforms = ship.material.uniforms;
    ship.group.visible = true;
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
        flashAt(localPoint.set(0, 0, 0.5).multiplyScalar(visit.length).applyQuaternion(ship.group.quaternion).add(visit.start), 1.4, 1);
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
    } else if (visit.state === 'exploding') {
      // A chain of blasts along the hull, then the whole ship at once.
      position.addScaledVector(visit.velocity, visit.age * 0.6);
      boost = 0;
      while (visit.blasts < 7 && visit.age >= visit.blasts * 0.17) {
        const corner = ship.design.extremes[Math.floor(random() * ship.design.extremes.length)];
        localPoint.copy(corner).multiplyScalar(0.3 + 0.6 * random()).applyMatrix4(ship.group.matrixWorld);
        blast(localPoint, visit.length, 0.8);
        flashAt(localPoint, 0.35, 0.5);
        shake = Math.max(shake, 0.25);
        visit.blasts += 1;
      }
      if (visit.age >= 1.3) {
        blast(position, visit.length, 5);
        shockwave(position, ship.group.quaternion, visit.length * 1.8);
        flashAt(position, 1.5, 1.6);
        shake = 1;
        ship.group.visible = false;
        contact.classList.remove('is-locked', 'is-lost');
        visit.state = 'waiting';
        visit.until = clock + 3.5 + random() * 3;
        visit.start.copy(position);
        return;
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
        visit.until = clock + 7 + random() * 9;
        ship.group.visible = false;
      }
    }
    ship.group.position.copy(position);
    ship.group.scale.setScalar(visit.length);
    orient(ship.group, visit.heading, visit.up);
    uniforms.uRotation.value.setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(ship.group.quaternion));
    uniforms.uStretch.value = stretch;
    uniforms.uAnchor.value = anchor;
    uniforms.uWarp.value = warp;
    uniforms.uFade.value = fade;
    uniforms.uBoost.value = boost;
    ship.lights.uniforms.uShow.value = warp < 0.05 && visit.state === 'cruising' ? 1 : 0;
    ship.lights.uniforms.uSize.value = Math.max(3, (visit.length / (2 * (10 - position.z) * tanHalf)) * view.height * 0.035) * view.ratio;

    // The brackets: the hull's bounds as the camera sees them, locked on while it cruises and
    // closing in over half a second after it arrives. They are kept, too, to aim at.
    visit.rect = null;
    if (visit.state === 'cruising' || visit.state === 'exploding') {
      ship.group.updateMatrixWorld(true);
      camera.updateMatrixWorld();
      let left = Infinity;
      let top = Infinity;
      let right = -Infinity;
      let bottom = -Infinity;
      for (const corner of ship.design.extremes) {
        screenOf(localPoint.copy(corner).applyMatrix4(ship.group.matrixWorld), screen);
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
      visit.rect = { left, top, right, bottom };
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
    for (const fighter of allFighters) {
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

  // A pursuer fires from its next cannon at where its quarry will be, a little off.
  function fire(fighter, quarry, quarryVelocity) {
    fighter.group.updateMatrixWorld(true);
    const cannons = fighter.design.cannons;
    const bolt = bolts[nextBolt];
    nextBolt = (nextBolt + 1) % BOLTS;
    bolt.age = 0;
    bolt.position.set(...cannons[fighter.cannon % cannons.length]).applyMatrix4(fighter.group.matrixWorld);
    fighter.cannon += 1;
    aim.copy(quarry.group.position).addScaledVector(quarryVelocity, 0.12).sub(bolt.position);
    if (aim.lengthSq() < 1e-6) return;
    aim.normalize();
    aim.x += (random() - 0.5) * 0.05;
    aim.y += (random() - 0.5) * 0.05;
    bolt.direction.copy(aim.normalize());
    bolt.color.set(fighter.side.laser).convertSRGBToLinear();
  }

  function updateBolts(dt) {
    const positions = boltGeometry.getAttribute('position');
    const alphas = boltGeometry.getAttribute('aAlpha');
    const colors = boltGeometry.getAttribute('aColor');
    bolts.forEach((bolt, i) => {
      bolt.age += dt;
      const alive = bolt.age < 0.5;
      if (alive) bolt.position.addScaledVector(bolt.direction, 48 * dt);
      const tail = tmp.copy(bolt.position).addScaledVector(bolt.direction, -0.5);
      positions.setXYZ(i * 2, bolt.position.x, bolt.position.y, bolt.position.z);
      positions.setXYZ(i * 2 + 1, tail.x, tail.y, tail.z);
      const alpha = alive ? 1 - bolt.age / 0.5 : 0;
      alphas.setX(i * 2, alpha);
      alphas.setX(i * 2 + 1, alpha * 0.35);
      colors.setXYZ(i * 2, bolt.color.r, bolt.color.g, bolt.color.b);
      colors.setXYZ(i * 2 + 1, bolt.color.r, bolt.color.g, bolt.color.b);
    });
    positions.needsUpdate = true;
    alphas.needsUpdate = true;
    colors.needsUpdate = true;
  }

  const velocities = new Map();
  function updateFighters(dt) {
    if (!pass.active) {
      for (const fighter of allFighters) fighter.group.visible = false;
      if (clock >= pass.next) planPass();
      else return;
    }
    pass.age += dt;
    const [p0, p1, p2, p3] = pass.points;
    for (const flight of pass.flights) {
      flight.fighters.forEach((fighter, index) => {
        if (fighter.dead) {
          fighter.group.visible = false;
          return;
        }
        const delay = flight.delay + index * 0.16;
        const s = Math.min(1, Math.max(0, (pass.age - delay) / pass.duration));
        const eased = s * s * (3 - 2 * s) * 0.35 + s * 0.65;
        bezier(p0, p1, p2, p3, eased, tmp);
        bezierTangent(p0, p1, p2, p3, eased, tangent);
        bezierTangent(p0, p1, p2, p3, Math.min(1, eased + 0.02), nextTangent);
        velocities.set(fighter, tangent.clone().divideScalar(pass.duration));
        // Bank into the turn: the heading's swing to one side rolls the wings that way.
        const heading = tangent.clone().normalize();
        const swing = nextTangent.clone().normalize().sub(heading);
        side.crossVectors(upWorld, heading);
        if (side.lengthSq() < 1e-6) side.set(1, 0, 0);
        side.normalize();
        const roll = THREE.MathUtils.clamp(swing.dot(side) * 40, -1.1, 1.1) + (index ? 0.15 : -0.1) + (flight.chasing ? 0.25 * Math.sin(clock * 3 + index) : 0);
        up.copy(upWorld).applyAxisAngle(heading, roll);
        // The wingman keeps station off the leader's right and a little low; a pursuer weaves.
        const right = new THREE.Vector3().crossVectors(heading, up).normalize();
        if (index === 1) tmp.addScaledVector(right, -0.9).addScaledVector(up, -0.3);
        if (flight.chasing) tmp.addScaledVector(right, 0.35 * Math.sin(clock * 2.2 + index * 2)).addScaledVector(up, 0.25 * Math.cos(clock * 1.7 + index));
        fighter.group.position.copy(tmp);
        fighter.group.scale.setScalar(0.55);
        orient(fighter.group, heading, up);
        fighter.group.visible = s > 0 && s < 1;
        const fade = Math.min(1, s * 12) * (1 - THREE.MathUtils.smoothstep(s, 0.86, 1.0));
        fighter.material.uniforms.uFade.value = fade;
        fighter.material.uniforms.uBoost.value = 0.4;
        if (!fighter.group.visible) return;
        fighter.group.updateMatrixWorld(true);
        fighter.design.engines.forEach((engine, trailIndex) => trailSample(fighter, trailIndex, localPoint.set(...engine).applyMatrix4(fighter.group.matrixWorld)));
        // A pursuer fires in bursts at its quarry while both are well in view.
        if (flight.chasing && s > 0.12 && s < 0.8 && clock >= fighter.nextShot) {
          const quarry = flight.chasing[index % flight.chasing.length];
          if (quarry.group.visible) fire(fighter, quarry, velocities.get(quarry) || tangent);
          fighter.nextShot = clock + (fighter.cannon % 4 === 3 ? 0.45 : 0.11);
        }
      });
    }
    if (pass.age > pass.duration + 1.4) {
      pass.active = false;
      pass.next = clock + 9 + random() * 9;
    }
  }

  // What is under a point of the hero, if anything can be shot there: a fighter first, being
  // smaller and nearer, then the capital ship inside its brackets.
  function targetAt(x, y) {
    for (const flight of pass.active ? pass.flights : []) {
      for (const fighter of flight.fighters) {
        if (fighter.dead || !fighter.group.visible) continue;
        screenOf(fighter.group.position, screen);
        const radius = (0.35 / (2 * Math.max(10 - fighter.group.position.z, 0.5) * tanHalf)) * view.height + 12;
        if ((screen.x - x) ** 2 + (screen.y - y) ** 2 < radius * radius) return { fighter };
      }
    }
    const rect = visit.rect;
    if (rect && visit.state === 'cruising') {
      const insetX = (rect.right - rect.left) * 0.1;
      const insetY = (rect.bottom - rect.top) * 0.1;
      if (x > rect.left + insetX && x < rect.right - insetX && y > rect.top + insetY && y < rect.bottom - insetY) return { capital: visit.ship };
    }
    return null;
  }

  return {
    // Whether a click at this point of the hero would hit a ship, for the cursor.
    aimed(x, y) {
      return !!targetAt(x, y);
    },
    // A click on a ship blows it up. Returns whether it hit one.
    shoot(x, y) {
      const target = targetAt(x, y);
      if (!target) return false;
      if (target.fighter) {
        const fighter = target.fighter;
        fighter.dead = true;
        fighter.group.visible = false;
        if (!reduceMotion) {
          blast(fighter.group.position, 0.9, 1);
          flashAt(fighter.group.position, 0.8, 0.5);
          shake = Math.max(shake, 0.3);
        }
      } else if (reduceMotion) {
        visit.ship.group.visible = false;
        visit.state = 'waiting';
        visit.until = clock + 5;
        contact.classList.remove('is-locked');
      } else {
        visit.start.addScaledVector(visit.velocity, visit.age);
        visit.state = 'exploding';
        visit.age = 0;
        visit.blasts = 0;
        contactLabel.textContent = `Contact lost ▸ ${contactLabel.textContent.split(' ▸ ').pop()}`;
        contact.classList.add('is-lost');
      }
      return true;
    },
    // The star calls the fleet: a capital ship drops out of hyperspace now, or if one is already
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
      shake = Math.max(0, shake - dt * 2.2);
      flash.shake = shake;
      particleUniforms.uNow.value = clock;
      particleUniforms.uScale.value = (view.height * view.ratio) / (2 * tanHalf);
      particleUniforms.uMaxSize.value = view.height * view.ratio * 0.14;
      for (const shock of shocks) {
        shock.age += dt / shock.life;
        shock.mesh.visible = shock.age < 1;
        if (!shock.mesh.visible) continue;
        shock.uniforms.uAge.value = shock.age;
        shock.mesh.scale.setScalar(shock.reach * (0.05 + Math.sqrt(shock.age)));
      }
      updateCapital(dt);
      updateFighters(dt);
      updateBolts(dt);
      drawTrails();
      return flash;
    },
  };
}
