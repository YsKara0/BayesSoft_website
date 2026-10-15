// Explicit prototype preparation; never called by the production build.
import { mkdir, copyFile, readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../../", import.meta.url));
const vendor = path.join(root, "public/prototype-assets/bs3p-right-3d/vendor");
const pkg = JSON.parse(await readFile(path.join(root, "node_modules/three/package.json"), "utf8"));
if (pkg.version !== "0.180.0") throw new Error(`Expected pinned three 0.180.0, got ${pkg.version}`);
await mkdir(vendor, { recursive: true });
for (const file of ["three.module.js", "three.core.js"]) {
  await copyFile(path.join(root, "node_modules/three/build", file), path.join(vendor, file));
}
await copyFile(path.join(root, "node_modules/three/examples/jsm/environments/RoomEnvironment.js"), path.join(vendor, "RoomEnvironment.js"));
await copyFile(path.join(root, "node_modules/three/LICENSE"), path.join(vendor, "LICENSE.txt"));
const result = spawnSync(process.execPath, ["node_modules/typescript/bin/tsc", "-p", "prototypes/bs3p-right-3d/tsconfig.json"], { cwd: root, stdio: "inherit" });
process.exitCode = result.status ?? 1;
