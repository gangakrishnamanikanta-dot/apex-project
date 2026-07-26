'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, Clock, Circle } from 'lucide-react';

export interface TimelineItemProps {
  id: string;
  title: string;
  description?: string;
  timestamp?: string;
  status?: 'completed' | 'current' | 'pending';
  isLast?: boolean;
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineItemProps[];
}

/**
 * MEERASH Production-Ready Timeline Component
 */
export function Timeline({ items, className, ...props }: TimelineProps) {
  return (
    <div className={cn('relative flex flex-col gap-6', className)} {...props}>
      {items.map((item, index) => {
        const isCompleted = item.status === 'completed';
        const isCurrent = item.status === 'current';
        const isLast = index === items.length - 1 || item.isLast;

        return (
          <div key={item.id} className="relative flex items-start gap-4">
            {/* Vertical connector line */}
            {!isLast && (
              <div
                className={cn(
                  'absolute left-[11px] top-6 h-[calc(100%+8px)] w-[2px]',
                  isCompleted ? 'bg-gold-primary' : 'bg-border-primary'
                )}
              />
            )}

            {/* Status icon node */}
            <div className="relative z-10 flex shrink-0 items-center justify-center pt-0.5">
              {isCompleted && (
                <CheckCircle2 className="h-6 w-6 text-gold-primary filter drop-shadow-[0_0_6px_rgba(212,175,55,0.4)]" />
              )}
              {isCurrent && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-primary/20 ring-2 ring-gold-primary animate-pulse">
                  <Clock className="h-3.5 w-3.5 text-gold-primary" />
                </div>
              )}
              {!isCompleted && !isCurrent && (
                <Circle className="h-6 w-6 text-text-muted opacity-60" />
              )}
            </div>

            {/* Content box */}
            <div className="flex flex-grow flex-col pb-1">
              <div className="flex items-center justify-between gap-2">
                <h4
                  className={cn(
                    'font-sans text-sm font-semibold',
                    isCurrent ? 'text-gold-primary font-bold' : 'text-white-primary'
                  )}
                >
                  {item.title}
                </h4>
                {item.timestamp && (
                  <span className="font-sans text-xs text-text-muted">{item.timestamp}</span>
                )}
              </div>
              {item.description && (
                <p className="mt-1 font-sans text-xs text-white-secondary leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
