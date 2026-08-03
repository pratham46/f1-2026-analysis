#!/usr/bin/env node
// Refuses a seed that knows LESS than the one it would replace.
//
// `npm run seed` rebuilds dashboard/data.js from upstream every time. When an
// upstream is having a bad morning it does not error — it returns less, and the
// regenerated seed is a perfectly valid payload that happens to be missing two
// races. Every existing test passes on it, because nothing tests for absence.
//
// This was not hypothetical. Running the seed on 2026-08-03 dropped
// openf1_race_data from 11 rounds to 9 and the season's stint count from 677 to
// 508, because OpenF1 briefly served no stints for Japan, Belgium and Hungary.
// Committed on a daily schedule, that silently guts the strategy section.
//
// So: compare coverage before and after, and treat a decrease as a failure.
// Growth and equality both pass. Run from the repo root.
//
//   node scripts/check-seed-regression.mjs <old-data.js> <new-data.js>

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadSeed(path) {
  const src = readFileSync(path, "utf8");
  // The seed is `window.F1_DATA = {...};` — evaluate it against a stub window
  // rather than parsing, so this stays correct if the banner ever changes.
  const scope = { window: {} };
  new Function("window", src)(scope.window);
  const data = scope.window.F1_DATA;
  if (!data || typeof data !== "object") {
    throw new Error(`${path} did not define window.F1_DATA`);
  }
  return data;
}

// Every measure is a COUNT, so "did this shrink" is unambiguous. Anything
// whose size legitimately falls — a driver leaving the grid mid-season — does
// not belong here.
export function coverage(d) {
  const stints = Object.values(d.openf1_race_data || {}).reduce(
    (n, round) =>
      n + Object.values(round.stints || {}).reduce((m, list) => m + list.length, 0),
    0,
  );
  const pitStops = Object.values(d.openf1_race_data || {}).reduce(
    (n, round) =>
      n + Object.values(round.pit_stops || {}).reduce((m, list) => m + list.length, 0),
    0,
  );
  return {
    "openf1 rounds": Object.keys(d.openf1_race_data || {}).length,
    "stints": stints,
    "pit stops": pitStops,
    "circuit paths": Object.keys(d.circuit_paths || {}).length,
    "classified rounds": Object.keys(d.race_classification_2026 || {}).length,
    "race results": (d.real_race_results_2026 || []).length,
    "calendar rounds": (d.calendar_2026 || []).length,
    "driver standings": (d.driver_standings_2026 || []).length,
    "driver bios": Object.keys(d.driver_bios_2026 || {}).length,
    "team cars": Object.keys(d.team_cars || {}).length,
  };
}

export function compare(before, after) {
  const a = coverage(before);
  const b = coverage(after);
  return Object.keys(a).map((k) => ({
    key: k,
    before: a[k],
    after: b[k],
    delta: b[k] - a[k],
  }));
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(new URL(import.meta.url).pathname.slice(process.platform === "win32" ? 1 : 0))) {
  const [oldPath, newPath] = process.argv.slice(2);
  if (!oldPath || !newPath) {
    console.error("usage: node scripts/check-seed-regression.mjs <old-data.js> <new-data.js>");
    process.exit(2);
  }

  const rows = compare(loadSeed(oldPath), loadSeed(newPath));
  const lost = rows.filter((r) => r.delta < 0);

  const width = Math.max(...rows.map((r) => r.key.length));
  for (const r of rows) {
    const sign = r.delta > 0 ? `+${r.delta}` : r.delta < 0 ? `${r.delta}` : "—";
    console.log(
      `  ${r.key.padEnd(width)}  ${String(r.before).padStart(5)} → ${String(r.after).padStart(5)}  ${sign}`,
    );
  }

  if (lost.length) {
    console.error(
      "\nseed REGRESSION — the new payload knows less than the committed one:\n" +
        lost.map((r) => `  ${r.key}: ${r.before} → ${r.after} (${r.delta})`).join("\n") +
        "\n\nUpstream is probably serving a partial response. Keeping the existing seed.",
    );
    process.exit(1);
  }
  console.log("\nseed OK — no measure decreased.");
}
