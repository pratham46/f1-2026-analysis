// A circuit as a ribbon, traced from telemetry.
//
// The points are not a drawing. They are the positions the cars actually
// occupied, sampled from OpenF1 and reduced to a closed loop by
// enrich-circuit-paths.mjs — which is the whole reason this beats the flat PNG
// it replaces: the corner radii are measured, not illustrated.
//
// Integer [x, y] in OpenF1 track space, centred on the origin. Map to XZ so
// the loop lies on the ground plane and Y stays free for the camera.
//
// Z is NEGATED, and it is not optional. OpenF1 is a 2D map with +y up the
// page; a camera above the ground plane sees +z running DOWN the screen. Map
// y straight to z and every circuit renders mirrored — which is not an
// abstract wrongness, it is Albert Park with its final sector on the wrong
// side, and anyone who watches the sport sees it immediately.

import * as THREE from "three";
import { cssColorToRGB } from "../color.js";

// A lap normalised to 20 units, so every circuit arrives at the same on-screen
// size regardless of how long it really is. Monza and Monaco should frame
// identically; the shape is the subject, not the length.
const TRACK_SPAN = 20;
const RIBBON_HALF_WIDTH = 0.16;

export function buildTrack({ points, length }) {
  const scale = TRACK_SPAN / (length || 1);
  const vs = points.map(([x, y]) => new THREE.Vector3(x * scale, 0, -y * scale));

  // Centripetal Catmull-Rom, not the default. Telemetry sampling is uneven —
  // long straights between distant points, hairpins with points almost on top
  // of each other — and a uniform spline cusps and self-intersects exactly at
  // those tight clusters. Centripetal is the parameterisation that provably
  // cannot loop back on itself.
  const curve = new THREE.CatmullRomCurve3(vs, true, "centripetal", 0.5);

  const geometry = new THREE.TubeGeometry(
    curve,
    Math.min(points.length * 3, 900),
    RIBBON_HALF_WIDTH,
    4, // square section: a flat-topped ribbon, not a pipe
    true,
  );
  // --surface-3: the tarmac has to sit a step above the panel behind it or the
  // ribbon disappears and only the racing line survives, which loses the track
  // width the telemetry actually measured.
  const material = new THREE.MeshStandardMaterial({
    color: 0x3a3a3a,
    roughness: 0.85,
    metalness: 0,
  });

  // Framing has to come from the geometry, not a constant. Normalising lap
  // length equalises how much tarmac there is, not how it is spread: Monaco
  // folds into a small dense knot, Spa sprawls. A fixed camera distance clips
  // one and strands the other in the middle of an empty panel.
  geometry.computeBoundingSphere();
  const { center, radius } = geometry.boundingSphere;

  return { mesh: new THREE.Mesh(geometry, material), curve, center, radius };
}

/**
 * The racing line drawn over the ribbon in the team colour, so the loop reads
 * as a circuit rather than a grey noodle on a black panel.
 */
export function buildRacingLine(curve, color) {
  const geometry = new THREE.TubeGeometry(curve, 600, RIBBON_HALF_WIDTH * 0.28, 6, true);
  geometry.translate(0, RIBBON_HALF_WIDTH * 0.9, 0);
  // Team tokens are hex, but `teamColor()` falls back to `--ink-1` — oklch(),
  // which THREE.Color parses no better than Plotly did.
  const c = new THREE.Color(cssColorToRGB(color));
  return new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      color: c,
      roughness: 0.4,
      metalness: 0.1,
      emissive: c,
      emissiveIntensity: 0.35,
    }),
  );
}

/**
 * A dot riding the racing line, one lap per orbit. This is what earns the
 * motion: the panel is showing a lap being driven, not a logo turning.
 */
export function buildPaceMarker(color) {
  const c = new THREE.Color(cssColorToRGB(color));
  return new THREE.Mesh(
    new THREE.SphereGeometry(RIBBON_HALF_WIDTH * 0.75, 16, 12),
    new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.9 }),
  );
}

export function moveMarker(marker, curve, t) {
  const p = curve.getPointAt(t % 1);
  marker.position.set(p.x, RIBBON_HALF_WIDTH * 1.4, p.z);
}

/**
 * Angled overhead orbit rather than a chase camera along the curve.
 *
 * A flythrough was the obvious idea and it was tried: inside a 440px modal
 * panel it fills the frame with one anonymous corner, so the panel stops
 * answering the only question it is there to answer — which circuit is this.
 * The flat layout image it replaces did that better, and a replacement that
 * loses to what it replaced is not an upgrade. Above the plane the traced
 * shape stays legible and still reads as measured rather than drawn.
 */
export const TRACK_FOV = 28;

export function orbitTo(camera, { center, radius }, angle) {
  // Framed for a long lens, and that is the point. Pulling a wide camera in
  // close enough to fill the panel puts the near side of the loop at a
  // fraction of the far side's distance, and the perspective blowup clipped it
  // out of frame while the far side shrank — the circuit stopped being the
  // shape anyone recognises. TRACK_FOV backs the camera off and flattens the
  // projection toward the map a viewer already has in their head, keeping just
  // enough perspective for the orbit to read as a plane in space.
  //
  // Sized against the bounding radius so Monaco and Spa both fill the panel.
  camera.position.set(
    center.x + Math.sin(angle) * radius * 2.76,
    center.y + radius * 1.93, // ≈35° elevation: a map angle, not a flypast
    center.z + Math.cos(angle) * radius * 2.76,
  );
  camera.lookAt(center);
}

export function lightTrack(scene) {
  scene.add(new THREE.HemisphereLight(0xbfd4ff, 0x101010, 1.6));
  const key = new THREE.DirectionalLight(0xffffff, 1.2);
  key.position.set(4, 8, 3);
  scene.add(key);
}
