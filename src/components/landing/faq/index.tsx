'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../section-heading';
import { FAQAccordion } from './faq-accordion';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export interface FAQSectionProps {
  className?: string;
}

/**
 * MEERASH Frequently Asked Questions Section
 */
export function FAQSection({ className }: FAQSectionProps) {
  return (
    <section id="faq" className={cn('w-full py-16 md:py-24 px-6 lg:px-12', className)}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Clarity & Security"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our institutional escrow wallets, automated talent vetting, and enterprise compliance."
          align="center"
        />

        <div className="mt-8">
          <FAQAccordion />
        </div>

        {/* Support Help Box */}
        <div className="mt-12 max-w-2xl mx-auto rounded-xl border border-border-primary bg-surface-elevated/50 p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-left">
            <h4 className="font-sans text-base font-bold text-white-primary">Have custom architectural requirements?</h4>
            <p className="font-sans text-xs text-white-secondary">Our 24/7 Premium Concierge team is ready to assist.</p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button
              variant="outline"
              size="md"
              leftIcon={<MessageSquare className="h-4 w-4 text-gold-primary" />}
            >
              Contact Concierge
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
