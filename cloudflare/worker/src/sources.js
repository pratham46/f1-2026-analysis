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

async function getJSON(url, timeoutMs = 8000) {
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
