// Design System Utilities
// Based on PRD specifications for Lightning AI Solutions

/**
 * Color Palette
 */
export const colors = {
  primary: {
    dark: '#0f172a',
    slate: '#1e293b',
    blue: '#06b6d4',
    purple: '#8b5cf6',
    yellow: '#fbbf24',
  },
  text: {
    primary: '#f8fafc',
    secondary: '#cbd5e1',
    tertiary: '#94a3b8',
  },
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
} as const;

/**
 * Typography Utilities
 */
export const typography = {
  headings: {
    h1: 'text-5xl md:text-6xl font-bold leading-tight',
    h2: 'text-4xl md:text-5xl font-bold leading-tight',
    h3: 'text-3xl md:text-4xl font-semibold leading-tight',
    h4: 'text-2xl md:text-3xl font-semibold leading-tight',
    h5: 'text-xl md:text-2xl font-semibold leading-normal',
    h6: 'text-lg md:text-xl font-semibold leading-normal',
  },
  body: {
    large: 'text-lg md:text-xl leading-relaxed',
    base: 'text-base leading-normal',
    small: 'text-sm leading-normal',
    caption: 'text-xs leading-normal',
  },
} as const;

/**
 * Gradient Utilities
 */
export const gradients = {
  primary: 'bg-gradient-to-r from-primary-blue to-primary-purple',
  hero: 'bg-gradient-to-b from-primary-dark via-primary-slate to-primary-dark',
  text: 'bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent',
} as const;

/**
 * Animation Durations
 */
export const animations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  verySlow: '1000ms',
} as const;

/**
 * Breakpoints
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

/**
 * Z-Index Scale
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;

/**
 * Common Component Classes
 */
export const components = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-10 md:py-20',
  card: 'bg-primary-slate border border-slate-700 rounded-lg p-6',
  button: {
    primary: 'bg-gradient-to-r from-primary-blue to-primary-purple hover:shadow-lg hover:scale-105 transition-all',
    secondary: 'border border-primary-blue/50 hover:bg-slate-700 transition-colors',
  },
} as const;

/**
 * Utility function to combine classes
 */
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};
