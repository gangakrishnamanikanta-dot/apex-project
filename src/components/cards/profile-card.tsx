'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './base-card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ProgressBar } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Star, Edit, MapPin } from 'lucide-react';

export interface ProfileCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
  location?: string;
  rating?: number;
  reviewsCount?: number;
  completionPercentage?: number;
  isVerified?: boolean;
  skills?: string[];
  onEdit?: () => void;
  className?: string;
}

/**
 * MEERASH Executive Profile Card
 */
export function ProfileCard({
  name,
  role,
  avatarUrl,
  location = 'Global Enterprise Remote',
  rating = 4.98,
  reviewsCount = 42,
  completionPercentage = 92,
  isVerified = true,
  skills = ['Enterprise Architecture', 'AI Sourcing', 'Smart Contracts', 'TypeScript'],
  onEdit,
  className,
}: ProfileCardProps) {
  return (
    <Card isHoverable className={cn('flex flex-col gap-5 p-6', className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar src={avatarUrl} name={name} size="xl" status="online" hasGoldRing={isVerified} />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <h3 className="font-sans text-lg font-bold text-white-primary tracking-tight">{name}</h3>
              {isVerified && <ShieldCheck className="h-4 w-4 text-gold-primary shrink-0" />}
            </div>
            <span className="font-sans text-sm text-gold-primary font-medium">{role}</span>
            <span className="flex items-center gap-1 mt-1 font-sans text-xs text-text-muted">
              <MapPin className="h-3.5 w-3.5" />
              {location}
            </span>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onEdit} aria-label="Edit profile">
          <Edit className="h-4 w-4" />
        </Button>
      </div>

      {/* Rating Bar */}
      <div className="flex items-center justify-between rounded-lg bg-bg-primary px-3.5 py-2.5 border border-border-primary">
        <div className="flex items-center gap-1.5">
          <Star className="h-4 w-4 fill-gold-primary text-gold-primary" />
          <span className="font-sans text-sm font-bold text-white-primary">{rating}</span>
          <span className="font-sans text-xs text-text-muted">({reviewsCount} Enterprise Reviews)</span>
        </div>
        <Badge variant="gold" size="sm">Top 1% Talent</Badge>
      </div>

      {/* Completion Progress */}
      {completionPercentage !== undefined && (
        <div className="flex flex-col gap-2">
          <ProgressBar
            value={completionPercentage}
            label="Executive Profile Strength"
            showValue
            variant="gold"
          />
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="flex flex-col gap-2 pt-2 border-t border-divider">
          <span className="font-sans text-xs font-semibold uppercase tracking-wider text-white-secondary">
            Verified Competencies
          </span>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <Badge key={skill} variant="neutral" size="sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
