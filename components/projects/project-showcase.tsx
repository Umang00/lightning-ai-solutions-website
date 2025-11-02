"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/projects-data";
import { ArrowRight } from "lucide-react";
import { AnimatedBadge, AnimatedButtonLink } from "@/components/animations";
import { useSound } from "@/lib/sounds/soundManager";

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const isEven = index % 2 === 0;
  const { play } = useSound();

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">The Challenge</h3>
              <p className="text-text-secondary">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Our Solution</h3>
              <p className="text-text-secondary mb-4">{project.solution}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <AnimatedBadge variant="outline">{tech}</AnimatedBadge>
                  </motion.div>
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
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      onHoverStart={() => play("hover")}
                      className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all cursor-pointer"
                    >
                      <div className="font-semibold text-text-primary text-sm mb-1">
                        {title}
                      </div>
                      {description && (
                        <div className="text-xs text-text-tertiary">{description}</div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          {project.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              onHoverStart={() => play("pop")}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all text-center cursor-pointer"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent mb-1">
                {metric.metric}
              </div>
              <div className="text-sm text-text-tertiary">{metric.label}</div>
            </motion.div>
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
          <AnimatedButtonLink href={`/case-studies#${project.id}`}>
            <Button
              size="lg"
              variant="outline"
              className="group"
            >
              View Full Case Study
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </AnimatedButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
