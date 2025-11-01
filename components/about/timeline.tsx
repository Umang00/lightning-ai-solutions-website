"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const journeyData = {
  year: "2025",
  title: "Foundation & Rapid Execution",
  description: "Lightning AI Solutions officially established with a clear mission: make AI accessible and practical for businesses of all sizes",
  whatWeBuilt: [
    "Launched production-ready AI solutions across multiple industries",
    "Deployed voice agents handling 100+ daily automated interactions",
    "Built advanced LLM-powered platforms driving 200% engagement increases",
    "Established WhatsApp Business API integration capabilities",
    "Developed Astro AI platform for intelligent automation",
    "Created advanced LLM fine-tuning services",
    "Serving clients across healthtech, e-commerce, SaaS, and fintech sectors",
  ],
  ourFocus: [
    "Production-ready solutions over theoretical demos",
    "Rapid deployment and measurable business impact",
    "Scalable AI products built with proven methodologies",
    "Building next-generation AI products that transform how businesses operate",
  ],
};

export function Timeline() {
  return (
    <section className="py-20 bg-primary-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From vision to reality—building AI products that make a difference
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all"
          >
            {/* Year and Title */}
            <div className="text-center mb-8">
              <div className="text-5xl md:text-6xl font-bold text-primary-blue mb-4">
                {journeyData.year}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                {journeyData.title}
              </h3>
              <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                {journeyData.description}
              </p>
            </div>

            {/* What We've Built Section */}
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="text-primary-blue">What We've Built:</span>
              </h4>
              <ul className="space-y-3">
                {journeyData.whatWeBuilt.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <Check className="h-5 w-5 text-primary-blue flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Our Focus Section */}
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="text-primary-purple">Our Focus:</span>
              </h4>
              <ul className="space-y-3">
                {journeyData.ourFocus.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <Check className="h-5 w-5 text-primary-purple flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
