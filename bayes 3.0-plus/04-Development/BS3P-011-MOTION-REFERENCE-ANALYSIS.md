# BS3P-011 — Ek motion referansı analizi

**Tarih:** 2026-10-14  
**Kapsam:** Kullanıcının ek MOV inceleme talebi; mevcut bağımsız vitrin ve koruma sınırları geçerlidir.  
**Kaynak:** `02-Research/project-showcase-motion-reference.mov`  
**Prototip:** http://127.0.0.1:3000/prototype/bs3p-project-showcase  
**Durum:** Referans analizi tamamlandı; uygulama görsel onayı bekleniyor. Homepage entegrasyonu yok.

## İnceleme yöntemi ve sınırı
Önceki uygulama oturumunda yalnız MOV'un 1 saniye karesi okunmuştu; hareketin tamamı o aşamada incelenmemişti. Bu ek oturumda Chrome'un yerel video öğesiyle verilen dosya başlangıçtan sona oynatıldı; `ended=true` doğrulandı. Süre 5,593333 saniye, kaynak çözünürlük 2940×1912. Hareket yaklaşık yarım saniye aralıklarla alınan 12 zamanlı kare üzerinden ayrıca incelendi. Kareler yalnız geçici dizinde tutulur; üçüncü taraf görselleri uygulama varlıklarına eklenmedi.

MOV, bir web demosunun ekran kaydıdır. Verilen kısa kesitin tamamı incelendi; orijinal demonun tüm döngüsü, kaynak kodu veya etkileşim sözleşmesi görülmüş sayılmaz. Kesin kamera açısı/FOV, yüz sayısı, eğrilik yarıçapı, easing fonksiyonu, autoplay ve kullanıcı komutlarının anlamı bu kayıtla doğrulanamaz. Yerel minimal FFmpeg MOV okuyamadığı için Chrome'un mevcut codec desteği kullanıldı; dependency kurulmadı.

## Görülen hareket
- **Yüzey dönüşü:** Görseller bağımsız kartlar gibi doğrusal kaymak yerine ortak dikey eksen çevresindeki silindirik bir hacmi takip ediyor. Ön alana gelen yüz genişliyor; yanlara giden yüz perspektifle daralıyor ve komşu yüz tarafından örtülüyor. İnce aralıklar ayrı yüzeyleri seçilebilir kılıyor.
- **Perspektif:** Üst/alt kenarların yay biçimi ve yan yüzlerin sıkışması eğri bir taşıyıcı hissi veriyor. Yüzler merkezde daha okunabilir; yanlarda doku sıkışıyor. Kameranın sabit olup olmadığı yalnız bu kesitten kesinleştirilmedi.
- **Derinlik:** Ortak dönüş, örtüşme sırası, yüz genişliğinin değişmesi ve kıvrımlı yüzeylerdeki ışık/ton geçişleri hacmi kuruyor. Burada yalnız drop-shadow kullanılarak üretilmiş bir kart efekti görülmüyor; doku ve yüzey eğriliği birlikte çalışıyor.
- **Ritim:** Yaklaşık 0–3,5 saniye arasında seçili görseller öne doğru sürekli ve tek yönde akıyor. 1,5 saniye civarında mavi yüz, 3 saniye civarında sıcak tonlu yüz ön odağa geliyor. Kesitte okunabilir bir finalde durma veya ayrı komut sonrası hızlanma/yavaşlama aşaması gösterilmiyor; referanstan 900 ms gibi bir seçim süresi türetilemez.
- **Son bölüm:** Yaklaşık 4 saniyeden sonra dikey kesikli ayraç ve koyulaştırılmış bir alan beliriyor. Bu bir karşılaştırma perdesine benziyor; kaynak uygulama bilinmediği için işlevi kesinleştirilmedi. Bu görünümü yüzey geometrisinin değişmesi veya yeni bir geçiş efekti olarak yorumlamadım.

## BayesSoft yorumu ve mevcut uygulamayla ilişki
Referanstan alınan ilke, bir görselin sahneden çıkarken diğerinin aynı fiziksel hacim üzerinden gelmesidir. BayesSoft yorumu üç geniş, düz proje yüzünden oluşan **CSS 3D folyo** olarak kalır. Bu seçim mevcut brief'in faceted/2.5D yaklaşımına uyar; büyük tipografi ve özgün kapaklar finalde düz ve keskin okunur.

| Boyut | BayesSoft uygulaması |
|---|---|
| Ortak mekânsal hareket | Üç yüz aynı rotor üzerinde; Y ekseninde 120° adımlar. Sürekli step açısı ters yönü ve ilk/son wrap'ı korur. |
| Derinlik | Gerçek CSS perspective 1800px, yüz genişliğinden hesaplanan yarıçap ve görünür iki yüzün örtüşmesi. Kenar/gölge mevcut soğuk beyaz ortamla uyumlu. |
| Ritim | Kullanıcı komutuyla 900 ms `cubic-bezier(.65,0,.2,1)`; kontrollü hızlanma ve yavaşlayarak frontal final. Bu süre brief'ten ve uygulama kararından gelir. |
| Okunabilirlik | Finalde bir büyük seçili kapak. Sağdaki başlık/açıklama/link dönüş tamamlandığında aynı seçimle güncellenir. |
| Hareket hiyerarşisi | Kullanıcı eylemleri arasında tam hareketsiz; autoplay veya render döngüsü yok. Homepage hero'suyla sürekli hareket yarışı oluşturmaz. |
| Mobil ve erişilebilirlik | Mevcut 440 ms sade 2D geçiş, swipe ve 48px klavye/işaretçi kontrolleri; reduced-motion anlık seçim. |
| Sanat yönetimi | Instrument Sans; cobalt, lacivert ve silver/periwinkle özgün kod çizimi kapak serisi. Referans dokuları, ikonları ve karşılaştırma perdesi kullanılmaz. |

Tam hareket incelemesi mevcut folyo kararını destekliyor. Ek talep belirli bir uygulama hatası veya yeni geometri istemediğinden bu oturumda prototip koduna değişiklik yapılmadı. Three.js, silindirik görsel deformasyonu ve sürekli hareket eklenmedi. Sanat yönünün kullanıcı tarafından kabul edildiği sonucu çıkarılmadı.

## Gerçek kontroller ve koruma
- Yerel MOV Chrome'da sona kadar oynatıldı; 12 zamanlı gözlem ve bitiş bilgisi [[../07-Reviews/evidence/BS3P-011-reference-analysis.json]] içinde. Kareler geçici; yeni video veya ekran kaydı üretilmedi.
- Mevcut stage/CSS ve özgün brief, yeni bulgularla karşılaştırıldı. Önceki desktop/mobil/motion/TS sonuçları yeniden çalıştırılmış sayılmaz; kod değişmediğinden ürün QA'sı tekrarlanmadı.
- 499 eski korumalı dosya ve mevcut vitrinin 28 uygulama dosyası/3 kanıtı: toplam 530 dosya değişmedi. Kaynak MOV ve brief, homepage/hero/referanslar/production/arşivler korunur.
- Bu analiz notu, implementation ek kaydı, TASK_REGISTER/CURRENT_STATUS/NEXT_STEPS/SESSION_LOG/günlük/REVIEW_REGISTER ve yeni metadata JSON güncellendi. Yeni dependency, commit, push, merge, deploy yok; D-015'in onay anlamı değişmedi.

## Bekleyen
Mevcut masaüstü/mobil kanıtları ve bağımsız prototip üzerinden kullanıcı görsel değerlendirmesi. Silindirik eğrilik ile düz folyo arasındaki tercih açıkça görünür; verilen kayıt tam referans deneyimini göstermediğinden ek davranışlar varsayılmadı. Homepage entegrasyonu ve kapsamlı cihaz/erişilebilirlik/release QA'sı ayrı görevdir.
