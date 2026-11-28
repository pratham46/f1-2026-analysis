// AUTO-GENERATED dashboard seed (offline fallback).
// Source: cloudflare/worker assemble() — regenerate with: npm run seed.
// The live dashboard prefers the Worker /api/data; this is the fallback when offline.
window.F1_DATA = {
  "generated_at": "2026-11-28",
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
      "predicted_points": 433.3,
      "win_probability": 0.2709,
      "championship_win_probability": 1,
      "podium_probability": 0.6233,
      "avg_predicted_position": 1,
      "current_real_points": 402,
      "current_real_position": 1,
      "current_wins": 9,
      "max_possible_points": 452,
      "points_behind_leader": 0,
      "mathematically_eliminated": false,
      "expected_dnfs": 0.4,
      "experience_seasons": 1
    },
    {
      "rank": 2,
      "driver_id": "max_verstappen",
      "name": "Max Verstappen",
      "short": "VER",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 3,
      "predicted_points": 331.8,
      "win_probability": 0.1355,
      "championship_win_probability": 0,
      "podium_probability": 0.577,
      "avg_predicted_position": 2,
      "current_real_points": 304,
      "current_real_position": 2,
      "current_wins": 4,
      "max_possible_points": 354,
      "points_behind_leader": 98,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
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
      "predicted_points": 288.2,
      "win_probability": 0.0903,
      "championship_win_probability": 0,
      "podium_probability": 0.4825,
      "avg_predicted_position": 3,
      "current_real_points": 264,
      "current_real_position": 4,
      "current_wins": 3,
      "max_possible_points": 314,
      "points_behind_leader": 138,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 6
    },
    {
      "rank": 4,
      "driver_id": "hamilton",
      "name": "Lewis Hamilton",
      "short": "HAM",
      "team": "ferrari",
      "team_name": "Ferrari",
      "color": "#E8002D",
      "number": 44,
      "predicted_points": 285.9,
      "win_probability": 0.0542,
      "championship_win_probability": 0,
      "podium_probability": 0.2965,
      "avg_predicted_position": 5,
      "current_real_points": 267,
      "current_real_position": 3,
      "current_wins": 1,
      "max_possible_points": 317,
      "points_behind_leader": 135,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
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
      "predicted_points": 285.4,
      "win_probability": 0.0677,
      "championship_win_probability": 0,
      "podium_probability": 0.3873,
      "avg_predicted_position": 4,
      "current_real_points": 264,
      "current_real_position": 5,
      "current_wins": 3,
      "max_possible_points": 314,
      "points_behind_leader": 138,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 6
    },
    {
      "rank": 6,
      "driver_id": "leclerc",
      "name": "Charles Leclerc",
      "short": "LEC",
      "team": "ferrari",
      "team_name": "Ferrari",
      "color": "#E8002D",
      "number": 16,
      "predicted_points": 266.3,
      "win_probability": 0.0452,
      "championship_win_probability": 0,
      "podium_probability": 0.2138,
      "avg_predicted_position": 6,
      "current_real_points": 250,
      "current_real_position": 6,
      "current_wins": 1,
      "max_possible_points": 300,
      "points_behind_leader": 152,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
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
      "predicted_points": 180.8,
      "win_probability": 0.0387,
      "championship_win_probability": 0,
      "podium_probability": 0.159,
      "avg_predicted_position": 7,
      "current_real_points": 167,
      "current_real_position": 7,
      "current_wins": 0,
      "max_possible_points": 217,
      "points_behind_leader": 235,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
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
      "predicted_points": 133.6,
      "win_probability": 0.0339,
      "championship_win_probability": 0,
      "podium_probability": 0.1045,
      "avg_predicted_position": 8,
      "current_real_points": 122,
      "current_real_position": 8,
      "current_wins": 0,
      "max_possible_points": 172,
      "points_behind_leader": 280,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
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
      "predicted_points": 98.6,
      "win_probability": 0.0301,
      "championship_win_probability": 0,
      "podium_probability": 0.0695,
      "avg_predicted_position": 9,
      "current_real_points": 89,
      "current_real_position": 9,
      "current_wins": 0,
      "max_possible_points": 139,
      "points_behind_leader": 313,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
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
      "predicted_points": 59.5,
      "win_probability": 0.0271,
      "championship_win_probability": 0,
      "podium_probability": 0.0378,
      "avg_predicted_position": 10,
      "current_real_points": 52,
      "current_real_position": 10,
      "current_wins": 0,
      "max_possible_points": 102,
      "points_behind_leader": 350,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 6
    },
    {
      "rank": 11,
      "driver_id": "arvid_lindblad",
      "name": "Arvid Lindblad",
      "short": "LIN",
      "team": "rb",
      "team_name": "Racing Bulls",
      "color": "#6692FF",
      "number": 41,
      "predicted_points": 39.1,
      "win_probability": 0.0169,
      "championship_win_probability": 0,
      "podium_probability": 0.0008,
      "avg_predicted_position": 16,
      "current_real_points": 38,
      "current_real_position": 11,
      "current_wins": 0,
      "max_possible_points": 88,
      "points_behind_leader": 364,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 0
    },
    {
      "rank": 12,
      "driver_id": "colapinto",
      "name": "Franco Colapinto",
      "short": "COL",
      "team": "alpine",
      "team_name": "Alpine",
      "color": "#FF87BC",
      "number": 43,
      "predicted_points": 38.1,
      "win_probability": 0.0208,
      "championship_win_probability": 0,
      "podium_probability": 0.0058,
      "avg_predicted_position": 13,
      "current_real_points": 35,
      "current_real_position": 12,
      "current_wins": 0,
      "max_possible_points": 85,
      "points_behind_leader": 367,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 1
    },
    {
      "rank": 13,
      "driver_id": "bearman",
      "name": "Oliver Bearman",
      "short": "BEA",
      "team": "haas",
      "team_name": "Haas",
      "color": "#B6BABD",
      "number": 87,
      "predicted_points": 27.4,
      "win_probability": 0.0226,
      "championship_win_probability": 0,
      "podium_probability": 0.0143,
      "avg_predicted_position": 12,
      "current_real_points": 23,
      "current_real_position": 13,
      "current_wins": 0,
      "max_possible_points": 73,
      "points_behind_leader": 379,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 2
    },
    {
      "rank": 14,
      "driver_id": "sainz",
      "name": "Carlos Sainz",
      "short": "SAI",
      "team": "williams",
      "team_name": "Williams",
      "color": "#64C4FF",
      "number": 55,
      "predicted_points": 16.8,
      "win_probability": 0.0246,
      "championship_win_probability": 0,
      "podium_probability": 0.0238,
      "avg_predicted_position": 11,
      "current_real_points": 11,
      "current_real_position": 16,
      "current_wins": 0,
      "max_possible_points": 61,
      "points_behind_leader": 391,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 6
    },
    {
      "rank": 15,
      "driver_id": "hulkenberg",
      "name": "Nico Hulkenberg",
      "short": "HUL",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 27,
      "predicted_points": 14.2,
      "win_probability": 0.0143,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 19,
      "current_real_points": 14,
      "current_real_position": 15,
      "current_wins": 0,
      "max_possible_points": 64,
      "points_behind_leader": 388,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 4
    },
    {
      "rank": 16,
      "driver_id": "bortoleto",
      "name": "Gabriel Bortoleto",
      "short": "BOR",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 5,
      "predicted_points": 14.1,
      "win_probability": 0.0135,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 20,
      "current_real_points": 14,
      "current_real_position": 14,
      "current_wins": 0,
      "max_possible_points": 64,
      "points_behind_leader": 388,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 1
    },
    {
      "rank": 17,
      "driver_id": "alonso",
      "name": "Fernando Alonso",
      "short": "ALO",
      "team": "aston_martin",
      "team_name": "Aston Martin",
      "color": "#358C75",
      "number": 14,
      "predicted_points": 8.6,
      "win_probability": 0.0181,
      "championship_win_probability": 0,
      "podium_probability": 0.001,
      "avg_predicted_position": 15,
      "current_real_points": 7,
      "current_real_position": 18,
      "current_wins": 0,
      "max_possible_points": 57,
      "points_behind_leader": 395,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 5
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
      "predicted_points": 7.7,
      "win_probability": 0.0159,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 17,
      "current_real_points": 7,
      "current_real_position": 17,
      "current_wins": 0,
      "max_possible_points": 57,
      "points_behind_leader": 395,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 6
    },
    {
      "rank": 19,
      "driver_id": "albon",
      "name": "Alex Albon",
      "short": "ALB",
      "team": "williams",
      "team_name": "Williams",
      "color": "#64C4FF",
      "number": 23,
      "predicted_points": 7.3,
      "win_probability": 0.0194,
      "championship_win_probability": 0,
      "podium_probability": 0.0035,
      "avg_predicted_position": 14,
      "current_real_points": 5,
      "current_real_position": 19,
      "current_wins": 0,
      "max_possible_points": 55,
      "points_behind_leader": 397,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 5
    },
    {
      "rank": 20,
      "driver_id": "perez",
      "name": "Sergio Perez",
      "short": "PER",
      "team": "cadillac",
      "team_name": "Cadillac",
      "color": "#C8A464",
      "number": 11,
      "predicted_points": 0.3,
      "win_probability": 0.0151,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 18,
      "current_real_points": 0,
      "current_real_position": 24,
      "current_wins": 0,
      "max_possible_points": 50,
      "points_behind_leader": 402,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 5
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
      "predicted_points": 0.1,
      "win_probability": 0.0129,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 21,
      "current_real_points": 0,
      "current_real_position": 22,
      "current_wins": 0,
      "max_possible_points": 50,
      "points_behind_leader": 402,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
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
      "predicted_points": 0,
      "win_probability": 0.0123,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 22,
      "current_real_points": 0,
      "current_real_position": 23,
      "current_wins": 0,
      "max_possible_points": 50,
      "points_behind_leader": 402,
      "mathematically_eliminated": true,
      "expected_dnfs": 0.4,
      "experience_seasons": 4
    }
  ],
  "constructor_standings_2026": [
    {
      "rank": 1,
      "constructor_id": "mercedes",
      "name": "Mercedes",
      "color": "#27F4D2",
      "predicted_points": 721.5,
      "championship_win_probability": 1,
      "current_real_points": 666,
      "current_wins": 12
    },
    {
      "rank": 2,
      "constructor_id": "ferrari",
      "name": "Ferrari",
      "color": "#E8002D",
      "predicted_points": 552.2,
      "championship_win_probability": 0,
      "current_real_points": 517,
      "current_wins": 2
    },
    {
      "rank": 3,
      "constructor_id": "mclaren",
      "name": "McLaren",
      "color": "#FF8000",
      "predicted_points": 466.2,
      "championship_win_probability": 0,
      "current_real_points": 431,
      "current_wins": 3
    },
    {
      "rank": 4,
      "constructor_id": "red_bull",
      "name": "Red Bull Racing",
      "color": "#3671C6",
      "predicted_points": 465.4,
      "championship_win_probability": 0,
      "current_real_points": 440,
      "current_wins": 4
    },
    {
      "rank": 5,
      "constructor_id": "rb",
      "name": "Racing Bulls",
      "color": "#6692FF",
      "predicted_points": 137.7,
      "championship_win_probability": 0,
      "current_real_points": 114,
      "current_wins": 0
    },
    {
      "rank": 6,
      "constructor_id": "alpine",
      "name": "Alpine",
      "color": "#FF87BC",
      "predicted_points": 97.6,
      "championship_win_probability": 0,
      "current_real_points": 87,
      "current_wins": 0
    },
    {
      "rank": 7,
      "constructor_id": "haas",
      "name": "Haas",
      "color": "#B6BABD",
      "predicted_points": 35.1,
      "championship_win_probability": 0,
      "current_real_points": 31,
      "current_wins": 0
    },
    {
      "rank": 8,
      "constructor_id": "audi",
      "name": "Audi",
      "color": "#00E701",
      "predicted_points": 28.3,
      "championship_win_probability": 0,
      "current_real_points": 28,
      "current_wins": 0
    },
    {
      "rank": 9,
      "constructor_id": "williams",
      "name": "Williams",
      "color": "#64C4FF",
      "predicted_points": 24.1,
      "championship_win_probability": 0,
      "current_real_points": 16,
      "current_wins": 0
    },
    {
      "rank": 10,
      "constructor_id": "aston_martin",
      "name": "Aston Martin",
      "color": "#358C75",
      "predicted_points": 8.7,
      "championship_win_probability": 0,
      "current_real_points": 7,
      "current_wins": 0
    },
    {
      "rank": 11,
      "constructor_id": "cadillac",
      "name": "Cadillac",
      "color": "#C8A464",
      "predicted_points": 0.3,
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "hadjar",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "piastri",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "lawson",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
      "sprint": true,
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
      "sprint": true,
      "completed": true,
      "winner": "norris",
      "top5": [
        {
          "driver_id": "norris",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "russell",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "hamilton",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "leclerc",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "max_verstappen",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "norris",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "piastri",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": null
    },
    {
      "round": 14,
      "circuit_id": "madrid",
      "name": "Madrid GP",
      "race_name": "Madrid GP",
      "date": "2026-09-13",
      "race_date": "2026-09-13",
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
          "driver_id": "max_verstappen",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "norris",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "leclerc",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "russell",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": null
    },
    {
      "round": 15,
      "circuit_id": "azerbaijan",
      "name": "Azerbaijan GP",
      "race_name": "Azerbaijan GP",
      "date": "2026-09-26",
      "race_date": "2026-09-26",
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
          "driver_id": "hadjar",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "leclerc",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": null
    },
    {
      "round": 16,
      "circuit_id": "sepang",
      "name": "Bahrain GP (Sepang)",
      "race_name": "Bahrain GP (Sepang)",
      "date": "2026-10-04",
      "race_date": "2026-10-04",
      "sprint": false,
      "completed": true,
      "winner": "max_verstappen",
      "top5": [
        {
          "driver_id": "max_verstappen",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "antonelli",
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
          "driver_id": "hadjar",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": null
    },
    {
      "round": 17,
      "circuit_id": "singapore",
      "name": "Singapore GP",
      "race_name": "Singapore GP",
      "date": "2026-10-11",
      "race_date": "2026-10-11",
      "sprint": true,
      "completed": true,
      "winner": "max_verstappen",
      "top5": [
        {
          "driver_id": "max_verstappen",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "leclerc",
          "win_prob": null,
          "position": 2
        },
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "norris",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "piastri",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": null
    },
    {
      "round": 18,
      "circuit_id": "americas",
      "name": "United States GP",
      "race_name": "United States GP",
      "date": "2026-10-25",
      "race_date": "2026-10-25",
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
          "driver_id": "norris",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": null
    },
    {
      "round": 19,
      "circuit_id": "mexico",
      "name": "Mexico City GP",
      "race_name": "Mexico City GP",
      "date": "2026-11-01",
      "race_date": "2026-11-01",
      "sprint": false,
      "completed": true,
      "winner": "max_verstappen",
      "top5": [
        {
          "driver_id": "max_verstappen",
          "win_prob": null,
          "position": 1
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "norris",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": null
    },
    {
      "round": 20,
      "circuit_id": "brazil",
      "name": "São Paulo GP",
      "race_name": "São Paulo GP",
      "date": "2026-11-08",
      "race_date": "2026-11-08",
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
          "driver_id": "hadjar",
          "win_prob": null,
          "position": 3
        },
        {
          "driver_id": "russell",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 5
        }
      ],
      "predicted_top5": null
    },
    {
      "round": 21,
      "circuit_id": "las_vegas",
      "name": "Las Vegas GP",
      "race_name": "Las Vegas GP",
      "date": "2026-11-22",
      "race_date": "2026-11-22",
      "sprint": false,
      "completed": true,
      "winner": "max_verstappen",
      "top5": [
        {
          "driver_id": "max_verstappen",
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
          "driver_id": "antonelli",
          "win_prob": null,
          "position": 4
        },
        {
          "driver_id": "gasly",
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
          "driver_id": "max_verstappen",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0677
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 22,
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
          "driver_id": "max_verstappen",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0677
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "max_verstappen",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0677
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.0542
        }
      ]
    },
    {
      "round": 23,
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
          "driver_id": "max_verstappen",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0677
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.0542
        }
      ],
      "predicted_top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "max_verstappen",
          "win_prob": 0.1355
        },
        {
          "driver_id": "russell",
          "win_prob": 0.0903
        },
        {
          "driver_id": "norris",
          "win_prob": 0.0677
        },
        {
          "driver_id": "hamilton",
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
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
    "12": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "russell",
        "win_prob": 0.1355
      },
      {
        "driver_id": "hamilton",
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
    "21": [
      {
        "driver_id": "antonelli",
        "win_prob": 0.2709
      },
      {
        "driver_id": "max_verstappen",
        "win_prob": 0.1355
      },
      {
        "driver_id": "russell",
        "win_prob": 0.0903
      },
      {
        "driver_id": "norris",
        "win_prob": 0.0677
      },
      {
        "driver_id": "hamilton",
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
      "date": "2026-07-05",
      "sprint": true
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
      "date": "2026-08-23",
      "sprint": true
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
      "id": "sepang",
      "name": "Bahrain GP (Sepang)",
      "date": "2026-10-04"
    },
    {
      "round": 17,
      "id": "singapore",
      "name": "Singapore GP",
      "date": "2026-10-11",
      "sprint": true
    },
    {
      "round": 18,
      "id": "americas",
      "name": "United States GP",
      "date": "2026-10-25"
    },
    {
      "round": 19,
      "id": "mexico",
      "name": "Mexico City GP",
      "date": "2026-11-01"
    },
    {
      "round": 20,
      "id": "brazil",
      "name": "São Paulo GP",
      "date": "2026-11-08"
    },
    {
      "round": 21,
      "id": "las_vegas",
      "name": "Las Vegas GP",
      "date": "2026-11-22"
    },
    {
      "round": 22,
      "id": "qatar",
      "name": "Qatar GP",
      "date": "2026-11-29"
    },
    {
      "round": 23,
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
  "races_completed_2026": 21,
  "next_race": {
    "round": 22,
    "id": "qatar",
    "name": "Qatar GP",
    "date": "2026-11-29",
    "circuit_id": "qatar",
    "days_until": 2
  },
  "next_race_weather": {
    "circuit_id": "qatar",
    "date": "2026-11-29",
    "t_max": 27.2,
    "t_min": 19.4,
    "rain_prob": 0,
    "wind_max": 13
  },
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
      "points": 402,
      "wins": 9
    },
    {
      "position": 2,
      "driver_id": "max_verstappen",
      "name": "Max Verstappen",
      "short": "VER",
      "constructor_id": "red_bull",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 3,
      "points": 304,
      "wins": 4
    },
    {
      "position": 3,
      "driver_id": "hamilton",
      "name": "Lewis Hamilton",
      "short": "HAM",
      "constructor_id": "ferrari",
      "team": "ferrari",
      "team_name": "Ferrari",
      "color": "#E8002D",
      "number": 44,
      "points": 267,
      "wins": 1
    },
    {
      "position": 4,
      "driver_id": "russell",
      "name": "George Russell",
      "short": "RUS",
      "constructor_id": "mercedes",
      "team": "mercedes",
      "team_name": "Mercedes",
      "color": "#27F4D2",
      "number": 63,
      "points": 264,
      "wins": 3
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
      "points": 264,
      "wins": 3
    },
    {
      "position": 6,
      "driver_id": "leclerc",
      "name": "Charles Leclerc",
      "short": "LEC",
      "constructor_id": "ferrari",
      "team": "ferrari",
      "team_name": "Ferrari",
      "color": "#E8002D",
      "number": 16,
      "points": 250,
      "wins": 1
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
      "points": 167,
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
      "points": 122,
      "wins": 0
    },
    {
      "position": 9,
      "driver_id": "lawson",
      "name": "Liam Lawson",
      "short": "LAW",
      "constructor_id": "red_bull",
      "team": "red_bull",
      "team_name": "Racing Bulls",
      "color": "#6692FF",
      "number": 30,
      "points": 89,
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
      "points": 52,
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
      "points": 38,
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
      "points": 35,
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
      "points": 23,
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
      "points": 14,
      "wins": 0
    },
    {
      "position": 15,
      "driver_id": "hulkenberg",
      "name": "Nico Hulkenberg",
      "short": "HUL",
      "constructor_id": "audi",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 27,
      "points": 14,
      "wins": 0
    },
    {
      "position": 16,
      "driver_id": "sainz",
      "name": "Carlos Sainz",
      "short": "SAI",
      "constructor_id": "williams",
      "team": "williams",
      "team_name": "Williams",
      "color": "#64C4FF",
      "number": 55,
      "points": 11,
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
      "points": 7,
      "wins": 0
    },
    {
      "position": 18,
      "driver_id": "alonso",
      "name": "Fernando Alonso",
      "short": "ALO",
      "constructor_id": "aston_martin",
      "team": "aston_martin",
      "team_name": "Aston Martin",
      "color": "#358C75",
      "number": 14,
      "points": 7,
      "wins": 0
    },
    {
      "position": 19,
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
      "position": 20,
      "driver_id": "tsunoda",
      "name": "tsunoda",
      "short": "TSU",
      "constructor_id": "rb",
      "team": "rb",
      "team_name": "rb",
      "color": "#6692FF",
      "number": 0,
      "points": 1,
      "wins": 0
    },
    {
      "position": 21,
      "driver_id": "ryo_hirakawa",
      "name": "ryo_hirakawa",
      "short": "RYO",
      "constructor_id": "haas",
      "team": "haas",
      "team_name": "haas",
      "color": "#B6BABD",
      "number": 0,
      "points": 1,
      "wins": 0
    },
    {
      "position": 22,
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
      "position": 23,
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
      "position": 24,
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
    },
    {
      "position": 25,
      "driver_id": "rafael_camara",
      "name": "rafael_camara",
      "short": "RAF",
      "constructor_id": "haas",
      "team": "haas",
      "team_name": "haas",
      "color": "#B6BABD",
      "number": 0,
      "points": 0,
      "wins": 0
    }
  ],
  "real_constructor_standings_2026": [
    {
      "position": 1,
      "constructor_id": "mercedes",
      "points": 666,
      "wins": 12
    },
    {
      "position": 2,
      "constructor_id": "ferrari",
      "points": 517,
      "wins": 2
    },
    {
      "position": 3,
      "constructor_id": "red_bull",
      "points": 440,
      "wins": 4
    },
    {
      "position": 4,
      "constructor_id": "mclaren",
      "points": 431,
      "wins": 3
    },
    {
      "position": 5,
      "constructor_id": "rb",
      "points": 114,
      "wins": 0
    },
    {
      "position": 6,
      "constructor_id": "alpine",
      "points": 87,
      "wins": 0
    },
    {
      "position": 7,
      "constructor_id": "haas",
      "points": 31,
      "wins": 0
    },
    {
      "position": 8,
      "constructor_id": "audi",
      "points": 28,
      "wins": 0
    },
    {
      "position": 9,
      "constructor_id": "williams",
      "points": 16,
      "wins": 0
    },
    {
      "position": 10,
      "constructor_id": "aston_martin",
      "points": 7,
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
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+23.394",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+24.261",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+26.553",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+29.010",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+30.369",
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
    },
    {
      "round": 12,
      "name": "Dutch Grand Prix",
      "date": "2026-08-23",
      "circuit_id": "netherlands",
      "results": [
        {
          "position": 1,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "2:04:44.859",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+11.536",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+15.906",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+16.755",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+17.258",
          "fastest_lap": true
        },
        {
          "position": 6,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+32.332",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "lawson",
          "constructor_id": "red_bull",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+1:19.915",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "hulkenberg",
          "constructor_id": "audi",
          "points": 4,
          "status": "Lapped",
          "time_or_gap": "+36.049",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "alonso",
          "constructor_id": "aston_martin",
          "points": 2,
          "status": "Lapped",
          "time_or_gap": "+48.393",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 1,
          "status": "Lapped",
          "time_or_gap": "+49.640",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 13,
      "name": "Italian Grand Prix",
      "date": "2026-09-06",
      "circuit_id": "italy",
      "results": [
        {
          "position": 1,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:51:15.281",
          "fastest_lap": true
        },
        {
          "position": 2,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+3.857",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+14.718",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+19.056",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+19.253",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+24.655",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+27.351",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+45.136",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "colapinto",
          "constructor_id": "alpine",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+47.353",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "tsunoda",
          "constructor_id": "rb",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+58.187",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 14,
      "name": "Spanish Grand Prix",
      "date": "2026-09-13",
      "circuit_id": "madrid",
      "results": [
        {
          "position": 1,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:34:23.754",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+4.351",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+5.089",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+29.116",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+29.829",
          "fastest_lap": true
        },
        {
          "position": 6,
          "driver_id": "lawson",
          "constructor_id": "red_bull",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+1:26.746",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "colapinto",
          "constructor_id": "alpine",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+1:34.281",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+1:35.839",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 2,
          "status": "Lapped",
          "time_or_gap": "+10.408",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "hulkenberg",
          "constructor_id": "audi",
          "points": 1,
          "status": "Lapped",
          "time_or_gap": "+11.298",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 15,
      "name": "Azerbaijan Grand Prix",
      "date": "2026-09-26",
      "circuit_id": "azerbaijan",
      "results": [
        {
          "position": 1,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:38:02.143",
          "fastest_lap": true
        },
        {
          "position": 2,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+0.196",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+10.704",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+14.136",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+14.512",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+22.382",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+31.159",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "ocon",
          "constructor_id": "haas",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+31.189",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "bearman",
          "constructor_id": "haas",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+31.929",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "sainz",
          "constructor_id": "williams",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+32.416",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 16,
      "name": "Bahrain Grand Prix in Malaysia",
      "date": "2026-10-04",
      "circuit_id": "sepang",
      "results": [
        {
          "position": 1,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:47:14.808",
          "fastest_lap": true
        },
        {
          "position": 2,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+2.307",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+4.919",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+7.258",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+8.571",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+9.454",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+12.753",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "alonso",
          "constructor_id": "aston_martin",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+13.372",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+13.993",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+15.928",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 17,
      "name": "Singapore Grand Prix",
      "date": "2026-10-11",
      "circuit_id": "singapore",
      "results": [
        {
          "position": 1,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:42:00.785",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+7.335",
          "fastest_lap": true
        },
        {
          "position": 3,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+24.573",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+40.506",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+49.644",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+53.188",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+1:21.666",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "hulkenberg",
          "constructor_id": "audi",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+1:23.386",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+1:24.677",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+1:30.862",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 18,
      "name": "United States Grand Prix",
      "date": "2026-10-25",
      "circuit_id": "americas",
      "results": [
        {
          "position": 1,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:35:16.650",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+13.078",
          "fastest_lap": true
        },
        {
          "position": 3,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+17.485",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+18.515",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+30.521",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+34.373",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+52.674",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+54.303",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+1:19.183",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+1:27.516",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 19,
      "name": "Mexico City Grand Prix",
      "date": "2026-11-01",
      "circuit_id": "mexico",
      "results": [
        {
          "position": 1,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "2:20:28.772",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+0.799",
          "fastest_lap": true
        },
        {
          "position": 3,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+4.006",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+10.707",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+11.778",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+12.263",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+20.899",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "bortoleto",
          "constructor_id": "audi",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+22.041",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+22.503",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "ryo_hirakawa",
          "constructor_id": "haas",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+25.373",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 20,
      "name": "Brazilian Grand Prix",
      "date": "2026-11-08",
      "circuit_id": "brazil",
      "results": [
        {
          "position": 1,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:35:23.504",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+14.602",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "hadjar",
          "constructor_id": "red_bull",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+24.485",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+33.991",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+41.017",
          "fastest_lap": true
        },
        {
          "position": 6,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+56.475",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+1:15.402",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+1:18.586",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 2,
          "status": "Lapped",
          "time_or_gap": "+4.427",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "hulkenberg",
          "constructor_id": "audi",
          "points": 1,
          "status": "Lapped",
          "time_or_gap": "+17.105",
          "fastest_lap": false
        }
      ]
    },
    {
      "round": 21,
      "name": "Las Vegas Grand Prix",
      "date": "2026-11-22",
      "circuit_id": "las_vegas",
      "results": [
        {
          "position": 1,
          "driver_id": "max_verstappen",
          "constructor_id": "red_bull",
          "points": 25,
          "status": "Finished",
          "time_or_gap": "1:27:39.624",
          "fastest_lap": false
        },
        {
          "position": 2,
          "driver_id": "norris",
          "constructor_id": "mclaren",
          "points": 18,
          "status": "Finished",
          "time_or_gap": "+0.639",
          "fastest_lap": false
        },
        {
          "position": 3,
          "driver_id": "piastri",
          "constructor_id": "mclaren",
          "points": 15,
          "status": "Finished",
          "time_or_gap": "+1.529",
          "fastest_lap": false
        },
        {
          "position": 4,
          "driver_id": "antonelli",
          "constructor_id": "mercedes",
          "points": 12,
          "status": "Finished",
          "time_or_gap": "+2.574",
          "fastest_lap": false
        },
        {
          "position": 5,
          "driver_id": "gasly",
          "constructor_id": "alpine",
          "points": 10,
          "status": "Finished",
          "time_or_gap": "+2.927",
          "fastest_lap": false
        },
        {
          "position": 6,
          "driver_id": "colapinto",
          "constructor_id": "alpine",
          "points": 8,
          "status": "Finished",
          "time_or_gap": "+7.955",
          "fastest_lap": false
        },
        {
          "position": 7,
          "driver_id": "hamilton",
          "constructor_id": "ferrari",
          "points": 6,
          "status": "Finished",
          "time_or_gap": "+12.795",
          "fastest_lap": false
        },
        {
          "position": 8,
          "driver_id": "sainz",
          "constructor_id": "williams",
          "points": 4,
          "status": "Finished",
          "time_or_gap": "+12.938",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "russell",
          "constructor_id": "mercedes",
          "points": 2,
          "status": "Finished",
          "time_or_gap": "+13.192",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "leclerc",
          "constructor_id": "ferrari",
          "points": 1,
          "status": "Finished",
          "time_or_gap": "+17.554",
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
      "dob": "2004-02-04",
      "nationality": "Estonian",
      "wiki": "https://en.wikipedia.org/wiki/Paul_Aron"
    },
    "bearman": {
      "dob": "2005-05-08",
      "nationality": "British",
      "wiki": "http://en.wikipedia.org/wiki/Oliver_Bearman"
    },
    "dino_beganovic": {
      "dob": "2004-01-19",
      "nationality": "Swedish",
      "wiki": "https://en.wikipedia.org/wiki/Dino_Beganovic"
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
      "dob": "2002-01-31",
      "nationality": "British",
      "wiki": "https://en.wikipedia.org/wiki/Luke_Browning"
    },
    "rafael_camara": {
      "dob": "2005-05-05",
      "nationality": "Brazilian",
      "wiki": "https://en.wikipedia.org/wiki/Rafael_C%C3%A2mara"
    },
    "colapinto": {
      "dob": "2003-05-27",
      "nationality": "Argentine",
      "wiki": "http://en.wikipedia.org/wiki/Franco_Colapinto"
    },
    "jak_crawford": {
      "dob": "2005-05-02",
      "nationality": "American",
      "wiki": "https://en.wikipedia.org/wiki/Jak_Crawford"
    },
    "leonardo_fornaroli": {
      "dob": "2004-12-03",
      "nationality": "Italian",
      "wiki": "https://en.wikipedia.org/wiki/Leonardo_Fornaroli"
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
      "dob": "2000-03-30",
      "nationality": "American",
      "wiki": "https://en.wikipedia.org/wiki/Colton_Herta"
    },
    "ryo_hirakawa": {
      "dob": "1994-03-07",
      "nationality": "Japanese",
      "wiki": "https://en.wikipedia.org/wiki/Ryo_Hirakawa"
    },
    "hulkenberg": {
      "dob": "1987-08-19",
      "nationality": "German",
      "wiki": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg"
    },
    "ayumu_iwasa": {
      "dob": "2001-09-22",
      "nationality": "Japanese",
      "wiki": "https://en.wikipedia.org/wiki/Ayumu_Iwasa"
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
    "gabriele_mini": {
      "dob": "2005-03-20",
      "nationality": "Italian",
      "wiki": "https://en.wikipedia.org/wiki/Gabriele_Mini"
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
    "freddie_slater": {
      "dob": "2008-08-09",
      "nationality": "British",
      "wiki": "https://en.wikipedia.org/wiki/Freddie_Slater_(racing_driver)"
    },
    "stroll": {
      "dob": "1998-10-29",
      "nationality": "Canadian",
      "wiki": "http://en.wikipedia.org/wiki/Lance_Stroll"
    },
    "nikola_tsolov": {
      "dob": "2006-12-21",
      "nationality": "Bulgarian",
      "wiki": "https://en.wikipedia.org/wiki/Nikola_Tsolov"
    },
    "tsunoda": {
      "dob": "2000-05-11",
      "nationality": "Japanese",
      "wiki": "http://en.wikipedia.org/wiki/Yuki_Tsunoda"
    },
    "max_verstappen": {
      "dob": "1997-09-30",
      "nationality": "Dutch",
      "wiki": "http://en.wikipedia.org/wiki/Max_Verstappen"
    },
    "frederik_vesti": {
      "dob": "2002-01-13",
      "nationality": "Danish",
      "wiki": "https://en.wikipedia.org/wiki/Frederik_Vesti"
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
      "name": "Lusail International Circuit",
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
    },
    "12": {
      "session_key": 11353,
      "pit_stops": {
        "norris": [
          {
            "lap": 2,
            "duration": 1571.5
          },
          {
            "lap": 21,
            "duration": 18
          },
          {
            "lap": 47,
            "duration": 17.5
          }
        ],
        "antonelli": [
          {
            "lap": 2,
            "duration": 1572.5
          },
          {
            "lap": 21,
            "duration": 18.7
          },
          {
            "lap": 40,
            "duration": 17.7
          },
          {
            "lap": 56,
            "duration": 19.1
          }
        ],
        "russell": [
          {
            "lap": 2,
            "duration": 1573.6
          },
          {
            "lap": 17,
            "duration": 18
          },
          {
            "lap": 40,
            "duration": 17.4
          }
        ],
        "leclerc": [
          {
            "lap": 2,
            "duration": 1573.7
          },
          {
            "lap": 21,
            "duration": 19.7
          },
          {
            "lap": 43,
            "duration": 18.7
          },
          {
            "lap": 55,
            "duration": 18.7
          }
        ],
        "piastri": [
          {
            "lap": 2,
            "duration": 1574.8
          },
          {
            "lap": 18,
            "duration": 20.2
          },
          {
            "lap": 44,
            "duration": 18.1
          },
          {
            "lap": 55,
            "duration": 17.8
          }
        ],
        "hamilton": [
          {
            "lap": 2,
            "duration": 1576.6
          },
          {
            "lap": 25,
            "duration": 17.8
          },
          {
            "lap": 55,
            "duration": 18.7
          }
        ],
        "lawson": [
          {
            "lap": 2,
            "duration": 1576.8
          },
          {
            "lap": 21,
            "duration": 18.6
          },
          {
            "lap": 47,
            "duration": 18.2
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 2,
            "duration": 1578.2
          },
          {
            "lap": 5,
            "duration": 12.3
          },
          {
            "lap": 36,
            "duration": 18.5
          }
        ],
        "gasly": [
          {
            "lap": 2,
            "duration": 1577.2
          },
          {
            "lap": 18,
            "duration": 18
          },
          {
            "lap": 46,
            "duration": 18.1
          }
        ],
        "colapinto": [
          {
            "lap": 2,
            "duration": 1578.8
          },
          {
            "lap": 8,
            "duration": 12
          },
          {
            "lap": 21,
            "duration": 19.4
          },
          {
            "lap": 45,
            "duration": 18.3
          }
        ],
        "hulkenberg": [
          {
            "lap": 2,
            "duration": 1582.9
          },
          {
            "lap": 19,
            "duration": 17
          },
          {
            "lap": 48,
            "duration": 17.7
          }
        ],
        "albon": [
          {
            "lap": 2,
            "duration": 1579.2
          },
          {
            "lap": 26,
            "duration": 17.5
          },
          {
            "lap": 49,
            "duration": 17.4
          }
        ],
        "ocon": [
          {
            "lap": 2,
            "duration": 1584.8
          },
          {
            "lap": 16,
            "duration": 18.6
          },
          {
            "lap": 36,
            "duration": 17.9
          }
        ],
        "alonso": [
          {
            "lap": 2,
            "duration": 1587.1
          },
          {
            "lap": 34,
            "duration": 17.6
          }
        ],
        "bearman": [
          {
            "lap": 2,
            "duration": 1584.6
          }
        ],
        "bortoleto": [
          {
            "lap": 2,
            "duration": 1583.7
          },
          {
            "lap": 11,
            "duration": 18
          },
          {
            "lap": 34,
            "duration": 17.5
          },
          {
            "lap": 53,
            "duration": 19.2
          }
        ],
        "stroll": [
          {
            "lap": 2,
            "duration": 1619.9
          },
          {
            "lap": 15,
            "duration": 17.6
          },
          {
            "lap": 35,
            "duration": 17.2
          }
        ],
        "sainz": [
          {
            "lap": 2,
            "duration": 1617.4
          },
          {
            "lap": 30,
            "duration": 17.8
          },
          {
            "lap": 65,
            "duration": 18
          }
        ],
        "bottas": [
          {
            "lap": 2,
            "duration": 1612.1
          },
          {
            "lap": 28,
            "duration": 20
          },
          {
            "lap": 51,
            "duration": 19.6
          }
        ],
        "perez": [
          {
            "lap": 2,
            "duration": 1618
          },
          {
            "lap": 29,
            "duration": 18.4
          },
          {
            "lap": 52,
            "duration": 18.5
          }
        ]
      },
      "stints": {
        "max_verstappen": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "norris": [
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
            "lap_end": 21,
            "tyre_age": 3,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 48,
            "lap_end": 72,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 3,
            "lap_end": 21,
            "tyre_age": 2,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 40,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 41,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 57,
            "lap_end": 72,
            "tyre_age": 3,
            "stint_number": 5
          }
        ],
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 3,
            "lap_end": 17,
            "tyre_age": 2,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 18,
            "lap_end": 40,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 41,
            "lap_end": 72,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "leclerc": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 22,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 44,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 56,
            "lap_end": 72,
            "tyre_age": 0,
            "stint_number": 5
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
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 19,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 56,
            "lap_end": 72,
            "tyre_age": 0,
            "stint_number": 5
          }
        ],
        "hamilton": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 25,
            "tyre_age": 3,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 26,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 56,
            "lap_end": 72,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "lawson": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 22,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "MEDIUM",
            "lap_start": 48,
            "lap_end": 72,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 3,
            "lap_end": 5,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 6,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 37,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 3,
            "lap_end": 18,
            "tyre_age": 3,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 19,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "MEDIUM",
            "lap_start": 47,
            "lap_end": 71,
            "tyre_age": 2,
            "stint_number": 4
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 3,
            "lap_end": 8,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 9,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 5
          }
        ],
        "hulkenberg": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 19,
            "tyre_age": 3,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 20,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 49,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "ocon": [
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
            "lap_end": 16,
            "tyre_age": 3,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 17,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 37,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "albon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 3,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 27,
            "lap_end": 49,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "MEDIUM",
            "lap_start": 50,
            "lap_end": 66,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "alonso": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 34,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 35,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "bearman": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 3,
            "tyre_age": 3,
            "stint_number": 2
          }
        ],
        "stroll": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 16,
            "lap_end": 35,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 36,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "bortoleto": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 11,
            "tyre_age": 3,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 12,
            "lap_end": 34,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 35,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 54,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 5
          }
        ],
        "sainz": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 31,
            "lap_end": 65,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 66,
            "lap_end": 70,
            "tyre_age": 2,
            "stint_number": 4
          }
        ],
        "perez": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 3,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 30,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 53,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "bottas": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 3,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 29,
            "lap_end": 51,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 52,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 4
          }
        ]
      }
    },
    "13": {
      "session_key": 11361,
      "pit_stops": {
        "russell": [
          {
            "lap": 3,
            "duration": 1846.2
          }
        ],
        "gasly": [
          {
            "lap": 3,
            "duration": 1844.6
          }
        ],
        "max_verstappen": [
          {
            "lap": 3,
            "duration": 1844.1
          },
          {
            "lap": 28,
            "duration": 24.93
          }
        ],
        "colapinto": [
          {
            "lap": 3,
            "duration": 1844.9
          }
        ],
        "piastri": [
          {
            "lap": 3,
            "duration": 1840.4
          }
        ],
        "norris": [
          {
            "lap": 3,
            "duration": 1840.7
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 3,
            "duration": 1842.6
          }
        ],
        "hamilton": [
          {
            "lap": 3,
            "duration": 1845.2
          }
        ],
        "bearman": [
          {
            "lap": 3,
            "duration": 1843.4
          }
        ],
        "ocon": [
          {
            "lap": 3,
            "duration": 1842.6
          },
          {
            "lap": 27,
            "duration": 27.2
          }
        ],
        "bortoleto": [
          {
            "lap": 3,
            "duration": 1842.7
          }
        ],
        "antonelli": [
          {
            "lap": 3,
            "duration": 1842.6
          },
          {
            "lap": 28,
            "duration": 24.96
          }
        ],
        "hulkenberg": [
          {
            "lap": 3,
            "duration": 1844.1
          },
          {
            "lap": 27,
            "duration": 24.25
          }
        ],
        "lawson": [
          {
            "lap": 3,
            "duration": 1841.5
          },
          {
            "lap": 12,
            "duration": 31.2
          }
        ],
        "sainz": [
          {
            "lap": 3,
            "duration": 1842.7
          },
          {
            "lap": 27,
            "duration": 24.57
          }
        ],
        "perez": [
          {
            "lap": 3,
            "duration": 1842.5
          },
          {
            "lap": 27,
            "duration": 28.46
          }
        ],
        "albon": [
          {
            "lap": 3,
            "duration": 1842.5
          },
          {
            "lap": 46,
            "duration": 26.39
          }
        ],
        "bottas": [
          {
            "lap": 3,
            "duration": 1841.8
          },
          {
            "lap": 27,
            "duration": 35.25
          }
        ],
        "stroll": [
          {
            "lap": 3,
            "duration": 1842
          }
        ],
        "alonso": [
          {
            "lap": 3,
            "duration": 1839.4
          }
        ]
      },
      "stints": {
        "bottas": [
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
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 28,
            "lap_end": 51,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "norris": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "leclerc": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "bearman": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hulkenberg": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 28,
            "lap_end": 53,
            "tyre_age": 3,
            "stint_number": 3
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
            "compound": "SOFT",
            "lap_start": 4,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 28,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "albon": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
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
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 4,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 29,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "stroll": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hamilton": [
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
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "alonso": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 4,
            "lap_end": 23,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "max_verstappen": [
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
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 29,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "sainz": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 28,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 12,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 13,
            "lap_end": 53,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "piastri": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bortoleto": [
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
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "ocon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 4,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 28,
            "lap_end": 52,
            "tyre_age": 0,
            "stint_number": 3
          }
        ]
      }
    },
    "14": {
      "session_key": 11369,
      "pit_stops": {
        "antonelli": [
          {
            "lap": 14,
            "duration": 31.84
          }
        ],
        "max_verstappen": [
          {
            "lap": 14,
            "duration": 31.07
          }
        ],
        "russell": [
          {
            "lap": 14,
            "duration": 30.74
          },
          {
            "lap": 28,
            "duration": 30.62
          }
        ],
        "colapinto": [
          {
            "lap": 14,
            "duration": 31.67
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 14,
            "duration": 31.85
          }
        ],
        "hulkenberg": [
          {
            "lap": 14,
            "duration": 31.04
          }
        ],
        "ocon": [
          {
            "lap": 14,
            "duration": 32.17
          }
        ],
        "albon": [
          {
            "lap": 14,
            "duration": 31.16
          }
        ],
        "perez": [
          {
            "lap": 14,
            "duration": 32.22
          }
        ],
        "alonso": [
          {
            "lap": 14,
            "duration": 43.84
          },
          {
            "lap": 37,
            "duration": 32
          }
        ],
        "norris": [
          {
            "lap": 15,
            "duration": 35.1
          }
        ],
        "sainz": [
          {
            "lap": 23,
            "duration": 46.37
          },
          {
            "lap": 31,
            "duration": 31.43
          }
        ],
        "bottas": [
          {
            "lap": 29,
            "duration": 31.71
          },
          {
            "lap": 43,
            "duration": 31.67
          }
        ],
        "bearman": [
          {
            "lap": 33,
            "duration": 33.31
          },
          {
            "lap": 43,
            "duration": 31.44
          }
        ],
        "piastri": [
          {
            "lap": 42,
            "duration": 31.41
          }
        ],
        "lawson": [
          {
            "lap": 44,
            "duration": 30.9
          }
        ],
        "bortoleto": [
          {
            "lap": 47,
            "duration": 30.84
          }
        ],
        "leclerc": [
          {
            "lap": 48,
            "duration": 31.32
          }
        ],
        "gasly": [
          {
            "lap": 55,
            "duration": 31.48
          }
        ]
      },
      "stints": {
        "russell": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 15,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 29,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 3
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
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "albon": [
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
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "sainz": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 23,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 24,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 32,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "colapinto": [
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
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "alonso": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 15,
            "lap_end": 37,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 38,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "gasly": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 56,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bortoleto": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 47,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 48,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "piastri": [
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
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "norris": [
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
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "stroll": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 12,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "max_verstappen": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 15,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "leclerc": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 49,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hulkenberg": [
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
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bearman": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 33,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 34,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 44,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "perez": [
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
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "ocon": [
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
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hamilton": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 6,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "lawson": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 45,
            "lap_end": 57,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "arvid_lindblad": [
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
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bottas": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 30,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 44,
            "lap_end": 54,
            "tyre_age": 0,
            "stint_number": 3
          }
        ]
      }
    },
    "15": {
      "session_key": 11377,
      "pit_stops": {
        "sainz": [
          {
            "lap": 20,
            "duration": 20.66
          },
          {
            "lap": 30,
            "duration": 21.43
          },
          {
            "lap": 36,
            "duration": 15.9
          }
        ],
        "bottas": [
          {
            "lap": 26,
            "duration": 23.02
          },
          {
            "lap": 36,
            "duration": 15
          }
        ],
        "gasly": [
          {
            "lap": 30,
            "duration": 20.74
          }
        ],
        "antonelli": [
          {
            "lap": 30,
            "duration": 20.77
          },
          {
            "lap": 36,
            "duration": 16.3
          }
        ],
        "norris": [
          {
            "lap": 30,
            "duration": 20.8
          }
        ],
        "colapinto": [
          {
            "lap": 30,
            "duration": 20.73
          }
        ],
        "bearman": [
          {
            "lap": 30,
            "duration": 21.28
          },
          {
            "lap": 36,
            "duration": 16.3
          }
        ],
        "ocon": [
          {
            "lap": 30,
            "duration": 21.42
          },
          {
            "lap": 36,
            "duration": 16.1
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 30,
            "duration": 22.18
          },
          {
            "lap": 36,
            "duration": 16
          }
        ],
        "bortoleto": [
          {
            "lap": 30,
            "duration": 20.39
          },
          {
            "lap": 36,
            "duration": 15.2
          }
        ],
        "perez": [
          {
            "lap": 30,
            "duration": 22.27
          },
          {
            "lap": 36,
            "duration": 15.3
          }
        ],
        "russell": [
          {
            "lap": 31,
            "duration": 20.68
          },
          {
            "lap": 36,
            "duration": 15.1
          }
        ],
        "piastri": [
          {
            "lap": 31,
            "duration": 20.54
          },
          {
            "lap": 36,
            "duration": 15.1
          }
        ],
        "max_verstappen": [
          {
            "lap": 31,
            "duration": 20.8
          },
          {
            "lap": 36,
            "duration": 15.2
          }
        ],
        "hadjar": [
          {
            "lap": 31,
            "duration": 21.9
          },
          {
            "lap": 36,
            "duration": 15.2
          }
        ],
        "leclerc": [
          {
            "lap": 31,
            "duration": 22
          },
          {
            "lap": 36,
            "duration": 15.5
          }
        ],
        "hamilton": [
          {
            "lap": 31,
            "duration": 22.11
          },
          {
            "lap": 36,
            "duration": 16.5
          }
        ],
        "lawson": [
          {
            "lap": 31,
            "duration": 21.72
          },
          {
            "lap": 36,
            "duration": 23.7
          }
        ],
        "hulkenberg": [
          {
            "lap": 32,
            "duration": 20.11
          },
          {
            "lap": 36,
            "duration": 15.3
          }
        ]
      },
      "stints": {
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 32,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 5,
            "stint_number": 3
          }
        ],
        "hadjar": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 32,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 5,
            "stint_number": 3
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
            "compound": "SOFT",
            "lap_start": 21,
            "lap_end": 30,
            "tyre_age": 4,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 31,
            "lap_end": 36,
            "tyre_age": 4,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 10,
            "stint_number": 4
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 31,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 6,
            "stint_number": 3
          }
        ],
        "albon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "hulkenberg": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 33,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 4,
            "stint_number": 3
          }
        ],
        "bearman": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 31,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 6,
            "stint_number": 3
          }
        ],
        "stroll": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 7,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "perez": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 31,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 6,
            "stint_number": 3
          }
        ],
        "gasly": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 31,
            "lap_end": 35,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hamilton": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 32,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 5,
            "stint_number": 3
          }
        ],
        "ocon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 31,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 6,
            "stint_number": 3
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 31,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 6,
            "stint_number": 3
          }
        ],
        "max_verstappen": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 32,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 5,
            "stint_number": 3
          }
        ],
        "bottas": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 27,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 37,
            "lap_end": 49,
            "tyre_age": 10,
            "stint_number": 3
          }
        ],
        "lawson": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 32,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "norris": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 31,
            "lap_end": 35,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "piastri": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 32,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 5,
            "stint_number": 3
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 31,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "alonso": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "bortoleto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 31,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 6,
            "stint_number": 3
          }
        ],
        "leclerc": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 32,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 37,
            "lap_end": 51,
            "tyre_age": 5,
            "stint_number": 3
          }
        ]
      }
    },
    "16": {
      "session_key": 11731,
      "pit_stops": {
        "perez": [
          {
            "lap": 1,
            "duration": 38.03
          },
          {
            "lap": 2,
            "duration": 41.72
          },
          {
            "lap": 9,
            "duration": 29.87
          },
          {
            "lap": 18,
            "duration": 28.89
          },
          {
            "lap": 21,
            "duration": 29.2
          },
          {
            "lap": 39,
            "duration": 31.34
          },
          {
            "lap": 44,
            "duration": 28.94
          }
        ],
        "piastri": [
          {
            "lap": 2,
            "duration": 81.4
          },
          {
            "lap": 9,
            "duration": 29.2
          },
          {
            "lap": 33,
            "duration": 28.3
          },
          {
            "lap": 45,
            "duration": 27.4
          }
        ],
        "bortoleto": [
          {
            "lap": 2,
            "duration": 73.87
          },
          {
            "lap": 9,
            "duration": 27.87
          },
          {
            "lap": 15,
            "duration": 36.77
          },
          {
            "lap": 34,
            "duration": 51.82
          },
          {
            "lap": 44,
            "duration": 27.7
          }
        ],
        "stroll": [
          {
            "lap": 2,
            "duration": 60.45
          },
          {
            "lap": 9,
            "duration": 28
          },
          {
            "lap": 28,
            "duration": 28.3
          },
          {
            "lap": 43,
            "duration": 27.4
          }
        ],
        "hulkenberg": [
          {
            "lap": 2,
            "duration": 61.18
          },
          {
            "lap": 8,
            "duration": 27.59
          },
          {
            "lap": 32,
            "duration": 28.42
          },
          {
            "lap": 45,
            "duration": 28.28
          }
        ],
        "leclerc": [
          {
            "lap": 3,
            "duration": 38.01
          },
          {
            "lap": 9,
            "duration": 28.65
          },
          {
            "lap": 28,
            "duration": 27.96
          },
          {
            "lap": 43,
            "duration": 28.18
          }
        ],
        "antonelli": [
          {
            "lap": 9,
            "duration": 27.7
          },
          {
            "lap": 33,
            "duration": 27.6
          },
          {
            "lap": 44,
            "duration": 27.2
          }
        ],
        "max_verstappen": [
          {
            "lap": 9,
            "duration": 27.64
          },
          {
            "lap": 33,
            "duration": 27.83
          },
          {
            "lap": 43,
            "duration": 27.64
          }
        ],
        "russell": [
          {
            "lap": 9,
            "duration": 28.8
          },
          {
            "lap": 32,
            "duration": 27.6
          },
          {
            "lap": 44,
            "duration": 27.7
          }
        ],
        "hadjar": [
          {
            "lap": 9,
            "duration": 28.13
          },
          {
            "lap": 31,
            "duration": 28.5
          },
          {
            "lap": 44,
            "duration": 27.3
          }
        ],
        "lawson": [
          {
            "lap": 9,
            "duration": 28.6
          },
          {
            "lap": 30,
            "duration": 28.03
          },
          {
            "lap": 45,
            "duration": 29.62
          }
        ],
        "ocon": [
          {
            "lap": 9,
            "duration": 28.69
          },
          {
            "lap": 29,
            "duration": 29
          },
          {
            "lap": 41,
            "duration": 28.4
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 9,
            "duration": 28.6
          },
          {
            "lap": 28,
            "duration": 29.25
          },
          {
            "lap": 43,
            "duration": 28.07
          }
        ],
        "sainz": [
          {
            "lap": 9,
            "duration": 32.06
          },
          {
            "lap": 26,
            "duration": 28.23
          },
          {
            "lap": 42,
            "duration": 39.69
          }
        ],
        "albon": [
          {
            "lap": 9,
            "duration": 32.47
          },
          {
            "lap": 16,
            "duration": 27.61
          },
          {
            "lap": 29,
            "duration": 27.86
          }
        ],
        "norris": [
          {
            "lap": 9,
            "duration": 30.79
          },
          {
            "lap": 34,
            "duration": 28.25
          },
          {
            "lap": 45,
            "duration": 27.87
          }
        ],
        "alonso": [
          {
            "lap": 9,
            "duration": 28.31
          },
          {
            "lap": 31,
            "duration": 27.61
          },
          {
            "lap": 45,
            "duration": 27.81
          }
        ],
        "gasly": [
          {
            "lap": 9,
            "duration": 28.15
          },
          {
            "lap": 25,
            "duration": 27.76
          },
          {
            "lap": 37,
            "duration": 27.85
          },
          {
            "lap": 45,
            "duration": 28.34
          }
        ],
        "colapinto": [
          {
            "lap": 9,
            "duration": 27.95
          },
          {
            "lap": 31,
            "duration": 27.63
          },
          {
            "lap": 42,
            "duration": 28.21
          }
        ],
        "bearman": [
          {
            "lap": 10,
            "duration": 28.55
          },
          {
            "lap": 24,
            "duration": 29.05
          },
          {
            "lap": 38,
            "duration": 28.02
          }
        ],
        "hamilton": [
          {
            "lap": 31,
            "duration": 27.8
          },
          {
            "lap": 43,
            "duration": 28.05
          }
        ]
      },
      "stints": {
        "max_verstappen": [
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
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 10,
            "lap_end": 55,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "albon": [
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
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 10,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 41,
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
            "compound": "SOFT",
            "lap_start": 2,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 10,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 27,
            "lap_end": 55,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "hamilton": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 2,
            "lap_end": 43,
            "tyre_age": 3,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 44,
            "lap_end": 55,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "gasly": [
          {
            "compound": "SOFT",
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
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 10,
            "lap_end": 25,
            "tyre_age": 6,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 26,
            "lap_end": 55,
            "tyre_age": 6,
            "stint_number": 5
          }
        ],
        "lawson": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 2,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 10,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "piastri": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 2,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 3,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 3,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "MEDIUM",
            "lap_start": 10,
            "lap_end": 34,
            "tyre_age": 2,
            "stint_number": 5
          },
          {
            "compound": "HARD",
            "lap_start": 35,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 6
          }
        ],
        "bortoleto": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 2,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 9,
            "tyre_age": 2,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 10,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 16,
            "lap_end": 44,
            "tyre_age": 8,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 55,
            "tyre_age": 6,
            "stint_number": 6
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 2,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 10,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 29,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "norris": [
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
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 10,
            "lap_end": 45,
            "tyre_age": 3,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 55,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "leclerc": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 2,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 4,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 10,
            "lap_end": 43,
            "tyre_age": 3,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 44,
            "lap_end": 55,
            "tyre_age": 3,
            "stint_number": 5
          }
        ],
        "bearman": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 2,
            "lap_end": 10,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 11,
            "lap_end": 24,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 25,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "ocon": [
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
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 10,
            "lap_end": 41,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 42,
            "lap_end": 55,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "perez": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 2,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 2,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "MEDIUM",
            "lap_start": 3,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "HARD",
            "lap_start": 10,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 5
          },
          {
            "compound": "HARD",
            "lap_start": 19,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 6
          },
          {
            "compound": "MEDIUM",
            "lap_start": 22,
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 7
          },
          {
            "compound": "SOFT",
            "lap_start": 40,
            "lap_end": 55,
            "tyre_age": 1,
            "stint_number": 8
          }
        ],
        "hadjar": [
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
            "lap_end": 9,
            "tyre_age": 3,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 10,
            "lap_end": 44,
            "tyre_age": 3,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 55,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "antonelli": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 10,
            "lap_end": 33,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 34,
            "lap_end": 44,
            "tyre_age": 3,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 55,
            "tyre_age": 3,
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
            "compound": "SOFT",
            "lap_start": 2,
            "lap_end": 7,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "colapinto": [
          {
            "compound": "SOFT",
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
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "MEDIUM",
            "lap_start": 10,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "russell": [
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
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 9,
            "tyre_age": 3,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 10,
            "lap_end": 49,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "stroll": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 2,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 3,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "HARD",
            "lap_start": 10,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 29,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 5
          }
        ],
        "hulkenberg": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 2,
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 3,
            "lap_end": 8,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 9,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 33,
            "lap_end": 55,
            "tyre_age": 2,
            "stint_number": 5
          }
        ],
        "alonso": [
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
            "lap_end": 2,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 3,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 10,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 4
          }
        ]
      }
    },
    "17": {
      "session_key": 11388,
      "pit_stops": {
        "hamilton": [
          {
            "lap": 18,
            "duration": 24.05
          }
        ],
        "perez": [
          {
            "lap": 21,
            "duration": 25.29
          },
          {
            "lap": 38,
            "duration": 24.85
          }
        ],
        "albon": [
          {
            "lap": 22,
            "duration": 24.09
          },
          {
            "lap": 37,
            "duration": 25.87
          }
        ],
        "antonelli": [
          {
            "lap": 23,
            "duration": 24.11
          },
          {
            "lap": 39,
            "duration": 23.59
          }
        ],
        "leclerc": [
          {
            "lap": 24,
            "duration": 24.64
          },
          {
            "lap": 39,
            "duration": 24.11
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 26,
            "duration": 24.37
          }
        ],
        "stroll": [
          {
            "lap": 26,
            "duration": 23.6
          }
        ],
        "ocon": [
          {
            "lap": 28,
            "duration": 24.93
          }
        ],
        "bottas": [
          {
            "lap": 28,
            "duration": 29.27
          }
        ],
        "gasly": [
          {
            "lap": 29,
            "duration": 24.58
          }
        ],
        "hulkenberg": [
          {
            "lap": 30,
            "duration": 24.38
          }
        ],
        "lawson": [
          {
            "lap": 31,
            "duration": 24.66
          }
        ],
        "sainz": [
          {
            "lap": 31,
            "duration": 24.2
          }
        ],
        "max_verstappen": [
          {
            "lap": 32,
            "duration": 23.7
          }
        ],
        "norris": [
          {
            "lap": 32,
            "duration": 23.92
          }
        ],
        "piastri": [
          {
            "lap": 33,
            "duration": 25.71
          },
          {
            "lap": 41,
            "duration": 24.08
          }
        ],
        "bearman": [
          {
            "lap": 33,
            "duration": 24.87
          }
        ],
        "hadjar": [
          {
            "lap": 33,
            "duration": 24.55
          }
        ],
        "alonso": [
          {
            "lap": 35,
            "duration": 24.33
          }
        ],
        "russell": [
          {
            "lap": 39,
            "duration": 23.65
          }
        ]
      },
      "stints": {
        "hadjar": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 2,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "antonelli": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 23,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 24,
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 40,
            "lap_end": 62,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "bottas": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 29,
            "lap_end": 59,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "colapinto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "russell": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 40,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "stroll": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 2,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hulkenberg": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 31,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "perez": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 22,
            "lap_end": 38,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 39,
            "lap_end": 60,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "alonso": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 2,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "max_verstappen": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 33,
            "lap_end": 62,
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
            "compound": "SOFT",
            "lap_start": 23,
            "lap_end": 37,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 38,
            "lap_end": 59,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "sainz": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 32,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hamilton": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 19,
            "lap_end": 62,
            "tyre_age": 3,
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
            "compound": "SOFT",
            "lap_start": 30,
            "lap_end": 61,
            "tyre_age": 3,
            "stint_number": 2
          }
        ],
        "lawson": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 32,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "piastri": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 33,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 34,
            "lap_end": 41,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 42,
            "lap_end": 62,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "bortoleto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 7,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "norris": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 33,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 27,
            "lap_end": 61,
            "tyre_age": 3,
            "stint_number": 2
          }
        ],
        "leclerc": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 24,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 25,
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 40,
            "lap_end": 62,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "bearman": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 33,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 34,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "ocon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 29,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 2
          }
        ]
      }
    },
    "18": {
      "session_key": 11396,
      "pit_stops": {
        "max_verstappen": [
          {
            "lap": 13,
            "duration": 23.96
          },
          {
            "lap": 31,
            "duration": 25.39
          }
        ],
        "bearman": [
          {
            "lap": 13,
            "duration": 24.22
          },
          {
            "lap": 22,
            "duration": 34.74
          }
        ],
        "hamilton": [
          {
            "lap": 14,
            "duration": 24.12
          },
          {
            "lap": 38,
            "duration": 23.95
          }
        ],
        "leclerc": [
          {
            "lap": 15,
            "duration": 24.07
          },
          {
            "lap": 39,
            "duration": 24.23
          }
        ],
        "piastri": [
          {
            "lap": 15,
            "duration": 23.41
          }
        ],
        "stroll": [
          {
            "lap": 15,
            "duration": 24.34
          },
          {
            "lap": 41,
            "duration": 23.82
          }
        ],
        "norris": [
          {
            "lap": 16,
            "duration": 25.76
          }
        ],
        "albon": [
          {
            "lap": 16,
            "duration": 24.43
          },
          {
            "lap": 31,
            "duration": 23.7
          }
        ],
        "sainz": [
          {
            "lap": 17,
            "duration": 33.69
          },
          {
            "lap": 38,
            "duration": 24.38
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 18,
            "duration": 23.79
          },
          {
            "lap": 40,
            "duration": 24.5
          }
        ],
        "ocon": [
          {
            "lap": 21,
            "duration": 24.94
          }
        ],
        "russell": [
          {
            "lap": 22,
            "duration": 29.76
          }
        ],
        "perez": [
          {
            "lap": 23,
            "duration": 25.18
          }
        ],
        "antonelli": [
          {
            "lap": 24,
            "duration": 23.59
          }
        ],
        "gasly": [
          {
            "lap": 24,
            "duration": 26.98
          }
        ],
        "hadjar": [
          {
            "lap": 25,
            "duration": 24.07
          }
        ],
        "lawson": [
          {
            "lap": 25,
            "duration": 24.23
          }
        ],
        "bortoleto": [
          {
            "lap": 26,
            "duration": 24.08
          },
          {
            "lap": 50,
            "duration": 23.97
          }
        ],
        "alonso": [
          {
            "lap": 28,
            "duration": 24.2
          },
          {
            "lap": 42,
            "duration": 40.42
          }
        ],
        "hulkenberg": [
          {
            "lap": 29,
            "duration": 23.93
          }
        ],
        "bottas": [
          {
            "lap": 29,
            "duration": 24.24
          }
        ],
        "colapinto": [
          {
            "lap": 30,
            "duration": 25.37
          }
        ]
      },
      "stints": {
        "bearman": [
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
            "lap_end": 22,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 23,
            "lap_end": 24,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "sainz": [
          {
            "compound": "SOFT",
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
            "compound": "SOFT",
            "lap_start": 39,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "ocon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 21,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 22,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "perez": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 23,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 24,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "leclerc": [
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
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 40,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hamilton": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 15,
            "lap_end": 38,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 39,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hadjar": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 25,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 26,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bottas": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 29,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 30,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 2
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
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "max_verstappen": [
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
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 32,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "russell": [
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
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
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
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "piastri": [
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
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "alonso": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 28,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 29,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 43,
            "lap_end": 55,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "lawson": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 25,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 26,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "arvid_lindblad": [
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
            "lap_end": 40,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 41,
            "lap_end": 55,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "colapinto": [
          {
            "compound": "HARD",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 31,
            "lap_end": 35,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hulkenberg": [
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
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bortoleto": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 27,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 51,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "gasly": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 24,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "HARD",
            "lap_start": 25,
            "lap_end": 56,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "stroll": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 2,
            "lap_end": 41,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 42,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "albon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "HARD",
            "lap_start": 32,
            "lap_end": 55,
            "tyre_age": 0,
            "stint_number": 3
          }
        ]
      }
    },
    "19": {
      "session_key": 11404,
      "pit_stops": {
        "gasly": [
          {
            "lap": 1,
            "duration": null
          },
          {
            "lap": 17,
            "duration": 22.96
          },
          {
            "lap": 44,
            "duration": 22.8
          },
          {
            "lap": 45,
            "duration": 2256.2
          }
        ],
        "bottas": [
          {
            "lap": 1,
            "duration": null
          },
          {
            "lap": 30,
            "duration": 26.71
          }
        ],
        "perez": [
          {
            "lap": 1,
            "duration": null
          },
          {
            "lap": 59,
            "duration": 29.8
          },
          {
            "lap": 30,
            "duration": 28.9
          },
          {
            "lap": 43,
            "duration": 24.1
          },
          {
            "lap": 44,
            "duration": 2172.9
          },
          {
            "lap": 45,
            "duration": 57
          }
        ],
        "stroll": [
          {
            "lap": 1,
            "duration": null
          },
          {
            "lap": 3,
            "duration": 27.18
          }
        ],
        "lawson": [
          {
            "lap": 1,
            "duration": null
          },
          {
            "lap": 11,
            "duration": 22.86
          },
          {
            "lap": 42,
            "duration": 22.58
          },
          {
            "lap": 44,
            "duration": 2191.6
          },
          {
            "lap": 45,
            "duration": 60.51
          }
        ],
        "norris": [
          {
            "lap": 1,
            "duration": null
          },
          {
            "lap": 39,
            "duration": 24.71
          },
          {
            "lap": 45,
            "duration": 2312.4
          }
        ],
        "alonso": [
          {
            "lap": 1,
            "duration": null
          },
          {
            "lap": 3,
            "duration": 23.96
          }
        ],
        "antonelli": [
          {
            "lap": 1,
            "duration": null
          },
          {
            "lap": 43,
            "duration": 23.74
          },
          {
            "lap": 45,
            "duration": 2315.3
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 1,
            "duration": null
          },
          {
            "lap": 35,
            "duration": 22.82
          },
          {
            "lap": 45,
            "duration": 2284.6
          }
        ],
        "hulkenberg": [
          {
            "lap": 59,
            "duration": 34.5
          },
          {
            "lap": 31,
            "duration": 21.93
          },
          {
            "lap": 45,
            "duration": 2272.9
          }
        ],
        "hadjar": [
          {
            "lap": 7,
            "duration": 23.9
          },
          {
            "lap": 41,
            "duration": 22.61
          },
          {
            "lap": 45,
            "duration": 2265.56
          }
        ],
        "albon": [
          {
            "lap": 18,
            "duration": 22.01
          },
          {
            "lap": 41,
            "duration": 25.43
          },
          {
            "lap": 44,
            "duration": 2181.8
          },
          {
            "lap": 45,
            "duration": 54.82
          }
        ],
        "piastri": [
          {
            "lap": 26,
            "duration": 22.68
          },
          {
            "lap": 44,
            "duration": 24.56
          },
          {
            "lap": 45,
            "duration": 2272
          }
        ],
        "max_verstappen": [
          {
            "lap": 27,
            "duration": 22.47
          },
          {
            "lap": 45,
            "duration": 2314.94
          }
        ],
        "leclerc": [
          {
            "lap": 27,
            "duration": 28.71
          },
          {
            "lap": 45,
            "duration": 2315.8
          }
        ],
        "hamilton": [
          {
            "lap": 28,
            "duration": 22.73
          },
          {
            "lap": 44,
            "duration": 23.81
          },
          {
            "lap": 45,
            "duration": 2309.6
          }
        ],
        "russell": [
          {
            "lap": 33,
            "duration": 33.93
          },
          {
            "lap": 44,
            "duration": 22.26
          },
          {
            "lap": 45,
            "duration": 2295.3
          }
        ],
        "colapinto": [
          {
            "lap": 34,
            "duration": 23.34
          },
          {
            "lap": 45,
            "duration": 2274.5
          }
        ],
        "sainz": [
          {
            "lap": 36,
            "duration": 22.57
          },
          {
            "lap": 44,
            "duration": 2192.4
          },
          {
            "lap": 45,
            "duration": 58.65
          }
        ],
        "bortoleto": [
          {
            "lap": 38,
            "duration": 22.55
          },
          {
            "lap": 45,
            "duration": 2270
          }
        ],
        "bearman": [
          {
            "lap": 40,
            "duration": 22.59
          },
          {
            "lap": 45,
            "duration": 2268.4
          }
        ]
      },
      "stints": {
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 2,
            "lap_end": 42,
            "tyre_age": 3,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 43,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 45,
            "tyre_age": 3,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 4,
            "stint_number": 5
          }
        ],
        "alonso": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 4,
            "lap_end": 5,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "stroll": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 3,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "UNKNOWN",
            "lap_start": 4,
            "lap_end": 5,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hadjar": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 7,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 8,
            "lap_end": 41,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 42,
            "lap_end": 45,
            "tyre_age": 3,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "gasly": [
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
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 45,
            "tyre_age": 3,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "albon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 18,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 19,
            "lap_end": 41,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "MEDIUM",
            "lap_start": 42,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 45,
            "tyre_age": 4,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 5,
            "stint_number": 5
          }
        ],
        "piastri": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 27,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "leclerc": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 28,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "max_verstappen": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 27,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 28,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "hamilton": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 28,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 29,
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
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 3,
            "stint_number": 4
          }
        ],
        "perez": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 31,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 44,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 45,
            "tyre_age": 1,
            "stint_number": 4
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 59,
            "tyre_age": 2,
            "stint_number": 5
          },
          {
            "compound": "SOFT",
            "lap_start": 60,
            "lap_end": 71,
            "tyre_age": 3,
            "stint_number": 6
          }
        ],
        "bottas": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 31,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hulkenberg": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 31,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 32,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 59,
            "tyre_age": 3,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 60,
            "lap_end": 71,
            "tyre_age": 17,
            "stint_number": 4
          }
        ],
        "russell": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 33,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 34,
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
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 4,
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
            "compound": "SOFT",
            "lap_start": 35,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 2,
            "stint_number": 3
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 35,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 36,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 58,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "sainz": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 36,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 37,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 1,
            "stint_number": 4
          }
        ],
        "bortoleto": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 38,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 39,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "norris": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 39,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 40,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 2,
            "stint_number": 3
          }
        ],
        "bearman": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 40,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 41,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 47,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "antonelli": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 43,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 44,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 71,
            "tyre_age": 4,
            "stint_number": 3
          }
        ]
      }
    },
    "20": {
      "session_key": 11412,
      "pit_stops": {
        "hamilton": [
          {
            "lap": 14,
            "duration": 24.39
          },
          {
            "lap": 38,
            "duration": 24.58
          },
          {
            "lap": 62,
            "duration": 25.52
          }
        ],
        "sainz": [
          {
            "lap": 14,
            "duration": 25.07
          },
          {
            "lap": 45,
            "duration": 23.78
          },
          {
            "lap": 61,
            "duration": 24.46
          }
        ],
        "albon": [
          {
            "lap": 15,
            "duration": 24.45
          },
          {
            "lap": 42,
            "duration": 30.72
          },
          {
            "lap": 60,
            "duration": 24.29
          }
        ],
        "perez": [
          {
            "lap": 15,
            "duration": 32.16
          },
          {
            "lap": 59,
            "duration": 25.87
          }
        ],
        "norris": [
          {
            "lap": 16,
            "duration": 24
          },
          {
            "lap": 49,
            "duration": 23.96
          },
          {
            "lap": 62,
            "duration": 24.92
          }
        ],
        "russell": [
          {
            "lap": 16,
            "duration": 24.99
          },
          {
            "lap": 61,
            "duration": 24.1
          }
        ],
        "hadjar": [
          {
            "lap": 16,
            "duration": 24.1
          },
          {
            "lap": 50,
            "duration": 23.81
          },
          {
            "lap": 62,
            "duration": 23.9
          }
        ],
        "lawson": [
          {
            "lap": 16,
            "duration": 23.74
          },
          {
            "lap": 48,
            "duration": 23.75
          },
          {
            "lap": 61,
            "duration": 24.74
          }
        ],
        "piastri": [
          {
            "lap": 16,
            "duration": 25.63
          },
          {
            "lap": 51,
            "duration": 23.94
          },
          {
            "lap": 62,
            "duration": 24.7
          }
        ],
        "hulkenberg": [
          {
            "lap": 16,
            "duration": 24.7
          },
          {
            "lap": 44,
            "duration": 24.71
          },
          {
            "lap": 61,
            "duration": 35.3
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 16,
            "duration": 23.92
          },
          {
            "lap": 45,
            "duration": 24.8
          },
          {
            "lap": 61,
            "duration": 24.59
          }
        ],
        "leclerc": [
          {
            "lap": 16,
            "duration": 24.82
          },
          {
            "lap": 61,
            "duration": 24.89
          }
        ],
        "stroll": [
          {
            "lap": 16,
            "duration": 24.14
          }
        ],
        "bearman": [
          {
            "lap": 16,
            "duration": 39.77
          },
          {
            "lap": 48,
            "duration": 27.55
          },
          {
            "lap": 60,
            "duration": 25.36
          }
        ],
        "bortoleto": [
          {
            "lap": 16,
            "duration": 24.36
          },
          {
            "lap": 32,
            "duration": 23.35
          },
          {
            "lap": 60,
            "duration": 24.18
          }
        ],
        "antonelli": [
          {
            "lap": 17,
            "duration": 24.46
          },
          {
            "lap": 53,
            "duration": 23.63
          },
          {
            "lap": 62,
            "duration": 24.82
          }
        ],
        "max_verstappen": [
          {
            "lap": 17,
            "duration": 23.75
          },
          {
            "lap": 45,
            "duration": 23.35
          },
          {
            "lap": 62,
            "duration": 23.89
          }
        ],
        "alonso": [
          {
            "lap": 17,
            "duration": 24
          },
          {
            "lap": 46,
            "duration": 24.35
          },
          {
            "lap": 60,
            "duration": 23.89
          }
        ],
        "gasly": [
          {
            "lap": 17,
            "duration": 24.68
          },
          {
            "lap": 37,
            "duration": 24.19
          },
          {
            "lap": 61,
            "duration": 31.12
          }
        ],
        "colapinto": [
          {
            "lap": 17,
            "duration": 25.68
          },
          {
            "lap": 53,
            "duration": 23.65
          },
          {
            "lap": 61,
            "duration": 26.63
          }
        ]
      },
      "stints": {
        "bottas": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "stroll": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 9,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 10,
            "lap_end": 30,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hamilton": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 15,
            "lap_end": 38,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 39,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 63,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "sainz": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 14,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 15,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 62,
            "lap_end": 69,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "albon": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 16,
            "lap_end": 42,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 43,
            "lap_end": 60,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 61,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "perez": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 15,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 16,
            "lap_end": 59,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 60,
            "lap_end": 69,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "norris": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 49,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 50,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 63,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "russell": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 62,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hadjar": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 51,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 63,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "lawson": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 49,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 62,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "piastri": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 51,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 52,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 63,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "hulkenberg": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 44,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 45,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 62,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "bearman": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 48,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 49,
            "lap_end": 60,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 61,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 62,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "leclerc": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 62,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "bortoleto": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 16,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 17,
            "lap_end": 32,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 33,
            "lap_end": 60,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 61,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "antonelli": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 18,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 54,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 63,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "max_verstappen": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 18,
            "lap_end": 45,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 46,
            "lap_end": 62,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 63,
            "lap_end": 71,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "alonso": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 18,
            "lap_end": 46,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 47,
            "lap_end": 60,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 61,
            "lap_end": 70,
            "tyre_age": 1,
            "stint_number": 4
          }
        ],
        "gasly": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 18,
            "lap_end": 37,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 38,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 62,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 4
          }
        ],
        "colapinto": [
          {
            "compound": "INTERMEDIATE",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 18,
            "lap_end": 53,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 54,
            "lap_end": 61,
            "tyre_age": 0,
            "stint_number": 3
          },
          {
            "compound": "INTERMEDIATE",
            "lap_start": 62,
            "lap_end": 70,
            "tyre_age": 0,
            "stint_number": 4
          }
        ]
      }
    },
    "21": {
      "session_key": 11420,
      "pit_stops": {
        "lawson": [
          {
            "lap": 17,
            "duration": 21.68
          }
        ],
        "max_verstappen": [
          {
            "lap": 19,
            "duration": 21.22
          }
        ],
        "russell": [
          {
            "lap": 19,
            "duration": 22.09
          }
        ],
        "hadjar": [
          {
            "lap": 19,
            "duration": 23.34
          },
          {
            "lap": 26,
            "duration": 33.13
          }
        ],
        "gasly": [
          {
            "lap": 19,
            "duration": 22.64
          }
        ],
        "arvid_lindblad": [
          {
            "lap": 19,
            "duration": 24.43
          }
        ],
        "antonelli": [
          {
            "lap": 19,
            "duration": 26.3
          }
        ],
        "norris": [
          {
            "lap": 19,
            "duration": 24.81
          }
        ],
        "leclerc": [
          {
            "lap": 19,
            "duration": 22.16
          }
        ],
        "bortoleto": [
          {
            "lap": 19,
            "duration": 21.78
          }
        ],
        "colapinto": [
          {
            "lap": 19,
            "duration": 23.34
          }
        ],
        "sainz": [
          {
            "lap": 19,
            "duration": 22.16
          }
        ],
        "piastri": [
          {
            "lap": 19,
            "duration": 27.48
          }
        ],
        "hulkenberg": [
          {
            "lap": 19,
            "duration": 21.89
          }
        ],
        "bearman": [
          {
            "lap": 19,
            "duration": 22.86
          }
        ],
        "alonso": [
          {
            "lap": 19,
            "duration": 21.49
          }
        ],
        "bottas": [
          {
            "lap": 19,
            "duration": 22.07
          },
          {
            "lap": 20,
            "duration": 21.76
          }
        ],
        "hamilton": [
          {
            "lap": 20,
            "duration": 32.47
          }
        ],
        "stroll": [
          {
            "lap": 20,
            "duration": 22.31
          }
        ]
      },
      "stints": {
        "lawson": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 2,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "albon": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 1,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "perez": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 17,
            "tyre_age": 0,
            "stint_number": 1
          }
        ],
        "max_verstappen": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hadjar": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 2,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 26,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 27,
            "lap_end": 50,
            "tyre_age": 3,
            "stint_number": 3
          }
        ],
        "russell": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 3,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "antonelli": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 3,
            "stint_number": 2
          }
        ],
        "arvid_lindblad": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "gasly": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 4,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "norris": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "piastri": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "leclerc": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "colapinto": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 4,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bortoleto": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "sainz": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "hulkenberg": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bearman": [
          {
            "compound": "MEDIUM",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "SOFT",
            "lap_start": 20,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
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
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 49,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "bottas": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 19,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 20,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 2
          },
          {
            "compound": "SOFT",
            "lap_start": 21,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 3
          }
        ],
        "hamilton": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 21,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
          }
        ],
        "stroll": [
          {
            "compound": "SOFT",
            "lap_start": 1,
            "lap_end": 20,
            "tyre_age": 0,
            "stint_number": 1
          },
          {
            "compound": "MEDIUM",
            "lap_start": 21,
            "lap_end": 50,
            "tyre_age": 0,
            "stint_number": 2
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
      "title": "Are Mercedes the team to beat in Qatar?",
      "url": "https://www.formula1.com/en/latest/article/are-mercedes-the-team-to-beat-in-qatar.6iRbqa3JJ85o0bWNYQTlTl",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Leclerc searching for answers after tricky Friday in Qatar",
      "url": "https://www.formula1.com/en/latest/article/it-looks-like-a-very-difficult-weekend-leclerc-searching-for-answers-after-tricky-friday-in-qatar.34CxxcaWerPPLl84sU9cZq",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "What the teams said – Friday in Qatar",
      "url": "https://www.formula1.com/en/latest/article/what-the-teams-said-friday-in-qatar-2026.4NjrvUy3Zc6X6YN4i896S6",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Verstappen and Red Bull left looking for car balance in Qatar",
      "url": "https://www.formula1.com/en/latest/article/a-bit-of-a-difficult-day-verstappen-and-red-bull-left-looking-for-car-balance-after-friday-in-qatar.zvqj1nQ6dBT2PSxEzzKWP",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Racing Bulls lead midfield in Qatar after 'really big step'",
      "url": "https://www.formula1.com/en/latest/article/racing-bulls-lead-the-midfield-charge-in-qatar-after-changes-pay-off.11wtPFM25qXm0dPTocDHRn",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Best Qualifying bets for the Qatar Grand Prix",
      "url": "https://www.formula1.com/en/latest/article/best-qualifying-bets-available-in-the-markets-for-the-qatar-grand-prix.2mQLEJUkKJHjLj8bHzNnaI",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "'It's never nice' – Gasly explains dramatic FP2 spin",
      "url": "https://www.formula1.com/en/latest/article/its-never-nice-gasly-explains-dramatic-high-speed-spin-during-qatar-practice.11hIcFNT6zuvEG0mwAggDn",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Norris worried by McLaren’s deficit to Mercedes in Qatar",
      "url": "https://www.formula1.com/en/latest/article/i-dont-think-weve-been-further-off-norris-worried-by-mclarens-deficit-to-mercedes-in-qatar.6mwnUPpxnOsIv6YJ7O6Lgm",
      "image": null,
      "date": null,
      "tag": "F1 News"
    }
  ],
  "_health": {
    "live": "jolpica:21rounds",
    "results": "jolpica:21races",
    "news": "scraped:8",
    "scrapedAt": "2026-11-28T07:01:56.249Z",
    "openf1": "enriched:21races",
    "bios": "jolpica:36",
    "circuits": "jolpica:24",
    "weather": "open-meteo",
    "subrequests": 11
  },
  "_sanity": {
    "drivers_full_grid": true,
    "grid_size": 22,
    "prob_sum_ok": true,
    "points_cap_ok": true,
    "champion_prob_ok": true,
    "prob_sum": 1,
    "max_points": 433.3,
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
    },
    "netherlands": {
      "points": [
        [
          -3184,
          1588
        ],
        [
          -3095,
          1804
        ],
        [
          -2927,
          2217
        ],
        [
          -2760,
          2625
        ],
        [
          -2645,
          2923
        ],
        [
          -2507,
          3397
        ],
        [
          -2423,
          3683
        ],
        [
          -2291,
          3966
        ],
        [
          -2115,
          4115
        ],
        [
          -1931,
          4153
        ],
        [
          -1803,
          4129
        ],
        [
          -1669,
          4041
        ],
        [
          -1613,
          3966
        ],
        [
          -1562,
          3849
        ],
        [
          -1548,
          3636
        ],
        [
          -1576,
          3488
        ],
        [
          -1652,
          3249
        ],
        [
          -1747,
          3001
        ],
        [
          -1861,
          2745
        ],
        [
          -1938,
          2571
        ],
        [
          -2049,
          2231
        ],
        [
          -2066,
          1884
        ],
        [
          -2039,
          1572
        ],
        [
          -2045,
          1400
        ],
        [
          -2233,
          1079
        ],
        [
          -2345,
          1006
        ],
        [
          -2537,
          921
        ],
        [
          -2738,
          846
        ],
        [
          -2983,
          737
        ],
        [
          -3143,
          585
        ],
        [
          -3194,
          403
        ],
        [
          -3170,
          257
        ],
        [
          -3068,
          127
        ],
        [
          -2815,
          37
        ],
        [
          -2564,
          84
        ],
        [
          -2367,
          144
        ],
        [
          -2167,
          215
        ],
        [
          -2014,
          272
        ],
        [
          -1980,
          285
        ],
        [
          -1571,
          413
        ],
        [
          -1266,
          469
        ],
        [
          -782,
          486
        ],
        [
          -472,
          451
        ],
        [
          -111,
          385
        ],
        [
          326,
          314
        ],
        [
          658,
          309
        ],
        [
          1188,
          449
        ],
        [
          1523,
          630
        ],
        [
          1936,
          873
        ],
        [
          2253,
          999
        ],
        [
          2636,
          1063
        ],
        [
          2921,
          1076
        ],
        [
          3354,
          1079
        ],
        [
          3659,
          1072
        ],
        [
          3988,
          1044
        ],
        [
          4367,
          920
        ],
        [
          4588,
          749
        ],
        [
          4752,
          521
        ],
        [
          4849,
          242
        ],
        [
          4855,
          -84
        ],
        [
          4757,
          -417
        ],
        [
          4615,
          -662
        ],
        [
          4375,
          -1041
        ],
        [
          4303,
          -1159
        ],
        [
          4103,
          -1527
        ],
        [
          3955,
          -1858
        ],
        [
          3866,
          -2051
        ],
        [
          3700,
          -2297
        ],
        [
          3543,
          -2402
        ],
        [
          3242,
          -2475
        ],
        [
          2766,
          -2458
        ],
        [
          2474,
          -2394
        ],
        [
          2200,
          -2291
        ],
        [
          1979,
          -2159
        ],
        [
          1872,
          -2071
        ],
        [
          1756,
          -1943
        ],
        [
          1705,
          -1859
        ],
        [
          1678,
          -1665
        ],
        [
          1777,
          -1496
        ],
        [
          1929,
          -1360
        ],
        [
          2047,
          -1286
        ],
        [
          2249,
          -1197
        ],
        [
          2382,
          -1156
        ],
        [
          2542,
          -1124
        ],
        [
          2792,
          -1089
        ],
        [
          3040,
          -1040
        ],
        [
          3261,
          -973
        ],
        [
          3466,
          -863
        ],
        [
          3478,
          -854
        ],
        [
          3590,
          -701
        ],
        [
          3619,
          -562
        ],
        [
          3583,
          -358
        ],
        [
          3501,
          -220
        ],
        [
          3371,
          -107
        ],
        [
          3083,
          -8
        ],
        [
          2818,
          32
        ],
        [
          2588,
          62
        ],
        [
          2005,
          92
        ],
        [
          1678,
          72
        ],
        [
          1320,
          27
        ],
        [
          776,
          -88
        ],
        [
          469,
          -171
        ],
        [
          58,
          -300
        ],
        [
          -186,
          -383
        ],
        [
          -474,
          -484
        ],
        [
          -840,
          -624
        ],
        [
          -1130,
          -744
        ],
        [
          -1361,
          -848
        ],
        [
          -1551,
          -942
        ],
        [
          -1752,
          -1007
        ],
        [
          -1901,
          -942
        ],
        [
          -1981,
          -865
        ],
        [
          -2081,
          -788
        ],
        [
          -2165,
          -754
        ],
        [
          -2299,
          -738
        ],
        [
          -2427,
          -763
        ],
        [
          -2520,
          -822
        ],
        [
          -2617,
          -975
        ],
        [
          -2633,
          -1118
        ],
        [
          -2622,
          -1224
        ],
        [
          -2583,
          -1464
        ],
        [
          -2538,
          -1716
        ],
        [
          -2494,
          -1971
        ],
        [
          -2446,
          -2248
        ],
        [
          -2388,
          -2578
        ],
        [
          -2316,
          -2957
        ],
        [
          -2274,
          -3168
        ],
        [
          -2227,
          -3467
        ],
        [
          -2244,
          -3711
        ],
        [
          -2334,
          -3904
        ],
        [
          -2503,
          -4065
        ],
        [
          -2616,
          -4119
        ],
        [
          -2930,
          -4153
        ],
        [
          -3217,
          -4142
        ],
        [
          -3536,
          -4119
        ],
        [
          -3952,
          -4014
        ],
        [
          -4409,
          -3749
        ],
        [
          -4651,
          -3481
        ],
        [
          -4728,
          -3355
        ],
        [
          -4854,
          -2889
        ],
        [
          -4786,
          -2497
        ],
        [
          -4563,
          -1951
        ],
        [
          -4407,
          -1549
        ],
        [
          -4289,
          -1243
        ],
        [
          -4132,
          -836
        ],
        [
          -3953,
          -372
        ],
        [
          -3747,
          164
        ],
        [
          -3622,
          485
        ],
        [
          -3467,
          885
        ],
        [
          -3280,
          1353
        ]
      ],
      "length": 9709,
      "closure": 0.026,
      "driver_number": 1,
      "lap": 49
    },
    "italy": {
      "points": [
        [
          -6143,
          -5541
        ],
        [
          -6101,
          -5066
        ],
        [
          -6054,
          -4537
        ],
        [
          -6008,
          -4005
        ],
        [
          -5978,
          -3656
        ],
        [
          -5945,
          -3271
        ],
        [
          -5896,
          -2701
        ],
        [
          -5877,
          -2477
        ],
        [
          -5830,
          -1938
        ],
        [
          -5799,
          -1569
        ],
        [
          -5775,
          -1292
        ],
        [
          -5721,
          -664
        ],
        [
          -5674,
          -128
        ],
        [
          -5635,
          334
        ],
        [
          -5601,
          719
        ],
        [
          -5548,
          1347
        ],
        [
          -5518,
          1708
        ],
        [
          -5477,
          2200
        ],
        [
          -5453,
          2484
        ],
        [
          -5430,
          2752
        ],
        [
          -5415,
          2883
        ],
        [
          -5371,
          3071
        ],
        [
          -5302,
          3189
        ],
        [
          -5142,
          3271
        ],
        [
          -5046,
          3294
        ],
        [
          -4966,
          3356
        ],
        [
          -4931,
          3460
        ],
        [
          -4955,
          3744
        ],
        [
          -5046,
          4089
        ],
        [
          -5108,
          4342
        ],
        [
          -5165,
          4625
        ],
        [
          -5200,
          4924
        ],
        [
          -5211,
          5283
        ],
        [
          -5206,
          5608
        ],
        [
          -5181,
          5992
        ],
        [
          -5119,
          6469
        ],
        [
          -5008,
          6926
        ],
        [
          -4896,
          7227
        ],
        [
          -4671,
          7663
        ],
        [
          -4223,
          8222
        ],
        [
          -3829,
          8546
        ],
        [
          -3497,
          8753
        ],
        [
          -3031,
          8971
        ],
        [
          -2505,
          9129
        ],
        [
          -2116,
          9203
        ],
        [
          -1430,
          9289
        ],
        [
          -1032,
          9321
        ],
        [
          -343,
          9377
        ],
        [
          174,
          9409
        ],
        [
          825,
          9437
        ],
        [
          1415,
          9459
        ],
        [
          1671,
          9475
        ],
        [
          1850,
          9514
        ],
        [
          2031,
          9598
        ],
        [
          2094,
          9663
        ],
        [
          2173,
          9819
        ],
        [
          2278,
          9932
        ],
        [
          2488,
          10043
        ],
        [
          2605,
          10076
        ],
        [
          2870,
          10128
        ],
        [
          3024,
          10157
        ],
        [
          3342,
          10246
        ],
        [
          3743,
          10374
        ],
        [
          3977,
          10463
        ],
        [
          4528,
          10664
        ],
        [
          4905,
          10787
        ],
        [
          5129,
          10836
        ],
        [
          5524,
          10802
        ],
        [
          5709,
          10714
        ],
        [
          5971,
          10441
        ],
        [
          6041,
          10295
        ],
        [
          6132,
          9908
        ],
        [
          6152,
          9738
        ],
        [
          6188,
          9280
        ],
        [
          6203,
          9036
        ],
        [
          6227,
          8753
        ],
        [
          6256,
          8447
        ],
        [
          6279,
          8176
        ],
        [
          6222,
          7681
        ],
        [
          6054,
          7448
        ],
        [
          5821,
          7287
        ],
        [
          5582,
          7163
        ],
        [
          5307,
          7025
        ],
        [
          4909,
          6811
        ],
        [
          4482,
          6581
        ],
        [
          4267,
          6458
        ],
        [
          3873,
          6233
        ],
        [
          3489,
          6018
        ],
        [
          3124,
          5807
        ],
        [
          2467,
          5348
        ],
        [
          2020,
          4978
        ],
        [
          1696,
          4695
        ],
        [
          1410,
          4446
        ],
        [
          1135,
          4207
        ],
        [
          649,
          3785
        ],
        [
          239,
          3429
        ],
        [
          -13,
          3210
        ],
        [
          -305,
          2956
        ],
        [
          -650,
          2656
        ],
        [
          -936,
          2407
        ],
        [
          -1390,
          2012
        ],
        [
          -1693,
          1749
        ],
        [
          -1888,
          1576
        ],
        [
          -2075,
          1392
        ],
        [
          -2202,
          1186
        ],
        [
          -2237,
          1003
        ],
        [
          -2240,
          631
        ],
        [
          -2247,
          501
        ],
        [
          -2300,
          254
        ],
        [
          -2425,
          -15
        ],
        [
          -2679,
          -314
        ],
        [
          -2830,
          -487
        ],
        [
          -3010,
          -953
        ],
        [
          -3055,
          -1293
        ],
        [
          -3078,
          -1554
        ],
        [
          -3118,
          -1949
        ],
        [
          -3154,
          -2355
        ],
        [
          -3207,
          -2932
        ],
        [
          -3250,
          -3396
        ],
        [
          -3299,
          -3930
        ],
        [
          -3334,
          -4307
        ],
        [
          -3362,
          -4620
        ],
        [
          -3397,
          -5002
        ],
        [
          -3447,
          -5536
        ],
        [
          -3505,
          -6170
        ],
        [
          -3547,
          -6629
        ],
        [
          -3577,
          -6953
        ],
        [
          -3619,
          -7415
        ],
        [
          -3680,
          -8070
        ],
        [
          -3709,
          -8396
        ],
        [
          -3736,
          -8683
        ],
        [
          -3780,
          -9128
        ],
        [
          -3854,
          -9738
        ],
        [
          -3906,
          -10010
        ],
        [
          -4099,
          -10501
        ],
        [
          -4243,
          -10659
        ],
        [
          -4466,
          -10790
        ],
        [
          -4844,
          -10836
        ],
        [
          -5152,
          -10757
        ],
        [
          -5502,
          -10546
        ],
        [
          -5780,
          -10252
        ],
        [
          -5921,
          -10034
        ],
        [
          -6076,
          -9697
        ],
        [
          -6165,
          -9416
        ],
        [
          -6225,
          -9136
        ],
        [
          -6277,
          -8601
        ],
        [
          -6278,
          -7759
        ],
        [
          -6270,
          -7482
        ],
        [
          -6244,
          -6917
        ],
        [
          -6167,
          -5826
        ]
      ],
      "length": 21672,
      "closure": 0.013,
      "driver_number": 1,
      "lap": 48
    },
    "madrid": {
      "points": [
        [
          3675,
          -7760
        ],
        [
          3352,
          -7813
        ],
        [
          2861,
          -7893
        ],
        [
          2408,
          -7966
        ],
        [
          1842,
          -8057
        ],
        [
          1036,
          -8173
        ],
        [
          699,
          -8219
        ],
        [
          142,
          -8296
        ],
        [
          -138,
          -8346
        ],
        [
          -356,
          -8458
        ],
        [
          -450,
          -8606
        ],
        [
          -631,
          -8969
        ],
        [
          -786,
          -9033
        ],
        [
          -974,
          -9061
        ],
        [
          -1142,
          -9078
        ],
        [
          -1346,
          -9075
        ],
        [
          -1578,
          -9027
        ],
        [
          -1911,
          -8856
        ],
        [
          -2152,
          -8640
        ],
        [
          -2403,
          -8297
        ],
        [
          -2734,
          -7759
        ],
        [
          -2895,
          -7489
        ],
        [
          -3242,
          -6923
        ],
        [
          -3469,
          -6563
        ],
        [
          -3922,
          -5841
        ],
        [
          -4143,
          -5481
        ],
        [
          -4538,
          -4750
        ],
        [
          -4708,
          -4305
        ],
        [
          -4882,
          -3682
        ],
        [
          -4961,
          -3240
        ],
        [
          -4992,
          -2604
        ],
        [
          -4964,
          -2264
        ],
        [
          -4836,
          -1719
        ],
        [
          -4713,
          -1388
        ],
        [
          -4558,
          -1046
        ],
        [
          -4531,
          -866
        ],
        [
          -4613,
          -665
        ],
        [
          -4604,
          -566
        ],
        [
          -4572,
          -451
        ],
        [
          -4571,
          -150
        ],
        [
          -4618,
          17
        ],
        [
          -4704,
          318
        ],
        [
          -4806,
          606
        ],
        [
          -4962,
          899
        ],
        [
          -5158,
          1329
        ],
        [
          -5291,
          1845
        ],
        [
          -5356,
          2081
        ],
        [
          -5456,
          2293
        ],
        [
          -5573,
          2463
        ],
        [
          -5476,
          2655
        ],
        [
          -5389,
          2738
        ],
        [
          -5211,
          2975
        ],
        [
          -5193,
          3195
        ],
        [
          -5308,
          3481
        ],
        [
          -5397,
          3661
        ],
        [
          -5539,
          4031
        ],
        [
          -5574,
          4295
        ],
        [
          -5595,
          4641
        ],
        [
          -5587,
          5149
        ],
        [
          -5513,
          5546
        ],
        [
          -5168,
          5941
        ],
        [
          -4914,
          6132
        ],
        [
          -4720,
          6547
        ],
        [
          -4744,
          6843
        ],
        [
          -4935,
          7342
        ],
        [
          -5028,
          7594
        ],
        [
          -5160,
          8084
        ],
        [
          -4824,
          8842
        ],
        [
          -4438,
          9043
        ],
        [
          -4201,
          9079
        ],
        [
          -3743,
          9012
        ],
        [
          -3421,
          8839
        ],
        [
          -2995,
          8229
        ],
        [
          -2959,
          7666
        ],
        [
          -3092,
          7213
        ],
        [
          -3290,
          6830
        ],
        [
          -3470,
          6559
        ],
        [
          -3967,
          5969
        ],
        [
          -4151,
          5757
        ],
        [
          -4596,
          5208
        ],
        [
          -4734,
          4977
        ],
        [
          -4890,
          4616
        ],
        [
          -4918,
          4427
        ],
        [
          -4858,
          4223
        ],
        [
          -4755,
          4115
        ],
        [
          -4486,
          3909
        ],
        [
          -4323,
          3788
        ],
        [
          -3963,
          3514
        ],
        [
          -3717,
          3267
        ],
        [
          -3573,
          2918
        ],
        [
          -3541,
          2504
        ],
        [
          -3520,
          1891
        ],
        [
          -3474,
          1625
        ],
        [
          -3232,
          1120
        ],
        [
          -2913,
          809
        ],
        [
          -2539,
          625
        ],
        [
          -1784,
          555
        ],
        [
          -1503,
          558
        ],
        [
          -1134,
          594
        ],
        [
          -942,
          668
        ],
        [
          -678,
          797
        ],
        [
          -538,
          815
        ],
        [
          -360,
          697
        ],
        [
          -294,
          614
        ],
        [
          -128,
          367
        ],
        [
          -29,
          206
        ],
        [
          128,
          -70
        ],
        [
          418,
          -592
        ],
        [
          649,
          -956
        ],
        [
          831,
          -1106
        ],
        [
          1289,
          -1172
        ],
        [
          1614,
          -1123
        ],
        [
          2017,
          -1099
        ],
        [
          2373,
          -1167
        ],
        [
          2576,
          -1257
        ],
        [
          2960,
          -1725
        ],
        [
          3086,
          -2200
        ],
        [
          3146,
          -2557
        ],
        [
          3187,
          -2871
        ],
        [
          3235,
          -3266
        ],
        [
          3294,
          -3740
        ],
        [
          3364,
          -4164
        ],
        [
          3405,
          -4360
        ],
        [
          3458,
          -4517
        ],
        [
          3531,
          -4613
        ],
        [
          3743,
          -4619
        ],
        [
          3794,
          -4589
        ],
        [
          3988,
          -4476
        ],
        [
          4107,
          -4451
        ],
        [
          4379,
          -4417
        ],
        [
          4513,
          -4400
        ],
        [
          4895,
          -4386
        ],
        [
          5017,
          -4433
        ],
        [
          5107,
          -4525
        ],
        [
          5220,
          -4789
        ],
        [
          5268,
          -4954
        ],
        [
          5341,
          -5272
        ],
        [
          5368,
          -5420
        ],
        [
          5425,
          -5764
        ],
        [
          5466,
          -6011
        ],
        [
          5538,
          -6409
        ],
        [
          5589,
          -6826
        ],
        [
          5596,
          -7037
        ],
        [
          5567,
          -7238
        ],
        [
          5467,
          -7392
        ],
        [
          5374,
          -7452
        ],
        [
          4974,
          -7543
        ],
        [
          4709,
          -7590
        ],
        [
          4375,
          -7645
        ],
        [
          3788,
          -7742
        ]
      ],
      "length": 18157,
      "closure": 0.006,
      "driver_number": 1,
      "lap": 52
    },
    "azerbaijan": {
      "points": [
        [
          7807,
          3191
        ],
        [
          8202,
          3355
        ],
        [
          8752,
          3586
        ],
        [
          9370,
          3847
        ],
        [
          9752,
          4001
        ],
        [
          10068,
          4128
        ],
        [
          10227,
          4257
        ],
        [
          10312,
          4425
        ],
        [
          10294,
          4664
        ],
        [
          10165,
          4970
        ],
        [
          10008,
          5339
        ],
        [
          9916,
          5554
        ],
        [
          9718,
          5992
        ],
        [
          9591,
          6279
        ],
        [
          9499,
          6486
        ],
        [
          9338,
          6849
        ],
        [
          9233,
          7086
        ],
        [
          9178,
          7209
        ],
        [
          9049,
          7384
        ],
        [
          8919,
          7411
        ],
        [
          8703,
          7356
        ],
        [
          8595,
          7316
        ],
        [
          8250,
          7181
        ],
        [
          7417,
          6873
        ],
        [
          6993,
          6715
        ],
        [
          6461,
          6515
        ],
        [
          5731,
          6233
        ],
        [
          5430,
          6105
        ],
        [
          4858,
          5857
        ],
        [
          4232,
          5587
        ],
        [
          3726,
          5369
        ],
        [
          3411,
          5232
        ],
        [
          2932,
          5021
        ],
        [
          2512,
          4834
        ],
        [
          2150,
          4673
        ],
        [
          1735,
          4488
        ],
        [
          1298,
          4292
        ],
        [
          1167,
          4224
        ],
        [
          1010,
          4023
        ],
        [
          1054,
          3847
        ],
        [
          1153,
          3648
        ],
        [
          1228,
          3478
        ],
        [
          1352,
          3104
        ],
        [
          1478,
          2803
        ],
        [
          1619,
          2502
        ],
        [
          1729,
          2213
        ],
        [
          1743,
          2031
        ],
        [
          1699,
          1936
        ],
        [
          1565,
          1836
        ],
        [
          1386,
          1758
        ],
        [
          1113,
          1656
        ],
        [
          831,
          1534
        ],
        [
          362,
          1334
        ],
        [
          17,
          1155
        ],
        [
          -236,
          1003
        ],
        [
          -613,
          786
        ],
        [
          -1005,
          533
        ],
        [
          -1108,
          406
        ],
        [
          -1146,
          215
        ],
        [
          -1066,
          25
        ],
        [
          -1011,
          -140
        ],
        [
          -1033,
          -231
        ],
        [
          -1184,
          -374
        ],
        [
          -1345,
          -476
        ],
        [
          -1531,
          -599
        ],
        [
          -1784,
          -798
        ],
        [
          -2101,
          -1040
        ],
        [
          -2329,
          -1212
        ],
        [
          -2695,
          -1491
        ],
        [
          -3055,
          -1765
        ],
        [
          -3434,
          -2051
        ],
        [
          -3947,
          -2448
        ],
        [
          -4097,
          -2516
        ],
        [
          -4217,
          -2480
        ],
        [
          -4268,
          -2417
        ],
        [
          -4333,
          -2282
        ],
        [
          -4425,
          -2002
        ],
        [
          -4477,
          -1826
        ],
        [
          -4641,
          -1283
        ],
        [
          -4747,
          -927
        ],
        [
          -4831,
          -672
        ],
        [
          -4916,
          -606
        ],
        [
          -5190,
          -500
        ],
        [
          -5405,
          -465
        ],
        [
          -5526,
          -456
        ],
        [
          -5759,
          -408
        ],
        [
          -5913,
          -272
        ],
        [
          -5936,
          -121
        ],
        [
          -6001,
          94
        ],
        [
          -6211,
          135
        ],
        [
          -6588,
          80
        ],
        [
          -6817,
          1
        ],
        [
          -7141,
          -147
        ],
        [
          -7589,
          -340
        ],
        [
          -7836,
          -467
        ],
        [
          -8475,
          -789
        ],
        [
          -8980,
          -1078
        ],
        [
          -9367,
          -1293
        ],
        [
          -9827,
          -1880
        ],
        [
          -10046,
          -2592
        ],
        [
          -10264,
          -3323
        ],
        [
          -10311,
          -3751
        ],
        [
          -10287,
          -4301
        ],
        [
          -10235,
          -5054
        ],
        [
          -10249,
          -5302
        ],
        [
          -10276,
          -5681
        ],
        [
          -10212,
          -5888
        ],
        [
          -10098,
          -5954
        ],
        [
          -9892,
          -6058
        ],
        [
          -9635,
          -6192
        ],
        [
          -9390,
          -6314
        ],
        [
          -9059,
          -6480
        ],
        [
          -8308,
          -6905
        ],
        [
          -7897,
          -7121
        ],
        [
          -7589,
          -7297
        ],
        [
          -7275,
          -7411
        ],
        [
          -6987,
          -7334
        ],
        [
          -6887,
          -7203
        ],
        [
          -6766,
          -6971
        ],
        [
          -6638,
          -6716
        ],
        [
          -6397,
          -6223
        ],
        [
          -6212,
          -5902
        ],
        [
          -5897,
          -5481
        ],
        [
          -5506,
          -5114
        ],
        [
          -5323,
          -4957
        ],
        [
          -4828,
          -4461
        ],
        [
          -4444,
          -4084
        ],
        [
          -4232,
          -3647
        ],
        [
          -4071,
          -2976
        ],
        [
          -3771,
          -2432
        ],
        [
          -3147,
          -1957
        ],
        [
          -2792,
          -1683
        ],
        [
          -2247,
          -1266
        ],
        [
          -1705,
          -853
        ],
        [
          -1248,
          -528
        ],
        [
          -574,
          -223
        ],
        [
          18,
          14
        ],
        [
          508,
          213
        ],
        [
          916,
          382
        ],
        [
          1420,
          591
        ],
        [
          1967,
          820
        ],
        [
          2512,
          1051
        ],
        [
          3199,
          1341
        ],
        [
          4089,
          1719
        ],
        [
          4504,
          1893
        ],
        [
          5065,
          2111
        ],
        [
          5725,
          2357
        ],
        [
          6189,
          2530
        ],
        [
          6697,
          2724
        ],
        [
          7720,
          3155
        ]
      ],
      "length": 20623,
      "closure": 0.005,
      "driver_number": 1,
      "lap": 28
    },
    "sepang": {
      "points": [
        [
          27,
          -220
        ],
        [
          -758,
          -289
        ],
        [
          -1334,
          -339
        ],
        [
          -2122,
          -408
        ],
        [
          -2566,
          -447
        ],
        [
          -3340,
          -515
        ],
        [
          -4056,
          -578
        ],
        [
          -4744,
          -638
        ],
        [
          -5141,
          -672
        ],
        [
          -5456,
          -659
        ],
        [
          -5580,
          -618
        ],
        [
          -5715,
          -492
        ],
        [
          -5774,
          -344
        ],
        [
          -5760,
          -167
        ],
        [
          -5707,
          -71
        ],
        [
          -5570,
          21
        ],
        [
          -5449,
          22
        ],
        [
          -5242,
          -46
        ],
        [
          -5133,
          -78
        ],
        [
          -4960,
          -95
        ],
        [
          -4817,
          22
        ],
        [
          -4798,
          92
        ],
        [
          -4790,
          220
        ],
        [
          -4806,
          303
        ],
        [
          -4939,
          509
        ],
        [
          -5046,
          647
        ],
        [
          -5147,
          873
        ],
        [
          -5185,
          1037
        ],
        [
          -5217,
          1343
        ],
        [
          -5204,
          1760
        ],
        [
          -5128,
          2305
        ],
        [
          -5057,
          2530
        ],
        [
          -4785,
          2934
        ],
        [
          -4593,
          3098
        ],
        [
          -3894,
          3432
        ],
        [
          -3450,
          3566
        ],
        [
          -2881,
          3753
        ],
        [
          -2552,
          3873
        ],
        [
          -2102,
          4046
        ],
        [
          -1473,
          4314
        ],
        [
          -1193,
          4439
        ],
        [
          -728,
          4642
        ],
        [
          -505,
          4687
        ],
        [
          -177,
          4470
        ],
        [
          -109,
          4306
        ],
        [
          -75,
          4110
        ],
        [
          -57,
          3906
        ],
        [
          -20,
          3597
        ],
        [
          17,
          3333
        ],
        [
          83,
          2941
        ],
        [
          144,
          2668
        ],
        [
          373,
          2093
        ],
        [
          528,
          1875
        ],
        [
          920,
          1588
        ],
        [
          1122,
          1519
        ],
        [
          1467,
          1477
        ],
        [
          1733,
          1522
        ],
        [
          2115,
          1707
        ],
        [
          2364,
          1951
        ],
        [
          2593,
          2132
        ],
        [
          3193,
          2261
        ],
        [
          3500,
          2199
        ],
        [
          3991,
          1877
        ],
        [
          4242,
          1592
        ],
        [
          4476,
          1300
        ],
        [
          4687,
          1059
        ],
        [
          4988,
          719
        ],
        [
          5232,
          445
        ],
        [
          5543,
          86
        ],
        [
          5672,
          -86
        ],
        [
          5774,
          -513
        ],
        [
          5697,
          -809
        ],
        [
          5519,
          -1081
        ],
        [
          4924,
          -1350
        ],
        [
          4558,
          -1400
        ],
        [
          4108,
          -1418
        ],
        [
          3830,
          -1430
        ],
        [
          3388,
          -1459
        ],
        [
          2916,
          -1489
        ],
        [
          2237,
          -1545
        ],
        [
          1921,
          -1577
        ],
        [
          1393,
          -1638
        ],
        [
          1125,
          -1674
        ],
        [
          854,
          -1722
        ],
        [
          640,
          -1810
        ],
        [
          571,
          -1934
        ],
        [
          587,
          -2036
        ],
        [
          701,
          -2183
        ],
        [
          997,
          -2370
        ],
        [
          1272,
          -2537
        ],
        [
          1472,
          -2723
        ],
        [
          1622,
          -3092
        ],
        [
          1642,
          -3416
        ],
        [
          1589,
          -3739
        ],
        [
          1483,
          -4039
        ],
        [
          1375,
          -4252
        ],
        [
          1091,
          -4602
        ],
        [
          911,
          -4686
        ],
        [
          519,
          -4634
        ],
        [
          367,
          -4539
        ],
        [
          128,
          -4324
        ],
        [
          21,
          -4228
        ],
        [
          -302,
          -3939
        ],
        [
          -557,
          -3710
        ],
        [
          -988,
          -3325
        ],
        [
          -1296,
          -3072
        ],
        [
          -1564,
          -2940
        ],
        [
          -2023,
          -2905
        ],
        [
          -2747,
          -3201
        ],
        [
          -3044,
          -3322
        ],
        [
          -3615,
          -3378
        ],
        [
          -3903,
          -3328
        ],
        [
          -4192,
          -3227
        ],
        [
          -4439,
          -3060
        ],
        [
          -4645,
          -2786
        ],
        [
          -4700,
          -2534
        ],
        [
          -4656,
          -2361
        ],
        [
          -4539,
          -2212
        ],
        [
          -4369,
          -2121
        ],
        [
          -3986,
          -2027
        ],
        [
          -3643,
          -1962
        ],
        [
          -3269,
          -1901
        ],
        [
          -3001,
          -1860
        ],
        [
          -2578,
          -1793
        ],
        [
          -2281,
          -1743
        ],
        [
          -1120,
          -1547
        ],
        [
          -754,
          -1485
        ],
        [
          22,
          -1342
        ],
        [
          410,
          -1269
        ],
        [
          1349,
          -1097
        ],
        [
          1761,
          -1023
        ],
        [
          2368,
          -928
        ],
        [
          2838,
          -855
        ],
        [
          3332,
          -781
        ],
        [
          3750,
          -702
        ],
        [
          3925,
          -646
        ],
        [
          4108,
          -465
        ],
        [
          4139,
          -368
        ],
        [
          4116,
          -111
        ],
        [
          4090,
          -63
        ],
        [
          3944,
          70
        ],
        [
          3788,
          103
        ],
        [
          3598,
          98
        ],
        [
          3367,
          78
        ],
        [
          3051,
          43
        ],
        [
          2836,
          22
        ],
        [
          2280,
          -26
        ],
        [
          1893,
          -59
        ],
        [
          1273,
          -112
        ],
        [
          371,
          -190
        ]
      ],
      "length": 11548,
      "closure": 0.03,
      "driver_number": 1,
      "lap": 54
    },
    "singapore": {
      "points": [
        [
          7050,
          122
        ],
        [
          6975,
          591
        ],
        [
          6921,
          952
        ],
        [
          6806,
          1772
        ],
        [
          6735,
          2339
        ],
        [
          6689,
          2729
        ],
        [
          6616,
          3346
        ],
        [
          6575,
          3566
        ],
        [
          6430,
          3889
        ],
        [
          6331,
          3970
        ],
        [
          6136,
          4036
        ],
        [
          5813,
          4124
        ],
        [
          5646,
          4241
        ],
        [
          5395,
          4444
        ],
        [
          5243,
          4495
        ],
        [
          5126,
          4473
        ],
        [
          5004,
          4372
        ],
        [
          4876,
          3919
        ],
        [
          4872,
          3788
        ],
        [
          4944,
          3334
        ],
        [
          5023,
          3108
        ],
        [
          5209,
          2657
        ],
        [
          5338,
          2341
        ],
        [
          5451,
          2016
        ],
        [
          5544,
          1619
        ],
        [
          5568,
          1375
        ],
        [
          5549,
          1030
        ],
        [
          5428,
          791
        ],
        [
          5301,
          698
        ],
        [
          5024,
          605
        ],
        [
          4790,
          571
        ],
        [
          4600,
          561
        ],
        [
          4027,
          596
        ],
        [
          3654,
          630
        ],
        [
          3176,
          670
        ],
        [
          2832,
          696
        ],
        [
          2508,
          721
        ],
        [
          2026,
          759
        ],
        [
          1652,
          790
        ],
        [
          1125,
          850
        ],
        [
          726,
          941
        ],
        [
          386,
          1077
        ],
        [
          -10,
          1295
        ],
        [
          -412,
          1537
        ],
        [
          -846,
          1803
        ],
        [
          -1173,
          2015
        ],
        [
          -1592,
          2295
        ],
        [
          -1942,
          2487
        ],
        [
          -2127,
          2541
        ],
        [
          -2310,
          2545
        ],
        [
          -2525,
          2427
        ],
        [
          -2626,
          2320
        ],
        [
          -2772,
          2124
        ],
        [
          -2886,
          1953
        ],
        [
          -3026,
          1678
        ],
        [
          -3205,
          1265
        ],
        [
          -3268,
          1143
        ],
        [
          -3365,
          1004
        ],
        [
          -3472,
          935
        ],
        [
          -3566,
          938
        ],
        [
          -3682,
          1005
        ],
        [
          -3784,
          1102
        ],
        [
          -3876,
          1207
        ],
        [
          -4025,
          1403
        ],
        [
          -4167,
          1578
        ],
        [
          -4330,
          1756
        ],
        [
          -4767,
          2039
        ],
        [
          -4909,
          2064
        ],
        [
          -5127,
          2010
        ],
        [
          -5240,
          1937
        ],
        [
          -5477,
          1644
        ],
        [
          -5602,
          1429
        ],
        [
          -5744,
          1143
        ],
        [
          -5876,
          872
        ],
        [
          -5998,
          640
        ],
        [
          -6253,
          197
        ],
        [
          -6563,
          -340
        ],
        [
          -6777,
          -709
        ],
        [
          -7106,
          -1230
        ],
        [
          -7192,
          -1442
        ],
        [
          -7189,
          -1624
        ],
        [
          -7072,
          -1940
        ],
        [
          -6940,
          -2094
        ],
        [
          -6735,
          -2225
        ],
        [
          -6489,
          -2317
        ],
        [
          -6341,
          -2391
        ],
        [
          -6192,
          -2732
        ],
        [
          -6161,
          -2913
        ],
        [
          -6093,
          -3204
        ],
        [
          -5947,
          -3379
        ],
        [
          -5717,
          -3567
        ],
        [
          -5386,
          -3849
        ],
        [
          -5260,
          -3981
        ],
        [
          -5094,
          -4216
        ],
        [
          -4949,
          -4415
        ],
        [
          -4821,
          -4495
        ],
        [
          -4676,
          -4449
        ],
        [
          -4622,
          -4366
        ],
        [
          -4594,
          -4294
        ],
        [
          -4545,
          -4084
        ],
        [
          -4517,
          -3913
        ],
        [
          -4486,
          -3676
        ],
        [
          -4437,
          -3326
        ],
        [
          -4397,
          -3105
        ],
        [
          -4294,
          -2570
        ],
        [
          -4257,
          -2359
        ],
        [
          -4202,
          -2047
        ],
        [
          -4091,
          -1482
        ],
        [
          -4015,
          -1125
        ],
        [
          -3835,
          -496
        ],
        [
          -3729,
          -190
        ],
        [
          -3636,
          59
        ],
        [
          -3509,
          355
        ],
        [
          -3388,
          499
        ],
        [
          -2955,
          398
        ],
        [
          -2796,
          269
        ],
        [
          -2650,
          144
        ],
        [
          -2348,
          -138
        ],
        [
          -2117,
          -337
        ],
        [
          -1685,
          -685
        ],
        [
          -1507,
          -802
        ],
        [
          -912,
          -1013
        ],
        [
          -198,
          -1068
        ],
        [
          275,
          -1099
        ],
        [
          607,
          -1121
        ],
        [
          1084,
          -1152
        ],
        [
          1443,
          -1172
        ],
        [
          1918,
          -1190
        ],
        [
          2283,
          -1197
        ],
        [
          2591,
          -1206
        ],
        [
          2897,
          -1220
        ],
        [
          3167,
          -1241
        ],
        [
          3365,
          -1280
        ],
        [
          3492,
          -1368
        ],
        [
          3553,
          -1532
        ],
        [
          3682,
          -1855
        ],
        [
          3769,
          -1966
        ],
        [
          3969,
          -2106
        ],
        [
          4500,
          -2201
        ],
        [
          4771,
          -2204
        ],
        [
          5511,
          -2227
        ],
        [
          5771,
          -2244
        ],
        [
          6103,
          -2264
        ],
        [
          6500,
          -2234
        ],
        [
          6780,
          -2071
        ],
        [
          7056,
          -1672
        ],
        [
          7156,
          -1385
        ],
        [
          7192,
          -1126
        ],
        [
          7179,
          -709
        ],
        [
          7047,
          144
        ]
      ],
      "length": 14384,
      "closure": 0.002,
      "driver_number": 1,
      "lap": 42
    },
    "americas": {
      "points": [
        [
          -7517,
          -1825
        ],
        [
          -7213,
          -2057
        ],
        [
          -6566,
          -2553
        ],
        [
          -6255,
          -2792
        ],
        [
          -5799,
          -3141
        ],
        [
          -5377,
          -3463
        ],
        [
          -4711,
          -3973
        ],
        [
          -4213,
          -4358
        ],
        [
          -3766,
          -4702
        ],
        [
          -3543,
          -4887
        ],
        [
          -3214,
          -5155
        ],
        [
          -3069,
          -5231
        ],
        [
          -2859,
          -5246
        ],
        [
          -2743,
          -5160
        ],
        [
          -2702,
          -5036
        ],
        [
          -2715,
          -4860
        ],
        [
          -2746,
          -4674
        ],
        [
          -2802,
          -4492
        ],
        [
          -2915,
          -4247
        ],
        [
          -3044,
          -3956
        ],
        [
          -3140,
          -3661
        ],
        [
          -3154,
          -3080
        ],
        [
          -3059,
          -2779
        ],
        [
          -2552,
          -2186
        ],
        [
          -2188,
          -1967
        ],
        [
          -1677,
          -1691
        ],
        [
          -1350,
          -1447
        ],
        [
          -970,
          -986
        ],
        [
          -797,
          -685
        ],
        [
          -543,
          -366
        ],
        [
          -3,
          -39
        ],
        [
          168,
          241
        ],
        [
          332,
          837
        ],
        [
          548,
          1174
        ],
        [
          894,
          1435
        ],
        [
          1073,
          1519
        ],
        [
          1492,
          1566
        ],
        [
          1734,
          1501
        ],
        [
          2213,
          1266
        ],
        [
          2549,
          1161
        ],
        [
          2818,
          1179
        ],
        [
          3100,
          1348
        ],
        [
          3337,
          1589
        ],
        [
          3461,
          1742
        ],
        [
          3674,
          1968
        ],
        [
          3920,
          2081
        ],
        [
          4077,
          2084
        ],
        [
          4322,
          1998
        ],
        [
          4520,
          1836
        ],
        [
          4677,
          1695
        ],
        [
          5031,
          1636
        ],
        [
          5399,
          1683
        ],
        [
          5587,
          1729
        ],
        [
          5917,
          1814
        ],
        [
          6190,
          1894
        ],
        [
          6556,
          2054
        ],
        [
          6859,
          2244
        ],
        [
          7177,
          2574
        ],
        [
          7346,
          2785
        ],
        [
          7747,
          3284
        ],
        [
          8109,
          3722
        ],
        [
          8364,
          4045
        ],
        [
          8708,
          4452
        ],
        [
          8917,
          4696
        ],
        [
          9022,
          4875
        ],
        [
          9068,
          5042
        ],
        [
          8949,
          5220
        ],
        [
          8866,
          5247
        ],
        [
          8662,
          5247
        ],
        [
          8536,
          5227
        ],
        [
          8238,
          5137
        ],
        [
          8076,
          5077
        ],
        [
          7597,
          4903
        ],
        [
          7391,
          4830
        ],
        [
          6780,
          4619
        ],
        [
          6167,
          4431
        ],
        [
          5819,
          4333
        ],
        [
          4993,
          4114
        ],
        [
          4679,
          4036
        ],
        [
          3935,
          3860
        ],
        [
          3486,
          3761
        ],
        [
          2808,
          3622
        ],
        [
          2311,
          3528
        ],
        [
          1865,
          3449
        ],
        [
          1327,
          3360
        ],
        [
          321,
          3234
        ],
        [
          -338,
          3168
        ],
        [
          -1144,
          3089
        ],
        [
          -1620,
          3041
        ],
        [
          -2106,
          2995
        ],
        [
          -2359,
          2924
        ],
        [
          -2454,
          2856
        ],
        [
          -2527,
          2684
        ],
        [
          -2511,
          2569
        ],
        [
          -2451,
          2432
        ],
        [
          -2362,
          2299
        ],
        [
          -2238,
          2162
        ],
        [
          -2092,
          2021
        ],
        [
          -1879,
          1818
        ],
        [
          -1670,
          1592
        ],
        [
          -1521,
          1343
        ],
        [
          -1485,
          1130
        ],
        [
          -1532,
          938
        ],
        [
          -1602,
          843
        ],
        [
          -1792,
          756
        ],
        [
          -1981,
          755
        ],
        [
          -2116,
          792
        ],
        [
          -2318,
          924
        ],
        [
          -2415,
          1024
        ],
        [
          -2569,
          1270
        ],
        [
          -2709,
          1534
        ],
        [
          -2940,
          1807
        ],
        [
          -3059,
          1904
        ],
        [
          -3316,
          2003
        ],
        [
          -3450,
          1994
        ],
        [
          -3578,
          1938
        ],
        [
          -3680,
          1796
        ],
        [
          -3658,
          1623
        ],
        [
          -3589,
          1485
        ],
        [
          -3507,
          1367
        ],
        [
          -3310,
          1109
        ],
        [
          -3125,
          882
        ],
        [
          -2875,
          449
        ],
        [
          -2806,
          187
        ],
        [
          -2794,
          -245
        ],
        [
          -2920,
          -631
        ],
        [
          -3396,
          -1084
        ],
        [
          -3798,
          -1237
        ],
        [
          -4391,
          -1220
        ],
        [
          -4604,
          -1163
        ],
        [
          -5197,
          -800
        ],
        [
          -5370,
          -586
        ],
        [
          -5832,
          177
        ],
        [
          -6085,
          473
        ],
        [
          -6461,
          704
        ],
        [
          -6912,
          699
        ],
        [
          -7212,
          576
        ],
        [
          -7514,
          433
        ],
        [
          -7909,
          254
        ],
        [
          -8348,
          76
        ],
        [
          -8552,
          -9
        ],
        [
          -8798,
          -129
        ],
        [
          -8903,
          -204
        ],
        [
          -9051,
          -398
        ],
        [
          -9067,
          -479
        ],
        [
          -8998,
          -697
        ],
        [
          -8871,
          -855
        ],
        [
          -8594,
          -1073
        ],
        [
          -8328,
          -1241
        ],
        [
          -7714,
          -1674
        ]
      ],
      "length": 18135,
      "closure": 0.014,
      "driver_number": 1,
      "lap": 43
    },
    "mexico": {
      "points": [
        [
          -4462,
          5009
        ],
        [
          -3944,
          4922
        ],
        [
          -3576,
          4862
        ],
        [
          -3233,
          4808
        ],
        [
          -2761,
          4737
        ],
        [
          -2281,
          4664
        ],
        [
          -1844,
          4598
        ],
        [
          -1481,
          4544
        ],
        [
          -875,
          4458
        ],
        [
          -431,
          4404
        ],
        [
          16,
          4354
        ],
        [
          512,
          4297
        ],
        [
          1318,
          4203
        ],
        [
          1750,
          4154
        ],
        [
          2104,
          4111
        ],
        [
          2737,
          4029
        ],
        [
          3331,
          3950
        ],
        [
          3811,
          3887
        ],
        [
          4204,
          3836
        ],
        [
          4603,
          3784
        ],
        [
          5117,
          3716
        ],
        [
          5520,
          3664
        ],
        [
          6003,
          3602
        ],
        [
          6217,
          3568
        ],
        [
          6403,
          3523
        ],
        [
          6509,
          3481
        ],
        [
          6647,
          3394
        ],
        [
          6711,
          3331
        ],
        [
          6798,
          3168
        ],
        [
          6821,
          3035
        ],
        [
          6800,
          2832
        ],
        [
          6778,
          2687
        ],
        [
          6797,
          2522
        ],
        [
          6877,
          2396
        ],
        [
          7022,
          2291
        ],
        [
          7122,
          2216
        ],
        [
          7212,
          2061
        ],
        [
          7223,
          1867
        ],
        [
          7181,
          1648
        ],
        [
          7145,
          1518
        ],
        [
          7083,
          1330
        ],
        [
          7021,
          1166
        ],
        [
          6905,
          905
        ],
        [
          6798,
          696
        ],
        [
          6610,
          379
        ],
        [
          6380,
          20
        ],
        [
          6164,
          -308
        ],
        [
          5982,
          -601
        ],
        [
          5749,
          -993
        ],
        [
          5482,
          -1446
        ],
        [
          5214,
          -1895
        ],
        [
          4943,
          -2333
        ],
        [
          4687,
          -2719
        ],
        [
          4469,
          -3038
        ],
        [
          4317,
          -3252
        ],
        [
          4226,
          -3378
        ],
        [
          4117,
          -3543
        ],
        [
          4038,
          -3708
        ],
        [
          4012,
          -3825
        ],
        [
          4013,
          -3914
        ],
        [
          4074,
          -4057
        ],
        [
          4170,
          -4136
        ],
        [
          4309,
          -4212
        ],
        [
          4395,
          -4277
        ],
        [
          4461,
          -4386
        ],
        [
          4449,
          -4538
        ],
        [
          4399,
          -4607
        ],
        [
          4327,
          -4672
        ],
        [
          4211,
          -4753
        ],
        [
          4025,
          -4883
        ],
        [
          3839,
          -5024
        ],
        [
          3756,
          -5084
        ],
        [
          3537,
          -5164
        ],
        [
          3334,
          -5115
        ],
        [
          3203,
          -4853
        ],
        [
          3204,
          -4663
        ],
        [
          3221,
          -4515
        ],
        [
          3254,
          -4333
        ],
        [
          3320,
          -3976
        ],
        [
          3361,
          -3747
        ],
        [
          3420,
          -3428
        ],
        [
          3484,
          -3100
        ],
        [
          3525,
          -2890
        ],
        [
          3596,
          -2473
        ],
        [
          3598,
          -2085
        ],
        [
          3543,
          -1909
        ],
        [
          3421,
          -1723
        ],
        [
          3234,
          -1568
        ],
        [
          3010,
          -1418
        ],
        [
          2809,
          -1239
        ],
        [
          2511,
          -801
        ],
        [
          2213,
          -484
        ],
        [
          2043,
          -381
        ],
        [
          1731,
          -278
        ],
        [
          1406,
          -249
        ],
        [
          1011,
          -235
        ],
        [
          700,
          -155
        ],
        [
          517,
          -30
        ],
        [
          381,
          135
        ],
        [
          249,
          390
        ],
        [
          87,
          749
        ],
        [
          -22,
          896
        ],
        [
          -250,
          1082
        ],
        [
          -503,
          1226
        ],
        [
          -696,
          1323
        ],
        [
          -1198,
          1532
        ],
        [
          -1444,
          1609
        ],
        [
          -1745,
          1691
        ],
        [
          -2173,
          1780
        ],
        [
          -2486,
          1832
        ],
        [
          -2937,
          1894
        ],
        [
          -3330,
          1939
        ],
        [
          -3659,
          1975
        ],
        [
          -4021,
          2015
        ],
        [
          -4425,
          2060
        ],
        [
          -4672,
          2088
        ],
        [
          -4955,
          2138
        ],
        [
          -5211,
          2274
        ],
        [
          -5303,
          2376
        ],
        [
          -5389,
          2573
        ],
        [
          -5415,
          2925
        ],
        [
          -5400,
          3153
        ],
        [
          -5387,
          3429
        ],
        [
          -5394,
          3660
        ],
        [
          -5443,
          3845
        ],
        [
          -5501,
          3913
        ],
        [
          -5582,
          3954
        ],
        [
          -5678,
          3958
        ],
        [
          -5765,
          3921
        ],
        [
          -5846,
          3858
        ],
        [
          -5930,
          3791
        ],
        [
          -6032,
          3735
        ],
        [
          -6168,
          3709
        ],
        [
          -6329,
          3718
        ],
        [
          -6566,
          3763
        ],
        [
          -6830,
          3802
        ],
        [
          -6931,
          3817
        ],
        [
          -7117,
          3891
        ],
        [
          -7199,
          4021
        ],
        [
          -7222,
          4180
        ],
        [
          -7201,
          4335
        ],
        [
          -7109,
          4566
        ],
        [
          -7027,
          4685
        ],
        [
          -6879,
          4837
        ],
        [
          -6781,
          4911
        ],
        [
          -6574,
          5025
        ],
        [
          -6410,
          5084
        ],
        [
          -6145,
          5142
        ],
        [
          -5818,
          5164
        ],
        [
          -5045,
          5098
        ]
      ],
      "length": 14445,
      "closure": 0.041,
      "driver_number": 3,
      "lap": 50
    },
    "brazil": {
      "points": [
        [
          -2787,
          -2027
        ],
        [
          -2783,
          -2044
        ],
        [
          -2682,
          -2437
        ],
        [
          -2570,
          -2861
        ],
        [
          -2489,
          -3162
        ],
        [
          -2371,
          -3604
        ],
        [
          -2231,
          -4109
        ],
        [
          -2193,
          -4238
        ],
        [
          -2117,
          -4479
        ],
        [
          -1936,
          -4895
        ],
        [
          -1840,
          -5034
        ],
        [
          -1661,
          -5174
        ],
        [
          -1553,
          -5201
        ],
        [
          -1499,
          -5202
        ],
        [
          -1328,
          -5145
        ],
        [
          -1218,
          -5063
        ],
        [
          -1096,
          -4955
        ],
        [
          -933,
          -4828
        ],
        [
          -787,
          -4765
        ],
        [
          -773,
          -4762
        ],
        [
          -511,
          -4804
        ],
        [
          -36,
          -4987
        ],
        [
          356,
          -5038
        ],
        [
          671,
          -5000
        ],
        [
          909,
          -4918
        ],
        [
          1081,
          -4829
        ],
        [
          1307,
          -4664
        ],
        [
          1626,
          -4290
        ],
        [
          1792,
          -3961
        ],
        [
          1897,
          -3623
        ],
        [
          2021,
          -3133
        ],
        [
          2098,
          -2833
        ],
        [
          2195,
          -2427
        ],
        [
          2262,
          -2145
        ],
        [
          2352,
          -1777
        ],
        [
          2438,
          -1435
        ],
        [
          2564,
          -942
        ],
        [
          2608,
          -772
        ],
        [
          2745,
          -245
        ],
        [
          2816,
          21
        ],
        [
          2913,
          387
        ],
        [
          3005,
          732
        ],
        [
          3113,
          1125
        ],
        [
          3146,
          1240
        ],
        [
          3219,
          1503
        ],
        [
          3272,
          1803
        ],
        [
          3267,
          1989
        ],
        [
          3212,
          2209
        ],
        [
          3107,
          2365
        ],
        [
          3010,
          2445
        ],
        [
          2748,
          2563
        ],
        [
          2449,
          2629
        ],
        [
          2156,
          2647
        ],
        [
          1984,
          2644
        ],
        [
          1640,
          2587
        ],
        [
          1463,
          2517
        ],
        [
          1089,
          2266
        ],
        [
          870,
          2055
        ],
        [
          643,
          1745
        ],
        [
          531,
          1587
        ],
        [
          255,
          1197
        ],
        [
          169,
          1074
        ],
        [
          -52,
          754
        ],
        [
          -243,
          469
        ],
        [
          -467,
          137
        ],
        [
          -616,
          -84
        ],
        [
          -800,
          -342
        ],
        [
          -966,
          -520
        ],
        [
          -1317,
          -720
        ],
        [
          -1611,
          -769
        ],
        [
          -1877,
          -743
        ],
        [
          -2084,
          -661
        ],
        [
          -2259,
          -544
        ],
        [
          -2341,
          -464
        ],
        [
          -2560,
          -131
        ],
        [
          -2649,
          136
        ],
        [
          -2697,
          364
        ],
        [
          -2726,
          560
        ],
        [
          -2737,
          760
        ],
        [
          -2732,
          842
        ],
        [
          -2702,
          1008
        ],
        [
          -2646,
          1148
        ],
        [
          -2577,
          1228
        ],
        [
          -2483,
          1267
        ],
        [
          -2277,
          1238
        ],
        [
          -2198,
          1200
        ],
        [
          -2047,
          1121
        ],
        [
          -1872,
          1047
        ],
        [
          -1686,
          1023
        ],
        [
          -1551,
          1056
        ],
        [
          -1423,
          1158
        ],
        [
          -1394,
          1201
        ],
        [
          -1355,
          1308
        ],
        [
          -1369,
          1550
        ],
        [
          -1433,
          1702
        ],
        [
          -1537,
          1862
        ],
        [
          -1670,
          2014
        ],
        [
          -1805,
          2156
        ],
        [
          -2214,
          2718
        ],
        [
          -2320,
          2981
        ],
        [
          -2360,
          3179
        ],
        [
          -2337,
          3422
        ],
        [
          -2233,
          3562
        ],
        [
          -2129,
          3587
        ],
        [
          -1963,
          3537
        ],
        [
          -1846,
          3456
        ],
        [
          -1743,
          3354
        ],
        [
          -1654,
          3249
        ],
        [
          -1548,
          3109
        ],
        [
          -1492,
          3036
        ],
        [
          -1385,
          2911
        ],
        [
          -1076,
          2681
        ],
        [
          -769,
          2610
        ],
        [
          -554,
          2603
        ],
        [
          -95,
          2732
        ],
        [
          51,
          2820
        ],
        [
          327,
          3094
        ],
        [
          505,
          3367
        ],
        [
          759,
          3797
        ],
        [
          890,
          4023
        ],
        [
          1040,
          4306
        ],
        [
          1056,
          4344
        ],
        [
          1092,
          4621
        ],
        [
          1033,
          4768
        ],
        [
          934,
          4881
        ],
        [
          848,
          4941
        ],
        [
          653,
          5035
        ],
        [
          123,
          5187
        ],
        [
          -81,
          5202
        ],
        [
          -421,
          5187
        ],
        [
          -806,
          5116
        ],
        [
          -1084,
          5038
        ],
        [
          -1677,
          4778
        ],
        [
          -1780,
          4717
        ],
        [
          -2154,
          4428
        ],
        [
          -2464,
          4071
        ],
        [
          -2689,
          3685
        ],
        [
          -2816,
          3387
        ],
        [
          -2995,
          2786
        ],
        [
          -3024,
          2655
        ],
        [
          -3130,
          2170
        ],
        [
          -3204,
          1758
        ],
        [
          -3257,
          1265
        ],
        [
          -3271,
          926
        ],
        [
          -3258,
          386
        ],
        [
          -3234,
          122
        ],
        [
          -3183,
          -255
        ],
        [
          -3084,
          -792
        ],
        [
          -2998,
          -1176
        ],
        [
          -2792,
          -2005
        ]
      ],
      "length": 10404,
      "closure": 0.002,
      "driver_number": 1,
      "lap": 52
    },
    "las_vegas": {
      "points": [
        [
          4188,
          -8429
        ],
        [
          4394,
          -8199
        ],
        [
          4608,
          -7961
        ],
        [
          5108,
          -7401
        ],
        [
          5287,
          -7202
        ],
        [
          5682,
          -6723
        ],
        [
          5708,
          -6408
        ],
        [
          5651,
          -6285
        ],
        [
          5537,
          -6161
        ],
        [
          5307,
          -6055
        ],
        [
          5113,
          -6035
        ],
        [
          4965,
          -6054
        ],
        [
          4659,
          -6186
        ],
        [
          4354,
          -6423
        ],
        [
          4130,
          -6644
        ],
        [
          3524,
          -6866
        ],
        [
          3170,
          -6762
        ],
        [
          2949,
          -6630
        ],
        [
          2660,
          -6303
        ],
        [
          2540,
          -6004
        ],
        [
          2469,
          -5438
        ],
        [
          2407,
          -4436
        ],
        [
          2393,
          -4081
        ],
        [
          2371,
          -3532
        ],
        [
          2349,
          -2975
        ],
        [
          2333,
          -2496
        ],
        [
          2309,
          -1830
        ],
        [
          2296,
          -1462
        ],
        [
          2279,
          -977
        ],
        [
          2248,
          -89
        ],
        [
          2233,
          351
        ],
        [
          2217,
          794
        ],
        [
          2198,
          1348
        ],
        [
          2190,
          1581
        ],
        [
          2178,
          1913
        ],
        [
          2213,
          2308
        ],
        [
          2263,
          2451
        ],
        [
          2317,
          2546
        ],
        [
          2546,
          2675
        ],
        [
          2816,
          2680
        ],
        [
          3034,
          2680
        ],
        [
          3354,
          2683
        ],
        [
          3560,
          2685
        ],
        [
          3802,
          2686
        ],
        [
          4238,
          2701
        ],
        [
          4567,
          2785
        ],
        [
          4991,
          3001
        ],
        [
          5386,
          3342
        ],
        [
          5613,
          3667
        ],
        [
          5801,
          4186
        ],
        [
          5756,
          4572
        ],
        [
          5691,
          4665
        ],
        [
          5493,
          4764
        ],
        [
          5382,
          4810
        ],
        [
          5253,
          4964
        ],
        [
          5231,
          5099
        ],
        [
          5262,
          5238
        ],
        [
          5320,
          5358
        ],
        [
          5477,
          5639
        ],
        [
          5537,
          5798
        ],
        [
          5542,
          6000
        ],
        [
          5428,
          6211
        ],
        [
          5314,
          6256
        ],
        [
          5153,
          6262
        ],
        [
          4782,
          6253
        ],
        [
          4399,
          6245
        ],
        [
          4087,
          6238
        ],
        [
          3674,
          6229
        ],
        [
          3301,
          6228
        ],
        [
          2895,
          6230
        ],
        [
          2178,
          6240
        ],
        [
          1743,
          6302
        ],
        [
          1300,
          6428
        ],
        [
          781,
          6702
        ],
        [
          592,
          6865
        ],
        [
          112,
          7577
        ],
        [
          -51,
          7934
        ],
        [
          -227,
          8313
        ],
        [
          -444,
          8694
        ],
        [
          -732,
          9022
        ],
        [
          -1161,
          9347
        ],
        [
          -1589,
          9539
        ],
        [
          -1937,
          9632
        ],
        [
          -2285,
          9701
        ],
        [
          -2607,
          9745
        ],
        [
          -2758,
          9685
        ],
        [
          -2866,
          9540
        ],
        [
          -2922,
          9327
        ],
        [
          -2958,
          9203
        ],
        [
          -3072,
          8942
        ],
        [
          -3236,
          8595
        ],
        [
          -3342,
          8370
        ],
        [
          -3476,
          8113
        ],
        [
          -3744,
          7642
        ],
        [
          -3896,
          7372
        ],
        [
          -4084,
          7019
        ],
        [
          -4375,
          6476
        ],
        [
          -4545,
          6147
        ],
        [
          -4697,
          5818
        ],
        [
          -4930,
          5242
        ],
        [
          -5059,
          4845
        ],
        [
          -5247,
          4189
        ],
        [
          -5448,
          3408
        ],
        [
          -5532,
          3010
        ],
        [
          -5647,
          2300
        ],
        [
          -5714,
          1695
        ],
        [
          -5749,
          1145
        ],
        [
          -5762,
          77
        ],
        [
          -5758,
          -374
        ],
        [
          -5755,
          -748
        ],
        [
          -5749,
          -1566
        ],
        [
          -5748,
          -2654
        ],
        [
          -5750,
          -3002
        ],
        [
          -5754,
          -3634
        ],
        [
          -5755,
          -3944
        ],
        [
          -5758,
          -4399
        ],
        [
          -5763,
          -5252
        ],
        [
          -5768,
          -5832
        ],
        [
          -5774,
          -6303
        ],
        [
          -5784,
          -7178
        ],
        [
          -5788,
          -7535
        ],
        [
          -5793,
          -7980
        ],
        [
          -5800,
          -8521
        ],
        [
          -5797,
          -8696
        ],
        [
          -5761,
          -8943
        ],
        [
          -5665,
          -9138
        ],
        [
          -5586,
          -9222
        ],
        [
          -5402,
          -9295
        ],
        [
          -5208,
          -9335
        ],
        [
          -5036,
          -9445
        ],
        [
          -4594,
          -9716
        ],
        [
          -4262,
          -9741
        ],
        [
          -4108,
          -9745
        ],
        [
          -3552,
          -9741
        ],
        [
          -3243,
          -9733
        ],
        [
          -2830,
          -9723
        ],
        [
          -2224,
          -9706
        ],
        [
          -1755,
          -9692
        ],
        [
          -1460,
          -9683
        ],
        [
          -645,
          -9674
        ],
        [
          -54,
          -9683
        ],
        [
          313,
          -9684
        ],
        [
          875,
          -9680
        ],
        [
          1280,
          -9673
        ],
        [
          1526,
          -9669
        ],
        [
          2235,
          -9638
        ],
        [
          2655,
          -9588
        ],
        [
          3079,
          -9443
        ],
        [
          3516,
          -9166
        ],
        [
          4117,
          -8512
        ]
      ],
      "length": 19490,
      "closure": 0.006,
      "driver_number": 1,
      "lap": 50
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
    },
    "12": {
      "circuit_id": "netherlands",
      "race": [
        {
          "driver_id": "norris",
          "position": 1,
          "points": 25,
          "laps": 72,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 2,
          "points": 18,
          "laps": 72,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 3,
          "points": 15,
          "laps": 72,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 4,
          "points": 12,
          "laps": 72,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 5,
          "points": 10,
          "laps": 72,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 6,
          "points": 8,
          "laps": 72,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 7,
          "points": 6,
          "laps": 72,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 8,
          "points": 4,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 9,
          "points": 2,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 10,
          "points": 1,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 12,
          "points": 0,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 13,
          "points": 0,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 14,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 15,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 16,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 17,
          "points": 0,
          "laps": 66,
          "status": "DNF"
        },
        {
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 61,
          "status": "DNF"
        },
        {
          "driver_id": "ocon",
          "position": null,
          "points": 0,
          "laps": 52,
          "status": "DNF"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 45,
          "status": "DNF"
        },
        {
          "driver_id": "bearman",
          "position": null,
          "points": 0,
          "laps": 2,
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
          "driver_id": "norris",
          "position": 1
        },
        {
          "driver_id": "russell",
          "position": 2
        },
        {
          "driver_id": "antonelli",
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
          "driver_id": "leclerc",
          "position": 6
        },
        {
          "driver_id": "max_verstappen",
          "position": 7
        },
        {
          "driver_id": "lawson",
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
          "driver_id": "gasly",
          "position": 11
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
          "driver_id": "ocon",
          "position": 15
        },
        {
          "driver_id": "albon",
          "position": 16
        },
        {
          "driver_id": "sainz",
          "position": 17
        },
        {
          "driver_id": "alonso",
          "position": 18
        },
        {
          "driver_id": "stroll",
          "position": 19
        },
        {
          "driver_id": "bearman",
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
      ],
      "sprint": [
        {
          "driver_id": "russell",
          "position": 1,
          "points": 8,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 2,
          "points": 7,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 3,
          "points": 6,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 4,
          "points": 5,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 5,
          "points": 4,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 6,
          "points": 3,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 7,
          "points": 2,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 8,
          "points": 1,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 9,
          "points": 0,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 10,
          "points": 0,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 11,
          "points": 0,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 12,
          "points": 0,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 14,
          "points": 0,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 15,
          "points": 0,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 16,
          "points": 0,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": 17,
          "points": 0,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 18,
          "points": 0,
          "laps": 24,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 19,
          "points": 0,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 20,
          "points": 0,
          "laps": 23,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 21,
          "points": 0,
          "laps": 21,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": null,
          "points": 0,
          "laps": 7,
          "status": "F"
        }
      ]
    },
    "13": {
      "circuit_id": "italy",
      "race": [
        {
          "driver_id": "antonelli",
          "position": 1,
          "points": 25,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 2,
          "points": 18,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 3,
          "points": 15,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 4,
          "points": 12,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "piastri",
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
          "driver_id": "arvid_lindblad",
          "position": 8,
          "points": 4,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 9,
          "points": 2,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 11,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 12,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 13,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 14,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 15,
          "points": 0,
          "laps": 53,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 16,
          "points": 0,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 17,
          "points": 0,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 18,
          "points": 0,
          "laps": 52,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 19,
          "points": 0,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 26,
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
          "driver_id": "leclerc",
          "position": null,
          "points": 0,
          "laps": 1,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "gasly",
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
          "driver_id": "hamilton",
          "position": 5
        },
        {
          "driver_id": "max_verstappen",
          "position": 6
        },
        {
          "driver_id": "antonelli",
          "position": 7
        },
        {
          "driver_id": "colapinto",
          "position": 8
        },
        {
          "driver_id": "norris",
          "position": 9
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 10
        },
        {
          "driver_id": "bortoleto",
          "position": 11
        },
        {
          "driver_id": "bearman",
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
          "driver_id": "sainz",
          "position": 15
        },
        {
          "driver_id": "ocon",
          "position": 16
        },
        {
          "driver_id": "albon",
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
    "14": {
      "circuit_id": "madrid",
      "race": [
        {
          "driver_id": "antonelli",
          "position": 1,
          "points": 25,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 2,
          "points": 18,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 3,
          "points": 15,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 4,
          "points": 12,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 5,
          "points": 10,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "lawson",
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
          "driver_id": "piastri",
          "position": 8,
          "points": 4,
          "laps": 57,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 9,
          "points": 2,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 10,
          "points": 1,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 11,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 12,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 13,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 15,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 16,
          "points": 0,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 17,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 18,
          "points": 0,
          "laps": 54,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": null,
          "points": 0,
          "laps": 43,
          "status": "DNF"
        },
        {
          "driver_id": "perez",
          "position": null,
          "points": 0,
          "laps": 31,
          "status": "DNF"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 12,
          "status": "DNF"
        },
        {
          "driver_id": "hamilton",
          "position": null,
          "points": 0,
          "laps": 6,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "norris",
          "position": 1
        },
        {
          "driver_id": "antonelli",
          "position": 2
        },
        {
          "driver_id": "max_verstappen",
          "position": 3
        },
        {
          "driver_id": "hamilton",
          "position": 4
        },
        {
          "driver_id": "leclerc",
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
          "driver_id": "lawson",
          "position": 8
        },
        {
          "driver_id": "colapinto",
          "position": 9
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 10
        },
        {
          "driver_id": "hulkenberg",
          "position": 11
        },
        {
          "driver_id": "bortoleto",
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
          "position": 16
        },
        {
          "driver_id": "sainz",
          "position": 17
        },
        {
          "driver_id": "alonso",
          "position": 18
        },
        {
          "driver_id": "perez",
          "position": 19
        },
        {
          "driver_id": "bottas",
          "position": 20
        }
      ]
    },
    "15": {
      "circuit_id": "azerbaijan",
      "race": [
        {
          "driver_id": "russell",
          "position": 1,
          "points": 25,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 2,
          "points": 18,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 3,
          "points": 15,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 4,
          "points": 12,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 5,
          "points": 10,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 6,
          "points": 8,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 7,
          "points": 6,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 8,
          "points": 4,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 9,
          "points": 2,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 10,
          "points": 1,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 11,
          "points": 0,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 12,
          "points": 0,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 13,
          "points": 0,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 14,
          "points": 0,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 15,
          "points": 0,
          "laps": 51,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 16,
          "points": 0,
          "laps": 49,
          "status": "DNF"
        },
        {
          "driver_id": "colapinto",
          "position": null,
          "points": 0,
          "laps": 36,
          "status": "DNF"
        },
        {
          "driver_id": "gasly",
          "position": null,
          "points": 0,
          "laps": 35,
          "status": "DNF"
        },
        {
          "driver_id": "norris",
          "position": null,
          "points": 0,
          "laps": 35,
          "status": "DNF"
        },
        {
          "driver_id": "albon",
          "position": null,
          "points": 0,
          "laps": 29,
          "status": "DNF"
        },
        {
          "driver_id": "alonso",
          "position": null,
          "points": 0,
          "laps": 20,
          "status": "DNF"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 7,
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
          "driver_id": "piastri",
          "position": 3
        },
        {
          "driver_id": "hadjar",
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
          "driver_id": "max_verstappen",
          "position": 8
        },
        {
          "driver_id": "sainz",
          "position": 9
        },
        {
          "driver_id": "colapinto",
          "position": 10
        },
        {
          "driver_id": "bearman",
          "position": 11
        },
        {
          "driver_id": "lawson",
          "position": 12
        },
        {
          "driver_id": "albon",
          "position": 13
        },
        {
          "driver_id": "ocon",
          "position": 14
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 15
        },
        {
          "driver_id": "antonelli",
          "position": 16
        },
        {
          "driver_id": "bortoleto",
          "position": 17
        },
        {
          "driver_id": "hulkenberg",
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
      ]
    },
    "16": {
      "circuit_id": "sepang",
      "race": [
        {
          "driver_id": "max_verstappen",
          "position": 1,
          "points": 25,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 2,
          "points": 18,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 3,
          "points": 15,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 4,
          "points": 12,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 5,
          "points": 10,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 6,
          "points": 8,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 7,
          "points": 6,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 8,
          "points": 4,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 9,
          "points": 2,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
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
          "driver_id": "stroll",
          "position": 12,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 13,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 14,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 15,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 16,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 17,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 18,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 19,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 20,
          "points": 0,
          "laps": 49,
          "status": "DNF"
        },
        {
          "driver_id": "albon",
          "position": null,
          "points": 0,
          "laps": 41,
          "status": "DNF"
        },
        {
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 7,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "max_verstappen",
          "position": 1
        },
        {
          "driver_id": "hamilton",
          "position": 2
        },
        {
          "driver_id": "hadjar",
          "position": 3
        },
        {
          "driver_id": "antonelli",
          "position": 4
        },
        {
          "driver_id": "leclerc",
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
          "driver_id": "russell",
          "position": 8
        },
        {
          "driver_id": "gasly",
          "position": 9
        },
        {
          "driver_id": "bortoleto",
          "position": 10
        },
        {
          "driver_id": "lawson",
          "position": 11
        },
        {
          "driver_id": "alonso",
          "position": 12
        },
        {
          "driver_id": "sainz",
          "position": 13
        },
        {
          "driver_id": "stroll",
          "position": 14
        },
        {
          "driver_id": "colapinto",
          "position": 15
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 16
        },
        {
          "driver_id": "hulkenberg",
          "position": 17
        },
        {
          "driver_id": "bearman",
          "position": 18
        },
        {
          "driver_id": "ocon",
          "position": 19
        },
        {
          "driver_id": "albon",
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
    },
    "17": {
      "circuit_id": "singapore",
      "race": [
        {
          "driver_id": "max_verstappen",
          "position": 1,
          "points": 25,
          "laps": 62,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 2,
          "points": 18,
          "laps": 62,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 3,
          "points": 15,
          "laps": 62,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 4,
          "points": 12,
          "laps": 62,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 5,
          "points": 10,
          "laps": 62,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 6,
          "points": 8,
          "laps": 62,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 7,
          "points": 6,
          "laps": 62,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 8,
          "points": 4,
          "laps": 62,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 9,
          "points": 2,
          "laps": 62,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 10,
          "points": 1,
          "laps": 62,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 11,
          "points": 0,
          "laps": 61,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 12,
          "points": 0,
          "laps": 61,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 13,
          "points": 0,
          "laps": 61,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 14,
          "points": 0,
          "laps": 61,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 15,
          "points": 0,
          "laps": 61,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 16,
          "points": 0,
          "laps": 61,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 17,
          "points": 0,
          "laps": 60,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 18,
          "points": 0,
          "laps": 59,
          "status": "DNF"
        },
        {
          "driver_id": "bottas",
          "position": 19,
          "points": 0,
          "laps": 59,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 36,
          "status": "DNF"
        },
        {
          "driver_id": "colapinto",
          "position": null,
          "points": 0,
          "laps": 29,
          "status": "DNF"
        },
        {
          "driver_id": "bortoleto",
          "position": null,
          "points": 0,
          "laps": 7,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "max_verstappen",
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
          "driver_id": "norris",
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
          "driver_id": "gasly",
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
          "driver_id": "sainz",
          "position": 14
        },
        {
          "driver_id": "bortoleto",
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
          "driver_id": "albon",
          "position": 18
        },
        {
          "driver_id": "stroll",
          "position": 19
        },
        {
          "driver_id": "perez",
          "position": 20
        },
        {
          "driver_id": "bottas",
          "position": 21
        },
        {
          "driver_id": "hadjar",
          "position": "RT"
        }
      ],
      "sprint": [
        {
          "driver_id": "max_verstappen",
          "position": 1,
          "points": 8,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 2,
          "points": 7,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 3,
          "points": 6,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 4,
          "points": 5,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 5,
          "points": 4,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 6,
          "points": 3,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 7,
          "points": 2,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 8,
          "points": 1,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 9,
          "points": 0,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "ocon",
          "position": 10,
          "points": 0,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 11,
          "points": 0,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 12,
          "points": 0,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 13,
          "points": 0,
          "laps": 20,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 14,
          "points": 0,
          "laps": 19,
          "status": "DNF"
        },
        {
          "driver_id": "albon",
          "position": null,
          "points": 0,
          "laps": 14,
          "status": "DNF"
        },
        {
          "driver_id": "bortoleto",
          "position": null,
          "points": 0,
          "laps": 6,
          "status": "DNF"
        },
        {
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 6,
          "status": "DNF"
        },
        {
          "driver_id": "hadjar",
          "position": null,
          "points": 0,
          "laps": 2,
          "status": "DNF"
        },
        {
          "driver_id": "colapinto",
          "position": null,
          "points": 0,
          "laps": 2,
          "status": "DNF"
        },
        {
          "driver_id": "russell",
          "position": null,
          "points": 0,
          "laps": 1,
          "status": "DNF"
        },
        {
          "driver_id": "perez",
          "position": null,
          "points": 0,
          "laps": 1,
          "status": "DNF"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNF"
        }
      ]
    },
    "18": {
      "circuit_id": "americas",
      "race": [
        {
          "driver_id": "antonelli",
          "position": 1,
          "points": 25,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 2,
          "points": 18,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "max_verstappen",
          "position": 3,
          "points": 15,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 4,
          "points": 12,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 5,
          "points": 10,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 6,
          "points": 8,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 7,
          "points": 6,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 8,
          "points": 4,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 9,
          "points": 2,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 10,
          "points": 1,
          "laps": 56,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 11,
          "points": 0,
          "laps": 56,
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
          "driver_id": "bortoleto",
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
          "driver_id": "stroll",
          "position": 15,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 16,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 17,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 18,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 19,
          "points": 0,
          "laps": 55,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 48,
          "status": "DNF"
        },
        {
          "driver_id": "colapinto",
          "position": null,
          "points": 0,
          "laps": 35,
          "status": "DNF"
        },
        {
          "driver_id": "bearman",
          "position": null,
          "points": 0,
          "laps": 24,
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
          "driver_id": "hadjar",
          "position": 3
        },
        {
          "driver_id": "leclerc",
          "position": 4
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "arvid_lindblad",
          "position": 9
        },
        {
          "driver_id": "lawson",
          "position": 10
        },
        {
          "driver_id": "gasly",
          "position": 11
        },
        {
          "driver_id": "hulkenberg",
          "position": 12
        },
        {
          "driver_id": "bortoleto",
          "position": 13
        },
        {
          "driver_id": "colapinto",
          "position": 14
        },
        {
          "driver_id": "alonso",
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
          "driver_id": "stroll",
          "position": 18
        },
        {
          "driver_id": "sainz",
          "position": 19
        },
        {
          "driver_id": "albon",
          "position": 20
        },
        {
          "driver_id": "perez",
          "position": 21
        },
        {
          "driver_id": "bottas",
          "position": 22
        }
      ]
    },
    "19": {
      "circuit_id": "mexico",
      "race": [
        {
          "driver_id": "max_verstappen",
          "position": 1,
          "points": 25,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "leclerc",
          "position": 4,
          "points": 12,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 5,
          "points": 10,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 6,
          "points": 8,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 7,
          "points": 6,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 8,
          "points": 4,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 9,
          "points": 2,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 11,
          "points": 0,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 12,
          "points": 0,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 13,
          "points": 0,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 14,
          "points": 0,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 15,
          "points": 0,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 16,
          "points": 0,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 17,
          "points": 0,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": null,
          "points": 0,
          "laps": 58,
          "status": "DNF"
        },
        {
          "driver_id": "bearman",
          "position": null,
          "points": 0,
          "laps": 47,
          "status": "DNF"
        },
        {
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 42,
          "status": "DNF"
        },
        {
          "driver_id": "stroll",
          "position": null,
          "points": 0,
          "laps": 5,
          "status": "DNF"
        },
        {
          "driver_id": "alonso",
          "position": null,
          "points": 0,
          "laps": 5,
          "status": "DNF"
        }
      ],
      "qualifying": [
        {
          "driver_id": "hamilton",
          "position": 1
        },
        {
          "driver_id": "russell",
          "position": 2
        },
        {
          "driver_id": "leclerc",
          "position": 3
        },
        {
          "driver_id": "max_verstappen",
          "position": 4
        },
        {
          "driver_id": "antonelli",
          "position": 5
        },
        {
          "driver_id": "norris",
          "position": 6
        },
        {
          "driver_id": "hadjar",
          "position": 7
        },
        {
          "driver_id": "arvid_lindblad",
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
          "driver_id": "colapinto",
          "position": 11
        },
        {
          "driver_id": "piastri",
          "position": 12
        },
        {
          "driver_id": "bortoleto",
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
          "driver_id": "alonso",
          "position": 17
        },
        {
          "driver_id": "stroll",
          "position": 19
        },
        {
          "driver_id": "perez",
          "position": 20
        },
        {
          "driver_id": "bottas",
          "position": 21
        },
        {
          "driver_id": "lawson",
          "position": null
        }
      ]
    },
    "20": {
      "circuit_id": "brazil",
      "race": [
        {
          "driver_id": "norris",
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
          "driver_id": "hadjar",
          "position": 3,
          "points": 15,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 4,
          "points": 12,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 5,
          "points": 10,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 6,
          "points": 8,
          "laps": 71,
          "status": "F"
        },
        {
          "driver_id": "lawson",
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
          "driver_id": "hamilton",
          "position": 9,
          "points": 2,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 10,
          "points": 1,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 11,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 12,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 13,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 14,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "albon",
          "position": 15,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 16,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 17,
          "points": 0,
          "laps": 70,
          "status": "F"
        },
        {
          "driver_id": "perez",
          "position": 18,
          "points": 0,
          "laps": 69,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 19,
          "points": 0,
          "laps": 69,
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
          "driver_id": "bottas",
          "position": null,
          "points": 0,
          "laps": 0,
          "status": "DNS"
        }
      ],
      "qualifying": [
        {
          "driver_id": "norris",
          "position": 1
        },
        {
          "driver_id": "russell",
          "position": 2
        },
        {
          "driver_id": "antonelli",
          "position": 3
        },
        {
          "driver_id": "leclerc",
          "position": 4
        },
        {
          "driver_id": "lawson",
          "position": 5
        },
        {
          "driver_id": "hulkenberg",
          "position": 6
        },
        {
          "driver_id": "hadjar",
          "position": 7
        },
        {
          "driver_id": "bearman",
          "position": 8
        },
        {
          "driver_id": "alonso",
          "position": 9
        },
        {
          "driver_id": "albon",
          "position": 10
        },
        {
          "driver_id": "hamilton",
          "position": 11
        },
        {
          "driver_id": "piastri",
          "position": 12
        },
        {
          "driver_id": "arvid_lindblad",
          "position": 14
        },
        {
          "driver_id": "sainz",
          "position": 15
        },
        {
          "driver_id": "max_verstappen",
          "position": 16
        },
        {
          "driver_id": "colapinto",
          "position": 17
        },
        {
          "driver_id": "gasly",
          "position": 18
        },
        {
          "driver_id": "stroll",
          "position": 19
        },
        {
          "driver_id": "bottas",
          "position": 20
        },
        {
          "driver_id": "perez",
          "position": 21
        },
        {
          "driver_id": "bortoleto",
          "position": 22
        }
      ]
    },
    "21": {
      "circuit_id": "las_vegas",
      "race": [
        {
          "driver_id": "max_verstappen",
          "position": 1,
          "points": 25,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "norris",
          "position": 2,
          "points": 18,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "piastri",
          "position": 3,
          "points": 15,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "antonelli",
          "position": 4,
          "points": 12,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "gasly",
          "position": 5,
          "points": 10,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "colapinto",
          "position": 6,
          "points": 8,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "hamilton",
          "position": 7,
          "points": 6,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "sainz",
          "position": 8,
          "points": 4,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "russell",
          "position": 9,
          "points": 2,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "leclerc",
          "position": 10,
          "points": 1,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "hulkenberg",
          "position": 11,
          "points": 0,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "bortoleto",
          "position": 12,
          "points": 0,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "bearman",
          "position": 13,
          "points": 0,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "lawson",
          "position": 14,
          "points": 0,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "hadjar",
          "position": 15,
          "points": 0,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "stroll",
          "position": 17,
          "points": 0,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "bottas",
          "position": 18,
          "points": 0,
          "laps": 50,
          "status": "F"
        },
        {
          "driver_id": "alonso",
          "position": 19,
          "points": 0,
          "laps": 49,
          "status": "DNF"
        },
        {
          "driver_id": "arvid_lindblad",
          "position": null,
          "points": 0,
          "laps": 19,
          "status": "DNF"
        },
        {
          "driver_id": "perez",
          "position": null,
          "points": 0,
          "laps": 17,
          "status": "DNF"
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
          "driver_id": "max_verstappen",
          "position": 2
        },
        {
          "driver_id": "russell",
          "position": 3
        },
        {
          "driver_id": "norris",
          "position": 4
        },
        {
          "driver_id": "hadjar",
          "position": 5
        },
        {
          "driver_id": "arvid_lindblad",
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
          "driver_id": "gasly",
          "position": 9
        },
        {
          "driver_id": "colapinto",
          "position": 10
        },
        {
          "driver_id": "leclerc",
          "position": 11
        },
        {
          "driver_id": "hamilton",
          "position": 12
        },
        {
          "driver_id": "hulkenberg",
          "position": 13
        },
        {
          "driver_id": "sainz",
          "position": 14
        },
        {
          "driver_id": "bortoleto",
          "position": 15
        },
        {
          "driver_id": "albon",
          "position": 16
        },
        {
          "driver_id": "perez",
          "position": 18
        },
        {
          "driver_id": "alonso",
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
          "driver_id": "bearman",
          "position": null
        }
      ]
    }
  }
};
