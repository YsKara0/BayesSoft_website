import type { ModuleId } from "./processAssemblyGeometry";

export type AssemblyPhase = "initialSeparated" | "assembling" | "assembled" | "hoverSeparated" | "reassembling";
export type AssemblyEvent = "prepare" | "enter" | "pointerEnter" | "pointerLeave" | "finished" | "reset";

export function advanceAssembly(phase: AssemblyPhase, event: AssemblyEvent, pointerInside = false): AssemblyPhase {
  if (event === "reset") return "assembled";
  if (event === "prepare" && phase === "assembled") return "initialSeparated";
  if (event === "enter" && phase === "initialSeparated") return "assembling";
  if (event === "pointerEnter" && (phase === "assembled" || phase === "reassembling")) return "hoverSeparated";
  if (event === "pointerLeave" && phase === "hoverSeparated") return "reassembling";
  if (event === "finished" && (phase === "assembling" || phase === "reassembling")) return pointerInside ? "hoverSeparated" : "assembled";
  return phase;
}

const entranceOffsets: Record<ModuleId, [number, number]> = { understand: [-32, 0], design: [0, -28], build: [28, 4], operate: [0, 28] };
const hoverOffsets: Record<ModuleId, [number, number]> = { understand: [-12, 0], design: [0, -12], build: [12, 2], operate: [0, 12] };

export function assemblyTarget(id: ModuleId, phase: AssemblyPhase, travelScale = 1) {
  const offsets = phase === "initialSeparated" ? entranceOffsets[id] : phase === "hoverSeparated" ? hoverOffsets[id] : [0, 0];
  return { x: Math.round(offsets[0] * travelScale), y: Math.round(offsets[1] * travelScale) };
}

export function assemblyTransition(phase: AssemblyPhase, index: number) {
  const ease = [.22, 1, .36, 1] as const;
  if (phase === "assembling") return { duration: .55, delay: index * .25, ease };
  if (phase === "hoverSeparated" || phase === "reassembling") return { duration: .38, delay: 0, ease };
  return { duration: 0, delay: 0, ease };
}
