"""Engineer features from cleaned race results for modeling."""
import pandas as pd
from pathlib import Path


def add_rolling_points(df: pd.DataFrame, windows: list[int] = [3, 5]) -> pd.DataFrame:
    df = df.sort_values(["driver", "year", "round"]).copy()
    for w in windows:
        df[f"driver_pts_rolling_{w}"] = (
            df.groupby("driver")["points"]
            .transform(lambda s: s.shift(1).rolling(w, min_periods=1).mean())
        )
    return df


def add_grid_vs_finish(df: pd.DataFrame) -> pd.DataFrame:
    df["positions_gained"] = df["grid"].astype(float) - df["position"].astype(float)
    return df


def add_constructor_rolling_points(df: pd.DataFrame, windows: list[int] = [3, 5]) -> pd.DataFrame:
    con = df.groupby(["constructor", "year", "round"])["points"].sum().reset_index()
    for w in windows:
        con[f"constructor_pts_rolling_{w}"] = (
            con.groupby("constructor")["points"]
            .transform(lambda s: s.shift(1).rolling(w, min_periods=1).mean())
        )
    return df.merge(
        con[["constructor", "year", "round"] + [f"constructor_pts_rolling_{w}" for w in windows]],
        on=["constructor", "year", "round"],
        how="left",
    )


def build(input_path: str, output_path: str) -> None:
    df = pd.read_csv(input_path)
    df = add_rolling_points(df)
    df = add_grid_vs_finish(df)
    df = add_constructor_rolling_points(df)
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    df.to_csv(output_path, index=False)
    print(f"Features saved to {output_path}")


if __name__ == "__main__":
    build("data/raw/ergast_results_2018_2025.csv", "data/processed/features.csv")
