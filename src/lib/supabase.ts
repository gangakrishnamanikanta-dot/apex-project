import { createClient } from '@supabase/supabase-js';

// Hardcoded fallback to guarantee Vercel builds successfully even if env vars are misconfigured
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith('http') ? process.env.NEXT_PUBLIC_SUPABASE_URL : null) || 'https://tpshzpceqawzspklqlzr.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwc2h6cGNlcWF3enNwa2xxbHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyNDM1ODksImV4cCI6MjEwMDgxOTU4OX0.5yViYzbqdcIhZE2S73W8FHqLcgXlZPR6zXNk95Td0qY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
