# 04 — BayesSoft 2.0 Roadmap

## 11 Ekim 2026 — Vitrin son küçük ayarlar

- [x] Kontrollü canlı UI vurguları; alt caption kaldırıldı, hero alt boşluğu azaltıldı.
- [x] TypeScript, hedefli lint, CSS parse/caption kontrolü ve diff-check.
- [ ] Kullanıcı manuel görsel değerlendirmesi.

Detay: [[logs/2026-10-11-showcase-final-tweaks]].

## 11 Ekim 2026 — Telefon açık tema

- [x] Telefon örnek arayüzü soft blue-gray zemin/beyaz kart/lacivert metinle açık temaya geçirildi; web paneli koyu kaldı.
- [x] CSS parse/tema ayrımı ve diff-check.
- [ ] Kullanıcı manuel değerlendirmesi; kompozisyon ve diğer bölümler korundu.

Detay: [[logs/2026-10-11-phone-light-theme]].

## 11 Ekim 2026 — Premium web paneli ve telefon çerçevesi

- [x] Laptop kabuğu/perspektifi kaldırıldı; örnek web paneli ince kenarlık/gölge ile sunuldu.
- [x] Ön plan telefon bezel/köşe/island ve kenar detayları rafine edildi.
- [x] TypeScript, hedefli lint, CSS/sınıf kontrolü ve diff-check.
- [ ] Kullanıcı manuel kompozisyon değerlendirmesi.

Detay: [[logs/2026-10-11-showcase-web-panel]].

## 11 Ekim 2026 — Laptop/arayüz kontrast revizyonu

- [x] Laptop %10 küçültülüp yukarı dengelendi; telefon boyutu korundu.
- [x] Web/mobil örnek ekran yüzeyleri, ikincil metin ve mavi/mor göstergeler güçlendirildi.
- [x] CSS parse, ölçek/telefon genişliği hesabı ve diff-check.
- [ ] Kullanıcı manuel ilk viewport ve ekran kontrastı değerlendirmesi.

Detay: [[logs/2026-10-11-showcase-contrast]].

## 11 Ekim 2026 — Hero örnek arayüz geçişi

- [x] Hero üst etiketi kaldırıldı; üst boşluk ve CTA–cihaz aralığı azaltıldı, cihazlar küçültülmedi.
- [x] BayesSoft örnek web/mobil çalışma alanı: projeler/görevler/ekip/aktiviteler, TR/EN/DE.
- [x] TypeScript, hedefli lint, CSS parse/sınıf kontrolü ve diff-check.
- [ ] Kullanıcı manuel cihaz ekranı ve ilk viewport değerlendirmesi (MacBook boyutları dahil).

Web–Mobil–AI scroll geçişi bu kapsamda değişmedi. Detay: [[logs/2026-10-11-hero-sample-interfaces]].

## 11 Ekim 2026 — Vitrin ölçek revizyonu

- [x] Masaüstü cihaz kompozisyonu %12 küçültüldü; hero başlığı ve CTA–vitrin aralığı dengelendi. Mobil/tablet ve placeholder korunur.
- [x] CSS parse, 1280/1440/1512px ölçek hesabı ve diff-check.
- [ ] Kullanıcı manuel görsel değerlendirmesi; cihaz ekranı tasarımı sonraki adımdır.

Detay: [[logs/2026-10-11-showcase-scale]].

## 11 Ekim 2026 — Hero cihaz vitrini

- [x] Yeni HeroShowcase: responsive statik laptop + önde solda telefon, sade placeholder ekranlar.
- [x] TypeScript, hedefli lint, CSS parse ve diff-check.
- [ ] Kullanıcı manuel cihaz kompozisyonu değerlendirmesi.

Detaylı dashboard ve yeni animasyon bu aşamada uygulanmadı. Detay: [[logs/2026-10-11-hero-showcase]].

## 11 Ekim 2026 — Hero ölçek revizyonu

- [x] Masaüstü başlık yaklaşık %24 küçültüldü; mobil ölçek korundu. Dikey ritim ve içerik yüksekliği gelecekteki ürün görseline uygun düzenlendi.
- [x] CSS parse, masaüstü ölçek hesabı ve diff-check geçti.
- [ ] Kullanıcının son hero görünümünü manuel değerlendirmesi; ürün görseli henüz eklenmedi.

Detay: [[logs/2026-10-11-hero-scale]].

## 11 Ekim 2026 — Hero sade kompozisyon geçişi

- [x] Space Grotesk hero fontu kullanıcı tarafından beğenildi; korunur.
- [x] Ortalanmış hero başlık/açıklama/CTA ve hafif lacivert-mavi/mor glow uygulandı; video kullanımı kaldırıldı, dosyalar korundu.
- [x] TypeScript, hedefli lint, CSS/içerik-CTA kontrolü ve diff-check.
- [ ] Bu hero kompozisyonunun kullanıcı manuel görsel değerlendirmesi.

Bu tur diğer bölümlere ve Web–Mobil–AI sahnelerine dokunulmadı. Detay: [[logs/2026-10-11-hero-centered]].

## 11 Ekim 2026 — Phase 2 hero tipografi denemesi

- [x] Yalnızca hero H1 için yerel Space Grotesk 700 denemesi; Inter ve mevcut hero içeriği/işlevi korunur.
- [x] Türkçe glifler ve tek font varlığı üretimi kontrol edildi; typecheck/lint/diff-check geçti.
- [ ] Montserrat ile kullanıcı görsel karşılaştırması ve font tercihi.

Web–Mobil–AI sahne yeniden tasarımı başlamadı. Detay: [[logs/2026-10-11-hero-space-grotesk]].

## 11 Ekim 2026 — Küçük iyileştirme geçişi

- [x] Kullanıcının onayladığı sekiz iyileştirme: bölüm ritmi/boşluk, mobil kart yüksekliği, başlıklar, proje hizası/kontrastı, referans logoları, footer ve token tutarlılığı.
- [x] 768–1023px animasyon metin sütunlarında CSS düzeltmesi; sahneler ve çalışma mantığı korunur.
- [x] TypeScript, ESLint, Tailwind CSS üretimi ve diff-check.
- [ ] Bu revizyonun kullanıcı tarafından manuel görsel kontrolü ve kabulü (1440/768/390px, TR/EN/DE).

Lacivert kimlik/açık alan dağılımı ve hero videosu korunur. Phase 2 başlamadı. Önceki Mac tarayıcı incelemesi yapıldı; aşağıdaki Windows engeli bu tur için geçerli değildir. Bu turda kapsamlı tarayıcı QA veya build çalıştırılmadı. Detay: [[logs/2026-10-11-phase1-refinements]].

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


> Kaynak: Kullanıcının ZIP'i / docs/04-roadmap.md. Güncel durum ve bu turdaki kapsam için [[07 - AI Handoff]] ve [[08 - Phase 1 Tasarım Önerisi]] okunur. Mevcut Obsidian kasası kullanıcı kararıyla bayes 2.0/ konumunda korunur.


## Phase 0 — Documentation and Git safety
- [x] Confirm website repo root (not just Obsidian vault).
- [x] Inspect Git status and default/prod branches.
- [x] Choose/create isolated `feature/bayessoft-2.0` branch after preserving local changes.
- [x] Import ZIP references into the existing `bayes 2.0/` Obsidian vault (user superseded `docs/` proposal).
- [x] Add `AGENTS.md`, `CLAUDE.md` pointers and confirm agent read workflow.
- [x] Device-specific `bayes 2.0/.obsidian/` settings ignored; Markdown vault content remains versioned for Mac handoff.

## Phase 1 — Premium balanced visual system (site-wide implementation done; visual QA pending)
- [x] Audit Next.js implementation, design tokens, CSS, fonts, header/footer, shared components, existing responsive and animation behavior.
- [x] Produce Phase 1 proposal with exact change list, final palette and contrast justification; get user approval.
- [x] Establish semantic light/dark tokens anchored on Balanced Premium palette.
- [x] Refine typographic hierarchy, buttons, nav, cards, spacing, section backgrounds, footer.
- [x] Keep actual homepage animation/functionality/SEO/URLs unchanged.
- [ ] Validate typecheck, lint, tests, build, desktop/tablet/mobile visual QA, keyboard/reduced motion; record actual output.
- [ ] Review screenshots with user and accept/revise before Phase 2.

## Phase 2 — Hero and post-hero interactive experience
- [ ] Design Web/Mobile/AI explanatory scenes and test for comprehension.
- [ ] Web: recognizable dashboard / business process (not mere abstract circuit).
- [ ] Mobile: realistic interactive smartphone UI (existing strongest segment).
- [ ] AI: concrete automation workflow (input → classification/analysis → actionable result), not generic glowing brain.
- [ ] Keep motion short, performant, scroll-friendly, mobile-appropriate; reduced motion fallback.
- [ ] Approve storyboard before implementation; preserve usability without JS motion.

## Phase 3 — Portfolio/content and page refinement
- [ ] Real screenshots and featured work cards, client permissions.
- [ ] Clear project types, honest statuses, problem/solution/outcome.
- [ ] Service positioning for corporate websites + custom software + mobile + AI/backend.
- [ ] About/team storytelling, concise process, contact conversion.

## Phase 4 — QA, SEO, measurement and launch readiness
- [ ] End-to-end functional review, responsive/contrast/performance checks.
- [ ] SEO metadata, analytics and CTA/form instrumentation as permitted.
- [ ] Review new branch/staging; only deploy/merge on explicit owner approval.

## Future — Actual BayesSoft SaaS
Only when independently-owned product and actual value proposition/launch status exist, add Product pages, demos, onboarding or pricing. **Not part of current phases.**


## 10 Ekim 2026 — Güncel kullanıcı kararı

Mevcut bayes 2.0/ Obsidian kasası korunur. Kullanıcının son talebi “Phase 1’i tamamen yap” ile header/hero sınırı kaldırılmıştır: mevcut tüm sayfalara Balanced Premium renk, tipografi, yüzey, kart, buton, form ve footer sistemi uygulanabilir. İçerikler, URL/SEO ve işlevler korunur. Normal animasyon akışı yeniden tasarlanmaz; erişilebilirlik için azaltılmış hareket tercihi desteklenir. Web/Mobil/AI sahnesinin kaynakları değişmez ve Phase 2’de ele alınır. Commit/push/deploy açık onay gerektirir.


## Güncel doğrulama durumu

- [x] Lint, typecheck ve build (18 statik sayfa).
- [x] 11 bileşen/sayfada className dışındaki normalize kaynak karşılaştırması; içerik ve işlev değişmedi.
- [x] WebToMobileTransition, data, URL/SEO içeriği, .obsidian ve secret dosyaları için değişiklik yok kontrolü.
- [ ] Desktop/tablet/mobile görünüm, etkileşim, klavye ve reduced-motion tarayıcı kontrolü.
- [ ] Kullanıcı tasarım kabulü. Sonra Phase 2 storyboard; henüz Phase 2 uygulaması yok.

Tarayıcı engeli devam ediyor: kullanıcı yerel adres için Her zaman izin ver seçti, fakat araç kayıtlı izin nedeniyle erişimi reddetti. Görsel QA tamamlanmış değildir.
