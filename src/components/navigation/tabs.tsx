'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  variant?: 'underline' | 'pills';
  className?: string;
}

/**
 * MEERASH Animated Tabs Navigation
 */
export function Tabs({ items, activeId, onChange, variant = 'underline', className }: TabsProps) {
  if (variant === 'pills') {
    return (
      <div className={cn('inline-flex items-center rounded-lg bg-surface p-1 border border-border-primary select-none', className)}>
        {items.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              disabled={tab.disabled}
              onClick={() => !tab.disabled && onChange(tab.id)}
              className={cn(
                'relative flex items-center gap-2 rounded-md px-4 py-2 font-sans text-xs font-semibold transition-colors duration-150',
                isActive ? 'text-white-primary font-bold' : 'text-white-secondary hover:text-white-primary',
                tab.disabled && 'cursor-not-allowed opacity-40'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-md bg-surface-elevated border border-gold-primary/40 shadow-lvl1 -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              {tab.icon && <span className="shrink-0">{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span className={cn('rounded px-1.5 py-0.5 text-[10px]', isActive ? 'bg-gold-primary/20 text-gold-primary' : 'bg-bg-primary text-text-muted')}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-6 border-b border-divider select-none', className)}>
      {items.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onChange(tab.id)}
            className={cn(
              'relative flex items-center gap-2 pb-3 pt-1 font-sans text-sm font-semibold transition-colors duration-150',
              isActive ? 'text-gold-primary font-bold' : 'text-white-secondary hover:text-white-primary',
              tab.disabled && 'cursor-not-allowed opacity-40'
            )}
          >
            {tab.icon && <span className="shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span className={cn('rounded-full px-2 py-0.5 text-[10px]', isActive ? 'bg-gold-primary/20 text-gold-primary' : 'bg-surface text-text-muted')}>
                {tab.badge}
              </span>
            )}

            {isActive && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-primary shadow-gold-glow"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
