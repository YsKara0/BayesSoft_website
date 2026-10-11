# 11 Ekim 2026 — Web paneli / rafine telefon

Kod yalnızca HeroShowcase.tsx ve HeroShowcase.module.css. Önceki çalışma ağacı korunur.

Fiziksel laptop lid/base/kamera ve perspektif kaldırıldı. Mevcut web içeriği aynı genel ölçü/konumda düz, 14px radius (mobil 8px), ince kenarlık ve iki katmanlı ölçülü gölgeli panel olarak sunulur. Koyu lacivert/mavi yüzeyler korunur.

Telefonun genişliği ve ön plan konumu korunur. Metal kenar inceltildi, bezel azaltıldı, köşeler cihaz oranına bağlı hale getirildi; island daraltılıp lens/hoparlör detayları eklendi. Yan düğmeler ve hafif kenar ışığı, daha az dönüş açısı kullanılır. Yeni glow/animasyon/kütüphane yok. Mevcut web/mobil örnek içerik, TR/EN/DE, hero başlığı/CTA ve diğer bölümler değişmedi.

TypeScript noEmit/incremental false, hedefli HeroShowcase ESLint no-cache, PostCSS parse/sınıf referans eşleşmesi/laptop kabuğu yokluğu ve diff-check geçti. Tarayıcı/build/screenshot yapılmadı; görsel değerlendirme kullanıcıda. Handoff/roadmap güncellendi. feature/bayessoft-2.0; commit/push/deploy yok.
