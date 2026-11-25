// Pace Lab — lap-level analysis computed on free-server-2.
//
// The Worker can afford ~40 requests a run; every lap of the season is tens of
// thousands of rows. So server 2 (server2/f1api) pulls and analyses them and
// this section just fetches the result. No committed fallback: when server 2
// is unreachable the section hides, like every section without its data.

import { dateShort } from "../lib/format.js";

let pending = null; // paint() runs twice (seed, live), and three sections share it — fetch once
export function fetchAnalysis() {
  const url = window.F1_ANALYSIS_URL;
  if (!url) return Promise.resolve(null);
  pending ??= fetch(url, { signal: AbortSignal.timeout(10000) })
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null);
  return pending;
}

const pct = (x) => `${x >= 0 ? "+" : ""}${x.toFixed(3)}%`;
const sec = (x) => `${x >= 0 ? "+" : ""}${x.toFixed(3)}s`;

function panel(file, label, { wide = false } = {}) {
  const win = document.createElement("section");
  win.className = `win st-panel${wide ? " st-panel--wide" : ""}`;
  win.setAttribute("aria-label", label);
  win.innerHTML = `<header class="win-bar">
      <span class="win-dots"><i></i><i></i><i></i></span>
      <span aria-hidden="true">${file}</span>
    </header>`;
  const body = document.createElement("div");
  body.className = "win-body";
  win.append(body);
  return { win, body };
}

function note(text) {
  const p = document.createElement("p");
  p.className = "st-note";
  p.textContent = text;
  return p;
}

/** One labelled bar row; reuses the strategy section's tyre-row grid. */
function row(name, colour, frac, figs) {
  const li = document.createElement("li");
  li.dataset.reveal = "row";
  const n = document.createElement("span");
  n.className = "st-tyre-name";
  const dot = document.createElement("i");
  dot.className = "st-dot";
  dot.style.background = colour || "var(--ink-2)";
  n.append(dot, document.createTextNode(name));
  const track = document.createElement("span");
  track.className = "st-track";
  const bar = document.createElement("span");
  bar.className = "st-bar";
  bar.style.setProperty("--w", `${Math.max(2, frac * 100)}%`);
  bar.style.setProperty("--c", colour || "var(--ink-2)");
  track.append(bar);
  const f = document.createElement("span");
  f.className = "st-figs num";
  f.innerHTML = figs;
  li.append(n, track, f);
  return li;
}

function list(items) {
  const ul = document.createElement("ul");
  ul.className = "st-tyres lab-rows";
  ul.append(...items);
  return ul;
}

function pacePanel(a) {
  const { win, body } = panel("race_pace.dat", "Season race pace");
  const rows = a.race_pace;
  const worst = Math.max(...rows.map((r) => r.median_gap_pct), 0.001);
  body.append(
    note(`Median clean-lap pace in each race, as a gap to the fastest car that day — then the ` +
      `median of that across the season. Longer bar is faster. Clean means no lap 1, no in/out ` +
      `laps, no safety-car laps, nothing 5% off the driver's own median.`),
    list(rows.map((r) => row(r.code, a.team_colours[r.team], 1 - r.median_gap_pct / (worst * 1.15),
      `<b>${pct(r.median_gap_pct)}</b> <s>${r.races} races</s>`)))
  );
  return win;
}

function matePanel(a) {
  const { win, body } = panel("teammates.dat", "Teammate pace battles");
  const max = Math.max(...a.teammates.map((t) => t.median_delta_pct), 0.001);
  body.append(
    note(`Same car, same race, same conditions — the cleanest comparison in the sport. ` +
      `Median pace gap between teammates, and how many races the faster one was faster.`),
    list(a.teammates.map((t) => row(`${t.faster.code}>${t.slower.code}`, t.colour,
      t.median_delta_pct / max,
      `<b>${t.median_delta_pct.toFixed(3)}%</b> <s>${t.faster_won}/${t.races}</s>`)))
  );
  return win;
}

const TYRE = { SOFT: "var(--tyre-soft)", MEDIUM: "var(--tyre-medium)", HARD: "var(--tyre-hard)" };

function tyrePanel(a) {
  const { win, body } = panel("tyre_deg.dat", "Tyre degradation");
  const maxC = Math.max(...a.tyre_deg.map((t) => t.median_deg_s_per_lap), 0.001);
  const maxT = Math.max(...a.tyre_management.map((t) => Math.abs(t.rel_deg_s_per_lap)), 0.001);
  const h = document.createElement("p");
  h.className = "label";
  h.textContent = "Kindest on tyres → hardest";
  body.append(
    note(`Lap-time slope across every dry stint, corrected for fuel burn ` +
      `(${a.method.fuel_correction_s_per_lap}s/lap). Then each team against the field on the ` +
      `same compound in the same race — negative is gentler on the rubber.`),
    list(a.tyre_deg.map((t) => row(t.compound[0] + t.compound.slice(1).toLowerCase(), TYRE[t.compound],
      t.median_deg_s_per_lap / maxC,
      `<b>${t.median_deg_s_per_lap.toFixed(3)}</b>s/lap <s>n=${t.stints}</s>`))),
    h,
    list(a.tyre_management.map((t) => row(t.team.replace(" F1 Team", "").replace("Racing Bulls", "RB"),
      t.colour, Math.abs(t.rel_deg_s_per_lap) / maxT,
      `<b>${sec(t.rel_deg_s_per_lap)}</b>/lap`)))
  );
  return win;
}

function simPanel(a) {
  const s = a.season_sim;
  const { win, body } = panel("season_sim.run", "Season simulation", { wide: true });
  const left = s.remaining_races.length
    ? `the remaining ${s.remaining_races.length} round${s.remaining_races.length > 1 ? "s" : ""} ` +
      `(${s.remaining_races.join(", ")}${s.remaining_sprints ? ` + ${s.remaining_sprints} sprint` : ""})`
    : "no remaining rounds";
  body.append(note(`${s.sims.toLocaleString()} simulations of ${left}. Each driver's result is drawn ` +
    `from their own last eight race-pace gaps plus noise, with a retirement rate from their measured ` +
    `DNF record — no reputation, no grid position, just the stopwatch.`));

  const table = document.createElement("table");
  table.className = "st-table";
  table.innerHTML = `<thead><tr><th>Driver</th><th class="num">Now</th><th class="num">Projected</th>
    <th class="num">80% range</th><th class="num">Likely finish</th><th class="num">Title</th></tr></thead>`;
  const tb = document.createElement("tbody");
  for (const d of s.drivers) {
    const tr = document.createElement("tr");
    tr.dataset.reveal = "row";
    const name = document.createElement("td");
    const dot = document.createElement("i");
    dot.className = "st-dot lab-inline-dot";
    dot.style.background = a.team_colours[d.team] || "var(--ink-2)";
    name.append(dot, document.createTextNode(d.name));
    tr.append(name);
    for (const v of [d.points_now, d.expected_points.toFixed(1), `${d.p10}–${d.p90}`,
      `P${d.likely_position} · ${Math.round(d.p_likely_position * 100)}%`,
      d.p_title >= 0.0005 ? `${(d.p_title * 100).toFixed(1)}%` : "—"]) {
      const td = document.createElement("td");
      td.className = "num";
      td.textContent = v;
      tr.append(td);
    }
    tb.append(tr);
  }
  table.append(tb);
  const wrap = document.createElement("div");
  wrap.className = "scroll-x";
  wrap.append(table);
  body.append(wrap);
  return win;
}

export async function render(_data, root) {
  const a = await fetchAnalysis();
  if (!a?.race_pace?.length) return false;

  const stamp = root.querySelector("#lab-stamp");
  if (stamp) {
    stamp.textContent = `${a.laps_analysed.toLocaleString()} laps · ${a.races_analysed} races · ` +
      `computed on server 2 · ${dateShort(a.generated_at.slice(0, 10))}`;
  }
  const grid = document.createElement("div");
  grid.className = "st-grid";
  grid.append(pacePanel(a), matePanel(a), tyrePanel(a));
  root.querySelector("#lab-body").replaceChildren(grid, simPanel(a));
  return true;
}
