'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface PasswordStrengthProps {
  password?: string;
  className?: string;
}

export function PasswordStrength({ password = '', className }: PasswordStrengthProps) {
  const requirements = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'Contains a number', met: /\d/.test(password) },
    { label: 'Contains uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'Contains special character', met: /[^A-Za-z0-9]/.test(password) },
  ];

  const score = requirements.filter(r => r.met).length;
  
  const getStrengthLabel = () => {
    if (password.length === 0) return 'None';
    if (score <= 1) return 'Weak';
    if (score <= 3) return 'Medium';
    return 'Strong';
  };
  
  const getStrengthColor = () => {
    if (password.length === 0) return 'bg-divider';
    if (score <= 1) return 'bg-error text-error';
    if (score <= 3) return 'bg-gold-primary text-gold-primary';
    return 'bg-success text-success';
  };

  const strengthColorClass = getStrengthColor();

  return (
    <div className={cn('flex flex-col gap-3 w-full', className)}>
      <div className="flex items-center justify-between text-xs font-semibold">
        <span className="text-white-secondary">Password Strength:</span>
        <span className={strengthColorClass.split(' ')[1] || 'text-white-secondary'}>
          {getStrengthLabel()}
        </span>
      </div>
      
      <div className="flex gap-1 h-1.5 w-full">
        {[1, 2, 3, 4].map((level) => (
          <div 
            key={level} 
            className={cn(
              'flex-1 rounded-full transition-all duration-300',
              password.length > 0 && score >= level ? strengthColorClass.split(' ')[0] : 'bg-divider/50'
            )} 
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 mt-1">
        {requirements.map((req, i) => (
          <div key={i} className="flex items-center gap-1.5 text-xs text-white-secondary">
            {req.met ? (
              <Check className="h-3 w-3 text-success shrink-0" />
            ) : (
              <X className="h-3 w-3 text-white-muted shrink-0" />
            )}
            <span className={req.met ? 'text-white-primary' : ''}>{req.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
