# BS3P-016 — Homepage production hazırlığı: dil / navigasyon / hero / aksiyonlar / footer

**Tarih:** 2026-10-14  
**Durum:** completed — prototip polish teslim, kullanıcı incelemesi beklenir. Production entegrasyonu veya final QA kabulü değildir.  
**Dal:** `feature/bayessoft-3.0-plus`  
**Rota:** http://127.0.0.1:3000/prototype/bs3p-homepage

## Uygulanan sonuç
- Header mevcut wordmark ile Ana Sayfa/Projeler/Hizmetler/İletişim → yerel #hero/#selected-projects/#services/#contact. TR/EN/DE gerçek button/aria-pressed; CTA mevcut gerçek e-posta aksiyonu. Mobil details/Escape ve bölüm tıklamasında kapanma korunur. Tüm projeler bilinçli olarak mevcut /projeler rotasına gider; header bölüm linkleri production'a yönlendirmez.
- Merkezi `HomepageCopy` / `CopyKey` / `HomepageLocale` ve production `Locale` tipi. TR/EN/DE header/dört hero mesajı/prizma-dot aria/referans başlığı ve aria/proje UI ve metadata/hizmetler/iletişim/footer/durum etiketleri çevirileri. Teknik/marka isimleri ve posterler aynı; Metek sunum etiketi doğal çevrilir. Üç dil sözlüğü güvenli JSON olarak server tarafından eklenir, client yalnız DOM metin/aria günceller. Scene/prism/gallery yeniden kurulmaz, page reload veya /en-/de rotası yok.
- Production LanguageProvider mimarisi okunarak aynı `bayessoft-locale` anahtarı/saved→browser→tr sırası kullanıldı. Depolama engelinde bellek içi seçim çalışır. Production provider/i18n değişmedi. Html lang ve title güncellenir. Prizma kernel'ine verilen aynı dört mesaj array'i dil değişiminde yerinde güncellenir; manuel duyurular yeni metni kullanır. Görsel Three.js illüstrasyonundaki dekoratif yüzey yazıları orijinal sanat/sahne olarak korunur; erişilebilir açıklama/replay/status lokalizedir.
- Homepage'e özel CSS: dört plate-face hero `--stage` zeminine eşit, border0/shadownone. Dönüş sırasında aynı yüzlere900ms yumuşak ışık overlay'i; durunca sakin zemine döner. Dört fiziksel yüz/X90°/540kolon-420yükseklik/kare kesit/5000+900ms kernel/otomatikloop/dot/hover-focus/reduced aynı. Almanca/İngilizce ilk mesaj sadece type-fit boyutu ayarlanır; geometri aynı. Sağ Three.js renderer/material/timeline/entry aynıdır.
- Homepage merkezi modelinde `detailHref` yalnız doğrulanmış iç detay veya null; ayrı `liveHref`. FurtherUp mevcut production site+detail kaydıyla `/projeler/furtherup-drive` ve `https://drive.further-up.net` kullanır. Reviel/Metek site/detail kaynaklarında yerel route yok; null detay/href'siz gizli CTA, sahte buton yok. Canlı linkler sırasıyla `https://www.reviel.com.tr/`, `https://metekmakina.com/urunler`; üçünde target_blank/rel noopener noreferrer/harici↗/yeni sekme aria-title. FurtherUp canlı URL iki yerel kaynakta aynı ve web aracıyla açıldı: [FurtherUp Drive](https://drive.further-up.net/).
- İki aksiyon minimal metin bağlantısı; iç detay aynı sekme, canlı ikincil/new-tab. Ortak R2 renderer/tek controller/geometri yeniden kullanılır. Homepage-only adapter yerel model/metin/live CTA'yı senkronlar, ortak controller readonly referansı aynı array'i okur. Shared controller/kamera/perspektif/curve/swipe/duration/state değişmedi.
- Çalışma yaklaşımı import ve render kaldırıldı; eski Approach.ts/historical notlar durur. Sıra Hero→Referanslar→Seçili projeler→Hizmetler→İletişim→Footer. Hizmetler sırf production'a yönlendiren dekoratif linkler yerine semantik article olur.
- Footer wordmark/tek kısa marka cümlesi/yerel4nav/mevcut production sosyal GitHub-LinkedIn-X/gerçek e-posta/telif/üç dil. İnce separator/light zemin/mobil2kolon. Adres/telefon/yasal URL eklenmedi; mevcut yasal route yok.

## Gerçek hedefli kontroller
- `node prototypes/bs3p-homepage/prepare.mjs`: hedefli strict TS --jsx preserve passed; yalnız üç homepage ESM dosyası üretildi. Sadece homepage config *.ts include genişletildi, package/build hook değişmedi.
- `node node_modules/eslint/bin/eslint.js app/prototype/bs3p-homepage prototypes/bs3p-homepage --quiet` passed. Son küçük locale duyuru/lifecycle düzenlemesinden sonra iki kontrol tekrarlandı; kapsamlı build/lint yok.
- Tek desktop1440×1000 normal: dört yüz/dört nokta/900ms CSSduration; doğal ilk−90° tamamlanışı ve hoverpaused. Scene final-ready/final görünüm beklendi, gerçekviewportPNG. TR/EN/DE aynı rota/lang/doğru metin ve taşma0; uzunAlmanca kontrolünde taşma0. Header services hash, yeni section sırası ve FurtherUp iki URL doğrulandı. Galeri kısaileriReviel/ileriMetek: eksikdetay hidden/null, doğru canlıURL. Yeni sekme target/rel kontrol edildi; native dışnavigation yapılmadı.
- Tek mobil375×812/touch/reduced: DE başlangıcı/metin/taşma0, Escape/detailskapanma, EN/TR dil seçimi ve yerelcontacttıklamasında menükapanma geçti. Son tercih reload assertion'ında harness kendi addInitScript'i DE'yi her yüklemede yeniden yazdı; beklentiTR/gerçekDE olduğundan durdu. Bu uygulama tercih hatası kanıtı değildir. Round-trip tercihi bağımsız retest edilmedi; bu sınırlama kaydedildi.
- EksikmobilPNG için yalnız bir statik capture yapıldı; seed sadece boşstorage'aTR koydu, tamhomepagePNG/langTR/taşma0/pageerror0/failedresource0. Desktop/motion/dilmatrisi tekrar edilmedi. JSON desktop/mobililkpass assert sonuçlarını özetler; ilkpassham snapshot/consoletelemetry saklanmadı, errors/failed alanları yalnız finalmobilcapture kapsamındadır.
-513 source/asset/archive başlangıç dosyasından504 aynı;9 mevcut dosya değişti,12 yeni uygulama/asset/config dosyası. Production/data/i18n/provider, tüm orijinal hero/Three/R1/R2 kaynak-runtime-CSS, referans renderer/CSS/asset, tüm posterler/eski kasalar/package/yönergeler aynı.
- Safari/gerçek cihaz/performance/SR/genişa11y/normalmobilmotion-swipe/finalQA/uzunPlaywright/video/fullbuild yok. Kullanıcı fast sınırı izlendi; tercih harness hatası sonrası uzun test tekrarı yapılmadı.

## Değişen mevcut dosyalar
- `app/prototype/bs3p-homepage/content.ts`, `route.ts`, `compose.ts`, `project-data.ts`.
- `app/prototype/bs3p-homepage/sections/Services.ts`, `Contact.ts`, `SiteFooter.ts`, `ProjectsShowcase.ts`.
- `prototypes/bs3p-homepage/tsconfig.check.json`.

## Yeni dosyalar
- `app/prototype/bs3p-homepage/i18n.ts`, `copy.ts`, `hero-adapter.ts`, `sections/Header.ts`.
- `prototypes/bs3p-homepage/entry.ts`, `locale.ts`, `gallery.ts`, `prepare.mjs`.
- `public/prototype-assets/bs3p-homepage/entry.js`, `locale.js`, `gallery.js`, `polish.css`.

Bu not/task/current/next/session/günlük/decisionD-021/review ve ikiPNG/JSON güncellendi. Önceki not/kanıtlar silinmedi.

## Kanıt / production öncesi açıklar
- [[../07-Reviews/evidence/BS3P-016-desktop.png]] —1440×1000 gerçekviewport/normalmotion; header/hero/sahne/referansbaşı.
- [[../07-Reviews/evidence/BS3P-016-mobile.png]] —375px tamhomepage/reduced; galeri/ikiaksiyon/hizmet/iletişim/yenifooter.
- [[../07-Reviews/evidence/BS3P-016-check.json]] — başarılı assert özeti/harness sınırlaması/capturetelemetry.

Reviel ve Metek BayesSoft detay sayfaları hâlâ yok; ayrı production içerik talebi gerektirir. Hukuki sayfalar/ref kullanım teyidi/production izolasyonu/finalQA ve çeviri kullanıcı kabulü açık. Reviel tech bağımsız GitHub teyidi önceki kayıtta eksik; yeni iddia eklenmedi. Tercih round-trip kontrolü harness sınırlı. Server3000 açık; commit/push/merge/deploy yok. Kullanıcı onayı beklenir.
