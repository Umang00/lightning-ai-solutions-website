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
  // Always default to enabled - user can toggle off if desired
  const [motionEnabled, setMotionEnabledState] = useState(true);

  // Load saved preference after mount
  useEffect(() => {
    const savedPreference = localStorage.getItem('motion-enabled');
    if (savedPreference !== null) {
      setMotionEnabledState(savedPreference === 'true');
    } else {
      // No saved preference - explicitly save default as enabled
      localStorage.setItem('motion-enabled', 'true');
      setMotionEnabledState(true);
    }
    // Note: We ignore system prefers-reduced-motion to ensure content is always visible
    // Users can toggle motion off if they prefer
  }, []);

  const toggleMotion = () => {
    const newState = !motionEnabled;
    setMotionEnabledState(newState);
    setMotionPreference(newState);
  };

  return (
    <MotionContext.Provider value={{ motionEnabled, toggleMotion }}>
      <MotionConfig reducedMotion="never">
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
}
