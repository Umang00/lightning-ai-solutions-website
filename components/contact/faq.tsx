"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build an AI solution?",
    answer:
      "Most projects are delivered in 4-8 weeks. We work in weekly sprints with regular updates, so you see progress every week. Simple automation projects can be done in 2-3 weeks, while complex LLM fine-tuning projects might take 8-12 weeks.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes! We offer flexible support packages including monitoring, bug fixes, feature updates, and optimization. Most clients opt for a monthly retainer to ensure their AI solutions continue performing optimally as their business grows.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer both fixed-price projects and time & materials engagements. Most projects range from $10,000 to $25,000. We're transparent about costs upfront and provide detailed proposals before starting work. Early-stage startups can discuss flexible payment terms.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Absolutely. We specialize in building AI solutions that work with your current tech stack. Whether it's CRM systems, databases, APIs, or internal tools—we ensure seamless integration.",
  },
  {
    question: "Do I need to have my data ready before starting?",
    answer:
      "Not necessarily. Part of our process is helping you identify, clean, and prepare the data needed for your AI solution. We can work with messy data and help you build data collection processes if needed.",
  },
  {
    question: "What happens if the AI doesn't perform as expected?",
    answer:
      "We set clear success metrics upfront and iterate until we hit them. Our projects include testing and validation phases to ensure the AI meets your requirements before deployment. We don't consider a project complete until you're satisfied with the results.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-primary-dark">
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
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-text-secondary">
            Got questions? We've got answers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
