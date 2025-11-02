"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function CaseStudiesHero() {
  return (
    <section className="relative min-h-[45vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-slate to-primary-dark">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 bg-primary-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-700/50 border border-primary-blue/30 mb-6 sm:mb-8"
        >
          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary-yellow flex-shrink-0" />
          <span className="text-xs sm:text-sm text-text-secondary">Case Studies</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-primary-blue via-primary-purple to-primary-blue bg-clip-text text-transparent">
            Real Results
          </span>
          <br />
          <span className="text-text-primary">From Real Deployments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto px-2"
        >
          See how we've helped businesses achieve measurable impact with AI
        </motion.p>
      </div>
    </section>
  );
}
