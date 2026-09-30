// What this visitor has done in the galaxy, for as long as the tab stays open: jumps made, worlds
// surveyed, ships shot down by faction, and the grudges and debts that come of it. The fleets read
// it when they arrive: a navy that has lost enough ships to the viewer drops in hot, and a side the
// viewer has helped in a war sometimes flies escort. Nothing says so but the contact brackets.
//
// It lives in sessionStorage, under one key, so it survives a reload or a walk through the guide
// and ends with the tab. Every access is guarded: storage may be blocked, full or hostile, and then
// memory simply lasts for the page. ?memory=clear, hostile-<faction>, furious-<faction> or
// friend-<faction> (the faction keys of r3-shipyard.js) seeds it, for screenshots and tests.

const KEY = 'r3.memory.v1';
// Grudges: a fighter shot down counts one, a capital ship four. They fade by a sixth each jump, so
// three capitals of one navy still count after two jumps, and a single fighter is soon forgotten.
const FIGHTER_GRUDGE = 1;
const CAPITAL_GRUDGE = 4;
const GRUDGE_FADE = 0.85;
export const HOSTILE = 8;
export const FURIOUS = 16;
// Debts: helping one side of a war (shooting its enemy) counts toward it, and fades more slowly.
const FIGHTER_DEBT = 1;
const CAPITAL_DEBT = 3;
const DEBT_FADE = 0.9;
export const FRIENDLY = 4;
const MOST_FACTIONS = 16;
const MOST_WORLDS = 64;
const CEILING = 99;

function blank() {
  return { jumps: 0, killsByFaction: {}, capitalKills: 0, worldsSurveyed: [], rescues: 0, helped: {}, hostility: {}, goodwill: {} };
}

// Only what the shape allows, with numbers finite and bounded, whatever storage handed back.
function sanitize(raw) {
  const state = blank();
  if (!raw || typeof raw !== 'object') return state;
  const count = (value) => (Number.isFinite(value) && value > 0 ? Math.min(value, 1e6) : 0);
  const table = (value, ceiling = 1e6) => {
    const out = {};
    if (!value || typeof value !== 'object') return out;
    for (const [key, number] of Object.entries(value).slice(0, MOST_FACTIONS)) {
      if (typeof key === 'string' && key.length <= 32 && Number.isFinite(number) && number > 0) out[key] = Math.min(number, ceiling);
    }
    return out;
  };
  state.jumps = count(raw.jumps);
  state.capitalKills = count(raw.capitalKills);
  state.rescues = count(raw.rescues);
  state.killsByFaction = table(raw.killsByFaction);
  state.helped = table(raw.helped);
  state.hostility = table(raw.hostility, CEILING);
  state.goodwill = table(raw.goodwill, CEILING);
  if (Array.isArray(raw.worldsSurveyed)) {
    state.worldsSurveyed = raw.worldsSurveyed.filter((name) => typeof name === 'string' && name.length <= 48).slice(-MOST_WORLDS);
  }
  return state;
}

function load() {
  try {
    const text = window.sessionStorage.getItem(KEY);
    return text ? sanitize(JSON.parse(text)) : blank();
  } catch {
    return blank();
  }
}

function save(state) {
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Blocked or full: memory lasts for this page instead.
  }
}

// ?memory=... seeds the state: clear wipes it, the others set one faction's standing.
function seed(state, preset) {
  if (preset === 'clear') return blank();
  const match = /^(hostile|furious|friend)-([a-zA-Z]{1,32})$/.exec(preset || '');
  if (!match) return state;
  const [, kind, faction] = match;
  if (kind === 'friend') {
    state.goodwill[faction] = FRIENDLY * 2.5;
    state.helped[faction] = (state.helped[faction] || 0) + 3;
  } else {
    state.hostility[faction] = kind === 'furious' ? FURIOUS * 1.5 : HOSTILE * 1.5;
    state.killsByFaction[faction] = (state.killsByFaction[faction] || 0) + (kind === 'furious' ? 6 : 3);
    state.capitalKills += kind === 'furious' ? 6 : 3;
  }
  return state;
}

export function createMemory({ search = typeof location === 'undefined' ? '' : location.search } = {}) {
  let preset = null;
  try {
    preset = new URLSearchParams(search).get('memory');
  } catch {
    preset = null;
  }
  let state = load();
  if (preset) {
    state = seed(state, preset);
    save(state);
  }
  const listeners = [];
  const changed = () => {
    save(state);
    for (const listener of listeners) {
      try {
        listener(state);
      } catch {
        // A listener's failure is its own.
      }
    }
  };
  const bump = (tableName, faction, amount, ceiling = 1e6) => {
    if (typeof faction !== 'string' || !faction) return;
    const table = state[tableName];
    if (!(faction in table) && Object.keys(table).length >= MOST_FACTIONS) return;
    table[faction] = Math.min((table[faction] || 0) + amount, ceiling);
  };
  const fade = (tableName, factor) => {
    const table = state[tableName];
    for (const key of Object.keys(table)) {
      table[key] *= factor;
      if (table[key] < 0.25) delete table[key];
    }
  };

  const memory = {
    // A copy of everything remembered.
    get() {
      return JSON.parse(JSON.stringify(state));
    },
    // Something happened: 'jump', 'survey' { world }, 'kill' { faction, capital, enemy },
    // 'rescue', or 'helped' { faction }.
    record(type, data = {}) {
      try {
        if (type === 'jump') {
          state.jumps = Math.min(state.jumps + 1, 1e6);
          fade('hostility', GRUDGE_FADE);
          fade('goodwill', DEBT_FADE);
        } else if (type === 'survey') {
          const name = typeof data.world === 'string' ? data.world.slice(0, 48) : '';
          if (!name) return;
          state.worldsSurveyed = state.worldsSurveyed.filter((world) => world !== name);
          state.worldsSurveyed.push(name);
          if (state.worldsSurveyed.length > MOST_WORLDS) state.worldsSurveyed.shift();
        } else if (type === 'kill') {
          const capital = !!data.capital;
          bump('killsByFaction', data.faction, 1);
          if (capital) state.capitalKills = Math.min(state.capitalKills + 1, 1e6);
          bump('hostility', data.faction, capital ? CAPITAL_GRUDGE : FIGHTER_GRUDGE, CEILING);
          // Shooting one side of a war helps the other.
          if (data.enemy) {
            bump('goodwill', data.enemy, capital ? CAPITAL_DEBT : FIGHTER_DEBT, CEILING);
            bump('helped', data.enemy, 1);
          }
        } else if (type === 'rescue') {
          state.rescues = Math.min(state.rescues + 1, 1e6);
          if (data.faction) bump('goodwill', data.faction, CAPITAL_DEBT, CEILING);
        } else if (type === 'helped') {
          bump('helped', data.faction, 1);
          bump('goodwill', data.faction, FIGHTER_DEBT, CEILING);
        } else {
          return;
        }
        changed();
      } catch {
        // Memory never breaks the scene.
      }
    },
    hostility(faction) {
      return state.hostility[faction] || 0;
    },
    goodwill(faction) {
      return state.goodwill[faction] || 0;
    },
    // How a faction's ships regard the viewer now: 'furious', 'hostile', 'friendly' or null. A
    // grudge outweighs a debt.
    stance(faction) {
      const grudge = memory.hostility(faction);
      if (grudge >= FURIOUS) return 'furious';
      if (grudge >= HOSTILE) return 'hostile';
      if (memory.goodwill(faction) >= FRIENDLY) return 'friendly';
      return null;
    },
    // Whether this load was seeded from the address, so the first fleet should honour it at once.
    seeded: !!preset && preset !== 'clear',
    onChange(listener) {
      if (typeof listener !== 'function') return () => {};
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        if (index >= 0) listeners.splice(index, 1);
      };
    },
  };
  return memory;
}

// Where the next fleet comes from, when the viewer has made enemies or friends: a navy with a grudge
// tends to find them (on patrol, so it is the only thing in the sky), and a side they helped
// sometimes turns up, at war with its enemy. Otherwise the scenario stands as picked.
export function steerScenario(scenario, memory, random, eras, { force = false } = {}) {
  if (!memory || !scenario) return scenario;
  try {
    const known = eras.flat();
    const worst = known.reduce((best, key) => (memory.hostility(key) > memory.hostility(best) ? key : best), known[0]);
    if (memory.hostility(worst) >= HOSTILE && (force || random() < 0.6)) return { war: false, sides: [worst] };
    const dearest = known.reduce((best, key) => (memory.goodwill(key) > memory.goodwill(best) ? key : best), known[0]);
    if (memory.goodwill(dearest) >= FRIENDLY && (force || random() < 0.35)) {
      const era = eras.find((pair) => pair.includes(dearest));
      const enemy = era[0] === dearest ? era[1] : era[0];
      return { war: true, sides: [dearest, enemy] };
    }
  } catch {
    // An unreadable memory changes nothing.
  }
  return scenario;
}
