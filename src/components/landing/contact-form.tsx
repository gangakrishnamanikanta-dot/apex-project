'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/forms/input';
import { Textarea } from '@/components/forms/textarea';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/feedback/alert';
import { Send, CheckCircle2, Shield } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export interface ContactFormProps {
  className?: string;
}

/**
 * MEERASH Public Website Contact Form
 * UI-only simulation for support inquiries and Early Access questions.
 */
export function ContactForm({ className }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([{ name, email, subject, message }]);
        
      if (error) {
        console.error('Error inserting inquiry:', error);
        setSubmitError(error.message || JSON.stringify(error));
      } else {
        setIsSubmitted(true);
      }
    } catch (err: any) {
      console.error('Unexpected error:', err);
      setSubmitError(err.message || String(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn('rounded-2xl border border-border-primary bg-surface p-6 sm:p-8 md:p-10 shadow-lvl3', className)}>
      <div className="flex flex-col gap-2 pb-6 border-b border-divider mb-6">
        <h3 className="font-sans text-2xl font-bold text-white-primary tracking-tight">
          Send Us a Message
        </h3>
        <p className="font-sans text-sm text-white-secondary">
          Have a question about MEERASH, Early Access, or the platform? Our team is here to help.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-8 flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-primary/20 text-gold-primary border border-gold-primary shadow-gold-glow">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h4 className="font-sans text-xl font-bold text-white-primary">Message Sent</h4>
          <p className="font-sans text-sm text-white-secondary max-w-md">
            Thank you, <strong>{name || 'friend'}</strong>. Your message has been received. Our team will get back to you as soon as possible.
          </p>
          <Button
            variant="outline"
            size="md"
            onClick={() => {
              setIsSubmitted(false);
              setMessage('');
              setSubject('');
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
              label="Full Name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Input
            label="Subject"
            placeholder="What can we help you with?"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <Textarea
            label="Message"
            placeholder="Tell us more about your question or feedback..."
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <Alert variant="info" className="my-1">
            <span className="flex items-center gap-1.5 text-xs">
              <Shield className="h-3.5 w-3.5 text-gold-primary shrink-0" />
              We respect your privacy. Messages are used only to respond to your inquiry.
            </span>
          </Alert>

          {submitError && (
            <Alert variant="error" className="my-1 border-red-500/50 bg-red-500/10 text-red-500">
              <span className="text-sm font-semibold">Submission failed:</span> {submitError}
            </Alert>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            isLoading={isSubmitting}
            leftIcon={!isSubmitting ? <Send className="h-4 w-4" /> : undefined}
            className="shadow-gold-glow font-bold mt-2 text-base"
          >
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
}