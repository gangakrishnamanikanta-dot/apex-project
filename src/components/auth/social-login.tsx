'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SocialLoginProps {
  className?: string;
}

export function SocialLogin({ className }: SocialLoginProps) {
  return (
    <div className={cn('flex flex-col gap-4 w-full', className)}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-divider"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-surface-base px-2 text-white-muted">Or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        <button className="flex items-center justify-center h-12 rounded-xl bg-surface-elevated border border-divider hover:border-gold-primary/50 transition-colors">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
        </button>
        <button className="flex items-center justify-center h-12 rounded-xl bg-surface-elevated border border-divider hover:border-gold-primary/50 transition-colors">
          <img src="https://www.svgrepo.com/show/475661/linkedin-color.svg" alt="LinkedIn" className="h-5 w-5" />
        </button>
        <button className="flex items-center justify-center h-12 rounded-xl bg-surface-elevated border border-divider hover:border-gold-primary/50 transition-colors">
          <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="GitHub" className="h-5 w-5 invert" />
        </button>
      </div>
    </div>
  );
}
