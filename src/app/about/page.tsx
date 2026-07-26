'use client';

import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { Card } from '@/components/cards/base-card';
import { GridWrapper } from '@/components/layout/grid-wrapper';
import { Shield, Sparkles, Target, Award, Users, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

/**
 * MEERASH Public Website: About Us Page (`/about`)
 * Illustrates the institutional vision, mission, cryptographic architecture, and core values.
 */
export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-6 w-6 text-gold-primary" />,
      title: 'Sovereign Cryptographic Security',
      desc: 'Institutional 256-bit encryption protects every smart contract and corporate escrow deposit, ensuring zero counterparty financial risk.',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-gold-primary" />,
      title: 'Autonomous AI Precision',
      desc: 'We replace subjective, biased resume screening with deterministic semantic matching and competency verification algorithms.',
    },
    {
      icon: <Target className="h-6 w-6 text-gold-primary" />,
      title: 'Zero Friction Settlement',
      desc: 'Contractors and executives deserve immediate compensation upon milestone delivery. Our escrow wallets eliminate 30-day banking delays.',
    },
    {
      icon: <Award className="h-6 w-6 text-gold-primary" />,
      title: 'Uncompromised Excellence',
      desc: 'Only the top 1% of vetted systems architects, quantum developers, and executive leaders receive the Verified Sovereign Badge.',
    },
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 px-6 lg:px-12 overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-gold-primary/10 blur-[130px] -z-10" />

        <div className="mx-auto max-w-5xl text-center flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-elevated px-4 py-1.5 border border-gold-primary/40 shadow-gold-glow">
            <Sparkles className="h-4 w-4 text-gold-primary shrink-0 animate-pulse" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold-primary">
              Institutional Manifesto
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white-primary leading-tight">
            Engineering the Future of <br />
            <span className="bg-gradient-to-r from-gold-primary via-gold-hover to-gold-primary bg-clip-text text-transparent">
              Sovereign Enterprise Talent
            </span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-white-secondary max-w-3xl leading-relaxed">
            MEERASH was founded in Zurich with a singular objective: to eliminate the friction, opacity, and payment delays that plague traditional high-value technology recruitment.
          </p>
        </div>
      </section>

      {/* Vision & Mission Split */}
      <section className="w-full py-16 px-6 lg:px-12 bg-bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <Card hasGoldBorder className="flex flex-col justify-between p-8 md:p-10 bg-surface shadow-lvl3">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-primary">Our Vision</span>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white-primary tracking-tight">
                  A Borderless, Trustless Meritocracy
                </h2>
                <p className="font-sans text-sm sm:text-base text-white-secondary leading-relaxed">
                  We envision a global technological economy where elite engineers, quantum scientists, and executive directors collaborate seamlessly across borders—backed by cryptographic smart escrow that guarantees fairness without requiring institutional intermediaries.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-divider flex items-center gap-2 text-xs font-semibold text-white-primary">
                <Lock className="h-4 w-4 text-gold-primary" />
                <span>Zero Counterparty Risk Architecture</span>
              </div>
            </Card>

            <Card hasGoldBorder className="flex flex-col justify-between p-8 md:p-10 bg-surface shadow-lvl3">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-primary">Our Mission</span>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white-primary tracking-tight">
                  Building Technology. Creating Opportunities.
                </h2>
                <p className="font-sans text-sm sm:text-base text-white-secondary leading-relaxed">
                  To provide Tier-1 corporations and sovereign wealth funds with instant access to verified talent, while equipping elite engineers with autonomous AI career matching, instant corporate wallet settlement, and zero-commission contract execution.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-divider flex items-center gap-2 text-xs font-semibold text-white-primary">
                <Users className="h-4 w-4 text-gold-primary" />
                <span>24,800+ Verified Sovereign Network Members</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What MEERASH Solves */}
      <section className="w-full py-20 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="The Problem & The Solution"
            title="Why We Built MEERASH"
            subtitle="Traditional technical hiring is broken. Here is how our sovereign architecture solves the industry's most critical bottlenecks."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3 rounded-xl bg-surface p-6 border border-border-primary">
              <span className="text-xs font-mono font-bold uppercase text-error">The Problem: 30–60 Day Payment Delays</span>
              <h3 className="font-sans text-lg font-bold text-white-primary">Legacy Invoicing Friction</h3>
              <p className="font-sans text-xs sm:text-sm text-white-secondary leading-relaxed">
                Elite contractors wait up to 60 days for international wire transfers, navigating opaque invoicing departments and volatile exchange rates.
              </p>
              <div className="mt-auto pt-4 border-t border-divider text-xs font-semibold text-gold-primary flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" /> MEERASH Solution: Instant Escrow Release
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-xl bg-surface p-6 border border-border-primary">
              <span className="text-xs font-mono font-bold uppercase text-error">The Problem: Keyword Resume Screening</span>
              <h3 className="font-sans text-lg font-bold text-white-primary">Subjective HR Bottlenecks</h3>
              <p className="font-sans text-xs sm:text-sm text-white-secondary leading-relaxed">
                Brilliant systems architects are filtered out by generic ATS keywords, while hiring managers spend 40+ hours interviewing unverified candidates.
              </p>
              <div className="mt-auto pt-4 border-t border-divider text-xs font-semibold text-gold-primary flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" /> MEERASH Solution: AI Competency Scoring
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-xl bg-surface p-6 border border-border-primary">
              <span className="text-xs font-mono font-bold uppercase text-error">The Problem: 20% Middleman Commissions</span>
              <h3 className="font-sans text-lg font-bold text-white-primary">Predatory Agency Markup</h3>
              <p className="font-sans text-xs sm:text-sm text-white-secondary leading-relaxed">
                Traditional staffing agencies siphon 15–25% of contractor earnings and charge employers massive markup for standard introductions.
              </p>
              <div className="mt-auto pt-4 border-t border-divider text-xs font-semibold text-gold-primary flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" /> MEERASH Solution: 0% Commission VIP Tiers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Values */}
      <section className="w-full py-16 px-6 lg:px-12 bg-bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Institutional Core"
            title="Our Platform Values"
            subtitle="The non-negotiable principles that guide every smart contract we deploy and every line of code we write."
            align="center"
          />

          <GridWrapper columns={2} gap="lg">
            {values.map((val, idx) => (
              <Card key={idx} isHoverable className="flex items-start gap-4 p-6 bg-surface">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-elevated border border-border-primary shadow-gold-glow">
                  {val.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-sans text-lg font-bold text-white-primary">{val.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-white-secondary leading-relaxed">{val.desc}</p>
                </div>
              </Card>
            ))}
          </GridWrapper>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full py-16 px-6 lg:px-12 text-center">
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-6">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white-primary">
            Ready to Experience the Sovereign Network?
          </h2>
          <p className="font-sans text-base text-white-secondary">
            Join 24,800+ elite technical leaders and partner with 450+ verified corporations today.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/register">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />} className="shadow-gold-glow font-bold px-8">
                Get Started Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="font-semibold px-8">
                Contact Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
