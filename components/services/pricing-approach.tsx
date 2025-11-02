"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { AnimatedButtonLink } from "@/components/animations";
import { useSound } from "@/lib/sounds/soundManager";

const principles = [
  "Fixed-price projects for well-defined scopes",
  "Time & materials for exploratory work",
  "Transparent hourly rates with detailed timesheets",
  "No hidden fees or surprise costs",
  "Pay for results, not effort",
  "Flexible engagement models (project, retainer, equity)",
];

export function PricingApproach() {
  const { play } = useSound();

  return (
    <section className="py-20 bg-primary-slate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Pricing That Makes Sense
            </span>
          </h2>
          <p className="text-lg text-text-secondary">
            No one-size-fits-all packages. We price based on value delivered, not hours logged.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, y: -3 }}
          onHoverStart={() => play("hover")}
          className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all mb-8 cursor-pointer hover:shadow-xl hover:shadow-primary-blue/10"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-6">Our Pricing Principles</h3>

          <ul className="space-y-4 mb-8">
            {principles.map((principle, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: index * 0.1 }}
                >
                  <Check className="h-6 w-6 text-primary-blue flex-shrink-0 mt-0.5" />
                </motion.div>
                <span className="text-lg text-text-secondary">{principle}</span>
              </motion.li>
            ))}
          </ul>

          <div className="p-6 rounded-xl bg-primary-blue/10 border border-primary-blue/30">
            <p className="text-text-secondary mb-4">
              <strong className="text-text-primary">Typical project range:</strong> $5,000 - $50,000
              depending on complexity and scope. Most projects fall in the $10,000 - $25,000 range.
            </p>
            <p className="text-sm text-text-tertiary">
              Early-stage startups? We offer flexible payment terms and can discuss equity
              arrangements for the right projects.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-text-secondary mb-6">
            Every project is unique. Let's discuss your needs and find a pricing model that works
            for both of us.
          </p>
          <AnimatedButtonLink href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary-blue to-primary-purple hover:opacity-90 transition-opacity group"
            >
              Get a Custom Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </AnimatedButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
