"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useSound } from "@/lib/sounds/soundManager";

interface AnimatedCardProps extends Omit<HTMLMotionProps<"div">, "onAnimationStart"> {
  children: ReactNode;
  enableSound?: boolean;
  enable3D?: boolean;
  variant?: "lift" | "scale" | "glow" | "all";
}

/**
 * AnimatedCard Component
 * Card with hover effects, 3D tilt, and optional sound
 */
export function AnimatedCard({
  children,
  className,
  enableSound = false,
  enable3D = false,
  variant = "lift",
  ...props
}: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const { play } = useSound();

  const handleHoverStart = () => {
    if (enableSound && !shouldReduceMotion) {
      play("hover");
    }
  };

  // If reduced motion is preferred, return basic card
  if (shouldReduceMotion) {
    return (
      <div className={className} {...(props as any)}>
        {children}
      </div>
    );
  }

  // Define hover animations based on variant
  const getHoverAnimation = () => {
    const animations: Record<string, any> = {};

    if (variant === "lift" || variant === "all") {
      animations.y = -10;
    }

    if (variant === "scale" || variant === "all") {
      animations.scale = 1.02;
    }

    if (variant === "glow" || variant === "all") {
      animations.boxShadow = "0 20px 40px rgba(37, 99, 235, 0.2)";
    }

    if (enable3D) {
      animations.rotateX = 5;
      animations.rotateY = 5;
    }

    return animations;
  };

  const style = enable3D
    ? {
        transformStyle: "preserve-3d" as const,
        perspective: "1000px",
      }
    : undefined;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }}
      whileHover={{
        ...getHoverAnimation(),
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, amount: 0.3 }}
      onHoverStart={handleHoverStart}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * AnimatedCardGrid Component
 * Grid container with staggered card animations
 */
interface AnimatedCardGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function AnimatedCardGrid({
  children,
  className,
  staggerDelay = 0.1,
}: AnimatedCardGridProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * AnimatedCardGridItem Component
 * Individual card item for AnimatedCardGrid
 */
interface AnimatedCardGridItemProps {
  children: ReactNode;
  className?: string;
  enableSound?: boolean;
  variant?: "lift" | "scale" | "glow" | "all";
}

export function AnimatedCardGridItem({
  children,
  className,
  enableSound = false,
  variant = "lift",
}: AnimatedCardGridItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const { play } = useSound();

  const handleHoverStart = () => {
    if (enableSound && !shouldReduceMotion) {
      play("hover");
    }
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getHoverAnimation = () => {
    const animations: Record<string, any> = {};

    if (variant === "lift" || variant === "all") {
      animations.y = -10;
    }

    if (variant === "scale" || variant === "all") {
      animations.scale = 1.02;
    }

    if (variant === "glow" || variant === "all") {
      animations.boxShadow = "0 20px 40px rgba(37, 99, 235, 0.2)";
    }

    return animations;
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      whileHover={{
        ...getHoverAnimation(),
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={handleHoverStart}
    >
      {children}
    </motion.div>
  );
}
