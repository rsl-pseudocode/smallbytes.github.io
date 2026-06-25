# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved portfolio redesign with A's structure, B's light visual language, correct product copy, and readable TPO / PO contrast.

**Architecture:** Keep the one-page Vue/Vuetify app and use semantic HTML sections inside `src/App.vue`. Move visual treatment into `src/App.css` and keep global reset/theme basics in `src/index.css`. Add one lightweight Node verification script for content and contrast checks.

**Tech Stack:** Vue 3, Vuetify 3, TypeScript, Vite, Node.js verification script.

---

### Task 1: Add Red Verification Script

**Files:**
- Create: `scripts/verify-portfolio-redesign.mjs`
- Modify: `package.json`

- [ ] **Step 1: Write the failing verification script**

Create `scripts/verify-portfolio-redesign.mjs` to read `src/App.vue` and `src/App.css`, then assert:

- Hero headline contains `Senior engineer with a product owner brain.`
- Role boxes contain `Senior developer roles` and `TPO / PO opportunities`.
- Product names are exactly `Runivers`, `Glöm mig`, and `Is It Actually Open`.
- Is It Actually Open copy contains `Google says yes, reality says no.`
- CSS contains `.role-card.product p` with high-contrast text color `rgba(247, 242, 232, 0.88)`.

- [ ] **Step 2: Add npm script**

Add `"test:portfolio": "node scripts/verify-portfolio-redesign.mjs"` to `package.json`.

- [ ] **Step 3: Run test to verify RED**

Run: `npm run test:portfolio`

Expected: FAIL because production code has not yet been redesigned.

### Task 2: Implement App Markup

**Files:**
- Modify: `src/App.vue`

- [ ] **Step 1: Replace current centered dark layout with approved structure**

Use sections in this order:

- Header/navigation.
- Hero with profile image, heavy headline, existing core intro meaning, contact actions.
- Two role cards immediately below hero.
- Product badge/cards for Runivers, Glöm mig, and Is It Actually Open.
- How I work cards.
- Compact tech stack section.
- Footer.

- [ ] **Step 2: Preserve existing content meaning**

Keep Robert's 11+ years, product interest, senior developer openness, and TPO / PO interest. Keep product descriptions grounded in current copy.

- [ ] **Step 3: Run RED test again after markup**

Run: `npm run test:portfolio`

Expected: still FAIL until CSS contrast requirement is implemented.

### Task 3: Implement CSS Visual System

**Files:**
- Modify: `src/App.css`
- Modify: `src/index.css`
- Modify: `src/components/ImageComponent.vue` only if the old circular photo component is no longer used.

- [ ] **Step 1: Add light visual system**

Use:

- Warm off-white page background.
- Near-black text.
- Amber accent.
- Bold typography.
- Product badge colors for Runivers, Glöm mig, and Is It Actually Open.

- [ ] **Step 2: Implement high-contrast TPO / PO body copy**

Add:

```css
.role-card.product p {
  color: rgba(247, 242, 232, 0.88);
}
```

- [ ] **Step 3: Run verification**

Run: `npm run test:portfolio`

Expected: PASS.

### Task 4: Build And Browser Verification

**Files:**
- No new files expected.

- [ ] **Step 1: Build**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 2: Browser QA**

Inspect desktop and mobile widths. Confirm:

- No text overlap.
- Product names are exact.
- TPO / PO dark card body text is readable.
- Header, buttons, products, how-I-work, tech stack, and footer render coherently.
