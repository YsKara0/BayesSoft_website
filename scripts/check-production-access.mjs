import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, stat, readdir } from "node:fs/promises";
import { resolve, join, sep } from "node:path";
import { verifyProductionExport } from "./verify-production-export.mjs";

const root = resolve("out");
const exportReport = await verifyProductionExport(root);
// A static origin model: missing artifacts produce real 404, never an SPA fallback.
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const path = resolve(root, "." + pathname);
    if (path !== root && !path.startsWith(root + sep)) throw new Error("Outside export");
    for (const candidate of [path, path + ".html", join(path, "index.html")]) {
      try {
        if ((await stat(candidate)).isFile()) {
          response.writeHead(200); response.end(await readFile(candidate)); return;
        }
      } catch { /* Try the next static representation. */ }
    }
  } catch { /* Invalid or missing file: do not redirect to the homepage. */ }
  response.writeHead(404); response.end("Not found");
});
await new Promise(resolveReady => server.listen(0, "127.0.0.1", resolveReady));
try {
  const production = `http://127.0.0.1:${server.address().port}`;
  for (const path of ["/", "/hakkimizda", "/hizmetler", "/projeler", "/iletisim", "/projeler/furtherup-drive", "/robots.txt", "/sitemap.xml"]) {
    assert.equal((await fetch(production + path)).status, 200, path);
  }
  const denied = ["/prototype", "/prototype/", "/prototype.html", "/prototype/bs3p-homepage", "/prototype/bs3p-homepage/", "/prototype/bs3p-homepage.html", "/prototype/bs3p-homepage/index.html", "/prototype/bs3p-homepage.txt", "/%70rototype/bs3p-homepage", "/prototype-assets/bs3p-homepage/reviel-cover.png"];
  for (const path of denied) assert.equal((await fetch(production + path)).status, 404, path);
  const productionOnly = process.argv[2] === "--production-only";
  const dev = process.argv[2] ?? "http://127.0.0.1:3018";
  const routes = [];
  if (!productionOnly) {
    for (const item of await readdir("app/prototype", { withFileTypes: true })) {
      if (!item.isDirectory()) continue;
      const path = `/prototype/${item.name}`;
      assert.equal((await fetch(dev + path)).status, 200, `Development ${path}`);
      routes.push(path);
    }
    assert.equal((await fetch(dev + "/prototype-assets/bs3p-homepage/reviel-cover.png")).status, 200);
  }
  console.log(JSON.stringify({ export: exportReport, devRoutes: productionOnly ? "not checked" : routes, productionDenied: denied, productionRoutes: "200", prototypeDevAsset: productionOnly ? "not checked" : "200" }, null, 2));
} finally { await new Promise(resolveClosed => server.close(resolveClosed)); }
