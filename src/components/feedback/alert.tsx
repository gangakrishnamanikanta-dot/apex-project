'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion';

export type AlertVariant = 'success' | 'warning' | 'error' | 'info' | 'gold';

export interface AlertProps extends Omit<HTMLMotionProps<'div'>, 'children' | 'title'> {
  variant?: AlertVariant;
  title?: string;
  isDismissible?: boolean;
  onDismiss?: () => void;
  children: React.ReactNode;
}

/**
 * MEERASH Production-Ready Alert Box Component
 */
export function Alert({ variant = 'info', title, isDismissible = false, onDismiss, children, className, ...props }: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  const variantConfigs = {
    success: {
      icon: <CheckCircle2 className="h-5 w-5 text-success" />,
      styles: 'bg-success/10 border-success/30 text-white-primary',
    },
    warning: {
      icon: <AlertTriangle className="h-5 w-5 text-warning" />,
      styles: 'bg-warning/10 border-warning/30 text-white-primary',
    },
    error: {
      icon: <XCircle className="h-5 w-5 text-error" />,
      styles: 'bg-error/10 border-error/30 text-white-primary',
    },
    info: {
      icon: <Info className="h-5 w-5 text-info" />,
      styles: 'bg-info/10 border-info/30 text-white-primary',
    },
    gold: {
      icon: <CheckCircle2 className="h-5 w-5 text-gold-primary" />,
      styles: 'bg-gold-primary/10 border-gold-primary/30 text-white-primary shadow-gold-glow',
    },
  };

  const currentConfig = variantConfigs[variant];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          role="alert"
          className={cn('relative flex items-start gap-3.5 rounded-lg border p-4', currentConfig.styles, className)}
          {...props}
        >
          <div className="shrink-0 pt-0.5">{currentConfig.icon}</div>
          <div className="flex-grow flex flex-col gap-1">
            {title && <h4 className="font-sans text-sm font-semibold tracking-tight">{title}</h4>}
            <div className="font-sans text-xs text-white-secondary leading-relaxed">{children}</div>
          </div>
          {isDismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              className="shrink-0 rounded p-1 text-text-muted hover:bg-white/10 hover:text-white-primary focus:outline-none"
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
