'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp } from '@/lib/motion/variants';
import { useMotion } from '@/lib/motion/MotionProvider';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

/**
 * Wrapper for sections that should animate in on scroll
 * Uses whileInView for automatic scroll-triggered animations
 * Respects reduced motion preferences
 */
export function AnimatedSection({ 
  children, 
  className = '',
  variants = fadeInUp,
  delay = 0
}: AnimatedSectionProps) {
  const { motionEnabled } = useMotion();

  // If motion is disabled, render static content
  if (!motionEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
