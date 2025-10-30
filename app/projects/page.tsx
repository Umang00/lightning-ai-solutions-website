"use client";

import { useState } from "react";
import { ProjectsHero } from "@/components/projects/hero";
import { ProjectShowcase } from "@/components/projects/project-showcase";
import { ALL_PROJECTS } from "@/lib/projects-data";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(project => project.categories.includes(selectedCategory));

  return (
    <>
      <ProjectsHero 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      {filteredProjects.map((project, index) => (
        <ProjectShowcase key={project.id} project={project} index={index} />
      ))}
    </>
  );
}
