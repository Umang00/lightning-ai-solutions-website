"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useSound } from "@/lib/sounds/soundManager";

const milestones = [
  {
    badge: "October 2025",
    title: "Official Founding & Inception",
    description:
      "Lightning AI Solutions officially incorporated and founded by Umang Thakkar in Anand, Gujarat. Core architectural principles established: build production-ready, lightning-fast AI systems that deliver measurable business ROI.",
    highlights: [
      "Founded by Umang Thakkar (Founder & CEO)",
      "Architected proprietary Astro AI platform (Conversational Vedic AI via WhatsApp)",
      "Standardized production RAG, fine-tuning, and voice AI deployment frameworks",
      "Implemented enterprise compliance foundation (GDPR, CCPA, DPDP Act 2023, WhatsApp Business API standards)",
    ],
    accent: "from-primary-blue to-cyan-500",
  },
  {
    badge: "Q4 2025",
    title: "Commercial Scaling & 7+ Deployments",
    description:
      "Rapid commercial execution across healthtech, social platforms, SaaS, and financial intelligence. Delivering real-world business outcomes with zero fluff.",
    highlights: [
      "Deployed 7+ production-grade AI systems and autonomous pipelines",
      "Scaled Voice UXR agent conducting 100+ daily automated interviews with 70% cost reduction",
      "Fine-tuned domain-specific LLMs driving 200% user engagement boosts",
      "Surpassed 5M+ end-users touched across deployed systems and products",
    ],
    accent: "from-primary-purple to-pink-500",
  },
  {
    badge: "2026 & Beyond",
    title: "Venture Expansion & Accelerator Growth",
    description:
      "Expanding our dual-engine model: scaling proprietary AI platforms to tens of thousands of active users while partnering with global venture programs and enterprises.",
    highlights: [
      "Scaling Astro AI WhatsApp subscriptions to 10,000+ active users",
      "Deploying multi-agent autonomous enterprise intelligence workflows",
      "Global client expansion across US, Europe, and India markets",
      "Active participation in top-tier global startup accelerator programs",
    ],
    accent: "from-amber-400 to-primary-yellow",
  },
];

export function Timeline() {
  const { play } = useSound();

  return (
    <section className="py-20 bg-primary-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/30 mb-4">
            <span className="text-xs sm:text-sm text-primary-blue font-semibold">Startup Trajectory</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Our Journey & Milestones
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From our founding in October 2025 to scaling multi-industry AI platforms
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ scale: 1.01, y: -2 }}
              onHoverStart={() => play("hover")}
              className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 hover:border-primary-blue/40 transition-all cursor-pointer hover:shadow-xl hover:shadow-primary-blue/10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-primary-blue/15 text-primary-blue border border-primary-blue/30 w-fit">
                  {milestone.badge}
                </span>
                <span className="text-xs text-text-tertiary">Milestone 0{idx + 1}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                {milestone.title}
              </h3>
              <p className="text-text-secondary text-base md:text-lg mb-6 leading-relaxed">
                {milestone.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                  Key Achievements & Focus:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {milestone.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <Check className="h-4 w-4 text-primary-blue flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
