"""F1 2026 deep-analysis API — runs on free-server-2 (OCI ARM).

Does what the Cloudflare Worker cannot (40-subrequest cap): pulls EVERY lap of
every 2026 race from OpenF1, then computes
  - race pace        median clean-lap time per driver per race, gap % to fastest
  - teammate battles per-race pace delta inside each team
  - tyre degradation fuel-corrected s/lap per compound, and per team vs field
  - season sim       Monte Carlo of the remaining rounds from measured pace

Serves GET /api/analysis and /health. Stdlib only — no pip install.
Completed sessions are cached on disk (they never change), so a recompute only
hits OpenF1 for races it has not seen.
"""

import json
import os
import random
import statistics as st
import threading
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone, timedelta
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

OPENF1 = "https://api.openf1.org/v1"
YEAR = int(os.environ.get("F1_YEAR", "2026"))
DATA_DIR = Path(os.environ.get("DATA_DIR", "/data"))
INTERVAL_S = int(os.environ.get("ANALYSIS_INTERVAL_S", str(6 * 3600)))
SIMS = int(os.environ.get("SIMS", "100000"))
# ponytail: fixed fuel-burn correction. A lighter car is faster by roughly this
# much per lap, which masks tyre wear. Calibration knob, not a measurement.
FUEL_S_PER_LAP = float(os.environ.get("FUEL_S_PER_LAP", "0.055"))
PORT = int(os.environ.get("PORT", "8080"))

POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]
SPRINT_POINTS = [8, 7, 6, 5, 4, 3, 2, 1]
DRY = ("SOFT", "MEDIUM", "HARD")

CACHE = DATA_DIR / "openf1"
OUT = DATA_DIR / "analysis.json"
_state = {"analysis": None, "error": None, "running": False}


# --- OpenF1 ----------------------------------------------------------------

def get(path, cacheable=False, **params):
    """GET an OpenF1 endpoint. `cacheable` = finished session, safe to keep forever."""
    qs = urllib.parse.urlencode(params)
    key = CACHE / f"{path}_{qs.replace('&', '_').replace('=', '-')}.json"
    if cacheable and key.exists():
        return json.loads(key.read_text())
    url = f"{OPENF1}/{path}?{qs}"
    for attempt in range(6):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "f1-2026-analysis"})
            with urllib.request.urlopen(req, timeout=60) as r:
                data = json.loads(r.read())
            break
        except urllib.error.HTTPError as e:
            if e.code == 404:  # OpenF1 answers "no data" with 404
                data = []
                break
            if e.code != 429 and e.code < 500:
                raise
            time.sleep(2 ** attempt)
        except (urllib.error.URLError, TimeoutError):
            time.sleep(2 ** attempt)
    else:
        raise RuntimeError(f"OpenF1 unreachable: {url}")
    time.sleep(0.4)  # stay under OpenF1's free rate limit
    # Only cache non-empty answers: an empty one may be OpenF1 serving partial
    # data, and caching it would freeze the hole in forever.
    if cacheable and data:
        CACHE.mkdir(parents=True, exist_ok=True)
        key.write_text(json.dumps(data))
    return data


def slug(name):
    return unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode().lower().replace(" ", "_")


# --- per-race analysis -----------------------------------------------------

def analyse_race(laps, stints, drivers):
    """Clean-lap race pace + per-stint degradation for one race."""
    by_drv = {}
    for l in laps:
        if l.get("lap_duration"):
            by_drv.setdefault(l["driver_number"], []).append(l)
    if not by_drv:
        return None

    # Laps either side of a stop are not race pace.
    pit_laps = {}
    for s in stints:
        n = s["driver_number"]
        if s.get("stint_number", 1) > 1 and s.get("lap_start"):
            pit_laps.setdefault(n, set()).update({s["lap_start"], s["lap_start"] - 1})

    # Safety car / VSC: a lap where the FIELD is slow, not one driver.
    per_lap = {}
    for ls in by_drv.values():
        for l in ls:
            per_lap.setdefault(l["lap_number"], []).append(l["lap_duration"])
    lap_med = {k: st.median(v) for k, v in per_lap.items() if len(v) >= 5}
    if not lap_med:
        return None
    ref = st.median(lap_med.values())
    neutral = {k for k, v in lap_med.items() if v > ref * 1.07}

    clean = {}
    for n, ls in by_drv.items():
        ok = [l for l in ls
              if l["lap_number"] > 1 and not l.get("is_pit_out_lap")
              and l["lap_number"] not in pit_laps.get(n, ())
              and l["lap_number"] not in neutral]
        if len(ok) < 10:
            continue
        m = st.median(l["lap_duration"] for l in ok)
        ok = [l for l in ok if l["lap_duration"] <= m * 1.05]  # traffic, mistakes
        clean[n] = ok

    pace = {n: st.median(l["lap_duration"] for l in ls) for n, ls in clean.items() if len(ls) >= 10}
    if not pace:
        return None
    best = min(pace.values())
    pace_rows = {n: {"pace_s": round(p, 3), "gap_pct": round((p / best - 1) * 100, 3),
                     "clean_laps": len(clean[n])} for n, p in pace.items()}

    degs = []
    for s in stints:
        n, comp = s["driver_number"], s.get("compound")
        if comp not in DRY or n not in clean or not s.get("lap_end"):
            continue
        pts = [(l["lap_number"], l["lap_duration"]) for l in clean[n]
               if s["lap_start"] <= l["lap_number"] <= s["lap_end"]]
        if len(pts) < 8:
            continue
        slope = st.linear_regression([p[0] for p in pts], [p[1] for p in pts]).slope
        degs.append({"driver_number": n, "compound": comp, "laps": len(pts),
                     "deg_s_per_lap": round(slope + FUEL_S_PER_LAP, 4)})
    return {"pace": pace_rows, "deg": degs}


# --- season ----------------------------------------------------------------

def compute():
    now = datetime.now(timezone.utc)
    races = get("sessions", year=YEAR, session_name="Race")
    sprints = get("sessions", year=YEAR, session_name="Sprint")
    done = lambda s: datetime.fromisoformat(s["date_end"]) < now - timedelta(hours=3)

    roster, team_colour = {}, {}
    race_out, dnf_tally = [], {}
    laps_total = 0
    last_done = None
    for s in sorted(races, key=lambda s: s["date_start"]):
        if not done(s):
            continue
        k = s["session_key"]
        old = datetime.fromisoformat(s["date_end"]) < now - timedelta(days=2)
        laps = get("laps", cacheable=old, session_key=k)
        if not laps:
            continue  # cancelled or not yet published
        stints = get("stints", cacheable=old, session_key=k)
        drivers = get("drivers", cacheable=old, session_key=k)
        result = get("session_result", cacheable=old, session_key=k)
        last_done = s
        laps_total += len(laps)
        for d in drivers:
            n = d["driver_number"]
            roster[n] = {"id": slug(d["last_name"]), "name": d.get("full_name") or d["last_name"],
                         "code": d.get("name_acronym"), "team": d.get("team_name")}
            if d.get("team_colour"):
                team_colour[d["team_name"]] = "#" + d["team_colour"].lstrip("#")
        for r in result:
            t = dnf_tally.setdefault(r["driver_number"], [0, 0])
            t[1] += 1
            t[0] += bool(r.get("dnf") or r.get("dns"))
        a = analyse_race(laps, stints, drivers)
        if not a:
            continue
        team_of = {d["driver_number"]: d["team_name"] for d in drivers}
        race_out.append({"session_key": k, "date": s["date_start"][:10],
                         "circuit": s.get("circuit_short_name") or s["location"],
                         "laps": len(laps), "team_of": team_of, **a})

    if not race_out:
        raise RuntimeError("no analysable races")

    # Race pace: median gap across the season.
    gaps = {}
    for r in race_out:
        for n, p in r["pace"].items():
            gaps.setdefault(n, []).append(p["gap_pct"])
    pace = sorted(({"driver_number": n, **roster[n], "races": len(g),
                    "median_gap_pct": round(st.median(g), 3),
                    "best_gap_pct": round(min(g), 3)}
                   for n, g in gaps.items() if len(g) >= 3 and n in roster),
                  key=lambda x: x["median_gap_pct"])

    # Team pace per race (best car) — the development race.
    team_by_race = []
    for r in race_out:
        best = {}
        for n, p in r["pace"].items():
            t = r["team_of"].get(n)
            if t:
                best[t] = min(best.get(t, 99), p["gap_pct"])
        team_by_race.append({"date": r["date"], "circuit": r["circuit"],
                             "teams": {t: round(v, 3) for t, v in best.items()}})

    # Teammates: same team, same race, both with clean pace.
    tm = {}
    for r in race_out:
        teams = {}
        for n in r["pace"]:
            if r["team_of"].get(n):
                teams.setdefault(r["team_of"][n], []).append(n)
        for t, ns in teams.items():
            if len(ns) != 2:
                continue
            a, b = sorted(ns)
            d = r["pace"][a]["gap_pct"] - r["pace"][b]["gap_pct"]  # >0: b faster
            e = tm.setdefault((t, a, b), [])
            e.append(d)
    teammates = []
    for (t, a, b), ds in tm.items():
        if len(ds) < 3:
            continue
        med = st.median(ds)
        fast, slow = (b, a) if med > 0 else (a, b)
        teammates.append({"team": t, "colour": team_colour.get(t),
                          "faster": roster[fast], "slower": roster[slow],
                          "median_delta_pct": round(abs(med), 3), "races": len(ds),
                          "faster_won": sum(1 for d in ds if (d > 0) == (fast == b))})
    teammates.sort(key=lambda x: x["median_delta_pct"], reverse=True)

    # Tyre degradation: compound medians, and each team vs the field on the
    # same compound in the same race (cancels track + temperature).
    comp = {}
    team_rel = {}
    for r in race_out:
        race_med = {c: st.median([d["deg_s_per_lap"] for d in r["deg"] if d["compound"] == c])
                    for c in DRY if any(d["compound"] == c for d in r["deg"])}
        for d in r["deg"]:
            comp.setdefault(d["compound"], []).append(d["deg_s_per_lap"])
            t = r["team_of"].get(d["driver_number"])
            if t:
                team_rel.setdefault(t, []).append(d["deg_s_per_lap"] - race_med[d["compound"]])
    tyres = [{"compound": c, "stints": len(comp[c]), "median_deg_s_per_lap": round(st.median(comp[c]), 4)}
             for c in DRY if c in comp]
    tyre_mgmt = sorted(({"team": t, "colour": team_colour.get(t), "stints": len(v),
                         "rel_deg_s_per_lap": round(st.median(v), 4)}
                        for t, v in team_rel.items() if len(v) >= 5),
                       key=lambda x: x["rel_deg_s_per_lap"])

    sim = simulate(races, sprints, race_out, roster, dnf_tally, last_done, done)

    return {
        "generated_at": now.isoformat(timespec="seconds"),
        "source": "OpenF1 lap timing, analysed on free-server-2",
        "races_analysed": len(race_out),
        "laps_analysed": laps_total,
        "method": {"fuel_correction_s_per_lap": FUEL_S_PER_LAP, "sims": SIMS,
                   "clean_lap": "not lap 1, not in/out lap, not SC/VSC (field >7% slow), within 5% of driver median"},
        "team_colours": team_colour,
        "race_pace": pace,
        "team_pace_by_race": team_by_race,
        "teammates": teammates,
        "tyre_deg": tyres,
        "tyre_management": tyre_mgmt,
        "season_sim": sim,
    }


def simulate(races, sprints, race_out, roster, dnf_tally, last_done, done):
    """Monte Carlo of the remaining rounds, from each driver's measured pace."""
    standings = get("championship_drivers", session_key=last_done["session_key"]) if last_done else []
    pts0 = {s["driver_number"]: s["points_current"] for s in standings}
    left_r = [s for s in races if not done(s)]
    left_s = [s for s in sprints if not done(s)]
    # Recent form: a driver's last 8 race-pace gaps.
    form = {}
    for r in race_out:
        for n, p in r["pace"].items():
            form.setdefault(n, []).append(p["gap_pct"])
    field = [n for n in pts0 if n in roster]
    form = {n: form.get(n, [])[-8:] or [3.0] for n in field}  # no data → backmarker
    p_dnf = {n: (dnf_tally.get(n, [0, 0])[0] + 1) / (dnf_tally.get(n, [0, 0])[1] + 12) for n in field}

    events = [POINTS] * len(left_r) + [SPRINT_POINTS] * len(left_s)
    rnd = random.Random(2026)
    totals = {n: [] for n in field}
    champs = dict.fromkeys(field, 0)
    finish_pos = {n: [0] * len(field) for n in field}
    for _ in range(SIMS):
        pts = dict(pts0)
        for table in events:
            perf = sorted((rnd.choice(form[n]) + rnd.gauss(0, 0.35), n)
                          for n in field if rnd.random() > p_dnf[n])
            for i, (_, n) in enumerate(perf[:len(table)]):
                pts[n] += table[i]
        order = sorted(field, key=lambda n: -pts[n])
        champs[order[0]] += 1
        for i, n in enumerate(order):
            finish_pos[n][i] += 1
            totals[n].append(pts[n])

    rows = []
    for n in field:
        t = sorted(totals[n])
        likely = max(range(len(field)), key=lambda i: finish_pos[n][i])
        rows.append({"driver_number": n, **roster[n], "points_now": pts0[n],
                     "expected_points": round(st.mean(t), 1),
                     "p10": t[len(t) // 10], "p90": t[len(t) * 9 // 10],
                     "p_title": round(champs[n] / SIMS, 4),
                     "likely_position": likely + 1,
                     "p_likely_position": round(finish_pos[n][likely] / SIMS, 4)})
    rows.sort(key=lambda r: -r["expected_points"])
    return {"remaining_races": [s.get("circuit_short_name") or s["location"] for s in left_r],
            "remaining_sprints": len(left_s), "sims": SIMS, "drivers": rows}


# --- refresh loop + HTTP -----------------------------------------------------

def refresh_forever():
    while True:
        _state["running"] = True
        t0 = time.time()
        try:
            a = compute()
            a["compute_seconds"] = round(time.time() - t0, 1)
            DATA_DIR.mkdir(parents=True, exist_ok=True)
            tmp = OUT.with_suffix(".tmp")
            tmp.write_text(json.dumps(a))
            tmp.replace(OUT)
            _state.update(analysis=json.dumps(a).encode(), error=None)
            print(f"[analysis] ok {a['races_analysed']} races, {a['laps_analysed']} laps, {a['compute_seconds']}s", flush=True)
        except Exception as e:  # keep serving the last good result
            _state["error"] = f"{type(e).__name__}: {e}"
            print(f"[analysis] failed: {_state['error']}", flush=True)
        _state["running"] = False
        time.sleep(INTERVAL_S)


class Handler(BaseHTTPRequestHandler):
    def _send(self, code, body, cache="public, max-age=300"):
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")  # public, read-only data
        self.send_header("Cache-Control", cache)
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def do_GET(self):
        path = self.path.split("?")[0]
        if path == "/api/analysis":
            if _state["analysis"]:
                return self._send(200, _state["analysis"])
            return self._send(503, b'{"error":"warming_up"}', "no-store")
        if path == "/health":
            body = {"ok": _state["analysis"] is not None, "running": _state["running"], "error": _state["error"]}
            return self._send(200, json.dumps(body).encode(), "no-store")
        self._send(404, b'{"error":"not_found","routes":["/api/analysis","/health"]}')

    do_HEAD = do_GET

    def log_message(self, *a):
        pass


if __name__ == "__main__":
    if OUT.exists():  # serve the last result instantly after a restart
        _state["analysis"] = OUT.read_bytes()
    threading.Thread(target=refresh_forever, daemon=True).start()
    ThreadingHTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
