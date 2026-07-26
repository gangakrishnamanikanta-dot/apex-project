'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

/**
 * MEERASH Custom Radio Button Component
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, disabled, checked, ...props }, ref) => {
    return (
      <label className={cn('inline-flex items-start gap-2.5 cursor-pointer select-none', disabled && 'cursor-not-allowed opacity-50')}>
        <div className="relative flex items-center pt-0.5">
          <input
            ref={ref}
            type="radio"
            disabled={disabled}
            checked={checked}
            className="peer sr-only"
            {...props}
          />
          <div className={cn(
            'flex h-4 w-4 items-center justify-center rounded-full border border-border-primary bg-bg-primary transition-all',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-gold-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg-primary',
            'peer-checked:border-gold-primary',
            className
          )}>
            <div className="h-2 w-2 rounded-full bg-gold-primary opacity-0 transition-opacity peer-checked:opacity-100" />
          </div>
        </div>
        {(label || description) && (
          <div className="flex flex-col">
            {label && <span className="font-sans text-sm font-medium text-white-primary">{label}</span>}
            {description && <span className="font-sans text-xs text-text-muted">{description}</span>}
          </div>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
