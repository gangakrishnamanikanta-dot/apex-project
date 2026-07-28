'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface CompletionRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function CompletionRing({ percentage, size = 120, strokeWidth = 8, className }: CompletionRingProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    // Animate to target percentage on mount
    const timeout = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 300);
    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div 
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      {/* Background Ring */}
      <svg className="transform -rotate-90 w-full h-full">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-divider"
        />
        {/* Progress Ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="text-gold-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-1000 ease-out"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
          }}
        />
      </svg>
      
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-3xl font-extrabold text-white-primary">{Math.round(animatedPercentage)}%</span>
      </div>
    </div>
  );
}
