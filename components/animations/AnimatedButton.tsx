'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useSoundEffects } from '@/lib/sound/useSoundEffects';
import { motionTiming } from '@/lib/motion/config';
import { useMotion } from '@/lib/motion/MotionProvider';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

/**
 * Button with micro-interactions
 * Includes sound effects and smooth animations
 * Respects reduced motion preferences
 */
export function AnimatedButton({ 
  children, 
  onClick,
  className = '',
  variant = 'primary',
  disabled = false
}: AnimatedButtonProps) {
  const { playClick } = useSoundEffects();
  const { motionEnabled } = useMotion();

  const handleClick = () => {
    if (!disabled) {
      playClick();
      onClick?.();
    }
  };

  // If motion is disabled, render static button
  if (!motionEnabled) {
    return (
      <button className={className} onClick={handleClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      className={className}
      whileHover={disabled ? {} : { 
        scale: 1.05,
        transition: { duration: motionTiming.fast }
      }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
