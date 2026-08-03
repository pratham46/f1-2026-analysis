// Renderer lifecycle, owned in one place.
//
// Every 3D feature goes through this, so the teardown is written once. A WebGL
// context is not garbage: browsers cap them at around 16 and start dropping the
// oldest, so a modal that creates one per open eventually kills its own
// earlier canvases. dispose() gives the context back explicitly.
//
// Sizing is driven by ResizeObserver, not window resize. A stage mounted in a
// modal has zero width until the dialog is laid out, and a renderer sized 0
// draws nothing — the same trap that crushes Plotly bars against the axis.

import * as THREE from "three";

export const webglAvailable = () => {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
};

export function createStage(mount, { onFrame, fov = 45, far = 1000 } = {}) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  // Cap at 2: beyond that the cost is quadratic and nobody can see it.
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(1, 1, false);
  // Studio lighting plus an environment map overruns 1.0 on any glossy panel,
  // and clipped highlights read as white plastic rather than paint. ACES rolls
  // the top end off instead of clamping it, which is the whole difference
  // between a rendered car and a lit one.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.domElement.style.cssText = "display:block;width:100%;height:100%";
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(fov, 1, 0.1, far);

  let sized = false;
  const resize = () => {
    const w = mount.clientWidth;
    const h = mount.clientHeight;
    if (w < 1 || h < 1) return false;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    sized = true;
    return true;
  };

  let running = false;
  const start = () => {
    if (running || disposed) return;
    if (!sized && !resize()) return; // nothing to draw into yet
    running = true;
    renderer.setAnimationLoop(() => {
      onFrame?.();
      renderer.render(scene, camera);
    });
  };
  const stop = () => {
    if (!running) return;
    running = false;
    renderer.setAnimationLoop(null);
  };

  const ro = new ResizeObserver(() => {
    if (resize() && visible) start();
  });
  ro.observe(mount);

  // Off-screen and background tabs both cost frames; neither is observable.
  let visible = false;
  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !document.hidden) start();
    else stop();
  });
  io.observe(mount);

  const onVisibility = () => {
    if (document.hidden) stop();
    else if (visible) start();
  };
  document.addEventListener("visibilitychange", onVisibility);

  let disposed = false;
  function dispose() {
    if (disposed) return;
    disposed = true;
    stop();
    ro.disconnect();
    io.disconnect();
    document.removeEventListener("visibilitychange", onVisibility);
    scene.traverse((o) => {
      o.geometry?.dispose?.();
      const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
      for (const m of mats) {
        for (const v of Object.values(m)) v?.isTexture && v.dispose();
        m.dispose();
      }
    });
    scene.clear();
    renderer.dispose();
    // dispose() alone leaves the context alive until GC. Say so explicitly,
    // or twenty modal opens exhaust the browser's context budget.
    renderer.forceContextLoss();
    renderer.domElement.remove();
  }

  resize();
  return { scene, camera, renderer, dispose, resize };
}
