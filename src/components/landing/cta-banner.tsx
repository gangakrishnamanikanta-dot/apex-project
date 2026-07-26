'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

/**
 * MEERASH High-Impact CTA Banner
 * Encourages visitors to create an account, join the waitlist, or explore enterprise solutions.
 */
export function CTABanner({
  title = 'Ready to Join the Sovereign Network?',
  subtitle = 'Create your verified account today or join our executive waitlist for zero-commission enterprise contracts and instant escrow settlement.',
  primaryCtaText = 'Create Verified Account',
  primaryCtaHref = '/register',
  secondaryCtaText = 'Join Executive Waitlist',
  secondaryCtaHref = '/contact',
  className,
}: CTABannerProps) {
  return (
    <section className={cn('w-full py-12 md:py-20 px-6 lg:px-12', className)}>
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-gold-primary/40 bg-gradient-to-br from-surface via-surface-elevated to-bg-primary p-8 sm:p-12 md:p-16 text-center shadow-gold-glow">
          {/* Decorative luxury blur */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gold-primary/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-primary/15 px-4 py-1.5 border border-gold-primary/30">
              <Sparkles className="h-4 w-4 text-gold-primary animate-pulse" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold-primary">
                Immediate Enterprise Access
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white-primary">
              {title}
            </h2>

            <p className="font-sans text-base sm:text-lg text-white-secondary leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto pt-4">
              <Link href={primaryCtaHref} className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  className="shadow-gold-glow font-bold px-8 text-base"
                >
                  {primaryCtaText}
                </Button>
              </Link>
              <Link href={secondaryCtaHref} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" fullWidth className="font-semibold px-8 text-base">
                  {secondaryCtaText}
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-divider/60 text-xs text-white-secondary w-full">
              <span className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="h-4 w-4 text-gold-primary" /> No credit card required
              </span>
              <span className="flex items-center gap-1.5 font-semibold">
                <Shield className="h-4 w-4 text-gold-primary" /> 5-minute cryptographic verification
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
