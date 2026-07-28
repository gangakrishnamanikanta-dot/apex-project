'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { Button } from '@/components/ui/button';
import { Rocket, Users, Sparkles, Zap } from 'lucide-react';

type Status = 'available-now' | 'in-development' | 'coming-soon' | 'planned';

interface Phase {
  id: string;
  title: string;
  description: string;
  status: Status;
  statusLabel: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const PHASES: Phase[] = [
  {
    id: 'phase-1',
    title: 'Platform Foundation',
    description: 'Core marketplace infrastructure, user profiles, and the foundational technology stack that powers MEERASH.',
    status: 'available-now',
    statusLabel: 'Available Now',
    icon: Rocket,
    features: ['User Profiles & Authentication', 'Job & Task Listings', 'Basic Matching System', 'Secure Messaging'],
  },
  {
    id: 'phase-2',
    title: 'Smart Matching',
    description: 'AI-driven recommendation engine that connects the right talent with the right opportunities.',
    status: 'in-development',
    statusLabel: 'In Development',
    icon: Sparkles,
    features: ['Smart Job Recommendations', 'Smart Task Recommendations', 'Better Matching Algorithm', 'Personalized Suggestions'],
  },
  {
    id: 'phase-3',
    title: 'Enhanced Features',
    description: 'Advanced tools and integrations to make the MEERASH experience seamless and powerful.',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    icon: Users,
    features: ['Wallet & Payments', 'Notifications System', 'Employer Portal', 'Premium Membership'],
  },
  {
    id: 'phase-4',
    title: 'Launch',
    description: 'Full public launch with all features live, global availability, and ongoing platform improvements.',
    status: 'planned',
    statusLabel: 'Planned',
    icon: Zap,
    features: ['Global Availability', 'Mobile Applications', 'API Access', 'Continuous Improvements'],
  },
];

const STATUS_STYLES: Record<Status, { dot: string; ring: string; badge: string }> = {
  'available-now': {
    dot: 'bg-emerald-400',
    ring: 'bg-emerald-400/20',
    badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  },
  'in-development': {
    dot: 'bg-gold-primary',
    ring: 'bg-gold-primary/20',
    badge: 'bg-gold-primary/10 text-gold-primary border-gold-primary/20',
  },
  'coming-soon': {
    dot: 'bg-blue-400',
    ring: 'bg-blue-400/20',
    badge: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
  },
  'planned': {
    dot: 'bg-white-secondary',
    ring: 'bg-white-secondary/20',
    badge: 'bg-white-secondary/10 text-white-secondary border-white-secondary/20',
  },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function RoadmapPage() {
  return (
    <PublicLayout>
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl px-6 lg:px-12 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-primary/20 bg-gold-primary/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-primary" />
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-gold-primary">
              Development Progress
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white-primary md:text-5xl lg:text-6xl">
            Building MEERASH Step by Step
          </h1>
          <p className="mt-6 text-lg text-white-secondary md:text-xl">
            Follow our development journey. Here is what we have shipped, what we are building, and what is coming next.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mx-auto mt-20 max-w-5xl px-6 lg:px-12">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold-primary/40 via-divider to-transparent md:left-1/2" />

            <div className="flex flex-col gap-12">
              {PHASES.map((phase, index) => {
                const style = STATUS_STYLES[phase.status];
                const Icon = phase.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div key={phase.id} variants={item} className="relative pl-16 md:pl-0">
                    {/* Mobile timeline dot */}
                    <div className="absolute left-3 top-6 flex h-6 w-6 items-center justify-center md:hidden">
                      <div className={`flex h-4 w-4 items-center justify-center rounded-full ${style.ring}`}>
                        <div className={`h-2 w-2 rounded-full ${style.dot}`} />
                      </div>
                    </div>

                    <div className="md:grid md:grid-cols-2 md:gap-12">
                      <div className={`${isEven ? 'md:text-right' : 'md:col-start-2'}`}>
                        <div className="rounded-2xl border border-divider bg-surface-elevated p-6 md:p-8 transition-colors hover:border-gold-primary/30">
                          {/* Desktop timeline dot */}
                          <div className="hidden md:flex absolute md:left-1/2 md:-translate-x-1/2 md:-mt-2">
                            <div className="relative flex h-4 w-4 items-center justify-center">
                              <div className={`absolute h-4 w-4 rounded-full ${style.ring}`} />
                              <div className={`h-2 w-2 rounded-full ${style.dot}`} />
                            </div>
                          </div>

                          <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-divider bg-surface">
                              <Icon className="h-5 w-5 text-gold-primary" />
                            </div>
                            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${style.badge}`}>
                              <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                              {phase.statusLabel}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-white-primary mb-3">{phase.title}</h3>
                          <p className="text-white-secondary mb-6 leading-relaxed">{phase.description}</p>

                          <div className={`space-y-2 ${isEven ? 'md:text-left' : ''}`}>
                            {phase.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-2.5 text-sm text-white-secondary">
                                <span className={`flex h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`} />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-24 max-w-3xl px-6 lg:px-12">
          <div className="rounded-2xl border border-gold-primary/30 bg-gradient-to-br from-surface via-surface-elevated to-bg-primary p-8 sm:p-12 text-center shadow-gold-glow">
            <h3 className="font-sans text-2xl font-bold text-white-primary mb-3">
              Follow Our Progress
            </h3>
            <p className="font-sans text-sm text-white-secondary max-w-lg mx-auto mb-8">
              Join the Early Access list to get launch updates and be the first to use MEERASH when we ship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/early-access">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-gold-glow">
                  Join Early Access
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}