# F1 2026 Season — Data Analysis & Prediction

Exploratory analysis and predictive modeling for the 2026 Formula 1 season.

## Project Structure

```
f1-2026-analysis/
├── data/
│   ├── raw/          # Original, unmodified data (race results, quali, weather, etc.)
│   ├── processed/    # Cleaned and feature-engineered datasets
│   └── external/     # Third-party data (tire compounds, track characteristics, etc.)
├── notebooks/        # Jupyter notebooks for EDA and experimentation
├── src/
│   ├── data/         # Data ingestion and cleaning scripts
│   ├── features/     # Feature engineering
│   ├── models/       # Model training, evaluation, and inference
│   └── visualization/ # Plotting and reporting utilities
├── reports/
│   └── figures/      # Saved charts and visualizations
└── tests/            # Unit tests
```

## Data Sources

- [FastF1](https://github.com/theOehrly/Fast-F1) — telemetry, lap times, sector data
- [Ergast API](http://ergast.com/mrd/) — historical race results (1950–2024)
- [OpenF1 API](https://openf1.org/) — live and historical 2023+ data

## Setup

```bash
pip install -r requirements.txt
```

## Key Questions

- Driver championship standings prediction
- Constructor championship standings prediction
- Race-by-race podium probabilities
- Impact of the new 2026 technical regulations (smaller cars, active aero, hybrid overhaul)
```
