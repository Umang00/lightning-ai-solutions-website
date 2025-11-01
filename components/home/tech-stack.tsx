"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";

export function TechStack() {
  return (
    <section className="py-20 bg-primary-slate overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Powered by Industry-Leading Tech
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We leverage the best tools and frameworks to build scalable, production-ready AI solutions
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary-slate to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary-slate to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 pr-8"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {TECH_STACK.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all"
              >
                <span className="text-text-secondary font-medium whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {TECH_STACK.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all"
              >
                <span className="text-text-secondary font-medium whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - Reverse direction */}
        <div className="flex overflow-hidden mt-8">
          <motion.div
            className="flex gap-8 pr-8"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {[...TECH_STACK].reverse().map((tech, index) => (
              <div
                key={`reverse-first-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all"
              >
                <span className="text-text-secondary font-medium whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[...TECH_STACK].reverse().map((tech, index) => (
              <div
                key={`reverse-second-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all"
              >
                <span className="text-text-secondary font-medium whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
