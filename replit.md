# Lightning AI Solutions - Corporate Website

## Overview

The Lightning AI Solutions Corporate Website aims to secure WhatsApp Business API approval for Astro AI, establish corporate credibility, showcase AI/automation expertise, and generate leads for consulting and product development services. It is built using Next.js 14, TypeScript, and Tailwind CSS, featuring a professional dark-mode design, smooth animations, and comprehensive SEO. The project emphasizes compliance with WhatsApp API requirements, particularly through dedicated legal pages.

## User Preferences

- I prefer a professional and concise communication style.
- I value iterative development and clear task breakdowns.
- Ask for confirmation before making major architectural changes or decisions.
- Ensure all development aligns with the primary goal of securing WhatsApp Business API approval.
- Prioritize accessibility and performance in all implementations.

## System Architecture

The project utilizes Next.js 14 (App Router) with TypeScript and Tailwind CSS for a modern, performant, and maintainable corporate website. shadcn/ui components are used extensively (80%) for rapid UI development, complemented by Framer Motion for smooth animations and Lucide React for icons. Form handling is managed with React Hook Form and Zod for validation.

### UI/UX Decisions
- **Color Scheme:** Dark mode by default, featuring Primary Dark (#0f172a) as the main background, Primary Slate (#1e293b) for card backgrounds, Primary Blue (#06b6d4) as the primary brand color, Primary Purple (#8b5cf6) for secondary accents, and Primary Yellow (#fbbf24) for highlights.
- **Typography:** Inter and Geist Sans for body text, and JetBrains Mono for monospace elements.
- **Design Principles:** Gradient text effects (cyan → purple), smooth animations, mobile-first responsive design, accessibility compliant (WCAG 2.1 AA), focus styles for keyboard navigation, and reduced motion support.

### Technical Implementations
- **Core Layout:** Includes a Header, Footer, Mobile menu, and Cookie banner.
- **Pages:** Consists of 6 main pages (Homepage, About Us, Projects, Services, Case Studies, Contact) and 4 legal pages (Privacy Policy, Terms of Service, Cookie Policy, Refund Policy) crucial for WhatsApp API compliance.
- **Legal Pages (Updated Oct 30, 2025):** All 4 legal policies updated with comprehensive dual-purpose B2B/B2C content covering client services and Astro AI subscriptions, including international taxation, GDPR/CCPA compliance, WhatsApp Business API requirements, detailed refund policies, and cookie consent management.
- **SEO & Optimization:** Comprehensive metadata (Open Graph, Twitter Card, JSON-LD), dynamic sitemap generation, `robots.txt` configuration, and page-level metadata across all routes.
- **Key Decisions:**
    - Usage of 80% pre-built `shadcn/ui` components.
    - Dark mode only (no light mode toggle).
    - Development server runs on port 5000.
    - Mobile-first responsive design.
    - `use client` directive on layout components to prevent SSR conflicts.
    - Direct component imports instead of barrel exports.
    - Global `pt-16` padding on main elements for header clearance.
    - Autoscale deployment configured for Vercel.

## Animation System (Added Nov 1, 2025)

A production-ready animation system has been implemented to enhance user experience with smooth micro-interactions and scroll-triggered animations.

### Animation Infrastructure
- **Motion Configuration:** Centralized timing (fast: 0.18s, base: 0.32s, slow: 0.6s), easing curves, and stagger values in `lib/motion/config.ts`
- **Reusable Variants:** Pre-built animation patterns (fadeInUp, slideIn, scaleIn, etc.) in `lib/motion/variants.ts`
- **Motion Provider:** Global configuration wrapper with reduced motion support in `lib/motion/MotionProvider.tsx`
- **Device Detection:** Performance optimization utility (`useDeviceType.ts`) that disables 3D effects on mobile/low-end devices

### Animation Components
- **AnimatedSection:** Scroll-triggered section animations with viewport detection
- **AnimatedCard:** Interactive cards with 3D tilt effect (desktop only), hover animations, and sound feedback
- **AnimatedButton:** Micro-interaction button with scale animations and click sounds

### Sound System (Optional)
- **Sound Manager:** Singleton sound manager with rate limiting and localStorage preferences
- **Sound Effects Hook:** React hook (`useSoundEffects`) for playing UI sounds (click, hover, success, error, whoosh)
- **Sound Toggle:** UI component in header for enabling/disabling sound effects
- **Note:** Sound effects are optional - system works perfectly without the sound sprite file (`public/sounds/ui-sounds.mp3`)

### Performance & Accessibility
- **Reduced Motion Support:** Respects system `prefers-reduced-motion` setting and user preferences
- **Lazy Loading:** GSAP loaded only when needed (not currently used but available for complex timelines)
- **Device Optimization:** 3D effects disabled on mobile and low-end devices for 60fps performance
- **Bundle Size:** ~100KB total (Framer Motion ~40KB, GSAP ~50KB lazy-loaded, Howler ~9KB)

### Usage Example
```typescript
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { fadeInUp } from '@/lib/motion/variants';

<AnimatedSection variants={fadeInUp} delay={0.2}>
  <h1>Your content here</h1>
</AnimatedSection>
```

## External Dependencies

- **Email Service:** Resend API for contact form submissions.
- **Deployment Platform:** Vercel (configured for autoscale).
- **Domain:** `lightningai.solutions` (to be configured post-deployment).
- **UI Components:** `shadcn/ui`.
- **Animation Libraries:** Framer Motion (primary), GSAP (lazy-loaded for complex timelines), Howler.js (sound effects), react-countup (number animations).
- **Icons:** Lucide React.
- **Form Handling:** React Hook Form with Zod validation.