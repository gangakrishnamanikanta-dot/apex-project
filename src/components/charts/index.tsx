'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BarChart3 } from 'lucide-react';
import { Card } from '@/components/cards/base-card';

export interface ChartWrapperProps {
  title: string;
  subtitle?: string;
  height?: number | string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * MEERASH Enterprise Chart Wrapper Component
 * Provides luxury container styling for future Recharts / visualization integrations.
 */
export function ChartWrapper({
  title,
  subtitle,
  height = 300,
  children,
  className,
}: ChartWrapperProps) {
  return (
    <Card className={cn('flex flex-col gap-4 p-6', className)}>
      <div className="flex items-center justify-between pb-3 border-b border-divider">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-sans text-base font-bold text-white-primary tracking-tight">{title}</h3>
          {subtitle && <span className="font-sans text-xs text-white-secondary">{subtitle}</span>}
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded bg-surface-elevated text-gold-primary">
          <BarChart3 className="h-4 w-4" />
        </div>
      </div>

      <div
        className="flex w-full items-center justify-center rounded-lg bg-bg-primary/50 border border-dashed border-border-primary p-6"
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
      >
        {children || (
          <div className="flex flex-col items-center justify-center text-center text-text-muted gap-2">
            <BarChart3 className="h-8 w-8 opacity-40 animate-pulse text-gold-primary" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider">Enterprise Visualization Ready</span>
            <span className="font-sans text-[11px] text-text-muted">Awaiting stream or Recharts dataset</span>
          </div>
        )}
      </div>
    </Card>
  );
}
