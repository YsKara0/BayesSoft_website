# Tam Boy Prizma ve Otomatik Akış — Sol Hero İncelemesi

13.10.2026 11:49 TRT · `S2026-10-13-FULLSIZE-01` · `feature/bayessoft-3.0`

**Dört yüzlü mekanizma kullanıcı onaylı; yeni boyut ve otomatik uygulama inceleme bekliyor.** Yalnız sol izole prototip. [Canlı prototip](http://127.0.0.1:3000/prototype/spatial-hero).

## Geometri / mimari bütünlük

Dört fiziksel yüz ve aynı yöndeki 90° adımlar korunur. Yüz W534×H420 px, derinlik H/2=210 px; kare kesit 420×420 px. CSS scale kullanılmaz. Dış obje 540×512 px olarak kalır. Üst/alt sabit parçalar 40'ar px; ön açıklık yaklaşık 432 px, rotor doluluk oranı %97,2. Alt parça y=472'ye alınır; eksen x=270/y=256, ana panelin tam merkezidir.

Kare kesitin süpürme yarıçapı H/√2=296,985 px, çapı 593,97 px. Rotor merkezi z=-210 olduğundan hacim z=-506,985…+86,985 aralığına uzanır. Üst-alt parçalar ön z=0 düzleminde, |y|≥216 bölgesindedir; süpürülen çemberle en küçük fiziksel radyal açıklık yaklaşık 4,26 px. Arka taşıyıcılar z=-210'a çekilir ve yaklaşık 610 px açıklık bırakır (çap + üst/alt 8'er px). Arka hacim açıktır; sığ kutu veya gizlenmiş yanlış kesit yoktur.

Tüm sabit parçalar ve rotor ortak 3D kamera kullanır. Perspektif 540 px genişlikte 1000 px, responsive olarak 185.185185cqw. Tam hacmin en büyük düşey projeksiyonu yaklaşık 506,37 px olduğundan 512 px dış alana sığar. Dönüşte öndeki sabit parçanın arkadaki yüzü örtmesi gerçek derinlik ilişkisidir; yüzlere mask/clip uygulanmaz. `.architectural-object`, `.plate-space` ve `.rotating-plate` overflow visible / clip-path none kalır. Chrome'un arka taşıyıcıların projeksiyon öncesi sınırından oluşturduğu 3–5 px fazladan yatay kaydırma alanı, sahnenin dışında yalnız prototip html/body viewport sınırında `overflow-x:clip` ile giderilir. Görünür fiziksel yüzlerin bütün projeksiyonları viewport içinde doğrulanır; geometriyi keserek sığdırma yoktur.

Ana yüz 270→420 px (%55,6 büyüme); Variant C'nin 398 px hedefine yakın. Öndeki beyaz açıklığın %97,2'si döner. Dış ölçü ve sağ yerleşim aynı. İlk metin 82, diğer üç metin 54→60 px; eşit yüz boyutu ve ortak mat malzeme. Mevcut hafif kenar/gölge korunur. Yeni konsept veya sığ prizma yok.

## Otomatik akış

UI Face 1 = DOM index 0, ilk mesaj “İşinize göre yazılım.” ve 0°. Ön planda sayfa açılınca otomatik başlar; her tamamlanmış dönüşten sonra 5000 ms okuma, yaklaşık 900 ms dönüş / cubic-bezier(.45,0,.25,1). Sıra 0→-90→-180→-270→-360→-450…; açı sıfırlanmaz. Manuel uzak seçim de komşu yüzlerden ayrı 90° adımlarla gider.

Manuel seçim otomatiği kalıcı olarak durdurmaz; seçim tamamlanınca yeni 5 saniyelik bekleme başlar. Aynı yüz seçimi de beklemeyi yeniler. Kullanıcının açık pause tercihi korunur. Hover ve kontrol alanındaki klavye odağı yeni otomatik adımı bekletir; başlamış dönüş okunur hedefe tamamlanır. Klavyeyle seçilen düğmenin odağı dönüş sırasında korunur; aria-disabled ve input guard hızlı tekrarları engeller. Arka plan sekmesinde timer çalışmaz, ön plana dönünce yeni 5 saniye başlar. Ön planda viewport dışında da döngü devam eder; önceki IntersectionObserver kapısı kaldırılmıştır.

Mobil/touch da otomatik başlar; manuel seçim zorunlu değildir. Reduced-motion ve 3D desteği olmayan ortamda otomatik kapalı, dört mesaj anlık manuel erişilebilir. Runtime tercih değişiminde hedef yüz ve birikimli açı korunur. Stable semantik metin ve yalnız manuel polite duyuru; otomatik yüzler screen reader'a tekrar tekrar anons edilmez.

## Önce / sonra ve kabul kanıtları

| Kontrol | Kanıt / sonuç |
|---|---|
| Desktop önce / sonra | [270 px önce](evidence/fullsize-before-1440.png), [420 px sonra](evidence/fullsize-after-1440.png) |
| Mobile önce / sonra | [önce](evidence/fullsize-before-390.png), [sonra Face 1](evidence/fullsize-390-face-1.png), [Face 4](evidence/fullsize-390-face-4.png) |
| 0° | [Sonra başlangıç Face 1](evidence/fullsize-after-1440.png) |
| -45° ve -135° | [45 PNG](evidence/fullsize-angle-045.png), [135 PNG](evidence/fullsize-angle-135.png); iki komşu yüz, fiziksel çakışma yok |
| -90/-180/-270/-360° | [Face 2](evidence/fullsize-angle-090.png), [Face 3](evidence/fullsize-angle-180.png), [Face 4](evidence/fullsize-angle-270.png), [Face 1 yeniden](evidence/fullsize-angle-360.png) |
| Mobil 45° | [PNG](evidence/fullsize-390-angle-045.png); viewport/destek sınırları ve hacim korunur |
| Dört eşit yüz / sabit destek / 28 responsive kontrol | [geometry QA](evidence/fullsize-geometry-qa.json) |
| 48,40 sn kesintisiz, iki tam tur | [WebM](evidence/fullsize-auto-two-cycles.webm), [cycles QA](evidence/fullsize-cycles-qa.json) |
| 33 etkileşim ve gerçek background testi | [interaction QA](evidence/fullsize-interaction-qa.json), [reduced Face 4](evidence/fullsize-reduced-motion-face-4.png) |
| Optimize statik HTML / mobile auto | [export QA](evidence/fullsize-export-qa.json) |
| Production ve sağ korunması | [scope / piksel QA](evidence/fullsize-scope-qa.json) |

Gerçek Chrome'da 0/-45/-90/-135/-180/-270/-360 ve iki otomatik tur 0…-720 doğrulandı. 48,40 sn kesintisiz 1440×960 / 25 fps WebM: sekiz dönüş yaklaşık 882–900 ms, yedi okuma arası 5033–5035 ms. 439 hareket karesinde yalnız X, monoton açı, aynı dört DOM yüzü, sabit destekler, viewport/düşey sınır ve sağ image açıklığı kontrol edildi. En fazla bir dwell ve bir completion timer; CLS 0, console/page/HTTP hata 0.

1440/1024/768/390/360/320/280 px × dört yüz = 28 responsive kontrol; text bounds, eşit W/H/H÷2, %97,2 doluluk, görünür yüzlerde no-clipping/no-overflow ve en az 44 px hedefler geçti. -45° ve -135° PNG'leri gerçek CSS transition inceleme için pause edilerek alındı; video ayrı, normal ve kesintisiz akıştır. 33 etkileşim kontrolü; hover, keyboard focus korunması, manuel sonrası auto, explicit pause/resume, mobile auto, reduced/runtime, JS-off ve fallback geçti.

Arka plan testi, görünürlük override'ı olmayan ayrı gerçek headed Chrome/default CDP context'te yapıldı: hidden tab 5,6 sn boyunca açı 0 ve paused kaldı; öne dönünce yaklaşık 5039 ms sonra -90 adımı başladı. Playwright'ın varsayılan focus emülasyonuyla yapılan ilk denemeler gerçek görünürlük kanıtı olarak kabul edilmedi. Optimize statik export HTML'de mobil auto, tam boy geometri, manuel -360 dönüş ve reduced erişim geçti. Lint/typecheck/build (19 statik sayfa) ve diff-check geçti; build'in geçici next-env referansı restore edildi.

48,40 sn kayıt gerçek headless Google Chrome viewport'udur; OS masaüstü veya 60 fps garantisi değildir. Ara açı PNG'leri gerçek transition pause edilerek alındı; kayıt pause veya hızlandırma içermez. Normal otomatik bekleme/geçiş değerleri kullanıldı. Gerçek background testi ayrıca headed, görünürlük override'ı olmayan Chrome'da yapıldı.

## Değişen dosyalar — tam liste

Uygulama:

- `app/prototype/spatial-hero/motion.ts`
- `public/prototype-assets/spatial-hero/hero.css`

Obsidian (`bayes 3.0/`):

- `03-Design/DESIGN_SYSTEM.md`
- `03-Design/MOTION_GUIDELINES.md`
- `98-Agent-Logs/CURRENT_STATUS.md`
- `98-Agent-Logs/NEXT_STEPS.md`
- `98-Agent-Logs/SESSION_LOG.md` — append.
- `98-Agent-Logs/DAILY_LOG_2026-10-13.md` — append.
- `07-Reviews/2026-10-13-Full-Size-Prism-Auto.md` — bu rapor.
- `07-Reviews/evidence/fullsize-*` — aşağıdaki yeni kanıtlar.

- `fullsize-390-angle-045.png`
- `fullsize-390-face-1.png`
- `fullsize-390-face-2.png`
- `fullsize-390-face-3.png`
- `fullsize-390-face-4.png`
- `fullsize-after-1440.png`
- `fullsize-angle-045.png`
- `fullsize-angle-090.png`
- `fullsize-angle-135.png`
- `fullsize-angle-180.png`
- `fullsize-angle-270.png`
- `fullsize-angle-360.png`
- `fullsize-auto-two-cycles.webm`
- `fullsize-before-1440.png`
- `fullsize-before-390.png`
- `fullsize-cycles-qa.json`
- `fullsize-export-qa.json`
- `fullsize-geometry-qa.json`
- `fullsize-interaction-qa.json`
- `fullsize-reduced-motion-face-4.png`
- `fullsize-scope-qa.json`

QA yardımcıları yalnız `/private/tmp/bayes-fullsize-qa/` içinde; mevcut Playwright/FFmpeg araçları kullanıldı. Yeni proje dependency'si veya config yok.

## Koruma, çözülen sorunlar ve kalan kabul

Sağ asset/CSS/grid/kadraj/kompozisyon, production homepage/shared/global/nav/layout, Bayes 2.0, Figma, rehberler, logo ve dependencies korunur. 218 korunan kaynak/asset/config SHA-256 aynı. Sağ görüntünün önce/sonra masaüstü 367.500 ve mobil 87.210 piksel karşılaştırmasında değişen piksel 0. Route ve dört mesaj yapılandırması değişmedi. Commit/push/deploy veya AI görsel üretimi yok.

İkinci dev sürecinin oluşturduğu cache çakışması ek süreç kapatılıp 3000'deki sunucu yeniden başlatılarak giderildi. İlk mobile overflow ve otomasyonun yapay visibility davranışı yukarıdaki gerçek geometri/viewport ve ayrı Chrome testleriyle çözüldü. Son kontrollerde mekanik hata, okunamayan/aynalı dinlenme yüzü, kontrolsüz boyut değişimi veya clipping gözlenmedi.

Kullanıcı büyük ana beyaz alanı, ince sabit parçaları ve perspektifi değerlendirecek. Safari/iOS/Android/VoiceOver/düşük güç cihaz ve statik host MIME testi yapılmadı. **Onay beklenir; sağ animasyona, Figma'ya veya production'a devam edilmez.**
