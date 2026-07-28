'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { JobCard } from '@/components/cards/job-card';
import { AnalyticsCard } from '@/components/cards/analytics-card';
import { Sparkles, CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react';
import Link from 'next/link';

export interface HeroSectionProps {
  className?: string;
}

/**
 * MEERASH Public Landing Hero Section
 * Clean preview cards showcasing platform capabilities.
 */
export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn('relative w-full overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 px-6 lg:px-12', className)}>
      {/* Background Luxury Gradient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[450px] w-[850px] rounded-full bg-gold-primary/10 blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-elevated px-4 py-1.5 border border-gold-primary/40 shadow-gold-glow">
              <Sparkles className="h-4 w-4 text-gold-primary shrink-0 animate-pulse" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold-primary">
                Launching Soon
              </span>
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white-primary leading-[1.1]">
              Find Jobs. <br />
              <span className="bg-gradient-to-r from-gold-primary via-gold-hover to-gold-primary bg-clip-text text-transparent">
                Find Tasks.
              </span><br />
              Build Careers.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-white-secondary leading-relaxed max-w-2xl">
              MEERASH connects job seekers, freelancers, and students with top employers.
              Earn money, build your professional profile, and let our smart recommendation engine find your next opportunity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <Link href="/early-access" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  rightIcon={<Sparkles className="h-5 w-5" />}
                  className="shadow-gold-glow text-base font-bold px-8"
                >
                  Join Early Access
                </Button>
              </Link>
              <Link href="/features" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" fullWidth className="text-base font-semibold px-8">
                  Explore Features
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-divider w-full">
              <div className="flex items-center gap-2 text-xs font-semibold text-white-secondary">
                <Sparkles className="h-4 w-4 text-gold-primary shrink-0" />
                <span>Smart Matching</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white-secondary">
                <CheckCircle2 className="h-4 w-4 text-gold-primary shrink-0" />
                <span>Verified Employers</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white-secondary">
                <ShieldCheck className="h-4 w-4 text-gold-primary shrink-0" />
                <span>Secure Platform</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white-secondary">
                <Briefcase className="h-4 w-4 text-gold-primary shrink-0" />
                <span>Jobs & Tasks</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Preview Cards */}
          <div className="lg:col-span-5 relative flex flex-col gap-5">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold-primary/30 to-transparent blur-xl opacity-50 -z-10" />

            {/* Preview Label */}
            <div className="flex items-center justify-between px-2">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-primary font-bold">
                Product Preview
              </span>
              <Badge variant="gold" size="sm">Coming Soon</Badge>
            </div>

            {/* Mock Preview 1: Recommended Jobs */}
            <div className="transform transition-transform duration-300 hover:-translate-y-1">
              <JobCard
                id="hero-preview-job"
                title="Recommended Jobs"
                company="MEERASH"
                location="Personalized Feed"
                salary="AI-Powered"
                type="Coming Soon"
                postedAt="Preview"
                tags={['Smart Match', 'Tailored', 'Jobs']}
                isFeatured
              />
            </div>

            {/* Mock Preview 2: Featured Tasks */}
            <div className="transform transition-transform duration-300 hover:-translate-y-1">
              <JobCard
                id="hero-preview-task"
                title="Featured Tasks"
                company="MEERASH"
                location="Task Marketplace"
                salary="Flexible"
                type="Coming Soon"
                postedAt="Preview"
                tags={['Short-Term', 'Remote', 'Gig']}
                isFeatured
              />
            </div>

            {/* Mock Preview 3: Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <AnalyticsCard
                title="Profile Match"
                value="Coming Soon"
                changeLabel="Smart matching"
                icon={<Sparkles className="h-4 w-4" />}
              />
              <AnalyticsCard
                title="Applications"
                value="Coming Soon"
                changeLabel="At launch"
                icon={<Briefcase className="h-4 w-4" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
