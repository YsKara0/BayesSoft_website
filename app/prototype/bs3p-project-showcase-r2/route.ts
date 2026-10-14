import { selectedProjects } from "./project-data";
import { GalleryShowcase } from "./GalleryShowcase";

export const dynamic = "force-static";

export function GET() {
  return new Response(`<!doctype html><html lang="tr"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="robots" content="noindex,nofollow"><title>BayesSoft — Seçili projeler R2</title>
    <link rel="preload" href="/prototype-assets/spatial-hero/instrument-sans.ttf" as="font" type="font/ttf" crossorigin>
    <link rel="stylesheet" href="/prototype-assets/bs3p-project-showcase-r2/showcase.css">
  </head><body class="cy-page">
    <a class="cy-skip" href="#cylindrical-showcase">Projelere geç</a>
    <header class="cy-header"><a class="cy-wordmark" href="/" aria-label="BayesSoft ana sayfa">BayesSoft</a><a class="cy-all-projects" href="/projeler" data-site-locale="tr">Tüm projeler</a></header>
    <main>${GalleryShowcase(selectedProjects)}</main>
    <script type="module" src="/prototype-assets/bs3p-project-showcase-r2/entry.js"></script>
  </body></html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
