'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SectionHeading } from './section-heading';
import { JobCard } from '@/components/cards/job-card';
import { Button } from '@/components/ui/button';
import { GridWrapper } from '@/components/layout/grid-wrapper';
import { MOCK_FEATURED_JOBS } from '@/data/mock-landing-data';
import { ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

export interface FeaturedJobsSectionProps {
  className?: string;
}

/**
 * MEERASH Featured Opportunities Section
 * Showcases 4 sample job cards using mock data and Session 1 primitives.
 */
export function FeaturedJobsSection({ className }: FeaturedJobsSectionProps) {
  return (
    <section id="opportunities" className={cn('w-full py-16 md:py-24 px-6 lg:px-12 bg-bg-secondary/40', className)}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Active Marketplace"
          title="Featured Enterprise Contracts"
          subtitle="Explore live high-value opportunities and specialized architectural task bounties from verified Tier-1 employers."
          align="center"
        />

        <GridWrapper columns={2} gap="lg">
          {MOCK_FEATURED_JOBS.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
              type={job.type}
              postedAt={job.postedAt}
              tags={job.tags}
              isFeatured={job.isFeatured}
              onApply={() => {
                // Public preview demo alert or redirect to register
                window.location.href = '/register';
              }}
            />
          ))}
        </GridWrapper>

        <div className="mt-12 flex justify-center">
          <Link href="/register">
            <Button
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              leftIcon={<Briefcase className="h-5 w-5 text-gold-primary" />}
              className="px-8 font-bold border-gold-primary/50 text-white-primary hover:bg-gold-primary/10 hover:border-gold-primary"
            >
              View All 3,200+ Active Contracts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
