// The Grid — 11 teams, 22 drivers, cars and drivers together.
//
// Merges the old drivers and teams sections. A driver opens the shared modal
// with bio, 2026 form and a career-points chart. That chart is inside the
// modal, so it MUST be width-gated.

import { teamColor, driverName } from "../lib/data.js";
import { pts, dateFull } from "../lib/format.js";
import { openModal } from "../lib/modal.js";
import { plotWhenVisible, baseLayout, resolveToken } from "../lib/charts.js";

function careerChart(driverId, data) {
  const form = data.driver_rolling_form?.[driverId];
  if (!form?.seasons?.length) return null;

  const wrap = document.createElement("div");
  const h = document.createElement("h4");
  h.className = "gr-modal-h";
  h.textContent = "Championship points by season";
  const el = document.createElement("div");
  el.className = "gr-plot";
  wrap.append(h, el);

  const colour = teamColor(data.driver_info?.[driverId]?.team);

  plotWhenVisible(el, (node) => {
    window.Plotly.newPlot(node, [{
      type: "bar",
      x: form.seasons.map(String),
      y: form.points,
      // A literal, never a var() string — Plotly cannot resolve tokens.
      marker: { color: colour },
      hovertemplate: "%{x}: %{y} pts<extra></extra>",
    }], baseLayout({
      height: 260,
      margin: { l: 48, r: 16, t: 8, b: 32 },
      yaxis: { gridcolor: resolveToken("--surface-3"), rangemode: "tozero" },
    }), { displayModeBar: false, responsive: true });
  });

  return wrap;
}

function openDriver(d, data) {
  const bio = data.driver_bios_2026?.[d.driver_id];
  const standing = (data.driver_standings_2026 || []).find((s) => s.driver_id === d.driver_id);
  const real = (data.real_driver_standings_2026 || []).find((s) => s.driver_id === d.driver_id);

  const body = document.createElement("div");
  body.className = "gr-modal";

  const head = document.createElement("div");
  head.className = "gr-modal-head";
  const img = data.driver_images?.[d.driver_id];
  if (img) {
    const el = document.createElement("img");
    el.src = img;
    el.alt = "";
    el.className = "gr-modal-photo";
    head.append(el);
  }

  const facts = document.createElement("dl");
  facts.className = "gr-facts";
  const rows = [
    ["Team", d.team_name],
    ["Number", d.number != null ? `#${d.number}` : "—"],
    ["Nationality", bio?.nationality || "—"],
    ["Born", bio?.dob ? dateFull(bio.dob) : "—"],
    ["Points 2026", real ? pts(real.points) : "—"],
    ["Wins 2026", real ? String(real.wins ?? 0) : "—"],
    ["Projected", standing ? pts(standing.predicted_points) : "—"],
  ];
  for (const [k, v] of rows) {
    const dt = document.createElement("dt");
    dt.textContent = k;
    const dd = document.createElement("dd");
    dd.textContent = v;
    if (k === "Team") dd.style.color = teamColor(d.team, { text: true });
    facts.append(dt, dd);
  }
  head.append(facts);
  body.append(head);

  const chart = careerChart(d.driver_id, data);
  if (chart) body.append(chart);

  if (bio?.wiki) {
    const link = document.createElement("a");
    link.href = bio.wiki;
    link.target = "_blank";
    link.rel = "noopener";
    link.className = "gr-wiki";
    link.textContent = "Wikipedia profile";
    body.append(link);
  }

  openModal({ title: d.name, body });
}

export function render(data, root) {
  const info = data.driver_info || {};
  const ids = Object.keys(info);
  if (!ids.length) return false;

  // Group drivers under their team, ordered by constructor standing.
  const byTeam = new Map();
  for (const id of ids) {
    const d = { driver_id: id, ...info[id] };
    if (!byTeam.has(d.team)) byTeam.set(d.team, []);
    byTeam.get(d.team).push(d);
  }

  const order = (data.constructor_standings_2026 || []).map((c) => c.constructor_id);
  const teams = [...byTeam.keys()].sort((a, b) => {
    const ia = order.indexOf(a), ib = order.indexOf(b);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });

  const list = document.createElement("div");
  list.className = "gr-teams";

  for (const teamId of teams) {
    const drivers = byTeam.get(teamId);
    const ctor = (data.constructor_standings_2026 || []).find((c) => c.constructor_id === teamId);

    const card = document.createElement("article");
    card.className = "gr-team";
    card.style.setProperty("--c", teamColor(teamId));

    const head = document.createElement("header");
    head.className = "gr-team-head";
    const name = document.createElement("h3");
    name.textContent = drivers[0]?.team_name || teamId;
    name.style.color = teamColor(teamId, { text: true });
    const stat = document.createElement("p");
    stat.className = "gr-team-stat num";
    stat.textContent = ctor
      ? `${pts(ctor.current_real_points)} pts · P${ctor.rank}`
      : "";
    head.append(name, stat);
    card.append(head);

    const car = data.team_cars?.[teamId];
    if (car) {
      const el = document.createElement("img");
      el.src = car;
      el.alt = `${drivers[0]?.team_name || teamId} 2026 car`;
      el.className = "gr-car";
      el.loading = "lazy";
      card.append(el);
    }

    const row = document.createElement("ul");
    row.className = "gr-drivers";
    for (const d of drivers) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gr-driver";
      const photo = data.driver_images?.[d.driver_id];
      if (photo) {
        const p = document.createElement("img");
        p.src = photo;
        p.alt = "";
        p.loading = "lazy";
        btn.append(p);
      }
      const nm = document.createElement("span");
      nm.className = "gr-driver-name";
      nm.textContent = d.name;
      const no = document.createElement("span");
      no.className = "gr-driver-no num";
      no.textContent = d.number != null ? `#${d.number}` : "";
      btn.append(nm, no);
      btn.addEventListener("click", () => openDriver(d, data));
      li.append(btn);
      row.append(li);
    }
    card.append(row);
    list.append(card);
  }

  root.querySelector("#grid-body").replaceChildren(list);
  return true;
}
