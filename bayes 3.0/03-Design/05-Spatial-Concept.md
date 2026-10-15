# BayesSoft 3.0 — Spatial Concept

12 Ekim 2026 · Mevcut Spatial Concept page'de sol modül rafinesi tamamlandı. Website uygulaması ve nihai tasarım onayı yok. Çalışma hafızası: [[98-Agent-Logs/CURRENT_STATUS]].

## Referans ve tasarım planı

`02-Research/hero-spatial-reference.png` incelendi. Referanstaki sol tipografi, açık yüzeyler, sağdaki mimari derinlik ve sınırlı mavi beğenilen özellikler. Son kullanıcı talebiyle üst-orta-alt panel devamlılığı sol modüle uyarlanır; referansın marka, ikon, ölçü, kalın siyah dış çerçeve ve asılı cam plakaları aktarılmaz.

Mevcut yön: solda **sabit üst panel + dönen orta yüz + sabit alt panelden oluşan mimari modül**, sağda **ortak zemine bağlı hizmet atölyesi**. Son iterasyon yeni konsept üretmez; sağ sistemi değiştirmez. Web ve mobil görünür deneyim modülleri; AI bağlantılı işlem düğümleri; özel yazılım birbirine bağlı workflow blokları. Dördü aynı beyaz/açık gri yüzey ve kısa kobalt kenar diliyle aynı ailede. Bağlantı omurgası ilişkili parçaları anlatır; zorunlu dört hizmet paketi anlamına gelmez. Bu hizmet sistemi konsept diyagramıdır, gerçek müşteri ürünü değildir.

```text
BayesSoft                  Projeler / Hizmetler / İletişim

Sabit üst kontrol paneli  Bağlı dört hizmet modülü
Dönen orta yüz A veya B   Ortak zemin / bağlantı omurgası
Sabit alt CTA paneli      Dört görünen hizmet etiketi

Minimal proje vitrini (ayrı öneri frame'i)
```

## Kullanıcı tarafından seçilen metinler

- Yüz A: **İşinize göre yazılım.**
- Yüz B: **Web, mobil, AI ve özel çözümler.**
- Yüz C: **Karmaşık ihtiyaçlar için sade ürünler.**

A/B ana döngü; C ayrı alternatif, otomatik döngüye girmez. Yeni başlık/slogan üretilmez. Satır kırımları sadece kompozisyon içindir.

## Geçici görsel deneme

Instrument Sans Medium/SemiBold: kısa, güçlü ama gazete çağrışımı olmayan tipografi. Beyaz #FCFCFA, kömür #20282F, soğuk yüzey #EDF1F4, orta gri #66737E, kobalt #235AD6 ve yan yüz #D6E0EC. Font, palette, ölçek ve hareket değerleri kesin marka kararı değildir.

## Motion yaklaşımı

İki komşu yazı yüzü arasında X ekseninde 90° çeyrek dönüş araştırılır. Orta fazda iki yüz yaklaşık 45° olduğundan okunurluk, karşılıklı iki yüzün kenara döndüğü bir flip'e göre daha iyi korunabilir. Kesin fiziksel his ve okunurluk browser prototipinde sınanmalı. Başlangıç beklemesi 7 saniye; 6–8 saniye brief aralığı. Hover/focus durdurma, açık Duraklat kontrolü, mobil elle geçiş ve reduced-motion'da statik görünüm hazırlanır. Figma ara durumları gerçek animasyon değildir.

## Özgünlük kontrolü

Referansın serbest asılı plaka dünyası yerine zemine bağlanan somut dört hizmet; tek ağır dış çerçeve yerine açık kompozisyon; mavi kelime vurgusu yerine fiziksel bağlantı ve eylem mavisi; açıklama kutuları yerine seçilmiş kısa metin. Önceki site layout/bileşenleri yeni hero'nun kaynağı değildir.

## Mevcut Figma page ve frame'ler

[BayesSoft 3.0 — Spatial Concept](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?page-id=36%3A64&node-id=37-83)

| Frame | Link | İçerik |
|---|---|---|
| Desktop Hero — Yüz A | [İlk görünüm](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=37-83) | Seçilen ilk metin, sabit CTA ve spatial sistem |
| Desktop Hero — Yüz B | [İkinci yüz](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=37-193) | Aynı kompozisyonda seçilen ikinci metin |
| Desktop Hero — Yüz C | [Alternatif](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=37-303) | Ana döngü dışındaki alternatif metin |
| Mobile Hero — Yüz A | [Mobil ilk görünüm](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=37-413) | 390 px, doğal dikey akış, elle geçiş |
| Mobile Hero — Yüz B | [Mobil ikinci yüz](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=43-481) | Aynı ölçülerde ikinci metin |
| Reduced-motion | [Statik desktop A](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=43-593) | Otomatik hareket yerine Diğer yüz kontrolü |
| Spatial Service System | [Detay görünümü](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=37-524) | Ortak zemin, dört modül ve anlam açıklamaları |
| Motion ve interaction | [A–ara faz–B](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=40-479) | 0°/45°/90°; süre, pause, mobil ve reduced-motion notları |
| İlk proje bölümü | [Minimal vitrin](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=37-627) | Gerçek FurtherUp Drive ekranı ve kısa caption |

![[evidence/spatial-left-refined-desktop-a.png]]

![[evidence/spatial-left-refined-motion.png]]

## 12 Ekim — yalnız sol modül rafinesi

Mevcut altı hero frame'inin sol alt ağacı güncellendi: desktop A/B/C, mobil A/B ve reduced-motion A. Ana frame ID'leri ve seçilen metin katmanları korundu. Motion board aynı ID ile güncellendi. Yeni page veya alternatif konsept açılmadı.

Üst kontrol bandı, beyaz orta yazı yüzü ve alt eylem paneli ortak taşıyıcı üzerindedir. Üstte Duraklat/Diğer yüz ve yüz göstergesi, altta hedef kitle cümlesi ve iki eylem bulunur. Dışarıda bağımsız duran açıklama, CTA ve kontrol satırı bu sistemin içine alındı. Yeni başlık veya slogan yok.

Kesintisiz yan kesit ve alt taban tüm kolonun derinliğini taşır. İki ince derz yan yüzeye devam eder; iç paneller ayrı yuvarlatılmış kartlara dönüşmez. Tek ortak dış köşe ve hafif gölge kullanılır. Desktop: 540×635 px modül, 60/361/194 px üst/orta/alt, 6 px derz ve 8 px derinlik. Mobil: 342×500 px modül, 48/238/200 px paneller, 4 px derz ve 6 px derinlik. Ölçüler, yüzey renkleri ve gölge geçici; kullanıcı onayı yok.

A/B aynı taşıyıcı ve aynı optik merkezle hazırlanır; C yalnız alternatif olarak kalır. Dönen parça orta yüzdür. Üst/alt paneller, kontroller ve CTA sabit olduğundan dönüş, kolonun tamamını çeviren veya kart kaydıran bir efekt değildir. A–ara faz–B şemasında sabit parçalar aynı koordinatlarda çizildi; ara fazda iki komşu orta yüz ve düzenlenebilir metinler gösterildi. Bu çalışan motion prototipi değildir.

Altı hero ve motion board ekran görüntüsü incelendi. Başlık, Türkçe karakterler, panel devamlılığı, CTA ve yüz kontrolü kesilmeden görünüyor; altı modülde text-parent sınır kontrolü taşma bulmadı. Sağdaki altı hizmet alt ağacı, iki kaynak component, detay ve proje vitrini için başlangıç/son katman özellikleri ile mutlak sınırlar birebir aynı. [Kontrol kaydı](evidence/spatial-left-refinement-qa.json).

Güçlü taraf: sol kolon artık eylemleri ve durumunu kendi içinde taşıyan tek yapı; üst-alt devamlılık ve merkez yüz ayrımı açık. İncelenecek taraf: alt panelin boşluğu ve derz ağırlığı kullanıcı değerlendirmesine açık; durağan görüntü gerçek dönüşün fiziksel hissini ve ara kare okunurluğunu kanıtlamaz. Sağ sistemin yeniden tasarımı bu turun konusu değildir.

Diğer güncel render'lar: [Desktop B](evidence/spatial-left-refined-desktop-b.png), [alternatif C](evidence/spatial-left-refined-desktop-c.png), [mobil A](evidence/spatial-left-refined-mobile-a.png), [mobil B](evidence/spatial-left-refined-mobile-b.png), [reduced-motion](evidence/spatial-left-refined-reduced-motion.png). Önceki render'lar silinmedi.

## Sağdaki sistemin görsel mantığı

Geniş browser modülü Web'i, cihaz oranlı modül Mobil'i temsil eder. AI üç ilişkili işlem düğümüyle, özel yazılım alçak workflow parçalarıyla anlatılır. Her modül aynı yüz renkleri, kamera ve kısa mavi kenar dili kullanır. Mavi omurga paylaşılan bağlamı gösterir; rastgele uçuş, glow ve cam materyal yok. Browser ve mobil görünür deneyim formları; AI/özel yazılım işlem ilişkileridir. Dört hizmet metin etiketiyle aynı semantik ağırlıkta kalır.

Native sistem 2D izometrik vektör yüzeylerden kuruldu. Her hero içinde 75 vector katmanı, düzenlenebilir text, group/component/instance var. Hero ve detayda image fill yok; yalnız vitrin gerçek repository PNG'sini raster içerik olarak kullanır. Hero screenshot'u Figma wrapper'ına image olarak yerleştirilmedi.

## Hareket davranışı

7 saniye okuma → yaklaşık 480 ms çeyrek dönüş → B'de 7 saniye okuma → geri dönüş. Bunlar geçici başlangıç değerleri. Hover/focus otomatik ilerlemeyi durdurur; Duraklat kalıcıdır. C döngüye eklenmez. Reduced-motion'da otomatik sayaç/3D kapalı; statik A ve anlık elle seçim. Mobil başlangıçta statik A, Diğer yüz ile B.

Ara fazın ortak kenarı ve bitişik orta yüzleri fiziksel rotor fikrini taşır; üst-alt paneller ve taşıyıcı sabittir. Yatay kayan iki kart yok. Tipografi bulanıklaştırılmaz. Gerçek perspektif, easing ve her karede okunurluk ölçülmedi; Figma statik durumları bir motion prototipi değildir. Ayrıntı ve kabul kriterleri [[MOTION_GUIDELINES]] içinde.

## Referanstan özgünleşme ve eleştiri

Referansın üst-orta-alt devamlılık fikri son brief gereği yorumlandı; logo ve açıklama kutularının içeriği/yerleşimi kopyalanmadı. BayesSoft modülünün üstü yüz kontrolü, ortası rotor, altı sabit eylem panelidir. Büyük koyu dış çerçeve yok. Asılı cam plakalar yerine zemine oturan dört hizmet modülü, ortak bağlantı omurgası ve mat yüzler var. Başlıktaki renkli son kelime tekrarlanmadı; mavi bağlantı ve eylemde. Referans/Linear marka, ikon ve ürün görselleri kullanılmadı.

Güçlü taraf: kısa seçilmiş mesaj, anlaşılır browser/phone formları ve tutarlı mimari aile. Zayıf taraf: AI ve özel yazılımın soyut blokları metin olmadan karışabilir; bu nedenle etiketler sürekli görünür. Ortografik native vektörler mimari derinlik verir ama foto-gerçekçi 3D değildir. Dönen nesne, kullanıcı okumasını bölme riski taşır; statik/elle geçiş tamamlanmış bir alternatif olarak hazırlandı. Gerçek iş kanıtı görsel modelden ayrı vitrinle kurulmalıdır.

## Önceki spatial reset tesliminin doğrulaması — tarihsel

- Yeni page oluşturma başarılı; ayrı dosya gerekmedi. Önceki 0:1 ve 20:2 sayfaları için işlem yapılmadı; koruma kontrolünde 9 ve 18 üst seviye öğenin ID/ad/ölçü listesi önceki envanterle eşleşti.
- Üç desktop, iki mobil, statik reduced-motion, detay, motion ve vitrin frame'leri render edildi. İlk kadrajda sistem küçük kaldı; sıkı native kadrajla görsel büyütüldü. Mobil dış gölge sınırı clip ile düzeltildi. İnceleme sonrası uygun clipping'i dikkate alan sınır kontrolünde gerçek taşma yok.
- Seçilen A/B/C metinleri geri okundu; sadece satır kırımı eklenmiş, kelime/noktalama aynı. Instrument Sans Medium fontu ve Türkçe glyph'ler incelendi; missing-font yok.
- Düz renk kontrastları: ana metin/canvas 14.54:1, ikincil/canvas 4.73:1, beyaz/mavi CTA 5.99:1. Bunlar tüm interactive state veya WCAG kabulü değildir.
- Hero'lar 1440×878; mobil A/B yaklaşık 390×1058. Mobil frame gerçek cihaz, 360 px, zoom veya erişilebilirlik/browser testi yerine geçmez.
- AI kredisi tüketen image/model/generative araçları çağrılmadı. Native path ve text üretimi kullanıldı.
- Başlangıç/son SHA-256 karşılaştırmasında website, eski kasa, rehberler, logo denemeleri ve referans görseli dahil 208 korunan dosya aynı. Güncellenen altı notun Obsidian bağlantıları çözümlendi; dokuz spatial render dosyası kaydedildi. `git diff --check` geçti; takip edilen dosyalarda fark yok. Commit/push/deploy yok; frontend başlamadı.

Güncellenen ana notlar: [[01-Brand/BRAND]], [[01-Brand/CONTENT_GUIDELINES]], [[DESIGN_SYSTEM]], [[MOTION_GUIDELINES]]. Karar kaydı: [[05-Decisions/2026-10-12-spatial-concept-reset]].

## Onay kapısı

Güncel inceleme yalnız sol üst-orta-alt modülün oranları, panel devamlılığı ve orta yüz dönüş mantığıdır. Font, palette, ölçü, 90° nesne modeli ve timing onaylanmış marka kararı değildir. Sağ sistemde ek geliştirme ve frontend uygulaması yapılmaz; kullanıcı onayı beklenir. Son görev kaydı: [[98-Agent-Logs/SESSION_LOG]].
