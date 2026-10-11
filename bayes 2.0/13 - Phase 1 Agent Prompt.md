# 10 — Ready-to-use agent instruction: Phase 1

> Kaynak: Kullanıcının ZIP'i / docs/10-phase1-agent-prompt.md. Güncel durum ve bu turdaki kapsam için [[07 - AI Handoff]] ve [[08 - Phase 1 Tasarım Önerisi]] okunur. Mevcut Obsidian kasası kullanıcı kararıyla bayes 2.0/ konumunda korunur.


You are a senior UI/UX designer, Next.js frontend engineer and design-systems specialist working on the BayesSoft 2.0 website.

**Read first**: `AGENTS.md`, `bayes 2.0/07 - AI Handoff.md`, `bayes 2.0/06 - Karar Kaydı.md`, `bayes 2.0/05 - Yol Haritası.md`, `bayes 2.0/03 - Tasarım Sistemi.md`. This document is an imported conversation summary, **not direct evidence of the codebase**.

## Objective
Refine the existing website into a **Premium + Interactive** visual direction without rebuilding it. The current design feels too dark. Balance deep navy signature sections with light neutral, legible sections. Current commercial focus is custom software/web/mobile/AI services; BayesSoft aspires to own SaaS products in the future but **does not have a current product to market**. Do not add SaaS/Products pages or fake proof.

## Before any edits
1. Confirm repo root, current Git branch, `git status`, existing unpublished work and deployment triggers.
2. Safely use a separate `feature/bayessoft-2.0` branch, if available/approved.
3. Audit project framework/styles/theme/fonts/routing/header/footer/cards/buttons, animations and responsiveness.
4. Provide an **audit + final proposed palette/typography/semantic-token scheme + precise file list** and wait for explicit user approval before implementation.

## Initial palette (refine for accessibility)
Foundation `#101827`, second dark `#17263F`, light `#F5F7FB`, alternate `#E9EEF5`, white `#FFFFFF`, blue `#2563EB`, accent `#72B8FF`, dark text `#152238`, muted `#53647B`.

## Requested style
Strong editorial hierarchy, Turkish glyph support, balanced negative space, realistic product presentation, restrained micro-interactions, sensible mobile breakpoints, clear keyboard focus and WCAG AA contrast where relevant. Avoid overusing glow, stock-looking 3D, glassmorphism, gradients and global dark panels.

## Phase 1 only
Semantic color tokens, palette balance, typography, buttons/cards/nav/footer, surface styling, responsive/focus improvements. **Preserve all routes, functionality, SEO, content and post-hero Web/Mobile/AI animation logic.** Replacing hero or storytelling is **Phase 2**, not this task.

## Implementation and verification after approval
Reuse existing component conventions, avoid dependency proliferation, run available typecheck/lint/test/build commands and (if feasible) desktop/mobile browser QA; report exactly what was tested. Do not silently break existing animations. No changes to secrets, APIs, business logic, database, deployment or production branch.

## Final report
Actual files changed, token palette, before/after screenshots (if truly generated), checks with results, unresolved issues, progress updates in `bayes 2.0/05 - Yol Haritası.md` / `bayes 2.0/07 - AI Handoff.md` / logs. Do not proceed to Phase 2 without user approval.


## 10 Ekim 2026 — Güncel kullanıcı kararı

Mevcut bayes 2.0/ Obsidian kasası korunur; docs/ yerleşimi tarihsel öneridir ve uygulanmaz. İlk Phase 1 geçişi semantik renk tokenları, header ve hero stilleriyle sınırlıdır. Metinler, linkler, video/reveal ve Web/Mobil/AI animasyon mantığı korunur. Diğer bölümlere kullanıcı desktop/mobile değerlendirmesinden sonra geçilir. Commit/push/deploy açık onay gerektirir.
