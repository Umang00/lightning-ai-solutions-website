"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary-slate relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700/50 border border-primary-blue/30 mb-8">
            <Sparkles className="h-4 w-4 text-primary-yellow" />
            <span className="text-sm text-text-secondary">
              Ready to Transform Your Business?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-blue via-primary-purple to-primary-blue bg-clip-text text-transparent">
              Let's Build Your AI Solution
            </span>
          </h2>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            From concept to deployment, we'll help you leverage AI to drive real results.
            Book a free consultation to discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-blue to-primary-purple hover:opacity-90 transition-opacity group text-lg px-8 py-6"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Case Studies
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-slate-700/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">7+</div>
                <div className="text-sm text-text-tertiary">AI Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">4+</div>
                <div className="text-sm text-text-tertiary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">50K+</div>
                <div className="text-sm text-text-tertiary">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">100%</div>
                <div className="text-sm text-text-tertiary">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
