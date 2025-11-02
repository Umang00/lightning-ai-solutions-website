# Animation & Interaction Guide

Complete guide for using the animation system in the Lightning AI Solutions website.

## 📦 Installed Libraries

- **framer-motion** (v11.0.0) - React animation library
- **gsap** - Advanced timeline animations
- **react-countup** - Number animations
- **howler** - Sound effects management

## 🎨 Core Components

### 1. ScrollReveal Component

Automatically animate elements when they scroll into view.

```tsx
import { ScrollReveal } from "@/components/animations/ScrollReveal";

// Basic usage
<ScrollReveal variant="fadeInUp">
  <YourComponent />
</ScrollReveal>

// Custom timing
<ScrollReveal
  variant="fadeInLeft"
  duration={0.8}
  delay={0.2}
  once={true}
  amount={0.3}
>
  <YourComponent />
</ScrollReveal>
```

**Available variants:**
- `fadeInUp` - Fade in from bottom (default)
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Scale up while fading in

### 2. ScrollRevealList (Staggered Animations)

Animate multiple items with a stagger effect.

```tsx
import { ScrollRevealList, ScrollRevealItem } from "@/components/animations/ScrollReveal";

<ScrollRevealList staggerDelay={0.1}>
  {items.map((item) => (
    <ScrollRevealItem key={item.id}>
      <Card>{item.content}</Card>
    </ScrollRevealItem>
  ))}
</ScrollRevealList>
```

### 3. AnimatedCard Component

Card with hover effects and optional sound.

```tsx
import { AnimatedCard } from "@/components/animations/AnimatedCard";

// Basic usage
<AnimatedCard variant="lift">
  <CardContent />
</AnimatedCard>

// With all effects
<AnimatedCard
  variant="all"
  enable3D={true}
  enableSound={true}
  className="p-6 bg-slate-800 rounded-lg"
>
  <CardContent />
</AnimatedCard>
```

**Variants:**
- `lift` - Hover lifts card up
- `scale` - Hover scales card slightly
- `glow` - Hover adds glow effect
- `all` - All effects combined

### 4. AnimatedCardGrid

Grid container with staggered card animations.

```tsx
import { AnimatedCardGrid, AnimatedCardGridItem } from "@/components/animations/AnimatedCard";

<AnimatedCardGrid staggerDelay={0.1} className="grid grid-cols-3 gap-6">
  {cards.map((card) => (
    <AnimatedCardGridItem key={card.id} variant="lift">
      <Card {...card} />
    </AnimatedCardGridItem>
  ))}
</AnimatedCardGrid>
```

### 5. AnimatedButton Component

Button with micro-interactions.

```tsx
import { AnimatedButton } from "@/components/animations/AnimatedButton";

// Scale effect (default)
<AnimatedButton variant="scale" enableSound={true}>
  Click Me
</AnimatedButton>

// Bounce effect
<AnimatedButton variant="bounce">
  Get Started
</AnimatedButton>

// Pulse effect (continuous)
<AnimatedButton variant="pulse">
  New Feature!
</AnimatedButton>

// Glow effect
<AnimatedButton variant="glow">
  Premium
</AnimatedButton>
```

### 6. AnimatedIconButton

Icon button with rotation effect.

```tsx
import { AnimatedIconButton } from "@/components/animations/AnimatedButton";

<AnimatedIconButton enableSound={true}>
  <HeartIcon />
</AnimatedIconButton>
```

### 7. AnimatedLink Components

Links with hover effects.

```tsx
import {
  AnimatedLink,
  AnimatedUnderlineLink
} from "@/components/animations/AnimatedButton";

// Slide effect
<AnimatedLink href="/about" enableSound={true}>
  Learn More
</AnimatedLink>

// Animated underline
<AnimatedUnderlineLink href="/contact">
  Get in Touch
</AnimatedUnderlineLink>
```

### 8. AnimatedCounter

Number animation with CountUp effect.

```tsx
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

<AnimatedCounter
  end={5000}
  duration={2.5}
  suffix="+"
  prefix="$"
  separator=","
  decimals={0}
  className="text-4xl font-bold"
/>
```

### 9. AnimatedStatCard

Pre-styled stat card with counter.

```tsx
import { AnimatedStatCard } from "@/components/animations/AnimatedCounter";

<AnimatedStatCard
  value={200}
  suffix="%"
  label="Growth Rate"
  className="text-center"
/>
```

## 🎯 Animation Configuration

Access predefined animation variants from the config:

```tsx
import { animationConfig } from "@/lib/animations/config";

// Use duration presets
<motion.div transition={{ duration: animationConfig.duration.medium }}>

// Use easing presets
<motion.div transition={{ ...animationConfig.easing.spring }}>

// Use animation variants
<motion.div variants={animationConfig.variants.fadeInUp}>
```

## 🎵 Sound Effects

### Using the Sound Manager

```tsx
import { useSound } from "@/lib/sounds/soundManager";

function MyComponent() {
  const { play, toggleMute, setVolume, isMuted, volume } = useSound();

  const handleClick = () => {
    play("click");
  };

  return (
    <>
      <button onClick={handleClick}>Click with Sound</button>
      <button onClick={toggleMute}>
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </>
  );
}
```

### Available Sound Types

- `click` - Button clicks
- `hover` - Hover interactions
- `success` - Success notifications
- `error` - Error notifications
- `whoosh` - Transitions
- `pop` - Pop-up effects
- `tick` - Counter ticks

### Adding Sound Files

1. Create a `/public/sounds/` directory
2. Add your sound files (MP3 format recommended):
   - `click.mp3`
   - `hover.mp3`
   - `success.mp3`
   - `error.mp3`
   - `whoosh.mp3`
   - `pop.mp3`
   - `tick.mp3`
3. Uncomment the sound initialization in `lib/sounds/soundManager.ts`

**Recommended Sound Sources:**
- [freesound.org](https://freesound.org)
- [zapsplat.com](https://zapsplat.com)
- [mixkit.co](https://mixkit.co/free-sound-effects/)

## ♿ Accessibility

### Respecting User Preferences

All animations automatically respect the user's motion preferences:

```tsx
import { useReducedMotion } from "@/hooks/useReducedMotion";

function MyComponent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={shouldReduceMotion ? {} : { scale: 1.1 }}
    >
      Content
    </motion.div>
  );
}
```

### Manual Check

```tsx
import { getAnimationProps } from "@/hooks/useReducedMotion";

const animation = getAnimationProps(
  { scale: 1.1, rotate: 10 },  // Full animation
  { scale: 1.02 }               // Reduced motion fallback
);
```

## 🎬 Advanced: GSAP Animations

For complex timeline animations (like the journey timeline):

```tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AdvancedTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line drawing
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      // Animate cards
      gsap.from(".timeline-card", {
        opacity: 0,
        x: -100,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return <div ref={timelineRef}>...</div>;
}
```

## 🚀 Common Use Cases

### Hero Section with Staggered Elements

```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }}
>
  <motion.h1 variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
    Welcome
  </motion.h1>
  <motion.p variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
    Subtitle
  </motion.p>
  <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
    <Button>CTA</Button>
  </motion.div>
</motion.div>
```

### Card Hover with Gradient Shift

```tsx
<motion.div
  className="relative overflow-hidden"
  whileHover={{ scale: 1.05 }}
>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
    initial={{ x: "-100%" }}
    whileHover={{ x: "0%" }}
    transition={{ duration: 0.3 }}
  />
  <div className="relative z-10">Card Content</div>
</motion.div>
```

### Loading Button

```tsx
const [isLoading, setIsLoading] = useState(false);

<motion.button
  animate={isLoading ? {
    opacity: [1, 0.5, 1],
    transition: { repeat: Infinity, duration: 1.5 }
  } : {}}
>
  {isLoading ? "Loading..." : "Submit"}
</motion.button>
```

### Page Transitions

```tsx
// In your layout or _app.js
import { AnimatePresence, motion } from "framer-motion";

<AnimatePresence mode="wait">
  <motion.div
    key={router.route}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <Component {...pageProps} />
  </motion.div>
</AnimatePresence>
```

### Scroll Progress Indicator

```tsx
import { useScroll, useSpring, motion } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
}
```

## 📱 Mobile Considerations

```tsx
import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return isMobile;
}

// Usage
function MyComponent() {
  const isMobile = useIsMobile();

  return (
    <motion.div
      animate={isMobile ? { scale: 1 } : { scale: 1.1, rotate: 5 }}
    >
      Simpler animations on mobile
    </motion.div>
  );
}
```

## 🎯 Performance Tips

1. **Use CSS transforms** (translateX/Y, scale, rotate) instead of position changes
2. **Avoid animating** width, height, or layout properties
3. **Use `will-change`** sparingly for active animations:
   ```tsx
   <motion.div style={{ willChange: "transform" }}>
   ```
4. **Lazy load animations** below the fold
5. **Reduce particles** on mobile devices
6. **Disable complex animations** on low-end devices

## 🐛 Troubleshooting

### Animations not working?

1. Check if you're wrapping components with "use client" directive
2. Ensure framer-motion is properly installed
3. Check browser console for errors

### Sounds not playing?

1. Ensure sound files exist in `/public/sounds/`
2. Uncomment sound initialization in `soundManager.ts`
3. Check browser's autoplay policy

### Motion preferences not respected?

1. Test with browser DevTools: Rendering > Emulate CSS prefers-reduced-motion
2. Verify `useReducedMotion` hook is being called

## 📚 Additional Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [React CountUp](https://github.com/glennreyes/react-countup)
- [Howler.js Docs](https://howlerjs.com/)

## 🎨 Component Export Index

Create an index file for easier imports:

```tsx
// components/animations/index.ts
export * from "./ScrollReveal";
export * from "./AnimatedCard";
export * from "./AnimatedButton";
export * from "./AnimatedCounter";
```

Then import like:

```tsx
import { ScrollReveal, AnimatedCard, AnimatedButton } from "@/components/animations";
```
