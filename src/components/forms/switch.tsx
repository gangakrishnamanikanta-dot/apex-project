'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * MEERASH Custom Toggle Switch Component
 */
export function Switch({ checked, onCheckedChange, label, description, disabled = false, className }: SwitchProps) {
  return (
    <label className={cn('inline-flex items-center justify-between gap-3 cursor-pointer select-none', disabled && 'cursor-not-allowed opacity-50', className)}>
      {(label || description) && (
        <div className="flex flex-col">
          {label && <span className="font-sans text-sm font-medium text-white-primary">{label}</span>}
          {description && <span className="font-sans text-xs text-text-muted">{description}</span>}
        </div>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onCheckedChange(!checked)}
        className={cn(
          'relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
          checked ? 'bg-gold-primary' : 'bg-surface-elevated'
        )}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={cn(
            'pointer-events-none inline-block h-5 w-5 rounded-full shadow-md ring-0',
            checked ? 'translate-x-5 bg-bg-primary' : 'translate-x-0 bg-white-secondary'
          )}
        />
      </button>
    </label>
  );
}
