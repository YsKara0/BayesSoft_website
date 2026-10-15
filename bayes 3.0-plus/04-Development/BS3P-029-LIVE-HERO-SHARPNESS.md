> **2026-10-16 / BS3P-029C güncellemesi:** Aşağıdaki rapor ilk Mac araştırmasının tarihsel kaydıdır. Windows DPR/zoom bekleme notları sonradan gelen verilerle aşılmıştır: kullanıcı DPR1, innerWidth1487, yaklaşık764×478 CSS /764×477 backing bildirdi; bu oturumda cap1,5 neden değildir. [[BS3P-029B-WINDOWS-HERO-SHARPNESS]] gerçek Windows A/B sonuçlarını içerir; doğrulanmış kazanan yok, mevcut A korunur. Mac’in sonraki salt okunur incelemesinde metinlerin HTML overlay olduğu, 0,045 PMREM uyarısının ortam haritasındaki22→20 örnek sınırından kaynaklandığı doğrulandı; metin bulanıklığıyla nedensel bağ kanıtlanmadı. 1487×900 macOS Chromium kontrolünde canvas779×486,875/779×486 ve y-ölçeği0,789474 görüldü; Windows764px ile aynı ölçüm değildir. DPR/malzeme/CSS değişikliği yapılmadı. Birleştirme ve kanıt sınırları: [[BS3P-029C-OBSIDIAN-RECORD-MERGE]].

# BS3P-029 — Live Hero Visual Sharpness

**Tarih:** 2026-10-15
**Durum:** DIAGNOSED — gerçek Windows DPR/zoom bilgisi ve kullanıcı karşılaştırması bekleniyor; uygulama düzeltmesi yapılmadı.
**Fix branch:** `fix/bs3p-029-hero-sharpness`.
**Taban / canlı SHA:** `db535966e27c53fe6095fe2760f520e163fcb033`; son başarılı Pagesrun38798593922,2026-10-15T20:03:11Z. GitHubmetadata saltokunur kontrol edildi. Master'ın ağacı yerel onaylıc3327e1 ile aynı; doğrudanmaster'da çalışılmadı. Kullanıcının önceki026belge değişiklikleri/untracked dosyaları korunarak ayrıfixbranch açıldı; commit/push/merge/deploy yok.

## Kısa sonuç

[Canlı](https://bayessoft.com.tr/) ile yerel onaylıproductionçıktısı (`http://127.0.0.1:3019/`) aynıviewport/DPR'de karşılaştırıldı.1920×1080/DPR1 sonhero görüntüsü **828×518PNG'de1.286.712RGBkanalın tamamında aynı**, pikselfark0. Deploy'a özgü kalite düşüşü bu ortamda görülmedi.

İki ayrı çözünürlük davranışı doğrulandı:
1. **SabitDPR2'de1.5üst sınırı:**828×517.5CSS alanı1242×776backing ile çiziliyor; native2x için1656×1035gerekirdi. Bu, geometrykenarlarında upsample/yumuşama üretebilecek bilinen performans tercihidir. Yeni canlıregresyon değil; yerelde de aynı.
2. **Açık sayfadaDPRdeğişimi:**DPR1→2 emülasyonunda canvas828×517'de kalıyor; efektifDPR1. `renderer.setPixelRatio` yalnız scene oluşturulurken çağrılıyor; resize sadece mevcutratio ile setSize yapıyor. DPR-only değişiminde figürCSSboyutu aynıysa ResizeObserver tetiklenmeyebilir. Resizeolayı/viewportdeğişimi sonrası da sabit828CSSalanında eski backing kaldı. Farklıölçekli monitöre taşıma/zoom senaryosu için gerçek kod eksikliği; kullanıcının Windows oturumunda bunun yaşandığı **henüz kanıtlanmadı**.

**24inç bilgisi tek başına DPR/Windowsölçekleme/zoom'u belirlemez.** Kullanıcıdan bu değerler asenkron soruldu; rapor anında gelmedi. MacOSChromium ölçümleri WindowsGPU/DirectWrite/ClearType sonucu diye sunulmaz. SabitDPR1'de canvas ölçüleri doğru; o durumda doğrudan1.5cap'i suçlamak veya keyfi supersampling uygulamak için kanıt yok.

## Ölçüm tablosu

Aşağıdakiler gerçekWindowscihazı değil, macOSChromium'da viewport/deviceScaleFactor kontrollü ölçümlerdir. Canlı ve yerel karşılıkları aynı:

| CSS viewport / DPR | Hero CSS | Canvas backing | Görüntü yolu |
|---|---|---|---|
|1920×1080 /1|828×517.5|828×517|WebGL|
|1536×864 /1.25|828×517.5|1035×646|WebGL|
|2560×1440 /1|828×517.5|828×517|WebGL|
|1920×1080 /2|828×517.5|1242×776|WebGL /1.5cap|
|390×844 /3|Mobilresponsivealan|Canvas yok|StatikSVG|
|Açık1920×1080pencerede1→2|828×517.5|828×517'de kaldı|WebGL, eskiDPR|

İlkiki canlıörnekte ölçüm `MotionProvider` başlangıçpause/static→loading→webgl geçişinde erken alındı. Bunlar gerçekfallback kabul edilmedi; `data-mode=webgl` ve `data-ready=true` bekleyen hedeflikontrolle1920/2560satırları doğrulandı. Hamilkörnekler saklı, stableJSON bunları tamamlar.

Desktopta statikposter hidden, gerçekcanvasvar; CSSfilter ve canvastransform none. WebGLcontext antialias true/MSAAsamples4 (buChromiumortamında); kaynak `powerPreference:"low-power"`, `PCFSoftShadowMap/1024shadow`,1.5DPRcap içeriyor. Low-power biradaptörseçimhint'idir; ölçülen çözünürlüğü otomatikdüşürdüğü kanıtlanmadı, değiştirilmedi. Mobile<=899px/reduced-motion/savedpause/contextfailure hâllerinde mevcutSVGfallback tasarım gereğidir; Windowskullanıcısının fallback görüp görmediği onun oturumundan veri gelmeden belirlenemez.

Hero UI metinleri canvas içine çizilmiyor: `SystemLayers` DOM öğeleri `syncOverlays` ile CSSmatrix üzerinden panellere yerleşiyor. CanvasDPRartışı bu yazıların rasterizasyonunu otomatik düzeltmez. Kamera/kompozisyon/katmanpozları/8.4szamanlama ve onaylıboşluklar değiştirilmedi.

## Performans maliyeti ve öneri

- Mevcut828×517DPR1buffer428076pixel;1.5buffer963792pixel.1→1.5yaklaşık2.25katpixel.
-1.5→2 için963792→1713960pixel: **%77.84artış**. Bu, drawingbufferpixel/ilgili fillwork bütçesidir; aynıorandaGPUms/FPS/memory artışı ölçüldü demek değildir. MSAA/depth/shadow/programbelleği ayrı; gerçekWindowsGPUprofiling yapılmadı.
- CanvasDPR2'ye çıkarmanın veya standartDPI'da1.5supersampling yapmanın güvenli olduğu kanıtlanmadığından **kodda kalite/DPR/antialias/powerPreference ayarı yükseltilmedi**.
- Öncelikli küçükdüzeltme adayı: gerçekWindowsölçümünde staleDPR doğrulanırsa DPRdeğişimini izleyip mevcut `min(devicePixelRatio,1.5)` politikasıyla aynı sahneyi resize/render etmek; listenercleanup ve pausetime/idle korunmalı. Bu,1.5cap'i artırma önerisi değildir. ResizeObserver'ın CSSboyutu değişmeyen DPRgeçişlerini tek başına yakalayacağı varsayılmamalı.
- Windows'ta sabitDPR2 + efektif1.5 olduğu ve yeni netlikbeklentisi doğrulandığında cap2 veya boundedpixelbudget seçeneği ancak aynıWindowsGPU'da önce/sonraframeölçümüyle değerlendirilmelidir. SabitDPR1/backing1 ise farklıkök neden araştırılmadan çözünürlük artırılmaz.

## Galeri — yalnız teşhis

MevcutSafari'de kabul edilenSVGimage/13slice/WebKitprojection kodları ve posterassetleri **değişmedi**.
- Desktopstage864CSSpx/radius501.12; unwrappedcoverwidth yaklaşık332.35CSSpx,height415.44CSSpx.
- DPR1 ve1.25'te640×863 (Metek640×861) WebP;DPR2'de1080genişlikli largeWebP seçiliyor. Seçim kaynağı canlı/yereldeaynı; nominalpikselihtiyacı buölçülerde kaynakgenişliğini aşmıyor.
- SVGviewBox1280×1600 mantıksalkoordinattır; indirilmişbitmap1280piksel anlamına gelmez. GerçekdilimCSSgenişliği26.84px,13dilim/1.05overscan ve CSS3Dprojeksiyon korunur.
- WebP üretimiquality94; kayıplısıkıştırma ve CSS3Dresampling hafifyumuşamaya katkı verebilir ama kullanıcıWindowsgalerisinde hangisinin baskınolduğu kanıtlanmadı. Kaynakbüyütme/renderhack/Safarifixdeğişikliği önerilmedi.

## Windows kullanıcı teyidi

Sorunlumonitörde mevcut çözünürlük/Windowsölçekleme/tarayıcıadı/zoom'u not edin; sayfayı aynımonitörde yenilemedenönce/sonra karşılaştırın. Aşağıdaki saltokunur DevToolsConsole ölçümü, gerçekoturumda canvas/fallback ayrımını sağlar:

```js
(() => {
  const scene = document.querySelector('.scene');
  const canvas = scene?.querySelector('canvas');
  const rect = canvas?.getBoundingClientRect();
  return {
    dpr: devicePixelRatio,
    viewport: [innerWidth, innerHeight],
    mode: scene?.dataset.mode,
    backing: canvas && [canvas.width, canvas.height],
    css: rect && [rect.width, rect.height],
    effectiveDpr: rect && canvas.width / rect.width,
    antialias: canvas?.getContext('webgl2')?.getContextAttributes()?.antialias
  };
})()
```

Henüzscenehazırlanıyorsa ölçümü görünürWebGLsonrasında alın. Bu değerler olmadan kullanıcının24inçWindowsşikâyetinin kesin kök nedeni kapatılmış sayılmıyor.

## Değişiklikler / kanıtlar / sınırlar

Uygulama/CSS/galeri/dependency/workflow değişikliği **0**. Yalnız029raporu, task/decision/review/current/next/session/günlük ve `07-Reviews/evidence/BS3P-029/` ölçümJSON/ikiheroPNG güncellendi. Öncekiuser026belgeleri korunur.

Kanıtlar: canvas-metrics.json (ham10senaryo), stable-live-and-dpr-change.json (hazırWebGL/DPRgeçişi), live-local-image-comparison.json, diagnosis-summary.json; live-fhd-hero.png/local-fhd-hero.png.

Chromium ölçümü yapıldı; **gerçekWindows/Safari/GPUframeprofili yeni yapılmadı**. Kod değişmediği için yeniTS/lint/productionbuild/Safari regresyonu gereksiz tekrarlanmadı. Varolan8.4sfinal ikiDPR1görüntüsünde data-time8.400 ile kontrol edildi; diğeranimasyonlara müdahale yok. Fixbranch canlıdb53596'dan açıldı; rootfeaturec332veöncekiçalışmalar korunur. Commit/push/merge/deploy/staging yok; olasıuygulama/PR kullanıcıölçümü ve onayı sonrası ayrı adım.
