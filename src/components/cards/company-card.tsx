'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './base-card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Briefcase, Users, MapPin } from 'lucide-react';

export interface CompanyCardProps {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  location: string;
  employeesCount: string;
  activeJobsCount: number;
  isVerified?: boolean;
  description?: string;
  className?: string;
}

/**
 * MEERASH Verified Enterprise Company Card
 */
export function CompanyCard({
  name,
  logo,
  industry,
  location,
  employeesCount,
  activeJobsCount,
  isVerified = true,
  description,
  className,
}: CompanyCardProps) {
  return (
    <Card isHoverable className={cn('flex flex-col justify-between gap-4', className)}>
      <div className="flex items-start gap-4">
        <Avatar src={logo} name={name} size="lg" isCompany hasGoldRing={isVerified} />
        <div className="flex flex-grow flex-col">
          <div className="flex items-center gap-1.5">
            <h3 className="font-sans text-base font-bold text-white-primary tracking-tight">{name}</h3>
            {isVerified && <ShieldCheck className="h-4 w-4 text-gold-primary shrink-0" />}
          </div>
          <span className="font-sans text-xs text-gold-primary font-medium">{industry}</span>
          <div className="flex items-center gap-3 mt-2 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {employeesCount}
            </span>
          </div>
        </div>
      </div>

      {description && (
        <p className="font-sans text-xs text-white-secondary line-clamp-2 leading-relaxed">
          {description}
        </p>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-divider">
        <span className="flex items-center gap-1 font-sans text-xs font-semibold text-white-primary">
          <Briefcase className="h-3.5 w-3.5 text-gold-primary" />
          {activeJobsCount} Active {activeJobsCount === 1 ? 'Opportunity' : 'Opportunities'}
        </span>
        <Badge variant="gold" size="sm">View Profile</Badge>
      </div>
    </Card>
  );
}
