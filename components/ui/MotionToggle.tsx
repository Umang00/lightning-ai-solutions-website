'use client';

import { useMotion } from '@/lib/motion/MotionProvider';
import { Sparkles, SparklesIcon as SparklesOff } from 'lucide-react';

export function MotionToggle() {
  const { motionEnabled, toggleMotion } = useMotion();

  return (
    <button
      onClick={toggleMotion}
      aria-label={`Animations ${motionEnabled ? 'on' : 'off'}`}
      aria-pressed={motionEnabled}
      className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
      title={`Animations ${motionEnabled ? 'ON' : 'OFF'}`}
    >
      {motionEnabled ? (
        <Sparkles className="w-5 h-5 text-primary-purple" />
      ) : (
        <SparklesOff className="w-5 h-5 text-text-tertiary" />
      )}
    </button>
  );
}
