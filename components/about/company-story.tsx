"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";

export function CompanyStory() {
  return (
    <section className="py-20 bg-primary-slate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6 text-lg text-text-secondary">
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Founded in {COMPANY.founded}, {COMPANY.name} was born from years of hands-on experience solving real business challenges with AI. Our founder spent years working directly with startups and established businesses, witnessing firsthand the gap between AI's theoretical potential and its practical implementation.
          </motion.p>

          <motion.p
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            What we saw repeatedly was this: businesses didn't need more flashy demos or theoretical possibilities. They needed production-ready solutions that could be deployed quickly, scale reliably, and deliver measurable ROI from day one.
          </motion.p>

          <motion.p
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            That insight became our founding principle. We established {COMPANY.name} to bridge this gap—building AI products that are accessible, practical, and engineered to deliver real business value immediately.
          </motion.p>

          <motion.p
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Based in {COMPANY.location}, we work with startups and established businesses across industries—from healthtech to e-commerce, SaaS to fintech. Our approach is simple: we listen to your challenges, design solutions grounded in proven AI techniques, and deliver products that work from day one.
          </motion.p>

          <motion.p
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're not just AI developers—we're product builders who happen to specialize in AI. We obsess over user experience, worry about production edge cases, and measure success by the impact our solutions deliver, not the complexity of the models we deploy.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
        >
          <h3 className="text-xl font-bold text-text-primary mb-4">Our Mission</h3>
          <p className="text-text-secondary text-lg">
            To build lightning-fast AI solutions that scale—transforming how businesses operate,
            engage customers, and drive growth through intelligent automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
