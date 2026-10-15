import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = fileURLToPath(new URL("../../", import.meta.url));
const checked = spawnSync(process.execPath, ["node_modules/typescript/bin/tsc", "-p", "prototypes/bs3p-project-showcase-r2/tsconfig.check.json"], { cwd: root, stdio: "inherit" });
if (checked.status !== 0) process.exit(checked.status ?? 1);
const output = new URL("../../public/prototype-assets/bs3p-project-showcase-r2/", import.meta.url);
mkdirSync(output, { recursive: true });
// Emit only R2 sources. Shared R1 models/runtime stay byte-for-byte intact.
for (const name of readdirSync(new URL("./", import.meta.url)).filter(name => name.endsWith(".ts"))) {
  const source = readFileSync(new URL(name, import.meta.url), "utf8");
  const result = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 } });
  writeFileSync(new URL(name.replace(/\.ts$/, ".js"), output), result.outputText);
}
