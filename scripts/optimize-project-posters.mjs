// Reproducible production derivatives; source PNGs are never overwritten.
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const directory = resolve("public/projects/covers");
await mkdir(directory, { recursive: true });
const output = [];
for (const id of ["furtherup-drive", "reviel", "metek-makina"]) {
  const source = resolve(`assets/projects/${id}-cover.png`);
  const metadata = await sharp(source).metadata();
  for (const [label, width] of [["640", 640], ["large", 1080]]) {
    const path = resolve(directory, `${id}-cover-${label}.webp`);
    const result = await sharp(source).resize({ width, withoutEnlargement: true })
      .webp({ quality: 94, effort: 6, smartSubsample: true }).toFile(path);
    output.push({ id, label, sourceWidth: metadata.width, sourceHeight: metadata.height, width: result.width, height: result.height, bytes: result.size });
  }
}
await writeFile(resolve(directory, "derivatives.json"), JSON.stringify(output, null, 2) + "\n");
console.log(JSON.stringify(output, null, 2));
