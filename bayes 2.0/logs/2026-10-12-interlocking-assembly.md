# 12 Ekim 2026 — Nasıl Çalışıyoruz: geometrik assembly

## Yetki ve kapsam

Kullanıcı [[bayessoft-how-we-work-assembly-interaction-spec]] içindeki tüm checkpoint'leri uygulamaya yetki verdi. Yeni brief, önceki [[bayessoft-how-we-work-modular-assembly-v1]] dashboard görselini ve o tasarımın Phase C onay kapısını geçersiz kılar. Eski loglar tarihsel kayıt olarak korunur. Yalnızca süreç bölümü ve process çevirileri değişti; Web–Mobil–AI/hero/header/projeler/referanslar ve önceki AI çalışma ağacı korundu. Branch feature/bayessoft-2.0; commit/push/merge/deploy yok.

## Checkpoint 0–2 — Statik kompozisyon ve ayrık pozlar

Eski dashboard DOM/CSS ve yoğun arayüz ifadeleri kaldırıldı. Dört minimal modül: dikey Anla, ince üst Tasarla, geniş açık Geliştir, alçak İşlet. Desktop ortak viewBox 800×300, mobil 500×390; tek yuvarlatılmış dış silüet. Dört gerçek bağlantı ortak parametrelerden üretilir:

1. Anla sağ dili → Geliştir sol yuvası.
2. Tasarla alt dili → Geliştir üst yuvası.
3. İşlet üst dili → Geliştir alt yuvası.
4. Anla alt topuğu → İşlet üst-sol yuvası.

Birleşim profilleri karşı parçanın path'inde ters yönde tekrar edilir; boş CSS gap veya yan yana dört kart yok. İnce rim, sabit hafif contact shadow, küçük soyut çizgiler, tek browser/field ipucu ve muted yeşil nokta. Space Grotesk/Inter, dark foundation ve açık #F5F7FB merkez; ürün adı/KPI/menü/grafik yok. HTML kısa etiketler, erişilebilir açıklama ve dışarıda semantik dört adım listesi; dekoratif önizleme focus almaz. Örnek arayüz açıklaması TR/EN/DE korunur.

Önce joined statik kompozisyon, sonra ayrık pozlar Chrome'da incelendi. Ayrık desktop offsetleri: Anla -32px X; Tasarla -28px Y; Geliştir +28px X/+4px Y; İşlet +28px Y. Hitbox boşlukları taşmayı önler; metin/shape ölçüleri state değişiminde sabittir. Mobil farklı oranla aynı bağlantıları korur, tamamlanmış görünümü kullanır. Bölüm normal akışta yaklaşık 662px desktop (önceki dashboard yaklaşık 747px); sticky/viewport spacer yok.

## Checkpoint 3–4 — Giriş ve hover

State'ler: initialSeparated, assembling, assembled, hoverSeparated, reassembling. SSR tamamlanmış obje gösterir. Yalnızca ilk effect sırasında viewport altında kalan obje ayrık hazırlanır; >=768px, hover/fine-pointer, normal motion ve ResizeObserver desteği gerekir. IntersectionObserver header üst payıyla %45 görünürlükte bir kere giriş başlatır. Her parça 550ms ease-out, 250ms stagger; toplam 1.3s. İlk tetikte observer ayrılır, consumed ref replay'i engeller. İlk anda görünür/restore-scroll karşılaşmalarında veya observer desteği yoksa giriş atlanır; görünür hydration flash yok.

Paylaşılan hitbox hover: Anla -12px X, Tasarla -12px Y, Geliştir +12px X/+2px Y, İşlet +12px Y. Ayrılma/geri birleşme 380ms, stagger yok. Dar tablette travel %65'e iner (hover yaklaşık 8px). Parçalar pointer-events:none; boşluklarda hover flicker yok. Giriş esnasında pointer takip edilir ama giriş kesilmez; son parçanın bitişinde gerçek pointer durumuna geçilir. Rejoin sırasında tekrar hover yumuşak biçimde hedefi değiştirir; timer ve gecikmiş state kuyruğu yok.

Mobil/coarse/touch/reduced-motion doğrudan joined görünüm; capability/geometri resize tamamlanmış state'e döner. Reduced-motion CSS guard dönüşümü anında kaldırır. Motion yalnızca transform; opacity/ölçü/filter animasyonu yok. Yerel IntersectionObserver/ResizeObserver ve media listener temizlenir. Scroll listener, wheel interception, scrollTo, sticky, scrubbing, sürekli rAF, bounce/3D/yeni kütüphane yok.

## Dosyalar

- components/ProcessSection.tsx ve ProcessSection.module.css: kısa normal-akış section/annotation, process copy wiring.
- components/ProcessAssembly.tsx ve ProcessAssembly.module.css: yeni dört parçalı vektör obje ve yerel stiller.
- components/processAssemblyGeometry.ts: ortak kenar/joint path üretimi, desktop/mobil geometri.
- components/processAssemblyMotion.ts: saf state geçişi, offset ve süre yardımcıları.
- components/useAssemblyInteraction.ts: capability/viewport/hover/resize lifecycle.
- data/i18n.ts: yalnızca process alanında kısa TR/EN/DE; eski dashboard ifadeleri kaldırıldı.
- Obsidian handoff/roadmap/tasarım sistemi, güncel/tarihsel brief ve bu log.

## Checkpoint 5 — Doğrulama

- npm run typecheck: geçti.
- Hedefli ESLint (ProcessSection, ProcessAssembly, geometry/motion/hook ve data/i18n): geçti.
- CSS parse, pure state/timing/reset/hover çatışma kontrolleri: geçti.
- Vektör path iç alanı: desktop 21.912 ve mobil 17.784 örnek noktada her nokta tam bir parçaya ait; açıklık/üst üste alan yok. Bu sayısal geometri kontrolü raster anti-alias kalitesinin garantisi değildir.
- npm run build: geçti; 18 statik sayfa. Google Fonts fetch için build network izni kullanıldı. Üretilen next-env.d.ts tur öncesi içeriğe geri getirildi; unrelated kaynak değişmedi.
- SSR çıktı: assembled state ve dört modül birer kez mevcut.
- Process dışı tüm çeviriler tur öncesi kaynakla eşit; korunan kaynak hash'leri eşit.
- Hedefli Chrome: bir defalık giriş, hover/rejoin, scroll away/back replay yokluğu ve giriş sırasında hover doğrulandı. State değişiminde section yüksekliği aynı.
- DE uzun etiketler ile 1440/1024/768/390/360px: hitbox ve etiketlerde yatay taşma yok. Desktop 800×300px obje; 768px'de yaklaşık 666×250, 390px'de 334×261, 360px'de 304×237. Mobil static assembled, gereksiz zoom/scrubbing yok.
- git diff --check: geçti.

Tek son review görseli repo dışında: /private/tmp/bayessoft-interlocking-joined.png. Tüm sayfanın kapsamlı browser QA'sı yapılmadı.

## Manuel kabul ve sınırlar

Kullanıcı joined objenin estetiğini ve 1.3s/380ms motion hissini değerlendirmeli. Gerçek Windows/telefon, OS reduced-motion ayarı, Safari ve farklı zoom/DPR'de dock çizgilerinin optik kalitesi bu turda test edilmedi. Ortak path geometrisi tam eşleşse de raster anti-alias nedeniyle çok ince seam bazı zoomlarda görünebilir. Mobilde tüm parçalar doğrudan birleşiktir; touch cihazda hover işlevinin karşılığı gerekmeyen statik sonuç tercih edildi. Restore-scroll/ilk anda görünür obje için entrance atlama bilinçli flash önleme kararıdır. Kabul listesi bu sınırlamalarla birlikte kullanıcı incelemesine bırakılır.
