"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    id: "engagement-boost",
    icon: TrendingUp,
    title: "200% Engagement Boost for Astrology Platform",
    client: "Spiritual Tech Startup",
    industry: "Consumer Tech",
    challenge:
      "A spiritual guidance platform was struggling with low user engagement and high consultation costs. Traditional astrology readings were expensive ($50-$200 per session) and not scalable.",
    solution:
      "We built Astro AI, an AI-powered Vedic astrology platform that delivers personalized insights via WhatsApp. Fine-tuned an LLM on authentic Vedic astrology texts and integrated it with WhatsApp Business API for seamless delivery.",
    results: [
      { metric: "200%", label: "Increase in daily active users" },
      { metric: "1,000+", label: "Users onboarded in first month" },
      { metric: "4.8/5", label: "Average user satisfaction rating" },
      { metric: "3s", label: "Average response time" },
    ],
    outcomes: [
      "Transformed one-time consultations into recurring daily engagement",
      "Made astrology accessible to users who couldn't afford traditional consultations",
      "Enabled 24/7 availability without hiring astrologers",
      "Created a scalable revenue model with subscription pricing",
    ],
    technologies: ["OpenAI GPT-4", "WhatsApp API", "LLM Fine-tuning", "Python", "PostgreSQL"],
    gradient: "from-purple-600 to-blue-600",
  },
  {
    id: "cost-reduction",
    icon: DollarSign,
    title: "70% Cost Reduction Through Voice AI Automation",
    client: "HR Tech Company",
    industry: "Recruitment & HR",
    challenge:
      "A recruitment platform was spending $10,000+ monthly on human interviewers to conduct initial candidate screenings. The process was slow, inconsistent, and didn't scale.",
    solution:
      "We developed an AI voice agent that conducts initial phone screenings autonomously. The agent asks relevant questions, evaluates responses, and provides detailed candidate assessments—all without human intervention.",
    results: [
      { metric: "70%", label: "Reduction in screening costs" },
      { metric: "100+", label: "Daily interviews automated" },
      { metric: "80%", label: "Faster candidate processing" },
      { metric: "$7K+", label: "Monthly savings achieved" },
    ],
    outcomes: [
      "Reduced cost per screening from $25 to $7.50",
      "Increased screening capacity from 20 to 100+ per day",
      "Standardized interview process across all candidates",
      "Freed up human recruiters to focus on high-value interactions",
    ],
    technologies: ["ElevenLabs", "OpenAI GPT-4", "Whisper", "Twilio", "Python"],
    gradient: "from-green-600 to-cyan-600",
  },
  {
    id: "monthly-savings",
    icon: Users,
    title: "$1,000+ Monthly Savings with AI Customer Support",
    client: "E-commerce SaaS",
    industry: "E-commerce",
    challenge:
      "A growing e-commerce platform was drowning in support tickets. They were paying $1,500/month for support staff who could only handle 50 tickets per day during business hours.",
    solution:
      "We built an AI chatbot with RAG (Retrieval-Augmented Generation) that handles common customer queries instantly. The bot is trained on their product documentation and past support tickets.",
    results: [
      { metric: "$1K+", label: "Monthly cost savings" },
      { metric: "60%", label: "Tickets resolved automatically" },
      { metric: "24/7", label: "Support availability" },
      { metric: "2min", label: "Average resolution time" },
    ],
    outcomes: [
      "Automated 60% of repetitive support queries",
      "Reduced average resolution time from 4 hours to 2 minutes",
      "Enabled 24/7 support without additional headcount",
      "Improved customer satisfaction scores by 35%",
    ],
    technologies: ["OpenAI GPT-4", "LangChain", "Pinecone", "PostgreSQL", "React"],
    gradient: "from-yellow-600 to-orange-600",
  },
];

export function CaseStudyList() {
  return (
    <section className="py-20 bg-primary-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/50 transition-all">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-8 w-8 text-primary-blue" />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                        {study.title}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{study.client}</Badge>
                        <Badge variant="outline">{study.industry}</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">The Challenge</h3>
                    <p className="text-text-secondary">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Our Solution</h3>
                    <p className="text-text-secondary mb-4">{study.solution}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-text-tertiary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {study.results.map((result, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 text-center"
                      >
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-text-tertiary">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">Key Outcomes</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <Check className="h-5 w-5 text-primary-blue flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
