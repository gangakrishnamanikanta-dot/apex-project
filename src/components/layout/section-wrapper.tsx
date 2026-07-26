'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  isCard?: boolean;
}

/**
 * MEERASH Section Wrapper Component
 */
export function SectionWrapper({
  title,
  subtitle,
  actions,
  children,
  isCard = false,
  className,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        'flex flex-col gap-6 my-6 w-full',
        isCard && 'rounded-xl border border-border-primary bg-surface p-6 shadow-lvl2',
        className
      )}
      {...props}
    >
      {(title || subtitle || actions) && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-divider">
          <div className="flex flex-col gap-1">
            {title && <h2 className="font-sans text-lg md:text-xl font-bold text-white-primary tracking-tight">{title}</h2>}
            {subtitle && <p className="font-sans text-xs md:text-sm text-white-secondary">{subtitle}</p>}
          </div>
          {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
        </div>
      )}

      <div className="w-full">{children}</div>
    </section>
  );
}
