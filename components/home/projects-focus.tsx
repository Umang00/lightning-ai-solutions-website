"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sparkles, Brain, Mic, BarChart3, MessageSquare, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "astro-ai",
    title: "Astro AI",
    description: "AI-powered Vedic astrology platform",
    gradient: "from-purple-600 via-blue-600 to-cyan-600",
    icon: Sparkles,
    stats: "200% Engagement",
  },
  {
    id: "mbti-matching",
    title: "MBTI Personality Test",
    description: "Interactive personality assessment",
    gradient: "from-cyan-600 via-teal-600 to-blue-600",
    icon: Brain,
    stats: "10K+ Users",
  },
  {
    id: "voice-agent",
    title: "Voice Interview Agent",
    description: "Automated voice interviewing system",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    icon: Mic,
    stats: "100+ Daily Interviews",
  },
  {
    id: "retool-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time business intelligence",
    gradient: "from-yellow-600 via-orange-600 to-red-600",
    icon: BarChart3,
    stats: "Real-time Insights",
  },
  {
    id: "chatbot",
    title: "AI Chatbot Platform",
    description: "Custom chatbot solutions",
    gradient: "from-green-600 via-emerald-600 to-cyan-600",
    icon: MessageSquare,
    stats: "24/7 Support",
  },
  {
    id: "poll-engine",
    title: "Poll Engine",
    description: "Intelligent polling system",
    gradient: "from-pink-600 via-purple-600 to-violet-600",
    icon: Megaphone,
    stats: "5K+ Responses",
  },
];

const FocusCard = React.memo(
  ({
    project,
    index,
    hovered,
    setHovered,
  }: {
    project: typeof projects[0];
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const Icon = project.icon;
    return (
      <Link href={`/projects#${project.id}`}>
        <motion.div
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            "rounded-2xl relative overflow-hidden h-80 w-full transition-all duration-300 ease-out cursor-pointer group",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
          )}
        >
          {/* Gradient Background */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br",
            project.gradient,
            "opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          )} />
          
          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          
          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            {/* Icon */}
            <div className="flex justify-end">
              <div className={cn(
                "w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center",
                "group-hover:scale-110 transition-transform duration-300"
              )}>
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
            
            {/* Title & Description - Always visible on mobile, fade in on desktop hover */}
            <div className={cn(
              "transition-all duration-300",
              "md:opacity-0 md:translate-y-4",
              hovered === index && "md:opacity-100 md:translate-y-0",
              "opacity-100 translate-y-0"
            )}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-3">
                {project.description}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-white text-sm font-medium">{project.stats}</span>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )} />
        </motion.div>
      </Link>
    );
  }
);

FocusCard.displayName = "FocusCard";

export function ProjectsFocus() {
  const [hovered, setHovered] = useState<number | null>(null);

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real-world AI solutions delivering measurable impact
          </p>
        </motion.div>

        {/* Focus Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {projects.map((project, index) => (
            <FocusCard
              key={project.id}
              project={project}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary-blue to-primary-purple hover:opacity-90 transition-all group"
            >
              View Projects Details
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
