'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Breadcrumb, type BreadcrumbProps } from '@/components/navigation/breadcrumb';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbProps['items'];
  actions?: React.ReactNode;
}

/**
 * MEERASH Page Header Component
 */
export function PageHeader({ title, description, breadcrumbs, actions, className, ...props }: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-4 pb-6 mb-8 border-b border-divider', className)} {...props}>
      {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white-primary">
            {title}
          </h1>
          {description && (
            <p className="font-sans text-sm text-white-secondary max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
      </div>
    </div>
  );
}
