/**
 * MEERASH Typography System Definitions & Reusable Class Names
 * Adheres strictly to Session 1 Design Tokens & Typography Scale.
 */

export interface TypographyToken {
  name: string;
  fontFamily: string;
  weight: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  className: string;
}

export const TYPOGRAPHY_SYSTEM: Record<string, TypographyToken> = {
  display: {
    name: 'Display',
    fontFamily: 'Outfit, sans-serif',
    weight: 'Bold (700)',
    size: '56px / 3.5rem',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    className: 'text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white-primary font-sans',
  },
  h1: {
    name: 'H1',
    fontFamily: 'Outfit, sans-serif',
    weight: 'Bold (700)',
    size: '40px / 2.5rem',
    lineHeight: '1.2',
    letterSpacing: '-0.015em',
    className: 'text-3xl md:text-4xl font-bold leading-snug tracking-tight text-white-primary font-sans',
  },
  h2: {
    name: 'H2',
    fontFamily: 'Outfit, sans-serif',
    weight: 'SemiBold (600)',
    size: '32px / 2rem',
    lineHeight: '1.25',
    letterSpacing: '-0.01em',
    className: 'text-2xl md:text-3xl font-semibold leading-snug tracking-normal text-white-primary font-sans',
  },
  h3: {
    name: 'H3',
    fontFamily: 'Outfit, sans-serif',
    weight: 'SemiBold (600)',
    size: '24px / 1.5rem',
    lineHeight: '1.3',
    letterSpacing: '-0.005em',
    className: 'text-xl md:text-2xl font-semibold leading-relaxed tracking-normal text-white-primary font-sans',
  },
  h4: {
    name: 'H4',
    fontFamily: 'Outfit, sans-serif',
    weight: 'Medium (500)',
    size: '20px / 1.25rem',
    lineHeight: '1.4',
    letterSpacing: '0em',
    className: 'text-lg md:text-xl font-medium leading-relaxed tracking-normal text-white-primary font-sans',
  },
  bodyLarge: {
    name: 'Body Large',
    fontFamily: 'Inter, sans-serif',
    weight: 'Normal (400)',
    size: '18px / 1.125rem',
    lineHeight: '1.6',
    letterSpacing: '0em',
    className: 'text-lg font-normal leading-relaxed text-white-secondary font-sans',
  },
  bodyMedium: {
    name: 'Body Medium',
    fontFamily: 'Inter, sans-serif',
    weight: 'Normal (400)',
    size: '16px / 1rem',
    lineHeight: '1.5',
    letterSpacing: '0em',
    className: 'text-base font-normal leading-normal text-white-secondary font-sans',
  },
  bodySmall: {
    name: 'Body Small',
    fontFamily: 'Inter, sans-serif',
    weight: 'Normal (400)',
    size: '14px / 0.875rem',
    lineHeight: '1.45',
    letterSpacing: '0em',
    className: 'text-sm font-normal leading-normal text-white-secondary font-sans',
  },
  caption: {
    name: 'Caption',
    fontFamily: 'Inter, sans-serif',
    weight: 'Medium (500)',
    size: '12px / 0.75rem',
    lineHeight: '1.35',
    letterSpacing: '0.01em',
    className: 'text-xs font-medium leading-tight tracking-wide text-text-muted font-sans',
  },
  labels: {
    name: 'Labels',
    fontFamily: 'Inter, sans-serif',
    weight: 'SemiBold (600)',
    size: '12px / 0.75rem',
    lineHeight: '1.3',
    letterSpacing: '0.05em',
    className: 'text-xs font-semibold uppercase tracking-wider text-white-secondary font-sans',
  },
  buttonText: {
    name: 'Button Text',
    fontFamily: 'Outfit, sans-serif',
    weight: 'SemiBold (600)',
    size: '14px / 0.875rem',
    lineHeight: '1.25',
    letterSpacing: '0.01em',
    className: 'text-sm font-semibold leading-tight tracking-wide font-sans',
  },
};
