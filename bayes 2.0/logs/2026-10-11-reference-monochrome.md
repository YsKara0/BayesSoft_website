# 11 Ekim 2026 — Referanslar monokrom sunumu

ClientsSection.module.css: bant #D8DEE8. Logo görselleri normalde grayscale(1) ile tek renk gri ailesinde; yalnızca ilgili kart fine-pointer hover veya focus-visible aldığında grayscale(0) ile 300ms ease üzerinden orijinal renklerine döner. Beyaz kartlar, kaynak dosyalar ve logo oran/ölçüleri değişmedi. Gömülü beyaz arka planları kaldırmak/koyulaştırmak için brightness, invert, blend veya mask kullanılmadı; beyazlar kartla bütünleşir. Grayscale kaynak parlaklığını koruduğu için logolar aynı sabit lacivert renge zorlanmaz; bu tercih beyaz zeminleri ve tanınabilirliği korur. Mobilde hover bağımlı bilgi yok; logo/isim/linkler korunur ve sticky touch-hover efekti uygulanmaz. Reduced-motion'da renk değişimi anlık olur.

ClientsSection.tsx: bağlantısız ilk grup logo kartları da klavyeyle focus alabilir; gizli ikinci grup tab dışındadır. Linkler ve sıralama aynıdır. Marquee/global CSS, süre/döngü, hover/focus/touch durma ve reduced-motion yatay erişim kuralları değişmedi.

TypeScript, hedefli ESLint, CSS parse ve TSX'in yalnızca tabIndex farkı taşıması, diff-check geçti. Tarayıcı/görsel test yok; manuel kabul kullanıcıda. Başka bölüm değişmedi. Commit/push/deploy yok. Detay: [[logs/2026-10-11-reference-monochrome]].

