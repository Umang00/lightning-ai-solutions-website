"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Brain, Mic, BarChart3, MessageSquare, Vote, DollarSign } from "lucide-react";

const projects = [
  {
    id: "mbti",
    icon: Brain,
    title: "MBTI Personality Test",
    description: "Interactive AI-powered personality assessment with detailed insights and recommendations",
    tags: ["AI", "Analytics", "Psychology"],
    stats: "10K+ users assessed",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    id: "voice-agent",
    icon: Mic,
    title: "Voice Interview Agent",
    description: "Automated voice interviewing system for recruitment with natural conversation flow",
    tags: ["Voice AI", "ElevenLabs", "Automation"],
    stats: "100+ daily interviews",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time business intelligence platform with custom metrics and visualizations",
    tags: ["Analytics", "Retool", "PostgreSQL"],
    stats: "Real-time insights",
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    id: "chatbot",
    icon: MessageSquare,
    title: "AI Chatbot Platform",
    description: "Custom chatbot solutions for customer support with RAG-powered knowledge base",
    tags: ["LLM", "RAG", "Integration"],
    stats: "24/7 support",
    gradient: "from-green-600 to-cyan-600",
  },
  {
    id: "poll-engine",
    icon: Vote,
    title: "Poll Engine",
    description: "Intelligent polling and survey system with automated analysis and reporting",
    tags: ["Automation", "AI", "Analytics"],
    stats: "5K+ responses",
    gradient: "from-pink-600 to-purple-600",
  },
  {
    id: "revenue-tracker",
    icon: DollarSign,
    title: "Revenue Tracker",
    description: "AI-powered revenue forecasting and tracking with predictive analytics",
    tags: ["ML", "Analytics", "Finance"],
    stats: "$1M+ tracked",
    gradient: "from-orange-600 to-red-600",
  },
];

export function ProjectGrid() {
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
              More Projects
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore our diverse portfolio of AI solutions across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all duration-300 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-primary-blue" />
                    </div>

                    <h3 className="text-xl font-bold text-text-primary mb-3">{project.title}</h3>

                    <p className="text-text-secondary mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-slate-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-sm font-semibold text-primary-blue">{project.stats}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
