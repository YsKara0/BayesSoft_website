# Motion yönü — dört yüzlü tipografi + sakin sağ sahne

## Çalışan sol prizma: korunacak teknik davranış
- **Dört fiziksel yüz**; iki yüzlü flip card değil.
- Yüzler X ekseni etrafında sıralı 90° adımlarla görünür; sürekli açı ilerleyişi, görünür snap/reset yok.
- Yaklaşık **5 saniye okuma + 900 ms dönüş**.
- Manuel yüz seçimi, hover ve klavye odak duraklatması, arka sekme duraklatması.
- `prefers-reduced-motion`: otomatik geçiş yok, mesajlar manuel erişilebilir.
- Geçmiş rapora göre büyük ön yüz ~420px ve kare kesitte derinlik ~210px; **güncel kod ve gerçek viewport üzerinden doğrula**.
- Kare kesitli prizma ara açılarda daha büyük düşey zarf kaplar: yüz yüksekliği H için 45°'de yaklaşık H√2. Kırpılmadan büyütme iddiasını gerçek tarayıcıda kontrol et.

## Sağ sahne için yaratıcı ilke
**İhtiyacı çalışan yazılıma dönüştürme**. Güzel soyut heykel yeterli değil; birleşme sonucunda işlevsel bir sistem okunmalı.

Önerilen kontrollü akış:
1. Kod/veri/arayüzü ima eden ince, tutarlı yüzeyler farklı derinliklerde belirir.
2. Kademeli hizalanma ve bağlantı; hareketin nedeni anlaşılır.
3. Tek bir çalışan ürün düzeninde sakin son poz.
4. Uzun süre sabit veya nadiren mikro tepkisel; sonsuz hızlı spin yok.

## Teknoloji seçimi
- Okunabilir metin, gerçek UI: HTML/CSS.
- Gerekli derinlik, ışık ve geometri: Three.js / React Three Fiber (şu an 3.0+ dalında bağımlılıklar olmayabilir; 4.0'dan otomatik merge etme).
- Basit yüzey ve reveal: CSS; daha karmaşık koreografi varsa kontrollü GSAP.

## Erişilebilirlik ve performans
Reduced-motion statik net kompozisyon, WebGL desteklenmeme/context-loss fallback, mobil kalite sınırı, statik sahnede gereksiz frame renderı yok, sekme gizliyken duraklatma.

## Başarı ölçütü
Animasyon sözcükler olmadan da teknoloji/çözüm üretimi hissini veriyor mu? Sol prizmanın odağını çalıyor mu? 16:9 video sınırı sorununu gerçekten gideriyor mu? Masaüstü ve mobilde tutarlı mı?
