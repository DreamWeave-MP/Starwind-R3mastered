// The hero's way into the Game Guide: how many guide pages the world on screen has, read from the
// index Zola builds at r3/guide-index/ (templates/macros/r3-guide.html). It's fetched once, and only
// when a readout first asks. The link lands on Guide by world, at that world's anchor.

const INDEX_URL = new URL('../r3/guide-index/', import.meta.url);
const WORLDS_URL = new URL('../guide/worlds/', import.meta.url);

let pending = null;

function load() {
  if (!pending) {
    pending = fetch(INDEX_URL)
      .then((response) => (response.ok ? response.json() : { worlds: {} }))
      .catch(() => ({ worlds: {} }));
  }
  return pending;
}

// The guide's pages for a world, or null when the guide never goes there.
export async function guideFor(name) {
  const world = (await load()).worlds?.[name];
  if (!world || !world.count) return null;
  return {
    count: world.count,
    url: new URL(`#world-${world.slug}`, WORLDS_URL).href,
    entries: world.entries || [],
  };
}

// The line for a readout, such as the sensor overlay's: "Guide ▸ 14 entries in this system", or null.
export async function guideLine(name) {
  const found = await guideFor(name);
  if (!found) return null;
  return { text: `Guide ▸ ${found.count} ${found.count === 1 ? 'entry' : 'entries'} in this system`, count: found.count, url: found.url };
}

// Adds the guide link to the survey readout for this world, if the guide has pages for it. A
// readout that has moved on to another world by the time the index arrives is left alone.
export function decorateSurvey(survey, name) {
  survey.dataset.guideWorld = name;
  guideLine(name).then((line) => {
    if (!line || survey.dataset.guideWorld !== name || survey.querySelector('.r3-survey__guide')) return;
    const link = document.createElement('a');
    link.className = 'r3-survey__guide';
    link.href = line.url;
    // "Guide ▸ 47", then " entries in this system", which a phone leaves off (sass/brand.sass).
    const count = document.createElement('span');
    count.textContent = `Guide ▸ ${line.count}`;
    const more = document.createElement('span');
    more.className = 'r3-survey__guide-more';
    more.textContent = ` ${line.count === 1 ? 'entry' : 'entries'} in this system`;
    link.append(count, more);
    // The readout is decorative (aria-hidden); Guide by world is in the guide's own navigation.
    link.tabIndex = -1;
    survey.append(link);
  });
}
