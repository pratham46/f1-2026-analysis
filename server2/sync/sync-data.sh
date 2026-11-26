#!/usr/bin/env bash
# Daily seed sync, run on server 2 by f1-sync.timer. Replaces the GitHub
# scheduled workflow, which GitHub disabled for inactivity and whose runners
# kept losing to OpenF1 rate limits. Same gates as before:
#   test -> regenerate -> refuse a seed that knows less -> verify -> commit only on change.
# The push uses a repo-scoped deploy key (~/.ssh/f1sync). A deploy-key push DOES
# trigger deploy.yml, so Pages republishes without any Cloudflare secret here.
set -euo pipefail

REPO=${REPO:-$HOME/f1-2026-analysis}
export GIT_SSH_COMMAND="ssh -i $HOME/.ssh/f1sync -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new"

if [ ! -d "$REPO/.git" ]; then
  git clone -q git@github.com:pratham46/f1-2026-analysis.git "$REPO"
fi
cd "$REPO"
git fetch -q origin main
git checkout -q main
git reset -q --hard origin/main   # this clone is the bot's: never holds local work

cd cloudflare/worker
npm ci --silent
npm test >/dev/null
cd "$REPO"

before=$(mktemp)
trap 'rm -f "$before"' EXIT
cp dashboard/data.js "$before"

(cd cloudflare/worker && npm run seed)

if ! node scripts/check-seed-regression.mjs "$before" dashboard/data.js; then
  echo "seed not updated: upstream returned less than the committed seed holds"
  git checkout -- dashboard/data.js cloudflare/worker/data
  exit 0
fi

node --test "test/*.test.mjs" >/dev/null

PATHS="dashboard/data.js cloudflare/worker/data"
if git diff --quiet -- $PATHS; then
  echo "no data change"
  exit 0
fi
git -c user.name="f1-sync[server2]" -c user.email="f1-sync@users.noreply.github.com" \
  commit -q -m "[bot] Sync F1 data $(date -u +%Y-%m-%d) (server 2)" -- $PATHS
git push -q origin main
echo "pushed $(git rev-parse --short HEAD)"
