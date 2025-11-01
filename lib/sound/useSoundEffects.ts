'use client';

import { useEffect } from 'react';
import { soundManager } from './soundManager';

export function useSoundEffects() {
  useEffect(() => {
    // Initialize sound manager on mount
    soundManager.initialize();
  }, []);

  return {
    playClick: () => soundManager.play('click'),
    playHover: () => soundManager.play('hover'),
    playSuccess: () => soundManager.play('success'),
    playError: () => soundManager.play('error'),
    playWhoosh: () => soundManager.play('whoosh'),
  };
}
