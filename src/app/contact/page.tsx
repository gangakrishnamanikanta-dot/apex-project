'use client';

import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { ContactForm } from '@/components/landing/contact-form';
import { Card } from '@/components/cards/base-card';
import { Mail, MapPin, Globe, Shield, PhoneCall } from 'lucide-react';

/**
 * MEERASH Public Website: Global Contact & Concierge Page (`/contact`)
 * Features enterprise contact simulation, office locations, and direct institutional email desks.
 */
export default function ContactPage() {
  const offices = [
    {
      city: 'Zurich (Global HQ)',
      address: 'Bahnhofstrasse 42, 8001 Zurich, Switzerland',
      phone: '+41 44 210 88 42',
      status: 'Primary Institutional Concierge',
    },
    {
      city: 'New York (Americas)',
      address: '350 Fifth Avenue, Suite 7400, New York, NY 10118',
      phone: '+1 (212) 840-9200',
      status: 'Enterprise Sales & Hedge Fund Desk',
    },
    {
      city: 'Singapore (APAC)',
      address: '10 Marina Boulevard, Tower 2, Singapore 018983',
      phone: '+65 6818 2200',
      status: 'Quantum & Blockchain Hub',
    },
    {
      city: 'London (EMEA)',
      address: 'One Canada Square, Canary Wharf, London E14 5AA',
      phone: '+44 20 7418 8000',
      status: 'European Sovereign Legal & Escrow',
    },
  ];

  return (
    <PublicLayout>
      <section className="relative w-full pt-16 pb-12 md:pt-24 md:pb-16 px-6 lg:px-12 overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-gold-primary/10 blur-[130px] -z-10" />

        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Global Institutional Concierge"
            title="Connect With MEERASH"
            subtitle="Our Vice President account managers and architectural sourcing directors operate across 4 major financial centers to support your enterprise workforce."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
            {/* Left Col: Direct Desks & Office Grid */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              {/* Email Desks Card */}
              <Card hasGoldBorder className="flex flex-col gap-5 p-6 md:p-8 bg-surface shadow-lvl3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-primary flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Direct Institutional Desks
                </span>

                <div className="flex flex-col gap-4 font-sans text-xs sm:text-sm">
                  <div className="flex flex-col gap-1 pb-3 border-b border-divider">
                    <strong className="text-white-primary font-bold">VIP Sovereign Talent Concierge</strong>
                    <span className="text-gold-primary font-mono">concierge@sovereign-meerash.com</span>
                    <span className="text-text-muted text-xs">For verified contractors and onboarding inquiries.</span>
                  </div>
                  <div className="flex flex-col gap-1 pb-3 border-b border-divider">
                    <strong className="text-white-primary font-bold">Enterprise Corporate Accounts</strong>
                    <span className="text-gold-primary font-mono">enterprise-sales@sovereign-meerash.com</span>
                    <span className="text-text-muted text-xs">For custom escrow integration and dedicated sourcing agents.</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <strong className="text-white-primary font-bold">Escrow Security & Legal Compliance</strong>
                    <span className="text-gold-primary font-mono">security@sovereign-meerash.com</span>
                    <span className="text-text-muted text-xs">SOC2 Type II audit reporting and smart contract verification.</span>
                  </div>
                </div>
              </Card>

              {/* Office Locations */}
              <div className="flex flex-col gap-4">
                <h3 className="font-sans text-lg font-bold text-white-primary flex items-center gap-2">
                  <Globe className="h-5 w-5 text-gold-primary" /> Sovereign Global Offices
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {offices.map((off, idx) => (
                    <Card key={idx} isHoverable className="flex flex-col justify-between gap-3 p-5 bg-surface-elevated/60 border-border-primary">
                      <div className="flex flex-col gap-1">
                        <strong className="font-sans text-sm font-bold text-white-primary">{off.city}</strong>
                        <span className="font-sans text-xs text-gold-primary font-medium">{off.status}</span>
                      </div>
                      <span className="font-sans text-xs text-text-muted flex items-start gap-1.5 leading-relaxed">
                        <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-gold-primary" />
                        {off.address}
                      </span>
                      <span className="font-mono text-xs text-white-secondary flex items-center gap-1.5 pt-2 border-t border-divider">
                        <PhoneCall className="h-3.5 w-3.5 text-text-muted" />
                        {off.phone}
                      </span>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Interactive UI Form Simulation */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
