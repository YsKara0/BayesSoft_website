# 11 Ekim 2026 — Hero → Web devamlılığı

Kapsam: yalnızca Hero.module.css ve WebToMobileTransition.module.css stil/yerleşimi. #0B111B ara gradient kaldırıldı; ortak --bs-foundation (#101827) üzerine hero son 8rem'de ambient söner, stage ilk 8rem'de ambient yumuşak açılır. Hero alt padding desktop 16–32px, tablet 24px, mobil 16px. Desktop Web copy ve panel merkezleri %50'den %46'ya birlikte taşındı; aralarındaki oran ve tablet/mobil override'lar korunur. Reduced-motion statik akış üst padding 5rem → 3rem; alt padding ve kartlar değişmedi.

Sticky position/top/100svh/min-height, section 340/280/260svh, useScroll offset/spring ve sahne geçiş pencereleri aynıdır. Web opacity başlangıçta 1 olduğu için stage doğal akışta gelirken içeriği görünür; sticky için ayrı giriş/morph/negatif margin eklenmedi. Hero başlık/CTA/vitrin ve Web/Mobil/AI içerikleri değişmedi. Header/diğer bölümler korunur.

Kontroller: iki CSS PostCSS ile parse edildi. Tur öncesi /private/tmp snapshot'larıyla tüm deklarasyonlar karşılaştırıldı; yalnızca izin verilen background/padding/Web top değişiklikleri var. Motion TSX kaynağı birebir aynı; responsive ve reduced-motion davranışlarını yöneten kurallar korundu. git diff --check geçti. CSS-only kapsam için build/lint/TypeScript ve tarayıcı testleri tekrarlanmadı. Görsel süreklilik, metin/panel yerleşimi ve sticky başlangıcı manuel değerlendirme bekliyor; görsel olarak doğrulandığı iddia edilmez.

Handoff/roadmap güncellendi, mevcut çalışma ağacı korundu. feature/bayessoft-2.0 dalında kalındı; commit/push/deploy yapılmadı.
