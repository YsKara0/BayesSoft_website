> **Güncel: Aşama2C sekiz detay yerelde tamamlandı; hedefli kontroller geçti, görsel kabul beklenir. 2A/2B iskelet düzeyinde kabul edildi. Projeler vitrininin ileri görsel çalışması ertelendi.** Önceki teslimler aşağıda tarihsel olarak korunur;son2Cbölümü günceldir.

> **Güncel: Aşama2B yalnız Projeler vitrin revizyonu tamamlandı; görsel onay beklenir.** Aşağıdaki önceki teslimler tarihsel olarak korunur; en sondaki Projeler revizyonu bölümü günceldir.

> **Güncel teslim: Aşama2B yerelde uygulandı, hedefli kontroller geçti; kullanıcı görsel onayı beklenir. Aşama2A ve navigasyon kabul edildi.** Aşağıdaki önceki durum ifadeleri tarihsel kayıttır;son Aşama2B bölümü güncel kapsamı açıklar.

> Güncel durum: **Aşama2A yerelde uygulandı ve hedefli kontroller geçti; kullanıcı görsel onayı beklenir.** Ayrıntılar bu belgenin sonundaki Aşama2A bölümündedir. Aşağıdaki Aşama1 metni tarihsel olarak korunmuştur.

# BS3P-031 — Sitewide Page Inventory & Skeleton Migration / Aşama 1

**Durum:** Analiz tamamlandı; Aşama 2 kullanıcı onayı bekler.
**Tarih:** 2026-10-16 (Europe/Istanbul).
**Branch / HEAD:** `master` / `0e4ec3d15072cf78f5b7b3ad060d1d9d1916047c`.
**Kapsam:** Salt okunur canlı GET/bağlantı incelemesi, kaynak analizi, tasarım karşılaştırması ve uygulama planı. Uygulama/CSS/asset/config/paket değişikliği yok.

## Karar özeti

- **13 benzersiz, canonical üretim sayfası doğrulandı; 13/13 HTTP 200.** Beş sabit sayfa + sekiz proje detayı. Sitemap de aynı 13 URL’yi içeriyor. Ek doğrulanmış `/hakkimizda.html` adresi aynı sayfanın alias’ıdır; ayrı içerik sayfası sayılmadı. Dolayısıyla test edilen 200 HTML URL sayısı alias dahil 14, benzersiz sayfa sayısı 13’tür.
- **Yerelde 13 gerçek üretim sayfası** var: beş sabit rota + tek dinamik dosyadan sekiz gerçek slug. Dosya düzeyinde altı `page.tsx`; ayrıca iki metadata endpoint’i ve üretim dışı altı prototip route handler’ı bulunur.
- **12 sayfa eski tasarımda, bir sayfa yeni tasarımda.** Karma/belirsiz olarak sınıflanan canonical sayfa yok. İç sayfaların eski shared header/footer, koyu zemin ve eski tipografisi kaynaklarla ve aile temsilcilerinin canlı görünümüyle doğrulandı.
- Bir günlük hedef, **12 eski sayfanın ortak iskeletini** yenilemektir; sekiz detay zaten `ProjectDetailView` üzerinden üretilir. Beş ekip profili ayrı sayfa değildir. Yeni hizmet detayı, ekip URL’si, yasal sayfa veya SaaS/Ürünler sayfası önerilmez.
- **Önerilen ilk uygulama görevi:** “BS3P-031 / Aşama 2A — ortak iç sayfa çerçevesi + Hakkımızda referans uygulaması”. Kullanıcı kapsam onayı olmadan başlamaz. Bu rapor tasarım/uygulama onayı değildir.

## Yöntem, kanıt ve sınırlar

1. `agents.md`, `CLAUDE.md`, Dashboard, CURRENT_STATUS, NEXT_STEPS, AGENT_WORKFLOW, TASK_REGISTER ve ilgili DECISION_LOG kayıtları okundu; gerçek kaynaklarla karşılaştırıldı. Genel feature branch beklentisine karşı bu görevde kullanıcının açık `master` talimatı geçerlidir; branch değiştirilmedi.
2. HTTPS GET ile `/`, `/sitemap.xml`, `/robots.txt` alındı. Sitemap `loc` değerleri ve sayfalardaki gerçek birinci taraf anchor’lar sonlu biçimde tarandı. Dış müşteri/sosyal siteleri, e-posta koruma endpoint’i, JS/CSS/görseller HTML sayfa sayısına katılmadı. Fragmentler ve dil seçimleri ayrı sayfa sayılmadı.
3. Her canonical URL için durum, final URL, başlık, metadata, görsel referansları ve bağlantılar kaydedildi. Başlangıç/kapanış Git durumu, kaynak rota/slug listesi ve mevcut export dosyaları incelendi; yeni build alınmadı.
4. Chrome’da ana sayfa, Hakkımızda, Hizmetler, Projeler, İletişim ve FurtherUp detayının üst görünümleri incelendi. Diğer yedi detayın tasarım sınıflaması canlı HTML + aynı shared renderer/chrome kaynaklarına dayanır; her detayın tamamı görsel olarak taranmış değildir. Mobil/gerçek cihaz/full QA yapılmadı. İletişim formu gönderilmedi; API başarısı doğrulanmadı.
5. Web aracının ilk ana sayfa çıktısı farklı/eski içerik gösterdi. Doğrudan curl GET ve Chrome görünümü yerel 3.0+ ana sayfayla uyumlu çıktı; sınıflamada bu iki güncel doğrudan kaynak esas alındı. Canlı artifact’in commit SHA’sı HTTP’den kesinleştirilmedi; son yayın SHA’sı kullanıcı bildirimi, yerel HEAD ise Git ile doğrulanmıştır.
6. Kapsam, bağlantı/sitemap/kaynaklardan **keşfedilebilen** sayfalardır. Sunucuya özgü bağlantısız tarihsel URL’lerin tamamını bildiğimiz iddia edilmez. Mevcut `out/` yalnız yardımcı kanıttır; yeni HEAD’den yeniden üretilmiş kabul edilmedi.

Kanıt klasörü: [[../07-Reviews/evidence/BS3P-031/README|BS3P-031 kanıt dizini]]. `crawl.json` HTTP/keşif kaynağını; `content-seo-links.json` sayfa bazlı description/canonical/görsel/bağlantıları; `local-inventory.json` yerel rotaları; `route-probes.json` negatif/alias kontrollerini içerir. Ham HTML/HTTP header’ları aynı klasörde hash ile adlandırıldı. `pre-documentation-handoff.diff`, oturumdan önce mevcut dört dirty handoff dosyasının farkını korur. Yeni `06-Evidence` oluşturulmadı.

## 1. Canlı URL envanteri ve tasarım matrisi

Tüm bağlantılar `https://bayessoft.com.tr` origin’indedir. “Taşınabilir” ifadesi içerik iddialarının bağımsız doğruluğunu onaylamaz; mevcut kaynağın düzen bozulmadan kullanılabileceğini belirtir.

| Sayfa adı / mevcut HTML title | URL | HTTP | Tür | Tasarım | İçerik taşınabilirliği | Önerilen işlem |
|---|---|---|---|---|---|---|
| BayesSoft | Dijital Ürün Mühendisliği — Web, Mobil ve Yapay Zekâ | [/](https://bayessoft.com.tr/) | 200 | Ana sayfa | Yeni | Yayındaki 3.0+ korunur | Koru |
| Hakkımızda | BayesSoft | [/hakkimizda](https://bayessoft.com.tr/hakkimizda) | 200 | Kurumsal / ekip | Eski | Yüksek: metin/veri ve mevcut davranış korunarak | Yenile |
| Kurumsal Yazılım Hizmetleri | BayesSoft | [/hizmetler](https://bayessoft.com.tr/hizmetler) | 200 | Liste | Eski | Yüksek: metin/veri ve mevcut davranış korunarak | Yenile |
| İletişim | BayesSoft | [/iletisim](https://bayessoft.com.tr/iletisim) | 200 | Kurumsal / iletişim | Eski | Yüksek: metin/veri ve mevcut davranış korunarak | Yenile |
| Yazılım Projeleri ve Vaka Çalışmaları | BayesSoft | [/projeler](https://bayessoft.com.tr/projeler) | 200 | Liste | Eski | Yüksek: metin/veri ve mevcut davranış korunarak | Yenile |
| AI-Powered Chatbot Platform | [/projeler/ai-chatbot](https://bayessoft.com.tr/projeler/ai-chatbot) | 200 | Proje detayı | Eski | Yüksek: metin/veri ve mevcut davranış korunarak | Yenile |
| Atlı Logistics - Workforce Management System | [/projeler/atli-logistics](https://bayessoft.com.tr/projeler/atli-logistics) | 200 | Proje detayı | Eski | Yüksek: metin/veri ve mevcut davranış korunarak | Yenile |
| FurtherUp Drive | [/projeler/furtherup-drive](https://bayessoft.com.tr/projeler/furtherup-drive) | 200 | Proje detayı | Eski | Yüksek: metin/veri ve mevcut davranış korunarak | Yenile |
| Maritime Horizon Line Segmentation | [/projeler/maritime-horizon-segmentation](https://bayessoft.com.tr/projeler/maritime-horizon-segmentation) | 200 | Proje detayı | Eski | Yüksek: metin/veri ve mevcut davranış korunarak | Yenile |
| Military Aircraft Classification System | [/projeler/military-aircraft-classification](https://bayessoft.com.tr/projeler/military-aircraft-classification) | 200 | Proje detayı | Eski | Yüksek: metin/veri ve mevcut davranış korunarak | Yenile |
| PetNest - Pet-Friendly Venue Finder Platform | [/projeler/petnest-platform](https://bayessoft.com.tr/projeler/petnest-platform) | 200 | Proje detayı | Eski | Yüksek: metin/veri ve mevcut davranış korunarak | Yenile |
| Smart Hospital System - Kanuni Sultan Süleyman Hospital | [/projeler/smart-hospital](https://bayessoft.com.tr/projeler/smart-hospital) | 200 | Proje detayı | Eski | Kısmi: TR placeholder alanları var | Yenile + içerik incele |
| Tam Finans Multi-Platform Fintech System | [/projeler/tam-finans-fintech](https://bayessoft.com.tr/projeler/tam-finans-fintech) | 200 | Proje detayı | Eski | Yüksek: metin/veri ve mevcut davranış korunarak | Yenile |

### Yardımcı URL’ler, alias ve 404 bulguları

| Doğrulanmış URL / küme | Sonuç | Yorum |
|---|---|---|
| `/sitemap.xml` | 200, 13 canonical URL | Yerel `app/sitemap.ts` listesiyle eşleşir; HTML sayfa değildir |
| `/robots.txt` | 200 | Sitemap bildirir; HTML sayfa değildir; ham içerik kanıtta |
| `/hakkimizda.html` | 200 | Aynı canonical `/hakkimizda`; ek URL, ek sayfa değil |
| `/hakkimizda/` | 404 | Slash eklemek otomatik yönlendirilmez; migration slash’siz sözleşmeyi korumalı |
| `/projeler/arelim-vulnerability-report` | 404 | `data/site.ts` içinde gerçek liste kaydı ama `hasDetailsPage:false`; detay yok, bozuk iç link bulunduğu anlamına gelmez |
| Altı `/prototype/*` adresi | 404 | Aşağıdaki yerel prototiplerin canlı kontrolleri; beklenen üretim izolasyonu |

Canonical taramada 3xx yönlendirme görülmedi; Next config içinde redirects/rewrites yok. Diğer slash/`.html` varyantlarına aynı sonucu genellemiyoruz. Yerel export’ta diğer `.html` dosyaları da var ama hepsinin canlı alias davranışı test edilmedi.

### Keşif kapsamı ve iç bağlantılar

- Yeni ana navigasyon/footer ağırlıkla `#hero`, `#selected-projects`, `#services`, `#contact` kullanır. Ana sayfadaki gerçek `/projeler` ve `/projeler/furtherup-drive` bağlantıları liste ve detaylara açılır. Hakkımızda/İletişim/Hizmetler sayfaları sitemap ve eski iç sayfa navigasyonunda bulunur.
- Eski `Header.tsx`/`Footer.tsx` beş üretim sayfasına ulaşır. Proje listesinde dokuz kayıt var, sekizi gerçek detay bağlantısı üretir. ARELİM yalnız liste/external bağlantı düzeyinde kalır; yeni detay eklenmez.
- Ekip “Daha fazla” butonları modal açar; beş profilin sosyal bağlantıları dış sitelerdir. Ayrı ekip slug rotası bulunmadı.
- Hizmetler dört hizmet içerir; hizmet detay URL’si bulunmadı. Yasal/blog/kariyer/ürün ailesi için sitemap, crawl ve `app/` içinde gerçek rota bulunmadı. Bunlar için URL tahmin edilmedi.
- 13 canonical HTML’de birer H1, description ve canonical var. SSR HTML üzerindeki aynı belge fragment bağlantılarında eksik hedef bulunmadı. Linklerin tıklama/istemci navigasyonu ve dış hedeflerin sağlığı bütünüyle test edilmiş değildir.

## 2. Yerel Next.js rota envanteri

| Yerel kaynak | URL / gerçek genişleme | Sınıf / adet | Canlı durum |
|---|---|---|---|
| `app/page.tsx` | `/` | Üretim / 1 | 200, yeni |
| `app/hakkimizda/page.tsx` | `/hakkimizda` | Üretim / 1 | 200, eski |
| `app/hizmetler/page.tsx` | `/hizmetler` | Üretim / 1 | 200, eski |
| `app/projeler/page.tsx` | `/projeler` | Üretim / 1 | 200, eski |
| `app/iletisim/page.tsx` | `/iletisim` | Üretim / 1 | 200, eski |
| `app/projeler/[slug]/page.tsx` | Envanterdeki sekiz `/projeler/*` | Üretim / 8 | 8/8 200, eski |
| `app/sitemap.ts`, `app/robots.ts` | `/sitemap.xml`, `/robots.txt` | Metadata endpoint / 2 | 200 |
| `app/prototype/spatial-hero/route.ts` | `/prototype/spatial-hero` | Dev prototipi | 404 |
| `app/prototype/spatial-hero-plus/route.ts` | `/prototype/spatial-hero-plus` | Dev prototipi | 404 |
| `app/prototype/bs3p-right-3d/route.ts` | `/prototype/bs3p-right-3d` | Dev prototipi | 404 |
| `app/prototype/bs3p-homepage/route.ts` | `/prototype/bs3p-homepage` | Dev prototipi | 404 |
| `app/prototype/bs3p-project-showcase/route.ts` | `/prototype/bs3p-project-showcase` | Dev prototipi | 404 |
| `app/prototype/bs3p-project-showcase-r2/route.ts` | `/prototype/bs3p-project-showcase-r2` | Dev prototipi | 404 |

Gerçek dinamik slug kaynağı **`Object.keys(projectDetails)`**, dosya `data/projectDetails.ts`; `generateStaticParams` bu sekiz kaydı kullanır: `tam-finans-fintech`, `smart-hospital`, `petnest-platform`, `atli-logistics`, `military-aircraft-classification`, `ai-chatbot`, `furtherup-drive`, `maritime-horizon-segmentation`. Render ayrıca `data/site.ts` içindeki eşleşen `projects` kaydını gerektirir; biri yoksa `notFound()`. İki kaynak şu an sekiz detay için uyumlu. Dokuzuncu liste kaydı `arelim-vulnerability-report` dinamik parametre kaynağı değildir.

`next.config.mjs` → `output:"export"`, `images.unoptimized:true`; trailingSlash ayarı yok. `npm run build` doğrudan genel Next build yerine `scripts/build-production.mjs` çalıştırır. Geçici üretim ağacına kopyalarken `app/prototype`, `public/prototype-assets` ve `.env*` dışlanır; export doğrulanıp `out/` üretilir. `.github/workflows/pages.yml` Node22 ile bu komutu kullanıp statik `out/` artifact’ini GitHub Pages’e yükler. Bu nedenle dev’de bulunan route handler üretimde otomatik erişilebilir değildir. Kaynak `.env` dosyaları okunmadı.

Mevcut yerel `out/` içinde 13 içerik HTML’i + `404.html` var. `404.html` içerik sayfası sayısına eklenmez. Test harness’leri Obsidian evidence ve yardımcı scriptlerdir, `app/` üretim rotası değildir. **Keşfedilen canonical canlı sayfa olup yerelde olmayan: 0; gerçek yerel üretim sayfası olup canlıda açılmayan: 0.** Üretim dışı altı prototip bu karşılaştırmaya dahil değildir.

## 3. İçerik ve tasarım analizi

| Aile | Mevcut bileşen / içerik / stiller | Korunacaklar ve önerilen şablon |
|---|---|---|
| Ana sayfa | `components/homepage/*`, `homepage.css`, `data/homepage.ts`, galeri kaynakları | Yalnız tasarım referansı. Hero/prizma/sağ sahne/MP4, mobil marquee ve galeriye müdahale yok |
| Hakkımızda | `PageHero`, principles, `StatsBand`, `TeamSection`, `CallToAction`; `data/i18n.ts`, `data/site.ts` | Ortak intro + editoryal iki kolon + mevcut ilkeler/istatistikler + beş ekip kartı/modal + CTA. Yeni metrik yazılmaz |
| Hizmetler | `PageHero`, `ServicesOverview compact`, `ProcessSection`, `CallToAction`; `data/i18n.ts` | Ortak intro + dört hizmetin aynı veriyle sakin satır/grid sunumu + mevcut süreç içeriği. Ağır assembly/özel animasyon geliştirmek gün hedefi değildir; mevcut metin/işlev kaybolmaz |
| Projeler listesi | `PageHero`, `ProjectsSection`, `CallToAction`; `data/site.ts`, `projectTranslations.ts` | Ortak intro + dokuz kayıt için editoryal liste; sekiz detay, varsa canlı/kaynak linkleri ve gizlilik/erişim durumları korunur. Homepage galerisinden bağımsız |
| Sekiz proje detayı | Tek `ProjectDetailView`; `projectDetails.ts`, `site.ts`, `projectTranslations.ts` | Ortak detay şablonu: geri linki + başlık/alan/özet + problem/çözüm + özellik/teknoloji + varsa görsel/bağlantı. Uzun metin ve paragraf düzeni korunur |
| Beş ekip profili | `TeamSection` state tabanlı modal; `teamMembers` isim/rol/bio/foto/social; çeviri index eşleşmesi | Aynı kart/modal şablonu. Yeni profil URL’si üretilmez; fotoğraflar değiştirilmez. Klavye/focus/uzun metin kontrolü gerekir |
| İletişim | `PageHero`, route içi form; `data/i18n.ts`, `data/config.ts`, sosyal kayıtlar | Ortak intro + form/iletişim iki kolon. Input adları, POST JSON sözleşmesi, durumlar ve e-posta/sosyal hedefler aynen korunur |

**Eski stil kaynakları:** `app/globals.css`, `app/design-tokens.css`, `components/Header.module.css`, PageHero ve sayfalardaki Tailwind sınıfları; `ProcessSection.module.css` / ilgili process stilleri. `SiteChrome.tsx` şu an sadece `pathname === "/"` için yeni `HomepageShell` seçer; iç sayfalar eski Header/Footer kullanır. Sadece sayfa gövdesini değiştirmek geçişi tamamlamaz.

**Dil:** `LanguageProvider` başlangıçta TR, mount sonrası localStorage `bayessoft-locale`/tarayıcı tercihiyle TR/EN/DE seçer; `html.lang` güncellenir. `/en` veya `/de` rotası yok. `data/i18n.ts` sayfa, hizmet, ekip/form etiketlerini; `projectTranslations.ts` EN/DE dokuz liste kaydını besler. `ProjectDetailView` EN/DE’de overview/problem/solution/keyFeatures’i mevcut kısa kopyayla değiştirir, `note` göstermeyebilir. Tam TR teknik metnin üç dilde eşdeğerliği zaten yoktur; migration sırasında bu fark büyütülmez, yeni çeviri uydurulmaz.

**SEO:** Dört iç sayfanın `layout.tsx` metadata’sı, detayların `generateMetadata` ve ortak `data/seo.ts` fonksiyonu korunur. Normalize description en çok160 karakter; canonical/OG/Twitter/keywords ve `/og.png` referansı mevcut. Metadata TR ağırlıklıdır, UI dil seçimiyle yeniden yerelleşmez; hreflang rotaları yoktur. Mevcut durumu korumak Aşama2 kapsamıdır; çok dilli SEO stratejisini değiştirmek ayrı karar ister. Canlı tam title/description/canonical değerleri kanıt JSON’unda saklandı; detay title’larının mevcut biçimi korunmalı, otomatik suffix “düzeltmesi” yapılmamalı.

**Görseller:** `data/site.ts` beş ekip fotoğrafı; detay veri kaynağında yalnız FurtherUp için iki screenshot tanımlı. Diğer detaylara yeni kapak/görsel zorunluluğu getirilmez. Görsel src/alt ve var olan canlı/kaynak linkleri korunur; üçüncü taraf/Figma görseli kopyalanmaz. Bu aşamada görsel dosyası indirilmedi veya değiştirilmedi; HTML’deki referanslar kaydedildi.

## 4. Ortak bileşen ve tasarım önerisi — henüz uygulanmadı

- **InteriorShell:** yalnız iç rotalar için yeni header/footer ve sayfa container’ı. Ana sayfanın `MotionProvider`, sınıf adları ve render sınırı korunur. Ana sayfa header’ını iç sayfada aynen kullanmak yanlış olur: `#services` / `#contact` iç sayfada bulunmayabilir; iç navigasyon gerçek `/hizmetler`, `/iletisim`, `/projeler`, `/hakkimizda` hedeflerini kullanmalı.
- **InteriorIntro:** eyebrow, tek H1, mevcut kısa açıklama, isteğe bağlı geri linki. Dekoratif Product core/hero grid/çerçeve yerine açık mineral zemin ve sade editoryal başlık. İç sayfaya prizma/3D eklenmez.
- **Section / EditorialRow / CTA:** ortak yatay hizalama, ölçülü bölüm aralıkları, okunabilir uzun metin, ince ayraçlar. Dört sayfa aynı altyapıyı, özgün içerik bloklarıyla kullanır.
- **ProjectDetailTemplate:** mevcut props/veri sözleşmesini koruyan tek renderer; sekiz sayfayı aynı değişiklikle kapsar. Optional screenshot ve private/live/source durumları içerik varlığına göre çalışır.
- **TeamCard + ProfileDialog** ve **ContactForm**: içerik/veri/işlev korunarak yeni çerçeveye alınır. Form backend’i veya veri modeli bu tasarım göreviyle değiştirilmez.

Tasarım kaynağı mevcut `homepage.css` son etkin kurallarıdır: `var(--font-instrument)`, mineral `#f3f5f7`, mavi `#285bd6`, muted `#53677a`, mevcut koyu nötr metin ve ince çizgiler. Eski global `--bs-*` tokenlarını kökten değiştirmek yerine iç sayfa kapsamlı değerler önerilir; ana sayfaya selector sızıntısı önlenmeli. 3.0+ belgesindeki aday renkler kesin güncel kod sanılmamalı. Küçük ekranda tek kolon, uzun DE başlıklarda doğal satır kırılımı, görünür focus, etiketli form ve reduced-motion korunur.

## 5. Riskler ve eksik bilgiler

| Öncelik | Risk / kanıt | Uygulama yaklaşımı |
|---|---|---|
| P0 | İki ayrı chrome/stil sistemi; global font/token değişimi ana sayfayı etkileyebilir | İç sayfa kapsamlı shell/CSS; korunan homepage dosyaları için diff kontrolü; hero/marquee/galeri hedefli regresyon |
| P0 | `/hakkimizda/`404, slash’siz200; `.html`200 | Slug/canonical/href biçimini değiştirme; export + statik sunum üzerinden link kontrolü, yeni redirect politikası ayrı karar |
| P0 | Form gerçek harici API’ye POST yapar; başarı/CORS erişimi bu görevde test edilmedi | Input/JSON/endpoint/durumları koru; uygulama QA’sında sahte yanıtlarla başarı/hata/double-submit kontrolü. Gerçek mesaj gönderme ayrı yetki |
| P0 | 9 liste /8 detay; `site.ts` ile `projectDetails.ts` çift kaynağı | `hasDetailsPage` koşulunu koru; sekiz slug eşleşmesini doğrula; ARELİM’e detay linki verme |
| P1 | Smart Hospital TR problem/çözüm/özellik alanları placeholder | Eksikliği kayıtlı tut; silme/doldurma yok. Tam vaka içeriği kullanıcıdan gelmeli; iskelet tamamlanması içerik tamamlanması değildir |
| P1 | EN/DE kısa detay, index tabanlı ekip çevirisi, TR metadata | Veri sırası ve locale sözleşmesini koru; üç dilde uzun başlık/taşma kontrolü; yeni çeviri/SEO URL mimarisi ekleme |
| P1 | Ekip modalında Escape/scroll lock var; kaynakta açık focus trap/return yönetimi görülmedi | Aşama2’de klavye odağı ve dönüşü hedefli doğrula; erişilebilirlik riskini mevcut başarı gibi raporlama |
| P1 | Eski `ProcessSection` karmaşık görsel/motion taşıyor | Ortak sakin iskelete odaklan; içerik/işlevi koruyarak pahalı görsel detayları P2’ye bırak. Kaldırma kapsamı uygulama onayında açık olmalı |
| P1 | Müşteri/başarı/güvenlik/istatistik iddiaları mevcut içerikte var | Kaynakları taşı; bu analiz iddiaları bağımsız doğrulamadı, yeni iddia veya sayı üretme |
| P2 | Dashboard/tasarım notlarında eski branch/yayın ifadeleri var; önceki handoff push yok diyor | Tarihi silme; bugünkü kullanıcı bildirimi ile doğrulanmış Git/HTTP durumunu ayrı yaz |
| P2 | Bağlantısız tarihsel URL’ler, tüm alias’lar ve tam dış link sağlığı bilinmiyor | Yeni sayfa varsayma; gerekiyorsa ayrı analytics/server kayıtları veya kapsamlı URL denetimi görevi |

Uzak GitHub Actions/deploy kaydı bu görevde yeniden sorgulanmadı. `master...origin/master` başlangıçta ahead/behind göstermiyor; `origin/master` yerel remote-tracking ref’idir, fetch yapılmadı. Önceki handoff’taki “bir commit ileride / push yok” kapanış anına aittir; güncel push/deploy hükmü olarak kullanılmaz.

## 6. Bir iş günlük uygulama planı

**Tahmin: 8 saatlik çalışma penceresi, temel iskelet + hedefli kontroller.** İçerik yeniden yazımı, tam çeviri, yeni rotalar, özel animasyon ve kapsamlı release QA dahil değildir. 12 sayfayı tek tek tasarlamak bu sürede gerçekçi değildir; ortak şablonlarla temel geçiş gerçekçidir. Beklenmedik form/çeviri/erişilebilirlik sorunu süreyi aşarsa kısmi teslim açıkça belirtilir; kontroller kesilerek “bitti” denmez.

| Sıra | Öncelik | İş | Süre | Somut çıktı |
|---|---|---|---|---|
| 1 | P0 | Ortak iç shell, navigasyon/footer, intro, scoped font/renk/spacing; Hakkımızda ile referans | 1,5 saat | Bir desktop/mobil referans ve tekrar kullanılabilir temel |
| 2 | P0 | Hakkımızda bloklarını tamamla; Hizmetler / Projeler / İletişim iskeletleri | 2 saat | Dört ana iç sayfa aynı dilde;9 proje kaydı/form/çeviriler mevcut |
| 3 | P0 | `ProjectDetailView` ortak iskeleti | 1,5 saat | Sekiz detay, uzun metin ve optional görsel/link durumları çalışır |
| 4 | P1 | Beş ekip kartı/modal çerçevesi ve hedefli klavye düzeltmeleri | 0,5 saat | Aynı Hakkımızda akışında beş profil; yeni URL yok |
| 5 | P0 | Mobil, TR/EN/DE, SEO/link/export ve homepage regresyonu için hedefli doğrulama | 1,5 saat | Kritik rotalar/işlevler ve korunan ana sayfa kontrolü; gereken TS/lint/build |
| 6 | Tampon | Bulgu düzeltmeleri, kanıt/log/teslim | 1 saat | Gerçek açıklar ve tamamlanan kapsam kaydı |

**P0 minimum teslim:** Ortak shell + dört sayfa + sekiz detayın temel düzeni, mevcut ekip/form davranışı korunmuş, URL/SEO/dil ve ana sayfa için hedefli kontroller geçmiş. **P1:** Ekip modal/kart ince ayarı ve özel uzun içerik durumları; kritik erişilebilirlik sorunu çıkarsa P0 teslimini bloke eder. **P2 / sonraki gün:** özel görsel kompozisyonlar, hizmet süreci motion polish, ileri etkileşimler, eksik vaka içeriklerinin kullanıcı onaylı tamamlanması, tam çok dilli SEO, gerçek cihaz/Safari ve kapsamlı release QA.

Her aileye özel final tasarım + bütün içerik iyileştirmeleri + tam cihaz matrisi **bir günde vaat edilmez**. Deploy bu 8 saatlik planın otomatik parçası değildir.

## 7. Aşama 2 kabul ölçütleri ve ilk görev

İlk görev önerisi: **BS3P-031 / Aşama 2A — ortak iç sayfa çerçevesi ve Hakkımızda pilotu.** Onay kapsamı somut olarak iç sayfalara özel shell/intro/stil ve Hakkımızda gövdesini içerir; homepage tasarımı, 3D/marquee/galeri, slug/içerik/paket değişikliği içermez. Önce pilot desktop/mobil görünümle yeni sistemin yeterliliği değerlendirilir; diğer aileler aynı onaylanmış kapsam içindeyse sırayla taşınır. Bu analiz bitiminde hiçbir uygulama dosyasına başlanmadı.

1. Mevcut13 canonical rota ve13 sitemap URL’si korunur; sekiz detay slug’ı/9 liste kaydı ve `hasDetailsPage:false` davranışı değişmez. Prototipler üretimde404 kalır.
2. Ana sayfanın içerik/render/motion/mobil marquee ve galeri kodu korunur; iç shell seçimi `/` sonucunu değiştirmez. Ortak layout değişikliği varsa ana sayfaya etkisi hedefli incelenir.
3. Dört ana iç sayfa ve sekiz detay Instrument Sans, açık mineral yüzey, ortak hizalama/boşluk/başlık dili kullanır; iç sayfalara yeni ağır 3D eklenmez.
4. TR/EN/DE mevcut metinler, uzun TR vaka içerikleri, placeholder ve gizlilik notları, görsel/alt/sosyal/canlı/kaynak bağlantıları kayıpsız taşınır. Eksik içerik uydurulmaz. Mevcut metadata/title/description/canonical/OG/Twitter/keywords ve JSON-LD yanlışlıkla silinmez.
5. Hakkımızda beş profil açılır/kapanır; Escape, görünür odak, modal odağı ve geri dönüşü doğrulanır. Formun etiketleri/validasyon/input adları/JSON sözleşmesi ve sending/success/error/configuration-error durumları korunur; gerçek API’ye yetkisiz mesaj gönderilmez.
6. En az bir desktop ve bir mobil temsilci; dört aile + uzun proje detayı + DE uzun başlık kontrolü. Taşma, okunabilirlik, menü/linkler/focus ve reduced-motion hedefli incelenir. 13 rota HTTP/link kontrolü yapılır; gerekli TS/lint/production build/export izolasyonu tamamlanır. Geniş QA ayrı onaylı iştir.
7. Yalnız gerçekten geçen kontroller kaydedilir; açık içerik/cihaz/API sınırları teslimde belirtilir. Commit/push/PR/merge/deploy ayrı açık onaya tabidir.

## Oturum kapanışı

Analiz raporu, HTTP/kaynak kanıtları, TASK_REGISTER ve dört handoff/log dosyası güncellendi; başlangıçtaki commit edilmemiş kayıtlar korundu. Uygulama/CSS/asset/paket dosyaları değiştirilmedi; geliştirme sunucusu başlatılmadı/durdurulmadı. TS/lint/build/full QA çalıştırılmadı (plan-only). Git staging/commit/push/PR/merge/deploy/branch değişimi yapılmadı. Aşama2 için kullanıcı onayı beklenir.

- Kapanış hedefli belge kontrolü:13canlı/13yerel/8slug/12eski+1yeni/6prototip404 tutarlılığı ve başlangıç dört handoff içeriğinin korunması doğrulandı. Production yollarında Git diff boş; index boş; `git diff --check` geçti. Bunlar uygulama testi değildir.


# BS3P-031 — Aşama 2A / Ortak İç Sayfa Çerçevesi + Hakkımızda Pilotu

**Durum:** Yerelde uygulandı; hedefli kontroller geçti; **kullanıcı görsel onayı beklenir**. Aşama2B ve diğer sayfaların migration’ı yetkilendirilmedi. Branch master/HEAD0e4ec3d aynı; commit/push/deploy yok.

## Yetki ve tasarım

Kullanıcı ortak3.0+ iç çerçeve ve yalnız `/hakkimizda` pilotunu açıkça onayladı. Mineral açık `#f3f5f7`, Instrument Sans, koyu nötr metin ve `#285bd6` mavi aksan; büyük/sakin giriş, geniş boşluklar, metin ağırlıklı yaklaşım ve beş gerçek ekip fotoğrafı kullanıldı. Yaklaşım ilkeleri kartlar yerine açık editoryal satırlar; mevcut BAYES harfleri ekip ilişkisini korur. Yeni iddia/metin/metrik/görsel/ağır3D/bağımlılık eklenmedi. Görsel kabul bu test sonuçlarından çıkarılamaz.

## Değişen uygulama dosyaları

| Dosya | Değişiklik |
|---|---|
| `components/interior/InteriorShell.tsx` (yeni) | Çocuk içerik alan ortak header/footer; gerçek sayfa linkleri; TR/EN/DE; native mobil menü/Escape/dışarı tıklama; skip link |
| `components/interior/InteriorIntro.tsx` (yeni) | Yeniden kullanılabilir eyebrow/H1/açıklama girişi |
| `components/interior/TeamProfiles.tsx` (yeni) | Aynı beş üye/veri/foto/rol/bio/sosyal link; native dialog, scroll lock, Escape/backdrop/kapat, Tab döngüsü, açan düğmeye focus dönüşü |
| `components/interior/interior.module.css` (yeni) | Kapsamlı CSS Module; yalnız shell altına uygulanan font/renk/spacing;5/3/2kolon ekip;desktop/tablet/mobil/modal stilleri |
| `components/SiteChrome.tsx` | Yalnız `/hakkimizda` ve mevcut `/hakkimizda.html` alias’ı yeni shell’e opt-in; diğer branch’ler mevcut |
| `app/hakkimizda/page.tsx` | Ortak intro; aynı principles/stats/team/CTA içerikleri; `main-content` ve skip için tabIndex−1 |

Eski `TeamSection`, `PageHero`, `StatsBand`, `CallToAction` silinmedi/değişmedi; diğer sayfalara stil yayılmadı. Root layout/global CSS/design tokens/metadata/dil/veri/asset/Next config/package/workflow aynı. İlk fotoğraflar dahil tüm ekip görselleri aynı src ve mevcut içeriklerden gelir. Ekip alternatif metinleri ve sosyal URL’ler korundu. Kaynakta mevcut `example.com` profil website adresleri değiştirilmedi; dış hedeflerin doğruluğu bu görevde test edilmedi.

## Gerçek doğrulamalar

- Chromium (kurulu Google Chrome, izole headless profil): **1440×1000 desktop,768×1000 tablet,390×1000 ve375×1000 touch emülasyonu**. Her genişlikte scrollWidth viewport’a eşit; yatay taşma0; beş profil ve Instrument Sans doğrulandı.
- Development kabul turunda TR→EN→DE→TR seçenekleri, H1 ve ilk profil biyografisi dört genişlikte kontrol edildi;localStorage tercihi vehtml.lang doğru. Production’da EN/DE/TR reload sonrası tercih ve başlık korunması ayrıca doğrulandı. Tüm kaynak çeviriler değişmedi.
- Final statik production turunda **beş profil×dört genişlik=20 açma/kapama**. Desktop/tablet Enter ile, mobilde native touch tap ile açma;Tab/Shift+Tab odağı modal içinde;Escape veya touch close; kapanınca açan düğmeye focus dönüşü geçti. Her modalda isim ve üç sosyal link var. Development’da ayrıca fareyle close/backdrop kapama kontrol edildi. Pageerror0.
- Native dialog tek başına son linkten Tab ile tarayıcı odağına çıkabildiği için açık Tab/Shift+Tab çevrimi eklendi ve yeniden geçti. Skip bağlantısı için main’in tabIndex−1 olması gerektiği hedefli kontrolde bulundu/düzeltildi; son kontrol odağın main’e geçtiğini doğruladı.
- `/`, `/hizmetler`, `/projeler`, `/iletisim`: aynı 1440px/reduced-motion ortamında önce/sonra görünür body metni aynı; tam sayfa PNG çözülmüş RGB kanal karşılaştırmasında **her dört sayfada0fark**. Bunlar hedefli temsilci regresyondur; tüm olası cihaz/etkileşim matrisi değildir.
- Hakkımızda head title/meta/canonical kayıtları development önce/sonra eşit. `app/hakkimizda/layout.tsx` byte olarak aynı. Final production `/hakkimizda`200 ve `/hakkimizda.html`200;ikisinde yeni shell/aynı H1/canonical `https://bayessoft.com.tr/hakkimizda`. Alias’ta usePathname’ın `.html` görmesi nedeniyle açık eşleştirme eklendi. Export hâlâ `out/hakkimizda.html`; yeni redirect/rota/config yok.
- Aşama1’de canlı `/hakkimizda/`404 idi. Son yerel statik kontrol slash404 olarak modellenmiştir; bu yeni deployment/canlı sunucu doğrulaması değildir. Başlangıç statik yardımcı sunucusu slash’ı normalize edip200verdiği için test modeli düzeltildi; Next/export config değiştirilmedi.
- **TypeScript, ilgili ESLint ve final production build geçti** (yerel Nodev26.8.2). Export verifier:**687file,0prototypeArtifacts,0prototypeDependencies**. İlk sandbox build font DNS hatası aldı; izinli ağ erişimiyle geçti. Gerçek Ubuntu/Node22CI tekrar koşulmadı.
- Koruma manifesti305mevcut dosyayı kapsadı; uygulama öncesi kaynağa göre yalnız Hakkımızda page veSiteChrome değişti; diğer303dosyanın hash’i aynı, kayıp dosya0 (log güncellemeleri öncesi). Dört yeni interior dosyası ayrıca beklenen eklemelerdir. Başlangıç dirty handoff içerikleri dokümantasyon kapanışında tam metin olarak korundu.

## Ekran görüntüleri ve kanıt

- [[../07-Reviews/evidence/BS3P-031/2a-final-1440.png|Desktop1440 final]]
- [[../07-Reviews/evidence/BS3P-031/2a-final-768.png|Tablet768 final]]
- [[../07-Reviews/evidence/BS3P-031/2a-final-390.png|Mobil390 final]]
- [[../07-Reviews/evidence/BS3P-031/2a-final-375.png|Mobil375 final]]
- [[../07-Reviews/evidence/BS3P-031/2a-final-modal-1440.png|Desktop modal]] ve [[../07-Reviews/evidence/BS3P-031/2a-final-modal-390.png|Mobil modal]].

`2a-before-*`: değişiklik öncesi;`2a-after-*`:development ilk kabul;`2a-final-*`:final production çıktı, tüm lazy portreler gerçek scroll+decode ile yüklenmiş. Erken mobil fullpage capture’da viewport dışı lazy portreler yüklenmediği için boş slotlar görünüyordu; kaynak resim hatası değildi, final capture yönteminde çözüldü. Final production PNG’lerde dev göstergesi yok.

`2a-checks.json`, `2a-production-checks.json`, `2a-reload-and-skip.json`, `2a-pixel-regressions.json`, `2a-protected-files.json`, `2a-baseline.json`, `2a-production-build.log` ayrıntılı kanıttır. Mevcut eski test harness dosyaları değiştirilmedi; bu oturumun geçici QA araçları `/tmp/bs031-2a-*` altında.

## Korunanlar ve açık konular

Ana sayfa/3D/prizma/MP4/mobil marquee/proje galerisi;Hizmetler/Projeler/İletişim/proje detayları;üç dil ve mevcut içerik/foto/linkler;URL/SEO;package/lock;kişisel.obsidian/eski kasalar/userfiles ve başlangıç dirty belgeler korundu. Şu an bilinen açık pilot işlev hatası yok. **Görsel kullanıcı kabulü beklenir**; gerçek Safari/iPhone/fiziksel tablet/ekran okuyucu veya kapsamlı QA kabulü verilmez. Existing example.com linkleri ve içerik iddiaları taşındı, doğrulanmış yeni içerik gibi sunulmadı.

Önizleme: http://localhost:3030/hakkimizda (bu oturumun dev sunucusu kullanıcı incelemesi için açık). Geçici statik3031sunucusu test sonrasında kapatılır. Sonraki sayfalar Aşama2B ayrı talimatını bekler; otomatik migration/commit/push/deploy yok.

- Aşama2A son kapanış: görevde açılan geçici statik3031 sunucusu kapatıldı; dev3030 görsel inceleme için açık bırakıldı. `git diff --check` geçti; master/HEAD ve boş index korundu. Tam Git çıktıları031kanıtklasöründeki `2a-git-status.txt` / `2a-git-diff-stat.txt` dosyalarında.


## 2026-10-16 — Aşama 2A navigasyon düzeltmeleri

**Kullanıcı kabulü:** Hakkımızda pilot tasarımı onaylandı. Bu son navigasyon revizyonu görsel onay bekler; master korunur, commit/push yok.

- `data/i18n.ts`: ortak `nav.about` etiketi TR **Hakkımızda**, EN **About Us**, DE **Über uns** oldu. Bu kaynağı kullanan header ve footer bağlantılarında aynı etiket görünür; `/hakkimizda` hedefi değişmedi.
- `components/homepage/Header.tsx`: ana sayfada mevcut Hakkımızda öğesi bulunmadığı doğrulandı; Hizmetler ile İletişim arasına tek `/hakkimizda` linki eklendi. Desktop ve mobil aynı `NavigationLinks includeAbout` verisini kullanır. Footer bu yardımcıyı varsayılanıyla kullandığından ana sayfa footer listesine yeni öğe eklenmedi. Mevcut diğer linkler ve CSS aynı.
- `components/interior/interior.module.css`: testte mevcut Almanca mobil H1 kelimesi “Technologieentscheidungen” 342px alanda500px metin genişliğiyle viewport’u büyüttü. Yalnız mevcut mobil `.intro h1` kuralına `overflow-wrap:anywhere` eklendi; başlık metni, font/boyut/boşluk/desktop görünümü aynı. BAYES/ekip/foto/modal kaynakları değişmedi.
- Chromium 1440/1100/1024/900/390/375px × ana sayfa/Hakkımızda × TR/EN/DE = **36 görünür navigasyon kontrolü geçti**. Her görünür nav’da tek Hakkımızda URL’si, doğru etiket, yinelenmeyen öğeler ve viewport içinde kalan menü/link sınırları doğrulandı. Mobilde hem document.scrollWidth hem innerWidth hedef viewport’u aşmıyor. Ana sayfadaki link tıklanarak Hakkımızda/H1’e ulaşım her genişlikte doğrulandı.
- TypeScript ve ilgili ESLint geçti; `git diff --check` temiz. Bu küçük revizyonda yeni production build/full QA/gerçek cihaz testi yapılmadı. Önceki Aşama2A build/test sonuçları tarihsel kayıttır.
- Açılış hash manifestine göre yalnız yukarıdaki üç uygulama dosyası değişti; diğer mevcut app/components/data/lib/public/assets/scripts dosyaları aynı. Hero/marquee/galeri ve onaylanan ekip/modal kodu, kişisel dosyalar, önceki untracked veriler ve dirty handoff geçmişi korundu. Yeni içerik bölümü/başka iç sayfa migration’ı yok.
- Kanıt: `nav-checks.json`, `nav-protection.json`, `nav-home-1440.png`, `nav-home-390.png`, `nav-about-1440.png`, `nav-about-390.png` — mevcut `07-Reviews/evidence/BS3P-031/` altında. Önizleme: http://localhost:3030/ ve http://localhost:3030/hakkimizda ; mevcut dev sunucusuna dokunulmadı.


# BS3P-031 — Aşama 2B / Hizmetler, Projeler, İletişim

**Durum:** Yerel uygulama ve hedefli kontroller tamamlandı; **Aşama 2B kullanıcı görsel onayı bekler**. Kullanıcı Aşama 2A tasarımını ve navigasyon revizyonlarını bu görev başında onayladı. `master` / `0e4ec3d15072cf78f5b7b3ad060d1d9d1916047c` korundu. Commit/push/deploy/Aşama2C yok.

## Uygulama ve dosyalar

| Dosya | Bu aşamadaki değişiklik |
|---|---|
| `app/hizmetler/page.tsx` | InteriorIntro + dört hizmet için açık editoryal satırlar; aynı başlık/summary/outcome/points; mevcut dört süreç adımı ve özetleri; İletişim/e-posta CTA |
| `app/projeler/page.tsx` | InteriorIntro +9kayıt;problem/çözüm/etki;mevcut teknoloji verileri;yalnız8hasDetailsPage kaydında gerçek detay linki;mevcut canlı/kaynak bağlantıları |
| `app/iletisim/page.tsx` | Aynı form gönderim kodu ve alanlar;iki kolon form/iletişim düzeni;mobil tek kolon;aynı sosyal hedefler ve live durum mesajları |
| `components/SiteChrome.tsx` | Yalnız dört onaylı index sayfası ve mevcut `.html` biçimleri ortak kabuğa alınır;proje detayları eski chrome’da kalır |
| `components/interior/InteriorShell.tsx` | Yeni üç index sayfasının `.html` alias’larında aktif navigasyon eşleşmesi genişletildi;Hakkımızda ve diğer header görünümü aynı |
| `components/interior/InteriorCTA.tsx` (yeni) | Hizmetler/Projeler için aynı mevcut CTA çevirilerini kullanan ortak bölüm;Hakkımızda yeniden düzenlenmedi |
| `components/interior/pages.module.css` (yeni) | Yalnız opt-in kompozisyonlara ait CSS Module;ortak shell tokenları;hizmet/proje/form için farklı grid’ler;mobil uzun metin ve44pxdetay/submit hedefleri |

Açık mineral zemin, Instrument Sans, mevcut nötr/mavi palet ve onaylı boşluk/başlık dili korundu. Hizmetler’de büyük başlıklarla iki kolon satırlar ve dört aşamalı statik süreç; Projeler’de dokuz kapsamlı vaka satırı; İletişim’de sade etiketli form ve ayrı bağlantı kolonu kullanıldı. Aynı genel kart düzeni üç sayfaya kopyalanmadı. Yeni bağımlılık/görsel/metin/iddia/metrik eklenmedi.

Eski `ProcessAssembly` illüstrasyonunun animasyonu bu sayfanın iskeletinde render edilmiyor; mevcut süreç başlığı/dört adım/özetler korunuyor. Eski bileşen ve tüm asset kaynakları silinmedi veya değiştirilmedi. Mevcut proje listesi görsel render etmiyordu; yeni sahte görsel/kapak eklenmedi. Proje detaylarının mevcut screenshot ve diğer görselleri/veri kaynakları aynı. ARELİM kaydına detay linki üretilmez. Teknolojiler artık mevcut veri kaydının tamamından gösterilir; daha önce liste yalnız ilk dördünü gösteriyordu.

## Form sözleşmesi ve güvenli kontrol

`handleSubmit` bloğu başlangıç sürümüyle **karakter karakter eşit** tutuldu. `siteConfig.contactApiUrl`, POST, `Accept:application/json`, `Content-Type:application/json` ve JSON anahtarları `full_name`, `email`, `project_type`, `budget_timeline`, `message` değişmedi. Native required/email validation, autocomplete, placeholder, select seçenekleri ve rows6 textarea da önce/sonra DOM karşılaştırmasında aynı.

Tüm test POST’ları tarayıcıda route interception ile tutuldu; hiçbir test mesajı gerçek servise iletilmedi. Sentetik `qa@example.invalid` verisiyle3istek yerelde200/500/networkabort olarak cevaplandı. Başarıda formreset, sending sırasında disabled gönder düğmesi, HTTP/network hata sonrası yeniden kullanılabilir form ve değerlerin korunması geçti. Boş zorunlu alan ve geçersiz e-posta hiçPOSTüretmedi. Etiketler nested label olarak korundu;AdSoyad’dan Tab ile e-posta alanına geçiş ve polite/atomic durum alanı mevcut. Configuration-error dalı byte olarak korundu, boş endpoint senaryosu bu turda runtime olarak zorlanmadı. Backend/CORS/canlı teslimat başarısı iddiası yok.

## Gerçek test sonuçları

- Chromium **1440×1000,390×1000,375×1000**; üç sayfa×üç dil×üç genişlik=**27sayfa/dil/ekran durumu** geçti. Viewport/scrollWidth kontrolünde taşma0;tekH1;üçdil çeviri seçimi ve mobilmenü çalışıyor. Yeni ağır motion yok;yakalama/kabul turları reduced-motion ortamındadır.
- Hizmetler → İletişim CTA tıklaması üç genişlikte gerçek URL’ye ulaştı.
- Projeler’de9article ve8benzersiz mevcut detayhref’i üç dil/genişlikte doğrulandı;ARELİM detaylinki0. Sekiz detayURL’si yerelGET200. Source ve live link koşulları veriyle korunur;dışsitelerin sağlığı bu görevde test edilmedi.
- Üç sayfanın title/meta/canonical kayıtları başlangıç head kayıtlarıyla eşit. Metadata layout dosyaları,TR/EN/DE çeviri kaynakları,SEOhelpers veNextconfigdeğişmedi.
- Production statik çıktı:üçsayfa×üçgenişlik=9ekran200/taşma0;üç `.html`alias200/aynıcanonical/doğru tek görünür aktifnav. FurtherUp detayının eskiheaderkolunda kaldığı tarayıcıda doğrulandı. Diğer7detayın renderer/source dosyaları hash olarak aynı;Aşama2C’ye başlanmadı. Productionpageerror0.
- **Ana sayfa ve Hakkımızda**,1440ve390px:önce/sonra mainmetin aynı;tamPNGdosyaları **byteolarakeşit** (4karşılaştırma). Böylece onaylı görünüm/ekipkompozisyonu için bu temsilci koşullarda görselregresyon yok.
- Başlangıçmanifesti295kaynakdosyayı kapsar;yalnız3page+SiteChrome+InteriorShell değişti,diğer290kaynakdosyasının hash’i aynı. İkiyeni interior dosyası eklenir. Homepageheader/navdüzeltmeleri,hero/marquee/galeri,Hakkımızdagövdesi/TeamProfiles/interior.module.css,sekizdetayverisi/rendereri,assetler/package/configkorunur.
- **TypeScript, hedefli ESLint, `git diff --check` ve production build geçti.** Yerel Nodev26.8.2. Exportverifier:**684file,0prototypeArtifacts,0prototypeDependencies**. GerçekUbuntu/Node22CI/gerçekSafari/iPhone/fullQA yapılmadı.
- Test betiğinde JSON’dakiundefined alanın normalleştirilmesi ve gizli mobilmenüyü sayan aktifnav seçicisinin yalnız görünürnav’a daraltılması gerekti;test düzeltmelerinden sonra son turlar geçti. Bu iki olay uygulama/form hatası değildir.

## Ekran görüntüleri ve kanıtlar

| Sayfa | Desktop1440 | Mobil390 | Mobil375 |
|---|---|---|---|
| Hizmetler | [[../07-Reviews/evidence/BS3P-031/2b-final-hizmetler-1440.png]] | [[../07-Reviews/evidence/BS3P-031/2b-final-hizmetler-390.png]] | [[../07-Reviews/evidence/BS3P-031/2b-final-hizmetler-375.png]] |
| Projeler | [[../07-Reviews/evidence/BS3P-031/2b-final-projeler-1440.png]] | [[../07-Reviews/evidence/BS3P-031/2b-final-projeler-390.png]] | [[../07-Reviews/evidence/BS3P-031/2b-final-projeler-375.png]] |
| İletişim | [[../07-Reviews/evidence/BS3P-031/2b-final-iletisim-1440.png]] | [[../07-Reviews/evidence/BS3P-031/2b-final-iletisim-390.png]] | [[../07-Reviews/evidence/BS3P-031/2b-final-iletisim-375.png]] |

`2b-before-*`başlangıç;`2b-after-*`development kabul;`2b-final-*`production export görüntüleridir. Ayrıntılı sonuçlar:`2b-checks.json`,`2b-production-checks.json`,`2b-regression.json`,`2b-protection.json`,`2b-production-build.log`. Mevcut kanıt/harnessler korunur;buoturumaraçları/tmp/bs031-2b-* altında. Yeni evidence üstklasörü yok.

## Açık konular ve sonraki adım

Bilinen açık hedefli işlev hatası yok;**Aşama2B kullanıcı görsel kabulü beklenir**. Mevcut müşteri/performans/güvenlik iddiaları yeniden doğrulanmadı veya genişletilmedi. Formun canlıbackend teslimatı gerçekmesajla test edilmedi;configuration-error sadece kaynak korunmasıyla güvence altındadır. Gerçek cihaz ve geniş QA bu görevin başarısı olarak sunulmaz.

Önizlemeler:http://localhost:3030/hizmetler , http://localhost:3030/projeler , http://localhost:3030/iletisim . Önceden çalışan3030devserverkorundu;production testinin geçici yerel sunucusu finally ile kapandı. Önceki2Auncommittedvekişiseluntrackeddosyalar/handoffgeçmişi korundu;Gitindexboş,master/HEADaynı. Commit/push/PR/merge/deploy yok. **Aşama2C başlamadı.**


# BS3P-031 — Aşama 2B Projeler vitrin revizyonu

**Durum:** Yalnız `/projeler` yenilendi; yerel kontroller geçti, görsel onay beklenir. Master/HEAD korunur. Hizmetler ve İletişim revize edilmedi; Aşama 2C başlamadı.

## Veri ve düzen

- Uygulama değişiklikleri yalnız `app/projeler/page.tsx` ve yeni `components/interior/projects.module.css` dosyalarıdır. Shared interior CSS, header/footer, veri modeli ve production asset’leri değiştirilmedi.
- Intro korundu, yalnız bu sayfada daha kompakt sunuldu. Üstte **FurtherUp Drive, Reviel, Metek Makina** için mevcut ana sayfa `getSelectedProjects(locale)` kaynağı ve `/projects/covers/*` üretim WebP posterleri kullanıldı. Posterler kırpılmadan gösterilir; mobilde640px, uygun genişliklerde1080px kaynak seçilir.
- Dokuz eski katalog kaydı eksiksiz korunur. FurtherUp bu dokuzun içindedir ve yalnız üst bölümde görünür. Reviel/Metek, dokuzlu katalogda bulunmayan fakat ana sayfada zaten mevcut iki gerçek vitrin kaydıdır. Bu nedenle görünüm **3 öne çıkan +8 kalan =11 benzersiz çalışma** içerir; veri dizilerine yeni kayıt eklenmedi. FurtherUp tekrarlanmadı.
- Kalan sekiz kayıt desktop/tablette iki, mobilde tek kolon karttır. Gerçek görseli olmayanlar, gerçek ürün ekranı izlenimi vermeyen CSS monogramlarıyla desteklendi. Yeni görsel/asset/uydurma ekran veya iddia üretilmedi.
- Her katalog kaydının kısa açıklaması, teknolojileri ve bağlantıları korunur. Uzun problem/etki metinleri dokuz native `details` açıklamasında erişilebilir tutuldu; klavyeyle açılır/kapanır. Reviel/Metek’e kaynağı bulunmayan problem/tech metni yazılmadı.
- **Sekiz benzersiz gerçek detay URL’si** korunur. Reviel, Metek ve ARELİM’e detay linki yoktur. Eski canlı/kaynak linkleri aynıdır; Reviel ve Metek’in yalnız mevcut ana sayfa canlı hedefleri (`https://www.reviel.com.tr/`, `https://metekmakina.com/urunler`) kullanılır.

## Kontroller ve kanıt

- Chromium1440/768/390/375px × TR/EN/DE = **12 durum**: yatay taşma0,11benzersiz çalışma,9eski ID’nin tamamı,3öne çıkan sırası,8gerçek detay,canlı/kaynak linkleri ve9native açıklama doğrulandı.
- Her genişlikte üç poster `decode()` ile başarıyla yüklendi; `naturalWidth>0`, `object-fit:contain` ve browser `currentSrc` kaydedildi. Görsellerdeki yazılar mevcut production asset’inin parçasıdır; asset içinde yeni EN/DE görsel metni üretilmedi. UI kategori/açıklama/CTA dili mevcut veri akışıyla değişir.
- Native açıklamalar Enter ile açılıp kapandı. FurtherUp Detaylar bağlantısı klavyeyle izlenerek gerçek sayfaya ulaşıldı. Dış canlı siteler tıklanmadı; hedef URL’lerinin korunması kontrol edildi.
- Sayfa title/meta/canonical başlangıçla eşit. Final production export’ta4ekran200/taşma0/yüklenen posterler, `/projeler.html` alias200/canonical/tek görünür aktifnav doğrulandı. Production pageerror0; detay chrome’u eski kaldı.
- **Ana sayfa, Hakkımızda, Hizmetler ve İletişim**1440/390px önce/sonra PNG’leri **byte olarak aynı** (8karşılaştırma). Metinler de aynı. Böylece bu revizyonun diğer dört sayfaya görsel etkisi ölçülen koşullarda0.
- Kaynak hash manifestinde yalnız `app/projeler/page.tsx` değişti; yeni CSS Module dışında diğer mevcut kaynaklar aynı. Önceki2A/2B, kişisel/untracked dosyalar, eski evidence ve harnessler korundu.
- TypeScript, hedefli ESLint ve production build geçti: **685file,0prototypeArtifacts,0prototypeDependencies**. `git diff --check` temiz. Testler reduced-motion Chromium ve yerel Nodev26.8.2 ortamındadır; gerçek cihaz/Safari/UbuntuCI veya kapsamlı QA yeniden yapılmadı.

Final ekranlar:
- [[../07-Reviews/evidence/BS3P-031/projects-rev-final-1440.png|Desktop1440]]
- [[../07-Reviews/evidence/BS3P-031/projects-rev-final-768.png|Tablet768]]
- [[../07-Reviews/evidence/BS3P-031/projects-rev-final-390.png|Mobil390]]
- [[../07-Reviews/evidence/BS3P-031/projects-rev-final-375.png|Mobil375]]

Ayrıntılar: `projects-rev-checks.json`, `projects-rev-production-checks.json`, `projects-rev-regressions.json`, `projects-rev-protection.json`, `projects-rev-build.log`. Önce/sonra development PNG’leri aynı031kanıtklasöründe. Bu görevin geçici araçları `/tmp/bs031-projects-*` altında; eski test harnessleri değiştirilmedi.

## Kapanış

Bilinen açık hedefli işlev hatası yok; görsel kabul beklenir. Önizleme: http://localhost:3030/projeler . Mevcut3030dev sunucusu korundu; testin geçici production sunucusu sonunda kapandı. Master/HEAD/index aynı; commit/push/deploy yapılmadı. Hizmetler/İletişim ve Aşama2C için yeni çalışma başlatılmadı.


# BS3P-031 — Aşama 2C / Sekiz proje detayı

**Durum:** Yerel uygulama ve istenen hedefli kontroller tamamlandı; Aşama2C kullanıcı görsel onayı bekler. Kullanıcı2A/2B’yi iskelet düzeyinde ve Projeler vitrinini şimdilik kabul etti. **Projeler listesinin ileri görsel gelişimi sonraki aşamaya bırakıldı.** Master/HEAD aynı; commit/push/deploy yok.

## Uygulama dosyaları ve düzen

- `components/ProjectDetailView.tsx`: Sekiz rota için tek renderer yenilendi. `InteriorIntro` ile kategori/başlık/açıklama; mevcut teknoloji bandı ve dekoratif baş harfler; varsa iki ekranlı galeri; bölüm bağlantıları; problem ve mimari/çözüm için paragraf düzeni; etki ve özellikler alanı; mevcut canlı/kaynak linkleri.
- `components/SiteChrome.tsx`: `data/site.ts` içindeki gerçek `hasDetailsPage && slug` kayıtlarından türetilen sekiz yol ve `.html` biçimleri `InteriorShell` kullanır. Dokuzuncu veya tahmini slug eklenmedi. Diğer index sayfalarının render kolu aynı.
- Yeni `components/interior/project-detail.module.css`: Yalnız detay alanına ait CSS Module. Instrument Sans ve açık mineral/mavi/nötr shell tokenları; desktop bölüm navigasyonu + okuma kolonu; mobil tek kolon; özelliklerde tipografik vurgu;44pxgaleri kontrolleri. Global CSS ve ortak onaylı stiller değiştirilmedi.

Görsel/ritim alanlarında doğrulanmamış yeni ekran, diyagram, sayı veya başarı iddiası üretilmedi. FurtherUp’ın iki mevcut screenshot’ı büyük, `object-fit:contain` galeride kullanılır. Diğer projelerin kimliği mevcut başlık/kategori/teknolojiden türetilen dekoratif monogram ve tipografik hiyerarşiyle kurulur. Uzun çözüm metninin mevcut paragraf sınırları korunur.

## İçerik, dil ve URL koruması

`app/projeler/[slug]/page.tsx`, generateStaticParams/generateMetadata, tüm veri/çeviri kaynakları ve asset dosyaları aynı. Önceki `view` locale dönüşümü aynı tutuldu: TR uzun açıklamalar; EN/DE mevcut özet overview/problem/solution ve tek etki özelliği; compact notice; varsa note’un EN/DE’de mevcut gizlenme davranışı korunur. Canlı/kaynak hedefleri aynı öncelikle (`project` ardından `detail`) seçilir.

Etki bölümünde yalnız mevcut `localizeProject(project,locale).impact` kaynağı kullanıldı; yeni metin yazılmadı. Aynı etki zaten özelliğin kendisi olduğunda ek tekrar paragrafı üretilmez. Önceden gösterilen tüm paragraf/özellik metinleri ve gerçek link/görsel referansları başlangıç tarayıcı kaydıyla karşılaştırılıp bulundu.

## Sekiz rota kontrol matrisi

Her rota için1440/390/375px×TR/EN/DE=9durum; toplam72. HTTP sütunu production canonical / `.html` alias sonucudur.

| Rota | Dil/ekran | HTTP | İçerik/görsel | Development ekranları |
|---|---|---|---|---|
| `/projeler/ai-chatbot` | 9/9 durum geçti | 200 / 200 | Yeni görsel veya içerik üretilmedi | [[../07-Reviews/evidence/BS3P-031/2c-after-ai-chatbot-1440.png|1440]] / [[../07-Reviews/evidence/BS3P-031/2c-after-ai-chatbot-390.png|390]] |
| `/projeler/atli-logistics` | 9/9 durum geçti | 200 / 200 | Yeni görsel veya içerik üretilmedi | [[../07-Reviews/evidence/BS3P-031/2c-after-atli-logistics-1440.png|1440]] / [[../07-Reviews/evidence/BS3P-031/2c-after-atli-logistics-390.png|390]] |
| `/projeler/furtherup-drive` | 9/9 durum geçti | 200 / 200 | 2 mevcut ekran, galeri geçti | [[../07-Reviews/evidence/BS3P-031/2c-after-furtherup-drive-1440.png|1440]] / [[../07-Reviews/evidence/BS3P-031/2c-after-furtherup-drive-390.png|390]] |
| `/projeler/maritime-horizon-segmentation` | 9/9 durum geçti | 200 / 200 | Yeni görsel veya içerik üretilmedi | [[../07-Reviews/evidence/BS3P-031/2c-after-maritime-horizon-segmentation-1440.png|1440]] / [[../07-Reviews/evidence/BS3P-031/2c-after-maritime-horizon-segmentation-390.png|390]] |
| `/projeler/military-aircraft-classification` | 9/9 durum geçti | 200 / 200 | Yeni görsel veya içerik üretilmedi | [[../07-Reviews/evidence/BS3P-031/2c-after-military-aircraft-classification-1440.png|1440]] / [[../07-Reviews/evidence/BS3P-031/2c-after-military-aircraft-classification-390.png|390]] |
| `/projeler/petnest-platform` | 9/9 durum geçti | 200 / 200 | Yeni görsel veya içerik üretilmedi | [[../07-Reviews/evidence/BS3P-031/2c-after-petnest-platform-1440.png|1440]] / [[../07-Reviews/evidence/BS3P-031/2c-after-petnest-platform-390.png|390]] |
| `/projeler/smart-hospital` | 9/9 durum geçti | 200 / 200 | TR placeholder korunur | [[../07-Reviews/evidence/BS3P-031/2c-after-smart-hospital-1440.png|1440]] / [[../07-Reviews/evidence/BS3P-031/2c-after-smart-hospital-390.png|390]] |
| `/projeler/tam-finans-fintech` | 9/9 durum geçti | 200 / 200 | Yeni görsel veya içerik üretilmedi | [[../07-Reviews/evidence/BS3P-031/2c-after-tam-finans-fintech-1440.png|1440]] / [[../07-Reviews/evidence/BS3P-031/2c-after-tam-finans-fintech-390.png|390]] |

## Gerçek test sonuçları

- **72 durum geçti:** tek H1, Instrument Sans, innerWidth/scrollWidth hedef genişliği aşmıyor. Üç dilde eski başlık, paragraf/özellik metinleri, linkler ve image src listeleri korunuyor. Desktop metadata/title/canonical başlık kayıtları öncekiyle aynı.
- **24 liste–detay dönüşü:** her rota ve genişlikte geri linki klavyeyle listeye, gerçek liste linki yeniden detaya ulaşıyor. Dokuzuncu ARELİM detay artifact’i yok; statikGET404.
- FurtherUp galerisi1440/390/375’te iki görsel decode/yükleme kontrolünü geçti. Önceki/sonraki düğmeleri, sınırda disabled davranışı, ArrowLeft/Right klavye hareketi ve mobil touch tap geçti. Pager kontrolleri44px; native yatay kaydırma ve mevcut reduced-motion davranışı korunuyor. Ayrı fiziksel swipe/cihaz testi yapılmadı.
- Production export’ta8canonical+8alias=16rota200 ve doğrucanonical/yeniInteriorShell;3temsilci proje×3genişlik=9finalPNG, taşma0/pageerror0. Testin geçici statik sunucusu finally ile kapandı;3030mevcutdevsunucusu korundu.
- TypeScript, hedefli ESLint, production build ve `git diff --check` geçti. Exportverifier:**685file,0prototypeArtifacts,0prototypeDependencies**. YerelNodev26.8.2;gerçekUbuntu/Node22CI/fullQA/Safari/iPhone yenidenkoşulmadı.

### Diğer sayfaların regresyonu ve ölçüm sınırı

Ana sayfa, Hakkımızda, Hizmetler, Projeler listesi ve İletişim1440/390px önce/sonra kaydedildi. **10PNG’den9’u byte olarak aynı.** Projeler desktop ilk karşılaştırmasındaki234.353farklıpiksel yalnız FurtherUp posterinin sınırlarında (x65–481,y585–1146); diğer tüm alanlar aynı. İlk sonraki yakalamada poster boş görünüyordu. Kaynak/adres/opaklık/decode ve paint tekrar kontrolünde üç poster de yüklü/görünür; onaylı katalog dosyaları ve asset hashleri değişmedi.

Tekrar yakalama önceki dosyayla tam piksel eşitliği sağlamadı (368.252kanal farkı);640/1080aday seçimi probe’u tek başına nedeni kesinleştirmedi. Bu nedenle bu tek desktopkatalog karşılaştırmasına **“piksel farkı0” denmez**. Yalnız ilk yakalamadaki boş poster ve daha sonraki başarılı yüklenme gözlemi kaydedilir; kalıcı katalog hatası veya2Cile nedensel bağ kanıtlanmadı. Kullanıcının kapsamı gereği katalog kaynağına müdahale edilmedi; gerekirse poster yükleme/paint kararlılığı gelecekteki katalog görsel çalışmasında ayrıca ele alınır.

Kaynak manifestinde yalnız ProjectDetailView ve SiteChrome değişti; yeni detayCSS’i dışında bütün mevcut app/components/data/lib/public/assets/scripts kaynakları aynı. Böylece onaylı ana sayfa/Hakkımızda/diğer iç sayfalar,2A/2B kodu, header düzeni ve görseller kayıpsız korundu. İçerik/dil testleri ve9birebirPNG; tek poster yakalama farkına ilişkin bu sınırla birlikte değerlendirilmelidir.

## Bilinen içerik eksikleri

- **Smart Hospital/TR:** problem, solution ve tek keyFeatures alanında “Daha sonra eklenecek.” bulunuyor; aynen gösterildi. Mevcut site verisindeki özet/etki korunur; eksik teknik açıklama üretilmedi.
- **EN/DE:** mevcut içerik uzun TR vakalarının özetidir; bu görev tam çeviri yapmaz. Uyarı ve mevcut locale dönüşümü korunur.
- **Görseller:** yalnız FurtherUp için iki gerçek screenshot var. Diğer yedi proje için yeni resim/kanıt uydurulmadı. Mevcut müşteri/teknik başarı iddiaları bağımsız olarak yeniden doğrulanmadı.

## Final görüntüler ve kanıt

- [[../07-Reviews/evidence/BS3P-031/2c-final-furtherup-drive-1440.png|FurtherUp desktop]] / [[../07-Reviews/evidence/BS3P-031/2c-final-furtherup-drive-390.png|mobil390]] / [[../07-Reviews/evidence/BS3P-031/2c-final-furtherup-drive-375.png|mobil375]]
- [[../07-Reviews/evidence/BS3P-031/2c-final-tam-finans-fintech-1440.png|Tam Finans desktop]] / [[../07-Reviews/evidence/BS3P-031/2c-final-tam-finans-fintech-390.png|mobil390]]
- [[../07-Reviews/evidence/BS3P-031/2c-final-smart-hospital-1440.png|Smart Hospital desktop]] / [[../07-Reviews/evidence/BS3P-031/2c-final-smart-hospital-390.png|mobil390]]

Sekiz sayfanın her biri için24developmentPNG `2c-after-{slug}-{1440,390,375}.png` adlarıyla saklandı. `2c-checks.json`, `2c-production-checks.json`, `2c-baseline-content.json`, `2c-regression.json`, `2c-protection.json`, `2c-production-build.log`, `2c-catalog-image-probe.json` ve `2c-catalog-paint-confirmation.json` gerçek kontrolleri ve sınırlarını kaydeder. Sonraki başarılı katalog görüntüsü `2c-catalog-confirmed.png`;ilk boş posterli yakalama da silinmedi. Test araçları/tmp/bs031-2c-*;eski harnessler değişmedi.

## Kapanış

Aşama2Cyerelde hazır;görsel kabul beklenir.2A/2B’nin iskelet kabulü ve Projeler listesinin ileri görsel çalışmasının ertelenmesi kaydedildi. Önceki rapor/handoff metinleri aynen korundu; kişisel/untracked/eski kasa/MOVdosyalarına dokunulmadı. Master/HEAD/index aynı;commit/push/deploy yok.

## BS3P-031 Aşama 2D — final QA ve yayın kapısı (2026-10-16)

Kullanıcı 2A/2B/2C iskeletlerini ve temiz kontroller koşuluyla production yayını onayladı. Kullanıcı talebi gereği `master` üzerinde kalındı; eski workflow branch beklentisi bu görev için uygulanmadı. `git fetch origin master` sonrasında HEAD/origin aynı `0e4ec3d15072cf78f5b7b3ad060d1d9d1916047c`, ayrışma `0 0`.

- Production export üzerinde **13 rota × TR/EN/DE × 1440/390/375 = 117 durum** geçti: tek H1, dil, header etiketi/tekil Hakkımızda erişimi, footer, metadata/canonical ve taşma kontrolü. Bütün görünür yerel görseller decode edildi; JavaScript hatası ve başarısız asset isteği yok.
- 8 detayın bütün eski dil içerikleri ve bağlantıları karşılaştırıldı; 24 liste→detay→liste turu geçti. Katalogda 9 özgün kayıt korunur; Reviel/Metek ile 11 benzersiz vitrin öğesi, yalnız 8 gerçek detay rotası vardır. Arelim/Reviel/Metek için sahte detay üretilmedi. FurtherUp galerisinde fare/dokunma ve klavye okları geçti.
- 5 ekip modalı × 3 genişlik = 15 kontrol: açma, Escape/kapama, erişilebilir ad/açıklama, Tab döngüsü ve odağın tetikleyiciye dönüşü geçti. Mobil kontroller touch etkin Chromium'da yapıldı.
- İletişim: required/e-posta doğrulaması, gönderim kilidi, başarı/reset, HTTP 500/verilerin korunması, ağ hatası ve Tab sırası geçti. **Üç POST tarayıcıda intercept/mock edildi; gerçek mesaj gönderilmedi.** Formun gerçek servis teslimatı bu testin kapsamı değildir.
- 12 `.html` alias 200; bulunmayan rota, dokuzuncu proje detayı ve prototip rotası 404. robots/sitemap 200. Bunlar statik origin modelinde doğrulandı; canlı sonuç yayın sonrası ayrı kaydedilecek.
- FurtherUp ilk yükleme: 1440/390/375 için ikişer yeni browser context, network-idle + decode + iki paint frame sonrası **6/6 kapak gerçekten çizildi** (cliplerde 6.947–7.798 renk). Önceki tek boş full-page yakalaması bu koşullarda yeniden üretilemedi. Sebebi kesinleşmiş sayılmadı; katalog/asset/CSS'e rastgele düzeltme yapılmadı. Kullanıcıda yeniden görülürse cold-load/video kanıtıyla ayrı teşhis.
- Normal motion regression: desktop/mobile hero dört yüz ve yüz seçimi, desktop WebGL scene ready/canvas, ana sayfa galeri ileri/geri geçti. Mobil marquee otomatik ilerleme, native touch swipe ve bekleme sonrası devam geçti. Hero/marquee/galeri/Safari kaynakları, veri/asset/SEO/URL ve bağımlılıklar değişmedi.
- Node **22.23.3**: `npm run typecheck`, release kaynakları + değişen iç sayfalarda hedefli ESLint, `npm run build`, `npm run verify:production`, `node scripts/check-foundation.mjs`, `node scripts/check-production-access.mjs --production-only` geçti. Export 685 dosya, 0 prototype artifact/dependency. Build Next 15.5.28 ile başarılı.
- Mevcut foundation kontrolü önce eski `Şirket/Company/Unternehmen` sabiti nedeniyle durdu. Yalnız kullanıcı tarafından onaylanan `Hakkımızda/About Us/Über uns` değerleri açıkça assert edilerek baseline beklentisi güncellendi; diğer bütün legacy metin ve onaylı homepage metin karşılaştırmaları korunuyor. Yeni tasarım değişikliği yok.
- Gerçek cihaz/Safari testi yapılmadı; Chromium emülasyonu kullanıldı. Smart Hospital TR placeholder'ları, EN/DE mevcut özet detay davranışı, yalnız FurtherUp'ta mevcut iki screenshot ve Projeler vitrininin sonraki görsel polish ihtiyacı korunur.

Kanıt: `2d-qa.json`, `2d-home-motion.json`, `2d-final-*.png`, `2d-poster-first-paint-*.png`. Commit kapsamı seçici allowlist ile hazırlanır; kişisel/ilgili olmayan untracked dosyalar ve eski kasalar dışarıda kalır. Bu kayıt anında commit/push/CI/canlı smoke henüz tamamlanmadı; sonuç aşağıya eklenecek.

## BS3P-031 Aşama 2D — production yayın sonucu (2026-10-16)

- Uygulama commit'i: `c44fa17f723c1a7ccd5adb4d61f97df6914a85f1` — `feat: unify BayesSoft interior pages with 3.0+ design`. **105 dosya**:17 uygulama/doğrulama,7 Markdown kayıt,81 seçilmiş kanıt. `git diff --cached --check` ve exact105 allowlist geçti; kişisel dosya stage edilmedi. Önceden değiştirilmiş handoff geçmişi korundu.
- `git push origin master` başarılı. [GitHub Pages workflow #38932198707](https://github.com/YsKara0/BayesSoft_website/actions/runs/38932198707): **build success + deploy success**; install/build/static-export/upload/deploy adımları geçti. Feature branch'e bağlı ayrı release-validation workflow'u master'da tetiklenmez; eşdeğer TS/lint/foundation/access kontrolleri yerelde Node22 ile çalıştırıldı.
- Canlı `https://bayessoft.com.tr`: **13/13 rota desktop1440**, dört ana iç sayfa + homepage + FurtherUp detayı **390/375 (12 mobil durum)** geçti. 12 `.html` alias200; About alias UI yeni shell ile açılır. Eksik rota, Arelim sahte detay ve prototype404. Canonical/başlık/taşma/görseller/header/footer kontrolü geçti.
- 8 canlı katalog→detay→katalog turu; FurtherUp/Reviel/Metek kapakları yüklendi; yalnız8gerçekdetay. Mobil ana sayfa→Hakkımızda→Projeler menü navigasyonu ve Escape/odak dönüşü geçti. İletişim formu5alan/gönderim düğmesi görüntülendi; **gerçek gönderim yok**. 0 JavaScript hatası,0 başarısız asset.
- İlk smoke betiğinin son assertion'ı bütün arka plan POST'larını form sanarak durdu; form gönderimi yapılmamıştı. Tekrarda hedef URL'ler ayrıldı: `{'bayessoft.com.tr/cdn-cgi/rum': 60}`. Bütün POST'lar intercept ile engellendi; contact endpoint'ine0istek. Bu bir ürün düzeltmesi değildir; yanlış geniş test assertion'ı düzeltildi.
- QA/commit/push sonrasında17uygulama/doğrulama dosyasının hash'i aynı. Uygulama koduna tekrar dokunulmadı. Yayın sonrası yalnız bu sonuca ait Markdown kayıtları ayrı seçici commit'e alınır; CI ve canlı smoke JSON/PNG dosyaları yerel031kanıt dizininde korunur.
- Bilinen sınırlar: SmartHospitalTRplaceholder, EN/DE mevcut özetler, FurtherUp dışı detayların mevcut screenshot eksikleri. Projeler vitrininin ileri görsel polish'i sonraki tura bırakıldı. FurtherUp cold-load boşkapak6/6denemede yeniden üretilemedi; paint bug'ının kök nedeni kesinleşmiş sayılmaz. Safari/gerçekcihazQA ve gerçek iletişim servis teslimatı yapılmadı.
