'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  maxLength?: number;
  fullWidth?: boolean;
}

/**
 * MEERASH Production-Ready Textarea Component
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, maxLength, fullWidth = true, disabled, value, defaultValue, ...props }, ref) => {
    const stringValue = (value !== undefined ? value : defaultValue || '') as string;
    const charCount = stringValue.length;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <div className="flex items-center justify-between">
            <label className="font-sans text-xs font-semibold uppercase tracking-wider text-white-secondary">
              {label}
            </label>
            {maxLength && (
              <span className="font-sans text-[11px] text-text-muted">
                {charCount} / {maxLength}
              </span>
            )}
          </div>
        )}
        <textarea
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          className={cn(
            'min-h-[100px] w-full rounded-md bg-bg-primary px-3.5 py-2.5 font-sans text-sm text-white-primary placeholder:text-text-muted',
            'border border-border-primary transition-all duration-200 resize-y',
            'focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary',
            disabled && 'cursor-not-allowed opacity-50 bg-surface-muted',
            error && 'border-error focus:border-error focus:ring-error',
            className
          )}
          {...props}
        />
        {(error || helperText) && (
          <span className={cn('font-sans text-xs', error ? 'text-error font-medium' : 'text-text-muted')}>
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
