"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Mic, Workflow, LineChart, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "AI Product Development",
    description: "End-to-end AI product development from concept to deployment",
    highlights: ["Custom AI solutions", "Rapid prototyping", "Scalable architecture"],
  },
  {
    icon: Brain,
    title: "LLM Fine-tuning",
    description: "Custom language models trained on your data for optimal performance",
    highlights: ["Domain-specific models", "Improved accuracy", "Cost optimization"],
  },
  {
    icon: Mic,
    title: "Voice AI Agents",
    description: "Intelligent voice agents for customer support and automation",
    highlights: ["Natural conversations", "24/7 availability", "Multi-language support"],
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description: "Automate repetitive tasks with AI-powered workflows",
    highlights: ["Process automation", "Integration ready", "Time savings"],
  },
  {
    icon: LineChart,
    title: "AI Analytics",
    description: "Data-driven insights and predictive analytics for better decisions",
    highlights: ["Real-time dashboards", "Predictive models", "Custom reports"],
  },
];

export function ServicesOverview() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === services.length - 1 && services.length % 3 === 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className="group h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all duration-300">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary-blue" />
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {service.title}
                  </h3>

                  <p className="text-text-secondary mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-text-tertiary">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button size="lg" className="bg-gradient-to-r from-primary-blue to-primary-purple hover:opacity-90 transition-opacity">
              Explore All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
