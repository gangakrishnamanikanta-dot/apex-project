'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { MeerashLogo } from '@/components/icons';
import { Shield, Lock, Globe } from 'lucide-react';
import Link from 'next/link';

export interface FooterProps {
  className?: string;
}

/**
 * MEERASH Enterprise Global Footer
 */
export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'w-full border-t border-border-primary bg-bg-secondary px-6 py-8 text-white-secondary select-none',
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <MeerashLogo />
            <p className="font-sans text-xs text-text-muted max-w-md">
              The Enterprise Marketplace for building technology and creating opportunities with instant escrow settlement.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white-primary">
            <span className="flex items-center gap-1.5 rounded-md bg-surface px-3 py-1.5 border border-border-primary">
              <Shield className="h-4 w-4 text-gold-primary" /> SOC2 Type II Certified
            </span>
            <span className="flex items-center gap-1.5 rounded-md bg-surface px-3 py-1.5 border border-border-primary">
              <Lock className="h-4 w-4 text-success" /> 256-Bit Escrow Encryption
            </span>
            <span className="flex items-center gap-1.5 rounded-md bg-surface px-3 py-1.5 border border-border-primary">
              <Globe className="h-4 w-4 text-info" /> Global MEERASH Platform
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-divider" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="font-medium text-white-secondary">All Enterprise Systems Operational</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-gold-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-gold-primary transition-colors">
              Privacy & Security
            </Link>
            <Link href="/escrow" className="hover:text-gold-primary transition-colors">
              Escrow Agreement
            </Link>
            <Link href="/support" className="hover:text-gold-primary transition-colors">
              Premium Support
            </Link>
          </div>

          <span>© {currentYear} MEERASH Enterprise Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
