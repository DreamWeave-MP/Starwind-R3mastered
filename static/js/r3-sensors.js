// Sensors: hold Shift, or tap SENSORS in the survey readout, and the hero strips down to what a
// tactical scope would show. The sky dims and loses its bloom, the contacts' brackets harden and
// read out their shields, hull and subsystems, every ship draws its velocity vector, fighters get
// their own tracks, the planet its orbital lanes, and the system is named in the corner. Release,
// and it all fades back.
//
// It reads the fleet's own state through its kit, and draws on a 2D canvas over the scene only
// while it is shown, so it costs nothing the rest of the time.

const TYPING = 'input, textarea, select, [contenteditable=""], [contenteditable="true"]';

export function createSensors({ hero, overlay, survey, fleet, uniform, reduceMotion, requestFrame }) {
  const canvas = document.createElement('canvas');
  canvas.className = 'r3-sensors';
  canvas.setAttribute('aria-hidden', 'true');
  overlay.append(canvas);
  const context = canvas.getContext('2d');

  const readout = document.createElement('div');
  readout.className = 'r3-sensors__readout';
  readout.setAttribute('aria-hidden', 'true');
  overlay.append(readout);

  let held = false;
  let toggled = false;
  let level = 0;
  let drawn = false;
  let readoutAt = -1;
  let clock = 0;
  const tracks = new WeakMap();
  const details = new WeakMap();

  const typing = () => {
    const active = document.activeElement;
    return !!active && active !== document.body && active.matches(TYPING);
  };
  function onKeyDown(event) {
    if (event.key !== 'Shift' || event.repeat || event.ctrlKey || event.altKey || event.metaKey || typing()) return;
    held = true;
    requestFrame();
  }
  function onKeyUp(event) {
    if (event.key !== 'Shift' || !held) return;
    held = false;
    requestFrame();
  }
  function onBlur() {
    held = false;
    requestFrame();
  }
  function onSurveyClick(event) {
    if (!event.target.closest('.r3-survey__sensors')) return;
    toggled = !toggled;
    survey.classList.toggle('is-sensing', toggled);
    requestFrame();
  }
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  window.addEventListener('blur', onBlur);
  survey.addEventListener('click', onSurveyClick);

  function size() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = overlay.clientWidth;
    const height = overlay.clientHeight;
    if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
    }
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    return { width, height, ratio };
  }

  function accent() {
    return getComputedStyle(hero).getPropertyValue('--dw-accent').trim() || '#7fded0';
  }

  // Per contact: a line under its label with shields, hull and range, made once and updated at
  // most ten times a second.
  function detailFor(visit) {
    let line = details.get(visit.contact);
    if (!line) {
      line = document.createElement('span');
      line.className = 'r3-contact__sensor';
      visit.contact.element.append(line);
      details.set(visit.contact, line);
    }
    return line;
  }

  function arrow(from, to, head) {
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke();
    const angle = Math.atan2(to.y - from.y, to.x - from.x);
    context.beginPath();
    context.moveTo(to.x, to.y);
    context.lineTo(to.x - head * Math.cos(angle - 0.45), to.y - head * Math.sin(angle - 0.45));
    context.moveTo(to.x, to.y);
    context.lineTo(to.x - head * Math.cos(angle + 0.45), to.y - head * Math.sin(angle + 0.45));
    context.stroke();
  }

  // Scratch vectors, made from the fleet's own on first use (this module does not import three.js).
  let at = null;
  let ahead = null;
  let future = null;
  function draw(kit, width, height, ratio) {
    if (!at) {
      at = kit.camera.position.clone();
      ahead = at.clone();
      future = at.clone();
    }
    const colour = accent();
    context.clearRect(0, 0, width, height);
    context.globalAlpha = level;
    context.strokeStyle = colour;
    context.fillStyle = colour;
    context.lineWidth = 1;
    context.font = '600 9px ui-monospace, "DejaVu Sans Mono", monospace';

    // The planet's orbital lanes, where the sky drew it.
    const disc = kit.planetUniforms && kit.planetUniforms.uPlanetDisc ? kit.planetUniforms.uPlanetDisc.value : null;
    if (disc && disc.z > 4) {
      const cx = disc.x / ratio;
      const cy = height - disc.y / ratio;
      const radius = disc.z / ratio;
      context.save();
      context.setLineDash([2, 5]);
      context.globalAlpha = level * 0.45;
      for (const [reach, flat, tilt] of [[1.28, 0.2, -0.08], [1.62, 0.26, -0.05], [2.1, 0.3, -0.03]]) {
        context.beginPath();
        context.ellipse(cx, cy, radius * reach, radius * reach * flat, tilt, Math.PI * 1.05, Math.PI * 1.95, true);
        context.stroke();
      }
      context.restore();
    }

    // Capital ships: a velocity vector, and the numbers under their brackets.
    let contacts = 0;
    const refresh = clock - readoutAt > 0.1;
    for (const visit of kit.visits) {
      if (!visit.ship || (visit.state !== 'cruising' && visit.state !== 'exploding')) continue;
      contacts += 1;
      kit.screenOf(visit.position, at);
      future.copy(visit.position).addScaledVector(visit.velocity, 5);
      kit.screenOf(future, ahead);
      context.globalAlpha = level * 0.9;
      arrow(at, ahead, 6);
      context.beginPath();
      context.arc(at.x, at.y, 3, 0, Math.PI * 2);
      context.stroke();
      if (refresh) {
        const shield = visit.shieldMax > 0 ? Math.max(0, Math.round((100 * visit.shield) / visit.shieldMax)) : 0;
        const hull = Math.max(0, 9 - visit.hull);
        const range = kit.camera.position.distanceTo(visit.position) * 0.73;
        const speed = visit.velocity.length() * 120;
        detailFor(visit).textContent = `SHD ${String(shield).padStart(3, ' ')}%  HULL ${'▮'.repeat(Math.min(9, hull))}${'▯'.repeat(9 - Math.min(9, hull))}  RNG ${range.toFixed(1)} Mm  ${speed.toFixed(0)} MGLT`;
      }
    }

    // Fighters: a diamond each, and where it is heading, from its last few positions.
    let fighters = 0;
    const flights = kit.pass && kit.pass.active ? kit.pass.flights : [];
    for (const flight of flights) {
      for (const fighter of flight.fighters) {
        if (fighter.dead || !fighter.group.visible) continue;
        fighters += 1;
        kit.screenOf(fighter.group.position, at);
        let track = tracks.get(fighter);
        if (!track) {
          track = { x: at.x, y: at.y, vx: 0, vy: 0 };
          tracks.set(fighter, track);
        }
        track.vx += (at.x - track.x - track.vx) * 0.35;
        track.vy += (at.y - track.y - track.vy) * 0.35;
        track.x = at.x;
        track.y = at.y;
        context.globalAlpha = level * 0.85;
        context.beginPath();
        context.moveTo(at.x, at.y - 4);
        context.lineTo(at.x + 4, at.y);
        context.lineTo(at.x, at.y + 4);
        context.lineTo(at.x - 4, at.y);
        context.closePath();
        context.stroke();
        const reach = Math.min(28, Math.hypot(track.vx, track.vy) * 6);
        if (reach > 2) {
          const angle = Math.atan2(track.vy, track.vx);
          context.beginPath();
          context.moveTo(at.x + 5 * Math.cos(angle), at.y + 5 * Math.sin(angle));
          context.lineTo(at.x + (5 + reach) * Math.cos(angle), at.y + (5 + reach) * Math.sin(angle));
          context.stroke();
        }
      }
    }

    // The system, named in the corner, from the survey readout and the fleet's scenario.
    if (refresh) {
      readoutAt = clock;
      const name = survey.querySelector('.r3-survey__name');
      const note = survey.querySelector('.r3-survey__note');
      const sides = kit.sides.map((side) => side.name).join(' ✕ ');
      readout.replaceChildren();
      for (const [part, text] of [
        ['title', `Tactical ▸ ${name ? name.textContent : 'unknown'}`],
        ['note', note ? note.textContent : ''],
        ['counts', `Capitals ${contacts} · Fighters ${fighters} · ${kit.scenario.war ? 'Engaged' : 'Patrol'}`],
        ['sides', sides],
      ]) {
        if (!text) continue;
        const line = document.createElement('span');
        line.className = `r3-sensors__${part}`;
        line.textContent = text;
        readout.append(line);
      }
    }
    context.globalAlpha = 1;
  }

  return {
    get active() {
      return level > 0.01;
    },
    // Called each frame before the composite: eases the scope in and out, and draws it.
    update(dt) {
      clock += dt || 0.016;
      const target = held || toggled ? 1 : 0;
      level = reduceMotion ? target : level + (target - level) * Math.min(1, (dt || 0.016) * 6);
      if (Math.abs(target - level) < 0.002) level = target;
      uniform.value = level;
      overlay.classList.toggle('is-sensing', level > 0.5);
      readout.style.opacity = String(level);
      if (level < 0.01) {
        if (drawn) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          drawn = false;
        }
        return;
      }
      const current = fleet();
      if (!current || !current.kit) return;
      const { width, height, ratio } = size();
      draw(current.kit, width, height, ratio);
      drawn = true;
      if (target !== level) requestFrame();
    },
    dispose() {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
      survey.removeEventListener('click', onSurveyClick);
      canvas.remove();
      readout.remove();
    },
  };
}
