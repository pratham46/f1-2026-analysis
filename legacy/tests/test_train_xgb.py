"""Tests for src/models/train_xgb.py"""
import tempfile
from pathlib import Path

import numpy as np
import pandas as pd
import pytest
import xgboost as xgb

from src.models.train_xgb import FEATURES, TARGET, load_data, train


def _make_synthetic_csv(path: str, n_rows: int = 150) -> None:
    rng = np.random.default_rng(0)
    # 5 unique years required for GroupKFold(n_splits=5) in train()
    years = np.repeat([2019, 2020, 2021, 2022, 2023], n_rows // 5)
    df = pd.DataFrame({
        "year": years,
        "round": rng.integers(1, 23, size=n_rows),
        "driver": rng.choice(["verstappen", "hamilton", "alonso"], size=n_rows),
        "constructor": rng.choice(["red_bull", "mercedes", "aston_martin"], size=n_rows),
        "grid": rng.integers(1, 20, size=n_rows),
        "position": rng.integers(1, 20, size=n_rows).astype(str),
        "points": rng.uniform(0, 25, size=n_rows),
        "driver_pts_rolling_3": rng.uniform(0, 25, size=n_rows),
        "driver_pts_rolling_5": rng.uniform(0, 25, size=n_rows),
        "constructor_pts_rolling_3": rng.uniform(0, 43, size=n_rows),
        "constructor_pts_rolling_5": rng.uniform(0, 43, size=n_rows),
    })
    df.to_csv(path, index=False)


class TestLoadData:
    def test_returns_dataframe(self):
        with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as f:
            _make_synthetic_csv(f.name)
            df = load_data(f.name)
        assert isinstance(df, pd.DataFrame)

    def test_all_feature_columns_present(self):
        with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as f:
            _make_synthetic_csv(f.name)
            df = load_data(f.name)
        for col in FEATURES + [TARGET]:
            assert col in df.columns, f"Missing column: {col}"

    def test_no_nulls_in_features_or_target(self):
        with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as f:
            _make_synthetic_csv(f.name)
            df = load_data(f.name)
        assert df[FEATURES + [TARGET]].isna().sum().sum() == 0

    def test_target_is_numeric(self):
        with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as f:
            _make_synthetic_csv(f.name)
            df = load_data(f.name)
        assert pd.api.types.is_numeric_dtype(df[TARGET])

    def test_rows_with_null_features_dropped(self):
        with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as f:
            name = f.name
        _make_synthetic_csv(name, n_rows=60)
        df = pd.read_csv(name)
        df.loc[0, FEATURES[0]] = float("nan")
        df.to_csv(name, index=False)
        result = load_data(name)
        assert len(result) < 60


class TestTrain:
    def test_returns_xgb_regressor(self):
        with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as f:
            _make_synthetic_csv(f.name)
            model = train(f.name)
        assert isinstance(model, xgb.XGBRegressor)

    def test_model_can_predict(self):
        with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as f:
            _make_synthetic_csv(f.name)
            model = train(f.name)
            df = pd.read_csv(f.name).dropna(subset=FEATURES)
            preds = model.predict(df[FEATURES])
        assert len(preds) == len(df)
        assert np.all(np.isfinite(preds))

    def test_model_saves_to_disk(self, tmp_path):
        with tempfile.NamedTemporaryFile(suffix=".csv", delete=False) as f:
            _make_synthetic_csv(f.name)
            model = train(f.name)
        out = tmp_path / "model.json"
        model.save_model(str(out))
        assert out.exists()
        assert out.stat().st_size > 0
