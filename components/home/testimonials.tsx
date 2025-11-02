"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useSound } from "@/lib/sounds/soundManager";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, HealthTech Startup",
    content:
      "Lightning AI Solutions transformed our customer support with their voice AI agent. We're now handling 100+ daily consultations automatically, saving $10,000+ monthly while improving response times by 70%.",
    rating: 5,
    company: "HealthFirst",
  },
  {
    name: "Rajesh Patel",
    role: "CTO, E-commerce Platform",
    content:
      "The team delivered our AI-powered recommendation engine in just 4 weeks. User engagement is up 200%, and the solution scales effortlessly. Exceptional technical expertise and project management.",
    rating: 5,
    company: "ShopSmart",
  },
  {
    name: "Anita Desai",
    role: "Product Manager, SaaS Company",
    content:
      "Working with Umang and his team was a game-changer. Their LLM fine-tuning expertise helped us create a domain-specific AI that outperforms generic models by 40%. ROI achieved within 2 months.",
    rating: 5,
    company: "DataFlow",
  },
];

export function Testimonials() {
  const { play } = useSound();

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => play("hover")}
              className="relative group cursor-pointer"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-blue/20">
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-6 right-6 opacity-10"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Quote className="h-12 w-12 text-primary-blue" />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + i * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <Star className="h-5 w-5 fill-primary-yellow text-primary-yellow" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-text-secondary mb-6 relative z-10 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="relative z-10">
                  <div className="font-semibold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-tertiary">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary-blue mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
