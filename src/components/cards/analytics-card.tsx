'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './base-card';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export interface AnalyticsCardProps {
  title: string;
  value: string | number;
  change?: number; // e.g., 12.5 for +12.5%, -4.2 for -4.2%
  changeLabel?: string;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * MEERASH Enterprise Analytics Metric Widget
 */
export function AnalyticsCard({
  title,
  value,
  change,
  changeLabel = 'vs last month',
  icon,
  className,
}: AnalyticsCardProps) {
  const isPositive = change !== undefined && change > 0;
  const isNegative = change !== undefined && change < 0;
  const isNeutral = change !== undefined && change === 0;

  return (
    <Card isHoverable className={cn('flex flex-col justify-between gap-4 p-5', className)}>
      <div className="flex items-center justify-between gap-2">
        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-white-secondary">
          {title}
        </span>
        {icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-elevated text-gold-primary border border-border-primary">
            {icon}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white-primary leading-tight break-words">
          {value}
        </span>

        {change !== undefined && (
          <div className="flex items-center gap-1.5 pt-1">
            <span
              className={cn(
                'inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 font-sans text-xs font-semibold',
                isPositive && 'bg-success/15 text-success',
                isNegative && 'bg-error/15 text-error',
                isNeutral && 'bg-surface-elevated text-white-secondary'
              )}
            >
              {isPositive && <ArrowUpRight className="h-3.5 w-3.5" />}
              {isNegative && <ArrowDownRight className="h-3.5 w-3.5" />}
              {isNeutral && <Minus className="h-3.5 w-3.5" />}
              {isPositive ? `+${change}%` : `${change}%`}
            </span>
            {changeLabel && (
              <span className="font-sans text-xs text-text-muted">{changeLabel}</span>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
