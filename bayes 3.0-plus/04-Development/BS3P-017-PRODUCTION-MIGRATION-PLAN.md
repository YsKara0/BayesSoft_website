# BS3P-017 — Production Migration Audit & Plan

**Tarih:** 2026-10-14  
**Durum:** completed — kaynak denetimi ve uygulanabilir plan teslim; uygulama onayı beklenir.  
**Dal:** `feature/bayessoft-3.0-plus`  
**Kaynak:** `/prototype/bs3p-homepage` (BS3P-016)  
**Hedef:** `/` (mevcut production App Router sayfası)  
**Yetki:** Kullanıcı 3.0+ görsel tasarımını bu görevde onayladı. Bu görev yalnız denetim/belgeleme; production kodu, entegrasyon, commit/push/merge/deploy veya final QA yetkisi yok.

## 1. Denetim kapsamı ve kanıt sınırı
Branch/Git durumu; AGENTS/workflow/dashboard/current/next/task/kararlar/BS3P-016; production page/layout/Header/Footer/LanguageProvider, home/i18n/projectTranslations/site/projectDetails/config/seo, sitemap/robots, contact route, proje detail route, next.config/tsconfig/package ve Pages workflow; prototip route/composer/çeviri/gallery adapter ve motion kaynakları hedefli okundu. Secret/.env açılmadı.

Buradaki “production” karşılaştırması **bu çalışma ağacındaki production kaynaklarıdır**. Canlı sitede hangi commit/artifact'in yayınlandığı, GitHub Pages custom domain ayarı ve olası ek CDN kuralları bu oturumda doğrulanmadı. Kaynaktan runtime başarısı çıkarılmadı. CURRENT_STATUS risk listesindeki tarihsel “Homepage yalnızca TR” satırı BS3P-016 gerçek kaynağıyla çelişiyordu; bu audit'te aktif duruma göre düzeltildi. Bağımsız R3 demo'nun Türkçe kalması farklı bir kaynaktır ve korunur.

Tarayıcı, TypeScript/lint/build, performans veya kapsamlı QA çalıştırılmadı. BS3P-016 kısa kontrolleri tarihsel kanıttır; tercih reload testi harness nedeniyle sınırlı kalmıştır.

Yerel npm metadata: Next15.5.20, React19.2.7, Three0.180.0. Package aralıkları Next^15.3.4/React^19.0.0; sürüm aralığı kurulu sürümle karıştırılmamalı. ReactStrictMode açık; `output: "export"`, images.unoptimized=true. Node22 ile npm ci/build ve `out` upload/deploy yapan `.github/workflows/pages.yml` var; main/master push ve workflow_dispatch yayın tetikleyebilir. Yeni framework/hosting/dependency veya sürüm yükseltmesi bu planın parçası değildir.

## 2. Production ile onaylanan prototipin farkları

| Konu | Production kaynakları | Onaylı BS3P-016 | Geçiş kararı |
|---|---|---|---|
| Render | app/page.tsx + root layout/React | force-static GET / bağımsız HTML/inline script/ESM | app/page.tsx korunur; tam HTML dokümanı veya composer production'a konmaz |
| Bölümler | Hero → WebToMobileTransition → Capabilities → FeaturedAndSelectedWork → Clients → Process | Hero → Referanslar → Seçili projeler → Hizmetler → İletişim → Footer | Yalnız root composition yeni sıraya geçer; eski bileşenler/diğer route'lar silinmez |
| Hero | homeCopy + HeroShowcase/Framer Motion | X90° dört yüz + Three.js yazılım sistemi | Onaylı geometri/timeline/typography taşınır; mevcut homepage alt görselleri root'tan çıkarılır, kaynakları saklanır |
| Header/footer | Root layout tüm sayfalara ortak; purple draft logo/flag dropdown; koyu footer | Wordmark/yerel anchor/TR-EN-DE/minimal açık footer | Homepage'e özel chrome seçimi; diğer sayfalardaki mevcut chrome davranışı korunur |
| Dil | LanguageProvider + data/i18n; homeCopy/data/home; localizeProject | Ayrı DOM localization runtime/JSON/CustomEvent | Tek production provider/state ve onun dictionary namespace'i; DOM çeviri motoru yayınlanmaz |
| Projeler | FeaturedAndSelectedWork: Tam Finans anlatımı + FurtherUp; mevcut genel katalog | FurtherUp/Reviel/Metek, ayrı detay/live | Featured registry + mevcut katalogdan doğrulama; AI/Atlı/genel katalog/detail değişmez |
| SEO | Metadata/canonical/OG/Twitter/JSON-LD/sitemap/robots | noindex/no-follow, demo title; locale runtime document.title | Production SEO korunur; demo SEO/title yazıcısı taşınmaz |
| CSS/font | Global Tailwind/tokens/Jakarta/Inter/Mono + mevcut hero fontu | Instrument Sans, bağımsız stylesheet ve :root/global selector'lar | Homepage scope/CSS Modules ve yerel font; global cascade diğer sayfalara sızmaz |
| İletişim | /iletisim gerçek POST formu + mailto | Homepage mailto CTA + email | Form ve config/API sözleşmesi değişmez; /iletisim erişilebilir kalır |
| Yayın | Static export / out artifact | Prototype route'lar ve public asset'ler build'e dahil olabilir | Yayın artifact'i filtrelenir ve CI'da doğrulanır; kaynak/dev korunur |

Bu, eski homepage'deki uzun Tam Finans/Process içeriklerinin başka sayfalardan silinmesi değildir. URL'ler ve kayıtlar korunur; onaylanan root içerik seçimi değişir.

## 3. Korunacak route, SEO ve işlev sözleşmeleri

### Route ve iletişim
- `/`, `/hakkimizda`, `/hizmetler`, `/projeler`, `/iletisim` ve `projectDetails` kaynaklı tüm `/projeler/[slug]` URL'leri aynı kalır. Yeni `/en`, `/de`, SaaS/Ürünler veya sahte yasal route yok.
- Detail route: generateStaticParams projectDetails anahtarlarını üretir; render hem detail kaydı hem site.projects kaydı gerektirir. İkisi olmadan case sayfası var sayılmaz.
- Header root'ta #hero/#selected-projects/#services/#contact; diğer sayfalarda mevcut site navigasyonu ve gerçek /iletisim erişimi korunur. Anchor ID'leri sabit, SPA dönüşte/yenilemede doğru hedefe gitmeli.
- `siteConfig.contactEmail`, `contactHref`, sosyal URL'ler, `contactApiUrl` tek config kaynağı olarak kalır. Mailto CTA e-posta açar; /iletisim formu ayrı çalışan işlevdir.
- Form POST payload'u full_name/email/project_type/budget_timeline/message, Accept/JSON header ve idle/sending/success/error/configuration-error akışları korunur. Plan veya final QA gerçek başvuru göndermeye otomatik izin vermez; canlı gönderim ayrıca açık onaylıdır.

### SEO
- app/layout.tsx homeTitle/description/keywords, metadataBase, title template, authors/creator/publisher/category, formatDetection, robots.googleBot ve favicon korunur. Mevcut source title: “BayesSoft | Dijital Ürün Mühendisliği — Web, Mobil ve Yapay Zekâ”.
- data/seo.ts normalizeDescription/absoluteUrl/createPageMetadata ve `/` canonical siteConfig.siteUrl kök adresine bağlı kalır. OG tr_TR, /og.png1733×907, Twitter summary_large_image korunur.
- Root JSON-LD Organization/WebSite graph; aynı @id/URL/logo/email/sameAs/inLanguage[tr,en,de] korunur. Prototip noindex/no-follow veya data: favicon üretim root'una taşınmaz.
- Sitemap beş sabit sayfa + projectDetails anahtarları; yeni seçili üçlü sitemap listesini daraltmaz, AI/Atlı detail sitemap'ten çıkarılmaz. Reviel/Metek eksikdetail sitemap'e eklenmez. Prototipler şu an sitemap'te bulunmaz.
- Robots mevcut allow /, sitemap/host config kaynağı korunur. Prototip artifact izolasyonuna destek olarak Disallow /prototype/ düşünülebilir; bu erişim kontrolü değildir.
- Mevcut TR statik SEO + client locale yaklaşımı korunur. Gerçek locale URL'leri yokken hreflang alternates uydurulmaz. EN/DE için ayrı indexlenebilir SSR sayfalar gerekiyorsa bu ayrı SEO/i18n kapsamıdır; metadata client document.title ile kısaltılmaz.
- public/CNAME ve declaredCI siteURL korunur. README GitHub örneği mevcut config/CI'daki bayessoft2024 ile farklıdır; taşınacak link kaynağı README değil gerçek data/config ve workflow'dur.

## 4. Hedef bileşen ve runtime sınırları

Önerilen adlar uygulama sırasında netleşebilir; aşağıdaki sorumluluklar sabittir.

| Hedef | Kaynak / taşınacak davranış | Production adaptasyonu |
|---|---|---|
| HomePage composition | bs3p-homepage route bölümleri | app/page.tsx server composition; tek main, bölümler ayrı |
| HomepageHeader / HomepageFooter | onaylı wordmark ve header/footer section'ları | React + useLanguage; yerel nav ve mevcut config; SiteChrome root pathname için seçer |
| SpatialHero / TypographyPrism | spatial-hero faces/motion + R3 markup + homepage polish | JSX/CSS Modules; root-scoped typed controller; dört persistent fiziksel yüz + stabil messages ref |
| SoftwareSystemScene | bs3p-right-3d scene/geometry/motion + R3 policy | Browser-only küçük client component; lazy import npm three; hazır/fallback/poster/replay aynı |
| ReferencesMarquee | homepage References/reference-links/reference-sizing/references.css | Aynı10 asset/URL/çerçeve/iki opacity katmanı/120s akış/focus-hover/reduced; JSX/static markup + sınırlı client pause kontrolü |
| CylindricalProjectShowcase | R2 geometry/stage/state/swipe/controller + homepage info | Aynı9slot×13strip/40°/1040–700ms; stage DOM controller, metadata/ikiCTA React state/props |
| Services / Contact | homepage section markup/copy | Küçük semantik React bileşenleri; gerçekemail ve config |

**Taşınmayacaklar:** GET doküman birleştirme/regex composer, initializeFunction.toString inline script, window.__bs3pMessages globali, manuel importmap/vendor dağıtımı, page-wide DOM çevirici/CustomEvent/MutationObserver ile React metni değiştirme. Bunlar prototipte kalır; production markup React tarafından yönetilir.

### Lifecycle ve motion koruması
- Root layout mevcut metadata/JSON-LD/LanguageProvider'ı korur. Küçük SiteChrome iki root varyantını seçer; / dışındaki Header/Footer değişmez. Homepage içinde ikinci header/footer veya ikinci main oluşturulmaz; global theme/fontları tüm site için yeniden tasarlanmaz.
- Imperative controller effect'i locale değişiminde yeniden kurulmaz. Metinler sabit ref/callback ile güncellenir; rotor/active step/pause state korunur. Dil değişiminde gallery sadece doğru info/CTA'yı günceller.
- Prizma initializer bugün global selector ve return-void kullanıyor; cleanup olmadan React effect'ine çağrılmamalı. Production portunda root parametresi, disposer/AbortController/timer temizliği ve güncellenebilir metin sözleşmesi eklenir. **Angle/state/dwell/duration/geometri algoritması yeniden tasarlanmaz.** Orijinal prototip kopyası değişmez; production için alınan kaynak sürümü/hash'i kayıt altına alınır. Yeni paralel carousel motoru yok.
- Galeride rotor/stage DOM'u controller'a ait stabil subtree; bilgi/CTA React'e ait. Settle callback'i aynı typed state'i aktarır; React ve controller aynı metin node'una çift yazmaz. Slot/UV/overscan/waapi dönüş değerleri aynı kalır. Adapter minimal olmalı; mevcut saf state/geometry/swipe yardımcıları davranışı korunarak production lib'e alınır.
- Scene createSystemScene.ready/reveal/dispose sözleşmesi korunur. Unmount/route change/StrictMode/late promise için generation guard ve dispose; RAF, renderer/env/material/geometry/texture/observer/event cleanup zorunlu. Mobil≤899px/reduced/WebGLerror/contextlost statik poster; finalde idle loop durur;8.4s timeline/panel fit/kamera/ışık/materyal değişmez.
- Production lib ve component'leri app/prototype veya /prototype-assets URL'lerinden çalışma zamanında bağımlılık almaz. Prototipler onaylı tarihsel kaynak olarak kalır; production'da yalnız bir aktif motor implementation'ı vardır. Shared abstraction tüm eski prototipleri zorla refactor etmek için kullanılmaz.
- Three zaten0.180.0 dependency'dir; React Three Fiber/GSAP/yeni carousel paketi gerekmez. npm bundling ile mevcut manual vendorın production'da ikinci kopyası yüklenmez.
- Instrument Sans yerel production font yolu/next/font/local, yalnız homepage scope; source font ve posterler değiştirilmez. Font lisans kaydı yayın öncesi doğrulanır. Eski root font değişkenleri diğer sayfalara kalır.

## 5. Tek production dil sistemi

**Tek state:** mevcut LanguageProvider / useLanguage / Locale / bayessoft-locale. Yeni provider, homepage bağımsız locale storage yazıcısı veya DOM translation engine eklenmez.

**Tek production UI sözlüğü:** onaylı BS3P-016 HomepageCopy yapısını `data/i18n.ts` içindeki locale kayıtlarına `homepage` namespace'i olarak ekle. Mevcut nav/footer/language hakları gibi ortak metinleri aynı global key'den kullan; diğer sayfaların mevcut metinleri değişmez. Header/footer yeni root varyantı homepage namespace'ini okur. data/home.ts legacy export'ları rollback/diğer mevcut consumer'lar için korunur; yeni / akışında aynı metin iki kaynaktan okunmaz. Prototype dictionary tarihsel/dev artifact olarak kalabilir ama production import graph'ına ve yayın runtime'ına girmez.

**Proje metinleri:** data/projectTranslations.ts mevcut locale selector kalıbına typed selected-project metinleri eklenir. FurtherUp mevcut doğrulanmış bilgilerden türetilir; onaylı kısa vitrin açıklaması ayrı typed alan olabilir. Reviel/Metek approvedcopy aynı slug kayıtlarında tutulur. URL/brand/tech gerçek kaynakları `data/selectedProjects.ts` registry'sinde; çevrilmeyen teknik isimler orada. Locale metinleri dictionary, linkler yalnız veri/model kaynağıdır.

**Tercih ve hydration:** initial server/clientTR eşit; mount saved→browser→TR. Mevcut provider localStorage okumalarını/yazmalarını try/catch ile sağlamlaştırmak küçük gerekli hardening'dir; storage engeli locale seçimini bozmaz. Html lang provider'ın tek sahibi; mounted-safe browser erişimi. First-paint TR→EN/DE kayması ölçülür; kabul edilemezse üretimde yeni route sistemi değil sınırlı preference-bootstrap çözümü ayrıca incelenir. BS3P-016 bozuk harness seed'i tekrar kullanılmaz; final QA seed yalnız ilk yüklemede yazmalıdır.

Mevcut canonical/SSR meta TR kalır; UI diliyle SEO dilini eşitlemek adına DOM'dan metadata silmek veya sahte hreflang üretmek yok.

## 6. Proje registry ve eksik detail sayfaları

| Proje | İç detay | Canlı | Kaynak durumu |
|---|---|---|---|
| FurtherUp Drive | /projeler/furtherup-drive | https://drive.further-up.net | site.projects + projectDetails mevcut/hasDetailsPage; iki kaynaklive aynı |
| Reviel | Yok, null | https://www.reviel.com.tr/ | Mevcut production site/detail kaydı yok; onaylı featured veri/live |
| Metek Makina | Yok, null | https://metekmakina.com/urunler | Mevcut production site/detail kaydı yok; onaylı featured veri/live |

Yeni `SelectedProject` küçük tipi: slug/name/translation key/technologyLabel/visual/detailHref|null/liveHref|null. Registry FurtherUp source kaydını doğrular; Reviel/Metek'te doğrulanmış bilgileri kullanır. Zorunlu problem/impact gibi katalog alanları uydurularak mevcut Project tipi doldurulmaz. Detay sayfası açma bu planın otomatik kapsamı değildir; mevcut olmayan butonlar gizli kalır. Sonradan onaylı gerçek case içeriği verilirse site + detail + translations + staticparams/sitemap birlikte eklenir.

AI ve Atlı kayıt/detail/assets korunur. Homepage seçili seti genel proje kataloğunu silmez. Reviel tech ASP.NET/HTML/CSS/JavaScript/C# kullanıcı kaynağına dayanır; framework sürümü/DB/commerce bilgisi bağımsız doğrulanmadı. BayesSoft kozmetik formül veya makine mühendisliği ürünü geliştirmiş gibi anlatılmaz; çalışma dijital web deneyimidir.

Posterler aynı kaynakla production public/projects/covers altına kopyalanır;3orijinal dokunulmaz. Meet/contain/sabit alan/tüm repeat yüzlerde aynı src ve alt semantiği korunur. Görsel kabulden sonra farklı crop veya yeni kompozisyon önerilmez.

## 7. Prototip URL izolasyonu — mevcut static host için öneri

**Seçilen öneri: temiz deploy staging artifact'i; kaynakları silmeden.** Mevcut `output: export` korunur. Next15 static export middleware/rewrites/headers gibi server engellerini desteklemez; noindex/robots yalnız arama motoru davranışıdır. [Next15 static export resmi dokümanı](https://nextjs.org/docs/15/app/guides/static-exports) bu sınırları açıklar.

1. Normal build çıktısı out kalsın; ek `scripts/stage-production-export.mjs` üretim deploy klasörünü oluşturur. Kaynak app/prototype/prototypes/public dev asset'lerine dokunmaz.
2. Export path'lerini normalize edip prototype route çıktılarının bütün temsil biçimlerini staging'e kopyalamaz: prototype subtree/dosya, extensionless route response, .html/.txt/index.html ve olası route payload'ları. Path segment tam prototype olmalı; basit metin replace veya sadece sidebar'dan link kaldırma kullanılmaz.
3. Homepage'in kullanılan font/poster/static-scene kaynakları önce production asset namespace'ine taşınır. Staging'den public/prototype-assets tamamen çıkarılabilir hâle gelir; production HTML/CSS/JS import/href/src'de bu prefix veya /prototype nav kalırsa CI başarısız olmalıdır. Tam `_next` hash chunk isimleri keyfî filtrelenmez; route çıktıları ve referansları ayrı denetlenir.
4. CI build ardından staging + verification yapar. Upload path ./out yerine doğrulanmış production staging artifact'idir. Dev `npm run dev` tüm prototype URL'lerini eskisi gibi sunar; localfull out da yalnız development incelemesi içindir.
5. Artifact checker index/404/CNAME/_next/sitemap/robots ve mevcut route çıktılarını garanti eder; prototype çıktı veya üretimden prototipe runtime dependency varsa yayın engellenir. Hostta root'a200 dönen SPA fallback varsa kaldırılır; doğrudan prototype URL'leri gerçek404 vermelidir.
6. Yetkili yayın sonrası extensionless/.html/trailing slash/index.html URL varyantları, encoded normalizasyon ve önceden cache'lenmiş sayfalar için HTTP negatif kontrol yapılır. CDN/host cache varsa yeni artifact sonrası purge gerekiyorsa ayrıca uygulanır; hosting ayarı bu oturumda incelenmedi.

Bu çözüm yeni server/hosting gerektirmez; `next.config` env gate tek başına güvenlik çözümü sayılmaz. Gelecekte server host'a geçilirse server deny kuralı eklenebilir, bugünkü GitHub Pages planı buna dayanmaz. İlk adımda yalnız prototype sayfaları filtrelenebilir; prototype asset prefix'inin tamamını dışlama production runtime yolları taşındıktan sonra tamamlanır. Eski artifact'in zaten açık prototype sayfaları varsa rollback artifact'i de aynı izolasyon filtresiyle hazırlanır.

## 8. Risk kaydı ve yayın kapıları

| Risk | Kaynak bulgusu / belirsizlik | Giderme ve kabul kapısı |
|---|---|---|
| Production chrome/CSS karışması | Layout global fonts/theme/Header/Footer; prototype bağımsız belge | Root-only SiteChrome + scopedCSS; diğer4route ve detail sayfalarda regression |
| React StrictMode / SPA lifecycle | Prototype scripts global selector/events; prism disposer yok | Root refs + effect cleanup/generation; root→detail→root/strictmount çift timer/canvas yok |
| Dil ve erişilebilir duyuru senkronu | DOM çevirici/proje mutation yaklaşımı React'e taşınamaz; mevcut storage throw riski | Tek provider + props/ref; locale motoru yeniden başlatmaz; storage off/harness doğru seed test |
| Safari CSS3D | 13strip/overscan/backface/kare kesit yazılımGPU Chrome'da kısa kontrol edildi | Safari gerçek browser kavis seam/clipping/90° yüz sırası/focus/swipe; supports3D yoksa okunur statik fallback |
| WebGL / cihaz | Lazy scene/static policy/dispose var, gerçek cihaz/contextloss QA yok | Mobil/reduced import etmeyenposter; loadfail/compilefail/contextlost fallback; final-ready ve re-entrycleanup |
| Büyük payload |3cover diskboyutu yaklaşık1.4M/1.8M/2.0M; manualThreevendor yaklaşık2.7M | Npm lazy tekThreechunk, sabit frame, orijinali koruyan türetilmiş optimizecover kalite kontrolü; gerçek export/ağ ölçümü, uydurma hedefbaşarı yok |
| Font / CLS | InstrumentSans localfont, production fontları farklı | Root-only next/font/local; dimensions/contain; lisans teyidi, finalCLS/LCP/INP ölçümü |
| Otomatik hareket erişilebilirliği | Prizma dots var fakat kalıcı pause adapter'ı DOM dışında; marquee hover/focus pause;8.4s scene skip control hidden | Release öncesi kullanıcıya minimal kalıcı “Hareketi durdur/başlat” veya eşdeğer kontrol önerisi sun; varsayılan motor/süreyi değiştirme. Onaylı tasarım kendiliğinden WCAG kabulü değildir |
| Boş/eksik projedetail | Reviel/Metek detay yok | Null detail/CTA yok; canlı gerçeknewtab. Eksikcase içerikleri ayrı kapsam |
| SEO/iletişim kaybı | Prototype meta/title/JSON-LD yok, root noindex riski | Üretim layout/meta aynı; exportdiff/canonical/robots/sitemap/JSON-LD/form sözleşmesi check |
| Release baseline belirsiz | Çalışma ağacı dirty, yeni kaynaklar untracked; HEAD önceki temel | Deploy edilmiş güvenilirartifact/revision doğrulanır; tüm untracked çalışmayı içeren manifest/backup gerekir |

[W3C Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) açıklamasına göre yalnız focus/hover süresince durma, sayfanın geri kalanı kullanılırken kalıcı pause sağlamaz. Prizma/marquee ve uzun scene hareketi bu kapsamda ayrı final a11y kapısıdır; uygun minimal kontrol bu audit'te uygulanmadı. Bu bir tarayıcıyla doğrulanmış tam erişilebilirlik başarısı raporu değildir.

## 9. Küçük, geri alınabilir entegrasyon sırası

Her adım ayrı reviewable diff; uygulama ve Git/yayın işlemleri için gereken açık kullanıcı onayları alınır. Bu audit adımları başlatmadı.

| Adım | İş / kapsam | Tamamlama ölçütü | Geri alma |
|---|---|---|---|
| 0. Baseline | Son gerçekten yayınlırevision/artifact/domain teyidi, mevcut dirty+untracked kaynak/asset manifesti; kabul edilenprototype kanıtlarının sabitlenmesi | Bilinen iyi artifact ve dokunulmayacak dosyalar kayıtlı | Ürün kodu yok; not/snapshot korunur |
| 1. İzolasyon temeli | Pages staging+route exclusion+artifact checker; production render henüz aynı | Mevcutsiteye aynı dosyalar/SEO; prototype route çıktıları staging'de yok; dev erişimi var | Üretim sayfası aynı; izolasyon güvenlik koruması rollback'te de kalır |
| 2. Veri/tek dil | typed homepage namespace/selected registry/projecttranslations/provider storage hardening; aktif root henüz aynı | Dictionary key coverage+linkcontract/tekprovider; başka sayfa metinleri aynı | Ek exports tüketilmeyebilir; önceki active root çalışır |
| 3. Statik React scaffold | Yeni root-only composition/sections/font/CSS ve statik poster/hero/gallery görünümü, preview/local opt-in | Onaylı görünüm/sectionIDs/SSR meaningful H1/body/tekheader-footer | Eski app/page composition + oldchrome seçilir; prototipler durur |
| 4. Prizma ve gallery | Sırasıyla root-scoped lifecycleadaptation, sonra kavis/controller settle UI bridge | Aynı fiziksel değerler/direction/duration/idle/keyboard/swipe/locale state; cleanup | Adım3 statikrender veya eski root; assetler silinmez |
| 5. Software scene | NpmThree lazy/client adapter + exactR3 fit/timeline/fallback | Normaldesktop finalready/replay, reduced-mobilWebGLyok, failfallback/cleanup | Aynı onaylı statikposter; diğerfeature'lara etkisiz |
| 6. Release hazırlığı | Productionassetnamespace/optimizasyonkaliteteyidi/finalprototypeasset exclusion; gerekli a11ypause onayı/uygulaması | Runtime prototipe bağımlıdeğil; yasal/ref/kabulgate notları; fullQA hazır | Eskiroot + izolasyonluartifact; global refactor yok |
| 7. Final QA ve yayın | Ayrı kullanıcı onaylı checkliste göre build/artifact/browser/SEO/işlev; sonra yayın onayı | Bütün zorunlu gate'ler geçti, rollbackartifact hazır | Bilinen iyi izoleartifact yeniden yayınlanır |

Adımlar3–5 başlangıçta production root'a değil aynı component'lerin yerel/private preview consumer'ına bağlanabilir; kamuya yeni açık test route'u yayınlanmaz. Geçici seçici gerekiyorsa build-time tek flag/provisional localhost consumer kullanılır, kalıcı ikinci homepage motoru veya kullanılmayan branch UI bırakılmaz. Sonrelease / composition tek aktif consumer'dır.

## 10. Rollback planı

- HEAD c5bf841 veya eski branch hash'i “canlı son iyi sürüm” varsayılmaz. Adım0'da gerçek Pages deployartifact/commit/build config/CNAME/environment public parametreleri doğrulanır; secret değerleri loglanmaz.
- Dirty ve untracked kullanıcı çalışmaları mevcut. `git reset --hard`, broadclean, asset silme veya onaysız branch dönüşü yapılmaz. Önce onaylı güvenli snapshot/ayrı worktree ve manifest gerekir; kullanıcı dışındaki değişiklikler geri alınmaz.
- Kod rollback'i: yeni / composition ve root-only chrome bağlantısını eski app/page.tsx + mevcut Header/Footer'a döndür; mevcut data exports eklemeleri tüketilmeden kalabilir. İletişim/SEO/i18nprovider registry aynı sözleşmeyle çalışır. Motor/asset kapsamı adım diff'lerine göre geri alınır.
- Yayın rollback'i: bilinen iyi **prototype çıktılarından arındırılmış** static artifact'i kontrollü yeniden deploy et. Hash'li `_next` assetleriyle uyumlu tüm artifact atomik geri döner; yalnız index.html değiştirilmez. İzolasyonchecker/staging koruması sürer; eski açıkdemo URL'lerini geri yayınlama.
- Cache/CDN purge gerekiyorsa hosta göre planla. Smoke listesi `/`, /iletisim sayfası, knowncase,canonical/robots/sitemap + prototype404. GerçekcontactPOST kullanıcı onayı olmadan yapılmaz.
- Tetikleyiciler: index/CSS/JS404, boşhero veya hiçgörünmeyenfallback, console unhandledloop/canvasleak, yeni SEO noindex/canonicalkaybı, contactroute/API sözleşmesinin bozulması, dil/locale veya Safari kullanılamazlığı, prototype erişiminin sürmesi. Küçük tipografi içerik teyidi release önce çözülür; üretimde uzun teşhis yerine artifactrollback.

## 11. Final QA kontrol listesi — bu görevde çalıştırılmadı

- [ ] Aynı lockfile ile npm ci; hedefli ve globaltypecheck/lint; next build/export; artifakta no stale manuallypreparedruntime; hiçbir dependency yükseltmesi gizlice gelmedi.
- [ ] Tek rootheader/footer/main/H1, meaningful staticHTML/JSoff fallback; /hakkimizda-/hizmetler-/projeler-/iletisim ve tüm mevcutdetail routes aynı/knownbadslug404.
- [ ] Metadata/robots:indexfollow/canonicalroot/OG/Twitter/JSON-LD/logo/CNAME; sitemap tüm eskiURL'leri koruyor, prototype/eksikReviel-Metekdetail yok.
- [ ] Headeranchor/navCTA, footeremail/sosyal/allprojects; içdetail sametab, canlıblank/noopenernoreferrer/yeni sekmeetiketi; native dışnavigation için sınırlı kontrol.
- [ ] Contact formu validation/status/APIconfig/payload/CORS; canlı gönderim ayrı açık onayla, aksi mock veya testenvironment.
- [ ] TR/EN/DE root+diğerpage navigation+reload; bir kere yazılan seed, browserfallback/storageblocked; html.lang/SRlabels/kısaGaleri info/URL doğru; DE200% zoom/reflow/uzunword overflow yok.
- [ ] Prizma4physical/X90°/420desktop/kare kesit/5000+900ms/dots/hover-focus/reduced; locale state korunuyor; pause/control erişilebilir; clip/colorjump yok.
- [ ] Referans10logo/aynıURL/aynıcolorhoverframe/120s/doublegroup hidden/nonfocus duplicate/reducedstatic; kalıcıpause uygunluğu.
- [ ] Galeri9×13/40°/1040desktop700mobil; reversewrap/settleinfo/link/lock/key/swipe/focus/idle0; üçrepeataynıposter/meet/CLS yok; SR singleannounce.
- [ ] Three desktopready8.4s/replay/finalidle; mobile-reducednofetchcanvas; WebGLfail/contextloss/slowfont/modulefailfallback; StrictMode/unmount/bfcache/routeback cleanup.
- [ ] Chrome/Firefox/Safari + gerçek iOS/Android sınırlı finalmatrix; contrast/focus/touch48px/keyboard/VoiceOver veya NVDA; reduced preference runtime değişimi.
- [ ] Exportproductionbundle ve realnetwork ölçümü: poster/font/Three transfer, LCP/CLS/INP, mainthreadidle, memoryGPU; hedefler ölçüm öncesi belirlenir, başarı uydurulmaz.
- [ ] Stagechecker prototype/allvariants yok; localdev var; üretim directprototypeURL'leri gerçek404, cachefallback yok; site runtime /prototype-assets bağımlılığı yok.
- [ ] Çeviri/marka metinleri/ref kullanım izinleri/fontlisansı/kayıtlıhukukieksikler kullanıcıya açık; finalkabul ve deploy onayı ayrıca alınmış; rollbackartifact hazır.

## 12. Tahmini değişecek dosyalar

| Dosya/grup | Öngörülen değişiklik |
|---|---|
| app/page.tsx | Onaylı root composition |
| app/layout.tsx | Metadata/provider/JSON-LD korunarak SiteChrome seçici import/binding |
| components/SiteChrome.tsx (yeni) | Root/nonroot header-footer yönlendirmesi |
| components/homepage/{HomepageHeader,SpatialHero,TypographyPrism,SoftwareSystemScene,ReferencesMarquee,CylindricalProjectShowcase,Services,Contact,HomepageFooter}.tsx + sınırlı *.module.css (yeni) | Ayrı presentation/client sorumlulukları; isimler taslak |
| lib/homepage/prism.ts, gallery/{controller,geometry,state,swipe}.ts, system/{scene,geometry,motion}.ts (yeni) | Onaylı kernel davranışı/lifecycle; production import graph'ta tek aktif runtime |
| components/LanguageProvider.tsx | Yalnız storage exception hardening; provider API korunur |
| data/i18n.ts, data/projectTranslations.ts | Homepage namespace/typed selected metinler; varolan keyler korunur |
| data/selectedProjects.ts (yeni) | Doğrulanmış kayıt/URL/poster selector; sahtecase yok |
| components/fonts/InstrumentSans.ttf veya public/fonts/production yolu; public/projects/covers/*; public/hero/system-static.svg (yeni kopyalar) | Aynı görünüm/sourceimmutable; gerekirse approved kaliteyle optimizekopyalar |
| scripts/stage-production-export.mjs + artifact verification helper (yeni), .github/workflows/pages.yml, package.json | Staging/verifikasyon/uploadpath; script eklenir, dependency eklenmez |
| app/robots.ts | Yalnız destekleyici Disallow düşünülür; erişim engeli artifact'tir |
| next.config.mjs | Normalde değişmez; export/unoptimized korunur, middleware/hostingmigration yok |
| app/sitemap.ts, data/seo.ts, data/config.ts, data/site.ts, data/projectDetails.ts, app/iletisim/* | Normalde davranış/değişiklik yok; yalnız QA sözleşmeleri. Yeni caseonayı yoksa kayıt eklenmez |
| app/prototype/*, prototypes/*, public/prototype-assets/*, eski kasalar | Kaynak/dev erişimi korunur; silme/refactor gerekmiyor |

Eski components/Header/Footer/Hero vb. root'ta consumer değiştirilerek korunur. Legacyhome data/home.ts diğer consumer veya rollback için durur; yeniroot'ta üretim ikinciçevirimotoru olarak çalışmaz. package-lock ancak script değişimi nedeniyle zorunlu hâle gelirse minimaldiff; yeni dependency hedeflenmiyor.

## 13. Kararlar ve uygulama onayı kapısı

**Kullanıcıca onaylı:** BayesSoft3.0+ homepage görsel tasarımı (BS3P-016 sonucu). Bu onay bugünkü plan göreviyle kaydedildi; geçmiş uygulama test/kabul kayıtları geriye dönük yeniden yazılmadı.

**Plan önerileri, uygulanmadı:** React/AppRouter component adaptasyonu, tekproductionprovider/dictionary, protecteddevroutes için deploystaging, scope/lifecyclecleanup, eksikdetail-null politikası, kalıcımotionpausea11y çözümünün kullanıcıya sunulması. Uygulama görevinde adım kapsamı ve minimal a11y UI kararı kullanıcıya somut olarak gösterilmeli; görselkonsept yeniden açılmamalı.

**Açık kaynaklar:** Reviel/Metek gerçekcase içeriği yok; canlıdeployedrevision/hostingcache doğrulanmadı; font/ref izinleri/yasal içerik/finaldevice-QA açık. Bunlar uydurularak plan kapatılmaz.

**Bu oturumda değişenler:** yalnız bu plan dosyası + TASK_REGISTER/CURRENT_STATUS/NEXT_STEPS/SESSION_LOG/DAILY_LOG/DECISION_LOG/REVIEW_REGISTER. Uygulama/asset/dependency/config/yayın değişmedi. Test/build/QA/commit/push/merge/deploy yok. Kullanıcı plan onayı beklenir.

## Resmî teknik dayanaklar
- [Next.js15 static export](https://nextjs.org/docs/15/app/guides/static-exports): statik route çıktısı, clientbrowserAPI ve unsupportedmiddleware; bu plan mevcut15.x/Pages mimarisine dayanır.
- [React useEffect](https://react.dev/reference/react/useEffect): effect lifecycle/cleanup ve StrictMode setup-cleanup döngüsü; production motionadaptörlerinin temizliği gerekir.
- [Next server/client bileşenleri](https://nextjs.org/docs/app/getting-started/server-and-client-components): server composition + sınırlı browserinteraction sınırı; yeni frameworkgerekmiyor.
- [W3C Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html): hover/focus'tan bağımsız kullanıcıpause mekanizması için finala11y kapısı.
