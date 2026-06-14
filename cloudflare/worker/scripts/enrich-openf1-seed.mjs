// Deterministically backfill OpenF1 tire-strategy + pit-stop data for EVERY
// completed 2026 round into the committed dashboard seed (dashboard/data.js).
//
// Why this exists: the live Worker enriches races opportunistically and caches the
// result in KV, but `npm run seed` starts from an empty cache and OpenF1's latency
// under the Worker's short per-request timeout means a single assemble() pass only
// captures a random subset of rounds. This script fetches each round with retries
// and a generous timeout, so the offline seed ships with strategy data for ALL
// tracks. Run AFTER `npm run seed`:  node scripts/enrich-openf1-seed.mjs
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(__dirname, "../../../dashboard/data.js");
const OPENF1 = "https://api.openf1.org/v1";

// Keep in sync with sources.js OPENF1_DRIVER_MAP / OPENF1_CIRCUIT_MAP.
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
      const ctl = AbortSignal.timeout(timeout);
      const r = await fetch(url, { signal: ctl });
      if (r.ok) return await r.json();
    } catch { /* retry */ }
    await new Promise((res) => setTimeout(res, 600 * (i + 1)));
  }
  return null;
}

function stintsByDriver(rows) {
  const by = {};
  for (const s of rows || []) {
    const id = DRIVER_MAP[s.driver_number];
    if (!id) continue;
    (by[id] ||= []).push({
      compound: (s.compound || "UNKNOWN").toUpperCase(),
      lap_start: s.lap_start || 1,
      lap_end: s.lap_end || null,
      tyre_age: s.tyre_age_at_start || 0,
      stint_number: s.stint_number || 1,
    });
  }
  for (const id of Object.keys(by)) by[id].sort((a, b) => a.lap_start - b.lap_start);
  return by;
}
function pitsByDriver(rows) {
  const by = {};
  for (const p of rows || []) {
    const id = DRIVER_MAP[p.driver_number];
    if (!id) continue;
    (by[id] ||= []).push({ lap: p.lap_number || 0, duration: typeof p.pit_duration === "number" ? +p.pit_duration.toFixed(2) : null });
  }
  return by;
}

const raw = readFileSync(SEED, "utf8");
const start = raw.indexOf("{");
const end = raw.lastIndexOf("}");
const data = JSON.parse(raw.slice(start, end + 1));

const sessions = await getJSON(`${OPENF1}/sessions?year=2026&session_name=Race`);
if (!sessions) { console.error("Could not load OpenF1 sessions — aborting, seed unchanged."); process.exit(1); }
const skByCircuit = {};
for (const s of sessions) { const c = normCircuit(s.circuit_short_name); if (c) skByCircuit[c] = s.session_key; }

const completed = (data.real_race_results_2026 || []).filter((r) => r.round);
const out = { ...(data.openf1_race_data || {}) };
let added = 0, kept = 0, missed = [];

for (const race of completed) {
  const existing = out[race.round];
  if (existing && existing.stints && Object.keys(existing.stints).length > 0) { kept++; continue; }
  const sk = skByCircuit[race.circuit_id];
  if (!sk) { missed.push(`${race.round}:${race.circuit_id}(no-session)`); continue; }
  const [stintRows, pitRows] = await Promise.all([
    getJSON(`${OPENF1}/stints?session_key=${sk}`),
    getJSON(`${OPENF1}/pit?session_key=${sk}`),
  ]);
  const stints = stintsByDriver(stintRows);
  const pit_stops = pitsByDriver(pitRows);
  if (Object.keys(stints).length) {
    out[race.round] = { session_key: sk, pit_stops, stints };
    added++;
    console.log(`  round ${race.round} ${race.circuit_id}: ${Object.keys(stints).length} drivers, ${Object.keys(pit_stops).length} with pit data`);
  } else {
    missed.push(`${race.round}:${race.circuit_id}(no-stints)`);
  }
}

data.openf1_race_data = out;
// raw.slice(0, start) already ends with "...window.F1_DATA = " — don't re-add it.
const banner = raw.slice(0, start);
writeFileSync(SEED, banner + JSON.stringify(data, null, 2) + ";\n");
console.log(`\nopenf1_race_data rounds: [${Object.keys(out).sort((a, b) => a - b).join(", ")}]`);
console.log(`added ${added}, kept ${kept}${missed.length ? `, missed: ${missed.join(", ")}` : ""}`);
