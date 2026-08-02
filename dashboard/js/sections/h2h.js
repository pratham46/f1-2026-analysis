// Head to Head — the interactive showpiece.
//
// Every number here is measured, not modelled: it comes from the full 22-driver
// classification of the rounds BOTH drivers started (race_classification_2026),
// so retirements and points-less finishes count. See lib/h2h.js.
//
// Bars animate on CHANGE, not only on first render. The change is the
// information: swapping a driver and watching the bars redistribute is the
// whole point of the section.

import { teamColor, driverShort } from "../lib/data.js";
import { headToHead } from "../lib/h2h.js";
import { pts, ordinal } from "../lib/format.js";

const METRICS = [
  { key: "qualiAhead", label: "Out-qualified", of: "quali" },
  { key: "points", label: "Points scored", fmt: pts },
  { key: "wins", label: "Wins" },
  { key: "podiums", label: "Podiums" },
  { key: "inPoints", label: "Top-ten finishes" },
  { key: "dnfs", label: "Retirements", lowerIsBetter: true },
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

function nameplate(d, side, images, best) {
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

  // Best finish is an ordinal, not a magnitude — a proportional bar would be
  // nonsense. It sits here instead, where it is also the only stat that
  // separates two drivers who have never scored.
  const bestLine = document.createElement("p");
  bestLine.className = "h2h-plate-best";
  bestLine.textContent = `Best finish ${best == null ? "—" : ordinal(best)}`;

  box.append(name, team, bestLine);
  return box;
}

// The headline: how many of their shared grands prix each one finished ahead in.
function scoreline(record, a, b) {
  const box = document.createElement("p");
  box.className = "h2h-score";

  const left = document.createElement("span");
  left.className = "h2h-score-val num";
  left.textContent = String(record.a.raceAhead);
  left.style.color = teamColor(a.team, { text: true });

  const dash = document.createElement("span");
  dash.className = "h2h-score-dash";
  dash.textContent = "–";

  const right = document.createElement("span");
  right.className = "h2h-score-val num";
  right.textContent = String(record.b.raceAhead);
  right.style.color = teamColor(b.team, { text: true });

  const cap = document.createElement("span");
  cap.className = "h2h-score-cap";
  const n = record.contested;
  cap.textContent =
    `finished ahead · ${n} grand${n === 1 ? "" : "s"} prix both started` +
    (record.ties ? ` · ${record.ties} dead heat${record.ties === 1 ? "" : "s"}` : "");

  box.append(left, dash, right, cap);
  return box;
}

// Hue is team identity, so two teammates would render as one unbroken block —
// and the teammate battle is the comparison people actually want. Keep the
// livery, separate them on lightness, which is what the standard reserves for
// telling states apart.
function palette(a, b) {
  const ca = teamColor(a.team);
  const cb = teamColor(b.team);
  return a.team === b.team
    ? { a: ca, b: `color-mix(in oklab, ${cb} 45%, var(--surface-0))` }
    : { a: ca, b: cb };
}

function bars(record, a, b, colors) {
  const wrap = document.createElement("dl");
  wrap.className = "h2h-bars";
  const ca = colors.a;
  const cb = colors.b;

  for (const m of METRICS) {
    const raw = (side) => record[side][m.key];
    const va = Number(raw("a")) || 0;
    const vb = Number(raw("b")) || 0;
    // Fewer is better here, so the bar has to invert or the loser looks dominant.
    const wa = m.lowerIsBetter ? vb : va;
    const wb = m.lowerIsBetter ? va : vb;
    const total = wa + wb;
    // Guard the both-zero case so the split renders 50/50 rather than NaN.
    const share = total > 0 ? wa / total : 0.5;

    const dt = document.createElement("dt");
    dt.className = "h2h-metric";
    dt.textContent = m.label;
    if (m.of === "quali") dt.title = `Across ${record.qualiRounds} qualifying sessions with a time for both`;

    const dd = document.createElement("dd");
    dd.className = "h2h-row";

    const fmt = m.fmt || ((v) => (v == null ? "—" : String(v)));
    const left = document.createElement("span");
    left.className = "h2h-val num";
    left.textContent = fmt(raw("a"));

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
    right.textContent = fmt(raw("b"));

    // Winner marked by weight, not by colour — the liveries own the hue wheel.
    const cmp = (x, y) => (x == null ? false : y == null ? true : m.lowerIsBetter ? x < y : x > y);
    left.dataset.lead = String(cmp(raw("a"), raw("b")));
    right.dataset.lead = String(cmp(raw("b"), raw("a")));

    dd.append(left, track, right);
    wrap.append(dt, dd);
  }
  return wrap;
}

const placing = (r) => (r.status === "F" ? ordinal(r.position) : r.status);

// Round-by-round ledger: who came out ahead, race by race. Colour carries team
// identity; the initials carry the meaning, so it survives without colour.
function ledger(record, data, aId, bId, colors) {
  const wrap = document.createElement("ol");
  wrap.className = "h2h-ledger";
  const shortA = driverShort(data, aId);
  const shortB = driverShort(data, bId);
  const nameOf = { a: shortA, b: shortB };
  const raceName = new Map((data.real_race_results_2026 || []).map((x) => [x.round, x.name]));

  for (const r of record.rounds) {
    const li = document.createElement("li");
    li.className = "h2h-round";
    li.dataset.ahead = r.ahead || (r.contested ? "tie" : "none");
    li.style.setProperty("--c", r.ahead ? colors[r.ahead] : "var(--surface-3)");

    const num = document.createElement("span");
    num.className = "h2h-round-no num";
    num.textContent = `R${r.round}`;

    const who = document.createElement("span");
    who.className = "h2h-round-who";
    who.textContent = r.ahead ? nameOf[r.ahead] : r.contested ? "=" : "DNS";

    li.append(num, who);
    li.title =
      `Round ${r.round} · ${raceName.get(r.round) || r.circuit_id} — ` +
      `${shortA} ${placing(r.a)}, ${shortB} ${placing(r.b)}`;
    wrap.append(li);
  }
  return wrap;
}

export function render(data, root) {
  const standings = data.driver_standings_2026 || [];
  const classification = data.race_classification_2026;
  if (standings.length < 2 || !classification) return false;

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
  const ledgerBox = document.createElement("div");
  ledgerBox.className = "h2h-ledger-box";

  const draw = () => {
    const a = byId.get(aId);
    const b = byId.get(bId);
    const record = headToHead(classification, aId, bId);

    const colors = palette(a, b);
    const middle = document.createElement("div");
    middle.className = "h2h-middle";
    middle.append(scoreline(record, a, b), bars(record, a, b, colors));

    stage.replaceChildren(
      nameplate(a, "a", data.driver_images, record.a.bestFinish),
      middle,
      nameplate(b, "b", data.driver_images, record.b.bestFinish)
    );

    if (record.rounds.length) {
      const cap = document.createElement("p");
      cap.className = "h2h-ledger-cap";
      cap.textContent = "Round by round — who finished ahead";
      ledgerBox.replaceChildren(cap, ledger(record, data, aId, bId, colors));
    } else {
      ledgerBox.replaceChildren();
    }
  };

  selA.addEventListener("change", (e) => { aId = e.target.value; draw(); });
  selB.addEventListener("change", (e) => { bId = e.target.value; draw(); });

  draw();
  body.replaceChildren(controls, stage, ledgerBox);
  return true;
}
