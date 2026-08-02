// Backfill the FULL race + qualifying classification for every completed 2026
// round into the committed seed as `race_classification_2026`.
//
// Why this exists: real_race_results_2026 (scraped from formula1.com) stores only
// the top 10 finishers — 110 rows across 11 races, exactly 10.0 per race. Every
// retirement and every points-less finish is invisible in it, so you cannot ask
// "who finished ahead of whom" for any pair outside the points. OpenF1's
// /session_result returns all 22 entries with dnf/dns/dsq flags, which is what a
// head-to-head record actually needs.
//
// Results of a completed session never change, so a round is fetched exactly once
// and kept in a committed cache (gen-seed.mjs rewrites data.js from scratch).
//
// Run AFTER enrich-openf1-seed.mjs:  node scripts/enrich-h2h.mjs
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(__dirname, "../../../dashboard/data.js");
const CACHE = resolve(__dirname, "../data/race-classification.json");
const OPENF1 = "https://api.openf1.org/v1";

// Keep in sync with sources.js OPENF1_DRIVER_MAP.
const DRIVER_MAP = {
  81: "piastri", 1: "norris", 16: "leclerc", 44: "hamilton", 3: "max_verstappen",
  6: "hadjar", 63: "russell", 12: "antonelli", 55: "sainz", 23: "albon",
  30: "lawson", 41: "arvid_lindblad", 14: "alonso", 18: "stroll", 87: "bearman",
  31: "ocon", 10: "gasly", 43: "colapinto", 27: "hulkenberg", 5: "bortoleto",
  77: "bottas", 11: "perez",
};
const CIRCUIT_MAP = {
  "Melbourne": "australia", "Shanghai": "china", "Suzuka": "japan", "Sakhir": "bahrain",
  "Jeddah": "saudi_arabia", "Miami": "miami", "Imola": "imola", "Monte Carlo": "monaco",
  "Monaco": "monaco", "Montreal": "canada", "Catalunya": "spain", "Barcelona": "spain",
  "Spielberg": "austria", "Silverstone": "britain", "Hungaroring": "hungary",
  "Budapest": "hungary", "Spa-Francorchamps": "belgium", "Zandvoort": "netherlands",
  "Monza": "italy", "Baku": "azerbaijan", "Madring": "madrid", "Madrid": "madrid",
  "Singapore": "singapore", "Austin": "americas", "Mexico City": "mexico",
  "Interlagos": "brazil", "São Paulo": "brazil", "Las Vegas": "las_vegas",
  "Lusail": "qatar", "Yas Marina Circuit": "abu_dhabi", "Yas Island": "abu_dhabi",
};
const normCircuit = (n) => CIRCUIT_MAP[n] || (n || "").toLowerCase().replace(/[^a-z]/g, "_");

async function getJSON(url, { tries = 4, timeout = 20000 } = {}) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(timeout) });
      if (r.ok) return await r.json();
    } catch { /* retry */ }
    await new Promise((res) => setTimeout(res, 600 * (i + 1)));
  }
  return null;
}

/** One /session_result row -> seed shape. Returns null for unmapped drivers. */
export function classifyRow(row) {
  const driver_id = DRIVER_MAP[row.driver_number];
  if (!driver_id) return null;
  const status = row.dns ? "DNS" : row.dsq ? "DSQ" : row.dnf ? "DNF" : "F";
  return {
    driver_id,
    position: row.position ?? null,
    points: Number(row.points) || 0,
    laps: row.number_of_laps ?? 0,
    status,
  };
}

const toClassification = (rows) => (rows || []).map(classifyRow).filter(Boolean);

const raw = readFileSync(SEED, "utf8");
const start = raw.indexOf("{");
const end = raw.lastIndexOf("}");
const data = JSON.parse(raw.slice(start, end + 1));

const cached = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, "utf8")) : {};
const out = { ...cached, ...(data.race_classification_2026 || {}) };
let added = 0, kept = 0;
const missed = [];

const needFetch = (data.real_race_results_2026 || []).some((r) => !out[r.round]?.race?.length);
// Only pay for the session index when something is actually missing.
const sessions = needFetch ? await getJSON(`${OPENF1}/sessions?year=2026`) : [];
if (needFetch && !sessions) {
  console.error("Could not load OpenF1 sessions — aborting, seed unchanged.");
  process.exit(1);
}
const keyFor = (circuitId, name) =>
  sessions.find((s) => s.session_name === name && normCircuit(s.circuit_short_name) === circuitId)?.session_key;

for (const race of data.real_race_results_2026 || []) {
  const { round, circuit_id } = race;
  if (!round) continue;
  if (out[round]?.race?.length) { kept++; continue; }

  const raceKey = keyFor(circuit_id, "Race");
  if (!raceKey) { missed.push(`${round}:${circuit_id}(no-race-session)`); continue; }
  const qualiKey = keyFor(circuit_id, "Qualifying");
  // Sprint weekends only. Without these the points would fall short of the
  // championship table by exactly the sprint haul, and look like a bug.
  const sprintKey = keyFor(circuit_id, "Sprint");

  const [raceRows, qualiRows, sprintRows] = await Promise.all([
    getJSON(`${OPENF1}/session_result?session_key=${raceKey}`),
    qualiKey ? getJSON(`${OPENF1}/session_result?session_key=${qualiKey}`) : null,
    sprintKey ? getJSON(`${OPENF1}/session_result?session_key=${sprintKey}`) : null,
  ]);
  const classified = toClassification(raceRows);
  if (!classified.length) { missed.push(`${round}:${circuit_id}(no-classification)`); continue; }

  out[round] = {
    circuit_id,
    race: classified,
    qualifying: toClassification(qualiRows).map(({ driver_id, position }) => ({ driver_id, position })),
  };
  const sprint = toClassification(sprintRows);
  if (sprint.length) out[round].sprint = sprint;
  added++;
  const dnf = classified.filter((r) => r.status !== "F").length;
  console.log(
    `  round ${round} ${circuit_id}: ${classified.length} classified (${dnf} non-finishers), ` +
      `${out[round].qualifying.length} qualified${sprint.length ? ", + sprint" : ""}`
  );
}

data.race_classification_2026 = out;
writeFileSync(SEED, raw.slice(0, start) + JSON.stringify(data, null, 2) + ";\n");

mkdirSync(dirname(CACHE), { recursive: true });
writeFileSync(CACHE, JSON.stringify(out, null, 2) + "\n");

console.log(
  `\nrace_classification_2026: added ${added}, kept ${kept}, total ${Object.keys(out).length}` +
    (missed.length ? `, missed: ${missed.join(", ")}` : "")
);
