import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';

export default function TermsPage() {
  return (
    <PublicLayout>
      <div className="pt-24 pb-16 min-h-screen">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <SectionHeading
            title="Terms of Service"
            subtitle="Last updated: Today"
            align="left"
          />
          <div className="mt-12 text-white-secondary space-y-6">
            <p>This is a placeholder for the MEERASH Terms of Service.</p>
            <p>By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
