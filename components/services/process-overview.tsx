"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket, BarChart3 } from "lucide-react";
import { useSound } from "@/lib/sounds/soundManager";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description:
      "We start by understanding your business, challenges, and goals. No technical jargon—just a conversation about what you want to achieve.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Solution Design",
    description:
      "We propose a tailored AI solution with clear deliverables, timeline, and success metrics. You'll know exactly what to expect.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Rapid Development",
    description:
      "We build in weekly sprints with regular updates. See progress every week, not months. Iterate fast based on your feedback.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Production Launch",
    description:
      "We deploy your AI solution to production with proper monitoring, error handling, and documentation. It just works.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Optimize & Scale",
    description:
      "We monitor performance, gather feedback, and continuously improve. As your needs grow, we scale the solution with you.",
  },
];

export function ProcessOverview() {
  const { play } = useSound();

  return (
    <section className="py-20 bg-primary-dark">
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
              How We Work
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our proven 5-step process from idea to production
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => play("hover")}
                className={index === steps.length - 1 && steps.length % 3 === 2 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-primary-blue/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl font-bold text-primary-blue/20">{step.number}</div>
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-6 w-6 text-primary-blue" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>

                  <p className="text-text-secondary">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
