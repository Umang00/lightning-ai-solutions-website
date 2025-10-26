import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/impact-stats";
import { ProjectsBento } from "@/components/home/projects-bento";
import { ServicesOverview } from "@/components/home/services-overview";
import { FounderHighlight } from "@/components/home/founder-highlight";
import { TechStack } from "@/components/home/tech-stack";
import { Testimonials } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ProjectsBento />
      <ServicesOverview />
      <FounderHighlight />
      <TechStack />
      <Testimonials />
      <CTASection />
    </>
  );
}
