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
};

// Ergast constructorId → our team slug.
const TEAM_ALIAS = {
  red_bull: "red_bull", rb: "rb", racing_bulls: "rb", alphatauri: "rb",
  ferrari: "ferrari", mclaren: "mclaren", mercedes: "mercedes",
  aston_martin: "aston_martin", williams: "williams", alpine: "alpine",
  haas: "haas", sauber: "sauber", kick_sauber: "sauber", stake: "sauber",
};

const normDriver = (id) => DRIVER_ALIAS[id] || id;
const normTeam = (id) => TEAM_ALIAS[id] || id;

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
  const ds = await getJSON(`${JOLPICA}/driverstandings.json`);
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

  const cs = await getJSON(`${JOLPICA}/constructorstandings.json`);
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

/**
 * Per-race results for completed 2026 rounds (top finishers per race).
 * @returns {{ok:boolean, races?:Array<{round:number,name:string,date:string,results:Array}>}}
 */
export async function fetchRaceResults() {
  const r = await getJSON(`${JOLPICA}/results.json?limit=600`);
  if (!r.ok) return { ok: false };
  const races = (r.json?.MRData?.RaceTable?.Races || []).map((race) => ({
    round: parseInt(race.round, 10),
    name: race.raceName,
    date: race.date,
    circuit: race.Circuit?.circuitId,
    results: (race.Results || []).slice(0, 10).map((res) => ({
      position: parseInt(res.position, 10),
      driver_id: normDriver(res.Driver?.driverId),
      constructor_id: normTeam(res.Constructor?.constructorId),
      points: parseFloat(res.points) || 0,
      status: res.status,
      fastest_lap: res.FastestLap?.rank === "1",
    })),
  }));
  return { ok: true, races };
}
