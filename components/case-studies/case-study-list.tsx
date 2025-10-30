"use client";

import { ALL_PROJECTS } from "@/lib/projects-data";
import { ExpandableCaseStudy } from "./expandable-case-study";

export function CaseStudyList() {
  return (
    <section className="py-20 bg-primary-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {ALL_PROJECTS.map((project, index) => (
            <ExpandableCaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
