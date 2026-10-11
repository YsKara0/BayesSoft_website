# 11 Ekim 2026 — Referanslar görsel iyileştirmesi

Yalnızca ClientsSection.tsx, yeni ClientsSection.module.css ve globals.css referans kuralları değişti. Bölüm zemini #E4E9F1; kartlar beyaz, #D5DEEB ince kenar ve çok hafif gölge. Mevcut 208×96 / 240×112px kart ölçüleri korunur; yatay logo alanı 48px, kare/dikey 64px, beyaz boşluğu fazla bazı wordmark'lar 56px. object-contain ve orijinal dosyalar korunur. Hover'da kart/logo hareketi yerine ince kenar/gölge vurgusu kullanılır. Veriler, sıra, bağlantılar ve TR/EN/DE metinleri değişmedi.

İki eşit marquee grubu, 34s linear ve translateX(-50%) döngüsü korundu; yeniden yazılmadı. 10 kart/grup ve son 16px boşlukla grup genişliği mobil 2240px, desktop 2560px; kaydırma tam bir grup genişliğidir. pageshow/visibilitychange sırasında inline running yazan ve hover pause'u geçersiz kılabilen eski handler kaldırıldı; gereksiz global focus blur da kaldırıldı. CSS hover uygun farede, focus-within klavyede ve active dokunma sırasında durdurur; koşul bitince mevcut konumdan devam eder. Gizli kopya linkler tab sırasından çıkarıldı. Reduced-motion animasyonsuz yatay erişim kuralları birebir korunur.

TypeScript, hedefli ESLint, CSS parse, referans veri eşitliği, döngü/reduced-motion kaynak koruma ve diff-check geçti. PNG ölçüleri/görünür piksel sınırları yalnızca okunarak optik ölçek seçimi yapıldı; görseller değiştirilmedi. Tarayıcı/screenshot üretilmedi; optik görünüm ve touch/hover kabulü kullanıcı manuel kontrolünde. Header ve diğer bölümler değişmedi. Commit/push/deploy yok. Detay: [[logs/2026-10-11-reference-polish]].

