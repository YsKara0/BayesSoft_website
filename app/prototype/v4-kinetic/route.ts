import { fallbackSvg } from "./scene/fallback";

// Standalone document: the production root layout and Experiment 01 stay intact.
export const dynamic = "force-static";

export function GET() {
  return new Response(`<!doctype html>
<html lang="tr"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><meta name="color-scheme" content="light">
<title>BayesSoft 4.0 — Kinetic Architecture</title><link rel="icon" href="data:,">
<link rel="stylesheet" href="/prototype-assets/v4-kinetic/experiment.css">
</head><body><main id="kinetic-experiment"><div class="initial-fallback" role="img" aria-label="Yan çalışma alanları aynı çekirdeğin çevresinde katlanan uyarlanabilir arayüz mekanizması.">${fallbackSvg()}<p>Kinetic Architecture · BayesSoft 4.0</p></div></main>
<script type="module" src="/prototype-assets/v4-kinetic/experiment.js"></script>
</body></html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
