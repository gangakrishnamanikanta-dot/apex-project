# MEERASH: Design System & Visual Guidelines

> **Document Purpose:** The authoritative design specification for the MEERASH Black & Gold Enterprise UI. All UI components, layout structures, and visual elements must strictly adhere to the tokens, rules, and aesthetic standards established in this document.

---

## 1. Brand Guidelines & Aesthetics

- **Brand Name:** MEERASH
- **Tagline:** Building Technology. Creating Opportunities.
- **Visual Tone:** Executive luxury meets ultra-modern engineering. The UI should evoke the precision of high-end fintech and the power of enterprise cloud software.
- **Core Aesthetic:** Sleek Obsidian Dark Mode with Rich Metallic Gold accents, subtle glassmorphic surfaces, layered elevation depth, and razor-sharp typography.

---

## 2. Color Palette & Tokens

Our color system is built around deep dark backgrounds and high-contrast metallic gold highlights. **Never introduce random colors or hex values outside this defined palette.**

### A. Primary Brand Palette (Gold & Champagne)
| Token Name | Hex Code | RGB Value | CSS Variable | Usage & Application |
| :--- | :--- | :--- | :--- | :--- |
| `gold-500` *(Primary)* | `#D4AF37` | `212, 175, 55` | `--color-gold-500` | Primary CTA buttons, active state indicators, key borders, brand logo accents. |
| `gold-600` *(Hover)* | `#B89728` | `184, 151, 40` | `--color-gold-600` | Hover states for primary gold buttons and interactive gold links. |
| `gold-400` *(Light)* | `#E5C358` | `229, 195, 88` | `--color-gold-400` | Subtle gold glows, gradient highlights, and active icon tints. |
| `champagne` *(Highlight)* | `#F3E5AB` | `243, 229, 171` | `--color-champagne` | Premium tier badges, VIP highlights, high-contrast decorative text. |
| `amber-dark` *(Accent)* | `#997517` | `153, 117, 23` | `--color-amber-dark` | Deep gradient stops, secondary borders on dark cards. |

### B. Surface & Background Palette (Obsidian & Charcoal)
| Token Name | Hex Code | RGB Value | CSS Variable | Usage & Application |
| :--- | :--- | :--- | :--- | :--- |
| `obsidian-900` *(App BG)* | `#0A0A0C` | `10, 10, 12` | `--color-obsidian-900` | Deepest root application background (`<body>`, main canvas). |
| `obsidian-800` *(Surface)* | `#141418` | `20, 20, 24` | `--color-obsidian-800` | Primary card backgrounds, sidebar containers, top navigation bars. |
| `obsidian-700` *(Elevated)* | `#1E1E24` | `30, 30, 36` | `--color-obsidian-700` | Elevated dropdown menus, popovers, active card hover states, modals. |
| `obsidian-600` *(Border)* | `#2A2A32` | `42, 42, 50` | `--color-obsidian-600` | Subtle structural borders, dividers, table headers, inactive tabs. |
| `obsidian-500` *(Muted)* | `#383842` | `56, 56, 66` | `--color-obsidian-500` | Disabled button backgrounds, input borders on default state. |

### C. Typography & Content Palette (Neutral Gray & White)
| Token Name | Hex Code | RGB Value | CSS Variable | Usage & Application |
| :--- | :--- | :--- | :--- | :--- |
| `text-primary` | `#FFFFFF` | `255, 255, 255` | `--color-text-primary` | Main page titles, H1-H6 headings, primary body text on dark surfaces. |
| `text-secondary` | `#A0A0AB` | `160, 160, 171` | `--color-text-secondary` | Supporting body text, metadata, table cell data, subtitles. |
| `text-muted` | `#686875` | `104, 104, 117` | `--color-text-muted` | Placeholder text, disabled labels, timestamps, subtle captions. |

### D. Semantic Status Palette
| Token Name | Hex Code | Usage & Application |
| :--- | :--- | :--- |
| `success` | `#10B981` (Emerald) | Completed milestones, successful payments, active status badges, verified checkmarks. |
| `warning` | `#F59E0B` (Amber) | Pending applications, escrow holds, verification warnings, expiring bids. |
| `error` | `#EF4444` (Rose) | Rejected applications, failed transactions, validation errors, destructive actions. |
| `info` | `#3B82F6` (Blue) | System notifications, information tooltips, neutral status tags. |

---

## 3. Typography System

We utilize a clean, highly readable geometric font hierarchy.
- **Primary UI & Headings:** `Outfit` (or `Plus Jakarta Sans`) for modern executive authority and distinctive numerical presentation.
- **Secondary Body & Code:** `Inter` for hyper-legible long-form text, data tables, and dense UI labels; `JetBrains Mono` for code snippets and wallet transaction hashes.

### Type Scale & Hierarchy Table
| Level | Tailwind Class | Font Size | Line Height | Font Weight | Letter Spacing | Typical Application |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero** | `text-5xl` / `text-6xl` | `48px` / `60px` | `1.1` | `Bold (700)` | `-0.02em` | Landing page hero titles, major metric displays. |
| **Heading 1 (H1)** | `text-4xl` | `36px` | `1.2` | `Bold (700)` | `-0.015em` | Page headers (e.g., "Enterprise Job Dashboard"). |
| **Heading 2 (H2)** | `text-3xl` | `30px` | `1.25` | `SemiBold (600)` | `-0.01em` | Section headers within dashboards and landing pages. |
| **Heading 3 (H3)** | `text-2xl` | `24px` | `1.3` | `SemiBold (600)` | `-0.005em` | Card titles, modal headers, widget titles. |
| **Heading 4 (H4)** | `text-xl` | `20px` | `1.4` | `Medium (500)` | `Normal` | Sub-section headers, prominent list titles. |
| **Body Large** | `text-lg` | `18px` | `1.5` | `Normal (400)` | `Normal` | Featured lead paragraphs, key descriptions. |
| **Body Default** | `text-base` | `16px` | `1.5` | `Normal (400)` | `Normal` | Standard UI body text, form input values, chat messages. |
| **Body Small** | `text-sm` | `14px` | `1.4` | `Normal (400)` | `Normal` | Table cell data, button labels, dropdown options. |
| **Caption / Tiny** | `text-xs` | `12px` | `1.3` | `Medium (500)` | `+0.01em` | Metadata tags, timestamps, badge labels, uppercase headers. |

---

## 4. Spacing & 8pt Grid System

All layout dimensions, margins, paddings, and gaps must align strictly to the **8-point spatial grid** (with 4px allowances for micro-spacing).
- `4px` (`0.25rem` / `gap-1`, `p-1`): Micro-padding between badge icons and text.
- `8px` (`0.5rem` / `gap-2`, `p-2`): Standard spacing inside compact buttons and form inputs.
- `12px` (`0.75rem` / `gap-3`, `p-3`): Medium padding for dropdown items and small cards.
- `16px` (`1rem` / `gap-4`, `p-4`): Default container padding, card inner padding, standard gutter.
- `24px` (`1.5rem` / `gap-6`, `p-6`): Spacious card padding, dashboard widget separation.
- `32px` (`2rem` / `gap-8`, `p-8`): Major section padding, modal body spacing.
- `48px` (`3rem` / `gap-12`, `p-12`): Landing page feature block separation.
- `64px` (`4rem` / `gap-16`, `p-16`): Major structural page breaks.

---

## 5. Border Radius & Elevation

### Border Radius Tokens
- `rounded-sm` (`4px`): Status badges, tag chips, tiny tooltips.
- `rounded-md` (`8px`): Standard form inputs, dropdown menus, buttons, table rows.
- `rounded-lg` (`12px`): Primary UI cards, dashboard widgets, notification boxes.
- `rounded-xl` (`16px`): Large modals, feature banners, pricing tier cards.
- `rounded-full` (`9999px`): User avatars, pill buttons, icon-only toggle buttons.

### Elevation, Shadows & Glassmorphism
MEERASH relies heavily on subtle ambient lighting and gold-tinted glow shadows rather than harsh drop shadows:
- **Card Default:** `shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-[#2A2A32]`
- **Card Hover / Active:** `shadow-[0_8px_30px_rgba(212,175,55,0.15)] border border-[#D4AF37]/50 transition-all duration-300`
- **Gold Glow CTA:** `shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]`
- **Glassmorphic Surface:** `bg-[#141418]/80 backdrop-blur-md border border-white/10`

---

## 6. Icons & Grid Layouts

- **Iconography Library:** **Lucide React**.
- **Icon Sizing:**
  - Compact / Badge: `16px` (`w-4 h-4`)
  - Standard UI / Button: `20px` (`w-5 h-5`)
  - Dashboard Feature / Header: `24px` (`w-6 h-6`)
  - Major Empty State / Banner: `32px` to `48px` (`w-8 h-8` to `w-12 h-12`)
- **Grid Layout Architecture:**
  - 12-column responsive grid container with max-width `1536px` (`max-w-7xl` / `max-w-screen-2xl mx-auto`).
  - Standard Dashboard Grid: 280px fixed collapsible sidebar + flexible fluid main canvas (`grid grid-cols-[280px_1fr]`).

---

## 7. Component Rules & Visual Standards

### Buttons
- **Primary (Gold):** `bg-gradient-to-r from-[#D4AF37] to-[#B89728] text-[#0A0A0C] font-semibold rounded-md px-4 py-2 hover:brightness-110 active:scale-[0.98] transition-all`
- **Secondary (Outline Gold):** `border border-[#D4AF37] text-[#D4AF37] bg-transparent hover:bg-[#D4AF37]/10 rounded-md px-4 py-2 transition-all`
- **Ghost / Muted:** `text-[#A0A0AB] hover:text-white hover:bg-[#2A2A32]/50 rounded-md px-3 py-2 transition-all`

### Inputs & Form Fields
- **Default State:** `bg-[#0A0A0C] border border-[#2A2A32] rounded-md px-3.5 py-2.5 text-white placeholder-[#686875] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all`
- **Error State:** `border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]`

### Cards & Surfaces
- All cards must include subtle 1px borders (`border-[#2A2A32]`) to distinguish them against the obsidian root background (`#0A0A0C`).
- Interactive cards (jobs, tasks, courses) must lift slightly on hover (`hover:-translate-y-1`) with subtle gold border highlights (`hover:border-[#D4AF37]/40`).

---

## 8. Dark Theme Standards

1. **Pure Black vs. Off-Black:** Never use `#000000` for large surface areas; always use `#0A0A0C` to prevent OLED smearing and harsh visual fatigue.
2. **Text Contrast:** Avoid pure `#FFFFFF` for long paragraphs; use `#F3F3F5` or `#E4E4E8` for primary body text, reserving `#FFFFFF` for bold H1/H2 titles.
3. **Border Visibility:** In dark mode, borders are essential for structural separation. Never rely purely on background color differences between contiguous elements.

---

> **Strict Compliance:** Any UI component that introduces unapproved colors (e.g., random blue or purple gradients not part of semantic status alerts) or violates the 8pt spacing grid is considered a design defect and must be refactored immediately.
