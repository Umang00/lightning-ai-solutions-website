"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useSound } from "@/lib/sounds/soundManager";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBadgeProps extends Omit<HTMLMotionProps<"span">, "onAnimationStart"> {
  children: ReactNode;
  className?: string;
  enableSound?: boolean;
  variant?: "default" | "outline";
}

/**
 * AnimatedBadge - Badge/Pill with scale animation and pop sound
 * Use for technology badges, tags, and labels
 *
 * @example
 * <AnimatedBadge>React</AnimatedBadge>
 * <AnimatedBadge enableSound={true}>TypeScript</AnimatedBadge>
 */
export function AnimatedBadge({
  children,
  className,
  enableSound = true,
  variant = "default",
  ...props
}: AnimatedBadgeProps) {
  const shouldReduceMotion = useReducedMotion();
  const { play } = useSound();

  const handleHover = () => {
    if (enableSound && !shouldReduceMotion) {
      play("pop");
    }
  };

  const baseClasses = cn(
    "px-3 py-1 rounded-full text-xs cursor-default inline-block",
    variant === "outline"
      ? "bg-slate-800/50 border border-slate-700/50 text-text-tertiary hover:border-primary-blue/30 hover:text-text-secondary"
      : "bg-primary-blue/10 border border-primary-blue/30 text-primary-blue",
    "transition-all",
    className
  );

  if (shouldReduceMotion) {
    return (
      <span className={baseClasses} {...(props as any)}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={baseClasses}
      whileHover={{ scale: 1.1, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onHoverStart={handleHover}
      {...props}
    >
      {children}
    </motion.span>
  );
}
