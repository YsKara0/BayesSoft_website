# 11 Ekim 2026 — Yalnızca scroll timing

Kod yalnızca WebToMobileTransition.tsx. Önceki çalışma ağacı korunur.

Önce Web metni %18'den sonra çıkarken Mobil metni %38'de başlıyordu; telefon %52'de yerleşip %65'te kaybolmaya başlıyordu. Ayrı telefon çıkış çarpımı, Mobil metninden önce görüntüyü kaldırıyordu.

Yeni aralıklar: Web %0–28 hold, %28–36 fade-out; Mobil %28–36 fade-in, %36–70 hold, %70–78 fade-out; AI %70–78 fade-in, %78–100 hold. Metin/görsel ortak opacity. Telefon scale overshoot %34, yerleşim %36; mevcut scale/rotate/y uç değerleri korunur. Web hareketi hold sonuna taşındı. AI timing'i korunur. Toplam section yüksekliği ve responsive CSS değişmedi, reduced-motion markup değişmedi.

TypeScript noEmit/incremental false, hedefli ESLint no-cache ve diff-check geçti. AST'den gerçek opacity eğrileri okunup 1001 progress noktasında toplam opacity=1 ve boş aralık olmaması doğrulandı. Mobil tam hold %34 doğrulandı; önceki kaynağa göre render/reduced-motion markup yalnızca opacity bağları dışında aynı. Bu matematiksel kontrol canlı görsel değerlendirme yerine geçmez. Tarayıcı/build/screenshot yok; kullanıcı manuel scroll/video kontrolü bekleniyor. Obsidian handoff/roadmap/brief güncellendi. Commit/push/deploy yapılmadı.
