# BS3P-023B — Real Safari Gallery Bug Fix

**Tarih:** 2026-10-15  
**Durum: ACCEPTED / COMPLETED** — 2026-10-15 BS3P-023C kullanıcı doğrulaması.  
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `02739d112d65dbb6fc420eadd6611ff701415561`.

BS3P-023 kullanıcı tarafından gerçek Safari'de reddedildi: sol poster alanı hâlâ boştu. Eski rapor/kanıtlar silinmedi; önceki WebKit testi gerçek Safari kabulü sayılmıyor.

## Kullanıcı kabulü — BS3P-023C oturumunda

Kullanıcı gerçek macOS Safari'de posterlerin göründüğünü, silindirik galeri animasyonunun doğru çalıştığını ve header'ın kaybolmadığını açıkça onayladı. Aşağıdaki pending/test sınırları önceki teslim anının tarihsel kaydıdır; galeri kabulü kapandı. Yenileme kaydırması ayrı BS3P-023C kapsamında incelenir.

## Kök neden ve kanıt

Kurulu **Safari 27.0** penceresine native CUA üzerinden erişildi. SafariDriver remote automation kapalı kalırken pencerenin AX ağacı ve ekran görüntüsü alınabildi. Eski `symbol/use` yolu ile tamamen boş galeri tekrar üretildi; sağ panel görünüyordu.

Geçici teşhis çıktısında:
- Galeri DOM'unda 117 dilim vardı; stage 821.5625 × 500 px, x=64/y=241.265625. Radius476.50625px/perspective2957.625px; stage sıfır boyutlu veya ekran dışında değildi.
- Üç WebP `Image.decode()` ile yüklendi; doğal ölçüler FurtherUp640×863, Reviel640×863, Metek640×861. Eksik dosya/bozuk poster değildi.
- `CSS.supports('transform-style','preserve-3d')` true; `data-renderer=projected-surfaces` mevcuttu. Önceki adaptör Safari UA'sında gerçekten çalışıyordu; sorun yalnız renderer seçimi değildi.
- Aynı geometry/CSS/adaptörü koruyup her dilimdeki `<use>` yerine doğrudan SVG `<image>` kullanınca posterler gerçek Safari'de görünür oldu. Eski koda dönüş ve yeniden düzeltme ile A/B ekranları kaydedildi. Son production export da kurulu Safari'de görünür.

**İzole edilen neden:** lazy yüklenen görselin sıfır boyutlu ortak SVG `symbol` tanımından ayrı SVG `use` yüzeylerine taşındığı boyama yolu Safari27.0'da boş kalıyor. 023 yalnız CSS3D compositing yolunu değiştirdiğinden bu ikinci sorunu çözmedi. WebKit27.2 bunu aynı biçimde üretmiyordu. Tam dahili WebKit invalidation nedeni ve sıfır boyutlu tanımın tek başına etkisi ayrıca kanıtlanmadı; belirli upstream bug iddiası yok.

## Hedefli düzeltme

Yalnız **`components/homepage/GalleryStage.tsx`** değişti:
- Her mevcut SVG dilimi aynı viewBox/overscan/1280×1600 koordinatlarla postere doğrudan başvuruyor; kullanılmayan `coverId` ve sıfır boyutlu defs/symbol SVG kaldırıldı.
- `preserveAspectRatio="xMidYMid meet"`, lazy IntersectionObserver, responsive640/1080WebP seçimi korundu.
- Bu standart SVG yolu UA koşuluna bağımlı değil. 023'ün WebKit yüzey adaptörü/CSS'i aynen korunuyor; yeni UA hack'i veya düz poster fallback eklenmedi.
- Aynı URL'ler kullanılıyor; 117image düğümüne rağmen Chromium mobilde yalnız **3 poster isteği** görüldü.

Geometri, motion/controller/state/swipe, proje sırası FurtherUp→Reviel→Metek, metin/linkler ve global pause/reduced-motion kodu değişmedi. Hero, referanslar, hizmetler, footer, poster/font dosyaları, prototip kaynakları ve yayın izolasyonu korunur. Debug panel/script/timer teslim kodunda yok; dependency eklenmedi.

## Doğrulama ve sınırlar

| Kontrol | Sonuç |
|---|---|
| Kurulu Safari27.0 native pencere | Eski boş alan yeniden üretildi; düzeltme ile dev ve production posterleri görünür |
| Chromium desktop1440×1000 önce/sonra |803×501galeri görüntüsünde1.206.909RGBkanaldan1farklı; görünür tasarım farkı yok |
| WebKit27.2 + Chromium desktop/mobil390×844 |3proje sırası, ileri/geri-klavye/panel senkronu,1040/700ms, globalpause altında manuel galeri, reducedmotion0animasyon, DE menü/Escape geçti; yatay taşma/pageerror0 |
| Chromium mobil gerçek CDP touch girdisi |Swipe→Reviel, 3tekilWebPisteği,117image/0use,taşma0 |
| Node22.23.3 macOSARM64 |TypeScript/hedeflint/foundation/productionbuild/verifier/HTTPizolasyon geçti |
| Yayın izolasyonu |686artifact;0prototypeartifact/0prototypedependency; dev6prototype+asset200, production10yasakvaryant404 |

**Gerçek Safari etkileşim sınırı:** Native AX ile ileri tıklandı, transition başladı; tamamlanmış sonraki proje gözlenemedi. Geçici teşhis `document.hidden=true` gösterdi. Bu arka plan otomasyon durumunda foreground animasyon, klavye ve swipe kabulü verilmez; ek bir native etkileşim sorunu ihtimali manuel kontrolden önce kapatılmaz. Safari Web Inspector kısayolla açılmadı; native console incelenmiş sayılmaz. Otomatik iki motorda pageerror0 sonucu native console yerine geçmez. Gerçek iPhone/mobilSafari testi yapılmadı.

İlk browser harness denemesinde3019önizleme sunucusu kapalıydı; test çalışmadı. Yerel static preview açıldıktan sonra tek tam regresyon koşusu geçti. Kaynaklar tekrar test için değiştirilmedi. Production build final GalleryStage ile alındı; sonradan kullanılan geçici diagnostik eklenti kaldırılarak aynı final dosya geri kondu. Kapsamlı QA/video/perf/CI yapılmadı.

## Kullanıcı Safari kabul adımları

1. Gerçek Safari'yi **ön plana** alıp [güncel production çıktısını](http://127.0.0.1:3019/?review=023b#selected-projects) açın ve yenileyin. Dev alternatifi: http://127.0.0.1:3018/?review=023b#selected-projects . Bunlar yalnız yerel adreslerdir; deploy yok.
2. FurtherUp ortada, komşu posterler görünür olmalı. İleri ile Reviel→Metek→FurtherUp; geri ve galeri odaktayken ←/→ ile poster/bilgi/link senkronunu kontrol edin.
3. Dar pencerede poster oranı/taşma; dokunmatik cihazda swipe kontrol edin. Global hareketi duraklatıp galeri gezinmesini, reduced-motion'da anlık geçişi deneyin.
4. Özellikle boş alanın kalktığını ve geçişlerin tamamlandığını bildirin. Sonuç gelene kadar görev **PENDING USER SAFARI ACCEPTANCE** kalır; yeni READY kararı verilmez.

## Dosyalar ve kanıtlar

- Uygulama: `components/homepage/GalleryStage.tsx` (bu takip görevindeki tek uygulama değişikliği).
- Bu rapor, TASK_REGISTER, CURRENT_STATUS, NEXT_STEPS, SESSION_LOG, DAILY_LOG_2026-10-15, DECISION_LOG(D-030), REVIEW_REGISTER.
- [[../07-Reviews/evidence/BS3P-023B/safari-before.png|Gerçek Safari önce]] · [[../07-Reviews/evidence/BS3P-023B/safari-production-after.png|Gerçek Safari production sonra]] · [[../07-Reviews/evidence/BS3P-023B/chromium-mobile.png|Chromium mobil]] · [[../07-Reviews/evidence/BS3P-023B/webkit-mobile.png|WebKit mobil]].
- `native-safari-diagnosis.json`, `verification.json`, `touch-and-assets.json`, `chromium-pixel-comparison.json`, `source-preservation.json`, Node22 kontrol JSON/logları aynı kanıt klasöründe. `safari-after-interaction-pending.png` geçiş kabulü değildir; hâlâ FurtherUp/disabled kontroller gösterir.

023'ün mevcut CSS/stage/helper değişiklikleri, eski raporu ve kullanıcının diğer yerel dosyaları korundu. Index boş kaldı. Commit/push/merge/deploy yapılmadı. Önceki021güvenlik/rollback/CI koşulları bu takip göreviyle kapanmış sayılmaz.
