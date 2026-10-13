import { MODULES } from "./geometry";

// Same sections and assembled placement as the WebGL object. No remote asset.
export function fallbackSvg() {
  const project = (x: number, y: number, z: number) =>
    `${(320 + (x * 0.83 - z * 0.56) * 91).toFixed(1)},${(318 + (x * 0.2 + z * 0.3 - y * 0.94) * 91).toFixed(1)}`;
  const parts = [MODULES[1], MODULES[2], MODULES[0], MODULES[3]].map((module) => {
    const back = module.z - module.depth / 2;
    const front = module.z + module.depth / 2;
    const faces = module.profile.map(([x, y], index) => {
      const [nextX, nextY] = module.profile[(index + 1) % module.profile.length];
      if (!(nextX < x || nextY > y)) return "";
      return `<polygon points="${project(x, y, front)} ${project(nextX, nextY, front)} ${project(nextX, nextY, back)} ${project(x, y, back)}" fill="${module.color}" stroke="#8d938c" stroke-opacity=".16" stroke-width=".6"/>`;
    }).join("");
    return `${faces}<polygon points="${module.profile.map(([x, y]) => project(x, y, front)).join(" ")}" fill="${module.color}" stroke="#8d938c" stroke-opacity=".22" stroke-width=".7"/>`;
  }).join("");
  return `<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><radialGradient id="contact"><stop stop-color="#625e55" stop-opacity=".2"/><stop offset="1" stop-color="#625e55" stop-opacity="0"/></radialGradient></defs><ellipse cx="316" cy="328" rx="200" ry="44" fill="url(#contact)"/>${parts}</svg>`;
}
