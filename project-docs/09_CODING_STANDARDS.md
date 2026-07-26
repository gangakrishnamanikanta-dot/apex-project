# MEERASH: Frontend Coding Standards & Best Practices

> **Document Purpose:** Complete specification of coding styles, file organization, TypeScript rules, Tailwind patterns, and quality checklists for MEERASH. All code contributions must strictly adhere to these standards.

---

## 1. Naming Conventions

- **Component Files & Directories:** Use `kebab-case` for file names and directories (e.g., `/src/components/features/job-card/`, `job-card.tsx`, `auth-split-layout.tsx`).
- **React Components & Types:** Use `PascalCase` for exported component names, interfaces, and custom types (e.g., `export function JobCardGrid()`, `interface UserProfile`).
- **Variables, Functions & Hooks:** Use `camelCase` for variables, event handlers, and custom hooks (e.g., `const isWalletLoading = false`, `function handleBidSubmit()`, `useMockData()`).
- **Constants & Environment Variables:** Use `UPPER_SNAKE_CASE` for global constants and environment configurations (e.g., `MAX_ATTACHMENT_SIZE_MB = 25`, `NEXT_PUBLIC_APP_URL`).

---

## 2. Folder Conventions & File Organization

- **Strict Directory Separation:**
  - `/src/components/ui`: Strictly domain-agnostic UI building blocks (Buttons, Inputs, Cards, Modals).
  - `/src/components/features`: Marketplace-specific composite widgets (JobCards, WalletTable, KanbanBoard).
  - `/src/components/layout`: Global application skeletons (Sidebar, Navbar, Footer).
  - `/src/data`: Pure mock dataset generators and type-safe data arrays.
- **File Structure Order:** Within any React component `.tsx` file, organize code in the following sequence:
  1. File header comment or `'use client'` directive (if applicable).
  2. External library imports.
  3. Internal component, utility, and type imports.
  4. Local TypeScript interfaces / props definitions.
  5. Exported functional component definition.
  6. Internal helper functions or sub-components.

---

## 3. Component Rules

- **Single Responsibility Principle:** A component should do exactly one thing. If a component file exceeds 250 lines of code, break it down into modular sub-components.
- **Strict Prop Typing:** Never use inline untyped object destructuring. Always define an explicit `interface` for component props.
- **Zero Magic Numbers or Hardcoded Hex Colors:** Never write `bg-[#0A0A0C]` or `p-[15px]` inline if a semantic token exists. Use `bg-obsidian-900` or standard 8pt grid tokens (`p-4`).
- **Accessible Wrapper Elements:** Always wrap clickable cards or buttons in semantic HTML elements (`<button>`, `<a>`, `<article>`) rather than `div` tags with `onClick` handlers.

---

## 4. Import Order & Formatting

Enforce the following import grouping separated by empty lines:
```typescript
// 1. React and Next.js core imports
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 2. Third-party library imports (Framer Motion, Lucide Icons, clsx)
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// 3. Internal UI primitives and layout components
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { StatusBadge } from '@/components/ui/badge';

// 4. Internal feature components and mock data
import { mockJobs } from '@/data/mock-jobs';
import { formatCurrency } from '@/lib/constants';

// 5. TypeScript type definitions
import type { JobOpportunity } from '@/types/job.types';
```

---

## 5. TypeScript Standards

- **Absolute Type Safety:** The `any` keyword is strictly prohibited. If an API or mock response is dynamic, use `unknown` and perform type narrowing or type assertions.
- **Null & Undefined Checks:** Enable and respect `strictNullChecks`. Use optional chaining (`user?.profile?.avatar`) and nullish coalescing (`user.balance ?? 0`).
- **Domain Interfaces:** Maintain dedicated type files in `/src/types/` for all marketplace entities (`Job`, `Task`, `Application`, `WalletTransaction`, `Notification`).

---

## 6. Tailwind CSS Standards

- **Utility Token Usage:** Prioritize design system tokens established in `03_DESIGN_SYSTEM.md`.
- **Dynamic Class Resolution:** Always use the `cn()` utility (combining `clsx` and `tailwind-merge`) when applying conditional classes or accepting `className` props:
  ```tsx
  export function Card({ className, isHoverable, ...props }: CardProps) {
    return (
      <div
        className={cn(
          "bg-obsidian-800 border border-obsidian-600 rounded-lg p-4 transition-all duration-300",
          isHoverable && "hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]",
          className
        )}
        {...props}
      />
    );
  }
  ```
- **No Arbitrary Spacing:** Never use square brackets for standard spacing (`m-[13px]`). Adjust layout designs to fit the 8pt grid (`m-3` or `m-4`).

---

## 7. Accessibility (a11y) Rules

- **Contrast Ratios:** Text must meet WCAG 2.1 AA standards (minimum 4.5:1 ratio against dark backgrounds). Avoid dark gray text on obsidian backgrounds.
- **ARIA Attributes:** Icon-only buttons must include `aria-label="Action description"`. Modals must trap keyboard focus and include `aria-modal="true"`.
- **Keyboard Navigation:** Never remove focus outlines without providing a custom visible metallic gold focus ring (`focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:outline-none`).
- **Screen Reader Text:** Use `sr-only` classes to provide context for screen readers on complex numerical badges or status icons.

---

## 8. Responsive Design Rules

- **Desktop-First Methodology:** Build layout grids for enterprise displays (`1440px`+) first, then use responsive prefixes (`xl:`, `lg:`, `md:`, `sm:`) to gracefully adapt for smaller viewports.
- **Zero Horizontal Overflow:** Ensure no component causes horizontal scrollbars on standard viewports (`320px` to `2560px`). Use `min-w-0` or `overflow-hidden` on flex/grid children when displaying long text strings.
- **Responsive Typography:** Use fluid font scaling or responsive class overrides (`text-2xl md:text-3xl lg:text-4xl`) for hero titles and major dashboard headers.

---

## 9. Performance & Optimization Rules

- **Image Optimization:** Always use Next.js `<Image />` component with explicit dimensions or aspect ratio wrappers. Never use standard `<img>` tags.
- **SVGs and Icons:** Use Lucide React vector icons. Do not import massive icon bundles; import individual icon components cleanly.
- **Render Optimization:** Use `React.memo` and `useCallback` on heavy data table rows, interactive charts, and complex filter sidebars to prevent cascading re-renders.
- **Pagination & Virtualization:** When rendering mock lists exceeding 50 items, implement client-side pagination or list slicing to maintain instant DOM responsiveness.

---

## 10. Animation Standards

- **Subtle Enterprise Motion:** Animations must enhance UX clarity, not distract. Keep transition durations between `200ms` and `300ms`.
- **Approved Framer Motion Patterns:**
  - Modal Entry: `initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}`
  - List Item Fade-in: `initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}`
- **Reduced Motion Support:** Always respect user OS preferences by avoiding aggressive animations when `prefers-reduced-motion: reduce` is detected.

---

## 11. Code Quality Checklist

Before submitting a pull request or marking any development session complete, verify:
- [ ] No `console.log`, `console.warn`, or `debugger` statements exist in component code.
- [ ] No commented-out dead code blocks or unused imports remain.
- [ ] TypeScript compiles cleanly with zero type errors or `any` fallbacks.
- [ ] All components are styled using authorized Black & Gold tokens and respect the 8pt grid.
- [ ] Responsive layouts have been verified across desktop (`1536px`), laptop (`1280px`), tablet (`768px`), and mobile (`375px`) viewports.
