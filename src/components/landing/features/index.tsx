'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../section-heading';
import { FeatureCard } from './feature-card';
import { GridWrapper } from '@/components/layout/grid-wrapper';
import { MOCK_FEATURES } from '@/data/mock-landing-data';

export interface FeaturesSectionProps {
  className?: string;
}

/**
 * MEERASH Why Choose Us Section
 * Presents 6 enterprise capabilities with gold hover accents.
 */
export function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section id="features" className={cn('w-full py-16 md:py-24 px-6 lg:px-12 bg-bg-secondary/40', className)}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Why Choose MEERASH"
          title="Engineered for Premium Excellence"
          subtitle="MEERASH connects the right people with the right opportunities — through smart recommendations, powerful tools, and a platform built for the future of work."
          align="center"
        />

        <GridWrapper columns={3} gap="lg">
          {MOCK_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.id}
              iconName={feature.iconName}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </GridWrapper>
      </div>
    </section>
  );
}
