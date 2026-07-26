'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface GridWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 'auto';
  gap?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * MEERASH Responsive Grid Wrapper
 */
export function GridWrapper({ columns = 3, gap = 'md', className, children, ...props }: GridWrapperProps) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    auto: 'grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div className={cn('grid w-full', columnClasses[columns], gapClasses[gap], className)} {...props}>
      {children}
    </div>
  );
}
