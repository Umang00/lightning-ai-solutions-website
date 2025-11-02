"use client";

import { motion } from "framer-motion";
import { Target, Users, Zap, Shield, Lightbulb, Heart } from "lucide-react";
import { AnimatedCardGridItem } from "@/components/animations/AnimatedCard";
import { useSound } from "@/lib/sounds/soundManager";

const values = [
  {
    icon: Target,
    title: "Impact First",
    description:
      "Every line of code, every model, every decision is measured by real business impact. We don't build AI for AI's sake—we build solutions that move metrics.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Speed matters. We ship fast, iterate faster, and deploy production-ready solutions in weeks, not months. No endless research—just practical AI that works.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description:
      "The best AI is invisible AI. We obsess over user experience, making complex systems feel simple and intuitive. If users notice the AI, we didn't do our job right.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description:
      "We think about edge cases, error handling, and scalability from day one. Our solutions don't break at 2 AM—they're built to handle real-world chaos.",
  },
  {
    icon: Lightbulb,
    title: "Pragmatic Innovation",
    description:
      "We stay on the cutting edge, but we're not blinded by hype. We choose technologies based on what delivers value, not what's trending on Twitter.",
  },
  {
    icon: Heart,
    title: "Transparent Partnership",
    description:
      "No black boxes. We explain our decisions, share our reasoning, and treat every project as a collaboration. Your success is our success.",
  },
];

export function CoreValues() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The principles that guide every project we build
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <AnimatedCardGridItem
                  variant="lift"
                  className="group h-full"
                  onMouseEnter={() => play("hover")}
                >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all duration-300">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary-blue" />
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-3">{value.title}</h3>

                  <p className="text-text-secondary leading-relaxed">{value.description}</p>
                </div>
              </AnimatedCardGridItem>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
