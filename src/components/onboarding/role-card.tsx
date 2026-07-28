'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

interface RoleCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

export function RoleCard({ id, title, description, icon, isSelected, onClick, className }: RoleCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative flex flex-col items-start p-6 rounded-2xl border text-left transition-all duration-300 w-full',
        isSelected 
          ? 'bg-gold-primary/5 border-gold-primary shadow-gold-glow scale-[1.02]' 
          : 'bg-surface-elevated border-divider hover:border-gold-primary/50 hover:bg-surface-elevated/80',
        className
      )}
    >
      {isSelected && (
        <div className="absolute top-4 right-4">
          <CheckCircle2 className="h-6 w-6 text-gold-primary animate-in fade-in zoom-in" />
        </div>
      )}
      
      <div className={cn(
        'p-3 rounded-xl mb-4 transition-colors',
        isSelected ? 'bg-gold-primary/20 text-gold-primary' : 'bg-surface-base text-white-secondary'
      )}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white-primary mb-2">{title}</h3>
      <p className="text-sm text-white-secondary leading-relaxed">{description}</p>
    </button>
  );
}
