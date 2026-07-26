/**
 * MEERASH Comprehensive Design Tokens & System Constants
 * Authoritative source of truth for programmatic access to colors, grid, spacing, and motion.
 */

export const COLOR_SYSTEM = {
  backgrounds: {
    primary: '#0A0A0C',
    secondary: '#141418',
  },
  surfaces: {
    base: '#1E1E24',
    elevated: '#2A2A32',
    muted: '#18181D',
  },
  gold: {
    primary: '#D4AF37',
    hover: '#B89728',
    disabled: '#8C7324',
    light: '#E5C358',
    champagne: '#F3E5AB',
  },
  text: {
    whitePrimary: '#FFFFFF',
    whiteSecondary: '#A0A0AB',
    muted: '#686875',
    disabled: '#4A4A54',
  },
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  borders: {
    primary: '#2A2A32',
    secondary: '#383842',
    gold: '#D4AF37',
    divider: 'rgba(255, 255, 255, 0.08)',
    dividerGold: 'rgba(212, 175, 55, 0.2)',
  },
} as const;

export const SPACING_SYSTEM = {
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  64: '64px',
  80: '80px',
  96: '96px',
} as const;

export const BORDER_RADIUS = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const;

export const ELEVATION_SYSTEM = {
  level1: '0 4px 12px rgba(0, 0, 0, 0.5)',
  level2: '0 8px 24px rgba(0, 0, 0, 0.6)',
  level3: '0 16px 36px rgba(0, 0, 0, 0.7)',
  level4: '0 0 25px rgba(212, 175, 55, 0.25)',
  goldGlow: '0 0 20px rgba(212, 175, 55, 0.35)',
} as const;

export const GRID_SYSTEM = {
  desktop: {
    containerWidth: '1536px',
    columnCount: 12,
    gutters: '24px',
    margins: '32px',
    breakpoint: '1536px (2xl)',
  },
  laptop: {
    containerWidth: '1280px',
    columnCount: 12,
    gutters: '20px',
    margins: '24px',
    breakpoint: '1280px (xl)',
  },
  tablet: {
    containerWidth: '768px',
    columnCount: 8,
    gutters: '16px',
    margins: '24px',
    breakpoint: '768px (md)',
  },
  mobile: {
    containerWidth: '100%',
    columnCount: 4,
    gutters: '12px',
    margins: '16px',
    breakpoint: '320px - 640px (sm)',
  },
} as const;

export const MOTION_RULES = {
  states: {
    hover: 'transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]',
    focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
    pressed: 'active:scale-[0.98] transition-transform duration-100 ease-in',
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none filter grayscale-[20%]',
    loading: 'animate-pulse cursor-wait pointer-events-none',
  },
  transitions: {
    fast: { duration: 150, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
    normal: { duration: 250, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
    slow: { duration: 350, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  },
} as const;
