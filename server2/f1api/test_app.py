"""Run: python -I test_app.py  (no network, no Ollama)."""
import os
import sys
import tempfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
os.environ["DATA_DIR"] = tempfile.mkdtemp()
import app  # noqa: E402

D = lambda code, name, team: {"code": code, "name": name, "team": team, "id": code.lower(), "driver_number": 1}
a = {
    "generated_at": "2026-11-25T00:00:00+00:00", "races_analysed": 2, "laps_analysed": 100,
    "driver_standings": [{**D("ANT", "Kimi ANTONELLI", "Mercedes"), "position": 1, "points": 402.0}],
    "constructor_standings": [{"team": "Mercedes", "position": 1, "points": 666.0}],
    "race_results": [{"circuit": "Melbourne", "date": "2026-03-08", "podium": [D("RUS", "George RUSSELL", "Mercedes")],
                      "fastest_lap": {**D("VER", "Max VERSTAPPEN", "Red Bull Racing"), "time_s": 82.0}}],
    "sprint_results": [],
    "win_tally": [{**D("RUS", "George RUSSELL", "Mercedes"), "wins": 1, "podiums": 1}],
    "race_pace": [{**D("ANT", "Kimi ANTONELLI", "Mercedes"), "median_gap_pct": 0.08}],
    "teammates": [  # deliberately sorted biggest-first, as compute() emits them
        {"team": "Cadillac", "faster": D("PER", "Sergio PEREZ", "Cadillac"), "slower": D("BOT", "Valtteri BOTTAS", "Cadillac"),
         "median_delta_pct": 0.70, "races": 17, "faster_won": 15},
        {"team": "McLaren", "faster": D("NOR", "Lando NORRIS", "McLaren"), "slower": D("PIA", "Oscar PIASTRI", "McLaren"),
         "median_delta_pct": 0.19, "races": 19, "faster_won": 11},
    ],
    "tyre_deg": [{"compound": "SOFT", "median_deg_s_per_lap": 0.046}],
    "tyre_management": [{"team": "Audi"}],
    "season_sim": {"sims": 10, "next_race": None, "drivers": [{**D("ANT", "Kimi ANTONELLI", "Mercedes"),
                   "expected_points": 431.0, "p_title": 1.0}]},
}
ctx = app.context_text(a)
assert "closest teammate battle: McLaren" in ctx, ctx
assert "biggest teammate gap: Cadillac" in ctx, ctx
assert "Antonelli has mathematically won the title" in ctx, ctx
assert "most fastest laps: Max Verstappen with 1" in ctx, ctx
assert app.nice("Kimi ANTONELLI") == "Kimi Antonelli"
top = [{"name": "Max VERSTAPPEN"}]
assert app.plausible("Max Verstappen " + " ".join(f"w{i}" for i in range(60)), top)
assert not app.plausible("Verstappen " + "🏁 " * 80, top)  # loop
assert not app.plausible("Verstappen wins $100 million " + " ".join(f"w{i}" for i in range(60)), top)
assert app.rate_ok("1.2.3.4", limit=2) and app.rate_ok("1.2.3.4", limit=2) and not app.rate_ok("1.2.3.4", limit=2)

# race_extras + season_story: the OpenF1 side feeds
x = app.race_extras(
    overtakes=[{"overtaking_driver_number": 44}, {"overtaking_driver_number": 44}, {"overtaking_driver_number": 1}],
    rc=[{"category": "SafetyCar", "message": "SAFETY CAR DEPLOYED"},
        {"category": "SafetyCar", "message": "VIRTUAL SAFETY CAR DEPLOYED"},
        {"category": "SafetyCar", "message": "SAFETY CAR IN THIS LAP"},
        {"category": "Flag", "flag": "RED", "message": "RED FLAG"}],
    weather=[{"air_temperature": 20, "track_temperature": 30, "rainfall": 0},
             {"air_temperature": 22, "track_temperature": 34, "rainfall": 1}],
    pits=[{"driver_number": 44, "stop_duration": 2.4}, {"driver_number": 1, "stop_duration": None}],
    positions=[{"driver_number": 44, "position": 9, "date": "a"}, {"driver_number": 44, "position": 1, "date": "b"},
               {"driver_number": 1, "position": 1, "date": "a"}],
    result=[{"driver_number": 44, "position": 2}, {"driver_number": 1, "position": None}])
assert (x["safety_cars"], x["vsc"], x["red_flags"]) == (1, 1, 1), x
assert x["passes"] == {44: 2, 1: 1} and x["gained"] == {44: 7}, x  # DNF (position None) not scored
assert x["air_c"] == 21 and x["wet"] and x["stops"] == [(44, 2.4)], x
assert app.race_extras([], [], [], [], [], [])["air_c"] is None
x.update(circuit="Monza", date="2026-09-06", team_of={44: "Ferrari", 1: "McLaren"})
story, ot, mv, crews = app.season_story([x] * 3, {44: {"id": "hamilton", "name": "Lewis HAMILTON", "code": "HAM", "team": "Ferrari"}}, {})
assert ot[0]["code"] == "HAM" and ot[0]["overtakes"] == 6 and ot[1]["code"] == "1", ot  # unknown roster → number
assert mv[0]["avg"] == 7 and crews == [{"team": "Ferrari", "colour": None, "stops": 3, "median_s": 2.4, "best_s": 2.4}], crews
print("ok")
