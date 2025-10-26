"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Proven Track Record",
    description: "7+ AI products in production, 50,000+ users served, 200% engagement boosts delivered",
  },
  {
    title: "End-to-End Expertise",
    description: "From LLM fine-tuning to voice AI to production deployment—we handle it all",
  },
  {
    title: "Rapid Delivery",
    description: "Ship production-ready AI solutions in weeks, not months. No endless POCs",
  },
  {
    title: "Product-Focused Approach",
    description: "We don't just build models—we build experiences that users love",
  },
  {
    title: "Real Business Impact",
    description: "Every solution is measured by metrics that matter: revenue, cost savings, engagement",
  },
  {
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, honest feedback. No surprises",
  },
];

export function WhyWorkWithUs() {
  return (
    <section className="py-20 bg-primary-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                Why Work With Us?
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We're not your typical AI consultancy. We're product builders who happen to specialize
              in AI—and that makes all the difference.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-blue">7+</span>
                </div>
                <span>Products shipped and scaled in production</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-12 h-12 rounded-lg bg-primary-purple/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-purple">4+</span>
                </div>
                <span>Years of hands-on AI product development</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-12 h-12 rounded-lg bg-primary-yellow/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-yellow">50K+</span>
                </div>
                <span>Users benefiting from our AI solutions daily</span>
              </div>
            </div>

            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-blue to-primary-purple hover:opacity-90 transition-opacity group"
              >
                Let's Build Together
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Right: Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all"
              >
                <CheckCircle2 className="h-6 w-6 text-primary-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">{reason.title}</h4>
                  <p className="text-sm text-text-secondary">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
