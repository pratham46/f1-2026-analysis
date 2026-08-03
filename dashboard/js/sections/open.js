// Cold Open — the video's first five seconds.
//
// The headline is a NAME set in display type, not a number in a tile. The
// hero-metric template (big number, small label, supporting stats, gradient)
// is the SaaS cliche the design standard bans; the figures here are
// subordinate to the typography and set as a definition list, not cards.

import { teamColor } from "../lib/data.js";
import { pct, pts } from "../lib/format.js";
import { countUpWhenVisible, prefersReducedMotion } from "../lib/motion.js";

// The car is an enhancement on top of a page that already reads. It is loaded
// lazily and its failure is swallowed: no 3D must ever cost the headline.
async function mountCar(mount, color) {
  if (!mount || mount.dataset.mounted) return;
  const { createStage, webglAvailable } = await import("../lib/three/stage.js");
  if (!webglAvailable()) {
    mount.dataset.fallback = "";
    return;
  }
  const { loadCar, lightCar } = await import("../lib/three/car.js");
  const THREE = await import("three");

  mount.dataset.mounted = "1";
  const still = prefersReducedMotion();
  let car = null;
  let t = 0;
  const stage = createStage(mount, {
    onFrame: () => {
      if (!car || still) return; // reduced motion gets one static frame
      t += 0.0035;
      car.rotation.y = t;
    },
  });

  lightCar(stage.scene, stage.renderer);

  // Three-quarter front, low — the angle that shows the planform and the way
  // the nose falls to the front wing at the same time.
  stage.camera.position.set(5.4, 1.9, 4.5);
  stage.camera.lookAt(new THREE.Vector3(0, 0.35, 0));

  car = await loadCar(color);
  car.rotation.y = still ? -0.6 : 0;
  // Offset along the camera's own right/down axes so the car sits in the lower
  // right of the fold, behind the name, rather than centred through the kicker.
  // The pivot is the car's centre, so this moves it without skewing the spin.
  car.position.set(1.55, 0.35, -1.85);
  stage.scene.add(car);
  stage.resize();
}

export function render(data, root) {
  const standings = data.driver_standings_2026 || [];
  if (!standings.length) return false;

  const leader = standings[0];
  const run = data.races_completed_2026 ?? 0;
  const total = (data.calendar_2026 || []).length;

  root.style.setProperty("--open-accent", teamColor(leader.team, { text: true }));
  root.dataset.team = leader.team;

  root.querySelector("#open-kicker").textContent =
    `After ${run} of ${total} rounds, the model projects one champion.`;

  // Split so the surname can carry the team colour without a gradient.
  const title = root.querySelector("#open-title");
  const [first, ...rest] = (leader.name || "").split(" ");
  const given = document.createElement("span");
  given.className = "open-given";
  given.textContent = first;
  const family = document.createElement("span");
  family.className = "open-family";
  family.textContent = rest.join(" ");
  title.replaceChildren(given, family);

  const stats = root.querySelector("#open-stats");
  stats.replaceChildren();
  const rows = [
    { k: "Title probability", v: leader.championship_win_probability, kind: "pct" },
    { k: "Projected points", v: leader.predicted_points, kind: "num" },
    { k: "Points today", v: leader.current_real_points, kind: "num" },
    { k: "Wins", v: leader.current_wins, kind: "num" },
  ];
  for (const r of rows) {
    const dt = document.createElement("dt");
    dt.textContent = r.k;
    const dd = document.createElement("dd");
    dd.className = "num";
    if (!Number.isFinite(r.v)) {
      dd.textContent = "—";
    } else if (r.kind === "pct") {
      dd.textContent = pct(r.v);
      countUpWhenVisible(dd, r.v * 100, { decimals: 1, suffix: "%" });
    } else {
      dd.textContent = pts(r.v);
      countUpWhenVisible(dd, r.v, { decimals: Number.isInteger(r.v) ? 0 : 1 });
    }
    stats.append(dt, dd);
  }

  // Driver render is the static composition — and the fallback the 3D car
  // degrades to when WebGL is unavailable or motion is reduced.
  const photo = data.driver_images?.[leader.driver_id];
  let fig = root.querySelector(".open-figure");
  if (photo) {
    if (!fig) {
      fig = document.createElement("img");
      fig.className = "open-figure";
      fig.alt = "";
      fig.decoding = "async";
      root.append(fig);
    }
    fig.src = photo;
  } else {
    fig?.remove();
  }

  mountCar(root.querySelector("#open-3d"), teamColor(leader.team)).catch(() => {
    const m = root.querySelector("#open-3d");
    if (m) m.dataset.fallback = "";
  });

  return true;
}
