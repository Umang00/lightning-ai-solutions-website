"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FOUNDER } from "@/lib/constants";
import { LinkedinIcon, Mail, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FounderProfile() {
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
              Meet Our Founder
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The mind behind 7+ AI products serving 5M+ users
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-purple rounded-2xl opacity-20 blur-2xl" />
                <div className="relative w-full h-full rounded-2xl border border-slate-700/50 overflow-hidden">
                  <Image
                    src="/founder.png"
                    alt={FOUNDER.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 448px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                    <h3 className="font-bold text-xl text-text-primary">{FOUNDER.name}</h3>
                    <p className="text-sm text-text-secondary">{FOUNDER.title}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6 justify-center">
                <a href={FOUNDER.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
                <a href={`mailto:umang@lightningaisolutions.in`}>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6 text-text-secondary"
          >
            <p className="text-lg">
              Umang Thakkar is a product-focused AI engineer with {FOUNDER.experience} years of
              hands-on experience building AI solutions that actually ship. From LLM fine-tuning to
              voice agent deployment, he's delivered products that drive measurable business impact.
            </p>

            <p>
              His journey into AI started with a simple question: "How can we make AI work for real
              businesses, not just in research papers?" This curiosity led him to build 7+ AI
              products from scratch, including Astro AI (a WhatsApp-based Vedic astrology platform
              that boosted engagement by 200%), voice interview agents handling 100+ daily
              conversations, and custom LLM solutions reducing operational costs by 70%.
            </p>

            <p>
              What sets Umang apart isn't just technical chops—it's his product mindset. He doesn't
              just build models; he builds experiences. Every project starts with understanding the
              user problem deeply, then finding the simplest AI solution that delivers maximum
              value.
            </p>

            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <Award className="h-8 w-8 text-primary-blue mb-3" />
                <div className="text-2xl font-bold text-primary-blue mb-1">
                  {FOUNDER.experience} Years
                </div>
                <div className="text-sm text-text-tertiary">Building AI Products</div>
              </div>
              <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <Award className="h-8 w-8 text-primary-purple mb-3" />
                <div className="text-2xl font-bold text-primary-purple mb-1">7+ Products</div>
                <div className="text-sm text-text-tertiary">Launched & Scaled</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 border border-primary-blue/30">
              <h4 className="font-semibold text-text-primary mb-3">Core Expertise</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "LLM Fine-tuning & Deployment",
                  "Voice AI & Conversational Agents",
                  "RAG & Knowledge Systems",
                  "AI Product Strategy",
                  "Prompt Engineering",
                  "Production ML Systems",
                ].map((skill, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary-blue mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
