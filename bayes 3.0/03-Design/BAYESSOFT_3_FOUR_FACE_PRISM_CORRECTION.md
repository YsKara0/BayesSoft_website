# BayesSoft 3.0 — Four-Face 3D Prism Correction

**Status:** Implementation brief for a fresh Codex session  
**Scope:** Isolated spatial-hero prototype, left rotating object only  
**Priority:** This document supersedes conflicting animation instructions in `BAYESSOFT_3_VISUAL_FIDELITY_AND_3D_FLIP.md` and earlier motion notes. Preserve other unrelated brand and visual guidelines.

## 0. Non-negotiable definition

Build a **real four-sided rectangular prism** with **four distinct physical text faces**, rotating around the **horizontal X-axis** in **90-degree increments**. This is **NOT** a two-sided flip card, carousel, crossfade, or a flat panel that changes its text.

The prism has four lateral faces (front, top, back, bottom), each a separate DOM element with real 3D positioning. The prism's cross-section is square; its face width may be much larger than its face height. The two end caps do not need text. A large rectangular *front view* is expected; do not force a visually square front face.

## 1. First inspect; do not start by redesigning

1. Confirm repository and current Git branch; inspect `git status` and preserve all existing changes, especially user assets and Obsidian vault files.
2. Read `agents.md`, `CLAUDE.md` and `bayes 3.0/98-Agent-Logs/CURRENT_STATUS.md`, `NEXT_STEPS.md`, `SESSION_LOG.md`.
3. Read the earlier brief `bayes 3.0/03-Design/BAYESSOFT_3_VISUAL_FIDELITY_AND_3D_FLIP.md` **for visual goals only**. Its instructions for **two faces, 180° per transition, and an edge-on 90° resting state are explicitly obsolete**.
4. Locate the existing isolated prototype route and its dedicated components. Identify existing timers, styles, controls, and accessibility handling. Summarize intended changes before editing.
5. Keep the production homepage and all unrelated shared components unchanged.

## 2. Physical geometry (mandatory)

Use a container with `perspective` and a rotating inner object with `transform-style: preserve-3d`. Put **four separate, equal-size face elements** around the X-axis:

- Face 0: `rotateX(0deg) translateZ(depth)`
- Face 1: `rotateX(90deg) translateZ(depth)`
- Face 2: `rotateX(180deg) translateZ(depth)`
- Face 3: `rotateX(270deg) translateZ(depth)`

If each face has height `H`, use `depth = H / 2` for a four-sided prism with a square cross-section. All faces have width `W` and height `H`. Use `backface-visibility: hidden` to prevent mirrored text. Center the transform origin. Carefully verify transforms in the browser; adjust the **rotation sign / face ordering** to produce the intended reading order while retaining actual four-face geometry.

**Important:** A two-sided card with `rotateX(180deg)` cannot satisfy this requirement. Four headings rendered within one plane also cannot satisfy it.

Keep the architectural frame / stationary top and bottom supporting parts **outside** the rotating 3D element. Ensure enough visual and layout clearance for the rotating prism; do not mask or clip its faces unintentionally.

## 3. Content — provisional four faces

1. **Face 0:** İşinize göre yazılım.
2. **Face 1:** Web ve mobil çözümler.
3. **Face 2:** Yapay zekâ ile daha fazlası.
4. **Face 3:** Size özel yazılım sistemleri.

These are draft messages; keep them in one editable array/configuration, not duplicated in several component files. Use concise Turkish and preserve correct diacritics. Do not add long paragraphs to the prism.

## 4. Rotation behavior

- Start with Face 0 visible at 0°.
- On the first step, rotate the **whole prism** by -90° to show Face 1.
- Continue to -180° for Face 2, -270° for Face 3, and -360° for Face 0 again.
- **Do not reset angle abruptly from -360° to 0° while visible.** Track cumulative turns so cycles continue smoothly (-450°, -540°, etc.), or implement a genuinely invisible reset only if verified without any visual jump.
- The default idle pause should be approximately 6–8 seconds; rotation duration approximately 800–1000 ms, subject to visual QA.
- Easing should feel physical and restrained, not springy or bouncy.
- Pause on hover and focus; provide an accessible manual next/pause option **outside** the architectural panel without making the hero look like a form or carousel.
- Respect `prefers-reduced-motion: reduce`: do not auto-rotate. Provide static readable content and a usable manual, non-animated way to reach other messages.
- Do not auto-announce every timed change to screen readers. All messages must be reachable without waiting.

## 5. Work boundaries and workflow

1. Implement **only the four-face prism mechanism** in the isolated prototype first. Use temporary plain backgrounds if necessary to verify geometry.
2. Do not touch the right-hand spatial image, its asset, or composition.
3. Do not overhaul the entire hero or switch libraries just to implement one rotation. Prefer native React + CSS 3D unless there is a documented blocker.
4. Once the rotating geometry passes tests, refine its material edges, shadows, spacing and relationship to the fixed upper/lower supports. Maintain Variant C's restrained architectural look.
5. Do not alter Figma designs, production homepage, global design system, or unrelated files. No commit, push, or deployment.

## 6. Acceptance tests — required before saying “done”

Inspect the **running browser prototype**, not only source code or static Figma frames. Verify and capture evidence of:

- 0°: Face 0 fully front-facing and readable.
- -45°: Two adjacent physical surfaces visibly form an angled prism, not a flattened flip card.
- -90°: **Face 1 is fully front-facing and readable**, NOT edge-on or invisible.
- -180°: Face 2 readable.
- -270°: Face 3 readable.
- -360°: Face 0 readable again, and the next cycle continues without snapping.
- Fixed top and bottom architectural supports never rotate.
- No clipping, mirrored text, face overlap, uncontrolled resizing, or visible flash at transitions.
- Pause, keyboard/manual access, reduced-motion behavior.
- Desktop and mobile width checks, no horizontal overflow.
- TypeScript, lint and relevant project checks.

Capture a **short real-browser screen recording** showing at least five consecutive resting faces including the return to Face 0, plus screenshots at angle checkpoints where feasible. If automation / recording tooling is unavailable, describe that honestly and provide precise manual test steps. Do not claim visual testing without actual evidence.

If the geometry cannot be implemented convincingly in the current structure, stop and explain the blocker; do not silently substitute a two-sided flip.

## 7. Record the correction in Obsidian

After testing, update without overwriting history:

- `bayes 3.0/03-Design/MOTION_GUIDELINES.md` — mark the **four-sided, 90°-per-step X-axis prism** as the current prototype requirement; supersede the older two-sided flip guidance.
- `bayes 3.0/03-Design/DESIGN_SYSTEM.md` — note the four-face architectural component as prototype direction, not production-approved.
- `bayes 3.0/98-Agent-Logs/CURRENT_STATUS.md`
- `bayes 3.0/98-Agent-Logs/NEXT_STEPS.md`
- `bayes 3.0/98-Agent-Logs/SESSION_LOG.md`
- Current actual date's daily log (`DAILY_LOG_YYYY-MM-DD.md`, not a hardcoded previous date).

Explicitly record why the previous implementation failed: the prior technical brief mistakenly mandated **two faces and 180° flips**, whereas the intended design is **four faces and 90° steps**.

## 8. End-of-task report (in Turkish)

Report:
1. Exact changed files and prototype URL.
2. How the four faces are physically placed and how rotation is driven.
3. Which acceptance checkpoints passed or failed, with screenshots/video paths where available.
4. Mobile and reduced-motion behavior.
5. Remaining visual issues, if any.
6. Updated Obsidian notes.

**Stop for user approval after this isolated correction. Do not continue to the right-side animation concept.**
