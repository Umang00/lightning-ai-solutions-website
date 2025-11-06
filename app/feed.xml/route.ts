import { NextResponse } from 'next/server';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const baseUrl = 'https://www.lightningaisolutions.in';
  const currentDate = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml('Lightning AI Solutions')}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml('AI automation, RAG search, and custom AI development for startups and SMBs')}</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>${escapeXml('Lightning AI Solutions - AI Automation & Consulting Services')}</title>
      <link>${baseUrl}</link>
      <description>${escapeXml('Professional AI automation, consulting, and custom development services. We build AI agents, RAG search systems, and intelligent automation solutions that deliver real results.')}</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}</guid>
    </item>
    
    <item>
      <title>${escapeXml('AI Agent Development Services')}</title>
      <link>${baseUrl}/services</link>
      <description>${escapeXml('Custom AI agents that automate complex workflows, handle customer interactions, and process data intelligently. Built with cutting-edge LLMs and tailored to your business needs.')}</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services</guid>
    </item>
    
    <item>
      <title>${escapeXml('RAG Search Systems')}</title>
      <link>${baseUrl}/services</link>
      <description>${escapeXml('Retrieval-Augmented Generation systems that provide accurate, context-aware answers from your documents and knowledge base. Perfect for customer support, internal search, and documentation.')}</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services#rag</guid>
    </item>
    
    <item>
      <title>${escapeXml('Astro AI - Case Study: Automated Interview Platform')}</title>
      <link>${baseUrl}/projects</link>
      <description>${escapeXml('AI-powered voice interview system conducting 100+ automated interviews daily with 95% accuracy. Reduced interview time by 70% while improving candidate screening quality.')}</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/projects/astro-ai</guid>
    </item>
    
    <item>
      <title>${escapeXml('LLM Fine-tuning Services')}</title>
      <link>${baseUrl}/services</link>
      <description>${escapeXml('Fine-tune large language models on your specific data for superior performance. Custom training pipelines, evaluation frameworks, and deployment optimization.')}</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services#llm</guid>
    </item>
    
    <item>
      <title>${escapeXml('Voice AI Agents')}</title>
      <link>${baseUrl}/services</link>
      <description>${escapeXml('Natural-sounding voice AI agents for customer service, interviews, and automated calls. Multi-language support with emotion detection and real-time conversation handling.')}</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services#voice</guid>
    </item>
    
    <item>
      <title>${escapeXml('Business Process Automation')}</title>
      <link>${baseUrl}/services</link>
      <description>${escapeXml('End-to-end workflow automation reducing manual work by up to 70%. Integrate AI into your existing tools and processes for maximum efficiency.')}</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services#automation</guid>
    </item>
    
    <item>
      <title>${escapeXml('About Lightning AI Solutions')}</title>
      <link>${baseUrl}/about</link>
      <description>${escapeXml('Founded in 2025, Lightning AI Solutions helps startups and SMBs integrate intelligent AI systems. Led by Umang Thakkar with 4+ years of AI product development experience.')}</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/about</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
