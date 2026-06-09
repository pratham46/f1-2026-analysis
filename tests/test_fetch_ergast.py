"""Tests for src/data/fetch_ergast.py"""
from unittest.mock import MagicMock, patch

import pandas as pd
import pytest

from src.data.fetch_ergast import fetch_multiple_seasons, fetch_season_results

EXPECTED_COLUMNS = {"year", "round", "circuit", "driver", "constructor", "grid", "position", "points", "status"}


def _make_mock_response(payload: dict) -> MagicMock:
    mock = MagicMock()
    mock.json.return_value = payload
    mock.raise_for_status.return_value = None
    return mock


class TestFetchSeasonResults:
    def test_returns_dataframe(self, ergast_api_response):
        with patch("src.data.fetch_ergast.requests.get", return_value=_make_mock_response(ergast_api_response)):
            df = fetch_season_results(2023)
        assert isinstance(df, pd.DataFrame)

    def test_columns_present(self, ergast_api_response):
        with patch("src.data.fetch_ergast.requests.get", return_value=_make_mock_response(ergast_api_response)):
            df = fetch_season_results(2023)
        assert EXPECTED_COLUMNS.issubset(df.columns)

    def test_year_column_set_correctly(self, ergast_api_response):
        with patch("src.data.fetch_ergast.requests.get", return_value=_make_mock_response(ergast_api_response)):
            df = fetch_season_results(2023)
        assert (df["year"] == 2023).all()

    def test_row_count_matches_results(self, ergast_api_response):
        total_results = sum(
            len(race["Results"])
            for race in ergast_api_response["MRData"]["RaceTable"]["Races"]
        )
        with patch("src.data.fetch_ergast.requests.get", return_value=_make_mock_response(ergast_api_response)):
            df = fetch_season_results(2023)
        assert len(df) == total_results

    def test_points_are_float(self, ergast_api_response):
        with patch("src.data.fetch_ergast.requests.get", return_value=_make_mock_response(ergast_api_response)):
            df = fetch_season_results(2023)
        assert df["points"].dtype == float

    def test_grid_is_int(self, ergast_api_response):
        with patch("src.data.fetch_ergast.requests.get", return_value=_make_mock_response(ergast_api_response)):
            df = fetch_season_results(2023)
        assert df["grid"].dtype == int

    def test_http_error_propagates(self):
        mock = MagicMock()
        mock.raise_for_status.side_effect = Exception("HTTP 500")
        with patch("src.data.fetch_ergast.requests.get", return_value=mock):
            with pytest.raises(Exception, match="HTTP 500"):
                fetch_season_results(2023)


class TestFetchMultipleSeasons:
    def test_concatenates_years(self, ergast_api_response):
        with patch("src.data.fetch_ergast.requests.get", return_value=_make_mock_response(ergast_api_response)):
            df = fetch_multiple_seasons(2022, 2023)
        assert set(df["year"].unique()) == {2022, 2023}

    def test_single_year_range(self, ergast_api_response):
        with patch("src.data.fetch_ergast.requests.get", return_value=_make_mock_response(ergast_api_response)):
            df = fetch_multiple_seasons(2023, 2023)
        assert list(df["year"].unique()) == [2023]
