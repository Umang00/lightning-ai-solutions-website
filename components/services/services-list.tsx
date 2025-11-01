"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "ai-development",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="scroll-mt-24 p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-blue/30 hover:shadow-2xl hover:shadow-primary-blue/10 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="inline-block px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/30 mb-4">
                    <span className="text-sm text-primary-blue font-semibold">
                      {service.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-text-primary">
                    {service.title}
                  </h2>

                  <p className="text-base text-text-secondary mb-6">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3 text-sm">What You Get:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start text-sm text-text-secondary"
                            initial={{ x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 mr-3 flex-shrink-0 group-hover:animate-pulse-glow" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-text-tertiary hover:border-primary-blue/30 hover:text-text-secondary transition-all cursor-default"
                            initial={{ scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="md:flex-shrink-0">
                  <a href="https://calendly.com/umangthakkar005/30min" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="group w-full md:w-auto">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
