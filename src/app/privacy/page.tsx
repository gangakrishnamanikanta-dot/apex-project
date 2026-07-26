'use client';

import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { Card } from '@/components/cards/base-card';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

/**
 * MEERASH Public Website: Privacy & Escrow Security Policy (`/privacy`)
 * Professional institutional structure outlining data protection and smart contract cryptography.
 */
export default function PrivacyPage() {
  const lastUpdated = 'July 26, 2026';

  return (
    <PublicLayout>
      <section className="relative w-full pt-16 pb-20 px-6 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            badge="Institutional Data Governance"
            title="Privacy & Escrow Security Policy"
            subtitle={`Last Updated: ${lastUpdated}. This document outlines how MEERASH Enterprise Inc. protects your cryptographic identity and corporate escrow transactions.`}
            align="left"
          />

          <div className="flex flex-col gap-8 mt-8 font-sans text-sm text-white-secondary leading-relaxed">
            <Card className="p-6 md:p-8 bg-surface border-border-primary flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white-primary flex items-center gap-2">
                <Shield className="h-5 w-5 text-gold-primary" /> 1. Institutional Data Collection & Sovereignty
              </h3>
              <p>
                MEERASH operates on a strict principle of data minimization and sovereign identity ownership. We collect only the professional artifacts necessary to execute automated AI competency scoring and smart escrow settlement:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2 text-white-secondary">
                <li><strong>Professional Identity:</strong> Name, verified enterprise email, corporate affiliation, and cryptographic wallet public keys.</li>
                <li><strong>Competency Artifacts:</strong> Public GitHub repository statistics, architectural certifications, and verified past contract sign-offs.</li>
                <li><strong>Escrow Settlement Metadata:</strong> Transaction hashes, milestone timestamps, and encrypted fiat banking routing instructions (processed strictly through institutional banking partners).</li>
              </ul>
            </Card>

            <Card className="p-6 md:p-8 bg-surface border-border-primary flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white-primary flex items-center gap-2">
                <Lock className="h-5 w-5 text-gold-primary" /> 2. 256-Bit Escrow Encryption & Smart Contract Isolation
              </h3>
              <p>
                All financial balances and contract milestone deliverables are isolated within 256-bit AES-GCM encrypted corporate vaults. When an employer initiates an escrow deposit, funds are held in trust by regulated institutional banking custodians in Zurich and Singapore. MEERASH personnel cannot access or alter escrow balances without verified cryptographic multi-signature authorization from both employer and contractor.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-surface border-border-primary flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white-primary flex items-center gap-2">
                <FileText className="h-5 w-5 text-gold-primary" /> 3. Autonomous AI Matching & Non-Discrimination
              </h3>
              <p>
                Our AI sourcing and matching algorithms operate exclusively on verified technical competencies, architectural output, and code quality metrics. The MEERASH neural engine explicitly ignores demographic variables, physical location, and subjective keyword formatting to guarantee an uncompromised global meritocracy.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-surface border-border-primary flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white-primary flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-gold-primary" /> 4. SOC2 Type II, GDPR, & CCPA Compliance
              </h3>
              <p>
                MEERASH Enterprise Inc. undergoes annual SOC2 Type II audits conducted by independent Big Four accounting firms. European and California sovereign network members retain absolute rights to data portability, immediate cryptographic erasure ("Right to be Forgotten"), and transparent algorithmic audit logging.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
