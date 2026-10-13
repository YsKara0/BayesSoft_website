import { ExtrudeGeometry, Shape } from "three";

export type Point = readonly [number, number];
export type Vector = readonly [number, number, number];

// Shared architectural sections. A narrow reveal, rather than puzzle teeth,
// separates the four pieces around a single offset courtyard.
export const MODULES = [
  {
    name: "Web",
    color: "#eeede7",
    profile: [[-1.8, 0.07], [1.8, 0.07], [1.8, 0.48], [0.2, 0.48], [0.2, 0.34], [-1.8, 0.34]],
    depth: 1.8, z: 0,
    offset: [-0.5, 0.12, 1.15], rotation: [0, -0.14, 0],
    arrival: 0, departure: 3,
  },
  {
    name: "Mobil",
    color: "#b9b5ab",
    profile: [[-1.62, 0.4], [-0.99, 0.4], [-0.99, 2.03], [-0.26, 2.03], [-0.26, 2.48], [-1.62, 2.48]],
    depth: 1.12, z: -0.24,
    offset: [-1.05, 0.35, -0.6], rotation: [0, 0.26, -0.1],
    arrival: 1, departure: 2,
  },
  {
    name: "Yapay zekâ",
    color: "#f9f8f2",
    profile: [[-0.2, 2.03], [1.22, 2.03], [1.22, 1.25], [1.8, 1.25], [1.8, 2.48], [-0.2, 2.48]],
    depth: 1.12, z: -0.24,
    offset: [0.4, 1.15, -0.32], rotation: [0.12, -0.2, 0.07],
    arrival: 2, departure: 1,
  },
  {
    name: "Özel yazılım",
    color: "#94b6cc",
    profile: [[0.36, 0.54], [1.8, 0.54], [1.8, 1.19], [1.22, 1.19], [1.22, 0.87], [0.36, 0.87]],
    depth: 1.12, z: 0.18,
    offset: [1.12, 0.35, 0.65], rotation: [-0.05, -0.3, 0.12],
    arrival: 3, departure: 0,
  },
] as const;

export function createModuleGeometry(module: (typeof MODULES)[number]) {
  const shape = new Shape();
  module.profile.forEach(([x, y], index) => {
    if (index === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  });
  shape.closePath();
  const geometry = new ExtrudeGeometry(shape, {
    depth: module.depth - 0.06,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.025,
    bevelThickness: 0.03,
    curveSegments: 1,
  });
  geometry.computeBoundingBox();
  const bounds = geometry.boundingBox!;
  const center: Vector = [
    (bounds.min.x + bounds.max.x) / 2,
    (bounds.min.y + bounds.max.y) / 2,
    module.z,
  ];
  geometry.translate(-center[0], -center[1], -(module.depth - 0.06) / 2);
  return { geometry, center };
}
