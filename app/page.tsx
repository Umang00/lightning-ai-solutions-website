import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/impact-stats";
import { ProjectsBento } from "@/components/home/projects-bento";
import { ServicesOverview } from "@/components/home/services-overview";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ProjectsBento />
      <ServicesOverview />
    </>
  );
}
