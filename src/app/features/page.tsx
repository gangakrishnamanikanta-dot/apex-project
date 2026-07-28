'use client';

import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { HowItWorksSection } from '@/components/landing/how-it-works';
import { MOCK_FEATURES } from '@/data/mock-landing-data';
import { FeatureCard } from '@/components/landing/features/feature-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <PublicLayout>
      <div className="pt-24 pb-16">
        <SectionHeading
          badge="Platform Capabilities"
          title="Everything You Need to Succeed"
          subtitle="Discover how MEERASH connects talent with opportunity through smart recommendations, powerful tools, and a secure ecosystem."
        />

        {/* Feature Grid */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_FEATURES.map((feat) => (
            <FeatureCard key={feat.id} iconName={feat.iconName} title={feat.title} description={feat.description} />
          ))}
        </div>

        {/* Deep Dive Section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-12">
          <div className="rounded-2xl border border-gold-primary/30 bg-gradient-to-br from-surface via-surface-elevated to-bg-primary p-8 md:p-12 text-center shadow-gold-glow">
            <h2 className="text-3xl font-bold text-white-primary mb-6">Be the First to Know</h2>
            <p className="text-white-secondary max-w-2xl mx-auto mb-8 text-lg">
              Join the Early Access list and be notified the moment MEERASH launches. Get early access to the best job and task marketplace, powered by AI-driven recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/early-access">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">Join Early Access</Button>
              </Link>
              <Link href="/roadmap">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">View Roadmap</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-20">
          <HowItWorksSection />
        </div>
      </div>
    </PublicLayout>
  );
}
