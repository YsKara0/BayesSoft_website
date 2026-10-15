import { readdir, readFile, stat } from "node:fs/promises";
import { resolve, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

export async function verifyProductionExport(directory) {
  const root = resolve(directory);
  const files = [];
  async function walk(current) {
    for (const item of await readdir(current, { withFileTypes: true })) {
      const path = resolve(current, item.name);
      if (item.isSymbolicLink()) throw new Error(`Export symlink rejected: ${path}`);
      if (item.isDirectory()) await walk(path); else files.push(path);
    }
  }
  await walk(root);
  for (const file of files) {
    const name = relative(root, file).split(sep).join("/");
    if (/(^|\/)(prototype(?:[./]|$)|prototype-assets(?:\/|$))/.test(name)) {
      throw new Error(`Prototype artifact rejected: ${name}`);
    }
    if (/\.(?:html|js|css|json|txt|xml)$/.test(name)) {
      const text = await readFile(file, "utf8");
      // Detect both normal URLs and JSON escaped slash representations.
      if (/\/(?:prototype\/|prototype-assets\/)/.test(text.replace(/\\\//g, "/"))) {
        throw new Error(`Prototype dependency rejected: ${name}`);
      }
    }
  }
  for (const file of ["index.html", "404.html", "sitemap.xml", "robots.txt", "CNAME", "og.png"]) {
    if (!(await stat(resolve(root, file))).isFile()) throw new Error(`Required export missing: ${file}`);
  }
  const html = await readFile(resolve(root, "index.html"), "utf8");
  if (!html.includes('rel="canonical"') || !html.includes('application/ld+json')) {
    throw new Error("Homepage SEO baseline is missing.");
  }
  return { files: files.length, prototypeArtifacts: 0, prototypeDependencies: 0 };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(await verifyProductionExport(process.argv[2] ?? "out")));
}
