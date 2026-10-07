# ⚡ Lightning AI Solutions

> Professional corporate website showcasing AI automation expertise, consulting services, and innovative solutions.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Live Demo**: [lightningaisolutions.in](https://lightningaisolutions.in)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

Founded in **October 2025** by **Umang Thakkar** (Founder & CEO), Lightning AI Solutions is an applied artificial intelligence company and product engineering lab. The platform operates on a dual-engine model: incubating proprietary consumer AI products (like **Astro AI**) while engineering custom production-ready AI systems (voice agents, domain LLM fine-tuning, RAG pipelines) for venture-backed startups and enterprises.

- **Dual-Engine Operating Model**: Proprietary vertical AI ventures + high-velocity applied AI engineering
- **Showcase AI/Automation Expertise**: Demonstrate capabilities in AI integration, fine-tuning, voice agents, and intelligent solutions
- **Generate B2B Leads**: Professional platform for consulting and custom development services
- **WhatsApp Business API Compliance**: Built with comprehensive legal pages to meet WhatsApp Business API requirements
- **Establish Credibility**: Production deployments, case studies, and audited client ROI metrics
- **AI Crawler & Machine-Readable Friendly**: Complete implementation of `llms.txt`, permissive `robots.txt`, XML sitemap, and RSS feed

This project serves as both a company platform and a technical demonstration of modern web and AI engineering practices.

---

## ✨ Features

### 🎨 Design & UX
- **Dark Mode Interface**: Professional dark theme with gradient accents (cyan → purple)
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Interactive Sound Effects**: Subtle hover sounds using Howler.js
- **Fully Responsive**: Mobile-first design optimized for all device sizes
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and reduced motion support

### 📄 Core Pages
- **Homepage**: Hero section, services overview, stats, and CTA
- **About Us**: Company story, team, mission, core values
- **Services**: AI automation, consulting, custom development offerings
- **Projects**: Portfolio showcase with filtering
- **Case Studies**: Detailed client success stories
- **Contact**: Form with email integration via Resend API

### 🔒 Legal Compliance
- Privacy Policy
- Terms of Service
- Cookie Policy
- Refund Policy

All legal pages include comprehensive B2B/B2C coverage, GDPR/CCPA compliance, and WhatsApp Business API requirements.

### 🚀 Performance & SEO
- **Optimized Loading**: Next.js 14 with App Router
- **SEO Ready**: Comprehensive metadata, Open Graph, Twitter Cards
- **Dynamic Sitemap**: Auto-generated XML sitemap with all 17 pages
- **Structured Data**: JSON-LD schema markup (Organization, WebSite, FAQPage, Service, LocalBusiness)
- **AI Crawler Optimized**: Explicit permissions for GPTBot, ClaudeBot, PerplexityBot, and more
- **RSS Feed**: Auto-generated feed at `/feed.xml` for content distribution
- **Machine-Readable**: Dedicated `/ai` page for AI search engines
- **Custom 404**: Branded not-found page with navigation
- **Social Preview**: 1200x630px OG image for social media sharing

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

### Backend & Services
- **Email Service**: [Resend](https://resend.com/)
- **Hosting**: [Vercel](https://vercel.com/)
- **Domain**: Hostinger DNS

### Development Tools
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript strict mode
- **Package Manager**: npm

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **Git**: Latest version

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Umang00/lightning-ai-solutions-website.git
   cd lightning-ai-solutions-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your actual values (see [Environment Variables](#environment-variables))

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) (or port 5000 on Replit)

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Resend API Configuration
# Get your API key from: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# Email Sender Address
# Option 1: Use Resend's test domain (works immediately)
MAIL_FROM=Your Company <onboarding@resend.dev>

# Option 2: Use your custom domain (requires domain verification in Resend)
# MAIL_FROM=contact@yourdomain.com

# Email Recipient (where contact form submissions go)
MAIL_TO=your-email@example.com
```

### Getting API Keys

1. **Resend API Key**:
   - Sign up at [resend.com](https://resend.com)
   - Go to API Keys section
   - Create a new API key
   - Copy and paste into `RESEND_API_KEY`

2. **Email Configuration**:
   - `MAIL_FROM`: Sender address (must be verified in Resend)
   - `MAIL_TO`: Your email where form submissions will be received

**⚠️ Security Note**: Never commit `.env.local` to version control. It's already in `.gitignore`.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Configure Environment Variables**
   - In Vercel project settings, add:
     - `RESEND_API_KEY`
     - `MAIL_FROM`
     - `MAIL_TO`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live!

### Custom Domain Setup (Hostinger)

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your domain (e.g., `yourdomain.com`)

2. **Disable Hostinger CDN** (Important!)
   - Login to Hostinger hPanel
   - Go to Domains → Manage → Website → Optimize
   - Disable Hostinger CDN

3. **Configure DNS Records**
   - In Hostinger DNS settings, add:
     ```
     Type: A
     Name: @
     Points to: 76.76.21.21
     TTL: 14400
     
     Type: CNAME
     Name: www
     Points to: cname.vercel-dns.com
     TTL: 14400
     ```

4. **Wait for Propagation**
   - DNS changes take 5-30 minutes
   - Check status in Vercel dashboard

---

## 📁 Project Structure

```
lightning-ai-solutions/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── ai/                       # AI crawler-friendly page
│   ├── api/                      # API routes
│   │   └── contact/              # Contact form endpoint
│   ├── case-studies/             # Case studies page
│   ├── contact/                  # Contact page
│   ├── cookies/                  # Cookie policy (legal)
│   ├── feed.xml/                 # RSS feed route
│   ├── privacy/                  # Privacy policy (legal)
│   ├── projects/                 # Projects portfolio
│   ├── refund-policy/            # Refund policy (legal)
│   ├── services/                 # Services page
│   ├── terms/                    # Terms of service (legal)
│   ├── layout.tsx                # Root layout with metadata
│   ├── not-found.tsx             # Custom 404 page
│   ├── page.tsx                  # Homepage
│   ├── sitemap.ts                # Dynamic sitemap generator
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── animations/               # Animation components
│   ├── about/                    # About page sections
│   ├── case-studies/             # Case study components
│   ├── contact/                  # Contact form
│   ├── home/                     # Homepage sections
│   ├── layout/                   # Layout components (Header, Footer, etc.)
│   ├── legal/                    # Legal page components
│   ├── projects/                 # Project components
│   ├── seo/                      # SEO components
│   │   ├── MetaTags.tsx          # Metadata generator helper
│   │   └── StructuredData.tsx    # JSON-LD schema component
│   ├── services/                 # Service components
│   └── ui/                       # shadcn/ui components
├── lib/                          # Utility functions & configuration
│   ├── animations/               # Animation configurations
│   │   └── config.ts             # Animation settings
│   ├── sounds/                   # Sound management
│   │   └── soundManager.ts       # Howler.js sound manager
│   ├── constants.ts              # App-wide constants
│   ├── design-system.ts          # Design tokens
│   ├── projects-data.ts          # Project portfolio data
│   └── utils.ts                  # Helper utilities
├── public/                       # Static assets
│   ├── sounds/                   # UI sound effects (hover, click, etc.)
│   ├── founder.png               # Founder profile image
│   ├── og-image.png              # Social media preview image (1200x630)
│   ├── og-template.html          # OG image template generator
│   └── robots.txt                # Search engine crawler rules
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── LICENSE                       # MIT License
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── vercel.json                   # Vercel deployment config
└── README.md                     # This file
```

---

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Code Style

- **TypeScript**: Strict mode enabled
- **Components**: Functional components with TypeScript interfaces
- **Styling**: Tailwind CSS with custom utilities
- **Naming**: PascalCase for components, camelCase for functions
- **Imports**: Organized (React → External → Internal → Types)

### Adding New Pages

1. Create folder in `app/` directory
2. Add `page.tsx` and `layout.tsx` (if needed)
3. Update navigation in `components/layout/header.tsx`
4. Add to sitemap in `app/sitemap.ts`
5. Add structured data using `StructuredData` component (if applicable)

### SEO Best Practices

The project includes comprehensive SEO infrastructure:

- **Structured Data**: Use the `StructuredData` component in `components/seo/StructuredData.tsx` for JSON-LD schemas
- **Meta Tags**: Use the `generateMetaTags()` helper from `components/seo/MetaTags.tsx` for consistent metadata
- **Sitemap**: Auto-generated at `/sitemap.xml` - update `app/sitemap.ts` when adding new pages
- **Robots.txt**: Located at `public/robots.txt` - includes permissions for all major AI crawlers
- **RSS Feed**: Auto-generated at `/feed.xml` from `app/feed.xml/route.ts`
- **AI Page**: Machine-readable company info at `/ai` for AI search engines
- **OG Image**: Social preview image at `public/og-image.png` (1200x630px)

### Adding UI Components

We use [shadcn/ui](https://ui.shadcn.com/). To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

Example:
```bash
npx shadcn-ui@latest add button
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test thoroughly before submitting PR
- Ensure no secrets/API keys in commits

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact & Leadership

**Lightning AI Solutions**
- Founder & CEO: **Umang Thakkar**
- Website: [lightningaisolutions.in](https://www.lightningaisolutions.in)
- Email: umang@lightningaisolutions.in
- Founder LinkedIn: [Umang Thakkar](https://www.linkedin.com/in/umang-thakkar-90a4a5164/)
- GitHub: [@Umang00](https://github.com/Umang00)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Vercel](https://vercel.com/) - Hosting platform
- [Resend](https://resend.com/) - Email service

---

<div align="center">

**Built with ⚡ by Lightning AI Solutions**

[Report Bug](https://github.com/Umang00/lightning-ai-solutions-website/issues) · [Request Feature](https://github.com/Umang00/lightning-ai-solutions-website/issues)

</div>
