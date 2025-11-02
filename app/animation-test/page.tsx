"use client";

import { useState, useEffect } from "react";
import { AnimatedStatCard } from "@/components/animations/AnimatedCounter";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useSound } from "@/lib/sounds/soundManager";
import { motion } from "framer-motion";

export default function AnimationTestPage() {
  const { play, toggleMute, isMuted } = useSound();
  const [clickCount, setClickCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Fix hydration error - only show sound state after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header with Sound Toggle */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Animation Test Page</h1>
          <button
            onClick={toggleMute}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
          >
            {mounted ? (isMuted ? "🔇 Sound Off" : "🔊 Sound On") : "🔊 Sound"}
          </button>
        </div>

        {/* Sound Test Section */}
        <section className="mb-20 p-8 bg-slate-800/50 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-bold mb-6">🔊 Sound Test</h2>
          <p className="text-gray-400 mb-6">
            Click these buttons to test sounds (enable sound above):
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => play("click")} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              Test Click Sound
            </button>
            <button onClick={() => play("success")} className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
              Test Success Sound
            </button>
            <button onClick={() => play("error")} className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
              Test Error Sound
            </button>
          </div>
          <p className="mt-4 text-green-500 text-sm">
            ✅ Sound files loaded! Make sure sound is enabled above and volume is up.
          </p>
        </section>

        {/* Test 1: Animated Counters */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Test 1: Animated Counters</h2>
          <div className="grid grid-cols-4 gap-8">
            <AnimatedStatCard
              value={7}
              suffix="+"
              label="Products"
              className="text-center"
            />
            <AnimatedStatCard
              value={200}
              suffix="%"
              label="Growth"
              className="text-center"
            />
            <AnimatedStatCard
              value={70}
              suffix="%"
              label="Savings"
              className="text-center"
            />
            <AnimatedStatCard
              value={24}
              suffix="/7"
              label="Support"
              className="text-center"
            />
          </div>
        </section>

        {/* Test 2: ENHANCED Scroll Reveal */}
        <section className="mb-20 p-8 bg-slate-800/50 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-bold mb-6">Test 2: Scroll Reveal 👇</h2>
          <p className="text-gray-400 mb-6">
            Scroll down slowly to see boxes fade in. Scroll up and back down to repeat.
          </p>
          <div className="h-64"></div>
          <ScrollReveal variant="fadeInUp" amount={0.1} duration={1}>
            <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-6">
              <p className="text-xl font-bold">✨ Fade from BOTTOM</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeInLeft" amount={0.1} duration={1}>
            <div className="p-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-6">
              <p className="text-xl font-bold">← Fade from LEFT</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeInRight" amount={0.1} duration={1}>
            <div className="p-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg mb-6">
              <p className="text-xl font-bold">Fade from RIGHT →</p>
            </div>
          </ScrollReveal>
        </section>

        {/* Test 3: Animated Cards */}
        <section className="mb-20 p-8 bg-slate-800/50 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-bold mb-6">Test 3: Animated Card (Hover & Click!) 🖱️</h2>
          <p className="text-gray-400 mb-6">Hover and click this card:</p>
          <AnimatedCard
            variant="all"
            enableSound={true}
            onClick={() => {
              setClickCount(clickCount + 1);
              play("click");
            }}
            className="max-w-md cursor-pointer"
          >
            <div className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Interactive Card</h3>
              <p className="mb-4">Hover: I lift, scale, and glow!<br/>Click: I make a sound!</p>
              <p className="text-sm opacity-75">Clicked {clickCount} times</p>
            </div>
          </AnimatedCard>
        </section>

        {/* Test 4: Animated Buttons */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Test 4: Animated Buttons</h2>
          <div className="flex gap-4">
            <AnimatedButton
              variant="scale"
              className="px-6 py-3 bg-blue-600 rounded-lg"
            >
              Scale Button
            </AnimatedButton>
            <AnimatedButton
              variant="bounce"
              className="px-6 py-3 bg-purple-600 rounded-lg"
            >
              Bounce Button
            </AnimatedButton>
            <AnimatedButton
              variant="pulse"
              className="px-6 py-3 bg-green-600 rounded-lg"
            >
              Pulse Button
            </AnimatedButton>
          </div>
        </section>

        {/* Spacer for scroll testing */}
        <div className="h-screen flex items-center justify-center">
          <p className="text-gray-500">Scroll down to see more animations</p>
        </div>

        {/* Test 5: Direct Framer Motion */}
        <section className="mb-20 p-8 bg-slate-800/50 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-bold mb-6">Test 5: Raw Framer Motion 🔥</h2>
          <p className="text-gray-400 mb-6">Direct Framer Motion (proves library works):</p>
          <div className="h-64"></div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-6"
          >
            <p className="text-xl font-bold">Direct Framer Motion: Slide from LEFT</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="p-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg"
          >
            <p className="text-xl font-bold">Direct Framer Motion: Scale + Spring</p>
          </motion.div>
        </section>

        {/* Debug Info */}
        <section className="p-8 bg-blue-900/30 border border-blue-500/50 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">🔍 Debug Info</h2>
          <div className="text-gray-300 space-y-1">
            <p>Sound: {mounted ? (isMuted ? "Muted" : "Enabled") : "Loading..."} (sounds need files in /public/sounds/)</p>
            <p>Card Clicks: {clickCount}</p>
            <p>Framer Motion: Loaded ✅</p>
          </div>
        </section>
      </div>
    </div>
  );
}
