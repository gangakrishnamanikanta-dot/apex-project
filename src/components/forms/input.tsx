'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * MEERASH Production-Ready Input Component
 * Supports Text, Password (with eye toggle), Email, and Phone types.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = true,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label className="font-sans text-xs font-semibold uppercase tracking-wider text-white-secondary">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <span className="pointer-events-none absolute left-3.5 flex items-center text-text-muted">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            type={inputType}
            disabled={disabled}
            className={cn(
              'w-full rounded-md bg-bg-primary px-3.5 py-2.5 font-sans text-sm text-white-primary placeholder:text-text-muted',
              'border border-border-primary transition-all duration-200',
              'focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary',
              disabled && 'cursor-not-allowed opacity-50 bg-surface-muted',
              error && 'border-error focus:border-error focus:ring-error',
              leftIcon && 'pl-10',
              (rightIcon || isPassword) && 'pr-10',
              className
            )}
            {...props}
          />
          {isPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 flex items-center text-text-muted hover:text-white-primary focus:outline-none"
              tabIndex={-1}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          ) : (
            rightIcon && (
              <span className="pointer-events-none absolute right-3.5 flex items-center text-text-muted">
                {rightIcon}
              </span>
            )
          )}
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

Input.displayName = 'Input';
