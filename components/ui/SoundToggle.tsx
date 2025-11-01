'use client';

import { useState, useEffect } from 'react';
import { soundManager } from '@/lib/sound/soundManager';
import { Volume2, VolumeX } from 'lucide-react';

export function SoundToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(soundManager.isEnabled());
  }, []);

  const toggle = () => {
    const newState = soundManager.toggle();
    setEnabled(newState);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Sound ${enabled ? 'on' : 'off'}`}
      aria-pressed={enabled}
      className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
      title={`Sound Effects ${enabled ? 'ON' : 'OFF'}`}
    >
      {enabled ? (
        <Volume2 className="w-5 h-5 text-primary-blue" />
      ) : (
        <VolumeX className="w-5 h-5 text-text-tertiary" />
      )}
    </button>
  );
}
