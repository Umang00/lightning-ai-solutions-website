"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedButtonLink, AnimatedStatCard } from "@/components/animations";

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary-slate relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700/50 border border-primary-blue/30 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <Sparkles className="h-4 w-4 text-primary-yellow" />
            </motion.div>
            <span className="text-sm text-text-secondary">
              Ready to Transform Your Business?
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-primary-blue via-primary-purple to-primary-blue bg-clip-text text-transparent">
              Let's Build Your AI Solution
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            From concept to deployment, we'll help you leverage AI to drive real results.
            Book a free consultation to discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <AnimatedButtonLink href="https://calendly.com/umangthakkar005/30min" external>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary-blue to-primary-purple hover:opacity-90 transition-opacity group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AnimatedButtonLink>
            <AnimatedButtonLink href="/case-studies">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                View Case Studies
              </Button>
            </AnimatedButtonLink>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-700/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <AnimatedStatCard
                value={7}
                suffix="+"
                label="AI Products"
                className="text-center"
              />
              <AnimatedStatCard
                value={4}
                suffix="+"
                label="Years Experience"
                className="text-center"
              />
              <AnimatedStatCard
                value={5}
                suffix="M+"
                label="Users Served"
                className="text-center"
              />
              <AnimatedStatCard
                value={100}
                suffix="%"
                label="Client Satisfaction"
                className="text-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
