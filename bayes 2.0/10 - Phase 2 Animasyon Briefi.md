# 07 — Phase 2 Animation Design Brief (NOT Phase 1)

## 12 Ekim 2026 — AI sahnesi görsel revizyonu

Üç ayrı iş akışı kartı yerine tek örnek AI Workflow Studio arayüzü: talep listesi, AI özeti/kategori/öncelik önerisi ve insan onaylı aksiyonlar. Normal/reduced-motion aynı statik arayüzü kullanır; scroll aralıkları ve bölüm yüksekliği değişmez. Önceki üç kart görünümü tarihsel kayıttır. Detay: [[logs/2026-10-12-ai-workflow-studio]].

## 11 Ekim 2026 — Onaylı sahneler için timing revizyonu

Mobil erken kaybolma geri bildirimi sonrası tasarımlar korunarak aralıklar revize edildi: Web hold %0–28, ortak geçiş %28–36, Mobil hold %36–70, ortak geçiş %70–78, AI hold %78–100. Mobil metin ve telefon ortak opacity ile çıkar; telefon %36'da yerleşmiş olur. Önceki %65–70 telefon çıkışı artık geçersizdir. Toplam section yüksekliği/scroll altyapısı/reduced-motion korunur. Detay: [[logs/2026-10-11-scene-timing]].

## 11 Ekim 2026 — AI uygulama aşaması

Web ve Mobil içerikleri korunur; yalnızca Mobil telefon header'dan biraz uzaklaştırılır. AI artık örnek talep → özet/kategori önerisi → insan onayıyla görev oluşturma akışıdır. Yeni AIScene; eski soyut ekosistem ve legacy telefon kaldırılır. Başlık “Tekrarlayan işleri akıllı akışlara dönüştürün.”, özel AI hizmeti açıklaması, TR/EN/DE. Scroll süresi/bölüm yüksekliği bu aşamada değişmez. Yeni telefon AI girişinden önce çıkar; eski telefonun geri gelmesi önceki ara uygulama kararıydı, artık geçersizdir. Detay: [[logs/2026-10-11-ai-workflow]].

## 11 Ekim 2026 — Mobil uygulama aşaması

Web sahnesi kullanıcı tarafından beğenildi ve korunur. İkinci aşama yalnızca Mobil: “İşiniz, her an yanınızda.” başlığı, hero ile uyumlu açık telefon ekranı ve Web sahnesindeki aynı görevin bildirim/detayı. Mobil uygulama hizmetini anlatan açıklama eklenir. AI girişindeki eski telefon/sahne korunur; yeni ekran mevcut geçiş penceresinde fade eder. Scroll aralıkları/bölüm yüksekliği değişmez. AI ve scroll kısaltma sonraki adımlardır. Detay: [[logs/2026-10-11-mobile-scene]].

## 11 Ekim 2026 — Aşamalı uygulama kararı

Üç sahnelik storyboard genel olarak onaylandı; ilk uygulama yalnızca Web sahnesidir. Başlık: “İş süreçleriniz, tek ekranda.” Yeni WebScene; örnek kurumsal platform/proje listesi ve seçili görev detayıyla özel yönetim panelleri/kurumsal web platformu hizmetini anlatır. Hero ile uyumlu lacivert panel, Space Grotesk başlık, Balanced Premium renkler. Mobil/AI sahneleri ve mevcut 340/280/260svh yükseklikler korunur. Önceki 240svh desktop/220svh tablet ve statik mobil önerileri bu tur uygulanmadı. Sonraki sahneler ve scroll kısaltma ayrı aşamalardır. Detay: [[logs/2026-10-11-web-scene]].

> Kaynak: Kullanıcının ZIP'i / docs/07-animation-phase2.md. Güncel durum ve bu turdaki kapsam için [[07 - AI Handoff]] ve [[08 - Phase 1 Tasarım Önerisi]] okunur. Mevcut Obsidian kasası kullanıcı kararıyla bayes 2.0/ konumunda korunur.


## User observation
Post-hero storytelling isn't very good; mobile scene communicates the purpose, web and AI do not. Current narrative Web → Mobile → AI may be read as mandatory sequential layers rather than separate services customers can buy.

## New narrative direction
Use **three concrete, independently intelligible service demonstrations**; connecting transitions can be elegant but should not imply all customers must need all three.

### Scene 01 — Web / Custom Software
Desktop frame with recognizable business dashboard/admin panel. Reveal navigation, metrics, records, interactions; narrative: `İşletmenizin süreçleri tek ekranda.` Do not show only random code, circuits or wireframes.

### Scene 02 — Mobile
High-quality phone mockup with plausible app UI, notification/action interactions; narrative: `İşletmeniz müşterilerinizin cebinde.` Current strongest communicated scene, improve polish, do not overengineer.

### Scene 03 — AI / Automation
Represent real process: new customer inquiry → AI classification/summary/routing → visible business result within dashboard. Narrative: `Tekrarlayan işleri akıllı sistemlere bırakın.` Avoid generic glowing robot brains or misleading claims about deployed capabilities.

## Interaction/technical constraints
- Readable in ~5–10 seconds even when user skips animation; titles and explanations remain visible.
- Short, controlled transitions; avoid long scroll traps/sticky lock-in.
- Desktop: scroll or step-based transitions; tablet/mobile: simpler static/short motion or swipe/step UI.
- Handle `prefers-reduced-motion`, no horizontal overflow, no FPS/performance regressions.
- Candidate tools Motion or GSAP ScrollTrigger, based on actual existing dependencies; heavy WebGL not required.
- Design/storyboard and agree on real product UI assets before implementation.
