# BS3P-011 — BayesSoft 3.0+ Signature Project Showcase

**Status:** Implementation brief — isolated prototype only; visual approval pending  
**Branch:** `feature/bayessoft-3.0-plus`  
**Target route:** `/prototype/bs3p-project-showcase`  
**Next integration target (NOT in scope):** `/prototype/bs3p-homepage` → existing `ProjectsShowcase` slot  
**Priority:** Signature visual experience, clean code, credible project presentation, lightweight motion  
**Owner of decisions:** User approves art direction and integration.

## 0. Why this exists

The approved BayesSoft 3.0+ homepage has a strong four-face CSS 3D hero and a restrained references marquee. The *Selected Projects* section should become the site's second memorable visual moment. It must **not** feel like a normal carousel of cards, a generic software-agency slider, or a copy of the supplied cylindrical-rotation reference.

Use the reference video as **motion inspiration** only: a series of visually rich surfaces passing through a believable curved/rotational space. Create an original BayesSoft execution with precise geometry, excellent image legibility, restrained color and strong editorial layout.

## 1. Read before starting

Read `AGENTS.md`, `bayes 3.0-plus/98-Agent-Logs/AGENT_WORKFLOW.md`, `CURRENT_STATUS.md`, `NEXT_STEPS.md`, `04-Development/TASK_REGISTER.md`, `03-Design/DESIGN_SYSTEM.md`, and the BS3P-009 homepage implementation note. Inspect the actual `ProjectsShowcase` component/`renderVisual` integration interface, relevant existing project metadata and real routing structure. Respect the existing production site's project records as the source of truth. Do not assume any filepath exists without checking.

**Skills:** `ui-ux-pro-max` leads interaction, typography, spacing and accessibility; `frontend-design` leads art direction and high-end visual polish. Use specialized Three.js skills only if an actual WebGL need is demonstrated. CSS 3D plus Web Animations API or existing lightweight timing tools is the default; do **not** install GSAP merely because it is mentioned here.

## 2. Non-negotiable design thesis

**“İşlerimiz konuşsun.”** A large, beautifully art-directed visual object on the **left** changes between selected projects, while an extremely concise project story on the **right** stays readable. The motion is a *navigation metaphor* between projects, not decoration.

Target impression: premium, minimal, technology-native, confident, tactile, polished. Use Instrument Sans and existing cold-white / mineral-gray / dark-navy / BayesSoft-blue system. Introduce project-specific accent colors **inside covers**, not uncontrolled page-wide gradients. The project gallery may be visibly more expressive than services/process sections, but must not compete with the hero in constant simultaneous motion.

## 3. The layout

**Desktop, 1440px reference:** Section opens with a modest overline `03 / Seçili projeler` (number optional) and a short heading. Below: approximately **58–64% left visual stage / 36–42% right editorial information**, adjusted based on rendered outcome. The visual stage should be large and substantial; avoid vast dead space or tiny objects centered in an empty square. Right content is vertically anchored to the visual focal point.

Right panel: `01 / 03`, project name (dominant), category/technology (small), a **single short, verified** description, and a real project-detail link. Previous/next controls are present but subdued; active index readable. Avoid auto-running text animations or multiple CTA buttons. Keep the visual stage and right metadata tightly coordinated.

**Tablet/mobile:** Recompose into stage above information; leave practical tap/swipe controls. No microscopic type, clipped covers or offscreen clickable controls. On small screens use simpler 2D/CSS transitions if necessary.

## 4. Motion: original curved-page / rotating-gallery concept

Build one bespoke rotational showcase object with **three visual faces / project planes** following a coherent spatial path. It can be a shallow carousel/drum or a faceted curved layout; it does not need literal cylinder geometry. Visible movement should carry the current face out and the next face in, settling into a mostly frontal, fully readable pose. Keep content on the final face flat/sharp; never warp project names beyond legibility.

- Rest state: one **large, unmistakably selected** project cover.
- Trigger: next/previous arrow, keyboard arrows while component focused, swipe/touch gesture (if reliable), and optionally click on adjacent preview.
- Transition: approximate **650–1100 ms**, with substantial but controlled 3D depth, believable direction, crisp easing and no mid-turn teleport/reset.
- During transition: suppress repeated conflicting commands or queue the latest target deterministically; rapid navigation must not break state.
- Metadata: update in coordination with the settled visual; prevent title/cover mismatch and unexpected layout jump.
- Final: hold perfectly still until user action. **No autoplay by default.**
- Reverse navigation must rotate in the reverse direction; wrap-around from last to first and first to last should be seamless and intentional.
- Respect `prefers-reduced-motion`: use instant or quiet crossfade with no spinning; preserve all controls.
- Pause/visibility behavior: if any animation is in flight, browser backgrounding must not leave an impossible half-state.

**Engineering caution:** A literal cylindrical drum may require extensive clipping and image distortion. Favor an art-directed 2.5D transform system that creates the perceptual effect while preserving crisp images and straightforward accessibility. Only use WebGL if it materially outperforms the CSS implementation.

## 5. Project covers: quality without fabricating work

Do **not** use low-quality existing client screenshots, randomly scraped images, or other companies' portfolio visuals. Do **not** falsely represent concept artwork as actual client UI. Project metadata and destinations must come from verified existing site records. If there are fewer than three verified usable projects, use available real projects plus clearly labeled **visual concept placeholders** without fabricated client identities, metrics, or case studies. Avoid repeating a real project as if it were distinct.

For motion evaluation, create **high-resolution, original, code-drawn project cover compositions** (SVG/CSS/HTML), ideally 3 aesthetically distinct treatments using the same systematic visual language:

- A blue/cobalt operational workspace or abstract layered interface.
- A dark navy editorial/typographic product cover.
- A light silver/muted-periwinkle structured system cover.

Each cover should have distinct hierarchy, silhouette and tonal weight but feel like one BayesSoft series. Covers must remain replaceable later via a typed `visual` specification or image component, without changing motion logic. Use simple geometry and believable abstract interface motifs, not fake app screenshots with tiny illegible lorem ipsum. Do not make up project results.

If project names are used in concept covers, they must be verified from the repo. If the actual client's logo is not approved for use, use clean generic graphic treatment and put the project name in the editorial panel only.

## 6. Interaction and accessibility

Semantic section heading; clear next/previous `<button>` names in Turkish; visible focus rings; keyboard controls when gallery focused; project link works and is not accidentally triggered by drag/swipe. If drag/swipe is implemented, handle pointer capture and threshold carefully. Avoid trapping focus. Don't expose offscreen/hidden covers as duplicate actionable content. Use `aria-live="polite"` judiciously for selected-project updates and avoid announcing on every animation frame. Mobile touch hit areas at least ~44px. Do not implement controls that look clickable but do nothing.

Do not force-scroll the user; section should remain a normal part of the page flow. Ensure hover-free functionality.

## 7. Engineering and clean code

Implement **only** `/prototype/bs3p-project-showcase` as an independent showcase stage with enough context to evaluate, NOT a new full homepage. Do not mutate the current full homepage in this task.

Component boundaries, adapted to existing architecture:

- `ProjectShowcase` / section orchestration.
- `ProjectStage` / rotating visual and motion state.
- `ProjectInfo` / project metadata and links.
- `ProjectControls` / accessible navigation.
- `project-data` / typed verified records.
- `project-visuals` / replaceable concept covers.
- Scoped styles/motion utilities; short, inspectable modules.

Prefer typed state machine with `activeIndex`, `fromIndex`, `toIndex`, `direction`, `phase` (idle/transition). Derive UI consistently from state. Avoid duplicate sources of truth, magic delays, direct unmanaged DOM transforms, huge single files, unneeded dependencies, and changes to shared hero code. Allow future integration into the homepage `ProjectsShowcase` slot through a clear documented interface (props/data contract) rather than a brittle copy-paste.

Inspect existing Next.js version and custom routing before selecting implementation. Bundle only if current project architecture requires it; reuse existing build conventions. Do not accidentally load WebGL, hero animation assets or heavy dependencies for this standalone CSS project experiment.

## 8. Visual quality criteria / acceptance gate

At the desktop resting frame, the showcase must read as **a finished premium portfolio feature**, not a wireframe or demonstration of transforms. On change, there should be a conspicuous, elegant *rotation through depth*, not merely sliding rectangles or fading. Right text must synchronize exactly. The featured cover must be legible and visually dominant. No clipping, inverted/backface ghosts, flicker, jumps, stretched logos or surprise color flashes. Reduced motion is usable. Mobile looks purpose-designed.

A reviewer should be able to answer in five seconds: What project is featured? How can I view it? How can I switch projects?

**If this does not look premium in the first implementation:** perform one focused visual correction, not a dozen unstructured variant iterations. Report unresolved art-direction choices rather than claiming victory.

## 9. Explicit scope protections

Do not modify `/prototype/bs3p-homepage`, `/prototype/spatial-hero-plus`, original `/prototype/spatial-hero`, `/prototype/bs3p-right-3d`, production pages, user media, reference logo files, archived `bayes 3.0/` or `bayes 4.0/`, or Figma. Do not commit/push/merge/deploy. Do not modify AGENTS.md or CLAUDE.md. Protect other worktree changes and untracked evidence. Do not alter the original reference video.

No speculative client claims, fake testimonials, vanity metrics or invented project URLs.

## 10. Fast iteration, not 50-minute QA

1. Inspect project records and existing slot contract.
2. Implement the full visual plus functional navigation.
3. Open **one** desktop browser session and **one** mobile size; inspect one rotation in each where supported.
4. Check first/last wrap, basic keyboard behavior, console errors, and reduced-motion behavior with quick targeted checks.
5. Run **targeted** TS/lint/syntax checks only, not a broad production build, a 30–60s recording, or a full responsive matrix.

Keep implementation and visual iteration as the majority of work. Report tests not performed. If no browser verification is possible, say so; do not invent success.

## 11. Obsidian handoff and records

Read project instruction chain first (`AGENTS.md` → `AGENT_WORKFLOW.md`). Create/update BS3P-011 in `TASK_REGISTER.md`. Record selected direction, real project source records, created prototype interface, visual decisions, known issues and browser validation. Update CURRENT_STATUS, NEXT_STEPS (maximum three active priorities), SESSION_LOG, current daily log, and REVIEW_REGISTER as appropriate. Write a succinct implementation note under `bayes 3.0-plus/04-Development/` and keep history append-only. Do not mark the gallery **integrated into homepage**; that is a separate, explicitly approved future task.

## 12. Deliverables and stop condition

Deliver in Turkish:

1. Local isolated URL `/prototype/bs3p-project-showcase`.
2. Desktop screenshot showing selected project; mobile screenshot.
3. Optional short 4–8s capture of 1–2 actual rotations, only if easy.
4. Verified source of project titles/descriptions/links and a clear label for concept covers.
5. File changes and any dependency additions.
6. What works, unresolved issues and honest next step to integrate into homepage.

**STOP for user review.** No homepage integration or production changes without explicit approval.
