// Seed-first data access.
//
// The dashboard ALWAYS paints from the committed data.js seed, then upgrades
// from the Worker only if the Worker payload is provably at least as fresh.
// A stale KV must never clobber good committed data — that regression has
// shipped before.
//
// window.F1_DATA is FLAT. There is no `.data` property.

// Only the dark liveries fail as text on a near-black base; the bright ones
// are fine. See DESIGN.md.
const TEAM_TEXT_SAFE = new Set(["ferrari", "red_bull", "aston_martin"]);

export function isFresher(candidate, current) {
  if (!candidate || typeof candidate !== "object") return false;
  const cd = Date.parse(candidate.generated_at);
  const sd = Date.parse(current.generated_at);
  if (Number.isNaN(cd) || Number.isNaN(sd)) return false;
  const cr = candidate.races_completed_2026;
  const sr = current.races_completed_2026;
  if (typeof cr !== "number" || typeof sr !== "number") return false;
  // Both must hold: no older than the seed AND no regression in rounds.
  return cd >= sd && cr >= sr;
}

const cssVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export function teamColor(teamId, { text = false } = {}) {
  const base = `--team-${teamId}`;
  const name = text && TEAM_TEXT_SAFE.has(teamId) ? `${base}-txt` : base;
  return cssVar(name) || cssVar("--ink-1");
}

export function loadSeed() {
  const d = window.F1_DATA;
  if (!d || typeof d !== "object") {
    throw new Error("F1_DATA missing — dashboard/data.js failed to load");
  }
  return d;
}

export async function upgradeFromWorker(seed) {
  const base = window.F1_WORKER_URL;
  if (!base) return null;
  try {
    const r = await fetch(`${base}/api/data`, { signal: AbortSignal.timeout(8000) });
    if (!r.ok) return null;
    const live = await r.json();
    return isFresher(live, seed) ? live : null;
  } catch {
    return null; // Offline is a supported state, not an error.
  }
}

// --- shared accessors -------------------------------------------------------

export const driverName = (data, id) => data.driver_info?.[id]?.name || id;
export const driverShort = (data, id) => data.driver_info?.[id]?.short || id.slice(0, 3).toUpperCase();
export const driverTeam = (data, id) => data.driver_info?.[id]?.team || "";

export const completedRounds = (data) =>
  (data.real_race_results_2026 || []).filter((r) => r.round).sort((a, b) => a.round - b.round);

export function raceWinner(race) {
  const win = (race?.results || []).find((r) => r.position === 1);
  return win?.driver_id || null;
}
