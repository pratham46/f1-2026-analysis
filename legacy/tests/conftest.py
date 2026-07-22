"""Shared fixtures for the F1 2026 analysis test harness."""
import pandas as pd
import pytest


@pytest.fixture
def sample_results() -> pd.DataFrame:
    """Minimal race results DataFrame matching the Ergast schema."""
    return pd.DataFrame([
        {"year": 2023, "round": 1, "circuit": "bahrain", "driver": "verstappen",
         "constructor": "red_bull", "grid": 1, "position": "1", "points": 25.0, "status": "Finished"},
        {"year": 2023, "round": 1, "circuit": "bahrain", "driver": "perez",
         "constructor": "red_bull", "grid": 2, "position": "2", "points": 18.0, "status": "Finished"},
        {"year": 2023, "round": 1, "circuit": "bahrain", "driver": "alonso",
         "constructor": "aston_martin", "grid": 5, "position": "3", "points": 15.0, "status": "Finished"},
        {"year": 2023, "round": 2, "circuit": "jeddah", "driver": "verstappen",
         "constructor": "red_bull", "grid": 1, "position": "1", "points": 25.0, "status": "Finished"},
        {"year": 2023, "round": 2, "circuit": "jeddah", "driver": "perez",
         "constructor": "red_bull", "grid": 3, "position": "2", "points": 18.0, "status": "Finished"},
        {"year": 2023, "round": 2, "circuit": "jeddah", "driver": "alonso",
         "constructor": "aston_martin", "grid": 4, "position": "3", "points": 15.0, "status": "Finished"},
        {"year": 2024, "round": 1, "circuit": "bahrain", "driver": "verstappen",
         "constructor": "red_bull", "grid": 1, "position": "1", "points": 25.0, "status": "Finished"},
        {"year": 2024, "round": 1, "circuit": "bahrain", "driver": "perez",
         "constructor": "red_bull", "grid": 2, "position": "5", "points": 10.0, "status": "Finished"},
        {"year": 2024, "round": 1, "circuit": "bahrain", "driver": "alonso",
         "constructor": "aston_martin", "grid": 6, "position": "4", "points": 12.0, "status": "Finished"},
    ])


@pytest.fixture
def ergast_api_response() -> dict:
    """Minimal Ergast JSON payload for a single race."""
    return {
        "MRData": {
            "RaceTable": {
                "Races": [
                    {
                        "round": "1",
                        "Circuit": {"circuitId": "bahrain"},
                        "Results": [
                            {
                                "Driver": {"driverId": "verstappen"},
                                "Constructor": {"constructorId": "red_bull"},
                                "grid": "1",
                                "position": "1",
                                "points": "25",
                                "status": "Finished",
                            },
                            {
                                "Driver": {"driverId": "perez"},
                                "Constructor": {"constructorId": "red_bull"},
                                "grid": "2",
                                "position": "2",
                                "points": "18",
                                "status": "Finished",
                            },
                        ],
                    }
                ]
            }
        }
    }
