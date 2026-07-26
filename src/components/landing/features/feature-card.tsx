'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/cards/base-card';
import { Icons } from '@/components/icons';
import { Sparkles } from 'lucide-react';

export interface FeatureCardProps {
  iconName: string;
  title: string;
  description: string;
  className?: string;
}

/**
 * MEERASH Public Feature Card Component
 */
export function FeatureCard({ iconName, title, description, className }: FeatureCardProps) {
  const IconComponent = Icons[iconName as keyof typeof Icons] || Icons.Dashboard;

  return (
    <Card
      isHoverable
      hasGoldBorder
      className={cn('flex flex-col justify-between gap-5 p-6 md:p-8 transition-all duration-300 group', className)}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated text-gold-primary border border-border-primary group-hover:bg-gold-primary group-hover:text-bg-primary transition-all duration-300 shadow-gold-glow">
          <IconComponent className="h-6 w-6" />
        </div>
        <Sparkles className="h-4 w-4 text-text-muted group-hover:text-gold-primary transition-colors duration-300" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-sans text-xl font-bold text-white-primary tracking-tight group-hover:text-gold-light transition-colors">
          {title}
        </h3>
        <p className="font-sans text-sm text-white-secondary leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-2 border-t border-divider flex items-center justify-between">
        <span className="font-sans text-xs font-semibold text-gold-primary uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
          Explore Capability →
        </span>
      </div>
    </Card>
  );
}
