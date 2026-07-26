'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FolderOpen, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  isError?: boolean;
}

/**
 * MEERASH Production-Ready Empty & Error State Box
 */
export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  isError = false,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-xl border border-dashed p-10 text-center transition-all',
        isError ? 'border-error/40 bg-error/5' : 'border-border-primary bg-surface/50',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'mb-4 flex h-14 w-14 items-center justify-center rounded-full',
          isError ? 'bg-error/10 text-error' : 'bg-surface-elevated text-gold-primary shadow-gold-glow'
        )}
      >
        {icon ? icon : isError ? <AlertTriangle className="h-7 w-7" /> : <FolderOpen className="h-7 w-7" />}
      </div>
      <h3 className={cn('font-sans text-lg font-bold tracking-tight', isError ? 'text-error' : 'text-white-primary')}>
        {title}
      </h3>
      {description && (
        <p className="mt-1 max-w-sm font-sans text-xs text-white-secondary leading-relaxed">{description}</p>
      )}
      {actionLabel && onAction && (
        <div className="mt-6">
          <Button variant={isError ? 'danger' : 'primary'} size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}

export const ErrorState = ({ title = 'An error occurred while loading data', ...props }: Omit<EmptyStateProps, 'isError'> & { title?: string }) => (
  <EmptyState isError title={title} {...props} />
);
ErrorState.displayName = 'ErrorState';
