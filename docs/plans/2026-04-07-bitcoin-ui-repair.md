# Bitcoin Wiki UI Repair Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Quartz 기본 구조를 유지하면서 안정적인 3열 레이아웃과 올바른 그래프 패널 채움 동작을 복구한다.

**Architecture:** `quartz-overrides/quartz.layout.ts`에서 홈과 문서의 그래프 동작을 분리하고, `custom.scss`에서 Quartz 기본 grid 위에 안전한 컬럼 비율과 패널 스타일을 적용한다. 그래프 캔버스 채움 문제는 그래프 스크립트 오버라이드에서 컨테이너 크기와 리사이즈 처리로 보정한다.

**Tech Stack:** Quartz v4, Preact, SCSS, Pixi.js, D3

---

### Task 1: Layout Behavior

**Files:**
- Modify: `quartz-overrides/quartz.layout.ts`

**Step 1: Split home and document graph behavior**

- Keep left sidebar narrow and stable.
- Keep article content centered and widest.
- Render graph panel in the right sidebar for both page types.
- Configure home to expose global graph behavior and document pages to emphasize local graph behavior.

**Step 2: Preserve existing Quartz component order**

- Do not replace Quartz page shell.
- Keep `Explorer` on the left and `TOC`/`Backlinks` under the graph on the right.

### Task 2: Safe Three-Column Styling

**Files:**
- Modify: `quartz-overrides/quartz/styles/custom.scss`

**Step 1: Tune desktop column widths**

- Left column narrow
- Center column widest
- Right column large enough for graph exploration

**Step 2: Keep mobile and tablet fallbacks intact**

- Desktop only for strong 3-column emphasis
- Tablet collapses to 2 columns
- Mobile remains 1 column

**Step 3: Apply approved visual system**

- Dark bronze and bitcoin-orange accents
- Shared panel shell styling
- Strongest emphasis on graph panel, not on sidebar chrome

### Task 3: Graph Fill Fix

**Files:**
- Create or Modify: graph script override matching Quartz graph runtime

**Step 1: Ensure graph container has explicit, stable dimensions**

- Right panel graph outer box needs a fixed minimum desktop height.
- Inner graph container must inherit the full panel size.

**Step 2: Ensure Pixi canvas tracks container size**

- Use container dimensions at render time.
- Recompute or resize on layout/viewport changes so canvas does not leave dead space inside the graph box.

### Task 4: Verification

**Files:**
- No new code files required

**Step 1: Build locally**

Run: `cd /home/moltbot/BITCOIN_wiki && GITHUB_REPOSITORY='kokonuteagle/BITCOIN_wiki' npm run build`

**Step 2: Verify actual pages**

- Check home page layout
- Check a normal document page layout
- Confirm graph is contained and filled correctly
- Confirm mobile collapse still works

**Step 3: Commit**

Commit only after local build and visual verification succeed.
