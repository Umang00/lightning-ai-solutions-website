import { Metadata } from 'next';

interface MetaTagsProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  path = '',
  ogImage = '/og-image.png',
  keywords = []
}: MetaTagsProps): Metadata {
  const baseUrl = 'https://www.lightningaisolutions.in';
  const url = `${baseUrl}${path}`;
  const fullTitle = title === 'Lightning AI Solutions' 
    ? title 
    : `${title} | Lightning AI Solutions`;

  const defaultKeywords = [
    'AI automation',
    'RAG search',
    'AI agents',
    'custom AI development',
    'AI consulting',
    'artificial intelligence',
    'machine learning',
    'business automation',
    'LLM fine-tuning',
    'voice AI agents',
    'intelligent automation',
    'AI analytics'
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: 'Lightning AI Solutions' }],
    creator: 'Lightning AI Solutions',
    publisher: 'Lightning AI Solutions',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Lightning AI Solutions',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
