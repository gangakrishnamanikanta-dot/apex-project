export interface LandingFeature {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface LandingStat {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface LandingPricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaVariant: 'primary' | 'secondary' | 'outline';
}

export interface LandingFAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface MockOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedAt: string;
  tags: string[];
  isFeatured?: boolean;
}

export const MOCK_FEATURES: LandingFeature[] = [
  {
    id: 'feat-1',
    iconName: 'Search',
    title: 'Job Discovery',
    description: 'Browse curated opportunities tailored for students, fresh graduates, professionals and freelancers across every industry.',
  },
  {
    id: 'feat-2',
    iconName: 'Briefcase',
    title: 'Task Marketplace',
    description: 'Discover short-term, flexible tasks alongside full-time roles — earn on your schedule and build diverse experience.',
  },
  {
    id: 'feat-3',
    iconName: 'Sparkles',
    title: 'AI Job Recommendations',
    description: 'Receive personalized job suggestions powered by intelligent matching of your skills, preferences, and career goals.',
  },
  {
    id: 'feat-4',
    iconName: 'Sparkles',
    title: 'AI Task Recommendations',
    description: 'Find short-term tasks aligned with your strengths, so every gig feels relevant to what you do best.',
  },
  {
    id: 'feat-5',
    iconName: 'Target',
    title: 'Smart Matching',
    description: 'A unified matching engine connects the right people to the right opportunities — faster and with greater precision.',
  },
  {
    id: 'feat-6',
    iconName: 'Crown',
    title: 'Premium Membership',
    description: 'Unlock priority placement, advanced filters, and richer insights to supercharge your search.',
  },
  {
    id: 'feat-7',
    iconName: 'Wallet',
    title: 'Wallet',
    description: 'Track your task earnings, manage payouts, and keep a clear view of your activity in one secure place.',
  },
  {
    id: 'feat-8',
    iconName: 'Building2',
    title: 'Employer Portal',
    description: 'Post roles, review applications, and connect with motivated candidates through a clean, focused dashboard.',
  },
  {
    id: 'feat-9',
    iconName: 'Bell',
    title: 'Notifications',
    description: 'Stay in the loop with timely alerts for new opportunities, application updates, and important account events.',
  },
];

export const MOCK_STATISTICS: LandingStat[] = [
  {
    id: 'stat-1',
    label: 'Curated Opportunities',
    value: 'Launching Soon',
    description: 'Thousands of jobs and tasks will be available the moment the platform opens.',
  },
  {
    id: 'stat-2',
    label: 'AI Matching Engine',
    value: 'In Development',
    description: 'Personalized recommendations are being built to make discovery effortless.',
  },
  {
    id: 'stat-3',
    label: 'Employer Network',
    value: 'Coming Soon',
    description: 'A growing network of employers and clients onboarding ahead of launch.',
  },
  {
    id: 'stat-4',
    label: 'Your Early Access',
    value: 'Available Now',
    description: 'Be the first to know when MEERASH opens to the public.',
  },
];

export const MOCK_FEATURED_JOBS: MockOpportunity[] = [
  {
    id: 'job-101',
    title: 'Recommended For You',
    company: 'MEERASH',
    location: 'Personalized Feed',
    salary: 'Coming Soon',
    type: 'AI Recommended',
    postedAt: 'Preview',
    tags: ['Smart Match', 'Personalized', 'Tailored'],
    isFeatured: true,
  },
  {
    id: 'job-102',
    title: 'Featured Tasks',
    company: 'MEERASH',
    location: 'Task Marketplace',
    salary: 'Flexible',
    type: 'Featured',
    postedAt: 'Preview',
    tags: ['Short-Term', 'Remote', 'Flexible'],
    isFeatured: true,
  },
  {
    id: 'job-103',
    title: 'Profile Completion',
    company: 'MEERASH',
    location: 'Your Account',
    salary: '—',
    type: 'Setup',
    postedAt: 'At Launch',
    tags: ['Profile', 'Skills', 'Goals'],
    isFeatured: false,
  },
  {
    id: 'job-104',
    title: 'Premium Benefits',
    company: 'MEERASH',
    location: 'Membership',
    salary: 'Optional',
    type: 'Premium',
    postedAt: 'Available At Launch',
    tags: ['Priority', 'Visibility', 'Insights'],
    isFeatured: false,
  },
];

export const MOCK_PRICING_TIER_PREVIEW: LandingPricingTier = {
  id: 'tier-coming-soon',
  name: 'Premium',
  tagline: 'Optional membership details will be announced closer to launch.',
  price: 'TBA',
  period: 'Details Coming Soon',
  isPopular: true,
  features: [
    'Full pricing structure revealed at launch',
    'Both free and premium tiers will be available',
    'Designed for students, freelancers, and employers',
  ],
  ctaText: 'Join Early Access',
  ctaVariant: 'primary',
};

export const MOCK_FAQS: LandingFAQ[] = [
  {
    id: 'faq-1',
    question: 'What is MEERASH?',
    answer: 'MEERASH is a job and task marketplace connecting job seekers, students, fresh graduates, professionals, freelancers, and employers. Discover full-time roles, flexible tasks, and opportunities that match your goals.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'Who is MEERASH for?',
    answer: 'MEERASH is built for job seekers, students, fresh graduates, professionals, and freelancers looking for work — and for employers who want to connect with motivated, verified talent.',
    category: 'General',
  },
  {
    id: 'faq-3',
    question: 'When will MEERASH launch?',
    answer: 'MEERASH is currently in development. The platform will launch soon. Join the Early Access list to be notified the moment we open to the public.',
    category: 'General',
  },
  {
    id: 'faq-4',
    question: 'How does Early Access work?',
    answer: 'Joining Early Access means you will be among the first to hear about launch updates, feature reveals, and opportunities to get involved. Submit your name, email, and role on the Early Access page to join the list.',
    category: 'Early Access',
  },
  {
    id: 'faq-5',
    question: 'Will there be a Premium membership?',
    answer: 'Yes. An optional Premium membership is planned. It will offer priority placement, advanced filters, and richer insights. Pricing details will be shared closer to launch.',
    category: 'Platform',
  },
  {
    id: 'faq-6',
    question: 'How will AI Recommendations work?',
    answer: 'Our AI Recommendations will surface jobs and tasks that closely match your profile, skills, and preferences — making discovery faster and more relevant.',
    category: 'Jobs & Tasks',
  },
  {
    id: 'faq-7',
    question: 'How will the Job Marketplace work?',
    answer: 'You will be able to browse full-time roles from employers, filter by role, location, and skills, and apply directly through your MEERASH profile.',
    category: 'Jobs & Tasks',
  },
  {
    id: 'faq-8',
    question: 'How will the Task Marketplace work?',
    answer: 'Short-term, flexible tasks will let you earn on your own schedule, build experience, and explore new industries — all managed through your MEERASH account.',
    category: 'Jobs & Tasks',
  },
];

export const MOCK_HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Join the Waitlist',
    description: 'Reserve your spot with Early Access. We will notify you the moment MEERASH opens to the public.',
  },
  {
    step: '02',
    title: 'Build Your Profile',
    description: 'When the platform launches, set up your profile, add your skills, and tell us about the work you are looking for.',
  },
  {
    step: '03',
    title: 'Get Smart Recommendations',
    description: 'Receive personalized job and task suggestions based on your profile, goals, and preferences.',
  },
  {
    step: '04',
    title: 'Apply, Bid, and Earn',
    description: 'Connect with employers, apply to full-time roles or short-term tasks, and grow your career on your terms.',
  },
];
