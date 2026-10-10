# 07 — Phase 2 Animation Design Brief (NOT Phase 1)

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
