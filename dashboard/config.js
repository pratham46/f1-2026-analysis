// Dashboard runtime config.
//
// F1_WORKER_URL: absolute base URL of your deployed Cloudflare Worker, e.g.
//   "https://f1-2026-data.<your-subdomain>.workers.dev"
// Leave it EMPTY ("") to use same-origin /api/* — works when the Worker is
// served under the same domain via the Pages _redirects proxy (see _redirects).
//
// The dashboard fetches `${F1_WORKER_URL}/api/data` and falls back to the
// committed data.js seed if the Worker is unreachable, so the page always renders.
// Empty → the dashboard renders the local/committed data.js directly (the Python
// pipeline's accurate output). Set this back to the Worker URL to re-enable live
// auto-updating data.
window.F1_WORKER_URL = "";
