# Görev kaydı

## BS3P-029B — 2026-10-16 Windows native hero sharpness

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-029B | Windows Chrome hero netliği teşhisi ve geçici A/B | completed — investigation only; user review pending | [[BS3P-029B-WINDOWS-HERO-SHARPNESS]]; gerçek headed Chrome155/DPR1/live-local/A-B-C-D-E/PNG/short replay. B fark0; C/D/E belirgin tutarlı kazanç yok. Küçük font+affine hipotezi kesin neden değil. Uygulama değişmedi; Safari/native24inç/fullQA yapılmadı; kalıcı fix/Git/yayın yok |

Durumlar: `planned` · `in-progress` · `blocked` · `completed` · `deferred` · `cancelled`.

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-000 | Bağımsız Obsidian hafızası ve çalışma kuralları | in-progress | 2026-10-14 yerel doğrulama tamamlandı; NEXT_STEPS'teki kullanıcı kabul kapısı korunur |
| BS3P-001 | Sağ Three.js hero: yaratıcı ve teknik plan | completed | [[BS3P-001-RIGHT-HERO-3D-PLAN]] korundu; kullanıcı bağımsız uygulamayı onayladı (D-010). Plan ve uygulama notları ayrı |
| BS3P-002 | Sağ Three.js sahnesi ayrı prototip | completed | R1 hedefli görsel/motion revizyonu teslim edildi: [[BS3P-002-R1-VISUAL-MOTION-REFINEMENT]]. Uzun çizgi kaldırıldı, 8.4s akış/ilk kare kapısı, kısa kontroller tamam. Kullanıcı görsel onayı bekleniyor; hero entegrasyonu yok |
| BS3P-003 | Video ile sağ 3D sahne karşılaştırması | planned | Aynı hero bağlamında, kullanıcı kararı |
| BS3P-004 | Seçilen sağ görselin hero'ya entegrasyonu | deferred | BS3P-003 açık onayı |
| BS3P-005 | Tam homepage iskeleti ve içerik | deferred | İlk bağımsız iskelet yeni BS3P-009 kapsamında teslim; final içerik/vitrin/production kararları ayrı |
| BS3P-006 | Production izolasyonu ve final QA | deferred | Release hazırlığında zorunlu |
| BS3P-007 | Agent talimatlarını tek rehberde birleştir | completed | Eski dosyalar birebir yedeklendi; AGENTS.md tek rehber, CLAUDE uyumluluk notu, workflow/loglar güncel. Teslim incelemesi bekleniyor; kod değişmedi |
| BS3P-008 | Integrated Spatial Hero — entegrasyon ve R3 polish | completed | [[BS3P-008-R3-INTEGRATED-HERO-POLISH]]; bantsız prizma/dört nokta, gerçek locale köprüsü ve header, sağ paneller +%11.11. Kısa desktop/mobil/motion/TS geçti; kullanıcı görsel onayı bekleniyor. V2 notu ve kaynak demolar korunur |
| BS3P-009 | İlk tam homepage prototipi — modüler iskelet | completed | [[BS3P-009-FULL-HOMEPAGE-SKELETON]]; korunan R3 hero,10 mevcut referans, animasyonsuz ProjectsShowcase slotu, dört hizmet/üç yaklaşım/gerçek iletişim/footer. Hedefli kontroller/iki PNG/JSON; görsel inceleme beklenir, production değişmedi |
| BS3P-010 | Homepage referans marquee — polish, hover ve boyut düzeltmeleri | completed | [[BS3P-010-REFERENCES-MARQUEE-POLISH]]; son sizing fix: grid intrinsic taşması giderildi, round56/48 ve square64/56px çerçeve/iki absolute contain katman. Tek desktop/mobil PNG ve kısa hover/click geçti;491 korumalı dosya aynı.200ms opacity/120s akış/linkler/donma düzeltmesi korunur; inceleme beklenir |
| BS3P-011 | Signature Project Showcase — R2 horizontal cylindrical gallery | completed | [[BS3P-011-R2-HORIZONTAL-CYLINDRICAL-SHOWCASE]]; kullanıcı R1 mekaniğini görsel olarak kabul etmedi, R1 korunur. Yeni rota:9 konum/13 kavis dilimi/ortakY40°, desktop5/mobil3 yüzey; yalnız üç gerçek proje.1040/700ms/senkron bilgi/reduced, kısa TS/desktop/mobile/motion geçti; iki PNG/3,88s WebM/JSON.533 dosya aynı; D-016 implemented; kullanıcı BS3P-012 talebinde R2 onayını verdi, homepage entegrasyonu BS3P-012 kapsamında |
| BS3P-012 | Onaylanan R2 galerisinin homepage ProjectsShowcase entegrasyonu | completed | [[BS3P-012-R2-HOMEPAGE-INTEGRATION]]; ortak renderer/entry, H2-H3/64,3–35,7/korunan Tüm projeler linki. Kısa TS/desktop/mobile/ileri-geri geçti; iki PNG/JSON. Bağımsız R2 HTML aynı,551 dosya korundu; D-017 implemented, homepage değerlendirmesi beklenir |

| BS3P-013 | FurtherUp Drive posterinin homepage R2 galerisinde önizlemesi | completed | [[BS3P-013-FURTHERUP-DRIVE-POSTER-INTEGRATION]]; yalnız visual override/orijinal PNG kopyası, oran korunur/yan boşluk; TS/desktop/mobil/kısa geçiş/yükleme ölçümü geçti. Diğer505 dosya/R2 HTML aynı; kullanıcı onayı beklenir |

| BS3P-014 | Reviel homepage seçili proje entegrasyonu | completed | [[BS3P-014-REVIEL-PROJECT-INTEGRATION]]; Reviel/FurtherUp/AI sırası, Atlı korunur; poster/nullable detay desteği. TS/desktop/mobil/kısa ileri-geri, bağımsızR2 HTML aynı. GitHub teyidi/detay sayfası eksik; kullanıcı onayı beklenir |

| BS3P-015 | FurtherUp/Reviel/Metek ortak vitrin ve gerçek CTA | completed | [[BS3P-015-SELECTED-PROJECTS-METEK-CTA]]; iki rota aynı veri, AI/Atlı featured dışında/production korunur; doğru dışlinkler, TS/desktop/mobil/motion geçti. Ayrı minimalist Reviel asset bulunamadı; kullanıcı incelemesi beklenir |

| BS3P-016 | Homepage production hazırlığı: üç dil/header/hero/aksiyon/footer | completed | [[BS3P-016-HOMEPAGE-PRODUCTION-POLISH]]; sadece homepage, TR/EN/DE yerinde/ikiaksiyon/approach kaldırıldı/yenifooter/zeminekarışanprizma. HedefliTS-lint/desktop-mobil/dil-link-dönüş geçti; tercih reload harness sınırlı. Reviel-Metekdetay/yasal/finalQA eksik; kullanıcı BS3P-017 talebinde görsel tasarımı onayladı, üretim uygulaması ayrı onay bekler |

| BS3P-017 | Production migration audit ve uygulanabilir plan | completed | [[BS3P-017-PRODUCTION-MIGRATION-PLAN]]; production/prototype kaynak karşılaştırması/tekprovider/SEO/Pages artifact izolasyonu/lifecycle-risk/8 küçük adım/rollback/finalQA listesi. Görsel onay kayıtlı, plan uygulama onayı beklenir; yalnız belgeler değişti, kod/test/yayın yok |

| BS3P-018A | Production foundation: izolasyon / tek dil / ortak seçili veri | completed | [[BS3P-018A-PRODUCTION-FOUNDATION]]; checkpoint1218e58, eski `/` aynı; izole source build+verifier, TR/EN/DE namespace/model/posterlar. TS/lint/build/verifier/data/dev200-prodartifact404 geçti; deploy yok, 018B onayı beklenir |

## Yeni görev açma şablonu
`BS3P-### — [Kısa ad]`  
- **Durum:** planned  
- **Amaç:**  
- **Kapsam dışı:**  
- **Kabul ölçütleri:**  
- **İlişkili karar:**  
- **Dosya/rota sınırı:**  
- **Sonuç:**  

> Henüz gerçekleşmeyen işleri tamamlanmış olarak işaretleme.

## BS3P-001 — 2026-10-14 plan teslimi
- **Sonuç:** “İşinize göre kurulan sistem” — veri ve iş kurallarının ortak web/mobil arayüzlere bağlandığı ince katmanlı sahne; 3.3s tek giriş, sabit final, mobil/reduced-motion statik alternatif.
- **Teslim:** [[BS3P-001-RIGHT-HERO-3D-PLAN]]; yaratıcı/teknik plan tamamlandı, tasarım kabulü henüz verilmedi.
- **Doğrulama sınırı:** Gerçek route/motion/video/CSS, dependency/ayarlar, font/lisans ve mevcut PNG incelendi. Canlı görünüm, MP4 oynatma, sahne performansı test edilmedi.
- **Sonraki kapı:** Kullanıcı D-009 ve ayrı demo kapsamını onaylarsa BS3P-002; mevcut hero/production entegrasyonu ayrıca BS3P-003/004 onayına bağlıdır.

## BS3P-002 — 2026-10-14 bağımsız deney teslimi
- Kullanıcı BS3P-001 planını uygulama için onayladı ve rota `/prototype/bs3p-right-3d` olarak kesinleşti; görev panosundaki ayrı demo işi BS3P-002 olarak tamamlandı.
- Native Three.js 0.180.0 / HTML yüzey ayrıntıları, 3.35s tek giriş ve sabit final, replay/son görünüm kontrolleri, mobil/reduced-motion SVG alternatifi.
- Hedefli TS, desktop render (örtüşme düzeltmesi için yalnızca desktop'a tekrar bakıldı), tek basit mobil kontrol, kısa motion ve 6s kayıt. Ayrıntılar [[BS3P-002-RIGHT-HERO-3D-IMPLEMENTATION]].
- BS3P-003 MP4/3D eş bağlamlı karşılaştırması henüz yapılmadı; BS3P-004 entegrasyonu deferred. Kullanıcı görsel değerlendirmesi bekleniyor.

## BS3P-002 R1 — 2026-10-14 görsel ve motion refinement
- Mevcut konsept/rota korundu; uzun çizgi/işaret tamamen kaldırıldı. Daha okunur açık panel yerleşimi, gerçek web/mobil oranları, ayrı kenar malzemeleri ve küçük yardımcı renk vurguları uygulandı.
- 8.4s yeni fazlar: veri → kurallar → web → mobil → hassas final; replay/final korunur. Ayrı loading placeholder + font/shader/pose hazırlık kapısı F5 geçişini deterministik kılar.
- Hedefli TS, bir desktop kontrolü ve yalnızca boyut düzeltmesi için desktop tekrarı, tek mobil, kısa motion ve tek hedefli hard-reload kontrolü yapıldı. [[BS3P-002-R1-VISUAL-MOTION-REFINEMENT]] sonuç/sınır ve manifest içerir.
- Tamamlandı; D-011 implemented, görsel onay bekleniyor. Önceki plan/uygulama notu korundu. Yeni bağımlılık/Git/yayın/hero entegrasyonu yok.

## BS3P-008 — 2026-10-14 Integrated Spatial Hero V2
- Kullanıcı açık talebiyle yeni birleşik rota: R1'in temiz soğuk ortamında özgün540px kolon/420px yüz prizma ve aynı8.4s Three.js sistemi; ortak header/zemin, az metin ve tek hero alanı.
- Kaynak route alt ağaçları, prizma initializer/metin/CSS ve R1 renderer modülü yeniden kullanıldı; iki kaynak prototipin kod/asset'leri değişmedi. Click/touch/Enter/Space replay ve görünür focus; debug düğmeleri gizli.
- Hedefli TS geçti; desktop1440×900, mobil375×812/reduced-motion, kısa geçiş/başlangıç/final ve tek hedefli klavye kontrolü. Desktop/mobile PNG,7.80s WebM ve JSON teslimi. Kontrol scripti varsayım düzeltmeleri notta açıklandı.
- 441 korumalı dosya aynı; package/production/MP4/eski kasalar/önceki plan ve notlar korunuyor. D-012 implemented, BS3P-008 completed; görsel kabul ve yayın yetkisi değildir. Onay beklenir.

## BS3P-008 R3 — 2026-10-14 Integrated Hero Polish
- Aynı birleşik rotaya özel hedefli revizyon: carrier bant/dikme/mil/yatak HTML'den çıkarıldı; aynı420px kare kesit/90° X/5000+900ms kernel, dört erişilebilir nokta ve bantsız kenar/ton ayrımı.
- Ortak header: mevcut wordmark/gerçek route'lar, TR etkin, EN/DE mevcut localStorage preference üzerinden gerçek ana sayfayı açar. Prototipin dört mesajı TR kalır; mobil native menü/Escape.
- 8:5 çizim alanı ve mevcut orthographic fit ile panel boyutları +%11.11; küçük mavi/mor/turuncu/veri vurguları ve yerel poster. R1 renderer/material/light/timeline/readiness değişmedi.
- Bir desktop1440×900, bir mobil375×812/reduced-motion, kısa iki prizma geçişi/Three başlangıç-final/replay ve gerçek dil geçişi; hedefli TS passed. İki PNG/JSON; uzun kayıt/QA yok.
- 446 korumalı dosya aynı; V2 notu/kanıtlar, özgün prototipler/MP4/production/i18n/eski kasalar/package/config korunur. D-013 implemented; görsel kabul beklenir.

## BS3P-009 — 2026-10-14 ilk tam homepage iskeleti
- Kullanıcı hero'yu büyük ölçüde görsel olarak onaylayıp yeni bağımsız homepage istedi. Aynı R3 GET çıktısı; header/hero→referanslar→proje slotu→hizmetler→yaklaşım→iletişim→footer.
- Typed veri/sunum/CSS ayrımı ve ayrı ProjectsShowcase/renderVisual sınırı. Mevcut FurtherUp metadata + gerçek detay linki; müşteri ekranı veya animasyonlu vitrin yok.
- 10 mevcut logo değişmeden/nötr başlıkla;120s CSS marquee/hover-focus pause ve mobil/reduced statik. Clipped logo lazy-loading hatası eager/low-priority ile düzeltildi.
- Bir desktop/mobil temel pass, kısa doğal hero, altı200 link, hedefli TS. İlgili logo kontrolü ve yalnızca capture düzeltmeleri tekrarlandı; son iki tam sayfa PNG/JSON.468 korumalı dosya aynı; D-014 implemented.
- TR prototip/EN-DE gerçek site köprüsü korunur; yasal route yok ve referans ayrımı/ayrı izin belgeleri kaynaklarda yok. Proje vitrini/final QA/release ayrı talep bekler. Yeni dependency/Git/yayın/production değişikliği yok.

## BS3P-010 — 2026-10-14 referans marquee polish
- Yalnız referans renderer/yerel doğrulanmış link kümesi/CSS değişti. Mevcut PNG'ler aynı; nötr ortak görünüm ve180ms ilgili hover/klavye renk dönüşü,2px focus.
- Boş tabindex kapsayıcısında kalıcı focus-within pause kaldırıldı; hover veya gerçek hedefin focus-visible durumu duraklatır. Tıklanan link odakta kalsa bile fare çıkınca devam ettiği doğrulandı.
-10 mevcut URL marka siteleriyle kontrol edildi; hastane domain'i fetch timeout sonrası resmî arama kaydıyla. Sahte link/ilişki iddiası yok.
- Tek desktop/mobil/click-resume,120s sınırının kısa faz ölçümü ve hedefli TS passed. Arel beyaz alanı/ton filtresi için yalnız ilgili görüntü kontrolü tekrarlandı; detay/manifest [[BS3P-010-REFERENCES-MARQUEE-POLISH]].
-486 korumalı dosya aynı; diğer homepage bölümleri/hero/production/kaynak demolar/arşivler/dependency/Git/yayın korunur. Görsel onay beklenir.


## BS3P-010 — 2026-10-14 Hover Color Fix
- Önceki yüksek contrast/brightness/grayscale→none filter interpolasyonu parlak ara renk üretiyordu; iki aynı kaynak/hizalı katman, sabit filtre/filtresiz renk ve200ms yalnız opacity ile giderildi.
- Tek hover/klavye focus/click-resume geçti;10 ara karede filtre değişmez, ortak bounds ve tek erişilebilir hedef.120s akış/linkler/mobil-reduced/donma düzeltmesi korunur;490 dosya aynı.
- Yalnız renderer/CSS ve ilgili kayıt/yeni JSON; ayrıntı [[BS3P-010-REFERENCES-MARQUEE-POLISH]]. Completed, kullanıcı incelemesi beklenir; başka QA/Git/yayın yok.


## BS3P-010 — 2026-10-14 Reference Logo Sizing Fix
- Gerçek ölçüm:64px frame içinde auto grid satırı Arel171.19/hastane176/Hypersense205.03px; overflow-hidden band dikey kırpıyordu. Definite frame/iki absolute contain katman ve yerel shape verisiyle düzeltildi.
- Round56/48px ve square64/56px; yatay176/64–56 sınırları/slotlar ve desktop88px band korunur.200ms opacity/120s akış/linkler/mobil-reduced/donma düzeltmesi aynı.
- Tek desktop/mobil görüntüsü ve kısa Arel hover/click passed;491 korumalı dosya aynı. [[BS3P-010-REFERENCES-MARQUEE-POLISH]] manifest/üç kanıt. Completed, kullanıcı incelemesi beklenir; kapsamlı QA/Git/yayın yok.


## BS3P-011 — 2026-10-14 Signature Project Showcase
- Kullanıcı brief'i tam okundu; yalnız /prototype/bs3p-project-showcase. Üç gerçek metadata kaydı/URL ve özgün konsept SVG; CSS3D Y120/900ms, mobil440ms, senkron bilgi ve kontrollü manuel navigation.
- Hedefli TS/prepare ve kısa desktop/mobil/wrap/key/swipe/reduced/console kontrolleri; art spacing ve sabit üst navigasyon düzeltmeleri, gerçek hedefli tekrarlar [[BS3P-011-PROJECT-SHOWCASE-IMPLEMENTATION]] içinde. İki final PNG/JSON, üç route200;499 korumalı dosya aynı.
- Completed/D-015 implemented; sanat yönü kullanıcı onayı beklenir. Yeni dependency/Git/yayın veya homepage entegrasyonu yok.


## BS3P-011 R2 — 2026-10-14 Horizontal Cylindrical Showcase
- Kullanıcı R1 folyo/prizma mekaniğini görsel olarak kabul etmedi. R1/brief/not/kanıtlar korunarak yalnız yeni /prototype/bs3p-project-showcase-r2 rotası oluşturuldu.
- Ortak CSS3D silindir/9 konum/13 dilim/Y40°; desktop5/mobil3 görünür yüzey, üç gerçek projenin tekrarları.1040/700ms/manual nav/settle metadata, swipe/reduced/focus/input lock. Yeni özgün4:5 kapaklar, concept etiketi.
- Hedefli TS/prepare passed; tek odaklı seams UV/overscan düzeltmesi, kısa desktop/mobile/reverse-forward/keyboard/swipe/reduced/console kontrolü. İki PNG/3,88s WebM/JSON;533 korumalı dosya aynı. Gerçek harness/ops ayrıntıları [[BS3P-011-R2-HORIZONTAL-CYLINDRICAL-SHOWCASE]] içinde.
- Completed/D-016 implemented; görsel değerlendirme beklenir. Homepage entegrasyonu/dependency/Git/yayın yok.


## BS3P-012 — 2026-10-14 R2 homepage entegrasyonu
- Kullanıcı onaylanan R2 galerisini homepage'e taşıma yetkisi verdi. ProjectsShowcase sınırı/section sırası korunur; ortak renderer'a isteğe bağlı bölüm/heading/action seçenekleri, aynı native entry. R2 HTML birebir aynı; client geometry/art/motion değişmedi.
- Yaklaşık64,3/35,7 grid, H2/H3/yerel scopedCSS ve mevcut Tüm projeler bağlantısı. Üç gerçek kayıt/konsept kapak; hero/ref/services/approach/contact/footer/production/arşiv korunur.
- Hedefli TS/kısa desktop ileri/klavye geri, tek touch-reduced mobil görüntü;5/3 yüzey/taşma0/idle0/focus2px/console0. Initial harness/capture sorunları ve son yalnız PNG/hash tekrarları [[BS3P-012-R2-HOMEPAGE-INTEGRATION]] içinde.551 korumalı dosya/altı uygulama dosyası/iki PNG/JSON.
- Completed/D-017 implemented; R2 onayı kayıtlı, yeni homepage görünümü inceleme bekler. Dependency/Git/yayın yok.

| BS3P-018B | Onaylı homepage React entegrasyonu | completed | [[BS3P-018B-REACT-HOMEPAGE-INTEGRATION]]; gerçek `/`, ayrı bileşenler/tekprovider/aynı motorlar; TS-lint-build/kısa desktop-mobil-dil-swipe-fallback ve izolasyon geçti. 018C/019 finalQA ve kullanıcı incelemesi beklenir; deploy yok |

## BS3P-018C — 2026-10-15 Görsel ve hareket eşdeğerliği

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-018C | React/demo görsel ve hareket doğrulaması | completed | [[BS3P-018C-VISUAL-MOTION-PARITY]]; gerçekInstrumentSans/desktop-mobil/sabitölçüler/kısamotion eşleşti.275uygulamadosyası aynı; kod/CSS düzeltmesi yok. TS-lint/artifactverify geçti; yeni build yok. BS3P-019 finalQA ve kullanıcı onayı beklenir |

## BS3P-019 — 2026-10-15 Final QA & Release Readiness

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-019 | Production final QA ve yayın hazırlığı kararı | completed | [[BS3P-019-FINAL-QA-RELEASE-READINESS]]; **NOT READY**:B-019-01kalıcıpausea11y açık. Build/TS/lint/izolasyon/13route/3dil/Chromium/mobile/fallback/cleanup geçti. EN/DE2selector düzeltildi; mobilperf/dependencyaudit/browser/rollback riskleri açık. Yayın yok; kullanıcıonayı beklenir |


## BS3P-020 — 2026-10-15 Accessibility Blocker & Performance Fixes

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-020 | Kalıcı ortak hareket kontrolü, performans ve güvenli patch'ler | completed | [[BS3P-020-RELEASE-BLOCKER-FIXES]]; B-019-01 giderildi; tekminimalcontrol/gerçektimer-transition-RAFpause/TR-EN-DE/reduced/storage; LCP7.964→3.148s tekmobilpair,poster−87.42%large/−93.92%small;prodaudit0/full13devtoolchain. TS-lint-build/isolationpassed;Safari/CI22/lastartifact-rollback açık. Yeni koşulsuzREADY/yayın yok; kullanıcıincelemesi beklenir |


## BS3P-021 — 2026-10-15 Final Release Gate

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-021 | Son teknik yayın kapısı denetimi | completed | [[BS3P-021-FINAL-RELEASE-GATE]]; **READY WITH CONDITIONS**. Node22.23.3 yerel TS/lint/build/izolasyon passed; Safari remoteautomation kapalı/WebKit yok. Prodaudit0/full10high3moderate incelendi; lastPagesSHA teyitli/artifact0/rollbackprovası yok.55source+belgeler checkpoint manifesti/177hariçuserfile;296sourcehashaynı. Koşul/risk kabulü ve kullanıcıonayı beklenir; kod/staging/yayın yok |


## BS3P-022 — 2026-10-15 Release Candidate Git Checkpoint

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-022 | Seçili release candidate staging ve index denetimi | completed | [[BS3P-022-RELEASE-CANDIDATE-GIT-CHECKPOINT]];166staged(55source/111belge),185hariç(177user/8harness). Indexallowlist/mode/knownsecret/çatışma kontrolleri uygun;20mevcutbiçimuyarısı kaydedildi. HEAD1218e58aynı/yeniRCcommit yok; commitonayı beklenir. Kod/CSS/commit/push/merge/deploy yok |


## BS3P-023 — 2026-10-15 Safari selected-projects rendering

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-023 | WebKit silindirikgaleri boyama uyumluluğu | completed | [[BS3P-023-SAFARI-GALLERY-RENDERING-FIX]];nested3Dpaint izole/WebKitonlysamemathprojection; WebKitdesktop-mobil/controls/reducedpassed,Chromiumpixel0,TS-lint-build-isolationpassed. NativeSafariDriverkapalı/tamblankbirebirreproyok;manuelSafari kabulübeklenir.3appdosyası;staging/commit/push/merge/deployyok |


## BS3P-023B — 2026-10-15 Real Safari gallery follow-up

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-023B | Gerçek Safari boş poster yolunun düzeltilmesi | completed — user accepted 2026-10-15 | [[BS3P-023B-REAL-SAFARI-GALLERY-FIX]]; kullanıcı023sonucunu reddetti. Safari27.0nativeblank A/B; SVGuse→directimage ile poster görünür. Chrome/WebKitdesktop-mobil/Node22build-isolation passed; 023C talebinde kullanıcı gerçekSafari poster/animasyonunu onayladı. Önceki pending teslimin tarihsel kaydı023Braporunda. Tekappdosyası, staging/commit/push/merge/deploy yok |


## BS3P-023C — 2026-10-15 Safari refresh scroll review

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-023C | Yenileme scroll restoration teşhisi | completed — user accepted BS3P-024 | [[BS3P-023C-SAFARI-REFRESH-SCROLL-RESTORATION]]; native `/` refreshüst0/aşağı622korunur; #projects1093/geri622/ileri1093; #hero0→82 fragmentrepro. Appbugkanıtlanmadı/kod değişmedi.023Bgaleri kullanıcıkabulü kapandı; artifactizolasyonpassed, yeni build yok. Git/yayın yok |


## BS3P-024 — 2026-10-15 Release preparation

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-024 | Safari checkpoint staging, CI ve rollback hazırlığı | prepared — user approval / Ubuntu CI pending | [[BS3P-024-RELEASE-PREPARATION]];023B/Caccepted.4gallerysourcekorunur;feature-onlyreadpermUbuntu22workflow+prod-onlyHTTPcheck. YerelTS/lint/build/isolation/regressionpassed; gerçekUbuntu NOT RUN. SonPagesb8c38de/artifact0teyitli; rollbackrunbook/provasızyedekriski açık. Stagedallowlist/audit, commit/push/merge/deploy yok |


## BS3P-025 — 2026-10-15 Ubuntu CI Git history fix

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-025 | Foundation baseline için tam checkout geçmişi | completed — Ubuntu CI #2 verified in BS3P-026 | [[BS3P-025-UBUNTU-CI-GIT-HISTORY-FIX]];1218e58featureatası,depth1aynıhata/unshallowpass. Checkoutfetch-depth0;YAML/Node22foundation/diffcheckpassed. Foundation/prod/Safari/permissionsaynı; staging/commit/push/deployyok |


## BS3P-026 — 2026-10-15 Production release preflight

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-026 | Production yayın/rollback preflight | completed audit — RELEASE BLOCKED B-026-01 | [[BS3P-026-PRODUCTION-RELEASE-PREFLIGHT]];RCc332/GitHubsenkron/CI#2allstepssuccess,masterlastdeployb8c38de/mainyok. Diverged5/1ama productiontree=mergebase/conflictdüşük. PrototipözelgenericMP4exportkaçağıkanıtlı; ayrıca fix/yeniRC/CI gerekir. Oldartifact0/rollbackprovasıveSettings/devsecurityriskleriaçık. Sadeceinceleme/belge; Git/yayın/appcodeyok |


## BS3P-029 — 2026-10-15 Live hero visual sharpness

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-029 | Hero canvas/DPR netlik teşhisi; galeri yalnız teşhis | diagnosed — followed up by029B; no fix confirmed | [[BS3P-029-LIVE-HERO-SHARPNESS]];fixbranch/livebasedb53596. Live/localFHD1xpixel0,AAtrue/MSAA4;DPR2cap1.5ve1→2staleratiokanıtlı. İlkMacoturumundaUserWindowsDPR/zoomyoktu;sonrakiDPR1/029Besas,hardwareperfölçülmedi;qualityartışı/appfixyok. Galeri/Safarifixi korunur; TS/build/SafariQA gereksiztekraryok. Commit/push/deployyok |


## BS3P-029C — 2026-10-16 Mac / Windows kayıt birleştirme

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-029C | Mac stash / Windows 562d770 / yerel Obsidian kayıtlarını birleştirme | completed — documentation only; Windows evidence transfer pending | [[BS3P-029C-OBSIDIAN-RECORD-MERGE]]; 026/029/029B geçmişi korunur, D-034 çakışması D-036 eşlemesiyle giderilir. 029B görselleri yerelde yok; app/Git index/stash değişmez. Hero çözümü doğrulanmadı; kullanıcı incelemesi beklenir |


## BS3P-030 — 2026-10-16 Mobil referans marquee

| ID | Görev | Durum | Bağımlılık / kabul ölçütü |
|---|---|---|---|
| BS3P-030 | Mobil referansları tek satır native-touch marquee’ye dönüştür | completed — user visually approved | [[BS3P-030-MOBILE-REFERENCES-MARQUEE]];320/375/390/desktop piksel eşitliği/touch/reduced/globalpause/Chromium-WebKit galeri/TS/lint/build-isolation geçti. Kullanıcı mevcut tasarımı şimdilik görsel onayladı; gerçek cihaz test iddiası yok. Master üzerinde yerel checkpoint yetkili; push/deploy yok |

| BS3P-031 | Sitewide Page Inventory & Skeleton Migration | completed — approved skeleton released; final QA and live smoke passed | [[BS3P-031-SITEWIDE-PAGE-INVENTORY]];app c44fa17/105files;Pages38932198707build+deploysuccess;live13routes+12mobile+12aliases/8roundtrips;local117states/15modals/6coldposter/TS-lint-build-foundation-export-accesspassed. SmartHospital/content/catalogpolishdeferred |

| BS3P-032 | Sitewide Header & Navigation Audit | completed — user approved; fast release authorized 2026-10-19 | [[BS3P-032-SITEWIDE-NAVIGATION-AUDIT]];5live targets200/18live states;36local states/130clicks/8logos/history/menu/TS-lint-foundation-buildpassed;3existingnavsources+shareddata;noCSS/content/release |
