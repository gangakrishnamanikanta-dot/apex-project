'use client';

import React, { useState } from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

type UserRole = 'job_seeker' | 'employer' | 'student' | 'freelancer';

const ROLES: { value: UserRole; label: string; description: string }[] = [
  { value: 'job_seeker', label: 'Job Seeker', description: 'Looking for full-time or part-time roles' },
  { value: 'employer', label: 'Employer', description: 'Posting jobs and finding talent' },
  { value: 'student', label: 'Student', description: 'Internships and entry-level opportunities' },
  { value: 'freelancer', label: 'Freelancer', description: 'Short-term tasks and gig work' },
];

export default function EarlyAccessPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !selectedRole) return;

    setIsSubmitting(true);

    // Simulate network delay for UI-only experience
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <PublicLayout>
      <div className="pt-24 pb-16">
        <SectionHeading
          badge="Early Access"
          title="Join the Early Access List"
          subtitle="Be the first to know when MEERASH launches. Enter your details and we will notify you as soon as the platform is live."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-2xl px-6 lg:px-12">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gold-primary/30 bg-surface-elevated p-8 sm:p-10 shadow-gold-glow"
              >
                {/* Name Field */}
                <div className="mb-6">
                  <label htmlFor="name" className="block font-sans text-sm font-bold text-white-primary mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-divider bg-surface px-4 py-3 font-sans text-sm text-white-primary placeholder:text-white-secondary/60 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/50 outline-none transition-all"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-6">
                  <label htmlFor="email" className="block font-sans text-sm font-bold text-white-primary mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-divider bg-surface px-4 py-3 font-sans text-sm text-white-primary placeholder:text-white-secondary/60 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/50 outline-none transition-all"
                  />
                </div>

                {/* Role Selection */}
                <div className="mb-8">
                  <label className="block font-sans text-sm font-bold text-white-primary mb-3">
                    I am a...
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ROLES.map((role) => (
                      <button
                        key={role.value}
                        type="button"
                        onClick={() => setSelectedRole(role.value)}
                        className={`relative rounded-xl border px-4 py-3.5 text-left transition-all cursor-pointer ${
                          selectedRole === role.value
                            ? 'border-gold-primary bg-gold-primary/10 shadow-gold-glow'
                            : 'border-divider bg-surface hover:border-gold-primary/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              selectedRole === role.value
                                ? 'border-gold-primary'
                                : 'border-white-secondary/40'
                            }`}
                          >
                            {selectedRole === role.value && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="h-2.5 w-2.5 rounded-full bg-gold-primary"
                              />
                            )}
                          </div>
                          <div>
                            <p className="font-sans text-sm font-bold text-white-primary">{role.label}</p>
                            <p className="font-sans text-xs text-white-secondary">{role.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={isSubmitting}
                  rightIcon={!isSubmitting ? <ChevronRight className="h-5 w-5" /> : undefined}
                  className="shadow-gold-glow font-bold text-base"
                  disabled={!name.trim() || !email.trim() || !selectedRole}
                >
                  Join Early Access
                </Button>

                <p className="font-sans text-xs text-white-secondary text-center mt-4">
                  No account needed. We will only email you with launch updates.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-2xl border border-gold-primary/30 bg-surface-elevated p-8 sm:p-12 text-center shadow-gold-glow"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-primary/20 text-gold-primary border border-gold-primary mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-white-primary mb-3">
                  You are on the list!
                </h3>
                <p className="font-sans text-sm text-white-secondary max-w-md mx-auto mb-8">
                  Thank you, <strong className="text-white-primary">{name}</strong>. We will notify <strong className="text-white-primary">{email}</strong> as soon as MEERASH launches. Watch your inbox for updates.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/">
                    <Button variant="outline" size="lg">
                      Back to Home
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button variant="primary" size="lg">
                      Explore Features
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Benefits */}
          {!isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-gold-primary mb-2">
                  <Sparkles className="h-4 w-4" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider">Early Access</span>
                </div>
                <p className="font-sans text-sm text-white-secondary">Be among the first to join when we launch.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-gold-primary mb-2">
                  <Sparkles className="h-4 w-4" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider">Launch Updates</span>
                </div>
                <p className="font-sans text-sm text-white-secondary">Get notified of feature reveals and launch dates.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-gold-primary mb-2">
                  <Sparkles className="h-4 w-4" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider">No Spam</span>
                </div>
                <p className="font-sans text-sm text-white-secondary">Only important updates. No filler, ever.</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-24 max-w-3xl px-6 lg:px-12">
          <div className="rounded-2xl border border-divider bg-surface-elevated p-8 sm:p-12 text-center">
            <h3 className="font-sans text-xl font-bold text-white-primary mb-3">
              Want to learn more first?
            </h3>
            <p className="font-sans text-sm text-white-secondary mb-6 max-w-lg mx-auto">
              Explore our features and roadmap to discover what MEERASH is building.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Link href="/features">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Features
                </Button>
              </Link>
              <Link href="/roadmap">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Roadmap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
