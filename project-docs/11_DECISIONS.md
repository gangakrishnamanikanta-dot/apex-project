# MEERASH: Architectural & UI Decision Log (`DECISIONS.md`)

> **Document Purpose:** This ledger records every significant architectural, layout, structural, and component decision made throughout the lifecycle of MEERASH. **Whenever an AI coding agent or engineer modifies a core layout, replaces a component pattern, or alters a workflow, they must record the decision here.**

---

## Decision Log Table of Contents

- [DEC-001: Adoption of Obsidian Black & Metallic Gold Design System](#dec-001-adoption-of-obsidian-black--metallic-gold-design-system)
- [DEC-002: UI-Only Phase I Architecture with Comprehensive Mock Data Engine](#dec-002-ui-only-phase-i-architecture-with-comprehensive-mock-data-engine)
- [DEC-003: Component-First Modular Directory Structure](#dec-003-component-first-modular-directory-structure)
- [DEC-004: Responsive Dashboard with Collapsible Fixed Sidebar Navigation](#dec-004-responsive-dashboard-with-collapsible-fixed-sidebar-navigation)
- [DEC-005: Tailwind v4 @theme Configuration & Framer Motion Type Safety](#dec-005-tailwind-v4-theme-configuration--framer-motion-type-safety)
- [DEC-006: Dedicated Public Storefront Architecture & Routing Separation](#dec-006-dedicated-public-storefront-architecture--routing-separation)

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

### DEC-005: Tailwind v4 @theme Configuration & Framer Motion Type Safety
- **Date:** 2026-07-26
- **Decision:** Implement all design system colors, typography, spacing, and elevation tokens using Tailwind CSS v4 `@theme inline` in `globals.css` and enforce strict `Omit<HTMLMotionProps<'div'>, 'children' | 'title'>` interface boundaries on all animated components.
- **Reason:** Tailwind v4 optimizes token resolution via native CSS custom properties. Standard React HTML attribute interfaces conflict with Framer Motion event definitions when spreading props (`{...props}`). Explicitly omitting conflicting props and enforcing `.tsx` extensions on files returning JSX prevents build-time TypeScript compilation failures.
- **Impact on the Project:**
  - All color tokens (`bg-primary`, `gold-primary`, `surface-elevated`) are globally available across Tailwind classes without requiring legacy JS theme objects.
  - Any future component wrapping `motion.div` or `motion.button` must extend `HTMLMotionProps` rather than `React.HTMLAttributes`.
  - The project maintains zero build errors and 100% type safety during static site generation.

---

### DEC-006: Dedicated Public Storefront Architecture & Routing Separation
- **Date:** 2026-07-26
- **Decision:** Implement a dedicated `<PublicLayout />` shell with specialized `<PublicNavbar />` and `<PublicFooter />` components in `src/components/landing/`, completely separated from the authenticated enterprise dashboard layout (`<MainContentArea />`).
- **Reason:** Public visitors require conversion-focused navigation (Home, Features, Pricing, About, Login, Register) and sticky glassmorphic headers that differ fundamentally from authenticated enterprise dashboard workflows (which require collapsible left sidebars and dense multi-module top navigation). Mixing public and enterprise navigation shells causes routing complexity, visual clutter, and unnecessary DOM depth.
- **Impact on the Project:**
  - All public storefront pages (`/`, `/about`, `/contact`, `/privacy`, `/terms`, `/404`, `/maintenance`) must wrap their content inside `<PublicLayout />`.
  - Authenticated enterprise portal sessions (starting in Phase II / Session 4) will continue using `<MainContentArea />` and `<Sidebar />`.
  - All landing UI sections (`<HeroSection />`, `<FeaturesSection />`, `<PricingSection />`, etc.) reside in `src/components/landing/` and consume mock data from `src/data/mock-landing-data.ts`.

---

> **Maintenance Protocol:** When adding a new entry to this document, assign the next sequential ID (`DEC-005`, `DEC-006`, etc.), record the date, and fill out all four mandatory fields: Decision, Reason, Date, and Impact on the Project.
