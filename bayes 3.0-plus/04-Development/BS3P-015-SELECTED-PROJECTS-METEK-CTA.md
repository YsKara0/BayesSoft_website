# BS3P-015 — FurtherUp / Reviel / Metek seçili vitrin ve CTA güncellemesi

**Tarih:** 2026-10-14  
**Durum:** completed — prototip teslim, kullanıcı incelemesi beklenir.  
**Dal:** `feature/bayessoft-3.0-plus`  
**Homepage:** http://127.0.0.1:3000/prototype/bs3p-homepage#selected-projects  
**Bağımsız R2:** http://127.0.0.1:3000/prototype/bs3p-project-showcase-r2

## Uygulama
İki rota aynı readonly `selectedProjects` registry'sini tüketir. Homepage veri modülü ortak R2 registry'sini yeniden export eder. Sıra **FurtherUp Drive → Reviel → Metek Makina**; AI/Atlı yalnız bu iki aktif vitrinden çıkarıldı. Production kayıtları/detayları/kapakları ve tarihsel R1 galerisi korunur. Önceki bağımsız R2 seçimlerini koruma kararı bu görevde kullanıcının açık senkron talebiyle güncellendi; production yetkisi değildir.

FurtherUp açıklaması/metadata/posteri ve `/projeler/furtherup-drive` aynıdır. Reviel ve Metek için kullanıcının verdiği başlık/kategori/teknoloji etiketi/açıklama aynen uygulandı:
- Reviel: `Dermokozmetik / Eczane odaklı cilt bakımı`; `ASP.NET / HTML / CSS / JavaScript / C#`; “Egzama ve hassas cilt odaklı ürünleri öne çıkaran, ürün tanıtımı ve ürün sayfaları içeren dermokozmetik marka sitesi.”
- Metek Makina: `Endüstriyel sistemler / Makine mühendisliği`; `Kurumsal web / Endüstriyel ürün sunumu`; “Alüminyum döküm, ekstrüzyon ve yüzey işlem alanlarına yönelik mühendislik çözümlerini ve sistemlerini tanıtan endüstriyel kurumsal web sitesi.”

CTA metni **Projeyi inceleyin**. Reviel `https://www.reviel.com.tr/`, Metek `https://metekmakina.com/urunler`; gerçek dış site linkleri, yerel sahte detay rotası yok. İki URL web aracıyla açıldı; [Reviel](https://www.reviel.com.tr/) ve [Metek ürünler](https://metekmakina.com/urunler) kaynakları erişilebilir çıktı. Backend/framework/DB/ödeme veya kozmetik formül geliştirme iddiası eklenmedi; Reviel tech kullanıcı bilgi kaynağıdır.

GalleryProject yalnız HTTPS dış URL desteğiyle genişledi; R1 ShowcaseProject tipi aynı. R2 entry doğrulaması yerel proje/null ve geçerli HTTPS URL'leri kabul eder, kullanıcı bilgisi içeren URL'leri reddeder. Renderer CTA metni ve controller erişilebilir link ismi güncellendi. Motion/state/geometry/stage/swipe/easing/perspective/CSS hiç değişmedi; yeni motor/Three.js/dependency/refactor yok.

## Poster ve açık asset farkı
FurtherUp1080×1457, Reviel1080×1456 ve Metek1081×1455; mevcut1280×1600 SVG meet yerleşimi tam görsel/oranları korur. Her projenin üç tekrarı aynı symbol/görseli paylaşır. Orijinal asset'ler değiştirilmedi; üç public dosya kaynakla byte-identical. Metek kopyası yeni, Reviel kopyası mevcut kaynakla aynı kaldı. Yanlarda küçük boşluk olabilir; kırpma/esnetme yok, doğal silindir perspektifi korunur.

**Açık:** “Son minimalist Reviel” için ayrı dosya bulunamadı; yalnız mevcut `assets/projects/reviel-cover.png` hibrit kompozisyon var. Kullanıcıya dosya yolu sorusu iletildi; yanıt gelmeden mevcut kaynak kullanıldı. Yeni poster üretilmedi, orijinal değiştirilmedi. Ayrı minimalist asset sağlanırsa yalnız asset bağı revizyonu gerekir.

## Hızlı gerçek kontrol
- R2 prepare strict hedefliTS ve homepage `tsc -p prototypes/bs3p-homepage/tsconfig.check.json --jsx preserve` passed.
- Tek desktop1440×1000: doğru üçlü/korunan FurtherUp href; ileri→Reviel/ileri→Metek, ikisinde görünür/doğru CTA ve poster. İlk1040ms gözlendi; klavye geriMetek→Reviel, finalidle0/taşma0/9panel117dilim.
- Tek mobil375×812 normal: FurtherUp→Reviel700ms; doğru dışhref ve tam poster. Aynı mobilde reduced-motion açılıp Metek anlık seçildi; idle0/taşma0 ve doğruhref/tam poster. İki viewport screenshot/iki mobil tam-bölüm screenshot.
- Homepage ve bağımsız R2 JSON veri kayıtları birebir eşit. Bağımsız R2 bu tur kaynak/runtime render'ıyla tam yeniden gezilmedi; ortak verisi HTTP HTML çıktısında kontrol edildi.
- Pageerror0/failed-resource0. CTA DOM href'leri doğrulandı ve hedef siteler web aracıyla açıldı; native CTA click ile tam dış-site navigation testi yapılmadı.
-511 source/asset/archive başlangıç dosyasından503 aynı;8 mevcut uygulama dosyası değişti,2 yeni uygulama/asset. Hero/Three/prizma/referanslar/diğer bölümler/production/data/arşiv/R1/AI-Atlı kapakları/orijinal posterler aynı.
- Full build/lint/uzun Playwright/video/gerçek cihaz/Safari/SR/swipe matrisi/yükleme gecikmesi/performans/finalQA yok. İlk patch aracı aynı dosya delete/add işlemini reddetti; değişiklik uygulanmadan hedefli dosya yazımıyla tamamlandı. Tarayıcı testleri tek geçişte tamamlandı, tekrar yok.

## Değişen uygulama dosyaları
1. `app/prototype/bs3p-project-showcase-r2/project-data.ts` — yeni ortak registry.
2. `app/prototype/bs3p-homepage/project-data.ts` — ortak registry export.
3. `app/prototype/bs3p-project-showcase-r2/route.ts` — aynı seçili veri import.
4. `app/prototype/bs3p-project-showcase-r2/GalleryInfo.ts` — CTA metni.
5. `prototypes/bs3p-project-showcase/types.ts` — yalnız GalleryProject HTTPS desteği.
6. `prototypes/bs3p-project-showcase-r2/entry.ts` — HTTPS doğrulaması.
7. `prototypes/bs3p-project-showcase-r2/controller.ts` — yalnız erişilebilir CTA ismi.
8. `public/prototype-assets/bs3p-project-showcase-r2/entry.js` — üretilmiş çıktı.
9. `public/prototype-assets/bs3p-project-showcase-r2/controller.js` — üretilmiş çıktı.
10. `public/prototype-assets/bs3p-homepage/metek-makina-cover.png` — yeni orijinal kopyası.

Task/current/next/session/günlük/decisionD-020/review ve bu not güncellendi; eski kayıtlar/kanıtlar korunur.

## Kanıt
- [[../07-Reviews/evidence/BS3P-015-reviel-desktop.png]]
- [[../07-Reviews/evidence/BS3P-015-metek-desktop.png]]
- [[../07-Reviews/evidence/BS3P-015-reviel-mobile.png]]
- [[../07-Reviews/evidence/BS3P-015-metek-mobile.png]]
- [[../07-Reviews/evidence/BS3P-015-check.json]]

Server3000 açık. Commit/push/merge/deploy yok. BS3P-006 release izolasyonu/genel homepage kabulü/finalQA ayrı kapsam; kullanıcı onayı beklenir.
