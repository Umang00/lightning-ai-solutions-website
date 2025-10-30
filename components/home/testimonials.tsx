"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { CardStack } from "@/components/ui/card-stack";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    designation: "CEO, HealthFirst",
    content: (
      <div className="space-y-3">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-primary-yellow text-primary-yellow"
            />
          ))}
        </div>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm italic">
          "Lightning AI Solutions transformed our customer support with their voice AI agent. We're now handling 100+ daily consultations automatically, saving $10,000+ monthly while improving response times by 70%."
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Rajesh Patel",
    designation: "CTO, ShopSmart",
    content: (
      <div className="space-y-3">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-primary-yellow text-primary-yellow"
            />
          ))}
        </div>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm italic">
          "The team delivered our AI-powered recommendation engine in just 4 weeks. User engagement is up 200%, and the solution scales effortlessly. Exceptional technical expertise and project management."
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Anita Desai",
    designation: "Product Manager, DataFlow",
    content: (
      <div className="space-y-3">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-primary-yellow text-primary-yellow"
            />
          ))}
        </div>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm italic">
          "Working with Umang and his team was a game-changer. Their LLM fine-tuning expertise helped us create a domain-specific AI that outperforms generic models by 40%. ROI achieved within 2 months."
        </p>
      </div>
    ),
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it - hear from clients who've experienced the impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <CardStack items={testimonials} />
        </motion.div>
      </div>
    </section>
  );
}
