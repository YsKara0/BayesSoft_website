import { build, context } from "esbuild";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const options = {
  absWorkingDir: projectRoot,
  entryPoints: ["app/prototype/v4-modular/scene/entry.tsx"],
  outfile: resolve(projectRoot, "public/prototype-assets/v4-modular/experiment.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2020",
  jsx: "automatic",
  minify: true,
  define: { "process.env.NODE_ENV": '"production"' },
  legalComments: "external",
  logLevel: "info",
};

if (process.argv.includes("--watch")) {
  const watcher = await context(options);
  await watcher.watch();
  console.log("Modular Assembly: kaynak değişiklikleri izleniyor.");
} else {
  await build(options);
}
