// Race Weekend Call — the next race, called before it happens.
//
// Server 2 (server2/f1api) simulates the next race 100,000 times from measured
// race pace and, once the race is close, has a small local LLM write the call.
// The PICKS are the simulation's; the words are the model's. Every call is
// kept and scored against the real podium afterwards, so this section can be
// wrong in public, which is the point.
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

function scoreboard(preds) {
  const done = preds.filter((p) => p.actual);
  if (!done.length) return null;
  const hits = done.filter((p) => p.hit_winner).length;
  const box = el("div", "call-score");
  box.append(el("p", "call-score-head", `Calls scored so far: ${hits} of ${done.length} winners right`));
  const ul = el("ul");
  for (const p of done) {
    const li = el("li");
    li.dataset.hit = String(!!p.hit_winner);
    li.textContent = `${p.circuit}: called ${p.picks[0]}, won by ${p.actual[0]} ${p.hit_winner ? "✓" : "✗"}`;
    ul.append(li);
  }
  box.append(ul);
  return box;
}

function callPanel(a) {
  const next = a.season_sim?.next_race;
  const preds = a.predictions || [];
  const call = next && preds.find((p) => p.date === next.date);
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
  const pick = next.odds[0];
  if (pick) {
    const p = el("p", "call-pick");
    p.append("Our pick: ", el("strong", null, nice(pick.name)));
    head.append(p);
  }
  body.append(head, oddsList(next.odds, a.team_colours));

  const voice = el("figure", "call-voice");
  if (call?.text) {
    voice.append(el("blockquote", null, call.text));
    voice.append(el("figcaption", null,
      `Race call written by ${call.model} running on our own server. It is a small AI model and can get details wrong; the odds above are the simulation's.`));
  } else {
    voice.append(el("p", "call-wait",
      "The written race call drops on race week, once the weekend is five days out. The odds above update every six hours."));
  }
  body.append(voice);

  const sb = scoreboard(preds);
  if (sb) body.append(sb);
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
  const parts = [callPanel(a), resultsPanel(a)].filter(Boolean);
  if (!parts.length) return false;
  root.querySelector("#call-body").replaceChildren(...parts);
  return true;
}
