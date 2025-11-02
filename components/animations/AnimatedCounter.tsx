"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motion } from "framer-motion";
import { useSound } from "@/lib/sounds/soundManager";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  separator?: string;
  className?: string;
}

/**
 * AnimatedCounter Component
 * Number animation with CountUp effect
 */
export function AnimatedCounter({
  end,
  duration = 2.5,
  suffix = "",
  prefix = "",
  decimals = 0,
  separator = ",",
  className,
}: AnimatedCounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // If reduced motion, show end value immediately
  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {prefix}
        {end.toLocaleString()}
        {suffix}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {isInView && (
        <CountUp
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          separator={separator}
        />
      )}
    </motion.div>
  );
}

/**
 * AnimatedStatCard Component
 * Stat card with animated counter
 */
interface AnimatedStatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedStatCard({
  value,
  label,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: AnimatedStatCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const { play } = useSound();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent mb-2">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </div>
        <div className="text-sm text-text-tertiary">{label}</div>
      </div>
    );
  }

  return (
    <motion.div
      className={`${className} cursor-pointer`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1, y: -5 }}
      onHoverStart={() => play("pop")}
    >
      <AnimatedCounter
        end={value}
        suffix={suffix}
        prefix={prefix}
        decimals={decimals}
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent mb-2"
      />
      <div className="text-sm text-text-tertiary">{label}</div>
    </motion.div>
  );
}
