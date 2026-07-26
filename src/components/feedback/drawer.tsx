'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  side?: 'left' | 'right' | 'bottom';
  children: React.ReactNode;
  className?: string;
}

/**
 * MEERASH Slide-Over Drawer Component
 */
export function Drawer({ isOpen, onClose, title, side = 'right', children, className }: DrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const slideVariants = {
    left: { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
    right: { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } },
    bottom: { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } },
  };

  const sideClasses = {
    left: 'inset-y-0 left-0 w-80 md:w-96 border-r',
    right: 'inset-y-0 right-0 w-80 md:w-96 border-l',
    bottom: 'inset-x-0 bottom-0 max-h-[80vh] border-t rounded-t-xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-bg-primary/80 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-0 pointer-events-none flex">
            <motion.div
              variants={slideVariants[side]}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                'pointer-events-auto absolute z-10 flex flex-col bg-surface border-border-primary shadow-lvl4 overflow-hidden',
                sideClasses[side],
                className
              )}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-divider">
                {title ? (
                  <h3 className="font-sans text-lg font-bold text-white-primary tracking-tight">{title}</h3>
                ) : (
                  <div />
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full p-1.5 text-text-muted hover:bg-surface-elevated hover:text-white-primary focus:outline-none"
                  aria-label="Close drawer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-grow overflow-y-auto p-5 font-sans text-sm text-white-primary">
                {children}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
