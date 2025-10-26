import { CaseStudiesHero } from "@/components/case-studies/hero";
import { CaseStudyList } from "@/components/case-studies/case-study-list";

export const metadata = {
  title: "Case Studies - Lightning AI Solutions",
  description: "Real results from real AI deployments: 200% engagement boosts, 70% cost reductions, and $1,000+ monthly savings. See how we've transformed businesses with AI.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudyList />
    </>
  );
}
