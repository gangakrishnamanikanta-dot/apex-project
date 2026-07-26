'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * MEERASH Styled Dropdown Select Component
 */
export function Dropdown({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  error,
  disabled = false,
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={cn('relative flex w-full flex-col gap-1.5', className)}>
      {label && (
        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-white-secondary">
          {label}
        </label>
      )}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={cn(
          'flex w-full items-center justify-between rounded-md bg-bg-primary px-3.5 py-2.5 font-sans text-sm text-left transition-all duration-200',
          'border border-border-primary',
          'focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary',
          disabled && 'cursor-not-allowed opacity-50 bg-surface-muted',
          error && 'border-error',
          isOpen && 'border-gold-primary ring-1 ring-gold-primary'
        )}
      >
        <span className={selectedOption ? 'text-white-primary' : 'text-text-muted'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={cn('h-4 w-4 text-text-muted transition-transform duration-200', isOpen && 'rotate-180 text-gold-primary')} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-y-auto rounded-md border border-border-primary bg-surface shadow-lvl3"
          >
            <div className="p-1">
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    disabled={option.disabled}
                    onClick={() => {
                      if (!option.disabled) {
                        onChange(option.value);
                        setIsOpen(false);
                      }
                    }}
                    className={cn(
                      'flex w-full items-center justify-between rounded px-3 py-2 font-sans text-sm text-left transition-colors',
                      isSelected ? 'bg-gold-primary/15 text-gold-primary font-medium' : 'text-white-secondary hover:bg-surface-elevated hover:text-white-primary',
                      option.disabled && 'cursor-not-allowed opacity-40'
                    )}
                  >
                    <span>{option.label}</span>
                    {isSelected && <Check className="h-4 w-4 text-gold-primary" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {error && <span className="font-sans text-xs font-medium text-error">{error}</span>}
    </div>
  );
}
