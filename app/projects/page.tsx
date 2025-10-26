import { ProjectsHero } from "@/components/projects/hero";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectGrid } from "@/components/projects/project-grid";

export const metadata = {
  title: "Projects - Lightning AI Solutions",
  description: "Explore our portfolio of 7+ AI products including Astro AI, voice agents, LLM solutions, and intelligent automation platforms serving 50,000+ users.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <FeaturedProject />
      <ProjectGrid />
    </>
  );
}
