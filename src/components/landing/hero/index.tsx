'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { WalletCard } from '@/components/cards/wallet-card';
import { JobCard } from '@/components/cards/job-card';
import { AnalyticsCard } from '@/components/cards/analytics-card';
import { ShieldCheck, Sparkles, Lock, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import Link from 'next/link';

export interface HeroSectionProps {
  className?: string;
}

/**
 * MEERASH Public Landing Hero Section
 * Delivers immediate executive visual impact without giant decorative graphics, focusing purely on real product widgets.
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
                Sovereign Enterprise Network
              </span>
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white-primary leading-[1.1]">
              Building Technology. <br />
              <span className="bg-gradient-to-r from-gold-primary via-gold-hover to-gold-primary bg-clip-text text-transparent">
                Creating Opportunities.
              </span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-white-secondary leading-relaxed max-w-2xl">
              The production-grade enterprise job and agile task marketplace engineered for CTOs and verified engineering talent. Experience instant 256-bit encrypted corporate escrow settlement and AI-powered semantic sourcing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <Link href="/register" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  className="shadow-gold-glow text-base font-bold px-8"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/#opportunities" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" fullWidth className="text-base font-semibold px-8">
                  Explore Opportunities
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-divider w-full">
              <div className="flex items-center gap-2 text-xs font-semibold text-white-secondary">
                <Sparkles className="h-4 w-4 text-gold-primary shrink-0" />
                <span>AI-Powered Matching</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white-secondary">
                <Lock className="h-4 w-4 text-gold-primary shrink-0" />
                <span>256-Bit Escrow Security</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white-secondary">
                <ShieldCheck className="h-4 w-4 text-gold-primary shrink-0" />
                <span>SOC2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white-secondary">
                <CheckCircle2 className="h-4 w-4 text-gold-primary shrink-0" />
                <span>Top 1% Vetted Network</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Product Dashboard Preview Stack */}
          <div className="lg:col-span-5 relative flex flex-col gap-5">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold-primary/30 to-transparent blur-xl opacity-50 -z-10" />

            {/* Preview Label */}
            <div className="flex items-center justify-between px-2">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-primary font-bold">
                Live Sovereign Portal Preview
              </span>
              <Badge variant="gold" size="sm">Active Simulation</Badge>
            </div>

            {/* Mock Dashboard Widget 1: Escrow Wallet */}
            <div className="transform transition-transform duration-300 hover:-translate-y-1">
              <WalletCard
                balance="$142,850.00"
                escrowBalance="$64,000.00 in active smart contracts"
                accountNumber="•••• •••• •••• 9921"
              />
            </div>

            {/* Mock Dashboard Widget 2: Featured Opportunity */}
            <div className="transform transition-transform duration-300 hover:-translate-y-1">
              <JobCard
                id="hero-preview-job"
                title="Lead AI Infrastructure Architect"
                company="Sovereign Quantum LLC"
                location="Zurich / Remote"
                salary="$260k - $340k / yr"
                type="Full-Time Enterprise"
                postedAt="Just now"
                tags={['PyTorch', 'Rust', 'Low-Latency', 'Quantum']}
                isFeatured
              />
            </div>

            {/* Mock Dashboard Widget 3: Quick Metric */}
            <div className="grid grid-cols-2 gap-4">
              <AnalyticsCard
                title="AI Match Accuracy"
                value="96.8%"
                change={4.2}
                changeLabel="vs industry avg"
                icon={<Sparkles className="h-4 w-4" />}
              />
              <AnalyticsCard
                title="Avg Escrow Release"
                value="Instant"
                change={0}
                changeLabel="0s banking delay"
                icon={<Briefcase className="h-4 w-4" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
