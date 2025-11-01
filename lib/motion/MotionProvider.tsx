'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

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
  const [motionEnabled, setMotionEnabledState] = useState(true);

  useEffect(() => {
    const savedPreference = localStorage.getItem('motion-enabled');
    if (savedPreference !== null) {
      setMotionEnabledState(savedPreference === 'true');
    }
  }, []);

  const toggleMotion = () => {
    const newState = !motionEnabled;
    setMotionEnabledState(newState);
    localStorage.setItem('motion-enabled', String(newState));
  };

  return (
    <MotionContext.Provider value={{ motionEnabled, toggleMotion }}>
      {children}
    </MotionContext.Provider>
  );
}
