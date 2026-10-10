# 11 Ekim 2026 — Üç küçük vitrin düzenlemesi

Kod kapsamı HeroShowcase.tsx/module.css ve Hero.module.css. Bileşene sınırlı mavi #2B68F0/açık mavi #7BBFFF ve biraz daha canlı kontrollü mor göstergeler; mevcut glow değişmedi. Vitrin alt caption, stilleri ve kullanılmayan çeviri alanları kaldırıldı. Hero alt padding 64–96 → 32–48px; tablet 64 → 40px; mobil 56 → 32px. Başlık/CTA, kompozisyon/ölçüler, koyu web/açık telefon, örnek ekran içeriği ve diğer bölümler korundu. Yeni animasyon/kütüphane yok.

TypeScript noEmit/incremental false, hedefli ESLint no-cache, PostCSS parse/caption yokluğu ve diff-check geçti. Tarayıcı/build/screenshot yok; manuel görsel kontrol kullanıcıda. Önceki çalışma ağacı korunur; feature/bayessoft-2.0 dalında commit/push/deploy yok.
