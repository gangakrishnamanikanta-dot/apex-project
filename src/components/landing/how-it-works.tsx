'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SectionHeading } from './section-heading';
import { Card } from '@/components/cards/base-card';
import { MOCK_HOW_IT_WORKS_STEPS } from '@/data/mock-landing-data';
import { ArrowRight } from 'lucide-react';

export interface HowItWorksSectionProps {
  className?: string;
}

/**
 * MEERASH How It Works Section
 * 4-step workflow illustrating onboarding, AI matching, and instant escrow release.
 */
export function HowItWorksSection({ className }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className={cn('w-full py-16 md:py-24 px-6 lg:px-12', className)}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Simple 4-Step Process"
          title="How MEERASH Works"
          subtitle="From creating your profile to landing your next job or gig — it only takes minutes."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {MOCK_HOW_IT_WORKS_STEPS.map((item, index) => (
            <Card
              key={item.step}
              isHoverable
              className="relative flex flex-col justify-between gap-6 p-6 md:p-8 bg-gradient-to-b from-surface via-surface-elevated to-bg-primary border-border-primary hover:border-gold-primary/50 group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-extrabold text-gold-primary opacity-90 group-hover:scale-110 transition-transform">
                  {item.step}
                </span>
                {index < MOCK_HOW_IT_WORKS_STEPS.length - 1 && (
                  <ArrowRight className="hidden lg:block h-5 w-5 text-text-muted group-hover:text-gold-primary transition-colors translate-x-2" />
                )}
              </div>

              {/* Step Title & Desc */}
              <div className="flex flex-col gap-2.5">
                <h3 className="font-sans text-lg font-bold text-white-primary tracking-tight group-hover:text-gold-light transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom line accent */}
              <div className="h-0.5 w-8 bg-gold-primary/40 group-hover:w-full group-hover:bg-gold-primary transition-all duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
