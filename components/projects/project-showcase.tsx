"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/projects-data";
import { ArrowRight } from "lucide-react";

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const Icon = project.icon;
  const isEven = index % 2 === 0;

  return (
    <section className={`py-20 ${isEven ? 'bg-primary-slate' : 'bg-primary-dark'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              {project.shortTitle}
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {project.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Project Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-primary-blue" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                    {project.shortTitle}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">The Challenge</h3>
              <p className="text-text-secondary">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Our Solution</h3>
              <p className="text-text-secondary mb-4">{project.solution}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Key Features</h3>
              <div className="space-y-2">
                {project.features.slice(0, 4).map((feature, i) => {
                  const [title, ...descParts] = feature.split(' - ');
                  const description = descParts.join(' - ');
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50"
                    >
                      <div className="font-semibold text-text-primary text-sm mb-1">
                        {title}
                      </div>
                      {description && (
                        <div className="text-xs text-text-tertiary">{description}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          {project.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent mb-1">
                {metric.metric}
              </div>
              <div className="text-sm text-text-tertiary">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link href={`/case-studies#${project.id}`}>
            <Button
              size="lg"
              variant="outline"
              className="group"
            >
              View Full Case Study
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
