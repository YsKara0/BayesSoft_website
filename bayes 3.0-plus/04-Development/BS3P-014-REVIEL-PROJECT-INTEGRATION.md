# BS3P-014 — Reviel Project Integration

**Tarih:** 2026-10-14  
**Durum:** completed — homepage önizlemesi teslim, kullanıcı onayı beklenir.  
**Dal:** `feature/bayessoft-3.0-plus`  
**Rota:** http://127.0.0.1:3000/prototype/bs3p-homepage#selected-projects

## Kapsam ve içerik
Homepage seçili sırası **Reviel → FurtherUp Drive → AI-Powered Chatbot Platform**. Atlı yalnız bu listeden filtrelenir; production merkezi kayıtları, detay sayfası, kapakları ve bağımsız R1/R2 seçimleri aynı. Homepage'e ait merkezi `project-data.ts` mevcut galeri modelinden türetilen readonly registry'yi taşır; route yalnız registry'yi tüketir. Production `data/site.ts` / `data/projectDetails.ts` değişmedi.

Reviel adı `Reviel`, kategori `Skincare / Digital Experience`, açıklama: **Cilt bakımı markası Reviel için geliştirilen, ürünleri ve marka kimliğini öne çıkaran dijital web deneyimi.** BayesSoft'a kozmetik/formül geliştirme iddiası eklenmedi.

Teknoloji **ASP.NET / C# / HTML / CSS / JavaScript**, kullanıcının verdiği GitHub ekran görüntüsü yapısına ilişkin bilgiye dayanır. Bu oturumda ilgili repository bulunamadı; bağımsız kod doğrulaması yapılmış sayılmaz. Tam framework sürümü, DB sistemi ve ödeme/e-ticaret iddiası eklenmedi. Resmî [Reviel sitesi](https://www.reviel.com.tr/) ve [ürünler alanı](https://www.reviel.com.tr/Home/Products) web üzerinden görüldü; bunlar ürün/marka web deneyimini destekler, backend teknoloji kanıtı değildir.

## Eksik detay bağlantısı ve minimal ortak destek
Yerel `data/site.ts` / `data/projectDetails.ts` içinde Reviel kaydı yok. Dinamik detay sayfası iki kaydı da gerektirir; `/projeler/reviel` üretilmedi, yeni production detay sayfası açılmadı.

Mevcut zorunlu detay modelini R1 için aynen bırakan additive `GalleryProject` tipi yalnız `detailHref: null` desteği ekler. Ortak R2 server renderer/entry veri doğrulaması ve controller'ın bilgi-link sunumu, olmayan detay bağlantısını gizleyip href'i kaldırır; sonraki projede gerçek href yeniden görünür. JS kapalı başlangıç da sahte link içermez; noscript metni yalnız görselden söz eder. Proje adına özel animasyon koşulu yok.

Bağımsız R2 seçili kayıtları, kapaklar ve server HTML çıktısı **birebir aynı**; ortak kaynak/type ve üretilmiş controller/entry dosyaları bu genel link desteği nedeniyle değişti. Runtime byte-identical iddiası yok. Stage/geometri/perspektif/rotor/easing/duration/state/swipe/reduced kodu ve CSS dosyaları değişmedi; Three.js/dependency/yeni motor/refactor yok.

## Poster
Orijinal `assets/projects/reviel-cover.png`1080×1456 değişmedi; public homepage kopyası byte-identical. Mevcut SVG image1280×1600/sabit alan/`xMidYMid meet` tam görseli oranını koruyarak gösterir; kırpma/esnetme/gereksiz büyütme yok, her yanda yaklaşık%3,64 boşluk. Üç Reviel paneli aynı symbol/39 dilim üzerinden aynı posteri paylaşır. FurtherUp PNG ve AI SVG artwork aynı.

## Hızlı gerçek doğrulama
- `node prototypes/bs3p-project-showcase-r2/prepare.mjs` strict hedefli TS passed; yalnız güncel R2 runtime üretildi.
- `node node_modules/typescript/bin/tsc -p prototypes/bs3p-homepage/tsconfig.check.json --jsx preserve` passed. Full build/lint yok.
- Tek desktop1440×1000: yeni sıra, Reviel tam poster/kategori/metin/teknoloji, görünmeyen/href'siz detay CTA, taşma0/9panel/117dilim/üç aynı symbol. DesktopPNG homepage proje viewport'u.
- Kısa ileri0→1/FurtherUp (1040ms/doğru detay linki görünür), klavye geri1→0/Reviel (href kaldırılır/CTA gizli), final idle animation0. Rotation/geometri değişmedi; geniş wrap/input/swipe matrisi tekrarlanmadı.
- Mobil375×812/touch/reduced statik: Reviel tam poster/tek kolon/taşma0/idle0/href yok. İlk mobil screenshot viewport dışı clip nedeniyle başarısız oldu; yalnız mobil statik capture fullPage+clip ile düzeltildi, desktop/motion tekrar edilmedi. Desktop sonuçları başarılı assert'lerden JSON'a kaydedildi; ham snapshot/console-resource telemetrisi saklanmadı.
- Bağımsız R2 server HTML SHA-256 önceki BS3P-012 çıktısıyla eşit. Snapshot508 source/asset/archive dosyasından497 aynı,11 mevcut uygulama dosyası değişti; iki yeni uygulama/asset dosyası eklendi. Korunan hero/ref/diğer bölümler/production/data/arşiv/posterler aynı.
- Video/uzun Playwright/fullQA/normal mobil swipe/motion/gerçek cihaz/Safari/SR/performance/CLS matrisi yapılmadı. Sabit SVG ölçüleri aynıdır; bu tur yükleme-gecikmesi testi tekrarlanmadı.

## Değişen dosyalar
1. `app/prototype/bs3p-homepage/project-data.ts` — yeni merkezi prototip registry/Reviel/selected sıra.
2. `app/prototype/bs3p-homepage/route.ts` — registry import.
3. `app/prototype/bs3p-homepage/sections/ProjectsShowcase.ts` — GalleryProject type.
4. `app/prototype/bs3p-project-showcase-r2/GalleryShowcase.ts` — nullable type/noscript.
5. `app/prototype/bs3p-project-showcase-r2/GalleryInfo.ts` — nullable type/href'siz gizli CTA.
6. `app/prototype/bs3p-project-showcase-r2/GalleryStage.ts` — yalnız type.
7. `app/prototype/bs3p-project-showcase-r2/cover-art.ts` — yalnız type.
8. `prototypes/bs3p-project-showcase/types.ts` — additive GalleryProject type; R1 modeli korunur.
9. `prototypes/bs3p-project-showcase-r2/controller.ts` — yalnız genel link sunumu/type.
10. `prototypes/bs3p-project-showcase-r2/entry.ts` — nullable detay veri doğrulaması/type.
11. `public/prototype-assets/bs3p-project-showcase-r2/controller.js` — üretilmiş link desteği.
12. `public/prototype-assets/bs3p-project-showcase-r2/entry.js` — üretilmiş veri doğrulaması.
13. `public/prototype-assets/bs3p-homepage/reviel-cover.png` — orijinal poster kopyası.

Task/current/next/session/günlük/D-019/review ve bu not güncellendi; önceki kayıtlar korunur.

## Kanıt ve açık kapılar
- [[../07-Reviews/evidence/BS3P-014-homepage-desktop.png]]
- [[../07-Reviews/evidence/BS3P-014-homepage-mobile.png]]
- [[../07-Reviews/evidence/BS3P-014-check.json]]

Açık: Reviel BayesSoft detay sayfası yok; ilgili GitHub repository erişimi/koddan teknoloji teyidi yapılmadı. Bu eksikler yeni production işi için izin sayılmaz. BS3P-006 release izolasyonu/finalQA ve genel homepage kabulü sürer. Commit/push/merge/deploy yok; server3000 açık. Kullanıcı onayı beklenir.
