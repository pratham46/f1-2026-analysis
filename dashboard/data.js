// AUTO-GENERATED dashboard seed (offline fallback).
// Source: cloudflare/worker assemble() — regenerate with: npm run seed.
// The live dashboard prefers the Worker /api/data; this is the fallback when offline.
window.F1_DATA = {
  "generated_at": "2026-06-14",
  "model": "js-weighted-montecarlo",
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
      "predicted_points": 438.4,
      "win_probability": 0.2709,
      "championship_win_probability": 0.988,
      "podium_probability": 0.7399,
      "avg_predicted_position": 1,
      "current_real_points": 156,
      "current_real_position": 1,
      "current_wins": 5
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
      "predicted_points": 349.8,
      "win_probability": 0.1355,
      "championship_win_probability": 0.01,
      "podium_probability": 0.6268,
      "avg_predicted_position": 2,
      "current_real_points": 115,
      "current_real_position": 2,
      "current_wins": 1
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
      "predicted_points": 307.1,
      "win_probability": 0.0903,
      "championship_win_probability": 0.002,
      "podium_probability": 0.5012,
      "avg_predicted_position": 3,
      "current_real_points": 106,
      "current_real_position": 3,
      "current_wins": 1
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
      "predicted_points": 249.1,
      "win_probability": 0.0677,
      "championship_win_probability": 0,
      "podium_probability": 0.3855,
      "avg_predicted_position": 4,
      "current_real_points": 75,
      "current_real_position": 4,
      "current_wins": 0
    },
    {
      "rank": 5,
      "driver_id": "piastri",
      "name": "Oscar Piastri",
      "short": "PIA",
      "team": "mclaren",
      "team_name": "McLaren",
      "color": "#FF8000",
      "number": 81,
      "predicted_points": 215.2,
      "win_probability": 0.0542,
      "championship_win_probability": 0,
      "podium_probability": 0.2737,
      "avg_predicted_position": 5,
      "current_real_points": 68,
      "current_real_position": 6,
      "current_wins": 0
    },
    {
      "rank": 6,
      "driver_id": "norris",
      "name": "Lando Norris",
      "short": "NOR",
      "team": "mclaren",
      "team_name": "McLaren",
      "color": "#FF8000",
      "number": 1,
      "predicted_points": 195,
      "win_probability": 0.0452,
      "championship_win_probability": 0,
      "podium_probability": 0.1839,
      "avg_predicted_position": 6,
      "current_real_points": 73,
      "current_real_position": 5,
      "current_wins": 0
    },
    {
      "rank": 7,
      "driver_id": "max_verstappen",
      "name": "Max Verstappen",
      "short": "VER",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 3,
      "predicted_points": 155.1,
      "win_probability": 0.0387,
      "championship_win_probability": 0,
      "podium_probability": 0.1235,
      "avg_predicted_position": 7,
      "current_real_points": 55,
      "current_real_position": 7,
      "current_wins": 0
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
      "predicted_points": 110.9,
      "win_probability": 0.0339,
      "championship_win_probability": 0,
      "podium_probability": 0.0733,
      "avg_predicted_position": 8,
      "current_real_points": 34,
      "current_real_position": 9,
      "current_wins": 0
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
      "predicted_points": 83.8,
      "win_probability": 0.0301,
      "championship_win_probability": 0,
      "podium_probability": 0.0421,
      "avg_predicted_position": 9,
      "current_real_points": 26,
      "current_real_position": 10,
      "current_wins": 0
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
      "predicted_points": 82.3,
      "win_probability": 0.0271,
      "championship_win_probability": 0,
      "podium_probability": 0.0243,
      "avg_predicted_position": 10,
      "current_real_points": 41,
      "current_real_position": 8,
      "current_wins": 0
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
      "predicted_points": 34.8,
      "win_probability": 0.0246,
      "championship_win_probability": 0,
      "podium_probability": 0.0137,
      "avg_predicted_position": 11,
      "current_real_points": 6,
      "current_real_position": 14,
      "current_wins": 0
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
      "predicted_points": 30.6,
      "win_probability": 0.0208,
      "championship_win_probability": 0,
      "podium_probability": 0.0025,
      "avg_predicted_position": 13,
      "current_real_points": 18,
      "current_real_position": 12,
      "current_wins": 0
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
      "predicted_points": 24.9,
      "win_probability": 0.0226,
      "championship_win_probability": 0,
      "podium_probability": 0.0065,
      "avg_predicted_position": 12,
      "current_real_points": 5,
      "current_real_position": 15,
      "current_wins": 0
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
      "predicted_points": 23.4,
      "win_probability": 0.0181,
      "championship_win_probability": 0,
      "podium_probability": 0.0005,
      "avg_predicted_position": 15,
      "current_real_points": 19,
      "current_real_position": 11,
      "current_wins": 0
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
      "predicted_points": 12.1,
      "win_probability": 0.0135,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 20,
      "current_real_points": 12,
      "current_real_position": 13,
      "current_wins": 0
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
      "predicted_points": 8.4,
      "win_probability": 0.0194,
      "championship_win_probability": 0,
      "podium_probability": 0.0023,
      "avg_predicted_position": 14,
      "current_real_points": 1,
      "current_real_position": 18,
      "current_wins": 0
    },
    {
      "rank": 17,
      "driver_id": "ocon",
      "name": "Esteban Ocon",
      "short": "OCO",
      "team": "haas",
      "team_name": "Haas",
      "color": "#B6BABD",
      "number": 31,
      "predicted_points": 5.2,
      "win_probability": 0.0169,
      "championship_win_probability": 0,
      "podium_probability": 0.0001,
      "avg_predicted_position": 16,
      "current_real_points": 3,
      "current_real_position": 16,
      "current_wins": 0
    },
    {
      "rank": 18,
      "driver_id": "bortoleto",
      "name": "Gabriel Bortoleto",
      "short": "BOR",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 5,
      "predicted_points": 2,
      "win_probability": 0.0123,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 22,
      "current_real_points": 2,
      "current_real_position": 17,
      "current_wins": 0
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
      "predicted_points": 1.1,
      "win_probability": 0.0159,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 17,
      "current_real_points": 0,
      "current_real_position": 21,
      "current_wins": 0
    },
    {
      "rank": 20,
      "driver_id": "stroll",
      "name": "Lance Stroll",
      "short": "STR",
      "team": "aston_martin",
      "team_name": "Aston Martin",
      "color": "#358C75",
      "number": 18,
      "predicted_points": 0.5,
      "win_probability": 0.0151,
      "championship_win_probability": 0,
      "podium_probability": 0.0001,
      "avg_predicted_position": 18,
      "current_real_points": 0,
      "current_real_position": 22,
      "current_wins": 0
    },
    {
      "rank": 21,
      "driver_id": "bottas",
      "name": "Valtteri Bottas",
      "short": "BOT",
      "team": "cadillac",
      "team_name": "Cadillac",
      "color": "#C8A464",
      "number": 77,
      "predicted_points": 0.3,
      "win_probability": 0.0143,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 19,
      "current_real_points": 0,
      "current_real_position": 20,
      "current_wins": 0
    },
    {
      "rank": 22,
      "driver_id": "hulkenberg",
      "name": "Nico Hulkenberg",
      "short": "HUL",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 27,
      "predicted_points": 0,
      "win_probability": 0.0129,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 21,
      "current_real_points": 0,
      "current_real_position": 19,
      "current_wins": 0
    }
  ],
  "constructor_standings_2026": [
    {
      "rank": 1,
      "constructor_id": "mercedes",
      "name": "Mercedes",
      "color": "#27F4D2",
      "predicted_points": 745.5,
      "championship_win_probability": 0.99,
      "current_real_points": 262,
      "current_wins": 6
    },
    {
      "rank": 2,
      "constructor_id": "ferrari",
      "name": "Ferrari",
      "color": "#E8002D",
      "predicted_points": 598.9,
      "championship_win_probability": 0.01,
      "current_real_points": 190,
      "current_wins": 1
    },
    {
      "rank": 3,
      "constructor_id": "mclaren",
      "name": "McLaren",
      "color": "#FF8000",
      "predicted_points": 410.2,
      "championship_win_probability": 0,
      "current_real_points": 141,
      "current_wins": 0
    },
    {
      "rank": 4,
      "constructor_id": "red_bull",
      "name": "Red Bull Racing",
      "color": "#3671C6",
      "predicted_points": 266,
      "championship_win_probability": 0,
      "current_real_points": 89,
      "current_wins": 0
    },
    {
      "rank": 5,
      "constructor_id": "alpine",
      "name": "Alpine",
      "color": "#FF87BC",
      "predicted_points": 105.7,
      "championship_win_probability": 0,
      "current_real_points": 60,
      "current_wins": 0
    },
    {
      "rank": 6,
      "constructor_id": "rb",
      "name": "Racing Bulls",
      "color": "#6692FF",
      "predicted_points": 95.9,
      "championship_win_probability": 0,
      "current_real_points": 38,
      "current_wins": 0
    },
    {
      "rank": 7,
      "constructor_id": "williams",
      "name": "Williams",
      "color": "#64C4FF",
      "predicted_points": 59.7,
      "championship_win_probability": 0,
      "current_real_points": 11,
      "current_wins": 0
    },
    {
      "rank": 8,
      "constructor_id": "haas",
      "name": "Haas",
      "color": "#B6BABD",
      "predicted_points": 35.8,
      "championship_win_probability": 0,
      "current_real_points": 21,
      "current_wins": 0
    },
    {
      "rank": 9,
      "constructor_id": "aston_martin",
      "name": "Aston Martin",
      "color": "#358C75",
      "predicted_points": 8.9,
      "championship_win_probability": 0,
      "current_real_points": 1,
      "current_wins": 0
    },
    {
      "rank": 10,
      "constructor_id": "audi",
      "name": "Audi",
      "color": "#00E701",
      "predicted_points": 2,
      "championship_win_probability": 0,
      "current_real_points": 2,
      "current_wins": 0
    },
    {
      "rank": 11,
      "constructor_id": "cadillac",
      "name": "Cadillac",
      "color": "#C8A464",
      "predicted_points": 1.4,
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
          "driver_id": "piastri",
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
        "driver_id": "piastri",
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
        "driver_id": "piastri",
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
        "driver_id": "piastri",
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
        "driver_id": "piastri",
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
        "driver_id": "piastri",
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
        "driver_id": "piastri",
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
        "driver_id": "piastri",
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
  "races_completed_2026": 7,
  "next_race": {
    "round": 8,
    "id": "austria",
    "name": "Austrian GP",
    "date": "2026-06-28",
    "circuit_id": "austria",
    "days_until": 14
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
      "points": 156,
      "wins": 5
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
      "points": 115,
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
      "points": 106,
      "wins": 1
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
      "points": 75,
      "wins": 0
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
      "points": 73,
      "wins": 0
    },
    {
      "position": 6,
      "driver_id": "piastri",
      "name": "Oscar Piastri",
      "short": "PIA",
      "constructor_id": "mclaren",
      "team": "mclaren",
      "team_name": "McLaren",
      "color": "#FF8000",
      "number": 81,
      "points": 68,
      "wins": 0
    },
    {
      "position": 7,
      "driver_id": "max_verstappen",
      "name": "Max Verstappen",
      "short": "VER",
      "constructor_id": "red_bull",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 3,
      "points": 55,
      "wins": 0
    },
    {
      "position": 8,
      "driver_id": "gasly",
      "name": "Pierre Gasly",
      "short": "GAS",
      "constructor_id": "alpine",
      "team": "alpine",
      "team_name": "Alpine",
      "color": "#FF87BC",
      "number": 10,
      "points": 41,
      "wins": 0
    },
    {
      "position": 9,
      "driver_id": "hadjar",
      "name": "Isack Hadjar",
      "short": "HAD",
      "constructor_id": "red_bull",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 6,
      "points": 34,
      "wins": 0
    },
    {
      "position": 10,
      "driver_id": "lawson",
      "name": "Liam Lawson",
      "short": "LAW",
      "constructor_id": "rb",
      "team": "rb",
      "team_name": "Racing Bulls",
      "color": "#6692FF",
      "number": 30,
      "points": 26,
      "wins": 0
    },
    {
      "position": 11,
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
      "position": 12,
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
      "position": 13,
      "driver_id": "arvid_lindblad",
      "name": "Arvid Lindblad",
      "short": "LIN",
      "constructor_id": "rb",
      "team": "rb",
      "team_name": "Racing Bulls",
      "color": "#6692FF",
      "number": 41,
      "points": 12,
      "wins": 0
    },
    {
      "position": 14,
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
      "position": 15,
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
      "position": 16,
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
      "position": 17,
      "driver_id": "bortoleto",
      "name": "Gabriel Bortoleto",
      "short": "BOR",
      "constructor_id": "audi",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 5,
      "points": 2,
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
      "points": 1,
      "wins": 0
    },
    {
      "position": 19,
      "driver_id": "hulkenberg",
      "name": "Nico Hulkenberg",
      "short": "HUL",
      "constructor_id": "audi",
      "team": "audi",
      "team_name": "Audi",
      "color": "#00E701",
      "number": 27,
      "points": 0,
      "wins": 0
    },
    {
      "position": 20,
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
      "position": 21,
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
    }
  ],
  "real_constructor_standings_2026": [
    {
      "position": 1,
      "constructor_id": "mercedes",
      "points": 262,
      "wins": 6
    },
    {
      "position": 2,
      "constructor_id": "ferrari",
      "points": 190,
      "wins": 1
    },
    {
      "position": 3,
      "constructor_id": "mclaren",
      "points": 141,
      "wins": 0
    },
    {
      "position": 4,
      "constructor_id": "red_bull",
      "points": 89,
      "wins": 0
    },
    {
      "position": 5,
      "constructor_id": "alpine",
      "points": 60,
      "wins": 0
    },
    {
      "position": 6,
      "constructor_id": "rb",
      "points": 38,
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
      "constructor_id": "williams",
      "points": 11,
      "wins": 0
    },
    {
      "position": 9,
      "constructor_id": "audi",
      "points": 2,
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
          "driver_id": "colapinto",
          "constructor_id": "alpine",
          "points": 4,
          "status": "Lapped",
          "time_or_gap": "+1:09.867",
          "fastest_lap": false
        },
        {
          "position": 9,
          "driver_id": "lawson",
          "constructor_id": "rb",
          "points": 2,
          "status": "Lapped",
          "time_or_gap": "+1:12.224",
          "fastest_lap": false
        },
        {
          "position": 10,
          "driver_id": "arvid_lindblad",
          "constructor_id": "rb",
          "points": 1,
          "status": "Lapped",
          "time_or_gap": "+1:18.074",
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
    "bahrain": {
      "name": "Bahrain International Circuit",
      "locality": "Sakhir",
      "country": "Bahrain",
      "lat": 26.0325,
      "long": 50.5106,
      "alt": null,
      "wiki": "https://en.wikipedia.org/wiki/Bahrain_International_Circuit"
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
      "title": "Ex-F1 drivers De Vries and Kobayashi win Le Mans 24 Hours",
      "url": "https://www.formula1.com/en/latest/article/former-f1-drivers-de-vries-and-kobayashi-win-le-mans-24-hours.6HsLK7VOWDwnUoNimVwJp7",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "'Not good enough' – Wolff critical of Mercedes' reliability",
      "url": "https://www.formula1.com/en/latest/article/not-good-enough-wolff-critical-of-mercedes-reliability-after-antonelli-retirement-in-barcelona-catalunya-grand-prix.6KLa3k3yay82ZUUWe5G09W",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "What the teams said – Race day in Barcelona-Catalunya",
      "url": "https://www.formula1.com/en/latest/article/what-the-teams-said-race-day-in-barcelona-catalunya-2026.4fWikDvJzMjVCrHCUNG4Hr",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "5 betting lessons after Hamilton wins in Barcelona",
      "url": "https://www.formula1.com/en/latest/article/5-betting-lessons-learnt-after-lewis-hamilton-wins-the-barcelona-catalunya-grand-prix.4eKJqrr0jgGAQgWFJ7VATr",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Verstappen admits Red Bull ‘need to work harder’",
      "url": "https://www.formula1.com/en/latest/article/verstappen-admits-red-bull-need-to-work-harder-as-he-reflects-on-lonely-race-in-barcelona.4RzPWLUsbzJPFvsD3TXrSm",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Colapinto hit with post-race penalty in Barcelona",
      "url": "https://www.formula1.com/en/latest/article/colapinto-loses-p8-after-receiving-post-race-penalty-in-barcelona.2MJwHgw2A8y7PYIohxOFAQ",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Norris insists McLaren will 'be there soon' after podium",
      "url": "https://www.formula1.com/en/latest/article/well-be-there-soon-norris-very-happy-to-finish-on-podium-in-barcelona-catalunya-grand-prix.2OIMquffyXj9B1upFXbPZo",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Russell wary of ‘mighty impressive’ Ferrari after Barcelona P2",
      "url": "https://www.formula1.com/en/latest/article/russell-wary-of-mighty-impressive-ferrari-after-challenging-return-to-the-podium-in-barcelona.SzzLWCyrIN3Vra9A0qE7u",
      "image": null,
      "date": null,
      "tag": "F1 News"
    }
  ],
  "_health": {
    "live": "jolpica:7rounds",
    "results": "jolpica:7races",
    "news": "scraped:8",
    "scrapedAt": "2026-06-14T19:14:45.827Z",
    "openf1": "enriched:1races",
    "bios": "jolpica:30",
    "circuits": "jolpica:24"
  },
  "_sanity": {
    "drivers_full_grid": true,
    "grid_size": 22,
    "prob_sum_ok": true,
    "points_cap_ok": true,
    "champion_prob_ok": true,
    "prob_sum": 1,
    "max_points": 438.4,
    "passed": true
  }
};
