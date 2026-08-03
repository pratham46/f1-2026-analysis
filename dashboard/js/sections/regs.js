// What 2026 Changed — the regulation reset, per constructor.
//
// Diverging bars from the model's competitiveness deltas. Direction is carried
// by side-of-axis and glyph; the bar keeps the team's own colour, because a
// red/green gain-loss pair would both collide with the liveries and fail for
// the most common colour-vision deficiency.

import { teamColor } from "../lib/data.js";
import { signed } from "../lib/format.js";

export function render(data, root) {
  const reg = data.regulation_impact_2026;
  const deltas = reg?.constructor_competitiveness_change;
  if (!deltas || !Object.keys(deltas).length) return false;

  const body = root.querySelector("#regs-body");
  const parts = [];

  if (reg.description) {
    const p = document.createElement("p");
    p.className = "rg-lede";
    p.textContent = reg.description;
    parts.push(p);
  }

  const entries = Object.entries(deltas).sort((a, b) => b[1] - a[1]);
  const max = Math.max(...entries.map(([, v]) => Math.abs(v)), 1);

  const chart = document.createElement("ol");
  chart.className = "rg-chart";

  const teamName = (id) => {
    const c = (data.constructor_standings_2026 || []).find((x) => x.constructor_id === id);
    if (c?.name) return c.name;
    const d = Object.values(data.driver_info || {}).find((x) => x.team === id);
    return d?.team_name || id;
  };

  for (const [id, delta] of entries) {
    const li = document.createElement("li");
    li.className = "rg-row";
    li.dataset.reveal = "row";
    li.dataset.dir = delta > 0 ? "up" : delta < 0 ? "down" : "level";

    const name = document.createElement("span");
    name.className = "rg-name";
    name.textContent = teamName(id);
    name.style.color = teamColor(id, { text: true });

    const track = document.createElement("span");
    track.className = "rg-track";
    const bar = document.createElement("span");
    bar.className = "rg-bar";
    bar.style.setProperty("--c", teamColor(id));
    bar.style.setProperty("--w", `${(Math.abs(delta) / max) * 50}%`);
    track.append(bar);

    const val = document.createElement("span");
    val.className = "rg-val num";
    val.textContent = delta === 0 ? "—" : `${delta > 0 ? "▲" : "▼"} ${signed(delta)}`;

    li.append(name, track, val);
    chart.append(li);
  }

  const cap = document.createElement("p");
  cap.className = "rg-cap";
  cap.textContent =
    "Modelled change in competitiveness against 2025, in arbitrary units. " +
    "Positive means the reset helped.";

  parts.push(chart, cap);
  body.replaceChildren(...parts);
  return true;
}
