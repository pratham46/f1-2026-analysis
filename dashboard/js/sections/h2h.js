// Head to Head — the interactive showpiece.
//
// Bars animate on CHANGE, not only on first render. The change is the
// information: swapping a driver and watching the bars redistribute is the
// whole point of the section.

import { teamColor } from "../lib/data.js";
import { pct, pts } from "../lib/format.js";

const METRICS = [
  { key: "current_real_points", label: "Points", fmt: pts },
  { key: "current_wins", label: "Wins", fmt: (v) => String(v ?? 0) },
  { key: "predicted_points", label: "Projected points", fmt: pts },
  { key: "podium_probability", label: "Podium chance", fmt: (v) => pct(v, 0) },
  { key: "win_probability", label: "Race win chance", fmt: (v) => pct(v, 1) },
  { key: "avg_predicted_position", label: "Avg. finish", fmt: (v) => (v == null ? "—" : v.toFixed(1)), lowerIsBetter: true },
];

function picker(id, standings, selected) {
  const sel = document.createElement("select");
  sel.className = "h2h-pick";
  sel.id = id;
  for (const d of standings) {
    const opt = document.createElement("option");
    opt.value = d.driver_id;
    opt.textContent = `${d.name} — ${d.team_name}`;
    if (d.driver_id === selected) opt.selected = true;
    sel.append(opt);
  }
  return sel;
}

function nameplate(d, side, images) {
  const box = document.createElement("div");
  box.className = "h2h-plate";
  box.dataset.side = side;
  box.style.setProperty("--c", teamColor(d.team));

  const img = images?.[d.driver_id];
  if (img) {
    const el = document.createElement("img");
    el.src = img;
    el.alt = "";
    el.className = "h2h-photo";
    el.decoding = "async";
    box.append(el);
  }

  const name = document.createElement("p");
  name.className = "h2h-plate-name";
  name.textContent = d.name;
  name.style.color = teamColor(d.team, { text: true });

  const team = document.createElement("p");
  team.className = "h2h-plate-team";
  team.textContent = `${d.team_name} · #${d.number ?? "—"}`;

  box.append(name, team);
  return box;
}

function bars(a, b) {
  const wrap = document.createElement("dl");
  wrap.className = "h2h-bars";
  const ca = teamColor(a.team);
  const cb = teamColor(b.team);

  for (const m of METRICS) {
    const va = Number(a[m.key]) || 0;
    const vb = Number(b[m.key]) || 0;
    const total = va + vb;
    // Guard the both-zero case so the split renders 50/50 rather than NaN.
    const share = total > 0 ? va / total : 0.5;

    const dt = document.createElement("dt");
    dt.className = "h2h-metric";
    dt.textContent = m.label;

    const dd = document.createElement("dd");
    dd.className = "h2h-row";

    const left = document.createElement("span");
    left.className = "h2h-val num";
    left.textContent = m.fmt(a[m.key]);

    const track = document.createElement("span");
    track.className = "h2h-track";
    const fillA = document.createElement("span");
    fillA.className = "h2h-fill";
    fillA.dataset.side = "a";
    fillA.style.background = ca;
    fillA.style.transform = `scaleX(${share})`;
    const fillB = document.createElement("span");
    fillB.className = "h2h-fill";
    fillB.dataset.side = "b";
    fillB.style.background = cb;
    fillB.style.transform = `scaleX(${1 - share})`;
    track.append(fillA, fillB);

    const right = document.createElement("span");
    right.className = "h2h-val num";
    right.textContent = m.fmt(b[m.key]);

    // Winner marked by weight, not by colour — the liveries own the hue wheel.
    const aWins = m.lowerIsBetter ? va < vb : va > vb;
    const bWins = m.lowerIsBetter ? vb < va : vb > va;
    left.dataset.lead = String(aWins);
    right.dataset.lead = String(bWins);

    dd.append(left, track, right);
    wrap.append(dt, dd);
  }
  return wrap;
}

export function render(data, root) {
  const standings = data.driver_standings_2026 || [];
  if (standings.length < 2) return false;

  const body = root.querySelector("#h2h-body");
  const byId = new Map(standings.map((d) => [d.driver_id, d]));

  let aId = standings[0].driver_id;
  let bId = standings[1].driver_id;

  const controls = document.createElement("div");
  controls.className = "h2h-controls";
  const selA = picker("h2h-a", standings, aId);
  const selB = picker("h2h-b", standings, bId);
  const labA = document.createElement("label");
  labA.className = "vh";
  labA.htmlFor = "h2h-a";
  labA.textContent = "First driver";
  const labB = document.createElement("label");
  labB.className = "vh";
  labB.htmlFor = "h2h-b";
  labB.textContent = "Second driver";
  const vs = document.createElement("span");
  vs.className = "h2h-vs";
  vs.textContent = "vs";
  controls.append(labA, selA, vs, labB, selB);

  const stage = document.createElement("div");
  stage.className = "h2h-stage";

  const draw = () => {
    const a = byId.get(aId);
    const b = byId.get(bId);
    stage.replaceChildren(
      nameplate(a, "a", data.driver_images),
      bars(a, b),
      nameplate(b, "b", data.driver_images)
    );
  };

  selA.addEventListener("change", (e) => { aId = e.target.value; draw(); });
  selB.addEventListener("change", (e) => { bId = e.target.value; draw(); });

  draw();
  body.replaceChildren(controls, stage);
  return true;
}
