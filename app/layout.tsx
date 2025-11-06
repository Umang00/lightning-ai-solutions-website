import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/layout/cookie-consent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lightningaisolutions.in"),
  title: {
    default: "Lightning AI Solutions - AI Product Development & Automation",
    template: "%s | Lightning AI Solutions",
  },
  description:
    "Transform your business with custom AI solutions. From AI product development to LLM fine-tuning, voice agents, and intelligent automation. Delivered in weeks, not months.",
  keywords: [
    "AI development",
    "LLM fine-tuning",
    "voice AI agents",
    "AI automation",
    "AI analytics",
    "WhatsApp AI",
    "Astro AI",
    "AI consulting",
    "machine learning",
    "artificial intelligence",
  ],
  authors: [{ name: "Lightning AI Solutions" }],
  creator: "Lightning AI Solutions",
  publisher: "Lightning AI Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.lightningaisolutions.in",
    siteName: "Lightning AI Solutions",
    title: "Lightning AI Solutions - AI Product Development & Automation",
    description:
      "Transform your business with custom AI solutions. From AI product development to LLM fine-tuning, voice agents, and intelligent automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lightning AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightning AI Solutions - AI Product Development & Automation",
    description:
      "Transform your business with custom AI solutions. From AI product development to LLM fine-tuning, voice agents, and intelligent automation.",
    images: ["/og-image.png"],
    creator: "@lightningai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lightning AI Solutions",
              url: "https://www.lightningaisolutions.in",
              logo: "https://www.lightningaisolutions.in/logo.png",
              description:
                "AI product development, LLM fine-tuning, voice AI agents, intelligent automation, and AI analytics services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6/A Chinar Gulnar, Anand Vidhyanagar Road",
                addressLocality: "Anand",
                addressRegion: "Gujarat",
                postalCode: "388001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9426154668",
                contactType: "Customer Service",
                email: "umang@lightningaisolutions.in",
              },
              sameAs: [
                "https://linkedin.com/company/lightningai",
                "https://twitter.com/lightningai",
              ],
              founder: {
                "@type": "Person",
                name: "Umang Thakkar",
                jobTitle: "AI Product Manager & Builder",
              },
              areaServed: "Worldwide",
              serviceType: [
                "AI Product Development",
                "LLM Fine-tuning",
                "Voice AI Agents",
                "Intelligent Automation",
                "AI Analytics",
              ],
            }),
          }}
        />
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Toaster />
      </body>
    </html>
  );
}
