"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedStatCard } from "@/components/animations/AnimatedCounter";
import { AnimatedButtonLink } from "@/components/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-slate to-primary-dark" />
      
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-blue/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700/50 border border-primary-blue/30 mb-8"
        >
          <Sparkles className="h-4 w-4 text-primary-yellow" />
          <span className="text-sm text-text-secondary">
            Powering the Future with AI Innovation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-primary-blue via-primary-purple to-primary-blue bg-clip-text text-transparent">
            Lightning-Fast AI Solutions
          </span>
          <br />
          <span className="text-text-primary">That Scale</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10"
        >
          End-to-end AI products from research to deployment. Specializing in LLM fine-tuning,
          voice agents, and intelligent automation that deliver measurable results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AnimatedButtonLink
            href="https://calendly.com/umangthakkar005/30min"
            external
          >
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-primary-blue to-primary-purple hover:opacity-90 transition-all group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-purple to-primary-blue"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </AnimatedButtonLink>
          <AnimatedButtonLink href="/projects">
            <Button size="lg" variant="outline" className="group">
              View Our Work
              <motion.span
                className="ml-2 inline-block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                →
              </motion.span>
            </Button>
          </AnimatedButtonLink>
        </motion.div>

        {/* Stats Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <AnimatedStatCard
            value={7}
            suffix="+"
            label="AI Products Launched"
            className="text-center"
          />
          <AnimatedStatCard
            value={200}
            suffix="%"
            label="Avg. Engagement Boost"
            className="text-center"
          />
          <AnimatedStatCard
            value={70}
            suffix="%"
            label="Cost Reduction"
            className="text-center"
          />
          <AnimatedStatCard
            value={24}
            suffix="/7"
            label="AI Support"
            className="text-center"
          />
        </div>
      </div>
    </section>
  );
}
