'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'gold' | 'dashed';
  label?: string;
}

/**
 * MEERASH Styled Divider Component
 */
export function Divider({ orientation = 'horizontal', variant = 'default', label, className, ...props }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          'inline-block h-full w-[1px] shrink-0',
          variant === 'default' && 'bg-divider',
          variant === 'gold' && 'bg-divider-gold',
          variant === 'dashed' && 'border-l border-dashed border-border-primary bg-transparent w-0',
          className
        )}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div className={cn('relative flex w-full items-center my-4 select-none', className)} {...props}>
        <div className={cn('flex-grow border-t', variant === 'gold' ? 'border-divider-gold' : 'border-divider')} />
        <span className="mx-3 shrink-0 font-sans text-xs font-semibold uppercase tracking-wider text-text-muted">
          {label}
        </span>
        <div className={cn('flex-grow border-t', variant === 'gold' ? 'border-divider-gold' : 'border-divider')} />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        'w-full shrink-0',
        variant === 'default' && 'h-[1px] bg-divider my-4',
        variant === 'gold' && 'h-[1px] bg-divider-gold my-4',
        variant === 'dashed' && 'border-t border-dashed border-border-primary bg-transparent h-0 my-4',
        className
      )}
      {...props}
    />
  );
}
