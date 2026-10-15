import { LAYERS, type LayerName } from "./geometry.js";

export const DURATION = 8.4;
const clamp = (n: number) => Math.max(0, Math.min(1, n));
export const smooth = (n: number) => { const t = clamp(n); return t*t*(3-2*t); };
export const revealAt = (time: number, start: number, duration = .55) => smooth((time-start)/duration);

// A single timeline owns all properties; replay reconstructs the same zero pose.
export function layerStateAt(name: LayerName, time: number) {
  const c = LAYERS[name];
  const appear = revealAt(time, c.start, name === "data" ? .70 : .80);
  const arrive = revealAt(time, c.start, 1.25);
  const assemble = revealAt(time, 7.15, 1.25);
  // The opened system holds until its contents have been read, then docks once.
  const opened = name === "data" ? [-.08, .03, -.10] : name === "rules" ? [-.03, .07, -.12] : name === "web" ? [0, -.03, .12] : [.10, -.025, .12];
  return {
    opacity: appear,
    position: c.end.map((v, i) => v + c.offset[i]*(1-arrive) + opened[i]*(1-assemble)) as [number, number, number],
    rotationX: name === "rules" ? -.055*(1-arrive) : 0,
    rotationY: name === "mobile" ? -.035*(1-arrive) : 0,
  };
}

export function phaseAt(time: number) {
  return time < 2.05 ? "data" : time < 4.05 ? "rules" : time < 5.85 ? "web" : time < 7.15 ? "mobile" : time < DURATION ? "align" : "final";
}
