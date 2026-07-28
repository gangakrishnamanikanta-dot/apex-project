'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { MeerashLogo } from '@/components/icons';
import { Shield, Mail } from 'lucide-react';
import Link from 'next/link';

export interface PublicFooterProps {
  className?: string;
}

/**
 * MEERASH Public Website Footer
 * Features brand copyright, navigation links, contact placeholders, and legal links.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <MeerashLogo />
            </Link>
            <p className="font-sans text-sm text-text-muted leading-relaxed">
              Building Technology. Creating Opportunities.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-gold-primary">
              <Shield className="h-4 w-4" />
              <span>A secure platform for the future of work.</span>
            </div>
          </div>

          {/* Col 2: Platform Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white-primary">Platform</h4>
            <ul className="flex flex-col gap-2.5 font-sans text-sm">
              <li><Link href="/features" className="hover:text-gold-primary transition-colors">Platform Features</Link></li>
              <li><Link href="/roadmap" className="hover:text-gold-primary transition-colors">Development Roadmap</Link></li>
              <li><Link href="/faq" className="hover:text-gold-primary transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Col 3: Company & Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white-primary">Company</h4>
            <ul className="flex flex-col gap-2.5 font-sans text-sm">
              <li><Link href="/about" className="hover:text-gold-primary transition-colors">About MEERASH</Link></li>
              <li><Link href="/contact" className="hover:text-gold-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-gold-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white-primary">Get In Touch</h4>
            <div className="flex flex-col gap-2.5 font-sans text-xs text-text-muted">
              <span className="flex items-center gap-2 text-white-secondary">
                <Mail className="h-4 w-4 text-gold-primary shrink-0" />
                hello@meerash.com
              </span>
            </div>
            <div className="pt-2">
              <Link href="/early-access" className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-2 text-xs font-bold text-gold-primary border border-gold-primary/40 hover:bg-gold-primary/10 transition-colors">
                <span>Join Early Access</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-divider" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="font-medium text-white-secondary">Platform Under Development</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-primary transition-colors">Terms of Service</Link>
            <Link href="/about" className="hover:text-gold-primary transition-colors">About</Link>
          </div>

          <span>&copy; {currentYear} MEERASH. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
