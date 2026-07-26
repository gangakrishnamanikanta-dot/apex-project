'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Sidebar } from '@/components/navigation/sidebar';
import { TopNav } from '@/components/navigation/top-nav';
import { Footer } from '@/components/navigation/footer';
import { Drawer } from '@/components/feedback/drawer';
import { useSidebar } from '@/hooks/use-sidebar';
import { Container } from './container';
import type { NavItem, UserProfile } from '@/types';
import { DEFAULT_NAV_ITEMS } from '@/constants/navigation';

export interface MainContentAreaProps {
  children: React.ReactNode;
  navItems?: NavItem[];
  user?: UserProfile;
  showSidebar?: boolean;
  showFooter?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

/**
 * MEERASH Master Layout Foundation: Main Content Area
 * Orchestrates Desktop Sidebar, Top Navigation, Mobile Drawer, and Global Footer cleanly.
 */
export function MainContentArea({
  children,
  navItems = DEFAULT_NAV_ITEMS,
  user,
  showSidebar = true,
  showFooter = true,
  containerSize = 'xl',
  className,
}: MainContentAreaProps) {
  const { isCollapsed, isMobileOpen, toggleCollapse, toggleMobile, closeMobile } = useSidebar(false);

  return (
    <div className="min-h-screen w-full flex flex-col bg-bg-primary text-white-primary font-sans antialiased selection:bg-gold-primary selection:text-bg-primary">
      <div className="flex flex-grow w-full">
        {/* Desktop Sidebar */}
        {showSidebar && (
          <div className="hidden lg:flex shrink-0">
            <Sidebar
              items={navItems}
              isCollapsed={isCollapsed}
              onToggleCollapse={toggleCollapse}
              className="sticky top-0 h-screen"
            />
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        <Drawer
          isOpen={isMobileOpen}
          onClose={closeMobile}
          title="MEERASH Menu"
          side="left"
          className="lg:hidden p-0 w-72"
        >
          <Sidebar items={navItems} isCollapsed={false} onCloseMobile={closeMobile} className="h-full border-none w-full" />
        </Drawer>

        {/* Main Content Column */}
        <div className="flex flex-col flex-grow min-w-0 overflow-x-hidden">
          {/* Top Navigation */}
          <TopNav onToggleMobileSidebar={toggleMobile} user={user} />

          {/* Main Workspace Area */}
          <main className={cn('flex flex-col flex-grow w-full py-6 md:py-8', className)}>
            <Container size={containerSize}>{children}</Container>
          </main>

          {/* Footer */}
          {showFooter && <Footer />}
        </div>
      </div>
    </div>
  );
}
