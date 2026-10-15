import { cp, mkdir, mkdtemp, rm, symlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { verifyProductionExport } from "./verify-production-export.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const workspace = await mkdtemp(join(tmpdir(), "bayessoft-production-"));
const output = resolve(root, "out");
const trees = ["app", "components", "data", "assets", "public", "lib", "types"];
const configs = ["package.json", "package-lock.json", "next.config.mjs", "tsconfig.json", "tailwind.config.ts", "postcss.config.mjs", "eslint.config.mjs"];
try {
  for (const name of [...trees, ...configs]) {
    const source = resolve(root, name);
    if (!existsSync(source)) continue;
    await cp(source, join(workspace, name), {
      recursive: true,
      filter(path) {
        const parts = relative(root, path).split(sep);
        return !(parts[0] === "app" && parts[1] === "prototype")
          && !(parts[0] === "public" && parts[1] === "prototype-assets")
          && !parts.some(part => part.startsWith(".env"));
      },
    });
  }
  // Use existing dependencies; no installation, copied secrets or source mutation.
  await symlink(resolve(root, "node_modules"), join(workspace, "node_modules"), "dir");
  const build = spawnSync(process.execPath, [resolve(root, "node_modules/next/dist/bin/next"), "build"], {
    cwd: workspace, stdio: "inherit", env: { ...process.env, NODE_ENV: "production" },
  });
  if (build.status !== 0) throw new Error(`Production build failed (${build.status ?? build.signal}).`);
  const staged = join(workspace, "out");
  const result = await verifyProductionExport(staged);
  // Replace only generated output after the new artifact passes verification.
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  await cp(staged, output, { recursive: true });
  console.log("Verified production export:", JSON.stringify(result));
} finally {
  await rm(workspace, { recursive: true, force: true });
}
