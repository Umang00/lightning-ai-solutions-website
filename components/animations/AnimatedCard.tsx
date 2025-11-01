'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ReactNode, MouseEvent } from 'react';
import { fadeInUp } from '@/lib/motion/variants';
import { useSoundEffects } from '@/lib/sound/useSoundEffects';
import { motionTiming } from '@/lib/motion/config';
import { useDeviceType } from '@/lib/motion/useDeviceType';
import { useMotion } from '@/lib/motion/MotionProvider';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  enable3D?: boolean;
  onClick?: () => void;
}

/**
 * Card with 3D tilt effect and hover animations
 * Implements pointer-based 3D tilt for smooth interaction
 * Respects reduced motion preferences
 */
export function AnimatedCard({ 
  children, 
  className = '',
  enable3D = true,
  onClick
}: AnimatedCardProps) {
  const { playHover, playClick } = useSoundEffects();
  const { isMobile, isLowEnd } = useDeviceType();
  const { motionEnabled } = useMotion();
  const enable3DEffective = enable3D && !isMobile && !isLowEnd && motionEnabled;

  // Motion values for 3D tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Transform motion values to rotation
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  // Calculate pointer position for 3D tilt
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enable3DEffective) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;

    x.set(xPos);
    y.set(yPos);
  };

  // Reset position on mouse leave
  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const handleClick = () => {
    playClick();
    onClick?.();
  };

  // If motion is disabled, render static card
  if (!motionEnabled) {
    return (
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: motionTiming.fast }
      }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => playHover()}
      onClick={handleClick}
      style={enable3DEffective ? {
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY
      } : {}}
    >
      {children}
    </motion.div>
  );
}
