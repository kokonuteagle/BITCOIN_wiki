# Bitcoin Maxi Layout Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** `bitcoin-monolith-quartz-v3`를 기준으로 소스를 다시 반영하고, 좌측 탐색/중앙 대형 본문/우측 대형 그래프 패널 구조의 절제된 비트코인 맥시 디자인으로 GitHub Pages를 재배포한다.

**Architecture:** 소스 동기화는 레포 루트에서 수행하고, Quartz 오버라이드만 수정해 레이아웃과 테마를 바꾼다. 구조 변경은 `quartz.layout.ts`, 시각 조정은 `custom.scss`, 필요 시 색상 보정은 `quartz.config.ts`에 한정한다.

**Tech Stack:** Quartz 4, TypeScript config overrides, SCSS overrides, GitHub Actions Pages deployment

---

### Task 1: Document Approved Design

**Files:**
- Create: `docs/plans/2026-04-07-bitcoin-maxi-layout-design.md`
- Create: `docs/plans/2026-04-07-bitcoin-maxi-layout.md`

**Step 1: Save the approved design**

Write the layout, visual system, and non-goals from the approved discussion into the design note.

**Step 2: Save the execution plan**

Write the sync, styling, verification, and deployment steps into this implementation plan.

**Step 3: Verify docs exist**

Run: `find docs/plans -maxdepth 1 -type f | sort`
Expected: both 2026-04-07 plan files are listed

### Task 2: Replace Repo Source With v3

**Files:**
- Modify: repository root contents from `C:\\Users\\moltbot\\Downloads\\bitcoin-monolith-quartz-v3`
- Preserve: `.github/workflows/deploy.yml`

**Step 1: Sync v3 source**

Run `rsync` from the nested `bitcoin-monolith-quartz-v3` folder into the repo root while excluding `.git`, `.github`, and `docs`.

**Step 2: Check staged file set**

Run: `git status --short`
Expected: repo content reflects v3 source plus local docs and workflow remains present

### Task 3: Rebuild Layout Hierarchy

**Files:**
- Modify: `quartz-overrides/quartz.layout.ts`

**Step 1: Confirm sidebar composition**

Keep left sidebar focused on title, controls, and explorer.

**Step 2: Confirm right sidebar order**

Ensure graph is first and remains the dominant panel above TOC and backlinks.

**Step 3: Keep mobile behavior safe**

Avoid custom component logic that would break Quartz responsive behavior.

### Task 4: Re-theme for Restrained Maxi Style

**Files:**
- Modify: `quartz-overrides/quartz.config.ts`
- Modify: `quartz-overrides/quartz/styles/custom.scss`

**Step 1: Adjust color palette**

Tune light/dark colors toward bronze, orange, graphite, and dark paper tones.

**Step 2: Expand desktop layout emphasis**

Override Quartz grid widths and sidebar sizing so center content is larger and right graph panel remains wide enough.

**Step 3: Enlarge graph card**

Increase graph panel height, strengthen its container styling, and make the graph canvas fill the boxed area more convincingly.

**Step 4: Refine panel typography**

Give panel headings, article shell, links, code blocks, callouts, and tables a more deliberate industrial/maxi character.

### Task 5: Verify and Deploy

**Files:**
- Verify: repo root build outputs

**Step 1: Run build**

Run: `GITHUB_REPOSITORY='kokonuteagle/BITCOIN_wiki' npm run build`
Expected: Quartz build exits 0

**Step 2: Check git diff**

Run: `git status -sb`
Expected: only intended repo changes are present

**Step 3: Commit and push**

Run git add/commit/push for the updated source and design changes.

**Step 4: Verify GitHub Actions**

Check the latest workflow run via GitHub API.
Expected: build and deploy jobs succeed

**Step 5: Verify public URL**

Run: `curl -I -L -s https://kokonuteagle.github.io/BITCOIN_wiki/ | sed -n '1,20p'`
Expected: `HTTP/2 200`
