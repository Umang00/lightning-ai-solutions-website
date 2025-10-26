import { ContactHero } from "@/components/contact/hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { FAQ } from "@/components/contact/faq";

export const metadata = {
  title: "Contact Us - Lightning AI Solutions",
  description: "Get in touch to discuss your AI project. Book a free consultation to explore how we can help you leverage AI to transform your business.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20 bg-primary-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <FAQ />
    </>
  );
}
