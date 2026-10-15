import { GET as renderPrismDocument } from "../spatial-hero/route";
import { GET as renderSystemDocument } from "../bs3p-right-3d/route";
import { initializeSpatialHero } from "../spatial-hero/motion";
import { SPATIAL_FACES } from "../spatial-hero/faces";
import { renderIntegratedHeader } from "./header";
import { initializePrismDots } from "./prism";

export const dynamic = "force-static";

// Reuse the source documents' exact subtrees without editing their routes or
// forking their markup. Fail explicitly if a source boundary ever changes.
function sourceElement(html: string, marker: string, tag: string) {
  const start = html.indexOf(marker);
  if (start < 0) throw new Error(`Spatial Hero Plus: source marker missing: ${marker}`);
  const tokens = new RegExp(`<\\/?${tag}\\b[^>]*>`, "g");
  tokens.lastIndex = start;
  let depth = 0;
  for (let match = tokens.exec(html); match; match = tokens.exec(html)) {
    depth += match[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return html.slice(start, tokens.lastIndex);
  }
  throw new Error(`Spatial Hero Plus: unclosed source element: ${marker}`);
}

export async function GET() {
  const [prismHTML, systemHTML] = await Promise.all([
    renderPrismDocument().text(), renderSystemDocument().text(),
  ]);
  const header = renderIntegratedHeader(sourceElement(prismHTML, '<a class="wordmark"', "a"));
  let prism = sourceElement(prismHTML, '<section class="interaction-region"', "section");
  // Remove the entire fixed carrier, not just its paint. Keep all rotating
  // faces/end caps, their transforms and the source motion function untouched.
  for (const marker of [
    '<div class="upright upright-left"', '<div class="upright upright-right"',
    '<div class="fixed-cap cap-upper"', '<div class="fixed-cap cap-lower"',
    '<div class="fixed-axle"', '<div class="bearing bearing-left"', '<div class="bearing bearing-right"',
  ]) prism = prism.replace(sourceElement(prism, marker, "div"), "");
  let controls = sourceElement(prismHTML, '<div class="motion-controls"', "div");
  controls = controls.replace(sourceElement(controls, '<div class="motion-transport"', "div"), "");
  const services = sourceElement(prismHTML, '<ul class="service-labels"', "ul");
  const system = sourceElement(systemHTML, '<figure class="scene"', "figure")
    .replace('/prototype-assets/bs3p-right-3d/system-static.svg?rev=r1', '/prototype-assets/spatial-hero-plus/system-static.svg?rev=r3');
  return new Response(`<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="color-scheme" content="light">
  <title>BayesSoft — Spatial Hero Plus</title>
  <link rel="icon" href="data:,">
  <link rel="preload" href="/prototype-assets/spatial-hero/instrument-sans.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="stylesheet" href="/prototype-assets/bs3p-right-3d/study.css?rev=r1">
  <link rel="stylesheet" href="/prototype-assets/spatial-hero/hero.css">
  <link rel="stylesheet" href="/prototype-assets/spatial-hero-plus/hero-plus.css?rev=r3">
  <script type="importmap">{"imports":{"three":"/prototype-assets/bs3p-right-3d/vendor/three.module.js","three/addons/environments/RoomEnvironment.js":"/prototype-assets/bs3p-right-3d/vendor/RoomEnvironment.js"}}</script>
</head>
<body>
  <a class="skip-link" href="#hero">İçeriğe geç</a>
  <div class="study plus-shell">
    ${header}
    <main id="hero">
      <h1 class="sr-only">${SPATIAL_FACES[0].text}</h1>
      ${SPATIAL_FACES.slice(1).map(({text}) => `<p class="sr-only">${text}</p>`).join("\n      ")}
      <div class="plus-composition">
        <div class="prism-column">
          ${prism}
          ${controls}
        </div>
        <section class="system-column" aria-label="Yazılım sistemi görseli">
          ${system}
          <button id="scene-replay" class="scene-replay" type="button" aria-label="Yazılım sistemi animasyonunu yeniden oynat" title="Yazılım sistemi animasyonunu yeniden oynat" disabled><span class="sr-only">Yazılım sistemi animasyonunu yeniden oynat</span></button>
          <button id="scene-final-state" type="button" hidden tabindex="-1" aria-hidden="true">Son görünüm</button>
          <p id="scene-status" class="sr-only" role="status" aria-live="polite">Sahne hazırlanıyor</p>
        </section>
      </div>
      <footer class="plus-footer">${services}</footer>
    </main>
  </div>
  <script>(${initializePrismDots.toString()})(${initializeSpatialHero.toString()},${JSON.stringify(SPATIAL_FACES.map(({text}) => text))});</script>
  <script type="module" src="/prototype-assets/spatial-hero-plus/entry.js?rev=r3"></script>
</body>
</html>`, {headers:{"Content-Type":"text/html; charset=utf-8"}});
}
