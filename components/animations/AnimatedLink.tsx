"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSound } from "@/lib/sounds/soundManager";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ReactNode } from "react";

interface SoundLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  enableHoverSound?: boolean;
  enableClickSound?: boolean;
  onClick?: () => void;
}

/**
 * SoundLink - Link with hover and click sounds (no animation)
 * Use this for simple links in header, footer, etc.
 */
export function SoundLink({
  href,
  children,
  className = "",
  external = false,
  enableHoverSound = true,
  enableClickSound = true,
  onClick,
}: SoundLinkProps) {
  const { play } = useSound();

  const handleMouseEnter = () => {
    if (enableHoverSound) play("hover");
  };

  const handleClick = () => {
    if (enableClickSound) play("click");
    onClick?.();
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

interface AnimatedButtonLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  enableSound?: boolean;
  onClick?: () => void;
}

/**
 * AnimatedButtonLink - Button-styled link with scale animation and sounds
 * Use for CTA buttons and primary actions
 */
export function AnimatedButtonLink({
  href,
  children,
  className = "",
  external = false,
  enableSound = true,
  onClick,
}: AnimatedButtonLinkProps) {
  const { play } = useSound();
  const shouldReduceMotion = useReducedMotion();

  const handleClick = () => {
    if (enableSound) play("click");
    onClick?.();
  };

  const linkContent = shouldReduceMotion ? (
    <div onClick={handleClick}>{children}</div>
  ) : (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {linkContent}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {linkContent}
    </Link>
  );
}
