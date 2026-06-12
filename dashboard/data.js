// AUTO-GENERATED dashboard seed (offline fallback).
// Source: cloudflare/worker assemble() — regenerate with: npm run seed.
// The live dashboard prefers the Worker /api/data; this is the fallback when offline.
window.F1_DATA = {
  "generated_at": "2026-06-12",
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
      "predicted_points": 457.2,
      "win_probability": 0.2709,
      "championship_win_probability": 0.998,
      "podium_probability": 0.7404,
      "avg_predicted_position": 1,
      "current_real_points": 156,
      "current_real_position": 1,
      "current_wins": 5
    },
    {
      "rank": 2,
      "driver_id": "russell",
      "name": "George Russell",
      "short": "RUS",
      "team": "mercedes",
      "team_name": "Mercedes",
      "color": "#27F4D2",
      "number": 63,
      "predicted_points": 338.5,
      "win_probability": 0.1355,
      "championship_win_probability": 0.002,
      "podium_probability": 0.6281,
      "avg_predicted_position": 2,
      "current_real_points": 88,
      "current_real_position": 3,
      "current_wins": 1
    },
    {
      "rank": 3,
      "driver_id": "leclerc",
      "name": "Charles Leclerc",
      "short": "LEC",
      "team": "ferrari",
      "team_name": "Ferrari",
      "color": "#E8002D",
      "number": 16,
      "predicted_points": 289.3,
      "win_probability": 0.0903,
      "championship_win_probability": 0,
      "podium_probability": 0.4991,
      "avg_predicted_position": 3,
      "current_real_points": 75,
      "current_real_position": 4,
      "current_wins": 0
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
      "predicted_points": 276.1,
      "win_probability": 0.0677,
      "championship_win_probability": 0,
      "podium_probability": 0.387,
      "avg_predicted_position": 4,
      "current_real_points": 90,
      "current_real_position": 2,
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
      "predicted_points": 216.8,
      "win_probability": 0.0542,
      "championship_win_probability": 0,
      "podium_probability": 0.2718,
      "avg_predicted_position": 5,
      "current_real_points": 60,
      "current_real_position": 5,
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
      "predicted_points": 188.3,
      "win_probability": 0.0452,
      "championship_win_probability": 0,
      "podium_probability": 0.1846,
      "avg_predicted_position": 6,
      "current_real_points": 58,
      "current_real_position": 6,
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
      "predicted_points": 150,
      "win_probability": 0.0387,
      "championship_win_probability": 0,
      "podium_probability": 0.1226,
      "avg_predicted_position": 7,
      "current_real_points": 43,
      "current_real_position": 7,
      "current_wins": 0
    },
    {
      "rank": 8,
      "driver_id": "lawson",
      "name": "Liam Lawson",
      "short": "LAW",
      "team": "rb",
      "team_name": "Racing Bulls",
      "color": "#6692FF",
      "number": 30,
      "predicted_points": 108.3,
      "win_probability": 0.0339,
      "championship_win_probability": 0,
      "podium_probability": 0.0749,
      "avg_predicted_position": 8,
      "current_real_points": 26,
      "current_real_position": 9,
      "current_wins": 0
    },
    {
      "rank": 9,
      "driver_id": "hadjar",
      "name": "Isack Hadjar",
      "short": "HAD",
      "team": "red_bull",
      "team_name": "Red Bull Racing",
      "color": "#3671C6",
      "number": 6,
      "predicted_points": 90.5,
      "win_probability": 0.0301,
      "championship_win_probability": 0,
      "podium_probability": 0.0421,
      "avg_predicted_position": 9,
      "current_real_points": 29,
      "current_real_position": 8,
      "current_wins": 0
    },
    {
      "rank": 10,
      "driver_id": "sainz",
      "name": "Carlos Sainz",
      "short": "SAI",
      "team": "williams",
      "team_name": "Williams",
      "color": "#64C4FF",
      "number": 55,
      "predicted_points": 50.1,
      "win_probability": 0.0271,
      "championship_win_probability": 0,
      "podium_probability": 0.0244,
      "avg_predicted_position": 10,
      "current_real_points": 6,
      "current_real_position": 14,
      "current_wins": 0
    },
    {
      "rank": 11,
      "driver_id": "gasly",
      "name": "Pierre Gasly",
      "short": "GAS",
      "team": "alpine",
      "team_name": "Alpine",
      "color": "#FF87BC",
      "number": 10,
      "predicted_points": 39.4,
      "win_probability": 0.0208,
      "championship_win_probability": 0,
      "podium_probability": 0.0025,
      "avg_predicted_position": 13,
      "current_real_points": 26,
      "current_real_position": 10,
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
      "predicted_points": 39.2,
      "win_probability": 0.0226,
      "championship_win_probability": 0,
      "podium_probability": 0.0064,
      "avg_predicted_position": 12,
      "current_real_points": 18,
      "current_real_position": 11,
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
      "predicted_points": 35.2,
      "win_probability": 0.0246,
      "championship_win_probability": 0,
      "podium_probability": 0.0131,
      "avg_predicted_position": 11,
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
      "predicted_points": 17.4,
      "win_probability": 0.0169,
      "championship_win_probability": 0,
      "podium_probability": 0.0001,
      "avg_predicted_position": 16,
      "current_real_points": 15,
      "current_real_position": 12,
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
      "predicted_points": 13.1,
      "win_probability": 0.0135,
      "championship_win_probability": 0,
      "podium_probability": 0,
      "avg_predicted_position": 20,
      "current_real_points": 13,
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
      "predicted_points": 8.8,
      "win_probability": 0.0194,
      "championship_win_probability": 0,
      "podium_probability": 0.0021,
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
      "predicted_points": 7.8,
      "win_probability": 0.0181,
      "championship_win_probability": 0,
      "podium_probability": 0.0006,
      "avg_predicted_position": 15,
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
      "predicted_points": 0.6,
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
      "predicted_points": 795.7,
      "championship_win_probability": 1,
      "current_real_points": 244,
      "current_wins": 6
    },
    {
      "rank": 2,
      "constructor_id": "ferrari",
      "name": "Ferrari",
      "color": "#E8002D",
      "predicted_points": 565.4,
      "championship_win_probability": 0,
      "current_real_points": 165,
      "current_wins": 0
    },
    {
      "rank": 3,
      "constructor_id": "mclaren",
      "name": "McLaren",
      "color": "#FF8000",
      "predicted_points": 405.1,
      "championship_win_probability": 0,
      "current_real_points": 118,
      "current_wins": 0
    },
    {
      "rank": 4,
      "constructor_id": "red_bull",
      "name": "Red Bull Racing",
      "color": "#3671C6",
      "predicted_points": 240.5,
      "championship_win_probability": 0,
      "current_real_points": 72,
      "current_wins": 0
    },
    {
      "rank": 5,
      "constructor_id": "rb",
      "name": "Racing Bulls",
      "color": "#6692FF",
      "predicted_points": 121.4,
      "championship_win_probability": 0,
      "current_real_points": 39,
      "current_wins": 0
    },
    {
      "rank": 6,
      "constructor_id": "williams",
      "name": "Williams",
      "color": "#64C4FF",
      "predicted_points": 85.3,
      "championship_win_probability": 0,
      "current_real_points": 11,
      "current_wins": 0
    },
    {
      "rank": 7,
      "constructor_id": "alpine",
      "name": "Alpine",
      "color": "#FF87BC",
      "predicted_points": 56.8,
      "championship_win_probability": 0,
      "current_real_points": 41,
      "current_wins": 0
    },
    {
      "rank": 8,
      "constructor_id": "haas",
      "name": "Haas",
      "color": "#B6BABD",
      "predicted_points": 47,
      "championship_win_probability": 0,
      "current_real_points": 21,
      "current_wins": 0
    },
    {
      "rank": 9,
      "constructor_id": "aston_martin",
      "name": "Aston Martin",
      "color": "#358C75",
      "predicted_points": 9.4,
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
      "completed": false,
      "winner": "antonelli",
      "top5": [
        {
          "driver_id": "antonelli",
          "win_prob": 0.2709
        },
        {
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
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
          "driver_id": "russell",
          "win_prob": 0.1355
        },
        {
          "driver_id": "leclerc",
          "win_prob": 0.0903
        },
        {
          "driver_id": "hamilton",
          "win_prob": 0.0677
        },
        {
          "driver_id": "piastri",
          "win_prob": 0.0542
        }
      ]
    }
  ],
  "historical_driver_points": {
    "2020": {
      "albon": 36,
      "bottas": 73,
      "gasly": 12,
      "giovinazzi": 2,
      "hamilton": 107,
      "hulkenberg": 6,
      "kevin_magnussen": 1,
      "kvyat": 2,
      "leclerc": 45,
      "max_verstappen": 77,
      "norris": 38,
      "ocon": 16,
      "perez": 22,
      "ricciardo": 20,
      "sainz": 15,
      "stroll": 28,
      "vettel": 10
    },
    "2021": {
      "alonso": 5,
      "bottas": 47,
      "gasly": 16,
      "giovinazzi": 1,
      "hamilton": 101,
      "leclerc": 40,
      "max_verstappen": 105,
      "norris": 56,
      "ocon": 12,
      "perez": 44,
      "ricciardo": 24,
      "sainz": 38,
      "stroll": 9,
      "tsunoda": 2,
      "vettel": 10
    },
    "2022": {
      "albon": 3,
      "alonso": 2,
      "bottas": 28,
      "gasly": 6,
      "hamilton": 36,
      "kevin_magnussen": 14,
      "leclerc": 97,
      "max_verstappen": 77,
      "norris": 31,
      "ocon": 24,
      "perez": 60,
      "ricciardo": 8,
      "russell": 59,
      "sainz": 48,
      "stroll": 2,
      "tsunoda": 10,
      "vettel": 4,
      "zhou": 1
    },
    "2023": {
      "albon": 13,
      "alonso": 156,
      "bottas": 5,
      "gasly": 17,
      "hamilton": 147,
      "hulkenberg": 14,
      "leclerc": 127,
      "magnussen": 2,
      "norris": 70,
      "ocon": 47,
      "perez": 224,
      "piastri": 37,
      "russell": 116,
      "sainz": 114,
      "stroll": 65,
      "tsunoda": 6,
      "verstappen": 351,
      "zho": 4
    },
    "2024": {
      "albon": 2,
      "alonso": 44,
      "bearman": 6,
      "colapinto": 5,
      "gasly": 7,
      "hamilton": 79,
      "hulkenberg": 10,
      "leclerc": 164,
      "magnussen": 2,
      "norris": 154,
      "ocon": 3,
      "perez": 127,
      "piastri": 96,
      "ric": 16,
      "russell": 83,
      "sainz": 130,
      "sar": 1,
      "stroll": 15,
      "tsunoda": 20,
      "verstappen": 251,
      "zho": 2
    },
    "2025": {
      "albon": 20,
      "antonelli": 36,
      "bearman": 6,
      "gasly": 6,
      "hadjar": 5,
      "hamilton": 23,
      "hulkenberg": 6,
      "leclerc": 43,
      "max_verstappen": 81,
      "norris": 88,
      "ocon": 14,
      "piastri": 92,
      "russell": 68,
      "sainz": 5,
      "stroll": 10,
      "tsunoda": 2
    }
  },
  "historical_constructor_points": {
    "2020": {
      "red_bull": 113,
      "mercedes": 180,
      "alphatauri": 14,
      "alfa": 2,
      "haas": 1,
      "racing_point": 56,
      "ferrari": 55,
      "mclaren": 53,
      "renault": 36
    },
    "2021": {
      "alpine": 17,
      "mercedes": 148,
      "alphatauri": 18,
      "alfa": 1,
      "ferrari": 78,
      "red_bull": 149,
      "mclaren": 80,
      "aston_martin": 19
    },
    "2022": {
      "williams": 3,
      "alpine": 26,
      "alfa": 29,
      "alphatauri": 16,
      "mercedes": 95,
      "aston_martin": 6,
      "haas": 14,
      "ferrari": 145,
      "red_bull": 137,
      "mclaren": 39
    },
    "2023": {
      "williams": 13,
      "aston_martin": 221,
      "unknown": 110,
      "rb": 6,
      "alpine": 64,
      "mercedes": 263,
      "haas": 16,
      "ferrari": 241,
      "mclaren": 107,
      "red_bull": 575
    },
    "2024": {
      "williams": 3,
      "aston_martin": 59,
      "ferrari": 300,
      "sauber": 2,
      "alpine": 10,
      "mercedes": 162,
      "haas": 12,
      "mclaren": 250,
      "red_bull": 378,
      "rb": 36
    },
    "2025": {
      "williams": 25,
      "aston_martin": 10,
      "mercedes": 104,
      "haas": 20,
      "sauber": 6,
      "alpine": 6,
      "rb": 5,
      "ferrari": 66,
      "red_bull": 83,
      "mclaren": 180
    }
  },
  "driver_rolling_form": {
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
        77,
        105,
        77,
        351,
        251,
        81
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
        38,
        56,
        31,
        70,
        154,
        88
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
        45,
        40,
        97,
        127,
        164,
        43
      ]
    },
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
        37,
        96,
        92
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
        15,
        38,
        48,
        114,
        130,
        5
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
        107,
        101,
        36,
        147,
        79,
        23
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
        0,
        0,
        59,
        116,
        83,
        68
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
        36
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
        5,
        2,
        156,
        44,
        0
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
        28,
        9,
        2,
        65,
        15,
        10
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
        0,
        0,
        0
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
        36,
        0,
        3,
        13,
        2,
        20
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
        12,
        16,
        6,
        17,
        7,
        6
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
        16,
        12,
        24,
        47,
        3,
        14
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
        6,
        6
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
        6,
        0,
        0,
        14,
        10,
        6
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
        5
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
        0
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
        73,
        47,
        28,
        5,
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
        22,
        44,
        60,
        224,
        127,
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
  "races_completed_2026": 6,
  "next_race": {
    "round": 7,
    "id": "spain",
    "name": "Barcelona GP",
    "date": "2026-06-14",
    "circuit_id": "spain",
    "days_until": 2
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
      "points": 90,
      "wins": 0
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
      "points": 88,
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
      "driver_id": "piastri",
      "name": "Oscar Piastri",
      "short": "PIA",
      "constructor_id": "mclaren",
      "team": "mclaren",
      "team_name": "McLaren",
      "color": "#FF8000",
      "number": 81,
      "points": 60,
      "wins": 0
    },
    {
      "position": 6,
      "driver_id": "norris",
      "name": "Lando Norris",
      "short": "NOR",
      "constructor_id": "mclaren",
      "team": "mclaren",
      "team_name": "McLaren",
      "color": "#FF8000",
      "number": 1,
      "points": 58,
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
      "points": 43,
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
      "points": 29,
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
      "points": 26,
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
      "points": 26,
      "wins": 0
    },
    {
      "position": 11,
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
      "position": 12,
      "driver_id": "colapinto",
      "name": "Franco Colapinto",
      "short": "COL",
      "constructor_id": "alpine",
      "team": "alpine",
      "team_name": "Alpine",
      "color": "#FF87BC",
      "number": 43,
      "points": 15,
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
      "points": 13,
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
      "points": 244,
      "wins": 6
    },
    {
      "position": 2,
      "constructor_id": "ferrari",
      "points": 165,
      "wins": 0
    },
    {
      "position": 3,
      "constructor_id": "mclaren",
      "points": 118,
      "wins": 0
    },
    {
      "position": 4,
      "constructor_id": "red_bull",
      "points": 72,
      "wins": 0
    },
    {
      "position": 5,
      "constructor_id": "alpine",
      "points": 41,
      "wins": 0
    },
    {
      "position": 6,
      "constructor_id": "rb",
      "points": 39,
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
    }
  ],
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
      "title": "Norris gives his take on McLaren's Barcelona chances",
      "url": "https://www.formula1.com/en/latest/article/heading-in-the-right-direction-norris-optimistic-over-mclarens-barcelona-chances-after-setting-the-pace-on-friday.7qoF214QOQ4PBrHTqRUd3B",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Rafael Camara takes second consecutive F2 pole in Barcelona",
      "url": "https://www.formula1.com/en/latest/article/f2-rafael-camara-takes-second-consecutive-pole-in-barcelona.UxusoC6P0E2LZaAr1Jnbw",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "F3: Nael makes it three in a row as he leads Campos 1-2",
      "url": "https://www.formula1.com/en/latest/article/f3-nael-makes-it-three-in-a-row-as-he-leads-campos-1-2-in-barcelona.38CfXY24Mf0wbCRvRJpHI0",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Norris tops the FP2 times in Barcelona",
      "url": "https://www.formula1.com/en/latest/article/norris-heads-russell-and-piastri-in-fp2-ahead-of-barcelona-catalunya-grand-prix.5Ot32uuMMaW0tDC9lLpB71",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "Enter now to see Ed Sheeran live + experience F1 like a VIP in Austin",
      "url": "https://www.formula1.com/en/latest/article/2026-austin-f1-unlocked-competition.17CYZMToDMyMDYsgcCIRvw",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "AS IT HAPPENED: Follow FP2 for the Barcelona-Catalunya GP",
      "url": "https://www.formula1.com/en/latest/article/live-coverage-second-practice-in-barcelona-catalunya-2026.1zNH75nawtEnMmuH7RsM2P",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "An expert guide to F1 in-race betting in Barcelona",
      "url": "https://www.formula1.com/en/latest/article/an-expert-guide-into-in-race-betting-opportunities-at-the-barcelona-catalunya-grand-prix.5qy3oLzIKtsrgPASBmQMpS",
      "image": null,
      "date": null,
      "tag": "F1 News"
    },
    {
      "title": "What upgrades have each team brought to Barcelona?",
      "url": "https://www.formula1.com/en/latest/article/what-upgrades-have-each-team-brought-to-the-barcelona-catalunya-grand-prix.77PmwSOI3Sxsn79sS1uhAK",
      "image": null,
      "date": null,
      "tag": "F1 News"
    }
  ],
  "_health": {
    "live": "jolpica:6rounds",
    "results": "jolpica:6races",
    "news": "scraped:8",
    "scrapedAt": "2026-06-12T17:50:17.187Z"
  },
  "_sanity": {
    "drivers_full_grid": true,
    "grid_size": 22,
    "prob_sum_ok": true,
    "points_cap_ok": true,
    "champion_prob_ok": true,
    "prob_sum": 1,
    "max_points": 457.2,
    "passed": true
  }
};
