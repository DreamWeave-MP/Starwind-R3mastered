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
//
// A page can ask for one by name, ?world=tatooine, which is how the screenshots are made.

export const WORLDS = [
  { name: 'Tatooine', note: 'Outer Rim · twin suns', lowland: '#a9784a', land: '#d8b07a', highland: '#b98755', cloud: '#f3e6cc', air: '#f2c98f', city: '#ffcf8a', sea: 0.3, clouds: 0.05, cities: 0.12, scale: 1.2, suns: 2 },
  { name: 'Taris', note: 'Outer Rim · ecumenopolis', lowland: '#23262c', land: '#6d7480', highland: '#9aa3b0', cloud: '#c9d2dc', air: '#8fb4d8', city: '#ffc774', sea: 0.35, clouds: 0.25, cities: 1 },
  { name: 'Dantooine', note: 'Outer Rim · Jedi enclave', lowland: '#1f4f6e', land: '#7f9a4a', highland: '#b3a36b', cloud: '#eef3f5', air: '#8cc8ff', city: '#ffd89a', sea: 0.5, clouds: 0.45, cities: 0.15 },
  { name: 'Kashyyyk', note: 'Mid Rim · wroshyr forests', lowland: '#16415a', land: '#2f5a26', highland: '#4d7a31', cloud: '#e8efef', air: '#9fd1ff', city: '#ffb86a', sea: 0.46, clouds: 0.55, cities: 0.25 },
  { name: 'Manaan', note: 'Hydian Way · Ahto City', lowland: '#0b5a8a', land: '#2c7a6a', highland: '#79a58c', cloud: '#f4f8fb', air: '#7fc6ff', city: '#aef3ff', sea: 0.7, clouds: 0.5, cities: 0.3, floating: 1 },
  { name: 'Korriban', note: 'Esstran sector · Sith tombs', lowland: '#3a120e', land: '#8a3a24', highland: '#c0673c', cloud: '#d9a58a', air: '#ff8a5c', city: '#ff5a3a', sea: 0.35, clouds: 0.1, cities: 0.06 },
  { name: 'Hoth', note: 'Outer Rim · ice', lowland: '#9bb8d0', land: '#e8f1f8', highland: '#ffffff', cloud: '#f7fbff', air: '#bfe4ff', city: '#bfe8ff', sea: 0.42, clouds: 0.5, cities: 0.03, ice: 0.6 },
  { name: 'Endor', note: 'Moddell sector · forest moon', lowland: '#1b4a63', land: '#264d22', highland: '#3f6b30', cloud: '#eaf0ee', air: '#9ad0ff', city: '#ffb070', sea: 0.4, clouds: 0.5, cities: 0.05 },
  { name: 'Naboo', note: 'Mid Rim · lakes and plains', lowland: '#1a5f95', land: '#5f9a4a', highland: '#9fb77a', cloud: '#ffffff', air: '#8fd0ff', city: '#ffe0a0', sea: 0.52, clouds: 0.4, cities: 0.3 },
  { name: 'Coruscant', note: 'Core Worlds · ecumenopolis', lowland: '#2a2d34', land: '#8b8f98', highland: '#b4b8c0', cloud: '#d7dde6', air: '#9dc2ff', city: '#ffd27a', sea: 0.25, clouds: 0.2, cities: 1 },
  { name: 'Mustafar', note: 'Outer Rim · volcanic', lowland: '#1a0c08', land: '#2b1a14', highland: '#4a2c20', cloud: '#6a4a3a', air: '#ff6a2a', city: '#ffae4a', sea: 0.4, clouds: 0.25, cities: 0, lava: 1 },
  { name: 'Bespin', note: 'Outer Rim · gas giant', lowland: '#c98f5a', land: '#e8c490', highland: '#f6e2bd', cloud: '#fff2dc', air: '#ffc58a', city: '#ffe0a0', bands: 1, cities: 0 },
  { name: 'Kamino', note: 'Wild Space · storm ocean', lowland: '#20465e', land: '#2d5566', highland: '#4c7080', cloud: '#dfe7ee', air: '#9ec8e8', city: '#cfeaff', sea: 0.78, clouds: 0.8, cities: 0.15, floating: 1 },
  { name: 'Geonosis', note: 'Outer Rim · hive spires', lowland: '#6d3218', land: '#b0582c', highland: '#d68a4e', cloud: '#e4b48a', air: '#ff9a5a', city: '#ffb070', sea: 0.3, clouds: 0.1, cities: 0.08 },
  { name: 'Jakku', note: 'Western Reaches · ship graveyard', lowland: '#b48a5c', land: '#d7b98c', highland: '#e6cfa4', cloud: '#f4ead8', air: '#ffd9a0', city: '#ffc070', sea: 0.2, clouds: 0.03, cities: 0.04, scale: 1.1 },
  { name: 'Alderaan', note: 'Core Worlds · mountains and seas', lowland: '#1c4f8c', land: '#5c7f45', highland: '#e9eef2', cloud: '#ffffff', air: '#8ccaff', city: '#ffe3a8', sea: 0.5, clouds: 0.5, cities: 0.45, ice: 0.12 },
  { name: 'Yavin 4', note: 'Gordian Reach · jungle moon', lowland: '#1a4d5a', land: '#2e6a2a', highland: '#4c8a3a', cloud: '#f2f6f2', air: '#a8e0c0', city: '#ffc080', sea: 0.4, clouds: 0.6, cities: 0.04 },
  { name: 'Dagobah', note: 'Sluis sector · swamp', lowland: '#2d3a28', land: '#3e5230', highland: '#5a6b3e', cloud: '#b8c4b0', air: '#b0d4a0', city: '#d0ffb0', sea: 0.45, clouds: 0.9, cities: 0 },
  { name: 'Scarif', note: 'Outer Rim · archipelago', lowland: '#1aa0b8', land: '#e6d6a0', highland: '#3f8a3a', cloud: '#ffffff', air: '#8ae8ff', city: '#ffd070', sea: 0.66, clouds: 0.35, cities: 0.2, scale: 1.4 },
  { name: 'Crait', note: 'Outer Rim · salt flats', lowland: '#8a2a24', land: '#e8e6e2', highland: '#ffffff', cloud: '#f4f0ee', air: '#ffc0b8', city: '#ff6a5a', sea: 0.3, clouds: 0.15, cities: 0.03 },
  { name: 'Felucia', note: 'Outer Rim · fungal jungle', lowland: '#1d6b6a', land: '#8a3c86', highland: '#d6b34a', cloud: '#f0e6ff', air: '#d8a0ff', city: '#ffe08a', sea: 0.42, clouds: 0.4, cities: 0.06 },
  { name: 'Mon Cala', note: 'Outer Rim · ocean world', lowland: '#0a3f78', land: '#1c6a70', highland: '#3a8a8a', cloud: '#f5f9ff', air: '#6ab8ff', city: '#8ae0ff', sea: 0.8, clouds: 0.45, cities: 0.4, floating: 1 },
  { name: 'Lothal', note: 'Outer Rim · grass seas', lowland: '#2a5f7a', land: '#9aa64a', highland: '#c7b774', cloud: '#f7f5ea', air: '#a8d8ff', city: '#ffd690', sea: 0.4, clouds: 0.35, cities: 0.2 },
  { name: 'Nar Shaddaa', note: "Hutt Space · smuggler's moon", lowland: '#1a1520', land: '#4b4052', highland: '#6e6278', cloud: '#9a8fa8', air: '#c28aff', city: '#ff5ad2', sea: 0.2, clouds: 0.3, cities: 1 },
];

const DEFAULTS = { sea: 0.5, clouds: 0.4, cities: 0.1, ice: 0, lava: 0, bands: 0, floating: 0, scale: 1, suns: 1 };

function key(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// The world named in the address, or one at random.
export function pickWorld() {
  const asked = new URLSearchParams(location.search).get('world');
  const named = asked ? WORLDS.find((world) => key(world.name) === key(asked)) : null;
  const world = named || WORLDS[Math.floor(Math.random() * WORLDS.length)];
  return { ...DEFAULTS, ...world };
}
