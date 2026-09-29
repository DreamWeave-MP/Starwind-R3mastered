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

// The planet, which the sky draws as a disc, stands behind the ships as a sphere: its front surface
// is uPlanetDepth.x from the camera at its limb, uPlanetDepth.y nearer at the disc's centre. A
// fragment of a ship, trail, bolt or blast that lies behind that surface is hidden, so a fighter
// diving for the horizon slips behind the limb, and one climbing from the far side rises over it.
const PLANET = /* glsl */ `
  uniform vec3 uPlanetDisc;  // the disc's centre and radius, device pixels, y up
  uniform vec2 uPlanetDepth;
  bool behindPlanet(float depth) {
    float r = length(gl_FragCoord.xy - uPlanetDisc.xy) / max(uPlanetDisc.z, 1.0);
    if (r >= 1.0) return false;
    return depth > uPlanetDepth.x - uPlanetDepth.y * sqrt(1.0 - r * r);
  }
`;

const SHIP_VERTEX = /* glsl */ `
  attribute float aKind;
  uniform float uStretch;
  uniform float uAnchor;
  varying vec3 vObject;
  varying vec3 vObjectNormal;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vKind;
  varying float vDepth;
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
    vec4 view = viewMatrix * world;
    vDepth = -view.z;
    gl_Position = projectionMatrix * view;
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
  varying float vDepth;
  ${PLANET}

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
    if (behindPlanet(vDepth)) discard;

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
  varying float vDepth;
  void main() {
    vAlpha = aAlpha;
    vec4 view = modelViewMatrix * vec4(position, 1.0);
    vDepth = -view.z;
    gl_Position = projectionMatrix * view;
  }
`;

const LINE_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  varying float vAlpha;
  varying float vDepth;
  ${PLANET}
  void main() {
    if (behindPlanet(vDepth)) discard;
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
    float slowing = aLife.w > 0.5 && aLife.w < 1.5 ? 0.15 : 0.55;
    vec3 p = position + aVelocity * t * (1.0 - slowing * age);
    vec4 view = modelViewMatrix * vec4(p, 1.0);
    vDepth = -view.z;
    gl_Position = projectionMatrix * view;
    float grow = aLife.w < 0.5 ? 0.45 + 1.6 * sqrt(age) : 1.0;
    gl_PointSize = min(aLife.z * grow * uScale / max(-view.z, 0.1), uMaxSize);
  }
`;

const PARTICLE_FRAGMENT = /* glsl */ `
  varying float vAge;
  varying float vKind;
  varying float vDepth;
  ${PLANET}
  void main() {
    if (behindPlanet(vDepth)) discard;
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
  varying float vDepth;
  void main() {
    vAlpha = aAlpha;
    vColor = aColor;
    vec4 view = modelViewMatrix * vec4(position, 1.0);
    vDepth = -view.z;
    gl_Position = projectionMatrix * view;
  }
`;

const BOLT_FRAGMENT = /* glsl */ `
  varying float vAlpha;
  varying vec3 vColor;
  varying float vDepth;
  ${PLANET}
  void main() {
    if (behindPlanet(vDepth)) discard;
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

// A shield: a shell shrink-wrapped round the hull, dark until a shot lands, when a hex lattice
// lights round the point struck and a ring runs out across it. Once the shield has failed, the
// lattice flickers and tears. Positions are the hull's own, one unit long.
const SHIELD_VERTEX = /* glsl */ `
  varying vec3 vLocal;
  varying vec3 vLocalNormal;
  varying vec3 vWorld;
  varying vec3 vWorldNormal;
  varying float vDepth;
  void main() {
    vLocal = position;
    vLocalNormal = normal;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 view = viewMatrix * world;
    vDepth = -view.z;
    gl_Position = projectionMatrix * view;
  }
`;

const SHIELD_FRAGMENT = /* glsl */ `
  uniform vec4 uHits[6];     // where each shot landed on the shell, and its age, 0 to 1
  uniform vec3 uColor;
  uniform vec3 uCamera;
  uniform float uFailing;
  varying vec3 vLocal;
  varying vec3 vLocalNormal;
  varying vec3 vWorld;
  varying vec3 vWorldNormal;
  varying float vDepth;
  ${PLANET}
  // 0 in the middle of a hexagon, rising to 1 at its edge.
  float hexEdge(vec2 p) {
    const vec2 s = vec2(1.0, 1.7320508);
    vec4 centres = floor(vec4(p, p - vec2(0.5, 1.0)) / s.xyxy) + 0.5;
    vec4 offsets = vec4(p - centres.xy * s, p - (centres.zw + 0.5) * s);
    vec2 local = dot(offsets.xy, offsets.xy) < dot(offsets.zw, offsets.zw) ? offsets.xy : offsets.zw;
    vec2 a = abs(local);
    return smoothstep(0.36, 0.5, max(dot(a, s * 0.5), a.x));
  }
  void main() {
    if (behindPlanet(vDepth)) discard;
    float glow = 0.0;
    for (int i = 0; i < 6; i++) {
      vec4 hit = uHits[i];
      if (hit.w < 0.0) continue;
      float reach = distance(vLocal, hit.xyz);
      float ring = exp(-pow((reach - hit.w * 0.42) / 0.03, 2.0));
      float spot = exp(-reach * reach * 500.0) * 2.0;
      glow += (ring * 0.7 + spot) * (1.0 - hit.w) * (1.0 - hit.w);
    }
    vec3 v = normalize(uCamera - vWorld);
    vec3 n = normalize(vWorldNormal);
    float rim = pow(1.0 - abs(dot(n, v)), 2.0);
    // The hex lattice, projected from the three sides and blended by which one the shell faces, so
    // it wraps the hull without seams or stretching.
    vec3 lattice = vLocal * 38.0;
    vec3 facing = pow(abs(normalize(vLocalNormal)), vec3(4.0));
    facing /= max(facing.x + facing.y + facing.z, 1e-4);
    float cells = hexEdge(lattice.yz) * facing.x + hexEdge(lattice.xz) * facing.y + hexEdge(lattice.xy) * facing.z;
    float tear = uFailing > 0.5 ? step(0.5, fract(sin(dot(floor(lattice.xy * 0.5 + lattice.z * 0.3), vec2(12.9898, 78.233))) * 43758.5453)) : 1.0;
    vec3 col = uColor * glow * (0.35 + 0.9 * cells) * (0.6 + 0.4 * rim) * tear;
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createFleet({ scene, camera, time, sunDir, sunColor, air, reduceMotion, overlay, anisotropy = 1, random = Math.random, scenario: forcedScenario = null }) {
  const [hullMap, detailMap] = hullMaps(anisotropy);
  const planetUniforms = { uPlanetDisc: { value: new THREE.Vector3(-1e5, -1e5, 1) }, uPlanetDepth: { value: new THREE.Vector2(40, 15) } };
  const linear = (hex) => new THREE.Color(hex).convertSRGBToLinear();
  // Everything the fleet puts in the scene or the page, so dispose() can take it all away again.
  const owned = [];
  const ownedElements = [];
  function own(object) {
    scene.add(object);
    owned.push(object);
    return object;
  }
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
      ...planetUniforms,
    },
    side: THREE.DoubleSide,
  });

  const scenario = forcedScenario || pickScenario(random);
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

  // A shield: a shell shrink-wrapped round the hull. The hull is first scaled to about the same
  // size every way; there, in each direction from its middle, the shell stands a little beyond the
  // furthest the hull reaches, and is scaled back. So it follows a flat wedge or a ring as closely
  // as a cruiser, and a hit lands on the shell just over the spot struck.
  function shieldFor(design, side) {
    const position = design.geometry.getAttribute('position');
    const stride = Math.max(1, Math.floor(position.count / 1500));
    const samples = [];
    for (let i = 0; i < position.count; i += stride) samples.push(new THREE.Vector3().fromBufferAttribute(position, i));
    const bounds = new THREE.Box3().setFromPoints(samples);
    const centre = bounds.getCenter(new THREE.Vector3());
    const half = bounds.getSize(new THREE.Vector3()).multiplyScalar(0.5);
    half.set(Math.max(half.x, 0.03), Math.max(half.y, 0.03), Math.max(half.z, 0.03));
    for (const sample of samples) sample.sub(centre).divide(half);
    const reachToward = (direction) => {
      let furthest = 0.05;
      for (const sample of samples) furthest = Math.max(furthest, sample.dot(direction));
      return furthest;
    };
    const margin = 0.03;
    const geometry = new THREE.SphereGeometry(1, 64, 40);
    const shell = geometry.getAttribute('position');
    const direction = new THREE.Vector3();
    const point = new THREE.Vector3();
    // A point on the shell, out from the middle along a direction in the scaled hull's space.
    const shellAlong = (out) => {
      out.copy(direction).multiplyScalar(reachToward(direction)).multiply(half);
      const length = out.length();
      return out.multiplyScalar((length + margin) / Math.max(length, 1e-4)).add(centre);
    };
    for (let i = 0; i < shell.count; i++) {
      direction.fromBufferAttribute(shell, i).normalize();
      shellAlong(point);
      shell.setXYZ(i, point.x, point.y, point.z);
    }
    geometry.computeVertexNormals();
    const onShell = (spot, out) => {
      direction.copy(spot).sub(centre).divide(half);
      if (direction.lengthSq() < 1e-8) direction.set(0, 1, 0);
      direction.normalize();
      return shellAlong(out);
    };
    const uniforms = {
      uHits: { value: Array.from({ length: 6 }, () => new THREE.Vector4(0, 0, 1, -1)) },
      uColor: { value: linear(side.engine).lerp(new THREE.Color(1, 1, 1), 0.25).multiplyScalar(1.6) },
      uCamera: { value: camera.position },
      uFailing: { value: 0 },
      ...planetUniforms,
    };
    const mesh = new THREE.Mesh(geometry, new THREE.ShaderMaterial({
      vertexShader: SHIELD_VERTEX,
      fragmentShader: SHIELD_FRAGMENT,
      uniforms,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    }));
    mesh.frustumCulled = false;
    return { mesh, uniforms, onShell, hits: uniforms.uHits.value.map(() => ({ age: Infinity, direction: new THREE.Vector3() })), next: 0 };
  }

  // Capital ships: one of each hull the sides fly, built once, each with its shield.
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
        const shield = shieldFor(design, side);
        group.add(shield.mesh);
        group.visible = false;
        own(group);
        ship = { side, kind, design, material, group, lights, shield, labels: [] };
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
        own(group);
        const trails = design.engines.map(() => makeTrail(linear(side.engine).multiplyScalar(2.2)));
        return { side, design, group, material, trails, nextShot: 0, cannon: 0 };
      }));
    }
  }
  const allFighters = [...pools.values()].flat();

  function makeTrail(color) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(96 * 3), 3));
    geometry.setAttribute('aAlpha', new THREE.BufferAttribute(new Float32Array(96), 1));
    geometry.setDrawRange(0, 0);
    const line = new THREE.Line(geometry, new THREE.ShaderMaterial({
      vertexShader: LINE_VERTEX,
      fragmentShader: LINE_FRAGMENT,
      uniforms: { uColor: { value: color }, ...planetUniforms },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    line.frustumCulled = false;
    own(line);
    return { line, samples: [] };
  }

  // Laser bolts: fighters' in a dogfight, turbolasers between capital ships at war. A bolt with a
  // target resolves on arrival, on the target's shield while it holds and on its hull after.
  const BOLTS = 96;
  const boltGeometry = new THREE.BufferGeometry();
  boltGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(BOLTS * 6), 3));
  boltGeometry.setAttribute('aAlpha', new THREE.BufferAttribute(new Float32Array(BOLTS * 2), 1));
  boltGeometry.setAttribute('aColor', new THREE.BufferAttribute(new Float32Array(BOLTS * 6), 3));
  const boltLines = new THREE.LineSegments(boltGeometry, new THREE.ShaderMaterial({
    vertexShader: BOLT_VERTEX,
    fragmentShader: BOLT_FRAGMENT,
    uniforms: { ...planetUniforms },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  boltLines.frustumCulled = false;
  own(boltLines);
  const bolts = Array.from({ length: BOLTS }, () => ({ age: Infinity, life: 0.5, speed: 48, length: 0.5, position: new THREE.Vector3(), direction: new THREE.Vector3(), color: new THREE.Color(), target: null, aimed: new THREE.Vector3() }));
  // aimed: for a turbolaser, the spot on its target's hull it was fired at, in the hull's own
  // coordinates, so the hit lands there however far the ship has moved.
  let nextBolt = 0;
  function bolt(from, direction, { speed, length, life, color, target = null, aimed = null }) {
    const shot = bolts[nextBolt];
    nextBolt = (nextBolt + 1) % BOLTS;
    shot.age = 0;
    shot.position.copy(from);
    shot.direction.copy(direction);
    shot.speed = speed;
    shot.length = length;
    shot.life = life;
    shot.color.copy(color);
    shot.target = target;
    if (aimed) shot.aimed.copy(aimed);
    return shot;
  }

  // Explosions: a pool of particles written round-robin, and a few shockwave rings.
  const PARTICLES = 2400;
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(PARTICLES * 3), 3));
  particleGeometry.setAttribute('aVelocity', new THREE.BufferAttribute(new Float32Array(PARTICLES * 3), 3));
  particleGeometry.setAttribute('aLife', new THREE.BufferAttribute(new Float32Array(PARTICLES * 4).fill(-1000), 4));
  const particleUniforms = { uNow: { value: 0 }, uScale: { value: 1 }, uMaxSize: { value: 64 }, ...planetUniforms };
  const particles = new THREE.Points(particleGeometry, new THREE.ShaderMaterial({
    vertexShader: PARTICLE_VERTEX,
    fragmentShader: PARTICLE_FRAGMENT,
    uniforms: particleUniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  particles.frustumCulled = false;
  own(particles);
  let nextParticle = 0;
  const direction = new THREE.Vector3();
  // count particles of a kind from origin, their speed, size and life drawn from the given ranges,
  // spreading about a direction if one is given, in every direction if not.
  function emit(origin, count, kind, [speedLow, speedHigh], [sizeLow, sizeHigh], [lifeLow, lifeHigh], toward = null, spread = 1) {
    const start = particleGeometry.getAttribute('position');
    const velocity = particleGeometry.getAttribute('aVelocity');
    const life = particleGeometry.getAttribute('aLife');
    for (let i = 0; i < count; i++) {
      const index = nextParticle;
      nextParticle = (nextParticle + 1) % PARTICLES;
      direction.set(random() * 2 - 1, random() * 2 - 1, random() * 2 - 1);
      if (direction.lengthSq() < 1e-4) direction.set(0, 1, 0);
      direction.normalize();
      if (toward) direction.multiplyScalar(spread).add(toward).normalize();
      direction.multiplyScalar(speedLow + (speedHigh - speedLow) * Math.pow(random(), 0.6));
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
    own(mesh);
    return { mesh, uniforms, age: Infinity, reach: 1, life: 1.4 };
  });
  let nextShock = 0;
  const flatten = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
  function shockwave(origin, quaternion, reach, life = 1.4) {
    const shock = shocks[nextShock];
    nextShock = (nextShock + 1) % shocks.length;
    shock.age = 0;
    shock.reach = reach;
    shock.life = life;
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

  // Contact brackets, one per ship tracked: four corners and a label, like a target on a scope.
  function makeContact() {
    const element = document.createElement('div');
    element.className = 'r3-contact';
    element.setAttribute('aria-hidden', 'true');
    const label = document.createElement('span');
    label.className = 'r3-contact__label';
    element.append(label);
    overlay.append(element);
    ownedElements.push(element);
    return { element, label };
  }
  // Fits a contact to points of an object, as the camera sees them.
  function frame(contact, object, points, age) {
    object.updateMatrixWorld(true);
    camera.updateMatrixWorld();
    let left = Infinity;
    let top = Infinity;
    let right = -Infinity;
    let bottom = -Infinity;
    for (const corner of points) {
      screenOf(localPoint.copy(corner).applyMatrix4(object.matrixWorld), screen);
      left = Math.min(left, screen.x);
      right = Math.max(right, screen.x);
      top = Math.min(top, screen.y);
      bottom = Math.max(bottom, screen.y);
    }
    const lock = Math.min(1, age / 0.6);
    const pad = 8 + 70 * Math.pow(1 - lock, 2);
    contact.element.style.transform = `translate(${(left - pad).toFixed(1)}px, ${(top - pad).toFixed(1)}px)`;
    contact.element.style.width = `${(right - left + pad * 2).toFixed(1)}px`;
    contact.element.style.height = `${(bottom - top + pad * 2).toFixed(1)}px`;
    contact.element.classList.add('is-locked');
    return { left, top, right, bottom };
  }

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
  // World units per css pixel at a depth.
  const perPixelAt = (z) => (2 * (10 - z) * tanHalf) / view.height;

  // Capital ships' visits: arrive, cruise, charge, leave, then wait. At war two are in the sky at
  // once, one from each side, crossing in opposite directions and trading fire as they pass; on a
  // phone, and on patrol, one at a time.
  function makeVisit(slot) {
    return {
      slot, state: 'waiting', until: reduceMotion ? 0 : 2.5 + slot * 7, age: 0, ship: null,
      start: new THREE.Vector3(), velocity: new THREE.Vector3(), heading: new THREE.Vector3(), up: new THREE.Vector3(), position: new THREE.Vector3(),
      length: 1, cruise: 30, contact: makeContact(), rect: null, blasts: 0, shield: 1, hull: 0, nextVolley: 0, fleeing: false,
    };
  }
  const visits = [makeVisit(0)];
  if (scenario.war) visits.push(makeVisit(1));
  let visitCount = 0;
  const atWar = () => visits.length > 1 && !view.narrow;

  function planVisit(visit) {
    const { width, height, free, narrow } = view;
    const war = atWar();
    // ?ship=organicCruiser asks for a hull by name, where a side flies one.
    const asked = capitals.filter((entry) => entry.kind === new URLSearchParams(location.search).get('ship'));
    const side = war ? sides[visit.slot] : (asked.length ? asked[0].side : sides[visitCount % sides.length]);
    visitCount += 1;
    const busy = visits.filter((other) => other !== visit && other.state !== 'waiting').map((other) => other.ship);
    const named = scenario.capitals ? capitals.filter((entry) => entry.side === side && entry.kind === scenario.capitals[sides.indexOf(side)]) : [];
    const pool = named.length ? named : (asked.length && !war ? asked : capitals.filter((entry) => entry.side === side && !busy.includes(entry)));
    const ship = pool[Math.floor(random() * pool.length)];
    visit.ship = ship;
    // As long as a third of the free sky, within reason; the hull's centre keeps half its length
    // clear of the text and the hero's edges. On a phone the text fills the hero, so the ship keeps
    // low and small, over the planet's limb beside the status strip. At war each is a little
    // smaller, the one crossing high and far off, the other low and near.
    const start = narrow ? width * 0.46 : Math.max(free + 30, width * 0.45);
    const lengthPx = (narrow ? Math.min(width * 0.26, 100) : THREE.MathUtils.clamp((width - start) * 0.42, 180, 340)) * (war ? 0.72 : 1);
    const leftEdge = start + lengthPx * 0.55;
    const rightEdge = width - 24 - lengthPx * 0.7;
    const span = Math.max(rightEdge - leftEdge, 40);
    const direction = war ? (visit.slot === 0 ? -1 : 1) : (random() < 0.6 ? -1 : 1);
    const x = direction < 0 ? leftEdge + span * (0.7 + 0.3 * random()) : leftEdge + span * (0.3 * random());
    let y;
    let depth;
    if (narrow) {
      y = height * (0.74 + 0.05 * random());
      depth = -7 - random() * 4;
    } else if (war) {
      y = height * (visit.slot === 0 ? 0.16 + 0.08 * random() : 0.4 + 0.08 * random());
      depth = visit.slot === 0 ? -11 - random() * 2 : -6 - random() * 2;
    } else {
      y = THREE.MathUtils.clamp(height * (0.22 + 0.16 * random()), lengthPx * 0.32 + 12, height * 0.55);
      depth = -7 - random() * 4;
    }
    worldAt(x, y, depth, visit.start);
    visit.length = lengthPx * perPixelAt(depth);
    visit.cruise = reduceMotion ? 30 : 26 + random() * 12;
    const travel = span * (war ? 0.5 + 0.15 * random() : 0.55 + 0.15 * random()) * perPixelAt(depth);
    visit.velocity.set(direction * travel, (random() - 0.5) * travel * 0.08, 0).divideScalar(visit.cruise);
    // The hull points where it goes, turned a little toward the viewer so the deck shows.
    visit.heading.copy(visit.velocity).normalize();
    visit.heading.z += 0.25;
    visit.heading.normalize();
    visit.up.set((random() - 0.5) * 0.3, 1, 0.3).normalize();
    visit.shield = 0.8 + 0.5 * random();
    visit.hull = 0;
    visit.blasts = 0;
    visit.fleeing = false;
    visit.nextVolley = clock + 2 + random() * 2;
    const label = scenario.labels ? scenario.labels[sides.indexOf(side)] : ship.labels[Math.floor(random() * ship.labels.length)];
    visit.contact.label.textContent = `${side.name} ▸ ${label}`;
    visit.contact.element.classList.remove('is-lost');
  }

  // The fighters' passes: a patrol of one side, at war a dogfight, one side chased by the other, and
  // while capital ships are in the sky, a pair launching from a hangar.
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
    const cruising = visits.filter((visit) => visit.state === 'cruising' && visit.ship);
    // ?pass=dive, climb, cross or launch picks the path, for screenshots.
    const kinds = ['dive', 'climb', 'cross', 'launch'];
    const asked = kinds.indexOf(new URLSearchParams(location.search).get('pass'));
    let kind = asked >= 0 ? asked : Math.floor(random() * 3);
    if (asked < 0 && cruising.length && random() < 0.45) kind = 3;
    if (kind === 3 && !cruising.length) kind = 2;
    let leaders = scenario.war && random() < 0.7 ? sides[Math.floor(random() * sides.length)] : sides[0];
    if (kind === 3) {
      // A launch: out of the hangar under a capital ship's hull, dropping clear and turning out
      // across the sky toward the viewer, or at war toward the enemy.
      const launcher = cruising[Math.floor(random() * cruising.length)];
      leaders = launcher.ship.side;
      const enemy = cruising.find((visit) => visit !== launcher);
      const p0 = launcher.position.clone().addScaledVector(launcher.up, -0.06 * launcher.length);
      const p1 = p0.clone().addScaledVector(launcher.up, -0.35 * launcher.length).addScaledVector(launcher.heading, 0.3 * launcher.length);
      const p2 = enemy ? enemy.position.clone().add(new THREE.Vector3(0, 0.25 * enemy.length, 0.5 * enemy.length)) : worldAt(mid, height * 0.35, -3);
      const p3 = worldAt(launcher.velocity.x < 0 ? left - 40 : right + 120, height * (0.1 + 0.3 * random()), 3);
      pass.points = [p0, p1, p2, p3];
      pass.duration = 4.6 + random() * 1.2;
    } else {
      let screenPoints;
      if (kind === 0) {
        // A dive: from beside the viewer down toward the planet, slipping behind its limb.
        screenPoints = [[right + 60, height * 1.15, 5], [right - (right - left) * 0.1, height * 0.75, 1.5], [mid, height * 0.5, -8], [left + (right - left) * 0.2, height * 0.72, -28]];
      } else if (kind === 1) {
        // A climb: from behind the planet, over its limb while still far off, past the star and
        // out over the viewer's shoulder.
        screenPoints = [[mid, height * 0.85, -42], [mid + (right - mid) * 0.2, height * 0.35, -32], [right - 40, height * 0.25, -4], [right + 120, -height * 0.3, 5]];
      } else {
        // A crossing, high and fast, away into the distance.
        screenPoints = [[right + 80, height * 0.3, -1], [right - (right - left) * 0.25, height * 0.12, -3], [left + (right - left) * 0.35, height * 0.35, -9], [left, height * 0.18, -24]];
      }
      pass.points = screenPoints.map(([x, y, z]) => worldAt(x, y, z));
      pass.duration = 3.0 + random() * 1.2;
    }
    pass.age = 0;
    pass.active = true;
    const dogfight = scenario.war && random() < 0.7;
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

  const flash = { x: 0, y: 0, strength: 0, size: 1, shake: 0 };
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
    flash.strength = Math.max(flash.strength * 0.5, strength);
    flash.size = size;
  }

  // A point somewhere on a capital ship's hull, in the world: between its centre and one of its
  // extremes.
  function pointOnHull(visit, out, reach = 0.7) {
    const corner = visit.ship.design.extremes[Math.floor(random() * visit.ship.design.extremes.length)];
    return out.copy(corner).multiplyScalar(0.25 + reach * random()).applyMatrix4(visit.ship.group.matrixWorld);
  }

  // Turbolasers: a volley of three to five bolts from batteries along the hull at points on the
  // enemy's, some wide.
  function volley(from, to) {
    const count = 3 + Math.floor(random() * 3);
    const laser = linear(from.ship.side.laser).multiplyScalar(1.4);
    from.ship.group.updateMatrixWorld(true);
    to.ship.group.updateMatrixWorld(true);
    for (let i = 0; i < count; i++) {
      const delay = i * 0.09;
      const start = pointOnHull(from, new THREE.Vector3(), 0.6);
      // A spot on the target's hull, and where it will be when the bolt gets there: the target
      // cruises in a straight line, so leading it by the flight time lands the bolt on that spot.
      const corner = to.ship.design.extremes[Math.floor(random() * to.ship.design.extremes.length)];
      const spot = corner.clone().multiplyScalar(0.25 + 0.5 * random());
      const end = spot.clone().applyMatrix4(to.ship.group.matrixWorld);
      const speed = Math.max(from.length, to.length) * (1.5 + 0.6 * random());
      let flight = start.distanceTo(end) / speed;
      for (let round = 0; round < 2; round++) {
        const ahead = spot.clone().applyMatrix4(to.ship.group.matrixWorld).addScaledVector(to.velocity, flight + delay);
        flight = start.distanceTo(ahead) / speed;
        end.copy(ahead);
      }
      const wide = random() < 0.22;
      if (wide) end.add(new THREE.Vector3(random() - 0.5, random() - 0.5, random() - 0.5).multiplyScalar(to.length * 1.2));
      aim.subVectors(end, start);
      const distance = aim.length();
      if (distance < 1e-3) continue;
      aim.divideScalar(distance);
      const shot = bolt(start, aim, { speed, length: from.length * 0.14, life: wide ? distance / speed + 1.5 : distance / speed, color: laser, target: wide ? null : to, aimed: spot });
      shot.age = -delay;
    }
  }

  // A turbolaser bolt arrives: its target's shield flares where it lands while the shield holds,
  // and once it has failed the hull takes it, until enough have hit that the ship breaks up or,
  // sometimes, runs.
  function resolveHit(target, spot) {
    if (target.state !== 'cruising' || !target.ship || !target.ship.group.visible) return;
    const shield = target.ship.shield;
    target.ship.group.updateMatrixWorld(true);
    const point = spot.clone().applyMatrix4(target.ship.group.matrixWorld);
    if (target.shield > 0) {
      target.shield -= 0.014 + 0.012 * random();
      const hit = shield.hits[shield.next];
      shield.next = (shield.next + 1) % shield.hits.length;
      hit.age = 0;
      // Where on the shield: the shell just over the spot struck.
      shield.onShell(spot, hit.direction);
      emit(point, 5, 1, [target.length * 0.05, target.length * 0.18], [target.length * 0.004, target.length * 0.008], [0.3, 0.6]);
      return;
    }
    target.hull += 1;
    blast(point, target.length * 0.35, 0.35);
    flashAt(point, 0.25, 0.35);
    if (reduceMotion) return;
    if (target.hull === 3 && random() < 0.4) {
      // It runs: engines to full and away into hyperspace.
      target.fleeing = true;
      target.age = Math.max(target.age, target.cruise - 1.6);
    } else if (target.hull >= 8) {
      explode(target);
    }
  }

  function explode(visit) {
    visit.start.addScaledVector(visit.velocity, visit.age);
    visit.state = 'exploding';
    visit.age = 0;
    visit.blasts = 0;
    visit.contact.label.textContent = `Contact lost ▸ ${visit.contact.label.textContent.split(' ▸ ').pop()}`;
    visit.contact.element.classList.add('is-lost');
  }

  const listeners = { destroyed: [] };
  function updateCapital(visit, dt, index) {
    if (index > 0 && !atWar()) {
      if (visit.ship) visit.ship.group.visible = visit.state !== 'waiting' && visit.ship.group.visible;
      if (visit.state === 'waiting') {
        visit.contact.element.classList.remove('is-locked');
        return;
      }
    }
    if (reduceMotion && visit.state === 'waiting' && (index === 0 || atWar())) {
      planVisit(visit);
      visit.state = 'cruising';
      visit.age = visit.cruise * 0.45;
    }
    visit.age += dt;
    if (visit.state === 'waiting') {
      if (visit.ship && !visits.some((other) => other !== visit && other.ship === visit.ship && other.state !== 'waiting')) visit.ship.group.visible = false;
      visit.contact.element.classList.remove('is-locked');
      if (clock >= visit.until) {
        planVisit(visit);
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
    const position = visit.position.copy(visit.start);
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
      while (visit.blasts < 7 && visit.age >= visit.blasts * 0.17) {
        pointOnHull(visit, localPoint, 0.6);
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
        visit.contact.element.classList.remove('is-locked', 'is-lost');
        visit.state = 'waiting';
        visit.until = clock + 3.5 + random() * 3;
        for (const listener of listeners.destroyed) listener({ position: position.clone(), length: visit.length, quaternion: ship.group.quaternion.clone(), velocity: visit.velocity.clone(), side: ship.side, material: ship.material });
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
    ship.shield.mesh.visible = visit.state === 'cruising' || visit.state === 'exploding';
    ship.shield.uniforms.uFailing.value = visit.shield > 0 ? 0 : 1;

    // The brackets: the hull's bounds as the camera sees them, locked on while it cruises and
    // closing in over half a second after it arrives. They are kept, too, to aim at.
    visit.rect = null;
    if (visit.state === 'cruising' || visit.state === 'exploding') {
      visit.rect = frame(visit.contact, ship.group, ship.design.extremes, visit.state === 'cruising' ? visit.age : 1);
    } else {
      visit.contact.element.classList.remove('is-locked');
    }
  }

  function updateBattle() {
    if (!atWar() || reduceMotion) return;
    const [a, b] = visits;
    if (a.state !== 'cruising' || b.state !== 'cruising') return;
    for (const [from, to] of [[a, b], [b, a]]) {
      if (from.fleeing || clock < from.nextVolley) continue;
      volley(from, to);
      from.nextVolley = clock + 1.3 + random() * 1.1;
    }
  }

  function updateShields(dt) {
    for (const ship of capitals) {
      ship.shield.hits.forEach((hit, i) => {
        hit.age += dt / 0.9;
        const value = ship.shield.uniforms.uHits.value[i];
        value.set(hit.direction.x, hit.direction.y, hit.direction.z, hit.age <= 1 ? hit.age : -1);
      });
    }
  }

  function trailSample(fighter, index, point) {
    const trail = fighter.trails[index];
    trail.samples.unshift({ point: point.clone(), at: clock });
    while (trail.samples.length > 95 || (trail.samples.length && clock - trail.samples[trail.samples.length - 1].at > 0.6)) trail.samples.pop();
  }

  function drawTrail(trail, fade) {
    const positions = trail.line.geometry.getAttribute('position');
    const alphas = trail.line.geometry.getAttribute('aAlpha');
    trail.samples.forEach((sample, i) => {
      positions.setXYZ(i, sample.point.x, sample.point.y, sample.point.z);
      alphas.setX(i, Math.max(0, 1 - (clock - sample.at) / 0.6) * fade);
    });
    positions.needsUpdate = true;
    alphas.needsUpdate = true;
    trail.line.geometry.setDrawRange(0, trail.samples.length);
  }

  function drawTrails() {
    for (const fighter of allFighters) {
      for (const trail of fighter.trails) drawTrail(trail, fighter.material.uniforms.uFade.value);
    }
  }

  // A pursuer fires from its next cannon at where its quarry will be, a little off.
  function fire(fighter, quarry, quarryVelocity) {
    fighter.group.updateMatrixWorld(true);
    const cannons = fighter.design.cannons;
    const start = new THREE.Vector3(...cannons[fighter.cannon % cannons.length]).applyMatrix4(fighter.group.matrixWorld);
    fighter.cannon += 1;
    aim.copy(quarry.group.position).addScaledVector(quarryVelocity, 0.12).sub(start);
    if (aim.lengthSq() < 1e-6) return;
    aim.normalize();
    aim.x += (random() - 0.5) * 0.05;
    aim.y += (random() - 0.5) * 0.05;
    bolt(start, aim.normalize(), { speed: 48, length: 0.5, life: 0.5, color: linear(fighter.side.laser) });
  }

  function updateBolts(dt) {
    const positions = boltGeometry.getAttribute('position');
    const alphas = boltGeometry.getAttribute('aAlpha');
    const colors = boltGeometry.getAttribute('aColor');
    bolts.forEach((shot, i) => {
      const before = shot.age;
      shot.age += dt;
      const alive = shot.age >= 0 && shot.age < shot.life;
      if (alive) shot.position.addScaledVector(shot.direction, shot.speed * Math.min(dt, shot.age));
      if (shot.target && before < shot.life && shot.age >= shot.life) {
        resolveHit(shot.target, shot.aimed);
        shot.target = null;
      }
      const tail = tmp.copy(shot.position).addScaledVector(shot.direction, -shot.length);
      positions.setXYZ(i * 2, shot.position.x, shot.position.y, shot.position.z);
      positions.setXYZ(i * 2 + 1, tail.x, tail.y, tail.z);
      const alpha = alive ? Math.min(1, 1.6 * (1 - shot.age / shot.life)) : 0;
      alphas.setX(i * 2, alpha);
      alphas.setX(i * 2 + 1, alpha * 0.35);
      colors.setXYZ(i * 2, shot.color.r, shot.color.g, shot.color.b);
      colors.setXYZ(i * 2 + 1, shot.color.r, shot.color.g, shot.color.b);
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
  // smaller and nearer, then a capital ship inside its brackets.
  function targetAt(x, y) {
    for (const flight of pass.active ? pass.flights : []) {
      for (const fighter of flight.fighters) {
        if (fighter.dead || !fighter.group.visible) continue;
        screenOf(fighter.group.position, screen);
        const radius = (0.35 / (2 * Math.max(10 - fighter.group.position.z, 0.5) * tanHalf)) * view.height + 12;
        if ((screen.x - x) ** 2 + (screen.y - y) ** 2 < radius * radius) return { fighter };
      }
    }
    for (const visit of visits) {
      const rect = visit.rect;
      if (!rect || visit.state !== 'cruising') continue;
      const insetX = (rect.right - rect.left) * 0.1;
      const insetY = (rect.bottom - rect.top) * 0.1;
      if (x > rect.left + insetX && x < rect.right - insetX && y > rect.top + insetY && y < rect.bottom - insetY) return { capital: visit };
    }
    return null;
  }

  // What the rare events in r3-events.js build with: the same materials, fire, flashes and brackets.
  const kit = {
    scene, camera, view, time, sunDir, sunColor, air, reduceMotion, random, planetUniforms, linear,
    own, shipMaterial, makeContact, frame, makeTrail, drawTrail, emit, blast, shockwave, flashAt, bolt, worldAt, screenOf, perPixelAt,
    shake: (amount) => { shake = Math.max(shake, amount); },
    now: () => clock,
    onDestroyed: (listener) => listeners.destroyed.push(listener),
    scenario, sides, visits,
  };

  return {
    kit,
    // Where the sky drew the planet this frame: its centre and radius in device pixels, y up.
    planet(x, y, radius) {
      planetUniforms.uPlanetDisc.value.set(x, y, radius);
    },
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
        target.capital.ship.group.visible = false;
        target.capital.state = 'waiting';
        target.capital.until = clock + 5;
        target.capital.contact.element.classList.remove('is-locked');
      } else {
        explode(target.capital);
      }
      return true;
    },
    // The star calls the fleet: capital ships drop out of hyperspace now, or if they are already
    // here they jump away, and the fighters make a pass if they are not making one.
    summon() {
      if (reduceMotion) return;
      for (const visit of visits) {
        if (visit.state === 'waiting') visit.until = clock + visit.slot * 1.5;
        else if (visit.state === 'cruising') visit.age = Math.max(visit.age, visit.cruise);
      }
      if (!pass.active) pass.next = clock + 0.4;
    },
    layout({ width, height, free, narrow, ratio }) {
      Object.assign(view, { width, height, free, narrow, ratio });
      if (reduceMotion) for (const visit of visits) visit.state = 'waiting';
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
      visits.forEach((visit, index) => updateCapital(visit, dt, index));
      updateBattle();
      updateShields(dt);
      updateFighters(dt);
      updateBolts(dt);
      drawTrails();
      return flash;
    },
    // Takes everything the fleet made out of the scene and the page, freeing it on the GPU.
    dispose() {
      for (const object of owned) {
        scene.remove(object);
        object.traverse((part) => {
          if (part.geometry) part.geometry.dispose();
          if (part.material) part.material.dispose();
        });
      }
      for (const element of ownedElements) element.remove();
      hullMap.dispose();
      detailMap.dispose();
    },
  };
}
