"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FOUNDER, COMPANY } from "@/lib/constants";
import { LinkedinIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedButtonLink, AnimatedStatCard } from "@/components/animations";
import { useSound } from "@/lib/sounds/soundManager";

export function FounderHighlight() {
  const { play } = useSound();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => play("whoosh")}
            className="relative cursor-pointer"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-purple rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <div className="relative w-full h-full rounded-2xl border border-slate-700/50 hover:border-primary-blue/50 overflow-hidden transition-all">
                <Image
                  src="/founder.png"
                  alt={FOUNDER.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 448px"
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-blue/10 border border-primary-blue/30 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-primary-blue font-semibold">Leadership & Vision</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              <span className="text-text-primary">{FOUNDER.name}</span>
            </h2>

            <h3 className="text-lg sm:text-xl text-primary-blue font-medium mb-4 sm:mb-6">
              {FOUNDER.title} • Founded October 2025
            </h3>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-text-secondary mb-6 sm:mb-8">
              <p>
                Umang Thakkar is the Founder & CEO of Lightning AI Solutions. With over {FOUNDER.experience} years of hands-on experience architecting and launching production AI software, he founded the company in October 2025 to bridge frontier AI research with real-world, scalable business value.
              </p>
              <p>
                Under his direction, Lightning AI Solutions operates as an applied AI powerhouse—incubating category-defining proprietary ventures like Astro AI while engineering mission-critical AI systems for venture-backed startups and enterprises.
              </p>
              <p>
                His deployments have delivered verified business impact: 7+ production launches, 5M+ impacted users, 200% engagement increases, and 70% operational cost reductions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButtonLink href="/about">
                <Button variant="outline" className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </AnimatedButtonLink>
              <AnimatedButtonLink href={FOUNDER.linkedin} external>
                <Button variant="outline" className="gap-2">
                  <LinkedinIcon className="h-4 w-4" />
                  Connect on LinkedIn
                </Button>
              </AnimatedButtonLink>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700/50">
              <AnimatedStatCard
                value={4}
                suffix="+"
                label="Years Building AI"
              />
              <AnimatedStatCard
                value={7}
                suffix="+"
                label="Products Launched"
              />
              <AnimatedStatCard
                value={5}
                suffix="M+"
                label="Users Impacted"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
