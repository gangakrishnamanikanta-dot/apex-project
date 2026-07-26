'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Accordion } from '@/components/ui/accordion';
import { MOCK_FAQS } from '@/data/mock-landing-data';

export interface FAQAccordionProps {
  className?: string;
}

/**
 * MEERASH FAQ Accordion Component
 * Composes the Session 1 Accordion primitive with mock enterprise questions.
 */
export function FAQAccordion({ className }: FAQAccordionProps) {
  const formattedItems = MOCK_FAQS.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: (
      <div className="flex flex-col gap-2">
        {faq.category && (
          <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-gold-primary">
            Category: {faq.category}
          </span>
        )}
        <p>{faq.answer}</p>
      </div>
    ),
  }));

  return (
    <div className={cn('w-full max-w-4xl mx-auto', className)}>
      <Accordion items={formattedItems} defaultOpenId="faq-1" allowMultiple />
    </div>
  );
}
