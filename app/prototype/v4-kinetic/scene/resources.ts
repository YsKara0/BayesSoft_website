import { BoxGeometry, CylinderGeometry, MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export function createResources() {
  const geometries = {
    unit: new BoxGeometry(1, 1, 1),
    core: new RoundedBoxGeometry(1.62, 2.5, 0.10, 3, 0.028),
    wing: new RoundedBoxGeometry(1.15, 2.5, 0.075, 3, 0.025),
    card: new RoundedBoxGeometry(0.59, 0.70, 0.035, 2, 0.015),
    shaft: new CylinderGeometry(0.043, 0.043, 2.60, 16),
    collar: new CylinderGeometry(0.066, 0.066, 0.09, 16),
  };
  const materials = {
    white: new MeshPhysicalMaterial({ color: "#f5f5f0", roughness: 0.38, metalness: 0.02, clearcoat: 0.12, clearcoatRoughness: 0.5 }),
    face: new MeshStandardMaterial({ color: "#e4e7e4", roughness: 0.7 }),
    mineral: new MeshStandardMaterial({ color: "#aeb3af", metalness: 0.45, roughness: 0.38 }),
    ink: new MeshStandardMaterial({ color: "#56636a", roughness: 0.6 }),
    blue: new MeshPhysicalMaterial({ color: "#8aadc2", metalness: 0.12, roughness: 0.33 }),
    line: new MeshStandardMaterial({ color: "#b7c2c4", roughness: 0.8 }),
  };
  return {
    geometries, materials,
    dispose() {
      Object.values(geometries).forEach((geometry) => geometry.dispose());
      Object.values(materials).forEach((material) => material.dispose());
    },
  };
}

export type Resources = ReturnType<typeof createResources>;
