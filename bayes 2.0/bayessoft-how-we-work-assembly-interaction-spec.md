# BayesSoft 2.0 — How We Work: Modular Assembly Interaction

**Status:** Approved concept / implementation brief  
**Language:** English instructions; visible product copy must support TR / EN / DE.  
**Scope:** Homepage **“Nasıl Çalışıyoruz / How We Work”** section only.  
**Branch:** `feature/bayessoft-2.0` (verify before editing).  
**Authority:** This document supersedes the earlier *project delivery workspace* / 960×390 dashboard composition and the old Sticky Process Strip for this section. It does **not** authorize changes to the separate Web → Mobile → AI story, hero, projects, header, or other sections.

> **Implementation record — 12 October 2026:** Checkpoints 0–5 implemented with focused validation. Four shared-path vector joints replace the rejected dashboard; one-time 1.3s entry and 380ms shared hover/rejoin use the existing Framer Motion. Mobile/touch/reduced-motion and already-visible SSR/restored-scroll encounters are joined immediately. TypeScript, targeted ESLint, geometry/state checks, production build (18 pages), and Chrome checks at 1440/1024/768/390/360px passed. Acceptance checkboxes below remain the user's visual review checklist, not a claim of exhaustive hardware QA. Details and limitations: [[logs/2026-10-12-interlocking-assembly]].

---

## 1. Non-negotiable creative objective

Create an unusually polished yet **simple** interactive composition inspired by the user's reference of small, clean, physically interlocking blocks.

**Four recognizable modules form one elegantly joined object.** The interaction has three primary moments:

1. **Initial encounter:** the modules begin visibly but modestly separated.
2. **Assembly:** when the section meaningfully enters the viewport, they slide into their complementary joints **once** and settle into one coherent artifact.
3. **Exploration:** after assembly, hovering over the joined object gently separates the pieces; leaving joins them again. No continuous animation or scroll-controlled scrubbing.

The relationship between parts and whole is the product story: **Understand → Design → Build → Operate → one working product.**

**Critical aesthetic correction:** Do not treat these modules as the header/sidebar/workspace/footer of a fake software dashboard. The previous implementation created a very large, complex application screenshot. That was explicitly rejected. The user preferred the much simpler second visual concept: four minimal pieces, a central lighter piece, tactile interlocks, concise labels, and plenty of negative space. The delight should be in the **geometry and motion**, not dashboard complexity.

### Definition of success

A person should understand the metaphor and enjoy the satisfying 'click-together' movement in 1–2 seconds **without needing to read a long paragraph**. The idle joined state must be a beautiful composition even with animation disabled.

---

## 2. The target visual composition

Build **one four-part asymmetric geometric artifact** (not four cards lined up, not four equal panels):

- **01 Understand / Anla** — a relatively narrow, upright **left piece**; dark navy/slate with a restrained cool-blue rim. It presents the short step title and perhaps 1–2 minimal abstract strokes. It should have a physical outward tab/connection shape on its right edge, aligned with the central piece's corresponding recess.
- **02 Design / Tasarla** — a **thin elongated top piece**, spanning much of the composition; deep blue/navy with a restrained cool-purple accent. It has a complementary notch/tab at its underside and minimal abstract layout marks.
- **03 Build / Geliştir** — the **largest central/right piece**, an off-white / cool very-light-grey surface, to provide strong tonal contrast. This is a minimalist representation of a finished digital product, **not an elaborate dashboard**: a tiny browser-like UI hint, a couple of well-aligned lines, a minimal rounded field, maybe one simplified code/layout symbol. Short title and minimal geometry, not a product screenshot full of controls.
- **04 Operate / İşlet** — a **low elongated bottom piece**, dark slate/navy with one restrained teal/green operation indicator, completing the lower edge.

These proportions are a proposed starting point, not hardcoded screenshot dimensions. Make the actual joints precise: visible plug-and-socket / tongue-and-groove shapes. A notch cannot merely be an empty CSS gap, and the joined state must not look like four regular rectangles. Each piece must retain its own identity when separated. When joined, the perimeter should read as one purposeful designed object.

### Important limits

- Prefer **four modules total**. Do not add a separate fifth “result card”, large auxiliary dashboard, charts, menus, floating technology icons, or giant explanatory panels.
- Do not add dense product UI, SaaS branding, client names, customer claims, invented KPIs, or an AI assistant.
- **Do not reproduce the previously rejected portal/dashboard** by painting its four regions differently.
- Do not use obvious toy LEGO cylinders, shiny plastic toy renderings, exaggerated glossy 3D, huge neon glow, or game-like bounce. “Interlock” describes **geometry**, not literal branded LEGO parts.
- Reference video style: a clean composition, purposeful negative space, small mechanical alignment and a satisfying completed fit. Do not copy its assets, branding, or text.
- Keep the section distinct from the preceding Web–Mobile–AI interactive showcase. It should be a brief punctuation mark in the page, not another full-screen scroll chapter.

### Color and typography

Use the existing design tokens where feasible. Suggested visual roles:

| Role | Guidance |
|---|---|
| Section background | Existing very dark navy, continuous with surrounding sections |
| Understand piece | Deep slate/navy, faint blue edge |
| Design piece | Deep blue with **small** restrained violet highlight |
| Build piece | Cool off-white/light grey (`#F3F6FB`-like), dark navy text |
| Operate piece | Deep slate/navy with a small muted teal/green status cue |
| Shadows | Soft, controlled contact shadows; avoid overly luminous glows |
| Typography | Existing Space Grotesk headings, Inter text, established responsive scaling |

The website should **not become all blue**. Let the light Build module create the contrast. Use minimal accents, not decorative gradients for their own sake.

---

## 3. Copy and section structure

Keep the heading area modest and aligned with existing site style:

- Eyebrow: `NASIL ÇALIŞIYORUZ` (localized).
- Heading: `Dört adım. Tek bir çalışan ürün.` (can preserve the currently approved localized variant if typesetting is cleaner).
- Optional single brief supporting sentence **only if genuinely needed**. Do not restore a full paragraph.
- Central illustration: the four interlocking modules.
- Bottom annotations: short step labels `01 Anla · 02 Tasarla · 03 Geliştir · 04 İşlet` (localized). One short sentence per step maximum, preferably concise enough that the section stays airy. Avoid adding a second row of boxed cards.

Suggested Turkish one-line meanings (adapt to fit all three locales):

1. **Anla:** `İhtiyacı ve hedefi netleştiririz.`
2. **Tasarla:** `Çözümün yapısını kurarız.`
3. **Geliştir:** `Ürünü birlikte inşa ederiz.`
4. **İşlet:** `Yayımlar, izler ve iyileştiririz.`

The four stage labels should be readable in the **joined state**, not obscured by notches or motion. Illustrative disclosure is optional if the composition is manifestly abstract; if a UI example is recognizable as a real-looking product, retain localized “Örnek arayüz”.

### Desktop proportions

- One compact centered composition with useful breathing room around it.
- Prefer about **700–940px total art width** depending on container width, not an oversized 1100px dashboard.
- The art's visual height should be compact (start around **260–360px**; adjust by actual layout rather than force these dimensions).
- The whole section should be **shorter than the prior elaborate dashboard section** where practical. No tall scroll spacer.
- Do not use oversized 4-column explanation cards under the art.

---

## 4. Exact interaction state machine

Use explicit, simple states; avoid ambiguous implicit transforms:

- `initialSeparated` — initial interactive desktop pose, pieces visible and offset slightly from docking targets.
- `assembling` — a **one-time** entrance animation toward the exact joined geometry.
- `assembled` — stable final joined pose; default after entrance, and static fallback.
- `hoverSeparated` — gently exploded view while the pointer genuinely hovers over the artifact and after initial assembly has completed.
- `reassembling` — gentle return to assembled pose when the pointer leaves.

A lightweight implementation may collapse some internal state names if externally identical. Make **transitions deterministic** and debuggable.

### 4.1 One-time entrance assembly

- Trigger when a meaningful amount of the section/art enters the viewport; IntersectionObserver or the motion library's existing in-view mechanism is fine.
- Initial separation should be modest enough to see all parts immediately and not overflow into adjacent sections.
- After first entry, modules travel to their docking points in an ordered or lightly staggered sequence, as if parts of one product are brought together.
- Target **1.2–1.8 seconds** for the whole joining experience, adjustable on visual review. Do not stretch it merely to imitate an arbitrary 2.5-second sequence.
- Small positional moves; as an initial design guide, approximately 20–45 CSS px depending on module size and axis. Prefer crisp ease-out / smooth cubic-bezier with no spring overshoot or bounce.
- A subtle 80–160ms settle at the end is acceptable (shadows soften, joins become flush). **No flash, glow explosion, scale pulse, or confetti.**
- **Run once per mount/visit**; when the user scrolls away and back, remain assembled. No reverse-on-scroll and no scroll-progress scrubbing.
- Keep native page scrolling unconstrained. No `position: sticky`, oversized `svh` spacers, forced hold, wheel/touch interception, or section snapping.

### 4.2 Hover interaction

Only after the initial join completes:

- Pointer enters the **shared composition hover region**, not tiny individual fragments: gently separate modules away from their dock positions.
- Recommended starting separation: around **8–18 CSS px**, directional and asymmetric to preserve the fitted-together impression. Do not scatter components across the page.
- A detached edge shadow may increase very slightly so the joining interfaces are easier to understand.
- On pointer leave, pieces smoothly return to their exact joined positions.
- Motion target around **300–450ms** each direction; use a gentle ease rather than a rubber-band bounce.
- Hover effect must not change section height, reflow surrounding text, or constantly retrigger at boundaries. Build the hover hitbox around the entire composition; avoid gaps causing repeated enter/leave flicker as modules move.
- Pointer moving between child modules must **not** count as leaving the shared hitbox.
- Hover during `assembling` should **not** interrupt or restart entrance. When entrance completes, obey the actual pointer state sensibly without a jarring jump.
- Never hide essential meaning behind hover. On touch devices there is no required hover equivalent.

### 4.3 Input and accessibility behavior

- For **touch / coarse pointer**, show the complete assembled artwork without hover behavior. A tiny entrance join is optional only if reliable; a static default is preferred.
- For `prefers-reduced-motion: reduce`, render the fully joined state immediately, with no transform choreography or flicker.
- For keyboard-only users, the section's information must be fully accessible even if no hover animation occurs. The modules are **not buttons** unless they actually perform an action. Do not add meaningless tab stops.
- Screen-reader semantics: use a meaningful group/figure label or hide purely decorative geometric layers while exposing a concise ordered process list with accessible copy. Do not duplicate audible text excessively.
- Text contrast must be sufficient in both dark and light pieces; check German localization for overflow.
- The animation must not impair scroll input, focus, route changes, or links elsewhere on the page.

---

## 5. Geometry and rendering engineering

This is a **geometry-first design**. A polished shape system is more important than how quickly the animations are written.

### Preferred approach

- Use responsive **HTML/CSS + SVG** (or CSS `clip-path` / `mask` / border radius) for module outlines and mating profiles. Reuse existing Motion/Framer Motion only where it earns its complexity.
- Prefer actual vector paths or well-defined scalable joints rather than covering up rectangular seams with arbitrary pseudo-elements that break across widths.
- Establish a **single joined coordinate system**. Detached states must be transform offsets relative to precisely measured/resting positions.
- Keep joints pixel-aligned. Use shared sizing variables and responsive geometry rather than guessed hardcoded independent offsets.
- Keep content in DOM where possible for localization and legibility. If SVG shapes are decorative, keep real labels as DOM text.
- Avoid SVG-only small text that gets illegible at different screen densities.
- Use GPU-friendly transforms/opacity for entrance and hover. Avoid animating layout dimensions, heavy filters, large blurs, or `box-shadow` every frame if it causes repaints.

### Robustness rules

- No 1px gaps, seams, corners that no longer meet, or clipping when assembled at desktop/tablet widths.
- No visual jump from joined → detached during hydration. The server-rendered fallback should be **joined**, then entrance animation may start only where safely orchestrated without a conspicuous flash. If solving this reliably is difficult, favor a clean assembled initial state over a visible hydration glitch.
- When viewport resizes during an animation, end in a coherent assembled state, not halfway scattered. Handle breakpoint transitions gracefully.
- If an IntersectionObserver never fires (content already visible after restored scroll), the complete artifact must remain visible; do not strand the artwork invisible/detached.
- Validate high-DPI and non-integer CSS zoom/layout cases where possible.
- Do not use canvas/WebGL, videos, or third-party 3D libraries for this modest interaction.

---

## 6. Responsive design

### Desktop ≥ approximately 1024px

- Full four-piece asymmetric arrangement.
- One-time join on viewport entry, gentle shared-hover separation, return on exit.
- No text or content reflow under moving decorative layers.

### Tablet ~768–1023px

- Keep the recognizable complementary assembly layout where feasible, scale widths/typography and reduce travel offsets.
- If there is insufficient width, favor a simplified *joined* presentation over distortions or cramped texts.
- Hover only on genuinely hover-capable pointers; don't infer behavior from screen width alone.

### Mobile < ~768px

- Present **one coherent assembled artifact** optimized for portrait width, even if its pieces must simplify or reflow into more vertical complementary regions.
- Make labels readable; avoid shrinking the entire desktop composition to microscopic text.
- **Do not** stack four generic cards as the mobile substitute. Keep visible interlocking geometry / unified silhouette.
- No horizontal overflow. No forced sticky sequence.
- Keep annotations compact; consider accessible process text below if art labels have to be minimized.

---

## 7. What to do with the existing Phase B code

Inspect `components/ProcessSection.tsx`, related styles and `components/ProcessAssembly.tsx` before editing. The earlier Phase B built a detailed **project delivery workspace**. That design direction is superseded.

- **Do not** simply animate the existing sidebar/header/content/footer regions; those are too visually complex and dashboard-like.
- You may reuse the file/component names, sensible locale wiring, reduced-motion utilities, test helpers and other sound infrastructure.
- Replace the visual model and simplify the DOM/CSS where necessary. Remove dead markup and obsolete scroll hooks from the old process implementation.
- Preserve the existing homepage section location and neighboring background transitions.
- Do **not** touch the main Web–Mobile–AI animation architecture or timings.
- Do **not** change the hero, project showcase, logo, references, footer, global tokens, or shared typography unless an absolutely minimal compatibility change is justified.
- Maintain TR/EN/DE translations through the project's actual localization convention (`data/i18n.ts` if still applicable; inspect current source).
- No new marketing claims or invented features.

---

## 8. Practical build sequence — implement in reviewable checkpoints

**Checkpoint 0 — Inspect**

1. Verify branch/status and inspect the existing implementation and docs.
2. Identify old dashboard-specific DOM and styles to replace.
3. Describe the exact assembled silhouette and the four connectors in 5–8 sentences before coding. If you cannot describe matching male/female joints, revisit the geometry.

**Checkpoint 1 — Refined static joined design**

1. Produce the four-module visual, in its complete joined pose.
2. Match the minimal reference spirit; avoid SaaS UI clutter.
3. Confirm desktop/tablet/mobile type, negative space, and geometry.
4. At this checkpoint, visually evaluate the result: it must look desirable **without motion**.

**Checkpoint 2 — Detached arrangement**

1. Define restrained separated offsets relative to the joined geometry.
2. Confirm joints remain legible and all pieces fit inside the section.
3. Ensure no resizing or text shifting is needed when detaching.

**Checkpoint 3 — One-time assembly**

1. Add the viewport-entry join with deterministic orchestration.
2. Do not affect scrolling or section length.
3. Verify it completes once and stays joined after leaving/re-entering the viewport.

**Checkpoint 4 — Hover reveal/rejoin**

1. Add shared hover hitbox and separation of 8–18px.
2. Rejoin on leave; prevent gap-induced hover flicker.
3. Add correct touch and reduced-motion fallbacks.

**Checkpoint 5 — Polish and QA**

1. Tune motion only after the structure looks correct.
2. Ensure joined edges sit flush, copy is short, colors are tasteful.
3. Run the lightest focused validation sufficient to catch regressions.

**The agent may implement all checkpoints in this task, but report results by checkpoint. Do not hide a visual compromise behind animation. If actual complementary geometry proves impractical, pause and explain rather than reverting to four rectangular cards or a giant dashboard.**

---

## 9. Concrete acceptance tests

### Composition

- [ ] Exactly four visually distinct, complementary pieces: left, top, large light center/right, bottom.
- [ ] There are **real visible interlocking profiles**, not merely equal rectangles with gaps.
- [ ] The joined artifact looks like one finished, restrained design object.
- [ ] No large fake admin dashboard; no hero/Web/AI UI duplication.
- [ ] Clear hierarchy, strong negative space, limited explanatory text.
- [ ] The entire section does not become substantially longer than necessary.

### Motion

- [ ] On first meaningful section entry (desktop normal motion), separated pieces join once.
- [ ] Pieces stay joined after normal scrolling away and back.
- [ ] Hover separates **gently**, with no flicker, and mouse leave rejoins.
- [ ] Entering hover during entrance does not cause a state conflict.
- [ ] Scroll is never pinned, intercepted, or scrubbed.
- [ ] No layout shifts / horizontal scrollbar during movement.
- [ ] Touch and reduced-motion give clean, immediately useful results.

### Quality

- [ ] TR, EN, DE copy fits and is accessible.
- [ ] Widths around 1440, 1024, 768, 390, 360px are coherent.
- [ ] No visible docking seams or hydrating detached flash.
- [ ] No significant main-thread jank or unnecessary continuous animation.
- [ ] Web–Mobile–AI and all other homepage sections visually/functionally unchanged.

---

## 10. Validation and delivery requirements

- Use existing project scripts for TypeScript, focused ESLint, and an appropriate build if warranted by the changes.
- Use targeted visual checks **only when they materially help**; avoid generating dozens of screenshots or running prolonged browser automation. The user will perform final live visual acceptance.
- Update the relevant Obsidian handoff/roadmap/design log; link this brief in the notes.
- Summarize: files changed, new composition, the four joints, motion state behavior, mobile/reduced-motion treatment, tests, and any remaining visual limitations.
- **Do not commit, push, merge, or deploy.** The user handles Git.

### Final quality rule

If the output resembles a complicated dashboard screenshot or four generic service cards, it has **failed** despite working animation. The result should communicate process through a **simple, satisfying modular fit** — the kind of premium restraint shown by the user's reference video.
