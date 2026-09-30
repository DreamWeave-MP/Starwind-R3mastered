// The worlds the hero's planet can be, one picked each time the page loads. Each is a recipe for
// the planet shader in r3-hero.js, not a map: the continents come from noise, so the same world
// never shows the same face twice.
//
//   lowland, land, highland  surface colours, sRGB. On a dry world "lowland" is the basin floor.
//   cloud, air, city         cloud tops, the atmosphere's glow, and the colour of its night lights
//   sea                      how high the sea stands: 0.2 is nearly all land, 0.8 nearly all water
//   clouds                   cloud cover, 0 to 1
//   cities                   how settled: 0 is wild, 1 is one city from pole to pole
//   ice                      how far the polar caps reach toward the equator, 0 to 1
//   lava                     glowing rifts, 0 to 1
//   bands                    1 for a gas giant: belts and zones instead of land and sea
//   floating                 1 where the lights stand on the water as well as the land
//   scale                    the size of the features: above 1, smaller continents
//   suns                     2 where a second sun rises beside the first
//   rings                    the chance, 0 to 1, that this load gives it a ring system; only the
//                            worlds that have them in the films and shows
//   aurora                   curtains of light over the night side's limb, 0 to 1
//   moons                    how many small moons may hang in its sky
//   scatter, dust, thickness its air, as ranges each visit picks within: how strongly the
//                            molecules scatter its colour, how much dust or smog hangs in it, and
//                            how deep it is, 1 being about Earth's
//
// Every load also varies the world a little, so no two visits match: the noise that draws its
// continents is seeded afresh, and its sea level, cloud, settlement, feature size, colours, axis
// and turn are nudged either way. A page can ask for one by name, ?world=tatooine, which is how
// the screenshots are made; ?seed=… repeats a particular variation, and ?frame=shoulder picks the
// camera's framing.

export const WORLDS = [
  { name: 'Tatooine', note: 'Outer Rim · twin suns', lowland: '#a9784a', land: '#d8b07a', highland: '#b98755', cloud: '#f3e6cc', air: '#f2c98f', city: '#ffcf8a', sea: 0.3, clouds: 0.05, cities: 0.12, scale: 1.2, suns: 2, scatter: [0.6, 0.9], dust: [1.4, 2.2], thickness: [0.9, 1.2] },
  { name: 'Taris', note: 'Outer Rim · ecumenopolis', lowland: '#23262c', land: '#6d7480', highland: '#9aa3b0', cloud: '#c9d2dc', air: '#8fb4d8', city: '#ffc774', sea: 0.35, clouds: 0.25, cities: 1, scatter: [0.9, 1.2], dust: [1.2, 1.7], thickness: [0.9, 1.1] },
  { name: 'Dantooine', note: 'Outer Rim · Jedi enclave', lowland: '#1f4f6e', land: '#7f9a4a', highland: '#b3a36b', cloud: '#eef3f5', air: '#8cc8ff', city: '#ffd89a', sea: 0.5, clouds: 0.45, cities: 0.15, scatter: [0.9, 1.2], dust: [0.8, 1.1], thickness: [0.9, 1.1] },
  { name: 'Kashyyyk', note: 'Mid Rim · wroshyr forests', lowland: '#16415a', land: '#2f5a26', highland: '#4d7a31', cloud: '#e8efef', air: '#9fd1ff', city: '#ffb86a', sea: 0.46, clouds: 0.55, cities: 0.25, scatter: [1.0, 1.3], dust: [1.0, 1.4], thickness: [1.0, 1.2] },
  { name: 'Manaan', note: 'Hydian Way · Ahto City', lowland: '#0b5a8a', land: '#2c7a6a', highland: '#79a58c', cloud: '#f4f8fb', air: '#7fc6ff', city: '#aef3ff', sea: 0.7, clouds: 0.5, cities: 0.3, floating: 1, scatter: [1.1, 1.4], dust: [0.6, 0.9], thickness: [1.0, 1.2] },
  { name: 'Korriban', note: 'Esstran sector · Sith tombs', lowland: '#3a120e', land: '#8a3a24', highland: '#c0673c', cloud: '#d9a58a', air: '#ff8a5c', city: '#ff5a3a', sea: 0.35, clouds: 0.1, cities: 0.06, scatter: [0.5, 0.8], dust: [1.2, 1.8], thickness: [0.8, 1.0] },
  { name: 'Hoth', note: 'Outer Rim · ice', lowland: '#9bb8d0', land: '#e8f1f8', highland: '#ffffff', cloud: '#f7fbff', air: '#bfe4ff', city: '#bfe8ff', sea: 0.42, clouds: 0.5, cities: 0.03, ice: 0.6, aurora: 0.8, moons: 3, scatter: [0.4, 0.7], dust: [0.3, 0.6], thickness: [0.7, 0.9] },
  { name: 'Endor', note: 'Moddell sector · forest moon', lowland: '#1b4a63', land: '#264d22', highland: '#3f6b30', cloud: '#eaf0ee', air: '#9ad0ff', city: '#ffb070', sea: 0.4, clouds: 0.5, cities: 0.05, scatter: [1.0, 1.3], dust: [0.9, 1.2], thickness: [0.95, 1.15] },
  { name: 'Naboo', note: 'Mid Rim · lakes and plains', lowland: '#1a5f95', land: '#5f9a4a', highland: '#9fb77a', cloud: '#ffffff', air: '#8fd0ff', city: '#ffe0a0', sea: 0.52, clouds: 0.4, cities: 0.3, scatter: [1.0, 1.3], dust: [0.7, 1.0], thickness: [0.95, 1.15] },
  { name: 'Coruscant', note: 'Core Worlds · ecumenopolis', lowland: '#2a2d34', land: '#8b8f98', highland: '#b4b8c0', cloud: '#d7dde6', air: '#9dc2ff', city: '#ffd27a', sea: 0.25, clouds: 0.2, cities: 1, scatter: [0.8, 1.1], dust: [1.6, 2.4], thickness: [0.9, 1.1] },
  { name: 'Mustafar', note: 'Outer Rim · volcanic', lowland: '#1a0c08', land: '#2b1a14', highland: '#4a2c20', cloud: '#6a4a3a', air: '#ff6a2a', city: '#ffae4a', sea: 0.4, clouds: 0.25, cities: 0, lava: 1, scatter: [0.4, 0.7], dust: [2.0, 3.0], thickness: [1.1, 1.4] },
  { name: 'Bespin', note: 'Outer Rim · gas giant', lowland: '#c98f5a', land: '#e8c490', highland: '#f6e2bd', cloud: '#fff2dc', air: '#ffc58a', city: '#ffe0a0', bands: 1, cities: 0, rings: 0.5, moons: 3, scatter: [1.2, 1.6], dust: [0.6, 1.0], thickness: [1.5, 2.0] },
  { name: 'Kamino', note: 'Wild Space · storm ocean', lowland: '#20465e', land: '#2d5566', highland: '#4c7080', cloud: '#dfe7ee', air: '#9ec8e8', city: '#cfeaff', sea: 0.78, clouds: 0.8, cities: 0.15, floating: 1, scatter: [1.2, 1.5], dust: [1.2, 1.8], thickness: [1.1, 1.4] },
  { name: 'Geonosis', note: 'Outer Rim · hive spires', lowland: '#6d3218', land: '#b0582c', highland: '#d68a4e', cloud: '#e4b48a', air: '#ff9a5a', city: '#ffb070', sea: 0.3, clouds: 0.1, cities: 0.08, rings: 1, moons: 3, scatter: [0.6, 0.9], dust: [1.6, 2.4], thickness: [0.9, 1.2] },
  { name: 'Jakku', note: 'Western Reaches · ship graveyard', lowland: '#b48a5c', land: '#d7b98c', highland: '#e6cfa4', cloud: '#f4ead8', air: '#ffd9a0', city: '#ffc070', sea: 0.2, clouds: 0.03, cities: 0.04, scale: 1.1, scatter: [0.6, 0.9], dust: [1.4, 2.0], thickness: [0.9, 1.1] },
  { name: 'Alderaan', note: 'Core Worlds · mountains and seas', lowland: '#1c4f8c', land: '#5c7f45', highland: '#e9eef2', cloud: '#ffffff', air: '#8ccaff', city: '#ffe3a8', sea: 0.5, clouds: 0.5, cities: 0.45, ice: 0.12, scatter: [1.0, 1.25], dust: [0.7, 1.0], thickness: [0.95, 1.15] },
  { name: 'Yavin 4', note: 'Gordian Reach · jungle moon', lowland: '#1a4d5a', land: '#2e6a2a', highland: '#4c8a3a', cloud: '#f2f6f2', air: '#a8e0c0', city: '#ffc080', sea: 0.4, clouds: 0.6, cities: 0.04, scatter: [1.1, 1.4], dust: [1.0, 1.4], thickness: [1.0, 1.25] },
  { name: 'Dagobah', note: 'Sluis sector · swamp', lowland: '#2d3a28', land: '#3e5230', highland: '#5a6b3e', cloud: '#b8c4b0', air: '#b0d4a0', city: '#d0ffb0', sea: 0.45, clouds: 0.9, cities: 0, scatter: [0.8, 1.1], dust: [2.0, 3.0], thickness: [1.2, 1.5] },
  { name: 'Scarif', note: 'Outer Rim · archipelago', lowland: '#1aa0b8', land: '#e6d6a0', highland: '#3f8a3a', cloud: '#ffffff', air: '#8ae8ff', city: '#ffd070', sea: 0.66, clouds: 0.35, cities: 0.2, scale: 1.4, scatter: [1.1, 1.3], dust: [0.6, 0.9], thickness: [0.95, 1.1] },
  { name: 'Crait', note: 'Outer Rim · salt flats', lowland: '#8a2a24', land: '#e8e6e2', highland: '#ffffff', cloud: '#f4f0ee', air: '#ffc0b8', city: '#ff6a5a', sea: 0.3, clouds: 0.15, cities: 0.03, scatter: [0.5, 0.8], dust: [0.8, 1.2], thickness: [0.8, 1.0] },
  { name: 'Felucia', note: 'Outer Rim · fungal jungle', lowland: '#1d6b6a', land: '#8a3c86', highland: '#d6b34a', cloud: '#f0e6ff', air: '#d8a0ff', city: '#ffe08a', sea: 0.42, clouds: 0.4, cities: 0.06, scatter: [1.1, 1.5], dust: [1.2, 1.6], thickness: [1.0, 1.3] },
  { name: 'Mon Cala', note: 'Outer Rim · ocean world', lowland: '#0a3f78', land: '#1c6a70', highland: '#3a8a8a', cloud: '#f5f9ff', air: '#6ab8ff', city: '#8ae0ff', sea: 0.8, clouds: 0.45, cities: 0.4, floating: 1, scatter: [1.2, 1.5], dust: [0.7, 1.0], thickness: [1.0, 1.2] },
  { name: 'Lothal', note: 'Outer Rim · grass seas', lowland: '#2a5f7a', land: '#9aa64a', highland: '#c7b774', cloud: '#f7f5ea', air: '#a8d8ff', city: '#ffd690', sea: 0.4, clouds: 0.35, cities: 0.2, scatter: [0.9, 1.2], dust: [0.8, 1.2], thickness: [0.9, 1.1] },
  { name: 'Nar Shaddaa', note: "Hutt Space · smuggler's moon", lowland: '#1a1520', land: '#4b4052', highland: '#6e6278', cloud: '#9a8fa8', air: '#c28aff', city: '#ff5ad2', sea: 0.2, clouds: 0.3, cities: 1, scatter: [0.7, 1.0], dust: [1.8, 2.6], thickness: [0.9, 1.1] },
  { name: 'Corellia', note: 'Core Worlds · shipyards', lowland: '#1d5586', land: '#6f8a4e', highland: '#a79a74', cloud: '#ffffff', air: '#90c8ff', city: '#ffd48a', sea: 0.48, clouds: 0.45, cities: 0.65, scatter: [0.95, 1.2], dust: [0.8, 1.2], thickness: [0.9, 1.1] },
  { name: 'Kessel', note: 'Outer Rim · spice mines', lowland: '#1f2a33', land: '#4e5a64', highland: '#7b8792', cloud: '#a8b8c4', air: '#7fb0ff', city: '#8affd8', sea: 0.25, clouds: 0.2, cities: 0.12, scatter: [0.3, 0.5], dust: [0.4, 0.8], thickness: [0.6, 0.8] },
  { name: 'Mygeeto', note: 'Outer Rim · crystal cities', lowland: '#6b8fae', land: '#dce9f5', highland: '#ffffff', cloud: '#eef6ff', air: '#a8d8ff', city: '#8ad0ff', sea: 0.35, clouds: 0.45, cities: 0.55, ice: 0.7, aurora: 0.5, scatter: [0.6, 0.9], dust: [0.4, 0.7], thickness: [0.8, 1.0] },
  { name: 'Ryloth', note: 'Outer Rim · twilight world', lowland: '#7a5a3a', land: '#c2945e', highland: '#e0c49a', cloud: '#f0e2cc', air: '#ffbf8a', city: '#ffc070', sea: 0.28, clouds: 0.12, cities: 0.2, ice: 0.45, scatter: [0.7, 1.0], dust: [1.2, 1.6], thickness: [0.9, 1.1] },
  { name: 'Sullust', note: 'Outer Rim · volcanic', lowland: '#1c1714', land: '#3a302a', highland: '#5c4c42', cloud: '#8a8078', air: '#ff9a5a', city: '#ffb36a', sea: 0.35, clouds: 0.7, cities: 0.3, lava: 0.5, scatter: [0.6, 0.9], dust: [2.2, 3.0], thickness: [1.1, 1.4] },
  { name: 'Christophsis', note: 'Outer Rim · crystal plains', lowland: '#2a5a6a', land: '#8fd8e0', highland: '#e0ffff', cloud: '#e8fbff', air: '#8af0ff', city: '#bff6ff', sea: 0.3, clouds: 0.25, cities: 0.35, scale: 1.3, scatter: [0.8, 1.1], dust: [0.5, 0.8], thickness: [0.9, 1.1] },
  { name: 'Ilum', note: 'Unknown Regions · kyber ice', lowland: '#7fa0c0', land: '#e4eef8', highland: '#ffffff', cloud: '#f4f8ff', air: '#9fd6ff', city: '#9ff0ff', sea: 0.4, clouds: 0.35, cities: 0, ice: 0.85, aurora: 1, scatter: [0.3, 0.55], dust: [0.3, 0.5], thickness: [0.6, 0.8] },
  { name: 'Exegol', note: 'Unknown Regions · Sith citadel', lowland: '#0e0b12', land: '#221c26', highland: '#3a3040', cloud: '#4a4458', air: '#8a6aff', city: '#b890ff', sea: 0.3, clouds: 0.75, cities: 0.05, scatter: [0.6, 0.9], dust: [2.0, 2.8], thickness: [1.0, 1.3] },
  { name: 'Ahch-To', note: 'Unknown Regions · first temple', lowland: '#135a7a', land: '#4f7a4a', highland: '#8a9a7a', cloud: '#f4f8fa', air: '#8fd0ff', city: '#ffe0a0', sea: 0.84, clouds: 0.5, cities: 0.02, scale: 1.5, scatter: [1.1, 1.4], dust: [0.8, 1.1], thickness: [1.0, 1.2] },
  { name: 'Takodana', note: 'Mid Rim · lakes and forests', lowland: '#1d5f7a', land: '#3f7a36', highland: '#6f9a4a', cloud: '#ffffff', air: '#9ad6ff', city: '#ffd48a', sea: 0.46, clouds: 0.4, cities: 0.12, scale: 1.3, scatter: [1.0, 1.3], dust: [0.8, 1.1], thickness: [0.95, 1.15] },
  { name: 'Jedha', note: 'Mid Rim · holy moon', lowland: '#8a7a64', land: '#c4b294', highland: '#e2d6c0', cloud: '#f4efe6', air: '#e6d2b0', city: '#ffd48a', sea: 0.2, clouds: 0.1, cities: 0.18, ice: 0.2, scatter: [0.6, 0.9], dust: [1.0, 1.4], thickness: [0.85, 1.05] },
  { name: 'Eadu', note: 'Outer Rim · storm world', lowland: '#1c2428', land: '#3c484e', highland: '#5e6a70', cloud: '#8a969c', air: '#8fb4c8', city: '#ffe0a0', sea: 0.35, clouds: 0.85, cities: 0.08, scatter: [0.8, 1.1], dust: [2.0, 2.8], thickness: [1.2, 1.5] },
  { name: 'Dathomir', note: 'Outer Rim · blood forests', lowland: '#3a1216', land: '#7a2a26', highland: '#a8483a', cloud: '#d49a92', air: '#ff6a6a', city: '#ff9a7a', sea: 0.38, clouds: 0.45, cities: 0.04, scatter: [0.8, 1.1], dust: [1.4, 2.0], thickness: [1.0, 1.2] },
  { name: 'Umbara', note: 'Expansion Region · shadow world', lowland: '#0a0e14', land: '#1a2230', highland: '#2a3446', cloud: '#3a4658', air: '#5a7aff', city: '#5affff', sea: 0.35, clouds: 0.6, cities: 0.6, scatter: [0.3, 0.6], dust: [2.0, 3.0], thickness: [1.0, 1.3] },
  { name: 'Mandalore', note: 'Outer Rim · glassed desert', lowland: '#9aa4a8', land: '#d8dcd6', highland: '#f4f6f0', cloud: '#f0f2f0', air: '#c8dcff', city: '#9ad8ff', sea: 0.22, clouds: 0.12, cities: 0.25, scatter: [0.5, 0.8], dust: [1.2, 1.8], thickness: [0.85, 1.05] },
  { name: 'Yavin', note: 'Gordian Reach · gas giant', lowland: '#8a3a1a', land: '#d4783a', highland: '#f2c08a', cloud: '#ffe2c0', air: '#ff9a5a', city: '#ffc080', bands: 1, cities: 0, rings: 0.35, moons: 3, scatter: [1.2, 1.6], dust: [0.6, 1.0], thickness: [1.5, 2.0] },
  { name: 'Onderon', note: 'Inner Rim · beast jungles', lowland: '#1a4a5a', land: '#2f6a2e', highland: '#6a8a4a', cloud: '#f0f4ee', air: '#9ad8c0', city: '#ffc47a', sea: 0.4, clouds: 0.5, cities: 0.18, scatter: [1.0, 1.3], dust: [0.9, 1.3], thickness: [0.95, 1.15] },
  { name: 'Malachor V', note: 'Outer Rim · shattered world', lowland: '#120c10', land: '#2a2024', highland: '#4a3a3e', cloud: '#5a4a52', air: '#c86aff', city: '#ff6a4a', sea: 0.3, clouds: 0.4, cities: 0, lava: 0.7, scatter: [0.2, 0.4], dust: [1.5, 2.5], thickness: [0.7, 1.0] },
  { name: 'Nal Hutta', note: 'Hutt Space · swamp', lowland: '#3a3a1a', land: '#5a5a2a', highland: '#7a7040', cloud: '#a8a078', air: '#d0c07a', city: '#ffd04a', sea: 0.45, clouds: 0.6, cities: 0.5, scatter: [0.8, 1.1], dust: [1.8, 2.6], thickness: [1.0, 1.2] },
  { name: 'Rodia', note: 'Tyrius system · jungle', lowland: '#1d4a3a', land: '#3a7a3e', highland: '#6a9a5a', cloud: '#eef6ee', air: '#8ae0b0', city: '#ffe08a', sea: 0.5, clouds: 0.55, cities: 0.4, scatter: [1.0, 1.4], dust: [1.0, 1.4], thickness: [1.0, 1.2] },
  { name: 'Mimban', note: 'Mid Rim · mud trenches', lowland: '#3a2e22', land: '#5a4a38', highland: '#7a6a54', cloud: '#9a9084', air: '#b4a890', city: '#ffc070', sea: 0.35, clouds: 0.8, cities: 0.15, scatter: [0.8, 1.1], dust: [2.2, 3.0], thickness: [1.1, 1.4] },
  { name: "Lah'mu", note: 'Outer Rim · black sand', lowland: '#1f5f6a', land: '#1c1c1e', highland: '#4a5a3a', cloud: '#f2f4f2', air: '#8ad0e0', city: '#ffd48a', sea: 0.55, clouds: 0.4, cities: 0.02, scale: 1.2, scatter: [0.9, 1.2], dust: [0.7, 1.0], thickness: [0.9, 1.1] },
];

const DEFAULTS = { sea: 0.5, clouds: 0.4, cities: 0.1, ice: 0, lava: 0, bands: 0, floating: 0, scale: 1, suns: 1, rings: 0, aurora: 0, moons: 2 };

function key(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// crown: the planet rising in the free sky. shoulder: a large planet whose centre is past the right
// edge, its limb climbing across the hero. distant: a smaller planet, more of its disc showing.
// close: a huge one, its horizon nearly flat.
function pickFrame(roll) {
  return roll < 0.4 ? 'crown' : roll < 0.65 ? 'shoulder' : roll < 0.85 ? 'distant' : 'close';
}

// A small seeded generator, so ?seed= repeats a variation exactly.
function generator(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let x = state;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

function nudge(hex, random, amount) {
  const hsl = {};
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  hsl.l = (max + min) / 2;
  const d = max - min;
  hsl.s = d === 0 ? 0 : d / (1 - Math.abs(2 * hsl.l - 1));
  hsl.h = d === 0 ? 0 : max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  hsl.h = (hsl.h * 60 + 360) % 360;
  const h = (hsl.h + (random() - 0.5) * 24 * amount + 360) % 360;
  const s = Math.min(1, Math.max(0, hsl.s * (1 + (random() - 0.5) * 0.3 * amount)));
  const l = Math.min(0.97, Math.max(0.02, hsl.l * (1 + (random() - 0.5) * 0.24 * amount)));
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  const [rr, gg, bb] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return `#${[rr, gg, bb].map((v) => Math.round((v + m) * 255).toString(16).padStart(2, '0')).join('')}`;
}

// The world named in the address, or one at random, varied for this load. After a jump the address
// no longer counts (fresh), and the world just left is not picked again (exclude).
export function pickWorld({ fresh = false, exclude = null, name = null } = {}) {
  const query = new URLSearchParams(fresh ? '' : location.search);
  const asked = name || query.get('world');
  const seed = Number.parseInt(query.get('seed') || '', 10);
  const random = generator(Number.isFinite(seed) ? seed : Math.floor(Math.random() * 2 ** 32));
  const named = asked ? WORLDS.find((world) => key(world.name) === key(asked)) : null;
  const choices = WORLDS.filter((world) => world.name !== exclude);
  const base = { ...DEFAULTS, ...(named || choices[Math.floor(random() * choices.length)]) };
  const spread = (value, amount, low = 0, high = 1) => Math.min(high, Math.max(low, value + (random() * 2 - 1) * amount));
  const within = ([low, high]) => low + (high - low) * random();
  const world = {
    ...base,
    scatter: within(base.scatter || [0.9, 1.1]),
    dust: within(base.dust || [0.9, 1.1]),
    thickness: within(base.thickness || [0.9, 1.1]),
    sea: spread(base.sea, 0.05),
    clouds: spread(base.clouds, 0.12),
    cities: base.cities > 0.9 ? 1 : spread(base.cities, base.cities * 0.35),
    scale: base.scale * (0.8 + random() * 0.5),
    ice: base.ice > 0 ? spread(base.ice, 0.08) : 0,
    // Small offsets: the noise is float32, and far from the origin its finer octaves lose the
    // precision to stay still, so a large seed makes the surface shimmer as it turns.
    seed: [random() * 12 - 6, random() * 12 - 6, random() * 12 - 6],
    tilt: [(random() - 0.5) * 0.5, 0.2 + random() * 0.3],
    spin: 0.75 + random() * 0.65,
    ringed: random() < base.rings,
    ringTilt: [(random() - 0.5) * 0.3, 0.5 + random() * 0.4],
    ringBands: random() * 100,
    moonCount: Math.floor(random() * (base.moons + 1)),
    moonSeeds: [random(), random(), random(), random(), random(), random()],
    // Where round the limb the sun rises, and how far the planet has turned when the visit begins.
    sunAt: random(),
    phase: random() * Math.PI * 2,
    // The sky behind: where its three clouds sit, as fractions of the hero's width and height, how
    // far each spreads and how bright it is, a shift in the violet's hue, and the noise's offset,
    // scale and warp.
    sky: {
      // Centres in the frame or just past its edge, so every cloud always shows.
      cyan: [0.3 + 0.75 * random(), 0.72 + 0.34 * random()],
      violet: [-0.05 + 0.75 * random(), -0.15 + 0.4 * random()],
      third: [0.15 + 0.8 * random(), 0.15 + 0.7 * random()],
      spread: [0.55 + 0.45 * random(), 0.5 + 0.45 * random(), 0.35 + 0.4 * random()],
      strength: [0.8 + 0.7 * random(), 0.7 + 0.7 * random(), random() < 0.55 ? 0.4 + 0.8 * random() : 0],
      hue: (random() - 0.5) * 0.12,
      offset: [random() * 40 - 20, random() * 40 - 20],
      scale: 0.75 + 0.6 * random(),
      warp: 1.1 + 1.4 * random(),
    },
    // The camera: how the planet is framed on this load (see layout() in r3-hero.js).
    frame: { kind: pickFrame(random()), size: random(), at: random(), lift: random(), sun: random() },
  };
  for (const part of ['lowland', 'land', 'highland', 'cloud', 'air']) world[part] = nudge(base[part], random, 1);
  const framed = query.get('frame');
  if (['crown', 'shoulder', 'distant', 'close'].includes(framed)) world.frame.kind = framed;
  // The rest of this load's choices (the fleet, the sky) draw on from the same sequence.
  world.random = random;
  return world;
}
