'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { MeerashLogo } from '@/components/icons';
import { Shield, Lock, Globe, Mail, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export interface PublicFooterProps {
  className?: string;
}

/**
 * MEERASH Public Website Footer
 * Features brand copyright, navigation links, contact placeholders, social badges, and legal links.
 */
export function PublicFooter({ className }: PublicFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'w-full border-t border-border-primary bg-bg-secondary px-6 py-12 lg:px-12 text-white-secondary select-none',
        className
      )}
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <MeerashLogo />
            </Link>
            <p className="font-sans text-sm text-text-muted leading-relaxed max-w-sm">
              Building Technology. Creating Opportunities. The premium enterprise job and task marketplace engineered with instant 256-bit encrypted escrow settlement and autonomous AI talent matching.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-gold-primary">
              <Shield className="h-4 w-4" />
              <span>SOC2 Type II & GDPR Verified Sovereign Network</span>
            </div>
          </div>

          {/* Col 3: Platform Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white-primary">Platform</h4>
            <ul className="flex flex-col gap-2.5 font-sans text-sm">
              <li><Link href="/#features" className="hover:text-gold-primary transition-colors">Smart Job Discovery</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-gold-primary transition-colors">How Escrow Works</Link></li>
              <li><Link href="/#opportunities" className="hover:text-gold-primary transition-colors">Featured Contracts</Link></li>
              <li><Link href="/#pricing" className="hover:text-gold-primary transition-colors">VIP Sovereign Membership</Link></li>
              <li><Link href="/#faq" className="hover:text-gold-primary transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white-primary">Sovereign Entity</h4>
            <ul className="flex flex-col gap-2.5 font-sans text-sm">
              <li><Link href="/about" className="hover:text-gold-primary transition-colors">About MEERASH</Link></li>
              <li><Link href="/contact" className="hover:text-gold-primary transition-colors">Global Contact & Offices</Link></li>
              <li><Link href="/privacy" className="hover:text-gold-primary transition-colors">Privacy & Escrow Security</Link></li>
              <li><Link href="/terms" className="hover:text-gold-primary transition-colors">Terms of Enterprise Service</Link></li>
              <li><Link href="/maintenance" className="hover:text-gold-primary transition-colors">System Status Portal</Link></li>
            </ul>
          </div>

          {/* Col 5: Global Concierge Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white-primary">Concierge</h4>
            <div className="flex flex-col gap-2.5 font-sans text-xs text-text-muted">
              <span className="flex items-center gap-2 text-white-secondary">
                <Mail className="h-4 w-4 text-gold-primary shrink-0" />
                concierge@sovereign-meerash.com
              </span>
              <span className="flex items-start gap-2 text-white-secondary">
                <MapPin className="h-4 w-4 text-gold-primary shrink-0 mt-0.5" />
                Bahnhofstrasse 42, 8001 Zurich, Switzerland
              </span>
              <div className="pt-2">
                <Link href="/register" className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-2 text-xs font-bold text-gold-primary border border-gold-primary/40 hover:bg-gold-primary/10 transition-colors">
                  <span>Join Executive Network</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-divider" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="font-medium text-white-secondary">All Institutional Escrow Systems Online</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-primary transition-colors">Terms of Service</Link>
            <Link href="/about" className="hover:text-gold-primary transition-colors">Security Architecture</Link>
          </div>

          <span>© {currentYear} MEERASH Enterprise Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
