import { fallbackSvg } from "./scene/fallback";

// A standalone document bypasses the site's root layout, fonts and chrome.
// The locally bundled React/R3F entry is built by prototype:v4-modular.
export const dynamic = "force-static";

export function GET() {
  return new Response(`<!doctype html>
<html lang="tr"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><meta name="color-scheme" content="light">
<title>BayesSoft 4.0 — Modular Assembly</title><link rel="icon" href="data:,">
<link rel="stylesheet" href="/prototype-assets/v4-modular/experiment.css">
</head><body><main id="experiment"><div class="initial-fallback" role="img" aria-label="Ortak bir mimari boşluğu çevreleyen dört beyaz, mineral gri ve yumuşak mavi modül.">${fallbackSvg()}<p>Modular Assembly · BayesSoft 4.0</p></div></main>
<script type="module" src="/prototype-assets/v4-modular/experiment.js"></script>
</body></html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
