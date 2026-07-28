'use client';

import React from 'react';
import { PublicLayout } from '@/components/landing/public-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { ContactForm } from '@/components/landing/contact-form';
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <PublicLayout>
      <div className="pt-24 pb-16">
        <SectionHeading
          badge="Get In Touch"
          title="We're Here to Help"
          subtitle="Have questions about MEERASH, Early Access, posting a job, or finding a task? Reach out to our support team."
        />

        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Information */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white-primary mb-4">Contact Information</h2>
              <p className="text-white-secondary text-lg">
                Fill out the form to send us a direct message, or use the information below to reach specific departments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-surface-muted/60 border border-border-primary/60 hover:border-gold-primary/40 transition-colors">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-surface-elevated border border-divider flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-gold-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white-primary text-sm sm:text-base">Support Email</h3>
                  <p className="text-white-secondary text-xs sm:text-sm break-all">support@meerash.com</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 p-4 rounded-xl bg-surface-muted/60 border border-border-primary/60 hover:border-gold-primary/40 transition-colors">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-surface-elevated border border-divider flex items-center justify-center shrink-0">
                  <MessageSquare className="h-5 w-5 text-gold-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white-primary text-sm sm:text-base">Business Enquiries</h3>
                  <p className="text-white-secondary text-xs sm:text-sm break-all">partners@meerash.com</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 p-4 rounded-xl bg-surface-muted/60 border border-border-primary/60 hover:border-gold-primary/40 transition-colors">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-surface-elevated border border-divider flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-gold-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white-primary text-sm sm:text-base">Support Hours</h3>
                  <p className="text-white-secondary text-xs sm:text-sm">Mon-Fri, 9am-6pm (EST)</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-surface-muted/60 border border-border-primary/60 hover:border-gold-primary/40 transition-colors">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-surface-elevated border border-divider flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-gold-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white-primary text-sm sm:text-base">Global Remote</h3>
                  <p className="text-white-secondary text-xs sm:text-sm">Fully remote organization</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-divider">
              <h3 className="font-bold text-white-primary mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <a href="#" className="h-10 w-10 rounded-full bg-surface-elevated border border-divider flex items-center justify-center text-white-secondary hover:text-gold-primary hover:border-gold-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-surface-elevated border border-divider flex items-center justify-center text-white-secondary hover:text-gold-primary hover:border-gold-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </PublicLayout>
  );
}
