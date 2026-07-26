'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'gold' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  isPill?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * MEERASH Production-Ready Badge / Status Chip / Tag Component
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'neutral', size = 'md', isPill = false, leftIcon, rightIcon, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold tracking-wide select-none transition-colors';

    const sizeStyles = {
      sm: 'px-2 py-0.5 text-[10px] gap-1',
      md: 'px-2.5 py-1 text-xs gap-1.5',
      lg: 'px-3 py-1.5 text-sm gap-2',
    };

    const variantStyles = {
      gold: 'bg-gold-primary/15 text-gold-primary border border-gold-primary/30 shadow-[0_0_10px_rgba(212,175,55,0.15)]',
      success: 'bg-success/15 text-success border border-success/30',
      warning: 'bg-warning/15 text-warning border border-warning/30',
      error: 'bg-error/15 text-error border border-error/30',
      info: 'bg-info/15 text-info border border-info/30',
      neutral: 'bg-surface-elevated text-white-secondary border border-border-primary',
      outline: 'bg-transparent text-white-secondary border border-border-secondary',
    };

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          isPill ? 'rounded-full' : 'rounded-sm',
          className
        )}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0 items-center">{rightIcon}</span>}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export const StatusChip = ({ status, label, ...props }: { status: 'success' | 'warning' | 'error' | 'info'; label: string } & Omit<BadgeProps, 'variant' | 'children'>) => (
  <Badge variant={status} isPill size="sm" {...props}>
    <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
    {label}
  </Badge>
);
StatusChip.displayName = 'StatusChip';

export const Tag = ({ label, ...props }: { label: string } & Omit<BadgeProps, 'children'>) => (
  <Badge variant="outline" size="sm" {...props}>
    #{label}
  </Badge>
);
Tag.displayName = 'Tag';
