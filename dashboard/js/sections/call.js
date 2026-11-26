// Race Weekend Call — the next race, called before it happens.
//
// Server 2 (server2/f1api) simulates the next race 100,000 times from measured
// race pace (the odds), and a small local LLM calls the podium itself from a
// brief of every OpenF1 feed: grid, form, pace, DNFs, overtakes, pit crews,
// tyre wear, weather. Past rounds are walk-forward backtests: each call only
// saw races run before it. Every call is scored against the real podium, so
// this section can be wrong in public, which is the point.
//
// Also renders every podium of the season (#call-results) from the same fetch.

import { fetchAnalysis } from "./lab.js";
import { dateShort } from "../lib/format.js";
import { mountChat } from "../lib/chat.js";

const nice = (name) =>
  (name || "").split(" ").map((w) => (w === w.toUpperCase() ? w[0] + w.slice(1).toLowerCase() : w)).join(" ");

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function dot(colour) {
  const d = el("i", "call-dot");
  d.style.background = colour || "var(--ink-2)";
  return d;
}

function oddsList(odds, colours) {
  const ul = el("ul", "call-odds");
  const max = Math.max(...odds.map((o) => o.p_win), 0.01);
  for (const o of odds.slice(0, 6)) {
    const li = el("li");
    li.dataset.reveal = "row";
    const name = el("span", "call-odds-name");
    name.append(dot(colours[o.team]), document.createTextNode(nice(o.name)));
    const track = el("span", "st-track");
    const bar = el("span", "st-bar");
    bar.style.setProperty("--w", `${Math.max(2, (o.p_win / max) * 100)}%`);
    bar.style.setProperty("--c", colours[o.team] || "var(--ink-2)");
    track.append(bar);
    const fig = el("span", "call-odds-fig num");
    fig.innerHTML = `<b>${Math.round(o.p_win * 100)}%</b> win <s>${Math.round(o.p_podium * 100)}% podium</s>`;
    li.append(name, track, fig);
    ul.append(li);
  }
  return ul;
}

function scorePanel(preds) {
  const done = preds.filter((p) => p.actual).sort((a, b) => a.date.localeCompare(b.date));
  if (!done.length) return null;
  const hits = done.filter((p) => p.hit_winner).length;
  const onPodium = done.reduce((n, p) => n + (p.podium_hits || 0), 0);
  const win = el("section", "win st-panel st-panel--wide");
  win.setAttribute("aria-label", "Every LLM race call, scored");
  win.innerHTML = `<header class="win-bar"><span class="win-dots"><i></i><i></i><i></i></span>
    <span aria-hidden="true">llm_calls_scored.log</span></header>`;
  const body = el("div", "win-body");
  body.append(el("p", "call-score-head",
    `${hits} of ${done.length} winners called · ${onPodium} of ${done.length * 3} podium places right`));
  body.append(el("p", "st-note", `${done[0].model} called each race from only what OpenF1 had published ` +
    `before it: the qualifying grid and weather, then every earlier race's results, pace, DNFs, overtakes, ` +
    `pit stops and tyre wear. Backtests were run after the season, but blind to their own race.`));
  const table = el("table", "st-table call-results");
  table.innerHTML = `<thead><tr><th>Race</th><th>Called</th><th>Actual</th><th class="num">Podium</th>
    <th>Why</th></tr></thead>`;
  const tb = el("tbody");
  for (const p of done) {
    const tr = el("tr");
    tr.dataset.reveal = "row";
    tr.dataset.hit = String(!!p.hit_winner);
    const race = el("td");
    race.append(el("strong", null, p.circuit), el("s", null, ` ${dateShort(p.date)}${p.mode === "live" ? " · live" : ""}`));
    tr.append(race, el("td", null, `${p.picks.join(" ")} ${p.hit_winner ? "✓" : "✗"}`),
      el("td", null, p.actual.join(" ")), el("td", "num", `${p.podium_hits || 0}/3`), el("td", "call-why", p.text));
    tb.append(tr);
  }
  table.append(tb);
  const wrap = el("div", "scroll-x");
  wrap.append(table);
  body.append(wrap);
  win.append(body);
  return win;
}

function callPanel(a) {
  const next = a.season_sim?.next_race;
  const preds = a.predictions || [];
  const call = next && preds.find((p) => p.date === next.date && !p.actual);
  if (!next) return null;

  const win = el("section", "win call-panel");
  win.setAttribute("aria-label", `Prediction for ${next.circuit}`);
  win.innerHTML = `<header class="win-bar"><span class="win-dots"><i></i><i></i><i></i></span>
    <span aria-hidden="true">race_call.live</span></header>`;
  const body = el("div", "win-body call-body");

  const head = el("div", "call-head");
  head.append(
    el("p", "call-when", `${next.country || ""} · ${dateShort(next.date)}`),
    el("h3", "call-track", next.circuit),
  );
  if (call) {
    const p = el("p", "call-pick");
    p.append("LLM podium: ", el("strong", null, call.picks.join(" · ")));
    head.append(p, el("p", "call-when", call.grid_used ? "Called from the qualifying grid." : "Called before qualifying."));
  } else if (next.odds[0]) {
    const p = el("p", "call-pick");
    p.append("Simulation pick: ", el("strong", null, nice(next.odds[0].name)));
    head.append(p);
  }
  body.append(head, oddsList(next.odds, a.team_colours));

  const voice = el("figure", "call-voice");
  if (call?.text) {
    voice.append(el("blockquote", null, call.text));
    voice.append(el("figcaption", null,
      `Called by ${call.model} running on our own server, from OpenF1 data only. It is a small AI model and can be wrong; the odds above are the separate 100,000-run simulation.`));
  } else {
    voice.append(el("p", "call-wait",
      "The LLM makes its call on race week, five days out, and again once the qualifying grid is set. The odds above update every six hours."));
  }
  body.append(voice);

  win.append(body);
  return win;
}

function resultsPanel(a) {
  const races = a.race_results || [];
  if (!races.length) return null;
  const win = el("section", "win st-panel st-panel--wide");
  win.setAttribute("aria-label", "Every podium of the season");
  win.innerHTML = `<header class="win-bar"><span class="win-dots"><i></i><i></i><i></i></span>
    <span aria-hidden="true">podiums_${races.length}_races.dat</span></header>`;
  const body = el("div", "win-body");

  const tally = el("ol", "call-tally");
  for (const w of (a.win_tally || []).filter((w) => w.wins)) {
    const li = el("li");
    li.append(dot(a.team_colours[w.team]), el("strong", "num", String(w.wins)),
      document.createTextNode(` ${nice(w.name)}`), el("s", null, ` ${w.podiums} podiums`));
    tally.append(li);
  }
  body.append(el("p", "st-note", "Wins this season, then every podium in race order."), tally);

  const table = el("table", "st-table call-results");
  table.innerHTML = `<thead><tr><th>Race</th><th>Winner</th><th>Second</th><th>Third</th>
    <th class="num">Fastest lap</th></tr></thead>`;
  const tb = el("tbody");
  for (const r of races) {
    const tr = el("tr");
    tr.dataset.reveal = "row";
    const race = el("td");
    race.append(el("strong", null, r.circuit), el("s", null, ` ${dateShort(r.date)}`));
    tr.append(race);
    for (let i = 0; i < 3; i++) {
      const p = r.podium[i];
      const td = el("td");
      if (p) td.append(dot(a.team_colours[p.team]), document.createTextNode(p.code));
      tr.append(td);
    }
    const fl = r.fastest_lap;
    const m = fl && Math.floor(fl.time_s / 60);
    tr.append(el("td", "num", fl ? `${fl.code} ${m}:${(fl.time_s - m * 60).toFixed(3).padStart(6, "0")}` : "—"));
    tb.append(tr);
  }
  table.append(tb);
  const wrap = el("div", "scroll-x");
  wrap.append(table);
  body.append(wrap);
  win.append(body);
  return win;
}

export async function render(_data, root) {
  const a = await fetchAnalysis();
  if (!a?.season_sim) return false;
  mountChat(); // server 2 answered, so the radio has someone on the other end
  const parts = [callPanel(a), scorePanel(a.predictions || []), resultsPanel(a)].filter(Boolean);
  if (!parts.length) return false;
  root.querySelector("#call-body").replaceChildren(...parts);
  return true;
}
