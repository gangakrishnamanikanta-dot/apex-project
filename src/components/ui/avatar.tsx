'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { User, Building2 } from 'lucide-react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isCompany?: boolean;
  status?: 'online' | 'offline' | 'busy' | 'away';
  hasGoldRing?: boolean;
}

/**
 * MEERASH Production-Ready Avatar Component
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, name, size = 'md', isCompany = false, status, hasGoldRing = false, ...props }, ref) => {
    const [imageError, setImageError] = useState(false);

    const sizeClasses = {
      xs: 'h-6 w-6 text-[10px]',
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-12 w-12 text-base',
      xl: 'h-16 w-16 text-lg',
    };

    const statusSizeClasses = {
      xs: 'h-1.5 w-1.5',
      sm: 'h-2 w-2',
      md: 'h-2.5 w-2.5',
      lg: 'h-3 w-3',
      xl: 'h-3.5 w-3.5',
    };

    const statusColorClasses = {
      online: 'bg-success',
      offline: 'bg-text-muted',
      busy: 'bg-error',
      away: 'bg-warning',
    };

    const getInitials = (str?: string) => {
      if (!str) return '';
      return str
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
    };

    const initials = getInitials(name || alt);

    return (
      <div ref={ref} className="relative inline-flex shrink-0 select-none" {...props}>
        <div
          className={cn(
            'flex items-center justify-center overflow-hidden font-sans font-semibold text-white-primary bg-surface-elevated',
            isCompany ? 'rounded-lg' : 'rounded-full',
            hasGoldRing && 'ring-2 ring-gold-primary ring-offset-2 ring-offset-bg-primary shadow-gold-glow',
            sizeClasses[size],
            className
          )}
        >
          {src && !imageError ? (
            <img
              src={src}
              alt={alt || name || 'Avatar'}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover"
            />
          ) : initials ? (
            <span className="text-gold-primary">{initials}</span>
          ) : isCompany ? (
            <Building2 className="h-1/2 w-1/2 text-text-muted" />
          ) : (
            <User className="h-1/2 w-1/2 text-text-muted" />
          )}
        </div>
        {status && (
          <span
            className={cn(
              'absolute bottom-0 right-0 block rounded-full ring-2 ring-bg-primary',
              statusColorClasses[status],
              statusSizeClasses[size]
            )}
            aria-label={`Status: ${status}`}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
