"use client";

import { ProjectsHero } from "@/components/projects/hero";
import { ProjectShowcase } from "@/components/projects/project-showcase";
import { ALL_PROJECTS } from "@/lib/projects-data";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      {ALL_PROJECTS.map((project, index) => (
        <ProjectShowcase key={project.id} project={project} index={index} />
      ))}
    </>
  );
}
