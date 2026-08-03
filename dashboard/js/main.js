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
  "season", "strategy", "grid", "momentum", "regs",
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
  const clones = items.map((n) => {
    const clone = n.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.tabIndex = -1;
    return clone;
  });
  rail.replaceChildren(...items, ...clones);
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
    if (!open) {
      const firstLink = links.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.removeAttribute("data-open");
      btn.setAttribute("aria-expanded", "false");
      const hash = new URL(e.target.href, window.location.href).hash;
      const target = document.querySelector(hash);
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus();
      } else {
        btn.focus();
      }
    }
  });
}

function initTicker() {
  const pauseBtn = document.getElementById("ticker-pause");
  if (!pauseBtn) return;
  
  const pauseIcon = `<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
  const playIcon = `<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
  
  pauseBtn.addEventListener("click", () => {
    const pressed = pauseBtn.getAttribute("aria-pressed") === "true";
    pauseBtn.setAttribute("aria-pressed", String(!pressed));
    pauseBtn.setAttribute("aria-label", !pressed ? "Play news" : "Pause news");
    pauseBtn.innerHTML = !pressed ? playIcon : pauseIcon;
  });
}

async function boot() {
  initNav();
  initTicker();
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

  // Sections start hidden and are revealed by paint(), so the browser had
  // nothing to scroll to when it processed the incoming hash. Re-apply it.
  if (location.hash) {
    document.querySelector(location.hash)?.scrollIntoView({ behavior: "instant" });
  }

  const live = await upgradeFromWorker(seed);
  if (live) await paint(live, "live");
}

boot();
