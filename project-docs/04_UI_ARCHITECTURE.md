# MEERASH: Complete UI Architecture & Page Specifications

> **Document Purpose:** Detailed specification of the complete UI architecture for MEERASH. Every application page is mapped with its exact purpose, component composition, navigation flow, and technical dependencies to ensure structural clarity before coding.

---

## 1. Landing Page (`/`)

- **Purpose:** Public storefront and first impression of MEERASH. Communicates executive authority, platform capabilities, and drives conversions for both enterprise employers and specialized contractors.
- **Components Used:**
  - `TopNavbar` (Public view with Login / Register CTAs)
  - `HeroSection` (Animated typography, dynamic search bar preview, gold CTA buttons)
  - `TrustBadges` (Enterprise logo carousel, platform security certifications)
  - `FeatureGrid` (Bento-style interactive feature cards showcasing Jobs, Tasks, and AI Resume tools)
  - `PlatformStats` (Animated numerical counters for active contracts, payout volume, and verified talent)
  - `TestimonialsCarousel` (Executive quotes with glassmorphic cards and gold star ratings)
  - `CallToActionBanner` (High-contrast obsidian and champagne gradient banner)
  - `AppFooter` (Multi-column links, newsletter subscription, copyright, social icons)
- **Navigation Flow:** Directs users to `/login`, `/register`, `/jobs` (public preview), or `/about`.
- **Dependencies:** Framer Motion for scroll-triggered micro-animations; Lucide icons for feature badges; public mock statistics dataset.

---

## 2. Authentication (`/login`, `/register`, `/verify`, `/forgot-password`)

- **Purpose:** Seamless, secure, and visually premium onboarding and identity verification portal.
- **Components Used:**
  - `AuthSplitLayout` (Left panel: high-res brand visual with mission statement; Right panel: authentication form)
  - `LoginForm` & `RegisterForm` (Role selector toggles between Enterprise Employer and Contractor)
  - `FormInput` (Email, password with visibility toggle, company name)
  - `SSOButtons` (Google, GitHub, LinkedIn enterprise SSO buttons with custom branding)
  - `TwoFactorModal` (6-digit OTP verification code input for enhanced security simulation)
- **Navigation Flow:** Successful login routes to `/dashboard`; registration routes to `/verify` then `/dashboard`.
- **Dependencies:** React Hook Form simulation; `mock-users.ts` dataset; Framer Motion modal transitions.

---

## 3. Dashboard (`/dashboard`)

- **Purpose:** Centralized executive command center summarizing real-time marketplace activity, active tasks, financial metrics, and recommended opportunities.
- **Components Used:**
  - `AppSidebar` (Fixed collapsible left navigation with active state highlights)
  - `TopNavbar` (User profile dropdown, wallet balance badge, notification bell, quick search)
  - `MetricStatCards` (4-column overview: Active Jobs, Ongoing Tasks, Monthly Earnings/Spend, Pending Reviews)
  - `ActivityFeed` (Timeline of recent bids, milestone approvals, and system alerts)
  - `QuickActionBar` (One-click modals to Post a Job, Create a Task, or Withdraw Funds)
  - `RecommendedJobsCarousel` / `ActiveTaskTable` (Dynamic summary widgets with mock filter tabs)
- **Navigation Flow:** Hub connecting to `/jobs`, `/tasks`, `/applications`, `/wallet`, and `/messages`.
- **Dependencies:** `mock-jobs.ts`, `mock-tasks.ts`, `mock-wallet.ts`; Lucide icons; Recharts or custom SVG sparklines.

---

## 4. Jobs Marketplace (`/jobs`, `/jobs/[id]`)

- **Purpose:** Comprehensive enterprise job discovery and detail view allowing contractors to filter, inspect, and apply for high-value contracts.
- **Components Used:**
  - `JobSearchHeader` (Keyword input, location filter, remote toggle, compensation range slider)
  - `FilterSidebar` (Checkboxes for Seniority, Tech Stack tags, Contract Type, Enterprise Verification status)
  - `JobCardGrid` (Paginated list of enterprise job opportunities with salary tags and skill pills)
  - `JobDetailPanel` (Sticky right-hand panel or full page showing comprehensive job description, enterprise profile banner, required skills matrix, and application modal trigger)
  - `ApplicationModal` (Cover note textarea, AI resume selector, compensation expectation input)
- **Navigation Flow:** Clicking a `JobCard` opens `JobDetailPanel`; clicking "Apply Now" triggers `ApplicationModal`, redirecting to `/applications` upon submission.
- **Dependencies:** `mock-jobs.ts`; pagination helpers; dynamic search and filter state hooks.

---

## 5. Applications Tracker (`/applications`)

- **Purpose:** Applicant Tracking System (ATS) for contractors to monitor submitted proposals, and for employers to review and shortlist candidates.
- **Components Used:**
  - `ViewModeToggle` (Switch between Kanban Board view and structured Data Table view)
  - `KanbanBoard` (Columns: Submitted, Under Review, Interviewing, Offered, Archived)
  - `ApplicationCard` (Applicant name/job title, match score badge, submitted date, action buttons)
  - `InterviewScheduleModal` (Calendar date/time picker simulation for scheduling technical screens)
- **Navigation Flow:** Clicking an application opens the candidate's `/profile` or initiates a chat in `/messages`.
- **Dependencies:** `mock-applications.ts`; drag-and-drop simulation or click-to-move column state.

---

## 6. Tasks Marketplace (`/tasks`, `/tasks/[id]`)

- **Purpose:** Agile project-based task execution hub where enterprises delegate discrete technical milestones and contractors submit competitive bids.
- **Components Used:**
  - `TaskMarketplaceGrid` (Filterable grid of active tasks categorized by frontend, backend, DevOps, design)
  - `TaskCard` (Budget bounty badge, deadline countdown timer, difficulty rating tag, bid count indicator)
  - `TaskDetailModal` (Comprehensive specifications, attached mock reference docs, QA acceptance criteria)
  - `BiddingModal` (Bid amount input, delivery timeline estimator, technical proposal text area)
  - `MilestoneTracker` (Progress bar showing task lifecycle: Assigned -> In Progress -> QA Review -> Completed & Paid)
- **Navigation Flow:** Bidding on a task links it to the contractor's active dashboard; completion triggers wallet escrow release.
- **Dependencies:** `mock-tasks.ts`; milestone checklist state management.

---

## 7. Resume Builder (`/resume`)

- **Purpose:** Standard career presentation tool enabling users to generate and manage professional resumes.
- **Components Used:**
  - `ResumeEditorSidebar` (Accordion sections: Personal Summary, Experience, Technical Skills, Education, Certifications)
  - `LivePreviewPanel` (Real-time A4/Letter formatted document view)
  - `TemplateSelector` (Switch between standard layout templates)
  - `ExportActions` (PDF download button, shareable link generator)
- **Navigation Flow:** Accessible from `/dashboard` or `/profile`; auto-attaches to job applications.
- **Dependencies:** `mock-users.ts` resume data.

---

## 8. Wallet & Earnings Portal (`/wallet`)

- **Purpose:** Secure earnings management interface tracking task payments and payouts.
- **Components Used:**
  - `BalanceOverviewCards` (Total Available Balance, Pending Approval, Lifetime Earnings, Currency Selector)
  - `TransactionHistoryTable` (Filterable table with date, transaction ID, client/contractor name, amount in gold typography, status badge)
  - `PayoutMethodCard` (Connected bank accounts, payment details)
  - `WithdrawalModal` (Amount selector, payout destination dropdown, fee calculator simulation)
  - `EarningsChart` (Visual bar/line chart representing monthly revenue growth)
- **Navigation Flow:** Connects to specific `/tasks` or `/jobs` via transaction reference IDs.
- **Dependencies:** `mock-wallet.ts`; SVG/Canvas charting primitives; currency formatting utilities.

---

## 9. Premium & Enterprise Subscriptions (`/premium`)

- **Purpose:** Showcase VIP tier upgrades and enterprise subscription packages unlocking zero-fee bidding, advanced AI matching, and dedicated account managers.
- **Components Used:**
  - `BillingCycleToggle` (Monthly vs. Annual billing switch with "Save 20%" champagne badge)
  - `PricingTierCards` (3-column layout: Standard Professional, Gold Executive, Enterprise Unlimited; middle tier highlighted with gold glow border)
  - `FeatureComparisonMatrix` (Detailed checkmark table comparing capabilities across tiers)
  - `CheckoutSimulationModal` (Mock credit card / corporate billing input with instant success animation)
- **Navigation Flow:** Upgrading updates the user's global status badge across navbar and profile.
- **Dependencies:** `mock-users.ts` subscription tier state; confetti or celebratory animation on upgrade.

---

## 10. Notification Center (`/notifications`)

- **Purpose:** Real-time alert hub tracking contract milestones, new bid arrivals, system security alerts, and chat mentions.
- **Components Used:**
  - `NotificationFilterTabs` (All, Unread, Jobs & Bids, Wallet, System Alerts)
  - `NotificationList` (Interactive items with read/unread visual indicators, timestamps, and action links)
  - `NotificationSettingsLink` (Quick redirect to granular notification preferences)
  - `MarkAllReadButton` (Instant state update clearing badge counts)
- **Navigation Flow:** Clicking a notification item deep-links directly to the relevant job, task, or chat message.
- **Dependencies:** `mock-notifications.ts`; global unread badge state in `TopNavbar`.

---

## 11. Enterprise Messaging (`/messages`)

- **Purpose:** Secure, real-time collaboration chat connecting employers and contractors for technical interviews and task scoping.
- **Components Used:**
  - `ConversationSidebar` (Searchable list of active chats with user avatars, online status dots, and last message snippet)
  - `ChatWindowHeader` (Recipient name, company badge, contract reference link, video call simulation button)
  - `MessageStream` (Bubble layout distinguishing sender vs. receiver, timestamps, code block formatting support)
  - `MessageInputBar` (Rich text area, file attachment upload simulation button, emoji picker trigger, send button)
- **Navigation Flow:** Integrated seamlessly with `/jobs` and `/tasks` to keep project communication centralized.
- **Dependencies:** `mock-messages.ts`; auto-scroll to bottom behavior; mock typing indicators.

---

## 12. User & Company Profile (`/profile`, `/profile/[id]`)

- **Purpose:** Public and private executive identity showcase displaying verified credentials, portfolio projects, and enterprise ratings.
- **Components Used:**
  - `ProfileBanner` (Obsidian & Gold geometric header with user avatar, verification checkmark, and tagline)
  - `ReputationBadges` (Job Success Score, Enterprise Verified badge, Top 1% Contractor emblem)
  - `ExperienceTimeline` (Interactive milestone timeline of past completed MEERASH contracts)
  - `PortfolioGrid` (Visual project cards with tech stack tags and live demo links)
  - `ClientReviewsSection` (5-star breakdown, detailed feedback quotes, employer verification tags)
- **Navigation Flow:** Public profiles are reachable from job applicant lists or task bid boards.
- **Dependencies:** `mock-users.ts`; dynamic tab routing (Overview vs. Portfolio vs. Reviews).

---

## 13. Settings & Preferences (`/settings`)

- **Purpose:** Granular configuration center for account security, billing preferences, team permissions, and UI theme customization.
- **Components Used:**
  - `SettingsNavigation` (Vertical tab list: Profile Edit, Account Security, Two-Factor Auth, Team Members, Notification Rules, Billing History)
  - `FormSections` (Clean, structured card containers with save confirmation toast triggers)
  - `SecurityToggleSwitch` (Interactive toggles for login alerts, API key generation simulation, and session management)
  - `TeamManagementTable` (For enterprise users: invite colleagues, assign admin/reviewer roles)
- **Navigation Flow:** Accessible via the profile dropdown in `TopNavbar` or bottom of `AppSidebar`.
- **Dependencies:** Mock state persistence during active session.

---

## 14. Support & Help Center (`/support`)

- **Purpose:** Authoritative knowledge base and ticketing portal resolving technical queries, dispute mediation, and billing questions.
- **Components Used:**
  - `SupportHeroSearch` (Instant keyword search filtering knowledge base articles)
  - `CategoryGrid` (Quick help topics: Account Verification, Tasks & Jobs, Wallet Payouts, Premium Memberships)
  - `FAQAccordion` (Smooth collapsible Q&A items addressing common enterprise workflows)
  - `TicketCreationModal` (Form to submit urgent support requests with priority dropdown and file attachment)
  - `LiveChatWidget` (Floating bottom-right button triggering a simulated AI support assistant)
- **Navigation Flow:** Accessible from footer and sidebar; links back to dashboard or settings as needed.
- **Dependencies:** Mock help articles dataset; interactive accordion state.

---

> **Architectural Integrity:** Every page documented above must be constructed using the specified components and adhere to the navigation flow. Do not build orphan pages or introduce undocumented dependencies.
