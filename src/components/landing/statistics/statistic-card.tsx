'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/cards/base-card';

export interface StatisticCardProps {
  label: string;
  value: string;
  change?: string;
  description?: string;
  className?: string;
}

/**
 * MEERASH Public Statistic Card Component
 */
export function StatisticCard({ label, value, change, description, className }: StatisticCardProps) {
  return (
    <Card
      isHoverable
      className={cn('flex flex-col justify-between gap-4 p-6 md:p-8 bg-surface-elevated/70 border-border-primary hover:border-gold-primary/50 group', className)}
    >
      <div className="flex flex-col gap-1">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-primary">
          {label}
        </span>
        <div className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white-primary my-2 leading-tight break-words group-hover:text-gold-light transition-colors">
          {value}
        </div>
      </div>

      <div className="flex flex-col gap-1 pt-3 border-t border-divider">
        {change && (
          <span className="font-sans text-xs font-semibold text-success">
            {change}
          </span>
        )}
        {description && (
          <p className="font-sans text-xs text-text-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}
