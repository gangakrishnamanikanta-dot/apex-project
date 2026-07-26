'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { MeerashLogo, Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import type { NavItem } from '@/types';
import { DEFAULT_NAV_ITEMS } from '@/constants/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export interface SidebarItemProps {
  item: NavItem;
  isCollapsed?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

/**
 * MEERASH Individual Sidebar Navigation Item
 */
export function SidebarItem({ item, isCollapsed = false, isActive = false, onClick }: SidebarItemProps) {
  const IconComponent = Icons[item.label.split(' ')[0] as keyof typeof Icons] || Icons.Dashboard;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      title={isCollapsed ? item.label : undefined}
      className={cn(
        'group flex items-center justify-between rounded-lg px-3.5 py-2.5 font-sans text-sm font-medium transition-all duration-200 select-none',
        isActive
          ? 'bg-gradient-to-r from-gold-primary/20 to-transparent text-gold-primary border-l-2 border-gold-primary shadow-[0_0_15px_rgba(212,175,55,0.1)]'
          : 'text-white-secondary hover:bg-surface-elevated hover:text-white-primary',
        isCollapsed && 'justify-center px-2'
      )}
    >
      <div className="flex items-center gap-3">
        <IconComponent
          className={cn(
            'h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110',
            isActive ? 'text-gold-primary' : 'text-text-muted group-hover:text-white-primary'
          )}
        />
        {!isCollapsed && <span className="truncate">{item.label}</span>}
      </div>

      {!isCollapsed && item.badge !== undefined && (
        <Badge
          variant={item.badgeColor || 'gold'}
          size="sm"
          className="ml-auto px-1.5 py-0.2 text-[10px]"
        >
          {item.badge}
        </Badge>
      )}
    </Link>
  );
}

export interface SidebarProps {
  items?: NavItem[];
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onCloseMobile?: () => void;
  className?: string;
}

/**
 * MEERASH Enterprise Desktop & Mobile Sidebar
 */
export function Sidebar({
  items = DEFAULT_NAV_ITEMS,
  isCollapsed = false,
  onToggleCollapse,
  onCloseMobile,
  className,
}: SidebarProps) {
  const pathname = usePathname() || '/dashboard';

  return (
    <aside
      className={cn(
        'relative flex flex-col justify-between border-r border-border-primary bg-bg-secondary transition-all duration-300 ease-in-out select-none',
        isCollapsed ? 'w-20' : 'w-64',
        className
      )}
    >
      {/* Top Branding Section */}
      <div className="flex flex-col gap-6 p-5">
        <div className={cn('flex items-center justify-between', isCollapsed && 'justify-center')}>
          <Link href="/dashboard" onClick={onCloseMobile} className="flex items-center">
            <MeerashLogo showText={!isCollapsed} />
          </Link>
          {!isCollapsed && onToggleCollapse && (
            <button
              type="button"
              onClick={onToggleCollapse}
              className="hidden lg:flex rounded-lg p-1.5 text-text-muted hover:bg-surface hover:text-white-primary transition-colors focus:outline-none"
              aria-label="Collapse sidebar"
            >
              <Icons.ChevronLeft className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Navigation List */}
        <nav className="flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-180px)] pr-1">
          {items.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <SidebarItem
                key={item.id}
                item={item}
                isCollapsed={isCollapsed}
                isActive={isActive}
                onClick={onCloseMobile}
              />
            );
          })}
        </nav>
      </div>

      {/* Bottom Footer Section / Logout */}
      <div className="p-4 border-t border-divider flex flex-col gap-2">
        {onToggleCollapse && isCollapsed && (
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden lg:flex w-full items-center justify-center rounded-lg p-2 text-text-muted hover:bg-surface hover:text-white-primary transition-colors"
            aria-label="Expand sidebar"
          >
            <Icons.ChevronRight className="h-5 w-5" />
          </button>
        )}
        <button
          type="button"
          className={cn(
            'flex w-full items-center gap-3 rounded-lg px-3.5 py-2.5 font-sans text-sm font-medium text-error hover:bg-error/10 transition-colors',
            isCollapsed && 'justify-center px-2'
          )}
        >
          <Icons.Logout className="h-5 w-5 shrink-0" />
          {!isCollapsed && <span>Log Out</span>}
        </button>
      </div>
    </aside>
  );
}
