import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.lightningaisolutions.in';
  const currentDate = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Lightning AI Solutions</title>
    <link>${baseUrl}</link>
    <description>AI automation, RAG search, and custom AI development for startups and SMBs</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>Lightning AI Solutions - AI Automation & Consulting Services</title>
      <link>${baseUrl}</link>
      <description>Professional AI automation, consulting, and custom development services. We build AI agents, RAG search systems, and intelligent automation solutions that deliver real results.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}</guid>
    </item>
    
    <item>
      <title>AI Agent Development Services</title>
      <link>${baseUrl}/services</link>
      <description>Custom AI agents that automate complex workflows, handle customer interactions, and process data intelligently. Built with cutting-edge LLMs and tailored to your business needs.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services</guid>
    </item>
    
    <item>
      <title>RAG Search Systems</title>
      <link>${baseUrl}/services</link>
      <description>Retrieval-Augmented Generation systems that provide accurate, context-aware answers from your documents and knowledge base. Perfect for customer support, internal search, and documentation.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services#rag</guid>
    </item>
    
    <item>
      <title>Astro AI - Case Study: Automated Interview Platform</title>
      <link>${baseUrl}/projects</link>
      <description>AI-powered voice interview system conducting 100+ automated interviews daily with 95% accuracy. Reduced interview time by 70% while improving candidate screening quality.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/projects/astro-ai</guid>
    </item>
    
    <item>
      <title>LLM Fine-tuning Services</title>
      <link>${baseUrl}/services</link>
      <description>Fine-tune large language models on your specific data for superior performance. Custom training pipelines, evaluation frameworks, and deployment optimization.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services#llm</guid>
    </item>
    
    <item>
      <title>Voice AI Agents</title>
      <link>${baseUrl}/services</link>
      <description>Natural-sounding voice AI agents for customer service, interviews, and automated calls. Multi-language support with emotion detection and real-time conversation handling.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services#voice</guid>
    </item>
    
    <item>
      <title>Business Process Automation</title>
      <link>${baseUrl}/services</link>
      <description>End-to-end workflow automation reducing manual work by up to 70%. Integrate AI into your existing tools and processes for maximum efficiency.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services#automation</guid>
    </item>
    
    <item>
      <title>About Lightning AI Solutions</title>
      <link>${baseUrl}/about</link>
      <description>Founded in 2025, Lightning AI Solutions helps startups and SMBs integrate intelligent AI systems. Led by Umang Thakkar with 4+ years of AI product development experience.</description>
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
