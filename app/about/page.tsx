import { AboutHero } from "@/components/about/hero";
import { CompanyStory } from "@/components/about/company-story";
import { FounderProfile } from "@/components/about/founder-profile";
import { Timeline } from "@/components/about/timeline";
import { CoreValues } from "@/components/about/core-values";
import { WhyWorkWithUs } from "@/components/about/why-work-with-us";

export const metadata = {
  title: "About Us - Lightning AI Solutions",
  description: "Learn about Lightning AI Solutions, our founder Umang Thakkar, and our mission to build lightning-fast AI products that scale.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <FounderProfile />
      <Timeline />
      <CoreValues />
      <WhyWorkWithUs />
    </>
  );
}
