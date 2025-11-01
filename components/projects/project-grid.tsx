"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ALL_PROJECTS } from "@/lib/projects-data";
import { ArrowRight } from "lucide-react";

// Skip first project (Astro AI) as it's featured separately
const projects = ALL_PROJECTS.slice(1);

export function ProjectGrid() {
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
              <Link key={project.id} href="/case-studies" scroll={true}>
                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all duration-300 relative overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-blue/10">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                    />

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-primary-blue" />
                      </div>

                      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary-blue transition-colors">
                        {project.shortTitle}
                      </h3>

                      <p className="text-text-secondary mb-6 line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-slate-600">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs border-slate-600">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-primary-blue">
                          {project.metrics[0].metric} {project.metrics[0].label}
                        </div>
                        <ArrowRight className="h-5 w-5 text-primary-blue group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
