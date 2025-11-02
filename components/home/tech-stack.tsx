"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import { useSound } from "@/lib/sounds/soundManager";

export function TechStack() {
  const { play } = useSound();

  const TechItem = ({ tech, keyPrefix }: { tech: string; keyPrefix: string }) => (
    <motion.div
      key={`${keyPrefix}-${tech}`}
      className="flex-shrink-0 px-6 py-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all cursor-pointer"
      whileHover={{ scale: 1.1, y: -2 }}
      onHoverStart={() => play("pop")}
    >
      <span className="text-text-secondary font-medium whitespace-nowrap">
        {tech}
      </span>
    </motion.div>
  );

  return (
    <section className="py-20 bg-primary-slate overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
              <TechItem key={`first-${index}`} tech={tech} keyPrefix="first" />
            ))}
            {/* Duplicate for seamless loop */}
            {TECH_STACK.map((tech, index) => (
              <TechItem key={`second-${index}`} tech={tech} keyPrefix="second" />
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
              <TechItem key={`reverse-first-${index}`} tech={tech} keyPrefix="reverse-first" />
            ))}
            {/* Duplicate for seamless loop */}
            {[...TECH_STACK].reverse().map((tech, index) => (
              <TechItem key={`reverse-second-${index}`} tech={tech} keyPrefix="reverse-second" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
