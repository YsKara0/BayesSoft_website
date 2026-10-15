# BayesSoft 3.0 — Visual Fidelity Recovery & Real 3D Vertical Flip

**Status:** Implementation brief — prototype only, not production approval.  
**Primary task:** Recover the approved visual character and build a genuine, continuously cycling top-to-bottom 3D text-panel flip.  
**Language:** Report progress and decisions in Turkish.

## 1. Context and source of truth

The current interactive prototype has been **rejected for visual quality**. Functional correctness does not imply visual success. It looks like two independent HTML cards instead of one unified, premium architectural hero.

Before changing code, read:
- `bayes 3.0/98-Agent-Logs/CURRENT_STATUS.md`
- `bayes 3.0/98-Agent-Logs/NEXT_STEPS.md`
- `bayes 3.0/03-Design/DESIGN_SYSTEM.md`
- `bayes 3.0/03-Design/MOTION_GUIDELINES.md`
- `bayes 3.0/03-Design/08-Integrated-Hero.md`
- The approved Figma **Desktop Balanced**: https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=99-961
- The **Variant C — Architectural Spatial** frames and motion studies in the same Figma file.
- The original visual reference in `bayes 3.0/02-Research/`, if present. If you cannot locate or access it, say so; do not claim to have inspected it.
- The current `/prototype/spatial-hero` implementation and real browser output.

Use the installed Anthropic `frontend-design` skill, but preserve approved project decisions. Do not use other creative skills in this iteration.

## 2. Mandatory visual audit before coding

Run the prototype in a real browser and capture a desktop screenshot, preferably at 1440 px width. Compare it with the Figma Desktop Balanced composition and available source reference **side by side**. Record at least five specific deviations in:
- composition and relative scale;
- continuity of the top, central and bottom architectural panels;
- typographic size, weight, alignment and whitespace;
- edges, lighting, material depth and shadows;
- right-side image integration, crop and balance;
- interaction controls and unwanted UI clutter.

Write a short **before** critique before implementing the correction. Do not merely describe code structure.

## 3. Visual recovery — unified architectural hero

The hero must feel like **one intentionally art-directed spatial composition**, not a card plus a separate image.

### Left object
- Keep Variant C as the structural starting point: fixed top architectural surface, **only the central two-sided plate rotating**, fixed bottom architectural surface and a continuous underlying structure.
- Preserve large, confident Turkish typography and disciplined negative space.
- Refine physical thickness, joints, contact shadows, light direction and panel geometry. Use subtle depth, not thick blue-gray offsets, neumorphism or a generic card shadow.
- Avoid a conventional carousel appearance. No oversized CTA or decorative pause button inside the architectural surfaces.
- Copy must remain real selectable HTML text, not rasterized artwork.

### Right image
- Use the existing approved asset: `assets/hero/bayessoft-spatial-v1.png`. Confirm the actual file exists; do not regenerate it.
- Make the image visually integrated using careful positioning, scale, cropping and background continuity while preserving aspect ratio. Do not stretch or conceal important engraved details.
- Do not add unrelated visual effects or service illustrations.

### Accessibility versus minimalism
- Keep pause/resume and manual switching accessible and operable, but visually understated and **outside the central architectural plate**.
- Both faces must be accessible without waiting for automatic animation; avoid repeated intrusive screen-reader announcements.

## 4. Non-negotiable: genuine top-to-bottom 3D flip

**This is the highest-priority interaction requirement.** The previous Figma exploration described a vertical-axis turn, but the current user direction explicitly supersedes it: the plate must perform a **top-to-bottom flip around the horizontal X-axis**.

Implement a real perspective 3D object, **not** a text swap, fade, slide, `rotateY`, or flat carousel.

- A common rotating 3D parent carries two opposite physical text faces.
- Face A text: **“İşinize göre yazılım.”**
- Face B text: **“Web, mobil, AI ve özel çözümler.”**
- Use `perspective`, `transform-style: preserve-3d`, `rotateX(...)`, `backface-visibility: hidden` and correct front/back face orientation.
- Rotation axis is **horizontal**, creating an observable **top-to-bottom somersault**. The stationary upper and lower architectural surfaces must **never** rotate.
- The panel must show believable edge thickness and perspective at intermediate angles, without mirror text, flicker, backface bleed or unexpected clipping.
- Start on A at 0°. After approximately **7 seconds**, animate to B at 180° over about **800–1000 ms** with a restrained easing curve. After the next interval, continue in the **same direction** to 360° to show A again. **No snapping** from 180° to 0° and no unwanted reverse jump.
- At 90° a narrow edge-on moment is expected; it should be brief, smooth and intentional rather than a prolonged unreadable pause.
- Pause automatic rotation on hover and on keyboard focus within the relevant controls, and provide manual face change. Handle touch sensibly.
- For `prefers-reduced-motion: reduce`, default to a stationary readable face with a non-animated manual way to access the other message.
- Ensure timers are cleaned up correctly and do not create repeated intervals or state desynchronization.

## 5. Mandatory animation verification

Do not report success after only compiling. Verify the animation in a **running browser**, including multiple cycles.

Inspect or capture representative moments:
1. Face A — 0° (resting)
2. ~45° (rotation in progress)
3. ~90° (edge-on)
4. ~135° (Face B emerging)
5. Face B — 180° (resting)
6. Face A — 360° (second flip completed)

Confirm:
- Rotation is on **X**, not Y.
- Both faces are readable and not mirrored at rest.
- Upper and lower sections stay fixed while only the central plate flips.
- No clipping/flicker and no unexpected layout shift.
- Reduced-motion, pause/resume, keyboard access and manual navigation work.
- Rotation remains visually convincing next to the right-side image.

Provide a short screen recording or evidence from real browser captures **if tools permit**. If a recording is unavailable, state that clearly and provide available screenshots and tested observations; do not pretend it was recorded.

## 6. Visual QA iteration

Perform at least **two screenshot-based review passes where tooling permits**:
1. Capture the revised desktop and mobile view.
2. Compare against the approved Figma composition and original reference.
3. List the remaining concrete visual discrepancies.
4. Correct those discrepancies within the prototype scope.
5. Capture again.

Check desktop (~1440), tablet (~1024) and mobile (~390). Maintain proper aspect ratio, no horizontal overflow, reasonable load performance and no serious console errors. Run TypeScript/lint checks as appropriate. Preserve essential accessibility and `prefers-reduced-motion` support.

## 7. Scope and protection

- **Only** edit the isolated prototype route `/prototype/spatial-hero` and components/styles dedicated to that prototype.
- Do **not** modify the production homepage, shared global style, shared navigation or unrelated site components. If an unavoidable shared change is needed, stop for approval first.
- Do not edit Figma source frames, `bayes 2.0`, existing project-level agent instructions or unrelated assets.
- Do not deploy, commit or push. Do not install animation libraries without a specific justification.
- No unapproved redesign of the hero concept; avoid adding new sections or decorative effects.

## 8. Obsidian documentation — required

Read the current notes before editing. Record **the prototype as visually rejected pending this recovery**, then log actual findings/results (do not mark it approved on your own).

Update or create:
- `bayes 3.0/03-Design/MOTION_GUIDELINES.md` — the revised `rotateX` direction, transition and accessibility behavior;
- `bayes 3.0/03-Design/DESIGN_SYSTEM.md` — any verified prototype visual specifications and remaining differences;
- A new design critique note in `bayes 3.0/07-Reviews/` — before/after review, lost principles, corrections and unresolved issues;
- `bayes 3.0/98-Agent-Logs/CURRENT_STATUS.md`;
- `bayes 3.0/98-Agent-Logs/NEXT_STEPS.md`;
- `bayes 3.0/98-Agent-Logs/SESSION_LOG.md` (append; keep history);
- The **actual current date's** `DAILY_LOG_YYYY-MM-DD.md` (do not blindly write to a previous date).

New Codex sessions should be able to identify the current design status, verified animation behavior and next actions from these notes.

## 9. Deliverables and stop condition

Return a Turkish report with:
1. The **before/after** visual critique and images;
2. The prototype URL and modified files;
3. A clear description of the **X-axis 0° → 180° → 360°** flip;
4. Browser evidence for the required animation states (or explicit limitations);
5. Desktop/mobile checks, accessibility and TypeScript/lint results;
6. Remaining visual problems and next recommended corrections;
7. Obsidian files updated.

**Stop and wait for user review. Do not modify the production website.**
