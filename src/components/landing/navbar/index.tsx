'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { MeerashLogo, Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Drawer } from '@/components/feedback/drawer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface PublicNavbarProps {
  className?: string;
}

/**
 * MEERASH Public Website Navigation Bar
 * Features sticky glassmorphism, active link states, and responsive mobile drawer.
 */
export function PublicNavbar({ className }: PublicNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname() || '/';

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Opportunities', href: '/#opportunities' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false; // Anchor links managed by scroll or standard view
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex h-20 w-full items-center justify-between border-b border-border-primary/80 bg-bg-primary/85 px-6 lg:px-12 backdrop-blur-lg transition-all select-none',
        className
      )}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center group">
        <MeerashLogo className="h-8 sm:h-9 w-auto transition-transform duration-200 group-hover:scale-105" />
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden xl:flex items-center gap-8">
        {navLinks.map((link) => {
          const active = isActiveLink(link.href);
          return (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'font-sans text-sm font-semibold transition-colors duration-200 relative py-1',
                active ? 'text-gold-primary font-bold' : 'text-white-secondary hover:text-white-primary'
              )}
            >
              {link.label}
              {active && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-primary shadow-gold-glow rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Desktop Auth & Primary CTA */}
      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="/login"
          className="font-sans text-sm font-semibold text-white-secondary hover:text-gold-primary transition-colors px-3 py-2 rounded-lg hover:bg-surface"
        >
          Sign In
        </Link>
        <Link href="/register">
          <Button variant="primary" size="md" className="shadow-gold-glow">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(true)}
        className="flex xl:hidden rounded-lg p-2.5 text-white-secondary hover:bg-surface hover:text-white-primary border border-border-primary transition-colors focus:outline-none"
        aria-label="Open menu"
      >
        <Icons.Menu className="h-6 w-6" />
      </button>

      {/* Mobile Navigation Drawer */}
      <Drawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        title="MEERASH Sovereign Network"
        side="right"
        className="xl:hidden p-6 w-80 flex flex-col justify-between"
      >
        <div className="flex flex-col gap-6 mt-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center justify-between rounded-lg px-4 py-3 font-sans text-base font-semibold transition-all duration-200',
                    active
                      ? 'bg-gradient-to-r from-gold-primary/20 to-transparent text-gold-primary border-l-2 border-gold-primary'
                      : 'text-white-secondary hover:bg-surface-elevated hover:text-white-primary'
                  )}
                >
                  <span>{link.label}</span>
                  <Icons.ChevronRight className="h-4 w-4 opacity-50" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Footer Actions */}
        <div className="flex flex-col gap-3 pt-6 border-t border-divider">
          <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="outline" size="lg" fullWidth>
              Sign In
            </Button>
          </Link>
          <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="primary" size="lg" fullWidth className="shadow-gold-glow">
              Get Started
            </Button>
          </Link>
        </div>
      </Drawer>
    </header>
  );
}
