'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './base-card';
import { Button } from '@/components/ui/button';
import { Wallet, ArrowUpRight, ArrowDownLeft, Sparkles } from 'lucide-react';

export interface WalletCardProps {
  balance: string;
  currency?: string;
  onDeposit?: () => void;
  onWithdraw?: () => void;
  className?: string;
}

/**
 * MEERASH Wallet Card
 */
export function WalletCard({
  balance,
  currency = 'USD',
  onDeposit,
  onWithdraw,
  className,
}: WalletCardProps) {
  return (
    <Card
      hasGoldBorder
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-surface via-surface-elevated to-bg-primary p-6 text-white-primary shadow-gold-glow',
        className
      )}
    >
      {/* Decorative background luxury gradient */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-primary/10 blur-2xl" />

      {/* Card Header */}
      <div className="flex items-center justify-between pb-4 border-b border-divider">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-primary/20 text-gold-primary ring-1 ring-gold-primary/40">
            <Wallet className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-primary">
              Wallet
            </span>
          </div>
        </div>
      </div>

      {/* Balance Display */}
      <div className="my-6 flex flex-col gap-1">
        <span className="font-sans text-xs uppercase tracking-wider text-white-secondary">Balance</span>
        <div className="flex items-baseline gap-2">
          <span className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-white-primary">{balance}</span>
          <span className="font-sans text-sm font-semibold text-gold-primary">{currency}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-divider">
        <Button
          variant="primary"
          size="sm"
          leftIcon={<ArrowDownLeft className="h-4 w-4" />}
          onClick={onDeposit}
        >
          Add Funds
        </Button>
        <Button
          variant="secondary"
          size="sm"
          leftIcon={<ArrowUpRight className="h-4 w-4 text-gold-primary" />}
          onClick={onWithdraw}
        >
          Withdraw
        </Button>
      </div>
    </Card>
  );
}
