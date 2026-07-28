import React from 'react';
import type { NavItem } from '@/types';

/**
 * Default Enterprise Navigation Tree for MEERASH
 */
export const DEFAULT_NAV_ITEMS: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    id: 'jobs',
    label: 'Jobs Marketplace',
    href: '/jobs',
    badge: 'NEW',
    badgeColor: 'gold',
  },
  {
    id: 'applications',
    label: 'Applications ATS',
    href: '/applications',
    badge: 3,
    badgeColor: 'info',
  },
  {
    id: 'tasks',
    label: 'Tasks & Bidding',
    href: '/tasks',
  },
  {
    id: 'resume',
    label: 'Profile Builder',
    href: '/resume',
    badge: 'AI',
    badgeColor: 'gold',
  },
  {
    id: 'wallet',
    label: 'Corporate Wallet',
    href: '/wallet',
  },
  {
    id: 'premium',
    label: 'VIP Enterprise',
    href: '/premium',
    badge: 'VIP',
    badgeColor: 'gold',
  },
  {
    id: 'messages',
    label: 'Messages',
    href: '/messages',
    badge: 5,
    badgeColor: 'warning',
  },
  {
    id: 'profile',
    label: 'Executive Profile',
    href: '/profile',
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings',
  },
  {
    id: 'support',
    label: 'Help & Support',
    href: '/support',
  },
];
