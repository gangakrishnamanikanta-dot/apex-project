'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/forms/input';
import { Textarea } from '@/components/forms/textarea';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/feedback/alert';
import { Send, CheckCircle2, Shield } from 'lucide-react';

export interface ContactFormProps {
  className?: string;
}

/**
 * MEERASH Public Website Contact & Concierge Form
 * UI-only simulation for enterprise inquiries and waitlist registration.
 */
export function ContactForm({ className }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay for UI-only experience
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className={cn('rounded-2xl border border-border-primary bg-surface p-6 sm:p-8 md:p-10 shadow-lvl3', className)}>
      <div className="flex flex-col gap-2 pb-6 border-b border-divider mb-6">
        <h3 className="font-sans text-2xl font-bold text-white-primary tracking-tight">
          Enterprise Inquiry & Concierge
        </h3>
        <p className="font-sans text-sm text-white-secondary">
          Connect with our Vice President account managers or request custom sovereign escrow integration.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-8 flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-primary/20 text-gold-primary border border-gold-primary shadow-gold-glow">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h4 className="font-sans text-xl font-bold text-white-primary">Inquiry Secured</h4>
          <p className="font-sans text-sm text-white-secondary max-w-md">
            Thank you, <strong>{name || 'Sovereign Executive'}</strong>. Your message has been encrypted and routed to our Zurich Concierge desk. Expect a verified reply within 2 hours.
          </p>
          <Button
            variant="outline"
            size="md"
            onClick={() => {
              setIsSubmitted(false);
              setMessage('');
            }}
            className="mt-2"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label="Full Name / Executive Title"
              placeholder="e.g. Alexander Wright, CTO"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label="Corporate Email"
              type="email"
              placeholder="a.wright@sovereign-org.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label="Organization / Hedge Fund"
              placeholder="e.g. Sovereign Quantum AG"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
            />
            <Input
              label="Inquiry Subject"
              placeholder="e.g. Custom Escrow Integration / Waitlist"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <Textarea
            label="Message / Architectural Scope"
            placeholder="Describe your engineering team requirements or contract timeline..."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <Alert variant="info" className="my-1">
            <span className="flex items-center gap-1.5 text-xs">
              <Shield className="h-3.5 w-3.5 text-gold-primary shrink-0" />
              All communications are protected under institutional NDA and 256-bit encryption.
            </span>
          </Alert>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            isLoading={isSubmitting}
            leftIcon={!isSubmitting ? <Send className="h-4 w-4" /> : undefined}
            className="shadow-gold-glow font-bold mt-2 text-base"
          >
            Transmit Secure Message
          </Button>
        </form>
      )}
    </div>
  );
}
