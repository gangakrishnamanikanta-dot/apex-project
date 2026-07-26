'use client';

import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { Card } from '@/components/cards/base-card';
import { Scale, Briefcase, AlertTriangle, CheckCircle2 } from 'lucide-react';

/**
 * MEERASH Public Website: Terms of Enterprise Service (`/terms`)
 * Professional institutional structure covering marketplace agreements and escrow settlement rules.
 */
export default function TermsPage() {
  const lastUpdated = 'July 26, 2026';

  return (
    <PublicLayout>
      <section className="relative w-full pt-16 pb-20 px-6 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            badge="Legal Framework"
            title="Terms of Enterprise Service"
            subtitle={`Last Updated: ${lastUpdated}. By accessing the MEERASH Sovereign Network, you agree to abide by these institutional marketplace rules.`}
            align="left"
          />

          <div className="flex flex-col gap-8 mt-8 font-sans text-sm text-white-secondary leading-relaxed">
            <Card className="p-6 md:p-8 bg-surface border-border-primary flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white-primary flex items-center gap-2">
                <Scale className="h-5 w-5 text-gold-primary" /> 1. Sovereign Enterprise Marketplace Agreement
              </h3>
              <p>
                MEERASH provides a high-availability digital marketplace that connects verified Tier-1 technology corporations ("Employers") with top-tier systems engineers and executives ("Sovereign Talent"). All contract bids, milestone submissions, and financial settlements executed on the platform constitute binding digital agreements governed under Swiss institutional commercial law.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-surface border-border-primary flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white-primary flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-gold-primary" /> 2. Institutional Escrow Settlement Rules
              </h3>
              <p>
                To guarantee zero financial risk, all milestone contracts require 100% upfront escrow funding prior to work commencement. Upon automated verification of deliverable submission or formal employer sign-off, escrow funds are released instantly to the contractor's designated corporate account. Employers waive the right to withhold funds without initiating an institutional arbitration protocol within 72 hours of deliverable submission.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-surface border-border-primary flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white-primary flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-gold-primary" /> 3. Verification & Identity Integrity
              </h3>
              <p>
                Sovereign Network membership is strictly limited to verified entities. Any attempt to misrepresent technical competencies, falsify code repositories, or circumvent platform escrow wallets will result in immediate cryptographic identity revocation, forfeiture of pending bounties, and notification to partner corporate security desks.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-surface border-border-primary flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white-primary flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-gold-primary" /> 4. Limitation of Liability & Arbitration
              </h3>
              <p>
                While MEERASH guarantees the integrity of smart contract escrow vaults, the platform acts solely as a technological facilitator and arbitrator. All commercial disputes shall be resolved through binding expedited arbitration in Zurich, Switzerland, under the rules of the Swiss Chambers' Arbitration Institution.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
