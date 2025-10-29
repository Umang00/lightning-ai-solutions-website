"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: COMPANY.email,
    link: `mailto:${COMPANY.email}`,
  },
  {
    icon: Phone,
    title: "Phone",
    value: COMPANY.phone,
    link: `tel:${COMPANY.phone}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: COMPANY.location,
    link: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    link: null,
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Get in touch</h2>
        <p className="text-text-secondary">
          Prefer to reach out directly? Here's how you can contact us
        </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary-blue" />
                </div>
                <div>
                  <div className="text-sm text-text-tertiary mb-1">{method.title}</div>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="text-lg font-semibold text-text-primary hover:text-primary-blue transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <div className="text-lg font-semibold text-text-primary">{method.value}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 border border-primary-blue/30">
        <h3 className="font-semibold text-text-primary mb-2">Book a Free Consultation</h3>
        <p className="text-sm text-text-secondary mb-4">
          Not sure where to start? Book a 30-minute consultation call to discuss your AI needs and
          explore how we can help.
        </p>
        <a
          href="https://calendly.com/umangthakkar005/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-primary-blue hover:underline"
        >
          Schedule a call →
        </a>
      </div>

      <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
        <h3 className="font-semibold text-text-primary mb-3">What happens next?</h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 flex-shrink-0" />
            We'll respond within 24 hours to schedule a discovery call
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 flex-shrink-0" />
            Discuss your project goals, challenges, and timeline
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 flex-shrink-0" />
            Receive a detailed proposal with scope, timeline, and pricing
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 flex-shrink-0" />
            Start building your AI solution within 1-2 weeks
          </li>
        </ul>
      </div>
    </div>
  );
}
