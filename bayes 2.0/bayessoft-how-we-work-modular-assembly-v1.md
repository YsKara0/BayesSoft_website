# BayesSoft 2.0 — How We Work: Modular Product Assembly (V1)

**Status:** Implementation brief — experimental, subject to visual approval  
**Chosen direction:** **Option 1 — Four components assemble into one finished product**  
**Scope:** Homepage **How We Work / Nasıl Çalışıyoruz** section ONLY  
**Working branch:** `feature/bayessoft-2.0` (verify before changes)  
**Implementation owner:** Codex, with human review after each phase


> **Superseded — 12 October 2026:** This document and its dashboard-oriented Phase B snapshot are retained as history. The approved visual and interaction authority is now [[bayessoft-how-we-work-assembly-interaction-spec]]. The latest user instruction authorizes that spec's complete checkpoint sequence, including entrance and hover; the old separate Phase C gate below does not govern the replacement. See [[logs/2026-10-12-interlocking-assembly]].

**12 October 2026 — Phase B implementation snapshot (historical)**
- Phase A composition approved; static joined product implemented in `ProcessSection` + `ProcessAssembly`.
- Four shared-grid regions: scope rail, full-width header, light delivery workspace, full-width operations footer. Outer corners/perimeter belong to the complete application.
- `ProcessAssembly` defaults to `pose="assembled"`; `pose="detached"` exposes prepared static starting transforms. No entrance trigger or motion is implemented.
- Mobile and reduced-motion present the finished composition; localized illustrative-interface disclosure retained.
- TypeScript/targeted lint/CSS checks passed; focused local Chrome layout checks performed. Visual acceptance remains pending.
- Phase C remains gated by a separate user approval. See [[logs/2026-10-12-process-assembly-phase-b]].

---

## 0. Non-negotiable intent

The user explicitly selected **Option 1**, not a step-switching carousel, generic timeline, scroll-driven tab strip, or four equal cards.

**The storytelling must be visible in the composition itself:**

> Four purpose-built, separate pieces approach and interlock. Together they become one tangible, complete digital product interface.

The reference video depicts precise, tactile pieces coming together; **take inspiration from the kinetic assembly principle**, not from its branding, colors, exact shapes, assets, or wording. We want the emotional payoff of the pieces locking into one system, without toy-like Lego studs, plastic bricks, or literal puzzle-piece clipart.

BayesSoft is a **custom software development company** delivering web, mobile, and AI-enabled solutions. Do not imply the showcase is an existing commercial SaaS product or invent a customer case study. The final assembled UI is an **illustrative example** and must be labeled honestly if needed.

The redesign should **reduce generic AI-template patterns and visual/text repetition**, not merely replace four cards with four more complicated cards.

## 1. Context and constraints

- Existing visual system: deep navy `#101827`, secondary navy `#17263F`; brand blue `#2563EB` and light blue `#72B8FF`; restrained purple only as accent; light UI surfaces `#F5F7FB`, `#E9EEF5`, white.
- Typography: **Space Grotesk** for headings, **Inter** for body. Reuse existing tokens/utilities when available; do not hard-code duplicates unnecessarily.
- Existing site includes a substantial **Web → Mobile → AI sticky scroll narrative**. The new section must **not become a second lengthy sticky-scroll narrative**.
- Previous process section had 4 standard cards; its replacement, a short `Sticky Process Strip`, was rejected because it changed states too quickly and repeated the upstream scroll-story pattern.
- The user and design team want a **shorter homepage**, fewer paragraphs, fewer homogeneous grids/cards, stronger visual storytelling, and an intentional premium agency feel.
- Other sections, routes, shared navigation, hero, project presentation, references, and the Web → Mobile → AI sequence are out of scope.
- Preserve locale support **TR / EN / DE**, responsive behavior, accessibility, reduced motion, current project tooling, and maintenance docs.

## 2. Visual concept: four mechanical modules, one product

Build a **single editorial composition** on the existing dark section background, optionally with an off-white finished-product surface for striking contrast.

### Before assembly

The viewer should recognize **four distinct components** situated around one coherent destination. Each uses a restrained label and a simple conceptual visual cue:

| Order | Turkish | English | Meaning | Visual cue (not a standalone icon card) |
|---|---|---|---|---|
| 01 | Anla | Understand | Requirements, goals, workflows | Inputs / discovery notes / small diagram lines |
| 02 | Tasarla | Design | User flows, system structure, UI | Wireframe grid / interface blueprint |
| 03 | Geliştir | Build | Frontend, backend, mobile, integration | Structured application blocks / connected layers |
| 04 | İşlet | Operate | Release, monitoring, iteration | Status / deployment / healthy operation indicator |

**Crucial:** The four components must be **pieces of the final artifact**, not four independent information cards that merely float toward each other. Their silhouettes, edges, transforms and visual content should make it clear why they belong together.

Possible assembly mechanism:

- A **single product canvas** is visibly divided into four complementary regions (e.g. topbar, navigation/flow, application workspace, status/operations rail). Each detached region begins near its final docking point.
- Each module moves a modest distance along a crisp path; its edges align precisely with the other regions; tiny border/lighting adjustments convey a satisfying join.
- On the fourth join, the seams subtly resolve and the composition reads as one **finished web platform/UI** — not as four adjacent panels.
- The finished UI should have clear hierarchy, plausible product functionality and strong contrast, including a controlled **light app workspace** inside a navy shell, analogous to the site's light mobile UI.
- Final scene is held long enough for the viewer to actually comprehend the finished product.

This is a suggested composition, **not permission to turn the section into a dashboard packed with metrics, finance charts, meaningless labels or dummy lorem ipsum**.

### Visual hierarchy

1. A concise section title at the top / side.
2. One dominant assembly visual (the star of the section).
3. The four process labels as **small editorial annotations** adjacent to or under the assembly, not giant repeated cards.
4. One short sentence about BayesSoft's workflow, at most.

Use generous **intentional** negative space, but do not leave large empty vertical gaps. Avoid prominent 3D extrusion, floating cubes, neon particle streams, large brain symbols, exaggerated glassmorphism, or toy bricks.

## 3. Motion direction — inspired by the supplied video

### Preferred interaction: short, self-contained entrance sequence

**Do not attach each of the four steps to large chunks of document scroll.** Instead:

- Trigger once when the section comes materially into view (e.g. IntersectionObserver / existing motion hooks).
- Allow the four modules to assemble sequentially with restrained stagger and precision easing.
- Suggested starting *feel*, not fixed requirements: total sequence about **2.0–3.2 seconds**, modest movement distances, 4 staggered joins and a short concluding settle/hold.
- The exact motion should be evaluated visually: enough time to understand individual joins, not sluggish or theatrical.
- On completion, **remain in the assembled state**, rather than automatically dismantling, endlessly looping, or demanding further scrolling.
- If the implementation requires replay, it must be optional and accessible; no mandatory playback CTA.
- Page scrolling must stay native throughout. **No scroll hijacking, forced snap, sticky lock, extra viewport-length spacers, or artificial long `svh` stage**.
- Re-entry behavior should be deliberate (prefer completed state rather than restarting each time user scrolls back).
- Do not hide the section's meaning while JS or motion code loads.

### Animation craft

- Use primarily `transform` and `opacity` for moving elements.
- Subtle edge-fit / seam dissolve / shadow changes are acceptable, but do not animate expensive layout properties every frame.
- Ease-out on approach; precise final docking with no exaggerated spring bounce.
- The final merge moment should be perceptible but restrained (e.g. a 150–250ms surface highlight or seam convergence), never a large bloom or shockwave.
- Keep all elements readable during and after motion.
- Do not animate letter-by-letter text or cycle through large paragraphs.

### Reduced motion / failure-safe

- Respect `prefers-reduced-motion: reduce`: present the **finished, joined product** immediately, with clearly legible step descriptions.
- If IntersectionObserver/animation JS fails, the finished composition and labels must still be intelligible; avoid blank stages.
- Never rely exclusively on color or animation to communicate step order.
- Avoid automatically restarting animation on resize, tab focus, or re-entering viewport.

## 4. Content and localization

Write **short, meaningful copy** in TR / EN / DE using the project's existing i18n pattern. Avoid inventing unsupported case-study claims.

### Recommended Turkish

**Eyebrow:** `NASIL ÇALIŞIYORUZ`  
**Headline:** `Dört adım. Tek bir çalışan ürün.`  
**Optional subline:** `İhtiyacı anlar, deneyimi tasarlar, geliştirir ve birlikte büyütürüz.`

**Steps** (for labels / subtle annotations):

- `01 Anla` — `İhtiyacı ve hedefi netleştiririz.`
- `02 Tasarla` — `Akışı ve mimariyi şekillendiririz.`
- `03 Geliştir` — `Ürünü uçtan uca inşa ederiz.`
- `04 İşlet` — `Yayınlar, izler ve iyileştiririz.`

**Final annotation** (only if useful): `Tek bir bütün. Uçtan uca sahiplenme.`

### Recommended English

**Eyebrow:** `HOW WE WORK`  
**Headline:** `Four stages. One working product.`  
**Optional subline:** `We understand the need, design the experience, build, and improve together.`

- `01 Understand` — `Clarify the need and the goal.`
- `02 Design` — `Shape the flow and architecture.`
- `03 Build` — `Develop the product end to end.`
- `04 Operate` — `Launch, monitor, and improve.`

### Recommended German

**Eyebrow:** `SO ARBEITEN WIR`  
**Headline:** `Vier Schritte. Ein funktionierendes Produkt.`  
**Optional subline:** `Wir verstehen den Bedarf, gestalten das Erlebnis, entwickeln und verbessern gemeinsam.`

- `01 Verstehen` — `Bedarf und Ziele klären.`
- `02 Gestalten` — `Abläufe und Architektur entwerfen.`
- `03 Entwickeln` — `Das Produkt ganzheitlich umsetzen.`
- `04 Betreiben` — `Veröffentlichen, überwachen und verbessern.`

Treat these as editorial starting copy: validate length and fit for all locales, especially German. Preserve semantic meaning and reuse translation source files; do not hardcode Turkish inside components.

## 5. Layout behavior

### Desktop (primary experience)

- A wide, horizontally oriented central assembly stage with compact copy.
- The four modules are identifiable through labels and docking movement, but the **assembled artifact should dominate**.
- Aim to fit headline, assembly stage and step labels into a **compact standard section**, without introducing substantial additional page height relative to a normal content section.
- The completion state can display a plausible web product UI with clear topbar, workflow workspace and operations status; avoid the exact same BayesSoft Studio panel seen elsewhere on the homepage.
- Use one primary focal point and strong visual alignment. Avoid separate oversized explanation columns on both sides of the motion stage.

### Tablet

- Allow the stage to shrink or stack selectively, with correct aspect ratio and legible labels.
- No horizontal overflow; preserve component final docking precision.
- Reduce motion travel and decorative layers if necessary.

### Mobile

- Favor a simpler, deliberately designed presentation over squeezing the desktop animation down.
- Could show a vertical compact assembly into one product preview, or **a static assembled composition with 4 concise labeled steps** if that looks meaningfully better.
- No sticky scroll; no forced swiping or taps to read essential content.
- Avoid tiny illegible UI text inside the product preview; prioritize recognizable structure.
- Keep touch targets at accessible sizes if any interactive element is added.

### Small viewport heights

- Content must remain reachable by ordinary scrolling. No clipped final reveal, header collisions or blank hold frames.

## 6. Engineering and performance

Before implementing, inspect actual source files and the current process component. Do not assume file names or the exact motion library API. Use the project's existing Next.js, CSS, and motion tooling. Reuse existing components/tokens where sensible.

Recommended technical shape (adapt to real code):

- A single `HowWeWork` section component with a focused visual stage child.
- Data-driven localized step definitions, not duplicated copy.
- **Transforms over layout animation** for the moving modules; minimal shadow/filter animation.
- Intersection-triggered run-once behavior, with a robust initially visible/fallback final state.
- An explicit reduced-motion variant that does not instantiate unnecessary motion work.
- Keep effects scoped: no page-wide event listeners, no heavy scroll polling, no WebGL/canvas dependency, no heavy new packages.
- Prefer DOM/CSS/SVG geometry where it produces a crisp, scalable result. For precision docking, measured anchors or a shared scalable SVG coordinate system may be better than magic pixel offsets. Choose maintainability and smooth resizing.
- Ensure semantic heading structure and screen-reader-friendly descriptions; decorative assembly pieces should not create noisy repetitive announcements.
- Avoid hydration errors and preserve static export compatibility if the repository uses it.
- Do not download remote stock assets or introduce external design resources.

**Performance target:** Keep this animation visibly smooth on ordinary mid-range devices; no excessive compositor layers or gratuitous shadows. Optimize first for layout stability and input responsiveness, not benchmarks built around synthetic assumptions.

## 7. Implementation strategy — do not overbuild in one pass

The user prefers iterative, scoped Codex work and quick manual design review.

### Phase A — Inspect and propose (no code changes yet)

1. Read existing process section, CSS, i18n and relevant `bayes 2.0/` Obsidian docs.
2. Identify why the current sticky process strip is too similar to the Web–Mobile–AI sequence.
3. Propose a concrete stage topology: exact four detachable subassemblies and the final joined product UI, with a concise text wireframe.
4. Choose the trigger strategy and responsive fallback.
5. Summarize changed files anticipated and risks.
6. **Stop and request user approval of the composition before implementation.**

### Phase B — Build visual composition (only after approval)

1. Replace the old strip structure with the agreed stage.
2. Start from the final fully assembled state and verify it looks like one premium product UI.
3. Implement the four detachable starting poses and positioning, **without full animation yet**.
4. Test static desktop/tablet/mobile layout manually where possible.
5. Keep copy short and translations complete.
6. Report and request visual review if composition differs materially from plan.

### Phase C — Add assembly motion (only after composition approval)

1. Implement sequential join animation, triggered on viewport entry.
2. Ensure controlled timing and final hold state.
3. Add reduced-motion and fallback.
4. Run targeted lint/type/build tests and inspect for responsive regressions.
5. Keep scroll position and all upstream animation semantics unchanged.

### Phase D — Visual polish and acceptance

1. Check visual hierarchy, docking alignment, long locales, button/focus behavior, contrast, and any responsive crop.
2. Keep the dark navy section integrated with surrounding backgrounds.
3. Remove old obsolete process-strip code/assets if safe, without affecting unrelated content.
4. Report exact scope, unresolved visual checks and approximate section footprint.

**Do not proceed silently from one phase to the next.** At every phase boundary, produce a short decision-ready report and wait for the user's response.

## 8. Explicit anti-patterns (reject if seen)

- Four evenly spaced independent cards, even if they slide together.
- Tabs/segmented control that swaps one text body on scroll.
- A long sticky area with 4 scroll thresholds and giant dead zones.
- The same UI screenshot appearing with progressively overlaid icons.
- Excessive text explaining what the animation should show.
- Decorative 3D cubes, Lego studs, comic-style puzzle motifs, random gradients, generic robot/brain graphics.
- A permanently looping animation that competes with other site movement.
- Unsupported claims such as a live BayesSoft SaaS or delivered product that does not exist.
- Reuse of confidential/unreleased client features, screenshots or data.
- Changes to Hero, Web–Mobile–AI, projects, references, header, footer or global motion tokens without explicit approval.

## 9. Acceptance criteria

### Visual/design
- [ ] The composition unmistakably reads as **four distinct parts becoming a single complete product**.
- [ ] Completed stage looks like **one coherent application**, not adjacent cards.
- [ ] Premium tone, believable UI, no toy-like design.
- [ ] Meaningfully less text than the original 4-card section.
- [ ] Clear visual hierarchy, refined typographic rhythm, tasteful light/dark contrast.
- [ ] Does not duplicate the hero example application or upstream workflow panel exactly.

### Motion/UX
- [ ] On-entry animation is easy to follow at normal scrolling speed.
- [ ] Native scroll is never blocked or locked.
- [ ] The final assembled state remains visible long enough to inspect.
- [ ] No infinite loop or scroll back-trigger flicker.
- [ ] Reduced-motion is a complete, legible static result.
- [ ] Mobile and short-height desktop experiences remain coherent.

### Delivery
- [ ] TR, EN, DE all fit and communicate the same process.
- [ ] No unrelated section changed.
- [ ] No new heavyweight dependency.
- [ ] TypeScript, targeted lint, relevant tests, production build pass where practical.
- [ ] `git diff --check` passes.
- [ ] Relevant Obsidian documentation (`bayes 2.0/`) updated with design decisions and implementation outcomes **when code has been changed**.
- [ ] **No commit, push, merge, or deploy.** These are user-controlled.

## 10. What to report back

At the end of Phase A, provide:

- Files/components inspected.
- Concrete **four-module → final product** wireframe description.
- Visual layout plan for desktop and mobile.
- Proposed entrance motion, timing and reduced-motion behavior.
- Expected changes, risks and why it does not repeat the current sticky story.
- The exact question: **“Approve this composition for Phase B implementation?”**

For any later phase, report:

- What changed, files modified, checks completed and results.
- What still needs real browser visual inspection.
- Any trade-off or deviation from this brief.
- Confirmation of no commit/push/deploy.

---

**Guiding principle:** Do not use animation to compensate for a weak static design. Build a compelling final product composition first; then make the four modules assemble into it.
