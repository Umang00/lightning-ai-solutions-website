'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { getMotionPreference, shouldReduceMotion, setMotionPreference } from './config';

interface MotionContextType {
  motionEnabled: boolean;
  toggleMotion: () => void;
}

const MotionContext = createContext<MotionContextType>({
  motionEnabled: true,
  toggleMotion: () => {},
});

export function useMotion() {
  return useContext(MotionContext);
}

interface MotionProviderProps {
  children: ReactNode;
}

// Initialize motion state synchronously to avoid flash of animation
function getInitialMotionState(): boolean {
  // During SSR, default to enabled (will be corrected on client)
  if (typeof window === 'undefined') return true;
  
  // Check user preference first (stored in localStorage)
  const userPreference = getMotionPreference();
  
  // Check system preference
  const systemPrefersReduced = shouldReduceMotion();
  
  // Priority: User preference overrides system preference
  // If user has explicitly set a preference, use it
  // Otherwise, respect system preference
  const hasUserPreference = localStorage.getItem('motion-enabled') !== null;
  
  if (hasUserPreference) {
    return userPreference;
  }
  
  // No explicit user preference, respect system setting
  return !systemPrefersReduced;
}

export function MotionProvider({ children }: MotionProviderProps) {
  // Initialize with correct value immediately
  const [motionEnabled, setMotionEnabledState] = useState(getInitialMotionState);

  const toggleMotion = () => {
    const newState = !motionEnabled;
    setMotionEnabledState(newState);
    setMotionPreference(newState);
  };

  return (
    <MotionContext.Provider value={{ motionEnabled, toggleMotion }}>
      {children}
    </MotionContext.Provider>
  );
}
