'use client';

import { PublicLayout } from '@/components/landing/public-layout';
import { HeroSection } from '@/components/landing/hero';
import { FeaturesSection } from '@/components/landing/features';
import { HowItWorksSection } from '@/components/landing/how-it-works';
import { FeaturedJobsSection } from '@/components/landing/featured-jobs';
import { StatisticsSection } from '@/components/landing/statistics';
import { CTABanner } from '@/components/landing/cta-banner';
import { LiveInquiriesFeed } from '@/components/landing/live-inquiries-feed';

export default function LandingPage() {
  return (
    <PublicLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FeaturedJobsSection />
      <StatisticsSection />
      <CTABanner />
      <LiveInquiriesFeed />
    </PublicLayout>
  );
}
