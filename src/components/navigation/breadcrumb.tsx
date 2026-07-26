'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Home } from 'lucide-react';
import type { BreadcrumbItem } from '@/types';
import Link from 'next/link';

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHomeIcon?: boolean;
  className?: string;
}

/**
 * MEERASH Breadcrumb Navigation Trail
 */
export function Breadcrumb({ items, showHomeIcon = true, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1.5 font-sans text-xs select-none', className)}>
      {showHomeIcon && (
        <>
          <Link
            href="/dashboard"
            className="flex items-center text-text-muted hover:text-gold-primary transition-colors"
            title="Home"
          >
            <Home className="h-3.5 w-3.5" />
          </Link>
          {items.length > 0 && <ChevronRight className="h-3.5 w-3.5 text-text-muted shrink-0" />}
        </>
      )}

      {items.map((item, index) => {
        const isLast = index === items.length - 1 || item.isCurrent;

        return (
          <React.Fragment key={index}>
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-white-secondary hover:text-gold-primary transition-colors font-medium truncate max-w-[120px] sm:max-w-none"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  'truncate max-w-[150px] sm:max-w-none',
                  isLast ? 'text-gold-primary font-bold' : 'text-white-secondary font-medium'
                )}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight className="h-3.5 w-3.5 text-text-muted shrink-0" />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
