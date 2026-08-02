// Model vs Reality.
//
// The section the whole page's credibility rests on. Misses get the same
// visual weight as hits — a prediction you cannot check is marketing.
//
// predictions_archive is keyed by round STRING -> array of {driver_id, win_prob}
// sorted best-first. The call is entry [0]; the truth is position 1 in
// real_race_results_2026.

import { teamColor, driverName, driverTeam, raceWinner, completedRounds } from "../lib/data.js";
import { pct } from "../lib/format.js";
import { countUpWhenVisible } from "../lib/motion.js";

function scoreRounds(data) {
  const archive = data.predictions_archive || {};
  const rows = [];
  for (const race of completedRounds(data)) {
    const called = archive[String(race.round)]?.[0];
    const actual = raceWinner(race);
    if (!called || !actual) continue;
    rows.push({
      round: race.round,
      name: race.name,
      called: called.driver_id,
      calledProb: called.win_prob,
      actual,
      hit: called.driver_id === actual,
    });
  }
  return rows;
}

function roundCard(r, data) {
  const li = document.createElement("li");
  li.className = "acc-round";
  li.dataset.hit = String(r.hit);

  const head = document.createElement("p");
  head.className = "acc-round-head";
  const num = document.createElement("span");
  num.className = "acc-round-n num";
  num.textContent = `R${r.round}`;
  const mark = document.createElement("span");
  mark.className = "acc-mark";
  // Form, not hue: filled + check for a hit, hollow + cross for a miss.
  mark.textContent = r.hit ? "✓" : "✗";
  mark.setAttribute("aria-label", r.hit ? "Correct call" : "Wrong call");
  head.append(num, mark);

  const name = document.createElement("p");
  name.className = "acc-round-name";
  name.textContent = r.name.replace(" Grand Prix", " GP");

  const detail = document.createElement("p");
  detail.className = "acc-round-detail";
  const calledEl = document.createElement("span");
  calledEl.textContent = driverName(data, r.called);
  calledEl.style.color = teamColor(driverTeam(data, r.called), { text: true });
  detail.append(document.createTextNode("Called "), calledEl);

  if (!r.hit) {
    const actualEl = document.createElement("span");
    actualEl.textContent = driverName(data, r.actual);
    actualEl.style.color = teamColor(driverTeam(data, r.actual), { text: true });
    detail.append(document.createTextNode(" · won "), actualEl);
  }

  li.append(head, name, detail);
  return li;
}

export function render(data, root) {
  const rows = scoreRounds(data);
  if (!rows.length) return false;

  const hits = rows.filter((r) => r.hit).length;
  const rate = hits / rows.length;

  const body = root.querySelector("#accuracy-body");

  const summary = document.createElement("dl");
  summary.className = "acc-summary";
  const facts = [
    { k: "Winner called correctly", v: `${hits} of ${rows.length}`, count: null },
    { k: "Strike rate", v: pct(rate, 0), count: rate * 100, decimals: 0, suffix: "%" },
    { k: "Model error (CV MAE)", v: data.model_cv_mae != null ? `${data.model_cv_mae} places` : "—", count: null },
  ];
  for (const f of facts) {
    const dt = document.createElement("dt");
    dt.textContent = f.k;
    const dd = document.createElement("dd");
    dd.className = "num";
    dd.textContent = f.v;
    if (f.count != null) countUpWhenVisible(dd, f.count, { decimals: f.decimals, suffix: f.suffix });
    summary.append(dt, dd);
  }

  const list = document.createElement("ol");
  list.className = "acc-rounds";
  list.append(...rows.map((r) => roundCard(r, data)));

  body.replaceChildren(summary, list);
  return true;
}
