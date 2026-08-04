// AUTO-GENERATED dashboard seed (offline fallback).
// Source: cloudflare/worker assemble() — regenerate with: npm run seed.
// The live dashboard prefers the Worker /api/data; this is the fallback when offline.
window.F1_DATA = {
  "generated_at": "2026-08-04",
  "model": "js-weighted-montecarlo-v2",
  "model_cv_mae": 2.71,
  "seasons_used": [
    2020,
    2021,
    2022,
    2023,
    2024,
    2025
  ],
  "driver_info": {
    "piastri": {
      "name": "Oscar Piastri",
      "short": "PIA",
      "team": "mclaren",
      "team_name": "McLaren",
      "color": "#FF8000",
      "number": 81
    },
    "norris": {
      "name": "Lando Norris",
      "short": "NOR",
      "team": "mclaren",
      "team_name": "McLaren",
      "color": "#FF8000",
      "number": 1
    },
    "leclerc": {
      "name": "Charles Leclerc",
      "short": "LEC",
      "team": "ferrari",
      "team_name": "Ferrari",
      "color": "#E8002D",
      "number": 16
    },
    "hamilton": {
      "name": "Lewis Hamilton",
      "short": "HAM",
      "team": "ferrari",
      "team_name": "Ferrari",
      "color": "#E8002D",
      "number": 44
    },
    "max_verstappen": {
      "name": "Max Verstappen",
      "short": "VER",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 3
    },
    "hadjar": {
      "name": "Isack Hadjar",
      "short": "HAD",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 6
    },
    "russell": {
      "name": "George Russell",
      "short": "RUS",
      "team": "mercedes",
      "team_name": "Mercedes",
      "color": "#27F4D2",
      "number": 63
    },
    "antonelli": {
      "name": "Kimi Antonelli",
      "short": "ANT",
      "team": "mercedes",
      "team_name": "Mercedes",
      "color": "#27F4D2",
      "number": 12
    },
    "sainz": {
      "name": "Carlos Sainz",
      "short": "SAI",
      "team": "williams",
      "team_name": "Williams",
      "color": "#64C4FF",
      "number": 55
    },
    "albon": {
      "name": "Alex Albon",
      "short": "ALB",
      "team": "williams",
      "team_name": "Williams",
      "color": "#64C4FF",
      "number": 23
    },
    "lawson": {
      "name": "Liam Lawson",
      "short": "LAW",
      "team": "rb",
      "team_name": "Racing Bulls",
      "color": "#6692FF",
      "number": 30
    },
    "arvid_lindblad": {
      "name": "Arvid Lindblad",
      "short": "LIN",
      "team": "rb",
      "team_name": "Racing Bulls",
      "color": "#6692FF",
      "number": 41
    },
    "alonso": {
      "name": "Fernando Alonso",
      "short": "ALO",
      "team": "aston_martin",
      "team_name": "Aston Martin",
      "color": "#358C75",
      "number": 14
    },
    "stroll": {
      "name": "Lance Stroll",
      "short": "STR",
      "team": "aston_martin",
      "team_name": "Aston Martin",
      "color": "#358C75",
      "number": 18
    },
    "bearman": {
      "name": "Oliver Bearman",
      "short": "BEA",
      "team": "haas",
      "team_name": "Haas",
      "color": "#B6BABD",
      "number": 87
    },
    "ocon": {
      "name": "Esteban Ocon",
      "short": "OCO",
      "team": "haas",
      "team_name": "Haas",
      "color": "#B6BABD",
      "number": 31
    },
    "gasly": {
      "name": "Pierre Gasly",
      "short": "GAS",
      "team": "alpine",
      "team_name": "Alpine",
      "color": "#FF87BC",
      "number": 10
    },
    "colapinto": {
      "name": "Franco Colapinto",
      "short": "COL",
      "team": "alpine",
      "team_name": "Alpine",
      "color": "#FF87BC",
      "number": 43
    },
    "hulkenberg": {
      "name": "Nico Hulkenberg",
      "short": "HUL",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 27
    },
    "bortoleto": {
      "name": "Gabriel Bortoleto",
      "short": "BOR",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 5
    },
    "bottas": {
      "name": "Valtteri Bottas",
      "short": "BOT",
      "team": "cadillac",
      "team_name": "Cadillac",
      "color": "#C8A464",
      "number": 77
    },
    "perez": {
      "name": "Sergio Perez",
      "short": "PER",
      "team": "cadillac",
      "team_name": "Cadillac",
      "color": "#C8A464",
      "number": 11
    }
  },
  "team_colors": {
    "red_bull": "#3671C6",
    "ferrari": "#E8002D",
    "mclaren": "#FF8000",
    "mercedes": "#27F4D2",
    "aston_martin": "#358C75",
    "williams": "#64C4FF",
    "alpine": "#FF87BC",
    "rb": "#6692FF",
    "haas": "#B6BABD",
    "audi": "#00E701",
    "cadillac": "#C8A464",
    "sauber": "#52E252",
    "alphatauri": "#6692FF",
    "alfa": "#900000",
    "racing_point": "#F596C8",
    "renault": "#FFF500"
  },
  "regulation_impact_2026": {
    "description": "New 2026 regs: smaller cars, active aero (Manual Override Mode), 50/50 ICE + ERS hybrid, 100% sustainable fuel. Audi works team debuts; Cadillac joins as the 11th team.",
    "constructor_competitiveness_change": {
      "ferrari": 8,
      "mercedes": 5,
      "mclaren": 3,
      "williams": 1,
      "haas": 0,
      "rb": -1,
      "audi": -1,
      "aston_martin": -2,
      "alpine": -3,
      "cadillac": -4,
      "red_bull": -5
    }
  },
  "driver_standings_2026": [
    {
      "rank": 1,
      "driver_id": "antonelli",
      "name": "Kimi Antonelli",
      "short": "ANT",
      "team": "mercedes",
      "team_name": "Mercedes",
      "color": "#27F4D2",
      "number": 12,
      "predicted_points": 383.8,
      "win_probability": 0.2709,
      "championship_win_probability": 0.759,
      "podium_probability": 0.5736,
      "avg_predicted_position": 1,
      "current_real_points": 219,
      "current_real_position": 1,
      "current_wins": 6,
      "max_possible_points": 494,
      "points_behind_leader": 0,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 1
    },
    {
      "rank": 2,
      "driver_id": "hamilton",
      "name": "Lewis Hamilton",
      "short": "HAM",
      "team": "ferrari",
      "team_name": "Ferrari",
      "color": "#E8002D",
      "number": 44,
      "predicted_points": 311.8,
      "win_probability": 0.1355,
      "championship_win_probability": 0.16,
      "podium_probability": 0.5152,
      "avg_predicted_position": 2,
      "current_real_points": 169,
      "current_real_position": 2,
      "current_wins": 1,
      "max_possible_points": 444,
      "points_behind_leader": 50,
      "mathematically_eliminated": false,
      "expected_dnfs": 2,
      "experience_seasons": 6
    },
    {
      "rank": 3,
      "driver_id": "russell",
      "name": "George Russell",
      "short": "RUS",
      "team": "mercedes",
      "team_name": "Mercedes",
      "color": "#27F4D2",
      "number": 63,
      "predicted_points": 287.6,
      "win_probability": 0.0903,
      "championship_win_probability": 0.0595,
      "podium_probability": 0.4507,
      "avg_predicted_position": 3,
      "current_real_points": 160,
      "current_real_position": 3,
      "current_wins": 2,
      "max_possible_points": 435,
      "points_behind_leader": 59,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 6
    },
    {
      "rank": 4,
      "driver_id": "leclerc",
      "name": "Charles Leclerc",
      "short": "LEC",
      "team": "ferrari",
      "team_name": "Ferrari",
      "color": "#E8002D",
      "number": 16,
      "predicted_points": 251.2,
      "win_probability": 0.0677,
      "championship_win_probability": 0.014,
      "podium_probability": 0.3711,
      "avg_predicted_position": 4,
      "current_real_points": 138,
      "current_real_position": 4,
      "current_wins": 1,
      "max_possible_points": 413,
      "points_behind_leader": 81,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 6
    },
    {
      "rank": 5,
      "driver_id": "norris",
      "name": "Lando Norris",
      "short": "NOR",
      "team": "mclaren",
      "team_name": "McLaren",
      "color": "#FF8000",
      "number": 1,
      "predicted_points": 227.9,
      "win_probability": 0.0542,
      "championship_win_probability": 0.0055,
      "podium_probability": 0.2965,
      "avg_predicted_position": 5,
      "current_real_points": 128,
      "current_real_position": 5,
      "current_wins": 1,
      "max_possible_points": 403,
      "points_behind_leader": 91,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 6
    },
    {
      "rank": 6,
      "driver_id": "max_verstappen",
      "name": "Max Verstappen",
      "short": "VER",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 3,
      "predicted_points": 196,
      "win_probability": 0.0452,
      "championship_win_probability": 0.002,
      "podium_probability": 0.2261,
      "avg_predicted_position": 6,
      "current_real_points": 109,
      "current_real_position": 6,
      "current_wins": 0,
      "max_possible_points": 384,
      "points_behind_leader": 110,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 6
    },
    {
      "rank": 7,
      "driver_id": "piastri",
      "name": "Oscar Piastri",
      "short": "PIA",
      "team": "mclaren",
      "team_name": "McLaren",
      "color": "#FF8000",
      "number": 81,
      "predicted_points": 167.3,
      "win_probability": 0.0387,
      "championship_win_probability": 0,
      "podium_probability": 0.1719,
      "avg_predicted_position": 7,
      "current_real_points": 92,
      "current_real_position": 7,
      "current_wins": 0,
      "max_possible_points": 367,
      "points_behind_leader": 127,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 3
    },
    {
      "rank": 8,
      "driver_id": "hadjar",
      "name": "Isack Hadjar",
      "short": "HAD",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 6,
      "predicted_points": 132.7,
      "win_probability": 0.0339,
      "championship_win_probability": 0,
      "podium_probability": 0.1391,
      "avg_predicted_position": 8,
      "current_real_points": 68,
      "current_real_position": 8,
      "current_wins": 0,
      "max_possible_points": 343,
      "points_behind_leader": 151,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 1
    },
    {
      "rank": 9,
      "driver_id": "lawson",
      "name": "Liam Lawson",
      "short": "LAW",
      "team": "rb",
      "team_name": "Racing Bulls",
      "color": "#6692FF",
      "number": 30,
      "predicted_points": 96.8,
      "win_probability": 0.0301,
      "championship_win_probability": 0,
      "podium_probability": 0.0901,
      "avg_predicted_position": 9,
      "current_real_points": 43,
      "current_real_position": 9,
      "current_wins": 0,
      "max_possible_points": 318,
      "points_behind_leader": 176,
      "mathematically_eliminated": false,
      "expected_dnfs": 2,
      "experience_seasons": 3
    },
    {
      "rank": 10,
      "driver_id": "gasly",
      "name": "Pierre Gasly",
      "short": "GAS",
      "team": "alpine",
      "team_name": "Alpine",
      "color": "#FF87BC",
      "number": 10,
      "predicted_points": 85.7,
      "win_probability": 0.0271,
      "championship_win_probability": 0,
      "podium_probability": 0.0584,
      "avg_predicted_position": 10,
      "current_real_points": 42,
      "current_real_position": 10,
      "current_wins": 0,
      "max_possible_points": 317,
      "points_behind_leader": 177,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 6
    },
    {
      "rank": 11,
      "driver_id": "sainz",
      "name": "Carlos Sainz",
      "short": "SAI",
      "team": "williams",
      "team_name": "Williams",
      "color": "#64C4FF",
      "number": 55,
      "predicted_points": 41.1,
      "win_probability": 0.0246,
      "championship_win_probability": 0,
      "podium_probability": 0.0371,
      "avg_predicted_position": 11,
      "current_real_points": 6,
      "current_real_position": 15,
      "current_wins": 0,
      "max_possible_points": 281,
      "points_behind_leader": 213,
      "mathematically_eliminated": false,
      "expected_dnfs": 2,
      "experience_seasons": 6
    },
    {
      "rank": 12,
      "driver_id": "bearman",
      "name": "Oliver Bearman",
      "short": "BEA",
      "team": "haas",
      "team_name": "Haas",
      "color": "#B6BABD",
      "number": 87,
      "predicted_points": 39.6,
      "win_probability": 0.0208,
      "championship_win_probability": 0,
      "podium_probability": 0.018,
      "avg_predicted_position": 13,
      "current_real_points": 18,
      "current_real_position": 13,
      "current_wins": 0,
      "max_possible_points": 293,
      "points_behind_leader": 201,
      "mathematically_eliminated": false,
      "expected_dnfs": 2,
      "experience_seasons": 2
    },
    {
      "rank": 13,
      "driver_id": "albon",
      "name": "Alex Albon",
      "short": "ALB",
      "team": "williams",
      "team_name": "Williams",
      "color": "#64C4FF",
      "number": 23,
      "predicted_points": 33,
      "win_probability": 0.0226,
      "championship_win_probability": 0,
      "podium_probability": 0.0267,
      "avg_predicted_position": 12,
      "current_real_points": 5,
      "current_real_position": 16,
      "current_wins": 0,
      "max_possible_points": 280,
      "points_behind_leader": 214,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 5
    },
    {
      "rank": 14,
      "driver_id": "colapinto",
      "name": "Franco Colapinto",
      "short": "COL",
      "team": "alpine",
      "team_name": "Alpine",
      "color": "#FF87BC",
      "number": 43,
      "predicted_points": 32,
      "win_probability": 0.0181,
      "championship_win_probability": 0,
      "podium_probability": 0.0087,
      "avg_predicted_position": 15,
      "current_real_points": 19,
      "current_real_position": 12,
      "current_wins": 0,
      "max_possible_points": 294,
      "points_behind_leader": 200,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 1
    },
    {
      "rank": 15,
      "driver_id": "arvid_lindblad",
      "name": "Arvid Lindblad",
      "short": "LIN",
      "team": "rb",
      "team_name": "Racing Bulls",
      "color": "#6692FF",
      "number": 41,
      "predicted_points": 28.7,
      "win_probability": 0.0151,
      "championship_win_probability": 0,
      "podium_probability": 0.003,
      "avg_predicted_position": 18,
      "current_real_points": 23,
      "current_real_position": 11,
      "current_wins": 0,
      "max_possible_points": 298,
      "points_behind_leader": 196,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 0
    },
    {
      "rank": 16,
      "driver_id": "alonso",
      "name": "Fernando Alonso",
      "short": "ALO",
      "team": "aston_martin",
      "team_name": "Aston Martin",
      "color": "#358C75",
      "number": 14,
      "predicted_points": 16.2,
      "win_probability": 0.0194,
      "championship_win_probability": 0,
      "podium_probability": 0.0081,
      "avg_predicted_position": 14,
      "current_real_points": 1,
      "current_real_position": 19,
      "current_wins": 0,
      "max_possible_points": 276,
      "points_behind_leader": 218,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 5
    },
    {
      "rank": 17,
      "driver_id": "bortoleto",
      "name": "Gabriel Bortoleto",
      "short": "BOR",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 5,
      "predicted_points": 12.2,
      "win_probability": 0.0135,
      "championship_win_probability": 0,
      "podium_probability": 0.0004,
      "avg_predicted_position": 20,
      "current_real_points": 10,
      "current_real_position": 14,
      "current_wins": 0,
      "max_possible_points": 285,
      "points_behind_leader": 209,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 1
    },
    {
      "rank": 18,
      "driver_id": "ocon",
      "name": "Esteban Ocon",
      "short": "OCO",
      "team": "haas",
      "team_name": "Haas",
      "color": "#B6BABD",
      "number": 31,
      "predicted_points": 10.8,
      "win_probability": 0.0169,
      "championship_win_probability": 0,
      "podium_probability": 0.003,
      "avg_predicted_position": 16,
      "current_real_points": 3,
      "current_real_position": 17,
      "current_wins": 0,
      "max_possible_points": 278,
      "points_behind_leader": 216,
      "mathematically_eliminated": false,
      "expected_dnfs": 2,
      "experience_seasons": 6
    },
    {
      "rank": 19,
      "driver_id": "perez",
      "name": "Sergio Perez",
      "short": "PER",
      "team": "cadillac",
      "team_name": "Cadillac",
      "color": "#C8A464",
      "number": 11,
      "predicted_points": 5.5,
      "win_probability": 0.0159,
      "championship_win_probability": 0,
      "podium_probability": 0.0018,
      "avg_predicted_position": 17,
      "current_real_points": 0,
      "current_real_position": 22,
      "current_wins": 0,
      "max_possible_points": 275,
      "points_behind_leader": 219,
      "mathematically_eliminated": false,
      "expected_dnfs": 2,
      "experience_seasons": 5
    },
    {
      "rank": 20,
      "driver_id": "hulkenberg",
      "name": "Nico Hulkenberg",
      "short": "HUL",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 27,
      "predicted_points": 2.6,
      "win_probability": 0.0123,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 22,
      "current_real_points": 2,
      "current_real_position": 18,
      "current_wins": 0,
      "max_possible_points": 277,
      "points_behind_leader": 217,
      "mathematically_eliminated": false,
      "expected_dnfs": 2,
      "experience_seasons": 4
    },
    {
      "rank": 21,
      "driver_id": "stroll",
      "name": "Lance Stroll",
      "short": "STR",
      "team": "aston_martin",
      "team_name": "Aston Martin",
      "color": "#358C75",
      "number": 18,
      "predicted_points": 2.3,
      "win_probability": 0.0143,
      "championship_win_probability": 0,
      "podium_probability": 0.0003,
      "avg_predicted_position": 19,
      "current_real_points": 0,
      "current_real_position": 20,
      "current_wins": 0,
      "max_possible_points": 275,
      "points_behind_leader": 219,
      "mathematically_eliminated": false,
      "expected_dnfs": 2.1,
      "experience_seasons": 6
    },
    {
      "rank": 22,
      "driver_id": "bottas",
      "name": "Valtteri Bottas",
      "short": "BOT",
      "team": "cadillac",
      "team_name": "Cadillac",
      "color": "#C8A464",
      "number": 77,
      "predicted_points": 1.1,
      "win_probability": 0.0129,
      "championship_win_probability": 0,
      "podium_probability": 0.0002,
      "avg_predicted_position": 21,
      "current_real_points": 0,
      "current_real_position": 21,
      "current_wins": 0,
      "max_possible_points": 275,
      "points_behind_leader": 219,
      "mathematically_eliminated": false,
      "expected_dnfs": 2,
      "experience_seasons": 4
    }
  ],
  "constructor_standings_2026": [
    {
      "rank": 1,
      "constructor_id": "mercedes",
      "name": "Mercedes",
      "color": "#27F4D2",
      "predicted_points": 671.4,
      "championship_win_probability": 0.8185,
      "current_real_points": 379,
      "current_wins": 8
    },
    {
      "rank": 2,
      "constructor_id": "ferrari",
      "name": "Ferrari",
      "color": "#E8002D",
      "predicted_points": 563,
      "championship_win_probability": 0.174,
      "current_real_points": 307,
      "current_wins": 2
    },
    {
      "rank": 3,
      "constructor_id": "mclaren",
      "name": "McLaren",
      "color": "#FF8000",
      "predicted_points": 395.2,
      "championship_win_probability": 0.0055,
      "current_real_points": 220,
      "current_wins": 1
    },
    {
      "rank": 4,
      "constructor_id": "red_bull",
      "name": "Red Bull Racing",
      "color": "#3671C6",
      "predicted_points": 328.7,
      "championship_win_probability": 0.002,
      "current_real_points": 177,
      "current_wins": 0
    },
    {
      "rank": 5,
      "constructor_id": "rb",
      "name": "Racing Bulls",
      "color": "#6692FF",
      "predicted_points": 125.5,
      "championship_win_probability": 0,
      "current_real_points": 66,
      "current_wins": 0
    },
    {
      "rank": 6,
      "constructor_id": "alpine",
      "name": "Alpine",
      "color": "#FF87BC",
      "predicted_points": 117.7,
      "championship_win_probability": 0,
      "current_real_points": 61,
      "current_wins": 0
    },
    {
      "rank": 7,
      "constructor_id": "williams",
      "name": "Williams",
      "color": "#64C4FF",
      "predicted_points": 74.1,
      "championship_win_probability": 0,
      "current_real_points": 11,
      "current_wins": 0
    },
    {
      "rank": 8,
      "constructor_id": "haas",
      "name": "Haas",
      "color": "#B6BABD",
      "predicted_points": 50.4,
      "championship_win_probability": 0,
      "current_real_points": 21,
      "current_wins": 0
    },
    {
      "rank": 9,
      "constructor_id": "aston_martin",
      "name": "Aston Martin",
      "color": "#358C75",
      "predicted_points": 18.5,
      "championship_win_probability": 0,
      "current_real_points": 1,
      "current_wins": 0
    },
    {
      "rank": 10,
      "constructor_id": "audi",
      "name": "Audi",
      "color": "#00E701",
      "predicted_points": 14.8,
      "championship_win_probability": 0,
      "current_real_points": 12,
      "current_wins": 0
    },
    {
      "rank": 11,
      "constructor_id": "cadillac",
      "name": "Cadillac",
      "color": "#C8A464",
      "predicted_points": 6.6,
      "championship_win_probability": 0,
      "current_real_points": 0,
      "current_wins": 0
    }
  ],
  "race_predictions": [
    {
      "round": 1,
      "circuit_id": "australia",
      "name": "Australian GP",
      "race_name": "Australian GP",
      "date": "2026-03-08",
      "race_date": "2026-03-08",
      "sprint": false,
      "completed": true,
      "winner": "russell",
      "top5": [
        {
          "driver_id": "russell",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "leclerc",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "hamilton",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "norris",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 2,
      "circuit_id": "china",
      "name": "Chinese GP",
      "race_name": "Chinese GP",
      "date": "2026-03-15",
      "race_date": "2026-03-15",
      "sprint": true,
      "completed": true,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "russell",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "hamilton",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "leclerc",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "bearman",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 3,
      "circuit_id": "japan",
      "name": "Japanese GP",
      "race_name": "Japanese GP",
      "date": "2026-03-29",
      "race_date": "2026-03-29",
      "sprint": false,
      "completed": true,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "piastri",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "leclerc",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "russell",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "norris",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 4,
      "circuit_id": "miami",
      "name": "Miami GP",
      "race_name": "Miami GP",
      "date": "2026-05-03",
      "race_date": "2026-05-03",
      "sprint": true,
      "completed": true,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "norris",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "piastri",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "russell",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "max_verstappen",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 5,
      "circuit_id": "canada",
      "name": "Canadian GP",
      "race_name": "Canadian GP",
      "date": "2026-05-24",
      "race_date": "2026-05-24",
      "sprint": true,
      "completed": true,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "hamilton",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "max_verstappen",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "leclerc",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "hadjar",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 6,
      "circuit_id": "monaco",
      "name": "Monaco GP",
      "race_name": "Monaco GP",
      "date": "2026-06-07",
      "race_date": "2026-06-07",
      "sprint": false,
      "completed": true,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "hamilton",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "gasly",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "hadjar",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "piastri",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 7,
      "circuit_id": "spain",
      "name": "Barcelona GP",
      "race_name": "Barcelona GP",
      "date": "2026-06-14",
      "race_date": "2026-06-14",
      "sprint": false,
      "completed": true,
      "winner": "hamilton",
      "top5": [
        {
          "driver_id": "hamilton",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "russell",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "norris",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "max_verstappen",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "piastri",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 8,
      "circuit_id": "austria",
      "name": "Austrian GP",
      "race_name": "Austrian GP",
      "date": "2026-06-28",
      "race_date": "2026-06-28",
      "sprint": false,
      "completed": true,
      "winner": "russell",
      "top5": [
        {
          "driver_id": "russell",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "max_verstappen",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "piastri",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "hamilton",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 9,
      "circuit_id": "britain",
      "name": "British GP",
      "race_name": "British GP",
      "date": "2026-07-05",
      "race_date": "2026-07-05",
      "sprint": false,
      "completed": true,
      "winner": "leclerc",
      "top5": [
        {
          "driver_id": "leclerc",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "russell",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "hamilton",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "norris",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "hadjar",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 10,
      "circuit_id": "belgium",
      "name": "Belgian GP",
      "race_name": "Belgian GP",
      "date": "2026-07-19",
      "race_date": "2026-07-19",
      "sprint": false,
      "completed": true,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "leclerc",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "max_verstappen",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "hamilton",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "piastri",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 11,
      "circuit_id": "hungary",
      "name": "Hungarian GP",
      "race_name": "Hungarian GP",
      "date": "2026-07-26",
      "race_date": "2026-07-26",
      "sprint": false,
      "completed": true,
      "winner": "norris",
      "top5": [
        {
          "driver_id": "norris",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "max_verstappen",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "leclerc",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "hamilton",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 12,
      "circuit_id": "netherlands",
      "name": "Dutch GP",
      "race_name": "Dutch GP",
      "date": "2026-08-23",
      "race_date": "2026-08-23",
      "sprint": false,
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 13,
      "circuit_id": "italy",
      "name": "Italian GP",
      "race_name": "Italian GP",
      "date": "2026-09-06",
      "race_date": "2026-09-06",
      "sprint": false,
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 14,
      "circuit_id": "madrid",
      "name": "Madrid GP",
      "race_name": "Madrid GP",
      "date": "2026-09-13",
      "race_date": "2026-09-13",
      "sprint": false,
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 15,
      "circuit_id": "azerbaijan",
      "name": "Azerbaijan GP",
      "race_name": "Azerbaijan GP",
      "date": "2026-09-26",
      "race_date": "2026-09-26",
      "sprint": false,
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 16,
      "circuit_id": "singapore",
      "name": "Singapore GP",
      "race_name": "Singapore GP",
      "date": "2026-10-11",
      "race_date": "2026-10-11",
      "sprint": false,
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 17,
      "circuit_id": "americas",
      "name": "United States GP",
      "race_name": "United States GP",
      "date": "2026-10-25",
      "race_date": "2026-10-25",
      "sprint": false,
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 18,
      "circuit_id": "mexico",
      "name": "Mexico City GP",
      "race_name": "Mexico City GP",
      "date": "2026-11-01",
      "race_date": "2026-11-01",
      "sprint": false,
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 19,
      "circuit_id": "brazil",
      "name": "São Paulo GP",
      "race_name": "São Paulo GP",
      "date": "2026-11-08",
      "race_date": "2026-11-08",
      "sprint": false,
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 20,
      "circuit_id": "las_vegas",
      "name": "Las Vegas GP",
      "race_name": "Las Vegas GP",
      "date": "2026-11-22",
      "race_date": "2026-11-22",
      "sprint": false,
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 21,
      "circuit_id": "qatar",
      "name": "Qatar GP",
      "race_name": "Qatar GP",
      "date": "2026-11-29",
      "race_date": "2026-11-29",
      "sprint": false,
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 22,
      "circuit_id": "abu_dhabi",
      "name": "Abu Dhabi GP",
      "race_name": "Abu Dhabi GP",
      "date": "2026-12-06",
      "race_date": "2026-12-06",
      "sprint": false,
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0677
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0542
        }
      ]
    }
  ],
  "predictions_archive": {
    "1": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "hamilton",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "leclerc",
        "win_prob": 0.0677
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0542
      }
    ],
    "2": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "hamilton",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "leclerc",
        "win_prob": 0.0677
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0542
      }
    ],
    "3": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "hamilton",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "leclerc",
        "win_prob": 0.0677
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0542
      }
    ],
    "4": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "hamilton",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "leclerc",
        "win_prob": 0.0677
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0542
      }
    ],
    "5": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "hamilton",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "leclerc",
        "win_prob": 0.0677
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0542
      }
    ],
    "6": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "hamilton",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "leclerc",
        "win_prob": 0.0677
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0542
      }
    ],
    "7": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "hamilton",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "leclerc",
        "win_prob": 0.0677
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0542
      }
    ],
    "8": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "hamilton",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "leclerc",
        "win_prob": 0.0677
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0542
      }
    ],
    "9": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "hamilton",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "leclerc",
        "win_prob": 0.0677
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0542
      }
    ],
    "10": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "hamilton",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "leclerc",
        "win_prob": 0.0677
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0542
      }
    ],
    "11": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "hamilton",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "leclerc",
        "win_prob": 0.0677
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0542
      }
    ]
  },
  "historical_driver_points": {
    "2020": {
      "hamilton": 347,
      "bottas": 223,
      "max_verstappen": 214,
      "perez": 125,
      "ricciardo": 119,
      "sainz": 105,
      "albon": 105,
      "leclerc": 98,
      "norris": 97,
      "gasly": 75,
      "stroll": 75,
      "ocon": 62,
      "vettel": 33,
      "kvyat": 32,
      "hulkenberg": 10,
      "raikkonen": 4,
      "giovinazzi": 4,
      "russell": 3,
      "grosjean": 2,
      "kevin_magnussen": 1,
      "latifi": 0,
      "aitken": 0,
      "pietro_fittipaldi": 0
    },
    "2021": {
      "max_verstappen": 395.5,
      "hamilton": 387.5,
      "bottas": 226,
      "perez": 190,
      "sainz": 164.5,
      "norris": 160,
      "leclerc": 159,
      "ricciardo": 115,
      "gasly": 110,
      "alonso": 81,
      "ocon": 74,
      "vettel": 43,
      "stroll": 34,
      "tsunoda": 32,
      "russell": 16,
      "raikkonen": 10,
      "latifi": 7,
      "giovinazzi": 3,
      "mick_schumacher": 0,
      "kubica": 0,
      "mazepin": 0
    },
    "2022": {
      "max_verstappen": 454,
      "leclerc": 308,
      "perez": 305,
      "russell": 275,
      "sainz": 246,
      "hamilton": 240,
      "norris": 122,
      "ocon": 92,
      "alonso": 81,
      "bottas": 49,
      "ricciardo": 37,
      "vettel": 37,
      "kevin_magnussen": 25,
      "gasly": 23,
      "stroll": 18,
      "mick_schumacher": 12,
      "tsunoda": 12,
      "zhou": 6,
      "albon": 4,
      "latifi": 2,
      "de_vries": 2,
      "hulkenberg": 0
    },
    "2023": {
      "max_verstappen": 575,
      "perez": 285,
      "hamilton": 234,
      "alonso": 206,
      "leclerc": 206,
      "norris": 205,
      "sainz": 200,
      "russell": 175,
      "piastri": 97,
      "stroll": 74,
      "gasly": 62,
      "ocon": 58,
      "albon": 27,
      "tsunoda": 17,
      "bottas": 10,
      "hulkenberg": 9,
      "ricciardo": 6,
      "zhou": 6,
      "kevin_magnussen": 3,
      "lawson": 2,
      "sargeant": 1,
      "de_vries": 0
    },
    "2024": {
      "max_verstappen": 437,
      "norris": 374,
      "leclerc": 356,
      "piastri": 292,
      "sainz": 290,
      "russell": 245,
      "hamilton": 223,
      "perez": 152,
      "alonso": 70,
      "gasly": 42,
      "hulkenberg": 41,
      "tsunoda": 30,
      "stroll": 24,
      "ocon": 23,
      "kevin_magnussen": 16,
      "albon": 12,
      "ricciardo": 12,
      "bearman": 7,
      "colapinto": 5,
      "zhou": 4,
      "lawson": 4,
      "bottas": 0,
      "sargeant": 0,
      "doohan": 0
    },
    "2025": {
      "norris": 423,
      "max_verstappen": 421,
      "piastri": 410,
      "russell": 319,
      "leclerc": 242,
      "hamilton": 156,
      "antonelli": 150,
      "albon": 73,
      "sainz": 64,
      "alonso": 56,
      "hulkenberg": 51,
      "hadjar": 51,
      "bearman": 41,
      "lawson": 38,
      "ocon": 38,
      "stroll": 33,
      "tsunoda": 33,
      "gasly": 22,
      "bortoleto": 19,
      "colapinto": 0,
      "doohan": 0
    }
  },
  "historical_constructor_points": {
    "2020": {
      "mercedes": 573,
      "red_bull": 319,
      "mclaren": 202,
      "racing_point": 195,
      "renault": 181,
      "ferrari": 131,
      "alphatauri": 107,
      "alfa": 8,
      "haas": 3,
      "williams": 0
    },
    "2021": {
      "mercedes": 613.5,
      "red_bull": 585.5,
      "ferrari": 323.5,
      "mclaren": 275,
      "alpine": 155,
      "alphatauri": 142,
      "aston_martin": 77,
      "williams": 23,
      "alfa": 13,
      "haas": 0
    },
    "2022": {
      "red_bull": 759,
      "ferrari": 554,
      "mercedes": 515,
      "alpine": 173,
      "mclaren": 159,
      "alfa": 55,
      "aston_martin": 55,
      "haas": 37,
      "alphatauri": 35,
      "williams": 8
    },
    "2023": {
      "red_bull": 860,
      "mercedes": 409,
      "ferrari": 406,
      "mclaren": 302,
      "aston_martin": 280,
      "alpine": 120,
      "williams": 28,
      "alphatauri": 25,
      "alfa": 16,
      "haas": 12
    },
    "2024": {
      "mclaren": 666,
      "ferrari": 652,
      "red_bull": 589,
      "mercedes": 468,
      "aston_martin": 94,
      "alpine": 65,
      "haas": 58,
      "rb": 46,
      "williams": 17,
      "sauber": 4
    },
    "2025": {
      "mclaren": 833,
      "mercedes": 469,
      "red_bull": 451,
      "ferrari": 398,
      "williams": 137,
      "rb": 92,
      "aston_martin": 89,
      "haas": 79,
      "sauber": 70,
      "alpine": 22
    }
  },
  "historical_driver_teams": {
    "2020": {
      "hamilton": "mercedes",
      "bottas": "mercedes",
      "max_verstappen": "red_bull",
      "perez": "racing_point",
      "ricciardo": "renault",
      "sainz": "mclaren",
      "albon": "red_bull",
      "leclerc": "ferrari",
      "norris": "mclaren",
      "gasly": "alphatauri",
      "stroll": "racing_point",
      "ocon": "renault",
      "vettel": "ferrari",
      "kvyat": "alphatauri",
      "hulkenberg": "racing_point",
      "raikkonen": "alfa",
      "giovinazzi": "alfa",
      "russell": "mercedes",
      "grosjean": "haas",
      "kevin_magnussen": "haas",
      "latifi": "williams",
      "aitken": "williams",
      "pietro_fittipaldi": "haas"
    },
    "2021": {
      "max_verstappen": "red_bull",
      "hamilton": "mercedes",
      "bottas": "mercedes",
      "perez": "red_bull",
      "sainz": "ferrari",
      "norris": "mclaren",
      "leclerc": "ferrari",
      "ricciardo": "mclaren",
      "gasly": "alphatauri",
      "alonso": "alpine",
      "ocon": "alpine",
      "vettel": "aston_martin",
      "stroll": "aston_martin",
      "tsunoda": "alphatauri",
      "russell": "williams",
      "raikkonen": "alfa",
      "latifi": "williams",
      "giovinazzi": "alfa",
      "mick_schumacher": "haas",
      "kubica": "alfa",
      "mazepin": "haas"
    },
    "2022": {
      "max_verstappen": "red_bull",
      "leclerc": "ferrari",
      "perez": "red_bull",
      "russell": "mercedes",
      "sainz": "ferrari",
      "hamilton": "mercedes",
      "norris": "mclaren",
      "ocon": "alpine",
      "alonso": "alpine",
      "bottas": "alfa",
      "ricciardo": "mclaren",
      "vettel": "aston_martin",
      "kevin_magnussen": "haas",
      "gasly": "alphatauri",
      "stroll": "aston_martin",
      "mick_schumacher": "haas",
      "tsunoda": "alphatauri",
      "zhou": "alfa",
      "albon": "williams",
      "latifi": "williams",
      "de_vries": "williams",
      "hulkenberg": "aston_martin"
    },
    "2023": {
      "max_verstappen": "red_bull",
      "perez": "red_bull",
      "hamilton": "mercedes",
      "alonso": "aston_martin",
      "leclerc": "ferrari",
      "norris": "mclaren",
      "sainz": "ferrari",
      "russell": "mercedes",
      "piastri": "mclaren",
      "stroll": "aston_martin",
      "gasly": "alpine",
      "ocon": "alpine",
      "albon": "williams",
      "tsunoda": "alphatauri",
      "bottas": "alfa",
      "hulkenberg": "haas",
      "ricciardo": "alphatauri",
      "zhou": "alfa",
      "kevin_magnussen": "haas",
      "lawson": "alphatauri",
      "sargeant": "williams",
      "de_vries": "alphatauri"
    },
    "2024": {
      "max_verstappen": "red_bull",
      "norris": "mclaren",
      "leclerc": "ferrari",
      "piastri": "mclaren",
      "sainz": "ferrari",
      "russell": "mercedes",
      "hamilton": "mercedes",
      "perez": "red_bull",
      "alonso": "aston_martin",
      "gasly": "alpine",
      "hulkenberg": "haas",
      "tsunoda": "rb",
      "stroll": "aston_martin",
      "ocon": "alpine",
      "kevin_magnussen": "haas",
      "albon": "williams",
      "ricciardo": "rb",
      "bearman": "haas",
      "colapinto": "williams",
      "zhou": "sauber",
      "lawson": "rb",
      "bottas": "sauber",
      "sargeant": "williams",
      "doohan": "alpine"
    },
    "2025": {
      "norris": "mclaren",
      "max_verstappen": "red_bull",
      "piastri": "mclaren",
      "russell": "mercedes",
      "leclerc": "ferrari",
      "hamilton": "ferrari",
      "antonelli": "mercedes",
      "albon": "williams",
      "sainz": "williams",
      "alonso": "aston_martin",
      "hulkenberg": "sauber",
      "hadjar": "rb",
      "bearman": "haas",
      "lawson": "rb",
      "ocon": "haas",
      "stroll": "aston_martin",
      "tsunoda": "red_bull",
      "gasly": "alpine",
      "bortoleto": "sauber",
      "colapinto": "alpine",
      "doohan": "alpine"
    }
  },
  "driver_names": {
    "aitken": "Jack Aitken",
    "albon": "Alexander Albon",
    "alonso": "Fernando Alonso",
    "antonelli": "Andrea Kimi Antonelli",
    "bearman": "Oliver Bearman",
    "bortoleto": "Gabriel Bortoleto",
    "bottas": "Valtteri Bottas",
    "colapinto": "Franco Colapinto",
    "de_vries": "Nyck de Vries",
    "doohan": "Jack Doohan",
    "gasly": "Pierre Gasly",
    "giovinazzi": "Antonio Giovinazzi",
    "grosjean": "Romain Grosjean",
    "hadjar": "Isack Hadjar",
    "hamilton": "Lewis Hamilton",
    "hulkenberg": "Nico Hülkenberg",
    "kevin_magnussen": "Kevin Magnussen",
    "kubica": "Robert Kubica",
    "kvyat": "Daniil Kvyat",
    "latifi": "Nicholas Latifi",
    "lawson": "Liam Lawson",
    "leclerc": "Charles Leclerc",
    "max_verstappen": "Max Verstappen",
    "mazepin": "Nikita Mazepin",
    "mick_schumacher": "Mick Schumacher",
    "norris": "Lando Norris",
    "ocon": "Esteban Ocon",
    "perez": "Sergio Pérez",
    "piastri": "Oscar Piastri",
    "pietro_fittipaldi": "Pietro Fittipaldi",
    "raikkonen": "Kimi Räikkönen",
    "ricciardo": "Daniel Ricciardo",
    "russell": "George Russell",
    "sainz": "Carlos Sainz",
    "sargeant": "Logan Sargeant",
    "stroll": "Lance Stroll",
    "tsunoda": "Yuki Tsunoda",
    "vettel": "Sebastian Vettel",
    "zhou": "Guanyu Zhou"
  },
  "driver_rolling_form": {
    "piastri": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        0,
        0,
        0,
        97,
        292,
        410
      ]
    },
    "norris": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        97,
        160,
        122,
        205,
        374,
        423
      ]
    },
    "leclerc": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        98,
        159,
        308,
        206,
        356,
        242
      ]
    },
    "hamilton": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        347,
        387.5,
        240,
        234,
        223,
        156
      ]
    },
    "max_verstappen": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        214,
        395.5,
        454,
        575,
        437,
        421
      ]
    },
    "hadjar": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        0,
        0,
        0,
        0,
        0,
        51
      ]
    },
    "russell": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        3,
        16,
        275,
        175,
        245,
        319
      ]
    },
    "antonelli": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        0,
        0,
        0,
        0,
        0,
        150
      ]
    },
    "sainz": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        105,
        164.5,
        246,
        200,
        290,
        64
      ]
    },
    "albon": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        105,
        0,
        4,
        27,
        12,
        73
      ]
    },
    "lawson": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        0,
        0,
        0,
        2,
        4,
        38
      ]
    },
    "arvid_lindblad": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    "alonso": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        0,
        81,
        81,
        206,
        70,
        56
      ]
    },
    "stroll": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        75,
        34,
        18,
        74,
        24,
        33
      ]
    },
    "bearman": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        0,
        0,
        0,
        0,
        7,
        41
      ]
    },
    "ocon": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        62,
        74,
        92,
        58,
        23,
        38
      ]
    },
    "gasly": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        75,
        110,
        23,
        62,
        42,
        22
      ]
    },
    "colapinto": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        0,
        0,
        0,
        0,
        5,
        0
      ]
    },
    "hulkenberg": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        10,
        0,
        0,
        9,
        41,
        51
      ]
    },
    "bortoleto": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        0,
        0,
        0,
        0,
        0,
        19
      ]
    },
    "bottas": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        223,
        226,
        49,
        10,
        0,
        0
      ]
    },
    "perez": {
      "seasons": [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
      ],
      "points": [
        125,
        190,
        305,
        285,
        152,
        0
      ]
    }
  },
  "calendar_2026": [
    {
      "round": 1,
      "id": "australia",
      "name": "Australian GP",
      "date": "2026-03-08"
    },
    {
      "round": 2,
      "id": "china",
      "name": "Chinese GP",
      "date": "2026-03-15",
      "sprint": true
    },
    {
      "round": 3,
      "id": "japan",
      "name": "Japanese GP",
      "date": "2026-03-29"
    },
    {
      "round": 4,
      "id": "miami",
      "name": "Miami GP",
      "date": "2026-05-03",
      "sprint": true
    },
    {
      "round": 5,
      "id": "canada",
      "name": "Canadian GP",
      "date": "2026-05-24",
      "sprint": true
    },
    {
      "round": 6,
      "id": "monaco",
      "name": "Monaco GP",
      "date": "2026-06-07"
    },
    {
      "round": 7,
      "id": "spain",
      "name": "Barcelona GP",
      "date": "2026-06-14"
    },
    {
      "round": 8,
      "id": "austria",
      "name": "Austrian GP",
      "date": "2026-06-28"
    },
    {
      "round": 9,
      "id": "britain",
      "name": "British GP",
      "date": "2026-07-05"
    },
    {
      "round": 10,
      "id": "belgium",
      "name": "Belgian GP",
      "date": "2026-07-19"
    },
    {
      "round": 11,
      "id": "hungary",
      "name": "Hungarian GP",
      "date": "2026-07-26"
    },
    {
      "round": 12,
      "id": "netherlands",
      "name": "Dutch GP",
      "date": "2026-08-23"
    },
    {
      "round": 13,
      "id": "italy",
      "name": "Italian GP",
      "date": "2026-09-06"
    },
    {
      "round": 14,
      "id": "madrid",
      "name": "Madrid GP",
      "date": "2026-09-13"
    },
    {
      "round": 15,
      "id": "azerbaijan",
      "name": "Azerbaijan GP",
      "date": "2026-09-26"
    },
    {
      "round": 16,
      "id": "singapore",
      "name": "Singapore GP",
      "date": "2026-10-11"
    },
    {
      "round": 17,
      "id": "americas",
      "name": "United States GP",
      "date": "2026-10-25"
    },
    {
      "round": 18,
      "id": "mexico",
      "name": "Mexico City GP",
      "date": "2026-11-01"
    },
    {
      "round": 19,
      "id": "brazil",
      "name": "São Paulo GP",
      "date": "2026-11-08"
    },
    {
      "round": 20,
      "id": "las_vegas",
      "name": "Las Vegas GP",
      "date": "2026-11-22"
    },
    {
      "round": 21,
      "id": "qatar",
      "name": "Qatar GP",
      "date": "2026-11-29"
    },
    {
      "round": 22,
      "id": "abu_dhabi",
      "name": "Abu Dhabi GP",
      "date": "2026-12-06"
    }
  ],
  "cancelled_races_2026": [
    {
      "id": "bahrain",
      "name": "Bahrain GP",
      "date": "2026-04-12"
    },
    {
      "id": "saudi_arabia",
      "name": "Saudi Arabian GP",
      "date": "2026-04-19"
    }
  ],
  "races_completed_2026": 11,
  "next_race": {
    "round": 12,
    "id": "netherlands",
    "name": "Dutch GP",
    "date": "2026-08-23",
    "circuit_id": "netherlands",
    "days_until": 20
  },
  "next_race_weather": null,
  "real_driver_standings_2026": [
    {
      "position": 1,
      "driver_id": "antonelli",
      "name": "Kimi Antonelli",
      "short": "ANT",
      "constructor_id": "mercedes",
      "team": "mercedes",
      "team_name": "Mercedes",
      "color": "#27F4D2",
      "number": 12,
      "points": 219,
      "wins": 6
    },
    {
      "position": 2,
      "driver_id": "hamilton",
      "name": "Lewis Hamilton",
      "short": "HAM",
      "constructor_id": "ferrari",
      "team": "ferrari",
      "team_name": "Ferrari",
      "color": "#E8002D",
      "number": 44,
      "points": 169,
      "wins": 1
    },
    {
      "position": 3,
      "driver_id": "russell",
      "name": "George Russell",
      "short": "RUS",
      "constructor_id": "mercedes",
      "team": "mercedes",
      "team_name": "Mercedes",
      "color": "#27F4D2",
      "number": 63,
      "points": 160,
      "wins": 2
    },
    {
      "position": 4,
      "driver_id": "leclerc",
      "name": "Charles Leclerc",
      "short": "LEC",
      "constructor_id": "ferrari",
      "team": "ferrari",
      "team_name": "Ferrari",
      "color": "#E8002D",
      "number": 16,
      "points": 138,
      "wins": 1
    },
    {
      "position": 5,
      "driver_id": "norris",
      "name": "Lando Norris",
      "short": "NOR",
      "constructor_id": "mclaren",
      "team": "mclaren",
      "team_name": "McLaren",
      "color": "#FF8000",
      "number": 1,
      "points": 128,
      "wins": 1
    },
    {
      "position": 6,
      "driver_id": "max_verstappen",
      "name": "Max Verstappen",
      "short": "VER",
      "constructor_id": "red_bull",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 3,
      "points": 109,
      "wins": 0
    },
    {
      "position": 7,
      "driver_id": "piastri",
      "name": "Oscar Piastri",
      "short": "PIA",
      "constructor_id": "mclaren",
      "team": "mclaren",
      "team_name": "McLaren",
      "color": "#FF8000",
      "number": 81,
      "points": 92,
      "wins": 0
    },
    {
      "position": 8,
      "driver_id": "hadjar",
      "name": "Isack Hadjar",
      "short": "HAD",
      "constructor_id": "red_bull",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 6,
      "points": 68,
      "wins": 0
    },
    {
      "position": 9,
      "driver_id": "lawson",
      "name": "Liam Lawson",
      "short": "LAW",
      "constructor_id": "rb",
      "team": "rb",
      "team_name": "Racing Bulls",
      "color": "#6692FF",
      "number": 30,
      "points": 43,
      "wins": 0
    },
    {
      "position": 10,
      "driver_id": "gasly",
      "name": "Pierre Gasly",
      "short": "GAS",
      "constructor_id": "alpine",
      "team": "alpine",
      "team_name": "Alpine",
      "color": "#FF87BC",
      "number": 10,
      "points": 42,
      "wins": 0
    },
    {
      "position": 11,
      "driver_id": "arvid_lindblad",
      "name": "Arvid Lindblad",
      "short": "LIN",
      "constructor_id": "rb",
      "team": "rb",
      "team_name": "Racing Bulls",
      "color": "#6692FF",
      "number": 41,
      "points": 23,
      "wins": 0
    },
    {
      "position": 12,
      "driver_id": "colapinto",
      "name": "Franco Colapinto",
      "short": "COL",
      "constructor_id": "alpine",
      "team": "alpine",
      "team_name": "Alpine",
      "color": "#FF87BC",
      "number": 43,
      "points": 19,
      "wins": 0
    },
    {
      "position": 13,
      "driver_id": "bearman",
      "name": "Oliver Bearman",
      "short": "BEA",
      "constructor_id": "haas",
      "team": "haas",
      "team_name": "Haas",
      "color": "#B6BABD",
      "number": 87,
      "points": 18,
      "wins": 0
    },
    {
      "position": 14,
      "driver_id": "bortoleto",
      "name": "Gabriel Bortoleto",
      "short": "BOR",
      "constructor_id": "audi",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 5,
      "points": 10,
      "wins": 0
    },
    {
      "position": 15,
      "driver_id": "sainz",
      "name": "Carlos Sainz",
      "short": "SAI",
      "constructor_id": "williams",
      "team": "williams",
      "team_name": "Williams",
      "color": "#64C4FF",
      "number": 55,
      "points": 6,
      "wins": 0
    },
    {
      "position": 16,
      "driver_id": "albon",
      "name": "Alex Albon",
      "short": "ALB",
      "constructor_id": "williams",
      "team": "williams",
      "team_name": "Williams",
      "color": "#64C4FF",
      "number": 23,
      "points": 5,
      "wins": 0
    },
    {
      "position": 17,
      "driver_id": "ocon",
      "name": "Esteban Ocon",
      "short": "OCO",
      "constructor_id": "haas",
      "team": "haas",
      "team_name": "Haas",
      "color": "#B6BABD",
      "number": 31,
      "points": 3,
      "wins": 0
    },
    {
      "position": 18,
      "driver_id": "hulkenberg",
      "name": "Nico Hulkenberg",
      "short": "HUL",
      "constructor_id": "audi",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 27,
      "points": 2,
      "wins": 0
    },
    {
      "position": 19,
      "driver_id": "alonso",
      "name": "Fernando Alonso",
      "short": "ALO",
      "constructor_id": "aston_martin",
      "team": "aston_martin",
      "team_name": "Aston Martin",
      "color": "#358C75",
      "number": 14,
      "points": 1,
      "wins": 0
    },
    {
      "position": 20,
      "driver_id": "stroll",
      "name": "Lance Stroll",
      "short": "STR",
      "constructor_id": "aston_martin",
      "team": "aston_martin",
      "team_name": "Aston Martin",
      "color": "#358C75",
      "number": 18,
      "points": 0,
      "wins": 0
    },
    {
      "position": 21,
      "driver_id": "bottas",
      "name": "Valtteri Bottas",
      "short": "BOT",
      "constructor_id": "cadillac",
      "team": "cadillac",
      "team_name": "Cadillac",
      "color": "#C8A464",
      "number": 77,
      "points": 0,
      "wins": 0
    },
    {
      "position": 22,
      "driver_id": "perez",
      "name": "Sergio Perez",
      "short": "PER",
      "constructor_id": "cadillac",
      "team": "cadillac",
      "team_name": "Cadillac",
      "color": "#C8A464",
      "number": 11,
      "points": 0,
      "wins": 0
    }
  ],
  "real_constructor_standings_2026": [
    {
      "position": 1,
      "constructor_id": "mercedes",
      "points": 379,
      "wins": 8
    },
    {
      "position": 2,
      "constructor_id": "ferrari",
      "points": 307,
      "wins": 2
    },
    {
      "position": 3,
      "constructor_id": "mclaren",
      "points": 220,
      "wins": 1
    },
    {
      "position": 4,
      "constructor_id": "red_bull",
      "points": 177,
      "wins": 0
    },
    {
      "position": 5,
      "constructor_id": "rb",
      "points": 66,
      "wins": 0
    },
    {
      "position": 6,
      "constructor_id": "alpine",
      "points": 61,
      "wins": 0
    },
    {
      "position": 7,
      "constructor_id": "haas",
      "points": 21,
      "wins": 0
    },
    {
      "position": 8,
      "constructor_id": "audi",
      "points": 12,
      "wins": 0
    },
    {
      "position": 9,
      "constructor_id": "williams",
      "points": 11,
      "wins": 0
    },
    {
      "position": 10,
      "constructor_id": "aston_martin",
      "points": 1,
      "wins": 0
    },
    {
      "position": 11,
      "constructor_id": "cadillac",
      "points": 0,
      "wins": 0
    }
  ],
  "real_race_results_2026": [
    {
      "round": 1,
      "name": "Australian Grand Prix",
      "date": "2026-03-08",
      "circuit_id": "australia",
      "results": [
        {
          "position": 1,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:23:06.801",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+2.974",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+15.519",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+16.144",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+51.741",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+54.617",
          "fastest_lap": true
        },
        {
          "position": 7,
          "driver_id": "bearman",
          "constructor_id": "haas",
          "points": 6,
          "status": "Lapped",
          "time_or_gap": "+4.593",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 4,
          "status": "Lapped",
          "time_or_gap": "+11.816",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "bortoleto",
          "constructor_id": "audi",
          "points": 2,
          "status": "Lapped",
          "time_or_gap": "+12.775",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 1,
          "status": "Lapped",
          "time_or_gap": "+29.027",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 2,
      "name": "Chinese Grand Prix",
      "date": "2026-03-15",
      "circuit_id": "china",
      "results": [
        {
          "position": 1,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:33:15.607",
          "fastest_lap": true
        },
        {
          "position": 2,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+5.515",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+25.267",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+28.894",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "bearman",
          "constructor_id": "haas",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+57.268",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+59.647",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+1:20.588",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+1:27.247",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "sainz",
          "constructor_id": "williams",
          "points": 2,
          "status": "Lapped",
          "time_or_gap": "+11.673",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "colapinto",
          "constructor_id": "alpine",
          "points": 1,
          "status": "Lapped",
          "time_or_gap": "+12.403",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 3,
      "name": "Japanese Grand Prix",
      "date": "2026-03-29",
      "circuit_id": "japan",
      "results": [
        {
          "position": 1,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:28:03.403",
          "fastest_lap": true
        },
        {
          "position": 2,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+13.722",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+15.270",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+15.754",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+23.479",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+25.037",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+32.340",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+32.677",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+50.180",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "ocon",
          "constructor_id": "haas",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+51.216",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 4,
      "name": "Miami Grand Prix",
      "date": "2026-05-03",
      "circuit_id": "miami",
      "results": [
        {
          "position": 1,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:33:19.273",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+3.264",
          "fastest_lap": true
        },
        {
          "position": 3,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+27.092",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+43.051",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+48.949",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+53.753",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "colapinto",
          "constructor_id": "alpine",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+1:01.871",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+1:04.245",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "sainz",
          "constructor_id": "williams",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+1:22.072",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "albon",
          "constructor_id": "williams",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+1:30.972",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 5,
      "name": "Canadian Grand Prix",
      "date": "2026-05-24",
      "circuit_id": "canada",
      "results": [
        {
          "position": 1,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:28:15.758",
          "fastest_lap": true
        },
        {
          "position": 2,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+10.768",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+11.276",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+44.151",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 10,
          "status": "Lapped",
          "time_or_gap": "+5.033",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "colapinto",
          "constructor_id": "alpine",
          "points": 8,
          "status": "Lapped",
          "time_or_gap": "+19.510",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 6,
          "status": "Lapped",
          "time_or_gap": "+34.235",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 4,
          "status": "Lapped",
          "time_or_gap": "+34.572",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "sainz",
          "constructor_id": "williams",
          "points": 2,
          "status": "Lapped",
          "time_or_gap": "+58.014",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "bearman",
          "constructor_id": "haas",
          "points": 1,
          "status": "Lapped",
          "time_or_gap": "+59.049",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 6,
      "name": "Monaco Grand Prix",
      "date": "2026-06-07",
      "circuit_id": "monaco",
      "results": [
        {
          "position": 1,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "2:23:31.243",
          "fastest_lap": true
        },
        {
          "position": 2,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+6.271",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+20.369",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+23.394",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+24.261",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+26.553",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+29.010",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "albon",
          "constructor_id": "williams",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+33.413",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "ocon",
          "constructor_id": "haas",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+37.140",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "alonso",
          "constructor_id": "aston_martin",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+41.899",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 7,
      "name": "Barcelona Grand Prix",
      "date": "2026-06-14",
      "circuit_id": "spain",
      "results": [
        {
          "position": 1,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:32:28.105",
          "fastest_lap": true
        },
        {
          "position": 2,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+19.561",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+23.719",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+40.497",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+58.661",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 8,
          "status": "Lapped",
          "time_or_gap": "+24.627",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 6,
          "status": "Lapped",
          "time_or_gap": "+55.789",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 4,
          "status": "Lapped",
          "time_or_gap": "+1:12.224",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 2,
          "status": "Lapped",
          "time_or_gap": "+1:18.074",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "colapinto",
          "constructor_id": "alpine",
          "points": 1,
          "status": "Lapped",
          "time_or_gap": "+1:19.867",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 8,
      "name": "Austrian Grand Prix",
      "date": "2026-06-28",
      "circuit_id": "austria",
      "results": [
        {
          "position": 1,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:26:37.979",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+1.611",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+1.986",
          "fastest_lap": true
        },
        {
          "position": 4,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+21.809",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+26.393",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+29.399",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+31.505",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+45.659",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 2,
          "status": "Lapped",
          "time_or_gap": "+15.334",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 1,
          "status": "Lapped",
          "time_or_gap": "+19.030",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 9,
      "name": "British Grand Prix",
      "date": "2026-07-05",
      "circuit_id": "britain",
      "results": [
        {
          "position": 1,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:27:11.335",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+0.427",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+0.772",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+1.149",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+1.598",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+2.023",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+2.214",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "bortoleto",
          "constructor_id": "audi",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+2.413",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "colapinto",
          "constructor_id": "alpine",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+3.229",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+3.445",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 10,
      "name": "Belgian Grand Prix",
      "date": "2026-07-19",
      "circuit_id": "belgium",
      "results": [
        {
          "position": 1,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:24:42.479",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+1.952",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+11.586",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+17.245",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+18.988",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+23.307",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+24.014",
          "fastest_lap": true
        },
        {
          "position": 8,
          "driver_id": "bortoleto",
          "constructor_id": "audi",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+49.140",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+50.406",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "colapinto",
          "constructor_id": "alpine",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+1:16.037",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 11,
      "name": "Hungarian Grand Prix",
      "date": "2026-07-26",
      "circuit_id": "hungary",
      "results": [
        {
          "position": 1,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:39:56.180",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+15.080",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+18.728",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+23.840",
          "fastest_lap": true
        },
        {
          "position": 5,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+24.540",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+55.488",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+57.503",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 4,
          "status": "Lapped",
          "time_or_gap": "+28.033",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "hulkenberg",
          "constructor_id": "audi",
          "points": 2,
          "status": "Lapped",
          "time_or_gap": "+30.382",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 1,
          "status": "Lapped",
          "time_or_gap": "+51.050",
          "fastest_lap": false
        }
      ]
    }
  ],
  "driver_bios_2026": {
    "albon": {
      "dob": "1996-03-23",
      "nationality": "Thai",
      "wiki": "http://en.wikipedia.org/wiki/Alexander_Albon"
    },
    "alonso": {
      "dob": "1981-07-29",
      "nationality": "Spanish",
      "wiki": "http://en.wikipedia.org/wiki/Fernando_Alonso"
    },
    "antonelli": {
      "dob": "2006-08-25",
      "nationality": "Italian",
      "wiki": "https://en.wikipedia.org/wiki/Andrea_Kimi_Antonelli"
    },
    "paul_aron": {
      "dob": null,
      "nationality": null,
      "wiki": null
    },
    "bearman": {
      "dob": "2005-05-08",
      "nationality": "British",
      "wiki": "http://en.wikipedia.org/wiki/Oliver_Bearman"
    },
    "dino_beganovic": {
      "dob": null,
      "nationality": null,
      "wiki": null
    },
    "bortoleto": {
      "dob": "2004-10-14",
      "nationality": "Brazilian",
      "wiki": "https://en.wikipedia.org/wiki/Gabriel_Bortoleto"
    },
    "bottas": {
      "dob": "1989-08-28",
      "nationality": "Finnish",
      "wiki": "http://en.wikipedia.org/wiki/Valtteri_Bottas"
    },
    "luke_browning": {
      "dob": null,
      "nationality": null,
      "wiki": null
    },
    "colapinto": {
      "dob": "2003-05-27",
      "nationality": "Argentine",
      "wiki": "http://en.wikipedia.org/wiki/Franco_Colapinto"
    },
    "jak_crawford": {
      "dob": null,
      "nationality": null,
      "wiki": null
    },
    "leonardo_fornaroli": {
      "dob": null,
      "nationality": null,
      "wiki": null
    },
    "gasly": {
      "dob": "1996-02-07",
      "nationality": "French",
      "wiki": "http://en.wikipedia.org/wiki/Pierre_Gasly"
    },
    "hadjar": {
      "dob": "2004-09-28",
      "nationality": "French",
      "wiki": "https://en.wikipedia.org/wiki/Isack_Hadjar"
    },
    "hamilton": {
      "dob": "1985-01-07",
      "nationality": "British",
      "wiki": "http://en.wikipedia.org/wiki/Lewis_Hamilton"
    },
    "colton_herta": {
      "dob": null,
      "nationality": null,
      "wiki": null
    },
    "ryo_hirakawa": {
      "dob": null,
      "nationality": null,
      "wiki": null
    },
    "hulkenberg": {
      "dob": "1987-08-19",
      "nationality": "German",
      "wiki": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg"
    },
    "ayumu_iwasa": {
      "dob": null,
      "nationality": null,
      "wiki": null
    },
    "lawson": {
      "dob": "2002-02-11",
      "nationality": "New Zealander",
      "wiki": "http://en.wikipedia.org/wiki/Liam_Lawson"
    },
    "leclerc": {
      "dob": "1997-10-16",
      "nationality": "Monegasque",
      "wiki": "http://en.wikipedia.org/wiki/Charles_Leclerc"
    },
    "arvid_lindblad": {
      "dob": "2007-08-08",
      "nationality": "British",
      "wiki": "https://en.wikipedia.org/wiki/Arvid_Lindblad"
    },
    "norris": {
      "dob": "1999-11-13",
      "nationality": "British",
      "wiki": "http://en.wikipedia.org/wiki/Lando_Norris"
    },
    "ocon": {
      "dob": "1996-09-17",
      "nationality": "French",
      "wiki": "http://en.wikipedia.org/wiki/Esteban_Ocon"
    },
    "piastri": {
      "dob": "2001-04-06",
      "nationality": "Australian",
      "wiki": "http://en.wikipedia.org/wiki/Oscar_Piastri"
    },
    "perez": {
      "dob": "1990-01-26",
      "nationality": "Mexican",
      "wiki": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez"
    },
    "russell": {
      "dob": "1998-02-15",
      "nationality": "British",
      "wiki": "http://en.wikipedia.org/wiki/George_Russell_(racing_driver)"
    },
    "sainz": {
      "dob": "1994-09-01",
      "nationality": "Spanish",
      "wiki": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr."
    },
    "stroll": {
      "dob": "1998-10-29",
      "nationality": "Canadian",
      "wiki": "http://en.wikipedia.org/wiki/Lance_Stroll"
    },
    "max_verstappen": {
      "dob": "1997-09-30",
      "nationality": "Dutch",
      "wiki": "http://en.wikipedia.org/wiki/Max_Verstappen"
    },
    "frederik_vesti": {
      "dob": null,
      "nationality": null,
      "wiki": null
    }
  },
  "circuit_data_2026": {
    "australia": {
      "name": "Albert Park Grand Prix Circuit",
      "locality": "Melbourne",
      "country": "Australia",
      "lat": -37.8497,
      "long": 144.968,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Albert_Park_Circuit"
    },
    "americas": {
      "name": "Circuit of the Americas",
      "locality": "Austin",
      "country": "USA",
      "lat": 30.1328,
      "long": -97.6411,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Circuit_of_the_Americas"
    },
    "azerbaijan": {
      "name": "Baku City Circuit",
      "locality": "Baku",
      "country": "Azerbaijan",
      "lat": 40.3725,
      "long": 49.8533,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Baku_City_Circuit"
    },
    "spain": {
      "name": "Circuit de Barcelona-Catalunya",
      "locality": "Barcelona",
      "country": "Spain",
      "lat": 41.57,
      "long": 2.26111,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya"
    },
    "hungary": {
      "name": "Hungaroring",
      "locality": "Budapest",
      "country": "Hungary",
      "lat": 47.5789,
      "long": 19.2486,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Hungaroring"
    },
    "brazil": {
      "name": "Autódromo José Carlos Pace",
      "locality": "São Paulo",
      "country": "Brazil",
      "lat": -23.7036,
      "long": -46.6997,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Interlagos_Circuit"
    },
    "jeddah": {
      "name": "Jeddah Corniche Circuit",
      "locality": "Jeddah",
      "country": "Saudi Arabia",
      "lat": 21.6319,
      "long": 39.1044,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Jeddah_Corniche_Circuit"
    },
    "qatar": {
      "name": "Losail International Circuit",
      "locality": "Lusail",
      "country": "Qatar",
      "lat": 25.49,
      "long": 51.4542,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Lusail_International_Circuit"
    },
    "madrid": {
      "name": "Madring",
      "locality": "Madrid",
      "country": "Spain",
      "lat": 40.46528,
      "long": -3.61528,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Madring"
    },
    "singapore": {
      "name": "Marina Bay Street Circuit",
      "locality": "Marina Bay",
      "country": "Singapore",
      "lat": 1.2914,
      "long": 103.864,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Marina_Bay_Street_Circuit"
    },
    "miami": {
      "name": "Miami International Autodrome",
      "locality": "Miami",
      "country": "USA",
      "lat": 25.9581,
      "long": -80.2389,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Miami_International_Autodrome"
    },
    "monaco": {
      "name": "Circuit de Monaco",
      "locality": "Monte Carlo",
      "country": "Monaco",
      "lat": 43.7347,
      "long": 7.42056,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Circuit_de_Monaco"
    },
    "italy": {
      "name": "Autodromo Nazionale di Monza",
      "locality": "Monza",
      "country": "Italy",
      "lat": 45.6156,
      "long": 9.28111,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Monza_Circuit"
    },
    "austria": {
      "name": "Red Bull Ring",
      "locality": "Spielberg",
      "country": "Austria",
      "lat": 47.2197,
      "long": 14.7647,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Red_Bull_Ring"
    },
    "mexico": {
      "name": "Autódromo Hermanos Rodríguez",
      "locality": "Mexico City",
      "country": "Mexico",
      "lat": 19.4042,
      "long": -99.0907,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez"
    },
    "sepang": {
      "name": "Sepang International Circuit",
      "locality": "Kuala Lumpur",
      "country": "Malaysia",
      "lat": 2.76083,
      "long": 101.738,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Sepang_International_Circuit"
    },
    "china": {
      "name": "Shanghai International Circuit",
      "locality": "Shanghai",
      "country": "China",
      "lat": 31.3389,
      "long": 121.22,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Shanghai_International_Circuit"
    },
    "britain": {
      "name": "Silverstone Circuit",
      "locality": "Silverstone",
      "country": "UK",
      "lat": 52.0786,
      "long": -1.01694,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Silverstone_Circuit"
    },
    "belgium": {
      "name": "Circuit de Spa-Francorchamps",
      "locality": "Spa",
      "country": "Belgium",
      "lat": 50.4372,
      "long": 5.97139,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps"
    },
    "japan": {
      "name": "Suzuka Circuit",
      "locality": "Suzuka",
      "country": "Japan",
      "lat": 34.8431,
      "long": 136.541,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Suzuka_International_Racing_Course"
    },
    "las_vegas": {
      "name": "Las Vegas Strip Street Circuit",
      "locality": "Las Vegas",
      "country": "USA",
      "lat": 36.1147,
      "long": -115.173,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Las_Vegas_Grand_Prix#Circuit"
    },
    "canada": {
      "name": "Circuit Gilles Villeneuve",
      "locality": "Montreal",
      "country": "Canada",
      "lat": 45.5,
      "long": -73.5228,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve"
    },
    "abu_dhabi": {
      "name": "Yas Marina Circuit",
      "locality": "Abu Dhabi",
      "country": "UAE",
      "lat": 24.4672,
      "long": 54.6031,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Yas_Marina_Circuit"
    },
    "netherlands": {
      "name": "Circuit Park Zandvoort",
      "locality": "Zandvoort",
      "country": "Netherlands",
      "lat": 52.3888,
      "long": 4.54092,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Circuit_Zandvoort"
    }
  },
  "openf1_race_data": {
    "1": {
      "session_key": 11234,
      "pit_stops": {
        "colapinto": [
          {
            "lap": 9,
            "duration": 27.7
          },
          {
            "lap": 46,
            "duration": 18.56
          }
        ],
        "norris": [
          {
            "lap": 11,
            "duration": 18.2
          },
          {
            "lap": 34,
            "duration": 17.6
          }
        ],
        "ocon": [
          {
            "lap": 11,
            "duration": 18.5
          }
        ],
        "gasly": [
          {
            "lap": 11,
            "duration": 18.6
          }
        ],
        "sainz": [
          {
            "lap": 11,
            "duration": 19.8
          },
          {
            "lap": 33,
            "duration": 25.94
          },
          {
            "lap": 45,
            "duration": 34.62
          }
        ],
        "lawson": [
          {
            "lap": 11,
            "duration": 19.1
          },
          {
            "lap": 33,
            "duration": 18.19
          }
        ],
        "alonso": [
          {
            "lap": 11,
            "duration": 25.89
          },
          {
            "lap": 13,
            "duration": 972.3
          }
        ],
        "stroll": [
          {
            "lap": 11,
            "duration": 36.69
          },
          {
            "lap": 26,
            "duration": 33.1
          },
          {
            "lap": 18,
            "duration": 33.18
          },
          {
            "lap": 34,
            "duration": 1081.5
          },
          {
            "lap": 39,
            "duration": 22.4
          },
          {
            "lap": 46,
            "duration": 22.47
          }
        ],
        "russell": [
          {
            "lap": 12,
            "duration": 17.79
          }
        ],
        "antonelli": [
          {
            "lap": 12,
            "duration": 20.98
          }
        ],
        "albon": [
          {
            "lap": 12,
            "duration": 18.12
          },
          {
            "lap": 33,
            "duration": 18.4
          }
        ],
        "bottas": [
          {
            "lap": 12,
            "duration": 30.39
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 18,
            "duration": 18.51
          }
        ],
        "max_verstappen": [
          {
            "lap": 18,
            "duration": 19.07
          },
          {
            "lap": 41,
            "duration": 18
          }
        ],
        "bearman": [
          {
            "lap": 18,
            "duration": 18.77
          }
        ],
        "bortoleto": [
          {
            "lap": 18,
            "duration": 22.62
          },
          {
            "lap": 33,
            "duration": 22.6
          }
        ],
        "perez": [
          {
            "lap": 18,
            "duration": 21.37
          },
          {
            "lap": 43,
            "duration": 18.95
          }
        ],
        "leclerc": [
          {
            "lap": 25,
            "duration": 17.6
          },
          {
            "lap": 18,
            "duration": 17.66
          }
        ],
        "hamilton": [
          {
            "lap": 28,
            "duration": 17.7
          },
          {
            "lap": 18,
            "duration": 17.74
          }
        ]
      },
      "stints": {
        "hulkenberg": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "colapinto": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 8,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 9,
            "lap_end": 45,
            "tyre_age": 9,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hadjar": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "norris": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 33,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 34,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "ocon": [
          {
            "compound": "UNKNOWN",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "gasly": [
          {
            "compound": "UNKNOWN",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "sainz": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 33,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "lawson": [
          {
            "compound": "UNKNOWN",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 33,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "alonso": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 11,
            "lap_end": 12,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 13,
            "lap_end": 21,
            "tyre_age": 2,
            "stint_number": 3
          }
        ],
        "stroll": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 25,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 26,
            "lap_end": 33,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 34,
            "lap_end": 38,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 39,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 5
          }
        ],
        "russell": [
          {
            "compound": "UNKNOWN",
            "lap_start": 1,
            "lap_end": 11,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 12,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 11,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 12,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "albon": [
          {
            "compound": "UNKNOWN",
            "lap_start": 1,
            "lap_end": 11,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 12,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 33,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "bottas": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 11,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 12,
            "lap_end": 15,
            "tyre_age": 12,
            "stint_number": 2
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bearman": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "max_verstappen": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 18,
            "lap_end": 40,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 41,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "bortoleto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 33,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "perez": [
          {
            "compound": "UNKNOWN",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 43,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "leclerc": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 24,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 25,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hamilton": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 28,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 2
          }
        ]
      }
    },
    "2": {
      "session_key": 11245,
      "pit_stops": {
        "hadjar": [
          {
            "lap": 1,
            "duration": 23.06
          },
          {
            "lap": 10,
            "duration": 25.75
          }
        ],
        "lawson": [
          {
            "lap": 9,
            "duration": 22.72
          }
        ],
        "max_verstappen": [
          {
            "lap": 9,
            "duration": 23.68
          }
        ],
        "sainz": [
          {
            "lap": 9,
            "duration": 23.11
          }
        ],
        "antonelli": [
          {
            "lap": 10,
            "duration": 23
          }
        ],
        "russell": [
          {
            "lap": 10,
            "duration": 23.39
          }
        ],
        "hamilton": [
          {
            "lap": 10,
            "duration": 22.43
          }
        ],
        "leclerc": [
          {
            "lap": 10,
            "duration": 25.63
          }
        ],
        "gasly": [
          {
            "lap": 10,
            "duration": 23.54
          }
        ],
        "bearman": [
          {
            "lap": 10,
            "duration": 22.97
          }
        ],
        "bottas": [
          {
            "lap": 10,
            "duration": 27.8
          }
        ],
        "perez": [
          {
            "lap": 11,
            "duration": 26.21
          }
        ],
        "ocon": [
          {
            "lap": 29,
            "duration": 26
          },
          {
            "lap": 46,
            "duration": 47.07
          }
        ],
        "alonso": [
          {
            "lap": 31,
            "duration": 23.29
          }
        ],
        "colapinto": [
          {
            "lap": 32,
            "duration": 23.2
          }
        ],
        "hulkenberg": [
          {
            "lap": 35,
            "duration": 37.36
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 42,
            "duration": 23.29
          }
        ]
      },
      "stints": {
        "hadjar": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 2,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "max_verstappen": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 9,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 10,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "sainz": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 10,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "perez": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 11,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 12,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bottas": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "piastri": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "albon": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "alonso": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 32,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 43,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bearman": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "stroll": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "ocon": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 30,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 47,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 10,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "norris": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "colapinto": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 33,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bortoleto": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "leclerc": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hulkenberg": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 35,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 36,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hamilton": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ]
      }
    },
    "3": {
      "session_key": 11253,
      "pit_stops": {},
      "stints": {
        "norris": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 17,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bearman": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 17,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "leclerc": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "piastri": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 19,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 19,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "ocon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 20,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hadjar": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 20,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bottas": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "perez": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "stroll": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 24,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 25,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "alonso": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 23,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 24,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hamilton": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "max_verstappen": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bortoleto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "sainz": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "albon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 47,
            "lap_end": 47,
            "tyre_age": 1,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 48,
            "lap_end": 48,
            "tyre_age": 2,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 49,
            "lap_end": 49,
            "tyre_age": 3,
            "stint_number": 6
          },
          {
            "compound": "MEDIUM",
            "lap_start": 50,
            "lap_end": 51,
            "tyre_age": 0,
            "stint_number": 7
          }
        ],
        "hulkenberg": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 23,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 24,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ]
      }
    },
    "4": {
      "session_key": 11280,
      "pit_stops": {
        "hulkenberg": [
          {
            "lap": 1,
            "duration": 33.71
          }
        ],
        "max_verstappen": [
          {
            "lap": 6,
            "duration": 22.55
          }
        ],
        "bottas": [
          {
            "lap": 6,
            "duration": 23.53
          },
          {
            "lap": 21,
            "duration": 23.83
          },
          {
            "lap": 30,
            "duration": 17.1
          }
        ],
        "russell": [
          {
            "lap": 20,
            "duration": 22
          }
        ],
        "leclerc": [
          {
            "lap": 21,
            "duration": 23.39
          }
        ],
        "stroll": [
          {
            "lap": 21,
            "duration": 22.63
          },
          {
            "lap": 37,
            "duration": 22.09
          }
        ],
        "antonelli": [
          {
            "lap": 26,
            "duration": 22.13
          }
        ],
        "bearman": [
          {
            "lap": 26,
            "duration": 23.47
          }
        ],
        "norris": [
          {
            "lap": 27,
            "duration": 22.57
          }
        ],
        "hamilton": [
          {
            "lap": 27,
            "duration": 23.78
          }
        ],
        "albon": [
          {
            "lap": 27,
            "duration": 23.02
          }
        ],
        "piastri": [
          {
            "lap": 28,
            "duration": 23.02
          }
        ],
        "sainz": [
          {
            "lap": 28,
            "duration": 23.59
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 28,
            "duration": 22.73
          }
        ],
        "perez": [
          {
            "lap": 29,
            "duration": 23.2
          }
        ],
        "colapinto": [
          {
            "lap": 31,
            "duration": 23.09
          }
        ],
        "ocon": [
          {
            "lap": 31,
            "duration": 24.03
          }
        ],
        "bortoleto": [
          {
            "lap": 32,
            "duration": 23.99
          }
        ],
        "alonso": [
          {
            "lap": 41,
            "duration": 23.16
          }
        ]
      },
      "stints": {
        "leclerc": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "max_verstappen": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 6,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 7,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "sainz": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 29,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hamilton": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 28,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 6,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 29,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 27,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "albon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 27,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 28,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "alonso": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 41,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 42,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bortoleto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 33,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hulkenberg": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 2,
            "lap_end": 7,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bearman": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 27,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "perez": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 30,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "stroll": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 22,
            "lap_end": 37,
            "tyre_age": 3,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 38,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "ocon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 32,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 32,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "norris": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 28,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hadjar": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 4,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "bottas": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 6,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 7,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 22,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "MEDIUM",
            "lap_start": 31,
            "lap_end": 55,
            "tyre_age": 9,
            "stint_number": 4
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 4,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "piastri": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 29,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ]
      }
    },
    "5": {
      "session_key": 11291,
      "pit_stops": {
        "piastri": [
          {
            "lap": 1,
            "duration": 24.1
          },
          {
            "lap": 12,
            "duration": 36.6
          },
          {
            "lap": 51,
            "duration": 36.1
          }
        ],
        "norris": [
          {
            "lap": 2,
            "duration": 23.4
          },
          {
            "lap": 15,
            "duration": 28.8
          }
        ],
        "hulkenberg": [
          {
            "lap": 2,
            "duration": 24.9
          },
          {
            "lap": 20,
            "duration": 31
          }
        ],
        "sainz": [
          {
            "lap": 2,
            "duration": 24.7
          },
          {
            "lap": 30,
            "duration": 25.6
          }
        ],
        "bortoleto": [
          {
            "lap": 2,
            "duration": 28.1
          },
          {
            "lap": 18,
            "duration": 24.7
          }
        ],
        "perez": [
          {
            "lap": 2,
            "duration": 25.7
          },
          {
            "lap": 15,
            "duration": 25.1
          },
          {
            "lap": 29,
            "duration": 24.9
          }
        ],
        "bottas": [
          {
            "lap": 3,
            "duration": 28.2
          },
          {
            "lap": 9,
            "duration": 24.8
          },
          {
            "lap": 29,
            "duration": 24.4
          },
          {
            "lap": 49,
            "duration": 31.1
          }
        ],
        "stroll": [
          {
            "lap": 14,
            "duration": 24.2
          },
          {
            "lap": 49,
            "duration": 24.1
          }
        ],
        "ocon": [
          {
            "lap": 16,
            "duration": 24.8
          },
          {
            "lap": 30,
            "duration": 35.3
          }
        ],
        "alonso": [
          {
            "lap": 20,
            "duration": 24.7
          }
        ],
        "colapinto": [
          {
            "lap": 30,
            "duration": 25.6
          }
        ],
        "lawson": [
          {
            "lap": 30,
            "duration": 24.1
          }
        ],
        "gasly": [
          {
            "lap": 30,
            "duration": 25.6
          }
        ],
        "antonelli": [
          {
            "lap": 31,
            "duration": 25.1
          }
        ],
        "bearman": [
          {
            "lap": 30,
            "duration": 44.9
          }
        ],
        "max_verstappen": [
          {
            "lap": 31,
            "duration": 25.1
          }
        ],
        "hamilton": [
          {
            "lap": 31,
            "duration": 25.9
          }
        ],
        "hadjar": [
          {
            "lap": 31,
            "duration": 24.9
          },
          {
            "lap": 52,
            "duration": 34.7
          },
          {
            "lap": 62,
            "duration": 34.8
          }
        ],
        "leclerc": [
          {
            "lap": 31,
            "duration": 30.1
          }
        ]
      },
      "stints": {
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "piastri": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": null,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 11,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 12,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 51,
            "lap_end": 66,
            "tyre_age": 4,
            "stint_number": 4
          }
        ],
        "norris": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 2,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 15,
            "lap_end": 38,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "hulkenberg": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 2,
            "lap_end": 19,
            "tyre_age": 4,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 66,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "bortoleto": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 2,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 18,
            "lap_end": 66,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "perez": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 2,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 15,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 29,
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "sainz": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 2,
            "lap_end": 29,
            "tyre_age": 8,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 30,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "bottas": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 8,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 9,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 29,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "MEDIUM",
            "lap_start": 49,
            "lap_end": 64,
            "tyre_age": 0,
            "stint_number": 5
          }
        ],
        "albon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 11,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "stroll": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 13,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 14,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 49,
            "lap_end": 64,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "ocon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 16,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 30,
            "lap_end": 66,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "alonso": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 20,
            "lap_end": 23,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "russell": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 3,
            "stint_number": 1
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 30,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 30,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 30,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "antonelli": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 4,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 31,
            "lap_end": 68,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bearman": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 5,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 30,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "max_verstappen": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 5,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 31,
            "lap_end": 68,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hamilton": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 31,
            "lap_end": 68,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hadjar": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 4,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 31,
            "lap_end": 51,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 52,
            "lap_end": 61,
            "tyre_age": 4,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 62,
            "lap_end": 67,
            "tyre_age": 14,
            "stint_number": 4
          }
        ],
        "leclerc": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 4,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 31,
            "lap_end": 68,
            "tyre_age": 0,
            "stint_number": 2
          }
        ]
      }
    },
    "6": {
      "session_key": 11299,
      "pit_stops": {
        "bottas": [
          {
            "lap": 1,
            "duration": 26.7
          }
        ],
        "bortoleto": [
          {
            "lap": 1,
            "duration": 25.9
          },
          {
            "lap": 43,
            "duration": 24.6
          },
          {
            "lap": 58,
            "duration": 20.3
          },
          {
            "lap": 59,
            "duration": 24.8
          },
          {
            "lap": 65,
            "duration": 22.7
          },
          {
            "lap": 67,
            "duration": 2029.9
          },
          {
            "lap": 68,
            "duration": 63.9
          }
        ],
        "bearman": [
          {
            "lap": 1,
            "duration": 32.1
          }
        ],
        "alonso": [
          {
            "lap": 3,
            "duration": 24.9
          },
          {
            "lap": 58,
            "duration": 26.3
          },
          {
            "lap": 59,
            "duration": 20.2
          },
          {
            "lap": 65,
            "duration": 24
          },
          {
            "lap": 67,
            "duration": 2024.7
          },
          {
            "lap": 68,
            "duration": 64.9
          }
        ],
        "perez": [
          {
            "lap": 4,
            "duration": 27.1
          },
          {
            "lap": 9,
            "duration": 19.7
          },
          {
            "lap": 59,
            "duration": 26
          },
          {
            "lap": 65,
            "duration": 23.8
          },
          {
            "lap": 67,
            "duration": 2026.8
          },
          {
            "lap": 68,
            "duration": 65.8
          }
        ],
        "stroll": [
          {
            "lap": 4,
            "duration": 24.8
          }
        ],
        "ocon": [
          {
            "lap": 9,
            "duration": 25.4
          },
          {
            "lap": 59,
            "duration": 19.9
          },
          {
            "lap": 65,
            "duration": 21.4
          },
          {
            "lap": 67,
            "duration": 2025.9
          },
          {
            "lap": 68,
            "duration": 62.6
          }
        ],
        "hulkenberg": [
          {
            "lap": 12,
            "duration": 24.8
          },
          {
            "lap": 58,
            "duration": 20.5
          },
          {
            "lap": 59,
            "duration": 19.9
          },
          {
            "lap": 65,
            "duration": 22.3
          },
          {
            "lap": 67,
            "duration": 2027
          },
          {
            "lap": 68,
            "duration": 61.9
          }
        ],
        "hamilton": [
          {
            "lap": 28,
            "duration": 24.1
          },
          {
            "lap": 60,
            "duration": 31.2
          },
          {
            "lap": 61,
            "duration": 24.2
          },
          {
            "lap": 66,
            "duration": 22.5
          },
          {
            "lap": 68,
            "duration": 2156.2
          }
        ],
        "russell": [
          {
            "lap": 31,
            "duration": 24
          },
          {
            "lap": 60,
            "duration": 35.2
          },
          {
            "lap": 66,
            "duration": 22.5
          },
          {
            "lap": 68,
            "duration": 2158.1
          },
          {
            "lap": 72,
            "duration": 19.7
          }
        ],
        "hadjar": [
          {
            "lap": 32,
            "duration": 24.7
          },
          {
            "lap": 60,
            "duration": 19.6
          },
          {
            "lap": 66,
            "duration": 22.3
          },
          {
            "lap": 68,
            "duration": 2156.6
          }
        ],
        "leclerc": [
          {
            "lap": 35,
            "duration": 25.3
          },
          {
            "lap": 60,
            "duration": 34.9
          },
          {
            "lap": 61,
            "duration": 20
          }
        ],
        "colapinto": [
          {
            "lap": 35,
            "duration": 25.7
          },
          {
            "lap": 59,
            "duration": 21.9
          },
          {
            "lap": 65,
            "duration": 23.3
          },
          {
            "lap": 67,
            "duration": 2025.8
          },
          {
            "lap": 68,
            "duration": 64.4
          }
        ],
        "antonelli": [
          {
            "lap": 37,
            "duration": 24.1
          },
          {
            "lap": 61,
            "duration": 26.8
          },
          {
            "lap": 66,
            "duration": 20.7
          },
          {
            "lap": 68,
            "duration": 2154.1
          }
        ],
        "albon": [
          {
            "lap": 43,
            "duration": 25.5
          },
          {
            "lap": 59,
            "duration": 19.7
          },
          {
            "lap": 65,
            "duration": 22.7
          },
          {
            "lap": 67,
            "duration": 2024.1
          },
          {
            "lap": 68,
            "duration": 62.2
          }
        ],
        "lawson": [
          {
            "lap": 44,
            "duration": 25.6
          },
          {
            "lap": 60,
            "duration": 19.9
          },
          {
            "lap": 66,
            "duration": 20.3
          },
          {
            "lap": 68,
            "duration": 2146
          }
        ],
        "gasly": [
          {
            "lap": 45,
            "duration": 25.5
          },
          {
            "lap": 60,
            "duration": 19.8
          },
          {
            "lap": 66,
            "duration": 23.3
          },
          {
            "lap": 68,
            "duration": 2151.5
          }
        ],
        "piastri": [
          {
            "lap": 48,
            "duration": 24.2
          },
          {
            "lap": 59,
            "duration": 31.4
          },
          {
            "lap": 60,
            "duration": 20.1
          },
          {
            "lap": 66,
            "duration": 23.4
          },
          {
            "lap": 68,
            "duration": 2151.4
          }
        ],
        "sainz": [
          {
            "lap": 52,
            "duration": 25.6
          },
          {
            "lap": 59,
            "duration": 19.8
          },
          {
            "lap": 65,
            "duration": 22.1
          },
          {
            "lap": 67,
            "duration": 2025.7
          },
          {
            "lap": 68,
            "duration": 61.9
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 59,
            "duration": 20.2
          },
          {
            "lap": 65,
            "duration": 22.7
          },
          {
            "lap": 67,
            "duration": 2023
          },
          {
            "lap": 68,
            "duration": 62.5
          }
        ]
      },
      "stints": {
        "max_verstappen": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "bortoleto": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": null,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 43,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "MEDIUM",
            "lap_start": 58,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 59,
            "lap_end": 64,
            "tyre_age": 0,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 65,
            "lap_end": 66,
            "tyre_age": 0,
            "stint_number": 6
          },
          {
            "compound": "SOFT",
            "lap_start": 67,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 7
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 0,
            "stint_number": 8
          }
        ],
        "bottas": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": null,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bearman": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": null,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "alonso": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 58,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 59,
            "lap_end": 64,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 65,
            "lap_end": 66,
            "tyre_age": 7,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 67,
            "lap_end": 67,
            "tyre_age": 8,
            "stint_number": 6
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 8,
            "stint_number": 7
          }
        ],
        "perez": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 4,
            "lap_end": 8,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 9,
            "lap_end": 58,
            "tyre_age": 5,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 59,
            "lap_end": 64,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 65,
            "lap_end": 66,
            "tyre_age": 6,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 67,
            "lap_end": 67,
            "tyre_age": 6,
            "stint_number": 6
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 0,
            "stint_number": 7
          }
        ],
        "stroll": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 4,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "ocon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 8,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 9,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 59,
            "lap_end": 64,
            "tyre_age": 50,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 65,
            "lap_end": 66,
            "tyre_age": 56,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 67,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 0,
            "stint_number": 6
          }
        ],
        "hulkenberg": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 11,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 12,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 58,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 59,
            "lap_end": 64,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "HARD",
            "lap_start": 65,
            "lap_end": 66,
            "tyre_age": 53,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 67,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 6
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 0,
            "stint_number": 7
          }
        ],
        "hamilton": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 28,
            "lap_end": 59,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 60,
            "lap_end": 60,
            "tyre_age": 4,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 61,
            "lap_end": 65,
            "tyre_age": 5,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 66,
            "lap_end": 67,
            "tyre_age": 10,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 4,
            "stint_number": 6
          }
        ],
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 31,
            "lap_end": 59,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 60,
            "lap_end": 65,
            "tyre_age": 4,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 66,
            "lap_end": 67,
            "tyre_age": 10,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 71,
            "tyre_age": 4,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 72,
            "lap_end": 78,
            "tyre_age": 8,
            "stint_number": 6
          }
        ],
        "hadjar": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 32,
            "lap_end": 59,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 60,
            "lap_end": 65,
            "tyre_age": 28,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 66,
            "lap_end": 67,
            "tyre_age": 34,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 4,
            "stint_number": 5
          }
        ],
        "leclerc": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 34,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 35,
            "lap_end": 59,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 60,
            "lap_end": 60,
            "tyre_age": 4,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 61,
            "lap_end": 64,
            "tyre_age": 5,
            "stint_number": 4
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 34,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 35,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 59,
            "lap_end": 64,
            "tyre_age": 24,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 65,
            "lap_end": 66,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 67,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 0,
            "stint_number": 6
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 37,
            "lap_end": 60,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 61,
            "lap_end": 65,
            "tyre_age": 4,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 66,
            "lap_end": 67,
            "tyre_age": 9,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 4,
            "stint_number": 5
          }
        ],
        "norris": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "albon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 43,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 59,
            "lap_end": 64,
            "tyre_age": 16,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 65,
            "lap_end": 66,
            "tyre_age": 22,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 67,
            "lap_end": 67,
            "tyre_age": 6,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 6,
            "stint_number": 6
          }
        ],
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 44,
            "lap_end": 59,
            "tyre_age": 4,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 60,
            "lap_end": 65,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 66,
            "lap_end": 67,
            "tyre_age": 26,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 6,
            "stint_number": 5
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 45,
            "lap_end": 59,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 60,
            "lap_end": 65,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 66,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 4,
            "stint_number": 5
          }
        ],
        "piastri": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 48,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 59,
            "lap_end": 59,
            "tyre_age": 4,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 60,
            "lap_end": 65,
            "tyre_age": 5,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 66,
            "lap_end": 67,
            "tyre_age": 11,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 4,
            "stint_number": 6
          }
        ],
        "sainz": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 51,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 52,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 59,
            "lap_end": 64,
            "tyre_age": 7,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 65,
            "lap_end": 66,
            "tyre_age": 13,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 67,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 70,
            "tyre_age": 4,
            "stint_number": 6
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 59,
            "lap_end": 64,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 65,
            "lap_end": 66,
            "tyre_age": 65,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 67,
            "lap_end": 67,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 68,
            "lap_end": 78,
            "tyre_age": 0,
            "stint_number": 5
          }
        ]
      }
    },
    "7": {
      "session_key": 11307,
      "pit_stops": {
        "hamilton": [
          {
            "lap": 11,
            "duration": 22.48
          },
          {
            "lap": 27,
            "duration": 22.48
          },
          {
            "lap": 41,
            "duration": 22.84
          }
        ],
        "lawson": [
          {
            "lap": 11,
            "duration": 25.98
          },
          {
            "lap": 35,
            "duration": 23.17
          }
        ],
        "russell": [
          {
            "lap": 12,
            "duration": 22.08
          },
          {
            "lap": 36,
            "duration": 21.68
          }
        ],
        "max_verstappen": [
          {
            "lap": 12,
            "duration": 22.27
          },
          {
            "lap": 29,
            "duration": 24.19
          },
          {
            "lap": 40,
            "duration": 22.79
          }
        ],
        "colapinto": [
          {
            "lap": 12,
            "duration": 22.98
          },
          {
            "lap": 34,
            "duration": 22.29
          }
        ],
        "perez": [
          {
            "lap": 12,
            "duration": 24.8
          },
          {
            "lap": 31,
            "duration": 24.43
          },
          {
            "lap": 39,
            "duration": 23.91
          }
        ],
        "norris": [
          {
            "lap": 13,
            "duration": 21.7
          },
          {
            "lap": 35,
            "duration": 22
          }
        ],
        "hulkenberg": [
          {
            "lap": 13,
            "duration": 22.87
          }
        ],
        "ocon": [
          {
            "lap": 13,
            "duration": 23.26
          },
          {
            "lap": 34,
            "duration": 26.45
          },
          {
            "lap": 58,
            "duration": 22.9
          }
        ],
        "albon": [
          {
            "lap": 13,
            "duration": 24
          },
          {
            "lap": 29,
            "duration": 22.03
          },
          {
            "lap": 34,
            "duration": 777.7
          },
          {
            "lap": 50,
            "duration": 22.7
          }
        ],
        "antonelli": [
          {
            "lap": 14,
            "duration": 22.04
          },
          {
            "lap": 37,
            "duration": 22.21
          }
        ],
        "piastri": [
          {
            "lap": 14,
            "duration": 21.78
          },
          {
            "lap": 36,
            "duration": 22.66
          }
        ],
        "gasly": [
          {
            "lap": 14,
            "duration": 22.68
          },
          {
            "lap": 40,
            "duration": 23.31
          }
        ],
        "sainz": [
          {
            "lap": 14,
            "duration": 22.98
          },
          {
            "lap": 30,
            "duration": 22.59
          },
          {
            "lap": 55,
            "duration": 22.77
          }
        ],
        "bottas": [
          {
            "lap": 14,
            "duration": 23.28
          }
        ],
        "hadjar": [
          {
            "lap": 15,
            "duration": 22.44
          },
          {
            "lap": 32,
            "duration": 22.53
          },
          {
            "lap": 58,
            "duration": 21.95
          }
        ],
        "bortoleto": [
          {
            "lap": 15,
            "duration": 22.78
          },
          {
            "lap": 33,
            "duration": 22.29
          },
          {
            "lap": 53,
            "duration": 25.91
          }
        ],
        "leclerc": [
          {
            "lap": 16,
            "duration": 22.25
          },
          {
            "lap": 39,
            "duration": 22.13
          }
        ],
        "bearman": [
          {
            "lap": 18,
            "duration": 23.12
          },
          {
            "lap": 39,
            "duration": 23.9
          }
        ],
        "alonso": [
          {
            "lap": 21,
            "duration": 22.22
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 22,
            "duration": 22.48
          },
          {
            "lap": 37,
            "duration": 24.01
          }
        ]
      },
      "stints": {
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 12,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 13,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 37,
            "lap_end": 66,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "albon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 13,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 14,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 30,
            "lap_end": 34,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 35,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 51,
            "lap_end": 55,
            "tyre_age": 3,
            "stint_number": 5
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 37,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 38,
            "lap_end": 65,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hadjar": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 16,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 33,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 59,
            "lap_end": 65,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 11,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 12,
            "lap_end": 35,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 36,
            "lap_end": 65,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "max_verstappen": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 12,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 13,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 30,
            "lap_end": 40,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "MEDIUM",
            "lap_start": 41,
            "lap_end": 66,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 15,
            "lap_end": 37,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 38,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "perez": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 12,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 13,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 32,
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "MEDIUM",
            "lap_start": 40,
            "lap_end": 63,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "ocon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 13,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 14,
            "lap_end": 34,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 35,
            "lap_end": 58,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 59,
            "lap_end": 64,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "bearman": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 19,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 29,
            "lap_end": 60,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "stroll": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 5,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "hamilton": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 11,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 12,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 28,
            "lap_end": 41,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 42,
            "lap_end": 66,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "sainz": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 15,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 31,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "MEDIUM",
            "lap_start": 56,
            "lap_end": 64,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "bottas": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 15,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 15,
            "lap_end": 40,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 41,
            "lap_end": 65,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "leclerc": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 17,
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 40,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "piastri": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 15,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 37,
            "lap_end": 66,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "norris": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 13,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 14,
            "lap_end": 35,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 36,
            "lap_end": 66,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "colapinto": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 12,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 13,
            "lap_end": 34,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 35,
            "lap_end": 65,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "alonso": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 37,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bortoleto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 16,
            "lap_end": 33,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 34,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 54,
            "lap_end": 64,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "hulkenberg": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 13,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 14,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 2
          }
        ]
      }
    },
    "8": {
      "session_key": 11315,
      "pit_stops": {
        "hamilton": [
          {
            "lap": 12,
            "duration": 21.3
          },
          {
            "lap": 25,
            "duration": 21.2
          },
          {
            "lap": 42,
            "duration": 21.2
          }
        ],
        "leclerc": [
          {
            "lap": 13,
            "duration": 21.7
          },
          {
            "lap": 37,
            "duration": 21
          },
          {
            "lap": 59,
            "duration": 22.7
          }
        ],
        "gasly": [
          {
            "lap": 13,
            "duration": 21.6
          },
          {
            "lap": 38,
            "duration": 21.2
          },
          {
            "lap": 51,
            "duration": 21.5
          }
        ],
        "sainz": [
          {
            "lap": 14,
            "duration": 21.3
          }
        ],
        "bortoleto": [
          {
            "lap": 17,
            "duration": 22.6
          },
          {
            "lap": 44,
            "duration": 21.8
          }
        ],
        "max_verstappen": [
          {
            "lap": 18,
            "duration": 21.3
          },
          {
            "lap": 49,
            "duration": 21.2
          }
        ],
        "hadjar": [
          {
            "lap": 18,
            "duration": 21.7
          },
          {
            "lap": 40,
            "duration": 21.2
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 18,
            "duration": 21.4
          },
          {
            "lap": 46,
            "duration": 21.5
          }
        ],
        "ocon": [
          {
            "lap": 18,
            "duration": 21.8
          },
          {
            "lap": 33,
            "duration": 25.4
          }
        ],
        "albon": [
          {
            "lap": 18,
            "duration": 21.2
          },
          {
            "lap": 37,
            "duration": 21.2
          }
        ],
        "russell": [
          {
            "lap": 19,
            "duration": 21.2
          },
          {
            "lap": 43,
            "duration": 21.2
          }
        ],
        "piastri": [
          {
            "lap": 19,
            "duration": 22
          },
          {
            "lap": 42,
            "duration": 21.2
          }
        ],
        "lawson": [
          {
            "lap": 19,
            "duration": 22
          },
          {
            "lap": 45,
            "duration": 21.5
          }
        ],
        "colapinto": [
          {
            "lap": 20,
            "duration": 21.5
          },
          {
            "lap": 46,
            "duration": 21.4
          }
        ],
        "norris": [
          {
            "lap": 21,
            "duration": 21.5
          },
          {
            "lap": 47,
            "duration": 21.8
          }
        ],
        "hulkenberg": [
          {
            "lap": 21,
            "duration": 21.5
          },
          {
            "lap": 45,
            "duration": 22.5
          }
        ],
        "antonelli": [
          {
            "lap": 24,
            "duration": 21.4
          },
          {
            "lap": 51,
            "duration": 21.5
          }
        ],
        "bearman": [
          {
            "lap": 24,
            "duration": 21.5
          },
          {
            "lap": 45,
            "duration": 22
          }
        ],
        "alonso": [
          {
            "lap": 24,
            "duration": 22.3
          },
          {
            "lap": 49,
            "duration": 28.7
          }
        ],
        "stroll": [
          {
            "lap": 24,
            "duration": 23.5
          }
        ]
      },
      "stints": {
        "bottas": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "perez": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 4,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "hamilton": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 12,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 13,
            "lap_end": 25,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 26,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 43,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "leclerc": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 13,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 14,
            "lap_end": 37,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 38,
            "lap_end": 59,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 60,
            "lap_end": 71,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 13,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 14,
            "lap_end": 38,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 39,
            "lap_end": 51,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 52,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "sainz": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 15,
            "lap_end": 23,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bortoleto": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 18,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 45,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "max_verstappen": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 19,
            "lap_end": 49,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 50,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hadjar": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 19,
            "lap_end": 40,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 41,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 19,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 47,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "ocon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 19,
            "lap_end": 33,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 34,
            "lap_end": 69,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "albon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 19,
            "lap_end": 37,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 38,
            "lap_end": 69,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 20,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 44,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "piastri": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 20,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 43,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 20,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 46,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 47,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "norris": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 48,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hulkenberg": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 22,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 46,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 24,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 25,
            "lap_end": 51,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 52,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "bearman": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 24,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 25,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 46,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "alonso": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 24,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 25,
            "lap_end": 49,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 50,
            "lap_end": 68,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "stroll": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 24,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 25,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          }
        ]
      }
    },
    "9": {
      "session_key": 11326,
      "pit_stops": {
        "albon": [
          {
            "lap": 1,
            "duration": 44.1
          },
          {
            "lap": 14,
            "duration": 41.2
          },
          {
            "lap": 23,
            "duration": 39.6
          },
          {
            "lap": 35,
            "duration": 31.4
          },
          {
            "lap": 40,
            "duration": 32.5
          }
        ],
        "piastri": [
          {
            "lap": 2,
            "duration": 40.5
          },
          {
            "lap": 36,
            "duration": 29.5
          },
          {
            "lap": 47,
            "duration": 29
          }
        ],
        "max_verstappen": [
          {
            "lap": 17,
            "duration": 28.7
          },
          {
            "lap": 38,
            "duration": 28.9
          }
        ],
        "hulkenberg": [
          {
            "lap": 17,
            "duration": 28.9
          },
          {
            "lap": 34,
            "duration": 35.8
          }
        ],
        "stroll": [
          {
            "lap": 18,
            "duration": 28.7
          },
          {
            "lap": 46,
            "duration": 46.2
          }
        ],
        "hadjar": [
          {
            "lap": 19,
            "duration": 29.9
          },
          {
            "lap": 38,
            "duration": 36.4
          },
          {
            "lap": 47,
            "duration": 29.6
          }
        ],
        "sainz": [
          {
            "lap": 20,
            "duration": 28.8
          },
          {
            "lap": 48,
            "duration": 29.2
          }
        ],
        "alonso": [
          {
            "lap": 20,
            "duration": 28.7
          },
          {
            "lap": 46,
            "duration": 29.9
          }
        ],
        "perez": [
          {
            "lap": 21,
            "duration": 29.3
          },
          {
            "lap": 46,
            "duration": 29.8
          }
        ],
        "ocon": [
          {
            "lap": 21,
            "duration": 43.2
          },
          {
            "lap": 47,
            "duration": 31.2
          }
        ],
        "colapinto": [
          {
            "lap": 22,
            "duration": 29.3
          },
          {
            "lap": 47,
            "duration": 29.4
          }
        ],
        "russell": [
          {
            "lap": 23,
            "duration": 28.6
          },
          {
            "lap": 34,
            "duration": 28.3
          }
        ],
        "hamilton": [
          {
            "lap": 23,
            "duration": 34.8
          },
          {
            "lap": 48,
            "duration": 28.7
          }
        ],
        "gasly": [
          {
            "lap": 23,
            "duration": 33.6
          },
          {
            "lap": 48,
            "duration": 28.7
          }
        ],
        "leclerc": [
          {
            "lap": 25,
            "duration": 28.4
          },
          {
            "lap": 48,
            "duration": 28.8
          }
        ],
        "bortoleto": [
          {
            "lap": 26,
            "duration": 28.6
          },
          {
            "lap": 47,
            "duration": 29.9
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 27,
            "duration": 28.9
          },
          {
            "lap": 47,
            "duration": 32.1
          }
        ],
        "norris": [
          {
            "lap": 28,
            "duration": 28.8
          },
          {
            "lap": 38,
            "duration": 29.8
          },
          {
            "lap": 48,
            "duration": 28.4
          }
        ],
        "lawson": [
          {
            "lap": 28,
            "duration": 28.7
          },
          {
            "lap": 47,
            "duration": 28.5
          }
        ],
        "bearman": [
          {
            "lap": 29,
            "duration": 29.9
          },
          {
            "lap": 47,
            "duration": 30.2
          }
        ],
        "bottas": [
          {
            "lap": 29,
            "duration": 31.5
          },
          {
            "lap": 46,
            "duration": 29.5
          }
        ],
        "antonelli": [
          {
            "lap": 35,
            "duration": 28.9
          },
          {
            "lap": 41,
            "duration": 41.2
          },
          {
            "lap": 43,
            "duration": 33.6
          }
        ]
      },
      "stints": {
        "albon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 2,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 15,
            "lap_end": 23,
            "tyre_age": 7,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 24,
            "lap_end": 35,
            "tyre_age": 2,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 36,
            "lap_end": 40,
            "tyre_age": 3,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 41,
            "lap_end": 43,
            "tyre_age": 3,
            "stint_number": 6
          }
        ],
        "piastri": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 3,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 37,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 48,
            "lap_end": 52,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "max_verstappen": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 38,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 39,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hulkenberg": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 34,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 35,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "stroll": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 19,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 47,
            "lap_end": 51,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hadjar": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 20,
            "lap_end": 38,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 39,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 48,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "sainz": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 49,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "alonso": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 47,
            "lap_end": 51,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "ocon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 48,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "perez": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 47,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 48,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hamilton": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 23,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 24,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 49,
            "lap_end": 52,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 23,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 24,
            "lap_end": 34,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 35,
            "lap_end": 52,
            "tyre_age": 6,
            "stint_number": 3
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 23,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 24,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 49,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "leclerc": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 25,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 26,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 49,
            "lap_end": 52,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "bortoleto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 27,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 48,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 28,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 48,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "norris": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 29,
            "lap_end": 38,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 39,
            "lap_end": 48,
            "tyre_age": 6,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 49,
            "lap_end": 52,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 29,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 48,
            "lap_end": 52,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "bearman": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 30,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 48,
            "lap_end": 52,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "bottas": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 30,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 47,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 35,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 36,
            "lap_end": 41,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 42,
            "lap_end": 43,
            "tyre_age": 6,
            "stint_number": 3
          },
          {
            "compound": "MEDIUM",
            "lap_start": 44,
            "lap_end": 52,
            "tyre_age": 8,
            "stint_number": 4
          }
        ]
      }
    },
    "10": {
      "session_key": 11334,
      "pit_stops": {
        "hadjar": [
          {
            "lap": 1,
            "duration": 24.16
          },
          {
            "lap": 2,
            "duration": 23
          },
          {
            "lap": 20,
            "duration": 24.73
          }
        ],
        "bearman": [
          {
            "lap": 1,
            "duration": 26.55
          },
          {
            "lap": 20,
            "duration": 28.98
          }
        ],
        "perez": [
          {
            "lap": 1,
            "duration": 25.37
          },
          {
            "lap": 12,
            "duration": 27.62
          }
        ],
        "bottas": [
          {
            "lap": 1,
            "duration": 30.59
          },
          {
            "lap": 32,
            "duration": 25.91
          }
        ],
        "ocon": [
          {
            "lap": 1,
            "duration": 33.74
          },
          {
            "lap": 16,
            "duration": 24.12
          }
        ],
        "gasly": [
          {
            "lap": 14,
            "duration": 24.18
          }
        ],
        "sainz": [
          {
            "lap": 14,
            "duration": 34.84
          }
        ],
        "lawson": [
          {
            "lap": 15,
            "duration": 23.72
          }
        ],
        "colapinto": [
          {
            "lap": 15,
            "duration": 24.15
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 16,
            "duration": 24.81
          }
        ],
        "max_verstappen": [
          {
            "lap": 17,
            "duration": 23.13
          }
        ],
        "stroll": [
          {
            "lap": 17,
            "duration": 31.65
          }
        ],
        "antonelli": [
          {
            "lap": 18,
            "duration": 23.09
          }
        ],
        "albon": [
          {
            "lap": 18,
            "duration": 22.64
          }
        ],
        "alonso": [
          {
            "lap": 19,
            "duration": 23.19
          },
          {
            "lap": 31,
            "duration": 24.75
          }
        ],
        "leclerc": [
          {
            "lap": 20,
            "duration": 23.16
          }
        ],
        "piastri": [
          {
            "lap": 20,
            "duration": 23.29
          }
        ],
        "hamilton": [
          {
            "lap": 20,
            "duration": 32.2
          }
        ],
        "bortoleto": [
          {
            "lap": 20,
            "duration": 23.13
          }
        ],
        "hulkenberg": [
          {
            "lap": 20,
            "duration": 26.1
          }
        ],
        "norris": [
          {
            "lap": 30,
            "duration": 28.31
          }
        ]
      },
      "stints": {
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "stroll": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 18,
            "lap_end": 25,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hamilton": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "alonso": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 20,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 32,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "sainz": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 15,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 15,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "piastri": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 17,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 16,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "leclerc": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bearman": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 2,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 16,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bortoleto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "perez": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 2,
            "lap_end": 12,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 13,
            "lap_end": 13,
            "tyre_age": 1,
            "stint_number": 3
          }
        ],
        "ocon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 2,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 17,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hadjar": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 2,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 3,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 44,
            "tyre_age": 1,
            "stint_number": 4
          }
        ],
        "bottas": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 2,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 33,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 19,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 45,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "norris": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 31,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hulkenberg": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "max_verstappen": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "albon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 19,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          }
        ]
      }
    },
    "11": {
      "session_key": 11342,
      "pit_stops": {
        "stroll": [
          {
            "lap": 8,
            "duration": 21.7
          },
          {
            "lap": 37,
            "duration": 24.2
          }
        ],
        "hamilton": [
          {
            "lap": 13,
            "duration": 21.7
          },
          {
            "lap": 30,
            "duration": 21.6
          },
          {
            "lap": 56,
            "duration": 22.4
          }
        ],
        "max_verstappen": [
          {
            "lap": 14,
            "duration": 21.6
          },
          {
            "lap": 41,
            "duration": 22
          }
        ],
        "colapinto": [
          {
            "lap": 15,
            "duration": 22.9
          },
          {
            "lap": 37,
            "duration": 22.2
          }
        ],
        "piastri": [
          {
            "lap": 16,
            "duration": 21.7
          },
          {
            "lap": 33,
            "duration": 21.7
          }
        ],
        "leclerc": [
          {
            "lap": 16,
            "duration": 21.9
          },
          {
            "lap": 36,
            "duration": 21.7
          },
          {
            "lap": 56,
            "duration": 21.9
          }
        ],
        "gasly": [
          {
            "lap": 16,
            "duration": 21.4
          },
          {
            "lap": 39,
            "duration": 21.5
          },
          {
            "lap": 55,
            "duration": 21.7
          }
        ],
        "norris": [
          {
            "lap": 17,
            "duration": 22.1
          },
          {
            "lap": 56,
            "duration": 21.8
          }
        ],
        "ocon": [
          {
            "lap": 17,
            "duration": 22.5
          },
          {
            "lap": 35,
            "duration": 22.3
          }
        ],
        "sainz": [
          {
            "lap": 18,
            "duration": 21.6
          },
          {
            "lap": 43,
            "duration": 28.6
          },
          {
            "lap": 54,
            "duration": 22
          }
        ],
        "hadjar": [
          {
            "lap": 19,
            "duration": 21.8
          },
          {
            "lap": 42,
            "duration": 22.2
          }
        ],
        "hulkenberg": [
          {
            "lap": 19,
            "duration": 21.4
          },
          {
            "lap": 39,
            "duration": 22.1
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 20,
            "duration": 21.3
          }
        ],
        "lawson": [
          {
            "lap": 21,
            "duration": 21.9
          },
          {
            "lap": 42,
            "duration": 21.5
          }
        ],
        "perez": [
          {
            "lap": 21,
            "duration": 23.2
          },
          {
            "lap": 46,
            "duration": 24.2
          }
        ],
        "antonelli": [
          {
            "lap": 22,
            "duration": 21.3
          },
          {
            "lap": 53,
            "duration": 21.3
          }
        ],
        "bearman": [
          {
            "lap": 22,
            "duration": 22.5
          },
          {
            "lap": 42,
            "duration": 22.3
          }
        ],
        "albon": [
          {
            "lap": 26,
            "duration": 22.1
          },
          {
            "lap": 54,
            "duration": 22.7
          }
        ],
        "russell": [
          {
            "lap": 27,
            "duration": 22.2
          },
          {
            "lap": 54,
            "duration": 22
          }
        ],
        "bortoleto": [
          {
            "lap": 29,
            "duration": 21.7
          }
        ],
        "alonso": [
          {
            "lap": 34,
            "duration": 22.1
          },
          {
            "lap": 55,
            "duration": 22.6
          }
        ]
      },
      "stints": {
        "perez": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 2,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 47,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "stroll": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 8,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 9,
            "lap_end": 37,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 38,
            "lap_end": 69,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hamilton": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 13,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 14,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 31,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 57,
            "lap_end": 70,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "bottas": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 13,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "max_verstappen": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 15,
            "lap_end": 41,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 42,
            "lap_end": 70,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 16,
            "lap_end": 37,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 38,
            "lap_end": 68,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "piastri": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 17,
            "lap_end": 33,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 34,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "leclerc": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 17,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 37,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 57,
            "lap_end": 70,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 17,
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 40,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 56,
            "lap_end": 69,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "norris": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "UNKNOWN",
            "lap_start": 40,
            "lap_end": 56,
            "tyre_age": 1,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 57,
            "lap_end": 70,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "ocon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 35,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 36,
            "lap_end": 68,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "sainz": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 19,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 44,
            "lap_end": 54,
            "tyre_age": 3,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 55,
            "lap_end": 68,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "hadjar": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 20,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 43,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hulkenberg": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 20,
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 40,
            "lap_end": 69,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 21,
            "lap_end": 69,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 43,
            "lap_end": 69,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 54,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "bearman": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 23,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 43,
            "lap_end": 68,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "albon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 27,
            "lap_end": 54,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 55,
            "lap_end": 68,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 28,
            "lap_end": 54,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 55,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "bortoleto": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 30,
            "lap_end": 69,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "alonso": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 34,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 35,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 56,
            "lap_end": 69,
            "tyre_age": 3,
            "stint_number": 3
          }
        ]
      }
    }
  },
  "driver_images": {
    "piastri": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/mclaren/oscpia01/2026mclarenoscpia01right.webp",
    "norris": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/mclaren/lannor01/2026mclarenlannor01right.webp",
    "leclerc": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/ferrari/chalec01/2026ferrarichalec01right.webp",
    "hamilton": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/ferrari/lewham01/2026ferrarilewham01right.webp",
    "max_verstappen": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/redbullracing/maxver01/2026redbullracingmaxver01right.webp",
    "hadjar": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/redbullracing/isahad01/2026redbullracingisahad01right.webp",
    "russell": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/mercedes/georus01/2026mercedesgeorus01right.webp",
    "antonelli": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/mercedes/andant01/2026mercedesandant01right.webp",
    "sainz": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/williams/carsai01/2026williamscarsai01right.webp",
    "albon": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/williams/alealb01/2026williamsalealb01right.webp",
    "alonso": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/astonmartin/feralo01/2026astonmartinferalo01right.webp",
    "stroll": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/astonmartin/lanstr01/2026astonmartinlanstr01right.webp",
    "bearman": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/haasf1team/olibea01/2026haasf1teamolibea01right.webp",
    "ocon": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/haasf1team/estoco01/2026haasf1teamestoco01right.webp",
    "gasly": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/alpine/piegas01/2026alpinepiegas01right.webp",
    "colapinto": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/alpine/fracol01/2026alpinefracol01right.webp",
    "lawson": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/racingbulls/lialaw01/2026racingbullslialaw01right.webp",
    "arvid_lindblad": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/racingbulls/arvlin01/2026racingbullsarvlin01right.webp",
    "hulkenberg": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/audi/nichul01/2026audinichul01right.webp",
    "bortoleto": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/audi/gabbor01/2026audigabbor01right.webp",
    "bottas": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/cadillac/valbot01/2026cadillacvalbot01right.webp",
    "perez": "https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/cadillac/serper01/2026cadillacserper01right.webp"
  },
  "track_layouts": {
    "australia": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmelbournedetailed.webp"
    },
    "china": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackshanghaidetailed.webp"
    },
    "japan": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026tracksuzukadetailed.webp"
    },
    "miami": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmiamidetailed.webp"
    },
    "canada": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmontrealdetailed.webp"
    },
    "monaco": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmontecarlodetailed.webp"
    },
    "spain": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackcatalunyadetailed.webp"
    },
    "austria": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackspielbergdetailed.webp"
    },
    "britain": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026tracksilverstonedetailed.webp"
    },
    "belgium": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackspafrancorchampsdetailed.webp"
    },
    "hungary": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackhungaroringdetailed.webp"
    },
    "netherlands": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackzandvoortdetailed.webp"
    },
    "italy": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmonzadetailed.webp"
    },
    "madrid": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmadriddetailed.webp"
    },
    "azerbaijan": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackbakudetailed.webp"
    },
    "singapore": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026tracksingaporedetailed.webp"
    },
    "americas": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackaustindetailed.webp"
    },
    "mexico": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackmexicocitydetailed.webp"
    },
    "brazil": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackinterlagosdetailed.webp"
    },
    "las_vegas": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026tracklasvegasdetailed.webp"
    },
    "qatar": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026tracklusaildetailed.webp"
    },
    "abu_dhabi": {
      "img_url": "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026trackyasmarinadetailed.webp"
    }
  },
  "team_cars": {
    "mclaren": "https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/mclaren/2026mclarencarright.webp",
    "ferrari": "https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/ferrari/2026ferraricarright.webp",
    "red_bull": "https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/redbullracing/2026redbullracingcarright.webp",
    "mercedes": "https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/mercedes/2026mercedescarright.webp",
    "williams": "https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/williams/2026williamscarright.webp",
    "aston_martin": "https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/astonmartin/2026astonmartincarright.webp",
    "haas": "https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/haasf1team/2026haasf1teamcarright.webp",
    "alpine": "https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/alpine/2026alpinecarright.webp",
    "rb": "https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/racingbulls/2026racingbullscarright.webp",
    "audi": "https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/audi/2026audicarright.webp",
    "cadillac": "https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/cadillac/2026cadillaccarright.webp"
  },
  "news": [
    {
      "title": "5 Winners and 5 Losers from the 2026 season so far",
      "url": "https://www.formula1.com/en/latest/article/5-winners-and-5-losers-from-the-2026-f1-season-so-far.pG84JLgJke2l9rCieMMLQ",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Antonelli opens up on impact of 2025 struggles",
      "url": "https://www.formula1.com/en/latest/article/i-let-the-pressure-destroy-me-antonelli-opens-up-on-2025-struggles-and-how-they-made-him-stronger.2unpygSUVSbHqMUuMiFu5A",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Why Vowles is convinced ‘it will all come good’ at Williams",
      "url": "https://www.formula1.com/en/latest/article/exclusive-why-james-vowles-is-convinced-it-will-all-come-good-at-williams.7j71h5kqvc0UmG3vg2gUuu",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "5 things we learned from the first half of 2026",
      "url": "https://www.formula1.com/en/latest/article/from-antonellis-rise-to-a-fascinating-development-war-5-things-we-learned-from-the-first-half-of-2026.6D0nJLTfbGPmpmOWTGqDAi",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Our writers reflect on the 2026 season so far",
      "url": "https://www.formula1.com/en/latest/article/best-races-star-performers-and-drivers-under-scrutiny-our-writers-reflect-on-2026-so-far-and-share-their-bold-predictions.3rfEllKHGyP4kgEkT4FPSi",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "How F1 drivers recharge over the summer break",
      "url": "https://www.formula1.com/en/latest/article/how-do-f1-drivers-recharge-over-the-summer-break.6SJztdPCw3WRtPlqDlXVQq",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "The 5 most dramatic storylines of 2026 so far",
      "url": "https://www.formula1.com/en/latest/article/from-a-history-making-championship-leader-to-aston-martins-struggles-the-5-most-dramatic-storylines-of-2026-so-far.1Da1GcPXIEluDYcHYQxpba",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "How Bearman is inspiring Ferrari’s latest F1 prospect",
      "url": "https://www.formula1.com/en/latest/article/how-ferrari-prospect-camara-is-using-bearmans-story-as-motivation-amid-f1-push.4XgAvINzIPDFTeTxqrxQ6i",
      "image": null,
      "date": null,
      "tag": "F1 News"
    }
  ],
  "_health": {
    "live": "jolpica:11rounds",
    "results": "jolpica:11races",
    "news": "scraped:8",
    "scrapedAt": "2026-08-04T09:40:54.204Z",
    "openf1": "enriched:8races",
    "bios": "jolpica:31",
    "circuits": "jolpica:24",
    "weather": "outside_horizon",
    "subrequests": 34
  },
  "_sanity": {
    "drivers_full_grid": true,
    "grid_size": 22,
    "prob_sum_ok": true,
    "points_cap_ok": true,
    "champion_prob_ok": true,
    "prob_sum": 1,
    "max_points": 383.8,
    "passed": true
  },
  "circuit_paths": {
    "australia": {
      "points": [
        [
          -1497,
          -4333
        ],
        [
          -1800,
          -4045
        ],
        [
          -2079,
          -3780
        ],
        [
          -2419,
          -3456
        ],
        [
          -2760,
          -3133
        ],
        [
          -3098,
          -2812
        ],
        [
          -3331,
          -2593
        ],
        [
          -3623,
          -2295
        ],
        [
          -3744,
          -2124
        ],
        [
          -3817,
          -1827
        ],
        [
          -3761,
          -1528
        ],
        [
          -3696,
          -1138
        ],
        [
          -3901,
          -448
        ],
        [
          -4092,
          -209
        ],
        [
          -4312,
          -3
        ],
        [
          -4532,
          186
        ],
        [
          -4785,
          415
        ],
        [
          -5029,
          649
        ],
        [
          -5178,
          798
        ],
        [
          -5578,
          1221
        ],
        [
          -5838,
          1515
        ],
        [
          -6022,
          1735
        ],
        [
          -6499,
          2359
        ],
        [
          -6630,
          2542
        ],
        [
          -6915,
          2963
        ],
        [
          -7146,
          3314
        ],
        [
          -7261,
          3504
        ],
        [
          -7344,
          3712
        ],
        [
          -7356,
          3843
        ],
        [
          -7338,
          3959
        ],
        [
          -7268,
          4078
        ],
        [
          -7149,
          4148
        ],
        [
          -7008,
          4177
        ],
        [
          -6722,
          4214
        ],
        [
          -6517,
          4237
        ],
        [
          -6373,
          4274
        ],
        [
          -6213,
          4352
        ],
        [
          -6037,
          4538
        ],
        [
          -5986,
          4657
        ],
        [
          -5957,
          4928
        ],
        [
          -5977,
          5134
        ],
        [
          -6016,
          5397
        ],
        [
          -6047,
          5586
        ],
        [
          -6090,
          6138
        ],
        [
          -6062,
          6365
        ],
        [
          -5909,
          6740
        ],
        [
          -5699,
          6973
        ],
        [
          -5440,
          7183
        ],
        [
          -5215,
          7346
        ],
        [
          -4879,
          7562
        ],
        [
          -4630,
          7694
        ],
        [
          -4383,
          7808
        ],
        [
          -4158,
          7907
        ],
        [
          -3721,
          8097
        ],
        [
          -3302,
          8289
        ],
        [
          -3014,
          8440
        ],
        [
          -2636,
          8665
        ],
        [
          -2427,
          8705
        ],
        [
          -2214,
          8652
        ],
        [
          -1908,
          8443
        ],
        [
          -1642,
          8307
        ],
        [
          -1195,
          8195
        ],
        [
          -749,
          8105
        ],
        [
          -494,
          8028
        ],
        [
          -22,
          7795
        ],
        [
          351,
          7435
        ],
        [
          634,
          6995
        ],
        [
          749,
          6726
        ],
        [
          877,
          6299
        ],
        [
          978,
          5806
        ],
        [
          1020,
          5435
        ],
        [
          1014,
          5072
        ],
        [
          978,
          4596
        ],
        [
          806,
          3886
        ],
        [
          613,
          3320
        ],
        [
          362,
          2662
        ],
        [
          242,
          2390
        ],
        [
          143,
          2002
        ],
        [
          112,
          1636
        ],
        [
          159,
          976
        ],
        [
          253,
          489
        ],
        [
          384,
          99
        ],
        [
          576,
          -319
        ],
        [
          1295,
          -1301
        ],
        [
          1575,
          -1566
        ],
        [
          1855,
          -1810
        ],
        [
          2347,
          -2187
        ],
        [
          2596,
          -2319
        ],
        [
          2907,
          -2350
        ],
        [
          3366,
          -2292
        ],
        [
          3593,
          -2277
        ],
        [
          3955,
          -2325
        ],
        [
          4286,
          -2533
        ],
        [
          4642,
          -2839
        ],
        [
          4869,
          -3027
        ],
        [
          5124,
          -3241
        ],
        [
          5500,
          -3562
        ],
        [
          5866,
          -3916
        ],
        [
          6072,
          -4174
        ],
        [
          6328,
          -4595
        ],
        [
          6505,
          -4990
        ],
        [
          6644,
          -5369
        ],
        [
          6802,
          -5829
        ],
        [
          6925,
          -6210
        ],
        [
          7056,
          -6614
        ],
        [
          7178,
          -6996
        ],
        [
          7255,
          -7277
        ],
        [
          7311,
          -7573
        ],
        [
          7356,
          -7918
        ],
        [
          7333,
          -8034
        ],
        [
          7221,
          -8159
        ],
        [
          7061,
          -8221
        ],
        [
          6861,
          -8281
        ],
        [
          6707,
          -8323
        ],
        [
          6509,
          -8375
        ],
        [
          6208,
          -8446
        ],
        [
          5933,
          -8516
        ],
        [
          5631,
          -8593
        ],
        [
          5214,
          -8699
        ],
        [
          4965,
          -8705
        ],
        [
          4722,
          -8620
        ],
        [
          4528,
          -8463
        ],
        [
          4367,
          -8264
        ],
        [
          4242,
          -8061
        ],
        [
          4074,
          -7727
        ],
        [
          3972,
          -7513
        ],
        [
          3808,
          -7171
        ],
        [
          3724,
          -7039
        ],
        [
          3552,
          -6829
        ],
        [
          3376,
          -6779
        ],
        [
          3249,
          -6821
        ],
        [
          3145,
          -6903
        ],
        [
          3042,
          -7039
        ],
        [
          2966,
          -7166
        ],
        [
          2872,
          -7309
        ],
        [
          2621,
          -7513
        ],
        [
          2520,
          -7562
        ],
        [
          2325,
          -7608
        ],
        [
          2117,
          -7591
        ],
        [
          1894,
          -7520
        ],
        [
          1597,
          -7322
        ],
        [
          1349,
          -7092
        ],
        [
          1180,
          -6927
        ],
        [
          866,
          -6620
        ],
        [
          634,
          -6392
        ],
        [
          308,
          -6073
        ],
        [
          -30,
          -5743
        ],
        [
          -387,
          -5391
        ],
        [
          -771,
          -5023
        ],
        [
          -1334,
          -4488
        ]
      ],
      "length": 17410,
      "closure": 0.013,
      "driver_number": 1,
      "lap": 52
    },
    "china": {
      "points": [
        [
          916,
          -3279
        ],
        [
          429,
          -3385
        ],
        [
          145,
          -3447
        ],
        [
          -548,
          -3599
        ],
        [
          -1017,
          -3701
        ],
        [
          -1486,
          -3803
        ],
        [
          -2200,
          -3959
        ],
        [
          -2971,
          -4127
        ],
        [
          -3372,
          -4215
        ],
        [
          -3909,
          -4331
        ],
        [
          -4168,
          -4344
        ],
        [
          -4632,
          -4175
        ],
        [
          -4940,
          -3814
        ],
        [
          -5019,
          -3547
        ],
        [
          -5018,
          -3318
        ],
        [
          -4967,
          -3115
        ],
        [
          -4850,
          -2930
        ],
        [
          -4725,
          -2831
        ],
        [
          -4418,
          -2756
        ],
        [
          -4309,
          -2769
        ],
        [
          -4126,
          -2866
        ],
        [
          -4036,
          -3071
        ],
        [
          -4081,
          -3264
        ],
        [
          -4164,
          -3594
        ],
        [
          -4047,
          -3775
        ],
        [
          -3940,
          -3827
        ],
        [
          -3812,
          -3835
        ],
        [
          -3406,
          -3307
        ],
        [
          -3380,
          -3059
        ],
        [
          -3463,
          -2773
        ],
        [
          -3698,
          -2475
        ],
        [
          -3899,
          -2240
        ],
        [
          -4067,
          -2041
        ],
        [
          -4379,
          -1677
        ],
        [
          -4600,
          -1419
        ],
        [
          -4826,
          -1152
        ],
        [
          -5151,
          -772
        ],
        [
          -5439,
          -320
        ],
        [
          -5561,
          50
        ],
        [
          -5774,
          696
        ],
        [
          -5899,
          1075
        ],
        [
          -5981,
          1322
        ],
        [
          -6053,
          1541
        ],
        [
          -6087,
          1645
        ],
        [
          -6093,
          1763
        ],
        [
          -6036,
          1855
        ],
        [
          -5966,
          1893
        ],
        [
          -5753,
          1835
        ],
        [
          -5492,
          1649
        ],
        [
          -4880,
          893
        ],
        [
          -4733,
          631
        ],
        [
          -4461,
          141
        ],
        [
          -4354,
          -51
        ],
        [
          -4149,
          -417
        ],
        [
          -3620,
          -1002
        ],
        [
          -3364,
          -1114
        ],
        [
          -3060,
          -1169
        ],
        [
          -2597,
          -1107
        ],
        [
          -2301,
          -963
        ],
        [
          -2008,
          -694
        ],
        [
          -1820,
          -376
        ],
        [
          -1664,
          -52
        ],
        [
          -1534,
          219
        ],
        [
          -1255,
          552
        ],
        [
          -977,
          682
        ],
        [
          -739,
          708
        ],
        [
          -384,
          613
        ],
        [
          -228,
          507
        ],
        [
          -70,
          328
        ],
        [
          73,
          42
        ],
        [
          239,
          -322
        ],
        [
          331,
          -487
        ],
        [
          595,
          -575
        ],
        [
          729,
          -516
        ],
        [
          817,
          -421
        ],
        [
          968,
          -234
        ],
        [
          1106,
          -62
        ],
        [
          1217,
          91
        ],
        [
          1183,
          385
        ],
        [
          1036,
          635
        ],
        [
          834,
          980
        ],
        [
          602,
          1377
        ],
        [
          400,
          1722
        ],
        [
          223,
          2024
        ],
        [
          5,
          2395
        ],
        [
          -253,
          2835
        ],
        [
          -430,
          3136
        ],
        [
          -693,
          3585
        ],
        [
          -959,
          4032
        ],
        [
          -1026,
          4144
        ],
        [
          -1141,
          4275
        ],
        [
          -1238,
          4276
        ],
        [
          -1389,
          4163
        ],
        [
          -1537,
          3974
        ],
        [
          -1596,
          3920
        ],
        [
          -2051,
          3970
        ],
        [
          -2173,
          4115
        ],
        [
          -2294,
          4377
        ],
        [
          -2326,
          4574
        ],
        [
          -2208,
          5052
        ],
        [
          -2096,
          5192
        ],
        [
          -1809,
          5369
        ],
        [
          -1188,
          5414
        ],
        [
          -995,
          5360
        ],
        [
          -597,
          5116
        ],
        [
          -307,
          4736
        ],
        [
          -75,
          4374
        ],
        [
          124,
          4062
        ],
        [
          689,
          3177
        ],
        [
          974,
          2731
        ],
        [
          1103,
          2529
        ],
        [
          1367,
          2116
        ],
        [
          1680,
          1627
        ],
        [
          1986,
          1147
        ],
        [
          2299,
          658
        ],
        [
          2520,
          312
        ],
        [
          2773,
          -84
        ],
        [
          3290,
          -893
        ],
        [
          3440,
          -1128
        ],
        [
          3672,
          -1491
        ],
        [
          3925,
          -1886
        ],
        [
          4281,
          -2442
        ],
        [
          4545,
          -2855
        ],
        [
          4900,
          -3411
        ],
        [
          5094,
          -3714
        ],
        [
          5229,
          -3925
        ],
        [
          5595,
          -4498
        ],
        [
          5778,
          -4784
        ],
        [
          5859,
          -4911
        ],
        [
          5972,
          -5088
        ],
        [
          6037,
          -5189
        ],
        [
          6094,
          -5293
        ],
        [
          6049,
          -5394
        ],
        [
          5974,
          -5413
        ],
        [
          5926,
          -5400
        ],
        [
          5703,
          -5288
        ],
        [
          5594,
          -5217
        ],
        [
          5175,
          -4825
        ],
        [
          4921,
          -4466
        ],
        [
          4649,
          -4083
        ],
        [
          4361,
          -3674
        ],
        [
          4110,
          -3313
        ],
        [
          3968,
          -3107
        ],
        [
          3757,
          -2803
        ],
        [
          3431,
          -2720
        ],
        [
          3217,
          -2771
        ],
        [
          2915,
          -2842
        ],
        [
          2202,
          -2999
        ],
        [
          1772,
          -3092
        ],
        [
          1137,
          -3231
        ]
      ],
      "length": 12187,
      "closure": 0.019,
      "driver_number": 3,
      "lap": 39
    },
    "japan": {
      "points": [
        [
          5733,
          1147
        ],
        [
          5984,
          854
        ],
        [
          6217,
          582
        ],
        [
          6623,
          108
        ],
        [
          6965,
          -293
        ],
        [
          7289,
          -671
        ],
        [
          7742,
          -1202
        ],
        [
          7998,
          -1505
        ],
        [
          8352,
          -1922
        ],
        [
          8705,
          -2335
        ],
        [
          9145,
          -2853
        ],
        [
          9443,
          -3206
        ],
        [
          9807,
          -3727
        ],
        [
          9874,
          -4092
        ],
        [
          9816,
          -4437
        ],
        [
          9722,
          -4726
        ],
        [
          9395,
          -5027
        ],
        [
          9196,
          -5068
        ],
        [
          8842,
          -4999
        ],
        [
          8652,
          -4854
        ],
        [
          8524,
          -4684
        ],
        [
          8301,
          -4311
        ],
        [
          8163,
          -4066
        ],
        [
          7980,
          -3775
        ],
        [
          7601,
          -3369
        ],
        [
          7379,
          -3254
        ],
        [
          6978,
          -3194
        ],
        [
          6613,
          -3121
        ],
        [
          6356,
          -2938
        ],
        [
          6183,
          -2638
        ],
        [
          6091,
          -2320
        ],
        [
          6029,
          -2104
        ],
        [
          5696,
          -1633
        ],
        [
          5531,
          -1542
        ],
        [
          5154,
          -1468
        ],
        [
          4672,
          -1421
        ],
        [
          4511,
          -1367
        ],
        [
          4322,
          -1255
        ],
        [
          4097,
          -1034
        ],
        [
          3998,
          -864
        ],
        [
          3957,
          -734
        ],
        [
          4028,
          -287
        ],
        [
          4118,
          -66
        ],
        [
          4264,
          321
        ],
        [
          4228,
          783
        ],
        [
          4031,
          1053
        ],
        [
          3765,
          1219
        ],
        [
          3201,
          1450
        ],
        [
          2929,
          1507
        ],
        [
          2606,
          1539
        ],
        [
          2025,
          1488
        ],
        [
          1676,
          1359
        ],
        [
          1232,
          1102
        ],
        [
          1009,
          900
        ],
        [
          794,
          628
        ],
        [
          402,
          108
        ],
        [
          228,
          -104
        ],
        [
          60,
          -303
        ],
        [
          -334,
          -504
        ],
        [
          -681,
          -564
        ],
        [
          -929,
          -604
        ],
        [
          -1617,
          -566
        ],
        [
          -1763,
          -406
        ],
        [
          -1818,
          -270
        ],
        [
          -1870,
          95
        ],
        [
          -1930,
          387
        ],
        [
          -2005,
          733
        ],
        [
          -2115,
          1240
        ],
        [
          -2181,
          1547
        ],
        [
          -2225,
          1767
        ],
        [
          -2300,
          2175
        ],
        [
          -2322,
          2467
        ],
        [
          -2277,
          2759
        ],
        [
          -2161,
          3070
        ],
        [
          -2076,
          3249
        ],
        [
          -1957,
          3543
        ],
        [
          -1962,
          3721
        ],
        [
          -2037,
          3826
        ],
        [
          -2158,
          3871
        ],
        [
          -2268,
          3850
        ],
        [
          -2363,
          3785
        ],
        [
          -2468,
          3635
        ],
        [
          -2535,
          3503
        ],
        [
          -2634,
          3319
        ],
        [
          -2807,
          3030
        ],
        [
          -3010,
          2720
        ],
        [
          -3124,
          2555
        ],
        [
          -3534,
          2133
        ],
        [
          -3900,
          1922
        ],
        [
          -4366,
          1830
        ],
        [
          -5155,
          1842
        ],
        [
          -5424,
          1896
        ],
        [
          -5890,
          2040
        ],
        [
          -6464,
          2278
        ],
        [
          -6809,
          2493
        ],
        [
          -7076,
          2712
        ],
        [
          -7517,
          3277
        ],
        [
          -7794,
          3892
        ],
        [
          -7959,
          4277
        ],
        [
          -8178,
          4699
        ],
        [
          -8451,
          4976
        ],
        [
          -8766,
          5069
        ],
        [
          -9179,
          5050
        ],
        [
          -9319,
          5020
        ],
        [
          -9654,
          4871
        ],
        [
          -9824,
          4663
        ],
        [
          -9873,
          4517
        ],
        [
          -9828,
          4110
        ],
        [
          -9750,
          3947
        ],
        [
          -9653,
          3809
        ],
        [
          -9158,
          3364
        ],
        [
          -8883,
          3161
        ],
        [
          -8677,
          3017
        ],
        [
          -8174,
          2695
        ],
        [
          -7889,
          2529
        ],
        [
          -7532,
          2335
        ],
        [
          -6868,
          2007
        ],
        [
          -6497,
          1854
        ],
        [
          -5886,
          1635
        ],
        [
          -5100,
          1369
        ],
        [
          -4715,
          1240
        ],
        [
          -4316,
          1106
        ],
        [
          -2911,
          635
        ],
        [
          -2435,
          475
        ],
        [
          -2031,
          339
        ],
        [
          -1500,
          185
        ],
        [
          -1166,
          224
        ],
        [
          -745,
          380
        ],
        [
          -332,
          593
        ],
        [
          181,
          957
        ],
        [
          603,
          1345
        ],
        [
          880,
          1609
        ],
        [
          1116,
          1847
        ],
        [
          1435,
          2165
        ],
        [
          1694,
          2381
        ],
        [
          1810,
          2437
        ],
        [
          2050,
          2468
        ],
        [
          2153,
          2423
        ],
        [
          2297,
          2305
        ],
        [
          2467,
          2260
        ],
        [
          2644,
          2307
        ],
        [
          2803,
          2439
        ],
        [
          2939,
          2561
        ],
        [
          3162,
          2686
        ],
        [
          3482,
          2729
        ],
        [
          3975,
          2653
        ],
        [
          4371,
          2494
        ],
        [
          4686,
          2290
        ],
        [
          5057,
          1936
        ],
        [
          5580,
          1327
        ]
      ],
      "length": 19747,
      "closure": 0.012,
      "driver_number": 1,
      "lap": 52
    },
    "miami": {
      "points": [
        [
          -893,
          1766
        ],
        [
          -675,
          1629
        ],
        [
          -278,
          1379
        ],
        [
          478,
          920
        ],
        [
          772,
          756
        ],
        [
          1184,
          541
        ],
        [
          1581,
          332
        ],
        [
          1787,
          194
        ],
        [
          1922,
          25
        ],
        [
          1879,
          -250
        ],
        [
          1810,
          -335
        ],
        [
          1744,
          -403
        ],
        [
          1433,
          -757
        ],
        [
          1346,
          -1029
        ],
        [
          1334,
          -1380
        ],
        [
          1201,
          -1799
        ],
        [
          939,
          -2084
        ],
        [
          777,
          -2186
        ],
        [
          374,
          -2353
        ],
        [
          106,
          -2410
        ],
        [
          -189,
          -2429
        ],
        [
          -643,
          -2374
        ],
        [
          -913,
          -2284
        ],
        [
          -1096,
          -2196
        ],
        [
          -1594,
          -1894
        ],
        [
          -1779,
          -1776
        ],
        [
          -2173,
          -1524
        ],
        [
          -2551,
          -1284
        ],
        [
          -2884,
          -1094
        ],
        [
          -3281,
          -902
        ],
        [
          -3583,
          -834
        ],
        [
          -3806,
          -833
        ],
        [
          -4362,
          -1038
        ],
        [
          -4514,
          -1128
        ],
        [
          -5061,
          -1237
        ],
        [
          -5436,
          -1086
        ],
        [
          -5645,
          -930
        ],
        [
          -6016,
          -663
        ],
        [
          -6473,
          -591
        ],
        [
          -6843,
          -685
        ],
        [
          -7064,
          -797
        ],
        [
          -7443,
          -1251
        ],
        [
          -7491,
          -1514
        ],
        [
          -7473,
          -1681
        ],
        [
          -7342,
          -1911
        ],
        [
          -7161,
          -2007
        ],
        [
          -7004,
          -2033
        ],
        [
          -6734,
          -2042
        ],
        [
          -6558,
          -2045
        ],
        [
          -6225,
          -2074
        ],
        [
          -5773,
          -2145
        ],
        [
          -5405,
          -2222
        ],
        [
          -4878,
          -2290
        ],
        [
          -4506,
          -2284
        ],
        [
          -4149,
          -2266
        ],
        [
          -3572,
          -2249
        ],
        [
          -3050,
          -2241
        ],
        [
          -2584,
          -2236
        ],
        [
          -2064,
          -2270
        ],
        [
          -1495,
          -2436
        ],
        [
          -1206,
          -2539
        ],
        [
          -482,
          -2766
        ],
        [
          12,
          -2880
        ],
        [
          370,
          -2926
        ],
        [
          1253,
          -2919
        ],
        [
          1607,
          -2879
        ],
        [
          1955,
          -2815
        ],
        [
          2447,
          -2679
        ],
        [
          2780,
          -2568
        ],
        [
          3045,
          -2478
        ],
        [
          3689,
          -2260
        ],
        [
          4124,
          -2105
        ],
        [
          4623,
          -1900
        ],
        [
          5221,
          -1625
        ],
        [
          5594,
          -1446
        ],
        [
          6005,
          -1229
        ],
        [
          6223,
          -1098
        ],
        [
          6458,
          -915
        ],
        [
          6606,
          -631
        ],
        [
          6568,
          -512
        ],
        [
          6477,
          -406
        ],
        [
          6355,
          -304
        ],
        [
          6248,
          -214
        ],
        [
          6101,
          -33
        ],
        [
          6049,
          212
        ],
        [
          6071,
          312
        ],
        [
          6140,
          448
        ],
        [
          6263,
          568
        ],
        [
          6365,
          616
        ],
        [
          6497,
          644
        ],
        [
          6744,
          651
        ],
        [
          6886,
          657
        ],
        [
          7180,
          772
        ],
        [
          7387,
          1004
        ],
        [
          7447,
          1120
        ],
        [
          7491,
          1280
        ],
        [
          7467,
          1403
        ],
        [
          7351,
          1473
        ],
        [
          7307,
          1587
        ],
        [
          7352,
          1788
        ],
        [
          7416,
          2001
        ],
        [
          7486,
          2215
        ],
        [
          7469,
          2320
        ],
        [
          7427,
          2369
        ],
        [
          7296,
          2447
        ],
        [
          7224,
          2472
        ],
        [
          7093,
          2501
        ],
        [
          6855,
          2519
        ],
        [
          6744,
          2523
        ],
        [
          6358,
          2534
        ],
        [
          5885,
          2549
        ],
        [
          5593,
          2558
        ],
        [
          5282,
          2567
        ],
        [
          4835,
          2577
        ],
        [
          4516,
          2584
        ],
        [
          4089,
          2593
        ],
        [
          3501,
          2606
        ],
        [
          3092,
          2615
        ],
        [
          2623,
          2629
        ],
        [
          2040,
          2649
        ],
        [
          1646,
          2663
        ],
        [
          1376,
          2672
        ],
        [
          -29,
          2722
        ],
        [
          -474,
          2737
        ],
        [
          -931,
          2753
        ],
        [
          -1712,
          2771
        ],
        [
          -2128,
          2779
        ],
        [
          -2886,
          2793
        ],
        [
          -3442,
          2803
        ],
        [
          -3846,
          2814
        ],
        [
          -4454,
          2864
        ],
        [
          -4771,
          2896
        ],
        [
          -4959,
          2914
        ],
        [
          -5361,
          2927
        ],
        [
          -5550,
          2893
        ],
        [
          -5666,
          2819
        ],
        [
          -5695,
          2611
        ],
        [
          -5608,
          2473
        ],
        [
          -5518,
          2395
        ],
        [
          -5247,
          2231
        ],
        [
          -5107,
          2142
        ],
        [
          -4901,
          2021
        ],
        [
          -4610,
          1940
        ],
        [
          -4277,
          1996
        ],
        [
          -3881,
          2173
        ],
        [
          -3409,
          2387
        ],
        [
          -3041,
          2466
        ],
        [
          -2619,
          2484
        ],
        [
          -1844,
          2300
        ],
        [
          -1089,
          1888
        ]
      ],
      "length": 14982,
      "closure": 0.015,
      "driver_number": 1,
      "lap": 35
    },
    "canada": {
      "points": [
        [
          2664,
          -6585
        ],
        [
          2675,
          -6787
        ],
        [
          2625,
          -7613
        ],
        [
          2585,
          -7963
        ],
        [
          2565,
          -8398
        ],
        [
          2602,
          -8586
        ],
        [
          2722,
          -8774
        ],
        [
          2868,
          -8888
        ],
        [
          2993,
          -8959
        ],
        [
          3131,
          -9058
        ],
        [
          3169,
          -9165
        ],
        [
          3159,
          -9251
        ],
        [
          3123,
          -9347
        ],
        [
          3071,
          -9422
        ],
        [
          3034,
          -9454
        ],
        [
          2927,
          -9500
        ],
        [
          2814,
          -9515
        ],
        [
          2684,
          -9516
        ],
        [
          2520,
          -9504
        ],
        [
          2362,
          -9476
        ],
        [
          2141,
          -9412
        ],
        [
          1943,
          -9346
        ],
        [
          1663,
          -9229
        ],
        [
          1246,
          -8974
        ],
        [
          1051,
          -8832
        ],
        [
          827,
          -8658
        ],
        [
          696,
          -8552
        ],
        [
          492,
          -8388
        ],
        [
          356,
          -8276
        ],
        [
          139,
          -8058
        ],
        [
          54,
          -7920
        ],
        [
          27,
          -7712
        ],
        [
          48,
          -7555
        ],
        [
          42,
          -7372
        ],
        [
          16,
          -7244
        ],
        [
          -109,
          -7021
        ],
        [
          -252,
          -6841
        ],
        [
          -362,
          -6705
        ],
        [
          -538,
          -6495
        ],
        [
          -794,
          -6244
        ],
        [
          -1074,
          -6020
        ],
        [
          -1176,
          -5937
        ],
        [
          -1473,
          -5569
        ],
        [
          -1600,
          -5234
        ],
        [
          -1658,
          -4886
        ],
        [
          -1653,
          -4317
        ],
        [
          -1635,
          -4018
        ],
        [
          -1631,
          -3825
        ],
        [
          -1656,
          -3618
        ],
        [
          -1734,
          -3417
        ],
        [
          -1837,
          -3309
        ],
        [
          -1972,
          -3263
        ],
        [
          -2095,
          -3263
        ],
        [
          -2244,
          -3274
        ],
        [
          -2374,
          -3267
        ],
        [
          -2454,
          -3248
        ],
        [
          -2590,
          -3177
        ],
        [
          -2714,
          -3062
        ],
        [
          -2873,
          -2814
        ],
        [
          -2959,
          -2556
        ],
        [
          -3006,
          -2301
        ],
        [
          -3051,
          -1938
        ],
        [
          -3081,
          -1647
        ],
        [
          -3112,
          -1297
        ],
        [
          -3144,
          -853
        ],
        [
          -3160,
          -516
        ],
        [
          -3168,
          -106
        ],
        [
          -3156,
          361
        ],
        [
          -3129,
          751
        ],
        [
          -3106,
          979
        ],
        [
          -3064,
          1305
        ],
        [
          -3013,
          1613
        ],
        [
          -2946,
          1938
        ],
        [
          -2731,
          2862
        ],
        [
          -2651,
          3124
        ],
        [
          -2545,
          3272
        ],
        [
          -2437,
          3320
        ],
        [
          -2258,
          3367
        ],
        [
          -2079,
          3468
        ],
        [
          -1958,
          3584
        ],
        [
          -1878,
          3698
        ],
        [
          -1764,
          3952
        ],
        [
          -1721,
          4090
        ],
        [
          -1620,
          4490
        ],
        [
          -1563,
          4722
        ],
        [
          -1501,
          5007
        ],
        [
          -1446,
          5311
        ],
        [
          -1390,
          5657
        ],
        [
          -1340,
          6000
        ],
        [
          -1301,
          6352
        ],
        [
          -1277,
          6808
        ],
        [
          -1273,
          7385
        ],
        [
          -1299,
          7784
        ],
        [
          -1335,
          8007
        ],
        [
          -1471,
          8603
        ],
        [
          -1522,
          8827
        ],
        [
          -1545,
          8937
        ],
        [
          -1588,
          9166
        ],
        [
          -1594,
          9359
        ],
        [
          -1555,
          9449
        ],
        [
          -1433,
          9516
        ],
        [
          -1257,
          9420
        ],
        [
          -1214,
          9336
        ],
        [
          -1171,
          9209
        ],
        [
          -1144,
          9080
        ],
        [
          -1125,
          8913
        ],
        [
          -1115,
          8780
        ],
        [
          -1080,
          8508
        ],
        [
          -1023,
          8291
        ],
        [
          -915,
          8005
        ],
        [
          -867,
          7891
        ],
        [
          -772,
          7666
        ],
        [
          -646,
          7369
        ],
        [
          -538,
          7120
        ],
        [
          -364,
          6721
        ],
        [
          -184,
          6302
        ],
        [
          -59,
          6002
        ],
        [
          78,
          5662
        ],
        [
          217,
          5293
        ],
        [
          322,
          4978
        ],
        [
          536,
          4216
        ],
        [
          615,
          3896
        ],
        [
          747,
          3335
        ],
        [
          790,
          3152
        ],
        [
          889,
          2729
        ],
        [
          988,
          2302
        ],
        [
          1106,
          1800
        ],
        [
          1242,
          1205
        ],
        [
          1341,
          767
        ],
        [
          1437,
          359
        ],
        [
          1518,
          19
        ],
        [
          1607,
          -350
        ],
        [
          1710,
          -785
        ],
        [
          1809,
          -1205
        ],
        [
          1864,
          -1459
        ],
        [
          1883,
          -1728
        ],
        [
          1824,
          -1896
        ],
        [
          1756,
          -2008
        ],
        [
          1694,
          -2154
        ],
        [
          1676,
          -2330
        ],
        [
          1693,
          -2567
        ],
        [
          1753,
          -2867
        ],
        [
          1830,
          -3147
        ],
        [
          1901,
          -3389
        ],
        [
          2002,
          -3757
        ],
        [
          2136,
          -4283
        ],
        [
          2223,
          -4624
        ],
        [
          2353,
          -5120
        ],
        [
          2491,
          -5650
        ],
        [
          2646,
          -6413
        ]
      ],
      "length": 19032,
      "closure": 0.009,
      "driver_number": 1,
      "lap": 36
    },
    "spain": {
      "points": [
        [
          3136,
          1148
        ],
        [
          2931,
          826
        ],
        [
          2640,
          366
        ],
        [
          2392,
          -24
        ],
        [
          2190,
          -341
        ],
        [
          2007,
          -630
        ],
        [
          1725,
          -1068
        ],
        [
          1535,
          -1355
        ],
        [
          1272,
          -1749
        ],
        [
          1089,
          -2022
        ],
        [
          558,
          -2813
        ],
        [
          190,
          -3370
        ],
        [
          -40,
          -3759
        ],
        [
          -321,
          -4260
        ],
        [
          -465,
          -4515
        ],
        [
          -728,
          -4920
        ],
        [
          -876,
          -5096
        ],
        [
          -1099,
          -5274
        ],
        [
          -1299,
          -5336
        ],
        [
          -1573,
          -5281
        ],
        [
          -1710,
          -5219
        ],
        [
          -1943,
          -5126
        ],
        [
          -2120,
          -5113
        ],
        [
          -2313,
          -5163
        ],
        [
          -2435,
          -5221
        ],
        [
          -2628,
          -5341
        ],
        [
          -2948,
          -5561
        ],
        [
          -3198,
          -5695
        ],
        [
          -3440,
          -5774
        ],
        [
          -3655,
          -5797
        ],
        [
          -3843,
          -5783
        ],
        [
          -4223,
          -5656
        ],
        [
          -4434,
          -5508
        ],
        [
          -4578,
          -5342
        ],
        [
          -4738,
          -5017
        ],
        [
          -4791,
          -4781
        ],
        [
          -4804,
          -4400
        ],
        [
          -4747,
          -3965
        ],
        [
          -4607,
          -3479
        ],
        [
          -4457,
          -3194
        ],
        [
          -4248,
          -2886
        ],
        [
          -4039,
          -2588
        ],
        [
          -3866,
          -2293
        ],
        [
          -3759,
          -2117
        ],
        [
          -3462,
          -1673
        ],
        [
          -3357,
          -1530
        ],
        [
          -3132,
          -1301
        ],
        [
          -2905,
          -1194
        ],
        [
          -2702,
          -1186
        ],
        [
          -2506,
          -1253
        ],
        [
          -2386,
          -1340
        ],
        [
          -2259,
          -1491
        ],
        [
          -2156,
          -1697
        ],
        [
          -2111,
          -1885
        ],
        [
          -2116,
          -2184
        ],
        [
          -2194,
          -2439
        ],
        [
          -2377,
          -2745
        ],
        [
          -2489,
          -2902
        ],
        [
          -2674,
          -3156
        ],
        [
          -3033,
          -3651
        ],
        [
          -3211,
          -3939
        ],
        [
          -3286,
          -4134
        ],
        [
          -3302,
          -4235
        ],
        [
          -3249,
          -4445
        ],
        [
          -3125,
          -4555
        ],
        [
          -2959,
          -4594
        ],
        [
          -2758,
          -4563
        ],
        [
          -2550,
          -4476
        ],
        [
          -2349,
          -4368
        ],
        [
          -2163,
          -4268
        ],
        [
          -1929,
          -4155
        ],
        [
          -1656,
          -4040
        ],
        [
          -1404,
          -3924
        ],
        [
          -1079,
          -3718
        ],
        [
          -833,
          -3497
        ],
        [
          -489,
          -3056
        ],
        [
          -291,
          -2763
        ],
        [
          -169,
          -2475
        ],
        [
          -158,
          -2335
        ],
        [
          -171,
          -2175
        ],
        [
          -274,
          -1969
        ],
        [
          -394,
          -1863
        ],
        [
          -514,
          -1777
        ],
        [
          -642,
          -1671
        ],
        [
          -813,
          -1457
        ],
        [
          -995,
          -1076
        ],
        [
          -1204,
          -636
        ],
        [
          -1401,
          -223
        ],
        [
          -1513,
          35
        ],
        [
          -1580,
          341
        ],
        [
          -1569,
          609
        ],
        [
          -1474,
          960
        ],
        [
          -1243,
          1301
        ],
        [
          -866,
          1500
        ],
        [
          -671,
          1578
        ],
        [
          -258,
          1768
        ],
        [
          71,
          1924
        ],
        [
          509,
          2132
        ],
        [
          733,
          2240
        ],
        [
          1028,
          2392
        ],
        [
          1325,
          2551
        ],
        [
          1724,
          2764
        ],
        [
          2083,
          2955
        ],
        [
          2382,
          3108
        ],
        [
          2715,
          3252
        ],
        [
          2924,
          3336
        ],
        [
          3138,
          3434
        ],
        [
          3347,
          3623
        ],
        [
          3387,
          3744
        ],
        [
          3378,
          3879
        ],
        [
          3318,
          4028
        ],
        [
          3034,
          4269
        ],
        [
          2902,
          4304
        ],
        [
          2639,
          4313
        ],
        [
          2345,
          4236
        ],
        [
          2190,
          4155
        ],
        [
          2052,
          4065
        ],
        [
          1878,
          3943
        ],
        [
          1736,
          3868
        ],
        [
          1555,
          3805
        ],
        [
          1400,
          3781
        ],
        [
          1199,
          3799
        ],
        [
          1102,
          3837
        ],
        [
          989,
          3930
        ],
        [
          911,
          4060
        ],
        [
          874,
          4256
        ],
        [
          881,
          4357
        ],
        [
          942,
          4559
        ],
        [
          1105,
          4801
        ],
        [
          1329,
          5002
        ],
        [
          1542,
          5168
        ],
        [
          1733,
          5329
        ],
        [
          1908,
          5477
        ],
        [
          2345,
          5751
        ],
        [
          2618,
          5798
        ],
        [
          3015,
          5726
        ],
        [
          3340,
          5575
        ],
        [
          3542,
          5453
        ],
        [
          3730,
          5332
        ],
        [
          4428,
          4857
        ],
        [
          4560,
          4727
        ],
        [
          4766,
          4362
        ],
        [
          4804,
          3962
        ],
        [
          4702,
          3608
        ],
        [
          4460,
          3192
        ],
        [
          4256,
          2881
        ],
        [
          4036,
          2541
        ],
        [
          3829,
          2224
        ],
        [
          3528,
          1761
        ],
        [
          3286,
          1385
        ]
      ],
      "length": 11595,
      "closure": 0.024,
      "driver_number": 1,
      "lap": 37
    },
    "austria": {
      "points": [
        [
          957,
          -3503
        ],
        [
          728,
          -3566
        ],
        [
          293,
          -3688
        ],
        [
          -129,
          -3804
        ],
        [
          -336,
          -3860
        ],
        [
          -577,
          -3923
        ],
        [
          -834,
          -3961
        ],
        [
          -1028,
          -3940
        ],
        [
          -1130,
          -3899
        ],
        [
          -1165,
          -3878
        ],
        [
          -1268,
          -3795
        ],
        [
          -1367,
          -3640
        ],
        [
          -1492,
          -3410
        ],
        [
          -1604,
          -3240
        ],
        [
          -1743,
          -3038
        ],
        [
          -2022,
          -2617
        ],
        [
          -2194,
          -2358
        ],
        [
          -2223,
          -2313
        ],
        [
          -2376,
          -2081
        ],
        [
          -2636,
          -1688
        ],
        [
          -2822,
          -1399
        ],
        [
          -3112,
          -896
        ],
        [
          -3333,
          -464
        ],
        [
          -3493,
          -144
        ],
        [
          -3695,
          278
        ],
        [
          -3822,
          547
        ],
        [
          -3994,
          912
        ],
        [
          -4168,
          1253
        ],
        [
          -4430,
          1665
        ],
        [
          -4869,
          2192
        ],
        [
          -5276,
          2604
        ],
        [
          -5531,
          2851
        ],
        [
          -5814,
          3122
        ],
        [
          -6043,
          3339
        ],
        [
          -6130,
          3425
        ],
        [
          -6194,
          3508
        ],
        [
          -6239,
          3634
        ],
        [
          -6216,
          3745
        ],
        [
          -6142,
          3819
        ],
        [
          -6039,
          3863
        ],
        [
          -5922,
          3888
        ],
        [
          -5792,
          3907
        ],
        [
          -5723,
          3915
        ],
        [
          -5543,
          3935
        ],
        [
          -5378,
          3947
        ],
        [
          -5219,
          3956
        ],
        [
          -4957,
          3961
        ],
        [
          -4517,
          3947
        ],
        [
          -4197,
          3919
        ],
        [
          -3855,
          3876
        ],
        [
          -3478,
          3818
        ],
        [
          -3314,
          3789
        ],
        [
          -3055,
          3740
        ],
        [
          -2523,
          3633
        ],
        [
          -2138,
          3556
        ],
        [
          -1812,
          3491
        ],
        [
          -1615,
          3457
        ],
        [
          -965,
          3364
        ],
        [
          -664,
          3323
        ],
        [
          -411,
          3295
        ],
        [
          158,
          3260
        ],
        [
          530,
          3247
        ],
        [
          827,
          3240
        ],
        [
          1126,
          3233
        ],
        [
          1428,
          3207
        ],
        [
          1567,
          3153
        ],
        [
          1686,
          3058
        ],
        [
          1740,
          2925
        ],
        [
          1747,
          2777
        ],
        [
          1711,
          2655
        ],
        [
          1632,
          2505
        ],
        [
          1520,
          2352
        ],
        [
          1425,
          2243
        ],
        [
          1243,
          2079
        ],
        [
          944,
          1896
        ],
        [
          797,
          1830
        ],
        [
          591,
          1762
        ],
        [
          269,
          1692
        ],
        [
          6,
          1676
        ],
        [
          -444,
          1714
        ],
        [
          -884,
          1786
        ],
        [
          -1134,
          1834
        ],
        [
          -1540,
          1902
        ],
        [
          -1829,
          1927
        ],
        [
          -1967,
          1924
        ],
        [
          -2220,
          1882
        ],
        [
          -2461,
          1774
        ],
        [
          -2626,
          1623
        ],
        [
          -2734,
          1439
        ],
        [
          -2789,
          1162
        ],
        [
          -2788,
          1011
        ],
        [
          -2761,
          827
        ],
        [
          -2728,
          700
        ],
        [
          -2648,
          496
        ],
        [
          -2553,
          323
        ],
        [
          -2364,
          17
        ],
        [
          -2155,
          -310
        ],
        [
          -1904,
          -616
        ],
        [
          -1724,
          -758
        ],
        [
          -1369,
          -872
        ],
        [
          -1155,
          -841
        ],
        [
          -1066,
          -811
        ],
        [
          -817,
          -672
        ],
        [
          -610,
          -497
        ],
        [
          -418,
          -323
        ],
        [
          -214,
          -137
        ],
        [
          112,
          110
        ],
        [
          484,
          265
        ],
        [
          848,
          318
        ],
        [
          968,
          324
        ],
        [
          1362,
          336
        ],
        [
          1674,
          341
        ],
        [
          2086,
          346
        ],
        [
          2392,
          347
        ],
        [
          2869,
          352
        ],
        [
          3246,
          360
        ],
        [
          3591,
          370
        ],
        [
          3771,
          375
        ],
        [
          4145,
          387
        ],
        [
          4543,
          395
        ],
        [
          4789,
          389
        ],
        [
          5215,
          335
        ],
        [
          5442,
          257
        ],
        [
          5694,
          81
        ],
        [
          5818,
          -72
        ],
        [
          5932,
          -369
        ],
        [
          6001,
          -603
        ],
        [
          6057,
          -783
        ],
        [
          6156,
          -1104
        ],
        [
          6225,
          -1372
        ],
        [
          6239,
          -1556
        ],
        [
          6202,
          -1732
        ],
        [
          6105,
          -1896
        ],
        [
          5996,
          -2003
        ],
        [
          5920,
          -2055
        ],
        [
          5730,
          -2153
        ],
        [
          5549,
          -2234
        ],
        [
          5315,
          -2322
        ],
        [
          5065,
          -2398
        ],
        [
          4576,
          -2525
        ],
        [
          4244,
          -2616
        ],
        [
          3937,
          -2699
        ],
        [
          3774,
          -2743
        ],
        [
          3458,
          -2828
        ],
        [
          3161,
          -2908
        ],
        [
          2732,
          -3024
        ],
        [
          2475,
          -3093
        ],
        [
          2087,
          -3198
        ],
        [
          1634,
          -3321
        ],
        [
          1177,
          -3444
        ]
      ],
      "length": 12478,
      "closure": 0.018,
      "driver_number": 1,
      "lap": 55
    },
    "britain": {
      "points": [
        [
          -4357,
          -3113
        ],
        [
          -4074,
          -2754
        ],
        [
          -3815,
          -2397
        ],
        [
          -3386,
          -1806
        ],
        [
          -2959,
          -1172
        ],
        [
          -2728,
          -846
        ],
        [
          -2469,
          -524
        ],
        [
          -2024,
          -143
        ],
        [
          -1380,
          19
        ],
        [
          -1066,
          14
        ],
        [
          -576,
          -45
        ],
        [
          61,
          -33
        ],
        [
          498,
          117
        ],
        [
          776,
          296
        ],
        [
          1107,
          599
        ],
        [
          1452,
          935
        ],
        [
          1705,
          1157
        ],
        [
          1964,
          1350
        ],
        [
          2185,
          1402
        ],
        [
          2346,
          1371
        ],
        [
          2478,
          1288
        ],
        [
          2595,
          1115
        ],
        [
          2640,
          937
        ],
        [
          2660,
          744
        ],
        [
          2783,
          392
        ],
        [
          2899,
          283
        ],
        [
          2986,
          239
        ],
        [
          3123,
          253
        ],
        [
          3288,
          403
        ],
        [
          3417,
          620
        ],
        [
          3466,
          742
        ],
        [
          3556,
          1066
        ],
        [
          3597,
          1421
        ],
        [
          3581,
          1638
        ],
        [
          3519,
          1910
        ],
        [
          3264,
          2379
        ],
        [
          3050,
          2612
        ],
        [
          2831,
          2796
        ],
        [
          2410,
          3124
        ],
        [
          2179,
          3316
        ],
        [
          1823,
          3621
        ],
        [
          1348,
          4028
        ],
        [
          1101,
          4241
        ],
        [
          819,
          4489
        ],
        [
          573,
          4705
        ],
        [
          142,
          5083
        ],
        [
          -82,
          5276
        ],
        [
          -316,
          5481
        ],
        [
          -1209,
          6245
        ],
        [
          -1491,
          6390
        ],
        [
          -1852,
          6451
        ],
        [
          -2080,
          6424
        ],
        [
          -2356,
          6254
        ],
        [
          -2465,
          6078
        ],
        [
          -2529,
          5885
        ],
        [
          -2560,
          5466
        ],
        [
          -2643,
          5200
        ],
        [
          -2749,
          5073
        ],
        [
          -3067,
          4942
        ],
        [
          -3190,
          4969
        ],
        [
          -3288,
          5027
        ],
        [
          -3382,
          5127
        ],
        [
          -3469,
          5295
        ],
        [
          -3507,
          5458
        ],
        [
          -3511,
          5603
        ],
        [
          -3466,
          5899
        ],
        [
          -3371,
          6171
        ],
        [
          -3201,
          6521
        ],
        [
          -3006,
          6856
        ],
        [
          -2523,
          7432
        ],
        [
          -2239,
          7679
        ],
        [
          -1931,
          7884
        ],
        [
          -1312,
          8136
        ],
        [
          -965,
          8221
        ],
        [
          -569,
          8285
        ],
        [
          45,
          8352
        ],
        [
          427,
          8390
        ],
        [
          861,
          8438
        ],
        [
          1228,
          8479
        ],
        [
          1993,
          8578
        ],
        [
          2404,
          8614
        ],
        [
          2700,
          8598
        ],
        [
          3335,
          8325
        ],
        [
          3672,
          7957
        ],
        [
          3849,
          7572
        ],
        [
          3971,
          7165
        ],
        [
          4062,
          6777
        ],
        [
          4134,
          6389
        ],
        [
          4175,
          6094
        ],
        [
          4223,
          5607
        ],
        [
          4237,
          5353
        ],
        [
          4251,
          4812
        ],
        [
          4273,
          4413
        ],
        [
          4381,
          3810
        ],
        [
          4448,
          3569
        ],
        [
          4555,
          3261
        ],
        [
          4774,
          2651
        ],
        [
          4802,
          2371
        ],
        [
          4716,
          1864
        ],
        [
          4615,
          1439
        ],
        [
          4664,
          707
        ],
        [
          4777,
          489
        ],
        [
          4889,
          304
        ],
        [
          5026,
          -3
        ],
        [
          5051,
          -262
        ],
        [
          4934,
          -651
        ],
        [
          4707,
          -948
        ],
        [
          4423,
          -1130
        ],
        [
          4028,
          -1387
        ],
        [
          3805,
          -1620
        ],
        [
          3524,
          -2004
        ],
        [
          3359,
          -2305
        ],
        [
          3277,
          -2467
        ],
        [
          2964,
          -3113
        ],
        [
          2699,
          -3670
        ],
        [
          2571,
          -3936
        ],
        [
          2226,
          -4648
        ],
        [
          2032,
          -5051
        ],
        [
          1828,
          -5474
        ],
        [
          1536,
          -6070
        ],
        [
          1125,
          -6881
        ],
        [
          812,
          -7467
        ],
        [
          512,
          -7961
        ],
        [
          98,
          -8410
        ],
        [
          -240,
          -8578
        ],
        [
          -561,
          -8613
        ],
        [
          -894,
          -8524
        ],
        [
          -1212,
          -8298
        ],
        [
          -1458,
          -7976
        ],
        [
          -1622,
          -7672
        ],
        [
          -1924,
          -7188
        ],
        [
          -2088,
          -6967
        ],
        [
          -2355,
          -6607
        ],
        [
          -2641,
          -6249
        ],
        [
          -2977,
          -5867
        ],
        [
          -3208,
          -5612
        ],
        [
          -3381,
          -5477
        ],
        [
          -3640,
          -5411
        ],
        [
          -3832,
          -5465
        ],
        [
          -4009,
          -5595
        ],
        [
          -4235,
          -5672
        ],
        [
          -4391,
          -5637
        ],
        [
          -4516,
          -5582
        ],
        [
          -4662,
          -5467
        ],
        [
          -4880,
          -5185
        ],
        [
          -5004,
          -4883
        ],
        [
          -5050,
          -4479
        ],
        [
          -4965,
          -4036
        ],
        [
          -4841,
          -3785
        ],
        [
          -4470,
          -3260
        ]
      ],
      "length": 17227,
      "closure": 0.011,
      "driver_number": 1,
      "lap": 45
    },
    "belgium": {
      "points": [
        [
          -2517,
          7049
        ],
        [
          -2750,
          7401
        ],
        [
          -3026,
          7816
        ],
        [
          -3245,
          8148
        ],
        [
          -3566,
          8632
        ],
        [
          -3786,
          8964
        ],
        [
          -4095,
          9436
        ],
        [
          -4239,
          9686
        ],
        [
          -4303,
          9881
        ],
        [
          -4299,
          10018
        ],
        [
          -4189,
          10149
        ],
        [
          -4030,
          10155
        ],
        [
          -3831,
          10092
        ],
        [
          -3597,
          9985
        ],
        [
          -3210,
          9787
        ],
        [
          -2885,
          9622
        ],
        [
          -2427,
          9367
        ],
        [
          -1951,
          9045
        ],
        [
          -1598,
          8767
        ],
        [
          -1334,
          8526
        ],
        [
          -845,
          8028
        ],
        [
          -376,
          7530
        ],
        [
          14,
          7108
        ],
        [
          434,
          6637
        ],
        [
          822,
          6245
        ],
        [
          1332,
          5963
        ],
        [
          1695,
          5616
        ],
        [
          1966,
          4848
        ],
        [
          2149,
          4243
        ],
        [
          2385,
          3850
        ],
        [
          2680,
          3432
        ],
        [
          3179,
          2758
        ],
        [
          3541,
          2229
        ],
        [
          3867,
          1641
        ],
        [
          4089,
          1087
        ],
        [
          4272,
          537
        ],
        [
          4471,
          -63
        ],
        [
          4689,
          -717
        ],
        [
          4848,
          -1193
        ],
        [
          5058,
          -1819
        ],
        [
          5223,
          -2308
        ],
        [
          5472,
          -3046
        ],
        [
          5731,
          -3816
        ],
        [
          6045,
          -4760
        ],
        [
          6195,
          -5203
        ],
        [
          6309,
          -5654
        ],
        [
          6275,
          -5969
        ],
        [
          6218,
          -6076
        ],
        [
          5984,
          -6342
        ],
        [
          5804,
          -6937
        ],
        [
          5920,
          -7303
        ],
        [
          6018,
          -7592
        ],
        [
          6032,
          -7953
        ],
        [
          5911,
          -8244
        ],
        [
          5684,
          -8495
        ],
        [
          5283,
          -8773
        ],
        [
          4966,
          -8993
        ],
        [
          4635,
          -9239
        ],
        [
          4342,
          -9463
        ],
        [
          4023,
          -9713
        ],
        [
          3493,
          -10059
        ],
        [
          3192,
          -10154
        ],
        [
          2890,
          -10045
        ],
        [
          2751,
          -9857
        ],
        [
          2721,
          -9689
        ],
        [
          2824,
          -9378
        ],
        [
          2957,
          -9229
        ],
        [
          3124,
          -9097
        ],
        [
          3563,
          -8849
        ],
        [
          3889,
          -8630
        ],
        [
          4107,
          -8290
        ],
        [
          4097,
          -7866
        ],
        [
          3941,
          -7436
        ],
        [
          3705,
          -6863
        ],
        [
          3524,
          -6306
        ],
        [
          3399,
          -5803
        ],
        [
          3325,
          -5471
        ],
        [
          3244,
          -5092
        ],
        [
          3076,
          -4313
        ],
        [
          2942,
          -3774
        ],
        [
          2767,
          -3416
        ],
        [
          2517,
          -3152
        ],
        [
          1978,
          -2937
        ],
        [
          1186,
          -2949
        ],
        [
          726,
          -3150
        ],
        [
          532,
          -3295
        ],
        [
          150,
          -3735
        ],
        [
          -57,
          -4141
        ],
        [
          -188,
          -4516
        ],
        [
          -327,
          -4954
        ],
        [
          -500,
          -5493
        ],
        [
          -705,
          -6132
        ],
        [
          -837,
          -6531
        ],
        [
          -998,
          -6895
        ],
        [
          -1155,
          -7100
        ],
        [
          -1431,
          -7296
        ],
        [
          -1654,
          -7339
        ],
        [
          -2004,
          -7271
        ],
        [
          -2411,
          -7079
        ],
        [
          -2728,
          -7058
        ],
        [
          -3099,
          -7201
        ],
        [
          -3400,
          -7508
        ],
        [
          -3586,
          -7802
        ],
        [
          -3780,
          -8196
        ],
        [
          -3902,
          -8449
        ],
        [
          -4031,
          -8694
        ],
        [
          -4330,
          -9115
        ],
        [
          -4570,
          -9251
        ],
        [
          -4914,
          -9238
        ],
        [
          -5164,
          -9139
        ],
        [
          -5378,
          -9013
        ],
        [
          -5755,
          -8749
        ],
        [
          -6139,
          -8338
        ],
        [
          -6262,
          -8103
        ],
        [
          -6308,
          -7382
        ],
        [
          -6203,
          -6970
        ],
        [
          -5891,
          -6318
        ],
        [
          -5519,
          -5795
        ],
        [
          -5118,
          -5341
        ],
        [
          -4713,
          -4949
        ],
        [
          -4186,
          -4535
        ],
        [
          -3661,
          -4214
        ],
        [
          -2628,
          -3616
        ],
        [
          -1953,
          -3114
        ],
        [
          -1537,
          -2633
        ],
        [
          -1234,
          -2092
        ],
        [
          -1033,
          -1644
        ],
        [
          -800,
          -1046
        ],
        [
          -673,
          -549
        ],
        [
          -686,
          60
        ],
        [
          -860,
          613
        ],
        [
          -1042,
          1059
        ],
        [
          -1273,
          1592
        ],
        [
          -1505,
          2146
        ],
        [
          -1748,
          2976
        ],
        [
          -1907,
          3820
        ],
        [
          -1986,
          4338
        ],
        [
          -2012,
          4626
        ],
        [
          -1974,
          4913
        ],
        [
          -1859,
          5044
        ],
        [
          -1737,
          5065
        ],
        [
          -1622,
          5072
        ],
        [
          -1472,
          5173
        ],
        [
          -1449,
          5310
        ],
        [
          -1493,
          5477
        ],
        [
          -1605,
          5681
        ],
        [
          -1719,
          5851
        ],
        [
          -1831,
          6015
        ],
        [
          -2027,
          6309
        ],
        [
          -2397,
          6867
        ]
      ],
      "length": 20309,
      "closure": 0.011,
      "driver_number": 1,
      "lap": 44
    },
    "hungary": {
      "points": [
        [
          -931,
          -4783
        ],
        [
          -931,
          -4783
        ],
        [
          -931,
          -4783
        ],
        [
          -931,
          -4783
        ],
        [
          -931,
          -4783
        ],
        [
          -931,
          -4783
        ],
        [
          -3060,
          -3028
        ],
        [
          -3292,
          -2837
        ],
        [
          -3292,
          -2837
        ],
        [
          -3292,
          -2837
        ],
        [
          -3292,
          -2837
        ],
        [
          -4943,
          -1477
        ],
        [
          -4943,
          -1477
        ],
        [
          -4943,
          -1477
        ],
        [
          -4943,
          -1477
        ],
        [
          -4943,
          -1477
        ],
        [
          -4943,
          -1477
        ],
        [
          -4943,
          -1477
        ],
        [
          -4943,
          -1477
        ],
        [
          -4943,
          -1477
        ],
        [
          -4943,
          -1477
        ],
        [
          -4943,
          -1477
        ],
        [
          -4943,
          -1477
        ],
        [
          -4580,
          -485
        ],
        [
          -4580,
          -485
        ],
        [
          -4580,
          -485
        ],
        [
          -4580,
          -485
        ],
        [
          -4580,
          -485
        ],
        [
          -4580,
          -485
        ],
        [
          -4580,
          -485
        ],
        [
          -4580,
          -485
        ],
        [
          -4580,
          -485
        ],
        [
          -1678,
          -2392
        ],
        [
          -1678,
          -2392
        ],
        [
          -1678,
          -2392
        ],
        [
          -1678,
          -2392
        ],
        [
          -1678,
          -2392
        ],
        [
          -1678,
          -2392
        ],
        [
          -1678,
          -2392
        ],
        [
          -1678,
          -2392
        ],
        [
          -1678,
          -2392
        ],
        [
          -1678,
          -2392
        ],
        [
          -1650,
          -883
        ],
        [
          -1650,
          -883
        ],
        [
          -1650,
          -883
        ],
        [
          -1650,
          -883
        ],
        [
          -1433,
          169
        ],
        [
          -1433,
          169
        ],
        [
          -1433,
          169
        ],
        [
          -1433,
          169
        ],
        [
          -8,
          2840
        ],
        [
          -8,
          2840
        ],
        [
          -8,
          2840
        ],
        [
          -8,
          2840
        ],
        [
          -8,
          2840
        ],
        [
          -8,
          2840
        ],
        [
          366,
          4572
        ],
        [
          366,
          4572
        ],
        [
          366,
          4572
        ],
        [
          366,
          4572
        ],
        [
          366,
          4572
        ],
        [
          366,
          4572
        ],
        [
          366,
          4572
        ],
        [
          814,
          6042
        ],
        [
          814,
          6042
        ],
        [
          814,
          6042
        ],
        [
          814,
          6042
        ],
        [
          814,
          6042
        ],
        [
          814,
          6042
        ],
        [
          814,
          6042
        ],
        [
          814,
          6042
        ],
        [
          2329,
          4808
        ],
        [
          2329,
          4808
        ],
        [
          2329,
          4808
        ],
        [
          2329,
          4808
        ],
        [
          2329,
          4808
        ],
        [
          2329,
          4808
        ],
        [
          2329,
          4808
        ],
        [
          2329,
          4808
        ],
        [
          2769,
          3090
        ],
        [
          2769,
          3090
        ],
        [
          2769,
          3090
        ],
        [
          2769,
          3090
        ],
        [
          2769,
          3090
        ],
        [
          2769,
          3090
        ],
        [
          2769,
          3090
        ],
        [
          2769,
          3090
        ],
        [
          4062,
          1965
        ],
        [
          4062,
          1965
        ],
        [
          4062,
          1965
        ],
        [
          4062,
          1965
        ],
        [
          4062,
          1965
        ],
        [
          4062,
          1965
        ],
        [
          4062,
          1965
        ],
        [
          4188,
          143
        ],
        [
          4188,
          143
        ],
        [
          4188,
          143
        ],
        [
          4188,
          143
        ],
        [
          4188,
          143
        ],
        [
          4188,
          143
        ],
        [
          4944,
          -1636
        ],
        [
          4944,
          -1636
        ],
        [
          4944,
          -1636
        ],
        [
          4305,
          -2728
        ],
        [
          4101,
          -2949
        ],
        [
          4101,
          -2949
        ],
        [
          4101,
          -2949
        ],
        [
          4101,
          -2949
        ],
        [
          4101,
          -2949
        ],
        [
          2988,
          -4153
        ],
        [
          2988,
          -4153
        ],
        [
          2988,
          -4153
        ],
        [
          2988,
          -4153
        ],
        [
          2988,
          -4153
        ],
        [
          2988,
          -4153
        ],
        [
          2988,
          -4153
        ],
        [
          2988,
          -4153
        ],
        [
          2988,
          -4153
        ],
        [
          2988,
          -4153
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1422,
          -4118
        ],
        [
          1245,
          -4967
        ],
        [
          1245,
          -4967
        ],
        [
          1245,
          -4967
        ],
        [
          1245,
          -4967
        ],
        [
          1245,
          -4967
        ],
        [
          1245,
          -4967
        ],
        [
          1245,
          -4967
        ],
        [
          1245,
          -4967
        ],
        [
          790,
          -6041
        ],
        [
          790,
          -6041
        ],
        [
          790,
          -6041
        ],
        [
          790,
          -6041
        ],
        [
          790,
          -6041
        ],
        [
          -695,
          -4978
        ]
      ],
      "length": 12083,
      "closure": 0.025,
      "driver_number": 1,
      "lap": 64
    }
  },
  "race_classification_2026": {
    "1": {
      "circuit_id": "australia",
      "race": [
        {
          "driver_id": "russell",
          "position": 1,
          "points": 25,
          "laps": 58,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 2,
          "points": 18,
          "laps": 58,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 3,
          "points": 15,
          "laps": 58,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 4,
          "points": 12,
          "laps": 58,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 5,
          "points": 10,
          "laps": 58,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 6,
          "points": 8,
          "laps": 58,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 7,
          "points": 6,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 8,
          "points": 4,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 9,
          "points": 2,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 10,
          "points": 1,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 11,
          "points": 0,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 12,
          "points": 0,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 13,
          "points": 0,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 14,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 15,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 16,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 43,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": null,
          "points": 0,
          "laps": 21,
          "status": "DNF"
        },
        {
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 15,
          "status": "DNF"
        },
        {
          "driver_id": "hadjar",
          "position": null,
          "points": 0,
          "laps": 10,
          "status": "DNF"
        },
        {
          "driver_id": "piastri",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNS"
        },
        {
          "driver_id": "hulkenberg",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNS"
        }
      ],
      "qualifying": [
        {
          "driver_id": "russell",
          "position": 1
        },
        {
          "driver_id": "antonelli",
          "position": 2
        },
        {
          "driver_id": "hadjar",
          "position": 3
        },
        {
          "driver_id": "leclerc",
          "position": 4
        },
        {
          "driver_id": "piastri",
          "position": 5
        },
        {
          "driver_id": "norris",
          "position": 6
        },
        {
          "driver_id": "hamilton",
          "position": 7
        },
        {
          "driver_id": "lawson",
          "position": 8
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 9
        },
        {
          "driver_id": "bortoleto",
          "position": 10
        },
        {
          "driver_id": "hulkenberg",
          "position": 11
        },
        {
          "driver_id": "bearman",
          "position": 12
        },
        {
          "driver_id": "ocon",
          "position": 13
        },
        {
          "driver_id": "gasly",
          "position": 14
        },
        {
          "driver_id": "albon",
          "position": 15
        },
        {
          "driver_id": "colapinto",
          "position": 16
        },
        {
          "driver_id": "alonso",
          "position": 17
        },
        {
          "driver_id": "perez",
          "position": 18
        },
        {
          "driver_id": "bottas",
          "position": 19
        }
      ]
    },
    "2": {
      "circuit_id": "china",
      "race": [
        {
          "driver_id": "antonelli",
          "position": 1,
          "points": 25,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 2,
          "points": 18,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 3,
          "points": 15,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 4,
          "points": 12,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 5,
          "points": 10,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 6,
          "points": 8,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 7,
          "points": 6,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 8,
          "points": 4,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 9,
          "points": 2,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 10,
          "points": 1,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 11,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 12,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 13,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 14,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 15,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": null,
          "points": 0,
          "laps": 45,
          "status": "DNF"
        },
        {
          "driver_id": "alonso",
          "position": null,
          "points": 0,
          "laps": 32,
          "status": "DNF"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 9,
          "status": "DNF"
        },
        {
          "driver_id": "piastri",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNS"
        },
        {
          "driver_id": "norris",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNS"
        },
        {
          "driver_id": "bortoleto",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNS"
        },
        {
          "driver_id": "albon",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNS"
        }
      ],
      "qualifying": [
        {
          "driver_id": "antonelli",
          "position": 1
        },
        {
          "driver_id": "russell",
          "position": 2
        },
        {
          "driver_id": "hamilton",
          "position": 3
        },
        {
          "driver_id": "leclerc",
          "position": 4
        },
        {
          "driver_id": "piastri",
          "position": 5
        },
        {
          "driver_id": "norris",
          "position": 6
        },
        {
          "driver_id": "gasly",
          "position": 7
        },
        {
          "driver_id": "max_verstappen",
          "position": 8
        },
        {
          "driver_id": "hadjar",
          "position": 9
        },
        {
          "driver_id": "bearman",
          "position": 10
        },
        {
          "driver_id": "hulkenberg",
          "position": 11
        },
        {
          "driver_id": "colapinto",
          "position": 12
        },
        {
          "driver_id": "ocon",
          "position": 13
        },
        {
          "driver_id": "lawson",
          "position": 14
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 15
        },
        {
          "driver_id": "bortoleto",
          "position": 16
        },
        {
          "driver_id": "sainz",
          "position": 17
        },
        {
          "driver_id": "albon",
          "position": 18
        },
        {
          "driver_id": "alonso",
          "position": 19
        },
        {
          "driver_id": "bottas",
          "position": 20
        },
        {
          "driver_id": "stroll",
          "position": 21
        },
        {
          "driver_id": "perez",
          "position": 22
        }
      ],
      "sprint": [
        {
          "driver_id": "russell",
          "position": 1,
          "points": 8,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 2,
          "points": 7,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 3,
          "points": 6,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 4,
          "points": 5,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 5,
          "points": 4,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 6,
          "points": 3,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 7,
          "points": 2,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 8,
          "points": 1,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 9,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 10,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 11,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 12,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 13,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 14,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 15,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 16,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 17,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": 18,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 19,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": null,
          "points": 0,
          "laps": 12,
          "status": "DNF"
        },
        {
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 12,
          "status": "DNF"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": null,
          "points": 0,
          "laps": 11,
          "status": "DNF"
        }
      ]
    },
    "3": {
      "circuit_id": "japan",
      "race": [
        {
          "driver_id": "antonelli",
          "position": 1,
          "points": 25,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 2,
          "points": 18,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 3,
          "points": 15,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 4,
          "points": 12,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 5,
          "points": 10,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 6,
          "points": 8,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 7,
          "points": 6,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 8,
          "points": 4,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 9,
          "points": 2,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 10,
          "points": 1,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 11,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 12,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 13,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 14,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 15,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 16,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 17,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 18,
          "points": 0,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 19,
          "points": 0,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 20,
          "points": 0,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 30,
          "status": "DNF"
        },
        {
          "driver_id": "bearman",
          "position": null,
          "points": 0,
          "laps": 20,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "antonelli",
          "position": 1
        },
        {
          "driver_id": "russell",
          "position": 2
        },
        {
          "driver_id": "piastri",
          "position": 3
        },
        {
          "driver_id": "leclerc",
          "position": 4
        },
        {
          "driver_id": "norris",
          "position": 5
        },
        {
          "driver_id": "hamilton",
          "position": 6
        },
        {
          "driver_id": "gasly",
          "position": 7
        },
        {
          "driver_id": "hadjar",
          "position": 8
        },
        {
          "driver_id": "bortoleto",
          "position": 9
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 10
        },
        {
          "driver_id": "max_verstappen",
          "position": 11
        },
        {
          "driver_id": "ocon",
          "position": 12
        },
        {
          "driver_id": "hulkenberg",
          "position": 13
        },
        {
          "driver_id": "lawson",
          "position": 14
        },
        {
          "driver_id": "colapinto",
          "position": 15
        },
        {
          "driver_id": "sainz",
          "position": 16
        },
        {
          "driver_id": "albon",
          "position": 17
        },
        {
          "driver_id": "bearman",
          "position": 18
        },
        {
          "driver_id": "perez",
          "position": 19
        },
        {
          "driver_id": "bottas",
          "position": 20
        },
        {
          "driver_id": "alonso",
          "position": 21
        },
        {
          "driver_id": "stroll",
          "position": 22
        }
      ]
    },
    "4": {
      "circuit_id": "miami",
      "race": [
        {
          "driver_id": "antonelli",
          "position": 1,
          "points": 25,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 2,
          "points": 18,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 3,
          "points": 15,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 4,
          "points": 12,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 5,
          "points": 10,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 6,
          "points": 8,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 7,
          "points": 6,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 8,
          "points": 4,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 9,
          "points": 2,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 10,
          "points": 1,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 11,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 12,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 13,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 14,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 15,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 16,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": 17,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 18,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": null,
          "points": 0,
          "laps": 7,
          "status": "DNF"
        },
        {
          "driver_id": "lawson",
          "position": null,
          "points": 0,
          "laps": 6,
          "status": "DNF"
        },
        {
          "driver_id": "gasly",
          "position": null,
          "points": 0,
          "laps": 4,
          "status": "DNF"
        },
        {
          "driver_id": "hadjar",
          "position": null,
          "points": 0,
          "laps": 4,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "antonelli",
          "position": 1
        },
        {
          "driver_id": "max_verstappen",
          "position": 2
        },
        {
          "driver_id": "leclerc",
          "position": 3
        },
        {
          "driver_id": "norris",
          "position": 4
        },
        {
          "driver_id": "russell",
          "position": 5
        },
        {
          "driver_id": "hamilton",
          "position": 6
        },
        {
          "driver_id": "piastri",
          "position": 7
        },
        {
          "driver_id": "colapinto",
          "position": 8
        },
        {
          "driver_id": "gasly",
          "position": 9
        },
        {
          "driver_id": "hulkenberg",
          "position": 10
        },
        {
          "driver_id": "lawson",
          "position": 11
        },
        {
          "driver_id": "bearman",
          "position": 12
        },
        {
          "driver_id": "sainz",
          "position": 13
        },
        {
          "driver_id": "ocon",
          "position": 14
        },
        {
          "driver_id": "albon",
          "position": 15
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 16
        },
        {
          "driver_id": "alonso",
          "position": 17
        },
        {
          "driver_id": "stroll",
          "position": 18
        },
        {
          "driver_id": "bottas",
          "position": 19
        },
        {
          "driver_id": "perez",
          "position": 20
        },
        {
          "driver_id": "bortoleto",
          "position": 21
        },
        {
          "driver_id": "hadjar",
          "position": null
        }
      ],
      "sprint": [
        {
          "driver_id": "norris",
          "position": 1,
          "points": 8,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 2,
          "points": 7,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 3,
          "points": 6,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 4,
          "points": 5,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 5,
          "points": 4,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 6,
          "points": 3,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 7,
          "points": 2,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 8,
          "points": 1,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 9,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 10,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 11,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 12,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 13,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 14,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 15,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 16,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": 17,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 18,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 19,
          "points": 0,
          "laps": 19,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNS"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNS"
        },
        {
          "driver_id": "bortoleto",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DSQ"
        }
      ]
    },
    "5": {
      "circuit_id": "canada",
      "race": [
        {
          "driver_id": "antonelli",
          "position": 1,
          "points": 25,
          "laps": 68,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 2,
          "points": 18,
          "laps": 68,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 3,
          "points": 15,
          "laps": 68,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 4,
          "points": 12,
          "laps": 68,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 5,
          "points": 10,
          "laps": 67,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 6,
          "points": 8,
          "laps": 67,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 7,
          "points": 6,
          "laps": 67,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 8,
          "points": 4,
          "laps": 67,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 9,
          "points": 2,
          "laps": 67,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 10,
          "points": 1,
          "laps": 67,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 11,
          "points": 0,
          "laps": 66,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 12,
          "points": 0,
          "laps": 66,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 13,
          "points": 0,
          "laps": 66,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 14,
          "points": 0,
          "laps": 66,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": 15,
          "points": 0,
          "laps": 64,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 16,
          "points": 0,
          "laps": 64,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": null,
          "points": 0,
          "laps": 39,
          "status": "DNF"
        },
        {
          "driver_id": "norris",
          "position": null,
          "points": 0,
          "laps": 38,
          "status": "DNF"
        },
        {
          "driver_id": "russell",
          "position": null,
          "points": 0,
          "laps": 29,
          "status": "DNF"
        },
        {
          "driver_id": "alonso",
          "position": null,
          "points": 0,
          "laps": 23,
          "status": "DNF"
        },
        {
          "driver_id": "albon",
          "position": null,
          "points": 0,
          "laps": 11,
          "status": "DNF"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNS"
        }
      ],
      "qualifying": [
        {
          "driver_id": "russell",
          "position": 1
        },
        {
          "driver_id": "antonelli",
          "position": 2
        },
        {
          "driver_id": "norris",
          "position": 3
        },
        {
          "driver_id": "piastri",
          "position": 4
        },
        {
          "driver_id": "hamilton",
          "position": 5
        },
        {
          "driver_id": "max_verstappen",
          "position": 6
        },
        {
          "driver_id": "hadjar",
          "position": 7
        },
        {
          "driver_id": "leclerc",
          "position": 8
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 9
        },
        {
          "driver_id": "colapinto",
          "position": 10
        },
        {
          "driver_id": "hulkenberg",
          "position": 11
        },
        {
          "driver_id": "lawson",
          "position": 12
        },
        {
          "driver_id": "bortoleto",
          "position": 13
        },
        {
          "driver_id": "gasly",
          "position": 14
        },
        {
          "driver_id": "sainz",
          "position": 15
        },
        {
          "driver_id": "bearman",
          "position": 16
        },
        {
          "driver_id": "ocon",
          "position": 17
        },
        {
          "driver_id": "albon",
          "position": 18
        },
        {
          "driver_id": "alonso",
          "position": 19
        },
        {
          "driver_id": "perez",
          "position": 20
        },
        {
          "driver_id": "stroll",
          "position": 21
        },
        {
          "driver_id": "bottas",
          "position": 22
        }
      ],
      "sprint": [
        {
          "driver_id": "russell",
          "position": 1,
          "points": 8,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 2,
          "points": 7,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 3,
          "points": 6,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 4,
          "points": 5,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 5,
          "points": 4,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 6,
          "points": 3,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 7,
          "points": 2,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 8,
          "points": 1,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 9,
          "points": 0,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 10,
          "points": 0,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 11,
          "points": 0,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 12,
          "points": 0,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 13,
          "points": 0,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 14,
          "points": 0,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 15,
          "points": 0,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": 16,
          "points": 0,
          "laps": 22,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 17,
          "points": 0,
          "laps": 22,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 18,
          "points": 0,
          "laps": 22,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 19,
          "points": 0,
          "laps": 22,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 20,
          "points": 0,
          "laps": 22,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 21,
          "points": 0,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": null,
          "points": 0,
          "laps": 15,
          "status": "DNF"
        }
      ]
    },
    "6": {
      "circuit_id": "monaco",
      "race": [
        {
          "driver_id": "antonelli",
          "position": 1,
          "points": 25,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 2,
          "points": 18,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 3,
          "points": 15,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 4,
          "points": 12,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 5,
          "points": 10,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 6,
          "points": 8,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 7,
          "points": 6,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 8,
          "points": 4,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 9,
          "points": 2,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 10,
          "points": 1,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 11,
          "points": 0,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 12,
          "points": 0,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 13,
          "points": 0,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 14,
          "points": 0,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 15,
          "points": 0,
          "laps": 78,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 16,
          "points": 0,
          "laps": 70,
          "status": "DNF"
        },
        {
          "driver_id": "leclerc",
          "position": null,
          "points": 0,
          "laps": 64,
          "status": "DNF"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 56,
          "status": "DNF"
        },
        {
          "driver_id": "norris",
          "position": null,
          "points": 0,
          "laps": 43,
          "status": "DNF"
        },
        {
          "driver_id": "bearman",
          "position": null,
          "points": 0,
          "laps": 27,
          "status": "DNF"
        },
        {
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 15,
          "status": "DNF"
        },
        {
          "driver_id": "max_verstappen",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "antonelli",
          "position": 1
        },
        {
          "driver_id": "max_verstappen",
          "position": 2
        },
        {
          "driver_id": "hamilton",
          "position": 3
        },
        {
          "driver_id": "leclerc",
          "position": 4
        },
        {
          "driver_id": "hadjar",
          "position": 5
        },
        {
          "driver_id": "russell",
          "position": 6
        },
        {
          "driver_id": "piastri",
          "position": 7
        },
        {
          "driver_id": "norris",
          "position": 8
        },
        {
          "driver_id": "gasly",
          "position": 9
        },
        {
          "driver_id": "lawson",
          "position": 10
        },
        {
          "driver_id": "albon",
          "position": 11
        },
        {
          "driver_id": "sainz",
          "position": 12
        },
        {
          "driver_id": "hulkenberg",
          "position": 13
        },
        {
          "driver_id": "colapinto",
          "position": 14
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 15
        },
        {
          "driver_id": "bortoleto",
          "position": 16
        },
        {
          "driver_id": "ocon",
          "position": 17
        },
        {
          "driver_id": "perez",
          "position": 18
        },
        {
          "driver_id": "bearman",
          "position": 19
        },
        {
          "driver_id": "bottas",
          "position": 20
        },
        {
          "driver_id": "alonso",
          "position": 21
        },
        {
          "driver_id": "stroll",
          "position": 22
        }
      ]
    },
    "7": {
      "circuit_id": "spain",
      "race": [
        {
          "driver_id": "hamilton",
          "position": 1,
          "points": 25,
          "laps": 66,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 2,
          "points": 18,
          "laps": 66,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 3,
          "points": 15,
          "laps": 66,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 4,
          "points": 12,
          "laps": 66,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 5,
          "points": 10,
          "laps": 66,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 6,
          "points": 8,
          "laps": 65,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 7,
          "points": 6,
          "laps": 65,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 8,
          "points": 4,
          "laps": 65,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 9,
          "points": 2,
          "laps": 65,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 10,
          "points": 1,
          "laps": 65,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 11,
          "points": 0,
          "laps": 64,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 12,
          "points": 0,
          "laps": 64,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 13,
          "points": 0,
          "laps": 64,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 14,
          "points": 0,
          "laps": 63,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 15,
          "points": 0,
          "laps": 62,
          "status": "DNF"
        },
        {
          "driver_id": "antonelli",
          "position": 16,
          "points": 0,
          "laps": 61,
          "status": "DNF"
        },
        {
          "driver_id": "bearman",
          "position": 17,
          "points": 0,
          "laps": 60,
          "status": "DNF"
        },
        {
          "driver_id": "albon",
          "position": null,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": null,
          "points": 0,
          "laps": 37,
          "status": "DNF"
        },
        {
          "driver_id": "hulkenberg",
          "position": null,
          "points": 0,
          "laps": 29,
          "status": "DNF"
        },
        {
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 15,
          "status": "DNF"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 5,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "russell",
          "position": 1
        },
        {
          "driver_id": "hamilton",
          "position": 2
        },
        {
          "driver_id": "antonelli",
          "position": 3
        },
        {
          "driver_id": "norris",
          "position": 4
        },
        {
          "driver_id": "max_verstappen",
          "position": 5
        },
        {
          "driver_id": "hadjar",
          "position": 6
        },
        {
          "driver_id": "piastri",
          "position": 7
        },
        {
          "driver_id": "lawson",
          "position": 8
        },
        {
          "driver_id": "hulkenberg",
          "position": 9
        },
        {
          "driver_id": "leclerc",
          "position": 10
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 11
        },
        {
          "driver_id": "bortoleto",
          "position": 12
        },
        {
          "driver_id": "colapinto",
          "position": 13
        },
        {
          "driver_id": "gasly",
          "position": 14
        },
        {
          "driver_id": "bearman",
          "position": 15
        },
        {
          "driver_id": "sainz",
          "position": 16
        },
        {
          "driver_id": "ocon",
          "position": 17
        },
        {
          "driver_id": "albon",
          "position": 18
        },
        {
          "driver_id": "perez",
          "position": 19
        },
        {
          "driver_id": "bottas",
          "position": 20
        },
        {
          "driver_id": "stroll",
          "position": 21
        },
        {
          "driver_id": "alonso",
          "position": 22
        }
      ]
    },
    "8": {
      "circuit_id": "austria",
      "race": [
        {
          "driver_id": "russell",
          "position": 1,
          "points": 25,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 2,
          "points": 18,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 3,
          "points": 15,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 4,
          "points": 12,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 5,
          "points": 10,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 6,
          "points": 8,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 7,
          "points": 6,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 8,
          "points": 4,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 9,
          "points": 2,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 10,
          "points": 1,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 11,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 12,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 13,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 14,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 15,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 16,
          "points": 0,
          "laps": 69,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 17,
          "points": 0,
          "laps": 69,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 18,
          "points": 0,
          "laps": 68,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 45,
          "status": "DNF"
        },
        {
          "driver_id": "sainz",
          "position": null,
          "points": 0,
          "laps": 23,
          "status": "DNF"
        },
        {
          "driver_id": "perez",
          "position": null,
          "points": 0,
          "laps": 4,
          "status": "DNF"
        },
        {
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 2,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "russell",
          "position": 1
        },
        {
          "driver_id": "leclerc",
          "position": 2
        },
        {
          "driver_id": "hamilton",
          "position": 3
        },
        {
          "driver_id": "antonelli",
          "position": 4
        },
        {
          "driver_id": "max_verstappen",
          "position": 5
        },
        {
          "driver_id": "norris",
          "position": 6
        },
        {
          "driver_id": "piastri",
          "position": 7
        },
        {
          "driver_id": "hadjar",
          "position": 8
        },
        {
          "driver_id": "lawson",
          "position": 9
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 10
        },
        {
          "driver_id": "gasly",
          "position": 11
        },
        {
          "driver_id": "bortoleto",
          "position": 12
        },
        {
          "driver_id": "bearman",
          "position": 13
        },
        {
          "driver_id": "hulkenberg",
          "position": 14
        },
        {
          "driver_id": "ocon",
          "position": 15
        },
        {
          "driver_id": "colapinto",
          "position": 16
        },
        {
          "driver_id": "sainz",
          "position": 17
        },
        {
          "driver_id": "albon",
          "position": 18
        },
        {
          "driver_id": "perez",
          "position": 19
        },
        {
          "driver_id": "bottas",
          "position": 20
        },
        {
          "driver_id": "alonso",
          "position": 21
        },
        {
          "driver_id": "stroll",
          "position": 22
        }
      ]
    },
    "9": {
      "circuit_id": "britain",
      "race": [
        {
          "driver_id": "leclerc",
          "position": 1,
          "points": 25,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 2,
          "points": 18,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 3,
          "points": 15,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 4,
          "points": 12,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 5,
          "points": 10,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 6,
          "points": 8,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 7,
          "points": 6,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 8,
          "points": 4,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 9,
          "points": 2,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 10,
          "points": 1,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 11,
          "points": 0,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 12,
          "points": 0,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 13,
          "points": 0,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 14,
          "points": 0,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 15,
          "points": 0,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 16,
          "points": 0,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 17,
          "points": 0,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 18,
          "points": 0,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": 19,
          "points": 0,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 20,
          "points": 0,
          "laps": 46,
          "status": "DNF"
        },
        {
          "driver_id": "albon",
          "position": null,
          "points": 0,
          "laps": 43,
          "status": "DNF"
        },
        {
          "driver_id": "hulkenberg",
          "position": null,
          "points": 0,
          "laps": 36,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "antonelli",
          "position": 1
        },
        {
          "driver_id": "leclerc",
          "position": 2
        },
        {
          "driver_id": "hamilton",
          "position": 3
        },
        {
          "driver_id": "russell",
          "position": 4
        },
        {
          "driver_id": "hadjar",
          "position": 5
        },
        {
          "driver_id": "norris",
          "position": 6
        },
        {
          "driver_id": "max_verstappen",
          "position": 7
        },
        {
          "driver_id": "piastri",
          "position": 8
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 9
        },
        {
          "driver_id": "lawson",
          "position": 10
        },
        {
          "driver_id": "bortoleto",
          "position": 11
        },
        {
          "driver_id": "gasly",
          "position": 12
        },
        {
          "driver_id": "hulkenberg",
          "position": 13
        },
        {
          "driver_id": "bearman",
          "position": 14
        },
        {
          "driver_id": "sainz",
          "position": 15
        },
        {
          "driver_id": "albon",
          "position": 16
        },
        {
          "driver_id": "ocon",
          "position": 17
        },
        {
          "driver_id": "bottas",
          "position": 18
        },
        {
          "driver_id": "colapinto",
          "position": 19
        },
        {
          "driver_id": "perez",
          "position": 20
        },
        {
          "driver_id": "stroll",
          "position": 21
        },
        {
          "driver_id": "alonso",
          "position": 22
        }
      ],
      "sprint": [
        {
          "driver_id": "antonelli",
          "position": 1,
          "points": 8,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 2,
          "points": 7,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 3,
          "points": 6,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 4,
          "points": 5,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 5,
          "points": 4,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 6,
          "points": 3,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 7,
          "points": 2,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 8,
          "points": 1,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 9,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 10,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 11,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 12,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 13,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 14,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 15,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 16,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 17,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 18,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 19,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 20,
          "points": 0,
          "laps": 17,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": 21,
          "points": 0,
          "laps": 16,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 22,
          "points": 0,
          "laps": 16,
          "status": "F"
        }
      ]
    },
    "10": {
      "circuit_id": "belgium",
      "race": [
        {
          "driver_id": "antonelli",
          "position": 1,
          "points": 25,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 2,
          "points": 18,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 3,
          "points": 15,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 4,
          "points": 12,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 5,
          "points": 10,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 6,
          "points": 8,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 7,
          "points": 6,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 8,
          "points": 4,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 9,
          "points": 2,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 10,
          "points": 1,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 11,
          "points": 0,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 12,
          "points": 0,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 13,
          "points": 0,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 14,
          "points": 0,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 15,
          "points": 0,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 16,
          "points": 0,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 17,
          "points": 0,
          "laps": 44,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 18,
          "points": 0,
          "laps": 43,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 19,
          "points": 0,
          "laps": 42,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 25,
          "status": "DNF"
        },
        {
          "driver_id": "perez",
          "position": null,
          "points": 0,
          "laps": 13,
          "status": "DNF"
        },
        {
          "driver_id": "russell",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "antonelli",
          "position": 1
        },
        {
          "driver_id": "max_verstappen",
          "position": 2
        },
        {
          "driver_id": "norris",
          "position": 3
        },
        {
          "driver_id": "russell",
          "position": 4
        },
        {
          "driver_id": "leclerc",
          "position": 5
        },
        {
          "driver_id": "hamilton",
          "position": 6
        },
        {
          "driver_id": "piastri",
          "position": 7
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 8
        },
        {
          "driver_id": "bortoleto",
          "position": 9
        },
        {
          "driver_id": "hadjar",
          "position": 10
        },
        {
          "driver_id": "lawson",
          "position": 11
        },
        {
          "driver_id": "gasly",
          "position": 12
        },
        {
          "driver_id": "colapinto",
          "position": 13
        },
        {
          "driver_id": "hulkenberg",
          "position": 14
        },
        {
          "driver_id": "sainz",
          "position": 15
        },
        {
          "driver_id": "bearman",
          "position": 16
        },
        {
          "driver_id": "albon",
          "position": 17
        },
        {
          "driver_id": "ocon",
          "position": 18
        },
        {
          "driver_id": "bottas",
          "position": 19
        },
        {
          "driver_id": "perez",
          "position": 20
        },
        {
          "driver_id": "alonso",
          "position": 21
        },
        {
          "driver_id": "stroll",
          "position": 22
        }
      ]
    },
    "11": {
      "circuit_id": "hungary",
      "race": [
        {
          "driver_id": "norris",
          "position": 1,
          "points": 25,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 2,
          "points": 18,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 3,
          "points": 15,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 4,
          "points": 12,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 5,
          "points": 10,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 6,
          "points": 8,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 7,
          "points": 6,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 8,
          "points": 4,
          "laps": 69,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 9,
          "points": 2,
          "laps": 69,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 10,
          "points": 1,
          "laps": 69,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 11,
          "points": 0,
          "laps": 69,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 12,
          "points": 0,
          "laps": 69,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": 13,
          "points": 0,
          "laps": 69,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 14,
          "points": 0,
          "laps": 69,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 15,
          "points": 0,
          "laps": 68,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 16,
          "points": 0,
          "laps": 68,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 17,
          "points": 0,
          "laps": 68,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 18,
          "points": 0,
          "laps": 68,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 19,
          "points": 0,
          "laps": 68,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": null,
          "points": 0,
          "laps": 55,
          "status": "DNF"
        },
        {
          "driver_id": "perez",
          "position": null,
          "points": 0,
          "laps": 48,
          "status": "DNF"
        },
        {
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 13,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "norris",
          "position": 1
        },
        {
          "driver_id": "hamilton",
          "position": 2
        },
        {
          "driver_id": "leclerc",
          "position": 3
        },
        {
          "driver_id": "antonelli",
          "position": 4
        },
        {
          "driver_id": "piastri",
          "position": 5
        },
        {
          "driver_id": "max_verstappen",
          "position": 6
        },
        {
          "driver_id": "russell",
          "position": 7
        },
        {
          "driver_id": "hadjar",
          "position": 8
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 9
        },
        {
          "driver_id": "hulkenberg",
          "position": 10
        },
        {
          "driver_id": "lawson",
          "position": 11
        },
        {
          "driver_id": "gasly",
          "position": 12
        },
        {
          "driver_id": "colapinto",
          "position": 13
        },
        {
          "driver_id": "bortoleto",
          "position": 14
        },
        {
          "driver_id": "ocon",
          "position": 15
        },
        {
          "driver_id": "alonso",
          "position": 16
        },
        {
          "driver_id": "bearman",
          "position": 17
        },
        {
          "driver_id": "sainz",
          "position": 18
        },
        {
          "driver_id": "albon",
          "position": 19
        },
        {
          "driver_id": "stroll",
          "position": 20
        },
        {
          "driver_id": "bottas",
          "position": 21
        },
        {
          "driver_id": "perez",
          "position": 22
        }
      ]
    }
  }
};
