'use client';

import React from 'react';
import { PublicNavbar } from './navbar';
import { PublicFooter } from './footer';
import { cn } from '@/lib/utils';

export interface PublicLayoutProps {
  children: React.ReactNode;
  className?: string;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}

/**
 * MEERASH Master Public Website Layout Shell
 * Wraps public-facing landing and supporting pages with consistent Obsidian & Gold navigation and footer.
 */
export function PublicLayout({
  children,
  className,
  hideNavbar = false,
  hideFooter = false,
}: PublicLayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-bg-primary text-white-primary font-sans antialiased selection:bg-gold-primary selection:text-bg-primary overflow-x-hidden">
      {!hideNavbar && <PublicNavbar />}
      <main className={cn('flex flex-col flex-grow w-full', className)}>
        {children}
      </main>
      {!hideFooter && <PublicFooter />}
    </div>
  );
}
