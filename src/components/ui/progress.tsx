'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gold' | 'success' | 'info';
}

/**
 * MEERASH Linear Progress Bar Component
 */
export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  size = 'md',
  variant = 'gold',
  className,
  ...props
}: ProgressBarProps) {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const variantClasses = {
    gold: 'bg-gradient-to-r from-gold-primary to-gold-hover shadow-gold-glow',
    success: 'bg-success',
    info: 'bg-info',
  };

  return (
    <div className={cn('flex w-full flex-col gap-1.5 select-none', className)} {...props}>
      {(label || showValue) && (
        <div className="flex items-center justify-between font-sans text-xs font-semibold">
          {label && <span className="text-white-secondary">{label}</span>}
          {showValue && <span className="text-gold-primary font-mono">{percentage}%</span>}
        </div>
      )}
      <div className={cn('w-full overflow-hidden rounded-full bg-surface-elevated', sizeClasses[size])}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={cn('h-full rounded-full transition-all', variantClasses[variant])}
        />
      </div>
    </div>
  );
}

export interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  size?: number; // in pixels
  strokeWidth?: number;
  showValue?: boolean;
  label?: string;
}

/**
 * MEERASH Circular Progress Component
 */
export function CircularProgress({
  value,
  size = 64,
  strokeWidth = 6,
  showValue = true,
  label,
  className,
  ...props
}: CircularProgressProps) {
  const percentage = Math.min(Math.max(Math.round(value), 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn('inline-flex flex-col items-center justify-center gap-1.5 select-none', className)} {...props}>
      <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="var(--color-surface-elevated)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="var(--color-gold-primary)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            strokeLinecap="round"
            fill="transparent"
            className="filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
          />
        </svg>
        {showValue && (
          <span className="absolute font-sans text-xs font-bold text-white-primary">
            {percentage}%
          </span>
        )}
      </div>
      {label && <span className="font-sans text-xs text-text-muted text-center">{label}</span>}
    </div>
  );
}
