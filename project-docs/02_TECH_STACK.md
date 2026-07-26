# MEERASH: Technology Stack & Technical Standards

> **Document Purpose:** Complete specification of frontend technologies, libraries, architectural patterns, and strict technical standards governing the development of MEERASH.

---

## 1. Core Technology Stack

| Category | Technology | Version | Justification & Role in MEERASH |
| :--- | :--- | :--- | :--- |
| **Framework** | **Next.js (App Router)** | `15.0+` | Provides industry-standard React framework capabilities, file-system routing, layouts, and server-side rendering (SSR/SSG ready for UI presentation). |
| **Language** | **TypeScript** | `5.5+` | Delivers strict static typing, interfaces for complex marketplace domain models, zero runtime type ambiguity, and enhanced IDE developer experience. |
| **Core Library** | **React** | `19.0+` | Modern component-driven UI rendering engine with advanced hook patterns, concurrent features, and Server/Client component boundaries. |
| **Styling** | **Tailwind CSS** | `3.4+ / 4.0` | Utility-first CSS framework supercharged with custom design tokens for our Black & Gold brand identity, enabling rapid, consistent styling without CSS bloat. |
| **Animations** | **Framer Motion** | `11.0+` | Powering seamless micro-animations, page transitions, modal scale effects, and hover interactions without compromising 60fps frame rates. |
| **Icons** | **Lucide React** | `0.400+` | Crisp, consistent 24x24 stroke-based enterprise vector icons that scale cleanly and support custom stroke widths and gold tinting. |
| **Component Primitives** | **Radix UI / Shadcn Patterns** | `Latest` | Headless, unstyled accessible UI primitives (dialogs, dropdowns, tabs, popovers) wrapped in our custom Black & Gold design system styling. |
| **Utility / Helpers** | **clsx & tailwind-merge** | `Latest` | Dynamic className resolution without Tailwind class collisions or specificity conflicts (`cn()` utility). |
| **State Management** | **React Context & Hooks** | `Native` | Lightweight, modular frontend state for UI theme toggles, sidebar collapse states, active modals, and mock data filtering. |

---

## 2. Architectural Design Patterns

### Component-First Modular Architecture
MEERASH strictly enforces a modular hierarchy:
1. **Atoms / Primitives (`/src/components/ui`):** Highly reusable, domain-agnostic UI building blocks (Buttons, Inputs, Badges, Cards, Modals).
2. **Domain / Feature Components (`/src/components/features`):** Specialized composites built from UI primitives tailored to specific enterprise workflows (JobCard, WalletBalanceCard, ApplicantKanbanColumn, TaskBidModal).
3. **Layout Wrappers (`/src/components/layout`):** Structural frameworks (EnterpriseSidebar, TopNavbar, AppFooter, DashboardGrid).
4. **Page Assembly (`/src/app/*`):** High-level route views that assemble layout wrappers and feature components, injecting mock data via custom hooks or services.

### Separation of Concerns
- **UI Presentation vs. Data Structure:** Components must remain purely presentational where possible. Mock data structures, filtering logic, and state transformations are isolated in `/src/lib` and `/src/data`.
- **Strict Client / Server Boundaries:** Use `'use client'` directives explicitly only when interactive hooks (`useState`, `useEffect`, Framer Motion) or browser DOM APIs are required.

---

## 3. Folder Structure & Organization

```
apex project/
├── project-docs/                   # Permanent project documentation & roadmap
│   ├── 01_PROJECT_OVERVIEW.md
│   ├── 02_TECH_STACK.md
│   ├── 03_DESIGN_SYSTEM.md
│   ├── 04_UI_ARCHITECTURE.md
│   ├── 05_COMPONENT_LIBRARY.md
│   ├── 06_DEVELOPMENT_ROADMAP.md
│   ├── 07_PROJECT_GOALS.md
│   ├── 08_PROGRESS_TRACKER.md
│   ├── 09_CODING_STANDARDS.md
│   ├── 10_AI_RULES.md
│   └── 11_DECISIONS.md             # Architectural & UI decision log
├── public/                         # Static assets, brand logos, mock media
│   ├── logos/
│   └── mock-images/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── (auth)/                 # Authentication route group (login, register, verify)
│   │   ├── (dashboard)/            # Enterprise authenticated portal route group
│   │   │   ├── dashboard/
│   │   │   ├── jobs/
│   │   │   ├── applications/
│   │   │   ├── tasks/
│   │   │   ├── resume/
│   │   │   ├── wallet/
│   │   │   ├── premium/
│   │   │   ├── notifications/
│   │   │   ├── messages/
│   │   │   ├── profile/
│   │   │   ├── settings/
│   │   │   └── support/
│   │   ├── layout.tsx              # Root HTML/Body wrapper with theme providers
│   │   ├── page.tsx                # Public Landing Page
│   │   └── globals.css             # Tailwind directives & CSS variable tokens
│   ├── components/
│   │   ├── ui/                     # Reusable design system primitives
│   │   ├── features/               # Domain-specific marketplace components
│   │   └── layout/                 # Sidebars, Navbars, Footers, and Grids
│   ├── data/                       # Mock datasets simulating enterprise database
│   │   ├── mock-jobs.ts
│   │   ├── mock-users.ts
│   │   ├── mock-tasks.ts
│   │   ├── mock-wallet.ts
│   │   └── mock-notifications.ts
│   ├── lib/                        # Utility functions, helpers, cn() wrapper
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── types/                      # Strict TypeScript interfaces & type definitions
│       ├── job.types.ts
│       ├── user.types.ts
│       ├── task.types.ts
│       └── wallet.types.ts
├── tailwind.config.ts              # Design system color tokens, extensions, fonts
├── tsconfig.json                   # TypeScript compiler configuration (strict: true)
└── package.json                    # Project dependencies and npm scripts
```

---

## 4. Strict Technical Standards

### A. Code Standards (TypeScript & Clean Code)
- **No `any` Types:** Explicit typing is mandatory for all component props, mock data items, event handlers, and function returns.
- **Interface over Type:** Prefer `interface` for object shapes and domain models; use `type` for unions, intersections, and utility types.
- **Self-Documenting Names:** Variables and functions must describe their exact intent (e.g., `isWalletBalanceLoading`, `handleTaskBidSubmission`).
- **Zero Dead Code:** Commented-out experimental blocks, unused imports, and dummy `console.log()` statements are strictly forbidden in production commits.

### B. Accessibility Standards (a11y)
- **WCAG 2.1 AA Compliance:** All text and interactive elements must maintain a contrast ratio of at least 4.5:1 against dark backgrounds.
- **Semantic HTML5:** Strict use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
- **Keyboard Navigation:** All buttons, links, tabs, and modals must be 100% navigable via `Tab`, `Shift+Tab`, `Enter`, and `Escape` keys with visible metallic gold outline focus rings (`focus-visible:ring-2 focus-visible:ring-[#D4AF37]`).
- **ARIA Attributes:** Modals must use `aria-labelledby` and `aria-describedby`; icon-only buttons must include descriptive `aria-label` attributes.

### C. Responsive Standards (Desktop-First Enterprise UI)
- **Desktop-First Layout:** Designed primarily for large enterprise displays (`1440px` to `1920px+`) where complex data tables and multi-column dashboards thrive.
- **Fluid Breakpoints:**
  - `2xl` (`1536px`+): Full multi-column dashboard with open right-hand panels.
  - `xl` (`1280px`): Standard enterprise desktop view.
  - `lg` (`1024px`): Tablet landscape / compact desktop (sidebars collapse to icons or drawers).
  - `md` (`768px`): Tablet portrait (grid layouts convert to single or 2-column stacks).
  - `sm` (`640px` down): Mobile fallback (bottom navigation or hamburger drawer, full-width cards).
- **No Horizontal Scroll:** Zero horizontal page overflowing across any breakpoint unless explicitly inside a scrollable data table container (`overflow-x-auto`).

### D. Performance Standards
- **Zero Layout Shifts (CLS < 0.1):** Skeleton loaders must match the exact dimensions of loaded UI cards and tables.
- **Optimized Asset Delivery:** All vector icons rendered cleanly via SVG/Lucide; images optimized via Next.js `<Image />` with explicit `width` and `height` or `fill` with aspect ratios.
- **60 FPS Animation Budget:** Animations restricted to CSS transforms (`scale`, `translate`, `opacity`) via Framer Motion. Avoid animating `width`, `height`, or `top/left` properties.
- **Component Memoization:** Use `React.memo`, `useMemo`, and `useCallback` for complex data tables, filter lists, and live charts to prevent cascading re-renders during UI state changes.

---

> **Enforcement:** These technical standards are non-negotiable. Every pull request, UI session, and code addition must be verified against this specification before marking a milestone completed.
