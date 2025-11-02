"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { SoundLink, AnimatedButtonLink } from "@/components/animations";
import { useSound } from "@/lib/sounds/soundManager";
import { Button } from "@/components/ui/button";

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
  const { play } = useSound();

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">Get in touch</h2>
        <p className="text-text-secondary">
          Prefer to reach out directly? Here's how you can contact us
        </p>
      </motion.div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              onHoverStart={() => play("hover")}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center flex-shrink-0"
                >
                  <Icon className="h-6 w-6 text-primary-blue" />
                </motion.div>
                <div>
                  <div className="text-sm text-text-tertiary mb-1">{method.title}</div>
                  {method.link ? (
                    <SoundLink
                      href={method.link}
                      external
                      className="text-lg font-semibold text-text-primary hover:text-primary-blue transition-colors"
                    >
                      {method.value}
                    </SoundLink>
                  ) : (
                    <div className="text-lg font-semibold text-text-primary">{method.value}</div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => play("hover")}
        className="p-6 rounded-xl bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 border border-primary-blue/30 cursor-pointer"
      >
        <h3 className="font-semibold text-text-primary mb-2">Book a Free Consultation</h3>
        <p className="text-sm text-text-secondary mb-4">
          Not sure where to start? Book a 30-minute consultation call to discuss your AI needs and
          explore how we can help.
        </p>
        <AnimatedButtonLink href="https://calendly.com/umangthakkar005/30min" external>
          <Button variant="link" className="p-0 h-auto text-sm font-semibold text-primary-blue">
            Schedule a call →
          </Button>
        </AnimatedButtonLink>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50"
      >
        <h3 className="font-semibold text-text-primary mb-3">What happens next?</h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          {[
            "We'll respond within 24 hours to schedule a discovery call",
            "Discuss your project goals, challenges, and timeline",
            "Receive a detailed proposal with scope, timeline, and pricing",
            "Start building your AI solution within 1-2 weeks",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-2"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 10, delay: i * 0.1 }}
                className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 flex-shrink-0"
              />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
