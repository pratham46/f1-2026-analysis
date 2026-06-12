// Dashboard runtime config.
//
// F1_WORKER_URL: absolute base URL of the deployed Cloudflare Worker.
// The dashboard ALWAYS paints from the committed data.js seed first, then
// fetches `${F1_WORKER_URL}/api/data` in the background and re-paints only
// when the Worker payload is at least as fresh as the seed (generated_at /
// races_completed_2026 guard in index.html) — so a stale KV can never
// override good committed data, and the page renders even fully offline.
//
// Set to "" to disable the live upgrade and serve the static seed only.
window.F1_WORKER_URL = "https://f1-2026-data.prathammewada46.workers.dev";
