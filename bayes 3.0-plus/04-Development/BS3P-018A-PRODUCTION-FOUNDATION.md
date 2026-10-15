# BS3P-018A — Production Foundation

**Tarih:** 2026-10-15  
**Durum:** completed — temel uygulandı ve hedefli kontroller geçti; kullanıcı incelemesi beklenir.  
**Branch / başlangıç checkpoint:** `feature/bayessoft-3.0-plus` / `1218e58` (HEAD doğrulandı).  
**Yetki:** Production build izolasyonu, mevcut LanguageProvider üzerinde çeviri temeli ve seçili proje veri modeli. Yeni homepage `/` rotasına taşınmadı. Commit/push/merge/deploy yok.

## 1. Production baseline
Başlangıçta tracked working tree temizdi; kullanıcıya ait untracked logo/Obsidian/research/4.0 klasörleri vardı ve korundu. `1218e58` ile aşağıdaki production kaynaklarının byte eşitliği kontrol sonunda doğrulandı; bunlar geri dönüş referansıdır. Bu checkpoint'in gerçekten canlıdaki deploy revision'ı olduğu bağımsız doğrulanmadı.

- `app/page.tsx`: Hero → WebToMobileTransition → CapabilitiesSection → FeaturedAndSelectedWork → ClientsSection → ProcessSection. Sıra ve render aynı.
- `app/layout.tsx`: mevcut global fontlar/theme/Header/Footer/LanguageProvider, metadataBase/home title/template/description/keywords/robots/Organization-WebSite JSON-LD/ikon aynı.
- `components/Header.tsx`, `Footer.tsx`: logo/navigasyon/dil seçici/CTA/footer görselleri değişmedi. `data/home.ts` mevcut production metinleri aynı.
- `data/site.ts`, `projectDetails.ts`, `seo.ts`, `config.ts`, `app/iletisim/page.tsx`: kayıtlar, mevcut detaylar, canonical/OG/Twitter helper, gerçek iletişim config/form POST sözleşmesi aynı. AI ve Atlı kayıtları korunur.
- `app/sitemap.ts`, `robots.ts`: aynı kaynaklar; export13 sitemap URL'si (beş sabit + sekiz gerçek detail), prototip yok. Export root canonical `https://bayessoft.com.tr`, robots `index, follow`; JSON-LD scriptleri mevcut.
- `/hakkimizda`, `/hizmetler`, `/projeler`, `/iletisim` ve mevcut static detail seti korunur. Reviel/Metek case sayfaları yok.
- TR/EN/DE: mevcut provider/locale API ve `bayessoft-locale` anahtarı; saved→browser→TR/ilk renderTR/html.lang politikası aynı. Legacy üç dil key/value ağacı checkpoint kaydıyla deepEqual testinden geçti.
- `next.config.mjs`: Next15 static export/StrictMode/images.unoptimized; config değişmedi. `package-lock.json` aynı, dependency eklenmedi.
- `.github/workflows/pages.yml`: Node22/npmci/main-master push veya workflow_dispatch/GitHub Pages/out upload aynı. Build komutu ve artifact kontrolü bu görevde güvenli temel olarak değişti; deploy çalıştırılmadı.

## 2. Uygulanan izolasyon
Mevcut host statik GitHub Pages; middleware/server-side Next engeli bu hostta çalışmaz. Çözüm, prototiplerin sunucuya yüklenen dosyalar arasında fiziksel olarak bulunmamasıdır. Navigasyon gizleme, client redirect veya noindex çözümü kullanılmadı.

`npm run build` → `scripts/build-production.mjs`:
1. Sistem temp klasöründe benzersiz, yalnız build'e ait kaynak workspace'i oluşturur.
2. Production app/components/data/assets/public ve mevcut config'leri kopyalar; **app/prototype**, **public/prototype-assets**, bağımsız **prototypes/** runtime'ları ve vault/arşivler build girdisine alınmaz. Production için gerekebilecek lib/types klasörleri de desteklenir.
3. Mevcut node_modules symlink'i üzerinden aynı kurulu Next ile `next build` çalışır; yeni kurulum/dependency yok. Kaynak route/asset dosyaları taşınmaz/silinmez. Production import'u yanlışlıkla dışlanmış prototype modülüne bağımlıysa compile veya artifact kontrolü başarısız olur.
4. Temp out için `verifyProductionExport` zorunlu; prototype path/asset veya HTML-CSS-JS-JSON-TXT-XML içinde `/prototype/` / `/prototype-assets/` bağımlılığı reddedilir. Symlink artifact'leri, eksik index/404/sitemap/robots/CNAME/OG ve eksik canonical/JSON-LD reddedilir.
5. Yalnız başarılı build + verifier sonrasında repo `out` üretilmiş çıktısı yenilenir. Başarısız build eski output'u yeni başarılı artifact gibi göstermez; process nonzero döner. Geçici build workspace'i finally'de temizlenir.
6. Workflow upload öncesi `npm run verify:production` çalışır; yalnız kontrol edilen `out` yayınlanabilir. `npm run preview` de aynı doğrulamayı zorunlu kılar. Bypass ederek direkt nextbuild/ham artifact upload yapmak desteklenen yayın akışı değildir.

**Statik sunucu tarafı etkisi:** Yüklenecek artifact'te prototype route cevapları veya asset dosyaları bulunmadığından normal static host gerçek404 verir. Yerel test static origin'de root'a SPA200 fallback kullanılmadı. Next runtime middleware veya yeni sunucu/hosting eklenmedi.

**Development:** `npm run dev` asıl repo kaynaklarından çalışır, six prototype route ve public/prototype-assets yerinde kalır. Kaynaklar Git'te korunur. `out` production-only olduğundan eski dev demo export'u bekleyen kullanıcı `npm run dev` kullanmalıdır.

**Konfigürasyon sınırı:** Temp workspace `.env`/secret dosyalarını kopyalamaz veya okumaz. Production public değerleri mevcut CI env veya çağıran process environment üzerinden gelir; fallback data/config'te aynı. Local `.env` override'larının otomatik aktarılması yoktur; gerekiyorsa ilgili public değişkenler açıkça sağlanmalıdır. Gelecekte yeni production source klasörü eklenirse build allowlist'i birlikte güncellenir.

## 3. Dil temeli
- `data/homepage.ts`: onaylı BS3P-016 metinlerinden browser bağımsız `HomepageCopy` / `HomepageLocale` / `ProjectSlug` yapısı ve factory. Hero, nav, referanslar, galeri, hizmet, iletişim, footer ve aria/status metinleri üç dilde hazır.
- `data/i18n.ts`: mevcut locale kayıtlarının tamamı korunup her birine `homepage` namespace'i eklendi. `useLanguage().copy.homepage` ve mevcut `locale/setLocale/copy` API'si kullanılabilir. Footer rights aynı eski key'den factory'ye geçirilir; runtime circular import yok.
- `LanguageProvider`: sadece localStorage okuma/yazma exception guard eklendi; storage kapalıyken browser fallback/bellek içi seçim çalışabilir. Yeni provider, URL prefix, hydrate-time farklı başlangıç veya bağımsız DOM çeviri motoru yok.
- Legacy üç dil ağacı checkpoint ile birebir aynı; homepage namespace onaylı prototype dictionary ile üç dilde eşit. Mevcut homepage yeni namespace'i henüz tüketmez. UI/URL/hydration browser matrisi bu görevde yapılmadı; görsel/dil davranışı değişimi iddia edilmez.

## 4. Ortak proje modeli
`data/selectedProjects.ts`: readonly React-tüketilebilir `SelectedProject` ve `getSelectedProjects(locale)`; fields id/name/category/description/posterSrc/detailHref/liveHref/technologyLabels. Sıra FurtherUp Drive → Reviel → Metek Makina. URL ve poster kaynağı merkezi; kategori/açıklama/Metek sunum etiketi mevcut provider sözlüğünden gelir.

| Proje | Detail | Live | Poster |
|---|---|---|---|
| FurtherUp Drive | /projeler/furtherup-drive | https://drive.further-up.net | /projects/covers/furtherup-drive-cover.png |
| Reviel | null | https://www.reviel.com.tr/ | /projects/covers/reviel-cover.png |
| Metek Makina | null | https://metekmakina.com/urunler | /projects/covers/metek-makina-cover.png |

FurtherUp site+detail/hasDetailsPage/slug ve iki live kaynağının eşitliği module yüklemesinde doğrulanır. Teknoloji etiketleri gerçek detail techStack ilkiki kaydından gelir. Reviel teknoloji listesi kullanıcı kaynak bilgisiyle ASP.NET/HTML/CSS/JavaScript/C#; frameworkversion/DB/e-ticaret iddiası yok. Metek teknolojisi yerine onaylı “Kurumsal web / Endüstriyel ürün sunumu” etiketi locale bazında kullanılır; stack uydurulmaz.

Üç poster kaynakları değişmeden production public/projects/covers'a byte-identical kopyalandı. Bunlar production namespace'i için kasıtlı kopyalardır; public/prototype-assets'ın kendisi artifact'te yok. Mevcut homepage posterleri henüz render etmez/indirmez. Genel proje kataloğu genişletilmedi veya silinmedi; Reviel/Metek detail uydurulmadı. Orijinal posterler/prototip gallery data ve motorları aynı.

## 5. Yapılan hedefli doğrulamalar
- `npm run typecheck` passed; gerçek repo TypeScript kontrolü.
- Hedefli eslint data/homepage/i18n/selectedProjects/LanguageProvider ve scripts passed. İlk test helper'daki Next “module variable” lint kuralı local `cjsModule` adıyla düzeltildi; son lint geçti.
- İlk sandbox build, mevcut GoogleFonts üç fontun DNS erişiminde ENOTFOUND ile başarısız oldu; bu sonuç başarılı sayılmadı. Ağ erişimi onayıyla aynı `npm run build` tekrarlandı ve **başarılı** oldu:18 staticpage generation; route listesinde prototype yok; artifact677 dosya/0prototypeasset/0prototypedependency. Yeni görsel homepage taşınmadı.
- `npm run verify:production` passed; canonical/JSON-LD/requiredasset koruması ve artifact taraması.
- `node scripts/check-foundation.mjs` passed: legacy3dil checkpoint eşitliği, onaylı homepagecopy3dil eşitliği, sıra/nonempty localized kayıtlar, gerçekURL'ler/poster dosyaları, Reviel-Metek null-detail, AI/Atlı kaynaklarının varlığı. Küçük bağımsız fixture'da yanlışlıkla demo dosyası ve prototypeasset referansı eklenince verifier'ın reddettiği doğrulandı; gerçek artifact değiştirilmedi.
- `node scripts/check-production-access.mjs` passed: gerçek out'un yerel staticorigin'i üzerinden `/`, /hakkimizda, /hizmetler, /projeler, /iletisim, FurtherUpdetail, robots/sitemap200.10 prototype URL/extensionless/.html/trailing slash/index.html/.txt/encodedpath/asset varyantı404.
- Dev server3018: `/prototype/bs3p-homepage`, `/prototype/bs3p-project-showcase`, `/prototype/bs3p-project-showcase-r2`, `/prototype/bs3p-right-3d`, `/prototype/spatial-hero`, `/prototype/spatial-hero-plus`200; mevcutRevielprototypeasset200.
- Immutable production kaynakları/layout/header/footer/SEO/contact/records/config/lock checkpoint1218e58 ile byte eşit. Source snapshot'ında yalnız LanguageProvider/datai18n/workflow/package değişti; eski prototipler/arşiv/assetler korunur.
- Screenshots/Playwright/büyük responsive matrix/livecontactPOST/canlıdeployHTTP kontrolü yapılmadı. Yerel static404, henüz deploy edilmemiş canlı hostun değiştiği anlamına gelmez.

[[../07-Reviews/evidence/BS3P-018A-foundation-check.json]] baseline SHA-256/gerçek export SEO/sitemap ve kısa sonuç kaydıdır.

## 6. Değişen dosyalar
**Mevcut:**
- `package.json` — güvenli build, verify:production ve doğrulamalıpreview; dependency aynı.
- `.github/workflows/pages.yml` — upload öncesi verifier; env/upload/deploy teknoloji aynı.
- `components/LanguageProvider.tsx` — storage exception handling.
- `data/i18n.ts` — additive homepage namespace, eski key/value aynı.

**Yeni:**
- `data/homepage.ts`, `data/selectedProjects.ts`.
- `scripts/build-production.mjs`, `verify-production-export.mjs`, `check-foundation.mjs`, `check-production-access.mjs`.
- `public/projects/covers/furtherup-drive-cover.png`, `reviel-cover.png`, `metek-makina-cover.png`.
- Bu teslim notu + evidence JSON; TASK_REGISTER/CURRENT_STATUS/NEXT_STEPS/SESSION_LOG/DAILY_LOG_2026-10-15/DECISION_LOG/REVIEW_REGISTER güncellendi.

`package-lock.json`, nextconfig, app/page/layout ve tüm görselbileşenler değişmedi. Buildout/dev cache üretilmiş ve ignore edilen çıktılardır; commit edilmedi.

## 7. Riskler ve BS3P-018B hazırlığı
- Build/deploy artık yalnız safe wrapper+verifier üzerinden yürümeli; yeni production source root'ları allowlist'e eklenmelidir. Artifact'te symlink veya prototype dependency fail-closed olur.
- GoogleFonts build aşamasında ağ gerektiriyor; bu eski mimari bağımlılığı korunuyor. CI publicenv'leri aynı, local.env copy yok. Cache/CDN veya yanlışmanuelle deploy akışı canlıda ayrıca kontrol edilmelidir.
- Checkpoint1218e58 kullanıcı tarafından başlangıç olarak verildi; canlı son iyi release/artifact bağımsız teyit edilmedi. İzolasyon rollback'te de korunmalı, checkpoint'in eski hamout'u prototipleri tekrar açacak şekilde yayınlanmamalı.
- Reviel/Metek detail içerikleri yok; new model null üretir. GitHubteyidi/font/ref izinleri/Safari/WebGL/kalıcıpausea11y/gerçekcihaz/performans/finalQA önceki plandaki açıklar olarak sürer.
- Yeni homepage sözlüğü mevcut provider bundle'ına eklenmiştir; finalphase footprint/performance ölçümü gerekir. Görsel geçiş, motionport ve browserhydration/persistence testi bu kapsamda yok.

**BS3P-018B için hazır:** mevcut useLanguage API'siyle typed üçdilmetinler; merkezi selectedProjects locale selector; gerçek detail/live ayrımı; productionposter yolları; prototype bağımlılığına izin vermeyen gerçek build ve yayın verifier; baseline/rollback kaynak manifesti. Header/hero/Three/gallery/footer portu ancak yeni kullanıcı görevi/onayıyla yapılır.

Development sunucusu3018 bu kontrolde açıldı; kaynak prototipler erişilebilir. Yeni homepage `/`'a geçirilmedi. Commit/push/merge/deploy yok; kullanıcı onayı beklenir.
