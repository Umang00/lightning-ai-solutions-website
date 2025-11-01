// Company Information
export const COMPANY = {
  name: "Lightning AI Solutions",
  tagline: "Lightning-Fast AI Solutions That Scale",
  location: "Anand, Gujarat, India",
  address: "6/A Chinar Gulnar, Anand Vidhyanagar Road, Anand, Gujarat, India",
  pincode: "388001",
  email: "umang@lightningaisolutions.in",
  phone: "+91 9426154668",
  founded: "2025",
} as const;

// Founder Information
export const FOUNDER = {
  name: "Umang Thakkar",
  title: "AI Product Manager & Builder",
  experience: "4+",
  linkedin: "https://www.linkedin.com/in/umang-thakkar-90a4a5164/",
} as const;

// Social Links
export const SOCIAL_LINKS = {
  linkedin: "#",
  email: `mailto:${COMPANY.email}`,
  phone: `tel:${COMPANY.phone}`,
} as const;

// Navigation Links
export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI Development", href: "/services#ai-development" },
    { label: "LLM Fine-tuning", href: "/services#llm-finetuning" },
    { label: "Voice Agents", href: "/services#voice-agents" },
    { label: "Automation", href: "/services#automation" },
    { label: "Analytics", href: "/services#analytics" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
} as const;

// Tech Stack
export const TECH_STACK = [
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "Supabase",
  "OpenAI",
  "Anthropic",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "LangChain",
  "ElevenLabs",
  "Retool",
  "Make.com",
  "Mixpanel",
  "Figma",
  "Cursor",
  "Claude",
  "GPT-4",
] as const;

// Impact Stats
export const IMPACT_STATS = [
  {
    icon: "📈",
    value: "200%",
    label: "User Engagement",
    sublabel: "Increase",
  },
  {
    icon: "🎙️",
    value: "100+",
    label: "Daily Automated",
    sublabel: "Interviews",
  },
  {
    icon: "💰",
    value: "70%",
    label: "Cost Reduction",
    sublabel: "",
  },
  {
    icon: "⚡",
    value: "4+",
    label: "Years Building",
    sublabel: "AI Products",
  },
] as const;
