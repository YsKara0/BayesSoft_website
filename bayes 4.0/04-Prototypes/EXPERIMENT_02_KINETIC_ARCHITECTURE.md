---
project: BayesSoft 4.0
created: 2026-10-13
status: awaiting-feedback
tags: [bayessoft-4, prototype, kinetic-architecture]
---

# Experiment 02 — Kinetic Architecture

## Koddan önce: marka ilişkisi

1. **Nesne nedir?** Tek çekirdek yüzey, iki menteşeli bağlam kanadı ve teleskopik tabanı olan uyarlanabilir bir arayüz gövdesi. Yüzeylerde yazısız, fiziksel rölyef olarak çizilmiş arayüz blokları bulunur; bina/heykel veya üç bağımsız ekran değildir.
2. **Neden dönüşür?** Geniş çalışma alanından odaklı, dar kullanıma geçmek için. Kanatlar arkaya katlanır, destek rayları içeri kayar, aynı çekirdek içerik blokları yan yana yerleşimden dikey sıraya geçer. Yapı ve parçalar korunur.
3. **Özel yazılımı nasıl anlatır?** Aynı sistemin ihtiyaç ve kullanım alanına göre yeniden düzenlenmesini gösterir. BayesSoft'un ortak mühendislik çekirdeğiyle farklı web/mobil iş akışları geliştirmesiyle ilişkilidir; hazır tek kalıp veya zorunlu hizmet paketi iddiası değildir.
4. **Paragraf olmadan ne anlaşılmalı?** “Aynı araç geniş iş alanından kompakt arayüze uyarlanıyor; içerik ve bağlantılar kaybolmuyor.” Bu bir tasarım hipotezidir; kullanıcı algısı henüz doğrulanmadı.

## Experiment 01'in dersi

Kullanıcı geri bildirimi: Modular Assembly teknik ve görsel açıdan başarılı, BayesSoft'la anlamsal ilişkisi zayıf bulundu. Dört mimari parçanın birleşmesi, özel yazılım yerine genel bir soyut heykel olarak okundu. Kod/rota/görsel korunur. Bu deneyde yazılım bağlamı geometriye girer: arayüz rölyefleri, aynı içeriklerin yeniden sıralanması ve bağlı kanatlar. Eksik anlamı açıklama etiketi veya paragrafla kapatma hedeflenmez.

## Görsel/mekanik karar

İnce beyaz yüzeyler, mineral gri raylar, görünür eksen/pim ve küçük soft-blue kilit/aksiyon detayları. Ortografik sabit kamera ve yerel stüdyo ortamı. Geniş üç alanlı çalışma yüzeyi ↔ dar dikey çekirdek iki kararlı durumdur. Kanatlar hep menteşeye bağlıdır; farklı eksen derinlikleri arkadaki iki katmana yer açar. İçerik blokları önce düşey olarak ayrılır, sonra merkeze kayar; üst üste geçmez.

Dekoratif katlama mekanizması tek başına yine jenerik kalacağı için ilk plan, yazısız arayüz gövdesi ve içerik reflow'u ile somutlaştırıldı. Sahne tam dashboard veya gerçek ürün ekranı değildir. Sahne dışında yalnız deney adı ve durdur/oynat/geniş/kompakt kontrolleri bulunur. Yeni bağımlılık, font, model veya harici HDRI eklenmez.

## Uygulama ve kontrol kaydı

**URL:** http://127.0.0.1:3000/prototype/v4-kinetic

| Geniş kararlı durum | Kompakt kararlı durum |
|---|---|
| ![Geniş düzen](evidence/experiment-02-kinetic-wide.jpg) | ![Kompakt düzen](evidence/experiment-02-kinetic-compact.jpg) |

İlk uygulama tamamlandı. Aynı R3F/Drei/Three/esbuild bağımlılıkları kullanıldı; manifest/lockfile veya eski bundle script'i değiştirilmedi. Bağımsız Route Handler, production root layout'u atlayan HTML ve aynı origin'deki yerel bundle verir. Yeni paket, font, model veya HDRI yok. Kaynak bundle komutu: `node scripts/build-v4-kinetic.mjs`; geliştirmede `--watch` seçeneği eklenebilir. Var olan Next dev sunucusu kullanılır.

### Gerçek hareket davranışı

Tek tersinir koordinat, geniş=0 ve kompakt=1. Her geçiş **3,6 saniye**; her kararlı durumda otomatik gösterimin **4,4 saniye** beklemesi var. Önce kilit manşonları kendi pimleri üzerinde yükselir. Sol ve sağ kanat, sabit düşey menteşelerde kademeli olarak arkaya 180° döner. Aynı iki çekirdek içerik taşıyıcısı önce düşey raylarda ayrılır, sonra yatay raylardan merkeze gelir. Sonra teleskopik taban daralır ve manşonlar yerine oturur. Açılma aynı yolun tersidir: taban açılır, taşıyıcılar iki sütuna döner, kanatlar açılır, kilitler yerleşir. Parça değişimi veya loop sınırında teleport yok; kamera sabit.

Kararlı durum düğmesi otomatik gösterimi kapatır, seçilen duruma tek geçiş yapıp durur. Oynat otomatik gösterimi açıkça başlatır; Durdur mevcut pozu tutar. Bekleme sırasında R3F demand render, tek zamanlayıcıyla ilerler; aynı kareler sürekli çizilmez. Gizli sekme/ekran dışı timer ve hareket durur; geri dönüşte yeni tam bekleme verilir. Listener/timer ve yerel GPU kaynaklarının cleanup'ı kodlandı.

Mobil ilk görünüm kompakt ve durağan; Oynat veya kararlı durum seçimiyle hareket başlar. Reduced motion ilk yükleme/runtime okunur; hareket kapalı, durum seçimi anlık statik poz verir. WebGL/context hatası için iki konfigürasyonlu yerel SVG diagramı bulunur; PBR render'ın piksel eşdeğeri değildir. Bu alternatifte de geniş/kompakt seçilebilir; renderer'a geri dönüş reload gerektirir.

### Hızlı kontrol

- TypeScript no-emit/incremental=false ve yeni kaynak/script'e hedefli ESLint geçti.
- Saf pose kontrolü: 0/1 endpoint'leri, ±π menteşe sınırları, ray/mandal son pozları; 200 hareket örneğinde içerik taşıyıcıları 0,59×0,70 boyutlarıyla kesişmiyor. Bu kontrol tüm mekanizmanın swept-volume testi değildir.
- Bir yerel bundle üretimi: 1.154.570 byte sıkıştırılmamış JS, 2.538 byte CSS. Full Next production build veya paket kurulumu yapılmadı.
- Tek Chrome masaüstü incelemesi, **1470×801**: WebGL, compact→wide ve wide→compact; ara progress okumaları ve iki son poz gözlendi. Kararlı durumlar ve aynı blokların reflow'u görüldü; console error/warning yok. İki karşılaştırma JPEG'i kaydedildi.
- Tek **390×844** mobil görsel kontrolü: kompakt ilk durum, data-playing=false, mekanizmanın tüm silueti kadrajda; scrollWidth=390; üç kontrol 44px. Gerçek telefon/touch testine eşdeğer değildir. Viewport override kaldırıldı.

### Bilinen sınırlar ve algı hipotezi

Mekanizma artık yazısız bir arayüzü yeniden düzenliyor; yine de **katlanır ekran/donanım ürünü olarak okunma riski** var. Özel yazılım/iş ihtiyacı ilişkisi kullanıcının bu turdaki değerlendirmesini bekler. Rölyefler gerçek ürün veya müşteri akışı değildir. İki düzen, dört hizmetin tek tek temsil edildiği veya ürünün her ihtiyacı karşıladığı iddiasını taşımaz.

Mekanik geometri ilk görsel kinematik çalışmadır; üretilebilir CAD, fizik simülasyonu veya tüm parçalarda çarpışma kabulü yok. Gerçek cihaz/GPU/FPS, Safari, OS reduced-motion başlangıç/runtime, hızlı tekrarlar, durdurma anları, WebGL/context-loss, ekran okuyucu/zoom ve route/GPU cleanup ayrı final QA. Küçük ekran rölyef detayları ana ekrandan daha az seçilir. Yeni bundle, kaynak değişince yenilenmelidir; production entegrasyonu yok.

65 başlangıç hash'i son kontrolde aynı: `/prototype/v4-modular` kaynak/çıktıları, 3.0 route, seçili production component/global/layout, marka temeli, manifest/lockfile ve eski bundle script'i korundu. Figma, secret/.env, commit/push/deploy işlemi yok. Şimdi dur; kullanıcı geri bildirimi beklenir.

### Dosyalar

- `app/prototype/v4-kinetic/route.ts`
- `app/prototype/v4-kinetic/scene/Scene.tsx`
- `app/prototype/v4-kinetic/scene/entry.tsx`
- `app/prototype/v4-kinetic/scene/resources.ts`
- `app/prototype/v4-kinetic/scene/motion.ts`
- `app/prototype/v4-kinetic/scene/fallback.ts`
- `app/prototype/v4-kinetic/scene/experiment.css`
- `scripts/build-v4-kinetic.mjs`
- `public/prototype-assets/v4-kinetic/experiment.js`, `experiment.css`, `experiment.js.LEGAL.txt`
- Bu deney notu; Experiment 01 notuna kullanıcı değerlendirmesi; `PROTOTYPE_PLAN.md` ilerleme kaydı.
- `98-Agent-Logs/CURRENT_STATUS.md`, `NEXT_STEPS.md`, `SESSION_LOG.md`, `DAILY_LOG_2026-10-13.md`
- `04-Prototypes/evidence/experiment-02-kinetic-wide.jpg`, `experiment-02-kinetic-compact.jpg`
