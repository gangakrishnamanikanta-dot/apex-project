import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';

export default function PrivacyPage() {
  return (
    <PublicLayout>
      <div className="pt-24 pb-16 min-h-screen">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <SectionHeading
            title="Privacy Policy"
            subtitle="Last updated: Today"
            align="left"
          />
          <div className="mt-12 text-white-secondary space-y-6">
            <p>This is a placeholder for the MEERASH Privacy Policy.</p>
            <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
