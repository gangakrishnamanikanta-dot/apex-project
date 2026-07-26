'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * MEERASH Reusable Section Heading for Public Website & Landing Modules
 */
export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 mb-10 md:mb-14',
        align === 'center' ? 'items-center text-center mx-auto max-w-3xl' : 'items-start text-left max-w-2xl',
        className
      )}
    >
      {badge && (
        <Badge variant="gold" size="md" className="uppercase tracking-widest font-bold font-sans">
          {badge}
        </Badge>
      )}

      <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white-primary">
        {title}
      </h2>

      {subtitle && (
        <p className="font-sans text-base sm:text-lg text-white-secondary leading-relaxed">
          {subtitle}
        </p>
      )}

      {align === 'center' && (
        <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-gold-primary to-gold-hover shadow-gold-glow" />
      )}
    </div>
  );
}
