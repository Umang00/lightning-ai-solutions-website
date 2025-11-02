"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if user prefers reduced motion
 * Respects system accessibility settings
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add listener
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

/**
 * Helper function to get animation props that respect reduced motion
 */
export function getAnimationProps<T>(
  animation: T,
  reducedMotionFallback: Partial<T> = {}
): T | Partial<T> {
  if (typeof window === "undefined") return animation;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return prefersReducedMotion ? reducedMotionFallback : animation;
}
