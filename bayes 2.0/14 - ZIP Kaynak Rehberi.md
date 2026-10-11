# BayesSoft 2.0 — Conversation Handoff Package

Prepared: 2026-10-10. Language: Turkish explanations; development guidelines and AI prompts mainly English.

## Purpose
This is a **detailed, structured reconstruction** of the BayesSoft website planning conversation with ChatGPT, prepared for transfer to ChatGPT Work / Claude Code / Codex. It is **not a verbatim transcript export**. No repository access was available during creation, so codebase paths, installed tooling, current Git state and visual behavior MUST be verified locally.

## Critical first steps for a new assistant
1. Read `bayes 2.0/07 - AI Handoff.md`, `bayes 2.0/06 - Karar Kaydı.md`, and `bayes 2.0/05 - Yol Haritası.md`.
2. Confirm the actual BayesSoft website repository root; `bayes 2.0` may currently be an Obsidian vault folder inside the website project.
3. Inspect Git status and branch before any changes. Never overwrite uncommitted work.
4. Read the existing implementation and actual theme/font/animation components, rather than assuming paths or framework details.
5. Present a Phase 1 audit and design proposal **before implementation** and wait for user approval.

## Contents
- `bayes 2.0/01 - Proje Özeti.md`: business context, existing site, project inventory, constraints
- `bayes 2.0/02 - Marka Stratejisi.md`: positioning and service vs SaaS distinction
- `bayes 2.0/03 - Tasarım Sistemi.md`: Phase 1 Balanced Premium system
- `bayes 2.0/04 - Teknik Mimari.md`: current vs proposed IA and visual sections
- `bayes 2.0/05 - Yol Haritası.md`: Phases, scope and acceptance criteria
- `bayes 2.0/06 - Karar Kaydı.md`: decisions vs ideas vs unknowns
- `bayes 2.0/07 - AI Handoff.md`: current status and next action
- `bayes 2.0/10 - Phase 2 Animasyon Briefi.md`: web/mobile/AI redesign brief
- `bayes 2.0/11 - Önceki Site Değerlendirmesi.md`: initial site review and rationale
- `bayes 2.0/12 - Git ve Obsidian İş Akışı.md`: shared notes, Git and model handoffs
- `bayes 2.0/13 - Phase 1 Agent Prompt.md`: ready-to-use implementation-agent prompt
- `docs/logs/2026-10-10-conversation-history.md`: chronological conversation reconstruction
- `AGENTS.md`, `CLAUDE.md`: agent entry points to shared documents

## Boundaries
This package contains no source-code snapshot, no passwords or environment variables, and no claim that modifications have been applied. The user wants a safe **new branch** for website experiments; the Obsidian vault currently has only generated config files and a welcome Markdown note. The site should keep working unchanged until a proposed change is approved.


## 10 Ekim 2026 — Güncel kullanıcı kararı

Mevcut bayes 2.0/ Obsidian kasası korunur; docs/ yerleşimi tarihsel öneridir ve uygulanmaz. İlk Phase 1 geçişi semantik renk tokenları, header ve hero stilleriyle sınırlıdır. Metinler, linkler, video/reveal ve Web/Mobil/AI animasyon mantığı korunur. Diğer bölümlere kullanıcı desktop/mobile değerlendirmesinden sonra geçilir. Commit/push/deploy açık onay gerektirir.

11 plan notu yerel karşılıklarına aktarıldı. Orijinal kronolojik görüşme özeti logs/ içinde korunur. ZIP Downloads konumunda değişmeden durur.
