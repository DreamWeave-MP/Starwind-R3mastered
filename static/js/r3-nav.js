// The flight computer: a tactical chart of this session's jumps, projected over the simulation, and
// a permalink that recreates the scene on screen.
//
// The survey readout's SURVEY word or world name opens the chart; Escape or a click on empty
// space closes it, and a click on an earlier stop jumps back there. Every visit is kept as the
// recipe r3-hero.js replays it from: world and seed, backdrop and seed, frame, and the fleet's
// sides. A world or backdrop marked `unlisted` is never charted, never a stop to jump back to, and
// never written into a permalink.
import { guideFor } from './r3-guide.js';

const STORE = 'r3-chart';
const LIMIT = 40;
const SVG = 'http://www.w3.org/2000/svg';
// How far out each region lies, as a fraction of the chart's disc.
const REGIONS = {
  'deep core': 0.07, 'core worlds': 0.15, colonies: 0.25, 'inner rim': 0.35, 'expansion region': 0.46,
  'mid rim': 0.58, 'hutt space': 0.66, 'hydian way': 0.62, 'outer rim': 0.78, 'western reaches': 0.82,
  'gordian reach': 0.74, 'wild space': 0.9, 'unknown regions': 0.95,
};

function hash(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return (h >>> 0) / 4294967296;
}

function read() {
  try {
    const stored = JSON.parse(sessionStorage.getItem(STORE) || 'null');
    if (stored && Array.isArray(stored.path) && stored.nodes && typeof stored.nodes === 'object') return stored;
  } catch { /* storage blocked or corrupt: start a new chart */ }
  return { nodes: {}, path: [] };
}

function write(chart) {
  try {
    sessionStorage.setItem(STORE, JSON.stringify(chart));
  } catch { /* storage blocked: the chart lasts until the page closes */ }
}

// Where a stop sits on the chart: out from the core by its region, round by its name, turned a little
// further the farther out it is, so the stops follow the arms.
function place(stop) {
  const region = String(stop.note || '').split('·')[0].trim().toLowerCase();
  const reach = REGIONS[region] ?? 0.45 + 0.45 * hash(`${stop.label}/reach`);
  const angle = hash(stop.label) * Math.PI * 2 + reach * 2.4;
  return { x: Math.cos(angle) * reach * 92, y: Math.sin(angle) * reach * 46 };
}

function element(name, attributes = {}, parent = null) {
  const node = document.createElementNS(SVG, name);
  for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value);
  if (parent) parent.append(node);
  return node;
}

export function createNav({ stage, survey, jumpTo, live = () => ({}), reduceMotion }) {
  let chart = read();
  let current = null;
  let open = null;

  // The permalink's query: enough for pickWorld, pickVista and pickScenario to draw the same scene.
  function permalink(recipe) {
    const url = new URL(location.href);
    url.hash = '';
    url.search = '';
    if (recipe) {
      const query = url.searchParams;
      query.set('world', recipe.world);
      query.set('seed', String(recipe.seed));
      query.set('vista', recipe.vista);
      if (Number.isFinite(recipe.vseed)) query.set('vseed', String(recipe.vseed));
      if (recipe.frame) query.set('frame', recipe.frame);
      if (recipe.sides && recipe.sides[0]) query.set('fleet', recipe.sides[0]);
      query.set('war', recipe.war ? '1' : '0');
      if (recipe.ship) query.set('ship', recipe.ship);
      if (recipe.pass) query.set('pass', recipe.pass);
    }
    return url.href;
  }

  // The scene a permalink names: this one, or the last charted one when this one is unlisted.
  function linkable() {
    if (current && !current.unlisted) {
      let now = {};
      try { now = live() || {}; } catch { /* the scene's moment is extra; the recipe alone still replays it */ }
      return { ...current, ship: now.ship || null, pass: now.pass || null };
    }
    const last = chart.path[chart.path.length - 1];
    return last && chart.nodes[last] ? chart.nodes[last].recipe : null;
  }

  function arrive(recipe) {
    current = recipe;
    if (!recipe || recipe.unlisted || !recipe.label) return;
    const id = recipe.label.toLowerCase();
    const node = chart.nodes[id] || { label: recipe.label, kind: recipe.vista, visits: 0 };
    node.note = recipe.note;
    node.recipe = recipe;
    node.visits += 1;
    chart.nodes[id] = node;
    if (chart.path[chart.path.length - 1] !== id) chart.path.push(id);
    if (chart.path.length > LIMIT) chart.path.splice(0, chart.path.length - LIMIT);
    for (const key of Object.keys(chart.nodes)) if (!chart.path.includes(key)) delete chart.nodes[key];
    write(chart);
    if (open) render();
  }

  // The readout's parts: its name opens the chart, and a link control copies the scene's address.
  function decorate() {
    for (const part of survey.querySelectorAll('.r3-survey__tag, .r3-survey__name')) {
      part.classList.add('r3-survey__chart');
      part.title = 'Star chart';
    }
    if (survey.querySelector('.r3-survey__link')) return;
    const link = document.createElement('span');
    link.className = 'r3-survey__link';
    link.textContent = 'Link';
    link.title = 'Copy a link to this scene';
    const jump = survey.querySelector('.r3-survey__jump');
    if (jump) jump.after(link);
    else survey.append(link);
  }

  async function copy(control) {
    const target = linkable();
    const href = permalink(target);
    let done = 'Copied';
    try {
      await navigator.clipboard.writeText(href);
    } catch {
      try {
        history.replaceState(history.state, '', href);
        done = 'In address bar';
      } catch {
        done = 'Unavailable';
      }
    }
    control.textContent = done;
    control.classList.add('is-done');
    setTimeout(() => {
      control.textContent = 'Link';
      control.classList.remove('is-done');
    }, 1800);
  }

  survey.addEventListener('click', (event) => {
    const link = event.target.closest('.r3-survey__link');
    if (link) {
      event.stopPropagation();
      copy(link);
      return;
    }
    if (event.target.closest('.r3-survey__chart')) {
      event.stopPropagation();
      if (open) close();
      else show();
    }
  });

  function close() {
    if (!open) return;
    const root = open;
    open = null;
    root.classList.remove('is-open');
    setTimeout(() => root.remove(), reduceMotion ? 0 : 220);
    window.removeEventListener('keydown', onKey);
    document.removeEventListener('pointerdown', onOutside, true);
  }

  // A press anywhere outside the chart closes it and carries on to what it pressed; the readout's
  // own trigger toggles it instead.
  function onOutside(event) {
    if (!open || open.contains(event.target)) return;
    if (event.target.closest && event.target.closest('.r3-survey__chart')) return;
    close();
  }

  function onKey(event) {
    if (event.key === 'Escape') close();
  }

  function show() {
    chart = read();
    const root = document.createElement('div');
    root.className = 'r3-chart';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Star chart');
    // The chart takes the pointer whole: nothing under it shoots, orbits, flies or scans.
    for (const type of ['pointerdown', 'pointerup', 'pointermove', 'click', 'dblclick', 'wheel']) {
      root.addEventListener(type, (event) => event.stopPropagation(), { passive: type === 'wheel' || type === 'pointermove' });
    }
    const travel = (stop) => {
      const node = chart.nodes[stop.dataset.stop];
      if (!node || !node.recipe || stop.dataset.current === '1') return;
      // Mid-jump the drive is busy: the chart stays up until it can take the course.
      if (jumpTo(node.recipe) !== false) close();
    };
    root.addEventListener('click', (event) => {
      const stop = event.target.closest('[data-stop]');
      if (stop) {
        travel(stop);
        return;
      }
      if (!event.target.closest('.r3-chart__head')) close();
    });
    root.addEventListener('keydown', (event) => {
      const stop = event.target.closest && event.target.closest('[data-stop]');
      if (stop && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        travel(stop);
      }
    });
    stage.append(root);
    open = root;
    render();
    requestAnimationFrame(() => root.classList.add('is-open'));
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside, true);
  }

  function render() {
    const root = open;
    if (!root) return;
    root.replaceChildren();
    const stops = chart.path.map((id) => chart.nodes[id]).filter(Boolean);
    const unique = [...new Set(chart.path)];

    const head = document.createElement('p');
    head.className = 'r3-chart__head';
    head.textContent = `Flight computer ▸ ${Math.max(0, chart.path.length - 1)} ${chart.path.length === 2 ? 'jump' : 'jumps'} · ${unique.length} ${unique.length === 1 ? 'system' : 'systems'}`;
    const closeControl = document.createElement('span');
    closeControl.className = 'r3-chart__close';
    closeControl.textContent = 'Close ✕';
    closeControl.addEventListener('click', close);
    head.append(closeControl);
    root.append(head);

    // The map keeps the galaxy's proportions and fits the stage; labels, dots and lines keep one
    // on-screen size whatever that scale is (u: one screen pixel, in the map's units).
    const box = root.getBoundingClientRect();
    const scale = Math.max(0.3, Math.min(box.width / 200, Math.max(40, box.height - 70) / 108));
    const u = 1 / scale;
    const svg = element('svg', { class: 'r3-chart__map', viewBox: '-100 -54 200 108', preserveAspectRatio: 'xMidYMid meet' });
    const defs = element('defs', {}, svg);
    const glow = element('radialGradient', { id: 'r3-chart-core' }, defs);
    element('stop', { offset: '0', 'stop-color': 'currentColor', 'stop-opacity': '0.55' }, glow);
    element('stop', { offset: '0.45', 'stop-color': 'currentColor', 'stop-opacity': '0.16' }, glow);
    element('stop', { offset: '1', 'stop-color': 'currentColor', 'stop-opacity': '0' }, glow);
    // The galaxy: a glow at the core, four arms, and the regions' rings, named along the bottom.
    element('ellipse', { class: 'r3-chart__core', cx: 0, cy: 0, rx: 34, ry: 17, fill: 'url(#r3-chart-core)' }, svg);
    for (let arm = 0; arm < 4; arm++) {
      const points = [];
      for (let i = 0; i <= 48; i++) {
        const reach = 0.08 + (i / 48) * 0.9;
        const angle = arm * Math.PI / 2 + reach * 2.4;
        points.push(`${(Math.cos(angle) * reach * 92).toFixed(2)},${(Math.sin(angle) * reach * 46).toFixed(2)}`);
      }
      element('polyline', { class: 'r3-chart__arm', points: points.join(' '), 'stroke-width': (9 * scale > 40 ? 9 : 7).toString() }, svg);
    }
    for (const [name, reach] of [['Core', 0.15], ['Inner Rim', 0.35], ['Mid Rim', 0.58], ['Outer Rim', 0.78], ['Wild Space', 0.95]]) {
      element('ellipse', { class: 'r3-chart__ring', cx: 0, cy: 0, rx: reach * 92, ry: reach * 46, 'stroke-width': (0.8 * u).toFixed(3), 'stroke-dasharray': `${(2 * u).toFixed(2)} ${(4 * u).toFixed(2)}` }, svg);
      const tag = element('text', { class: 'r3-chart__region', x: 0, y: (reach * 46 + 3.4 * u).toFixed(2), 'font-size': (8 * u).toFixed(2), 'text-anchor': 'middle' }, svg);
      tag.textContent = name;
    }

    const positions = new Map(unique.map((id) => [id, place(chart.nodes[id])]));
    if (stops.length > 1) {
      const points = chart.path.map((id) => positions.get(id)).filter(Boolean).map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`);
      // The course: a soft wide trail under a crisp dashed line that runs toward the present.
      element('polyline', { class: 'r3-chart__trail', points: points.join(' '), 'stroke-width': (5 * u).toFixed(3) }, svg);
      const course = element('polyline', { class: 'r3-chart__path', points: points.join(' '), 'stroke-width': (1.3 * u).toFixed(3), 'stroke-dasharray': `${(5 * u).toFixed(2)} ${(3.5 * u).toFixed(2)}` }, svg);
      course.style.setProperty('--dash', (-8.5 * u).toFixed(3));
    }
    const last = chart.path[chart.path.length - 1];
    const here = current && !current.unlisted ? current.label.toLowerCase() : null;
    // Stops nearer the bottom are drawn last, so their labels sit over the ones behind.
    const order = [...unique].sort((a, b) => positions.get(a).y - positions.get(b).y);
    for (const id of order) {
      const node = chart.nodes[id];
      const at = positions.get(id);
      const isCurrent = id === here;
      const left = at.x > 55;
      const group = element('g', {
        class: `r3-chart__stop${isCurrent ? ' is-current' : ''}${id === last && !here ? ' is-last' : ''}`,
        'data-stop': id, 'data-current': isCurrent ? '1' : '0',
        transform: `translate(${at.x.toFixed(2)} ${at.y.toFixed(2)})`,
        tabindex: isCurrent ? '-1' : '0', role: 'button',
        'aria-label': isCurrent ? `${node.label}, you are here` : `Jump back to ${node.label}`,
      }, svg);
      element('title', {}, group).textContent = `${node.label} · ${node.note || node.kind}${isCurrent ? ' · you are here' : ` · visited ${node.visits}× · jump back`}`;
      element('circle', { class: 'r3-chart__hit', r: (14 * u).toFixed(2) }, group);
      if (isCurrent) {
        element('circle', { class: 'r3-chart__here', r: (7 * u).toFixed(2), 'stroke-width': (1 * u).toFixed(3) }, group);
        element('circle', { class: 'r3-chart__here r3-chart__here--late', r: (7 * u).toFixed(2), 'stroke-width': (1 * u).toFixed(3) }, group);
      }
      element('circle', { class: 'r3-chart__halo', r: (6 * u).toFixed(2) }, group);
      if (node.kind === 'planet' || node.kind === 'shipyard' || node.kind === 'deathStar') {
        element('circle', { class: 'r3-chart__dot', r: (3 * u).toFixed(2) }, group);
      } else {
        const s = 3.6 * u;
        element('path', { class: 'r3-chart__dot', d: `M0 ${-s}L${s} 0L0 ${s}L${-s} 0Z` }, group);
      }
      const dx = (left ? -8 : 8) * u;
      const anchor = left ? 'end' : 'start';
      const label = element('text', { class: 'r3-chart__label', x: dx.toFixed(2), y: (-1.5 * u).toFixed(2), 'font-size': (11 * u).toFixed(2), 'text-anchor': anchor }, group);
      label.textContent = node.label;
      const sub = element('text', { class: 'r3-chart__sub', x: dx.toFixed(2), y: (9.5 * u).toFixed(2), 'font-size': (8.5 * u).toFixed(2), 'text-anchor': anchor }, group);
      sub.textContent = String(node.note || node.kind).split('·')[0].trim();
      guideFor(node.label).then((found) => {
        if (!found || !open || !group.isConnected) return;
        const guide = element('text', { class: 'r3-chart__guide', x: dx.toFixed(2), y: (19.5 * u).toFixed(2), 'font-size': (8.5 * u).toFixed(2), 'text-anchor': anchor }, group);
        guide.textContent = `Guide ▸ ${found.count}`;
      }).catch(() => {});
    }
    const panel = document.createElement('div');
    panel.className = 'r3-chart__panel';
    panel.append(svg);
    root.append(panel);
    const foot = document.createElement('p');
    foot.className = 'r3-chart__foot';
    foot.textContent = stops.length > 1 ? 'Select a stop to jump back' : 'Jump to chart your course';
    root.append(foot);
  }

  return { arrive, decorate, permalink, linkable, close, isOpen: () => !!open };
}
