-- MEERASH — Supabase database setup
-- Run this once in: https://supabase.com/dashboard/project/dcxnurdevqdklydwqyjl/sql
-- Safe to re-run (uses IF NOT EXISTS).

-- 1) Early access signups
create table if not exists public.early_access_users (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null unique,
  role        text not null check (role in ('job_seeker','employer','student','freelancer')),
  created_at  timestamptz not null default now()
);

alter table public.early_access_users enable row level security;

drop policy if exists "anon insert early_access_users" on public.early_access_users;
create policy "anon insert early_access_users"
  on public.early_access_users for insert to anon with check (true);

-- 2) Contact form inquiries
create table if not exists public.inquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  subject     text not null,
  message     text not null,
  created_at  timestamptz not null default now()
);

alter table public.inquiries enable row level security;

drop policy if exists "anon insert inquiries" on public.inquiries;
create policy "anon insert inquiries"
  on public.inquiries for insert to anon with check (true);

drop policy if exists "anon read inquiries" on public.inquiries;
create policy "anon read inquiries"
  on public.inquiries for select to anon using (true);

-- 3) Realtime: live inquiries feed (live-inquiries-feed.tsx subscribes to INSERTs)
-- Supabase requires the table be added to the supabase_realtime publication.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and tablename = 'inquiries'
  ) then
    execute 'alter publication supabase_realtime add table public.inquiries';
  end if;
end $$;
