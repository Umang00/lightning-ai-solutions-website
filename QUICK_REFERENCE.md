# Animation System - Quick Reference Card

## 🚀 Import Statement

```tsx
import {
  ScrollReveal,
  AnimatedCard,
  AnimatedButton,
  AnimatedCounter,
} from "@/components/animations";
```

## 📖 Common Patterns

### Fade In on Scroll
```tsx
<ScrollReveal variant="fadeInUp">
  <YourComponent />
</ScrollReveal>
```

### Animated Card
```tsx
<AnimatedCard variant="lift">
  <div className="p-6 bg-slate-800 rounded-lg">
    Card Content
  </div>
</AnimatedCard>
```

### Button with Click Effect
```tsx
<AnimatedButton variant="scale">
  Click Me
</AnimatedButton>
```

### Number Counter
```tsx
<AnimatedStatCard
  value={200}
  suffix="%"
  label="Growth"
/>
```

### Staggered Grid
```tsx
<AnimatedCardGrid className="grid grid-cols-3 gap-6">
  {items.map(item => (
    <AnimatedCardGridItem key={item.id} variant="lift">
      <Card {...item} />
    </AnimatedCardGridItem>
  ))}
</AnimatedCardGrid>
```

## 🎨 Animation Variants

### ScrollReveal
- `fadeInUp` (default)
- `fadeInDown`
- `fadeInLeft`
- `fadeInRight`
- `scaleIn`

### AnimatedCard
- `lift` - Hover lifts up
- `scale` - Hover scales
- `glow` - Hover glows
- `all` - All effects

### AnimatedButton
- `scale` - Hover scales up
- `bounce` - Bouncy spring
- `pulse` - Continuous pulse
- `glow` - Glow effect

## ⏱️ Duration Presets

```tsx
import { animationConfig } from "@/lib/animations/config";

animationConfig.duration.fast      // 0.15s
animationConfig.duration.normal    // 0.3s
animationConfig.duration.medium    // 0.5s
animationConfig.duration.slow      // 0.8s
```

## 🔊 Sound System

```tsx
import { useSound } from "@/lib/sounds/soundManager";

function MyComponent() {
  const { play, toggleMute } = useSound();

  return (
    <button onClick={() => play("click")}>
      Click with Sound
    </button>
  );
}
```

**Available sounds**: `click`, `hover`, `success`, `error`, `whoosh`, `pop`, `tick`

## ♿ Accessibility

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

## 🎯 Hero Stats Example

```tsx
<div className="grid grid-cols-4 gap-8">
  <AnimatedStatCard value={7} suffix="+" label="Products" />
  <AnimatedStatCard value={200} suffix="%" label="Growth" />
  <AnimatedStatCard value={70} suffix="%" label="Savings" />
  <AnimatedStatCard value={24} suffix="/7" label="Support" />
</div>
```

## 🔗 Component Props Cheat Sheet

### ScrollReveal
```tsx
variant?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn"
duration?: number          // default: 0.6
delay?: number            // default: 0
once?: boolean           // default: true
amount?: number          // default: 0.3
```

### AnimatedCard
```tsx
variant?: "lift" | "scale" | "glow" | "all"
enableSound?: boolean    // default: false
enable3D?: boolean      // default: false
```

### AnimatedButton
```tsx
variant?: "scale" | "bounce" | "pulse" | "glow"
enableSound?: boolean    // default: false
```

### AnimatedCounter
```tsx
end: number              // required
duration?: number        // default: 2.5
suffix?: string
prefix?: string
decimals?: number       // default: 0
separator?: string      // default: ","
```

## 📱 Mobile Detection

```tsx
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

<motion.div
  animate={isMobile ? simpleAnimation : complexAnimation}
>
```

## 🎬 Advanced: GSAP

```tsx
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  gsap.from(".element", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: ".container",
      start: "top center",
    },
  });
}, []);
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Animations not working | Add `"use client"` to component |
| TypeScript errors | Import from `@/components/animations` |
| Sounds not playing | Follow SOUND_SETUP.md |
| Performance issues | Reduce `enable3D`, check mobile |
| SSR errors | Components are SSR-safe, check window usage |

## 📚 Documentation Files

- **ANIMATION_GUIDE.md** - Complete usage guide
- **SOUND_SETUP.md** - Sound system setup
- **IMPLEMENTATION_SUMMARY.md** - What was built

## 💡 Best Practices

✅ **DO:**
- Use subtle animations
- Respect reduced motion
- Test on mobile
- Keep volumes low (0.2-0.4)
- Provide mute toggle

❌ **DON'T:**
- Animate everything
- Ignore performance
- Auto-play sounds
- Use loud sound effects
- Skip accessibility testing

## 🎨 Color System (For Reference)

Your site uses these colors for gradients:
```css
from-primary-blue     /* #2563eb */
to-primary-purple     /* #9333ea */
text-primary-yellow   /* Your yellow accent */
```

## ⚡ Performance Tips

1. Use CSS transforms (not position)
2. Avoid animating width/height
3. Use `will-change` sparingly
4. Lazy load below fold
5. Reduce complexity on mobile

## 🔗 Quick Links

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [Sound Sources](https://freesound.org)

---

**Need help?** Check the full guides or component source code for detailed examples!
