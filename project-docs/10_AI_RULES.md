# MEERASH: AI Coding Agent Rules & Operational Protocols

> **Document Purpose:** This file contains the permanent behavioral rules and operational protocols that govern any AI coding assistant (Antigravity, Gemini, Copilot, Cursor, etc.) working on the MEERASH platform. **These rules must be followed forever without exception.**

---

## 1. The 11 Inviolable AI Commandments

1. **Never redesign the logo.** The MEERASH brand identity and typography mark are permanent. Do not generate SVG replacements or modify brand assets unless explicitly commanded by the user.
2. **Never change branding.** The Black & Gold theme (`#0A0A0C` obsidian background, `#D4AF37` metallic gold) and the tagline ("Building Technology. Creating Opportunities.") must remain constant across every page and component.
3. **Always reuse components.** Before generating any new UI element, inspect `/src/components/ui/` and `/src/components/features/`. Compose existing components instead of creating ad-hoc HTML structures.
4. **Never duplicate code.** If a layout pattern or widget appears on more than one page (e.g., job cards, stat badges, user avatars), extract it into a reusable component immediately.
5. **Always maintain consistency.** Ensure spacing, border radius, font sizes, and hover animations behave identically on every single page of the application.
6. **Never introduce random colours.** Absolutely do not use unapproved Tailwind color classes (such as `bg-blue-500`, `text-purple-400`, `border-indigo-600`) unless they are part of semantic status alerts defined in `03_DESIGN_SYSTEM.md`.
7. **Never create inconsistent spacing.** Adhere strictly to the 8-point spatial grid (`gap-2`, `p-4`, `m-6`, `p-8`). Do not use arbitrary pixel values or mismatched margins.
8. **Always follow the Design System.** Treat `03_DESIGN_SYSTEM.md` and `09_CODING_STANDARDS.md` as supreme law. Verify styling against design tokens before generating UI code.
9. **Always update Progress Tracker after every session.** Immediately upon completing a session's deliverables, mark items as completed in `08_PROGRESS_TRACKER.md` and record date timestamps.
10. **Never skip documentation.** Every newly created reusable component must be documented in `05_COMPONENT_LIBRARY.md`. Any significant UI or architectural change must be recorded in `11_DECISIONS.md`.
11. **Never build pages outside the roadmap unless instructed.** Strictly build only the pages and deliverables assigned to the active session in `06_DEVELOPMENT_ROADMAP.md`. Do not jump ahead to future sessions.

---

## 2. Mandatory Pre-Session AI Workflow

Before writing a single line of UI code in any future session, the AI agent **must execute the following 7-step sequence**:

```
[Step 1] Read all project documentation in /project-docs (Overview, Tech Stack, Design System, UI Arch, Component Library, Roadmap, Goals, Standards, AI Rules, Decisions).
   │
   ▼
[Step 2] Read 08_PROGRESS_TRACKER.md to determine which sessions are completed and which session is currently active.
   │
   ▼
[Step 3] Determine current session objectives, exactly two deliverables, required pages, and required components from 06_DEVELOPMENT_ROADMAP.md.
   │
   ▼
[Step 4] Build ONLY the deliverables and pages assigned to that specific session. Never jump ahead.
   │
   ▼
[Step 5] Verify code against 09_CODING_STANDARDS.md (no 'any' types, cn() utility used, 8pt grid, WCAG contrast, zero dead code).
   │
   ▼
[Step 6] Mark completed work in 08_PROGRESS_TRACKER.md and log any architectural changes in 11_DECISIONS.md.
   │
   ▼
[Step 7] Present summary of completed deliverables to the user and await explicit instructions to proceed to the next session.
```

---

## 3. Strict UI-Only & Mock Data Boundaries

During the current Phase I development cycle, the AI agent must enforce strict boundaries:
- **PROHIBITED BACKEND WORK:** Do not generate Node.js servers, API route endpoints (`/api/*`), database ORM schemas (Prisma, Drizzle, SQL), or authentication backends (NextAuth/Auth.js server configurations, JWT signers).
- **MOCK DATA REQUIREMENT:** Power all data tables, job grids, task bidding boards, financial wallets, and chat interfaces using rich, type-safe mock datasets located in `/src/data/`.
- **REALISTIC DATA SIMULATION:** Mock datasets must simulate real-world enterprise complexity: long corporate names, comprehensive job descriptions, realistic dollar amounts, timestamps, and diverse user avatars. Never use `lorem ipsum` or empty placeholder text.

---

## 4. Architectural & UI Decision Logging (`11_DECISIONS.md`)

Every time the AI agent makes a significant design or structural choice—such as changing a navigation layout, altering a pricing table hierarchy, or refactoring a component pattern—it **must record the change in `11_DECISIONS.md`** with:
- **Decision:** What exact change or implementation choice was made.
- **Reason:** Why this decision was necessary (e.g., UX improvement, mobile responsiveness, design system alignment).
- **Date:** The timestamp of the modification.
- **Impact on the Project:** How this choice affects other components, pages, or future roadmap sessions.

---

> **The AI Pledge:** By reading this document, the AI coding agent acknowledges these rules as absolute laws. Failure to follow these rules is a critical failure of the project initialization protocol.
