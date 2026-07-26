'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * MEERASH Production-Ready Button Component
 * Supports Primary, Secondary, Outline, Ghost, Danger, Icon, Loading, and Disabled states.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      isDisabled = false,
      leftIcon,
      rightIcon,
      children,
      fullWidth = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const disabled = isDisabled || isLoading;

    // Base classes
    const baseStyles =
      'inline-flex items-center justify-center font-sans font-semibold rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary select-none cursor-pointer';

    // Size variants
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-xs gap-1.5',
      md: 'px-4 py-2 text-sm gap-2',
      lg: 'px-6 py-3 text-base gap-2.5 rounded-lg',
      icon: 'h-9 w-9 p-0 flex items-center justify-center rounded-md',
    };

    // Visual variants
    const variantStyles = {
      primary:
        'bg-gradient-to-r from-gold-primary to-gold-hover text-bg-primary shadow-gold-glow hover:brightness-110 active:scale-[0.98]',
      secondary:
        'bg-surface-elevated text-white-primary border border-border-primary hover:bg-border-primary hover:border-border-secondary active:scale-[0.98]',
      outline:
        'bg-transparent border border-gold-primary text-gold-primary hover:bg-gold-primary/10 active:scale-[0.98]',
      ghost:
        'bg-transparent text-white-secondary hover:text-white-primary hover:bg-surface-elevated/50 active:scale-[0.98]',
      danger:
        'bg-transparent border border-error/50 text-error hover:bg-error/10 hover:border-error active:scale-[0.98]',
      icon: 'bg-surface text-white-secondary hover:text-gold-primary hover:bg-surface-elevated border border-border-primary',
    };

    // Disabled / Loading styles
    const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none filter grayscale-[20%]';

    return (
      <motion.button
        ref={ref}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          disabled && disabledStyles,
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
        {children && <span>{children}</span>}
        {!isLoading && rightIcon && <span className="inline-flex shrink-0 items-center">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
