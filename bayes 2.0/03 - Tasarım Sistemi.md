# 02 — Design System / Phase 1

## 10 Ekim 2026 — Güncel lacivert ağırlıklı revizyon

Kullanıcının son açıklaması: beyaz detaylar, lacivert üzerinde premium çoğunluk. Bu yön, ZIP'teki geniş açık bölüm ritmi önerisini ve ilk uygulamadaki açık header/süreç alanlarını geçersiz kılar. Sabit bir renk yüzdesi onaylanmadı.

- Ana zemin/header: #101827; ikinci koyu yüzey: #17263F. Beyaz hizmet/proje kartları ve iletişim formu seçici kontrast sağlar. Süreç zemini/kartları lacivert; beyaz ikon yüzeyleri küçük detaydır. Referans bandı açık kalır, yüksekliği azaltılır.
- Yetkinlikler başlığına daha geniş masaüstü sütunu ve daha kontrollü başlık ölçeği verildi. Seçili proje kartında sol sütuna eşitlenerek büyüyen flex kuralları kaldırıldı.
- Mevcut içerik, bölüm sırası, bağlantılar, form mantığı ve Web/Mobil/AI animasyonu korunur. Animasyon yeniden tasarımı Phase 2.
- Kullanıcının sağladığı tam sayfa PNG incelendi. Görsel önceki sürümü gösterir; revizyon sonrası desktop/mobile canlı QA yapılmış değildir.
- Uzun koyu boşluk, 340svh kaydırma alanı ve sticky sahneyle ilişkili olabilir; tam sayfa görüntüsü tek başına gerçek kaydırma hatasını kanıtlamaz. Sahne kısaltılmadı. Sağdaki/alttaki açık alanın capture sınırı mı gerçek taşma mı olduğu doğrulanmadı.
- Revizyon için lint, typecheck, yerel build (18 statik sayfa) ve diff-check geçti. Data ve WebToMobileTransition kaynaklarında Git farkı yok. Tarayıcı erişimi engelli; başka araçla aşılmadı.
- Commit/push/deploy yok. Sonraki adım yenilenen görünümün kullanıcı değerlendirmesi ve desktop/mobile görsel-etkileşim QA.

Detay: [[logs/2026-10-10-phase1-navy-rebalance]].


> Kaynak: Kullanıcının ZIP'i / docs/02-design-system.md. Güncel durum ve bu turdaki kapsam için [[07 - AI Handoff]] ve [[08 - Phase 1 Tasarım Önerisi]] okunur. Mevcut Obsidian kasası kullanıcı kararıyla bayes 2.0/ konumunda korunur.


## Status
**Implemented across the existing website; automated checks pass, browser visual QA and user acceptance pending.** Direction selected by user: **C — Premium + Interactive**; palette recommended: **Balanced Premium**. User reports current website looks too dark to many visitors.

## Token palette — starting values
| Role | Hex | Notes |
|---|---|---|
| Dark foundation / hero | `#101827` | Navy, not flat black |
| Secondary dark surface | `#17263F` | Feature sections, CTA |
| Light background | `#F5F7FB` | Soft neutral |
| Alternative light surface | `#E9EEF5` | Alternating sections |
| White card surface | `#FFFFFF` | Clear service/project cards |
| Primary blue | `#2563EB` | Buttons, active states; check text contrast |
| Accent blue | `#72B8FF` | Decorative accents, dark-section labels |
| Dark text | `#152238` | Default on light backgrounds |
| Muted text | `#53647B` | Readability; audit WCAG contrast |

These are target starting points; adjust by measured contrast and fit with actual logo. Use **semantic tokens** rather than scattering literal values. Audit existing Tailwind/CSS/theme approach before implementation.

## Historical ZIP section rhythm — superseded by current navy revision
1. Hero: dark navy, strong text and intentional visual.
2. Web/Mobile/AI interactive showcase: light neutral (`#E9EEF5`), updated in Phase 2 only.
3. Services: white.
4. Featured project (Tam Finans candidate): dark navy with real UI.
5. Selected projects: light background.
6. Process / team: white or soft gray.
7. Contact CTA/footer: dark navy.

Do not assume exact order currently matches this. Phase 1 should change styling/system while preserving functionality and existing section content; large reordering is separate approval.

## Type and components
- Candidate heading fonts: Space Grotesk / Sora; body: Inter. **Inspect current fonts; change only if justified.** Turkish glyph support mandatory.
- Define heading hierarchy, line heights, responsive clamp sizes, container widths, spacing scale, consistent corner radii, dividers and elevation.
- Update reusable header/nav, buttons, cards, chips/badges, hover/focus, footer in Phase 1.
- Avoid excessive glow, glassmorphism, gradients and always-on large motion.
- Strong foreground/background contrast; visible keyboard focus; touch targets; prefers-reduced-motion support.
- Colors must work in both dark and light sections; not all components should inherit global dark tokens.

## Visual direction
Premium + interactive, restrained. The earlier recommendation used broad light canvases; the user's current direction instead keeps navy dominant with selective white details. Use brand's geometric logo / point motifs in micro-interactions later after identity assets are finalized. Real product imagery > decorative stock-like AI graphics.

## Comparison palettes considered but not selected
- Soft Tech: white/light-gray dominant, corporate.
- Midnight Blue: closer to prior dark aesthetic.
- Balanced Premium was recommended and accepted as planning starting point, not immutable.

## Tarihsel ilk geçişte uygulanan tercih

Header açık #F5F7FB/beyaz, mevcut koyu logo. Hero lacivert #101827 ve mevcut video üzerinde lacivert overlay. Hero vurgu #72B8FF; birincil CTA #2563EB + beyaz metin. Tokenlar app/design-tokens.css içinde. Son kullanıcı onayıyla global açık/koyu tema ve kalan mevcut sayfalar da yeni sisteme geçirildi.

Mevcut fontlar korunur: hero Montserrat 700, gövde Inter. Space Grotesk/Sora eklenmedi. Düz renk kontrastı: beyaz/ana mavi 5,17:1; açık mavi/lacivert 8,47:1; ikincil koyu metin/açık zemin 5,63:1. Video üzerindeki gerçek görünüm ayrıca incelenmelidir.


## Tarihsel ilk site geneli uygulaması

- Yerel Montserrat 700 / Plus Jakarta Sans 600 / Inter fontları korunur. Font-label artık içerik etiketlerinde Inter; kod fontu değişkeni korunur.
- Açık yüzeyde metin #152238, ikincil metin #53647B ve mavi #2563EB. Koyu yüzeyde beyaz, #C0CDE0 ve vurgu #72B8FF.
- Header açık; hero ve mevcut animasyon koyu. Hizmetler beyaz kartlarla beyaz yüzey; öne çıkan çalışma lacivert, yanındaki seçili çalışma beyaz kart; referanslar #E9EEF5; süreç beyaz kartlar; footer lacivert. Mevcut bölüm sırası korunur.
- Ortak container 1216px; kontroller 8px, paneller 12px köşe; ölçülü gölge, klavye focus. CTA minimum48px, carousel okları44px.
- Tüm hizmet/proje/hakkımızda/iletişim sayfaları ve proje detayları bu sistemde. İçerik ve işlev yeniden yazılmadı.
- Reveal/hero video/ekip geçişleri ve screenshot kaydırması azaltılmış hareket tercihine uyar. Normal motion ve Web/Mobil/AI sahnesi korunur.
