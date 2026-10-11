# 11 Ekim 2026 — Ortalanmış sade hero

Kullanıcı Space Grotesk denemesini beğendi; yalnızca hero'nun premium/minimalist kompozisyonu için uygulama onayı verdi. Diğer çalışma ağacı değişiklikleri korundu. Dal `feature/bayessoft-2.0`.

Kod kapsamı yalnızca `components/Hero.tsx` ve `components/Hero.module.css`:
- Büyük Space Grotesk 700 başlık, Inter açıklama ve iki mevcut CTA ortalandı.
- Mevcut #101827 zemin/başlık/CTA renkleri korundu; düşük opaklıklı statik mavi (.09) ve mor (.055) radial glow eklendi.
- Masaüstü başlık 48–92px; tablet 44–72px; mobil 34–48px. Dengeli satır kırma ve responsive boşluklar. Mobil CTA'lar alt alta, içerik yüksekliği serbest.
- Hero video öğesi/ref/effect ve video/overlay stilleri kaldırıldı. Hiçbir video dosyası silinmedi/değiştirilmedi; hero artık video talebi oluşturmaz.
- Başlık/açıklama/CTA metinleri, bağlantılar, dil verileri ve mevcut reveal/reduced-motion akışı korundu. Yeni dashboard/3D/karmaşık animasyon eklenmedi.

TypeScript (`--noEmit --incremental false`), Hero.tsx ESLint (`--no-cache`), CSS parse, mevcut metin alanları/CTA bağlantıları ve video öğesi yokluğu kontrolü, `git diff --check` geçti. Tarayıcı kontrolü, ekran görüntüsü veya tam build yok; görsel kabul kullanıcıda. Özellikle mobil ve uzun EN/DE başlık satırları manuel değerlendirilmelidir.

Obsidian handoff ve roadmap güncellendi. Commit/push/deploy yapılmadı.
