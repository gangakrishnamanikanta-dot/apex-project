# MEERASH: 10-Session Development Roadmap

> **Document Purpose:** The sequential execution plan for building the complete MEERASH frontend UI. Every development session must strictly follow this roadmap. **Never jump ahead or build pages outside the assigned session.**

---

## Session 1: Design System & Global Layout

- **Objective:** Establish the foundational CSS design tokens, typography scale, icon configurations, and core structural layout wrappers for the entire enterprise application.
- **Exactly Two Deliverables:**
  1. Complete Tailwind CSS configuration (`tailwind.config.ts` / `globals.css`) implementing all Black & Gold design tokens and typography rules.
  2. Core layout shells (`AppSidebar`, `TopNavbar`, `AppFooter`) with responsive collapse mechanics and theme context providers.
- **Pages Included:** Root app layout wrapper (`/src/app/layout.tsx`) and layout preview showcase.
- **Components Required:** `<AppSidebar />`, `<TopNavbar />`, `<AppFooter />`, `<Button />`, `<StatusBadge />`.
- **Acceptance Criteria:**
  - Sidebar expands and collapses smoothly between 280px and 80px without layout jitter.
  - Navbar remains sticky on scroll with glassmorphic backdrop blurring.
  - All font sizes and colors strictly match `03_DESIGN_SYSTEM.md`.
- **Estimated Time:** 3 to 4 Hours.
- **Testing Checklist:**
  - [ ] Verify 8pt grid spacing alignment across layout headers and footers.
  - [ ] Check contrast ratios of gold badges against obsidian backgrounds.
  - [ ] Test mobile responsive drawer toggle on screens under 1024px.
- **Definition of Done:** Foundational tokens and layout wrappers are merged and verified without compilation or linting warnings.

---

## Session 2: Landing & About

- **Objective:** Build a stunning, high-converting public storefront that communicates MEERASH's brand identity, executive prestige, and dual marketplace capabilities.
- **Exactly Two Deliverables:**
  1. Interactive Public Landing Page (`/`) featuring hero animations, dynamic search preview, statistics counters, and feature bento grids.
  2. Enterprise About Page (`/about`) showcasing company vision, executive leadership cards, trust certifications, and global impact metrics.
- **Pages Included:** `/` (Home), `/about`.
- **Components Required:** `<HeroSection />`, `<FeatureGrid />`, `<TrustBadges />`, `<PlatformStats />`, `<TestimonialsCarousel />`, `<CallToActionBanner />`.
- **Acceptance Criteria:**
  - Hero section renders typography with sub-second visual impact and subtle Framer Motion entry animations.
  - Testimonial carousel loops smoothly and supports touch swipe / click navigation.
  - Footer links correctly route to placeholder or upcoming roadmap pages.
- **Estimated Time:** 4 to 5 Hours.
- **Testing Checklist:**
  - [ ] Inspect responsive behavior of bento grid cards from 4 columns down to single mobile stack.
  - [ ] Ensure zero horizontal scrollbars on desktop and mobile viewports.
  - [ ] Verify hover state elevation on all feature cards and primary CTA buttons.
- **Definition of Done:** Public storefront pages are fully responsive, interactive, and visually wowed with rich enterprise aesthetics.

---

## Session 3: Authentication & Verification

- **Objective:** Implement secure, frictionless onboarding and login flows tailored for both Enterprise Employers and Specialized Contractors.
- **Exactly Two Deliverables:**
  1. Authentication Portal (`/login`, `/register`) with role switching tabs, floating label inputs, and enterprise SSO buttons.
  2. Security Verification Suite (`/verify`, `/forgot-password`) featuring interactive 6-digit OTP modal and password reset workflows.
- **Pages Included:** `/login`, `/register`, `/verify`, `/forgot-password`.
- **Components Required:** `<AuthSplitLayout />`, `<LoginForm />`, `<RegisterForm />`, `<Input />`, `<SSOButtons />`, `<TwoFactorModal />`.
- **Acceptance Criteria:**
  - Switching between Employer and Contractor tabs dynamically adjusts registration form fields and value propositions.
  - OTP input fields auto-advance focus to the next box upon digit entry.
  - Error validation states display crisp red borders and helper text captions.
- **Estimated Time:** 3 to 4 Hours.
- **Testing Checklist:**
  - [ ] Validate form validation messages for empty fields and malformed emails.
  - [ ] Test password visibility toggle (eye icon button).
  - [ ] Confirm modal focus trap and keyboard Escape close mechanics.
- **Definition of Done:** Complete authentication flow simulates successful user identification and routes cleanly to `/dashboard`.

---

## Session 4: Dashboard & Dashboard Widgets

- **Objective:** Construct the central executive command center giving users instant visibility over active projects, financial metrics, and recommended opportunities.
- **Exactly Two Deliverables:**
  1. Executive Dashboard Hub (`/dashboard`) integrating real-time metric cards, recent activity feeds, and quick action trigger buttons.
  2. Comprehensive Mock Data Engine (`/src/data/mock-users.ts`, `mock-jobs.ts`, `mock-tasks.ts`) powering realistic multi-state dashboard widgets.
- **Pages Included:** `/dashboard`.
- **Components Required:** `<MetricStatCards />`, `<ActivityFeed />`, `<QuickActionBar />`, `<RecommendedJobsCarousel />`, `<Card />`, `<DataTable />`.
- **Acceptance Criteria:**
  - Dashboard stat cards render trend indicators (+14.5% vs last month) with emerald/rose semantic colors.
  - Quick action buttons successfully open simulated modal overlays (e.g., Post Job, Create Task).
  - Activity feed displays timestamped events with distinct category badges.
- **Estimated Time:** 4 to 5 Hours.
- **Testing Checklist:**
  - [ ] Test responsiveness of 4-column metric grid scaling down to 2x2 and 1x4 stacks.
  - [ ] Verify mock data injection renders realistic contractor names, job titles, and avatars.
  - [ ] Check interactive row hover highlights on recent activity lists.
- **Definition of Done:** Dashboard functions as an interactive command hub with rich mock data and zero visual defects.

---

## Session 5: Jobs & Job Details

- **Objective:** Engineer the enterprise job marketplace allowing contractors to discover, filter, and inspect high-paying full-time and contract opportunities.
- **Exactly Two Deliverables:**
  1. Interactive Jobs Marketplace Grid (`/jobs`) with multi-tag filtering sidebar, search keyword inputs, and salary range sliders.
  2. Comprehensive Job Detail View & Application Modal (`/jobs/[id]`) displaying enterprise profile banners, required skills matrices, and proposal submission forms.
- **Pages Included:** `/jobs`, `/jobs/[id]`.
- **Components Required:** `<JobSearchHeader />`, `<FilterSidebar />`, `<JobCardGrid />`, `<JobCard />`, `<JobDetailPanel />`, `<ApplicationModal />`, `<Pagination />`.
- **Acceptance Criteria:**
  - Filtering by remote status or tech stack instantly updates displayed job cards via client-side state.
  - Job detail page showcases verified company badges, compensation tags, and structured responsibilities.
  - Submitting an application triggers an interactive success toast notification.
- **Estimated Time:** 5 to 6 Hours.
- **Testing Checklist:**
  - [ ] Verify pagination controls smoothly cycle through mock job pages.
  - [ ] Ensure long job descriptions format cleanly with readable line heights and headings.
  - [ ] Test mobile filter drawer opening when sidebar is hidden on small screens.
- **Definition of Done:** Complete job discovery and proposal submission flow is fully functional using mock datasets.

---

## Session 6: Applications & Tasks

- **Objective:** Build dual tracking and bidding systems for long-term job applications and agile project-based task execution.
- **Exactly Two Deliverables:**
  1. Applicant Tracking Kanban Board (`/applications`) with view mode toggles (Board vs. Table) and interview scheduling modals.
  2. Agile Tasks Marketplace & Bidding Portal (`/tasks`, `/tasks/[id]`) featuring milestone progress trackers and competitive bid submission forms.
- **Pages Included:** `/applications`, `/tasks`, `/tasks/[id]`.
- **Components Required:** `<KanbanBoard />`, `<ApplicationCard />`, `<ViewModeToggle />`, `<TaskMarketplaceGrid />`, `<TaskCard />`, `<BiddingModal />`, `<MilestoneTracker />`.
- **Acceptance Criteria:**
  - Kanban board columns clearly categorize application stages with item count badges.
  - Task detail view renders milestone breakdown checkboxes and clear budget bounty badges.
  - Bidding modal calculates estimated platform fees and delivery timelines dynamically.
- **Estimated Time:** 5 to 6 Hours.
- **Testing Checklist:**
  - [ ] Verify visual distinction between job applications and project task bids.
  - [ ] Test tab switching between Active Bids, In Progress Tasks, and Completed Milestones.
  - [ ] Ensure milestone tracker steps render correct checkmarks and active glow states.
- **Definition of Done:** ATS Kanban board and task bidding hub operate smoothly with comprehensive state management.

---

## Session 7: AI Assistant & Resume Builder

- **Objective:** Create cutting-edge AI enablement tools that empower professionals to generate executive resumes and receive smart proposal optimizations.
- **Exactly Two Deliverables:**
  1. AI Resume Builder Studio (`/resume`) with accordion editing panels, template selector toggles, and real-time document preview.
  2. AI Proposal & Matching Assistant UI (integrated into bidding and application modals) featuring "Optimize with AI" glow buttons and match score breakdowns.
- **Pages Included:** `/resume`.
- **Components Required:** `<ResumeEditorSidebar />`, `<LivePreviewPanel />`, `<TemplateSelector />`, `<AIPromptAssistant />`, `<ExportActions />`, `<Tabs />`.
- **Acceptance Criteria:**
  - Clicking "Optimize with AI" triggers a simulated glowing animation that enhances bullet point phrasing.
  - Switching resume templates instantly updates the live preview panel without data loss.
  - Match score badges (e.g., 94% Match) display clear popover explanations of skill alignment.
- **Estimated Time:** 4 to 5 Hours.
- **Testing Checklist:**
  - [ ] Validate print/PDF simulation export button triggers appropriate visual feedback.
  - [ ] Test adding and deleting custom skill pills within the resume editor.
  - [ ] Verify responsiveness of side-by-side editor and live preview panels on laptop viewports.
- **Definition of Done:** AI enablement features deliver an impressive, futuristic user experience with flawless interactive previews.

---

## Session 8: Wallet & Premium

- **Objective:** Develop the corporate banking portal and VIP subscription tier showcase, reinforcing MEERASH's fintech-grade security and monetization models.
- **Exactly Two Deliverables:**
  1. Enterprise Wallet & Payout Portal (`/wallet`) showing available balances, escrow holds, interactive transaction tables, and withdrawal modals.
  2. Premium Subscription Showcase (`/premium`) featuring annual/monthly billing toggles, 3-column VIP tier cards, and feature comparison matrices.
- **Pages Included:** `/wallet`, `/premium`.
- **Components Required:** `<BalanceOverviewCards />`, `<TransactionHistoryTable />`, `<PayoutMethodCard />`, `<WithdrawalModal />`, `<PricingTierCards />`, `<FeatureComparisonMatrix />`.
- **Acceptance Criteria:**
  - Wallet balance cards display prominent metallic gold typography and trend sparklines.
  - Transaction table allows filtering by Escrow Holds, Completed Payouts, and Subscription Fees.
  - Premium tier cards highlight the recommended "Gold Executive" tier with a radiant glow border.
- **Estimated Time:** 4 to 5 Hours.
- **Testing Checklist:**
  - [ ] Verify currency formatting consistency ($ XX,XXX.XX) across all financial widgets.
  - [ ] Test billing cycle toggle recalculating annual discount prices.
  - [ ] Inspect mock checkout simulation modal opening from pricing tier action buttons.
- **Definition of Done:** Financial and monetization pages exude executive trust and high-end fintech visual polish.

---

## Session 9: Profile & Settings

- **Objective:** Provide exhaustive executive identity customization, verified portfolio displays, and granular account configuration controls.
- **Exactly Two Deliverables:**
  1. Executive Profile Showcase (`/profile`, `/profile/[id]`) featuring geometric obsidian/gold banners, reputation badges, experience timelines, and client review grids.
  2. Enterprise Settings & Team Management Portal (`/settings`) with vertical navigation tabs, security 2FA toggles, and team member permission tables.
- **Pages Included:** `/profile`, `/profile/[id]`, `<settings>`.
- **Components Required:** `<ProfileBanner />`, `<ReputationBadges />`, `<ExperienceTimeline />`, `<PortfolioGrid />`, `<ClientReviewsSection />`, `<SettingsNavigation />`, `<FormSections />`, `<TeamManagementTable />`.
- **Acceptance Criteria:**
  - Public profile clearly separates Overview, Portfolio Projects, and Client Reviews via clean tab routing.
  - Settings portal allows seamless navigation across 6 distinct configuration categories without page reload.
  - Team management table enables simulated role assignment (Admin, Hiring Manager, Reviewer).
- **Estimated Time:** 4 to 5 Hours.
- **Testing Checklist:**
  - [ ] Verify avatar upload simulation preview inside profile editor.
  - [ ] Test toggle switches for email notification alerts and 2FA security settings.
  - [ ] Ensure portfolio project cards open live demo links or modal previews cleanly.
- **Definition of Done:** User identity and configuration pages are complete, deeply detailed, and fully state-managed.

---

## Session 10: Final Polish & Responsive QA

- **Objective:** Conduct rigorous end-to-end quality assurance, refine micro-animations, eliminate visual inconsistencies, and ensure flawless responsive behavior across all 14 pages.
- **Exactly Two Deliverables:**
  1. Complete Accessibility & Responsive Audit Report confirming zero layout shifts, WCAG 2.1 AA contrast compliance, and seamless mobile/tablet adaptations.
  2. Final UI Polish Package implementing subtle Framer Motion page transitions, unified loading skeleton states, and exhaustive mock data edge case handling.
- **Pages Included:** Complete application audit across all routes (`/`, `/login`, `/dashboard`, `/jobs`, `/applications`, `/tasks`, `/resume`, `/wallet`, `/premium`, `/profile`, `/settings`, `/notifications`, `/messages`, `/support`).
- **Components Required:** Comprehensive verification across all 20+ library components.
- **Acceptance Criteria:**
  - Every single interactive button, link, and modal exhibits proper hover, active, focus, and disabled states.
  - No horizontal scrollbars exist on viewport widths from `320px` to `2560px`+.
  - All mock data strings handle long text truncation (`truncate`, `line-clamp-2`) gracefully without breaking card heights.
- **Estimated Time:** 5 to 6 Hours.
- **Testing Checklist:**
  - [ ] Execute keyboard navigation walkthrough across every page using Tab and Enter.
  - [ ] Verify screen reader compatibility for icon-only action buttons.
  - [ ] Confirm all permanent documentation files in `/project-docs` and `DECISIONS.md` are up to date.
- **Definition of Done:** MEERASH Frontend UI achieves 100% Definition of Done as a world-class, production-grade Black & Gold enterprise marketplace prototype ready for stakeholder presentation and future backend integration.
