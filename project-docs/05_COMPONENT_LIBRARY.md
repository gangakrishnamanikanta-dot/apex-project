# MEERASH: Reusable Component Library Specification

> **Document Purpose:** The definitive technical reference for every reusable UI component in MEERASH. Each entry defines the component's core purpose, TypeScript props interface, visual variants, and strict usage rules.

---

## 1. UI Primitives (`/src/components/ui`)

### A. Button (`<Button />`)
- **Purpose:** Primary interactive trigger for form submissions, modal actions, and page navigation.
- **Props:**
  ```typescript
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'icon';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children?: React.ReactNode;
  }
  ```
- **Variants:**
  - `primary`: Gold gradient background (`#D4AF37` to `#B89728`), obsidian text, bold weight.
  - `secondary`: Transparent background, 1px gold border (`#D4AF37`), gold text.
  - `ghost`: Transparent background, muted text, white hover text with subtle `#2A2A32` hover fill.
  - `danger`: Subtle rose border, `#EF4444` text, dark rose hover fill.
- **Usage Rules:** Never use more than one `primary` button inside a single modal or card header. Use `isLoading` to disable clicks and display a gold spinner during mock async operations.

---

### B. Card (`<Card />`, `<CardHeader />`, `<CardContent />`, `<CardFooter />`)
- **Purpose:** Modular container for grouping related content, metrics, form sections, or marketplace listings.
- **Props:**
  ```typescript
  interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    isHoverable?: boolean;
    hasGoldBorder?: boolean;
    isGlass?: boolean;
  }
  ```
- **Variants:**
  - `default`: Obsidian surface (`#141418`), 1px subtle border (`#2A2A32`), rounded-lg.
  - `hoverable`: Lifts up (`-translate-y-1`) with subtle gold glow shadow on mouse hover.
  - `glass`: 80% opacity obsidian background with backdrop-blur-md for layered depth.
- **Usage Rules:** Wrap nested layout sections cleanly. Never nest hoverable cards within other hoverable cards to avoid UX confusion.

---

### C. Input & Textarea (`<Input />`, `<Textarea />`, `<FormField />`)
- **Purpose:** Capturing user text, numerical data, search queries, and job descriptions.
- **Props:**
  ```typescript
  interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  }
  ```
- **Variants:** Standard dark input, error highlighted input (`#EF4444`), success verified input (`#10B981`).
- **Usage Rules:** Always associate inputs with a descriptive label or explicit `aria-label`. Display error strings in caption typography (`text-xs text-error`) immediately beneath the input box.

---

### D. Dropdowns & Selects (`<Select />`, `<DropdownMenu />`)
- **Purpose:** Presenting selectable option lists for filtering, category selection, and user actions.
- **Props:**
  ```typescript
  interface SelectProps {
    value: string;
    onChange: (value: string) => void;
    options: Array<{ label: string; value: string; disabled?: boolean }>;
    placeholder?: string;
    label?: string;
  }
  ```
- **Variants:** Form select field, floating action dropdown, icon-triggered menu.
- **Usage Rules:** Ensure dropdown menus render on an elevated layer (`z-50`) with an `#1E1E24` background and visible border to prevent blending into underlying cards.

---

### E. Search Bars (`<SearchBar />`, `<AutocompleteSearch />`)
- **Purpose:** Instant keyword lookup and filtering across jobs, tasks, candidates, and documentation.
- **Props:**
  ```typescript
  interface SearchBarProps {
    placeholder?: string;
    onSearch: (query: string) => void;
    suggestions?: string[];
    showFilterButton?: boolean;
    onFilterClick?: () => void;
  }
  ```
- **Variants:** Hero giant search bar (`size="lg"`), navbar compact search (`size="sm"`), filterable header search.
- **Usage Rules:** Must include a visible search icon (`Lucide.Search`) on the left and a clear (`X`) button on the right when text is present.

---

### F. Tables (`<DataTable />`, `<TableHeader />`, `<TableRow />`, `<TableCell />`)
- **Purpose:** Structured presentation of dense enterprise data (transactions, applications, user lists).
- **Props:**
  ```typescript
  interface DataTableProps<T> {
    data: T[];
    columns: Array<{ header: string; accessorKey: keyof T | string; cell?: (item: T) => React.ReactNode }>;
    isLoading?: boolean;
    onRowClick?: (item: T) => void;
  }
  ```
- **Variants:** Striped rows, borderless compact table, interactive hover rows.
- **Usage Rules:** Table headers must use caption styling (`text-xs uppercase font-semibold text-[#A0A0AB] tracking-wider`). Right-align all financial amounts and numerical data.

---

### G. Badges & Tags (`<StatusBadge />`, `<TagBadge />`, `<PremiumBadge />`)
- **Purpose:** Visual classification of state, skill categories, and VIP status.
- **Props:**
  ```typescript
  interface BadgeProps {
    status?: 'success' | 'warning' | 'error' | 'info' | 'gold' | 'neutral';
    label: string;
    icon?: React.ReactNode;
    isPill?: boolean;
  }
  ```
- **Variants:**
  - `gold` / `champagne`: VIP, Premium tier, Featured contract.
  - `success`: Completed, Verified, Paid, Active.
  - `warning`: In Review, Pending, Escrow Hold.
- **Usage Rules:** Use compact text sizes (`text-xs`). Keep padding tight (`px-2.5 py-0.5`).

---

### H. Tabs (`<Tabs />`, `<TabsList />`, `<TabsTrigger />`, `<TabsContent />`)
- **Purpose:** Switching views within a single page context (e.g., Job Details vs. Company Profile vs. Applications).
- **Props:**
  ```typescript
  interface TabsProps {
    defaultValue: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
  }
  ```
- **Variants:** Horizontal underline tabs (with gold active bar), pill toggle buttons, boxed segmented controls.
- **Usage Rules:** Active tab text must switch to white or gold with a bold weight. Inactive tabs remain text-muted (`#686875`) with normal weight.

---

### I. Dialogs & Modals (`<Modal />`, `<ConfirmationModal />`, `<InteractiveModal />`)
- **Purpose:** Focused overlay workflows that demand immediate user attention or confirmation.
- **Props:**
  ```typescript
  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children?: React.ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  }
  ```
- **Variants:** Standard content modal, destructive action confirmation modal, full-screen interactive drawer.
- **Usage Rules:** Always render a dark semi-transparent backdrop (`bg-black/70 backdrop-blur-sm`). Include an explicit Escape key listener and close (`X`) button in the top right.

---

### J. Pagination (`<Pagination />`, `<PaginationControls />`)
- **Purpose:** Navigating through large datasets without overwhelming browser DOM rendering.
- **Props:**
  ```typescript
  interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems?: number;
    pageSize?: number;
  }
  ```
- **Variants:** Numbered page buttons with Previous/Next arrows, compact "Page X of Y" selector.
- **Usage Rules:** Highlight the current page button with the primary gold fill. Disable Previous/Next buttons when at boundaries (page 1 or max page).

---

## 2. Feature / Domain Components (`/src/components/features`)

### K. Timeline & Milestones (`<Timeline />`, `<MilestoneTracker />`)
- **Purpose:** Tracking task progress, contract stages, or application interview steps.
- **Props:**
  ```typescript
  interface MilestoneTrackerProps {
    milestones: Array<{ id: string; title: string; date?: string; status: 'completed' | 'current' | 'pending'; amount?: number }>;
  }
  ```
- **Variants:** Vertical step timeline, horizontal progress bar with step nodes.
- **Usage Rules:** Completed nodes render in emerald green or metallic gold with a checkmark icon. Current active nodes pulse with a subtle gold glow animation.

---

### L. Notification Card (`<NotificationItem />`, `<NotificationPopup />`)
- **Purpose:** Displaying individual alert events in lists or toast popups.
- **Props:**
  ```typescript
  interface NotificationItemProps {
    id: string;
    title: string;
    message: string;
    timestamp: string;
    isRead: boolean;
    type: 'job' | 'task' | 'wallet' | 'system' | 'mention';
    onMarkAsRead: (id: string) => void;
  }
  ```
- **Variants:** Unread highlighted card (with gold left border strip), muted read card.
- **Usage Rules:** Unread cards must display a distinct visual cue (e.g., `#D4AF37` left border and glowing dot).

---

### M. Wallet Card (`<BalanceCard />`, `<TransactionRow />`, `<PaymentMethodCard />`)
- **Purpose:** Executive financial display representing currency balances and transaction records.
- **Props:**
  ```typescript
  interface BalanceCardProps {
    title: string;
    amount: number;
    currency?: string;
    trend?: { percentage: number; isPositive: boolean };
    actionText?: string;
    onActionClick?: () => void;
  }
  ```
- **Variants:** Total balance hero card (with champagne gradient accents), compact secondary balance box.
- **Usage Rules:** Always format numbers with commas and two decimal places (`$124,500.00`). Use monospace fonts for numerical alignment.

---

### N. Job Card (`<JobCard />`, `<JobHeader />`, `<JobMetadata />`)
- **Purpose:** Summarizing enterprise job opportunities in marketplace grids and search lists.
- **Props:**
  ```typescript
  interface JobCardProps {
    id: string;
    title: string;
    company: { name: string; logo: string; isVerified: boolean };
    location: string;
    salaryRange: string;
    type: 'Full-time' | 'Contract' | 'Milestone';
    skills: string[];
    postedAgo: string;
    isFeatured?: boolean;
  }
  ```
- **Variants:** Grid view card, horizontal list row view card, featured VIP card (with gold border outline).
- **Usage Rules:** Limit displayed skill badges to a maximum of 4 pills; render a `+X more` tag for remaining items to prevent card height misalignment.

---

### O. Company Card (`<CompanyCard />`, `<CompanyProfileBanner />`)
- **Purpose:** Showcasing employer credibility, open roles, and verified enterprise status.
- **Props:**
  ```typescript
  interface CompanyCardProps {
    name: string;
    logo: string;
    tagline: string;
    openJobsCount: number;
    rating: number;
    isVerified: boolean;
  }
  ```
- **Variants:** Compact sidebar widget, full grid marketplace card, profile hero banner.
- **Usage Rules:** Enterprise verified companies must display a prominent gold checkmark badge immediately next to the organization name.

---

## 3. Layout Components (`/src/components/layout`)

### P. Sidebar (`<AppSidebar />`, `<SidebarItem />`, `<SidebarGroup />`)
- **Purpose:** Primary authenticated desktop navigation hierarchy.
- **Props:**
  ```typescript
  interface AppSidebarProps {
    isCollapsed: boolean;
    onToggleCollapse: () => void;
    userRole: 'employer' | 'contractor' | 'admin';
  }
  ```
- **Variants:** Expanded 280px drawer, collapsed 80px icon-only rail.
- **Usage Rules:** Group navigation links logically (Main, Marketplace, Workspace, Finance, System). Highlight active route with gold text and a gold vertical indicator bar.

---

### Q. Navbar (`<TopNavbar />`, `<UserNav />`, `<MobileMenu />`)
- **Purpose:** Top-level global header managing search, notification alerts, and user account actions.
- **Props:**
  ```typescript
  interface TopNavbarProps {
    onOpenMobileMenu?: () => void;
    user?: { name: string; email: string; avatar: string; balance: number };
  }
  ```
- **Variants:** Authenticated dashboard top bar, public landing sticky header.
- **Usage Rules:** Must remain sticky on scroll (`sticky top-0 z-40`) with a glassmorphic background (`bg-[#0A0A0C]/80 backdrop-blur-md`).

---

### R. Footer (`<AppFooter />`)
- **Purpose:** Public storefront footer anchoring brand copyright, legal links, and navigation sitemaps.
- **Props:**
  ```typescript
  interface AppFooterProps {
    showNewsletter?: boolean;
  }
  ```
- **Variants:** Full 5-column enterprise footer, minimal copyright footer for authentication pages.
- **Usage Rules:** Include the MEERASH tagline ("Building Technology. Creating Opportunities.") and ensure all social links have accessible hover states.

---

### S. Public Website & Landing Modules (`<PublicLayout />`, `<PublicNavbar />`, `<PublicFooter />`, `<SectionHeading />`, `<HeroSection />`, `<FeatureCard />`, `<StatisticCard />`, `<PricingCard />`, `<FAQAccordion />`, `<CTABanner />`, `<ContactForm />`)
- **Purpose:** Specialised, responsive storefront components engineered for public-facing visitor conversion, waitlist registration, and institutional branding without requiring user authentication.
- **Key Component Interfaces:**
  ```typescript
  interface PublicLayoutProps {
    children: React.ReactNode;
    hideNavbar?: boolean;
    hideFooter?: boolean;
  }
  interface SectionHeadingProps {
    badge?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
  }
  interface FeatureCardProps {
    iconName: string;
    title: string;
    description: string;
  }
  interface PricingCardProps {
    name: string;
    tagline: string;
    price: string;
    period: string;
    isPopular?: boolean;
    features: string[];
    ctaText: string;
  }
  ```
- **Usage Rules:** Public pages must use `<PublicLayout />` as their root shell to guarantee consistent header/footer presentation across `/`, `/about`, `/contact`, `/privacy`, `/terms`, `/404`, and `/maintenance`. All statistics and job preview cards must import realistic demo content from `src/data/mock-landing-data.ts`.

---

> **Library Enforcement:** When building any page in the roadmap, developers and AI agents must construct UI layouts by assembling these documented components. Creating one-off ad-hoc markup that duplicates the functionality of an existing component is strictly forbidden.
