"""
F1 2026 Prediction Engine
XGBoost model + Monte Carlo season simulation
"""

import json
import os
import numpy as np
import pandas as pd
from xgboost import XGBRegressor
from sklearn.model_selection import GroupKFold, cross_val_score
from sklearn.metrics import mean_absolute_error

# ── Config ──────────────────────────────────────────────────────────────────
FEATURES = [
    "grid",
    "driver_pts_rolling_3",
    "driver_pts_rolling_5",
    "constructor_pts_rolling_3",
    "constructor_pts_rolling_5",
]
TARGET = "position"
N_SIMS = 500
N_RACES = 24  # 2026 calendar
NOISE_SIGMA = 3.5
POINTS_SYSTEM = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]

REGULATION_IMPACT = {
    "ferrari": +8, "mercedes": +5, "mclaren": +3, "williams": +1,
    "rb": -1, "haas": 0, "red_bull": -5, "aston_martin": -2,
    "alpine": -3, "sauber": -2,
}

XGB_PARAMS = dict(
    n_estimators=400,
    max_depth=5,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=42,
)

# ── Load data ────────────────────────────────────────────────────────────────
df = pd.read_csv("data/processed/features.csv")

# Use data up to and including 2025 for training (exclude 2026 partial)
train_df = df[df["year"] <= 2025].dropna(subset=FEATURES + [TARGET]).copy()
print(f"Training rows: {len(train_df)}, years: {sorted(train_df['year'].unique())}")

X_train = train_df[FEATURES].values
y_train = train_df[TARGET].values
groups = train_df["year"].values

# ── Train model ──────────────────────────────────────────────────────────────
model = XGBRegressor(**XGB_PARAMS)

gkf = GroupKFold(n_splits=5)
cv_maes = []
for fold, (tr_idx, val_idx) in enumerate(gkf.split(X_train, y_train, groups)):
    model_fold = XGBRegressor(**XGB_PARAMS)
    model_fold.fit(X_train[tr_idx], y_train[tr_idx])
    preds = model_fold.predict(X_train[val_idx])
    mae = mean_absolute_error(y_train[val_idx], preds)
    cv_maes.append(mae)
    print(f"  Fold {fold+1} MAE: {mae:.4f}")

cv_mae = np.mean(cv_maes)
print(f"CV MAE (GroupKFold-5): {cv_mae:.4f}")
assert 1.0 <= cv_mae <= 6.0, f"CV MAE {cv_mae} out of expected range [1, 6]"

# Full-data fit
model.fit(X_train, y_train)

# ── Build 2026 driver feature vectors ────────────────────────────────────────
last_2025 = train_df[train_df["year"] == 2025].groupby("driver").last().reset_index()

DEFAULTS = {
    "grid": 12,
    "driver_pts_rolling_3": 3.0,
    "driver_pts_rolling_5": 3.0,
    "constructor_pts_rolling_3": 5.0,
    "constructor_pts_rolling_5": 5.0,
}

# Build driver→constructor mapping from last 2025 race
driver_constructor = dict(zip(last_2025["driver"], last_2025["constructor"]))

# Apply regulation impacts
driver_features = {}
for _, row in last_2025.iterrows():
    d = row["driver"]
    team = row["constructor"]
    adj = 1 + REGULATION_IMPACT.get(team, 0) / 100
    driver_features[d] = {
        "grid": row["grid"],
        "driver_pts_rolling_3": row["driver_pts_rolling_3"],
        "driver_pts_rolling_5": row["driver_pts_rolling_5"],
        "constructor_pts_rolling_3": row["constructor_pts_rolling_3"] * adj,
        "constructor_pts_rolling_5": row["constructor_pts_rolling_5"] * adj,
    }

# Check for any drivers not in 2025 (rookies etc.)
all_drivers = sorted(last_2025["driver"].unique())
print(f"2026 drivers: {all_drivers}")

# ── Position re-ranking helper ────────────────────────────────────────────────
def rerank(raw_scores: dict) -> dict:
    """Convert raw XGB scores to discrete integer positions 1–20."""
    drivers = list(raw_scores.keys())
    raw = np.array([raw_scores[d] for d in drivers])
    raw = np.clip(raw, 1.0, 20.0)
    order = np.argsort(raw)
    reranked = np.empty_like(raw)
    for rank, idx in enumerate(order):
        reranked[idx] = rank + 1
    return {drivers[i]: int(reranked[i]) for i in range(len(drivers))}

# ── Deterministic base positions (for win probability) ───────────────────────
base_X = np.array([[driver_features[d][f] for f in FEATURES] for d in all_drivers])
raw_base = model.predict(base_X)
base_scores = {d: float(raw_base[i]) for i, d in enumerate(all_drivers)}
base_positions = rerank(base_scores)

# Per-race win probability via softmax over inverse positions
inv = {d: 1.0 / max(base_positions[d], 0.5) for d in all_drivers}
total_inv = sum(inv.values())
win_prob_race = {d: inv[d] / total_inv for d in all_drivers}

# ── Monte Carlo championship simulation ──────────────────────────────────────
rng = np.random.default_rng(seed=42)

championship_wins = {d: 0 for d in all_drivers}
race_wins_sim = {d: 0 for d in all_drivers}
podiums_sim = {d: 0 for d in all_drivers}
season_points_all = {d: [] for d in all_drivers}

for sim in range(N_SIMS):
    season_pts = {d: 0 for d in all_drivers}

    for race in range(N_RACES):
        # Add Gaussian noise to base predicted positions
        noisy_scores = {}
        for d in all_drivers:
            noisy_scores[d] = max(0.5, base_positions[d] + rng.normal(0, NOISE_SIGMA))

        # Re-rank into valid positions
        race_positions = rerank(noisy_scores)

        # Award points
        for d in all_drivers:
            pos = race_positions[d]
            if pos <= 10:
                pts = POINTS_SYSTEM[pos - 1]
                season_pts[d] += pts
            if pos == 1:
                race_wins_sim[d] += 1
            if pos <= 3:
                podiums_sim[d] += 1

    # Find champion
    champion = max(season_pts, key=lambda d: season_pts[d])
    championship_wins[champion] += 1
    for d in all_drivers:
        season_points_all[d].append(season_pts[d])

# Championship win probability
champ_win_prob = {d: championship_wins[d] / N_SIMS for d in all_drivers}
# Per-race podium rate
podium_rate = {d: podiums_sim[d] / (N_SIMS * N_RACES) for d in all_drivers}
# Predicted season points (mean across sims)
predicted_points = {d: float(np.mean(season_points_all[d])) for d in all_drivers}

# Sanity check: points cap
max_pts = max(predicted_points.values())
print(f"Max predicted points: {max_pts:.1f}")
if max_pts > 550:
    print("WARNING: champion points > 550, re-simulating with sigma=5.0")
    NOISE_SIGMA = 5.0
    championship_wins = {d: 0 for d in all_drivers}
    race_wins_sim = {d: 0 for d in all_drivers}
    podiums_sim = {d: 0 for d in all_drivers}
    season_points_all = {d: [] for d in all_drivers}
    for sim in range(N_SIMS):
        season_pts = {d: 0 for d in all_drivers}
        for race in range(N_RACES):
            noisy_scores = {d: max(0.5, base_positions[d] + rng.normal(0, NOISE_SIGMA)) for d in all_drivers}
            race_positions = rerank(noisy_scores)
            for d in all_drivers:
                pos = race_positions[d]
                if pos <= 10:
                    season_pts[d] += POINTS_SYSTEM[pos - 1]
                if pos == 1:
                    race_wins_sim[d] += 1
                if pos <= 3:
                    podiums_sim[d] += 1
        champion = max(season_pts, key=lambda d: season_pts[d])
        championship_wins[champion] += 1
        for d in all_drivers:
            season_points_all[d].append(season_pts[d])
    champ_win_prob = {d: championship_wins[d] / N_SIMS for d in all_drivers}
    podium_rate = {d: podiums_sim[d] / (N_SIMS * N_RACES) for d in all_drivers}
    predicted_points = {d: float(np.mean(season_points_all[d])) for d in all_drivers}

# Sanity checks
prob_sum = sum(champ_win_prob.values())
print(f"Sum of championship probs: {prob_sum:.4f}")
assert 0.95 <= prob_sum <= 1.05, f"Probability sum {prob_sum} out of range"
assert len(all_drivers) == 20, f"Expected 20 drivers, got {len(all_drivers)}"

# ── Build standings ────────────────────────────────────────────────────────────
driver_standings = sorted(
    [
        {
            "position": 0,  # filled below
            "driver": d,
            "constructor": driver_constructor.get(d, "unknown"),
            "predicted_points": round(predicted_points[d], 1),
            "championship_win_probability": round(champ_win_prob[d], 4),
            "race_win_probability": round(win_prob_race[d], 4),
            "podium_rate": round(podium_rate[d], 4),
            "base_predicted_position": base_positions[d],
        }
        for d in all_drivers
    ],
    key=lambda x: -x["predicted_points"],
)
for i, entry in enumerate(driver_standings):
    entry["position"] = i + 1

assert len(driver_standings) == 20

# Constructor standings
constructor_pts = {}
constructor_wins = {}
for entry in driver_standings:
    c = entry["constructor"]
    constructor_pts[c] = constructor_pts.get(c, 0) + entry["predicted_points"]
    constructor_wins[c] = constructor_wins.get(c, 0) + entry["championship_win_probability"]

constructor_standings = sorted(
    [
        {
            "position": 0,
            "constructor": c,
            "predicted_points": round(constructor_pts[c], 1),
            "championship_win_probability": round(constructor_wins[c], 4),
        }
        for c in constructor_pts
    ],
    key=lambda x: -x["predicted_points"],
)
for i, entry in enumerate(constructor_standings):
    entry["position"] = i + 1

assert len(constructor_standings) == 10

# ── Top 3 report ─────────────────────────────────────────────────────────────
champion = driver_standings[0]
top3 = driver_standings[:3]
print("\n=== 2026 CHAMPIONSHIP PREDICTION ===")
print(f"Predicted Champion: {champion['driver'].upper()} ({champion['constructor']})")
print(f"  Win probability:  {champion['championship_win_probability']*100:.1f}%")
print(f"  Predicted points: {champion['predicted_points']}")
print(f"\nTop 3 Championship Probabilities:")
for e in top3:
    print(f"  {e['position']}. {e['driver']} ({e['constructor']}) — {e['championship_win_probability']*100:.1f}%  pts:{e['predicted_points']}")

# ── Save predictions.json ─────────────────────────────────────────────────────
os.makedirs("_workspace", exist_ok=True)
output = {
    "metadata": {
        "generated_at": "2026-06-09",
        "model": "XGBoostRegressor",
        "n_simulations": N_SIMS,
        "n_races": N_RACES,
        "noise_sigma": NOISE_SIGMA,
        "cv_mae": round(float(cv_mae), 4),
        "training_rows": int(len(train_df)),
        "features": FEATURES,
    },
    "champion": champion["driver"],
    "driver_standings": driver_standings,
    "constructor_standings": constructor_standings,
    "race_predictions": [
        {
            "race": i + 1,
            "drivers": sorted(
                [
                    {
                        "driver": d,
                        "win_probability": round(win_prob_race[d], 4),
                        "base_position": base_positions[d],
                    }
                    for d in all_drivers
                ],
                key=lambda x: x["base_position"],
            ),
        }
        for i in range(1)  # template for round 1; full calendar TBD
    ],
}

with open("_workspace/predictions.json", "w") as f:
    json.dump(output, f, indent=2)

print(f"\nSaved to _workspace/predictions.json")
print(f"CV MAE: {cv_mae:.4f}")
