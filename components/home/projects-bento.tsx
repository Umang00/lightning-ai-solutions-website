"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "astro-ai",
    title: "Astro AI",
    description: "AI-powered Vedic astrology platform delivering personalized insights via WhatsApp",
    tags: ["LLM", "WhatsApp API", "Voice AI"],
    stats: "200% engagement boost",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    id: "mbti-matching",
    title: "MBTI Personality Test",
    description: "Interactive personality assessment with AI-driven insights",
    tags: ["AI", "Analytics"],
    stats: "10K+ users",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    id: "voice-agent",
    title: "Voice Interview Agent",
    description: "Automated voice interviewing system for recruitment",
    tags: ["Voice AI", "Automation"],
    stats: "100+ daily interviews",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: "retool-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time business intelligence and data visualization",
    tags: ["Analytics", "Retool"],
    stats: "Real-time insights",
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    id: "chatbot",
    title: "AI Chatbot Platform",
    description: "Custom chatbot solutions for customer support",
    tags: ["LLM", "Integration"],
    stats: "24/7 support",
    gradient: "from-green-600 to-cyan-600",
  },
  {
    id: "poll-engine",
    title: "Poll Engine",
    description: "Intelligent polling system with automated analysis",
    tags: ["Automation", "AI"],
    stats: "5K+ responses",
    gradient: "from-pink-600 to-purple-600",
  },
  {
    id: "web-onboarding",
    title: "Web Onboarding",
    description: "Web-based personality assessment converting visitors to app users",
    tags: ["Growth", "SEO"],
    stats: "$1.5K monthly revenue",
    gradient: "from-orange-600 to-red-600",
  },
];

export function ProjectsBento() {
  return (
    <section className="py-20 bg-primary-dark">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real-world AI solutions delivering measurable impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* All Projects */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <Link href={`/projects#${project.id}`} className="block group h-full">
                <div className="relative h-full min-h-[200px] p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-text-primary">
                        {project.title}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-primary-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>

                    <p className="text-sm text-text-secondary mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-slate-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-sm font-semibold text-primary-blue">
                      {project.stats}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <Button variant="outline" size="lg" className="group">
              View Projects Details
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
