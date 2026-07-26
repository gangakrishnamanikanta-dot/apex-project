'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AccordionItemProps {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

/**
 * MEERASH Styled Accordion Component
 */
export function Accordion({ items, defaultOpenId, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('flex flex-col gap-3 w-full', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={cn(
              'rounded-lg border border-border-primary bg-surface overflow-hidden transition-all duration-200',
              isOpen && 'border-gold-primary/50 shadow-lvl2'
            )}
          >
            <button
              type="button"
              disabled={item.disabled}
              onClick={() => !item.disabled && toggleItem(item.id)}
              className={cn(
                'flex w-full items-center justify-between px-5 py-4 font-sans text-left transition-colors',
                isOpen ? 'text-gold-primary font-semibold' : 'text-white-primary hover:text-gold-light',
                item.disabled && 'cursor-not-allowed opacity-50'
              )}
            >
              <span className="text-base font-medium">{item.title}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 shrink-0 transition-transform duration-200 text-text-muted',
                  isOpen && 'rotate-180 text-gold-primary'
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 font-sans text-sm text-white-secondary leading-relaxed border-t border-divider">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
