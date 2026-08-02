// Two-tier motion.
//
// Native CSS scroll-driven animations do the reveals and the progress bar —
// compositor-driven, no JS. GSAP is imported only by the sections that need
// pinning or scrubbing. This module supplies the JS fallback for browsers
// without scroll-driven CSS, plus count-ups.
//
// HARD RULE: content is visible by default. Reveals ADD motion to an already
// painted page. Nothing here may hide content — transitions pause on hidden
// tabs and in headless renderers, and a gated section ships blank.

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const supportsScrollTimeline = () => CSS.supports("animation-timeline: view()");

export function onVisible(el, fn, { once = true } = {}) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        fn(e.target);
        if (once) io.unobserve(e.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  io.observe(el);
  return () => io.disconnect();
}

// Fallback only. When scroll-driven CSS is supported the stylesheet owns this
// and we do nothing — no double animation.
export function initReveals() {
  if (supportsScrollTimeline() || prefersReducedMotion()) return;
  document.documentElement.classList.add("js-reveal");
  for (const el of document.querySelectorAll("[data-reveal]")) {
    onVisible(el, (t) => t.setAttribute("data-revealed", ""));
  }
}

export function countUp(el, to, { duration = 900, decimals = 0, suffix = "" } = {}) {
  if (prefersReducedMotion() || !Number.isFinite(to)) {
    el.textContent = (Number.isFinite(to) ? to.toFixed(decimals) : "—") + suffix;
    return;
  }
  const t0 = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 4); // out-quart, matches --ease-out
  const step = (now) => {
    const t = Math.min(1, (now - t0) / duration);
    el.textContent = (to * ease(t)).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Count up the first time the element scrolls into view, not on load.
export function countUpWhenVisible(el, to, opts) {
  onVisible(el, () => countUp(el, to, opts));
}

export function initScrollProgress(el) {
  if (!el || supportsScrollTimeline()) return; // CSS owns it
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    el.style.setProperty("--progress", max > 0 ? window.scrollY / max : 0);
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  update();
}

// GSAP is only needed by the two pinned/scrubbed sequences. Load it lazily so
// the seed-first paint never waits on it, and so a CDN failure degrades to a
// static section instead of blocking the page.
let gsapPromise = null;
export function loadGsap() {
  if (prefersReducedMotion()) return Promise.resolve(null);
  gsapPromise ||= (async () => {
    try {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      return { gsap, ScrollTrigger };
    } catch (e) {
      console.warn("[motion] GSAP unavailable, falling back to static", e);
      return null;
    }
  })();
  return gsapPromise;
}
