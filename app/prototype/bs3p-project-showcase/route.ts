import { ProjectShowcase } from "./ProjectShowcase";
import { showcaseProjects } from "./project-data";

export const dynamic = "force-static";

export function GET() {
  return new Response(`<!doctype html><html lang="tr"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="robots" content="noindex,nofollow"><title>BayesSoft — Seçili projeler</title>
    <link rel="preload" href="/prototype-assets/spatial-hero/instrument-sans.ttf" as="font" type="font/ttf" crossorigin>
    <link rel="stylesheet" href="/prototype-assets/bs3p-project-showcase/showcase.css">
  </head><body class="ps-page">
    <a class="ps-skip" href="#project-showcase">Projelere geç</a>
    <header class="ps-header"><a class="ps-wordmark" href="/" aria-label="BayesSoft ana sayfa">BayesSoft</a><a class="ps-all-projects" href="/projeler" data-site-locale="tr">Tüm projeler</a></header>
    <main>${ProjectShowcase({ id: "project-showcase", projects: showcaseProjects })}</main>
    <script type="module" src="/prototype-assets/bs3p-project-showcase/entry.js"></script>
  </body></html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
