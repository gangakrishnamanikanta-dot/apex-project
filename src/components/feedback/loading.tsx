'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'gold' | 'white' | 'muted';
  className?: string;
}

/**
 * MEERASH Gold Loading Spinner Component
 */
export function Spinner({ size = 'md', color = 'gold', className }: SpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-3',
    xl: 'h-12 w-12 border-4',
  };

  const colorClasses = {
    gold: 'border-gold-primary border-t-transparent',
    white: 'border-white-primary border-t-transparent',
    muted: 'border-text-muted border-t-transparent',
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        'inline-block animate-spin rounded-full',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  );
}

/**
 * MEERASH Full-Page Loader Overlay
 */
export function FullPageLoader({ text = 'Loading MEERASH Enterprise...' }: { text?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-bg-primary/90 backdrop-blur-md">
      <Spinner size="xl" color="gold" />
      {text && (
        <span className="font-sans text-sm font-semibold tracking-wide text-gold-primary animate-pulse">
          {text}
        </span>
      )}
    </div>
  );
}

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rectangular' | 'circular' | 'text';
  width?: string | number;
  height?: string | number;
}

/**
 * MEERASH Shimmer Skeleton Component
 */
export function Skeleton({ variant = 'rectangular', width, height, className, style, ...props }: SkeletonProps) {
  const variantClasses = {
    rectangular: 'rounded-md',
    circular: 'rounded-full',
    text: 'rounded h-4 w-full mb-2',
  };

  return (
    <div
      className={cn(
        'bg-surface-elevated/60 animate-pulse select-none overflow-hidden relative',
        "after:absolute after:inset-0 after:-translate-x-full after:animate-[shimmer_2s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent",
        variantClasses[variant],
        className
      )}
      style={{
        width: width !== undefined ? (typeof width === 'number' ? `${width}px` : width) : undefined,
        height: height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : undefined,
        ...style,
      }}
      {...props}
    />
  );
}
