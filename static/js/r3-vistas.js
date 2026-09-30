// The hero's backdrops, for r3-hero.js. Most visits look down on a planet, but a visit, and every
// jump, can land somewhere else: in view of a whole solar system, a binary star pouring itself into
// its companion, a lone star, a dwarf, a black hole bending the sky round itself, a quasar, a
// shipyard, or, very rarely, the Death Star.
//
// VISTA_GLSL is spliced into the sky shader, which is compiled once per backdrop with VISTA
// defined as its number, so only the backdrop showing is compiled. Each is drawn from uniforms that
// placeVista() below works out from the hero's layout every frame: where its bodies are, how big,
// what colour, and for a solar system where each world sits on its orbit.

import * as THREE from './vendor/three.module.min.js';

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

export function pickVista(random, { fresh = false, exclude = null } = {}) {
  const query = new URLSearchParams(fresh ? '' : location.search);
  let kind = query.get('vista');
  if (!kind || !(kind in KINDS)) {
    const choices = WEIGHTS.filter(([name]) => name !== exclude || name === 'planet');
    const total = choices.reduce((sum, [, weight]) => sum + weight, 0);
    let roll = random() * total;
    kind = choices[0][0];
    for (const [name, weight] of choices) {
      roll -= weight;
      if (roll < 0) {
        kind = name;
        break;
      }
    }
  }
  const vista = { kind, index: KINDS[kind], seed: random() * 100 };
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
      out.planets.push({ x: px, y: py, radius: size, orbit: [a * ratio, b * ratio], world, behind: Math.sin(angle) < 0, index: i });
    });
  }
  return out;
}

export const VISTA_GLSL = /* glsl */ `
  uniform float uVista;
  uniform vec4 uBodyA;       // the main body: centre x, y and radius in device pixels, and a seed
  uniform vec4 uBodyB;       // a companion, for a binary
  uniform vec4 uVistaParams;
  uniform vec3 uColourA;
  uniform vec3 uColourB;
  uniform vec4 uWorlds[8];   // a solar system's worlds: centre x, y, radius, and 1 when on the far side
  uniform vec3 uWorldTint[8];
  uniform vec3 uWorldTintB[8];
  uniform vec4 uOrbits[8];   // each world's orbit: semi-axes, device pixels, and whether the belt
  uniform float uWorldCount;
  uniform vec2 uSkySize;     // the canvas, device pixels

  vec3 turnY(vec3 p, float a) {
    float c = cos(a);
    float s = sin(a);
    return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
  }

  #if VISTA >= 1 && VISTA <= 4
  // A star's face: darker toward the limb, boiling with granulation, spotted where it is active and
  // brighter round the spots. Its detail fades where it would be finer than a pixel.
  vec4 starFace(vec2 px, vec4 body, vec3 colour, float activity) {
    vec2 q = (px - body.xy) / body.z;
    float r = length(q);
    if (r > 1.0) return vec4(0.0);
    float mu = sqrt(max(0.0, 1.0 - r * r));
    vec3 s = turnY(vec3(q, mu), uTime * 0.004 + body.w);
    float footprint = 1.0 / body.z;
    float granules = fbm3Filtered(s * 34.0 + vec3(0.0, uTime * 0.03, body.w), footprint * 34.0);
    float magnetic = fbm3Filtered(s * 3.5 + body.w * 7.0, footprint * 3.5);
    float spots = smoothstep(0.66, 0.72, magnetic) * activity;
    float faculae = smoothstep(0.56, 0.64, magnetic) * (1.0 - spots) * activity;
    float limb = 0.3 + 0.7 * pow(mu, 0.6);
    vec3 face = colour * colour * limb * (0.7 + 0.6 * granules);
    face = mix(face, colour * vec3(0.35, 0.18, 0.1) * limb, spots * 0.85);
    face += colour * faculae * 0.35 * (1.0 - mu);
    float edge = 1.0 - smoothstep(1.0 - 1.5 / body.z, 1.0, r);
    return vec4(face * 1.35, edge);
  }

  // A star's corona and prominences: streamers fading out from the limb, and bright loops of
  // plasma standing just above it.
  vec3 starHalo(vec2 px, vec4 body, vec3 colour, float activity) {
    vec2 q = (px - body.xy) / body.z;
    float r = length(q);
    if (r < 1.0 - 1.5 / body.z) return vec3(0.0);
    float around = atan(q.y, q.x);
    // Heights in css pixels, so a star filling the hero has a corona no wider than a small one's.
    float h = max(r - 1.0, 0.0) * body.z / uRatio;
    float streamers = 0.55 + 0.45 * fbm2(vec2(around * 4.0 + body.w, h * 0.02 - uTime * 0.015));
    float corona = exp(-h / 45.0) * streamers;
    float loops = smoothstep(0.62, 0.82, fbm2(vec2(around * max(14.0, body.z / uRatio * 0.08) + body.w * 3.0, uTime * 0.04 + h * 0.08)));
    float prominence = loops * exp(-h / 10.0) * activity;
    return colour * (corona * 0.55 + prominence * 1.6 + exp(-h / 220.0) * 0.06);
  }

  #endif

  #if VISTA == 4
  // A dwarf: a red one flaring, a white one tiny and fierce inside the shell of gas it threw off,
  // or a brown one, banded and dim.
  vec3 dwarf(vec2 px, vec3 col) {
    vec4 body = uBodyA;
    vec2 q = (px - body.xy) / body.z;
    float r = length(q);
    float type = uVistaParams.x;
    if (type > 0.5 && type < 1.5) {
      // The planetary nebula: a shell seen through, brightest where the line of sight grazes it.
      float shell = uVistaParams.y * 7.0 + 5.0;
      float d = r / shell;
      float path = d < 1.0 ? sqrt(max(0.0, 1.0 - d * d)) - sqrt(max(0.0, 0.72 * 0.72 - d * d)) : 0.0;
      float lumps = 0.6 + 0.8 * fbm2(q / shell * 5.0 + body.w);
      vec3 gas = mix(vec3(0.2, 0.9, 0.85), vec3(1.0, 0.3, 0.35), smoothstep(0.75, 1.0, d));
      gas = mix(gas, vec3(0.5, 0.4, 1.0), uVistaParams.z * 0.5);
      col += gas * path * lumps * 0.55;
    }
    vec3 face;
    if (type < 0.5) {
      vec4 surface = starFace(px, body, uColourA, 1.0);
      // Flares: now and then a patch of the surface flashes and throws off a loop.
      float flare = pow(max(0.0, sin(uTime * 0.23 + body.w)), 30.0);
      face = surface.rgb * (1.0 + flare * 1.5);
      col = mix(col, face, surface.a);
      col += starHalo(px, body, uColourA, 1.0 + flare * 2.0) * (1.0 + flare);
    } else if (type < 1.5) {
      float disc = 1.0 - smoothstep(1.0 - 1.5 / body.z, 1.0, r);
      col = mix(col, uColourA * 4.0, disc);
      col += uColourA * (exp(-max(r - 1.0, 0.0) * 1.1) * 0.9 + exp(-max(r - 1.0, 0.0) * 0.15) * 0.12);
    } else {
      float disc = 1.0 - smoothstep(1.0 - 1.5 / body.z, 1.0, r);
      if (r < 1.0) {
        float mu = sqrt(max(0.0, 1.0 - r * r));
        vec3 s = turnY(vec3(q, mu), uTime * 0.02 + body.w);
        float bands = 0.5 + 0.5 * sin(s.y * 14.0 + fbm3Filtered(s * vec3(2.0, 8.0, 2.0), 8.0 / body.z) * 4.0);
        vec3 face = mix(uColourA, uColourA * vec3(1.6, 0.9, 1.2), bands) * (0.3 + 0.7 * mu);
        col = mix(col, face * 1.3, disc);
      }
      col += uColourA * exp(-max(r - 1.0, 0.0) * 2.5) * 0.35;
    }
    return col;
  }

  #endif

  #if VISTA == 2
  // A binary: a giant drawn out toward its small hot companion, and the stream of gas it loses
  // curling round into the disc about the companion. Whichever is nearer is drawn over the other.
  vec3 companion(vec2 px, vec4 a, vec4 b, vec2 axis, float apart, vec3 col) {
    vec2 across = vec2(-axis.y, axis.x);
    vec2 d = px - b.xy;
    // The disc about the companion, tilted, hot within.
    vec2 flat2 = vec2(dot(d, axis), dot(d, across) / 0.3);
    float r = length(flat2) / (b.z * 2.4);
    float ring = smoothstep(0.35, 0.45, r) * (1.0 - smoothstep(0.8, 1.0, r));
    float swirl = 0.55 + 0.55 * fbm2(vec2(atan(flat2.y, flat2.x) * 3.0 - uTime * 0.6, r * 6.0));
    col += mix(uColourB, uColourA, r) * ring * swirl * 0.8;
    // The stream: from the giant's nearest point, bowed round, into the disc's rim.
    vec2 start = a.xy + axis * a.z * 1.2;
    vec2 end = b.xy + across * b.z * 2.3 * 0.3 - axis * b.z * 0.6;
    vec2 bend = mix(start, end, 0.5) + across * apart * 0.16;
    float nearest = 1e6;
    float at = 0.0;
    for (int i = 0; i <= 16; i++) {
      float t = float(i) / 16.0;
      vec2 point = mix(mix(start, bend, t), mix(bend, end, t), t);
      float gap = length(px - point);
      if (gap < nearest) {
        nearest = gap;
        at = t;
      }
    }
    float width = mix(a.z * 0.07, b.z * 0.3, at);
    float stream = exp(-pow(abs(nearest) / max(width, 1.0), 2.0)) * (0.6 + 0.5 * noise2(vec2(at * 20.0 - uTime * 1.5, 3.0)));
    col += mix(uColourA, uColourB, at) * stream * 0.9;
    vec4 small = starFace(px, b, uColourB, 0.2);
    col += uColourB * exp(-max(length(d) / b.z - 1.0, 0.0) * 1.4) * 0.4;
    return mix(col, small.rgb * 1.3, small.a);
  }

  vec3 binary(vec2 px, vec3 col) {
    vec4 a = uBodyA;
    vec4 b = uBodyB;
    vec2 toward = b.xy - a.xy;
    float apart = length(toward);
    vec2 axis = apart > 1.0 ? toward / apart : vec2(1.0, 0.0);
    // The giant, stretched along the axis on its companion's side.
    vec2 q = px - a.xy;
    float along = dot(q, axis);
    vec2 stretched = along > 0.0 ? q - axis * along * 0.2 : q;
    vec4 giant = starFace(a.xy + stretched, a, uColourA, 0.8);
    col += starHalo(a.xy + stretched, a, uColourA, 0.8) * 0.7;
    if (b.w > 0.0) {
      col = mix(col, giant.rgb, giant.a);
      return companion(px, a, b, axis, apart, col);
    }
    col = companion(px, a, b, axis, apart, col);
    return mix(col, giant.rgb, giant.a);
  }

  #endif

  #if VISTA == 5 || VISTA == 6
  // The accretion disc's axis: nearly square to the line of sight, so the disc is seen nearly edge
  // on, tipped toward the viewer by the tilt and turned by the roll.
  vec3 discNormal() {
    float tilt = uVistaParams.x;
    float roll = uVistaParams.y;
    return normalize(vec3(sin(roll), sin(tilt) * cos(roll), cos(tilt)));
  }

  // A black hole, or a quasar: each ray is traced back from the eye and bent round the hole as
  // light is (Schwarzschild, in units of its radius), gathering the accretion disc's light each time
  // it crosses the disc's plane, until it falls in or leaves for the sky behind, which is then drawn
  // where the ray points, lensed. The disc's inner edge is hot and its near side, coming toward the
  // viewer, brighter.
  vec3 blackHole(vec2 px, vec3 col, out bool lensed) {
    lensed = false;
    vec4 hole = uBodyA;
    vec2 d = (px - hole.xy) / hole.z;
    float b = length(d);
    if (b > 22.0) return col;
    lensed = true;
    // Past the disc's reach a ray only bends a little, by the weak-field angle, and needs no tracing.
    if (b > 11.5) {
      vec2 landing = d - (d / b) * (2.0 / b) * 48.0;
      vec2 skyPx = hole.xy + landing * hole.z;
      vec3 bentSky = texture2D(tNebula, clamp(skyPx / uSkySize, vec2(0.0), vec2(1.0))).rgb + starField(skyPx / uRatio);
      return mix(bentSky, col, smoothstep(15.0, 22.0, b));
    }
    vec3 normal = discNormal();
    // A disc seen square on has no line across it to measure from; any in-plane one will do.
    vec3 across = cross(normal, vec3(0.0, 0.0, 1.0));
    vec3 e1 = dot(across, across) > 1e-8 ? normalize(across) : vec3(1.0, 0.0, 0.0);
    vec3 e2 = cross(normal, e1);
    vec3 pos = vec3(d, 40.0);
    vec3 vel = vec3(0.0, 0.0, -1.0);
    vec3 h = cross(pos, vel);
    float h2 = dot(h, h);
    vec3 disc = vec3(0.0);
    float alpha = 0.0;
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
          float speed = sqrt(0.5 / radius);
          vec3 orbit = normalize(cross(normal, flatPos)) * uVistaParams.z;
          float doppler = 1.0 / max(0.2, 1.0 - speed * dot(orbit, -normalize(vel)));
          float beaming = pow(doppler, 3.0);
          float heat = pow(inner / radius, 1.6);
          // The disc's texture turns with it, read round a circle so it has no seam where the
          // angle wraps.
          float turned = angle + uTime * speed * 0.6 * uVistaParams.z + hole.w;
          float swirl = fbm3(vec3(cos(turned) * 3.0, sin(turned) * 3.0, radius * 1.6));
          float bands = 0.6 + 0.4 * sin(radius * 6.0 + swirl * 7.0);
          float density = smoothstep(inner, inner + 0.5, radius) * (1.0 - smoothstep(outer * 0.6, outer, radius)) * (0.25 + 0.75 * bands) * (0.5 + 0.7 * swirl);
          vec3 hot = mix(uColourA, vec3(1.0, 0.95, 1.1) * 1.6, heat * (0.6 + 0.4 * uVistaParams.w));
          vec3 light = hot * heat * beaming * (0.7 + 0.7 * uVistaParams.w);
          float a = clamp(density * 0.8, 0.0, 1.0);
          disc += (1.0 - alpha) * light * a;
          alpha += (1.0 - alpha) * a;
        }
      }
      side = nowSide;
      if (pos.z < -40.0 || r > 60.0) break;
    }
    vec3 behind = vec3(0.0);
    if (!captured) {
      vec3 dir = normalize(vel);
      float reach = (-48.0 - pos.z) / min(dir.z, -0.08);
      vec2 landing = pos.xy + dir.xy * reach;
      vec2 skyPx = hole.xy + landing * hole.z;
      vec2 skyUv = clamp(skyPx / uSkySize, vec2(0.0), vec2(1.0));
      behind = texture2D(tNebula, skyUv).rgb + starField(skyPx / uRatio);
      // The photon ring: light that has circled the hole, a thin bright band at its shadow's edge.
      float ring = exp(-pow(abs(b - 2.6) / max(0.05, 1.2 / hole.z), 2.0));
      behind += uColourA * ring * (0.2 + 0.2 * uVistaParams.w);
    }
    // Far out the bending is slight: the lensed sky fades into the plain one, without a seam.
    return mix(behind * (1.0 - alpha) + disc, col, smoothstep(15.0, 22.0, b));
  }

  // A quasar's jets: along the disc's axis, both ways, knotted and flickering.
  vec3 jets(vec2 px) {
    vec4 hole = uBodyA;
    vec3 normal = discNormal();
    vec2 axis = length(normal.xy) > 1e-3 ? normalize(normal.xy) : vec2(0.0, 1.0);
    vec2 d = (px - hole.xy) / hole.z;
    float along = dot(d, axis);
    float across = abs(dot(d, vec2(-axis.y, axis.x)));
    float reach = abs(along);
    float width = 0.25 + reach * 0.045;
    float beam = exp(-pow(across / width, 2.0)) * smoothstep(1.5, 4.0, reach) * exp(-reach * 0.018);
    float knots = 0.55 + 0.45 * sin(reach * 0.9 - uTime * 3.0 * sign(along)) * noise2(vec2(reach * 0.3, uTime * 0.5));
    float nearSide = along * sign(normal.z) > 0.0 ? 1.0 : 0.55;
    vec3 colour = mix(vec3(0.55, 0.7, 1.4), vec3(0.8, 0.5, 1.2), smoothstep(10.0, 60.0, reach));
    return colour * beam * (0.6 + knots) * nearSide * 1.3;
  }

  #endif

  #if VISTA == 1
  // A solar system as an orrery: the star, each world's orbit traced as a faint dashed ellipse in
  // the site's cyan, an asteroid belt on one of them, and the worlds themselves, lit from the star,
  // passing behind it on the far side of their orbits.
  vec3 solarSystem(vec2 px, vec3 col) {
    vec4 star = uBodyA;
    float incline = uVistaParams.x;
    float turn = uVistaParams.y;
    float belt = uVistaParams.z;
    vec2 d = px - star.xy;
    float c = cos(turn);
    float s = sin(turn);
    // Down the screen is up in these pixels, so the turn goes the other way.
    vec2 local = vec2(c * d.x - s * d.y, s * d.x + c * d.y);
    for (int i = 0; i < 8; i++) {
      if (float(i) >= uWorldCount) break;
      vec4 orbit = uOrbits[i];
      vec2 e = local / orbit.xy;
      float ellipse = length(e);
      float gap = abs(ellipse - 1.0) * min(orbit.x, orbit.y);
      float angle = atan(e.y, e.x);
      if (abs(float(i) - belt) < 0.5) {
        // The belt: a scatter of rocks along the orbit.
        vec2 cell = vec2(angle * orbit.x * 0.12, (ellipse - 1.0) * orbit.y * 0.25);
        vec2 id = floor(cell);
        float rock = step(0.75, hash21(id)) * exp(-dot(fract(cell) - 0.5, fract(cell) - 0.5) * 30.0);
        col += vec3(0.7, 0.65, 0.6) * rock * exp(-gap * gap / (orbit.y * orbit.y * 0.004)) * 0.6;
      } else {
        float dash = step(0.4, fract(angle * orbit.x / (6.2832 * 7.0)));
        col += uAccent * exp(-gap * gap * 1.4 / (uRatio * uRatio)) * 0.08 * dash;
      }
    }
    // The worlds behind the star, the star, then the worlds in front.
    for (int pass = 0; pass < 2; pass++) {
      if (pass == 1) {
        vec4 face = starFace(px, star, uColourA, 0.5);
        col += uColourA * exp(-max(length(d) / star.z - 1.0, 0.0) * 0.9) * 0.45;
        col = mix(col, face.rgb * 1.3, face.a);
      }
      for (int i = 0; i < 8; i++) {
        if (float(i) >= uWorldCount) break;
        vec4 w = uWorlds[i];
        if ((w.w > 0.5) != (pass == 0)) continue;
        vec2 q = (px - w.xy) / w.z;
        float r = length(q);
        if (r > 1.6) continue;
        float disc = 1.0 - smoothstep(1.0 - 1.5 / w.z, 1.0, r);
        vec3 n = vec3(q, sqrt(max(0.0, 1.0 - r * r)));
        vec3 toStar = normalize(vec3((star.xy - w.xy) / max(length(star.xy - w.xy), 1.0), 0.35));
        float bands = fbm3Filtered(n * 3.0 + float(i) * 13.0, 3.0 / w.z);
        vec3 surface = mix(uWorldTint[i], uWorldTintB[i], smoothstep(0.4, 0.6, bands));
        vec3 lit = surface * (max(dot(n, toStar), 0.0) * uColourA * 2.6 + 0.08);
        lit += uColourA * pow(1.0 - n.z, 3.0) * max(dot(normalize(q + vec2(0.0, 1e-4)), normalize(star.xy - w.xy + vec2(0.0, 1e-4))), 0.0) * 0.5;
        col = mix(col, lit, disc);
        col += uAccent * exp(-pow(abs(r - 1.35) / 0.07, 2.0)) * 0.12;
      }
    }
    return col;
  }

  #endif

  #if VISTA == 9
  // The heat death: what is left after the stars (dimmed and put out in the star field itself) is a
  // small black hole, glowing faintly as it evaporates, until it goes with a last flash. A click
  // starts it all again: a point of light blowing out into a fireball, white-hot, cooling through
  // yellow and orange to a mottled red as it fills the sky.
  vec3 heatDeath(vec2 px, vec3 col) {
    float progress = uVistaParams.x;
    vec4 hole = uBodyA;
    float r = length(px - hole.xy) / hole.z;
    float gone = smoothstep(0.9, 0.905, progress);
    float disc = 1.0 - smoothstep(1.0 - 1.5 / hole.z, 1.0, r);
    col = mix(col, vec3(0.0), disc * (1.0 - gone));
    col += vec3(0.7, 0.45, 1.0) * exp(-max(r - 1.0, 0.0) * 0.9) * (0.1 + 0.06 * sin(uTime * 2.3)) * (1.0 - gone);
    col += vec3(1.3, 1.2, 1.4) * exp(-pow(abs(progress - 0.9) * 90.0, 2.0)) * exp(-r * 0.25) * 3.0;
    vec4 bang = uBodyB;
    if (bang.z > 0.0) {
      float age = bang.z;
      vec2 d = (px - bang.xy) / uRatio;
      float reach = 1600.0 * (1.0 - exp(-age * 1.2));
      float rr = length(d) / max(reach, 1.0);
      float inside = 1.0 - smoothstep(0.9, 1.0, rr);
      float temperature = exp(-age * 0.8) * (1.25 - 0.45 * rr);
      vec3 fire = mix(vec3(0.7, 0.12, 0.04), vec3(1.4, 1.1, 0.7), smoothstep(0.08, 0.5, temperature));
      fire = mix(fire, vec3(1.5, 1.6, 2.0), smoothstep(0.55, 1.1, temperature));
      float mottle = 0.7 + 0.6 * fbm2(d * 0.018 + vec2(age * 0.2, 3.0));
      col = mix(col, fire * (0.8 + 2.4 * temperature) * mottle, inside);
      col += vec3(1.5, 1.4, 1.3) * exp(-length(d) / (6.0 + age * 50.0)) * exp(-age * 0.9) * 5.0;
    }
    return col;
  }

  #endif

  #if VISTA == 8
  // The Death Star's surface, for the planet's disc: grey plating in rectangles, the equatorial
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
