// Form & Momentum — championship points by season, per driver.
//
// Merges the old momentum and history sections, which drew from the same
// driver_rolling_form data twice. Team-mates share a hue and separate by line
// style — never by inventing a second colour for one of them.

import { teamColor, driverName } from "../lib/data.js";
import { plot, baseLayout, resolveToken } from "../lib/charts.js";

const TOP_N = 10;

export function render(data, root) {
  const form = data.driver_rolling_form || {};
  const standings = data.driver_standings_2026 || [];
  if (!Object.keys(form).length || !standings.length) return false;

  const body = root.querySelector("#momentum-body");
  const el = document.createElement("div");
  el.className = "mo-plot";
  body.replaceChildren(el);

  const shown = standings.slice(0, TOP_N).filter((d) => form[d.driver_id]?.seasons?.length);
  if (!shown.length) return false;

  // Track how many drivers we have already drawn per team so the second one
  // gets the dashed line rather than a different colour.
  const seenPerTeam = new Map();
  const traces = shown.map((d) => {
    const f = form[d.driver_id];
    const n = seenPerTeam.get(d.team) || 0;
    seenPerTeam.set(d.team, n + 1);
    return {
      type: "scatter",
      mode: "lines+markers",
      name: d.short || driverName(data, d.driver_id),
      x: f.seasons.map(String),
      y: f.points,
      line: { color: teamColor(d.team), width: 2, dash: n === 0 ? "solid" : "dash" },
      marker: { size: 5, color: teamColor(d.team) },
      hovertemplate: `${d.name}<br>%{x}: %{y} pts<extra></extra>`,
    };
  });

  const legend = document.createElement("ul");
  legend.className = "mo-legend";
  let idx = new Map();
  for (const d of shown) {
    const n = idx.get(d.team) || 0;
    idx.set(d.team, n + 1);
    const li = document.createElement("li");
    const swatch = document.createElement("span");
    swatch.className = "mo-swatch";
    swatch.dataset.style = n === 0 ? "solid" : "dash";
    swatch.style.setProperty("--c", teamColor(d.team));
    const label = document.createElement("span");
    label.textContent = d.name;
    li.append(swatch, label);
    legend.append(li);
  }
  body.append(legend);

  plot(el, traces, baseLayout({
    height: 420,
    margin: { l: 56, r: 16, t: 8, b: 40 },
    xaxis: { gridcolor: "rgba(0,0,0,0)", tickfont: { color: resolveToken("--ink-2") } },
    yaxis: {
      gridcolor: resolveToken("--surface-3"),
      rangemode: "tozero",
      title: { text: "Championship points", font: { size: 11, color: resolveToken("--ink-2") } },
    },
    hovermode: "closest",
  })).catch((e) => console.error("[momentum] plot failed", e));

  return true;
}
