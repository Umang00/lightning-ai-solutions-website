import { Variants } from 'framer-motion';
import { motionTiming, motionEasing, motionStagger } from './config';

/**
 * Reusable animation variants
 * Use these instead of inline animation props
 */

// Fade in from bottom (most common)
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: motionTiming.base,
      ease: motionEasing.out
    }
  }
};

// Fade in (no movement)
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: motionTiming.base,
      ease: motionEasing.out
    }
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -40 
  },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: motionTiming.base,
      ease: motionEasing.out
    }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 40 
  },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: motionTiming.base,
      ease: motionEasing.out
    }
  }
};

// Scale in (for modals, popups)
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: motionTiming.base,
      ease: motionEasing.out
    }
  }
};

// Container with stagger children
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: motionStagger.base
    }
  }
};

// Word stagger (for headlines)
export const wordStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const word: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: motionTiming.base
    }
  }
};
