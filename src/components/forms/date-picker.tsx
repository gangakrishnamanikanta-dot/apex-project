'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon } from 'lucide-react';

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * MEERASH Styled Date Picker Component
 */
export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, label, error, helperText, disabled, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label className="font-sans text-xs font-semibold uppercase tracking-wider text-white-secondary">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <CalendarIcon className="pointer-events-none absolute left-3.5 h-4 w-4 text-text-muted" />
          <input
            ref={ref}
            type="date"
            disabled={disabled}
            className={cn(
              'w-full rounded-md bg-bg-primary py-2.5 pl-10 pr-3.5 font-sans text-sm text-white-primary placeholder:text-text-muted',
              'border border-border-primary transition-all duration-200',
              'focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary',
              disabled && 'cursor-not-allowed opacity-50 bg-surface-muted',
              error && 'border-error focus:border-error focus:ring-error',
              className
            )}
            {...props}
          />
        </div>
        {(error || helperText) && (
          <span className={cn('font-sans text-xs', error ? 'text-error font-medium' : 'text-text-muted')}>
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';
