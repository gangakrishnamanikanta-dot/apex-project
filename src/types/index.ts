import React from 'react';

/**
 * Common Base Component Props
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Navigation Item Types
 */
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string | number;
  badgeColor?: 'gold' | 'success' | 'warning' | 'error' | 'info';
  children?: NavItem[];
}

/**
 * Breadcrumb Item
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

/**
 * User Profile Type for Navigation & Dropdowns
 */
export interface UserProfile {
  name: string;
  email: string;
  avatarUrl?: string;
  role: 'Employer' | 'Contractor' | 'Admin';
  isVerified?: boolean;
  walletBalance?: number;
}
