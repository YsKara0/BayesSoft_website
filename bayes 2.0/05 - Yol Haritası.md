# 04 — BayesSoft 2.0 Roadmap

## 12 Ekim 2026 — Güncel geometrik assembly

- [x] Checkpoint 0: eski dashboard incelendi; dört ortak dil/yuva bağlantısı koddan önce tarif edildi.
- [x] Checkpoint 1–2: sade dört parça, tamamlanmış ve ayrık pozlar; desktop/mobil ortak kenar geometrisi.
- [x] Checkpoint 3: 1.3s tek viewport girişi; scroll geri dönüşünde replay yok.
- [x] Checkpoint 4: paylaşılan hover hitbox, kısa ayrılma/yeniden birleşme; motion/state çatışması kontrolü.
- [x] Checkpoint 5: TypeScript/hedefli lint/build, geometri/state/CSS/kapsam ve beş genişlikte Chrome kontrolleri.
- [x] Mobil/touch/reduced-motion statik görünüm, kısa TR/EN/DE metin, örnek arayüz açıklaması.
- [ ] Kullanıcı geometrik kompozisyon ve motion hissi kabulü; gerçek Windows/telefon ve farklı zoom/DPR incelemesi.

Yetki ve güncel tasarım: [[bayessoft-how-we-work-assembly-interaction-spec]]. Eski dashboard/Phase B ve eski Phase C onay kapısı bu tasarım için geçersizdir; tarihsel loglar korunur. Sticky/scroll spacer yok, Web–Mobil–AI değişmedi. Detay: [[logs/2026-10-12-interlocking-assembly]]. Commit/push/merge/deploy yok.

## 12 Ekim 2026 — Modular Product Assembly Phase B

> Tarihsel kayıt; aşağıdaki dashboard ve bekleyen Phase C işi güncel geometrik assembly tarafından değiştirildi.

- [x] Phase A onaylandı; dört tamamlayıcı yapısal modül/topoloji.
- [x] Tek premium teslim workspace'i; tamamlanmış statik arayüz varsayılan.
- [x] Ayrık başlangıç pozları CSS'te hazır; giriş animasyonu uygulanmadı.
- [x] TR/EN/DE, disclosure, mobil/reduced-motion tamamlanmış görünüm.
- [x] TypeScript/lint/CSS/kapsam kontrolleri; hedefli desktop/tablet/mobil browser ölçümleri.
- [ ] Kullanıcı Phase B kompozisyon/görsel onayı.
- [ ] Phase C giriş animasyonu — ayrı onay gerektirir.

Önceki Sticky Process Strip kararı bu brief ile geçersizdir; tarihsel loglar korunur. Detay: [[logs/2026-10-12-process-assembly-phase-b]]. Commit/push/merge/deploy yok.

## 12 Ekim 2026 — Sticky Process Strip

- [x] Dört kart yerine yatay gösterge ve ortak aktif içerik yüzeyi.
- [x] Kısa TR/EN/DE metin, 180ms crossfade, yalnızca 240–300px ek scroll.
- [x] Klavye/fare gösterge erişimi; reduced-motion ve kısa viewport statik akış.
- [x] TypeScript/lint/CSS ve adım aralık kontrolleri, diff-check.
- [ ] Kullanıcı manuel scroll, klavye ve mobil yerleşim değerlendirmesi.

Web–Mobil–AI ve diğer bölümler korunur. Detay: [[logs/2026-10-12-sticky-process-strip]]. Commit/push/deploy yok.

## 12 Ekim 2026 — AI Studio yüzey hiyerarşisi

- [x] Koyu dış çerçeve + açık talep listesi/beyaz çalışma panelleri.
- [x] Mavi aktif/aksiyon, soft mor AI etiketi, küçük yeşil aksiyon ikonları.
- [x] Metin ve responsive yapı korundu; CSS/temel kontrast/diff kontrolleri geçti.
- [ ] Kullanıcı manuel statik görünüm ve dar ekran değerlendirmesi.

Detay: [[logs/2026-10-12-ai-studio-light-surfaces]]. Commit/push/deploy yok.

## 12 Ekim 2026 — AI scroll sahnesi: Workflow Studio

- [x] Üç kart yerine tek yazılım yüzeyi; talepler, AI taslağı ve insan onayı.
- [x] Kategori/öncelik önerisi, kısa TR/EN/DE metinler ve örnek arayüz etiketi.
- [x] Kompakt mobil yerleşim; mevcut sahne zamanlaması/sticky/Web/Mobil korunur.
- [x] TypeScript/lint/CSS/sınıf ve diff kontrolleri.
- [ ] Kullanıcı manuel statik görünüm ve mobil okunabilirlik değerlendirmesi.

Detay: [[logs/2026-10-12-ai-workflow-studio]]. Commit/push/deploy yok.

## 11 Ekim 2026 — Mobil görsel bütünlüğü

- [x] Lighten yerine dar edge fade; görsel renkleri korunur.
- [x] Desktop görsel/metin oranı ve boşluk dengesi, %6 statik büyütme.
- [x] Tablet/mobil yerleşimleri ve Mobil dışı CSS korunma kontrolü; diff-check.
- [ ] Kullanıcı manuel kenar yumuşaması/telefon detayları değerlendirmesi.

Kaynak kenar ışıkları nedeniyle CSS entegrasyonunun sınırı var; dosyalar değiştirilmedi. Detay: [[logs/2026-10-11-mobile-visual-integration]]. Commit/push/deploy yok.

## 11 Ekim 2026 — Mobil yetkinlik görseli

- [x] Placeholder yerine kullanıcı PNG'sinden optimize WebP; kaynak korunur.
- [x] Tam görsel/contain, responsive kare alan, lacivert zeminle blend.
- [x] TR/EN/DE konsept etiketi; Web/AI ve diğer bölümler korundu.
- [x] TypeScript/lint/CSS/asset ve koruma kontrolleri, diff-check.
- [ ] Kullanıcı manuel görsel boyut/zemin değerlendirmesi.

Detay: [[logs/2026-10-11-mobile-concept-visual]]. Önceki Mobil placeholder adımı bu kayıtla güncellendi; AI görsel alanı henüz korunuyor. Commit/push/deploy yok.

## 11 Ekim 2026 — Yetkinlikler editorial ilk sürüm

- [x] Beyaz kartlar/listeler kaldırıldı; üç farklı oran ve dönüşümlü geniş yerleşim.
- [x] Gerçek FurtherUp Drive Web görseli; Mobil/AI için açıkça etiketli değiştirilebilir alanlar.
- [x] TR/EN/DE, responsive tek sütun, mevcut hizmet linki ve lacivert tema korundu.
- [x] TypeScript/lint/CSS ve diff kontrolleri; yeni animasyon yok.
- [ ] Kullanıcı manuel statik yerleşim değerlendirmesi.
- [ ] Mobil/AI nihai görsel seçimi (bu tur uygulanmadı).

Detay: [[logs/2026-10-11-capabilities-editorial]]. Commit/push/deploy yok.

## 11 Ekim 2026 — Header logo v2 taslak denemesi

Kullanıcı assets/logo_v2 taslağını yalnızca header'da denemeyi istedi. Üç PNG incelendi; tam logo bayes-logo-purple.png (2163×371, şeffaf RGBA) seçildi; 32/192px ikonlar kullanılmadı. Beyaz wordmark/mor simge koyu header üzerinde renk olarak uygun; asset görseli ve alfa pikselleri incelendi, canlı tarayıcı görünümü kontrol edilmedi.

Header.tsx yeni tam logoyu statik Next Image import ile kullanır; yeni public kopyası veya değiştirilmiş görsel yok. Ana sayfa Link/aria-label korunur. Header.module.css: oran korunarak desktop 40px yüksekliğe (~233px genişlik), tablet/mobil 32px (~187px genişlik); block img ve flex ortalama. Navigasyon/dil/menu/progress/header yüksekliği değişmedi. Ortak Logo.tsx, eski logo dosyaları, footer ve favicon değişmedi. Geri dönüş: Header'ta eski Logo import ve `<div className={styles.logo}><Logo variant="light" /></div>` kullanımını geri getir; logo yüksekliğini desktop 46px, tablet/mobil 40px'e döndür. Diğer çalışma ağacını resetleme.

TypeScript, hedefli ESLint, CSS parse, Header kaynağında yalnızca logo değişimi ve ortak Logo korunması, diff-check geçti. Tarayıcı/screenshot/build yok; canlı optik kabul kullanıcıda. Commit/push/deploy yapılmadı. Detay: [[logs/2026-10-11-header-logo-v2]].

## 11 Ekim 2026 — Referanslar monokrom/renkli etkileşimi

ClientsSection.module.css: bant #D8DEE8. Logo görselleri normalde grayscale(1) ile tek renk gri ailesinde; yalnızca ilgili kart fine-pointer hover veya focus-visible aldığında grayscale(0) ile 300ms ease üzerinden orijinal renklerine döner. Beyaz kartlar, kaynak dosyalar ve logo oran/ölçüleri değişmedi. Gömülü beyaz arka planları kaldırmak/koyulaştırmak için brightness, invert, blend veya mask kullanılmadı; beyazlar kartla bütünleşir. Grayscale kaynak parlaklığını koruduğu için logolar aynı sabit lacivert renge zorlanmaz; bu tercih beyaz zeminleri ve tanınabilirliği korur. Mobilde hover bağımlı bilgi yok; logo/isim/linkler korunur ve sticky touch-hover efekti uygulanmaz. Reduced-motion'da renk değişimi anlık olur.

ClientsSection.tsx: bağlantısız ilk grup logo kartları da klavyeyle focus alabilir; gizli ikinci grup tab dışındadır. Linkler ve sıralama aynıdır. Marquee/global CSS, süre/döngü, hover/focus/touch durma ve reduced-motion yatay erişim kuralları değişmedi.

TypeScript, hedefli ESLint, CSS parse ve TSX'in yalnızca tabIndex farkı taşıması, diff-check geçti. Tarayıcı/görsel test yok; manuel kabul kullanıcıda. Başka bölüm değişmedi. Commit/push/deploy yok. Detay: [[logs/2026-10-11-reference-monochrome]].

## 11 Ekim 2026 — Referanslar revizyonu

- [x] #E4E9F1 zemin, tutarlı beyaz kartlar ve logo optik ölçüleri.
- [x] Veri/sıra/linkler ve mevcut eşit gruplu marquee döngüsü korundu.
- [x] Inline pause override kaldırıldı; hover/klavye/touch pause ve reduced-motion erişimi.
- [x] TypeScript, hedefli lint, CSS/veri/döngü koruma ve diff-check.
- [ ] Kullanıcı manuel optik hizalama ve marquee etkileşim kontrolü.

Detay: [[logs/2026-10-11-reference-polish]]. Commit/push/deploy yok.

## 11 Ekim 2026 — Koyu bölüm renk birleşimleri

Kullanıcı mevcut yerleşimleri ve referanslara kadar renk dağılımını onayladı. Yalnızca app/globals.css ve WebToMobileTransition.module.css değişti. Hero → Web mevcut ortak lacivert birleşimi korundu. Sticky sahnenin ve reduced-motion zemininin alt 6rem'inde hafif ambient ana --bs-foundation (#101827) tonuna söner; kenar shading maskesi de alt sınırda şeffaflaşır. Ana sayfadaki Yetkinlikler üst/alt 48–80px içinde aynı ana laciverte birleşir; orta zemin --bs-surface-dark (#17263F) kalır. Yetkinlikler'in dış alt çizgisi yalnızca renk olarak şeffaflaştı (border kalınlığı korunur); Projeler'in mevcut koyu zemini ve açık Referanslar tasarımı değişmedi.

Global ekleme yalnızca main > #capabilities.bs-home-section seçicisine sınırlıdır; diğer sayfa ve header/kartlar etkilenmez. Yeni glow/animasyon/alan yok. Tüm section ölçü/padding ve motion kaynakları korunur. PostCSS parse, globals'ın yalnızca hedefli ek kural içermesi, sahne CSS'inde yalnızca background/mask deklarasyonlarının değişmesi ve diff-check geçti. CSS-only işte TypeScript/build/tarayıcı tekrarlanmadı; görsel kabul kullanıcı manuel kontrolünde. Commit/push/deploy yok. Detay: [[logs/2026-10-11-dark-section-flow]].

## 11 Ekim 2026 — Web giriş boşluğu: içerik yüksekliğine bağlı yerleşim

Önceki renk/%4 konum düzeltmesi kullanıcı tarafından yetersiz bulundu. Web başlangıç opacity'si zaten 1; ek fade uygulanmadı. WebToMobileTransition.tsx/module.css içinde yalnızca Web metni/paneli yeni webEntry grid kapsayıcısına alındı. Desktop header + 32px'den başlayan yan yana düzen, tablet header + 24px ve mobil header + 16px'den başlayan üst üste düzen kullanılır. Tablet/mobil panel, viewport'un %65/%72 merkezinde beklemek yerine gerçek metin yüksekliği + 24px/20px boşluk sonrasında gelir. Panelin -50% x/y merkezleme transformları kaldırıldı; ölçek/opacity ve Web metninin çıkış hareketi korunur. Web, stage doğal scroll ile ekrana girerken görünür; sticky başladığında aynı grid konumunu kullanır.

Hero v1 kaynağı/vitrini ve sahne içerikleri değişmedi. Mobil/AI timing ve markup, tüm motion aralıkları/useScroll/spring, stage top/height/min-height, 340/280/260svh yükseklikler ve reduced-motion statik akış birebir korunur. Yeni animasyon/kütüphane yok. TypeScript, hedefli ESLint, CSS parse, Web dışı deklarasyon ve motion/Mobil/AI/reduced-motion kaynak koruma kontrolü, diff-check geçti. Tarayıcı testi yapılmadı; görsel kabul ve özellikle küçük yükseklikli ekran kontrolü kullanıcıda. Commit/push/deploy yok. Detay: [[logs/2026-10-11-web-entry-layout]].

## 11 Ekim 2026 — Hero → Web kesintisiz akış

- [x] Ara koyu ton yerine ortak lacivert zemin; sınırda ambient vurgularının yumuşaması.
- [x] Hero alt boşluğu azaltıldı; desktop Web metin/paneli birlikte hafif yukarı alındı.
- [x] Tablet/mobil sahne yerleşimleri, sticky geometrisi, timing ve toplam scroll yüksekliği korundu; reduced-motion statik giriş boşluğu dengelendi.
- [x] CSS parse, sınırlı deklarasyon değişiklikleri/motion kaynak korunması ve diff-check.
- [ ] Kullanıcı manuel Hero → Web/sticky başlangıcı değerlendirmesi.

Hero v1 ve onaylı sahne içerikleri korunur. Detay: [[logs/2026-10-11-hero-web-continuity]].

## 11 Ekim 2026 — Sade sahne arka planı

- [x] Grid kaldırıldı; hero ile uyumlu lacivert ve çok hafif mavi/mor atmosfer.
- [x] CSS/grid yokluğu/zemin dışı deklarasyon koruma kontrolü ve diff-check.
- [ ] Kullanıcı manuel görsel değerlendirmesi.

Sahne tasarımları ve scroll timing korunur. Detay: [[logs/2026-10-11-scene-background]].

## 11 Ekim 2026 — Sahne zamanlaması

- [x] Mobil tam görünür hold %36–70; metin/telefon opacity eşitlendi.
- [x] Web/Mobil ve Mobil/AI için %8 örtüşen geçişler; açıklamasız boş aralık kaldırıldı.
- [x] TypeScript/lint, gerçek eğri örnekleme ve markup korunması, diff-check.
- [ ] Kullanıcı manuel scroll/video değerlendirmesi.

Toplam bölüm yüksekliği ve sahne tasarımları korunur. Detay: [[logs/2026-10-11-scene-timing]].

## 11 Ekim 2026 — AI sahnesi

- [x] Örnek talep → AI özet/sınıflandırma önerisi → insan onaylı görev akışı, Space Grotesk ve TR/EN/DE.
- [x] Eski telefon/soyut AI katmanları kaldırıldı; yeni mobil telefon header boşluğu artırıldı.
- [x] TypeScript/lint/CSS/diff, Web/Mobil içerik ve mevcut timing koruma kontrolü.
- [ ] Kullanıcı manuel AI/telefon yerleşimi ve sahne geçişi kontrolü.

Scroll kısaltma henüz uygulanmadı; mevcut bölüm yükseklikleri korunur. Detay: [[logs/2026-10-11-ai-workflow]].

## 11 Ekim 2026 — Mobil sahnesi

- [x] Web'deki örnek görevi açık temalı mobil bildirim/görev detayıyla gösteren MobileScene.
- [x] Space Grotesk hizmet başlığı, TR/EN/DE, statik reduced-motion sunumu.
- [x] TypeScript/lint/CSS/diff ve orijinal AI telefonu/zamanlama koruma kontrolü.
- [ ] Kullanıcı manuel mobil sahnesi ve AI'a geçiş değerlendirmesi.

AI yeniden tasarımı ve scroll kısaltma henüz uygulanmadı. Detay: [[logs/2026-10-11-mobile-scene]].

## 11 Ekim 2026 — Yalnızca Web sahnesi

- [x] Soyut küre yerine BayesSoft örnek web platformu, hizmet odaklı başlık/açıklama, ortak Space Grotesk.
- [x] Web için responsive ve statik reduced-motion sunumu.
- [x] TypeScript/lint/CSS/diff; mobil/AI motion ve section yükseklikleri korunma kontrolü.
- [ ] Kullanıcı manuel Web sahnesi değerlendirmesi.
- [ ] Mobil/AI yeniden tasarımı ve scroll kısaltma: sonraki aşamalar, henüz uygulanmadı.

Detay: [[logs/2026-10-11-web-scene]].

## 11 Ekim 2026 — Hero–sahne geçişi

- [x] Hero alt ayracı kaldırıldı; mevcut alan içinde doğal lacivert zemin geçişi ve kenar gölgesi fade'i.
- [x] CSS parse/zemin dışı deklarasyonların korunması ve diff-check.
- [ ] Kullanıcı manuel desktop/tablet/mobile geçiş değerlendirmesi.

Sahne süresi/scroll yüksekliği ve animasyon mantığı korunur. Detay: [[logs/2026-10-11-hero-scene-transition]].

## 11 Ekim 2026 — Vitrin son küçük ayarlar

- [x] Kontrollü canlı UI vurguları; alt caption kaldırıldı, hero alt boşluğu azaltıldı.
- [x] TypeScript, hedefli lint, CSS parse/caption kontrolü ve diff-check.
- [ ] Kullanıcı manuel görsel değerlendirmesi.

Detay: [[logs/2026-10-11-showcase-final-tweaks]].

## 11 Ekim 2026 — Telefon açık tema

- [x] Telefon örnek arayüzü soft blue-gray zemin/beyaz kart/lacivert metinle açık temaya geçirildi; web paneli koyu kaldı.
- [x] CSS parse/tema ayrımı ve diff-check.
- [ ] Kullanıcı manuel değerlendirmesi; kompozisyon ve diğer bölümler korundu.

Detay: [[logs/2026-10-11-phone-light-theme]].

## 11 Ekim 2026 — Premium web paneli ve telefon çerçevesi

- [x] Laptop kabuğu/perspektifi kaldırıldı; örnek web paneli ince kenarlık/gölge ile sunuldu.
- [x] Ön plan telefon bezel/köşe/island ve kenar detayları rafine edildi.
- [x] TypeScript, hedefli lint, CSS/sınıf kontrolü ve diff-check.
- [ ] Kullanıcı manuel kompozisyon değerlendirmesi.

Detay: [[logs/2026-10-11-showcase-web-panel]].

## 11 Ekim 2026 — Laptop/arayüz kontrast revizyonu

- [x] Laptop %10 küçültülüp yukarı dengelendi; telefon boyutu korundu.
- [x] Web/mobil örnek ekran yüzeyleri, ikincil metin ve mavi/mor göstergeler güçlendirildi.
- [x] CSS parse, ölçek/telefon genişliği hesabı ve diff-check.
- [ ] Kullanıcı manuel ilk viewport ve ekran kontrastı değerlendirmesi.

Detay: [[logs/2026-10-11-showcase-contrast]].

## 11 Ekim 2026 — Hero örnek arayüz geçişi

- [x] Hero üst etiketi kaldırıldı; üst boşluk ve CTA–cihaz aralığı azaltıldı, cihazlar küçültülmedi.
- [x] BayesSoft örnek web/mobil çalışma alanı: projeler/görevler/ekip/aktiviteler, TR/EN/DE.
- [x] TypeScript, hedefli lint, CSS parse/sınıf kontrolü ve diff-check.
- [ ] Kullanıcı manuel cihaz ekranı ve ilk viewport değerlendirmesi (MacBook boyutları dahil).

Web–Mobil–AI scroll geçişi bu kapsamda değişmedi. Detay: [[logs/2026-10-11-hero-sample-interfaces]].

## 11 Ekim 2026 — Vitrin ölçek revizyonu

- [x] Masaüstü cihaz kompozisyonu %12 küçültüldü; hero başlığı ve CTA–vitrin aralığı dengelendi. Mobil/tablet ve placeholder korunur.
- [x] CSS parse, 1280/1440/1512px ölçek hesabı ve diff-check.
- [ ] Kullanıcı manuel görsel değerlendirmesi; cihaz ekranı tasarımı sonraki adımdır.

Detay: [[logs/2026-10-11-showcase-scale]].

## 11 Ekim 2026 — Hero cihaz vitrini

- [x] Yeni HeroShowcase: responsive statik laptop + önde solda telefon, sade placeholder ekranlar.
- [x] TypeScript, hedefli lint, CSS parse ve diff-check.
- [ ] Kullanıcı manuel cihaz kompozisyonu değerlendirmesi.

Detaylı dashboard ve yeni animasyon bu aşamada uygulanmadı. Detay: [[logs/2026-10-11-hero-showcase]].

## 11 Ekim 2026 — Hero ölçek revizyonu

- [x] Masaüstü başlık yaklaşık %24 küçültüldü; mobil ölçek korundu. Dikey ritim ve içerik yüksekliği gelecekteki ürün görseline uygun düzenlendi.
- [x] CSS parse, masaüstü ölçek hesabı ve diff-check geçti.
- [ ] Kullanıcının son hero görünümünü manuel değerlendirmesi; ürün görseli henüz eklenmedi.

Detay: [[logs/2026-10-11-hero-scale]].

## 11 Ekim 2026 — Hero sade kompozisyon geçişi

- [x] Space Grotesk hero fontu kullanıcı tarafından beğenildi; korunur.
- [x] Ortalanmış hero başlık/açıklama/CTA ve hafif lacivert-mavi/mor glow uygulandı; video kullanımı kaldırıldı, dosyalar korundu.
- [x] TypeScript, hedefli lint, CSS/içerik-CTA kontrolü ve diff-check.
- [ ] Bu hero kompozisyonunun kullanıcı manuel görsel değerlendirmesi.

Bu tur diğer bölümlere ve Web–Mobil–AI sahnelerine dokunulmadı. Detay: [[logs/2026-10-11-hero-centered]].

## 11 Ekim 2026 — Phase 2 hero tipografi denemesi

- [x] Yalnızca hero H1 için yerel Space Grotesk 700 denemesi; Inter ve mevcut hero içeriği/işlevi korunur.
- [x] Türkçe glifler ve tek font varlığı üretimi kontrol edildi; typecheck/lint/diff-check geçti.
- [ ] Montserrat ile kullanıcı görsel karşılaştırması ve font tercihi.

Web–Mobil–AI sahne yeniden tasarımı başlamadı. Detay: [[logs/2026-10-11-hero-space-grotesk]].

## 11 Ekim 2026 — Küçük iyileştirme geçişi

- [x] Kullanıcının onayladığı sekiz iyileştirme: bölüm ritmi/boşluk, mobil kart yüksekliği, başlıklar, proje hizası/kontrastı, referans logoları, footer ve token tutarlılığı.
- [x] 768–1023px animasyon metin sütunlarında CSS düzeltmesi; sahneler ve çalışma mantığı korunur.
- [x] TypeScript, ESLint, Tailwind CSS üretimi ve diff-check.
- [ ] Bu revizyonun kullanıcı tarafından manuel görsel kontrolü ve kabulü (1440/768/390px, TR/EN/DE).

Lacivert kimlik/açık alan dağılımı ve hero videosu korunur. Phase 2 başlamadı. Önceki Mac tarayıcı incelemesi yapıldı; aşağıdaki Windows engeli bu tur için geçerli değildir. Bu turda kapsamlı tarayıcı QA veya build çalıştırılmadı. Detay: [[logs/2026-10-11-phase1-refinements]].

## 10 Ekim 2026 — Güncel lacivert ağırlıklı revizyon

Kullanıcının son açıklaması: beyaz detaylar, lacivert üzerinde premium çoğunluk. Bu yön, ZIP'teki geniş açık bölüm ritmi önerisini ve ilk uygulamadaki açık header/süreç alanlarını geçersiz kılar. Sabit bir renk yüzdesi onaylanmadı.

- Ana zemin/header: #101827; ikinci koyu yüzey: #17263F. Beyaz hizmet/proje kartları ve iletişim formu seçici kontrast sağlar. Süreç zemini/kartları lacivert; beyaz ikon yüzeyleri küçük detaydır. Referans bandı açık kalır, yüksekliği azaltılır.
- Yetkinlikler başlığına daha geniş masaüstü sütunu ve daha kontrollü başlık ölçeği verildi. Seçili proje kartında sol sütuna eşitlenerek büyüyen flex kuralları kaldırıldı.
- Mevcut içerik, bölüm sırası, bağlantılar, form mantığı ve Web/Mobil/AI animasyonu korunur. Animasyon yeniden tasarımı Phase 2.
- Kullanıcının sağladığı tam sayfa PNG incelendi. Görsel önceki sürümü gösterir; revizyon sonrası desktop/mobile canlı QA yapılmış değildir.
- Uzun koyu boşluk, 340svh kaydırma alanı ve sticky sahneyle ilişkili olabilir; tam sayfa görüntüsü tek başına gerçek kaydırma hatasını kanıtlamaz. Sahne kısaltılmadı. Sağdaki/alttaki açık alanın capture sınırı mı gerçek taşma mı olduğu doğrulanmadı.
- Revizyon için lint, typecheck, yerel build (18 statik sayfa) ve diff-check geçti. Data ve WebToMobileTransition kaynaklarında Git farkı yok. Tarayıcı erişimi engelli; başka araçla aşılmadı.
- Commit/push/deploy yok. Sonraki adım yenilenen görünümün kullanıcı değerlendirmesi ve desktop/mobile görsel-etkileşim QA.

Detay: [[logs/2026-10-10-phase1-navy-rebalance]].


> Kaynak: Kullanıcının ZIP'i / docs/04-roadmap.md. Güncel durum ve bu turdaki kapsam için [[07 - AI Handoff]] ve [[08 - Phase 1 Tasarım Önerisi]] okunur. Mevcut Obsidian kasası kullanıcı kararıyla bayes 2.0/ konumunda korunur.


## Phase 0 — Documentation and Git safety
- [x] Confirm website repo root (not just Obsidian vault).
- [x] Inspect Git status and default/prod branches.
- [x] Choose/create isolated `feature/bayessoft-2.0` branch after preserving local changes.
- [x] Import ZIP references into the existing `bayes 2.0/` Obsidian vault (user superseded `docs/` proposal).
- [x] Add `AGENTS.md`, `CLAUDE.md` pointers and confirm agent read workflow.
- [x] Device-specific `bayes 2.0/.obsidian/` settings ignored; Markdown vault content remains versioned for Mac handoff.

## Phase 1 — Premium balanced visual system (site-wide implementation done; visual QA pending)
- [x] Audit Next.js implementation, design tokens, CSS, fonts, header/footer, shared components, existing responsive and animation behavior.
- [x] Produce Phase 1 proposal with exact change list, final palette and contrast justification; get user approval.
- [x] Establish semantic light/dark tokens anchored on Balanced Premium palette.
- [x] Refine typographic hierarchy, buttons, nav, cards, spacing, section backgrounds, footer.
- [x] Keep actual homepage animation/functionality/SEO/URLs unchanged.
- [ ] Validate typecheck, lint, tests, build, desktop/tablet/mobile visual QA, keyboard/reduced motion; record actual output.
- [ ] Review screenshots with user and accept/revise before Phase 2.

## Phase 2 — Hero and post-hero interactive experience
- [ ] Design Web/Mobile/AI explanatory scenes and test for comprehension.
- [ ] Web: recognizable dashboard / business process (not mere abstract circuit).
- [ ] Mobile: realistic interactive smartphone UI (existing strongest segment).
- [ ] AI: concrete automation workflow (input → classification/analysis → actionable result), not generic glowing brain.
- [ ] Keep motion short, performant, scroll-friendly, mobile-appropriate; reduced motion fallback.
- [ ] Approve storyboard before implementation; preserve usability without JS motion.

## Phase 3 — Portfolio/content and page refinement
- [ ] Real screenshots and featured work cards, client permissions.
- [ ] Clear project types, honest statuses, problem/solution/outcome.
- [ ] Service positioning for corporate websites + custom software + mobile + AI/backend.
- [ ] About/team storytelling, concise process, contact conversion.

## Phase 4 — QA, SEO, measurement and launch readiness
- [ ] End-to-end functional review, responsive/contrast/performance checks.
- [ ] SEO metadata, analytics and CTA/form instrumentation as permitted.
- [ ] Review new branch/staging; only deploy/merge on explicit owner approval.

## Future — Actual BayesSoft SaaS
Only when independently-owned product and actual value proposition/launch status exist, add Product pages, demos, onboarding or pricing. **Not part of current phases.**


## 10 Ekim 2026 — Güncel kullanıcı kararı

Mevcut bayes 2.0/ Obsidian kasası korunur. Kullanıcının son talebi “Phase 1’i tamamen yap” ile header/hero sınırı kaldırılmıştır: mevcut tüm sayfalara Balanced Premium renk, tipografi, yüzey, kart, buton, form ve footer sistemi uygulanabilir. İçerikler, URL/SEO ve işlevler korunur. Normal animasyon akışı yeniden tasarlanmaz; erişilebilirlik için azaltılmış hareket tercihi desteklenir. Web/Mobil/AI sahnesinin kaynakları değişmez ve Phase 2’de ele alınır. Commit/push/deploy açık onay gerektirir.


## Güncel doğrulama durumu

- [x] Lint, typecheck ve build (18 statik sayfa).
- [x] 11 bileşen/sayfada className dışındaki normalize kaynak karşılaştırması; içerik ve işlev değişmedi.
- [x] WebToMobileTransition, data, URL/SEO içeriği, .obsidian ve secret dosyaları için değişiklik yok kontrolü.
- [ ] Desktop/tablet/mobile görünüm, etkileşim, klavye ve reduced-motion tarayıcı kontrolü.
- [ ] Kullanıcı tasarım kabulü. Sonra Phase 2 storyboard; henüz Phase 2 uygulaması yok.

Tarayıcı engeli devam ediyor: kullanıcı yerel adres için Her zaman izin ver seçti, fakat araç kayıtlı izin nedeniyle erişimi reddetti. Görsel QA tamamlanmış değildir.
