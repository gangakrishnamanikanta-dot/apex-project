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
  change?: string;
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
    iconName: 'Sparkles',
    title: 'Smart Job Discovery',
    description: 'AI-driven semantic matching connects elite engineers and executives with high-value enterprise contracts instantly.',
  },
  {
    id: 'feat-2',
    iconName: 'Briefcase',
    title: 'AI Career Assistant',
    description: 'Real-time ATS scoring, automated competency verification, and customized contract negotiation guidance.',
  },
  {
    id: 'feat-3',
    iconName: 'Dashboard',
    title: 'Agile Task Marketplace',
    description: 'Bite-sized enterprise engineering tasks and architectural bounties settled via automated milestone verification.',
  },
  {
    id: 'feat-4',
    iconName: 'Profile',
    title: 'Executive Resume Studio',
    description: 'Build obsidian-themed, ATS-optimized executive profiles with real-time GitHub, LinkedIn, and portfolio sync.',
  },
  {
    id: 'feat-5',
    iconName: 'Shield',
    title: 'Instant Escrow Settlement',
    description: '256-bit encrypted corporate escrow wallets guarantee instant, dispute-free payout upon milestone completion.',
  },
  {
    id: 'feat-6',
    iconName: 'Users',
    title: 'Sovereign Employer Network',
    description: 'Direct access to verified Tier-1 technology corporations, hedge funds, and quantum laboratories worldwide.',
  },
];

export const MOCK_STATISTICS: LandingStat[] = [
  {
    id: 'stat-1',
    label: 'Verified Sovereign Talent',
    value: '24,800+',
    change: '+18% this quarter',
    description: 'Top 1% vetted engineers, architects, and product directors.',
  },
  {
    id: 'stat-2',
    label: 'Partner Corporations',
    value: '450+',
    change: 'Global enterprise adoption',
    description: 'Including Fortune 500 tech leaders and sovereign wealth funds.',
  },
  {
    id: 'stat-3',
    label: 'Active Opportunities',
    value: '3,200+',
    change: '$140k average contract',
    description: 'High-value enterprise roles and specialized task bounties.',
  },
  {
    id: 'stat-4',
    label: 'Escrow Payout Volume',
    value: '$18.4M+',
    change: 'Zero default rate',
    description: 'Automated milestone release with instant banking & crypto transfer.',
  },
];

export const MOCK_FEATURED_JOBS: MockOpportunity[] = [
  {
    id: 'job-101',
    title: 'Principal Quantum Systems Architect',
    company: 'Sovereign Laboratories AG',
    location: 'Zurich, Switzerland (Hybrid)',
    salary: '$280k - $360k / yr',
    type: 'Full-Time Enterprise',
    postedAt: '2 hours ago',
    tags: ['Quantum Computing', 'Rust', 'Zero-Knowledge Proofs', 'System Architecture'],
    isFeatured: true,
  },
  {
    id: 'job-102',
    title: 'Lead AI Trading Infrastructure Engineer',
    company: 'Vanguard Alpha Capital',
    location: 'New York, NY (Remote)',
    salary: '$250k - $320k / yr',
    type: 'Contract / Escrow',
    postedAt: '5 hours ago',
    tags: ['C++20', 'Low-Latency', 'PyTorch', 'Smart Contracts'],
    isFeatured: true,
  },
  {
    id: 'job-103',
    title: 'VP of Global Enterprise Security (CISO)',
    company: 'Aegis Cyber Defense',
    location: 'London, UK (Remote)',
    salary: '$300k - $420k / yr',
    type: 'Executive Retained',
    postedAt: '1 day ago',
    tags: ['SOC2 Type II', 'Zero Trust', 'Cloud Security', 'Executive'],
    isFeatured: false,
  },
  {
    id: 'job-104',
    title: 'Senior Distributed Ledger Core Dev',
    company: 'Nexus Sovereign Chain',
    location: 'Singapore (Remote)',
    salary: '$180k - $240k / yr',
    type: 'Full-Time Enterprise',
    postedAt: '2 days ago',
    tags: ['Solidity', 'Rust', 'Consensus Algorithms', 'DeFi'],
    isFeatured: false,
  },
];

export const MOCK_PRICING_TIERS: LandingPricingTier[] = [
  {
    id: 'tier-standard',
    name: 'Sovereign Talent',
    tagline: 'For elite engineers and architects exploring verified contracts.',
    price: '$0',
    period: 'Forever Free',
    isPopular: false,
    features: [
      'Access to verified enterprise job listings',
      'Standard AI resume ATS compatibility scoring',
      'Direct application to active corporate bounties',
      'Encrypted escrow wallet with standard bank payout',
      'Community forum & peer networking access',
    ],
    ctaText: 'Join Sovereign Network',
    ctaVariant: 'outline',
  },
  {
    id: 'tier-pro',
    name: 'Contractor VIP',
    tagline: 'Supercharge your career with dedicated AI agents and priority routing.',
    price: '$79',
    period: '/ month',
    isPopular: true,
    features: [
      'Everything in Sovereign Talent, plus:',
      'Priority application routing to enterprise hiring directors',
      'Automated AI contract negotiation & rate optimization',
      'Instant 0% fee escrow withdrawal (Crypto & Wire)',
      'Verified Gold Badge on profile and job bids',
      '24/7 dedicated career concierge support',
    ],
    ctaText: 'Upgrade to VIP',
    ctaVariant: 'primary',
  },
  {
    id: 'tier-enterprise',
    name: 'Enterprise Sovereign',
    tagline: 'For corporations and hedge funds building elite technology teams.',
    price: '$1,899',
    period: '/ month',
    isPopular: false,
    features: [
      'Unlimited high-priority job and task bounties',
      'Dedicated autonomous AI sourcing & screening agent',
      'Zero commission on contractor payouts and escrow',
      'Custom white-label corporate onboarding portal',
      'SOC2 Type II & GDPR executive compliance reporting',
      'Dedicated Vice President account manager',
    ],
    ctaText: 'Contact Enterprise Sales',
    ctaVariant: 'secondary',
  },
];

export const MOCK_FAQS: LandingFAQ[] = [
  {
    id: 'faq-1',
    question: 'What makes MEERASH different from traditional job boards?',
    answer: 'MEERASH is an enterprise-grade sovereign marketplace built exclusively for verified Tier-1 technology organizations and elite technical talent. Unlike generic boards, we integrate 256-bit encrypted corporate escrow wallets that guarantee instant settlement upon milestone verification, combined with autonomous AI matching that eliminates manual resume screening.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'How does the instant escrow settlement work?',
    answer: 'When a contract or task bounty is initiated, the enterprise employer deposits the total funds into a secured smart escrow account. Once the contractor submits the deliverables and passes automated verification or employer sign-off, funds are instantly released to the contractor’s corporate wallet with zero payout delay.',
    category: 'Escrow & Payments',
  },
  {
    id: 'faq-3',
    question: 'How is talent vetted on the MEERASH platform?',
    answer: 'All engineers, architects, and executives undergo a rigorous multi-tier verification process including automated code repository analysis, cryptographic identity proofing, and peer architectural reviews. Only top 1% applicants receive the Verified Sovereign Badge.',
    category: 'Vetting',
  },
  {
    id: 'faq-4',
    question: 'Can my company hire both full-time employees and milestone contractors?',
    answer: 'Yes. MEERASH supports three distinct engagement models: Full-Time Enterprise placements, Milestone-based Contract Roles with escrow protection, and Agile Task Bounties for rapid bug fixes and specialized architectural consults.',
    category: 'Hiring Models',
  },
  {
    id: 'faq-5',
    question: 'Is there a fee for contractors to receive their escrow payments?',
    answer: 'Standard Sovereign Talent members pay a nominal 2.5% settlement processing fee. Contractor VIP members enjoy 0% commission on all payouts, with instant wire transfer and cryptocurrency settlement options.',
    category: 'Escrow & Payments',
  },
  {
    id: 'faq-6',
    question: 'What compliance and security standards does MEERASH maintain?',
    answer: 'MEERASH is SOC2 Type II certified, GDPR/CCPA compliant, and utilizes institutional-grade 256-bit encryption across all data and financial transactions. Enterprise clients receive complete audit trails for every contract and escrow disbursement.',
    category: 'Security',
  },
];

export const MOCK_HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Create Account & Get Verified',
    description: 'Join as an Enterprise Employer or Sovereign Talent. Complete automated cryptographic verification in under 5 minutes.',
  },
  {
    step: '02',
    title: 'AI Competency & Profile Sync',
    description: 'Our AI engine analyzes GitHub repositories, past contracts, and architectural achievements to generate your Verified Competency Score.',
  },
  {
    step: '03',
    title: 'Smart Matching & Bidding',
    description: 'Discover curated enterprise contracts or post task bounties. AI matching connects compatible parties with 94% accuracy.',
  },
  {
    step: '04',
    title: 'Escrow Execution & Payout',
    description: 'Work in a secure sandbox. Upon milestone sign-off, corporate escrow funds release instantly to your account without banking delays.',
  },
];
