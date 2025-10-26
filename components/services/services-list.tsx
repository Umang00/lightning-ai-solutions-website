"use client";

import { motion } from "framer-motion";
import { Code, Brain, Mic, Workflow, LineChart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "ai-development",
    icon: Code,
    title: "AI Product Development",
    tagline: "From concept to production in weeks",
    description:
      "We build end-to-end AI products that solve real business problems. Not just prototypes—production-ready solutions that scale from day one.",
    features: [
      "Custom AI solutions tailored to your needs",
      "Rapid prototyping and iterative development",
      "Scalable architecture built for growth",
      "Production deployment and monitoring",
      "Ongoing support and optimization",
    ],
    technologies: ["Next.js", "Python", "OpenAI", "Anthropic", "PostgreSQL", "AWS"],
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    id: "llm-finetuning",
    icon: Brain,
    title: "LLM Fine-tuning",
    tagline: "Custom models trained on your data",
    description:
      "Generic LLMs don't understand your business. We fine-tune models on your data to deliver domain-specific accuracy and consistent brand voice.",
    features: [
      "Custom dataset preparation and curation",
      "Model selection and architecture optimization",
      "Fine-tuning on proprietary data",
      "Performance benchmarking and validation",
      "Deployment and inference optimization",
    ],
    technologies: ["GPT-4", "Claude", "Llama", "LoRA", "PEFT", "HuggingFace"],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: "voice-agents",
    icon: Mic,
    title: "Voice AI Agents",
    tagline: "Natural conversations at scale",
    description:
      "Automate customer interactions with AI voice agents that sound human, understand context, and deliver 24/7 support without the headcount.",
    features: [
      "Natural language understanding",
      "Custom voice and personality",
      "Multi-language support",
      "Real-time transcription and analysis",
      "CRM and helpdesk integration",
    ],
    technologies: ["ElevenLabs", "Whisper", "GPT-4", "Twilio", "WebRTC"],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Intelligent Automation",
    tagline: "AI-powered workflows that work while you sleep",
    description:
      "Stop wasting time on repetitive tasks. We build intelligent automation pipelines that handle everything from data processing to customer communications.",
    features: [
      "Process automation and optimization",
      "AI-powered decision making",
      "Integration with existing tools",
      "Custom workflow design",
      "Monitoring and error handling",
    ],
    technologies: ["Make.com", "n8n", "Python", "LangChain", "Zapier"],
    gradient: "from-green-600 to-emerald-600",
  },
  {
    id: "analytics",
    icon: LineChart,
    title: "AI Analytics",
    tagline: "Turn data into decisions",
    description:
      "Get real-time insights powered by AI. We build custom analytics dashboards and predictive models that help you make data-driven decisions faster.",
    features: [
      "Real-time data visualization",
      "Predictive analytics and forecasting",
      "Custom KPI tracking",
      "Anomaly detection",
      "Automated reporting",
    ],
    technologies: ["Retool", "PostgreSQL", "Mixpanel", "Python", "Tableau"],
    gradient: "from-yellow-600 to-orange-600",
  },
];

export function ServicesList() {
  return (
    <section className="py-20 bg-primary-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Icon/Visual Side */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div
                    className={`relative aspect-square max-w-md mx-auto lg:mx-${
                      isEven ? "0" : "auto"
                    } rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-32 w-32 text-primary-blue opacity-50" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/30 mb-4`}
                  >
                    <span className="text-sm text-primary-blue font-semibold">
                      {service.tagline}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
                    {service.title}
                  </h2>

                  <p className="text-lg text-text-secondary mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3">What You Get:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-text-secondary">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-text-tertiary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button variant="outline" className="group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
