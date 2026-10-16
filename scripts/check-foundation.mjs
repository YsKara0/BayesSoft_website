import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve, dirname, join } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { verifyProductionExport } from "./verify-production-export.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(import.meta.url);
const cache = new Map();
function evaluate(source, filename) {
  const cjsModule = { exports: {} };
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  const localRequire = name => {
    if (name.startsWith("@/")) return load(resolve(root, name.slice(2)));
    if (name.startsWith(".")) return load(resolve(dirname(filename), name));
    return require(name);
  };
  new Function("require", "module", "exports", js)(localRequire, cjsModule, cjsModule.exports);
  return cjsModule.exports;
}
function load(filename) {
  if (!existsSync(filename)) filename += ".ts";
  if (!cache.has(filename)) cache.set(filename, evaluate(readFileSync(filename, "utf8"), filename));
  return cache.get(filename);
}

const { translations } = load(resolve(root, "data/i18n.ts"));
const baselineSource = execFileSync("git", ["show", "1218e58:data/i18n.ts"], { cwd: root, encoding: "utf8" });
const baseline = evaluate(baselineSource, resolve(root, "data/i18n.ts")).translations;
const { getSelectedProjects } = load(resolve(root, "data/selectedProjects.ts"));
const details = load(resolve(root, "data/projectDetails.ts")).projectDetails;
const prototypeCopy = load(resolve(root, "app/prototype/bs3p-homepage/i18n.ts")).homepageTranslations;
const expectedLive = ["https://drive.further-up.net", "https://www.reviel.com.tr/", "https://metekmakina.com/urunler"];
// BS3P-031: approved navigation labels; all other legacy copy stays frozen.
const approvedAboutLabels = { tr: "Hakkımızda", en: "About Us", de: "Über uns" };
for (const locale of ["tr", "en", "de"]) {
  const { homepage, ...legacy } = translations[locale];
  assert.equal(legacy.nav.about, approvedAboutLabels[locale], `${locale} approved about label changed`);
  assert.deepEqual(legacy, {
    ...baseline[locale],
    nav: { ...baseline[locale].nav, about: approvedAboutLabels[locale] },
  }, `${locale} legacy translation changed`);
  const { pauseMotion, resumeMotion, motionReducedInfo, scenePaused, ...approvedText } = homepage.text;
  assert.ok(pauseMotion && resumeMotion && motionReducedInfo && scenePaused, `${locale} motion copy missing`);
  assert.deepEqual({ ...homepage, text: approvedText }, prototypeCopy[locale], `${locale} approved homepage copy changed`);
  const records = getSelectedProjects(locale);
  assert.deepEqual(records.map(record => record.id), ["furtherup-drive", "reviel", "metek-makina"]);
  records.forEach((record, index) => {
    assert.ok(record.category && record.description && record.name && record.technologyLabels.length);
    assert.equal(record.liveHref, expectedLive[index]);
    assert.equal(new URL(record.liveHref).protocol, "https:");
    assert.ok(existsSync(resolve(root, "public" + record.posterSrc)));
    assert.ok(existsSync(resolve(root, "public" + record.posterSmallSrc)));
    assert.equal(record.detailHref, index === 0 ? "/projeler/furtherup-drive" : null);
  });
}
assert.ok(details["atli-logistics"] && details["ai-chatbot"]);

// Fail-closed verifier checks against a tiny fixture, never alter the real export.
const fixture = await mkdtemp(join(tmpdir(), "bayessoft-export-check-"));
try {
  for (const name of ["index.html", "404.html", "robots.txt", "sitemap.xml", "CNAME", "og.png"]) {
    await writeFile(join(fixture, name), name === "index.html" ? '<link rel="canonical"><script type="application/ld+json">{}</script>' : "fixture");
  }
  await verifyProductionExport(fixture);
  await mkdir(join(fixture, "prototype"));
  await writeFile(join(fixture, "prototype", "hidden.html"), "demo");
  await assert.rejects(verifyProductionExport(fixture), /Prototype artifact rejected/);
  await rm(join(fixture, "prototype"), { recursive: true });
  await writeFile(join(fixture, "index.html"), '<script src="/prototype-assets/demo.js"></script>');
  await assert.rejects(verifyProductionExport(fixture), /Prototype dependency rejected/);
} finally { await rm(fixture, { recursive: true, force: true }); }
console.log("Foundation checks passed: legacy copy, TR/EN/DE, project URLs/posters/detail absence, preserved cases and fail-closed export.");
