'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { SearchInput } from '@/components/forms/search-input';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import type { UserProfile } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

export interface TopNavProps {
  onToggleMobileSidebar?: () => void;
  user?: UserProfile;
  unreadNotificationsCount?: number;
  className?: string;
}

/**
 * MEERASH Enterprise Top Navigation Bar
 */
export function TopNav({
  onToggleMobileSidebar,
  user = {
    name: 'Alexander Wright',
    email: 'a.wright@meerash-enterprise.com',
    role: 'Employer',
    isVerified: true,
    walletBalance: 124500,
  },
  unreadNotificationsCount = 5,
  className,
}: TopNavProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border-primary bg-bg-primary/90 px-6 backdrop-blur-md select-none',
        className
      )}
    >
      {/* Left Area: Mobile Menu Toggle & Search */}
      <div className="flex items-center gap-4 flex-grow max-w-md">
        {onToggleMobileSidebar && (
          <button
            type="button"
            onClick={onToggleMobileSidebar}
            className="flex lg:hidden rounded-lg p-2 text-text-muted hover:bg-surface hover:text-white-primary focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Icons.Menu className="h-6 w-6" />
          </button>
        )}

        <div className="hidden sm:flex w-full relative">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search enterprise jobs, contractors, contracts... (Ctrl + K)"
            size="sm"
          />
        </div>
      </div>

      {/* Right Area: Actions, Wallet, Notifications, User Profile */}
      <div className="flex items-center gap-4">
        {/* Wallet Pill */}
        {user.walletBalance !== undefined && (
          <div className="hidden md:flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 border border-gold-primary/30 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
            <Icons.Wallet className="h-4 w-4 text-gold-primary" />
            <span className="font-sans text-xs font-bold text-white-primary">
              ${user.walletBalance.toLocaleString()}
            </span>
            <Badge variant="gold" size="sm">Corporate</Badge>
          </div>
        )}

        {/* Notifications Bell */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-white-secondary hover:bg-surface-elevated hover:text-white-primary border border-border-primary transition-colors focus:outline-none"
            aria-label="Notifications"
          >
            <Icons.Bell className="h-5 w-5" />
            {unreadNotificationsCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-primary font-sans text-[10px] font-bold text-bg-primary shadow-gold-glow animate-pulse">
                {unreadNotificationsCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown Popover */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-80 rounded-xl border border-border-primary bg-surface p-4 shadow-lvl4 z-50"
              >
                <div className="flex items-center justify-between pb-3 border-b border-divider mb-3">
                  <h4 className="font-sans text-sm font-bold text-white-primary">Notifications</h4>
                  <span className="font-sans text-xs text-gold-primary cursor-pointer hover:underline">Mark all read</span>
                </div>
                <div className="flex flex-col gap-2.5 max-h-64 overflow-y-auto pr-1 font-sans text-xs text-white-secondary">
                  <div className="p-2.5 rounded-lg bg-surface-elevated/70 border-l-2 border-gold-primary">
                    <strong className="text-white-primary block">New Enterprise Application</strong>
                    Premium Systems applied for Lead Quantum Architect.
                    <span className="block text-[10px] text-text-muted mt-1">2 minutes ago</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-elevated/40">
                    <strong className="text-white-primary block">Escrow Settled</strong>
                    $45,000 released to contractor account ending in 8842.
                    <span className="block text-[10px] text-text-muted mt-1">1 hour ago</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Profile Dropdown Menu */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2.5 rounded-lg p-1.5 hover:bg-surface transition-colors focus:outline-none"
            aria-label="User menu"
          >
            <Avatar src={user.avatarUrl} name={user.name} size="md" status="online" hasGoldRing={user.isVerified} />
            <div className="hidden xl:flex flex-col text-left">
              <span className="font-sans text-xs font-bold text-white-primary leading-tight">{user.name}</span>
              <span className="font-sans text-[11px] text-gold-primary font-medium">{user.role}</span>
            </div>
            <Icons.ChevronDown className="hidden xl:block h-4 w-4 text-text-muted" />
          </button>

          {/* Profile Dropdown Menu */}
          <AnimatePresence>
            {showProfileMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-64 rounded-xl border border-border-primary bg-surface p-2 shadow-lvl4 z-50 flex flex-col gap-1 font-sans text-xs"
              >
                <div className="p-3 border-b border-divider mb-1">
                  <strong className="text-sm font-bold text-white-primary block">{user.name}</strong>
                  <span className="text-text-muted block truncate">{user.email}</span>
                  <Badge variant="gold" size="sm" className="mt-2">VIP Premium Tier</Badge>
                </div>

                <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-white-secondary hover:bg-surface-elevated hover:text-white-primary transition-colors">
                  <Icons.Profile className="h-4 w-4 text-gold-primary" /> Executive Profile
                </button>
                <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-white-secondary hover:bg-surface-elevated hover:text-white-primary transition-colors">
                  <Icons.Wallet className="h-4 w-4 text-gold-primary" /> Corporate Wallet
                </button>
                <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-white-secondary hover:bg-surface-elevated hover:text-white-primary transition-colors">
                  <Icons.Settings className="h-4 w-4 text-gold-primary" /> Settings & Security
                </button>

                <div className="border-t border-divider my-1" />

                <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-error hover:bg-error/10 transition-colors font-semibold">
                  <Icons.Logout className="h-4 w-4" /> Log Out
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
