import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/impact-stats";
import { ProjectsFocus } from "@/components/home/projects-focus";
import { ServicesOverview } from "@/components/home/services-overview";
import { FounderHighlight } from "@/components/home/founder-highlight";
import { TechStack } from "@/components/home/tech-stack";
import { Testimonials } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta-section";

export const metadata = {
  title: "Lightning AI Solutions - AI Product Development & Automation",
  description:
    "Transform your business with custom AI solutions. From AI product development to LLM fine-tuning, voice agents, and intelligent automation. 200% engagement boost, 70% cost reduction. Delivered in weeks.",
  openGraph: {
    title: "Lightning AI Solutions - AI Product Development & Automation",
    description:
      "Transform your business with custom AI solutions. 200% engagement boost, 70% cost reduction. Delivered in weeks, not months.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ProjectsFocus />
      <ServicesOverview />
      <FounderHighlight />
      <TechStack />
      <Testimonials />
      <CTASection />
    </>
  );
}
