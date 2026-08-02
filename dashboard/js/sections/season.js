// The Season So Far — one rail of 22 rounds; a round opens the race modal.
//
// Merges the old timeline and calendar sections, which were two renderings of
// the same list. Completed rounds are solid, upcoming are outlined.
//
// The tyre-strategy chart lives inside the modal and MUST be width-gated: a
// Plotly newPlot at width 0 crushes every bar against the axis.

import { teamColor, driverName, driverTeam, raceWinner } from "../lib/data.js";
import { dateShort } from "../lib/format.js";
import { openModal } from "../lib/modal.js";
import { plotWhenVisible, baseLayout, resolveToken } from "../lib/charts.js";

// Tyre compounds use their real colour code — see DESIGN.md. `ink` is the
// label colour that clears 4.5:1 on that fill, which flips with the compound:
// black on the light ones, white on the dark ones.
const COMPOUNDS = {
  SOFT: { fill: "--tyre-soft", ink: "--ink-0", label: "Soft" },
  MEDIUM: { fill: "--tyre-medium", ink: "--surface-0", label: "Medium" },
  HARD: { fill: "--tyre-hard", ink: "--surface-0", label: "Hard" },
  INTERMEDIATE: { fill: "--tyre-intermediate", ink: "--surface-0", label: "Inter" },
  WET: { fill: "--tyre-wet", ink: "--ink-0", label: "Wet" },
  UNKNOWN: { fill: "--tyre-unknown", ink: "--surface-0", label: "Unknown" },
};

// Plotly parses CSS colour FUNCTIONS poorly — it understood neither the
// oklch() strings this used to emit nor a var() reference, and silently fell
// back to its own categorical palette, so every stint came out a random hue.
// resolveToken hands it a literal hex, which it does understand.
const compound = (c) => COMPOUNDS[c] || COMPOUNDS.UNKNOWN;

function resultsTable(race, data) {
  const table = document.createElement("table");
  table.className = "sea-results";
  table.innerHTML = `<thead><tr>
    <th scope="col">#</th><th scope="col">Driver</th>
    <th scope="col">Time / gap</th><th scope="col" class="num">Pts</th>
  </tr></thead>`;
  const tb = document.createElement("tbody");
  for (const r of (race.results || []).slice(0, 10)) {
    const tr = document.createElement("tr");
    const pos = document.createElement("td");
    pos.className = "num";
    pos.textContent = r.position;
    const who = document.createElement("td");
    who.textContent = driverName(data, r.driver_id);
    who.style.color = teamColor(r.constructor_id || driverTeam(data, r.driver_id), { text: true });
    if (r.fastest_lap) {
      const fl = document.createElement("span");
      fl.className = "sea-fl";
      fl.textContent = "FL";
      fl.title = "Fastest lap";
      who.append(" ", fl);
    }
    const t = document.createElement("td");
    t.className = "num sea-gap";
    t.textContent = r.time_or_gap || r.status || "—";
    const p = document.createElement("td");
    p.className = "num";
    p.textContent = r.points ?? 0;
    tr.append(pos, who, t, p);
    tb.append(tr);
  }
  table.append(tb);
  return table;
}

function strategyChart(round, data) {
  const of = data.openf1_race_data?.[String(round)] || data.openf1_race_data?.[round];
  const stints = of?.stints;
  if (!stints || !Object.keys(stints).length) return null;

  const wrap = document.createElement("div");
  wrap.className = "sea-strategy";
  const h = document.createElement("h4");
  h.textContent = "Tyre strategy";
  const plotEl = document.createElement("div");
  plotEl.className = "sea-plot";

  // Key for the compounds this race actually ran — a wet-race legend on a dry
  // race is noise.
  const used = new Set();
  for (const list of Object.values(stints)) for (const s of list) used.add(s.compound);
  const key = document.createElement("ul");
  key.className = "sea-tyre-key";
  for (const name of Object.keys(COMPOUNDS)) {
    if (!used.has(name)) continue;
    const c = COMPOUNDS[name];
    const li = document.createElement("li");
    const dot = document.createElement("span");
    dot.className = "sea-tyre-dot";
    dot.style.background = `var(${c.fill})`;
    li.append(dot, document.createTextNode(c.label));
    key.append(li);
  }

  wrap.append(h, key, plotEl);

  // Order drivers by finishing position so the chart reads like the result.
  const order = [];
  for (const r of data.real_race_results_2026?.find((x) => x.round === round)?.results || []) {
    if (stints[r.driver_id]) order.push(r.driver_id);
  }
  for (const id of Object.keys(stints)) if (!order.includes(id)) order.push(id);

  plotWhenVisible(plotEl, (el) => {
    const traces = [];
    for (const id of order) {
      for (const s of stints[id]) {
        const start = s.lap_start || 1;
        const end = s.lap_end || start;
        const c = compound(s.compound);
        traces.push({
          type: "bar",
          orientation: "h",
          x: [Math.max(1, end - start + 1)],
          y: [driverName(data, id)],
          base: [start],
          marker: { color: resolveToken(c.fill), line: { color: resolveToken("--surface-1"), width: 1 } },
          text: [s.compound?.[0] || ""],
          textposition: "inside",
          insidetextfont: { color: resolveToken(c.ink), size: 10 },
          hovertemplate: `${driverName(data, id)}<br>${c.label} · laps ${start}–${end}<extra></extra>`,
          showlegend: false,
        });
      }
    }
    window.Plotly.newPlot(el, traces, {
      ...baseLayout({
        barmode: "stack",
        height: Math.max(320, order.length * 22 + 80),
        margin: { l: 130, r: 16, t: 8, b: 40 },
        xaxis: { title: { text: "Lap", font: { size: 11 } }, gridcolor: resolveToken("--surface-3") },
        yaxis: { autorange: "reversed", gridcolor: "rgba(0,0,0,0)" },
      }),
    }, { displayModeBar: false, responsive: true });
  });

  return wrap;
}

function openRace(round, data) {
  const race = data.real_race_results_2026?.find((r) => r.round === round);
  const cal = (data.calendar_2026 || []).find((r) => r.round === round);
  const pred = (data.race_predictions || []).find((r) => r.round === round);
  const circuit = data.circuit_data_2026?.[cal?.circuit_id || race?.circuit_id];

  const body = document.createElement("div");
  body.className = "sea-modal";

  const meta = document.createElement("p");
  meta.className = "sea-meta";
  meta.textContent = [
    circuit?.name,
    circuit?.locality && circuit?.country ? `${circuit.locality}, ${circuit.country}` : null,
    dateShort(race?.date || cal?.date),
  ].filter(Boolean).join(" · ");
  body.append(meta);

  // Predicted vs actual, stated plainly.
  if (pred) {
    const call = document.createElement("p");
    call.className = "sea-call";
    const predicted = pred.predicted_top5?.[0]?.driver_id;
    const actual = race ? raceWinner(race) : null;
    if (predicted && actual) {
      call.dataset.hit = String(predicted === actual);
      call.textContent = predicted === actual
        ? `Model called ${driverName(data, predicted)} — correct.`
        : `Model called ${driverName(data, predicted)} · ${driverName(data, actual)} won.`;
    } else if (predicted) {
      call.textContent = `Model favours ${driverName(data, predicted)}.`;
    }
    if (call.textContent) body.append(call);
  }

  const layout = document.createElement("div");
  layout.className = "sea-modal-grid";

  const left = document.createElement("div");
  if (race?.results?.length) left.append(resultsTable(race, data));
  else {
    const p = document.createElement("p");
    p.className = "sea-empty";
    p.textContent = "This round has not been run yet.";
    left.append(p);
  }

  const right = document.createElement("div");
  right.id = "season-3d";
  right.className = "sea-track";
  const img = data.track_layouts?.[cal?.circuit_id || race?.circuit_id]?.img_url;
  if (img) {
    const el = document.createElement("img");
    el.src = img;
    el.alt = `${circuit?.name || "Circuit"} layout`;
    el.loading = "lazy";
    right.append(el);
  }

  layout.append(left, right);
  body.append(layout);

  const strategy = race ? strategyChart(round, data) : null;
  if (strategy) body.append(strategy);

  openModal({
    title: cal?.name || race?.name || `Round ${round}`,
    body,
    // Task 16 registers 3D teardown here.
    onClose: () => {},
  });
}

export function render(data, root) {
  const calendar = data.calendar_2026 || [];
  if (!calendar.length) return false;

  const done = new Set((data.real_race_results_2026 || []).map((r) => r.round));
  const rail = document.createElement("ol");
  rail.className = "sea-rail";

  for (const race of calendar) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "sea-round";
    btn.type = "button";
    btn.dataset.done = String(done.has(race.round));

    const n = document.createElement("span");
    n.className = "sea-n num";
    n.textContent = String(race.round).padStart(2, "0");

    const nm = document.createElement("span");
    nm.className = "sea-name";
    nm.textContent = (race.name || "").replace(" Grand Prix", "").replace(" GP", "");

    const dt = document.createElement("span");
    dt.className = "sea-date num";
    dt.textContent = dateShort(race.date);

    btn.append(n, nm, dt);

    const win = data.real_race_results_2026?.find((r) => r.round === race.round);
    const winner = win ? raceWinner(win) : null;
    if (winner) {
      const w = document.createElement("span");
      w.className = "sea-winner";
      w.textContent = driverName(data, winner);
      w.style.color = teamColor(driverTeam(data, winner), { text: true });
      btn.append(w);
      btn.style.setProperty("--c", teamColor(driverTeam(data, winner)));
    }

    btn.addEventListener("click", () => openRace(race.round, data));
    li.append(btn);
    rail.append(li);
  }

  root.querySelector("#season-body").replaceChildren(rail);
  return true;
}
