# Phase 1 — Site Geneli Balanced Premium

## 11 Ekim 2026 — Sekiz iyileştirme onaylandı ve uygulandı

Bölüm geçişleri, boşluklar, mobil hizmet kartı yüksekliği, başlık satırları, proje hizası/Tam Finans kontrastı, referans logo dengesi, footer ve renk tokenları düzenlendi. Mevcut lacivert ağırlık/açık yüzey dağılımı ve hero videosu korunur. Tablet Web–Mobil–AI metin çakışması için CSS sütun genişliği ve yazı ölçeği düzeltmesi eklendi; Phase 2 sahne değişikliği yapılmadı.

Kod kontrolleri geçti; bu revizyonun görsel değerlendirmesini kullanıcı manuel yapacak. Yeni ekran görüntüsü/tarayıcı analizi ve commit/push/deploy yok. Detay: [[logs/2026-10-11-phase1-refinements]].

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


Tarih: 10 Ekim 2026. Durum: Site geneli kod uygulaması hazır; otomatik kontroller geçti, görsel QA ve kullanıcı değerlendirmesi bekleniyor.


## 10 Ekim 2026 — Güncel kullanıcı kararı

Mevcut bayes 2.0/ Obsidian kasası korunur. Kullanıcının son talebi “Phase 1’i tamamen yap” ile header/hero sınırı kaldırılmıştır: mevcut tüm sayfalara Balanced Premium renk, tipografi, yüzey, kart, buton, form ve footer sistemi uygulanabilir. İçerikler, URL/SEO ve işlevler korunur. Normal animasyon akışı yeniden tasarlanmaz; erişilebilirlik için azaltılmış hareket tercihi desteklenir. Web/Mobil/AI sahnesinin kaynakları değişmez ve Phase 2’de ele alınır. Commit/push/deploy açık onay gerektirir.


## Tarihsel ilk uygulama

Açık header + koyu mevcut logo + mavi iletişim CTA. Lacivert hero + aynı video ve reveal. Açık mavi başlık vurgusu ve sade butonlar. Mobilde tam genişlik CTA ve header yüksekliğine bağlı üst boşluk. Metin, link ve animasyon mantıkları korunur.

## Kaldırılan yeşil deneme

- app/preview/bayessoft-2/page.tsx
- components/SiteChrome.tsx
- components/phase-one/PhaseOneHome.tsx
- components/phase-one/PhaseOneHome.module.css
- data/phaseOne.ts

app/layout.tsx mevcut Header/Footer'a geri bağlandı. Önceki hatalı prototip notu yeni kapsamla düzeltildi.

## Bu geçişin kod dosyaları

app/design-tokens.css, app/layout.tsx, components/Header.tsx, components/Header.module.css, components/Hero.tsx, components/Hero.module.css.

## Doğrulama

- `npm run lint`: geçti.
- `npm run typecheck`: geçti.
- `npm run build`: geçti; 18 statik sayfa üretildi. Bu yerel derlemedir, deployment değildir.
- `git diff --check`: geçti.
- İlk tip/derleme denemesi kaldırılan yeşil preview route'unun eski oluşturulmuş tipleri nedeniyle başarısız oldu. Next'in `typegen` işlemiyle route tipleri yenilendi; sonraki tip ve derleme kontrolleri geçti. Üretim kodunda hata bastırma yapılmadı.
- Yerel geliştirme sunucusu `http://127.0.0.1:3000` adresinde hazır.
- Desktop/mobile ekran görüntüleri, görsel taşma, menü ve dil seçimi etkileşim testi BEKLİYOR: uygulamanın kayıtlı tarayıcı erişim tercihi yerel sayfayı engelliyor. Bu kısıt başka tarayıcı/araçla aşılmadı; kullanıcı izin verdikten sonra görsel QA yapılmalı.

## Değerlendirme

Kullanıcının tam Phase 1 talebiyle kalan mevcut sayfaların stilleri de uygulandı. Commit/push/deploy yapılmadı.


## Tarihsel ilk tam Phase 1 geçişi

Header/hero dışına CapabilitiesSection, FeaturedAndSelectedWork, ClientsSection, ProcessSection, ServicesOverview, ProjectsSection, ProjectDetailView, TeamSection, StatsBand, PageHero, SectionIntro, CallToAction ve Footer eklendi. Hakkımızda ve iletişim sayfasının doğrudan stilleri de güncellendi. app/globals.css ortak bileşenleri, app/design-tokens.css ışık/koyu bağlamları tanımlar.

Hizmetler artık 3 kolon responsive beyaz kart; süreç 4 kolon kart; referans açık gri; proje list/detail ve iletişim formu açık. Featured çalışma koyu kalır; seçili çalışma beyaz karttır. Bölüm sırası, CTA hedefleri ve metinler korunur.

Son kod için lint/typecheck/build/diff-check geçti. 11 kaynak dosyasında className/format dışı içerik ve mantık karşılaştırması geçti. Azaltılmış hareket desteği Reveal/Hero/Team ve proje slider'da ayrıca eklendi. Animasyon redesign yapılmadı.

Kullanıcı yerel Browse iznini açmasına rağmen araç kayıtlı izin engeli döndürmeye devam etti. Dolayısıyla önceki görsel QA bekleme durumu sürüyor; screenshot veya tamamlanmış mobil/desktop testi iddiası yok. Detay [[logs/2026-10-10-phase1-sitewide]].
