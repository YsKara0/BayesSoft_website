# BS3P-019 — Final QA & Release Readiness

**Tarih:** 2026-10-15  
**Durum:** completed — QA tamamlandı; yayın kararı **NOT READY**.  
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `1218e58`.  
**Onay:** Kullanıcı BS3P-018C sonucunu onayladı; görsel tasarım kilitli. Bu görev yayın yetkisi vermez.  
**QA ortamı:** Temiz static export → http://127.0.0.1:3019/ ; demo/dev3018. Canlı BayesSoft sunucusuna istek veya değişiklik yapılmadı.

## Karar ve sınıflandırılmış bulgular

**NOT READY.** Build/izolasyon/temel işlevler başarılı olsa da otomatik hareketlerin kalıcı, erişilebilir durdurma mekanizması yok. Bu LevelA erişilebilirlik engeli giderilmeden yayın önerilmiyor. Tasarım kilidi korunarak yeni kontrol için ayrı somut uygulama onayı gerekir. Diğer önemli riskler aşağıdadır; Reviel/Metek detay eksikliği blocker değildir.

| ID | Sınıf | Durum | Bulgu / gerekli işlem |
|---|---|---|---|
| B-019-01 | **BLOCKER** | Açık | Prizma transport düğmesi hidden/tabindex−1; marquee yalnız hover/focus boyunca duruyor;8.4s scene final kontrolü hidden, görünür replay yeniden başlatıyor. Odağı başka yere taşıdıktan sonra da hareketi durdurabilen erişilebilir mekanizma gerekir |
| I-019-01 | **ÖNEMLİ** | **Düzeltildi** | React EN/DE ilk hero yüzü font seçicisi aynı wrapper üzerinde iki class yerine descendant bekliyordu; onaylı font override uygulanmıyordu. Yalnız iki seçici düzeltildi;12locale/viewport font-metin ölçümü demo ile eşit |
| I-019-02 | **ÖNEMLİ** | Açık | Tek kısıtlı mobil örnekte LCP7.944s/FCP3.132s; posterler5,418,072byte ve erken yükleniyor. Görseli değiştirmeden yükleme önceliği/production optimize türevler incelenmeli; kapsamlı optimizasyon yapılmadı |
| I-019-03 | **ÖNEMLİ** | Doğrulama eksik | Chromium geçti. Safari kurulu fakat remote automation kapalı; WebKit/Firefox Playwright motorları yok. Fiziksel cihaz ve SR testi yok. Yerel Node26.8.2, CI Node22; aynıNode22CI build henüz çalıştırılmadı |
| I-019-04 | **ÖNEMLİ** | Açık | npm production audit1critical+4high paket kaydı: next/nanoid/postcss/sharp/source-map-js. StaticPages runtime ile build/dev maruziyeti ayrılmalı; ayrı hedefli patch/risk değerlendirmesi gerekir |
| I-019-05 | **ÖNEMLİ** | Açık | Son gerçekten yayınlanmış iyi artifact/revision/cache teyidi ve rollback provası yapılmadı; checkpoint kaynakları mevcut. Yayın öncesi immutable rollback artifact saklanmalı |
| P-019-01 | **İYİLEŞTİRME** | İçerik kararı | BayesSoft yasal sayfaları/font-referans izin teyitleri önceki kayıtlarda açık. Sahte link eklenmedi; hukuki yeterlilik kararı verilmedi |
| P-019-02 | **İYİLEŞTİRME** | İsteğe bağlı | Reviel/Metek gerçek iç case sayfaları yok; detayCTA render edilmiyor. Bozuk bağlantı olmadığından yayın blocker'ı sayılmadı |
| P-019-03 | **İYİLEŞTİRME** | Açık | Kaydedilmiş DE tercihinin hydration başlangıcında tek0.00571layout-shift gözlendi; TR performans örneğindekiCLS0 ile karıştırılmadı. Mevcut SSR-TR/clientlocale politikasının küçük ilkpaint etkisi |

## 1. Production build / TypeScript / lint
- `npm run build` temiz, geçici source workspace'inde geçti. Prototip kaynakları taşınmadan dışlanır; mevcut node_modules kullanıldı, npmci/yeni dependency kurulumu yapılmadı.
- EN/DE düzeltmesi sonrası son build yeniden geçti:18statik sayfa; `/`12.5kB/first-load132kB, paylaşılanJS102kB (Next build raporu; gerçek transfer ölçümü değildir).
- `npm run typecheck` ve hedefli ESLint geçti:0hata/0uyarı. Kapsam app/page/layout, SiteChrome/homepage/LanguageProvider, lib/homepage, homepage/selectedProjects data ve scripts.
- `node scripts/check-foundation.mjs` geçti: legacy3dil ve namespace/veri/gerçekURL/null-detail/poster/Atlı-AI koruması ve negatif export fixture'ları.
- Yerel Nodev26.8.2, Next15.5.20, React19.2.7, Three0.180.0. CI22 ile aynı ortamda build yapılmış gibi raporlanmadı.

## 2. Prototip izolasyonu / route'lar
- Son artifact verifier:679dosya;0prototypeartifact/0prototypedependency. Son build bu kontrolü zorunlu çalıştırdı.
- Son artifact üzerinde `check-production-access.mjs`:10prototypeURL/encoded/trailing/.html/index/.txt/asset varyantı404; altı development prototipi ve demoasset200. Root çalışma grafiği `/prototype-assets/` kullanmıyor.
- Sitemap'in13URL'si yerel production HTTP200: beş sabit route + sekizmevcutprojedetayı; Atlı ve AI dahil. Bilinmeyenroute404. Bu yerel static origin kontrolüdür; canlı hosting/CDN testi değildir.
- Test edilen son export dosya-hash manifesti aggregateSHA256: `cd1df90bea7fe39dc361aef345aefacb45aa3e79fc5080010574421dd8bd1dbe`. Bu tar dosyasının hash'i değil, sıralırelativepath+dosyahash listesinin hash'idir.

## 3. TR / EN / DE ve düzeltilen font kapsamı
- Header, hero4yüz, referanslar, proje başlığı/açıklaması, hizmetler, iletişim ve footer üçdilde gözlendi. Html.lang doğru; her dil reload sonrası korundu. URL'de yeni dilrotası yaratılmadı.
- Kaydedilmiş DE ile ayrı desktop reduced başlangıcında tek0.005710557layout-shift görüldü; sıfır kayma iddiası yapılmadı. Header/footer anchor hedeflerinin tamamı mevcut. EN seçiminden sonraki reloadENkorundu.
- Canvas kimliği dil değişiminde aynı. Prizma localeeffect bağımsız; ayrıca reduced-mode'da sıfırdan farklı seçilmişaçının dil değişiminde korunması kontrol edildi. Browser error/requestfailed listeleri boş.
- İlk mobil Almanca screenshot'ta kesilme görüldü.390px'de React EN/DE53.1475px iken demo EN42px/DE40.25px. Root `.bs3p-react-homepage` ve `.bs3p-homepage` aynı elementte olmasına rağmen selector descendant arıyordu.
- `components/homepage/homepage.css` içindeki yalnız iki selector aynı-element class birleşimiyle düzeltildi. Font dosyası, font-size değerleri, letter-spacing, geometri, zamanlama, poster veya demo değiştirilmedi. Bu yeni tasarım değil, onaylı EN/DE override'ının geri uygulanmasıdır.
- Son artifact'te320/390/768/1440px ×TR/EN/DE12kombinasyonda ilk yüz font-size ve logicaltext ölçüleri demo ile eşit; yatay overflow yok. Otomatiktext/transition fazlarıyla kıyas yapılmaması için bu hedefli font probe reduced-motion kullanır.
- Önceki018C'nin TR ağırlıklı font/viewport kontrolünün kapsamı bu EN/DE selector hatasını yakalamamıştı; tarihsel rapor değiştirilmedi, yeni bulgu burada açık kaydedildi.

## 4. Tarayıcı / mobil matris
| Ortam | Gerçek sonuç |
|---|---|
| Yerel GoogleChrome/Chromium155.0.8059.40,1440×1000 | Root/dil/keyboard/gallery/AX/WebGL/cleanup geçti |
|320×900,390×900,768×900 emülasyon | Her genişlikteTR/EN/DE/menuEscape/taşma/statichero/canvas0 geçti; sonfontfix ayrıca doğrulandı |
| WebKit Playwright | Binarykurulu değil; test edilmedi |
| NativeSafari | SafariDriver session isteği500: Allow remote automation kapalı. Ayar değiştirilmedi; Safari smoke yapılmış sayılmadı |
| Firefox | App ve Playwrightbinary yok; test edilmedi |
| Fiziksel iOS/Android/tablet | Ortama bağlı cihaz yok; test edilmedi |

Mobil/tablet genişliği emülasyonu gerçek cihaz kapsamının yerine geçirilmedi. Video veya gereksiz büyük kayıt üretilmedi.

## 5. Animasyon / erişilebilirlik / lifecycle
- Reduced-motion desktop ve mobil: otomatikprizma paused, anlıkyüzseçimi, statikscene/canvas0, marquee animationnone. Galeri nativebuttons/ArrowRight ve CDPtouchswipe ile ilerliyor; FurtherUp→Reviel→Metek ve gerçekCTA senkron.
- KlavyeEnter ile prizma yüz1'e geçti; focus-visible solid2px. Galeri okları çalıştı. Hover/focus pause mevcut; odaktan çıkınca `data-auto=running` geri geldi. Bu geçici pause kalıcı mekanizma sayılmadı.
- CDP accessibilitytree'de adsız link/button0; bir main/birH1, anlamlıH2/H3 akışı ve nav/footerlandmark adları var. Alt özniteliği eksikimg0; logo/art dekoratif altlar grup/figure isimleriyle sunulur. Gerçek screen-reader kullanıcı testi veya tüm WCAG uyumluluk sertifikası değildir.
- Seçilen nav/locale/project/service/footer metin örneklerinin temel renk kontrastı yaklaşık5.35–14.00:1. Pseudo band arka planı/3D art/piksel düzeyi tam kontrast matrisi yapılmadı.
- Final scene8.400/phasefinal/runningfalse;300ms sonraframe509sabit. SPA `/projeler` geçişi sonrası passivecleanup beklendi: retiredcanvas0, removedDOM, eskiangle−90 veframe510;5300ms sonra aynı. Bir final cleanup draw'ı sürekli render diye sayılmadı.
- Kaynak incelemesi: prismtimer/RAF/AbortSignal listenerları; galleryResizeObserver/media/swipe/WAAPI; sceneResize/Intersection/visibility/contextlistener/renderer/geometries/materials/textures/env/shadow ve pendingRAF disposal var. İleriGPUmemory profillemesi yapılmadı.
- Gerçek `WEBGL_lose_context` extension ile contextloss → statikposter; getContextwebglkapalı freshcontext → statikposter doğrulandı.

**BLOCKER gerekçesi:** W3C, diğer içerikle birlikte otomatik başlayan5s'den uzun hareket için kullanıcı kontrolü ister; odak başka yere taşındığında tekrar başlayan duruş yeterli değildir. Prizma auto-updating mesajlar da bu kapsamdadır. Gizli transport/final-state düğmeleri erişilebilir çözüm değildir. Reduced-motion desteği tek başına bu bulguyu kapatmaz. [W3C SC2.2.2 açıklaması](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).

Önerilen kapanış ölçütü: erişilebilir adı/durumu olan kalıcı pause/stop; kullanıcı diğer bölümleri kullanırken duruş sürer; keyboard/mobil/TR-EN-DE çalışır. Mevcut onaylı hareket süreleri/geometri korunur. Bu görevde yeni UI/özellik eklenmedi.

## 6. Performans — tek local lab örneği
Lighthouse kurulu değildi; kurulum yapılmadı. Eşdeğer temel gözlem için browser PerformanceObserver(LCP/CLS/EventTiming/LongTask), ResourceTiming ve ChromeCDP kullanıldı. Static artifact localHTTP/identityencoding/no-cache ile sunuldu; uzakPagesCDN/TLS/compression/gerçekcihaz/fieldCWV ölçümü değildir.

| Ölçüm | Desktop | Mobil emülasyon |
|---|---:|---:|
| Viewport |1440×1000 |390×844 |
| CPU/ağ | Kısıtsızloopback |4×CPU;1.6Mbpsdown/0.75Mbpsup;150mslatency |
| GözlenenLCP |64ms(0.064s) |7944ms(7.944s),statikheroSVG |
| FCP |64ms |3132ms |
| CLS maxsessionwindow |0 |0 |
| Örneklenen enuzun etkileşim |48ms(galeri) |24ms(menü),Escape16ms |
| CompletedJSencodedbody |1,188,052byte |618,313byte |
| Longtask |0 |1adet/70ms |
| Poster tamamlanması örnek anında |3/3 |0/3 |

Desktop9s; mobilDOMContentLoaded sonrası15s gözlem penceresi, sonraörnek etkileşim. Mobil0/3, başarısızrequest iddiası değil, dosyaların pencere sonunda hâlâ yüklendiğini gösterir. Transfer toplamları yalnız tamamlanmışresourceentries içindir; tam sayfa yükü gibi sunulmaz. TR örneğindekiCLS0, kaydedilmişDEbaşlangıcındaki ayrı0.00571örneğini kapsamaz. EventTiming sayısı **fieldINP değildir**; INP sayısı uydurulmadı. Desktop loopback64ms gerçek kullanıcı LCP beklentisi değildir.

- Üç poster:FurtherUp1,458,998B/Reviel1,897,092B/Metek2,061,982B; toplam5,418,072B. SVGuse tekrarı orijinaldosyayı aynısayfada tekrarindirme gerektirmiyor; üçorijinal productionasset var.
- Desktop Three renderer chunk322,448B/gzip75,406B; core208,906B/gzip56,605B; scene10,557B/gzip4,602B. Üçilişkili dynamicchunk toplam541,911B/gzip136,613B(ayrıayrıgzip toplamı). Mobil bu Threechunkları yüklemiyor. TümJS ile Three payload karıştırılmadı.
- Production SSR metni var; hydration/pageerror görülmedi. Bu performans örneğiTR'de, EN/DE selector düzeltmesinden önceki ilk temizartifact'te alındı; düzeltmeTR kuralını/JS/yüklemeyi değiştirmez. Finalbuild için Lighthouseyenidenölçümü yapılmış gibi iddia edilmez.
- Ayrı iyileştirme: statikheroSVG/font/criticalJS yükleme önceliği, eskiglobalfont preloadları ve belowfoldposter geciktirme; görselkaynaklar korunarak kaliteli productiontürev boyutları. Sıkıştırılmış gerçekhosting/Node22/cihazda tekrar ölçüm gerekir. Bu QA'da kapsamlıoptimizasyon veya görsel değişikliği yapılmadı.

## 7. Link / SEO / içerik
- Root header/footer yerelanchor hedefleri; allprojects/furtherupdetail gerçekroute. E-posta `mailto:info@bayessoft.com.tr`. Reviel/Metek detayCTA yok, uydurmahref yok.
- FurtherUp `https://drive.further-up.net`, Reviel `https://www.reviel.com.tr/`, Metek `https://metekmakina.com/urunler`; dışCTA blank/noopener+noreferrer/haricietiket. Dışlinklerin güvenlirel kontrolü geçti.
- Proje3live +GitHub/LinkedIn/X kayıtları HEAD/followredirect200 döndü. Bu sadece erişilebilirlikanlıkHTTP kontrolü, dışuygulamafonksiyonelQA değildir. Sosyaller gerçek data/config kaynağıdır.
- Canonical `https://bayessoft.com.tr`; productiontitle/robotsindexfollow/JSON-LD/OG/sitemap/robotsCNAME korunur.13sitemapURL200/favicon200/404kontrolü geçti. AyrıEN/DEindexlenebilirURL/hreflang eklenmedi; mevcutTRstatikSEO+clientlocale mimarisi korunur.
- Contactformkaynağı/checkpoint veconfig korunur. CanlıPOST gönderilmedi; formAPI/CORS/delivery çalışıyor diye iddia edilmedi.
- BayesSoft'a ait olmayan müşteri ürünformülü/makinegeliştirme iddiası eklenmedi. Eksik yasalroute eklenmedi; hukuk incelemesi yapılmadı.

## 8. Güvenlik / CI / rollback
- Artifact'te `.env*`,privatekeyfilename,`.git` ve sourcemap0. MetinaramasındaPEMprivatekey/AWSaccesskey/GitHubtoken kalıbı0. `.env` veya secret dosyaları okunmadı. Bu sınırlıpatternkontrolüdür; tam güvenlik/pentest garantisi değildir.
- Buildwrapper secretları kopyalamaz; `NEXT_PUBLIC_*` URL/email/social/contactAPI buildtime config'i bilinçli public değerlerdir. CI bu değerleri env sağlar; local.env otomatikaktarılmaz. Gizliservercredential ihtiyacı yok; harici contactbackend ayrıbağımlılık.
- Workflowmain/masterpush +workflow_dispatch; checkouttetiklenenref; güvenlibuild→verifier→`./out`upload→Pagesdeploy. Featurebranch otomatikpushtrigger kapsamında değil; manuel dispatch seçilenrefi yayımlayabilir. QA sırasında workflow tetiklenmedi; GitHubenvironmentprotection/sondeployrefi canlıdan doğrulanmadı.
- npm audit `--omit=dev --json` exit1:5paketkaydı(1critical/4high). Next15.5.20, transitivenanoid/postcss/sharp/source-map-js. Lock/paket değiştirilmedi; `audit fix` çalıştırılmadı.
- KritikNextadvisory'leri WindowsNextserver ve AVIFImageOptimization hedefler; bu artifact GitHubPagesstatikdosya seti, `images.unoptimized=true`, Nextserver/optimizerendpoint yok. Bu nedenle paketcriticaletiketi buhostta doğrulanmışuzaktanRCE diye sunulmadı; build/dev zinciri için önemli açık takip kaydı tutuldu. [NextWindowsadvisory](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36), [NextAVIFadvisory](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4). Ayrıpatch/riskdeğerlendirme ve test gerekir; framework/bağımlılık yükseltmesi bu görselQA içinde körlemesine yapılmadı.

### Uygulanabilir rollback sırası — yayın yapılmadı
1. Yayın öncesi incelenmişreleasecommit/ref, Node/lock/publicconfig ve immutableproduction-onlyartifact+SHAmanifest saklanır. YerelQAexport manifesti bu klasörde; henüzcommitlirelease veya gerçektenyayınlanmışgoodartifact değildir.
2. SoniyiGitHubPagesartifact/revision canlıdurumu yetkili releaseoturumunda teminedilip doğrulanır. Bugünküeskiüretimkaynakları checkpoint1218e58 ileGit'te korunur; `app/page.tsx` ve `app/layout.tsx` objelerinin varlığı doğrulandı, legacybileşenler yerinde.
3. Sorunlu yayında, yeniden tasarım/onarım yayını beklemek yerine son doğrulanmışproduction-onlyartifact aynıverifier kapısından geçirilip ayrı açıkdeployonayıyla geri yayınlanır. Domain/CNAME/publicenv korunur.
4. Eskiartifact yoksa ayrı geçici checkout/workspace içinde mevcuttemel ve güvenlibuildizolasyonu korunarak checkpoint'in eski page/layoutkompozisyonu kullanılır. EskiHeader/Footer/hero/source silinmediği için rollback kaynağı mevcut. Aktifçalışmaağacına reset/checkoutileüzerineyazılmaz.
5. Bu rollbackbuild'i TS/build/13route/SEO/prototype404 ile doğrulanıp artifactmanifesti alınmadan yayınlanmaz. Checkpoint'in eski hamout'u prototipleri tekrar açabileceği için doğrudanyayımlanmaz. Bilinen dependencybulguları rollbackplanında da değerlendirilir.

EskiUI rollbackartifact'i bu oturumda build/deploy edilmedi. Hazırsoniyiartifact alınmadığı için I-019-05 açık; uygulanabilirprosedür belgeli olsa da tatbikat başarılı diye işaretlenmedi.

## 9. Kanıtlar / değişiklik sınırı
- [[../07-Reviews/evidence/BS3P-019/production-desktop.png|Desktop]] · [[../07-Reviews/evidence/BS3P-019/production-mobile-de.png|Mobil DE önce]] · [[../07-Reviews/evidence/BS3P-019/production-mobile-de-after.png|Mobil DE düzeltme sonrası]]
- `production-browser-qa.json`, `lifecycle-contrast.json`, `reduced-preference.json`, `locale-font-before.json`, `locale-font-after.json`.
- `route-isolation.json`, `artifact-security-seo.json`, `environment.json`, `safari-attempt.json`, `external-links.json`.
- `performance-raw.json`/`performance-summary.json`, `dependency-audit.json`, `source-change-manifest.json`, `release-readiness.json`.
- İlk reloadharness eski canvasreferansı nedeniyle durdu; reload/persist ve SPAcontinuity ayrılarak tamamlandı. İlk finalfontprobe eksikDOM/summary ile timeout verdi, son kayıtlı12case başarılı. İlkimmediateunmountölçümü passivecleanup öncesi1canvas gördü; cleanupsonrasıkanıtcanvas0/frame-angle-sabit. Başarısıztestler başarılı gösterilmedi.
- Oturum başlangıcındaki275uygulama dosyasından274byteeşit; yalnız `components/homepage/homepage.css` iki EN/DEselector değişti. Onaylıdemo/prizma/Three/R2motorları/poster/font/productionSEO/diğerroute/018Afoundation/package-lock ve kullanıcıdosyaları korundu.

## 10. Sonraki karar
B-019-01 için minimal kalıcı hareketkontrolü ayrı onaylı düzeltme kapsamında ele alınmalı; ardından aynı hareket/klavye/mobilkontroller tekrar edilir. I-019-02/03/04/05 için hedefli performans/bağımlılıkpatch/browser/rollback kapanışları gerekir. I-019-01 kapandı; yeni tasarım veya animasyonzamanı değişmedi.

Bu rapor, görev/task/current/next/session/günlük/review ve D-025 güncellendi. **QA completed; release NOT READY.** Commit/push/merge/deploy yapılmadı. Kullanıcıonayı beklenir; otomatik başka göreve geçilmez.
