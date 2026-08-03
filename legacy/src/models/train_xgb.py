"""Train an XGBoost model to predict finishing position."""
import pandas as pd
import numpy as np
from pathlib import Path
from sklearn.model_selection import GroupKFold
from sklearn.metrics import mean_absolute_error
import xgboost as xgb

FEATURES = [
    "grid",
    "driver_pts_rolling_3",
    "driver_pts_rolling_5",
    "constructor_pts_rolling_3",
    "constructor_pts_rolling_5",
]
TARGET = "position"


def load_data(path: str) -> pd.DataFrame:
    df = pd.read_csv(path).dropna(subset=FEATURES + [TARGET])
    df[TARGET] = pd.to_numeric(df[TARGET], errors="coerce")
    return df.dropna(subset=[TARGET])


def train(data_path: str = "data/processed/features.csv") -> xgb.XGBRegressor:
    df = load_data(data_path)
    X, y = df[FEATURES], df[TARGET]
    groups = df["year"]

    model = xgb.XGBRegressor(n_estimators=400, max_depth=5, learning_rate=0.05,
                              subsample=0.8, colsample_bytree=0.8, random_state=42)

    gkf = GroupKFold(n_splits=5)
    maes = []
    for fold, (train_idx, val_idx) in enumerate(gkf.split(X, y, groups)):
        model.fit(X.iloc[train_idx], y.iloc[train_idx],
                  eval_set=[(X.iloc[val_idx], y.iloc[val_idx])],
                  verbose=False)
        preds = model.predict(X.iloc[val_idx])
        mae = mean_absolute_error(y.iloc[val_idx], preds)
        maes.append(mae)
        print(f"Fold {fold+1} MAE: {mae:.3f}")

    print(f"\nMean CV MAE: {np.mean(maes):.3f}")
    model.fit(X, y)
    return model


if __name__ == "__main__":
    model = train()
    Path("reports").mkdir(exist_ok=True)
    model.save_model("reports/xgb_position_model.json")
    print("Model saved to reports/xgb_position_model.json")
