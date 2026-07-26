'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface PageWrapperProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
}

/**
 * MEERASH Animated Page Wrapper
 */
export const PageWrapper = React.forwardRef<HTMLDivElement, PageWrapperProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={cn('flex flex-col flex-grow w-full py-6 md:py-8', className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

PageWrapper.displayName = 'PageWrapper';
