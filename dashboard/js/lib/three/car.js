// The Cold Open car.
//
// Modelled in Blender and exported as glTF (`assets/f1-2026-car.glb`), not
// assembled from primitives at runtime. The procedural version this replaces
// looked like a toy: an F1 car reads by its planform and the way the nose
// falls to the front wing, and boxes and cylinders cannot express either.
//
// Not a downloaded asset. A commercial model is a licensing problem, and a
// bought mesh could not recolour itself from the projected champion's team
// token — which is the only reason this is 3D rather than a photograph.
// Built to 2026 regulations: 1.90 m wide, 3.40 m wheelbase, 18-inch rims.
//
// The Blender material named "Livery" is the contract between the two halves:
// everything painted in team colour uses it, and nothing else does.

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { cssColorToRGB } from "../color.js";

const MODEL_URL = new URL("../../../assets/f1-2026-car.glb", import.meta.url).href;
const LIVERY_MATERIAL = "Livery";

let cached;

/**
 * @param {string} color  Any CSS colour — a team token's value, or the
 *   `--ink-1` fallback `teamColor()` returns for an unknown team.
 * @returns {Promise<THREE.Group>} centred on the origin, sitting on y = 0.
 */
export async function loadCar(color) {
  cached ||= new GLTFLoader().loadAsync(MODEL_URL);
  const gltf = await cached;

  // Clone so a second mount cannot recolour the first one's material.
  const car = gltf.scene.clone(true);
  // The team tokens are hex, but `teamColor()` falls back to `--ink-1` — which
  // is oklch(), and THREE.Color parses that no better than Plotly did. Convert
  // here rather than trusting every caller to remember.
  const tint = new THREE.Color(cssColorToRGB(color));
  const seen = new Set();
  car.traverse((o) => {
    if (!o.isMesh) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    o.material = mats.map((m) => {
      if (m.name !== LIVERY_MATERIAL) return m;
      if (seen.has(m.uuid)) return m;
      const c = m.clone();
      c.color = tint;
      seen.add(c.uuid);
      return c;
    });
    if (o.material.length === 1) o.material = o.material[0];
  });

  // Blender builds the car from x = 0 at the nose. Centre it so rotation
  // spins about the car rather than swinging it around its own nose.
  const box = new THREE.Box3().setFromObject(car);
  const c = box.getCenter(new THREE.Vector3());
  car.position.set(-c.x, -box.min.y, -c.z);

  const pivot = new THREE.Group();
  pivot.add(car);
  return pivot;
}

/**
 * Studio lighting. The generated room environment gives the bodywork something
 * to reflect — without it a metalness-0.25 surface reads as flat plastic — and
 * costs no network request.
 */
export function lightCar(scene, renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  // The room is a white box. At full strength it washes the livery toward white
  // — the car rendered pale mint while the headline beside it, painted from the
  // same team token, was full cyan. One colour reading two values on one screen
  // breaks the rule the 3D exists to serve. Held down so the paint keeps its
  // own chroma and the environment only supplies highlights.
  scene.environmentIntensity = 0.35;

  const key = new THREE.DirectionalLight(0xffffff, 1.5);
  key.position.set(3, 5, 4);
  scene.add(key);

  // Low and behind, so the silhouette separates from a near-black page.
  const rim = new THREE.DirectionalLight(0xffffff, 1.0);
  rim.position.set(-5, 1.5, -4);
  scene.add(rim);
}
