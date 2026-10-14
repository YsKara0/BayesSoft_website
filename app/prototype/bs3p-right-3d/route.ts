// Independent HTML document: no production layout, hydration or global CSS.
export const dynamic = "force-static";

export function GET() {
  return new Response(`<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="color-scheme" content="light">
  <title>BayesSoft — İşinize göre kurulan sistem</title>
  <link rel="icon" href="data:,">
  <link rel="stylesheet" href="/prototype-assets/bs3p-right-3d/study.css?rev=r1">
  <script type="importmap">{"imports":{"three":"/prototype-assets/bs3p-right-3d/vendor/three.module.js","three/addons/environments/RoomEnvironment.js":"/prototype-assets/bs3p-right-3d/vendor/RoomEnvironment.js"}}</script>
</head>
<body>
  <main class="study">
    <header class="study-header">
      <a class="wordmark" href="/">BayesSoft</a>
      <span class="study-name">3.0+ / Sağ hero deneyi</span>
      <a class="reference-link" href="/prototype/spatial-hero">Mevcut hero'yu aç <span aria-hidden="true">↗</span></a>
    </header>
    <section class="composition" aria-labelledby="study-title">
      <div class="intro">
        <p class="intro-note">Özel yazılımın ortak yapısı</p>
        <h1 id="study-title">İşinize göre<br>kurulan sistem.</h1>
        <p class="description">Veriniz, iş kurallarınız ve kullanıcı deneyimi.<br>Birbirine bağlı, size göre tasarlanmış.</p>
      </div>
      <figure class="scene" data-mode="loading" data-ready="false" data-phase="data" role="img" aria-label="Veri kayıtlarını iş kuralları üzerinden ortak web ve mobil arayüzlere bağlayan üç katmanlı yazılım sistemi.">
        <div class="loading-placeholder" aria-hidden="true"><span class="loading-seat"></span><span>Sahne hazırlanıyor</span></div>
        <img class="static-art" src="/prototype-assets/bs3p-right-3d/system-static.svg?rev=r1" width="960" height="540" alt="" decoding="async" hidden>
        <div class="webgl-host" aria-hidden="true" hidden></div>
        <div class="surface-overlays" aria-hidden="true" hidden>
          <div class="surface-ui data-ui" data-surface="data">
            <div class="surface-title"><span class="layer-number">01</span>Veri</div>
            <div class="data-table"><div><i></i><span>Talep</span><em>Girdi</em></div><div class="selected"><i></i><span>Kayıt</span><em>Düzenli</em></div><div><i></i><span>Kaynak</span><em>Bağlı</em></div></div>
            <div class="data-baseline"><span></span><span></span><span></span></div>
          </div>
          <div class="surface-ui rules-ui" data-surface="rules">
            <div class="surface-title"><span class="layer-number">02</span>İş kuralları</div>
            <div class="rule-flow"><span>Girdi</span><b aria-hidden="true"></b><span class="rule-gate">Koşul</span><b aria-hidden="true"></b><span class="rule-result">Sonuç</span></div>
            <div class="rule-branch"><i></i><span>İhtiyaca göre</span></div>
          </div>
          <div class="surface-ui web-ui" data-surface="web">
            <div class="browser-bar"><span class="browser-dots"><i></i><i></i><i></i></span><span>Web</span><b></b></div>
            <div class="workspace"><div class="side-nav"><i class="nav-active"></i><i></i><i></i></div><div class="web-content"><div class="content-heading">Talep akışı<span>Özel akış</span></div><div class="record"><i></i><span>Talep alındı</span><b>Girdi</b></div><div class="record record-active"><i></i><span>Kayıt işlendi</span><b>Sonuç</b></div><div class="record"><i></i><span>Kullanıma hazır</span><b>Hazır</b></div><div class="content-footer"><span></span><span></span></div></div></div>
          </div>
          <div class="surface-ui mobile-ui" data-surface="mobile">
            <div class="mobile-header"><span>Mobil</span><i></i></div><div class="mobile-title">Talep akışı</div><div class="mobile-record"><i></i><span>Kayıt işlendi</span></div><div class="mobile-lines"><span>Aynı kayıt.</span><span>Aynı sistem.</span></div><div class="mobile-action"></div>
          </div>
        </div>
        <noscript><style>.static-art[hidden]{display:block!important}.loading-placeholder{display:none!important}</style></noscript>
      </figure>
    </section>
    <div class="study-footer">
      <ol class="layer-legend" aria-label="Sistemin katmanları">
        <li><span>01</span><div>Veri<small>Düzenli kayıtlar</small></div></li>
        <li><span>02</span><div>İş kuralları<small>İhtiyaca göre mantık</small></div></li>
        <li><span>03</span><div>Arayüz<small>Ortak web ve mobil deneyimi</small></div></li>
      </ol>
      <div class="motion-controls">
        <div class="buttons"><button id="replay" type="button" disabled><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 6a6 6 0 1 1-1 7M5 2v5H1"/></svg>Tekrar göster</button><button id="settle" type="button" disabled>Son görünüm</button></div>
        <p id="motion-status" role="status" aria-live="polite">Statik görünüm</p>
      </div>
    </div>
    <div class="study-meta"><p>Kavramsal görsel — müşteri ürünü değildir.</p><p>Bağımsız deney / BS3P-002</p></div>
  </main>
  <script type="module" src="/prototype-assets/bs3p-right-3d/entry.js?rev=r1"></script>
</body>
</html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
