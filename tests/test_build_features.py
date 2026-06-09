"""Tests for src/features/build_features.py"""
import pandas as pd
import pytest

from src.features.build_features import (
    add_constructor_rolling_points,
    add_grid_vs_finish,
    add_rolling_points,
)


class TestAddRollingPoints:
    def test_columns_created(self, sample_results):
        df = add_rolling_points(sample_results)
        assert "driver_pts_rolling_3" in df.columns
        assert "driver_pts_rolling_5" in df.columns

    def test_custom_windows(self, sample_results):
        df = add_rolling_points(sample_results, windows=[2, 7])
        assert "driver_pts_rolling_2" in df.columns
        assert "driver_pts_rolling_7" in df.columns

    def test_first_race_rolling_is_nan_or_zero(self, sample_results):
        df = add_rolling_points(sample_results)
        # groupby().nth(0) returns the actual first row (unlike .first() which skips NaN)
        first_races = df.sort_values(["driver", "year", "round"]).groupby("driver", sort=False).nth(0)
        assert first_races["driver_pts_rolling_3"].isna().all()

    def test_rolling_is_backward_looking(self, sample_results):
        """Points from the current race must not contaminate the rolling average."""
        df = add_rolling_points(sample_results, windows=[3])
        ver = df[df["driver"] == "verstappen"].sort_values(["year", "round"])
        # Round 2 rolling average should only reflect round 1 (shifted)
        round2_rolling = ver[ver["round"] == 2]["driver_pts_rolling_3"].iloc[0]
        round1_pts = ver[ver["round"] == 1]["points"].iloc[0]
        assert round2_rolling == pytest.approx(round1_pts)

    def test_no_mutation_of_input(self, sample_results):
        original_cols = list(sample_results.columns)
        add_rolling_points(sample_results)
        assert list(sample_results.columns) == original_cols


class TestAddGridVsFinish:
    def test_column_created(self, sample_results):
        df = add_grid_vs_finish(sample_results)
        assert "positions_gained" in df.columns

    def test_positive_when_finished_ahead_of_grid(self, sample_results):
        df = add_grid_vs_finish(sample_results)
        # alonso in round 1: grid=5, position=3 => gained 2
        alonso_r1 = df[(df["driver"] == "alonso") & (df["round"] == 1)]
        assert alonso_r1["positions_gained"].iloc[0] == pytest.approx(2.0)

    def test_zero_when_grid_equals_finish(self, sample_results):
        df = add_grid_vs_finish(sample_results)
        # verstappen round 1: grid=1, position=1
        ver_r1 = df[(df["driver"] == "verstappen") & (df["round"] == 1)]
        assert ver_r1["positions_gained"].iloc[0] == pytest.approx(0.0)


class TestAddConstructorRollingPoints:
    def test_columns_created(self, sample_results):
        df = add_constructor_rolling_points(sample_results)
        assert "constructor_pts_rolling_3" in df.columns
        assert "constructor_pts_rolling_5" in df.columns

    def test_no_rows_dropped(self, sample_results):
        df = add_constructor_rolling_points(sample_results)
        assert len(df) == len(sample_results)

    def test_aggregates_both_drivers(self, sample_results):
        df = add_constructor_rolling_points(sample_results, windows=[3])
        # red_bull round 2: prior round points = 25+18 = 43
        rb_r2 = df[(df["constructor"] == "red_bull") & (df["round"] == 2)].iloc[0]
        assert rb_r2["constructor_pts_rolling_3"] == pytest.approx(43.0)
