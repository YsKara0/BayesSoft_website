import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import ts from "typescript";

const checked = spawnSync(process.execPath, ["node_modules/typescript/bin/tsc", "-p", "prototypes/bs3p-homepage/tsconfig.check.json", "--jsx", "preserve"], { stdio: "inherit" });
if (checked.status !== 0) process.exit(checked.status ?? 1);
for (const name of ["entry", "locale", "gallery"]) {
  const source = readFileSync(new URL(`./${name}.ts`, import.meta.url), "utf8");
  const result = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 } });
  writeFileSync(new URL(`../../public/prototype-assets/bs3p-homepage/${name}.js`, import.meta.url), result.outputText);
}
