# 11 Ekim 2026 — Laptop ölçeği ve örnek ekran kontrastı

Kod yalnızca HeroShowcase.module.css. Önceki çalışma ağacı korunur.

Laptop %10 küçültüldü: %76 → %68.4, mobil %90 → %81. Yatay merkez aynı; laptop alt konumu %7 → %15, mobil %30 → %34 ile yukarı dengelendi. Telefon ölçüsü/konumu, cihaz transformları ve vitrin alanı korunur. Dashboard'un alt kısmının ilk viewport'ta daha fazla görünmesi amaçlandı; canlı görsel doğrulama yapılmadı.

Aktif web menüsü #2563EB/beyaz; kartlar #20334E ve #192A43, daha net sınırlar; ikincil metin #C0CDE0. İlerleme göstergeleri mavi/açık mavi, mobil proje ve eşleşen web proje satırında kontrollü mor; görev/istatistik vurguları uyumlu. Glow miktarı artırılmadı, animasyon eklenmedi. Arayüz metin/verileri, hero başlığı/CTA ve diğer bölümler değişmedi.

PostCSS parse, masaüstü/mobil %10 küçülme hesabı, telefon genişliklerinin korunması ve statik stil kontrolü, diff-check geçti. CSS-only değişiklikte lint/typecheck/build/tarayıcı testleri tekrarlanmadı. Kullanıcı manuel değerlendirmesi bekleniyor. Handoff/roadmap güncellendi. feature/bayessoft-2.0 dalında commit/push/deploy yok.
