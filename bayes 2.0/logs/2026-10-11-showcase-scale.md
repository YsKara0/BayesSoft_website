# 11 Ekim 2026 — HeroShowcase ölçek ve boşluk

Kod yalnızca Hero.module.css ve HeroShowcase.module.css içinde >=1024px media query eklemeleridir. Önceki çalışma ağacı korunur.

Vitrin %88 genişlik / 968px maksimum; hedef 1280/1440/1512px ekranlarda 1100 → 968px, %12 küçülme. Laptop/telefon aynı kompozisyon içinde ölçeklenir; genişlik oranları ve perspektif transformları değişmedi. Başlık hedef genişliklerde 56.3/63.4/66px. CTA–vitrin aralığı önceki yaklaşık 77–80px yerine 51–56px. Mobil/tablet (<1024px) kuralları, ekran placeholder'ları ve JSX değişmedi. Diğer bölümlere dokunulmadı.

PostCSS parse, üç hedef genişlikte ölçek hesabı ve diff-check geçti. CSS-only geçişte typecheck/lint/build ve tarayıcı testleri tekrarlanmadı. Hesaplar görsel doğrulama yerine geçmez; manuel kontrol kullanıcıda. Handoff/roadmap güncellendi; feature/bayessoft-2.0 dalında commit/push/deploy yok.
