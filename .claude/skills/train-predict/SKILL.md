---
name: train-predict
description: "Train the XGBoost finishing-position model and generate 2026 championship predictions via Monte Carlo simulation. Use whenever training the model, generating season predictions, updating championship standings, running what-if regulation scenarios, or producing race win probability estimates. Must be used by the prediction-engine agent."
---

## Model Spec

```python
FEATURES = [
    "grid",
    "driver_pts_rolling_3",
    "driver_pts_rolling_5",
    "constructor_pts_rolling_3",
    "constructor_pts_rolling_5",
]
TARGET = "position"  # numeric, 1–20
```

XGBoost config:
```python
XGBRegressor(
    n_estimators=400,
    max_depth=5,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=42,
)
```

Cross-validation: `GroupKFold(n_splits=5)`, groups = `year` column.

## Position Re-ranking (critical — apply after model.predict())

Raw XGB outputs are continuous. Before using them, re-rank to valid discrete positions:
```python
raw = np.clip(model.predict(X), 1.0, 20.0)
order = np.argsort(raw)
reranked = np.empty_like(raw)
for rank, idx in enumerate(order):
    reranked[idx] = rank + 1  # integer positions 1–20, no ties
```

## 2026 Feature Extraction

For each 2026 driver, extract their feature vector from the LAST race entry in 2025:
```python
last_race = df[df["year"] == 2025].groupby("driver").last()
```

If a driver didn't appear in 2025 data (e.g. rookies), use their team's average or midfield defaults:
```python
defaults = {"grid": 12, "driver_pts_rolling_3": 3.0, "driver_pts_rolling_5": 3.0,
            "constructor_pts_rolling_3": 5.0, "constructor_pts_rolling_5": 5.0}
```

## Regulation Impact Application

Apply before building X_pred for 2026:
```python
REGULATION_IMPACT = {
    "ferrari": +8, "mercedes": +5, "mclaren": +3, "williams": +1,
    "rb": -1, "haas": 0, "red_bull": -5, "aston_martin": -2,
    "alpine": -3, "sauber": -2,
}
# Multiply constructor rolling features by (1 + delta/100)
adj = 1 + REGULATION_IMPACT[driver_team] / 100
features["constructor_pts_rolling_3"] *= adj
features["constructor_pts_rolling_5"] *= adj
```

## Monte Carlo Season Simulation

Run 500 full-season simulations to compute championship probabilities.

Noise model: Gaussian with σ=3.5 positions (additive, not multiplicative):
```python
race_score = max(0.5, base_position + rng.normal(0, 3.5))
```

Track across 500 sims × 24 races:
- `championship_wins[driver]`: how many sims this driver accumulated the most season points
- `race_wins_sim[driver]`: total race wins across all sims (for per-race win rate)
- `podiums_sim[driver]`: total podium finishes across all sims

Output probabilities:
```python
win_probability = championship_wins[driver] / N_SIMS           # championship prob
podium_probability = podiums_sim[driver] / (N_SIMS * 24)       # per-race podium rate
```

## Per-Race Win Probability (for race_predictions)

Use softmax over inverse predicted positions (deterministic, based on base positions):
```python
inv = {d: 1.0 / max(score[d], 0.5) for d in drivers}
total = sum(inv.values())
win_prob[d] = inv[d] / total
```

## Sanity Checks Before Saving

```python
assert all driver points <= 600
assert 0.95 <= sum(win_probability values) <= 1.05
assert len(driver_standings) == 20
assert len(constructor_standings) == 10
assert 1.0 <= model_cv_mae <= 6.0
```

If champion's predicted_points > 550, the noise is too low — increase σ to 5.0 and re-simulate.
