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
// composite adds the sun's flare, tone-maps (ACES), vignettes and dithers. Any NaN or infinity is zeroed before the bloom can spread it. Colours come from the
// site's CSS tokens, so sass/brand.sass stays their owner. The canvas waits until the hero is on
// screen, stops when the tab is hidden or the hero scrolls away, lowers its resolution when frames
// run slow, and under prefers-reduced-motion draws still frames. Without WebGL 2, or after the
// context is lost, the still in sass/brand.sass stays.
//
// The template loads this module through [extra.hero] in config.toml and gives the hero an empty
// [data-dw-hero-art], which the canvas fills. brand.sass makes it a stage of its own, between the
// text above and the survey readout and the facts below, so nothing of the page sits over it.

import * as THREE from './vendor/three.module.min.js';
import { pickWorld, WORLDS } from './r3-worlds.js';
import { pickVista, placeVista, VISTA_GLSL } from './r3-vistas.js';
import { createFleet } from './r3-ships.js';
import { createMemory } from './r3-memory.js'; // [r3:memory]
import { createDirector } from './r3-events.js'; // [r3:director]
import { createEnvironment } from './r3-environment.js'; // [r3:environment]
import { pickScenario } from './r3-shipyard.js';
import { decorateSurvey } from './r3-guide.js'; // [r3:guide]
import { createOrbit } from './r3-camera.js'; // [r3:navigator]
import { createSensors } from './r3-sensors.js'; // [r3:gunnery]
import { createPilot } from './r3-pilot.js'; // [r3:pilot]

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
  // fbm3 with each octave faded to its mean as it nears the size of a pixel, so fine detail does
  // not shimmer as the surface moves. footprint: how far p moves across one pixel.
  float fbm3Filtered(vec3 p, float footprint) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * mix(0.5, noise3(p), 1.0 - smoothstep(0.2, 0.45, footprint));
      p = p * 2.03 + vec3(1.7, 9.2, 3.1);
      footprint *= 2.03;
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
  uniform vec3 uThird;       // a third cloud, in the colour of the world's air
  // This visit's sky (r3-worlds.js): where each cloud sits, as fractions of the hero's width and
  // height, how far it spreads and how bright it is, the noise's offset, scale and warp.
  uniform vec4 uCloudsAt;    // cyan x, y, violet x, y
  uniform vec2 uThirdAt;
  uniform vec3 uSpread;
  uniform vec3 uStrength;
  uniform vec4 uNoise;       // offset x, y, scale, warp
  uniform float uFade;       // the clouds going dark, at the heat death
  ${NOISE}
  float cloudMask(vec2 p, vec2 at, float spread) {
    vec2 d = (p - vec2(at.x * uAspect, at.y)) / spread;
    return exp(-dot(d, d) * 3.0);
  }
  void main() {
    vec2 p = vec2(vUv.x * uAspect, vUv.y) + uDrift * 0.35 + uScroll * (0.35 / max(uHeight, 1.0));
    vec3 col = mix(uBottom, uTop, smoothstep(0.0, 1.0, vUv.y));
    vec2 n = p * uNoise.z + uNoise.xy;
    vec2 warp = vec2(fbm2(n * 1.4 + vec2(0.0, uTime * 0.011)), fbm2(n * 1.4 + vec2(5.2, 1.3) - uTime * 0.009));
    float cloud = fbm2(n * 1.9 + warp * uNoise.w + uTime * 0.006);
    float wisp = fbm2(n * 2.7 - warp * uNoise.w * 1.3 + vec2(3.1, 7.7));
    float ridge = 1.0 - abs(2.0 * fbm2(n * 3.3 + warp * 2.2 - uTime * 0.004) - 1.0);
    ridge = clamp(ridge, 0.0, 1.0);

    float cyanMask = cloudMask(p, uCloudsAt.xy, uSpread.x);
    float violetMask = cloudMask(p, uCloudsAt.zw, uSpread.y);
    float thirdMask = cloudMask(p, uThirdAt, uSpread.z);

    col += uCyan * cyanMask * (0.025 + 0.075 * smoothstep(0.4, 0.85, cloud)) * uStrength.x;
    col += uCyan * cyanMask * pow(ridge, 8.0) * 0.05 * uStrength.x;
    col += uViolet * violetMask * (0.03 + 0.07 * smoothstep(0.45, 0.9, cloud)) * uStrength.y;
    col += uThird * thirdMask * (0.02 + 0.06 * smoothstep(0.5, 0.9, wisp)) * uStrength.z;
    // Dark lanes of dust across the brightest cloud.
    col *= 1.0 - 0.35 * smoothstep(0.55, 0.8, wisp) * cyanMask * uStrength.x;
    col = mix(col, mix(uBottom, uTop, smoothstep(0.0, 1.0, vUv.y)) * (1.0 - 0.8 * uFade), uFade);
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
  uniform vec3 uHyper;       // hyperspace: the stars' stretch, how much of the planet shows, the tunnel
  uniform vec2 uHyperAt;     // the vanishing point, device pixels
  uniform float uDying;      // at the heat death, how many of the stars have gone out, 0 to 1
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
  uniform vec4 uWorldC;     // open water (0 on a dry world), aurora, rings (1 when it has them)
  uniform vec3 uSeed;       // this load's offset into the noise, so no two visits match
  uniform vec3 uRingNormal; // square to the ring plane, view space
  uniform vec3 uRingColor;
  uniform float uRingSeed;
  uniform vec4 uMoonA;      // small moons: centre x, y and radius in device pixels, and a seed
  uniform vec4 uMoonB;
  uniform vec3 uMoonColorA;
  uniform vec3 uMoonColorB;
  uniform vec3 uBetaR;      // Rayleigh scattering at the ground, per planet radius, per channel
  uniform float uBetaM;     // Mie scattering at the ground, the same for every channel
  uniform vec3 uAirShape;   // the Rayleigh and Mie scale heights, and the shell's top
  // [r3:howard] The uncharted world's face: albedo with its mask, relief, and where on the body.
  uniform sampler2D tFace;
  uniform sampler2D tFaceRelief;
  uniform vec4 uFace;       // strength, size in tangent units, the eyes' offset x and y
  uniform vec3 uFaceRight;
  uniform vec3 uFaceUp;
  uniform vec3 uFaceCentre;
  ${NOISE}

  // The atmosphere, scattered for real: a shell of air over the planet, thinning exponentially
  // with height, its molecules (Rayleigh) scattering the short wavelengths of the world's air colour
  // most and its dust (Mie) scattering all of them, mostly forward. Along each view ray through the
  // shell, light from the sun is gathered at ten points, each dimmed by the air between it and the
  // sun (four more points) and between it and the viewer. So the limb glows where the sun is behind
  // it, the light that reaches the ground near the terminator has lost its short wavelengths and
  // reddens, and a thin blue veil lies over the day side. Heights are in planet radii.
  vec2 airDensity(vec3 p) {
    float h = max(length(p) - 1.0, 0.0);
    return exp(-h / uAirShape.xy);
  }
  vec3 extinction(vec2 depth) {
    return exp(-(uBetaR * depth.x + uBetaM * 1.1 * depth.y));
  }
  // The sunlight left at p after crossing the air toward the sun; none in the planet's shadow,
  // softened over the width of the terminator.
  vec3 sunlightAt(vec3 p, vec3 s) {
    float b = dot(p, s);
    float c = dot(p, p);
    float closest = sqrt(max(c - b * b, 0.0));
    float lit = b < 0.0 ? smoothstep(0.992, 1.004, closest) : 1.0;
    float exitAt = -b + sqrt(max(b * b - c + uAirShape.z * uAirShape.z, 0.0));
    float stepLength = exitAt * 0.25;
    vec2 depth = vec2(0.0);
    for (int i = 0; i < 4; i++) depth += airDensity(p + s * ((float(i) + 0.5) * stepLength)) * stepLength;
    return extinction(depth) * lit;
  }
  // The light the air scatters toward the viewer along the ray through q, and how much of what
  // lies behind it gets through. The view is along -z; the ray ends at the ground or leaves the
  // shell again.
  void scatter(vec2 q, float r, vec3 sun, out vec3 gathered, out vec3 through) {
    gathered = vec3(0.0);
    through = vec3(1.0);
    if (r >= uAirShape.z) return;
    float top = sqrt(uAirShape.z * uAirShape.z - r * r);
    float bottom = r < 1.0 ? sqrt(1.0 - r * r) : -top;
    float stepLength = (top - bottom) * 0.1;
    float mu = -sun.z;
    float phaseR = 0.0596831 * (1.0 + mu * mu);
    const float g = 0.76;
    float phaseM = 0.0795775 * (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * mu, 1.5);
    vec2 depth = vec2(0.0);
    vec3 sumR = vec3(0.0);
    vec3 sumM = vec3(0.0);
    for (int i = 0; i < 10; i++) {
      vec3 p = vec3(q, top - (float(i) + 0.5) * stepLength);
      vec2 d = airDensity(p) * stepLength;
      depth += d;
      vec3 light = extinction(depth) * sunlightAt(p, sun);
      sumR += d.x * light;
      sumM += d.y * light;
    }
    gathered = (sumR * uBetaR * phaseR + sumM * uBetaM * phaseM) * uSunColor * 4.0;
    through = extinction(depth);
  }

  // A small moon: a crater-mottled disc lit by the same sun, usually a crescent, since the sun is
  // behind the planet.
  vec3 moon(vec3 col, vec2 px, vec4 m, vec3 tint, vec3 sun) {
    if (m.z <= 0.0) return col;
    vec2 d = (px - m.xy) / m.z;
    float rr = dot(d, d);
    if (rr > 1.44) return col;
    float disc = 1.0 - smoothstep(1.0 - 1.5 / m.z, 1.0 + 0.5 / m.z, sqrt(rr));
    vec3 n = vec3(d, sqrt(max(0.0, 1.0 - rr)));
    float mottle = fbm3(n * 3.5 + m.w * 50.0);
    float craters = smoothstep(0.55, 0.7, fbm3(n * 9.0 + m.w * 20.0));
    vec3 albedo = tint * (0.65 + 0.6 * mottle) * (1.0 - 0.35 * craters);
    float light = max(dot(n, sun), 0.0);
    // The dark side is lit by the planet below and the nebula, and the backlit edge catches the sun.
    vec3 lit = albedo * uSunColor * light * 1.3 + albedo * (uAir * 0.25 * max(-d.y, 0.0) + 0.09);
    vec2 toSun = length(sun.xy) > 1e-4 ? normalize(sun.xy) : vec2(0.0, 1.0);
    vec2 outward = length(d) > 1e-4 ? d / length(d) : vec2(0.0, 1.0);
    lit += uSunColor * pow(1.0 - n.z, 4.0) * max(dot(outward, toSun), 0.0) * 0.5;
    return mix(col, lit, disc);
  }

  // City lights: one in some cells of a lattice through the surface, clustered where the land is
  // populous. A light counts when it lies near the surface, and is measured along it, so every
  // one that counts is a sharp point rather than a blur sliced at some depth.
  float cityLights(vec3 t, float fill, float footprint) {
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
    // Where the lattice packs tighter than about six pixels a cell, the lights would shimmer.
    return exp(-dot(along, along) / 0.02) * (0.45 + 0.55 * hash31(id + 2.2)) * (1.0 - smoothstep(0.12, 0.3, footprint));
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
    // At least a pixel wide, or a star crossing pixel centres as the sky streams by twinkles.
    float size = 0.85 + 0.7 * hash21(id + 11.3);
    float twinkle = 0.6 + 0.4 * sin(uTime * (0.6 + 1.9 * h) + h * 60.0);
    float core = exp(-dot(d, d) / (size * size));
    vec3 tint = mix(vec3(0.75, 0.92, 1.0), vec3(1.0, 0.93, 0.82), hash21(id + 5.5));
    // At the heat death each star goes out at its own moment, flaring as it goes, the last red.
    float death = hash21(id + 23.7);
    float alive = smoothstep(uDying - 0.004, uDying + 0.004, death);
    float going = uDying > 0.0 ? exp(-pow(abs(death - uDying) * 160.0, 2.0)) : 0.0;
    tint = mix(tint, vec3(1.0, 0.42, 0.28), smoothstep(0.35, 0.9, uDying));
    float bright = step(0.3, h) * spikes;
    float spike = bright * (exp(-abs(d.y) * 1.6) * exp(-abs(d.x) * 0.16) + exp(-abs(d.x) * 1.6) * exp(-abs(d.y) * 0.16));
    return tint * (core * (0.9 + 2.5 * bright) + spike * 0.55) * twinkle * alive + tint * core * going * 4.0;
  }

  // All three layers of stars, streaming past at their own speeds.
  vec3 starField(vec2 css) {
    return starLayer(css + uDrift * 8.0 + uScroll, 61.0, 1.0, 0.0)
         + starLayer(css + uDrift * 16.0 + uScroll * 1.9, 97.0, 2.0, 0.0) * 0.8
         + starLayer(css + uDrift * 30.0 + uScroll * 3.4, 173.0, 3.0, 1.0);
  }

  ${VISTA_GLSL}

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

    // How far the planet's surface moves across a pixel, taken here, before any branch: screen
    // derivatives inside one are undefined where a 2x2 quad of pixels straddles the limb.
    vec3 surfaceHere = uBody * vec3(q, sqrt(max(0.0, 1.0 - r * r)));
    float footprint = length(fwidth(surfaceHere));

    // Stars, hidden behind the planet. The camera is in orbit, so they stream past, the nearer
    // layers faster than the far ones.
    vec3 stars;
    if (uHyper.x > 0.001) {
      // Into hyperspace: each star drawn again at points pulled toward the vanishing point, so it
      // stretches out from there into a streak.
      stars = vec3(0.0);
      vec2 centre = uHyperAt / uRatio;
      for (int i = 0; i < 12; i++) {
        float f = float(i) / 11.0;
        stars += starField(mix(css, centre, f * uHyper.x * 0.9)) * (1.2 - f * 0.6);
      }
      stars *= 0.2 + 0.25 * uHyper.x;
    } else {
      stars = starField(css);
    }
    col += stars * (1.0 - onPlanet * uHyper.y);
    vec3 sky = col;
    vec3 moonsOver = moon(col, px + uDrift * 12.0 * uRatio, uMoonA, uMoonColorA, sun);
    moonsOver = moon(moonsOver, px + uDrift * 12.0 * uRatio, uMoonB, uMoonColorB, sun);
    col = mix(moonsOver, col, onPlanet);

    #if VISTA == 0 || VISTA == 7 || VISTA == 8
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
        vec3 ts = t + uSeed;
        vec3 tcs = tc + uSeed.zxy;
        float scale = uWorldA.w;
        float settled = uWorldA.z;
        float elevation = fbm3Filtered(ts * 2.1 * scale + 4.0, footprint * 2.1 * scale);
        // Coasts and cloud edges soften by as much as the noise changes across a pixel.
        float coast = footprint * 2.1 * scale * 0.6;
        float land = smoothstep(uWorldA.x - coast, uWorldA.x + 0.05 + coast, elevation);
        float high = smoothstep(uWorldA.x + 0.08, uWorldA.x + 0.26, elevation) * land;
        vec3 ground = mix(uLand, uHighland, high) * (0.8 + 0.4 * fbm3Filtered(ts * 9.0 * scale, footprint * 9.0 * scale));
        vec3 albedo = mix(uLowland * (0.85 + 0.3 * fbm3Filtered(ts * 4.0 + 2.0, footprint * 4.0)), ground, land);
        // [r3:howard] A face, painted on the body where the framing shows it, projected straight
        // on from its centre. Its relief tips the normal, so the terminator throws the brow's,
        // the nose's and the cheekbones' shadows; its eyes shift a little toward the pointer.
        vec3 faceNormal = n;
        float faceMask = 0.0;
        if (uFace.x > 0.001) {
          float faceFront = dot(t, uFaceCentre);
          vec2 faceUv = vec2(dot(t, uFaceRight), dot(t, uFaceUp)) / uFace.y * 0.5 + 0.5;
          float faceLod = log2(max(footprint / uFace.y * 0.5 * 512.0, 1.0));
          vec2 faceEyeL = (faceUv - vec2(0.3633, 0.4567)) / vec2(0.06, 0.03);
          vec2 faceEyeR = (faceUv - vec2(0.62, 0.4567)) / vec2(0.06, 0.03);
          float faceInEye = max(1.0 - smoothstep(0.45, 1.0, length(faceEyeL)), 1.0 - smoothstep(0.45, 1.0, length(faceEyeR)));
          vec4 faceSkin = textureLod(tFace, faceUv - uFace.zw * faceInEye, faceLod);
          float faceInside = step(0.0, faceUv.x) * step(faceUv.x, 1.0) * step(0.0, faceUv.y) * step(faceUv.y, 1.0);
          faceMask = faceSkin.a * uFace.x * smoothstep(0.05, 0.3, faceFront) * faceInside;
          albedo = mix(albedo, faceSkin.rgb, faceMask);
          land = max(land, faceMask);
          float faceStep = 1.0 / 256.0;
          float faceReliefLod = max(faceLod - 1.0, 0.0);
          float faceHx = textureLod(tFaceRelief, faceUv + vec2(faceStep, 0.0), faceReliefLod).r - textureLod(tFaceRelief, faceUv - vec2(faceStep, 0.0), faceReliefLod).r;
          float faceHy = textureLod(tFaceRelief, faceUv + vec2(0.0, faceStep), faceReliefLod).r - textureLod(tFaceRelief, faceUv - vec2(0.0, faceStep), faceReliefLod).r;
          vec3 faceTipped = t - (uFaceRight * faceHx + uFaceUp * faceHy) * (2.4 * faceMask / max(uFace.y, 0.05));
          faceTipped *= inversesqrt(max(dot(faceTipped, faceTipped), 1e-6));
          // Back to view space: the body's rotation, transposed.
          faceNormal = faceTipped * uBody;
        }
        float cloud = fbm3Filtered(tcs * vec3(3.2, 7.5, 3.2) + vec3(uTime * 0.006, 0.0, 0.0), footprint * 7.5);
        float fluff = footprint * 7.5 * 0.5;
        cloud = smoothstep(uWorldA.y - fluff, uWorldA.y + 0.22 + fluff, cloud);

        // A city from pole to pole: its blocks show by day as a grid.
        if (settled > 0.9) {
          vec3 grid = t * 90.0;
          vec3 blocks = abs(fract(grid) - 0.5);
          float spread = footprint * 90.0;
          float street = 1.0 - smoothstep(0.0, max(0.08, spread * 1.5), 0.5 - max(max(blocks.x, blocks.y), blocks.z));
          albedo *= 1.0 - 0.3 * street * land * (1.0 - smoothstep(0.15, 0.4, spread));
        }
        // Polar caps, reaching toward the equator with the world's cold.
        float ice = smoothstep(1.02 - uWorldB.x, 1.1 - uWorldB.x, abs(t.y) + 0.12 * (fbm3Filtered(ts * 6.0, footprint * 6.0) - 0.5)) * step(0.001, uWorldB.x);
        albedo = mix(albedo, vec3(0.86, 0.93, 1.0), ice);
        land = max(land, ice);
        // A gas giant: belts and zones sheared by turbulence, turning with the faster deck.
        if (uWorldB.z > 0.5) {
          float turbulence = fbm3Filtered(tcs * vec3(3.0, 9.0, 3.0), footprint * 9.0);
          float belt = 0.5 + 0.5 * sin(t.y * 11.0 + (turbulence - 0.5) * 3.2);
          float fine = 0.5 + 0.5 * sin(t.y * 37.0 + turbulence * 7.0) * (1.0 - smoothstep(0.15, 0.4, footprint * 37.0));
          albedo = mix(mix(uLowland, uLand, belt), uHighland, fine * 0.35);
          vec2 storm = vec2(atan(tc.x, tc.z) - 0.6, (t.y + 0.28) * 3.0);
          float eye = exp(-dot(storm, storm) * 9.0);
          albedo = mix(albedo, uCloud, eye * 0.8);
          land = 1.0;
          cloud = 0.0;
        }
        albedo = mix(albedo, uCloud, cloud * 0.85);

        float ndl = dot(faceNormal, sun); // [r3:howard] n, or the face's relief
        float day = smoothstep(-0.06, 0.3, ndl);
        // The sunlight that reaches the ground has crossed the air, reddening toward the terminator.
        vec3 sunlight = uSunColor * sunlightAt(n * 1.0005, sun);
        vec3 lit = albedo * max(ndl, 0.0) * sunlight * 1.35;

        // The sun's glint on open water, strongest where the lit crescent meets the limb.
        vec3 h = sun + vec3(0.0, 0.0, 1.0);
        float hl = length(h);
        h = hl > 1e-4 ? h / hl : vec3(0.0, 0.0, 1.0);
        float water = (1.0 - land) * (1.0 - cloud) * (1.0 - uWorldB.z);
        // Only on real water: a dry world's basins, an undercity or a lava plain would sparkle as
        // their edges roll through the highlight.
        float glint = pow(max(dot(n, h), 0.0), 120.0) * 1.8 + pow(max(dot(n, h), 0.0), 20.0) * 0.1;
        lit += sunlight * glint * water * day * uWorldC.x;
        // [r3:howard] Skin's sheen, soft and broad.
        lit += sunlight * pow(max(dot(faceNormal, h), 0.0), 22.0) * 0.1 * faceMask * day;

        // The night side: the planet's own dark teal, with its continents and cloud lit faintly by
        // the cyan nebula above, and the cities of the populous land glittering, so the turning
        // shows on the dark as well as in the crescent. The lights fade where the limb would
        // squeeze them thinner than a pixel.
        vec3 nebulaLight = mix(vec3(0.6, 0.66, 0.78), uAccent, 0.3) * 0.2 * max(dot(n, vec3(0.2, 0.75, 0.63)), 0.0);
        vec3 night = uNight * (0.35 + 0.3 * n.y) + albedo * nebulaLight;
        float populous = settled > 0.9 ? 1.0 : smoothstep(0.62 - 0.3 * settled, 0.72 - 0.3 * settled, fbm3Filtered(ts * 5.0 + 11.0, footprint * 5.0));
        float habitable = mix(land * (1.0 - ice), 1.0, uWorldB.w) * (1.0 - uWorldB.z);
        float cities = cityLights(t, 0.3 + 0.5 * settled, footprint * 55.0) * habitable * populous * step(0.001, settled);
        cities *= (1.0 - 0.85 * cloud) * smoothstep(0.06, 0.3, z);
        cities *= 1.0 - 0.8 * faceMask; // [r3:howard] the face stays dark at night, mostly
        night += uCity * cities * 1.25;
        night += albedo * faceMask * 0.07; // [r3:howard] it can be seen in the dark, just
        vec3 surface = mix(night, lit, day);

        // Lava: rifts that glow by day and night alike.
        if (uWorldB.y > 0.0) {
          float rift = 1.0 - abs(2.0 * fbm3Filtered(ts * 5.5 * scale + 7.0, footprint * 5.5 * scale) - 1.0);
          float molten = uWorldB.y * (smoothstep(0.94, 0.995, rift) + 0.12 * smoothstep(0.8, 0.95, rift)) * (1.0 - 0.7 * cloud);
          surface += vec3(1.0, 0.24, 0.03) * molten * (1.5 + 0.5 * sin(uTime * 1.3 + rift * 20.0));
        }

        float solid = 1.0;
        #if VISTA == 8
          vec4 station = deathStar(n, t, sun, footprint, uVistaParams.x > 0.5);
          surface = station.rgb;
          solid = station.a;
        #endif
        col = mix(col, surface, onPlanet * solid);
      }

      // The air over it all, the ground and the stars behind the limb alike. Then the site's cyan
      // line on the edge.
      vec3 gathered;
      vec3 through;
      scatter(q, r, sun, gathered, through);
      col = col * through + gathered;
      float line = exp(-abs(r - 1.0) * radius / (1.1 * uRatio)) * (abs(uVista - 8.0) < 0.5 ? 0.0 : 1.0);
      col += uAccent * line * (0.2 + 0.9 * airLit + 0.6 * mie);

      // Aurora over a cold world's night side: curtains along the limb, green at their feet and
      // violet above, drifting.
      if (uWorldC.y > 0.0) {
        float around = atan(limbDir.x, limbDir.y);
        float curtain = 0.5 + 0.5 * sin(around * 26.0 + fbm2(vec2(around * 5.0 + uSeed.x, uTime * 0.12)) * 9.0 + uTime * 0.35);
        curtain *= curtain * curtain;
        float h = (r - 1.0) / airHeight;
        float profile = smoothstep(-0.4, 0.3, h) * exp(-max(h - 0.3, 0.0) * 1.6);
        vec3 glow = mix(vec3(0.15, 1.0, 0.5), vec3(0.6, 0.3, 1.0), smoothstep(0.4, 2.2, h));
        float away = 1.0 - smoothstep(-0.35, 0.1, limbDir.x - sunFlat.x);
        col += glow * curtain * profile * away * uWorldC.y * 0.4;
      }
    }

    // Rings: the plane through the planet's centre square to uRingNormal, met along the view.
    // They hide behind the planet's disc, cross in front of it on the near side, and fall into
    // its shadow where the sun is behind it.
    if (uWorldC.z > 0.5 && abs(uRingNormal.z) > 0.05) {
      float rz = -(q.x * uRingNormal.x + q.y * uRingNormal.y) / uRingNormal.z;
      vec3 rp = vec3(q, rz);
      float rr = length(rp);
      if (rr > 1.1 && rr < 1.48) {
        float u = (rr - 1.1) / 0.38;
        float ringlets = smoothstep(0.35, 0.75, 0.5 + 0.5 * sin(u * 19.0 + uRingSeed) * sin(u * 7.0 + uRingSeed * 2.0));
        float grain = (0.35 + 0.65 * ringlets) * (0.85 + 0.15 * sin(rr * 300.0 + uRingSeed * 3.0));
        float gap = smoothstep(0.015, 0.03, abs(u - (0.55 + 0.1 * fract(uRingSeed))));
        float density = smoothstep(0.0, 0.05, u) * (1.0 - smoothstep(0.88, 1.0, u)) * gap * grain;
        float hidden = r < 1.0 && rz < 0.0 ? 1.0 : 0.0;
        float toward = dot(rp, sun);
        float shadow = toward < 0.0 ? 1.0 - smoothstep(0.96, 1.04, length(rp - sun * toward)) : 0.0;
        vec3 ringLight = uRingColor * uSunColor * (0.2 + 0.8 * (1.0 - shadow)) * (0.55 + 0.6 * pow(max(-sun.z, 0.0), 2.0));
        col = mix(col, ringLight, density * 0.42 * (1.0 - hidden));
      }
    }

    #endif

    // The other backdrops, each compiled only into its own variant of this shader.
    #if VISTA == 9
      col = heatDeath(px, col);
    #elif VISTA == 1
      col = solarSystem(px, col);
    #elif VISTA == 2
      col = binary(px, col);
    #elif VISTA == 3
      col += starHalo(px, uBodyA, uColourA, uVistaParams.x);
      vec4 face = starFace(px, uBodyA, uColourA, uVistaParams.x);
      col = mix(col, face.rgb, face.a);
    #elif VISTA == 4
      col = dwarf(px, col);
    #elif VISTA == 5 || VISTA == 6
      bool lensed;
      vec3 bent = blackHole(px, col, lensed);
      if (lensed) col = bent;
      #if VISTA == 6
        col += jets(px);
      #endif
    #endif

    // In hyperspace the planet is left behind, and a tunnel of blue light streams past.
    col = mix(sky, col, uHyper.y);
    if (uHyper.z > 0.001) {
      vec2 d = (px - uHyperAt) / uRatio;
      float around = atan(d.y, d.x);
      float streaks = pow(noise2(vec2(around * 38.0, uTime * 0.7)), 5.0) + 0.4 * pow(noise2(vec2(around * 91.0, uTime * 1.3 + 7.0)), 7.0);
      float outward = smoothstep(20.0, 420.0, length(d));
      col += vec3(0.45, 0.72, 1.0) * streaks * outward * uHyper.z * 1.6 + vec3(0.05, 0.1, 0.2) * uHyper.z * outward;
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
    vec3 n = vNormal * inversesqrt(max(dot(vNormal, vNormal), 1e-8));
    vec3 v = uCamera - vWorld;
    float vl = length(v);
    v = vl > 1e-5 ? v / vl : vec3(0.0, 0.0, 1.0);
    if (dot(n, v) < 0.0) n = -n;
    vec3 r = reflect(-v, n);
    float facing = max(dot(n, v), 0.0);
    float fresnel = 0.06 + 0.94 * pow(max(1.0 - facing, 0.0), 5.0);

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
    col += uAccent * pow(max(1.0 - facing, 0.0), 3.0) * 0.4;
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
  uniform vec3 uPlanetPx;    // the planet's centre and radius, device pixels
  uniform vec2 uFlashPx;     // a ship's hyperspace flash, device pixels
  uniform float uFlash;
  uniform float uFlashSize;
  uniform float uWhite;      // the jump's flash, over everything
  uniform float uSensor;     // [r3:gunnery] the tactical scope: 0 off, 1 on
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
    color += (scrub(texture2D(tBloomNear, vUv).rgb) * 0.8 + scrub(texture2D(tBloomFar, vUv).rgb) * 0.4) * (1.0 - 0.85 * uSensor);
    // [r3:gunnery] Under the scope the sky goes dim and monochrome, on a faint grid.
    float sensed = dot(color, vec3(0.2126, 0.7152, 0.0722));
    color = mix(color, uAccent * sensed * 0.55 + vec3(0.004, 0.008, 0.012), uSensor * 0.8);
    vec2 cell = abs(fract(gl_FragCoord.xy / (48.0 * uRatio)) - 0.5);
    color += uAccent * (1.0 - smoothstep(0.0, 0.012, 0.5 - max(cell.x, cell.y))) * 0.05 * uSensor;

    vec2 d = (gl_FragCoord.xy - uSunPx) / uRatio;
    vec3 sun = fourPoint(d, 42.0, 0.9, 4.0);
    vec3 wide = fourPoint(d, 20.0, 3.5, 20.0);
    float streak = exp(-abs(d.y) / 1.4) * tail(abs(d.x), 150.0);
    float ring = exp(-pow(abs(length(d) - 64.0) / 5.0, 2.0)) * 0.04;
    vec3 flare = uSunColor * (sun.x * 0.9 + sun.y * 1.6 + wide.x * 0.12 + wide.y * 0.22) + mix(uAccent, uSunColor, 0.4) * (streak * 0.22 + ring);
    float overPlanet = 1.0 - smoothstep(uPlanetPx.z - 2.0, uPlanetPx.z + 2.0, length(gl_FragCoord.xy - uPlanetPx.xy));
    color += flare * uSunShow * (1.0 - 0.65 * overPlanet) * (1.0 - 0.7 * uSensor);
    vec2 d2 = (gl_FragCoord.xy - uSun2Px) / uRatio;
    vec3 second = fourPoint(d2, 30.0, 0.9, 3.0);
    vec3 secondWide = fourPoint(d2, 14.0, 3.0, 14.0);
    color += vec3(1.0, 0.78, 0.55) * (second.x * 0.8 + second.y * 1.4 + secondWide.y * 0.25) * uSun2Show * (1.0 - 0.65 * overPlanet);

    // A ship entering or leaving hyperspace: a hard white star, a halo and a ring blown outward.
    vec2 fd = (gl_FragCoord.xy - uFlashPx) / (uRatio * max(uFlashSize, 0.1));
    vec3 hyper = fourPoint(fd, 90.0, 1.2, 8.0);
    float blast = exp(-pow(abs(length(fd) - 30.0 * (1.5 - uFlash)) / 3.5, 2.0));
    color += vec3(0.75, 0.9, 1.0) * (hyper.x * 1.6 + hyper.y * 3.0 + blast * 0.5) * uFlash;

    vec2 g = (gl_FragCoord.xy - uGlintPx) / uRatio;
    vec3 glint = fourPoint(g, 38.0, 0.9, 3.0);
    color += vec3(0.9, 1.0, 1.0) * (glint.x * 1.4 + glint.y * 2.5) * uGlint;


    vec2 v = vUv - 0.5;
    color *= 1.0 - dot(v, v) * 0.7;
    color = aces(color * 1.05);
    color = pow(max(color, vec3(0.0)), vec3(1.0 / 2.2));
    color = mix(color, vec3(0.92, 0.97, 1.0), uWhite);
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

// The world's air, as scattering coefficients: its molecules scatter each channel in proportion to
// the air colour r3-worlds.js gives it, strongest in its dominant channel (for a blue-aired world,
// much as Earth's air does). How strongly, how dusty and how deep come from the world's ranges,
// picked within for this visit.
function atmosphereOf(world) {
  const air = new THREE.Color(world.air).convertSRGBToLinear();
  const strongest = Math.max(air.r, air.g, air.b, 1e-3);
  const beta = new THREE.Vector3(air.r, air.g, air.b).divideScalar(strongest).multiplyScalar(12 * world.scatter).addScalar(0.3);
  const rayleighHeight = 0.011 * world.thickness;
  return {
    uBetaR: { value: beta },
    uBetaM: { value: 1.3 * world.dust },
    uAirShape: { value: new THREE.Vector3(rayleighHeight, 0.0035 * Math.sqrt(world.thickness), 1 + rayleighHeight * 5.5) },
  };
}

// How much a world's lowland is open water, from how blue it is: none on a gas giant or a city
// from pole to pole, whatever colour their lowland.
function wetness(world) {
  if (world.bands || world.cities > 0.9) return 0;
  const red = parseInt(world.lowland.slice(1, 3), 16);
  const blue = parseInt(world.lowland.slice(5, 7), 16);
  return THREE.MathUtils.clamp(((blue - red) / 255) * 4, 0, 1);
}

function fullscreenMaterial(fragmentShader, uniforms) {
  return new THREE.ShaderMaterial({ vertexShader: FULLSCREEN_VERTEX, fragmentShader, uniforms, depthTest: false, depthWrite: false });
}

function start(hero, art) {
  // [r3:stage] The simulation has a band of its own between the text and the facts (brand.sass): every
  // pointer and screen coordinate is measured on it, and nothing else of the page sits over it.
  const stage = art || hero;
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
  // A jump to hyperspace swaps the world for another (applyWorld, below), updating everything
  // that depends on it in place.
  let world = pickWorld();
  // What lies behind: a planet, most visits, or one of the other backdrops (r3-vistas.js). A
  // shipyard orbits its own world.
  let vista = pickVista(world.random);
  if (world.face) vista = { kind: 'planet', index: 0, seed: 0 }; // [r3:howard] it only happens to a planet
  if (vista.world) world = pickWorld({ name: vista.world });
  const planetLike = () => vista.kind === 'planet' || vista.kind === 'shipyard' || vista.kind === 'deathStar';
  let systemWorlds = [];
  const worldColor = (hex) => new THREE.Color(hex).convertSRGBToLinear();
  const air = new THREE.Color();
  // Which world it is, read out small in the corner like a survey scanner's. A click on it jumps
  // to another.
  const survey = document.createElement('p');
  survey.className = 'r3-survey';
  survey.setAttribute('aria-hidden', 'true');
  survey.title = 'Jump to hyperspace';
  hero.append(survey); // [r3:stage] in the band above the stage, under the facts (brand.sass)
  function showSurvey() {
    survey.replaceChildren();
    const name = vista.kind === 'planet' ? world.name : vista.name;
    const note = vista.kind === 'planet' ? world.note : vista.kind === 'shipyard' ? `${world.name} · ${vista.note.split(' · ').pop()}` : vista.note;
    for (const [part, text] of [['tag', 'Survey'], ['name', name], ['note', note], ['jump', 'Jump ⟫'], ['sensors', 'Sensors']]) { // [r3:gunnery] sensors
      const span = document.createElement('span');
      span.className = `r3-survey__${part}`;
      span.textContent = text;
      survey.append(span);
    }
    decorateSurvey(survey, planetLike() ? world.name : name); // [r3:guide] the Game Guide's pages for this world
  }
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
    uViolet: { value: new THREE.Color() },
    uThird: { value: new THREE.Color() },
    uCloudsAt: { value: new THREE.Vector4() },
    uThirdAt: { value: new THREE.Vector2() },
    uSpread: { value: new THREE.Vector3(1, 1, 1) },
    uStrength: { value: new THREE.Vector3() },
    uNoise: { value: new THREE.Vector4(0, 0, 1, 1) },
    uFade: { value: 0 },
  });
  const skyUniforms = {
    tNebula: { value: nebulaTarget.texture },
    uTime: time,
    uRatio: { value: 1 },
    uDrift: drift,
    uScroll: scroll,
    uPlanet: { value: new THREE.Vector3(0, 0, 100) },
    uSunDir: { value: new THREE.Vector3(0, 0, -1) }, // [r3:navigator] view space: the orbit turns it
    uSunColor: { value: sunColor },
    uBody: { value: new THREE.Matrix3() },
    uCloudBody: { value: new THREE.Matrix3() },
    // [r3:howard]
    tFace: { value: null },
    tFaceRelief: { value: null },
    uFace: { value: new THREE.Vector4(0, 0.6, 0, 0) },
    uFaceRight: { value: new THREE.Vector3(1, 0, 0) },
    uFaceUp: { value: new THREE.Vector3(0, 1, 0) },
    uFaceCentre: { value: new THREE.Vector3(0, 0, 1) },
    uAccent: { value: accent },
    uNight: { value: night },
    uAir: { value: air },
    uLowland: { value: new THREE.Color() },
    uLand: { value: new THREE.Color() },
    uHighland: { value: new THREE.Color() },
    uCloud: { value: new THREE.Color() },
    uCity: { value: new THREE.Color() },
    uWorldA: { value: new THREE.Vector4() },
    uWorldB: { value: new THREE.Vector4() },
    uWorldC: { value: new THREE.Vector4() },
    uSeed: { value: new THREE.Vector3() },
    uRingNormal: { value: new THREE.Vector3(0, 1, 0) },
    uRingColor: { value: new THREE.Color() },
    uRingSeed: { value: 0 },
    uHyper: { value: new THREE.Vector3(0, 1, 0) },
    uVista: { value: 0 },
    uDying: { value: 0 },
    uBodyA: { value: new THREE.Vector4() },
    uBodyB: { value: new THREE.Vector4() },
    uVistaParams: { value: new THREE.Vector4() },
    uColourA: { value: new THREE.Vector3(1, 1, 1) },
    uColourB: { value: new THREE.Vector3(1, 1, 1) },
    uWorlds: { value: Array.from({ length: 8 }, () => new THREE.Vector4()) },
    uWorldTint: { value: Array.from({ length: 8 }, () => new THREE.Color()) },
    uWorldTintB: { value: Array.from({ length: 8 }, () => new THREE.Color()) },
    uOrbits: { value: Array.from({ length: 8 }, () => new THREE.Vector4(1, 1, 0, 0)) },
    uWorldCount: { value: 0 },
    uSkySize: { value: new THREE.Vector2(1, 1) },
    uHyperAt: { value: new THREE.Vector2() },
    uMoonA: { value: new THREE.Vector4(0, 0, 0, 0) },
    uMoonB: { value: new THREE.Vector4(0, 0, 0, 0) },
    uMoonColorA: { value: new THREE.Color() },
    uMoonColorB: { value: new THREE.Color() },
    uBetaR: { value: new THREE.Vector3() },
    uBetaM: { value: 1 },
    uAirShape: { value: new THREE.Vector3(0.011, 0.0035, 1.06) },
  };
  const ringNormal = skyUniforms.uRingNormal.value.clone();
  const skyMaterial = fullscreenMaterial(SKY_FRAGMENT, skyUniforms);
  // Compiled once per backdrop, with only that backdrop's code (see VISTA_GLSL).
  skyMaterial.defines = { VISTA: vista.index };

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
  // [r3:memory] What the viewer has done this session, which the fleets remember.
  const memory = createMemory();
  memory.record('survey', { world: world.name });
  let fleet = createFleet({ scene, camera, time, sunDir, sunColor, air, reduceMotion, overlay: art || hero, anisotropy: renderer.capabilities.getMaxAnisotropy(), random: world.random, memory });
  // [r3:director] rare encounters, built from the fleet's kit.
  let director = createDirector({ kit: fleet.kit, fleet, memory, random: world.random });
  director.onArrive({ world: world.name, vista: vista.kind });

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
    uPlanetPx: { value: new THREE.Vector3(0, 0, 1) },
    uFlashPx: { value: new THREE.Vector2(-1e4, -1e4) },
    uFlash: { value: 0 },
    uFlashSize: { value: 1 },
    uWhite: { value: 0 },
    uSensor: { value: 0 }, // [r3:gunnery]
  };
  const compositeMaterial = fullscreenMaterial(COMPOSITE_FRAGMENT, compositeUniforms);
  // [r3:environment] The backdrop as weather on the ships: flares, a black hole's pull, a binary's light.
  const environment = createEnvironment({ sky: skyUniforms, composite: compositeUniforms, sunDir, sunColor, reduceMotion });
  environment.onArrive({ kit: fleet.kit, vista });
  // [r3:gunnery] Hold Shift, or tap SENSORS, for the tactical scope.
  const sensors = createSensors({ hero, overlay: art || hero, survey, fleet: () => fleet, uniform: compositeUniforms.uSensor, reduceMotion, requestFrame });
  function blur(source, via, target, radius) {
    blurMaterial.uniforms.tInput.value = source.texture;
    blurMaterial.uniforms.uDirection.value.set(radius / source.width, 0);
    pass(blurMaterial, via);
    blurMaterial.uniforms.tInput.value = via.texture;
    blurMaterial.uniforms.uDirection.value.set(0, radius / via.height);
    pass(blurMaterial, target);
  }

  // Layout, on the stage: the whole of it is sky. On a phone the planet spans its foot.
  let width = 1;
  let height = 1;
  let ratio = 1;
  let quality = 1;
  let slowTime = 0;
  let fastTime = 0; // [r3:qa] how long frames have been comfortably quick, to win back quality
  let narrow = false;
  const jewelPx = { x: 0, y: 0, radius: 1 };
  let starPlaced = false;
  let perPixel = 1;
  // The star's drift: a steady 34 css pixels a second, on a diagonal picked at load, from a spot
  // picked at load.
  const starAngle = (Math.floor(Math.random() * 4) + 0.3 + 0.4 * Math.random()) * (Math.PI / 2);
  const starVelocity = { x: Math.cos(starAngle) * 34, y: Math.sin(starAngle) * 34 };
  const lastBounce = { x: -Infinity, y: -Infinity };
  const worldAxis = new THREE.Vector3(0, 0, 1);
  const alignAxis = new THREE.Matrix4();
  const spinMatrix = new THREE.Matrix4();
  const planet = { x: 0, y: 0, radius: 1 };
  let sunAngle = 0;
  let freeRegion = [0, 0, 1, 1];
  const tints = new Map();
  const tintOf = (hex) => {
    if (!tints.has(hex)) tints.set(hex, worldColor(hex));
    return tints.get(hex);
  };
  const anchor = new THREE.Vector3();
  let jewelScale = 1;

  function layout() {
    const bounds = stage.getBoundingClientRect();
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

    const textRight = 0; // [r3:stage] the text has its own band; nothing on the stage to keep clear of
    const shellRight = Math.min(width, width / 2 + 760);
    const free = shellRight - textRight;
    narrow = width < 761 || free < 360;
    hero.classList.toggle('r3-hero--corner', narrow);
    // The star is small now, a beacon over the planet and the ships. It starts anywhere in the
    // hero and drifts from there (see the render loop); a resize keeps it inside.
    jewelPx.radius = narrow ? Math.min(width * 0.085, 34) : THREE.MathUtils.clamp(height * 0.085, 30, 46);
    const margin = jewelPx.radius * 1.25;
    if (!starPlaced) {
      jewelPx.x = margin + Math.random() * Math.max(0, width - margin * 2);
      jewelPx.y = margin + Math.random() * Math.max(0, height - margin * 2);
      starPlaced = true;
    }
    jewelPx.x = THREE.MathUtils.clamp(jewelPx.x, margin, Math.max(margin, width - margin));
    jewelPx.y = THREE.MathUtils.clamp(jewelPx.y, margin, Math.max(margin, height - margin));
    if (narrow) {
      planet.radius = Math.max(width * 1.05, 420);
      planet.x = width * 0.62;
      planet.y = -planet.radius + height * 0.26; // [r3:stage] the stage is the phone's to itself
    } else {
      // The framing picked for this load (r3-worlds.js).
      const frame = world.frame;
      let crown;
      if (frame.kind === 'shoulder') {
        planet.radius = Math.max(width * 0.5, 640) * (0.9 + 0.3 * frame.size);
        planet.x = width + planet.radius * (0.02 + 0.2 * frame.at);
        const reach = planet.x - (textRight + 60);
        const highest = reach < planet.radius ? planet.radius - Math.sqrt(planet.radius * planet.radius - reach * reach) : height;
        crown = Math.min(height * (0.55 + 0.3 * frame.lift), highest);
      } else if (frame.kind === 'distant') {
        planet.radius = Math.max(width * 0.17, 230) * (0.85 + 0.35 * frame.size);
        planet.x = Math.max(textRight + planet.radius + 50, textRight + free * (0.5 + 0.15 * frame.at));
        crown = Math.min(height * (0.55 + 0.2 * frame.lift), height - 40);
      } else if (frame.kind === 'close') {
        planet.radius = Math.max(width * 0.9, 1100) * (0.9 + 0.3 * frame.size);
        planet.x = textRight + free * (0.45 + 0.2 * frame.at);
        crown = height * (0.22 + 0.12 * frame.lift); // [r3:stage] no text column for the limb to clear
      } else {
        planet.radius = Math.max(width * 0.36, 480) * (0.85 + 0.3 * frame.size);
        planet.x = textRight + free * (0.42 + 0.2 * frame.at);
        crown = height * (0.24 + 0.12 * frame.lift);
      }
      planet.y = -planet.radius + Math.max(crown, 40);
    }
    // The free sky, where a backdrop other than a planet stands: css pixels, y down.
    freeRegion = [narrow ? 18 : textRight + 50, 18, width - 18, height - 18]; // [r3:stage]
    if (!planetLike()) {
      planet.x = -1e5;
      planet.y = -1e5;
      planet.radius = 1;
    }
    skyUniforms.uSkySize.value.set(width * ratio, height * ratio);
    skyUniforms.uPlanet.value.set(planet.x * ratio, planet.y * ratio, planet.radius * ratio);
    // The sun rises at a point round the limb picked for this visit (r3-worlds.js): anywhere the
    // limb is in view, clear of the stage's edges.
    const candidates = [];
    for (let degree = 0; degree < 360; degree += 2) {
      const angle = (degree * Math.PI) / 180;
      const x = planet.x + Math.sin(angle) * planet.radius;
      const y = height - (planet.y + Math.cos(angle) * planet.radius);
      if (x < 40 || x > width - 40 || y < 30 || y > height - 16) continue;
      candidates.push(angle);
    }
    sunAngle = candidates.length ? candidates[Math.floor(world.sunAt * candidates.length) % candidates.length] : 0;
    // Small moons in the free sky above the planet.
    const skyLeft = narrow ? width * 0.55 : Math.max(textRight + 60, width * 0.5);
    [skyUniforms.uMoonA.value, skyUniforms.uMoonB.value].forEach((moonValue, i) => {
      const [a, b, c] = world.moonSeeds.slice(i * 3, i * 3 + 3);
      if (i >= Math.min(2, world.moonCount) || vista.kind !== 'planet') {
        moonValue.set(0, 0, 0, 0);
        return;
      }
      const moonRadius = (5 + a * 17) * (narrow ? 0.6 : 1);
      const x = skyLeft + b * Math.max(0, width - 30 - skyLeft);
      const crown = height - (planet.y + planet.radius);
      const y = THREE.MathUtils.clamp(height * (0.08 + c * 0.4), moonRadius + 8, Math.max(moonRadius + 8, crown - moonRadius - 20));
      moonValue.set(x * ratio, (height - y) * ratio, moonRadius * ratio, a);
    });

    fleet.layout({ width, height, free: textRight, narrow, ratio });
    // Hyperspace opens in the middle of the free sky.
    skyUniforms.uHyperAt.value.set((width / 2) * ratio, height * 0.5 * ratio); // [r3:stage] the stage's centre
    perPixel = (2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / height;
    jewelScale = jewelPx.radius * perPixel;
    anchor.set((jewelPx.x - width / 2) * perPixel, (height / 2 - jewelPx.y) * perPixel, 0);
    pivot.scale.setScalar(jewelScale);
  }

  // [r3:pilot] The jewel is the visitor's ship: r3-pilot.js flies it while it is steered, coasting or
  // leading a jump, and has the sky notice it.
  const hyperPoint = { x: 0, y: 0 };
  const pilot = createPilot({
    hero, stage, scene, camera, jewelPx, starVelocity, reduceMotion, overText, overJewel, requestFrame,
    getFleet: () => fleet,
    jumping: () => jump.active,
    accent,
    hyperCenter: () => {
      hyperPoint.x = skyUniforms.uHyperAt.value.x / ratio;
      hyperPoint.y = height - skyUniforms.uHyperAt.value.y / ratio;
      return hyperPoint;
    },
    onClick: () => {
      beginSpin();
      fleet.summon();
      requestFrame();
    },
  });

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
    const bounds = stage.getBoundingClientRect();
    // [r3:stage] Over the text or the facts, the pointer has left the sky.
    const offStage = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    pointer.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1, -((event.clientY - bounds.top) / bounds.height) * 2 + 1);
    pointerActive = !offStage;
    lastPointer = performance.now();
    if (reduceMotion) requestFrame();
  }
  hero.addEventListener('pointermove', onPointer, { passive: true });
  hero.addEventListener('pointerleave', () => {
    pointerActive = false;
    if (reduceMotion) requestFrame();
  }, { passive: true });
  hero.addEventListener('pointerdown', (event) => {
    const bounds = stage.getBoundingClientRect();
    if (!forArt(event, { x: event.clientX - bounds.left, y: event.clientY - bounds.top })) {
      event.r3Taken = true;
      return;
    }
    // [r3:pilot] A press on the jewel is the pilot's, before anything behind it: a click calls the
    // fleet, a drag flies it. [r3:qa] It came after the ships, so a fighter crossing under the
    // jewel was shot instead.
    if (pilot.press(event, { x: event.clientX - bounds.left, y: event.clientY - bounds.top })) {
      event.r3Taken = true;
      return;
    }
    // A ship under the pointer is shot down, before the star or the planet take the click, and a
    // world of a solar system is jumped to.
    if (fleet.shoot(event.clientX - bounds.left, event.clientY - bounds.top)) {
      event.r3Taken = true;
      requestFrame();
      return;
    }
    if (director.shoot(event.clientX - bounds.left, event.clientY - bounds.top)) { // [r3:director]
      event.r3Taken = true;
      requestFrame();
      return;
    }
    if (vista.kind === 'heatDeath' && !vista.bang && !jump.active) {
      event.r3Taken = true;
      vista.bang = { x: event.clientX - bounds.left, y: event.clientY - bounds.top, born: time.value };
      requestFrame();
      return;
    }
    const body = systemWorldAt({ x: event.clientX - bounds.left, y: event.clientY - bounds.top });
    if (body) {
      event.r3Taken = true;
      beginJump(body.world.name);
      return;
    }
  }, { passive: true });

  // Drag the planet, as the moon on the l3i site drags: the surface follows the pointer and keeps
  // turning after release, the spin decaying, while the planet's own turn carries on beneath. A
  // drag along the arc rolls it about its axis; a drag up or down tips it over the limb.
  const turned = new THREE.Quaternion();
  const nudge = new THREE.Quaternion();
  const dragInverse = new THREE.Matrix4();
  const spinAxisView = worldAxis.clone();
  const axisX = new THREE.Vector3(1, 0, 0);
  const planetDrag = { active: false, id: -1, lastX: 0, lastY: 0, vx: 0, vy: 0 };
  function heroPoint(event) {
    const bounds = stage.getBoundingClientRect();
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  }
  function overJewel(point) {
    const dx = point.x - jewelPx.x;
    const dy = point.y - jewelPx.y;
    return dx * dx + dy * dy <= (jewelPx.radius * 1.6) ** 2;
  }
  // [r3:stage] Whether a point is off the stage: the text and the facts have bands of their own, so
  // a pointer anywhere on the stage is the simulation's, and anywhere else is the page's.
  function overText(point) {
    return point.x < 0 || point.y < 0 || point.x > width || point.y > height;
  }
  // What a pointer event may do to the art: nothing from a secondary button, a link, the survey
  // readout (which has its own click), or anything off the stage.
  function forArt(event, point) {
    if (!event.isPrimary || event.button > 0) return false;
    if (event.target.closest('a, button, input, summary, [role="button"], .r3-survey')) return false;
    return !overText(point);
  }

  // A world of a solar system under the pointer: its name shows beside it, and a click jumps there.
  const waypoint = document.createElement('span');
  waypoint.className = 'r3-waypoint';
  waypoint.setAttribute('aria-hidden', 'true');
  (art || hero).append(waypoint);
  function systemWorldAt(point) {
    if (jump.active) return null;
    return systemWorlds.find((body) => (body.x - point.x) ** 2 + (body.y - point.y) ** 2 < (body.radius + 8) ** 2) || null;
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
    if (event.r3Taken) return;
    const point = heroPoint(event);
    if (!forArt(event, point) || overJewel(point) || !overPlanet(point)) return;
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
      const onLink = event.target.closest(interactive) || event.target.closest('.r3-survey') || overText(point);
      const body = onLink ? null : systemWorldAt(point);
      hero.style.cursor = onLink ? '' : fleet.aimed(point.x, point.y) || director.aimed(point.x, point.y) /* [r3:director] */ ? 'crosshair' : body || overJewel(point) ? 'pointer' : overPlanet(point) ? 'grab' : '';
      waypoint.classList.toggle('is-shown', !!body);
      if (body) {
        waypoint.textContent = `${body.world.name} ⟫`;
        waypoint.style.transform = `translate(${Math.round(body.x + body.radius + 8)}px, ${Math.round(body.y - 8)}px)`;
      }
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

  // [r3:navigator] Dragging empty sky orbits the view about the planet (r3-camera.js): only a
  // press on the stage that nothing else took: off the jewel, the planet, the ships and the worlds.
  const orbit = createOrbit({
    hero,
    stage, // [r3:stage]
    reduceMotion,
    onMove: () => { if (reduceMotion) requestFrame(); },
    isFree: (point, event) => !event.r3Taken && !planetDrag.active && forArt(event, point) && !overText(point)
      && !overJewel(point) && !overPlanet(point) && !fleet.aimed(point.x, point.y) && !systemWorldAt(point)
      && !event.target.closest(interactive) && !event.target.closest('.r3-survey'),
  });
  const orbitFocus = new THREE.Vector3();
  const orbitPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const orbitNdc = new THREE.Vector2();
  const orbitSun = new THREE.Vector3();

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
        fastTime = -8; // [r3:qa] after stepping down, twice as long before stepping up again
        layout();
      }
      // [r3:qa] One hitch, a shader compiling in a jump say, used to cost the visit its resolution for
      // good. Eight seconds of quick frames now wins a step back.
      fastTime = rawDt < 1 / 50 ? fastTime + rawDt : Math.min(fastTime, 0);
      if (fastTime > 8 && quality < 1) {
        quality = Math.min(1, quality + 0.1);
        fastTime = 0;
        layout();
      }
    }
    if (!reduceMotion) {
      time.value += dt;
      clockTime += dt;
    }
    updateJump(dt);
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
    // [r3:navigator] Turning the view pans the stars and clouds a hero's width per field of view.
    orbit.update(reduceMotion ? 0 : dt);
    if (orbit.turned) {
      const across = width / Math.max(0.2, 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect));
      scroll.value.x -= orbit.state.yaw * across;
      scroll.value.y += orbit.state.pitch * across;
    }

    // The sun rises and sinks on the limb over about ninety seconds: a diamond ring at its lowest.
    const rise = 0.5 + 0.5 * Math.sin(t * 0.07 - 0.6);
    const sunAt = sunAngle + 0.025 * Math.sin(t * 0.021);
    const along = new THREE.Vector2(Math.sin(sunAt), Math.cos(sunAt));
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
    spinMatrix.makeRotationY(t * PLANET_SPIN * world.spin + world.phase).multiply(alignAxis).multiply(dragInverse).multiply(orbit.matrix); // [r3:navigator]
    skyUniforms.uBody.value.setFromMatrix4(spinMatrix);
    if (world.face) placeFace(dt); // [r3:howard]
    skyUniforms.uRingNormal.value.copy(ringNormal).applyQuaternion(turned).applyQuaternion(orbit.inverse); // [r3:navigator]
    spinMatrix.makeRotationY(t * PLANET_SPIN * world.spin * 1.35 + world.phase * 1.7 + 0.8).multiply(alignAxis).multiply(dragInverse).multiply(orbit.matrix); // [r3:navigator]
    skyUniforms.uCloudBody.value.setFromMatrix4(spinMatrix);
    const lift = planet.radius * (1.0 + 0.004 + 0.02 * rise);
    const sunX = planet.x - drift.value.x * 26 + along.x * lift;
    const sunY = planet.y - drift.value.y * 26 + along.y * lift;
    compositeUniforms.uSunPx.value.set(sunX * ratio, sunY * ratio);
    compositeUniforms.uPlanetPx.value.set((planet.x - drift.value.x * 26) * ratio, (planet.y - drift.value.y * 26) * ratio, planet.radius * ratio);
    compositeUniforms.uSunShow.value = (0.25 + 0.75 * Math.min(1, rise * 1.6 + 0.2)) * (narrow ? 0.55 : 1);
    // [r3:navigator] Turned, the sun moves round the limb, and hides once it is behind the viewer.
    if (orbit.turned) {
      orbit.toView(sunDir.value, orbitSun);
      const reach = Math.hypot(orbitSun.x, orbitSun.y);
      if (reach > 1e-4) {
        compositeUniforms.uSunPx.value.set((planet.x - drift.value.x * 26 + (orbitSun.x / reach) * lift) * ratio, (planet.y - drift.value.y * 26 + (orbitSun.y / reach) * lift) * ratio);
      }
      compositeUniforms.uSunShow.value *= THREE.MathUtils.clamp((0.15 - orbitSun.z) / 0.35, 0, 1);
    }
    // A twin-sun world's second sun trails the first along the limb, lower and smaller.
    if (world.suns > 1) {
      const trail = 0.12;
      const second = new THREE.Vector2(along.x * Math.cos(-trail) - along.y * Math.sin(-trail), along.x * Math.sin(-trail) + along.y * Math.cos(-trail));
      const lift2 = planet.radius * (1.0 + 0.002 + 0.012 * rise);
      compositeUniforms.uSun2Px.value.set((planet.x - drift.value.x * 26 + second.x * lift2) * ratio, (planet.y - drift.value.y * 26 + second.y * lift2) * ratio);
      compositeUniforms.uSun2Show.value = compositeUniforms.uSunShow.value * 0.8;
    } else {
      compositeUniforms.uSun2Show.value = 0;
    }
    if (planetLike()) environment.place(null); // [r3:environment]
    if (!planetLike()) {
      // Another backdrop: its bodies placed for this moment, and its light lighting the scene.
      const placed = placeVista(vista, { width, height, ratio, region: freeRegion, time: t, worlds: WORLDS });
      environment.place(placed); // [r3:environment]
      const sky = skyUniforms;
      sky.uBodyA.value.set(...placed.a);
      sky.uBodyB.value.set(...placed.b);
      sky.uVistaParams.value.set(...placed.params);
      sky.uColourA.value.set(...placed.colourA);
      sky.uColourB.value.set(...placed.colourB);
      sky.uWorldCount.value = placed.planets.length;
      placed.planets.forEach((body, i) => {
        sky.uWorlds.value[i].set(body.x * ratio, (height - body.y) * ratio, body.radius * ratio, body.behind ? 1 : 0);
        sky.uOrbits.value[i].set(body.orbit[0], body.orbit[1], 0, 0);
        sky.uWorldTint.value[i].copy(tintOf(body.world.land));
        sky.uWorldTintB.value[i].copy(tintOf(body.world.bands ? body.world.highland : body.world.lowland));
      });
      systemWorlds = placed.planets;
      const dying = vista.kind === 'heatDeath' ? placed.params[0] : 0;
      sky.uDying.value = dying;
      nebulaMaterial.uniforms.uFade.value = dying;
      if (vista.kind === 'heatDeath' && vista.bang && t - vista.bang.born > 3.2) beginJump();
      const [lightX, lightY] = placed.light;
      sunDir.value.set((lightX - width * 0.62) / height, -(lightY - height * 0.45) / height, -0.75).normalize();
      compositeUniforms.uSunPx.value.set(lightX * ratio, (height - lightY) * ratio);
      compositeUniforms.uSunShow.value = { dwarf: 0.45, binary: 0.35, system: 0.5 }[vista.kind] || 0;
      compositeUniforms.uPlanetPx.value.set(-1e5, -1e5, 1);
    }

    // The star drifts round the hero and bounces off its edges like an old screensaver, the point
    // that strikes a wall flashing. A hit square in a corner spins it and calls the fleet.
    const piloted = pilot.fly(dt, width, height); // [r3:pilot] steered, coasting or leading a jump
    if (piloted) anchor.set((jewelPx.x - width / 2) * perPixel, (height / 2 - jewelPx.y) * perPixel, 0);
    if (!reduceMotion && !piloted) {
      const margin = jewelPx.radius * 1.25;
      jewelPx.x += starVelocity.x * dt;
      jewelPx.y += starVelocity.y * dt;
      let wall = -1;
      if (jewelPx.x < margin || jewelPx.x > width - margin) {
        wall = jewelPx.x < margin ? 3 : 1;
        jewelPx.x = THREE.MathUtils.clamp(jewelPx.x, margin, width - margin);
        starVelocity.x = -starVelocity.x;
        lastBounce.x = clockTime;
      }
      if (jewelPx.y < margin || jewelPx.y > height - margin) {
        wall = jewelPx.y < margin ? 0 : 2;
        jewelPx.y = THREE.MathUtils.clamp(jewelPx.y, margin, height - margin);
        starVelocity.y = -starVelocity.y;
        lastBounce.y = clockTime;
      }
      if (wall >= 0) {
        sparkleTip = wall;
        sparkleStart = clockTime;
        if (Math.abs(lastBounce.x - lastBounce.y) < 0.2) {
          beginSpin();
          fleet.summon();
        }
      }
      anchor.set((jewelPx.x - width / 2) * perPixel, (height / 2 - jewelPx.y) * perPixel, 0);
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
    jewel.rotation.z = roll + Math.sin(t * 0.17) * 0.05 + pilot.bank; // [r3:pilot] banks into turns
    pivot.rotation.x += pilot.lean.x;
    pivot.rotation.y += pilot.lean.y;
    pilot.update(dt, pivot.position, jewelScale); // [r3:pilot] engine, trail, shield, hails

    // The camera drifts, as if on a slow orbit of its own.
    camera.position.set(Math.sin(t * 0.05) * 0.35, Math.sin(t * 0.07) * 0.18, 10);
    camera.lookAt(0, 0, 0);
    // [r3:navigator] The orbit turns the camera rigidly about the world under the planet's centre,
    // which so keeps its place on screen, and the jewel with it, so the logo stays put too.
    if (orbit.turned) {
      const focusX = planetLike() ? planet.x - drift.value.x * 26 : (freeRegion[0] + freeRegion[2]) / 2;
      const focusY = planetLike() ? height - (planet.y - drift.value.y * 26) : (freeRegion[1] + freeRegion[3]) / 2;
      orbitNdc.set((focusX / width) * 2 - 1, 1 - (focusY / height) * 2);
      camera.updateMatrixWorld();
      raycaster.setFromCamera(orbitNdc, camera);
      if (!raycaster.ray.intersectPlane(orbitPlane, orbitFocus)) orbitFocus.set(0, 0, 0);
      orbit.carry(camera, orbitFocus);
      orbit.carry(pivot, orbitFocus);
      camera.updateMatrixWorld();
    }
    skyUniforms.uSunDir.value.copy(sunDir.value).applyQuaternion(orbit.inverse); // [r3:navigator]
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

    // The ships, and any hyperspace flash they make. They hide behind the planet where the sky
    // draws it.
    fleet.planet((planet.x - drift.value.x * 26) * ratio, (planet.y - drift.value.y * 26) * ratio, planet.radius * ratio);
    fleet.player(jewelPx.x, jewelPx.y); // [r3:memory]
    director.update(reduceMotion ? 0 : dt); // [r3:director]
    environment.update(reduceMotion ? 0 : dt, jump.active); // [r3:environment]
    const shipFlash = fleet.update(reduceMotion ? 0 : dt);
    sensors.update(reduceMotion ? 0 : dt); // [r3:gunnery]
    // An explosion shakes the camera for a moment.
    if (shipFlash.shake > 0) {
      camera.position.x += (Math.random() - 0.5) * shipFlash.shake * 0.16;
      camera.position.y += (Math.random() - 0.5) * shipFlash.shake * 0.12;
      camera.updateMatrixWorld();
    }
    compositeUniforms.uFlashPx.value.set(shipFlash.x * ratio, (height - shipFlash.y) * ratio);
    compositeUniforms.uFlash.value = shipFlash.strength;
    compositeUniforms.uFlashSize.value = shipFlash.size * (narrow ? 0.6 : 1);

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
    if (running || lost || !compiled) return;
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

  // The world: everything that depends on it, set in place, so a jump can swap it for another.
  // [r3:howard] The uncharted world's face: its textures load only when it happens, and it is
  // placed on the body where this framing shows the most of the disc, sized to fit.
  const faceState = { textures: null, strength: 0, placedFor: '' };
  const faceSample = new THREE.Vector3();
  const faceView = { centre: new THREE.Vector3(), up: new THREE.Vector3(), right: new THREE.Vector3() };
  function faceTextures() {
    if (faceState.textures) return faceState.textures;
    const loader = new THREE.TextureLoader();
    const load = (file) => loader.load(new URL(`../img/${file}`, import.meta.url).href, (texture) => { texture.userData.ready = true; });
    const albedo = load('r3-uncharted.webp');
    albedo.colorSpace = THREE.SRGBColorSpace;
    const relief = load('r3-uncharted-relief.webp');
    for (const texture of [albedo, relief]) {
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    }
    faceState.textures = { albedo, relief };
    return faceState.textures;
  }
  function placeFace(dt) {
    const key = `${planet.x}|${planet.y}|${planet.radius}|${width}|${height}`;
    if (key !== faceState.placedFor) {
      faceState.placedFor = key;
      // The visible disc: points of the stage on the planet, as normals.
      const centre = faceView.centre.set(0, 0, 0);
      const points = [];
      for (let i = 0; i <= 28; i++) {
        for (let j = 0; j <= 14; j++) {
          const x = (i / 28) * width;
          const yDown = (j / 14) * height;
          const qx = (x - planet.x) / planet.radius;
          const qy = (height - yDown - planet.y) / planet.radius;
          const r2 = qx * qx + qy * qy;
          if (r2 > 0.94) continue;
          faceSample.set(qx, qy, Math.sqrt(1 - r2));
          points.push(faceSample.clone());
          centre.add(faceSample);
        }
      }
      if (centre.lengthSq() < 1e-6) centre.set(0, 0.6, 0.8);
      centre.normalize();
      const up = faceView.up.set(0, 1, 0).addScaledVector(centre, -centre.y);
      if (up.lengthSq() < 1e-6) up.set(0, 0, -1);
      up.normalize();
      const right = faceView.right.crossVectors(up, centre).normalize();
      // What shows, measured across and up from there; the face is centred in it and fitted
      // inside, a little taller than wide, so it is never cut by the hero's edges.
      let left = 0;
      let rightmost = 0;
      let low = 0;
      let high = 0;
      for (const point of points) {
        const across = point.dot(right);
        const along = point.dot(up);
        left = Math.min(left, across);
        rightmost = Math.max(rightmost, across);
        low = Math.min(low, along);
        high = Math.max(high, along);
      }
      const midAcross = (left + rightmost) / 2;
      const midAlong = (low + high) / 2;
      centre.addScaledVector(right, midAcross).addScaledVector(up, midAlong).normalize();
      up.set(0, 1, 0).addScaledVector(centre, -centre.y);
      if (up.lengthSq() < 1e-6) up.set(0, 0, -1);
      up.normalize();
      right.crossVectors(up, centre).normalize();
      // Fitted inside what shows, so no edge of the stage cuts it; the head fills 88% of its
      // texture's height, which leaves a little room. A near-flat horizon shows only a band of the
      // disc: there the band's height sets the size, and the face sits a little below the band's
      // middle, since the limb above foreshortens it. [r3:stage]
      const thin = high - low < 0.45 * (rightmost - left);
      const size = thin
        ? THREE.MathUtils.clamp((high - low) / 2, 0.04, 0.9)
        : THREE.MathUtils.clamp(Math.min((rightmost - left) / 2, (high - low) / 2) * 1.04, 0.12, 0.9);
      if (thin) {
        centre.addScaledVector(up, -(high - low) * 0.03).normalize();
        up.set(0, 1, 0).addScaledVector(centre, -centre.y);
        if (up.lengthSq() < 1e-6) up.set(0, 0, -1);
        up.normalize();
        right.crossVectors(up, centre).normalize();
      }
      const body = skyUniforms.uBody.value;
      skyUniforms.uFaceCentre.value.copy(centre).applyMatrix3(body).normalize();
      skyUniforms.uFaceUp.value.copy(up).applyMatrix3(body).normalize();
      skyUniforms.uFaceRight.value.copy(right).applyMatrix3(body).normalize();
      skyUniforms.uFace.value.y = size;
    }
    const textures = faceTextures();
    skyUniforms.tFace.value = textures.albedo;
    skyUniforms.tFaceRelief.value = textures.relief;
    const ready = textures.albedo.userData.ready && textures.relief.userData.ready;
    faceState.strength = ready ? (reduceMotion ? 1 : Math.min(1, faceState.strength + dt * 0.6)) : 0;
    skyUniforms.uFace.value.x = faceState.strength;
    // The eyes, a little toward the pointer: too little to prove.
    skyUniforms.uFace.value.z = drift.value.x * 0.012;
    skyUniforms.uFace.value.w = drift.value.y * 0.006;
  }

  function applyWorld(next) {
    // [r3:howard] A face stays with its world.
    skyUniforms.uFace.value.x = 0;
    faceState.strength = 0;
    faceState.placedFor = '';
    world = next;
    air.copy(worldColor(world.air)).lerp(accent, 0.25).multiplyScalar(0.9);
    const nebula = nebulaMaterial.uniforms;
    nebula.uViolet.value.copy(violet).offsetHSL(world.sky.hue, 0, 0);
    nebula.uThird.value.copy(worldColor(world.air)).multiplyScalar(0.8);
    nebula.uCloudsAt.value.set(...world.sky.cyan, ...world.sky.violet);
    nebula.uThirdAt.value.set(...world.sky.third);
    nebula.uSpread.value.set(...world.sky.spread);
    nebula.uStrength.value.set(...world.sky.strength);
    nebula.uNoise.value.set(...world.sky.offset, world.sky.scale, world.sky.warp);
    const sky = skyUniforms;
    sky.uLowland.value.copy(worldColor(world.lowland));
    sky.uLand.value.copy(worldColor(world.land));
    sky.uHighland.value.copy(worldColor(world.highland));
    sky.uCloud.value.copy(worldColor(world.cloud));
    sky.uCity.value.copy(worldColor(world.city));
    sky.uWorldA.value.set(0.3 + 0.4 * world.sea, 0.78 - 0.38 * world.clouds, world.cities, world.scale);
    sky.uWorldB.value.set(world.ice, world.lava, world.bands, world.floating);
    sky.uWorldC.value.set(wetness(world), world.aurora, world.ringed ? 1 : 0, 0);
    sky.uSeed.value.set(...world.seed);
    ringNormal.set(world.ringTilt[0] * 0.5, 0.2 + world.ringTilt[1] * 0.3, 1).normalize();
    sky.uRingNormal.value.copy(ringNormal);
    sky.uRingColor.value.copy(worldColor(world.highland)).lerp(worldColor(world.cloud), 0.5).multiplyScalar(0.9);
    sky.uRingSeed.value = world.ringBands;
    sky.uMoonColorA.value.copy(worldColor('#9a948c')).lerp(worldColor('#c2ae92'), world.moonSeeds[0]);
    sky.uMoonColorB.value.copy(worldColor('#8c9096')).lerp(worldColor('#b8a8a0'), world.moonSeeds[3]);
    const atmosphere = atmosphereOf(world);
    sky.uBetaR.value.copy(atmosphere.uBetaR.value);
    sky.uBetaM.value = atmosphere.uBetaM.value;
    sky.uAirShape.value.copy(atmosphere.uAirShape.value);
    // The backdrop. The Death Star has no air, no sea, no rings and no aurora; the others take
    // their light from their own star.
    sky.uVista.value = vista.index;
    if (skyMaterial.defines.VISTA !== vista.index) {
      skyMaterial.defines.VISTA = vista.index;
      skyMaterial.needsUpdate = true;
    }
    sky.uVistaParams.value.set(vista.second ? 1 : 0, 0, 0, 0);
    sunColor.setRGB(1.0, 0.93, 0.82).multiplyScalar(1.6);
    if (vista.kind === 'deathStar') {
      sky.uBetaR.value.set(0, 0, 0);
      sky.uBetaM.value = 0;
      sky.uAirShape.value.z = 1.0;
      sky.uWorldC.value.set(0, 0, 0, 0);
    } else if (!planetLike()) {
      const colour = vista.colour || [1.2, 1.0, 0.8];
      const strongest = Math.max(...colour);
      sunColor.setRGB(colour[0] / strongest, colour[1] / strongest, colour[2] / strongest).multiplyScalar(1.5);
      air.copy(accent).multiplyScalar(0.55).add(new THREE.Color(...colour).multiplyScalar(0.25));
    }
    systemWorlds = [];
    sky.uDying.value = 0;
    nebulaMaterial.uniforms.uFade.value = 0;
    vista.born = time.value;
    worldAxis.set(world.tilt[0], world.tilt[1], 1).normalize();
    alignAxis.makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(worldAxis, new THREE.Vector3(0, 1, 0)));
    spinAxisView.copy(worldAxis);
    turned.identity();
    planetDrag.vx = 0;
    planetDrag.vy = 0;
    showSurvey();
    nebulaAge = Infinity;
  }

  // Hyperspace: every so often, or when the survey readout is clicked or the empty sky
  // double-clicked, the ships jump away, the stars stretch into streaks down a tunnel of light,
  // and under a flash the view drops out over another world, with another fleet. Under reduced
  // motion a click swaps the world at once and nothing jumps on its own.
  const jump = { active: false, age: 0, swapped: false, next: reduceMotion ? Infinity : 170 + Math.random() * 90, target: null, world: null, vista: null, warm: null };
  function beginJump(target = null) {
    if (jump.active) return;
    jump.target = typeof target === 'string' ? target : null;
    if (reduceMotion) {
      chooseDestination();
      swapWorld();
      requestFrame();
      return;
    }
    jump.active = true;
    jump.age = 0;
    jump.swapped = false;
    chooseDestination();
    fleet.leave();
    director.onDepart(); // [r3:director]
    requestFrame();
  }
  // Where the jump goes, picked as it begins, so the sky for it can compile in the background
  // while the ships wind up: a world clicked in a solar system, or anywhere and any backdrop.
  function chooseDestination() {
    const target = jump.target;
    jump.target = null;
    let next = pickWorld({ fresh: true, exclude: world.name, name: target });
    const nextVista = target || next.face ? { kind: 'planet', index: 0 } : pickVista(next.random, { fresh: true, exclude: vista.kind }); // [r3:howard] next.face
    if (nextVista.world) next = pickWorld({ fresh: true, name: nextVista.world });
    jump.world = next;
    jump.vista = nextVista;
    if (jump.warm) retireWarm(jump.warm);
    jump.warm = null;
    if (nextVista.index !== skyMaterial.defines.VISTA) {
      const material = skyMaterial.clone();
      material.defines = { VISTA: nextVista.index };
      const mesh = new THREE.Mesh(postQuad.geometry, material);
      mesh.frustumCulled = false;
      const warmScene = new THREE.Scene();
      warmScene.add(mesh);
      mesh.userData.compiled = renderer.compileAsync(warmScene, postCamera).catch(() => {});
      jump.warm = mesh;
    }
  }
  // A warm-up material is disposed only once its compile has settled: three.js polls the program
  // until it is ready, and a jump that lands at once (reduced motion) would pull it out from under
  // the poll.
  function retireWarm(mesh) {
    Promise.resolve(mesh.userData.compiled).then(() => requestAnimationFrame(() => mesh.material.dispose()));
  }
  function swapWorld() {
    jump.swapped = true;
    orbit.reset(); // [r3:navigator] a jump arrives framed as the hero frames it
    fleet.dispose();
    if (!jump.world) chooseDestination();
    vista = jump.vista;
    applyWorld(jump.world);
    jump.world = null;
    // The warm-up material held the new sky's program until the real one took it over.
    if (jump.warm) {
      retireWarm(jump.warm);
      jump.warm = null;
    }
    // [r3:memory] The jump and the new world are remembered before the new fleet reads the memory.
    memory.record('jump');
    memory.record('survey', { world: world.name });
    fleet = createFleet({ scene, camera, time, sunDir, sunColor, air, reduceMotion, overlay: art || hero, anisotropy: renderer.capabilities.getMaxAnisotropy(), random: world.random, scenario: pickScenario(world.random, { fresh: true }), memory });
    director.dispose(); // [r3:director] the old one's ships went with the old fleet
    director = createDirector({ kit: fleet.kit, fleet, memory, random: world.random });
    director.onArrive({ world: world.name, vista: vista.kind });
    environment.onArrive({ kit: fleet.kit, vista }); // [r3:environment]
    if (vista.kind === 'heatDeath') fleet.leave();
    starPlaced = true;
    layout();
    renderer.compile(scene, camera);
  }
  const smooth = (edge0, edge1, x) => THREE.MathUtils.smoothstep(x, edge0, edge1);
  function updateJump(dt) {
    const hyper = skyUniforms.uHyper.value;
    if (!jump.active) {
      hyper.set(0, 1, 0);
      compositeUniforms.uWhite.value = 0;
      if (clockTime >= jump.next) beginJump();
      return;
    }
    jump.age += dt;
    const a = jump.age;
    // The ships charge and go first (about a second and a half), then the stars stretch.
    const windUp = 2.4;
    if (a < windUp) {
      const k = smooth(0.55, 1.0, a / windUp);
      hyper.set(k * k, 1 - smooth(0.6, 0.95, a / windUp), k * k);
      compositeUniforms.uWhite.value = smooth(0.9, 1.0, a / windUp) * 0.85;
    } else {
      if (!jump.swapped) swapWorld();
      const k = Math.min(1, (a - windUp) / 1.5);
      hyper.set((1 - k) * (1 - k), smooth(0.3, 1.0, k), (1 - k) * (1 - k));
      compositeUniforms.uWhite.value = 0.85 * (1 - smooth(0.0, 0.3, k));
      if (k >= 1) {
        jump.active = false;
        jump.next = clockTime + 170 + Math.random() * 90;
      }
    }
    camera.position.x += (Math.random() - 0.5) * hyper.x * 0.05;
  }
  survey.addEventListener('click', (event) => {
    if (event.target.closest('.r3-survey__jump')) beginJump();
  });
  applyWorld(world);
  if (vista.kind === 'heatDeath') fleet.leave();

  // Every shader is compiled before the first frame, in the background where the browser can
  // (KHR_parallel_shader_compile), so the page never stalls on the planet's large one. The still
  // stays up meanwhile.
  let compiled = false;
  const warm = new THREE.Scene();
  for (const material of [nebulaMaterial, skyMaterial, brightMaterial, blurMaterial, copyMaterial, compositeMaterial]) {
    const mesh = new THREE.Mesh(postQuad.geometry, material);
    mesh.frustumCulled = false;
    warm.add(mesh);
  }
  Promise.all([renderer.compileAsync(warm, postCamera), renderer.compileAsync(scene, camera)])
    .catch(() => {})
    .then(() => {
      compiled = true;
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

// The hero starts once the page has painted and gone quiet, so building the scene and compiling its
// shaders never holds up the page; the still in brand.sass shows until the first frame.
const art = document.querySelector('[data-dw-hero-art]');
const hero = art ? art.closest('.dw-hero') : null;
if (hero) {
  const begin = () => start(hero, art);
  if ('requestIdleCallback' in window) requestAnimationFrame(() => requestIdleCallback(begin, { timeout: 800 }));
  else setTimeout(begin, 100);
}
