'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../section-heading';
import { PricingCard } from './pricing-card';
import { GridWrapper } from '@/components/layout/grid-wrapper';
import { MOCK_PRICING_TIERS } from '@/data/mock-landing-data';

export interface PricingSectionProps {
  className?: string;
}

/**
 * MEERASH Premium Preview & Pricing Section
 * Introduces Free, VIP Contractor, and Enterprise Sovereign tiers.
 */
export function PricingSection({ className }: PricingSectionProps) {
  return (
    <section id="pricing" className={cn('w-full py-16 md:py-24 px-6 lg:px-12 bg-bg-secondary/40', className)}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="VIP Membership Tiers"
          title="Sovereign Network Pricing"
          subtitle="Whether you are an individual architect looking for verified zero-commission payouts or an enterprise building an elite engineering division."
          align="center"
        />

        <div className="mt-8">
          <GridWrapper columns={3} gap="lg" className="items-stretch">
            {MOCK_PRICING_TIERS.map((tier) => (
              <PricingCard
                key={tier.id}
                name={tier.name}
                tagline={tier.tagline}
                price={tier.price}
                period={tier.period}
                isPopular={tier.isPopular}
                features={tier.features}
                ctaText={tier.ctaText}
                ctaVariant={tier.ctaVariant}
              />
            ))}
          </GridWrapper>
        </div>
      </div>
    </section>
  );
}
