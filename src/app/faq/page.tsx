'use client';

import React, { useState, useMemo } from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { CTABanner } from '@/components/landing/cta-banner';
import { FAQAccordion } from '@/components/landing/faq/faq-accordion';
import { MOCK_FAQS } from '@/data/mock-landing-data';
import { Input } from '@/components/forms/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CATEGORIES = ['All', 'General', 'Jobs & Tasks', 'Platform', 'Early Access'];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFaqs = useMemo(() => {
    let filtered = MOCK_FAQS;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter((faq) => faq.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(lowerQuery) ||
          faq.answer.toLowerCase().includes(lowerQuery)
      );
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  return (
    <PublicLayout>
      <div className="pt-24 pb-16">
        <SectionHeading
          badge="Support Center"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about MEERASH, Early Access, finding jobs, completing tasks, and our AI Recommendations."
        />

        {/* Search & Category Filter */}
        <div className="mx-auto mt-12 max-w-3xl px-6 lg:px-12 flex flex-col items-center gap-8">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white-secondary" />
            <Input
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 w-full rounded-full border-divider bg-surface-elevated text-white-primary shadow-gold-glow focus-visible:ring-gold-primary"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all border ${
                  activeCategory === category
                    ? 'border-gold-primary bg-gold-primary/10 text-gold-primary shadow-sm'
                    : 'border-divider bg-transparent text-white-secondary hover:border-gold-primary/50 hover:text-white-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-16 max-w-3xl px-6 lg:px-12 mb-24">
          {filteredFaqs.length > 0 ? (
            <FAQAccordion faqs={filteredFaqs} />
          ) : (
            <div className="text-center py-20 border border-divider rounded-xl bg-surface-base">
              <p className="text-white-secondary">No questions match your search.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>

        {/* Still Have Questions? */}
        <div className="mx-auto max-w-4xl px-6 lg:px-12 mb-20">
          <div className="rounded-2xl border border-divider bg-surface-base p-10 text-center shadow-gold-glow">
            <h2 className="text-2xl font-bold text-white-primary mb-4">Still have questions?</h2>
            <p className="text-white-secondary mb-8">
              Can't find the answer you're looking for? Our support team is here to help you navigate your career journey.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">Contact Support</Button>
            </Link>
          </div>
        </div>

        <CTABanner />
      </div>
    </PublicLayout>
  );
}
