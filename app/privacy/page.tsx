import { LegalPage } from "@/components/legal/legal-page";

export const metadata = {
  title: "Privacy Policy - Lightning AI Solutions",
  description: "Learn how Lightning AI Solutions collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information that you provide directly to us, including:

**Personal Information:**
- Name and contact information (email address, phone number)
- Company name and job title
- Project details and requirements
- Payment and billing information

**Automatically Collected Information:**
- Device and browser information
- IP address and location data
- Cookies and similar tracking technologies
- Website usage data and analytics`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

- Provide, maintain, and improve our services
- Process and complete transactions
- Send you technical notices, updates, and support messages
- Respond to your comments, questions, and customer service requests
- Communicate with you about products, services, and events
- Monitor and analyze trends, usage, and activities
- Detect, prevent, and address technical issues and fraudulent activity
- Comply with legal obligations`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

**Service Providers:** We may share information with third-party service providers who perform services on our behalf (hosting, analytics, payment processing).

**Legal Requirements:** We may disclose information if required by law or in response to legal process.

**Business Transfers:** In connection with any merger, sale of company assets, or acquisition.

**With Your Consent:** We may share information for any other purpose with your consent.`,
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.`,
  },
  {
    title: "5. Data Retention",
    content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.`,
  },
  {
    title: "6. Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information:

- **Access:** Request access to your personal information
- **Correction:** Request correction of inaccurate information
- **Deletion:** Request deletion of your information
- **Objection:** Object to processing of your information
- **Portability:** Request transfer of your information
- **Withdrawal:** Withdraw consent at any time

To exercise these rights, please contact us at hello@lightningai.solutions.`,
  },
  {
    title: "7. Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. For more information, please see our Cookie Policy.`,
  },
  {
    title: "8. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read their privacy policies.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.`,
  },
  {
    title: "10. International Data Transfers",
    content: `Your information may be transferred to and processed in countries other than your country of residence. We take appropriate safeguards to ensure your information receives adequate protection.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`,
  },
  {
    title: "12. Contact Us",
    content: `If you have any questions about this privacy policy, please contact us:

**Lightning AI Solutions**
Email: hello@lightningai.solutions
Phone: +91 9426154668
Address: 6/A Chinar Gulnar, Anand Vidhyanagar Road, Anand, Gujarat, India - 388001`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="October 26, 2025"
      sections={sections}
    />
  );
}
