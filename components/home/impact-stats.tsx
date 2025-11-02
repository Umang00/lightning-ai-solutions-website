"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Zap, DollarSign } from "lucide-react";
import { useSound } from "@/lib/sounds/soundManager";

interface Stat {
  icon: typeof TrendingUp;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    value: 200,
    suffix: "%",
    label: "Engagement Boost",
    description: "Average increase in user engagement across projects",
  },
  {
    icon: Users,
    value: 5000000,
    suffix: "+",
    label: "Users Reached",
    description: "Active users across all deployed AI products",
  },
  {
    icon: Zap,
    value: 70,
    suffix: "%",
    label: "Faster Deployment",
    description: "Reduction in time-to-market for AI solutions",
  },
  {
    icon: DollarSign,
    value: 10000,
    suffix: "+",
    label: "Monthly Savings",
    description: "Average cost reduction per client",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function ImpactStats() {
  const { play } = useSound();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Impact That Speaks
            </span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Real results from real-world AI deployments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => play("pop")}
                className="relative group cursor-pointer"
              >
                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all duration-300 h-full hover:shadow-xl hover:shadow-primary-blue/20">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center mb-3 sm:mb-4"
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-blue" />
                    </motion.div>
                    <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-text-primary mb-1 sm:mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs sm:text-sm text-text-tertiary">{stat.description}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
