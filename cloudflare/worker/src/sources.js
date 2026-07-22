// ============================================================================
// sources.js — Live 2026 data fetchers (Jolpica/Ergast primary, OpenF1 optional).
//
// Historical 2020-2025 is frozen in seed.js, so this only fetches the *current*
// season's standings + results. Every fetcher is graceful: on any error it
// returns { ok: false } and never throws, so assemble.js can fall back cleanly.
// ============================================================================

const JOLPICA = "https://api.jolpi.ca/ergast/f1/2026";
const UA = { "User-Agent": "f1-2026-dashboard/1.0 (+cloudflare-worker)" };

// Ergast driverId → our internal driver_id slug (mostly identical).
const DRIVER_ALIAS = {
  kimi_antonelli: "antonelli",
  andrea_antonelli: "antonelli",
  verstappen: "max_verstappen",
  lindblad: "arvid_lindblad",
};

// Ergast constructorId → our team slug. Audi + Cadillac are first-class 2026
// slugs; legacy Sauber/Stake ids map onto Audi (same entry, rebranded).
const TEAM_ALIAS = {
  red_bull: "red_bull", rb: "rb", racing_bulls: "rb", alphatauri: "rb",
  ferrari: "ferrari", mclaren: "mclaren", mercedes: "mercedes",
  aston_martin: "aston_martin", williams: "williams", alpine: "alpine",
  haas: "haas", audi: "audi", sauber: "audi", kick_sauber: "audi", stake: "audi",
  cadillac: "cadillac",
};

// Jolpica circuitId → our calendar circuit_id (for joining results to rounds).
const CIRCUIT_ALIAS = {
  albert_park: "australia", shanghai: "china", suzuka: "japan", miami: "miami",
  villeneuve: "canada", monaco: "monaco", catalunya: "spain",
  red_bull_ring: "austria", silverstone: "britain", spa: "belgium",
  hungaroring: "hungary", zandvoort: "netherlands", monza: "italy",
  madring: "madrid", baku: "azerbaijan", marina_bay: "singapore",
  americas: "americas", rodriguez: "mexico", interlagos: "brazil",
  vegas: "las_vegas", losail: "qatar", yas_marina: "abu_dhabi",
};

const normDriver = (id) => DRIVER_ALIAS[id] || id;
const normTeam = (id) => TEAM_ALIAS[id] || id;
export const normCircuit = (id) => CIRCUIT_ALIAS[id] || id;

// Free tier allows 50 subrequests per invocation; a cold-start assemble() can
// legitimately approach that (Jolpica backfills + OpenF1 enrichment). Cap JSON
// fetches at 40 so the run degrades gracefully (fetchers return ok:false and
// callers keep last-good data) instead of Cloudflare hard-failing mid-run.
// The margin also covers the single news scrape in scrape.js.
// ponytail: module-level counter reset per assemble() run — fine while one
// refresh runs at a time; thread a ctx object through the fetchers if
// concurrent refreshes ever become real.
const SUBREQUEST_BUDGET = 40;
let budgetLeft = SUBREQUEST_BUDGET;
export function resetSubrequestBudget() { budgetLeft = SUBREQUEST_BUDGET; }
export function subrequestsUsed() { return SUBREQUEST_BUDGET - budgetLeft; }

async function getJSON(url, timeoutMs = 8000) {
  if (budgetLeft <= 0) return { ok: false, error: "subrequest_budget_exhausted" };
  budgetLeft--;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { headers: UA, signal: ctrl.signal });
    if (!res.ok) return { ok: false, status: res.status };
    return { ok: true, json: await res.json() };
  } catch (e) {
    return { ok: false, error: String(e) };
  } finally {
    clearTimeout(t);
  }
}

/**
 * Live 2026 driver + constructor standings and races-completed count.
 * @returns {{ok:boolean, driverStandings?:Array, constructorStandings?:Array, racesCompleted?:number, source?:string}}
 */
export async function fetchLiveStandings() {
  const ds = await getJSON(`${JOLPICA}/driverstandings.json?limit=40`);
  if (!ds.ok) return { ok: false, reason: "jolpica_driver_standings_unavailable" };

  const lists = ds.json?.MRData?.StandingsTable?.StandingsLists || [];
  if (!lists.length) return { ok: true, driverStandings: [], constructorStandings: [], racesCompleted: 0, source: "jolpica", note: "no_2026_rounds_yet" };

  const round = parseInt(lists[0].round || "0", 10) || 0;
  const driverStandings = (lists[0].DriverStandings || []).map((s, i) => ({
    position: parseInt(s.position, 10) || i + 1,
    driver_id: normDriver(s.Driver?.driverId),
    constructor_id: normTeam(s.Constructors?.[s.Constructors.length - 1]?.constructorId),
    points: parseFloat(s.points) || 0,
    wins: parseInt(s.wins, 10) || 0,
  }));

  const cs = await getJSON(`${JOLPICA}/constructorstandings.json?limit=20`);
  let constructorStandings = [];
  if (cs.ok) {
    const cl = cs.json?.MRData?.StandingsTable?.StandingsLists || [];
    constructorStandings = (cl[0]?.ConstructorStandings || []).map((s, i) => ({
      position: parseInt(s.position, 10) || i + 1,
      constructor_id: normTeam(s.Constructor?.constructorId),
      points: parseFloat(s.points) || 0,
      wins: parseInt(s.wins, 10) || 0,
    }));
  }

  return { ok: true, driverStandings, constructorStandings, racesCompleted: round, source: "jolpica" };
}

function mapRace(race) {
  return {
    round: parseInt(race.round, 10),
    name: race.raceName,
    date: race.date,
    circuit_id: normCircuit(race.Circuit?.circuitId),
    results: (race.Results || []).slice(0, 10).map((res) => ({
      position: parseInt(res.position, 10),
      driver_id: normDriver(res.Driver?.driverId),
      constructor_id: normTeam(res.Constructor?.constructorId),
      points: parseFloat(res.points) || 0,
      status: res.status,
      time_or_gap: res.Time?.time || res.status,
      fastest_lap: res.FastestLap?.rank === "1",
    })),
  };
}

/**
 * Driver biographical data from Jolpica (DOB, nationality, Wikipedia URL).
 * @returns {{ok:boolean, bios?:Object}}
 */
export async function fetchDriverBios() {
  const r = await getJSON(`${JOLPICA}/drivers.json?limit=40`);
  if (!r.ok) return { ok: false };
  const bios = {};
  for (const d of r.json?.MRData?.DriverTable?.Drivers || []) {
    const id = normDriver(d.driverId);
    bios[id] = {
      dob: d.dateOfBirth || null,
      nationality: d.nationality || null,
      wiki: d.url || null,
    };
  }
  return { ok: Object.keys(bios).length > 0, bios };
}

/**
 * Circuit data for all 2026 rounds (name, locality, country, lat/long, altitude).
 * @returns {{ok:boolean, circuits?:Object}}
 */
export async function fetchCircuitData() {
  const r = await getJSON(`${JOLPICA}/circuits.json?limit=30`);
  if (!r.ok) return { ok: false };
  const circuits = {};
  for (const c of r.json?.MRData?.CircuitTable?.Circuits || []) {
    const id = normCircuit(c.circuitId);
    circuits[id] = {
      name: c.circuitName || null,
      locality: c.Location?.locality || null,
      country: c.Location?.country || null,
      lat: parseFloat(c.Location?.lat) || null,
      long: parseFloat(c.Location?.long) || null,
      alt: parseFloat(c.Location?.alt) || null,
      wiki: c.url || null,
    };
  }
  return { ok: Object.keys(circuits).length > 0, circuits };
}

/**
 * Per-race results for completed 2026 rounds (top-10 per race).
 * Jolpica's bulk /results endpoint sometimes lags the newest round (it dropped
 * Monaco while the standings already included it), so any round missing from
 * the bulk response — up to `racesCompleted` — is backfilled with a per-round
 * query. Still graceful: returns whatever subset succeeded.
 * @returns {{ok:boolean, races?:Array}}
 */
export async function fetchRaceResults(racesCompleted = 0) {
  const r = await getJSON(`${JOLPICA}/results.json?limit=600`);
  const races = [];
  const seen = new Set();
  if (r.ok) {
    for (const race of r.json?.MRData?.RaceTable?.Races || []) {
      const m = mapRace(race);
      races.push(m);
      seen.add(m.round);
    }
  }
  // Backfill any completed round the bulk endpoint dropped (max 6 extra calls).
  const missing = [];
  for (let round = 1; round <= racesCompleted; round++) if (!seen.has(round)) missing.push(round);
  for (const round of missing.slice(0, 6)) {
    const one = await getJSON(`${JOLPICA}/${round}/results.json`);
    if (!one.ok) continue;
    const race = one.json?.MRData?.RaceTable?.Races?.[0];
    if (race) races.push(mapRace(race));
  }
  races.sort((a, b) => a.round - b.round);
  return { ok: races.length > 0, races };
}

/**
 * Race-day forecast from Open-Meteo (free, no key). Only valid for dates within
 * the ~16-day forecast horizon; outside it the API errors and we return ok:false.
 * @returns {{ok:boolean, weather?:{t_max:number,t_min:number,rain_prob:number,wind_max:number}}}
 */
export async function fetchWeather(lat, long, date) {
  if (lat == null || long == null || !date) return { ok: false };
  const r = await getJSON(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}` +
    `&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max` +
    `&timezone=UTC&start_date=${date}&end_date=${date}`
  );
  const d = r.ok ? r.json?.daily : null;
  if (!d || !Array.isArray(d.temperature_2m_max) || d.temperature_2m_max[0] == null) return { ok: false };
  return {
    ok: true,
    weather: {
      t_max: d.temperature_2m_max[0],
      t_min: d.temperature_2m_min?.[0] ?? null,
      rain_prob: d.precipitation_probability_max?.[0] ?? null,
      wind_max: d.wind_speed_10m_max?.[0] ?? null,
    },
  };
}

// ══════════════════════════════════════════════════════════════════════════════
// OPENF1 — Real-time telemetry and session data (openf1.org)
// Complements Jolpica: fills result gaps immediately after a race ends,
// then adds tire strategy + pit stop enrichment for the last 3 races.
// ══════════════════════════════════════════════════════════════════════════════
const OPENF1 = "https://api.openf1.org/v1";

// 2026 car number → our driver_id slug (matches seed.js DRIVER_INFO numbers)
const OPENF1_DRIVER_MAP = {
  81: "piastri",       1: "norris",         16: "leclerc",
  44: "hamilton",      3: "max_verstappen",  6: "hadjar",
  63: "russell",      12: "antonelli",      55: "sainz",
  23: "albon",        30: "lawson",         41: "arvid_lindblad",
  14: "alonso",       18: "stroll",         87: "bearman",
  31: "ocon",         10: "gasly",          43: "colapinto",
  27: "hulkenberg",    5: "bortoleto",      77: "bottas",
  11: "perez",
};

// OpenF1 circuit_short_name → our calendar circuit_id.
// NOTE: these are OpenF1's *exact* circuit_short_name values (verified against the
// live /sessions feed) — several differ from the city name (e.g. "Monte Carlo" not
// "Monaco", "Catalunya" not "Barcelona"). A mismatch silently drops that round's
// tire/pit enrichment, so keep this in sync with the real feed. Common aliases are
// kept too in case OpenF1 changes a label.
const OPENF1_CIRCUIT_MAP = {
  "Melbourne": "australia",       "Shanghai": "china",          "Suzuka": "japan",
  "Sakhir": "bahrain",            "Jeddah": "saudi_arabia",     "Miami": "miami",
  "Imola": "imola",               "Monte Carlo": "monaco",      "Monaco": "monaco",
  "Montreal": "canada",           "Catalunya": "spain",         "Barcelona": "spain",
  "Spielberg": "austria",         "Silverstone": "britain",     "Hungaroring": "hungary",
  "Budapest": "hungary",          "Spa-Francorchamps": "belgium", "Zandvoort": "netherlands",
  "Monza": "italy",               "Baku": "azerbaijan",         "Madring": "madrid",
  "Madrid": "madrid",             "Singapore": "singapore",     "Austin": "americas",
  "Mexico City": "mexico",        "Interlagos": "brazil",       "São Paulo": "brazil",
  "Las Vegas": "las_vegas",       "Lusail": "qatar",            "Yas Marina Circuit": "abu_dhabi",
  "Yas Island": "abu_dhabi",
};
const normOF1Circuit = (n) => OPENF1_CIRCUIT_MAP[n] || (n || "").toLowerCase().replace(/[^a-z]/g, "_");
const OF1_POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

/**
 * All 2026 Race session keys from OpenF1, mapped to circuit_id + date.
 * Used to join OpenF1 telemetry data to our CALENDAR_2026 rounds.
 */
export async function fetchOpenF1Sessions(year = 2026) {
  const r = await getJSON(`${OPENF1}/sessions?year=${year}&session_name=Race`, 10000);
  if (!r.ok || !Array.isArray(r.json)) return { ok: false };
  const sessions = r.json.map(s => ({
    session_key: s.session_key,
    circuit_id: normOF1Circuit(s.circuit_short_name),
    circuit_name: s.circuit_short_name || "",
    date: s.date_start ? s.date_start.slice(0, 10) : null,
    meeting_name: s.meeting_name || "",
  }));
  return { ok: sessions.length > 0, sessions };
}

/**
 * Final race classification from OpenF1 (automated fallback when Jolpica lags).
 * Uses the last position entry per driver as the final race order.
 */
export async function fetchOpenF1RaceResult(sessionKey) {
  const [posR, drvR] = await Promise.all([
    getJSON(`${OPENF1}/position?session_key=${sessionKey}`, 14000),
    getJSON(`${OPENF1}/drivers?session_key=${sessionKey}`, 8000),
  ]);
  if (!posR.ok || !Array.isArray(posR.json) || !posR.json.length) return { ok: false };

  // driver_number → constructor slug from live session data
  const teamByNum = {};
  for (const d of Array.isArray(drvR.json) ? drvR.json : []) {
    if (d.driver_number) {
      const raw = (d.team_name || "").toLowerCase().replace(/[\s-]+/g, "_");
      teamByNum[d.driver_number] = normTeam(raw) || null;
    }
  }

  // last recorded position per driver = final classification
  const finalPos = {};
  for (const p of posR.json) {
    if (p.driver_number != null && p.position != null) finalPos[p.driver_number] = p.position;
  }

  const results = Object.entries(finalPos)
    .map(([num, pos]) => {
      const driverId = OPENF1_DRIVER_MAP[+num];
      return driverId
        ? { position: +pos, driver_id: driverId, constructor_id: teamByNum[+num] || null,
            points: +pos <= 10 ? (OF1_POINTS[+pos - 1] || 0) : 0,
            status: "Finished", time_or_gap: null, fastest_lap: false, _source: "openf1" }
        : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.position - b.position);

  return { ok: results.length >= 5, results };
}

/**
 * Pit stop events per driver for a session (lap number + stop duration in seconds).
 */
export async function fetchPitStops(sessionKey) {
  const r = await getJSON(`${OPENF1}/pit?session_key=${sessionKey}`, 8000);
  if (!r.ok || !Array.isArray(r.json)) return { ok: false };
  const byDriver = {};
  for (const p of r.json) {
    const id = OPENF1_DRIVER_MAP[p.driver_number];
    if (!id) continue;
    if (!byDriver[id]) byDriver[id] = [];
    byDriver[id].push({ lap: p.lap_number || 0, duration: typeof p.pit_duration === "number" ? +p.pit_duration.toFixed(2) : null });
  }
  return { ok: Object.keys(byDriver).length > 0, pit_stops: byDriver };
}

/**
 * Tire compound stints per driver: which compound on which laps.
 * Returns SOFT / MEDIUM / HARD / INTERMEDIATE / WET per stint.
 */
export async function fetchTireStints(sessionKey) {
  const r = await getJSON(`${OPENF1}/stints?session_key=${sessionKey}`, 8000);
  if (!r.ok || !Array.isArray(r.json)) return { ok: false };
  const byDriver = {};
  for (const s of r.json) {
    const id = OPENF1_DRIVER_MAP[s.driver_number];
    if (!id) continue;
    if (!byDriver[id]) byDriver[id] = [];
    byDriver[id].push({
      compound: (s.compound || "UNKNOWN").toUpperCase(),
      lap_start: s.lap_start || 1,
      lap_end: s.lap_end || null,
      tyre_age: s.tyre_age_at_start || 0,
      stint_number: s.stint_number || 1,
    });
  }
  for (const id of Object.keys(byDriver)) byDriver[id].sort((a, b) => a.lap_start - b.lap_start);
  return { ok: Object.keys(byDriver).length > 0, stints: byDriver };
}
