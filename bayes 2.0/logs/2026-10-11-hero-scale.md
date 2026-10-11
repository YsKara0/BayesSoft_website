# 11 Ekim 2026 — Hero tipografik ölçek ve dikey ritim

Kullanıcının paylaştığı Linear görseli yerleşim ritmi referansıdır. Kod değişikliği yalnızca `components/Hero.module.css`:
- Masaüstü H1 clamp(48px, 6.4vw, 92px) → clamp(36px, 4.86vw, 70px). 1024/1440/1920px hesaplarında yaklaşık %24 küçülme.
- Tablet 40–56px; mobil mevcut 34–48px ve satır yüksekliği korunur.
- Başlık/açıklama aralığı 28 → 24px; açıklama/CTA 36 → 32px, mobil 30px kalır.
- Viewport tabanlı min-height kaldırıldı; üst/alt padding azaltıldı, inner doğal akışta tutuldu. İleride CTA grubundan sonra büyük ürün görseli eklenebilir; boş placeholder veya yeni görsel yok.

Space Grotesk, Inter, ortalanmış düzen, mevcut içerikler/bağlantılar, renkler ve animasyonlar korunur. Diğer bölümler bu tur değişmedi; önceki çalışma ağacı korundu.

CSS PostCSS parse, üç masaüstü genişliğinde %20–25 küçülme kontrolü ve git diff --check geçti. Yalnızca CSS değiştiği için typecheck/lint/build ve tarayıcı testleri tekrarlanmadı. Görsel kontrol kullanıcıda. Dal feature/bayessoft-2.0; commit/push/deploy yok.
