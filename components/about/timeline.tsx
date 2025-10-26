"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const milestones = [
  {
    year: "2022",
    title: "The Beginning",
    description: "Started building AI products with a focus on practical, production-ready solutions",
    achievements: ["First AI product launched", "Established core methodology"],
  },
  {
    year: "2023",
    title: "Rapid Growth",
    description: "Expanded product portfolio and client base across multiple industries",
    achievements: [
      "3 major AI products deployed",
      "Reached 10,000+ users milestone",
      "Achieved 200% engagement boost for key client",
    ],
  },
  {
    year: "2024",
    title: "Scale & Innovation",
    description: "Built advanced voice AI and LLM solutions, established Lightning AI Solutions",
    achievements: [
      "Voice agent handling 100+ daily interviews",
      "70% cost reduction for enterprise client",
      "7+ products in production",
      "50,000+ users served",
    ],
  },
  {
    year: "2025",
    title: "Expansion",
    description: "Scaling impact with focus on WhatsApp API integration and enterprise solutions",
    achievements: [
      "Astro AI platform development",
      "WhatsApp Business API integration",
      "Advanced LLM fine-tuning services",
      "Building next-gen AI products",
    ],
  },
];

export function Timeline() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From startup to success—building AI products that make a difference
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-blue via-primary-purple to-primary-blue" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Left/Right Content */}
                <div className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>
                  <div
                    className={`inline-block p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="text-4xl font-bold text-primary-blue mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-text-secondary mb-4">{milestone.description}</p>
                    <ul className="space-y-2">
                      {milestone.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-center gap-2 text-sm text-text-tertiary ${
                            index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                          }`}
                        >
                          <Check className="h-4 w-4 text-primary-blue flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-4 h-4 rounded-full bg-primary-blue border-4 border-primary-slate" />
                </div>

                {/* Spacer for grid */}
                <div className={`hidden md:block ${index % 2 === 0 ? "md:col-start-2" : ""}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
