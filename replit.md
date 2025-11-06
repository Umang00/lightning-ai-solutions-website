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
- **SEO & Optimization:** Comprehensive metadata (Open Graph, Twitter Card, JSON-LD schemas), dynamic sitemap with 17 pages, AI crawler-optimized `robots.txt`, RSS feed at `/feed.xml`, machine-readable `/ai` page, reusable SEO components (`StructuredData`, `MetaTags`), and 1200x630px OG image for social sharing.
- **Key Decisions:**
    - Usage of 80% pre-built `shadcn/ui` components.
    - Dark mode only (no light mode toggle).
    - Development server runs on port 5000.
    - Mobile-first responsive design.
    - `use client` directive on layout components to prevent SSR conflicts.
    - Direct component imports instead of barrel exports.
    - Global `pt-16` padding on main elements for header clearance.
    - Autoscale deployment configured for Vercel.

## External Dependencies

- **Email Service:** Resend API for contact form submissions.
- **Deployment Platform:** Vercel (configured for autoscale).
- **Domain:** `lightningaisolutions.in` (Hostinger DNS).
- **UI Components:** `shadcn/ui`.
- **Animation Library:** Framer Motion.
- **Icons:** Lucide React.
- **Form Handling:** React Hook Form with Zod validation.

## Recent Changes

### November 6, 2025 - SEO & AI Crawler Optimization
- **SEO Infrastructure:** Created reusable `StructuredData` component (JSON-LD schemas) and `MetaTags` helper for consistent metadata across all pages.
- **AI Crawler Support:** Added `/ai` machine-readable page with JSON company overview, technical stack, and citation format for AI search engines.
- **Enhanced robots.txt:** Explicit permissions for all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot, Bingbot, Googlebot, Google-Extended).
- **RSS Feed:** Auto-generated feed at `/feed.xml` for content distribution and crawler discovery.
- **Custom 404:** Branded not-found page with navigation and gradient design.
- **Vercel Config:** Created `vercel.json` with proper headers, caching, and HTTP→HTTPS redirects.
- **OG Image:** Added 1200x630px social preview image with lightning logo and gradient branding.
- **Domain Corrections:** Fixed all references from `lightningai.solutions` to `www.lightningaisolutions.in`.
- **Email Corrections:** Fixed all instances from `umang@lightningaisolution.in` to `umang@lightningaisolutions.in`.
- **Build Status:** ✅ Production build successful with 17 pages (was 15).

### November 3, 2025 - Documentation & Deployment
- **Documentation:** Added comprehensive README.md for GitHub repository with installation, deployment, and contribution guidelines.
- **License:** Added MIT License file.
- **Environment Variables:** Updated contact API to use MAIL_FROM and MAIL_TO environment variables for flexible email configuration.
- **Vercel Deployment:** Configured for production deployment with environment variable documentation in .env.example.
- **Security:** Verified .env.local is in .gitignore to prevent secrets from being committed.