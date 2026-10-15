import * as THREE from "three";

export type LayerName = "data" | "rules" | "web" | "mobile";
export const LAYERS: Record<LayerName, {
  width: number; height: number; depth: number; color: string;
  edge: string; accent: string;
  end: readonly [number, number, number]; offset: readonly [number, number, number]; start: number;
}> = {
  data: { width: 2.1, height: 2.5, depth: .13, color: "#dce5ee", edge: "#93a5b7", accent: "#647b91", end: [-3.20, -.12, -.55], offset: [-.18, .12, -.26], start: .12 },
  rules: { width: 4.2, height: 1.45, depth: .13, color: "#eef1f5", edge: "#a9b4c2", accent: "#d49355", end: [-.12, 1.69, -.12], offset: [-.12, .16, -.35], start: 2.05 },
  web: { width: 4.9, height: 2.72, depth: .13, color: "#ffffff", edge: "#a7b7c8", accent: "#285bd6", end: [.53, -.43, .52], offset: [.12, -.18, .28], start: 4.05 },
  mobile: { width: 1.65, height: 2.38, depth: .13, color: "#fafbff", edge: "#abb4cf", accent: "#7b87d6", end: [3.75, -.83, .97], offset: [.25, -.12, .26], start: 5.85 },
};

/** A thin manufactured surface with a real narrow bevel, not a thick card. */
export function surfaceGeometry(width: number, height: number, depth: number) {
  const shape = new THREE.Shape();
  const x = -width / 2, y = -height / 2, r = .045;
  shape.moveTo(x + r, y);
  shape.lineTo(x + width - r, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + r);
  shape.lineTo(x + width, y + height - r);
  shape.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  shape.lineTo(x + r, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: depth - .020, bevelEnabled: true, bevelSize: .010,
    bevelThickness: .010, bevelSegments: 3, curveSegments: 4, steps: 1,
  });
  geometry.translate(0, 0, -depth / 2 + .010);
  return geometry;
}

