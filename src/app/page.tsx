'use client';

import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { HeroSection } from '@/components/landing/hero';
import { FeaturesSection } from '@/components/landing/features';
import { HowItWorksSection } from '@/components/landing/how-it-works';
import { FeaturedJobsSection } from '@/components/landing/featured-jobs';
import { StatisticsSection } from '@/components/landing/statistics';
import { PricingSection } from '@/components/landing/pricing';
import { FAQSection } from '@/components/landing/faq';
import { CTABanner } from '@/components/landing/cta-banner';

/**
 * MEERASH Public Website: Landing Page (Root Route `/`)
 * Delivers all 10 mandated sections in strict Black & Gold luxury enterprise design.
 */
export default function LandingPage() {
  return (
    <PublicLayout>
      {/* Section 2: Hero */}
      <HeroSection />

      {/* Section 3: Why Choose MEERASH */}
      <FeaturesSection />

      {/* Section 4: How It Works */}
      <HowItWorksSection />

      {/* Section 5: Featured Opportunities */}
      <FeaturedJobsSection />

      {/* Section 6: Platform Statistics */}
      <StatisticsSection />

      {/* Section 7: Premium Preview */}
      <PricingSection />

      {/* Section 8: FAQ */}
      <FAQSection />

      {/* Section 9: Call to Action */}
      <CTABanner />
    </PublicLayout>
  );
}
