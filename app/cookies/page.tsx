import { LegalPage } from "@/components/legal/legal-page";

export const metadata = {
  title: "Cookie Policy - Lightning AI Solutions",
  description: "Learn about how Lightning AI Solutions uses cookies and similar technologies.",
};

const sections = [
  {
    title: "1. What Are Cookies",
    content: `Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.`,
  },
  {
    title: "2. How We Use Cookies",
    content: `We use cookies and similar technologies for the following purposes:

**Essential Cookies:** Required for the website to function properly (e.g., security, authentication)

**Analytics Cookies:** Help us understand how visitors interact with our website (e.g., Google Analytics)

**Functional Cookies:** Remember your preferences and choices

**Marketing Cookies:** Track your activity to deliver relevant advertisements (with your consent)`,
  },
  {
    title: "3. Types of Cookies We Use",
    content: `**Session Cookies:** Temporary cookies that expire when you close your browser

**Persistent Cookies:** Remain on your device for a set period or until you delete them

**First-Party Cookies:** Set directly by our website

**Third-Party Cookies:** Set by third-party services we use (e.g., analytics providers)`,
  },
  {
    title: "4. Specific Cookies",
    content: `**Cookie Consent:** Stores your cookie preferences (essential)

**Session ID:** Maintains your session state (essential)

**Analytics:** Google Analytics (_ga, _gid) - tracks website usage (with consent)

**Preferences:** Remembers your language and display preferences (functional)`,
  },
  {
    title: "5. Your Cookie Choices",
    content: `**Cookie Banner:** When you first visit our website, we'll ask for your consent to use non-essential cookies.

**Change Preferences:** You can update your cookie preferences at any time through our cookie banner.

**Browser Settings:** You can also control cookies through your browser settings:
- Chrome: Settings → Privacy and Security → Cookies
- Firefox: Settings → Privacy & Security → Cookies
- Safari: Preferences → Privacy → Cookies

**Note:** Blocking all cookies may affect website functionality.`,
  },
  {
    title: "6. Third-Party Services",
    content: `We use the following third-party services that may set cookies:

**Google Analytics:** Website traffic and user behavior analysis

**Vercel Analytics:** Website performance monitoring

These services have their own privacy policies governing cookie use.`,
  },
  {
    title: "7. Cookie Retention",
    content: `**Session Cookies:** Deleted when you close your browser

**Persistent Cookies:** Typically expire after 1-2 years, but you can delete them anytime

**Analytics Cookies:** Usually expire after 2 years`,
  },
  {
    title: "8. Updates to This Policy",
    content: `We may update this Cookie Policy to reflect changes in technology or legal requirements. We will post the updated policy on this page with a new "Last Updated" date.`,
  },
  {
    title: "9. Contact Us",
    content: `If you have questions about our use of cookies, please contact us:

**Lightning AI Solutions**
Email: hello@lightningai.solutions
Phone: +91 9426154668
Location: Delhi, India`,
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated="October 26, 2025"
      sections={sections}
    />
  );
}
