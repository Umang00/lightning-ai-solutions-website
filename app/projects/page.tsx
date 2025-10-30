import { ProjectsHero } from "@/components/projects/hero";
import { ProjectShowcase } from "@/components/projects/project-showcase";
import { ALL_PROJECTS } from "@/lib/projects-data";

export const metadata = {
  title: "Projects - Lightning AI Solutions",
  description: "Explore our portfolio of 7+ AI products including Astro AI, voice agents, LLM solutions, and intelligent automation platforms serving 5M+ users.",
};

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
