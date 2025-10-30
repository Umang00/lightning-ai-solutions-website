import { LegalPage } from "@/components/legal/legal-page";

export const metadata = {
  title: "Privacy Policy - Lightning AI Solutions",
  description: "Learn how Lightning AI Solutions collects, uses, and protects your personal information for B2B services and B2C products.",
};

const sections = [
  {
    title: "1. Introduction",
    content: `Lightning AI Solutions ("we", "us", "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you:

**Use our business services (B2B):**
- Engage us for AI development projects
- Use our consulting services
- Access client portals or tools

**Use our consumer products (B2C):**
- Subscribe to Astro AI on WhatsApp
- Use any of our consumer-facing applications
- Access our websites

This policy applies to all users, whether you're a business client or individual consumer.`,
  },
  {
    title: "2. Information We Collect",
    content: `## 2.1 Information You Provide Directly

**For B2B Clients:**
- Business name, contact person, job title
- Email address, phone number
- Company address and registration details
- Project requirements and specifications
- Payment and billing information
- Communications with us (emails, calls, meetings)
- Feedback and survey responses

**For B2C Users (Astro AI):**
- Name and WhatsApp phone number
- Date of birth, time of birth, place of birth (for astrology calculations)
- Gender and relationship preferences
- Questions you ask the AI
- Conversation history with chatbot
- Subscription and payment information
- Feedback and ratings

## 2.2 Information Collected Automatically

**Website Usage Data:**
- Device information (type, operating system, browser)
- IP address and general location (city/country level)
- Pages visited, time spent, click patterns
- Referring website/source
- Cookies and similar technologies (see Cookie Policy)

**WhatsApp Integration (Astro AI):**
- WhatsApp account identifier (not your phone number)
- Message timestamps
- Service interaction patterns
- Technical data (API calls, errors, performance)

**Mobile App Data (if applicable):**
- Device ID and type
- App version and crashes
- In-app behavior and features used
- Push notification preferences

## 2.3 Information from Third Parties

**Payment Processors:**
- Transaction confirmations
- Payment status
- Fraud prevention data

**WhatsApp Business API:**
- Message delivery status
- Read receipts (if enabled)
- User blocking/reporting actions

**Analytics Services:**
- Aggregated usage statistics
- Performance metrics
- User flow data`,
  },
  {
    title: "3. How We Use Your Information",
    content: `## 3.1 For B2B Services

We use your information to:
- **Deliver Services:** Execute projects, provide deliverables, manage contracts
- **Communication:** Respond to inquiries, send project updates, technical discussions
- **Billing:** Process payments, send invoices, manage subscriptions
- **Improve Services:** Understand client needs, enhance offerings
- **Legal Compliance:** Maintain records, comply with tax laws, contract enforcement
- **Marketing:** Send relevant service updates (with opt-out option)

## 3.2 For B2C Products (Astro AI)

We use your information to:
- **Provide Service:** Generate birth charts, calculate compatibility, answer questions
- **Personalization:** Tailor predictions and advice to your specific chart
- **Service Improvement:** Train AI models, improve accuracy, fix bugs
- **Subscription Management:** Process payments, send renewal reminders, handle cancellations
- **Customer Support:** Respond to questions, troubleshoot issues
- **Communication:** Send important service updates, new features
- **Analytics:** Understand user behavior, popular features, usage patterns
- **Safety:** Detect abuse, prevent fraud, ensure Terms compliance

## 3.3 General Purposes (All Users)

- **Security:** Protect against unauthorized access, cyberattacks
- **Legal Obligations:** Comply with laws, respond to legal requests
- **Research:** Improve AI algorithms (anonymized data only)
- **Business Operations:** Analytics, reporting, strategic planning`,
  },
  {
    title: "4. Legal Basis for Processing (GDPR/Data Protection)",
    content: `For users in EU/EEA/UK and India, we process your data based on:

**Contract Performance:**
- Delivering services you've purchased
- Managing your subscription
- Processing payments

**Legitimate Interests:**
- Improving our services
- Fraud prevention and security
- Direct marketing (B2B only, with opt-out)
- Analytics and research

**Legal Obligation:**
- Tax compliance
- Responding to legal requests
- Maintaining business records

**Consent:**
- Marketing communications (B2C)
- Non-essential cookies
- Sharing testimonials/case studies
- Using data for purposes beyond original collection

You can withdraw consent anytime without affecting lawfulness of processing before withdrawal.`,
  },
  {
    title: "5. Information Sharing and Disclosure",
    content: `## 5.1 We DO NOT Sell Your Data

We NEVER sell, rent, or trade your personal information to third parties for their marketing purposes.

## 5.2 We Share Information With:

**Service Providers:**
- **Hosting:** Vercel, AWS, Google Cloud (server infrastructure)
- **Payments:** Razorpay, Stripe (payment processing)
- **Communications:** WhatsApp Business API, Twilio (messaging)
- **Analytics:** Google Analytics, Vercel Analytics (website/app analytics)
- **AI Services:** OpenAI, Anthropic (AI model processing)
- **Email:** SendGrid, Postmark (transactional emails)

*These providers are bound by contracts to use data only for specified purposes and maintain security.*

**Business Partners:**
- With your explicit consent for collaborations
- For case studies/testimonials (anonymized or with permission)

**Legal Requirements:**
- Law enforcement or government agencies (when legally required)
- To comply with legal process (subpoena, court order)
- To protect our rights, property, or safety
- To prevent fraud or illegal activities

**Business Transfers:**
- In event of merger, acquisition, or sale of assets
- New owners would be bound by this Privacy Policy

## 5.3 Data Transfer Outside India

Some service providers are located outside India (e.g., US, EU):
- We use Standard Contractual Clauses (SCCs) for EU transfers
- Ensure adequate data protection measures
- Transfer only necessary data

**For Astro AI Users:**
Your birth data and questions may be processed by AI services (OpenAI/Anthropic) in US datacenters, but are not stored long-term by these providers.`,
  },
  {
    title: "6. Data Security",
    content: `## 6.1 Security Measures

We implement industry-standard security measures:

**Technical Safeguards:**
- Encryption in transit (TLS/SSL) and at rest (AES-256)
- Secure database access with role-based permissions
- Regular security audits and penetration testing
- Automated backup systems
- Intrusion detection and prevention systems
- API rate limiting and DDoS protection

**Organizational Safeguards:**
- Employee background checks
- Confidentiality agreements for all staff
- Access controls (need-to-know basis)
- Security awareness training
- Incident response procedures

**Application Security:**
- Input validation and sanitization
- Protection against common attacks (SQL injection, XSS, CSRF)
- Secure authentication (encrypted passwords, session management)
- Regular security updates and patches

## 6.2 Limitations

**No System is 100% Secure:**
While we strive for maximum security, no internet transmission or electronic storage is completely secure. We cannot guarantee absolute security.

**Your Responsibility:**
- Keep your passwords secure
- Don't share account access
- Use secure networks
- Report suspicious activity immediately

## 6.3 Data Breach Notification

If a breach occurs affecting your data:
- We'll notify you within 72 hours (as required by law)
- Explain what happened and what data was affected
- Describe steps we're taking to address it
- Provide recommendations for protecting yourself`,
  },
  {
    title: "7. Data Retention",
    content: `## 7.1 How Long We Keep Your Data

**B2B Client Data:**
- Active projects: Duration of project + 7 years (legal/tax requirements)
- Contract documents: 7 years after project completion
- Communications: 3 years after last interaction
- Financial records: 7 years (tax law requirement)
- After retention period: Securely deleted or anonymized

**B2C Subscription Data (Astro AI):**
- Active subscription: Duration of subscription
- Birth chart data: Retained while account active + 2 years
- Conversation history: Last 1 year of conversations (rolling window)
- WhatsApp Cloud API logs: Maximum 90 days (Meta's retention limit)
- Payment records: 7 years (tax requirement)
- After cancellation: Account data deleted after 2 years of inactivity
- Upon deletion request: Within 30 days (except legal requirements)

**Analytics Data:**
- Anonymized usage data: Up to 5 years for research
- Cannot be linked back to individuals

**Legal/Disputes:**
- If legal claim or dispute: Retained until resolution + 1 year

## 7.2 Requesting Early Deletion

You can request deletion before standard retention periods (see "Your Rights" section).`,
  },
  {
    title: "8. Your Privacy Rights",
    content: `## 8.1 Rights for All Users

**Access:** Request copy of personal information we hold about you

**Correction:** Request correction of inaccurate or incomplete information

**Deletion:** Request deletion of your personal information ("right to be forgotten")
- Exceptions: Legal obligations, legitimate business needs, ongoing contracts

**Data Portability:** Request your data in machine-readable format (JSON/CSV)

**Objection:** Object to processing based on legitimate interests

**Restriction:** Request temporary restriction of processing

**Withdraw Consent:** Withdraw consent for processing based on consent
- Doesn't affect lawfulness of processing before withdrawal

## 8.2 Additional Rights (India/GDPR)

**For Indian Users (DPDP Act):**
- Right to nominate (designate someone to exercise rights after death)
- Right to grievance redressal

**For EU/UK Users (GDPR):**
- Right to lodge complaint with supervisory authority
- Right to human review of automated decisions

## 8.3 How to Exercise Your Rights

**Email:** umang@lightningaisolutions.in
**Subject:** "Privacy Rights Request - [Your Right]"
**Include:**
- Your name and contact information
- Account details or project reference
- Specific right you're exercising
- Any relevant details

**Response Time:**
- We'll respond within 30 days
- May extend by 60 days for complex requests (we'll notify you)
- May ask for ID verification to prevent fraud

## 8.4 Limitations on Rights

We may deny requests if:
- Required by law to retain data
- Necessary for legal claims or defenses
- Interferes with others' rights
- Request is manifestly unfounded or excessive`,
  },
  {
    title: "9. Cookies and Tracking Technologies",
    content: `We use cookies and similar technologies on our website. For detailed information, please see our separate Cookie Policy.

**Summary:**
- **Essential Cookies:** Required for website function (cannot be disabled)
- **Analytics Cookies:** Help us understand how you use our site (can opt-out)
- **Functional Cookies:** Remember your preferences (can opt-out)
- **Marketing Cookies:** Track for advertising (can opt-out)

**Your Control:**
- Cookie banner on first visit lets you choose preferences
- Can change preferences anytime
- Can disable through browser settings

**Note:** Disabling cookies may affect website functionality.

**WhatsApp Integration:**
WhatsApp Business API doesn't use cookies, but WhatsApp has its own privacy policy governing their platform.`,
  },
  {
    title: "10. Children's Privacy",
    content: `## 10.1 Age Restrictions

**B2B Services:** Intended for businesses; not marketed to children

**B2C Products (Astro AI):** 
- Intended for users 18 years and older
- We don't knowingly collect data from children under 18

## 10.2 If We Discover Child Data

If we learn we've collected data from a child under 18:
- We'll delete it immediately
- We'll terminate their account
- We'll notify parent/guardian if possible

## 10.3 Parent/Guardian Rights

If you believe your child provided information to us:
- Contact us immediately: umang@lightningaisolutions.in
- We'll verify relationship and delete data promptly`,
  },
  {
    title: "11. Third-Party Links and Services",
    content: `## 11.1 External Links

Our website and communications may contain links to third-party websites:
- We're NOT responsible for their privacy practices
- Read their privacy policies before providing information
- We don't control or endorse third-party content

**Examples:**
- Social media platforms
- Partner websites
- Resource links

## 11.2 Third-Party Services We Use

**WhatsApp Business Platform:**
- Astro AI runs on WhatsApp's infrastructure
- WhatsApp's Privacy Policy applies to their platform
- We only see message content you send our bot
- WhatsApp can access message metadata

**AI Processing (OpenAI/Anthropic):**
- Your questions sent to AI models for processing
- These providers don't store conversations long-term
- Subject to their privacy policies
- We use enterprise plans with enhanced privacy

**Payment Processors:**
- Razorpay/Stripe handle payment information
- We don't store full credit card details
- Their privacy policies apply to payment data`,
  },
  {
    title: "12. International Data Transfers",
    content: `## 12.1 Cross-Border Transfers

Lightning AI Solutions is based in India. Your information may be transferred to and processed in:
- India (primary data storage)
- United States (AI processing, analytics)
- European Union (some service providers)

## 12.2 Safeguards

For transfers outside India, we ensure:
- **Standard Contractual Clauses (SCCs):** For EU data transfers
- **Adequacy Decisions:** Rely on adequacy determinations where available
- **Binding Corporate Rules:** For internal transfers within organizations
- **Consent:** Your explicit consent where appropriate

## 12.3 Your Rights

Even if data processed abroad, you retain all privacy rights outlined in this policy.`,
  },
  {
    title: "13. Automated Decision-Making",
    content: `## 13.1 AI and Algorithms

**Astro AI:**
- Birth chart calculations are automated (astrological algorithms)
- AI-generated predictions and advice (GPT-4/Claude)
- Compatibility scoring is algorithmic

**These are NOT decisions with legal or significant effects:**
- Purely informational and entertainment
- You maintain full control over life decisions
- No financial, legal, or employment impact

## 13.2 Your Rights

You can:
- Request human review of AI outputs
- Question algorithmic predictions
- Opt out of personalization
- Delete data used for profiling

## 13.3 B2B Services

For business clients:
- Project decisions made by humans
- AI may assist analysis but not final decisions
- You'll always know when AI is used in deliverables`,
  },
  {
    title: "14. California Privacy Rights (CCPA)",
    content: `For California residents, additional rights under CCPA/CPRA:

**Right to Know:**
- Categories of personal information collected
- Sources of information
- Business/commercial purpose
- Categories of third parties we share with

**Right to Delete:** Request deletion of personal information

**Right to Opt-Out:** Opt-out of "sale" of personal information
- We don't sell personal information

**Right to Non-Discrimination:** Equal service and pricing regardless of privacy choices

**Right to Correct:** Request correction of inaccurate information

**Right to Limit:** Limit use of sensitive personal information
- Birth data for Astro AI is considered sensitive

**To Exercise Rights:**
Email: umang@lightningaisolutions.in
Subject: "CCPA Rights Request"

We'll verify your identity and respond within 45 days.`,
  },
  {
    title: "15. Changes to This Privacy Policy",
    content: `## 15.1 Policy Updates

We may update this policy to reflect:
- Changes in our practices
- New services or features
- Legal or regulatory requirements
- Feedback from users

## 15.2 Notification of Changes

**Material Changes:**
- Email notification to registered users
- Prominent notice on website
- 30 days before effective date (when possible)

**Minor Changes:**
- Updated "Last Updated" date
- Published on website

## 15.3 Your Options

If you don't agree with changes:
- **B2B Clients:** Existing contracts governed by policy at start
- **B2C Users:** Can cancel subscription before changes take effect
- **Website Visitors:** Stop using our website

## 15.4 Continued Use = Acceptance

Continuing to use services after changes means you accept updated policy.`,
  },
  {
    title: "16. Contact Us & Data Protection Officer",
    content: `## 16.1 Privacy Questions or Concerns

**Lightning AI Solutions**

**Email:** umang@lightningaisolutions.in
**Subject Line:** "Privacy Inquiry" or "Data Protection"

**Phone/WhatsApp:** +91 9426154668

**Address:**
6/A Chinar Gulnar
Anand Vidhyanagar Road
Anand, Gujarat, India - 388001

## 16.2 Data Protection Officer (DPO)

For data protection inquiries:
**Name:** Umang Patel (Founder/DPO)
**Email:** umang@lightningaisolutions.in

## 16.3 Response Time

We'll respond to privacy inquiries within:
- General questions: 5 business days
- Rights requests: 30 days (may extend to 90 days for complex requests)
- Urgent security matters: 24 hours

## 16.4 Supervisory Authority (For EU/EEA Users)

If you're unsatisfied with our response, you can lodge a complaint with your local data protection authority.

**For Indian Users:**
Contact Ministry of Electronics and Information Technology (MeitY) grievance officer if unresolved.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="October 30, 2025"
      sections={sections}
    />
  );
}
