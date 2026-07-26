'use client';

import React from 'react';
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
export function MeerashLogo({ className = 'h-8 w-auto', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-primary to-gold-hover shadow-gold-glow">
        <span className="font-sans text-xl font-bold tracking-tighter text-bg-primary">M</span>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-sans text-lg font-bold tracking-tight text-white-primary">MEERASH</span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-gold-primary">Enterprise</span>
        </div>
      )}
    </div>
  );
}
