---
project: BayesSoft 4.0
created: 2026-10-13
status: planned-not-implemented
tags: [bayessoft-4, prototypes, roadmap]
---

# Prototip geliştirme planı

Bu belge gelecek çalışma planıdır. Bu görev yalnız kasayı oluşturur; üç rota, 3D sahne ve yeni bağımlılıklar henüz oluşturulmadı. Foundation tesliminden sonra durulur ve kullanıcı onayı beklenir.

## Rotalar ve kapsam

| Konsept | Planlanan rota | İlk prototipin sorusu |
|---|---|---|
| A — Modular Assembly | `/prototype/v4-modular` | Dört parça anlaşılır bir yazılım sistemi oluşturuyor mu? |
| B — Kinetic Architecture | `/prototype/v4-kinetic` | Dönüşen yüzeyler uyarlanabilirliği ve hizmetleri anlatıyor mu? |
| C — Living Network | `/prototype/v4-network` | Bağlantılar dört dengeli hizmetin ilişkisini açıklıyor mu? |

Başlangıç yalnız 3D sahne, kısa hareket ve bir temel etkileşimdir. Sahneye bağlı hizmet etiketleri, erişilebilir kontrol ve statik alternatif bu kapsamın içindedir. Tam ana sayfa, header, footer, üretim sayfaları, vaka vitrini veya pazarlama bölüm dizisi yapılmaz.

## Uygulama öncesi hazırlık

- Kullanıcıdan foundation ve ilk prototip kapsamı onayı al; hangi kod yollarının değişebileceğini sonraki görevde açıkça kaydet.
- `feature/bayessoft-4.0`, yerel değişiklikler ve korunacak dosyaları yeniden kontrol et; 3.0 geçmişini sıfırlama veya taşıma.
- Teknoloji/skill kaynak ve sürüm uyumunu incele; paket ekleme/skill kurulumunu ayrı kapsam olarak kararlaştır.
- Production layout/global CSS/header/footer'ı değiştirmeden üç bağımsız URL'nin izolasyon yöntemini doğrula. Mevcut site chrome'unun prototipe istemeden taşınmasını önle; ortak üretim dosyasını değiştirerek çözme.
- Kamera/kadraj, ışık, kısa etiketler ve kalite başlangıcını ortaklaştır; konsept farkının görünmesine izin ver.

## Küçük iterasyon sırası

| Aşama | Teslim | Devam koşulu |
|---|---|---|
| 0 — Foundation | Bu kasa, brief'ler ve karşılaştırma yöntemi | Kullanıcı planı/sonraki kapsamı onaylar |
| 1 — Teknik karar | Stack, route izolasyonu, gerekiyorsa paket/skill listesi | Seçim gerekçesi ve kurulum kapsamı netleşir |
| 2 — Durağan sahneler | Her rotada geometri, tek malzeme/ışık, temel kadraj | Hareket olmadan ana metafor okunur |
| 3 — Tek hareket | A birleşme; B dönüşüm; C seçili bağlantı | Hareket anlam katıyor, sahne dengesi korunuyor |
| 4 — Temel etkileşim | Dış HTML seçimleri, klavye/dokunma, reduced-motion/statik sunum | Aynı bilgi hareket olmadan erişilebilir |
| 5 — Karşılaştırma | Eşit koşullu kısa review, bulgu ve açık sorunlar | Kullanıcı seçimi veya sınırlı revizyon |
| 6 — Final QA | Seçilen/rafine edilen sahnenin ayrı kabul çalışması | Gerçek sonuçlar ve kullanıcı kabulü |

Agent önerisi: prototip yapımına A ile başla, ardından B ve C'yi aynı olgunluğa getir. A'nın seçilmiş konsept olduğu anlamına gelmez; basit birleşme ilişkisi ilk teknik zemini sınar. Üçünün ilk turu bitmeden birine daha fazla efekt/polish vererek karşılaştırmayı bozma.

Her iterasyon tek soruyu çözer: önce geometri, sonra hareket, sonra etkileşim. Bütün sitenin yönünü veya üç konseptin dilini aynı turda değiştirme. Bulgu, kapsam ve yapılmayan kontroller loga yazılır.

## Hızlı iterasyon kontrolü

- Değişen prototype kaynaklarına uygun kısa tip/lint/parse kontrolü; yalnız belge turunda dosya ve link kontrolü.
- Görsel değişimde tek tarayıcı oturumu, yaklaşık 1440 px masaüstü ve 390 px mobil görünüm; taşma ve kadrajı kontrol et.
- Hareket değişiminde bir geçiş/çevrim ve console kontrolü; ilgili seçimde klavye, dokunma veya azaltılmış hareket yolunu dene.
- Kapsam dışı dosya farkı ve yerel kullanıcı çalışmalarının korunması kontrol edilir.
- Geçen kontrol gerekçe olmadan tekrarlanmaz. Sorun varsa hedefli kontrol genişletilir; uzun QA rutin hâle gelmez.

Bu adımlar full QA değildir. Başarı kaydında araç, viewport/cihaz, test edilen davranış ve kapsam dışı kalanlar belirtilir. Bu foundation görevinde browser QA, build ve runtime testleri çalıştırılmaz.

## Daha sonra ayrı final QA

Masaüstü/tablet/mobil responsive matrisi; Safari/iOS ve Android gerçek cihazları; klavye, ekran okuyucu ve zoom; reduced-motion başlangıç/runtime; WebGL/yükleme/context-loss alternatifi; hızlı tekrarlar, sekme görünürlüğü, route giriş/çıkış ve GPU cleanup; ilgili TR/EN/DE metin uzunlukları; paket/asset aktarımı ve kare süreleri.

Gerekli build/lint/typecheck ve regresyon kapsamı final değişikliğe göre belirlenir. Production'a entegrasyon ancak ayrıca yetkilendirilir; commit/push/deploy bu planın otomatik çıktısı değildir.

İlgili: [[03-Design/CREATIVE_DIRECTION]], [[03-Design/MOTION_PRINCIPLES]], [[07-Reviews/COMPARISON_CRITERIA]], [[98-Agent-Logs/NEXT_STEPS]].

## 13.10.2026 — Gerçek deney ilerlemesi

Foundation-only çalışma ve uygulama öncesi kapılar yukarıda tarihsel plan olarak korunur; kullanıcının sonraki iki deney talebi ilgili izole rotaları açıkça yetkilendirdi.

| Deney | Gerçek durum | Kullanıcı/algı sonucu |
|---|---|---|
| A — [[EXPERIMENT_01_MODULAR_ASSEMBLY]] | Uygulama ve kısa QA tamamlandı; rota korunur | Teknik/görsel başarılı, BayesSoft anlamı zayıf bulundu |
| B — [[EXPERIMENT_02_KINETIC_ARCHITECTURE]] | Tek mekanizma, iki kararlı durum, kısa desktop/mobile kontrolü tamamlandı | Yazısız arayüz adaptasyonu hipotezi; kullanıcı geri bildirimi bekler |
| C — Living Network | Planlandı; rota/kod yok | Bu tur yetkilendirilmedi |

Sonraki adım Experiment 02 değerlendirmesidir. Yeni polish turu, üçüncü konsept veya production entegrasyonu kendiliğinden başlamaz. Final QA ayrı görev; tam site/Figma/commit/push/deploy kapsamı yok.
