import spatialImage from "@/assets/hero/bayessoft-spatial-v1.png";
import { initializeSpatialHero } from "./motion";
import { SPATIAL_FACES } from "./faces";
import { initializeSpatialVideo } from "./video";

// Route Handlers bypass layouts: the production chrome and global CSS stay intact.
// The response is deterministic and compatible with this project's static export.
export const dynamic = "force-static";

export function GET() {
  const html = `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="color-scheme" content="light">
  <title>BayesSoft — Spatial Hero Prototipi</title>
  <link rel="icon" href="data:,">
  <link rel="preload" href="/prototype-assets/spatial-hero/instrument-sans.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="stylesheet" href="/prototype-assets/spatial-hero/hero.css">
</head>
<body>
  <a class="skip-link" href="#hero">İçeriğe geç</a>
  <div class="prototype-shell">
    <header class="prototype-header">
      <a class="wordmark" href="/" aria-label="BayesSoft ana sayfa">BayesSoft</a>
      <div class="header-links">
        <nav class="desktop-nav" aria-label="Ana gezinme">
          <a href="/projeler">Projeler</a><a href="/hizmetler">Hizmetler</a><a href="/iletisim">İletişim</a>
        </nav>
        <a class="contact-action" href="/iletisim">Birlikte çalışalım</a>
      </div>
      <details class="mobile-nav">
        <summary>Menü</summary>
        <nav aria-label="Mobil gezinme">
          <a href="/projeler">Projeler</a><a href="/hizmetler">Hizmetler</a><a href="/iletisim">İletişim</a>
          <a class="mobile-contact" href="/iletisim">Birlikte çalışalım</a>
        </nav>
      </details>
    </header>
    <main id="hero">
      <h1 class="sr-only">${SPATIAL_FACES[0].text}</h1>
      ${SPATIAL_FACES.slice(1).map(({ text }) => `<p class="sr-only">${text}</p>`).join("\n      ")}
      <div class="hero-composition">
        <div class="architectural-stage">
        <section class="interaction-region" aria-label="Dört yüzlü tipografi prizması">
          <div class="architectural-object" data-face="0" data-angle="0" data-reduced="false" aria-hidden="true">
            <div class="upright upright-left"></div><div class="upright upright-right"></div>
            <div class="fixed-cap cap-upper"><div class="return-plane"></div><div class="cap-surface"></div></div>
            <div class="fixed-axle"></div>
            <div class="bearing bearing-left"></div><div class="bearing bearing-right"></div>
            <div class="plate-space">
              <div class="rotating-plate">
                ${SPATIAL_FACES.map(({ lines }, index) => `<div class="plate-face face-${index}" data-active="${index === 0}"><p class="face-heading">${lines.join("<br>")}</p></div>`).join("\n                ")}
                <div class="prism-end end-left"></div><div class="prism-end end-right"></div>
              </div>
            </div>
            <div class="fixed-cap cap-lower"><div class="return-plane"></div><div class="cap-surface"></div></div>
          </div>
          <noscript><ul class="fallback-note">${SPATIAL_FACES.slice(1).map(({ text }) => `<li>${text}</li>`).join("")}</ul></noscript>
        </section>
        <figure class="hero-visual" role="img" aria-label="Web, mobil, yapay zekâ ve özel yazılımı temsil eden açık renkli mimari paneller.">
          <video class="hero-video" data-source="/videos/bayessoft-spatial-motion-v1.mp4" width="1920" height="1080" autoplay muted loop playsinline preload="metadata" poster="${spatialImage.src}" aria-hidden="true" hidden></video>
          <img class="hero-video-fallback" src="${spatialImage.src}" width="${spatialImage.width}" height="${spatialImage.height}" fetchpriority="high" decoding="async" alt="">
        </figure>
        </div>
      <div class="hero-footer">
        <ul class="service-labels" aria-label="Hizmetlerimiz"><li>Web</li><li>Mobil</li><li>Yapay zekâ</li><li>Özel yazılım</li></ul>
        <div class="motion-controls" hidden>
          <div class="motion-transport">
            <button class="motion-toggle" type="button" aria-describedby="motion-help">Dönüşü durdur</button>
            <button class="motion-next" type="button" aria-label="Sonraki metin yüzünü göster"><svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d="m8 5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg></button>
          </div>
            <div class="face-controls" role="group" aria-label="Metin yüzünü seç">
              ${SPATIAL_FACES.map(({ text }, index) => `<button type="button" data-select-face="${index}" aria-label="${index + 1}. yüz: ${text}" aria-pressed="${index === 0}"><span class="face-dot" aria-hidden="true"></span></button>`).join("\n              ")}
            </div>
            <p id="motion-help" class="motion-status sr-only">Otomatik geçiş</p>
            <p class="sr-only manual-announcement" role="status" aria-live="polite" aria-atomic="true"></p>
        </div>
      </div>
      </div>
    </main>
  </div>
  <script>(${initializeSpatialHero.toString()})(${JSON.stringify(SPATIAL_FACES.map(({ text }) => text))});</script>
  <script>(${initializeSpatialVideo.toString()})();</script>
</body>
</html>`;
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
