import { ServicesHero } from "@/components/services/hero";
import { ServicesList } from "@/components/services/services-list";
import { ProcessOverview } from "@/components/services/process-overview";
import { PricingApproach } from "@/components/services/pricing-approach";
import { Testimonials } from "@/components/home/testimonials";

export const metadata = {
  title: "Services - Lightning AI Solutions",
  description: "AI Product Development, LLM Fine-tuning, Voice AI Agents, Intelligent Automation, and AI Analytics services that deliver real business results.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessOverview />
      <PricingApproach />
      <Testimonials />
    </>
  );
}
