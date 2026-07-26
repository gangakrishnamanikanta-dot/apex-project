'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './base-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, DollarSign, Clock, Building2, Bookmark, ExternalLink } from 'lucide-react';

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedAt: string;
  tags: string[];
  isFeatured?: boolean;
  isBookmarked?: boolean;
  onApply?: () => void;
  onBookmark?: () => void;
  className?: string;
}

/**
 * MEERASH Enterprise Job Marketplace Card
 */
export function JobCard({
  title,
  company,
  location,
  salary,
  type,
  postedAt,
  tags,
  isFeatured = false,
  isBookmarked = false,
  onApply,
  onBookmark,
  className,
}: JobCardProps) {
  return (
    <Card
      isHoverable
      hasGoldBorder={isFeatured}
      className={cn('relative flex flex-col justify-between gap-4 overflow-hidden', className)}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-gold-primary to-gold-hover px-3 py-1 rounded-bl-lg font-sans text-[10px] font-bold text-bg-primary uppercase tracking-wider shadow-gold-glow">
          Featured Enterprise
        </div>
      )}

      {/* Header Info */}
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-gold-primary">
              <Building2 className="h-3.5 w-3.5" />
              {company}
            </span>
            <h3 className="mt-1 font-sans text-lg font-bold text-white-primary hover:text-gold-light transition-colors">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onBookmark?.();
            }}
            className={cn(
              'rounded-full p-2 transition-colors',
              isBookmarked ? 'bg-gold-primary/20 text-gold-primary' : 'bg-surface-elevated text-text-muted hover:text-white-primary'
            )}
            aria-label="Bookmark job"
          >
            <Bookmark className={cn('h-4 w-4', isBookmarked && 'fill-gold-primary')} />
          </button>
        </div>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-white-secondary">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-text-muted" />
            {location}
          </span>
          <span className="flex items-center gap-1 font-semibold text-white-primary">
            <DollarSign className="h-3.5 w-3.5 text-gold-primary" />
            {salary}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-text-muted" />
            {postedAt}
          </span>
          <Badge variant="outline" size="sm">{type}</Badge>
        </div>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-divider">
        {tags.map((tag) => (
          <Badge key={tag} variant="neutral" size="sm">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-2">
        <span className="font-sans text-xs text-text-muted">Verified Enterprise Employer</span>
        <Button
          variant={isFeatured ? 'primary' : 'secondary'}
          size="sm"
          rightIcon={<ExternalLink className="h-3.5 w-3.5" />}
          onClick={(e) => {
            e.stopPropagation();
            onApply?.();
          }}
        >
          Apply Now
        </Button>
      </div>
    </Card>
  );
}
