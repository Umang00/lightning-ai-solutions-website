/**
 * Animation Component Examples
 *
 * This file contains practical examples of how to use the animation system.
 * Copy and adapt these examples for your own use.
 */

"use client";

import { useState } from "react";
import {
  ScrollReveal,
  ScrollRevealList,
  ScrollRevealItem,
  AnimatedCard,
  AnimatedCardGrid,
  AnimatedCardGridItem,
  AnimatedButton,
  AnimatedCounter,
  AnimatedStatCard,
} from "@/components/animations";
import { useSound } from "@/lib/sounds/soundManager";
import { motion } from "framer-motion";

// ============================================================================
// EXAMPLE 1: Services Section with Staggered Cards
// ============================================================================
export function ServicesExample() {
  const services = [
    { id: 1, title: "AI Development", description: "Custom AI solutions" },
    { id: 2, title: "LLM Fine-tuning", description: "Optimize your models" },
    { id: 3, title: "Voice Agents", description: "Conversational AI" },
  ];

  return (
    <section className="py-20">
      <ScrollReveal variant="fadeInUp">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      </ScrollReveal>

      <AnimatedCardGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service) => (
          <AnimatedCardGridItem key={service.id} variant="all">
            <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </AnimatedCardGridItem>
        ))}
      </AnimatedCardGrid>
    </section>
  );
}

// ============================================================================
// EXAMPLE 2: Stats Section with Count-Up Animation
// ============================================================================
export function StatsExample() {
  return (
    <section className="py-20 bg-slate-900">
      <ScrollReveal variant="fadeInUp">
        <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        <AnimatedStatCard value={50} suffix="+" label="Happy Clients" />
        <AnimatedStatCard value={200} suffix="%" label="ROI Increase" />
        <AnimatedStatCard value={99.9} decimals={1} suffix="%" label="Uptime" />
        <AnimatedStatCard value={24} suffix="/7" label="Support" />
      </div>
    </section>
  );
}

// ============================================================================
// EXAMPLE 3: CTA Section with Pulse Button
// ============================================================================
export function CTAExample() {
  return (
    <section className="py-20">
      <ScrollReveal variant="scaleIn">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's build something amazing together
          </p>
          <AnimatedButton variant="pulse" enableSound={true}>
            <a
              href="https://calendly.com/your-link"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold"
            >
              Schedule a Call
            </a>
          </AnimatedButton>
        </div>
      </ScrollReveal>
    </section>
  );
}

// ============================================================================
// EXAMPLE 4: Feature List with Staggered Items
// ============================================================================
export function FeaturesExample() {
  const features = [
    "🚀 Lightning-fast deployment",
    "🔒 Enterprise-grade security",
    "📊 Real-time analytics",
    "🤖 AI-powered automation",
    "🌐 Global scalability",
  ];

  return (
    <section className="py-20">
      <ScrollReveal variant="fadeInUp">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
      </ScrollReveal>

      <ScrollRevealList
        staggerDelay={0.15}
        className="max-w-3xl mx-auto px-4 space-y-4"
      >
        {features.map((feature, index) => (
          <ScrollRevealItem key={index}>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <p className="text-lg">{feature}</p>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealList>
    </section>
  );
}

// ============================================================================
// EXAMPLE 5: Interactive Card with Sound
// ============================================================================
export function InteractiveCardExample() {
  const { play } = useSound();

  const handleCardClick = () => {
    play("success");
    console.log("Card clicked!");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <AnimatedCard
        variant="all"
        enable3D={true}
        enableSound={true}
        onClick={handleCardClick}
        className="cursor-pointer"
      >
        <div className="p-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Click Me!</h3>
          <p className="text-white/80">
            I have hover effects, 3D tilt, and sound!
          </p>
        </div>
      </AnimatedCard>
    </div>
  );
}

// ============================================================================
// EXAMPLE 6: Hero Section with Sequential Animations
// ============================================================================
export function HeroExample() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Welcome to the Future
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 mb-8"
        >
          Building AI solutions that transform businesses
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <AnimatedButton variant="bounce" enableSound={true}>
            Get Started
          </AnimatedButton>
          <AnimatedButton variant="scale">Learn More</AnimatedButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8"
        >
          <AnimatedStatCard value={50} suffix="+" label="Projects" />
          <AnimatedStatCard value={200} suffix="%" label="Growth" />
          <AnimatedStatCard value={99} suffix="%" label="Satisfaction" />
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// EXAMPLE 7: Testimonials Carousel
// ============================================================================
export function TestimonialsExample() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Tech Corp",
      text: "Outstanding service and results!",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CTO, AI Startup",
      text: "Game-changing AI solutions.",
    },
  ];

  return (
    <section className="py-20">
      <ScrollReveal variant="fadeInUp">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <AnimatedCard key={testimonial.id} variant="lift">
            <div className="p-8 bg-slate-800 rounded-xl">
              <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// EXAMPLE 8: Form with Success Animation
// ============================================================================
export function FormExample() {
  const { play } = useSound();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    play("success");
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <AnimatedCard variant="glow">
        <form onSubmit={handleSubmit} className="p-8 bg-slate-800 rounded-xl">
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 mb-4 bg-slate-700 rounded-lg"
            required
          />

          <textarea
            placeholder="Your message"
            className="w-full p-3 mb-6 bg-slate-700 rounded-lg"
            rows={4}
            required
          />

          <AnimatedButton
            variant={submitted ? "pulse" : "scale"}
            type="submit"
            className="w-full"
          >
            {submitted ? "✓ Sent!" : "Send Message"}
          </AnimatedButton>
        </form>
      </AnimatedCard>
    </div>
  );
}

// ============================================================================
// EXAMPLE 9: Loading State
// ============================================================================
export function LoadingExample() {
  return (
    <motion.div
      className="flex items-center justify-center p-8"
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </motion.div>
  );
}

// ============================================================================
// EXAMPLE 10: Pricing Cards
// ============================================================================
export function PricingExample() {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: 999,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 2,
      name: "Pro",
      price: 2999,
      features: ["All Starter", "Feature 4", "Feature 5"],
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: null,
      features: ["All Pro", "Custom", "Priority Support"],
    },
  ];

  return (
    <section className="py-20">
      <ScrollReveal variant="fadeInUp">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
      </ScrollReveal>

      <AnimatedCardGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {plans.map((plan) => (
          <AnimatedCardGridItem
            key={plan.id}
            variant="all"
            className={plan.popular ? "md:-mt-4 md:mb-4" : ""}
          >
            <div
              className={`p-8 rounded-xl ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-500 to-purple-500"
                  : "bg-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-bold">
                    POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

              <div className="mb-6">
                {plan.price ? (
                  <>
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold">Custom</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <AnimatedButton
                variant={plan.popular ? "glow" : "scale"}
                className="w-full"
              >
                Get Started
              </AnimatedButton>
            </div>
          </AnimatedCardGridItem>
        ))}
      </AnimatedCardGrid>
    </section>
  );
}

// ============================================================================
// HOW TO USE THESE EXAMPLES
// ============================================================================
/*

1. Copy the example you want to use
2. Import it in your page:
   import { ServicesExample } from "@/components/animations/EXAMPLES";

3. Use it in your page:
   <ServicesExample />

4. Customize:
   - Change colors
   - Adjust data
   - Modify layouts
   - Tweak animation timings

5. Tips:
   - Test on mobile
   - Check accessibility
   - Monitor performance
   - Get user feedback

*/
