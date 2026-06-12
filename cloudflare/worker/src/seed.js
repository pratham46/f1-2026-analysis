// ============================================================================
// seed.js — Frozen historical constants + 2026 grid + model anchor.
//
// 2020-2025 is settled history; it never changes, so the Worker embeds it
// rather than re-fetching 6 seasons from OpenF1/Jolpica on every cron run.
// Only 2026 is fetched/scraped live. The XGBoost model's 2026 base-position
// output is frozen here as MODEL_BASE_2026 (the "calibrated anchor"); predict.js
// blends it with any live 2026 results and runs the Monte Carlo on top.
//
// 2026-06-12 grid refresh (verified against live Jolpica /2026/driverstandings):
//   • 22 drivers / 11 teams — Cadillac joined (Bottas + Perez), Sauber became Audi.
//   • Hadjar drives for Red Bull, RB runs Lawson + rookie Arvid Lindblad,
//     Alpine runs Gasly + Colapinto. Tsunoda/Doohan are off the grid.
//   • Bahrain + Saudi Arabian GPs were CANCELLED → the real season is 22 rounds;
//     CALENDAR_2026 below mirrors Jolpica's official 22-round table.
// ============================================================================

export const SEASONS_USED = [2020, 2021, 2022, 2023, 2024, 2025];

// Complete 2026 grid keyed by the driver ids used in predictions (driver→team).
// Numbers from Jolpica permanentNumber (Norris runs #1 as reigning champion).
export const DRIVER_INFO = {
  piastri:        { name: "Oscar Piastri",       short: "PIA", team: "mclaren",      team_name: "McLaren",          color: "#FF8000", number: 81 },
  norris:         { name: "Lando Norris",        short: "NOR", team: "mclaren",      team_name: "McLaren",          color: "#FF8000", number: 1 },
  leclerc:        { name: "Charles Leclerc",     short: "LEC", team: "ferrari",      team_name: "Ferrari",          color: "#E8002D", number: 16 },
  hamilton:       { name: "Lewis Hamilton",      short: "HAM", team: "ferrari",      team_name: "Ferrari",          color: "#E8002D", number: 44 },
  max_verstappen: { name: "Max Verstappen",      short: "VER", team: "red_bull",     team_name: "Red Bull Racing",  color: "#3671C6", number: 3 },
  hadjar:         { name: "Isack Hadjar",        short: "HAD", team: "red_bull",     team_name: "Red Bull Racing",  color: "#3671C6", number: 6 },
  russell:        { name: "George Russell",      short: "RUS", team: "mercedes",     team_name: "Mercedes",         color: "#27F4D2", number: 63 },
  antonelli:      { name: "Kimi Antonelli",      short: "ANT", team: "mercedes",     team_name: "Mercedes",         color: "#27F4D2", number: 12 },
  sainz:          { name: "Carlos Sainz",        short: "SAI", team: "williams",     team_name: "Williams",         color: "#64C4FF", number: 55 },
  albon:          { name: "Alex Albon",          short: "ALB", team: "williams",     team_name: "Williams",         color: "#64C4FF", number: 23 },
  lawson:         { name: "Liam Lawson",         short: "LAW", team: "rb",           team_name: "Racing Bulls",     color: "#6692FF", number: 30 },
  arvid_lindblad: { name: "Arvid Lindblad",      short: "LIN", team: "rb",           team_name: "Racing Bulls",     color: "#6692FF", number: 41 },
  alonso:         { name: "Fernando Alonso",     short: "ALO", team: "aston_martin", team_name: "Aston Martin",     color: "#358C75", number: 14 },
  stroll:         { name: "Lance Stroll",        short: "STR", team: "aston_martin", team_name: "Aston Martin",     color: "#358C75", number: 18 },
  bearman:        { name: "Oliver Bearman",      short: "BEA", team: "haas",         team_name: "Haas",             color: "#B6BABD", number: 87 },
  ocon:           { name: "Esteban Ocon",        short: "OCO", team: "haas",         team_name: "Haas",             color: "#B6BABD", number: 31 },
  gasly:          { name: "Pierre Gasly",        short: "GAS", team: "alpine",       team_name: "Alpine",           color: "#FF87BC", number: 10 },
  colapinto:      { name: "Franco Colapinto",    short: "COL", team: "alpine",       team_name: "Alpine",           color: "#FF87BC", number: 43 },
  hulkenberg:     { name: "Nico Hulkenberg",     short: "HUL", team: "audi",         team_name: "Audi",             color: "#00E701", number: 27 },
  bortoleto:      { name: "Gabriel Bortoleto",   short: "BOR", team: "audi",         team_name: "Audi",             color: "#00E701", number: 5 },
  bottas:         { name: "Valtteri Bottas",     short: "BOT", team: "cadillac",     team_name: "Cadillac",         color: "#C8A464", number: 77 },
  perez:          { name: "Sergio Perez",        short: "PER", team: "cadillac",     team_name: "Cadillac",         color: "#C8A464", number: 11 },
};

// 2026 grid colors + legacy slugs (sauber/alphatauri/…) kept for history charts.
export const TEAM_COLORS = {
  red_bull: "#3671C6", ferrari: "#E8002D", mclaren: "#FF8000", mercedes: "#27F4D2",
  aston_martin: "#358C75", williams: "#64C4FF", alpine: "#FF87BC", rb: "#6692FF",
  haas: "#B6BABD", audi: "#00E701", cadillac: "#C8A464",
  sauber: "#52E252", alphatauri: "#6692FF", alfa: "#900000", racing_point: "#F596C8",
  renault: "#FFF500",
};

export const REGULATION_IMPACT_2026 = {
  description: "New 2026 regs: smaller cars, active aero (Manual Override Mode), 50/50 ICE + ERS hybrid, 100% sustainable fuel. Audi works team debuts; Cadillac joins as the 11th team.",
  constructor_competitiveness_change: {
    ferrari: 8, mercedes: 5, mclaren: 3, williams: 1, haas: 0,
    rb: -1, audi: -1, aston_martin: -2, alpine: -3, cadillac: -4, red_bull: -5,
  },
};

// Frozen 2026 base finishing-position prediction from the trained XGBoost model
// (predictions.json base_predicted_position), extended editorially to the four
// 2026 entrants the model never saw (Perez/Colapinto/Bottas/Lindblad slotted by
// career form + machinery; Cadillac is a brand-new team → conservative ranks).
// The relative order of all retained trained drivers is untouched (parity test).
export const MODEL_BASE_2026 = {
  piastri: 1, leclerc: 2, max_verstappen: 3, russell: 4, norris: 5,
  hamilton: 6, antonelli: 7, sainz: 8, albon: 9, lawson: 10,
  hadjar: 11, alonso: 12, bearman: 13, ocon: 14, gasly: 15,
  perez: 16, colapinto: 17, stroll: 18, bottas: 19, hulkenberg: 20,
  bortoleto: 21, arvid_lindblad: 22,
};

// Calibration figure carried in metadata (the offline model's GroupKFold-5 CV MAE).
export const MODEL_CV_MAE = 2.71;

export const HISTORICAL_DRIVER_POINTS = {
  2020: { albon: 36, bottas: 73, gasly: 12, giovinazzi: 2, hamilton: 107, hulkenberg: 6, kevin_magnussen: 1, kvyat: 2, leclerc: 45, max_verstappen: 77, norris: 38, ocon: 16, perez: 22, ricciardo: 20, sainz: 15, stroll: 28, vettel: 10 },
  2021: { alonso: 5, bottas: 47, gasly: 16, giovinazzi: 1, hamilton: 101, leclerc: 40, max_verstappen: 105, norris: 56, ocon: 12, perez: 44, ricciardo: 24, sainz: 38, stroll: 9, tsunoda: 2, vettel: 10 },
  2022: { albon: 3, alonso: 2, bottas: 28, gasly: 6, hamilton: 36, kevin_magnussen: 14, leclerc: 97, max_verstappen: 77, norris: 31, ocon: 24, perez: 60, ricciardo: 8, russell: 59, sainz: 48, stroll: 2, tsunoda: 10, vettel: 4, zhou: 1 },
  2023: { albon: 13, alonso: 156, bottas: 5, gasly: 17, hamilton: 147, hulkenberg: 14, leclerc: 127, magnussen: 2, norris: 70, ocon: 47, perez: 224, piastri: 37, russell: 116, sainz: 114, stroll: 65, tsunoda: 6, verstappen: 351, zho: 4 },
  2024: { albon: 2, alonso: 44, bearman: 6, colapinto: 5, gasly: 7, hamilton: 79, hulkenberg: 10, leclerc: 164, magnussen: 2, norris: 154, ocon: 3, perez: 127, piastri: 96, ric: 16, russell: 83, sainz: 130, sar: 1, stroll: 15, tsunoda: 20, verstappen: 251, zho: 2 },
  2025: { albon: 20, antonelli: 36, bearman: 6, gasly: 6, hadjar: 5, hamilton: 23, hulkenberg: 6, leclerc: 43, max_verstappen: 81, norris: 88, ocon: 14, piastri: 92, russell: 68, sainz: 5, stroll: 10, tsunoda: 2 },
};

export const HISTORICAL_CONSTRUCTOR_POINTS = {
  2020: { red_bull: 113, mercedes: 180, alphatauri: 14, alfa: 2, haas: 1, racing_point: 56, ferrari: 55, mclaren: 53, renault: 36 },
  2021: { alpine: 17, mercedes: 148, alphatauri: 18, alfa: 1, ferrari: 78, red_bull: 149, mclaren: 80, aston_martin: 19 },
  2022: { williams: 3, alpine: 26, alfa: 29, alphatauri: 16, mercedes: 95, aston_martin: 6, haas: 14, ferrari: 145, red_bull: 137, mclaren: 39 },
  2023: { williams: 13, aston_martin: 221, unknown: 110, rb: 6, alpine: 64, mercedes: 263, haas: 16, ferrari: 241, mclaren: 107, red_bull: 575 },
  2024: { williams: 3, aston_martin: 59, ferrari: 300, sauber: 2, alpine: 10, mercedes: 162, haas: 12, mclaren: 250, red_bull: 378, rb: 36 },
  2025: { williams: 25, aston_martin: 10, mercedes: 104, haas: 20, sauber: 6, alpine: 6, rb: 5, ferrari: 66, red_bull: 83, mclaren: 180 },
};

// Per-season points for each current driver (2020-2025), used by the form scorer.
export const DRIVER_ROLLING_FORM = {
  max_verstappen: { seasons: SEASONS_USED, points: [77, 105, 77, 351, 251, 81] },
  norris:         { seasons: SEASONS_USED, points: [38, 56, 31, 70, 154, 88] },
  leclerc:        { seasons: SEASONS_USED, points: [45, 40, 97, 127, 164, 43] },
  piastri:        { seasons: SEASONS_USED, points: [0, 0, 0, 37, 96, 92] },
  sainz:          { seasons: SEASONS_USED, points: [15, 38, 48, 114, 130, 5] },
  hamilton:       { seasons: SEASONS_USED, points: [107, 101, 36, 147, 79, 23] },
  russell:        { seasons: SEASONS_USED, points: [0, 0, 59, 116, 83, 68] },
  antonelli:      { seasons: SEASONS_USED, points: [0, 0, 0, 0, 0, 36] },
  alonso:         { seasons: SEASONS_USED, points: [0, 5, 2, 156, 44, 0] },
  stroll:         { seasons: SEASONS_USED, points: [28, 9, 2, 65, 15, 10] },
  lawson:         { seasons: SEASONS_USED, points: [0, 0, 0, 0, 0, 0] },
  albon:          { seasons: SEASONS_USED, points: [36, 0, 3, 13, 2, 20] },
  gasly:          { seasons: SEASONS_USED, points: [12, 16, 6, 17, 7, 6] },
  ocon:           { seasons: SEASONS_USED, points: [16, 12, 24, 47, 3, 14] },
  bearman:        { seasons: SEASONS_USED, points: [0, 0, 0, 0, 6, 6] },
  hulkenberg:     { seasons: SEASONS_USED, points: [6, 0, 0, 14, 10, 6] },
  hadjar:         { seasons: SEASONS_USED, points: [0, 0, 0, 0, 0, 5] },
  bortoleto:      { seasons: SEASONS_USED, points: [0, 0, 0, 0, 0, 0] },
  colapinto:      { seasons: SEASONS_USED, points: [0, 0, 0, 0, 5, 0] },
  arvid_lindblad: { seasons: SEASONS_USED, points: [0, 0, 0, 0, 0, 0] },
  bottas:         { seasons: SEASONS_USED, points: [73, 47, 28, 5, 0, 0] },
  perez:          { seasons: SEASONS_USED, points: [22, 44, 60, 224, 127, 0] },
};

// 2026 race calendar — the REAL 22-round season (Jolpica /2026/races, 2026-06-12).
// Bahrain (Apr 12) and Saudi Arabia (Apr 19) were cancelled and removed from the
// official table; rounds are numbered as actually run. `sprint` marks confirmed
// sprint weekends (completed ones verified via Jolpica /2026/sprint).
export const CALENDAR_2026 = [
  { round: 1,  id: "australia",   name: "Australian GP",      date: "2026-03-08" },
  { round: 2,  id: "china",       name: "Chinese GP",         date: "2026-03-15", sprint: true },
  { round: 3,  id: "japan",       name: "Japanese GP",        date: "2026-03-29" },
  { round: 4,  id: "miami",       name: "Miami GP",           date: "2026-05-03", sprint: true },
  { round: 5,  id: "canada",      name: "Canadian GP",        date: "2026-05-24", sprint: true },
  { round: 6,  id: "monaco",      name: "Monaco GP",          date: "2026-06-07" },
  { round: 7,  id: "spain",       name: "Barcelona GP",       date: "2026-06-14" },
  { round: 8,  id: "austria",     name: "Austrian GP",        date: "2026-06-28" },
  { round: 9,  id: "britain",     name: "British GP",         date: "2026-07-05" },
  { round: 10, id: "belgium",     name: "Belgian GP",         date: "2026-07-19" },
  { round: 11, id: "hungary",     name: "Hungarian GP",       date: "2026-07-26" },
  { round: 12, id: "netherlands", name: "Dutch GP",           date: "2026-08-23" },
  { round: 13, id: "italy",       name: "Italian GP",         date: "2026-09-06" },
  { round: 14, id: "madrid",      name: "Madrid GP",          date: "2026-09-13" },
  { round: 15, id: "azerbaijan",  name: "Azerbaijan GP",      date: "2026-09-26" },
  { round: 16, id: "singapore",   name: "Singapore GP",       date: "2026-10-11" },
  { round: 17, id: "americas",    name: "United States GP",   date: "2026-10-25" },
  { round: 18, id: "mexico",      name: "Mexico City GP",     date: "2026-11-01" },
  { round: 19, id: "brazil",      name: "São Paulo GP",       date: "2026-11-08" },
  { round: 20, id: "las_vegas",   name: "Las Vegas GP",       date: "2026-11-22" },
  { round: 21, id: "qatar",       name: "Qatar GP",           date: "2026-11-29" },
  { round: 22, id: "abu_dhabi",   name: "Abu Dhabi GP",       date: "2026-12-06" },
];

// Cancelled 2026 rounds (shown as a note in the UI, excluded from predictions).
export const CANCELLED_2026 = [
  { id: "bahrain",      name: "Bahrain GP",        date: "2026-04-12" },
  { id: "saudi_arabia", name: "Saudi Arabian GP",  date: "2026-04-19" },
];

export const N_RACES_2026 = CALENDAR_2026.length;
