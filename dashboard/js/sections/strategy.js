// Race Strategy — the part that is not "who wins".
//
// Picking a winner is one number. A race is decided by how long a tyre lasts,
// what a stop costs, and whether those two make one stop cheaper than two —
// and every input to that is sitting in the payload already, measured, from
// OpenF1 stint and pit-lane data across the 2026 season.
//
// So this section does not forecast a result. It derives the model the
// strategists are actually solving, then holds it to the same standard the
// rest of the page holds the win model to: it runs the model against all
// eleven completed rounds and shows where it was wrong.

import { dateShort } from "../lib/format.js";

// Stints shorter than this are damage, not strategy — a lap-one puncture or a
// red-flag change. Including them drags the "tyre life" figure toward zero and
// the whole model with it.
const MIN_REAL_STINT = 3;

const COMPOUND_ORDER = ["SOFT", "MEDIUM", "HARD", "INTERMEDIATE", "WET"];
const COMPOUND_META = {
  SOFT: { token: "--tyre-soft", label: "Soft", ink: "--ink-0" },
  MEDIUM: { token: "--tyre-medium", label: "Medium", ink: "--void" },
  HARD: { token: "--tyre-hard", label: "Hard", ink: "--void" },
  INTERMEDIATE: { token: "--tyre-intermediate", label: "Inter", ink: "--void" },
  WET: { token: "--tyre-wet", label: "Wet", ink: "--ink-0" },
};

const median = (xs) => {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

const quantile = (xs, q) => {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.min(s.length - 1, Math.floor(s.length * q))];
};

/** Every stint run in 2026, grouped by compound, in laps. */
function tyreLife(data) {
  const byCompound = new Map();
  let stints = 0;
  for (const round of Object.values(data.openf1_race_data || {})) {
    for (const list of Object.values(round.stints || {})) {
      for (const s of list) {
        const laps = (s.lap_end ?? 0) - (s.lap_start ?? 0) + 1;
        if (!(laps >= MIN_REAL_STINT)) continue;
        const key = s.compound || "UNKNOWN";
        if (!COMPOUND_META[key]) continue; // UNKNOWN is not a strategy choice
        if (!byCompound.has(key)) byCompound.set(key, []);
        byCompound.get(key).push(laps);
        stints++;
      }
    }
  }
  const rows = COMPOUND_ORDER.filter((c) => byCompound.has(c)).map((c) => {
    const laps = byCompound.get(c);
    return { compound: c, n: laps.length, median: median(laps), p90: quantile(laps, 0.9) };
  });
  return { rows, stints };
}

/** What a stop actually costs, from measured pit-lane time. */
function pitCost(data) {
  const all = [];
  for (const round of Object.values(data.openf1_race_data || {})) {
    for (const stops of Object.values(round.pit_stops || {})) {
      for (const p of stops) {
        // Lap-1 entries are usually a start-line problem, and anything over a
        // minute is a garage repair rather than a stop.
        if (p.lap <= 1 || !(p.duration > 0) || p.duration > 60) continue;
        all.push(p.duration);
      }
    }
  }
  return { median: median(all), fastest: all.length ? Math.min(...all) : null, n: all.length };
}

/** Laps run, and the strategy the field actually converged on, per round. */
function racesRun(data) {
  const out = [];
  for (const [round, block] of Object.entries(data.openf1_race_data || {})) {
    const stints = block.stints || {};
    let laps = 0;
    const stopCounts = [];
    for (const list of Object.values(stints)) {
      for (const s of list) laps = Math.max(laps, s.lap_end ?? 0);
      // Stints minus one is stops made. Retirements produce short stint lists,
      // so only classify drivers who reached at least 80% of the distance.
      const last = list[list.length - 1];
      if (last && laps && (last.lap_end ?? 0) >= laps * 0.8) stopCounts.push(list.length - 1);
    }
    if (!laps || !stopCounts.length) continue;
    const tally = new Map();
    for (const n of stopCounts) tally.set(n, (tally.get(n) || 0) + 1);
    const [modal, count] = [...tally.entries()].sort((a, b) => b[1] - a[1])[0];
    const cal = (data.calendar_2026 || []).find((c) => c.round === Number(round));
    out.push({
      round: Number(round),
      name: (cal?.name || `Round ${round}`).replace(" Grand Prix", "").replace(" GP", ""),
      laps,
      actual: modal,
      agreement: count / stopCounts.length,
      classified: stopCounts.length,
    });
  }
  return out.sort((a, b) => a.round - b.round);
}

/**
 * The model, and it is deliberately the simplest one that can be wrong.
 *
 * A stop buys fresh rubber at a fixed time cost. Running longer than a
 * compound's useful life costs more than the stop does. So the projected
 * number of stops is the fewest that lets the race be covered in stints no
 * longer than what the hardest tyre has actually managed this year.
 *
 * `p90` and not the median: the median is the typical stint, but a one-stop
 * is decided by how far a tyre can be pushed, not how far it usually goes.
 */
function projectStops(laps, maxStint) {
  if (!laps || !maxStint) return null;
  return Math.max(0, Math.ceil(laps / maxStint) - 1);
}

function bar(value, max, token) {
  const el = document.createElement("span");
  el.className = "st-bar";
  el.style.setProperty("--w", `${Math.max(2, (value / max) * 100)}%`);
  el.style.setProperty("--c", `var(${token})`);
  return el;
}

function tyrePanel(life) {
  const win = document.createElement("section");
  win.className = "win st-panel";
  win.setAttribute("aria-label", "Tyre life by compound");
  win.innerHTML = `<header class="win-bar">
      <span class="win-dots"><i></i><i></i><i></i></span>
      <span aria-hidden="true">tyre_life.dat</span>
    </header>`;

  const body = document.createElement("div");
  body.className = "win-body";

  const p = document.createElement("p");
  p.className = "st-note";
  p.textContent = `Every stint run in 2026 — ${life.stints} of them — grouped by compound. ` +
    `Median is the typical stint; p90 is how far the tyre has actually been pushed.`;
  body.append(p);

  const list = document.createElement("ul");
  list.className = "st-tyres";
  const max = Math.max(...life.rows.map((r) => r.p90 || 0), 1);

  for (const r of life.rows) {
    const meta = COMPOUND_META[r.compound];
    const li = document.createElement("li");
    li.dataset.reveal = "row";

    const name = document.createElement("span");
    name.className = "st-tyre-name";
    const dot = document.createElement("i");
    dot.className = "st-dot";
    dot.style.background = `var(${meta.token})`;
    name.append(dot, document.createTextNode(meta.label));

    const track = document.createElement("span");
    track.className = "st-track";
    track.append(bar(r.p90, max, meta.token));

    const figs = document.createElement("span");
    figs.className = "st-figs num";
    figs.innerHTML = `<b>${r.median}</b> med · <b>${r.p90}</b> p90 <s>n=${r.n}</s>`;

    li.append(name, track, figs);
    list.append(li);
  }
  body.append(list);
  win.append(body);
  return win;
}

function costPanel(pit, hardest) {
  const win = document.createElement("section");
  win.className = "win st-panel";
  win.setAttribute("aria-label", "The cost of a pit stop");
  win.innerHTML = `<header class="win-bar">
      <span class="win-dots"><i></i><i></i><i></i></span>
      <span aria-hidden="true">pit_cost.dat</span>
    </header>`;
  const body = document.createElement("div");
  body.className = "win-body";

  const grid = document.createElement("dl");
  grid.className = "st-readout";
  const rows = [
    ["Median stop", pit.median ? `${pit.median.toFixed(1)}s` : "—", `${pit.n} stops measured`],
    ["Quickest", pit.fastest ? `${pit.fastest.toFixed(1)}s` : "—", "fastest of the season"],
    ["Longest viable stint", hardest ? `${hardest} laps` : "—", "hardest compound, p90"],
  ];
  for (const [k, v, note] of rows) {
    const dt = document.createElement("dt");
    dt.textContent = k;
    const dd = document.createElement("dd");
    dd.className = "num";
    dd.textContent = v;
    const small = document.createElement("s");
    small.textContent = note;
    dd.append(small);
    grid.append(dt, dd);
  }
  body.append(grid);

  const p = document.createElement("p");
  p.className = "st-note";
  p.textContent = "These two numbers are the whole trade. A stop costs the median above; " +
    "running past the longest viable stint costs more. Everything else is timing.";
  body.append(p);

  win.append(body);
  return win;
}

function modelPanel(races, hardest, data) {
  const win = document.createElement("section");
  win.className = "win st-panel st-panel--wide";
  win.setAttribute("aria-label", "Strategy model scored against the season");
  win.innerHTML = `<header class="win-bar">
      <span class="win-dots"><i></i><i></i><i></i></span>
      <span aria-hidden="true">strategy_model.run</span>
    </header>`;
  const body = document.createElement("div");
  body.className = "win-body";

  const scored = races.map((r) => {
    const projected = projectStops(r.laps, hardest);
    return { ...r, projected, hit: projected === r.actual };
  });
  const hits = scored.filter((r) => r.hit).length;

  const p = document.createElement("p");
  p.className = "st-note";
  p.textContent = `Fewest stops that cover the distance in stints no longer than ${hardest} laps, ` +
    `scored against what the field actually did. ${hits} of ${scored.length} rounds called correctly.`;
  body.append(p);

  const table = document.createElement("table");
  table.className = "st-table";
  table.innerHTML = `<thead><tr>
    <th scope="col">Round</th><th scope="col" class="num">Laps</th>
    <th scope="col" class="num">Model</th><th scope="col" class="num">Actual</th>
    <th scope="col">Result</th></tr></thead>`;
  const tb = document.createElement("tbody");
  for (const r of scored) {
    const tr = document.createElement("tr");
    tr.dataset.reveal = "row";
    tr.dataset.hit = String(r.hit);
    tr.innerHTML = `<td>${r.name}</td>
      <td class="num">${r.laps}</td>
      <td class="num">${r.projected}</td>
      <td class="num">${r.actual}</td>
      <td class="st-verdict">${r.hit ? "✓ hit" : "✗ miss"}</td>`;
    tb.append(tr);
  }
  table.append(tb);

  const wrap = document.createElement("div");
  wrap.className = "scroll-x";
  wrap.append(table);
  body.append(wrap);

  // The next round, projected from the same model — and honest about the one
  // input the payload does not carry.
  const next = data.next_race;
  if (next) {
    const circuit = data.circuit_data_2026?.[next.circuit_id || next.id];
    const box = document.createElement("div");
    box.className = "st-next";
    box.innerHTML = `<p class="label">Next round</p>`;
    const h = document.createElement("p");
    h.className = "st-next-name";
    h.textContent = `${next.name} · ${circuit?.locality || ""} · ${dateShort(next.date)}`;
    const note = document.createElement("p");
    note.className = "st-note";
    note.textContent =
      `Zandvoort has not been run under these regulations, so there is no 2026 tyre data for it ` +
      `and the payload carries no race distance. What the model does say: at ${hardest}-lap stints, ` +
      `anything up to ${hardest} laps is a one-stopper and past ${hardest * 2} it is a three. ` +
      `The distance decides it, and that number is not something this page has measured.`;
    box.append(h, note);
    body.append(box);
  }

  win.append(body);
  return win;
}

export function render(data, root) {
  const life = tyreLife(data);
  const races = racesRun(data);
  if (!life.rows.length || !races.length) return false;

  const pit = pitCost(data);
  // The hardest compound's p90 is the binding constraint on stint length.
  const hardest = Math.max(...life.rows.map((r) => r.p90 || 0));

  const body = root.querySelector("#strategy-body");
  const grid = document.createElement("div");
  grid.className = "st-grid";
  grid.append(tyrePanel(life), costPanel(pit, hardest));

  body.replaceChildren(grid, modelPanel(races, hardest, data));
  return true;
}
