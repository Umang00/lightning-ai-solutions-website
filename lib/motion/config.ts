/**
 * Central motion configuration
 * All animation timing and easing values in one place
 */

export const motionTiming = {
  fast: 0.18,      // Quick interactions (button clicks)
  base: 0.32,      // Standard animations (cards, reveals)
  slow: 0.6,       // Slow reveals (hero sections)
  verySlow: 1.0    // Complex animations (timelines)
};

export const motionEasing = {
  // Cubic bezier values for smooth easing
  in: [0.32, 0, 0.67, 0] as const,
  out: [0.33, 1, 0.68, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const
};

export const motionStagger = {
  fast: 0.05,
  base: 0.08,
  slow: 0.12
};

// Check if user prefers reduced motion
export function shouldReduceMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Get motion preference from localStorage
export function getMotionPreference(): boolean {
  if (typeof window === 'undefined') return true;
  const saved = localStorage.getItem('motion-enabled');
  return saved === null ? true : saved === 'true';
}

// Save motion preference to localStorage
export function setMotionPreference(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('motion-enabled', String(enabled));
}
