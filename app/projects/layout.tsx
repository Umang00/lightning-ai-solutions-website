import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Deployments - Lightning AI Solutions",
  description: "Explore Lightning AI Solutions' deployed systems and proprietary AI products including Astro AI, voice agents, LLM solutions, and intelligent automation platforms serving 5M+ users.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
