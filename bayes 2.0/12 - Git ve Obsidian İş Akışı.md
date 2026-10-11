# 09 — Git, Obsidian and Multi-model Workflow

> Kaynak: Kullanıcının ZIP'i / docs/09-workflow-git-obsidian.md. Güncel durum ve bu turdaki kapsam için [[07 - AI Handoff]] ve [[08 - Phase 1 Tasarım Önerisi]] okunur. Mevcut Obsidian kasası kullanıcı kararıyla bayes 2.0/ konumunda korunur.


## The practical issue
User created a new Obsidian vault called `bayes 2.0`. A screenshot showed generated `.obsidian` config files and `Hoş geldiniz.md`. The local folder hierarchy could indicate this vault was put inside the website repo but precise path uncertain. They want Claude Opus and GPT/Codex to share persistent context via Markdown. Obsidian itself is **a Markdown editor, not shared model memory**; agents need filesystem access to repo docs.

## Suggested structure (adapt to actual repo)
```text
<website-repo-root>/
  docs/
    .obsidian/                 # local Obsidian state; track/ignore per team policy
    00-project-overview.md
    01-brand-strategy.md
    02-design-system.md
    03-website-architecture.md
    04-roadmap.md
    05-decisions.md
    06-ai-handoff.md
    07-animation-phase2.md
    08-feedback-and-critique.md
    09-workflow-git-obsidian.md
    10-phase1-agent-prompt.md
    logs/
  AGENTS.md
  CLAUDE.md
```

## Caveat
This ZIP contains files using that layout for easy drop-in, **but should not be copied blindly over existing repository files**. First check whether `docs/`, `AGENTS.md` or `CLAUDE.md` already exist; merge content if necessary and preserve originals. If repo-wide instructions conflict, surface them to owner.

## Git safety procedure
1. Run `git status` and `git branch --show-current` from confirmed repo root.
2. If dirty, discuss commit/stash/preservation; do not unilaterally discard.
3. If clean and desired branch absent, `git switch -c feature/bayessoft-2.0` (or switch safely to existing branch).
4. Verify deployment does not automatically deploy branches in a way that affects production.
5. Group changes into small commits: tokens → typography → shared UI → surfaces → QA; never merge/deploy without explicit instruction.

## Agent handoff hygiene
Before coding: read decisions, roadmap, handoff, then inspect code and any existing instructions. After any work session update handoff, roadmap and log with actual checks; do not confuse proposals with implemented results. For model changes, starter instruction: `Read AGENTS.md and bayes 2.0/07 - AI Handoff.md, then verify Git status and relevant code. Continue only from confirmed project state.`


## 10 Ekim 2026 — Güncel kullanıcı kararı

Mevcut bayes 2.0/ Obsidian kasası korunur; docs/ yerleşimi tarihsel öneridir ve uygulanmaz. İlk Phase 1 geçişi semantik renk tokenları, header ve hero stilleriyle sınırlıdır. Metinler, linkler, video/reveal ve Web/Mobil/AI animasyon mantığı korunur. Diğer bölümlere kullanıcı desktop/mobile değerlendirmesinden sonra geçilir. Commit/push/deploy açık onay gerektirir.
