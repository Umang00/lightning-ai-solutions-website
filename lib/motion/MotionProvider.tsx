'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
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

export function MotionProvider({ children }: MotionProviderProps) {
  // Start with true for SSR, will sync on mount
  const [motionEnabled, setMotionEnabledState] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Sync with preferences after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    
    // Check user preference first
    const hasUserPreference = localStorage.getItem('motion-enabled') !== null;
    
    if (hasUserPreference) {
      setMotionEnabledState(getMotionPreference());
    } else {
      // Respect system preference if no user preference
      setMotionEnabledState(!shouldReduceMotion());
    }
  }, []);

  const toggleMotion = () => {
    const newState = !motionEnabled;
    setMotionEnabledState(newState);
    setMotionPreference(newState);
  };

  return (
    <MotionContext.Provider value={{ motionEnabled, toggleMotion }}>
      <MotionConfig reducedMotion={motionEnabled ? 'never' : 'always'}>
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
}
