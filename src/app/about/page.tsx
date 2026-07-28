'use client';

import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { CTABanner } from '@/components/landing/cta-banner';
import { Users, Target, Globe, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="pt-24 pb-16">
        <SectionHeading
          badge="Our Story"
          title="Building Technology. Creating Opportunities."
          subtitle="MEERASH is on a mission to connect job seekers, freelancers, students, and employers through an intelligent, accessible job and task marketplace."
        />

        {/* Vision & Mission Grid */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface-elevated border border-divider rounded-2xl p-8 lg:p-12">
            <Target className="h-10 w-10 text-gold-primary mb-6" />
            <h2 className="text-2xl font-bold text-white-primary mb-4">Our Mission</h2>
            <p className="text-white-secondary leading-relaxed">
              Our mission is to connect the right people with the right opportunities. MEERASH helps job seekers, freelancers, and students find meaningful work — and helps employers discover motivated, skilled talent.
            </p>
          </div>

          <div className="bg-surface-elevated border border-divider rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Globe className="h-32 w-32" />
            </div>
            <Globe className="h-10 w-10 text-gold-primary mb-6 relative z-10" />
            <h2 className="text-2xl font-bold text-white-primary mb-4 relative z-10">Our Vision</h2>
            <p className="text-white-secondary leading-relaxed relative z-10">
              We believe finding work — whether a full-time career or a short-term task — should be seamless. Our vision is a platform where anyone can discover, apply for, and complete opportunities with confidence.
            </p>
          </div>
        </div>

        {/* Why We Built MEERASH */}
        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-12">
          <SectionHeading
            badge="Why We Built MEERASH"
            title="Solving a Real Problem"
            subtitle="Job seekers struggle to find relevant opportunities. Employers struggle to reach the right candidates. MEERASH bridges that gap."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-elevated border border-divider rounded-2xl p-8 text-center">
              <div className="h-14 w-14 rounded-xl bg-gold-primary/10 flex items-center justify-center border border-gold-primary/30 mx-auto mb-6">
                <Users className="h-6 w-6 text-gold-primary" />
              </div>
              <h3 className="text-xl font-bold text-white-primary mb-3">For Job Seekers</h3>
              <p className="text-white-secondary">
                Discover roles that match your skills, get AI-powered recommendations, and manage your applications from one place.
              </p>
            </div>

            <div className="bg-surface-elevated border border-divider rounded-2xl p-8 text-center">
              <div className="h-14 w-14 rounded-xl bg-gold-primary/10 flex items-center justify-center border border-gold-primary/30 mx-auto mb-6">
                <Briefcase className="h-6 w-6 text-gold-primary" />
              </div>
              <h3 className="text-xl font-bold text-white-primary mb-3">For Freelancers</h3>
              <p className="text-white-secondary">
                Browse short-term tasks, set your own rates, and build your portfolio with flexible work that fits your schedule.
              </p>
            </div>

            <div className="bg-surface-elevated border border-divider rounded-2xl p-8 text-center">
              <div className="h-14 w-14 rounded-xl bg-gold-primary/10 flex items-center justify-center border border-gold-primary/30 mx-auto mb-6">
                <Globe className="h-6 w-6 text-gold-primary" />
              </div>
              <h3 className="text-xl font-bold text-white-primary mb-3">For Employers</h3>
              <p className="text-white-secondary">
                Post jobs and tasks, review applications, and connect with verified candidates ready to contribute.
              </p>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-12">
          <div className="rounded-2xl border border-gold-primary/30 bg-gradient-to-br from-surface via-surface-elevated to-bg-primary p-8 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-primary/15 px-4 py-1.5 border border-gold-primary/30 mb-8">
              <Target className="h-4 w-4 text-gold-primary" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold-primary">
                Looking Ahead
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white-primary mb-6">
              A Platform Built for the Future of Work
            </h2>
            <p className="font-sans text-base sm:text-lg text-white-secondary leading-relaxed max-w-3xl mx-auto mb-10">
              MEERASH is just getting started. We are building a marketplace that evolves with the way people work — combining AI-driven matching, a task marketplace, and community-driven trust into one seamless experience.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
              <Link href="/early-access">
                <Button variant="primary" size="lg" className="shadow-gold-glow">
                  Join Early Access
                </Button>
              </Link>
              <Link href="/roadmap">
                <Button variant="outline" size="lg">
                  View Roadmap
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <CTABanner />
        </div>
      </div>
    </PublicLayout>
  );
}
