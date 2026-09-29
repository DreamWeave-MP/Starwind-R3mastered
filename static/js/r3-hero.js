// The Starwind R3mastered hero: the view from orbit that sass/brand.sass draws as a still, rendered
// live with three.js behind the project page's header.
//
// A full-screen shader draws the sky and the planet. The sky is two nebulae, cyan high on the right
// and violet low on the left, domain-warped noise redrawn at half resolution every few frames, and
// three layers of stars that drift against the pointer. The planet is a sphere solved per pixel:
// oceans, dusty continents and cloud bands from noise on its turning surface, a crescent of day
// where the sun rises behind it, a glint on the water along the lit limb, and an atmosphere that
// scatters the sunrise along the arc, with the site's cyan line on its edge. The sun rises and
// sinks on the limb over about a minute and a half, and flares as Starwind's four-pointed star.
//
// In front hangs the mark itself, that star as a faceted chrome jewel. Its facets are slightly
// domed and mirror an environment built from the same scene (the nebulae, the planet's limb, the
// sun), so each one flashes as the jewel turns. It leans toward the pointer, a lamp follows the
// pointer across its facets, and every so often it spins a quarter turn, which a four-pointed star
// survives unchanged, while a band of light sweeps across it. A click on it spins it at once.
//
// The scene renders to a half-float target; a bright pass and blurs make the bloom, and the
// composite adds the sun's flare, tone-maps (ACES), darkens the side the text is on, vignettes and
// dithers. Any NaN or infinity is zeroed before the bloom can spread it. Colours come from the
// site's CSS tokens, so sass/brand.sass stays their owner. The canvas waits until the hero is on
// screen, stops when the tab is hidden or the hero scrolls away, lowers its resolution when frames
// run slow, and under prefers-reduced-motion draws still frames. Without WebGL 2, or after the
// context is lost, the still in sass/brand.sass stays.
//
// The template loads this module through [extra.hero] in config.toml and gives the hero an empty
// [data-dw-hero-art] behind the text, which the canvas fills.

import * as THREE from './vendor/three.module.min.js';
import { pickWorld } from './r3-worlds.js';

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function token(name, fallback) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const color = new THREE.Color(fallback);
  if (raw) {
    try { color.set(raw); } catch { /* an unparsable token keeps the fallback */ }
  }
  return color.convertSRGBToLinear();
}

// The planet's turn, radians a second.
const PLANET_SPIN = 0.03;

const FULLSCREEN_VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Any NaN or infinity a driver produces is zeroed and bright values capped before the bloom, which
// would otherwise smear a single bad pixel into a black square.
const SCRUB = /* glsl */ `
  vec3 scrub(vec3 c) {
    if (any(isnan(c)) || any(isinf(c)) || c.r != c.r || c.g != c.g || c.b != c.b) return vec3(0.0);
    return clamp(c, 0.0, 64.0);
  }
`;

const NOISE = /* glsl */ `
  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float hash31(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float noise2(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
               mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float noise3(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash31(i), hash31(i + vec3(1.0, 0.0, 0.0)), f.x),
                   mix(hash31(i + vec3(0.0, 1.0, 0.0)), hash31(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
               mix(mix(hash31(i + vec3(0.0, 0.0, 1.0)), hash31(i + vec3(1.0, 0.0, 1.0)), f.x),
                   mix(hash31(i + vec3(0.0, 1.0, 1.0)), hash31(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
  }
  float fbm2(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 5; i++) {
      v += a * noise2(p);
      p = m * p;
      a *= 0.5;
    }
    return v;
  }
  float fbm3(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise3(p);
      p = p * 2.03 + vec3(1.7, 9.2, 3.1);
      a *= 0.5;
    }
    return v;
  }
`;

// The nebulae, at half resolution: domain-warped noise, cyan high on the right, violet low on the
// left, with ridged filaments through the cyan.
const NEBULA_FRAGMENT = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uAspect;
  uniform vec2 uDrift;
  uniform vec2 uScroll;      // the orbit's drift, css pixels, far layer
  uniform float uHeight;     // the hero's height, css pixels
  uniform vec3 uTop;
  uniform vec3 uBottom;
  uniform vec3 uCyan;
  uniform vec3 uViolet;
  ${NOISE}
  void main() {
    vec2 p = vec2(vUv.x * uAspect, vUv.y) + uDrift * 0.35 + uScroll * (0.35 / max(uHeight, 1.0));
    vec3 col = mix(uBottom, uTop, smoothstep(0.0, 1.0, vUv.y));
    vec2 warp = vec2(fbm2(p * 1.4 + vec2(0.0, uTime * 0.011)), fbm2(p * 1.4 + vec2(5.2, 1.3) - uTime * 0.009));
    float cloud = fbm2(p * 1.9 + warp * 1.7 + uTime * 0.006);
    float ridge = 1.0 - abs(2.0 * fbm2(p * 3.3 + warp * 2.2 - uTime * 0.004) - 1.0);
    ridge = clamp(ridge, 0.0, 1.0);

    vec2 dc = (p - vec2(uAspect * 0.86, 1.12)) * vec2(0.7, 1.15);
    float cyanMask = exp(-dot(dc, dc) * 3.2);
    vec2 dv = (p - vec2(uAspect * 0.02, -0.2)) * vec2(0.9, 1.25);
    float violetMask = exp(-dot(dv, dv) * 3.0);

    col += uCyan * cyanMask * (0.025 + 0.075 * smoothstep(0.4, 0.85, cloud));
    col += uCyan * cyanMask * pow(ridge, 8.0) * 0.05;
    col += uViolet * violetMask * (0.03 + 0.07 * smoothstep(0.45, 0.9, cloud));
    gl_FragColor = vec4(col, 1.0);
  }
`;

// The sky and the planet, at full resolution. Positions are in device pixels with y up.
const SKY_FRAGMENT = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D tNebula;
  uniform float uTime;
  uniform float uRatio;
  uniform vec2 uDrift;
  uniform vec2 uScroll;      // the orbit's drift, css pixels, far layer
  uniform vec3 uPlanet;      // centre x, y and radius, in device pixels
  uniform vec3 uSunDir;      // towards the sun, view space: x right, y up, z to the viewer
  uniform vec3 uSunColor;
  uniform mat3 uBody;       // view space to the planet's turning surface
  uniform mat3 uCloudBody;  // the same for the cloud deck, which turns a little faster
  uniform vec3 uAccent;
  uniform vec3 uNight;
  uniform vec3 uAir;
  // The world, from r3-worlds.js.
  uniform vec3 uLowland;
  uniform vec3 uLand;
  uniform vec3 uHighland;
  uniform vec3 uCloud;
  uniform vec3 uCity;
  uniform vec4 uWorldA;     // sea level, cloud threshold, settlement, feature scale
  uniform vec4 uWorldB;     // ice, lava, bands, floating cities
  ${NOISE}

  // City lights: one in some cells of a lattice through the surface, clustered where the land is
  // populous. A light counts when it lies near the surface, and is measured along it, so every
  // one that counts is a sharp point rather than a blur sliced at some depth.
  float cityLights(vec3 t, float fill) {
    vec3 g = t * 55.0;
    vec3 id = floor(g);
    vec3 f = fract(g) - 0.5;
    float h = hash31(id + 13.1);
    if (h > fill) return 0.0;
    vec3 offset = (vec3(hash31(id + 1.7), hash31(id + 4.3), hash31(id + 8.9)) - 0.5) * 0.35;
    vec3 d = f - offset;
    float depth = dot(d, t);
    if (abs(depth) > 0.3) return 0.0;
    vec3 along = d - t * depth;
    return exp(-dot(along, along) / 0.016) * (0.45 + 0.55 * hash31(id + 2.2));
  }

  // Pinpoints in hashed cells, one layer per call; a few bright ones carry the four-pointed spikes
  // of the mark. Offsets stay in the middle of a cell so a spike never crosses its edge.
  vec3 starLayer(vec2 css, float cell, float seed, float spikes) {
    vec2 g = css / cell + seed * 17.0;
    vec2 id = floor(g);
    vec2 f = fract(g) - 0.5;
    float h = hash21(id + seed);
    if (h > 0.34) return vec3(0.0);
    vec2 offset = (vec2(hash21(id + 3.1), hash21(id + 7.7)) - 0.5) * 0.45;
    vec2 d = (f - offset) * cell;
    float size = 0.45 + 0.9 * hash21(id + 11.3);
    float twinkle = 0.6 + 0.4 * sin(uTime * (0.6 + 1.9 * h) + h * 60.0);
    float core = exp(-dot(d, d) / (size * size));
    vec3 tint = mix(vec3(0.75, 0.92, 1.0), vec3(1.0, 0.93, 0.82), hash21(id + 5.5));
    float bright = step(0.3, h) * spikes;
    float spike = bright * (exp(-abs(d.y) * 1.6) * exp(-abs(d.x) * 0.16) + exp(-abs(d.x) * 1.6) * exp(-abs(d.y) * 0.16));
    return tint * (core * (0.9 + 2.5 * bright) + spike * 0.55) * twinkle;
  }

  void main() {
    vec2 px = gl_FragCoord.xy;
    vec2 css = px / uRatio;
    vec3 col = texture2D(tNebula, vUv).rgb;

    // The planet, drifting a few pixels against the pointer.
    vec2 centre = uPlanet.xy - uDrift * 26.0 * uRatio;
    float radius = uPlanet.z;
    vec2 q = (px - centre) / radius;
    float r = length(q);
    vec3 sun = uSunDir;
    vec2 sunFlat = length(sun.xy) > 1e-4 ? normalize(sun.xy) : vec2(0.0, 1.0);
    float airHeight = 0.05;

    float onPlanet = 1.0 - smoothstep(1.0 - 1.5 / radius, 1.0 + 0.5 / radius, r);

    // Stars, hidden behind the planet. The camera is in orbit, so they stream past, the nearer
    // layers faster than the far ones.
    vec3 stars = starLayer(css + uDrift * 8.0 + uScroll, 61.0, 1.0, 0.0)
               + starLayer(css + uDrift * 16.0 + uScroll * 1.9, 97.0, 2.0, 0.0) * 0.8
               + starLayer(css + uDrift * 30.0 + uScroll * 3.4, 173.0, 3.0, 1.0);
    col += stars * (1.0 - onPlanet);

    if (r < 1.0 + airHeight * 5.0) {
      vec2 limbDir = r > 1e-4 ? q / r : vec2(0.0, 1.0);
      // How lit the air over this point of the limb is: past the terminator a little, since the
      // atmosphere stands above the ground.
      float airLit = smoothstep(-0.45, 0.35, dot(vec3(limbDir, 0.0), sun));
      // Forward scattering towards a sun behind the planet: brightest along the arc nearest it.
      float toward = max(dot(limbDir, sunFlat), 0.0);
      float mie = pow(toward, 48.0) * max(-sun.z, 0.0) * 2.2 + pow(toward, 6.0) * 0.18;

      if (r < 1.0) {
        float z = sqrt(max(0.0, 1.0 - r * r));
        vec3 n = vec3(q, z);
        vec3 t = uBody * n;
        vec3 tc = uCloudBody * n;
        float scale = uWorldA.w;
        float settled = uWorldA.z;
        float elevation = fbm3(t * 2.1 * scale + 4.0);
        float land = smoothstep(uWorldA.x, uWorldA.x + 0.05, elevation);
        float high = smoothstep(uWorldA.x + 0.08, uWorldA.x + 0.26, elevation) * land;
        vec3 ground = mix(uLand, uHighland, high) * (0.8 + 0.4 * fbm3(t * 9.0 * scale));
        vec3 albedo = mix(uLowland * (0.85 + 0.3 * fbm3(t * 4.0 + 2.0)), ground, land);
        float cloud = fbm3(tc * vec3(3.2, 7.5, 3.2) + vec3(uTime * 0.006, 0.0, 0.0));
        cloud = smoothstep(uWorldA.y, uWorldA.y + 0.22, cloud);

        // A city from pole to pole: its blocks show by day as a grid.
        if (settled > 0.9) {
          vec3 blocks = abs(fract(t * 90.0) - 0.5);
          float street = 1.0 - smoothstep(0.0, 0.08, min(min(blocks.x, blocks.y), blocks.z));
          albedo *= 1.0 - 0.3 * street * land;
        }
        // Polar caps, reaching toward the equator with the world's cold.
        float ice = smoothstep(1.02 - uWorldB.x, 1.1 - uWorldB.x, abs(t.y) + 0.12 * (fbm3(t * 6.0) - 0.5)) * step(0.001, uWorldB.x);
        albedo = mix(albedo, vec3(0.86, 0.93, 1.0), ice);
        land = max(land, ice);
        // A gas giant: belts and zones sheared by turbulence, turning with the faster deck.
        if (uWorldB.z > 0.5) {
          float turbulence = fbm3(tc * vec3(3.0, 9.0, 3.0));
          float belt = 0.5 + 0.5 * sin(t.y * 11.0 + (turbulence - 0.5) * 3.2);
          float fine = 0.5 + 0.5 * sin(t.y * 37.0 + turbulence * 7.0);
          albedo = mix(mix(uLowland, uLand, belt), uHighland, fine * 0.35);
          vec2 storm = vec2(atan(tc.x, tc.z) - 0.6, (t.y + 0.28) * 3.0);
          float eye = exp(-dot(storm, storm) * 9.0);
          albedo = mix(albedo, uCloud, eye * 0.8);
          land = 1.0;
          cloud = 0.0;
        }
        albedo = mix(albedo, uCloud, cloud * 0.85);

        float ndl = dot(n, sun);
        float day = smoothstep(-0.06, 0.3, ndl);
        vec3 lit = albedo * max(ndl, 0.0) * uSunColor * 1.3;

        // The sun's glint on open water, strongest where the lit crescent meets the limb.
        vec3 h = sun + vec3(0.0, 0.0, 1.0);
        float hl = length(h);
        h = hl > 1e-4 ? h / hl : vec3(0.0, 0.0, 1.0);
        float water = (1.0 - land) * (1.0 - cloud) * (1.0 - uWorldB.z);
        float glint = pow(max(dot(n, h), 0.0), 220.0) * 4.0 + pow(max(dot(n, h), 0.0), 24.0) * 0.12;
        lit += uSunColor * glint * water * day;

        // The night side: the planet's own dark teal, with its continents and cloud lit faintly by
        // the cyan nebula above, and the cities of the populous land glittering, so the turning
        // shows on the dark as well as in the crescent. The lights fade where the limb would
        // squeeze them thinner than a pixel.
        vec3 nebulaLight = mix(vec3(0.6, 0.66, 0.78), uAccent, 0.3) * 0.2 * max(dot(n, vec3(0.2, 0.75, 0.63)), 0.0);
        vec3 night = uNight * (0.35 + 0.3 * n.y) + albedo * nebulaLight;
        float populous = settled > 0.9 ? 1.0 : smoothstep(0.62 - 0.3 * settled, 0.72 - 0.3 * settled, fbm3(t * 5.0 + 11.0));
        float habitable = mix(land * (1.0 - ice), 1.0, uWorldB.w) * (1.0 - uWorldB.z);
        float cities = cityLights(t, 0.3 + 0.5 * settled) * habitable * populous * step(0.001, settled);
        cities *= (1.0 - 0.85 * cloud) * smoothstep(0.06, 0.3, z);
        night += uCity * cities * 1.25;
        vec3 surface = mix(night, lit, day);

        // Lava: rifts that glow by day and night alike.
        if (uWorldB.y > 0.0) {
          float rift = 1.0 - abs(2.0 * fbm3(t * 5.5 * scale + 7.0) - 1.0);
          float molten = uWorldB.y * (smoothstep(0.94, 0.995, rift) + 0.12 * smoothstep(0.8, 0.95, rift)) * (1.0 - 0.7 * cloud);
          surface += vec3(1.0, 0.24, 0.03) * molten * (1.5 + 0.5 * sin(uTime * 1.3 + rift * 20.0));
        }

        // Haze thickening towards the limb, lit where the air is.
        float haze = pow(1.0 - z, 5.0);
        surface += uAir * haze * (airLit * 0.18 + mie * 0.5);
        col = mix(col, surface, onPlanet);
      }

      // The air outside the disc, falling off with height, and the site's cyan line on the edge.
      float height = max(r - 1.0, 0.0) / airHeight;
      float air = exp(-height * 2.1) * (1.0 - onPlanet * 0.6);
      col += uAir * air * (airLit * 0.4 + mie * 1.1) * step(1.0 - 2.0 / radius, r);
      float line = exp(-abs(r - 1.0) * radius / (1.1 * uRatio));
      col += uAccent * line * (0.2 + 0.9 * airLit + 0.6 * mie);
    }

    gl_FragColor = vec4(col, 1.0);
  }
`;

// The jewel: flat facets whose normals dome slightly, mirroring an environment built from the
// scene around it.
const JEWEL_VERTEX = /* glsl */ `
  attribute vec3 aDome;
  attribute vec3 aRole;
  varying vec3 vRole;
  varying vec3 vNormal;
  varying vec3 vWorld;
  varying vec3 vLocal;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vLocal = position;
    vRole = aRole;
    vNormal = normalize(mat3(modelMatrix) * aDome);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const JEWEL_FRAGMENT = /* glsl */ `
  precision highp float;
  varying vec3 vNormal;
  varying vec3 vWorld;
  varying vec3 vLocal;
  varying vec3 vRole;
  uniform vec3 uCamera;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec3 uAccent;
  uniform vec3 uViolet;
  uniform vec3 uNight;
  uniform vec3 uAir;
  uniform vec3 uLamp;
  uniform float uPresence;
  uniform float uSweep;
  uniform float uTime;

  vec3 safeNormalize(vec3 v, vec3 fallback) {
    float l = length(v);
    return l > 1e-5 ? v / l : fallback;
  }

  // The environment the chrome mirrors, laid out where the facets look: a cool sky light above,
  // strip lights to the right, the violet nebula to the left, the planet's lit limb and dark bulk
  // below, the sun on the limb, and darkness behind the viewer so facets facing forward stay deep.
  // It turns slowly, so the reflections travel even while the jewel is still.
  vec3 environment(vec3 d) {
    float a = uTime * 0.07;
    d = vec3(cos(a) * d.x - sin(a) * d.z, d.y, sin(a) * d.x + cos(a) * d.z);
    vec3 c = uNight * 0.5;
    c += mix(vec3(0.55, 0.8, 0.95), uAccent, 0.3) * 0.9 * smoothstep(0.2, 0.95, d.y);
    c += mix(uViolet, uAccent, 0.35) * 0.75 * pow(max(-d.x, 0.0), 3.0) * smoothstep(-0.4, 0.3, d.y);
    c += uAccent * 0.9 * pow(max(d.x, 0.0), 4.0) * smoothstep(-0.2, 0.6, d.y);
    float stripA = exp(-abs(d.x - 0.7) * 30.0) * smoothstep(-0.2, 0.4, d.y);
    float stripB = exp(-abs(d.y - 0.55) * 34.0) * smoothstep(0.0, 0.6, -d.x);
    float stripC = exp(-abs(d.x + d.y - 0.95) * 40.0);
    c += vec3(0.85, 0.97, 1.0) * (stripA * 2.2 + stripB * 1.4 + stripC * 1.6);
    float horizon = d.y + 0.25 - 0.12 * d.x;
    vec3 flatD = safeNormalize(vec3(d.x, 0.0, d.z), vec3(0.0, 0.0, -1.0));
    vec3 flatSun = safeNormalize(vec3(uSunDir.x, 0.0, uSunDir.z), vec3(0.0, 0.0, -1.0));
    float limb = exp(-abs(horizon) * 14.0);
    c += uAir * limb * (1.3 + 2.5 * pow(max(dot(flatD, flatSun), 0.0), 6.0));
    c = mix(c, uNight * 0.7, 1.0 - smoothstep(-0.36, -0.22, horizon));
    c *= 0.35 + 0.65 * (1.0 - smoothstep(0.2, 0.95, d.z));
    float s = max(dot(d, uSunDir), 0.0);
    c += uSunColor * (pow(s, 1200.0) * 40.0 + pow(s, 60.0) * 0.9 + pow(s, 6.0) * 0.1);
    return c;
  }

  void main() {
    vec3 n = normalize(vNormal);
    vec3 v = uCamera - vWorld;
    float vl = length(v);
    v = vl > 1e-5 ? v / vl : vec3(0.0, 0.0, 1.0);
    if (dot(n, v) < 0.0) n = -n;
    vec3 r = reflect(-v, n);
    float facing = max(dot(n, v), 0.0);
    float fresnel = 0.06 + 0.94 * pow(1.0 - facing, 5.0);

    vec3 chrome = mix(vec3(0.86, 0.95, 1.0), uAccent, 0.18);
    vec3 col = environment(r) * mix(chrome, vec3(1.0), fresnel);

    // The sun, directly.
    vec3 h = uSunDir + v;
    float hl = length(h);
    h = hl > 1e-4 ? h / hl : n;
    col += uSunColor * pow(max(dot(n, h), 0.0), 420.0) * 30.0;

    // The pointer's lamp.
    vec3 toLamp = uLamp - vWorld;
    float ll = length(toLamp);
    vec3 l = ll > 1e-4 ? toLamp / ll : vec3(0.0, 0.0, 1.0);
    vec3 hLamp = l + v;
    float hLampLength = length(hLamp);
    hLamp = hLampLength > 1e-4 ? hLamp / hLampLength : n;
    col += mix(vec3(1.0), uAccent, 0.35) * uPresence * (pow(max(dot(n, hLamp), 0.0), 90.0) * 5.0 + max(dot(n, l), 0.0) * 0.08);

    // The sweep: a band of light that crosses the jewel diagonally.
    float band = vLocal.x * 0.7 + vLocal.y * 0.7 - uSweep;
    col += vec3(0.85, 1.0, 1.0) * exp(-band * band * 60.0) * 2.4 * (0.4 + 0.6 * fresnel);

    // The edges, from how far this point is from each side of its facet: the ridge from the centre
    // to a point catches a thin white highlight, the valley to the next point darkens, and the
    // girdle where front meets back carries the site's cyan line.
    vec3 w = max(fwidth(vRole), vec3(1e-4));
    vec3 edge = 1.0 - smoothstep(vec3(0.0), w * 1.6, vRole);
    col *= 1.0 - 0.45 * edge.y;
    col += mix(vec3(1.0), uAccent, 0.2) * edge.z * (0.8 + 1.6 * fresnel);
    col += uAccent * edge.x * 1.4;
    col += uAccent * pow(1.0 - facing, 3.0) * 0.4;
    gl_FragColor = vec4(col, 1.0);
  }
`;

const BRIGHT_FRAGMENT = /* glsl */ `
  uniform sampler2D tInput;
  uniform float uThreshold;
  varying vec2 vUv;
  ${SCRUB}
  void main() {
    vec3 c = scrub(texture2D(tInput, vUv).rgb);
    float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
    gl_FragColor = vec4(c * smoothstep(uThreshold, uThreshold + 0.8, luma), 1.0);
  }
`;

const BLUR_FRAGMENT = /* glsl */ `
  uniform sampler2D tInput;
  uniform vec2 uDirection;
  varying vec2 vUv;
  void main() {
    vec3 sum = texture2D(tInput, vUv).rgb * 0.2270270270;
    sum += texture2D(tInput, vUv + uDirection * 1.3846153846).rgb * 0.3162162162;
    sum += texture2D(tInput, vUv - uDirection * 1.3846153846).rgb * 0.3162162162;
    sum += texture2D(tInput, vUv + uDirection * 3.2307692308).rgb * 0.0702702703;
    sum += texture2D(tInput, vUv - uDirection * 3.2307692308).rgb * 0.0702702703;
    gl_FragColor = vec4(sum, 1.0);
  }
`;

// The sun's flare is a lens effect, so it lies over everything, the planet and the jewel included:
// the four spikes of the mark, a long anamorphic streak along the horizon, and a halo. A second,
// smaller star glints on the jewel's tip when it spins.
const COMPOSITE_FRAGMENT = /* glsl */ `
  uniform sampler2D tScene;
  uniform sampler2D tBloomNear;
  uniform sampler2D tBloomFar;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uRatio;
  uniform vec2 uSunPx;
  uniform float uSunShow;
  uniform vec2 uSun2Px;      // a second sun, on twin-sun worlds
  uniform float uSun2Show;
  uniform vec3 uSunColor;
  uniform vec3 uAccent;
  uniform vec2 uGlintPx;
  uniform float uGlint;
  uniform vec4 uText;        // the text's box in uv: left, bottom, right, top
  uniform vec3 uPlanetPx;    // the planet's centre and radius, device pixels
  varying vec2 vUv;
  ${SCRUB}
  vec3 aces(vec3 x) {
    return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
  }
  float dither(vec2 p) {
    return fract(sin(dot(p + fract(uTime), vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
  }
  // Each spike ends at a few times its length: an exponential tail would otherwise draw a faint
  // line across the whole hero once the gamma curve lifts it.
  float tail(float x, float reach) {
    return exp(-x / reach) * (1.0 - smoothstep(reach * 1.5, reach * 4.0, x));
  }
  vec3 fourPoint(vec2 d, float reach, float width, float core) {
    float ax = abs(d.x);
    float ay = abs(d.y);
    float spikes = exp(-ay / width) * tail(ax, reach) + exp(-ax / width) * tail(ay, reach);
    float halo = exp(-dot(d, d) / (core * core));
    return vec3(spikes, halo, 0.0);
  }
  void main() {
    vec3 color = scrub(texture2D(tScene, vUv).rgb);
    color += scrub(texture2D(tBloomNear, vUv).rgb) * 0.8 + scrub(texture2D(tBloomFar, vUv).rgb) * 0.4;

    vec2 d = (gl_FragCoord.xy - uSunPx) / uRatio;
    vec3 sun = fourPoint(d, 42.0, 0.9, 4.0);
    vec3 wide = fourPoint(d, 20.0, 3.5, 20.0);
    float streak = exp(-abs(d.y) / 1.4) * tail(abs(d.x), 150.0);
    float ring = exp(-pow(abs(length(d) - 64.0) / 5.0, 2.0)) * 0.04;
    vec3 flare = uSunColor * (sun.x * 0.9 + sun.y * 1.6 + wide.x * 0.12 + wide.y * 0.22) + mix(uAccent, uSunColor, 0.4) * (streak * 0.22 + ring);
    float overPlanet = 1.0 - smoothstep(uPlanetPx.z - 2.0, uPlanetPx.z + 2.0, length(gl_FragCoord.xy - uPlanetPx.xy));
    color += flare * uSunShow * (1.0 - 0.65 * overPlanet);
    vec2 d2 = (gl_FragCoord.xy - uSun2Px) / uRatio;
    vec3 second = fourPoint(d2, 30.0, 0.9, 3.0);
    vec3 secondWide = fourPoint(d2, 14.0, 3.0, 14.0);
    color += vec3(1.0, 0.78, 0.55) * (second.x * 0.8 + second.y * 1.4 + secondWide.y * 0.25) * uSun2Show * (1.0 - 0.65 * overPlanet);

    vec2 g = (gl_FragCoord.xy - uGlintPx) / uRatio;
    vec3 glint = fourPoint(g, 38.0, 0.9, 3.0);
    color += vec3(0.9, 1.0, 1.0) * (glint.x * 1.4 + glint.y * 2.5) * uGlint;

    // Keep the text readable: darken softly behind its box.
    vec2 inside = smoothstep(uText.xy - vec2(0.08, 0.1), uText.xy + vec2(0.02, 0.05), vUv) * (1.0 - smoothstep(uText.zw - vec2(0.02, 0.05), uText.zw + vec2(0.12, 0.12), vUv));
    color *= 1.0 - 0.38 * inside.x * inside.y;

    vec2 v = vUv - 0.5;
    color *= 1.0 - dot(v, v) * 0.7;
    color = aces(color * 1.05);
    color = pow(color, vec3(1.0 / 2.2));
    color += dither(gl_FragCoord.xy) / 255.0;
    gl_FragColor = vec4(color, 1.0);
  }
`;

// The mark's star: four long points and four short valleys, a ridge from each point to a raised
// centre, front and back. Each facet's normal domes a little from its centre so the chrome runs.
function jewelGeometry() {
  const outline = [];
  const inner = 0.3;
  for (let i = 0; i < 8; i++) {
    const angle = Math.PI / 2 - (i * Math.PI) / 4;
    const radius = i % 2 === 0 ? 1 : inner;
    outline.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
  }
  const front = new THREE.Vector3(0, 0, 0.3);
  const back = new THREE.Vector3(0, 0, -0.3);
  const positions = [];
  const domes = [];
  const roles = [];
  const face = new THREE.Vector3();
  const edgeA = new THREE.Vector3();
  const edgeB = new THREE.Vector3();
  const centroid = new THREE.Vector3();
  const offset = new THREE.Vector3();
  function triangle(a, b, c) {
    edgeA.subVectors(b, a);
    edgeB.subVectors(c, a);
    face.crossVectors(edgeA, edgeB).normalize();
    centroid.copy(a).add(b).add(c).multiplyScalar(1 / 3);
    for (const vertex of [a, b, c]) {
      positions.push(vertex.x, vertex.y, vertex.z);
      // Which corner of the facet this is: the raised centre, a point, or a valley between points.
      if (Math.abs(vertex.z) > 0.01) roles.push(1, 0, 0);
      else if (Math.hypot(vertex.x, vertex.y) > 0.9) roles.push(0, 1, 0);
      else roles.push(0, 0, 1);
      offset.subVectors(vertex, centroid).multiplyScalar(0.45);
      const dome = face.clone().add(offset).normalize();
      domes.push(dome.x, dome.y, dome.z);
    }
  }
  for (let i = 0; i < 8; i++) {
    const a = outline[i];
    const b = outline[(i + 1) % 8];
    triangle(front, b, a);
    triangle(back, a, b);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('aDome', new THREE.Float32BufferAttribute(domes, 3));
  geometry.setAttribute('aRole', new THREE.Float32BufferAttribute(roles, 3));
  return geometry;
}

function fullscreenMaterial(fragmentShader, uniforms) {
  return new THREE.ShaderMaterial({ vertexShader: FULLSCREEN_VERTEX, fragmentShader, uniforms, depthTest: false, depthWrite: false });
}

function textBox(hero) {
  const box = { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity };
  const range = document.createRange();
  for (const element of hero.querySelectorAll('.dw-kicker, .dw-hero__title, .dw-hero__summary, .dw-actions, .dw-command')) {
    range.selectNodeContents(element);
    for (const rect of range.getClientRects()) {
      if (rect.width < 1 || rect.height < 1) continue;
      box.left = Math.min(box.left, rect.left);
      box.top = Math.min(box.top, rect.top);
      box.right = Math.max(box.right, rect.right);
      box.bottom = Math.max(box.bottom, rect.bottom);
    }
  }
  return Number.isFinite(box.left) ? box : null;
}

function start(hero, art) {
  const canvas = document.createElement('canvas');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
  } catch {
    return;
  }
  if (!renderer.capabilities.isWebGL2) {
    renderer.dispose();
    return;
  }
  renderer.autoClear = false;
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  canvas.className = 'r3-sky';
  canvas.setAttribute('aria-hidden', 'true');
  (art || hero).prepend(canvas);

  const floatTargets = renderer.extensions.has('EXT_color_buffer_float') || renderer.extensions.has('EXT_color_buffer_half_float');
  const targetType = floatTargets ? THREE.HalfFloatType : THREE.UnsignedByteType;
  const makeTarget = () => new THREE.WebGLRenderTarget(1, 1, { type: targetType, depthBuffer: false });
  const sceneTarget = new THREE.WebGLRenderTarget(1, 1, { type: targetType, samples: 4 });
  const nebulaTarget = makeTarget();
  const bloomTargets = [makeTarget(), makeTarget(), makeTarget(), makeTarget()];

  // Palette, from the site's tokens.
  const accent = token('--dw-accent', '#7ae0e2');
  const violet = token('--r3-violet', '#6e54d6');
  const night = token('--r3-planet', '#11232b');
  const top = token('--dw-bg-1', '#0b1218');
  const bottom = token('--dw-bg-0', '#070c11');
  // The world this page shows. Its atmosphere keeps a quarter of the site's cyan, so the arc
  // still reads as Starwind's whatever the world.
  const world = pickWorld();
  const worldColor = (hex) => new THREE.Color(hex).convertSRGBToLinear();
  const air = worldColor(world.air).lerp(accent, 0.25).multiplyScalar(0.9);
  // Which world it is, read out small in the corner like a survey scanner's.
  const survey = document.createElement('p');
  survey.className = 'r3-survey';
  survey.setAttribute('aria-hidden', 'true');
  for (const [part, text] of [['tag', 'Survey'], ['name', world.name], ['note', world.note]]) {
    const span = document.createElement('span');
    span.className = `r3-survey__${part}`;
    span.textContent = text;
    survey.append(span);
  }
  (art || hero).append(survey);
  const sunColor = new THREE.Color(1.0, 0.93, 0.82).multiplyScalar(1.6);

  const post = new THREE.Scene();
  const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const postQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
  post.add(postQuad);
  function pass(material, target) {
    postQuad.material = material;
    renderer.setRenderTarget(target);
    renderer.render(post, postCamera);
  }

  const time = { value: reduceMotion ? 24 : 0 };
  const drift = { value: new THREE.Vector2() };
  const scroll = { value: new THREE.Vector2() };
  const sunDir = { value: new THREE.Vector3(0.3, 0.6, -0.7).normalize() };
  const nebulaMaterial = fullscreenMaterial(NEBULA_FRAGMENT, {
    uTime: time,
    uAspect: { value: 1 },
    uDrift: drift,
    uScroll: scroll,
    uHeight: { value: 1 },
    uTop: { value: top },
    uBottom: { value: bottom },
    uCyan: { value: accent },
    uViolet: { value: violet },
  });
  const skyUniforms = {
    tNebula: { value: nebulaTarget.texture },
    uTime: time,
    uRatio: { value: 1 },
    uDrift: drift,
    uScroll: scroll,
    uPlanet: { value: new THREE.Vector3(0, 0, 100) },
    uSunDir: sunDir,
    uSunColor: { value: sunColor },
    uBody: { value: new THREE.Matrix3() },
    uCloudBody: { value: new THREE.Matrix3() },
    uAccent: { value: accent },
    uNight: { value: night },
    uAir: { value: air },
    uLowland: { value: worldColor(world.lowland) },
    uLand: { value: worldColor(world.land) },
    uHighland: { value: worldColor(world.highland) },
    uCloud: { value: worldColor(world.cloud) },
    uCity: { value: worldColor(world.city) },
    uWorldA: { value: new THREE.Vector4(0.3 + 0.4 * world.sea, 0.78 - 0.38 * world.clouds, world.cities, world.scale) },
    uWorldB: { value: new THREE.Vector4(world.ice, world.lava, world.bands, world.floating) },
  };
  const skyMaterial = fullscreenMaterial(SKY_FRAGMENT, skyUniforms);

  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 60);
  camera.position.set(0, 0, 10);
  const scene = new THREE.Scene();
  const pivot = new THREE.Group();
  scene.add(pivot);
  const jewelUniforms = {
    uCamera: { value: camera.position },
    uSunDir: { value: new THREE.Vector3() },
    uSunColor: { value: sunColor },
    uAccent: { value: accent },
    uViolet: { value: violet },
    uNight: { value: night },
    uAir: { value: air },
    uLamp: { value: new THREE.Vector3(0, 0, 3) },
    uPresence: { value: 0 },
    uSweep: { value: -3 },
    uTime: time,
  };
  const jewel = new THREE.Mesh(jewelGeometry(), new THREE.ShaderMaterial({
    vertexShader: JEWEL_VERTEX,
    fragmentShader: JEWEL_FRAGMENT,
    uniforms: jewelUniforms,
    side: THREE.DoubleSide,
  }));
  pivot.add(jewel);

  const brightMaterial = fullscreenMaterial(BRIGHT_FRAGMENT, { tInput: { value: sceneTarget.texture }, uThreshold: { value: 1.1 } });
  const blurMaterial = fullscreenMaterial(BLUR_FRAGMENT, { tInput: { value: null }, uDirection: { value: new THREE.Vector2() } });
  const copyMaterial = fullscreenMaterial(/* glsl */ `
    uniform sampler2D tInput;
    varying vec2 vUv;
    void main() { gl_FragColor = texture2D(tInput, vUv); }
  `, { tInput: { value: null } });
  const compositeUniforms = {
    tScene: { value: sceneTarget.texture },
    tBloomNear: { value: bloomTargets[0].texture },
    tBloomFar: { value: bloomTargets[2].texture },
    uTime: time,
    uResolution: { value: new THREE.Vector2(1, 1) },
    uRatio: { value: 1 },
    uSunPx: { value: new THREE.Vector2() },
    uSunShow: { value: 0 },
    uSun2Px: { value: new THREE.Vector2(-1e4, -1e4) },
    uSun2Show: { value: 0 },
    uSunColor: { value: sunColor },
    uAccent: { value: accent },
    uGlintPx: { value: new THREE.Vector2() },
    uGlint: { value: 0 },
    uText: { value: new THREE.Vector4(-2, -2, -2, -2) },
    uPlanetPx: { value: new THREE.Vector3(0, 0, 1) },
  };
  const compositeMaterial = fullscreenMaterial(COMPOSITE_FRAGMENT, compositeUniforms);
  function blur(source, via, target, radius) {
    blurMaterial.uniforms.tInput.value = source.texture;
    blurMaterial.uniforms.uDirection.value.set(radius / source.width, 0);
    pass(blurMaterial, via);
    blurMaterial.uniforms.tInput.value = via.texture;
    blurMaterial.uniforms.uDirection.value.set(0, radius / via.height);
    pass(blurMaterial, target);
  }

  // Layout. On a wide screen the jewel stands in the space right of the text, above the planet's
  // rising limb; where that space is too narrow it hangs small in the top right corner, and the
  // planet sinks lower, so the stacked text keeps the sky behind it quiet.
  let width = 1;
  let height = 1;
  let ratio = 1;
  let quality = 1;
  let slowTime = 0;
  let narrow = false;
  const jewelPx = { x: 0, y: 0, radius: 1 };
  const alignAxis = new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0.1, 0.35, 1).normalize(), new THREE.Vector3(0, 1, 0)));
  const spinMatrix = new THREE.Matrix4();
  const planet = { x: 0, y: 0, radius: 1 };
  let sunAlong = 0;
  const anchor = new THREE.Vector3();
  let jewelScale = 1;

  function layout() {
    const bounds = hero.getBoundingClientRect();
    width = Math.max(1, Math.round(bounds.width));
    height = Math.max(1, Math.round(bounds.height));
    ratio = Math.min(window.devicePixelRatio || 1, width * height > 1.4e6 ? 1.25 : 1.5) * quality;
    renderer.setPixelRatio(ratio);
    renderer.setSize(width, height, false);
    const w = Math.round(width * ratio);
    const h = Math.round(height * ratio);
    sceneTarget.setSize(w, h);
    nebulaTarget.setSize(Math.max(1, w >> 1), Math.max(1, h >> 1));
    bloomTargets[0].setSize(Math.max(1, w >> 2), Math.max(1, h >> 2));
    bloomTargets[1].setSize(Math.max(1, w >> 2), Math.max(1, h >> 2));
    bloomTargets[2].setSize(Math.max(1, w >> 3), Math.max(1, h >> 3));
    bloomTargets[3].setSize(Math.max(1, w >> 3), Math.max(1, h >> 3));
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    nebulaMaterial.uniforms.uAspect.value = width / height;
    nebulaMaterial.uniforms.uHeight.value = height;
    skyUniforms.uRatio.value = ratio;
    compositeUniforms.uRatio.value = ratio;
    compositeUniforms.uResolution.value.set(w, h);

    const text = textBox(hero);
    const textRight = text ? text.right - bounds.left : 0;
    const shellRight = Math.min(width, width / 2 + 760);
    const free = shellRight - textRight;
    const radius = Math.min(height * 0.27, free * 0.3, 150);
    narrow = width < 761 || radius < 64;
    hero.classList.toggle('r3-hero--corner', narrow);
    if (narrow) {
      jewelPx.radius = Math.min(width * 0.1, 44);
      jewelPx.x = width - jewelPx.radius * 1.35;
      jewelPx.y = jewelPx.radius * 1.45;
      planet.radius = Math.max(width * 1.05, 420);
      planet.x = width * 0.62;
      planet.y = -planet.radius + height * 0.15;
      sunAlong = THREE.MathUtils.clamp((width * 0.97 - planet.x) / planet.radius, -0.7, 0.7);
    } else {
      jewelPx.radius = radius;
      jewelPx.x = Math.min(textRight + free * 0.45, shellRight - radius * 1.3);
      jewelPx.y = height * 0.4;
      planet.radius = Math.max(width * 0.36, 480);
      planet.x = jewelPx.x + radius * 0.6;
      planet.y = -planet.radius + height * 0.3;
      sunAlong = THREE.MathUtils.clamp((Math.min(width - 90, jewelPx.x + radius * 2.2) - planet.x) / planet.radius, -0.7, 0.7);
    }
    skyUniforms.uPlanet.value.set(planet.x * ratio, planet.y * ratio, planet.radius * ratio);
    if (text) {
      compositeUniforms.uText.value.set(
        (text.left - bounds.left) / width,
        1 - (text.bottom - bounds.top) / height,
        (text.right - bounds.left) / width,
        1 - (text.top - bounds.top) / height,
      );
    }

    const perPixel = (2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / height;
    jewelScale = jewelPx.radius * perPixel;
    anchor.set((jewelPx.x - width / 2) * perPixel, (height / 2 - jewelPx.y) * perPixel, 0);
    pivot.scale.setScalar(jewelScale);
  }

  // The pointer: the jewel leans toward it and its lamp follows it; without one, both wander.
  const pointer = new THREE.Vector2();
  const eased = new THREE.Vector2();
  let pointerActive = false;
  let lastPointer = -Infinity;
  let presence = 0;
  let spinStart = -Infinity;
  let spinFrom = 0;
  let nextSpin = reduceMotion ? Infinity : 7;
  function onPointer(event) {
    const bounds = hero.getBoundingClientRect();
    pointer.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1, -((event.clientY - bounds.top) / bounds.height) * 2 + 1);
    pointerActive = true;
    lastPointer = performance.now();
    if (reduceMotion) requestFrame();
  }
  hero.addEventListener('pointermove', onPointer, { passive: true });
  hero.addEventListener('pointerleave', () => {
    pointerActive = false;
    if (reduceMotion) requestFrame();
  }, { passive: true });
  hero.addEventListener('pointerdown', (event) => {
    if (event.target.closest('a, button, input, summary, [role="button"]')) return;
    const bounds = hero.getBoundingClientRect();
    const dx = event.clientX - bounds.left - jewelPx.x;
    const dy = event.clientY - bounds.top - jewelPx.y;
    if (dx * dx + dy * dy > (jewelPx.radius * 1.4) ** 2) return;
    beginSpin();
    requestFrame();
  }, { passive: true });

  // Drag the planet, as the moon on the l3i site drags: the surface follows the pointer and keeps
  // turning after release, the spin decaying, while the planet's own turn carries on beneath. A
  // drag along the arc rolls it about its axis; a drag up or down tips it over the limb.
  const turned = new THREE.Quaternion();
  const nudge = new THREE.Quaternion();
  const dragInverse = new THREE.Matrix4();
  const spinAxisView = new THREE.Vector3(0.1, 0.35, 1).normalize();
  const axisX = new THREE.Vector3(1, 0, 0);
  const planetDrag = { active: false, id: -1, lastX: 0, lastY: 0, vx: 0, vy: 0 };
  function heroPoint(event) {
    const bounds = hero.getBoundingClientRect();
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  }
  function overJewel(point) {
    const dx = point.x - jewelPx.x;
    const dy = point.y - jewelPx.y;
    return dx * dx + dy * dy <= (jewelPx.radius * 1.4) ** 2;
  }
  function overPlanet(point) {
    const dx = point.x - (planet.x - drift.value.x * 26);
    const dy = point.y - (height - (planet.y - drift.value.y * 26));
    return dx * dx + dy * dy <= planet.radius * planet.radius;
  }
  function turnPlanet(dx, dy) {
    nudge.setFromAxisAngle(spinAxisView, -dx / planet.radius);
    turned.premultiply(nudge);
    nudge.setFromAxisAngle(axisX, dy / planet.radius);
    turned.premultiply(nudge);
    turned.normalize();
  }
  const interactive = 'a, button, input, summary, [role="button"]';
  hero.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || event.button > 0 || event.target.closest(interactive)) return;
    const point = heroPoint(event);
    if (overJewel(point) || !overPlanet(point)) return;
    planetDrag.active = true;
    planetDrag.id = event.pointerId;
    planetDrag.lastX = event.clientX;
    planetDrag.lastY = event.clientY;
    planetDrag.vx = 0;
    planetDrag.vy = 0;
    hero.setPointerCapture(event.pointerId);
    hero.style.cursor = 'grabbing';
    event.preventDefault();
    requestFrame();
  });
  hero.addEventListener('pointermove', (event) => {
    if (!planetDrag.active) {
      const point = heroPoint(event);
      const grabbable = !event.target.closest(interactive) && !overJewel(point) && overPlanet(point);
      hero.style.cursor = grabbable ? 'grab' : '';
      return;
    }
    if (event.pointerId !== planetDrag.id) return;
    const dx = event.clientX - planetDrag.lastX;
    const dy = event.clientY - planetDrag.lastY;
    planetDrag.lastX = event.clientX;
    planetDrag.lastY = event.clientY;
    planetDrag.vx = dx;
    planetDrag.vy = dy;
    turnPlanet(dx, dy);
    if (reduceMotion) requestFrame();
  }, { passive: true });
  function releasePlanet(event) {
    if (!planetDrag.active || event.pointerId !== planetDrag.id) return;
    planetDrag.active = false;
    hero.style.cursor = overPlanet(heroPoint(event)) ? 'grab' : '';
    if (reduceMotion) {
      planetDrag.vx = 0;
      planetDrag.vy = 0;
    }
  }
  hero.addEventListener('pointerup', releasePlanet, { passive: true });
  hero.addEventListener('pointercancel', releasePlanet, { passive: true });

  let spinBase = 0;
  // Sparkles: now and then one of the four points flashes, and the top one always does in a spin.
  let sparkleTip = 0;
  let sparkleStart = -Infinity;
  let nextSparkle = 3;
  function beginSpin() {
    if (clockTime - spinStart < 1.6) return;
    spinFrom = spinBase;
    spinStart = clockTime;
  }

  // The render loop.
  const clock = new THREE.Clock();
  let clockTime = 0;
  let visible = false;
  let running = false;
  let lost = false;
  let first = true;
  const lampWorld = new THREE.Vector3();
  const tipWorld = new THREE.Vector3();
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2.5);
  const planeHit = new THREE.Vector3();

  function frame() {
    running = false;
    if (lost) return;
    const rawDt = clock.getDelta();
    const dt = Math.min(rawDt, 0.05);
    if (!reduceMotion && rawDt < 0.5) {
      slowTime = rawDt > 1 / 40 ? slowTime + rawDt : Math.max(0, slowTime - rawDt * 0.5);
      if (slowTime > 1.5 && quality > 0.5) {
        quality = Math.max(0.5, quality - 0.2);
        slowTime = 0;
        layout();
      }
    }
    if (!reduceMotion) {
      time.value += dt;
      clockTime += dt;
    }
    const t = time.value;

    // The pointer, or a slow wander around the jewel when there is none.
    const idle = !pointerActive || performance.now() - lastPointer > 4000;
    const target = new THREE.Vector2();
    if (idle) {
      target.set((jewelPx.x / width) * 2 - 1 + Math.sin(t * 0.31) * 0.35, 1 - (jewelPx.y / height) * 2 + Math.sin(t * 0.47 + 1.3) * 0.3);
    } else {
      target.copy(pointer);
    }
    const follow = reduceMotion ? 1 : Math.min(1, dt * 3);
    eased.lerp(target, follow);
    const wanted = pointerActive && !idle ? 1 : (reduceMotion ? 0 : 0.35);
    presence += (wanted - presence) * (reduceMotion ? 1 : Math.min(1, dt * 3));
    jewelUniforms.uPresence.value = presence;
    drift.value.set(eased.x * 0.5, eased.y * 0.35);
    // The orbit: the sky streams to the left and a little down, the far stars at six pixels a
    // second. It wraps at a large period so the numbers stay small.
    scroll.value.set((t * 6.0) % 100000, (t * 1.1) % 100000);

    // The sun rises and sinks on the limb over about ninety seconds: a diamond ring at its lowest.
    const rise = 0.5 + 0.5 * Math.sin(t * 0.07 - 0.6);
    const alongX = sunAlong + 0.03 * Math.sin(t * 0.021);
    const along = new THREE.Vector2(alongX, Math.sqrt(Math.max(0.05, 1 - alongX * alongX))).normalize();
    sunDir.value.set(along.x * 0.55, along.y * 0.55, -(0.84 - 0.1 * rise)).normalize();
    // The planet turns about an axis leaning toward the viewer, so the surface rolls along the arc
    // out of the night and into the sunrise: once in about three and a half minutes, some fifteen
    // pixels a second at the crown of a wide hero. The cloud deck turns a little faster, so it
    // slides over the ground.
    // A drag's spin carries on after release, fading over about a second and a half.
    if (!planetDrag.active && (planetDrag.vx !== 0 || planetDrag.vy !== 0)) {
      const decay = Math.exp(-dt * 2.2);
      planetDrag.vx *= decay;
      planetDrag.vy *= decay;
      if (Math.abs(planetDrag.vx) + Math.abs(planetDrag.vy) < 0.02) {
        planetDrag.vx = 0;
        planetDrag.vy = 0;
      } else {
        turnPlanet(planetDrag.vx * dt * 60, planetDrag.vy * dt * 60);
      }
    }
    dragInverse.makeRotationFromQuaternion(turned).invert();
    spinMatrix.makeRotationY(t * PLANET_SPIN).multiply(alignAxis).multiply(dragInverse);
    skyUniforms.uBody.value.setFromMatrix4(spinMatrix);
    spinMatrix.makeRotationY(t * PLANET_SPIN * 1.35 + 0.8).multiply(alignAxis).multiply(dragInverse);
    skyUniforms.uCloudBody.value.setFromMatrix4(spinMatrix);
    const lift = planet.radius * (1.0 + 0.004 + 0.02 * rise);
    const sunX = planet.x - drift.value.x * 26 + along.x * lift;
    const sunY = planet.y - drift.value.y * 26 + along.y * lift;
    compositeUniforms.uSunPx.value.set(sunX * ratio, sunY * ratio);
    compositeUniforms.uPlanetPx.value.set((planet.x - drift.value.x * 26) * ratio, (planet.y - drift.value.y * 26) * ratio, planet.radius * ratio);
    compositeUniforms.uSunShow.value = (0.25 + 0.75 * Math.min(1, rise * 1.6 + 0.2)) * (narrow ? 0.55 : 1);
    // A twin-sun world's second sun trails the first along the limb, lower and smaller.
    if (world.suns > 1) {
      const trail = 0.12;
      const second = new THREE.Vector2(along.x * Math.cos(-trail) - along.y * Math.sin(-trail), along.x * Math.sin(-trail) + along.y * Math.cos(-trail));
      const lift2 = planet.radius * (1.0 + 0.002 + 0.012 * rise);
      compositeUniforms.uSun2Px.value.set((planet.x - drift.value.x * 26 + second.x * lift2) * ratio, (planet.y - drift.value.y * 26 + second.y * lift2) * ratio);
      compositeUniforms.uSun2Show.value = compositeUniforms.uSunShow.value * 0.8;
    }

    // The jewel: a slow sway, the lean toward the pointer, and now and then a quarter turn.
    if (!reduceMotion && clockTime >= nextSpin) {
      beginSpin();
      nextSpin = clockTime + 9 + Math.random() * 5;
    }
    const spinAge = clockTime - spinStart;
    let roll = spinBase;
    let sweep = -3;
    let glint = 0;
    if (spinAge >= 0 && spinAge < 1.6) {
      const k = spinAge / 1.6;
      const ease = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      roll = spinFrom - (Math.PI / 2) * ease;
      sweep = -1.6 + 3.2 * k;
      glint = Math.sin(Math.PI * Math.min(1, spinAge / 1.1)) * 1.0;
      if (k >= 1) spinBase = roll;
    } else if (spinAge >= 1.6 && spinStart > -Infinity) {
      spinBase = spinFrom - Math.PI / 2;
      roll = spinBase;
    }
    jewelUniforms.uSweep.value = sweep;
    const aimX = (eased.x - ((jewelPx.x / width) * 2 - 1)) * 0.9;
    const aimY = (eased.y - (1 - (jewelPx.y / height) * 2)) * 0.9;
    pivot.position.set(anchor.x, anchor.y + Math.sin(t * 0.6) * 0.04 * jewelScale, anchor.z);
    pivot.rotation.set(
      THREE.MathUtils.clamp(-aimY * 0.4, -0.32, 0.32) + Math.sin(t * 0.37) * 0.08,
      THREE.MathUtils.clamp(aimX * 0.4, -0.38, 0.38) + Math.sin(t * 0.23) * 0.16,
      0,
    );
    jewel.rotation.z = roll + Math.sin(t * 0.17) * 0.05;

    // The camera drifts, as if on a slow orbit of its own.
    camera.position.set(Math.sin(t * 0.05) * 0.35, Math.sin(t * 0.07) * 0.18, 10);
    camera.lookAt(0, 0, 0);
    jewelUniforms.uCamera.value = camera.position;
    jewelUniforms.uSunDir.value.copy(sunDir.value);

    raycaster.setFromCamera(eased, camera);
    if (raycaster.ray.intersectPlane(plane, planeHit)) lampWorld.copy(planeHit);
    jewelUniforms.uLamp.value.copy(lampWorld);

    // The glint rides a point of the jewel, projected to the screen.
    if (!reduceMotion && clockTime >= nextSparkle) {
      sparkleTip = Math.floor(Math.random() * 4);
      sparkleStart = clockTime;
      nextSparkle = clockTime + 2.5 + Math.random() * 3;
    }
    const sparkleAge = clockTime - sparkleStart;
    const sparkle = sparkleAge < 0.7 ? Math.sin(Math.PI * sparkleAge / 0.7) : 0;
    const tip = glint > sparkle ? 0 : sparkleTip;
    const tipAngle = Math.PI / 2 - (tip * Math.PI) / 2;
    jewel.updateMatrixWorld(true);
    tipWorld.set(Math.cos(tipAngle), Math.sin(tipAngle), 0.02).applyMatrix4(jewel.matrixWorld).project(camera);
    compositeUniforms.uGlintPx.value.set((tipWorld.x * 0.5 + 0.5) * width * ratio, (tipWorld.y * 0.5 + 0.5) * height * ratio);
    compositeUniforms.uGlint.value = Math.max(glint, sparkle * 0.8) * (narrow ? 0.6 : 1);

    // Render: the nebulae every third frame, then the sky, the jewel, the bloom and the composite.
    nebulaAge++;
    if (nebulaAge >= 3 || reduceMotion) {
      nebulaAge = 0;
      pass(nebulaMaterial, nebulaTarget);
    }
    renderer.setRenderTarget(sceneTarget);
    renderer.clear();
    pass(skyMaterial, sceneTarget);
    renderer.render(scene, camera);

    brightMaterial.uniforms.tInput.value = sceneTarget.texture;
    pass(brightMaterial, bloomTargets[0]);
    blur(bloomTargets[0], bloomTargets[1], bloomTargets[0], 1.0);
    blur(bloomTargets[0], bloomTargets[1], bloomTargets[0], 2.0);
    copyMaterial.uniforms.tInput.value = bloomTargets[0].texture;
    pass(copyMaterial, bloomTargets[2]);
    blur(bloomTargets[2], bloomTargets[3], bloomTargets[2], 1.5);
    blur(bloomTargets[2], bloomTargets[3], bloomTargets[2], 3.0);
    renderer.setRenderTarget(null);
    pass(compositeMaterial, null);

    if (first) {
      first = false;
      canvas.classList.add('is-ready');
      setTimeout(() => hero.classList.add('r3-hero--live'), reduceMotion ? 0 : 1000);
    }
    if (visible && !reduceMotion && !document.hidden) requestFrame();
  }
  let nebulaAge = Infinity;

  function requestFrame() {
    if (running || lost) return;
    running = true;
    requestAnimationFrame(frame);
  }

  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    lost = true;
    canvas.classList.remove('is-ready');
    hero.classList.remove('r3-hero--live');
  });
  canvas.addEventListener('webglcontextrestored', () => {
    lost = false;
    first = true;
    nebulaAge = Infinity;
    layout();
    clock.getDelta();
    requestFrame();
  });

  layout();
  new ResizeObserver(() => {
    layout();
    nebulaAge = Infinity;
    requestFrame();
  }).observe(hero);
  new IntersectionObserver((entries) => {
    visible = entries.some((entry) => entry.isIntersecting);
    if (visible) {
      clock.getDelta();
      requestFrame();
    }
  }).observe(hero);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && visible) {
      clock.getDelta();
      requestFrame();
    }
  });
}

const art = document.querySelector('[data-dw-hero-art]');
const hero = art ? art.closest('.dw-hero') : null;
if (hero) start(hero, art);
