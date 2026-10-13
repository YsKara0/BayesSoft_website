# Motion Guidelines — Spatial Text Module

## Güncel — tam boy prizma ve 5 saniyelik otomatik akış

**13.10.2026 11:49 TRT · S2026-10-13-FULLSIZE-01.** Kullanıcı dört fiziksel yüzlü/90° X mekanizmasını onayladı. Bu tur yalnız boyut, mimari açıklık ve otomatik akışı düzenledi; **yeni ölçek ve bu uygulama sonucu kullanıcı incelemesi bekler, production onayı yok**. Ana geometri [[BAYESSOFT_3_FOUR_FACE_PRISM_CORRECTION]], zamanlama ve boyut için son kullanıcı “Full-size four-face prism + otomatik 3D dönüş” talebi geçerlidir. Önceki H270 / 7 sn / mobil manuel başlangıç güncel değildir.

### Geometri ve taşıyıcı açıklığı

Dört fiziksel yüz ve aynı yöndeki 90° adımlar korunur. Yüz W534×H420 px, derinlik H/2=210 px; kare kesit 420×420 px. CSS scale kullanılmaz. Dış obje 540×512 px olarak kalır. Üst/alt sabit parçalar 40'ar px; ön açıklık yaklaşık 432 px, rotor doluluk oranı %97,2. Alt parça y=472'ye alınır; eksen x=270/y=256, ana panelin tam merkezidir.

Kare kesitin süpürme yarıçapı H/√2=296,985 px, çapı 593,97 px. Rotor merkezi z=-210 olduğundan hacim z=-506,985…+86,985 aralığına uzanır. Üst-alt parçalar ön z=0 düzleminde, |y|≥216 bölgesindedir; süpürülen çemberle en küçük fiziksel radyal açıklık yaklaşık 4,26 px. Arka taşıyıcılar z=-210'a çekilir ve yaklaşık 610 px açıklık bırakır (çap + üst/alt 8'er px). Arka hacim açıktır; sığ kutu veya gizlenmiş yanlış kesit yoktur.

Tüm sabit parçalar ve rotor ortak 3D kamera kullanır. Perspektif 540 px genişlikte 1000 px, responsive olarak 185.185185cqw. Tam hacmin en büyük düşey projeksiyonu yaklaşık 506,37 px olduğundan 512 px dış alana sığar. Dönüşte öndeki sabit parçanın arkadaki yüzü örtmesi gerçek derinlik ilişkisidir; yüzlere mask/clip uygulanmaz. `.architectural-object`, `.plate-space` ve `.rotating-plate` overflow visible / clip-path none kalır. Chrome'un arka taşıyıcıların projeksiyon öncesi sınırından oluşturduğu 3–5 px fazladan yatay kaydırma alanı, sahnenin dışında yalnız prototip html/body viewport sınırında `overflow-x:clip` ile giderilir. Görünür fiziksel yüzlerin bütün projeksiyonları viewport içinde doğrulanır; geometriyi keserek sığdırma yoktur.

### Zamanlayıcı ve etkileşim

UI Face 1 = DOM index 0, ilk mesaj “İşinize göre yazılım.” ve 0°. Ön planda sayfa açılınca otomatik başlar; her tamamlanmış dönüşten sonra 5000 ms okuma, yaklaşık 900 ms dönüş / cubic-bezier(.45,0,.25,1). Sıra 0→-90→-180→-270→-360→-450…; açı sıfırlanmaz. Manuel uzak seçim de komşu yüzlerden ayrı 90° adımlarla gider.

Manuel seçim otomatiği kalıcı olarak durdurmaz; seçim tamamlanınca yeni 5 saniyelik bekleme başlar. Aynı yüz seçimi de beklemeyi yeniler. Kullanıcının açık pause tercihi korunur. Hover ve kontrol alanındaki klavye odağı yeni otomatik adımı bekletir; başlamış dönüş okunur hedefe tamamlanır. Klavyeyle seçilen düğmenin odağı dönüş sırasında korunur; aria-disabled ve input guard hızlı tekrarları engeller. Arka plan sekmesinde timer çalışmaz, ön plana dönünce yeni 5 saniye başlar. Ön planda viewport dışında da döngü devam eder; önceki IntersectionObserver kapısı kaldırılmıştır.

Mobil/touch da otomatik başlar; manuel seçim zorunlu değildir. Reduced-motion ve 3D desteği olmayan ortamda otomatik kapalı, dört mesaj anlık manuel erişilebilir. Runtime tercih değişiminde hedef yüz ve birikimli açı korunur. Stable semantik metin ve yalnız manuel polite duyuru; otomatik yüzler screen reader'a tekrar tekrar anons edilmez.

### Doğrulama

Gerçek Chrome'da 0/-45/-90/-135/-180/-270/-360 ve iki otomatik tur 0…-720 doğrulandı. 48,40 sn kesintisiz 1440×960 / 25 fps WebM: sekiz dönüş yaklaşık 882–900 ms, yedi okuma arası 5033–5035 ms. 439 hareket karesinde yalnız X, monoton açı, aynı dört DOM yüzü, sabit destekler, viewport/düşey sınır ve sağ image açıklığı kontrol edildi. En fazla bir dwell ve bir completion timer; CLS 0, console/page/HTTP hata 0.

1440/1024/768/390/360/320/280 px × dört yüz = 28 responsive kontrol; text bounds, eşit W/H/H÷2, %97,2 doluluk, görünür yüzlerde no-clipping/no-overflow ve en az 44 px hedefler geçti. -45° ve -135° PNG'leri gerçek CSS transition inceleme için pause edilerek alındı; video ayrı, normal ve kesintisiz akıştır. 33 etkileşim kontrolü; hover, keyboard focus korunması, manuel sonrası auto, explicit pause/resume, mobile auto, reduced/runtime, JS-off ve fallback geçti.

Arka plan testi, görünürlük override'ı olmayan ayrı gerçek headed Chrome/default CDP context'te yapıldı: hidden tab 5,6 sn boyunca açı 0 ve paused kaldı; öne dönünce yaklaşık 5039 ms sonra -90 adımı başladı. Playwright'ın varsayılan focus emülasyonuyla yapılan ilk denemeler gerçek görünürlük kanıtı olarak kabul edilmedi. Optimize statik export HTML'de mobil auto, tam boy geometri, manuel -360 dönüş ve reduced erişim geçti. Lint/typecheck/build (19 statik sayfa) ve diff-check geçti; build'in geçici next-env referansı restore edildi.

Tam kanıt [[07-Reviews/2026-10-13-Full-Size-Prism-Auto]], [iki tur video](../07-Reviews/evidence/fullsize-auto-two-cycles.webm). Gerçek Safari/iOS/Android/VoiceOver/düşük güç cihaz testleri yapılmadı. Viewport kaydı OS masaüstü veya 60 fps garantisi değildir. Sağ animasyon/production'a geçilmez.

---

## Tarihsel — H270 / 7 saniyelik dört yüz düzeltmesi

## Güncel — dört fiziksel yüz, X ekseninde 90° adımlar

**13.10.2026 01:56 TRT · S2026-10-13-PRISM-01.** Ana kaynak [[BAYESSOFT_3_FOUR_FACE_PRISM_CORRECTION]]. İzole prototip uygulandı ve gerçek Chrome'da doğrulandı; **kullanıcı onayı bekleniyor, production onayı yok**. Eski brief yanlışlıkla iki yüz ve 180° geçiş istedi; amaç dört yüzlü, 90° adımlı prizmaydı. Önceki iki yüzlü flip ve 90°'de edge-on dinlenme talimatları geçersizdir. Aşağıdaki eski kayıtlar tarihsel kanıttır.

### Fiziksel geometri

- Dört ayrı ve eşit `.plate-face`, yerel `rotateX(0/90/180/270deg) translateZ(H/2)` ile konumlanır. Normal dönüşte metin değiştirme, crossfade veya yüz gizleme yoktur. Aynı DOM yüzleri gerçek, seçilebilir Türkçe metin taşır.
- 540 px dış obje içinde her yüz yaklaşık **W534 × H270 px**; kare kesit **270 × 270 px**, derinlik **135 px**. `--prism-height:50cqw` ve `--prism-depth:25cqw` orantılı ölçeklenir. Önden görünüm geniş dikdörtgendir. İki kare, metinsiz uç kapak hacmi kapatır.
- `.plate-space` perspektifi 1800 px; ortak `.rotating-plate` preserve-3d ve merkez origin kullanır. Parent `translateZ(-H/2) rotateX(angle)` ön yüzün durağan z=0 düzlemini ve orijinal genişliğini korur. Yüzlerde backface hidden; aynalanmış arka metin yok.
- Dış 540×512 mimari çerçeve, üst/alt destekler, dikmeler, yataklar ve mil korunur; rotorun çocuğu değildir. Eski H398 ince plaka kare kesite dönüşünce desteklerle çarpışacağı için **yalnız rotor yüksekliği H270'e indirildi**. -45°'de dönen kare açıklığa sığar; mask veya clip ile saklanmaz. Sağ PNG ve kompozisyon değişmedi.

### Okuma sırası ve zamanlama

| Konum | Öne bakan fiziksel yüz / metin |
|---|---|
| 0° | Face0 — İşinize göre yazılım. |
| -90° | Face1 — Web ve mobil çözümler. |
| -180° | Face2 — Yapay zekâ ile daha fazlası. |
| -270° | Face3 — Size özel yazılım sistemleri. |
| -360° | Face0 yeniden |
| -450° ve devam | Face1; birikimli aynı yön |

Metin ve satır kırımları tek `app/prototype/spatial-hero/faces.ts` yapılandırmasındadır. Her normal otomatik veya manuel geçiş **-90°**, 900 ms / cubic-bezier(.45,0,.25,1); tamamlanınca 7000 ms okuma. Açı modulo 360 sıfırlanmaz. Uzak bir yüz elle seçilirse komşu yüzlerden ayrı 90° geçişlerle gidilir; tek 180°/270° atlama yok. Aynı yüz seçimi dönüş başlatmaz. Bir geçiş sırasında seçimler disabled; timer, transitionend ve temizlenen fallback timer kullanılır. Interval veya kare başına layout yazımı yok.

### Erişilebilirlik / mobil

Objeden ayrı pause/resume, Sonraki yüz ve dört doğrudan seçim; en az 44 px hedef, görünür klavye focus ve aria-pressed. Hover ve klavye odağı yeni otomatik geçişi bekletir; başlamış adım okunur dinlenme yüzüne tamamlanır. Kalıcı pause açık resume'a kadar korunur. Sekme gizli veya obje viewport dışındaysa otomatik ilerlemez; pagehide ve tercih değişiminde timer'lar temizlenir.

900 px altı/touch manuel ve statik başlar; açık opt-in ile otomatik dönebilir. Reduced-motion: auto kapalı, seçili yüz düz ve anlık gösterilir; dört mesaj manuel erişilebilir. Tercih runtime değişince hedef yüz ve birikimli açı korunur. 3D desteği yoksa aynı statik/manual fallback. CSS, JS kapalı reduced tercihini de karşılar; noscript üç diğer mesajı gösterir. Stable H1 + üç mesaj screen reader'a beklemeden açıktır; görsel kopyalar aria-hidden. Otomatik live announcement yok, yalnız manuel seçimde polite duyuru.

### Gerçek test ve kayıt

**40,64 sn kesintisiz headless Google Chrome viewport WebM**, 1440×960 / 25 fps: 0→-90→-180→-270→-360→-450, altı durağan yüz. Beş dönüş 882,3–899,7 ms, aralar 7033,3–7034,5 ms. 275 hareket karesinde yalnız X dönüşü, aynı dört fiziksel DOM yüzü, sabit cap geometrisi, destek açıklığı, viewport sınırları ve boş otomatik live region doğrulandı. Hareket CLS 0; console/page/HTTP hatası 0. -360 sonrası -450 akışı snap veya ters dönüş olmadan devam etti.

0/-45/-90/-180/-270/-360/-450 PNG'leri var. **-45° PNG gerçek CSS transition inceleme için pause edilerek alındı**; video ayrı ve kesintisiz normal 7 sn/900 ms akıştır. -45°'de iki komşu yüz; her 90° dinlenmede doğru upright/unmirrored yüz doğrulandı. 1440/1024/768/390/360/320/280 px × dört yüz = 28 responsive kontrol; ayrıca 29 hover/keyboard/touch/reduced/JS-off/fallback kontrolü geçti. Optimize export HTML browser'da çalıştı; mobil -45° açıklığı ayrıca doğrulandı. Lint/typecheck/build (19 statik sayfa) geçti.

Tam kanıt [[07-Reviews/2026-10-13-Four-Face-Prism-Correction]], [video](../07-Reviews/evidence/prism-four-face-real-browser.webm). Gerçek Safari/iOS/Android/VoiceOver/düşük güç cihaz testleri yapılmadı. Headless viewport kaydı OS masaüstü veya 60 fps garantisi değildir. Parametreler ve estetik kullanıcı onaylı değildir.

---

## Tarihsel — iki yüzlü X flip recovery; dört yüz şartnamesiyle yürürlükten kalktı

13 Ekim 2026 · **Güncel model: yatay X ekseninde yukarıdan aşağıya iki yüzlü flip.** Ana talimat [[BAYESSOFT_3_VISUAL_FIDELITY_AND_3D_FLIP]] önceki Y/16°–164° modelini açıkça değiştirir. Önceki prototip görsel kalitesi nedeniyle reddedildi. Recovery uygulandı/test edildi; **tasarım sonucu hâlâ kullanıcı onayı bekler**. Production izni yok. [[07-Reviews/2026-10-13-Visual-Recovery-X-Flip]]

## Aktif geometrik model

Tek ortak `.rotating-plate` iki zıt baskı yüzünü ve ince fiziksel kesitleri taşır. Parent `rotateX(angle)`, `preserve-3d`; kamera perspektifi 1800 px. A `translateZ(1px)`, B `rotateX(180deg) translateZ(1px)`. İki yüz `backface-visibility: hidden`. Top/bottom kesitler 2 px, yan kesitler aynı ailede. Yan kenarların yerel rotateY(90deg) yönelimi yalnız sabit kesit geometrisidir; **orta parent'ın hareket ekseni X'tir**.

Üst-alt sabit mimari yüzey, iki arka dikme ve yatay merkez yatakları dönmez. X ekseni orta plakanın yüksekliğinin merkezinde; eski üst-alt düşey pimler uygulamada yatay yan yataklarla değiştirildi. Boyut/layout her karede değişmez. Sağ PNG statiktir.

## Zaman ve yön — prototip parametreleri

| Parametre | Güncel değer |
|---|---|
| Başlangıç | A, 0° |
| İlk okuma | yaklaşık 7000 ms |
| İlk flip | 0° → 180°, B |
| Sonraki okuma | dönüş tamamlandıktan sonra 7000 ms |
| İkinci flip | 180° → 360°, A |
| Devam | 540° B → 720° A → aynı yönde artan açı |
| Geçiş | 900 ms; brief 800–1000 ms |
| Easing | cubic-bezier(.45,0,.25,1) |
| Perspektif | 1800 px; geçici, marka token'ı değil |

Açı normal çalışma sırasında 360'a göre sıfırlanmaz; böylece 180→0 ters dönüş/snap oluşmaz. Manual A/B seçimi de sonraki 180°'ye aynı yönde gider. Aynı yüze seçim dönüş başlatmaz. Dönüş sırasında yüz düğmeleri geçici disabled; input kuyruğu/simultane flip yok. `transitionend` ve temizlenen 100 ms toleranslı fallback timer son state'i oturtur. Sonraki dwell yalnız tamamlanınca başlar; setInterval yok.

90° çevresinde kısa edge-on anı doğaldır; yazı burada okunmaz. Easing orta geçişi hızlı, uçları sakin tutar. A/B durağan durumda düz, aynalanmamış ve okunurdur. Başlık satırı/fade/slide/text swap ile motion taklidi yapılmaz. `will-change` yalnız dönüşte.

## Kontroller ve erişilebilirlik

- Kontroller objenin dışındadır: çerçevesiz, 12 px sakin etiketler; pause/resume ve iki manual yüz. >=44 px hit area, görünür focus, aria-pressed, erişilebilir açıklama. Timer açıklaması visually hidden; ek görünür UI bandı yok.
- Hover ve controls içindeki klavye odağı **yeni otomatik geçişi** durdurur. Başlamış dönüş okunmaz kenarda dondurulmaz; durağan yüze tamamlanır. Ayrılınca yeni 7 saniyelik okuma başlar. Kullanıcı pause'u explicit resume'a kadar kalıcıdır.
- Pointer/touch odağı gereksiz kilitleme yapmaz. Mobile/touch ilk durumda A + manual; isteyen otomatiği başlatabilir. 900 px altı otomatik zorlanmaz. Yatay taşma yok, native scroll korunur.
- Hidden document / viewport dışında obje için yeni otomatik dönüş yok. Pagehide timer'ları temizler, okunur hedefe yerleşir; bfcache dönüşünde aynı listener'lar/scheduler yeniden kullanılır.
- Reduced-motion: statik A; otomatik kapalı. B elle anlık HTML yüz olarak gösterilir; parent/back yüz 3D transform'ları kaldırılır. Tercih runtime açılırsa anlık A; kapatılırsa son seçili yüz motion başlatmadan yerleştirilir. 3D desteklenmiyorsa da aynı static/manual sunum.
- Stable semantik H1 ve B'nin hizmet cümlesi zamandan bağımsız DOM'da. Görsel tekrarlı yüzler aria-hidden; otomatik live announcement yok. Yalnız kullanıcı manual seçiminde polite status. Yazı native ve seçilebilir; bitmap değildir. JS-off A/hizmet bilgisi korur, çalışmayan kontroller gizli.

## Gerçek browser kanıtı

Chrome 1440×960 viewport'ta **32.72 saniye** kesintisiz WebM kaydı (25 fps, 3,725,819 byte). Normal timer/transition akışıyla dört flip: 0→180→360→540→720. Gerçek X matrix'leri, monoton açı, sabit cap bounding rect'leri ve viewport sınırları doğrulandı. Gözlenen dönüşler yaklaşık 886–900 ms; tamamlanmalar arası okuma 7033–7034 ms. Dönüşte measured layout-shift toplamı 0, console/page/HTTP error yok.

0/45/90/135/180/360 browser PNG'leri saklandı. **45/90/135 PNG'lerinde gerçek CSS transition inceleme için pause edilmiştir**; bu kareler kesintisiz hareket kaydı diye sunulmaz. WebM ayrı, duraklatılmamış automatic cycles kaydıdır. A/B durağan orientation matrix'leri upright/unmirrored, backface hidden doğrulandı.

1440/1024/768/390, pause/resume, hover/focus, touch opt-in, reduced başlangıç/runtime/aç-kapa, JS-off ve accessibility tree dahil 33 ek browser kontrolü geçti. Lint/TypeScript/build ve optimize export HTML'de X flip kontrolü başarılı. [[07-Reviews/2026-10-13-Visual-Recovery-X-Flip]] tüm kanıtları içerir.

**Sınırlar:** Chrome/headless viewport kaydı gerçek browser render'ıdır, OS masaüstü kaydı veya gerçek cihaz testi değildir. iOS/Safari, VoiceOver ve düşük güç cihazda akıcılık hâlâ açık; video 25 fps olması renderer'ın 60 fps olduğunun kanıtı değildir. Işık CSS malzeme yaklaşımıdır, fiziksel render/ray tracing değildir. Tasarım/parametreler kullanıcı incelemesiyle değerlendirilecek; production'a geçilmez.

---

## Tarihsel — 13 Ekim 00:30 ilk Y prototipi ve 12 Ekim Figma kayıtları

Aşağıdaki önceki notlar korunur. Yeni uygulamada eksen/dinlenme/timing için üstteki X modeli ve ana talimat geçerlidir; eski Y metinleri aktif talimat değildir.


13 Ekim 2026 · **Güncel uygulama: `/prototype/spatial-hero`.** Desktop Balanced kullanıcı tarafından yalnız prototip için onaylandı. Aşağıdaki 12 Ekim Figma kaydı tarihsel olarak korunur; başlangıç 480 ms değeri ve “frontend yetkisi yok / çalışan hareket yok” durumu bu prototip için geçerli değildir. Nihai üretim ve marka token'ları onaylanmış değildir. [[04-Website/01-Spatial-Hero-Prototype]]

## Çalışan prototip — güncel davranış

- Yalnız orta plaka `perspective: 2200px`, `transform-style: preserve-3d`, `rotateY` ve önyüz/arkayüz `backface-visibility: hidden` ile döner. Üst-alt mimari yüzeyler, taşıyıcı ve yataklar sabittir. Sağ PNG hareketsizdir.
- A dinlenme açısı 16°, B 164°; arkaya basılan B yüzü kendi yerel ekseninde 180° döndürülür. Böylece B aynalanmaz. İki durağan eğim arasında toplam 148° hareket, 90° kesitten geçer. Geçici Figma sunum açıları korunur; bir 3D fizik simülasyonu değildir.
- Her tamamlanan dönüşün ardından **7000 ms durağan okuma**, dönüş **750 ms**, easing `cubic-bezier(.22,.61,.36,1)`. Bunlar prototip parametreleridir. Font, renk, perspektif ve timing kesin marka token'ı değildir.
- Son brief, metnin **durağan yüzlerde** okunmasını istiyor. Kenardan görülen 90° çevresinde yazı kısa süre kaybolur; bu fiziksel modelin doğal sınırıdır, gizlenmez. Sürekli okunurluk şartı tekrar istenirse model ayrıca gözden geçirilir.
- Masaüstü/fine-pointer (en az 900 px) otomatik başlar. Hover otomatik sayacı durdurur; ayrılınca yeni 7 saniyelik süre başlar. Başlamış bir dönüş metni kenarda dondurmamak için durağan yüze tamamlanır.
- Klavye odağı obje/kontrol alanındayken otomatik ilerleme bekler. Mouse/touch ile başlatma, salt pointer odağı yüzünden kilitlenmez. Kalıcı durdurma, kullanıcı yeniden başlatana kadar korunur. Elle yüz seçimi otomatiği durdurur.
- Kontroller objenin dışında, dört hizmet etiketinin altında: Dönüşü durdur/başlat, İlk yüz, İkinci yüz. Üzerlerinde yer ayrılır; dönüş sırasında geçici disable kontrol genişliğini değiştirmez. Dokunma hedefleri en az 44 px. Aynı anda ikinci dönüş sıraya alınmaz.
- Sekme gizliyken veya objenin en az %25'i görünmüyorken yeni otomatik dönüş başlamaz. Geri gelince yeni okuma süresi başlar. Page hide / bfcache dönüşünde sayaçlar temizlenir.
- 900 px altı/touch başlangıçta **A + elle seçim**. Kullanıcı isterse açıkça otomatiği başlatabilir; hover'a bağlı bilgi yok. Üst-alt yüzeyler ve görsel mobilde aynı oranla korunur.
- `prefers-reduced-motion: reduce`: başlangıç A, otomatik dönüş kapalı, başlatma düğmesi disabled. Elle B anlık ve düz gösterilebilir; 3D hareket/transition yok. Tercih çalışma sırasında açılırsa A'ya anlık dönülür ve otomatik kalıcı durur.
- Stable semantik H1 ve B anlamı her zaman HTML'de vardır. Görsel yüzler screen reader'dan gizlenmiş tekrar kopyalarıdır; otomatik dönüş canlı duyuru yapmaz. Yalnız kullanıcı elle seçim yaptığında polite status kullanılır. JS kapalıysa A ve hizmet bilgisi kalır; kullanılamayan kontroller görünmez.
- Hareket için ek library/dependency yok. `will-change` yalnız dönüş sırasında; kare başına layout güncellemesi yapılmaz. Tek transform geçişi kullanılır.

## Doğrulama ve açık kabul

Chrome browser testleri ve ekran kayıtları [[04-Website/01-Spatial-Hero-Prototype]] içinde. Sabit panel geometrisi dönüş sırasında aynı; dört viewport'ta A/B kadrajları saklanır. Gerçek iOS/Safari, Android cihaz ve düşük güç donanımda kare akışı henüz değerlendirilmedi. Headless Chromium doğrulaması evrensel 60 fps kanıtı değildir.

**Sonraki adım kullanıcı incelemesidir.** Production'a aktarma, ortak layout/global CSS değişikliği veya yayın yetkisi yok. Hareketin premium obje hissi, kısa kenar görünümü ve dış kontrollerin yerleşimi incelemeye açıktır.

---

## 12 Ekim 2026 — tarihsel Figma motion kaydı

Bu noktadan sonraki notlar önceki statik keşfin kaydıdır; güncel uygulama davranışını üstteki bölüm belirler.

12 Ekim 2026 · Variant C kullanıcı tarafından prototip temeli olarak seçildi. Güncel [[08-Integrated-Hero]] üç statik kompozisyon içerir; her frame'de görünür A ve gizli native B durumu var, gerçek animasyon/prototype akışı yok. Eksen/timing ve 90° okunurluk hâlâ çözülmedi. Kaynak durumlar [[07-Architectural-Spatial-C]] ile korunur.

## Seçilen davranış

İlk görünüm A: “İşinize göre yazılım.” İkinci yüz B: “Web, mobil, AI ve özel çözümler.” C: “Karmaşık ihtiyaçlar için sade ürünler.” ayrı alternatif, A/B döngüsüne eklenmez. Önceki 1A/1B motion notları tarihsel; mevcut brief'i sınırlamaz.

C'nin yeni denemesi: ince orta plakanın ön/arka basılı yüzleri, üst-alt yatakları bağlayan **düşey Y ekseninde yarım dönüş**. Eksen objenin x=270 merkezinde. Üst-alt mimari yüzey ve arka taşıyıcı sabit. Bu, eksen/kalınlık inandırıcılığını araştıran onaysız agent önerisidir; önceki X/90° komşu yüz şeması C'ye otomatik taşınmadı ve eski frame'de korunur.

## Başlangıç değerleri — geçici

| Alan | Aday |
|---|---|
| İlk durağan okuma | 7 saniye; brief aralığı 6–8 saniye |
| Sonraki durağan okuma | Geçiş tamamlandıktan sonra 7 saniye |
| Dönüş | 420–520 ms; başlangıç 480 ms |
| Easing | cubic-bezier(.22,.61,.36,1) |
| C yüz ilişkisi | 0° A → 35° A → 90° kesit → 145° B → 180° B; düşey eksen |
| Ana sunum | 16° A / 164° B hafif açılı durağan pozlar; onaysız |
| Projeksiyon | Native 2D geometri; gerçek browser perspektifi henüz tanımlanmadı/test edilmedi |
| Modül kenar vurgusu | 120–180 ms; konum değişmez |

**Güncel C:** yalnız orta plaka ve kendi ince kesiti döner. Üst-alt mimari dönüş yüzeyleri, küçük yataklar ve arka taşıyıcı sabit. Alt hedef kitle cümlesi kaldırıldı; objede yalnız A veya B başlığı var. CTA, Projelerimiz, Duraklat/Diğer yüz, sayfalama veya yeni dekoratif kontrol yok. Sağ sistem sabit. Yatay slide, ayrı kart istifi, carousel veya typewriter yok.

Bu çıkarma yalnız Figma görsel keşfinin kapsamıdır. Erişilebilir durdurma ve elle yüz seçimi uygulama aşamasında nesnenin dışında ayrıca tasarlanır. Konum/biçim henüz hazırlanmadı veya onaylanmadı; otomatik hareket bu mekanizma ve gerçek browser doğrulaması olmadan uygulanmış sayılmaz.

## Okunurluk sözleşmesi

Blur yok; görünür yüzde metin kontrastı korunur, B aynalanmaz. Ancak ince iki yüzlü plaka 90°'de kenardan görülür ve yazı kaybolur. **C, önceki her fazda okunur mesaj hedefini henüz karşılamıyor.** 90° kesit native durumda açıkça gösterildi; ara duruma sahte okunur yüz eklenmedi. Bu nedenle otomatik 180° hareket onaylanmış çözüm veya erişilebilir deneyim sayılmaz. Görünür ara açılarda metin/glyph okunurluğu da gerçek browser'da sınanmadı.

0°/35°/90°/145°/180° native çizimler mekanik niyeti temsil eder; gerçek animasyon, ışık veya fiziksel doğruluk kanıtı değildir. Orta yüzün hareketi sabit yapıya yayılmaz. Sürekli okunurluk isteniyorsa bu eksen/yüz ilişkisi yeniden değerlendirilmelidir; durağan/elle yüz değişimi geçerli alternatif olarak kalır. Metinler sırf dönüşe sığsın diye değiştirilmez. Kullanıcı C'nin görselini onaylasa bile bu tradeoff ayrı motion kararı gerektirir.

## Durum ve zamanlayıcı

A görünür → 7 saniye oku → kısa A/B dönüşü → B görünür → 7 saniye oku → kısa B/A dönüşü. Bir anda tek dönüş. Hızlı input eski geçişleri sıraya dizmez; son geçerli state'e oturur. Sayaç geçiş bitmeden sonraki dönüşü başlatmaz.

İlerideki uygulama için hover/focus otomatik ilerlemeyi durdurma ve nesne dışındaki erişilebilir kalıcı durdurma önerisi korunur. Kullanıcı açıkça devam ettirmeden kalıcı durdurma geri açılmaz. Görünmeyen sekme ve viewport dışındaki hero'da sayaç/animasyon durur. Bunlar çalışma önerisidir, yeni Figma objesinde görünür kontrol veya uygulanmış davranış değildir.

C'de iki metin yüzü, hafif açılı sunum ve beş ayrı dönüş durumu kayıtlı. Linkler [[07-Architectural-Spatial-C]] içinde. Eski A/B ve alternatif başlık Face C korunur. Figma prototype bağlantısı veya gerçek dönen preview oluşturulmadı. Variant C ile Face C farklıdır.

## Reduced-motion

Otomatik dönme ve 3D hareket tamamen kapalı. A statik ilk yüz; ilerideki nesne dışı erişilebilir seçim B'yi anlık gösterebilir. Dört hizmet etiketi kalır. Tercih çalışma sırasında değişirse geçerli son yüz durağan görünür. Observer/animation desteği yoksa da aynı statik deneyim. Bu tur yeni reduced-motion kontrol arayüzü tasarlanmadı.

Önceki ayrı reduced-motion frame'i değiştirilmeden korunur; bu gerçek OS tercihi testinin yerine geçmez ve içindeki eski kontroller yeni objenin görsel onayı değildir. Ekran okuyucuya tekrar tekrar değişen H1/live mesajı okutma; durağan semantik önerme ve görünür dört hizmet sun. Görsel alternatif yüz kopyası gereksiz tekrar üretmemeli.

## Mobil

Yeni Integrated mobil frame'de A statik ilk görünüm, B gizli/düzenlenebilir durum. Gerçek geçiş/etkileşim yapılmadı. İlerideki nesne dışı erişilebilir seçim ve reduced-motion davranışı ayrı uygulama işi; bu tur UI tasarımı yok. Hover'a bağlı bilgi olmaz; kısa dönüş ancak gerçek mobil testte okunur ve akıcıysa düşünülebilir. Etkileşim alanı en az 44 px; native scroll ve sabit yüz ölçüsü korunur.

## Sağdaki hizmet sistemi

Yeni Integrated Hero sağında onaylı `assets/hero/bayessoft-spatial-v1.png` statik raster olarak kullanılır; görsel değişmedi. İçindeki paneller tek tek native animasyon katmanı değildir. Önceki native service system entegrasyona alınmadı; hover/kenar notları tarihsel kalır. Rasterı sürekli yüzdürme/orbit veya panelleri ayrı hareket ediyormuş gibi sunma yok. Gerçek hareket bu tur yapılmadı.

## Performans ve sonraki kabul

Tercihen transform/opacity; layout ölçülerini her karede değiştirme. Ağır WebGL/animasyon library'si varsayılan çözüm değil. Native vektör sisteminin optimize SVG türevi sonra değerlendirilebilir; bu tur frontend/asset dosyaları değişmedi. CSS 3D motion, render layer sayısı, font rasterizasyonu ve düşük güç cihazda kare akışı onay sonrası prototipte incelenmeli. 60 fps veya kusursuz performans iddiası yok.

Kabul: motion'daki okuma kaybı kullanıcı tarafından açıkça değerlendirilir; görünür A/B okunur, backface aynalanmaz; üst-alt ve taşıyıcı sabit, obje boyutu değişmez; carousel kayması yok; dış erişilebilir kontrol/focus, reduced-motion ve cihaz/zoom testleri geçer. **Sürekli okunurluk hâlâ şartsa C'nin 90° kesit durumu bu kabulü geçmez.** Bu tur browser testi yapılmadı; otomatik hareket uygulaması yok.

İlgili: [[DESIGN_SYSTEM]], [[05-Spatial-Concept]], [[05-Decisions/2026-10-12-spatial-concept-reset]].
