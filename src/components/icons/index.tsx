'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  CheckSquare,
  Sparkles,
  Wallet,
  Crown,
  MessageSquare,
  User,
  Settings,
  HelpCircle,
  Bell,
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Info,
  ShieldCheck,
  Building2,
  Calendar,
  Clock,
  DollarSign,
  MapPin,
  ExternalLink,
  Plus,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  Filter,
  MoreVertical,
  LogOut,
  SlidersHorizontal,
  ArrowRight,
} from 'lucide-react';

export const Icons = {
  Dashboard: LayoutDashboard,
  Jobs: Briefcase,
  Applications: FileText,
  Tasks: CheckSquare,
  AI: Sparkles,
  Wallet: Wallet,
  Premium: Crown,
  Messages: MessageSquare,
  Profile: User,
  Settings: Settings,
  Support: HelpCircle,
  Bell: Bell,
  Search: Search,
  Menu: Menu,
  Close: X,
  ChevronRight: ChevronRight,
  ChevronLeft: ChevronLeft,
  ChevronDown: ChevronDown,
  ArrowUpRight: ArrowUpRight,
  Success: CheckCircle2,
  Warning: AlertTriangle,
  Error: XCircle,
  Info: Info,
  Verified: ShieldCheck,
  Company: Building2,
  Calendar: Calendar,
  Clock: Clock,
  Dollar: DollarSign,
  Location: MapPin,
  External: ExternalLink,
  Add: Plus,
  Delete: Trash2,
  Edit: Edit,
  Eye: Eye,
  EyeOff: EyeOff,
  Filter: Filter,
  More: MoreVertical,
  Logout: LogOut,
  Sliders: SlidersHorizontal,
  ArrowRight: ArrowRight,
};

/**
 * MEERASH Brand Logo Component
 */
export function MeerashLogo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      <img
        src="/logo.png"
        alt="MEERASH Logo"
        className="h-14 sm:h-16 md:h-20 w-auto object-contain shrink-0 filter drop-shadow-md"
      />
      {showText && (
        <span className="font-sans text-lg font-bold tracking-tight text-white-primary">
          MEERASH
        </span>
      )}
    </div>
  );
}
