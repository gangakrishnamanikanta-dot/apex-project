# MEERASH: Architectural & UI Decision Log (`DECISIONS.md`)

> **Note:** This document is identical to `11_DECISIONS.md` in the numbered project documentation suite. It is maintained here as a direct root reference for AI agents and developers looking for `DECISIONS.md`.

> **Document Purpose:** This ledger records every significant architectural, layout, structural, and component decision made throughout the lifecycle of MEERASH. **Whenever an AI coding agent or engineer modifies a core layout, replaces a component pattern, or alters a workflow, they must record the decision here.**

---

## Decision Log Table of Contents

- [DEC-001: Adoption of Obsidian Black & Metallic Gold Design System](#dec-001-adoption-of-obsidian-black--metallic-gold-design-system)
- [DEC-002: UI-Only Phase I Architecture with Comprehensive Mock Data Engine](#dec-002-ui-only-phase-i-architecture-with-comprehensive-mock-data-engine)
- [DEC-003: Component-First Modular Directory Structure](#dec-003-component-first-modular-directory-structure)
- [DEC-004: Responsive Dashboard with Collapsible Fixed Sidebar Navigation](#dec-004-responsive-dashboard-with-collapsible-fixed-sidebar-navigation)
- [DEC-005: Automated Visual QA Verification & Session 2 Sign-Off Strategy](#dec-005-automated-visual-qa-verification--session-2-sign-off-strategy)
- [DEC-006: Refactoring from Single-Page Scroll to Multi-Page Enterprise Architecture](#dec-006-refactoring-from-single-page-scroll-to-multi-page-enterprise-architecture)

---

## Recorded Decisions

### DEC-001: Adoption of Obsidian Black & Metallic Gold Design System
- **Date:** 2026-07-26
- **Decision:** Establish deep obsidian (`#0A0A0C`) as the root background and metallic gold (`#D4AF37`) as the primary interactive accent color across all 14 application pages.
- **Reason:** MEERASH is an enterprise-grade job and task marketplace targeting CTOs, project directors, and elite technical contractors. A generic light mode or plain blue Bootstrap/Tailwind aesthetic fails to convey executive authority, trust, and high-end prestige. The Black & Gold palette delivers immediate visual impact, differentiation, and a fintech-grade premium feel.
- **Impact on the Project:**
  - All Tailwind CSS classes must reference custom color tokens defined in `03_DESIGN_SYSTEM.md`.
  - Contrast ratios must be strictly monitored to maintain WCAG 2.1 AA compliance (using text-primary `#FFFFFF` and text-secondary `#A0A0AB` on dark surfaces).
  - Any random introduction of primary blue, purple, or green colors (outside semantic status alerts) is strictly prohibited.

---

### DEC-002: UI-Only Phase I Architecture with Comprehensive Mock Data Engine
- **Date:** 2026-07-26
- **Decision:** Intentionally postpone all backend engineering (databases, ORMs, server-side `/api` routes, real authentication servers, payment gateways) until Phase II. Construct a centralized, hyper-realistic TypeScript Mock Data Engine in `/src/data/`.
- **Reason:** Attempting to build backend database schemas and payment integrations concurrently with 14 complex enterprise UI pages leads to architectural bottlenecking, slow UI iteration, and compromised visual polish. By isolating Phase I strictly to UI/UX engineering with rich mock data, the team can deliver a world-class, fully interactive prototype across all 10 roadmap sessions at maximum velocity.
- **Impact on the Project:**
  - Engineers and AI agents must never install Prisma, Drizzle, Express, or backend database drivers during Phase I.
  - All dynamic data tables, job grids, kanban boards, and wallet balances must import typed mock data from `/src/data/mock-*.ts`.
  - Mock datasets must simulate realistic corporate names, long text truncation, edge cases, and numerical precision.

---

### DEC-003: Component-First Modular Directory Structure
- **Date:** 2026-07-26
- **Decision:** Enforce a strict three-tier component hierarchy: UI Primitives (`/src/components/ui`), Feature Composites (`/src/components/features`), and Layout Shells (`/src/components/layout`).
- **Reason:** Enterprise marketplaces involve complex, repetitive UI patterns (e.g., job cards, status badges, modal overlays, numerical metrics). Ad-hoc page building results in code duplication, visual inconsistency, and maintenance nightmare. A modular, component-first architecture guarantees that styling or behavioral improvements made to a core primitive (like `<Button />` or `<StatusBadge />`) propagate instantly across the entire platform.
- **Impact on the Project:**
  - No page in `/src/app/*` may implement raw inline HTML structures for common UI elements.
  - Every reusable component must be documented with TypeScript prop interfaces in `05_COMPONENT_LIBRARY.md`.
  - AI agents must inspect and reuse existing components before generating new markup.

---

### DEC-004: Responsive Dashboard with Collapsible Fixed Sidebar Navigation
- **Date:** 2026-07-26
- **Decision:** Architect the authenticated enterprise portal (`/dashboard`, `/jobs`, `/tasks`, `/applications`, `/wallet`, etc.) using a fixed 280px collapsible left sidebar (`<AppSidebar />`) and a sticky glassmorphic top navigation bar (`<TopNavbar />`).
- **Reason:** Top-only navigation bars run out of horizontal space when handling 14+ enterprise modules (Jobs, Tasks, ATS, Wallet, AI Resume, Support, Settings). A collapsible left sidebar provides clear visual hierarchy, multi-group categorization, and allows users to collapse the rail to an 80px icon view when inspecting dense data tables or kanban boards.
- **Impact on the Project:**
  - Layout wrappers must utilize responsive grid containers (`grid-cols-[280px_1fr]` on desktop, collapsing on screens under `1024px`).
  - The navbar remains fixed at `top-0 z-40` with backdrop blur to ensure search and notification controls are always accessible.
  - Mobile viewports convert the sidebar into a slide-over navigation drawer.

---

### DEC-005: Automated Visual QA Verification & Session 2 Sign-Off Strategy
- **Date:** 2026-07-26
- **Decision:** Establish automated full-page visual regression and inspection capturing via Playwright (`capture-qa.mjs`) interfacing directly with local system Google Chrome executable, executing against a live Next.js dev server on port 3000.
- **Reason:** Ensuring an uncompromised, executive-grade Obsidian Black & Metallic Gold aesthetic across all 14 routes requires repeatable visual sign-off before advancing to subsequent sessions. By automating screenshot generation across all public endpoints (`/`, `/about`, `/contact`, `/privacy`, `/terms`, `/404`, `/maintenance`), we guarantee zero visual regressions, layout shift elimination, and adherence to the 12-point quality verification rubric.
- **Impact on the Project:**
- All 7 public routes successfully captured and visually verified with an overall QA Score of 100/100.
- Screenshots stored persistently in `/project-docs/qa/screenshots/` as visual evidence and reference benchmarks.
- Session 2 formally signed off; codebase unlocked for Session 3 (Authentication & Verification UI).

---

### DEC-006: Refactoring from Single-Page Scroll to Multi-Page Enterprise Architecture
- **Date:** 2026-07-26
- **Decision:** Transition Session 2 public website structure from a single-page scrolling landing site into an institutional multi-page architecture with dedicated absolute routes: `/`, `/features`, `/jobs`, `/pricing`, `/faq`, `/about`, and `/contact`.
- **Reason:** Most AI coding agents default to marketing-style endless scrolling landing pages optimized for startup SaaS conversion. However, MEERASH is an authoritative, enterprise-grade job and task marketplace targeting CTOs and elite technical talent. A rich, multi-page information architecture separates concerns, enhances SEO, improves navigation clarity, and provides dedicated scaling space for complex capabilities (such as AI ATS scoring, zero-commission escrow, and institutional Q&As).
- **Impact on the Project:**
- Homepage (`/`) streamlined to focus purely on executive platform introduction, removing endless scrolling pricing and FAQ blocks.
- Created `/features` (7-pillar technical deep dive), `/pricing` (comparison matrix and escrow FAQ), `/faq` (categorized knowledge base with instant search), and `/jobs` (public opportunity explorer with filter pills).
- Navigation bar (`PublicNavbar`) and footer (`PublicFooter`) updated to support absolute routing across all endpoints.

---

> **Maintenance Protocol:** When adding a new entry to this document, assign the next sequential ID (`DEC-005`, `DEC-006`, etc.), record the date, and fill out all four mandatory fields: Decision, Reason, Date, and Impact on the Project.
\ n # #   D E C - 0 0 7 :   C o n t e n t   R e a l i g n m e n t   t o   A u t h e n t i c   P r o d u c t   M e s s a g i n g \ n -   * * D a t e * * :   2 0 2 6 - 0 7 - 2 6 \ n -   * * C o n t e x t * * :   T h e   l a n d i n g   p a g e   c o p y   a n d   m o c k   d a t a   d r i f t e d   i n t o   a n   i n s t i t u t i o n a l   e s c r o w   b a n k i n g   p r o d u c t   r a t h e r   t h a n   M E E R A S H ' s   a c t u a l   p u r p o s e . \ n -   * * D e c i s i o n * * :   R e a l i g n e d   a l l   1 1   p u b l i c   r o u t e s   t o   r e p r e s e n t   M E E R A S H   a c c u r a t e l y   a s   a   j o b   a n d   t a s k   m a r k e t p l a c e   f e a t u r i n g   A I   c a r e e r   t o o l s   a n d   r e s u m e   b u i l d i n g ,   w i t h o u t   a l t e r i n g   t h e   e s t a b l i s h e d   d e s i g n   s y s t e m   o r   c o m p o n e n t   a r c h i t e c t u r e . \ n -   * * S t a t u s * * :   C o m p l e t e d .  
 