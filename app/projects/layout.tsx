import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Lightning AI Solutions",
  description: "Explore our portfolio of 7+ AI products including Astro AI, voice agents, LLM solutions, and intelligent automation platforms serving 5M+ users.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
