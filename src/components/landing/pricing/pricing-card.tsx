'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/cards/base-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown } from 'lucide-react';
import Link from 'next/link';

export interface PricingCardProps {
  name: string;
  tagline: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaVariant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

/**
 * MEERASH Public Website Pricing Tier Card Component
 */
export function PricingCard({
  name,
  tagline,
  price,
  period,
  isPopular = false,
  features,
  ctaText,
  ctaVariant = 'outline',
  className,
}: PricingCardProps) {
  return (
    <Card
      isHoverable
      hasGoldBorder={isPopular}
      className={cn(
        'relative flex flex-col justify-between gap-6 p-6 md:p-8 transition-all duration-300',
        isPopular ? 'bg-gradient-to-b from-surface via-surface-elevated to-bg-primary shadow-gold-glow scale-105 z-10' : 'bg-surface',
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge variant="gold" size="md" className="flex items-center gap-1 font-bold shadow-gold-glow uppercase tracking-wider">
            <Crown className="h-3.5 w-3.5" /> Most Popular Tier
          </Badge>
        </div>
      )}

      {/* Tier Header */}
      <div className="flex flex-col gap-2 pt-2">
        <h3 className="font-sans text-2xl font-bold tracking-tight text-white-primary">{name}</h3>
        <p className="font-sans text-xs text-white-secondary min-h-[32px]">{tagline}</p>
      </div>

      {/* Pricing Display */}
      <div className="flex items-baseline gap-1.5 py-4 border-y border-divider">
        <span className="font-mono text-4xl sm:text-5xl font-extrabold tracking-tight text-white-primary">{price}</span>
        <span className="font-sans text-sm font-semibold text-white-secondary">{period}</span>
      </div>

      {/* Feature Checklist */}
      <div className="flex flex-col gap-3 flex-grow">
        <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold-primary">Included Privileges:</span>
        <ul className="flex flex-col gap-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-white-primary leading-relaxed">
              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-primary/20 text-gold-primary">
                <Check className="h-3 w-3" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="pt-4 border-t border-divider mt-auto">
        <Link href="/register" className="w-full">
          <Button
            variant={ctaVariant}
            size="lg"
            fullWidth
            className={cn('font-bold', isPopular && 'shadow-gold-glow')}
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </Card>
  );
}
