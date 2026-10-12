export const moduleOrder = ["understand", "design", "build", "operate"] as const;
export type ModuleId = (typeof moduleOrder)[number];

type Geometry = { width: number; height: number; rail: number; top: number; bottom: number; depth: number; tab: number };

// All pieces use the same coordinate system and the same four joint dimensions.
// The paths traverse each mating boundary in opposite directions.
export function createAssemblyGeometry({ width: w, height: h, rail: x, top: t, bottom: b, depth: d, tab }: Geometry) {
  const r = 6;
  const outer = 14;
  const sideY = Math.round(t + (b - t) * .35);
  const topX = Math.round(x + (w - x) * .42);
  const baseX = Math.round(x + (w - x) * .76);
  const heelX = Math.round(x * .58);
  const half = tab / 2;
  const down = (cx: number, y: number) => `H ${cx + half + r} Q ${cx + half} ${y} ${cx + half} ${y + r} V ${y + d - r} Q ${cx + half} ${y + d} ${cx + half - r} ${y + d} H ${cx - half + r} Q ${cx - half} ${y + d} ${cx - half} ${y + d - r} V ${y + r} Q ${cx - half} ${y} ${cx - half - r} ${y}`;
  const downReverse = (cx: number, y: number) => `H ${cx - half - r} Q ${cx - half} ${y} ${cx - half} ${y + r} V ${y + d - r} Q ${cx - half} ${y + d} ${cx - half + r} ${y + d} H ${cx + half - r} Q ${cx + half} ${y + d} ${cx + half} ${y + d - r} V ${y + r} Q ${cx + half} ${y} ${cx + half + r} ${y}`;
  const up = (cx: number, y: number) => `H ${cx - half - r} Q ${cx - half} ${y} ${cx - half} ${y - r} V ${y - d + r} Q ${cx - half} ${y - d} ${cx - half + r} ${y - d} H ${cx + half - r} Q ${cx + half} ${y - d} ${cx + half} ${y - d + r} V ${y - r} Q ${cx + half} ${y} ${cx + half + r} ${y}`;
  const upReverse = (cx: number, y: number) => `H ${cx + half + r} Q ${cx + half} ${y} ${cx + half} ${y - r} V ${y - d + r} Q ${cx + half} ${y - d} ${cx + half - r} ${y - d} H ${cx - half + r} Q ${cx - half} ${y - d} ${cx - half} ${y - d + r} V ${y - r} Q ${cx - half} ${y} ${cx - half - r} ${y}`;
  const side = `V ${sideY - half - r} Q ${x} ${sideY - half} ${x + r} ${sideY - half} H ${x + d - r} Q ${x + d} ${sideY - half} ${x + d} ${sideY - half + r} V ${sideY + half - r} Q ${x + d} ${sideY + half} ${x + d - r} ${sideY + half} H ${x + r} Q ${x} ${sideY + half} ${x} ${sideY + half + r}`;
  const sideReverse = `V ${sideY + half + r} Q ${x} ${sideY + half} ${x + r} ${sideY + half} H ${x + d - r} Q ${x + d} ${sideY + half} ${x + d} ${sideY + half - r} V ${sideY - half + r} Q ${x + d} ${sideY - half} ${x + d - r} ${sideY - half} H ${x + r} Q ${x} ${sideY - half} ${x} ${sideY - half - r}`;
  const paths: Record<ModuleId, string> = {
    understand: `M ${outer} 0 H ${x} ${side} V ${b} ${down(heelX, b)} H 0 V ${outer} Q 0 0 ${outer} 0 Z`,
    design: `M ${x} 0 H ${w - outer} Q ${w} 0 ${w} ${outer} V ${t} ${down(topX, t)} H ${x} Z`,
    build: `M ${x} ${t} ${downReverse(topX, t)} H ${w} V ${b} ${upReverse(baseX, b)} H ${x} ${sideReverse} V ${t} Z`,
    operate: `M 0 ${b} ${downReverse(heelX, b)} ${up(baseX, b)} H ${w} V ${h - outer} Q ${w} ${h} ${w - outer} ${h} H ${outer} Q 0 ${h} 0 ${h - outer} Z`,
  };
  return { width: w, height: h, paths, joints: { sideY, topX, baseX, heelX } };
}

export const desktopGeometry = createAssemblyGeometry({ width: 800, height: 300, rail: 180, top: 72, bottom: 240, depth: 24, tab: 44 });
export const mobileGeometry = createAssemblyGeometry({ width: 500, height: 390, rail: 144, top: 74, bottom: 312, depth: 22, tab: 36 });
