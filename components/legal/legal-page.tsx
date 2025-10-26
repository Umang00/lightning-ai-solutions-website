"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Section {
  title: string;
  content: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary-slate to-primary-dark border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-8 group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center">
              <FileText className="h-8 w-8 text-primary-blue" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary">{title}</h1>
              <p className="text-sm text-text-tertiary mt-2">Last Updated: {lastUpdated}</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-text-secondary"
          >
            Please read this document carefully. It explains important information about your rights
            and obligations.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4 scroll-mt-24">
                  {section.title}
                </h2>
                <div className="text-text-secondary whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
          >
            <h3 className="font-semibold text-text-primary mb-2">Have Questions?</h3>
            <p className="text-text-secondary mb-4">
              If you have any questions about this {title.toLowerCase()}, please don't hesitate to
              contact us.
            </p>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
