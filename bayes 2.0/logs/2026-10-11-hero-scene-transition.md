# 11 Ekim 2026 — Hero / Web–Mobil–AI section birleşimi

Başlangıç: feature/bayessoft-2.0, temiz çalışma ağacı. Kullanıcı Hero v1'in tamamlanıp pushlandığını bildirdi.

Yalnızca Hero.module.css ve WebToMobileTransition.module.css: Hero alt border kaldırıldı; zeminin son 8rem'i #0B111B ara laciverte yumuşar. Sonraki sticky stage aynı tonla başlayıp ilk %22 içinde eski #060A10'a döner, kalan zemin gradienti korunur. Stage kenar shading'i mask ile üstte şeffaf başlayıp mevcut alan içinde görünür olur; mobile da uygulanır. Reduced-motion statik hikâyenin üst zemini aynı birleşim rengidir.

Yeni spacer/padding/scroll alanı yok; mevcut bölüm boşlukları, cihaz vitrini, sticky yerleşimi, desktop/tablet/mobile yükseklikleri, sahneler, süre ve transform mantığı değişmedi. Diğer bölümlere dokunulmadı, yeni animasyon/kütüphane yok.

PostCSS parse ve HEAD'e göre background/border-bottom/mask-image dışı tüm CSS deklarasyonlarının aynı kalması kontrolü, diff-check geçti. TSX değişmediği için lint/typecheck/build tekrarlanmadı. Tarayıcı/screenshot yok; görsel değerlendirme kullanıcıda. Handoff/roadmap güncellendi. Bu tur commit/push/deploy yapılmadı.
