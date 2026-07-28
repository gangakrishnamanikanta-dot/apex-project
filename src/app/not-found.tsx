'use client';

import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/feedback/empty-state';
import { ArrowLeft, Home, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

/**
 * MEERASH Professional 404 Not Found Page (`/not-found` & root catch-all)
 * Aligned with deep obsidian luxury aesthetics and clear navigation recovery.
 */
export default function NotFoundPage() {
  return (
    <PublicLayout hideNavbar hideFooter className="items-center justify-center min-h-screen p-6">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-8 py-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-primary/10 border border-gold-primary/40 text-gold-primary shadow-gold-glow animate-pulse">
          <ShieldAlert className="h-10 w-10" />
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-sans text-5xl font-extrabold text-gold-primary">404</span>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-white-primary tracking-tight">
            Premium Coordinate Unreachable
          </h1>
          <p className="font-sans text-base text-white-secondary leading-relaxed">
            The enterprise contract, smart escrow vault, or architectural portal you requested does not exist or has been securely decommissioned from the active grid.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              leftIcon={<Home className="h-4 w-4" />}
              className="shadow-gold-glow font-bold px-8"
            >
              Return to Premium Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            fullWidth
            onClick={() => window.history.back()}
            leftIcon={<ArrowLeft className="h-4 w-4 text-gold-primary" />}
            className="font-semibold px-8"
          >
            Go Back
          </Button>
        </div>
      </div>
    </PublicLayout>
  );
}
