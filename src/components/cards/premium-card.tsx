'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './base-card';
import { Button } from '@/components/ui/button';
import { Crown, Check, Sparkles } from 'lucide-react';

export interface PremiumCardProps {
  tierName?: string;
  price?: string;
  billingPeriod?: string;
  features?: string[];
  isCurrentPlan?: boolean;
  onUpgrade?: () => void;
  className?: string;
}

/**
 * MEERASH Premium Membership Card
 */
export function PremiumCard({
  tierName = 'Premium',
  price = 'Details Coming Soon',
  billingPeriod = '',
  features = [
    'Priority placement in search results',
    'Advanced filters and insights',
    'Application analytics dashboard',
    'Priority support access',
  ],
  isCurrentPlan = false,
  onUpgrade,
  className,
}: PremiumCardProps) {
  return (
    <Card
      isHoverable
      hasGoldBorder
      className={cn(
        'relative flex flex-col justify-between gap-6 overflow-hidden bg-gradient-to-b from-surface via-surface-elevated to-bg-primary p-6 shadow-gold-glow',
        className
      )}
    >
      {/* Top Badge */}
      <div className="flex items-center justify-between pb-4 border-b border-divider-gold">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold-primary to-gold-hover text-bg-primary shadow-gold-glow">
            <Crown className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-primary">Membership</span>
            <h3 className="font-sans text-lg font-bold tracking-tight text-white-primary">{tierName}</h3>
          </div>
        </div>
        {isCurrentPlan && (
          <span className="rounded-full bg-gold-primary/20 px-3 py-1 font-sans text-xs font-bold text-gold-primary border border-gold-primary">
            Active Plan
          </span>
        )}
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-1 my-2">
        <span className="font-mono text-4xl font-extrabold tracking-tight text-white-primary">{price}</span>
        <span className="font-sans text-sm font-medium text-white-secondary">{billingPeriod}</span>
      </div>

      {/* Feature List */}
      <div className="flex flex-col gap-3">
        <span className="flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-gold-primary">
          <Sparkles className="h-3.5 w-3.5 text-gold-primary" /> What&apos;s Included:
        </span>
        <ul className="flex flex-col gap-2.5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 font-sans text-xs text-white-primary leading-relaxed">
              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-primary/20 text-gold-primary">
                <Check className="h-3 w-3" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="pt-4 border-t border-divider">
        <Button
          variant={isCurrentPlan ? 'outline' : 'primary'}
          size="lg"
          fullWidth
          isDisabled={isCurrentPlan}
          onClick={onUpgrade}
        >
          {isCurrentPlan ? 'Current Plan' : 'Learn More'}
        </Button>
      </div>
    </Card>
  );
}
