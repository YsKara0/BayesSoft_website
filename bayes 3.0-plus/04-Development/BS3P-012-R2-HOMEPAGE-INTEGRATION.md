# BS3P-012 — Onaylanan R2 galerisinin homepage entegrasyonu

**Tarih:** 2026-10-14  
**Durum:** completed — entegrasyon teslim; homepage görünümü kullanıcı incelemesini bekler.  
**Yetki:** Kullanıcının “R2 PROJECT SHOWCASE INTEGRATION” talebi; BS3P-011 R2 bu talepte onaylanan bileşen olarak belirtilmiştir.  
**Dal:** `feature/bayessoft-3.0-plus`  
**Rota:** http://127.0.0.1:3000/prototype/bs3p-homepage  
**Karar:** D-017 implemented. Production/yayın veya tam homepage kabulü değildir.

## Entegrasyon
Mevcut `ProjectsShowcase` bölüm sınırı ve `selected-projects` ID'si korunarak placeholder DOM'u ortak R2 `GalleryShowcase` çağrısıyla değiştirildi. Önceki `renderVisual` yalnız tek görseli değiştiren bir arayüzdü; senkron üç proje için readonly `projects` listesi artık ortak galeriye verilir. Eski placeholder kaynak dosyası silinmedi; sayfada render edilmez.

Ortak renderer'a isteğe bağlı `id`, `headingLevel`, `className`, `renderHeadingAction` seçenekleri; `GalleryInfo`'ya başlık seviyesi eklendi. Homepage bölüm başlığı H2, aktif proje H3; bağımsız R2 varsayılan H1/H2'si aynen kalır. Native HTML çıktısı entegrasyon öncesi kaydedildi ve son hâlle **SHA-256 eşitliği** doğrulandı. R2 route/header/CSS/kapak/geometri/client runtime değişmedi; iki küçük server renderer genişlemesi varsayılan çıktıyı değiştirmez.

Homepage composer mevcut R2 `entry.js` modülünü yalnız bir kez yükler. İkinci motor, WebGL, React client bundle veya yeni dependency eklenmedi. Aynı entry/controller/state/stage/swipe/lifecycle kullanılır; autoplay ve idle render döngüsü yok. Mevcut pagehide/destroy/AbortController/ResizeObserver temizliği korunur. Görünmez galeride sürekli animasyon çalışmaz; başlatma yalnız statik geometri ve kontrol kurulumudur.

## Homepage uyarlaması ve korunanlar
- Bölüm sırası: Hero → Referanslar → Projeler → Hizmetler → Yaklaşım → İletişim → Footer.
- “Seçili projeler” ve “İşlerimiz konuşsun.”; mevcut “Tüm projeler” `/projeler` bağlantısı bölüm başlığında korunur. İlk entegrasyonda atlanan bağlantı teslimden önce geri eklendi; yeni CTA üretilmedi.
- Homepage grid'inde yaklaşık64,3/35,7 oran: desktop802,281px galeri/445,719px bilgi,64px aralık. Mevcut silindir geometri formülü korunur;500px desktop/340px mobil viewport ve bölüme ait104/64px dikey boşluk. Komşu kenar kesitleri görünür, merkez kapak kırpılmaz.
- Ortak R2 stylesheet yeniden kullanılır; yerel override'lar yalnız `#selected-projects` altında. Instrument Sans, soğuk nötr zemin ve BayesSoft mavisi mevcut sisteme bağlanır. Bağımsız prototip header/footer/debug bölümleri taşınmadı.
- Atlı Logistics, FurtherUp Drive ve AI-Powered Chatbot Platform aynı doğrulanmış `showcaseProjects` sağlayıcısından gelir. Konsept kapaklar/görünür üç proje etiketi aynıdır; gerçek client UI/screenshot, yeni müşteri veya metrik yok.
-9 ortak silindir konumu×13 kavis dilimi,40° dönüş, komşu yüzeyler;1040ms desktop/700ms mobil, ileri/geri/klavye/swipe, settle sonrası senkron başlık/kategori/açıklama/link, reduced-motion ve sabit final korunur. Bu tur mekanik veya kapaklar yeniden tasarlanmadı.

## Gerçek kısa doğrulama
- `node node_modules/typescript/bin/tsc -p prototypes/bs3p-homepage/tsconfig.check.json --jsx preserve` passed. Veri kaynağının type-only TSX bağımlılığı için komut bayrağı kullanıldı; config/production build hook değiştirilmedi. İlk entegrasyon ve mevcut başlık bağlantısı geri eklendikten sonra çalıştırıldı; full build/lint yok.
- Desktop1440×1000 normal motion: galeri5 görünür yüzey,9 panel/117 dilim, yatay taşma0, idle animation0. Bir ileri düğmesi0→1/FurtherUp Drive/doğru href; odaklı ArrowLeft1→0/Atlı Logistics/doğru href; final animation0/focus-visible2px. Geniş wrap/swipe matrisi tekrarlanmadı.
- Tek375×812/touch/reduced-motion mobil:3 görünür yüzey, taşma0 ve idle animation0. Mobil normal animasyon/swipe bu tur yeniden test edilmedi; aynı byte-identical R2 runtime korunur.
- Header/hero/referanslar/hizmetler/yaklaşım/iletişim/footer ham HTML markup'ları önce→sonra eşit; bölüm sırası aynı. Bağımsız R2 default HTML hash'i eşit. Pageerror0/başarısız kaynak0.
- İlk desktop-only pass beyaz zemin varsayan piksel sayımında durdu; mineral gri zemin karşılaştırmasıyla harness düzeltildi, uygulama değişmedi. Sabit bekleme hero hazırlık ekranını yakaladığından test tarayıcısında software GPU ve mevcut final-ready durumu kullanıldı. Son kısa desktop/mobile/ileri-geri pass geçti.
- Test tarayıcısında tam sayfa screenshot, original hero WebGL katmanını final-ready8.400/running=false olmasına rağmen göstermedi. Sebebi uygulama kodunda doğrulanmadı; hero değiştirilmedi. Son desktop kanıtı homepage'in proje bölümündeki gerçek viewport'tan alınır; mobil tam sayfadır. Başlık bağlantısı geri eklendikten sonra yalnız final PNG'ler ve bağımsız R2 HTML eşitliği tekrarlandı; motion QA tekrarlanmadı.
-551 korumalı dosya aynı: hero/referanslar/diğer homepage bölümleri/production/arşivler/package/config/veri/yönergeler/original prototipler/MP4/MOV ve önceki not/kanıtlar. R2 geometri/art/CSS/JS korunur. Yalnız aşağıdaki altı uygulama dosyası değişti.

## Değişen uygulama dosyaları
1. `app/prototype/bs3p-homepage/route.ts` — üç doğrulanmış kaydı mevcut bölüm wrapper'ına verir.
2. `app/prototype/bs3p-homepage/compose.ts` — aynı R2 entry modülünü ekler; hero script'leri aynıdır.
3. `app/prototype/bs3p-homepage/sections/ProjectsShowcase.ts` — ortak galeri adapter'ı/başlık hiyerarşisi/mevcut proje-listesi linki.
4. `public/prototype-assets/bs3p-homepage/projects.css` — ortak stiller ve yalnız proje bölümünün spacing/grid/token/focus uyarlamaları.
5. `app/prototype/bs3p-project-showcase-r2/GalleryShowcase.ts` — geriye uyumlu isteğe bağlı bölüm/header seçenekleri.
6. `app/prototype/bs3p-project-showcase-r2/GalleryInfo.ts` — geriye uyumlu H2/H3 seviyesi.

Bu not, TASK_REGISTER/CURRENT_STATUS/NEXT_STEPS/SESSION_LOG/günlük/REVIEW_REGISTER/DECISION_LOG güncellendi; geçmiş ve BS3P-011 not/kanıtları korunur.

## Kanıt / açık sınırlar
- [[../07-Reviews/evidence/BS3P-012-homepage-desktop.png]] —1440×1000, homepage proje bölümü.
- [[../07-Reviews/evidence/BS3P-012-homepage-mobile.png]] —375px tam homepage; viewport375×812/reduced-motion.
- [[../07-Reviews/evidence/BS3P-012-integration-check.json]] — gerçek kontrol, tekrar/kapsam ve capture sınırlaması.

Kısa galeri entegrasyon kontrolünde açık işlev/taşma hatası kalmadı. Desktop full-page WebGL capture kısıtı yukarıda açıktır; gerçek cihaz/Safari/SR/normal mobil swipe/performance/final QA yapılmadı. Nihai client UI görselleri, EN/DE homepage içeriği ve D-006 release izolasyonu ayrı kapsamdır. Yerel server açık; yeni dependency/commit/push/merge/deploy yok. Dur ve homepage değerlendirmesini bekle.
