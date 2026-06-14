# F1 2026 — Cloudflare Deployment

The project is two deployables:

| Part | Path | Cloudflare product | Job |
|------|------|--------------------|-----|
| **Worker** | `cloudflare/worker/` | Workers + KV + Cron | Fetch live 2026 data, scrape f1.com, compute predictions, serve `/api/data` |
| **Dashboard** | `dashboard/` | Pages (static) | Render the data; fetches `/api/data`, falls back to `data.js` |

The Worker auto-refreshes on a **race-weekend** cadence: a daily cron fires `scheduled()`, which
self-gates and only does the heavy fetch/scrape when today is within Thu–Mon of a 2026 GP.

---

## 1. Worker setup

```bash
cd cloudflare/worker
npm install

# Create the KV namespace (prod + preview), then paste the ids into wrangler.toml
wrangler kv namespace create F1_KV
wrangler kv namespace create F1_KV --preview

# Verify the JS port + harmony contract before deploying
npm test

# Local dev (serves http://localhost:8787/api/data)
npm run dev

# Deploy
wrangler login      # one-time, interactive — run this yourself in your terminal
wrangler deploy
```

`wrangler deploy` prints your Worker URL, e.g. `https://f1-2026-data.<subdomain>.workers.dev`.

### Endpoints
- `GET /api/data` — full dashboard payload (the harmony contract).
- `GET /api/news` — scraped headlines.
- `GET /api/health` — last run timestamp + source health.
- `GET /api/refresh` — manual refresh (runs assemble in the background).

---

## 2. Point the dashboard at the Worker

Set `window.F1_WORKER_URL` in `dashboard/config.js` to your Worker URL, e.g.
`"https://f1-2026-data.<subdomain>.workers.dev"`. The dashboard fetches the Worker directly;
CORS is already enabled on the Worker (`Access-Control-Allow-Origin: *`).

> Note: Cloudflare Pages `_redirects` can only proxy (status 200) to **internal** paths, not to an
> external `workers.dev` domain — so a same-origin `/api/*` proxy is **not** an option here. Use the
> direct `F1_WORKER_URL` approach above. (If you later put the Worker on a custom route under the same
> domain as Pages, you could switch to a relative `/api` path.)

If the Worker is unreachable, the dashboard renders the committed `dashboard/data.js` seed — so the
page never breaks. Regenerate the seed any time with:

```bash
cd cloudflare/worker && npm run seed
```

`npm run seed` runs two steps: `gen-seed.mjs` (full `assemble()` pass) **then**
`enrich-openf1-seed.mjs`, a deterministic OpenF1 backfill (retries + 20 s timeouts) that fills the
tyre-strategy/pit data (`openf1_race_data`) for **every** completed round — the bare assemble pass
only captures a random subset because OpenF1 is slow under the Worker's short request timeouts. Use
`npm run seed:base` for the assemble pass alone.

> After a fresh **Worker** deploy its KV may still hold partial OpenF1 coverage; each
> `POST /api/refresh` only lands ~2 fresh OpenF1 fetches (but caches them), so POST it a few times
> until `/api/health` shows `enriched:Nraces` for all N completed rounds.

---

## 3. Pages setup

Connect the git repo in the Cloudflare dashboard (Pages → Create → connect repo), or:

```bash
wrangler pages deploy dashboard --project-name f1-2026
```

Pages build settings: **no build command**, **output directory = `dashboard`**.

---

## 4. Auto-deploy with GitHub Actions

`.github/workflows/deploy.yml` redeploys on every push to `main`/`master` (and on manual
"Run workflow"). It installs deps, runs `npm test` (parity + harmony gate), then deploys the
Worker and the dashboard to Pages.

> This ships **code**, not data. Predictions are computed live inside the Worker on its
> race-weekend cron — the workflow never touches them at runtime. It only fires when source changes.

**One-time setup:**

1. Push the repo to GitHub.
2. Create a Cloudflare API token (My Profile → API Tokens → Create Token). Permissions:
   - Account · **Workers Scripts** · Edit
   - Account · **Cloudflare Pages** · Edit
   - Account · **Workers KV Storage** · Edit
   - Account · **Account Settings** · Read
3. In the GitHub repo → Settings → Secrets and variables → Actions, add:
   - `CLOUDFLARE_API_TOKEN` — the token above
   - `CLOUDFLARE_ACCOUNT_ID` — from the Cloudflare dashboard URL / Workers overview
4. Ensure the Pages project **`f1-2026`** exists (create it once via the dashboard or a first
   `wrangler pages deploy dashboard --project-name=f1-2026`). The KV namespace ids must already be
   filled into `wrangler.toml` (step 1).

After that, `git push` → tests run → Worker + Pages redeploy automatically.

---

## Notes & limits

- **f1.com scraping** may be blocked by Cloudflare bot protection from a Worker. The scraper
  degrades gracefully (keeps last-good news/media); standings always come from Jolpica, which is
  reliable. If news is persistently empty, swap in an RSS/official feed in `src/scrape.js`.
- **No Python/XGBoost on Workers.** The trained model's 2026 ranking is frozen as `MODEL_BASE_2026`
  in `src/seed.js`; `predict.js` blends it with live results and runs the Monte Carlo. Re-train
  offline (legacy `src/` Python) and update the anchor if you want to refresh the model.
- **2020–2025 history is frozen** in `seed.js` (it never changes), so the Worker only fetches 2026.
