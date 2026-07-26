'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './base-card';
import { Bell, Briefcase, DollarSign, Sparkles, Clock } from 'lucide-react';

export type NotificationType = 'job' | 'wallet' | 'ai' | 'system';

export interface NotificationCardProps {
  id: string;
  type?: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  isUnread?: boolean;
  onRead?: () => void;
  className?: string;
}

/**
 * MEERASH Enterprise Notification Card
 */
export function NotificationCard({
  type = 'system',
  title,
  message,
  timestamp,
  isUnread = false,
  onRead,
  className,
}: NotificationCardProps) {
  const typeIcons = {
    job: <Briefcase className="h-4 w-4 text-info" />,
    wallet: <DollarSign className="h-4 w-4 text-success" />,
    ai: <Sparkles className="h-4 w-4 text-gold-primary" />,
    system: <Bell className="h-4 w-4 text-warning" />,
  };

  return (
    <Card
      isHoverable
      onClick={onRead}
      className={cn(
        'flex items-start gap-3.5 p-4 transition-colors',
        isUnread ? 'bg-surface-elevated/70 border-gold-primary/40' : 'bg-surface opacity-85',
        className
      )}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bg-primary border border-border-primary">
        {typeIcons[type]}
      </div>

      <div className="flex flex-grow flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className={cn('font-sans text-sm tracking-tight', isUnread ? 'font-bold text-white-primary' : 'font-medium text-white-secondary')}>
            {title}
          </h4>
          {isUnread && (
            <span className="h-2 w-2 rounded-full bg-gold-primary shrink-0 animate-pulse" aria-label="Unread notification" />
          )}
        </div>
        <p className="font-sans text-xs text-white-secondary leading-relaxed">{message}</p>
        <span className="mt-1 flex items-center gap-1 font-sans text-[11px] text-text-muted">
          <Clock className="h-3 w-3" />
          {timestamp}
        </span>
      </div>
    </Card>
  );
}
