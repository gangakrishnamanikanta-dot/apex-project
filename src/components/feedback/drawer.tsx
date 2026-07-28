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
    left: 'inset-y-0 left-0 w-80 sm:w-96 max-w-[85vw] border-r',
    right: 'inset-y-0 right-0 w-80 sm:w-96 max-w-[85vw] border-l',
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer z-40"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-0 pointer-events-none flex justify-end z-50">
            <motion.div
              variants={slideVariants[side]}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                'pointer-events-auto relative z-50 flex h-full flex-col bg-bg-secondary border-border-primary shadow-lvl3 overflow-hidden',
                sideClasses[side],
                className
              )}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border-primary/80 bg-bg-primary/95 backdrop-blur-md shrink-0">
                {title ? (
                  <h3 className="font-sans text-lg font-bold text-white-primary tracking-tight">{title}</h3>
                ) : (
                  <div />
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full p-2 text-white-secondary hover:bg-surface-elevated hover:text-white-primary focus:outline-none transition-colors"
                  aria-label="Close drawer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-grow overflow-y-auto p-6 font-sans text-sm text-white-primary">
                {children}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
