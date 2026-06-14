// ============================================================================
// index.js — Cloudflare Worker entry.
//   fetch()     → /api/data, /api/news, /api/refresh, /api/health  (reads KV)
//   scheduled() → daily cron, self-gated to race weekends → assemble + write KV
//
// KV namespace binding: F1_KV   (see wrangler.toml)
// KV keys: f1:data (full payload), f1:lastrun (ISO + health)
// ============================================================================

import { assemble } from "./assemble.js";
import { CALENDAR_2026 } from "./seed.js";

const KEY_DATA = "f1:data";
const KEY_LASTRUN = "f1:lastrun";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const SEC = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
};

const json = (obj, status = 200, extra = {}) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300", ...CORS, ...SEC, ...extra },
  });

// True when today is within [Thu before .. Mon after] of any 2026 GP.
function isRaceWeekend(now = new Date()) {
  const t = now.getTime();
  const DAY = 86400000;
  return CALENDAR_2026.some((race) => {
    const d = new Date(race.date + "T00:00:00Z").getTime(); // GP = Sunday
    return t >= d - 3 * DAY && t <= d + 1 * DAY;
  });
}

// Run the pipeline and persist to KV. Returns the payload.
async function refresh(env) {
  let lastGood = {};
  try { lastGood = JSON.parse((await env.F1_KV.get(KEY_DATA)) || "{}"); } catch { /* ignore */ }

  const payload = await assemble({ lastGood });
  await env.F1_KV.put(KEY_DATA, JSON.stringify(payload));
  await env.F1_KV.put(KEY_LASTRUN, JSON.stringify({
    at: new Date().toISOString(),
    health: payload._health,
    sanity: payload._sanity,
    champion: payload.driver_standings_2026?.[0]?.driver_id,
  }));
  return payload;
}

async function readData(env) {
  const cached = await env.F1_KV.get(KEY_DATA);
  if (cached) return JSON.parse(cached);
  // Cold KV (first ever request) → assemble on demand.
  return refresh(env);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });

    try {
      switch (url.pathname) {
        case "/api/data":
          return json(await readData(env));

        case "/api/news": {
          const d = await readData(env);
          return json({ news: d.news || [], generated_at: d.generated_at });
        }

        case "/api/health":
          return json(JSON.parse((await env.F1_KV.get(KEY_LASTRUN)) || "{}"));

        case "/api/refresh": {
          if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405, { Allow: "POST" });
          // Manual trigger — run in the background so the response is instant.
          ctx.waitUntil(refresh(env));
          return json({ ok: true, triggered: true, note: "refresh running in background" }, 202, { "Cache-Control": "no-store" });
        }

        default:
          return json({ error: "not_found", routes: ["/api/data", "/api/news", "/api/health", "/api/refresh"] }, 404);
      }
    } catch (e) {
      console.error("[worker] unhandled:", e);
      return json({ error: "internal_error" }, 500);
    }
  },

  async scheduled(event, env, ctx) {
    // Daily cron, but only do the heavy fetch/scrape on race weekends.
    if (!isRaceWeekend()) {
      ctx.waitUntil(env.F1_KV.put(KEY_LASTRUN, JSON.stringify({
        at: new Date().toISOString(), health: { skipped: "not_race_weekend" },
      })));
      return;
    }
    ctx.waitUntil(refresh(env));
  },
};
