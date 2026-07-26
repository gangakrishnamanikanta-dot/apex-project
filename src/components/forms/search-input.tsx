'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * MEERASH Search Input Component with clear button and hero size support.
 */
export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, value, onChange, onClear, placeholder = 'Search enterprise opportunities...', size = 'md', ...props }, ref) => {
    const handleClear = () => {
      onChange('');
      onClear?.();
    };

    const sizeClasses = {
      sm: 'py-1.5 pl-9 pr-8 text-xs',
      md: 'py-2.5 pl-10 pr-9 text-sm',
      lg: 'py-3.5 pl-12 pr-10 text-base rounded-lg',
    };

    const iconSizeClasses = {
      sm: 'left-3 h-3.5 w-3.5',
      md: 'left-3.5 h-4 w-4',
      lg: 'left-4 h-5 w-5',
    };

    return (
      <div className="relative flex w-full items-center">
        <Search className={cn('pointer-events-none absolute text-text-muted', iconSizeClasses[size])} />
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'w-full rounded-md bg-bg-primary font-sans text-white-primary placeholder:text-text-muted',
            'border border-border-primary transition-all duration-200',
            'focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary focus:shadow-gold-glow',
            sizeClasses[size],
            className
          )}
          {...props}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 flex items-center justify-center rounded-full p-1 text-text-muted hover:bg-surface-elevated hover:text-white-primary focus:outline-none"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
