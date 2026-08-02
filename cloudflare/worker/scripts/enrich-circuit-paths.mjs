// Trace each completed 2026 circuit from OpenF1 car-location telemetry and store
// a normalised outline in the committed seed as `circuit_paths`.
//
// Why telemetry and not the track_layouts images: those are remote raster .webp
// files on media.formula1.com. They cannot be traced (a canvas read would be
// CORS-blocked) and there is no circuit geometry anywhere else in the payload —
// openf1_race_data carries only session_key/pit_stops/stints, and
// circuit_data_2026 a single lat/long point.
//
// Circuit geometry never changes, so an existing path is never refetched.
// Coverage is the completed rounds only; unraced circuits have no session key
// and fall back per-circuit to the flat layout image in the UI.
//
// Run AFTER enrich-openf1-seed.mjs:  node scripts/enrich-circuit-paths.mjs
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(__dirname, "../../../dashboard/data.js");
// Committed cache. gen-seed.mjs rewrites data.js from scratch, so without this
// every sync would refetch all traced circuits (~3 API calls each). Circuit
// geometry never changes, so a path is fetched exactly once, ever.
const CACHE = resolve(__dirname, "../data/circuit-paths.json");
const OPENF1 = "https://api.openf1.org/v1";
const TARGET_POINTS = 150;

/** Evenly thin a point list to `target`, always keeping both endpoints. */
export function decimate(points, target = TARGET_POINTS) {
  if (points.length <= target) return points;
  const stride = points.length / target;
  const out = [];
  for (let i = 0; i < target; i++) out.push(points[Math.floor(i * stride)]);
  out[out.length - 1] = points[points.length - 1];
  return out;
}

/** Centre on the origin, round to integers, and report the longest span. */
export function normalise(points) {
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  return {
    points: points.map(([x, y]) => [Math.round(x - cx), Math.round(y - cy)]),
    length: Math.round(Math.max(maxX - minX, maxY - minY)),
  };
}

async function getJSON(url, { tries = 4, timeout = 25000 } = {}) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(timeout) });
      if (r.ok) return await r.json();
    } catch { /* retry */ }
    await new Promise((res) => setTimeout(res, 700 * (i + 1)));
  }
  return null;
}

// Trace one flying lap. Tries a handful of drivers because any single one may
// have no clean lap (retirement, no telemetry coverage) in a given session.
async function tracePath(sessionKey) {
  const drivers = await getJSON(`${OPENF1}/drivers?session_key=${sessionKey}`);
  for (const d of (drivers || []).slice(0, 5)) {
    const laps = await getJSON(
      `${OPENF1}/laps?session_key=${sessionKey}&driver_number=${d.driver_number}`
    );
    const valid = (laps || [])
      .filter((l) => l.lap_duration && l.date_start)
      .sort((a, b) => a.lap_duration - b.lap_duration);
    if (!valid.length) continue;

    const f = valid[0];
    const t0 = new Date(f.date_start);
    const t1 = new Date(t0.getTime() + f.lap_duration * 1000);
    const loc = await getJSON(
      `${OPENF1}/location?session_key=${sessionKey}&driver_number=${d.driver_number}` +
        `&date>${t0.toISOString()}&date<${t1.toISOString()}`
    );
    // (0,0) samples are dropouts, not positions on the circuit.
    const pts = (loc || []).filter((p) => p.x !== 0 || p.y !== 0).map((p) => [p.x, p.y]);
    if (pts.length >= 100) {
      const path = normalise(decimate(pts));
      const [x0, y0] = path.points[0];
      const [xn, yn] = path.points[path.points.length - 1];
      path.closure = +(Math.hypot(xn - x0, yn - y0) / (path.length || 1)).toFixed(3);
      path.driver_number = d.driver_number;
      path.lap = f.lap_number ?? null;
      return path;
    }
  }
  return null;
}

const raw = readFileSync(SEED, "utf8");
const start = raw.indexOf("{");
const end = raw.lastIndexOf("}");
const data = JSON.parse(raw.slice(start, end + 1));

// Seed the working set from the committed cache, then from whatever the seed
// already carries (so a hand-edited seed is never silently dropped).
const cached = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, "utf8")) : {};
const out = { ...cached, ...(data.circuit_paths || {}) };
let added = 0, kept = 0;
const missed = [];

for (const race of data.real_race_results_2026 || []) {
  const cid = race.circuit_id;
  if (!cid) continue;
  if (out[cid]?.points?.length) { kept++; continue; }
  const sk = data.openf1_race_data?.[race.round]?.session_key;
  if (!sk) { missed.push(`${race.round}:${cid}(no-session)`); continue; }
  const path = await tracePath(sk);
  if (path) {
    out[cid] = path;
    added++;
    console.log(`  ${cid}: ${path.points.length} pts, span ${path.length}, closure ${(path.closure * 100).toFixed(1)}%`);
  } else {
    missed.push(`${race.round}:${cid}(no-telemetry)`);
  }
}

data.circuit_paths = out;
writeFileSync(SEED, raw.slice(0, start) + JSON.stringify(data, null, 2) + ";\n");

// Persist the cache so the next seed regeneration costs zero API calls.
mkdirSync(dirname(CACHE), { recursive: true });
writeFileSync(CACHE, JSON.stringify(out, null, 2) + "\n");

console.log(
  `\ncircuit_paths: added ${added}, kept ${kept}, total ${Object.keys(out).length}` +
    (missed.length ? `, missed: ${missed.join(", ")}` : "")
);
// Monaco is a known permanent gap: OpenF1 returns 404 for its /location data
// (lap timing exists, GPS does not). It falls back to the flat layout image.
