'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

/**
 * MEERASH Custom Checkbox Component
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, disabled, checked, ...props }, ref) => {
    return (
      <label className={cn('inline-flex items-start gap-2.5 cursor-pointer select-none', disabled && 'cursor-not-allowed opacity-50')}>
        <div className="relative flex items-center pt-0.5">
          <input
            ref={ref}
            type="checkbox"
            disabled={disabled}
            checked={checked}
            className="peer sr-only"
            {...props}
          />
          <div className={cn(
            'flex h-4 w-4 items-center justify-center rounded border border-border-primary bg-bg-primary transition-all',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-gold-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg-primary',
            'peer-checked:border-gold-primary peer-checked:bg-gold-primary',
            className
          )}>
            <Check className="h-3 w-3 text-bg-primary opacity-0 transition-opacity peer-checked:opacity-100" />
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

Checkbox.displayName = 'Checkbox';
