"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, ChevronUp, Quote } from "lucide-react";
import { Project } from "@/lib/projects-data";

interface ExpandableCaseStudyProps {
  project: Project;
  index: number;
}

export function ExpandableCaseStudy({ project, index }: ExpandableCaseStudyProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative"
    >
      <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/30 transition-all">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center flex-shrink-0`}>
            <Icon className="h-8 w-8 text-primary-blue" />
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline">{project.client}</Badge>
              <Badge variant="outline">{project.industry}</Badge>
              <Badge variant="outline" className="bg-primary-blue/10 border-primary-blue/50 text-primary-blue">
                {project.status}
              </Badge>
            </div>
            <div className="text-sm text-text-tertiary mt-2">
              <span className="font-semibold">Timeline:</span> {project.timeline} | <span className="font-semibold">Role:</span> {project.role}
            </div>
          </div>
        </div>

        {/* Summary View */}
        <div className="space-y-6">
          {/* The Challenge */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">The Challenge</h3>
            <p className="text-text-secondary line-clamp-3">{project.problem}</p>
          </div>

          {/* The Solution - Preview */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Our Solution</h3>
            <p className="text-text-secondary line-clamp-3 mb-4">{project.solution}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-text-tertiary"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-text-tertiary">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>
          </div>

          {/* Results Grid - Always visible */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((result, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent mb-1">
                  {result.metric}
                </div>
                <div className="text-xs text-text-tertiary">{result.label}</div>
              </div>
            ))}
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 overflow-hidden"
              >
                {/* Full Solution Description */}
                <div className="pt-6 border-t border-slate-700/50">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Detailed Solution</h3>
                  <p className="text-text-secondary mb-4">{project.solution}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-text-tertiary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features Delivered</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, i) => {
                        const [title, ...descParts] = feature.split(" - ");
                        const description = descParts.join(" - ");
                        return (
                          <li key={i} className="flex items-start gap-2 text-text-secondary">
                            <Check className="h-5 w-5 text-primary-blue flex-shrink-0 mt-0.5" />
                            <span>
                              <span className="font-semibold text-text-primary">{title}</span>
                              {description && <span> - {description}</span>}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* Detailed Features (if available) */}
                {project.detailedFeatures && project.detailedFeatures.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4">Feature Deep-Dive</h3>
                    <div className="space-y-6">
                      {project.detailedFeatures.map((detailedFeature, i) => (
                        <div key={i} className="p-6 rounded-lg bg-slate-800/30 border border-slate-700/30">
                          <h4 className="text-md font-semibold text-primary-blue mb-2">{detailedFeature.title}</h4>
                          <p className="text-text-secondary mb-3 text-sm">{detailedFeature.description}</p>
                          <ul className="space-y-2">
                            {detailedFeature.details.map((detail, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-text-tertiary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0 mt-2" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Outcomes */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Key Outcomes & Impact</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary">
                        <Check className="h-5 w-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Testimonial */}
                {project.testimonial && (
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 border border-primary-blue/30">
                    <Quote className="h-8 w-8 text-primary-blue mb-3 opacity-50" />
                    <p className="text-text-secondary italic mb-4">"{project.testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-semibold text-text-primary">{project.testimonial.author}</div>
                        <div className="text-sm text-text-tertiary">{project.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand/Collapse Button */}
          <div className="flex justify-center pt-4">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="group"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Read Full Case Study
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
