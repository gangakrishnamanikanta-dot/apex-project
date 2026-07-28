'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface StepperProps {
  steps: { id: string; label: string }[];
  currentStepIndex: number;
  className?: string;
}

export function Stepper({ steps, currentStepIndex, className }: StepperProps) {
  return (
    <div className={cn('w-full', className)}>
      {/* Progress Bar (Mobile mostly, but good for structural underpinning) */}
      <div className="relative flex items-center justify-between w-full mb-2">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-divider z-0" />
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-gold-primary z-0 transition-all duration-500 ease-in-out" 
          style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
        />
        
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isActive = index === currentStepIndex;
          
          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <div 
                className={cn(
                  'flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-bold transition-all duration-300',
                  isActive ? 'bg-surface-elevated border-gold-primary text-gold-primary shadow-gold-glow' :
                  isCompleted ? 'bg-gold-primary border-gold-primary text-black' :
                  'bg-surface-base border-divider text-white-muted'
                )}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : index + 1}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Labels (Desktop) */}
      <div className="hidden sm:flex items-center justify-between w-full px-2">
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isActive = index === currentStepIndex;
          
          return (
             <div 
                key={`${step.id}-label`} 
                className={cn(
                  'text-xs font-semibold mt-2 transition-colors duration-300 absolute text-center w-24 -ml-12',
                  isActive ? 'text-gold-primary' :
                  isCompleted ? 'text-white-primary' :
                  'text-white-muted'
                )}
                style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
              >
                {step.label}
              </div>
          );
        })}
      </div>
    </div>
  );
}
