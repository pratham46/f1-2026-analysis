// The Title Fight — championship standings with win probability folded into
// each row.
//
// The old build had these as two sections: a standings table and a grid of
// speedometer gauges showing the same probabilities. One table says it once.
// No donut either — eleven slices is unreadable.

import { teamColor } from "../lib/data.js";
import { pct, pts, signed } from "../lib/format.js";

function cell(tag, text, cls) {
  const el = document.createElement(tag);
  if (text != null) el.textContent = text;
  if (cls) el.className = cls;
  return el;
}

function driverRow(d, maxProb) {
  const tr = document.createElement("tr");
  // Typed reveal: rows slide in from the reading edge as each one enters view.
  tr.dataset.reveal = "row";
  const colour = teamColor(d.team);
  const textColour = teamColor(d.team, { text: true });

  tr.append(cell("td", d.rank, "tf-pos num"));

  const nameCell = cell("td", null, "tf-driver");
  const mark = document.createElement("span");
  mark.className = "tf-mark";
  mark.style.background = colour;
  const name = cell("span", d.name, "tf-name");
  name.style.color = textColour;
  const team = cell("span", d.team_name, "tf-team");
  nameCell.append(mark, name, team);
  tr.append(nameCell);

  tr.append(cell("td", pts(d.current_real_points), "num tf-real"));
  tr.append(cell("td", d.current_wins || 0, "num tf-wins"));
  tr.append(cell("td", pts(d.predicted_points), "num tf-proj"));

  // Movement between where they are and where the model puts them. Direction
  // is carried by the glyph, not by hue — the liveries own the hue wheel.
  const delta = (d.current_real_position ?? d.rank) - d.rank;
  const move = cell("td", null, "tf-move num");
  move.dataset.dir = delta > 0 ? "up" : delta < 0 ? "down" : "level";
  move.textContent = delta === 0 ? "—" : `${delta > 0 ? "▲" : "▼"} ${Math.abs(delta)}`;
  move.title = delta === 0
    ? "Model agrees with the current order"
    : `Model projects ${Math.abs(delta)} place${Math.abs(delta) > 1 ? "s" : ""} ${delta > 0 ? "higher" : "lower"} than today`;
  tr.append(move);

  // Two DIFFERENT things, and conflating them was wrong:
  //   - probability: what the simulation thinks is likely
  //   - elimination: what the arithmetic permits
  // A driver can sit at 0.0% and still be mathematically alive. Only
  // `mathematically_eliminated` may say "out"; everything else gets a number.
  const prob = d.championship_win_probability || 0;
  const eliminated = d.mathematically_eliminated === true;
  const probCell = cell("td", null, "tf-prob");
  probCell.dataset.state = eliminated ? "out" : prob >= 0.0005 ? "live" : "longshot";

  if (!eliminated && prob >= 0.0005) {
    const bar = document.createElement("span");
    bar.className = "tf-bar";
    bar.style.setProperty("--w", `${(prob / maxProb) * 100}%`);
    bar.style.setProperty("--c", colour);
    probCell.append(bar);
  }

  const label = eliminated
    ? "eliminated"
    : prob >= 0.0005
      ? pct(prob, 1)
      : "<0.1%";
  const val = cell("span", label, "tf-prob-val num");
  if (!eliminated && d.points_behind_leader > 0) {
    val.title = `${d.points_behind_leader} points behind · can still reach ${d.max_possible_points}`;
  }
  probCell.append(val);
  tr.append(probCell);

  return tr;
}

function driversTable(standings) {
  const maxProb = Math.max(...standings.map((d) => d.championship_win_probability || 0), 0.01);
  const table = document.createElement("table");
  table.className = "tf-table";
  table.innerHTML = `
    <caption class="vh">2026 drivers' championship — actual standings and model projection</caption>
    <thead><tr>
      <th scope="col" class="tf-pos">#</th>
      <th scope="col">Driver</th>
      <th scope="col" class="num">Pts</th>
      <th scope="col" class="num">Wins</th>
      <th scope="col" class="num">Proj.</th>
      <th scope="col" class="num">Move</th>
      <th scope="col">Title odds</th>
    </tr></thead>`;
  const tbody = document.createElement("tbody");
  tbody.append(...standings.map((d) => driverRow(d, maxProb)));
  table.append(tbody);
  return table;
}

function constructorsTable(ctors) {
  const table = document.createElement("table");
  table.className = "tf-table tf-table--ctor";
  table.innerHTML = `
    <caption>Constructors</caption>
    <thead><tr>
      <th scope="col" class="tf-pos">#</th>
      <th scope="col">Team</th>
      <th scope="col" class="num">Pts</th>
      <th scope="col" class="num">Wins</th>
      <th scope="col" class="num">Proj.</th>
    </tr></thead>`;
  const tbody = document.createElement("tbody");
  for (const c of ctors) {
    const tr = document.createElement("tr");
    tr.dataset.reveal = "row";
    tr.append(cell("td", c.rank, "tf-pos num"));
    const nameCell = cell("td", null, "tf-driver");
    const mark = document.createElement("span");
    mark.className = "tf-mark";
    mark.style.background = teamColor(c.constructor_id);
    const name = cell("span", c.name, "tf-name");
    name.style.color = teamColor(c.constructor_id, { text: true });
    nameCell.append(mark, name);
    tr.append(nameCell);
    tr.append(cell("td", pts(c.current_real_points), "num"));
    tr.append(cell("td", c.current_wins || 0, "num"));
    tr.append(cell("td", pts(c.predicted_points), "num"));
    tbody.append(tr);
  }
  table.append(tbody);
  return table;
}

export function render(data, root) {
  const standings = data.driver_standings_2026 || [];
  if (!standings.length) return false;

  const body = root.querySelector("#title-fight-body");
  const wrapA = document.createElement("div");
  wrapA.className = "scroll-x";
  wrapA.append(driversTable(standings));

  const parts = [wrapA];
  const ctors = data.constructor_standings_2026 || [];
  if (ctors.length) {
    const wrapB = document.createElement("div");
    wrapB.className = "scroll-x tf-ctor-wrap";
    wrapB.append(constructorsTable(ctors));
    parts.push(wrapB);
  }
  body.replaceChildren(...parts);
  return true;
}
