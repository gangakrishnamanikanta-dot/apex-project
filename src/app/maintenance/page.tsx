'use client';

import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/cards/base-card';
import { MeerashLogo } from '@/components/icons';
import { Shield, Wrench, Clock, RefreshCw, Mail } from 'lucide-react';
import Link from 'next/link';

/**
 * MEERASH Public Website: System Maintenance & Upgrade Screen (`/maintenance`)
 * Branded institutional maintenance portal assuring escrow integrity during updates.
 */
export default function MaintenancePage() {
  return (
    <PublicLayout hideNavbar hideFooter className="items-center justify-center min-h-screen p-6 bg-bg-primary">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-8 py-12">
        <MeerashLogo className="h-10 w-auto animate-pulse" />

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-primary/10 border border-gold-primary/40 text-gold-primary shadow-gold-glow">
          <Wrench className="h-9 w-9 animate-spin-slow" />
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-primary">
            System Protocol 4.2 Active
          </span>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-white-primary tracking-tight">
            Institutional Upgrade in Progress
          </h1>
          <p className="font-sans text-base text-white-secondary leading-relaxed">
            We are deploying enhanced 256-bit zero-knowledge cryptographic modules and expanding sovereign escrow capacity across European and Asian nodes.
          </p>
        </div>

        <Card hasGoldBorder className="w-full p-6 bg-surface border-border-primary text-left flex flex-col gap-4">
          <div className="flex items-center gap-3 pb-3 border-b border-divider">
            <Shield className="h-5 w-5 text-success shrink-0" />
            <div className="flex flex-col">
              <strong className="font-sans text-sm font-bold text-white-primary">Escrow Funds 100% Secured</strong>
              <span className="font-sans text-xs text-white-secondary">All active enterprise contracts and wallets remain protected under multi-sig custody.</span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-gold-primary" /> Estimated Completion:
            </span>
            <span className="text-white-primary font-bold">14:00 UTC</span>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.location.reload()}
            leftIcon={<RefreshCw className="h-4 w-4" />}
            className="shadow-gold-glow font-bold px-8 w-full sm:w-auto"
          >
            Check System Status
          </Button>
          <Link href="mailto:security@sovereign-meerash.com" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              leftIcon={<Mail className="h-4 w-4 text-gold-primary" />}
              className="font-semibold px-8"
            >
              Emergency Desk
            </Button>
          </Link>
        </div>
      </div>
    </PublicLayout>
  );
}
