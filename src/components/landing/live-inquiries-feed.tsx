'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Bell } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type InquiryEvent = {
  id: string;
  name: string;
  subject: string;
};

export function LiveInquiriesFeed() {
  const [inquiries, setInquiries] = useState<InquiryEvent[]>([]);

  useEffect(() => {
    // Subscribe to new inquiries
    const channel = supabase
      .channel('live-inquiries')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'inquiries' },
        (payload) => {
          const newInquiry = payload.new as InquiryEvent;
          
          setInquiries((prev) => [...prev, newInquiry]);
          
          // Auto dismiss after 6 seconds
          setTimeout(() => {
            setInquiries((prev) => prev.filter((i) => i.id !== newInquiry.id));
          }, 6000);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (inquiries.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {inquiries.map((inquiry) => (
          <motion.div
            key={inquiry.id}
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="pointer-events-auto flex items-center gap-4 bg-surface-elevated/95 backdrop-blur-md border border-gold-primary/30 shadow-gold-glow rounded-xl p-4 max-w-sm"
          >
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gold-primary/20 text-gold-primary border border-gold-primary/50 shrink-0">
              <Bell className="h-5 w-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-white-primary truncate">
                New Inquiry: {inquiry.name}
              </p>
              <p className="text-xs text-white-secondary truncate">
                {inquiry.subject}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
