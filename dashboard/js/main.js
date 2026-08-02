// Boot.
//
// Paint from the committed seed first so the page is complete offline, then
// upgrade from the Worker only if the Worker is provably fresher.

import { loadSeed, upgradeFromWorker } from "./lib/data.js";
import { initReveals, initScrollProgress } from "./lib/motion.js";
import { initModal } from "./lib/modal.js";
import { dateShort } from "./lib/format.js";

const SECTIONS = [
  "open", "title-fight", "h2h", "accuracy",
  "season", "grid", "momentum", "regs",
];

// Each section is imported once and reused across repaints.
const moduleCache = new Map();

async function sectionModule(id) {
  if (!moduleCache.has(id)) moduleCache.set(id, import(`./sections/${id}.js`));
  return moduleCache.get(id);
}

async function paint(data, source) {
  await Promise.all(
    SECTIONS.map(async (id) => {
      const root = document.getElementById(id);
      if (!root) return;
      try {
        const mod = await sectionModule(id);
        // A section returns false when its data is absent — it hides rather
        // than shipping blank. Sections fail INDEPENDENTLY: a shared try/catch
        // once zeroed the whole standings table when one sibling threw.
        const rendered = await mod.render(data, root);
        root.hidden = rendered === false;
      } catch (e) {
        console.error(`[section:${id}]`, e);
        root.hidden = true;
      }
    })
  );

  renderTicker(data);
  renderFooter(data, source);

  const status = document.getElementById("data-status");
  if (status) {
    status.dataset.source = source;
    status.querySelector(".lbl").textContent = source === "live" ? "Live" : "Committed seed";
  }
}

function renderTicker(data) {
  const rail = document.getElementById("ticker-move");
  const news = data.news || [];
  if (!rail || !news.length) return;
  const items = news.map((n) => {
    const a = document.createElement("a");
    a.href = n.url || "#";
    a.textContent = n.title || "";
    a.target = "_blank";
    a.rel = "noopener";
    return a;
  });
  // Duplicated so the -50% translate loops seamlessly.
  rail.replaceChildren(...items, ...items.map((n) => n.cloneNode(true)));
}

function renderFooter(data, source) {
  const gen = document.getElementById("foot-gen");
  if (!gen) return;
  const label = source === "live" ? "Live from the Worker" : "Committed seed";
  gen.textContent = `${label} · generated ${dateShort(data.generated_at)} · ` +
    `${data.races_completed_2026 ?? 0} of ${(data.calendar_2026 || []).length} rounds run`;
}

function initNav() {
  const btn = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    const open = links.hasAttribute("data-open");
    links.toggleAttribute("data-open", !open);
    btn.setAttribute("aria-expanded", String(!open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.removeAttribute("data-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

async function boot() {
  initNav();
  initModal();
  initScrollProgress(document.getElementById("progress"));

  let seed;
  try {
    seed = loadSeed();
  } catch (e) {
    console.error("[boot]", e);
    return;
  }

  await paint(seed, "seed");
  initReveals(); // after first paint, so every [data-reveal] exists

  const live = await upgradeFromWorker(seed);
  if (live) await paint(live, "live");
}

boot();
