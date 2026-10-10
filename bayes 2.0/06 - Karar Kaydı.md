# 05 — Decision Log (confirmed vs proposals)

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


> Kaynak: Kullanıcının ZIP'i / docs/05-decisions.md. Güncel durum ve bu turdaki kapsam için [[07 - AI Handoff]] ve [[08 - Phase 1 Tasarım Önerisi]] okunur. Mevcut Obsidian kasası kullanıcı kararıyla bayes 2.0/ konumunda korunur.


## Confirmed by user
| ID | Decision / constraint | Status |
|---|---|---|
| D-001 | BayesSoft aims both client custom software and eventually own SaaS | Confirmed strategy |
| D-002 | No current own commercial SaaS product to present | Confirmed current state |
| D-003 | Premium + Interactive (option C) visual direction | Confirmed |
| D-004 | Current site is perceived as overly dark; lighten/balance | Confirmed problem |
| D-005 | Hero-following Web/Mobile/AI animation unclear, especially Web and AI; mobile most understandable | Confirmed user feedback |
| D-006 | Start with Phase 1 design system | Confirmed |
| D-007 | Prefer experimentation in a separate `bayessoft 2.0`-named Git branch | Confirmed intent; actual branch not verified |
| D-008 | Keep shared Markdown/Obsidian documentation so models can transition without losing context | Confirmed |
| D-009 | Work could not access prior conversation context, so user requested portable ZIP | Confirmed |

## Strong recommendations (not automatically approved as exact implementation)
| ID | Proposal | Status |
|---|---|---|
| P-001 | Use `feature/bayessoft-2.0` branch name | Proposed; check Git |
| P-002 | Balanced Premium colors (see `02-design-system.md`) | Preferred starting palette; adjust after audit |
| P-003 | Dark hero + light interactive/services + dark featured work + light projects + dark CTA | Proposed rhythm |
| P-004 | Defer SaaS/Products nav until product exists | Accepted planning direction, final nav subject to review |
| P-005 | Web / Mobile / AI three explanatory scenes with concrete UI | Phase 2 concept, not approved final design |
| P-006 | Use Opus for initial UI pass, GPT for independent review | Workflow suggestion, not a hard dependency; model availability/suitability may change |
| P-007 | Use Obsidian vault in project `docs/` and AI handoff documents | Proposed integration; repo path not confirmed |
| P-008 | No implementation before design audit and user approval | Explicit agent workflow constraint |

## Decisions that were superseded
- The initial BayesSoft Solutions / BayesSoft Products dual-division homepage and dedicated Products menu were proposed, but subsequently dropped for the current version because the company has **no SaaS product yet**.
- Initial 9-section homepage plan with a Products/Labs section was replaced by a simpler service-focused ~8-section plan.
- Website building should be listed as service, **not SaaS**.

## Unknown / to verify
Actual repo path and current branch; whether existing site uses Next.js and exact setup; final logo files/fonts; actual ownership/status and screenshot approvals for each portfolio item; current accessible color values; deployment integration with Git; existing tests and scripts. No changes made by this package.


## 10 Ekim 2026 — Güncel kullanıcı kararı

Mevcut bayes 2.0/ Obsidian kasası korunur. Kullanıcının son talebi “Phase 1’i tamamen yap” ile header/hero sınırı kaldırılmıştır: mevcut tüm sayfalara Balanced Premium renk, tipografi, yüzey, kart, buton, form ve footer sistemi uygulanabilir. İçerikler, URL/SEO ve işlevler korunur. Normal animasyon akışı yeniden tasarlanmaz; erişilebilirlik için azaltılmış hareket tercihi desteklenir. Web/Mobil/AI sahnesinin kaynakları değişmez ve Phase 2’de ele alınır. Commit/push/deploy açık onay gerektirir.

### D-010–D-014 — Kullanıcının bu sohbette verdiği onay

- D-010: Başarısız yeşil önizleme kodları tamamen kaldırılır; diğer çalışmalar korunur.
- D-011: Mevcut kasa korunur; hatalı Markdown notları ZIP kararlarıyla düzeltilir.
- D-012: Renk/header/hero ilk geçişi uygulanabilir; animasyon yeniden tasarımı Phase 2.
- D-013: Kalan bölüm uygulaması desktop/mobile değerlendirmesi sonrası onay bekler.
- D-014: Commit, push, deploy ayrıca açık onay gerektirir.

Repo C:/Users/yavuz/Desktop/BayesSoft_website ve mevcut feature/bayessoft-2.0 dalı doğrulandı. Paket içindeki repo belirsizliği giderildi.


### D-015 — Phase 1 site geneli onayı

Kullanıcı “simdi devam et ... phase 1 i tamamen yap” dedi. D-013 header/hero değerlendirmesi sonrası diğer alanlara geçiş kısıtı bu yeni kullanıcı talebiyle kaldırıldı. Site geneli görsel sistem uygulanır; görsel QA/kullanıcı kabulü ayrıca takip edilir. D-014 yayın/commit kısıtı sürer.

### D-016 — Lacivert ağırlıklı yön

Kullanıcı geniş beyaz alanlar yerine lacivert ağırlıklı premium görünüm ve beyaz detaylar istedi. P-003 önerisinin geniş açık bölüm yorumu geçersiz; renk değerleri değil, yüzey dağılımı revize edilir. Kullanıcı tam sayfa görüntüsünü inceleyip devam etme onayı verdi. Nihai tasarım kabulü bekliyor.
