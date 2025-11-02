import { LucideIcon } from "lucide-react";
import { Sparkles, Brain, Mic, BarChart3, MessageSquare, Megaphone, Rocket } from "lucide-react";

export interface ProjectMetric {
  metric: string;
  label: string;
}

export interface Project {
  id: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  client: string;
  industry: string;
  timeline: string;
  role: string;
  status: string;
  tags: string[];
  categories: string[];
  gradient: string;
  metrics: ProjectMetric[];
  
  // Case Study Details
  problem: string;
  solution: string;
  features: string[];
  outcomes: string[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  detailedFeatures?: {
    title: string;
    description: string;
    details: string[];
  }[];
}

export const ALL_PROJECTS: Project[] = [
  {
    id: "astro-ai",
    icon: Sparkles,
    title: "Astro AI - AI-Powered Vedic Astrology Platform",
    shortTitle: "Astro AI",
    description: "AI-powered Vedic astrology platform delivering personalized insights via WhatsApp with 200% engagement boost",
    client: "Lightning AI Solutions (Self-Initiated)",
    industry: "Consumer Tech | Spiritual Wellness",
    timeline: "3 months (Ongoing Development)",
    role: "Founder, Solo Product Manager & Full-Stack Developer",
    status: "Active Development for WhatsApp Launch",
    tags: ["OpenAI GPT-4", "WhatsApp API", "LLM Fine-tuning", "RAG Pipeline", "Python", "PostgreSQL"],
    categories: ["LLM", "WhatsApp"],
    gradient: "from-purple-600 to-blue-600",
    metrics: [
      { metric: "200%", label: "Engagement Boost" },
      { metric: "5M+", label: "Target Users" },
      { metric: "4.8/5", label: "User Satisfaction" },
      { metric: "3s", label: "Avg Response Time" },
    ],
    problem: "Traditional astrology consultations are expensive ($50-$200 per session), time-consuming, and inaccessible to most people. Users face high costs, limited availability, complexity barriers, and app fatigue. 70% of 18-35 year olds are interested in astrology but only 15% have had professional readings due to cost and access barriers.",
    solution: "Built an AI-powered Vedic astrology platform combining Swiss Ephemeris for NASA-grade astronomical calculations with GPT-4 for natural language conversations, delivered via WhatsApp. The system provides personalized birth chart analysis, daily predictions, compatibility matching, and multilingual support (English, Hindi, Gujarati) - all for $2.99/month vs $50-200 per traditional consultation.",
    features: [
      "WhatsApp Integration - Seamless delivery via WhatsApp Business API, no app download required",
      "Vedic AI Engine - Custom LLM fine-tuned on authentic Vedic astrology texts",
      "Birth Chart Generation - Complete Kundli with planetary positions, houses, nakshatras using Swiss Ephemeris",
      "Personalized Predictions - Daily, weekly, monthly forecasts based on real-time transits",
      "Compatibility Analysis - Synastry analysis comparing two birth charts with detailed scoring",
      "Multilingual Support - Available in English, Hindi, and Gujarati with automatic language detection",
      "24/7 Availability - Instant responses within 3-5 seconds, no appointment booking",
      "Educational Approach - Explains complex astrological concepts in simple, conversational language",
    ],
    outcomes: [
      "Transformed one-time consultations into recurring daily engagement (200% increase)",
      "Made astrology accessible with 95% cost reduction ($2.99/month vs $50-200 per session)",
      "Enabled 24/7 availability without hiring astrologers",
      "Created scalable revenue model with subscription pricing targeting 10,000+ users in first 3 months",
      "Zero friction distribution through WhatsApp (400M+ users in India)",
      "Multilingual support reaching underserved regional language speakers (600M+ Hindi speakers)",
    ],
    technologies: ["OpenAI GPT-4", "WhatsApp Business API", "LLM Fine-tuning", "Swiss Ephemeris", "Python", "PostgreSQL", "RAG Pipeline"],
    testimonial: {
      quote: "Astro AI makes professional Vedic astrology accessible to everyone. The AI understands complex astrological principles and explains them in a way that's easy to understand. It's like having a personal astrologer available 24/7 at a fraction of the cost.",
      author: "Beta User Feedback",
      role: "Early Adopter",
    },
    detailedFeatures: [
      {
        title: "AI-Powered Birth Chart Generation",
        description: "Generates complete Vedic birth chart (Kundli) from birth details with NASA-grade astronomical accuracy",
        details: [
          "Calculates positions of Sun, Moon, and 7 planets using Swiss Ephemeris",
          "Determines Ascendant (Lagna) and Moon Nakshatra (1 of 27 lunar mansions)",
          "Places planets in 12 houses and creates divisional charts (D-1, D-9, D-10)",
          "Identifies yogas (planetary combinations) and calculates planetary strengths",
          "Generates visual chart image in North Indian or South Indian style",
        ],
      },
      {
        title: "Daily, Weekly & Yearly Predictions",
        description: "Personalized forecasts based on current planetary transits affecting your specific birth chart",
        details: [
          "Real-time transit calculations showing how today's planets interact with your chart",
          "Lucky time windows and auspicious activities recommendations",
          "Month-by-month breakdowns with key dates and themes",
          "Dasha period analysis (Vimshottari 120-year planetary cycle system)",
          "Downloadable PDF reports for yearly predictions (15+ pages)",
        ],
      },
      {
        title: "Compatibility & Matchmaking",
        description: "Analyzes relationship compatibility by comparing birth charts with detailed scoring algorithm",
        details: [
          "Overall compatibility score (0-100%) with weighted algorithm",
          "Emotional compatibility (Moon-Moon aspects, 30% weight)",
          "Physical attraction (Venus-Mars dynamics, 20% weight)",
          "Communication compatibility (Mercury placements, 15% weight)",
          "Marriage timing analysis and auspicious date recommendations",
        ],
      },
    ],
  },
  {
    id: "mbti-matching",
    icon: Brain,
    title: "MBTI-Based Personality Matching System",
    shortTitle: "MBTI Matching",
    description: "Comprehensive personality matching algorithm integrating MBTI framework with dating preferences for transparent, science-based matchmaking",
    client: "Hunch Dating App",
    industry: "Dating & Social",
    timeline: "8 weeks",
    role: "Lead Product Manager & Algorithm Designer",
    status: "Deployed & Live (Serving 100K+ users)",
    tags: ["Python", "PostgreSQL", "MBTI", "Algorithm Design", "Product Strategy"],
    categories: ["LLM", "Automation"],
    gradient: "from-cyan-600 to-blue-600",
    metrics: [
      { metric: "200%", label: "Session Time Increase" },
      { metric: "152%", label: "Messages per Match" },
      { metric: "133%", label: "Match Acceptance" },
      { metric: "100K+", label: "Users Served" },
    ],
    problem: "Dating app had stagnant engagement despite 100K user base. Average session time stuck at 3 minutes, low message rate (2.3 per match vs industry 5+), 65% first-week churn, and no product differentiation. Users complained matches felt random with no transparency in how the algorithm works, making it hard to start meaningful conversations.",
    solution: "Designed and implemented ground-up personality matching system combining MBTI (Myers-Briggs Type Indicator) psychological framework with existing preferences. Created transparent 0-100% compatibility scores with detailed explanations across 4 dimensions: Personality Compatibility (40%), Value Alignment (30%), Lifestyle Compatibility (20%), and Communication Style (10%). System provides educational insights about personality dynamics.",
    features: [
      "16 MBTI Personality Types - Comprehensive assessment covering all personality dimensions",
      "Transparent Compatibility Scores - 0-100% scores with detailed breakdowns explaining why you match",
      "Psychology-Based Algorithm - Weighted scoring based on complementary traits and cognitive functions",
      "Educational Insights - Learn about personality compatibility and relationship dynamics",
      "Icebreaker Suggestions - Personality-aware conversation starters based on compatibility factors",
      "Real-Time Calculations - <100ms per match pair using PostgreSQL stored procedures",
      "A/B Tested & Validated - 4-week testing with statistically significant improvements",
    ],
    outcomes: [
      "Session time increased 200% (3 min → 9 min)",
      "Messages per match increased 152% (2.3 → 5.8)",
      "Match acceptance rate increased 133% (15% → 35%)",
      "User satisfaction increased 41% (3.2/5 → 4.5/5)",
      "7-day retention increased 86% (22% → 41%)",
      "Became core product differentiator and strategic competitive advantage",
    ],
    technologies: ["Python", "PostgreSQL", "MBTI Framework", "Algorithm Design", "A/B Testing"],
  },
  {
    id: "voice-agent",
    icon: Mic,
    title: "Voice-Based UXR Automation Agent",
    shortTitle: "Voice UXR Agent",
    description: "AI-powered voice agent conducting, transcribing, and analyzing user research interviews at scale with 70% cost reduction",
    client: "Hunch (Internal Product Team)",
    industry: "Research & Analytics",
    timeline: "5 weeks",
    role: "Solo Product Manager & Full-Stack Developer",
    status: "Deployed & Active (50+ daily interviews)",
    tags: ["ElevenLabs", "OpenAI GPT-4", "Whisper", "Twilio", "Python"],
    categories: ["Voice AI", "LLM"],
    gradient: "from-blue-600 to-purple-600",
    metrics: [
      { metric: "70%", label: "Cost Reduction" },
      { metric: "100+", label: "Daily Interviews" },
      { metric: "25x", label: "Capacity Increase" },
      { metric: "$7K+", label: "Monthly Savings" },
    ],
    problem: "Product team needed 10x more user feedback but manual interviews were limiting: only 2-3 interviews/day capacity, $50/interview cost, 3 days from interview to insights, and couldn't scale without proportional cost increase. Attempted solutions like hiring more researchers (too expensive) and survey tools (low 12% response rates) failed.",
    solution: "Built AI-powered voice agent system automating entire interview pipeline: outbound calling (Twilio), natural voice conversations (ElevenLabs + GPT-4), real-time transcription (Whisper), sentiment analysis, theme extraction, and insights generation. Scaled capacity from 2-3 to 50+ interviews daily while reducing cost from $50 to $15 per interview.",
    features: [
      "Natural Voice Conversations - Human-like voice with empathetic responses and graceful interruption handling",
      "Dynamic Follow-Up Questions - GPT-4 generates contextual follow-ups based on user responses",
      "Real-Time Transcription - 95% accuracy with speaker diarization and timestamps",
      "Sentiment Analysis - Per-response sentiment scoring detecting frustration, excitement, confusion",
      "Theme Extraction - Automatically identifies recurring themes: Feature Requests, Pain Points, UX Issues",
      "Insights Dashboard - Real-time monitoring, transcript search, sentiment trends, automated insights",
      "Smart Scheduling - Automated retry logic with voicemail detection and skip",
      "Quality Control - Confidence scoring and flagging for human review",
    ],
    outcomes: [
      "Reduced cost per screening from $50 to $15 (70% reduction)",
      "Increased capacity from 2-3 to 50+ interviews per day (25x increase)",
      "Reduced time from interview to insights from 3 days to same-day",
      "Standardized interview process across all participants",
      "Freed up researchers to focus on high-value strategic insights",
      "Enabled data-driven decisions with 10x more user feedback",
    ],
    technologies: ["ElevenLabs", "OpenAI GPT-4", "Whisper API", "Twilio", "Python", "Retool", "PostgreSQL"],
  },
  {
    id: "retool-dashboard",
    icon: BarChart3,
    title: "Retool Marketing Analytics Dashboard",
    shortTitle: "Marketing Dashboard",
    description: "Unified analytics dashboard consolidating 5+ data sources with AI-powered sentiment analysis, saving $10,000+ monthly and 15+ hours weekly",
    client: "Hunch (Marketing Team)",
    industry: "Marketing & Analytics",
    timeline: "4 weeks",
    role: "Solo Product Manager & Data Engineer",
    status: "Deployed & Active (Daily usage)",
    tags: ["Retool", "OpenAI GPT-4", "PostgreSQL", "Analytics", "Social Media APIs"],
    categories: ["Analytics", "Automation"],
    gradient: "from-yellow-600 to-orange-600",
    metrics: [
      { metric: "$10K+", label: "Monthly Savings" },
      { metric: "15h", label: "Weekly Time Saved" },
      { metric: "25%", label: "Content Improvement" },
      { metric: "534%", label: "Year 1 ROI" },
    ],
    problem: "Marketing team drowning in fragmented tools spending $1,200/month on Hootsuite ($300), Sprout Social ($500), and Mention ($400). Team spent 15+ hours/week copying data between tools, 2 days to generate weekly reports, with no sentiment analysis or unified view. Slow reaction to trending content and missed viral opportunities.",
    solution: "Built all-in-one analytics dashboard using Retool consolidating Instagram, Twitter, TikTok, PostgreSQL, and Google Analytics. Replaced 3 expensive SaaS tools with custom solution providing better insights. Added AI-powered sentiment analysis, viral content pattern identification, competitor tracking, and automated daily insight summaries—all in one interface.",
    features: [
      "Unified Data Integration - Real-time data from Instagram, Twitter, TikTok, PostgreSQL, Google Analytics",
      "AI-Powered Sentiment Analysis - Analyzes all comments with -1 to +1 scoring, flags negative comments",
      "Viral Content Analysis - Pattern identification for what makes content go viral, replication playbooks",
      "Competitor Tracking - Monitor 3 main competitors with engagement comparison and gap analysis",
      "Real-Time Dashboard - Key metrics across platforms with today vs yesterday comparison",
      "Custom Alerts - Automated notifications for viral spikes, negative sentiment, trending topics",
      "Automated Insights - Daily summary emails with actionable recommendations",
      "Export & Reporting - One-click weekly/monthly report generation",
    ],
    outcomes: [
      "Reduced SaaS costs by $10,000+/month (eliminated Hootsuite, Sprout Social, Mention)",
      "Saved 15+ hours weekly in manual data aggregation work",
      "Reduced report generation time from 2 days to 15 minutes",
      "Improved content performance by 25% using AI insights",
      "Enabled real-time reaction to trending content and viral opportunities",
      "534% ROI in Year 1 with 6-week payback period",
    ],
    technologies: ["Retool", "OpenAI GPT-4", "Instagram API", "Twitter API", "TikTok API", "PostgreSQL", "Google Analytics 4", "Python"],
  },
  {
    id: "chatbot",
    icon: MessageSquare,
    title: "Fine-Tuned In-App Chatbot",
    shortTitle: "AI Chatbot",
    description: "Personality-aware conversation AI fine-tuned on 450+ examples, generating personalized icebreakers and increasing session time by 100%",
    client: "Hunch Dating App",
    industry: "Dating & Conversational AI",
    timeline: "6 weeks",
    role: "Solo AI Product Manager & ML Engineer",
    status: "Deployed & Live (50K+ daily conversations)",
    tags: ["OpenAI GPT-3.5", "LLM Fine-tuning", "MBTI", "Conversational AI", "Python"],
    categories: ["LLM"],
    gradient: "from-green-600 to-cyan-600",
    metrics: [
      { metric: "100%", label: "Session Time Increase" },
      { metric: "50K+", label: "Daily Conversations" },
      { metric: "78%", label: "Response Rate" },
      { metric: "100K+", label: "Users Served" },
    ],
    problem: "35% of matches never received a first message. Generic openers like 'Hey' got only 15% response rate. Average conversation length was just 3.2 messages before dying. Users reported not knowing what to say. 42% churned after no successful conversations in first week. Pre-written templates felt impersonal (8% usage) and random questions weren't contextual (12% response rate).",
    solution: "Fine-tuned GPT-3.5 on 450+ high-quality conversation examples to create personality-aware chatbot generating AI-powered conversation starters based on users' MBTI types. System generates 3-5 personalized icebreakers, contextual follow-up suggestions, and 'keep the conversation going' prompts—all tailored to personality compatibility dynamics between matches.",
    features: [
      "Personality-Aware Starters - 3-5 personalized conversation openers based on MBTI compatibility",
      "Contextual Follow-Ups - Dynamic suggestions during conversation when chat momentum slows",
      "Training on 450+ Examples - High-quality conversations from dating coaches and successful users",
      "MBTI Integration - Understands all 16 personality types and their communication dynamics",
      "Profile-Based Context - References shared interests, bio details, and compatibility factors",
      "Real-Time Generation - <2 second response time for conversation suggestions",
      "A/B Tested Quality - Validated with 78% response rate vs 15% for generic openers",
      "Conversation Coaching - Provides personality insights like 'Your match values deep discussions'",
    ],
    outcomes: [
      "Session time increased 100% (users spent 2x longer in-app)",
      "Response rate increased to 78% from 15% baseline",
      "Average conversation length increased from 3.2 to 8.7 messages",
      "First message rate increased from 65% to 89% of matches",
      "User satisfaction increased with feature becoming 'most beloved'",
      "Reduced first-week churn by helping users have successful conversations",
    ],
    technologies: ["OpenAI GPT-3.5", "LLM Fine-tuning", "MBTI Framework", "Python", "PostgreSQL", "React"],
  },
  {
    id: "poll-engine",
    icon: Megaphone,
    title: "Poll Promotion Engine",
    shortTitle: "Poll Engine",
    description: "Automated campaign management interface reducing launch time from 2 days to 5 minutes with 85% manual effort reduction",
    client: "Hunch (Content & Growth Teams)",
    industry: "Campaign Management",
    timeline: "6 weeks",
    role: "Solo Product Manager & Full-Stack Developer",
    status: "Deployed & Active (8+ months)",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Campaign Management"],
    categories: ["Automation"],
    gradient: "from-pink-600 to-purple-600",
    metrics: [
      { metric: "99%", label: "Launch Time Reduction" },
      { metric: "85%", label: "Manual Effort Saved" },
      { metric: "35%", label: "Campaign Performance" },
      { metric: "3x", label: "More Campaigns/Month" },
    ],
    problem: "Manual campaign creation took 2 days involving spreadsheets, SQL queries, and cross-team coordination. Required engineering team for each launch. Dependent on expensive Amazon Personalize ($800/month) with limited control. No self-serve interface for content team. Errors in manual targeting led to poor campaign performance and team bottlenecks.",
    solution: "Built self-serve campaign management platform with visual campaign builder (no code/SQL required), precision audience targeting (age, gender, location, personality type, behavior), preview before launch, A/B test setup, real-time performance tracking, and automated scheduling. Replaced Amazon Personalize with custom targeting algorithm, eliminating $800/month dependency.",
    features: [
      "Visual Campaign Builder - No-code interface for creating targeted poll campaigns",
      "Precision Audience Targeting - Filter by age, gender, location, MBTI type, user behavior",
      "Campaign Preview - Estimate reach and view sample audience before launch",
      "A/B Test Setup - Split audiences and compare performance automatically",
      "Real-Time Performance Tracking - Live metrics on engagement, responses, demographics",
      "Automated Scheduling - Set it and forget it campaign execution",
      "Custom Targeting Algorithm - Replaced Amazon Personalize, better results at zero cost",
      "Queue-Based Distribution - Redis + Bull for reliable poll delivery",
    ],
    outcomes: [
      "Launch time reduced from 2 days to 5 minutes (99% reduction)",
      "Manual effort reduced 85% (eliminated spreadsheets, SQL, engineering dependency)",
      "Campaign performance improved 35% with better targeting",
      "Team productivity increased 3x more campaigns launched per month",
      "Eliminated $800/month Amazon Personalize cost",
      "Used daily for 8+ months without issues, proving reliability",
    ],
    technologies: ["React", "TypeScript", "Redux", "Node.js", "Express", "PostgreSQL", "Redis", "Bull", "Socket.io", "AWS"],
  },
  {
    id: "web-onboarding",
    icon: Rocket,
    title: "Web Onboarding Revenue Stream",
    shortTitle: "Web Onboarding",
    description: "Web-based MBTI assessment and app conversion funnel generating $1,500/month revenue (30% boost) from first month",
    client: "Hunch Dating App",
    industry: "Revenue Generation | Growth",
    timeline: "4 weeks",
    role: "Solo Product Manager & Full-Stack Developer",
    status: "Deployed & Live",
    tags: ["React", "Stripe", "MBTI", "Email Marketing", "SEO", "Growth"],
    categories: ["Automation"],
    gradient: "from-orange-600 to-red-600",
    metrics: [
      { metric: "$1.5K", label: "Monthly Revenue (Mo. 1)" },
      { metric: "30%", label: "Revenue Boost" },
      { metric: "10K+", label: "Monthly Web Visitors" },
      { metric: "40%", label: "Premium Conversion" },
    ],
    problem: "All personality features locked behind app download barrier. Users wanted to try before downloading. No web presence for SEO/discoverability. Missing monetization of 10K+ monthly web visitors. No email lead capture before app install. App store approval barrier created download hesitation with no preview of product value.",
    solution: "Built web-based MBTI personality assessment with monetization funnel: SEO-optimized landing page → 16-question test with beautiful UI → Personality results page with free basic insights → Premium $4.99 detailed PDF report OR seamless app download with data transfer → Email nurture sequence. Created entirely new revenue stream generating $1,500 in first month.",
    features: [
      "SEO-Optimized Landing Page - 'Discover Your Dating Personality Type' targeting 50K+ monthly searches",
      "Mobile-Optimized Assessment - 16-question test with progress bar, 5-minute completion",
      "Instant Results - Personality type reveal with celebration animation and detailed description",
      "Premium PDF Reports - 15-page comprehensive analysis for $4.99 (40% conversion)",
      "Seamless App Transfer - One-tap login with personality pre-populated, no re-testing",
      "Email Marketing Automation - Welcome sequence, abandoned test recovery, personality-specific content",
      "Stripe Payment Integration - Multiple payment methods with automatic receipt and PDF delivery",
      "Analytics Dashboard - Conversion funnel tracking, revenue metrics, traffic sources, A/B tests",
    ],
    outcomes: [
      "Generated $1,500 revenue in first month from new channel",
      "Contributed 30% boost to existing $5,000 monthly revenue",
      "40% premium conversion rate ($4.99 detailed reports)",
      "Captured 10K+ email leads for nurture campaigns",
      "Improved app download conversion by providing value preview",
      "Created compounding SEO asset driving organic traffic growth",
    ],
    technologies: ["React", "TypeScript", "Stripe", "Node.js", "PostgreSQL", "Email Marketing", "PDF Generation", "Google Analytics"],
  },
];
