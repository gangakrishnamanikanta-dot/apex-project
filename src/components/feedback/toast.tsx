'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type ToastVariant = 'success' | 'warning' | 'error' | 'info' | 'gold';

export interface ToastProps {
  id?: string;
  variant?: ToastVariant;
  title: string;
  description?: string;
  onDismiss?: () => void;
  className?: string;
}

/**
 * MEERASH Toast Notification Component
 */
export function Toast({ variant = 'gold', title, description, onDismiss, className }: ToastProps) {
  const variantConfigs = {
    success: {
      icon: <CheckCircle2 className="h-5 w-5 text-success shrink-0" />,
      border: 'border-success/40',
    },
    warning: {
      icon: <AlertTriangle className="h-5 w-5 text-warning shrink-0" />,
      border: 'border-warning/40',
    },
    error: {
      icon: <XCircle className="h-5 w-5 text-error shrink-0" />,
      border: 'border-error/40',
    },
    info: {
      icon: <Info className="h-5 w-5 text-info shrink-0" />,
      border: 'border-info/40',
    },
    gold: {
      icon: <CheckCircle2 className="h-5 w-5 text-gold-primary shrink-0" />,
      border: 'border-gold-primary/60 shadow-gold-glow',
    },
  };

  const currentConfig = variantConfigs[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'flex w-full max-w-sm items-start gap-3 rounded-lg border bg-surface-elevated p-4 shadow-lvl4',
        currentConfig.border,
        className
      )}
      role="status"
    >
      <div className="pt-0.5">{currentConfig.icon}</div>
      <div className="flex-grow flex flex-col gap-0.5">
        <h4 className="font-sans text-sm font-semibold text-white-primary tracking-tight">{title}</h4>
        {description && <p className="font-sans text-xs text-white-secondary leading-relaxed">{description}</p>}
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="shrink-0 rounded p-1 text-text-muted hover:bg-white/10 hover:text-white-primary focus:outline-none"
          aria-label="Close toast"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </motion.div>
  );
}

/**
 * MEERASH Toast Container
 */
export function ToastContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full">
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  );
}
