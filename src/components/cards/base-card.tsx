'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  isHoverable?: boolean;
  isGlass?: boolean;
  hasGoldBorder?: boolean;
  children?: React.ReactNode;
}

/**
 * MEERASH Base Card Container
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, isHoverable = false, isGlass = false, hasGoldBorder = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={isHoverable ? { y: -3 } : undefined}
        transition={{ duration: 0.2 }}
        className={cn(
          'rounded-lg border bg-surface p-5 transition-all duration-200',
          isGlass ? 'bg-bg-secondary/80 backdrop-blur-md border-white/10' : 'border-border-primary',
          hasGoldBorder && 'border-gold-primary/50 shadow-gold-glow',
          isHoverable && 'cursor-pointer hover:border-gold-primary/60 hover:shadow-lvl4',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-1 pb-4 border-b border-divider', className)} {...props}>
    {children}
  </div>
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('font-sans text-lg font-semibold tracking-tight text-white-primary', className)} {...props}>
    {children}
  </h3>
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('font-sans text-sm text-white-secondary', className)} {...props}>
    {children}
  </p>
);
CardDescription.displayName = 'CardDescription';

export const CardContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('pt-4', className)} {...props}>
    {children}
  </div>
);
CardContent.displayName = 'CardContent';

export const CardFooter = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center justify-between pt-4 mt-4 border-t border-divider', className)} {...props}>
    {children}
  </div>
);
CardFooter.displayName = 'CardFooter';
