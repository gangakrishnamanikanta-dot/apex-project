import { createClient } from '@supabase/supabase-js';

// Hardcoded fallback to guarantee Vercel builds successfully even if env vars are misconfigured
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith('http') ? process.env.NEXT_PUBLIC_SUPABASE_URL : null) || 'https://dcxnurdevqdklydwqyjl.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjeG51cmRldnFka2x5ZHdxeWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4NTE3MzAsImV4cCI6MjEwMTQyNzczMH0.YXK034DUB_ruceaHG8vpP68Z66KPaBy8sDFgciABu7c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
