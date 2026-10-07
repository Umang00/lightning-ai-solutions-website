"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import { useSound } from "@/lib/sounds/soundManager";

export function CompanyStory() {
  const { play } = useSound();

  return (
    <section className="py-20 bg-primary-slate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Our Company Story
            </span>
          </h2>
          <p className="text-text-secondary text-lg">
            An applied AI company and engineering lab founded in October 2025
          </p>
        </motion.div>

        <div className="space-y-6 text-lg text-text-secondary">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Founded in <strong className="text-text-primary">October 2025</strong> by <strong className="text-text-primary">Umang Thakkar</strong>, {COMPANY.name} was established as a high-velocity applied artificial intelligence company and product engineering lab. The company was founded to address a critical industry bottleneck: while AI research is advancing at breakneck speed, most startups and enterprises struggle to bridge the chasm between experimental prototypes and resilient, revenue-generating production software.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our founding thesis is built around a powerful dual-engine model:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4"
          >
            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60">
              <h4 className="text-primary-blue font-bold text-base mb-2">1. Proprietary AI Ventures</h4>
              <p className="text-sm text-text-secondary">
                We incubate and scale consumer and vertical AI products, including <strong>Astro AI</strong>, an intelligent Vedic astrology platform delivered natively via WhatsApp with custom fine-tuned LLMs and astronomical precision engines.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60">
              <h4 className="text-primary-purple font-bold text-base mb-2">2. Applied AI Systems Engineering</h4>
              <p className="text-sm text-text-secondary">
                We partner with high-growth startups and businesses to architect and deploy domain-specific LLM fine-tuning, voice conversational agents, RAG search engines, and intelligent automations that deliver measurable ROI within weeks.
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Headquartered in {COMPANY.location}, Lightning AI Solutions combines deep full-stack engineering rigor with a user-first product discipline. We obsess over latency, deterministic execution, data protection, and real-world edge cases so our clients and end users experience seamless intelligence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Today, our deployed solutions and proprietary platforms touch over 5M+ users worldwide, delivering verified business outcomes: 200% engagement uplifts, 70% operational cost reductions, and thousands of automated interactions handled daily.
          </motion.p>
        </div>

        {/* Startup & Company Factsheet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-slate-700/60 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-700/60 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-primary-blue font-semibold">Startup Profile</span>
              <h3 className="text-2xl font-bold text-text-primary">Company At A Glance</h3>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Active Startup • Founded Oct 2025
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="text-text-tertiary mb-1">Company Entity</div>
              <div className="font-semibold text-text-primary">{COMPANY.name}</div>
            </div>
            <div>
              <div className="text-text-tertiary mb-1">Founding Date</div>
              <div className="font-semibold text-text-primary">October 2025</div>
            </div>
            <div>
              <div className="text-text-tertiary mb-1">Founder & CEO</div>
              <div className="font-semibold text-text-primary">Umang Thakkar</div>
            </div>
            <div>
              <div className="text-text-tertiary mb-1">Headquarters</div>
              <div className="font-semibold text-text-primary">Anand, Gujarat, India</div>
            </div>
            <div>
              <div className="text-text-tertiary mb-1">Operating Model</div>
              <div className="font-semibold text-text-primary">Proprietary AI + Applied Engineering</div>
            </div>
            <div>
              <div className="text-text-tertiary mb-1">Core Tech Stack</div>
              <div className="font-semibold text-text-primary">Next.js, Python, GPT-4, Claude, LangChain</div>
            </div>
            <div>
              <div className="text-text-tertiary mb-1">Track Record</div>
              <div className="font-semibold text-text-primary">7+ Production Deployments • 5M+ Users</div>
            </div>
            <div>
              <div className="text-text-tertiary mb-1">Compliance Standard</div>
              <div className="font-semibold text-text-primary">GDPR, CCPA, WhatsApp API Verified</div>
            </div>
          </div>
        </motion.div>

        {/* Mission and Vision Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.02, y: -3 }}
            onHoverStart={() => play("hover")}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-primary-blue/10"
          >
            <h3 className="text-xl font-bold text-text-primary mb-3 flex items-center gap-2">
              <span className="text-primary-blue">⚡</span> Our Mission
            </h3>
            <p className="text-text-secondary">
              To build lightning-fast AI products that scale—transforming how businesses operate, engage customers, and drive growth through practical, intelligent automation and proprietary AI software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02, y: -3 }}
            onHoverStart={() => play("hover")}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-purple/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-primary-purple/10"
          >
            <h3 className="text-xl font-bold text-text-primary mb-3 flex items-center gap-2">
              <span className="text-primary-purple">🚀</span> Our Vision
            </h3>
            <p className="text-text-secondary">
              To become a globally recognized applied AI powerhouse, empowering companies with autonomous intelligence while developing category-defining consumer AI applications accessible to everyone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
