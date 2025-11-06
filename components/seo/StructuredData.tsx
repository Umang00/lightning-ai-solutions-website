import Script from 'next/script';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'FAQPage' | 'Service' | 'LocalBusiness';
  data?: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lightning AI Solutions",
          "url": "https://www.lightningaisolutions.in",
          "logo": "https://www.lightningaisolutions.in/logo.png",
          "description": "Professional AI automation, consulting, and custom development services for businesses. We build AI agents, RAG search systems, and intelligent automation solutions.",
          "email": "umang@lightningaisolutions.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "6/A Chinar Gulnar, Anand Vidhyanagar Road",
            "addressLocality": "Anand",
            "addressRegion": "Gujarat",
            "postalCode": "388001",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9426154668",
            "contactType": "Customer Service",
            "email": "umang@lightningaisolutions.in"
          },
          "sameAs": [
            "https://github.com/Umang00",
            "https://www.linkedin.com/in/umang-thakkar-90a4a5164/"
          ],
          "foundingDate": "2025",
          "founder": {
            "@type": "Person",
            "name": "Umang Thakkar",
            "jobTitle": "AI Product Manager & Builder"
          },
          "areaServed": "Worldwide",
          "serviceType": [
            "AI Product Development",
            "LLM Fine-tuning",
            "Voice AI Agents",
            "Intelligent Automation",
            "AI Analytics",
            "RAG Search Systems"
          ]
        };

      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.lightningaisolutions.in",
          "name": "Lightning AI Solutions",
          "description": "AI agents, RAG search, and automation for startups and SMBs. Build intelligent systems that scale.",
          "publisher": {
            "@type": "Organization",
            "name": "Lightning AI Solutions"
          }
        };

      case 'FAQPage':
        return data;

      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Automation & Consulting",
          "provider": {
            "@type": "Organization",
            "name": "Lightning AI Solutions",
            "url": "https://www.lightningaisolutions.in"
          },
          "areaServed": "Worldwide",
          "description": "AI automation, RAG search systems, custom AI development, and consulting services. We help businesses integrate AI solutions that deliver real results."
        };

      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Lightning AI Solutions",
          "image": "https://www.lightningaisolutions.in/logo.png",
          "url": "https://www.lightningaisolutions.in",
          "telephone": "+91-9426154668",
          "email": "umang@lightningaisolutions.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "6/A Chinar Gulnar, Anand Vidhyanagar Road",
            "addressLocality": "Anand",
            "addressRegion": "Gujarat",
            "postalCode": "388001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 22.5645,
            "longitude": 72.9289
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        };

      default:
        return null;
    }
  };

  const schema = getSchema();
  if (!schema) return null;

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
