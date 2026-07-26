'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../section-heading';
import { StatisticCard } from './statistic-card';
import { GridWrapper } from '@/components/layout/grid-wrapper';
import { MOCK_STATISTICS } from '@/data/mock-landing-data';

export interface StatisticsSectionProps {
  className?: string;
}

/**
 * MEERASH Platform Statistics Section
 * Demonstrates scale, adoption, and escrow security metrics using demo values.
 */
export function StatisticsSection({ className }: StatisticsSectionProps) {
  return (
    <section id="statistics" className={cn('w-full py-16 md:py-24 px-6 lg:px-12', className)}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="By The Numbers"
          title="Global Sovereign Scale"
          subtitle="Our institutional escrow architecture and AI matching engine drive unrivaled efficiency across Tier-1 engineering organizations."
          align="center"
        />

        <GridWrapper columns={4} gap="lg">
          {MOCK_STATISTICS.map((stat) => (
            <StatisticCard
              key={stat.id}
              label={stat.label}
              value={stat.value}
              change={stat.change}
              description={stat.description}
            />
          ))}
        </GridWrapper>
      </div>
    </section>
  );
}
