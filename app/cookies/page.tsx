import { LegalPage } from "@/components/legal/legal-page";

export const metadata = {
  title: "Cookie Policy - Lightning AI Solutions",
  description: "Learn about how Lightning AI Solutions uses cookies and similar technologies.",
};

const sections = [
  {
    title: "1. What Are Cookies",
    content: `Cookies are small text files placed on your device when you visit a website. They're widely used to make websites work more efficiently and provide information to website owners.

**How Cookies Work:**
- Stored on your device (computer, phone, tablet)
- Contain small amounts of data
- Sent back to website on subsequent visits
- Used to "remember" information about you

**Why Websites Use Cookies:**
- Remember login status and preferences
- Understand how visitors use the site
- Deliver personalized content
- Make websites work properly`,
  },
  {
    title: "2. How We Use Cookies",
    content: `Lightning AI Solutions uses cookies and similar technologies for several purposes:

## 2.1 Essential Cookies (Always Active)

**Required for website to function:**
- **Security:** Protect against unauthorized access
- **Authentication:** Keep you logged in to client portals
- **Session Management:** Maintain your session across pages
- **Cookie Consent:** Remember your cookie preferences
- **Load Balancing:** Distribute traffic across servers

**You Cannot Disable These:**
- They're necessary for website operation
- Disabling would break core functionality

## 2.2 Analytics Cookies (Optional)

**Help us understand usage:**
- **Google Analytics:** Track pages visited, time spent, user flow
- **Vercel Analytics:** Monitor website performance and errors
- **Heatmaps:** Understand where users click and scroll
- **Conversion Tracking:** Measure signup/contact form effectiveness

**What We Learn:**
- Which pages are most popular
- Where users face difficulties
- How to improve navigation
- Technical performance issues

## 2.3 Functional Cookies (Optional)

**Remember your preferences:**
- Language selection
- Region/timezone
- Display preferences (light/dark mode)
- Form auto-fill (if permitted)
- Recently viewed projects/content

**Benefit:**
- Don't have to re-enter preferences each visit
- More personalized experience

## 2.4 Marketing Cookies (Optional)

**Track activity for relevant ads:**
- **Google Ads:** Show relevant ads on Google
- **LinkedIn Ads:** Target professional audience
- **Retargeting:** Show ads to previous visitors
- **Conversion Tracking:** Measure ad effectiveness

**We May Track:**
- Pages you've visited
- Services you're interested in
- Whether you contacted us after seeing an ad

**Your Control:**
- Can opt-out anytime
- Still see ads, just less relevant`,
  },
  {
    title: "3. Types of Cookies We Use",
    content: `## 3.1 By Duration

**Session Cookies:**
- **Lifespan:** Deleted when you close browser
- **Purpose:** Temporary functionality during visit
- **Examples:** Shopping cart, form data, login session

**Persistent Cookies:**
- **Lifespan:** Remain until expiry date or you delete them
- **Duration:** Typically 1-2 years
- **Purpose:** Remember you on return visits
- **Examples:** Preferences, analytics, marketing

## 3.2 By Source

**First-Party Cookies:**
- **Set By:** lightningaisolutions.in directly
- **Purpose:** Essential functions, analytics, preferences
- **Control:** We have full control
- **Trust:** Set directly by us

**Third-Party Cookies:**
- **Set By:** External services we use (Google, etc.)
- **Purpose:** Analytics, ads, integrations
- **Control:** Managed by third-party service
- **Privacy Policies:** Subject to their privacy policies
  - [Google Privacy Policy](https://policies.google.com/privacy)
  - [Vercel Privacy Policy](https://vercel.com/legal/privacy-policy)`,
  },
  {
    title: "4. Specific Cookies We Use",
    content: `## 4.1 Essential Cookies

| Cookie Name | Purpose | Duration | Type |
|-------------|---------|----------|------|
| \`__session\` | Maintains your session | Session | First-party |
| \`csrf_token\` | Security protection | Session | First-party |
| \`cookie_consent\` | Stores your cookie preferences | 1 year | First-party |
| \`auth_token\` | Keeps you logged in (B2B portal) | 7 days | First-party |

## 4.2 Analytics Cookies

| Cookie Name | Purpose | Duration | Type |
|-------------|---------|----------|------|
| \`_ga\` | Google Analytics - Distinguishes users | 2 years | Third-party |
| \`_gid\` | Google Analytics - Distinguishes users | 24 hours | Third-party |
| \`_gat\` | Google Analytics - Throttles requests | 1 minute | Third-party |
| \`__vercel_analytics_id\` | Vercel Analytics - Anonymous ID | 2 years | Third-party |

## 4.3 Functional Cookies

| Cookie Name | Purpose | Duration | Type |
|-------------|---------|----------|------|
| \`preferred_language\` | Your language choice | 1 year | First-party |
| \`theme\` | Light/dark mode preference | 1 year | First-party |
| \`timezone\` | Your timezone | 1 year | First-party |

## 4.4 Marketing Cookies (If You Consent)

| Cookie Name | Purpose | Duration | Type |
|-------------|---------|----------|------|
| \`_gcl_*\` | Google Ads conversion tracking | 90 days | Third-party |
| \`_fbp\` | Facebook Pixel | 90 days | Third-party |
| \`li_sugr\` | LinkedIn tracking | 90 days | Third-party |

**Note:** Marketing cookies only set if you provide explicit consent.`,
  },
  {
    title: "5. Your Cookie Choices and Controls",
    content: `## 5.1 Cookie Consent Banner

**On first visit:**
- You'll see cookie consent banner
- Choose which cookie types to allow
- Options:
  - **Accept All:** All cookies enabled
  - **Reject Non-Essential:** Only essential cookies
  - **Customize:** Choose specific categories

## 5.2 Changing Your Preferences

**Anytime after initial choice:**
- Look for cookie icon in bottom-right corner
- Click "Cookie Settings" in footer
- Update your preferences
- Changes take effect immediately

## 5.3 Browser Controls

**All major browsers let you control cookies:**

**Google Chrome:**
1. Settings → Privacy and Security → Cookies
2. Options:
   - Block all cookies
   - Block third-party cookies only
   - Allow all cookies
3. View and delete existing cookies

**Mozilla Firefox:**
1. Settings → Privacy & Security
2. Choose "Standard", "Strict", or "Custom" tracking protection
3. Manage cookie exceptions

**Safari (Mac/iOS):**
1. Preferences → Privacy
2. Choose cookie blocking level
3. "Manage Website Data" to view/delete

**Microsoft Edge:**
1. Settings → Privacy, Search, and Services
2. Choose tracking prevention level
3. Manage cookies and site permissions

## 5.4 Important Notes

**If You Block All Cookies:**
- Website may not function properly
- Can't stay logged in
- Lose personalization
- Have to reconfigure preferences each visit

**Recommended Approach:**
- Allow essential cookies
- Choose analytics/marketing based on your comfort
- Can always change later`,
  },
  {
    title: "6. Similar Technologies",
    content: `Besides cookies, we may use similar technologies:

## 6.1 Local Storage

**What It Is:**
- Stores data in your browser
- Similar to cookies but holds more data
- Doesn't expire automatically

**How We Use:**
- Save user preferences
- Cache data for performance
- Store non-sensitive application state

**Control:**
- Clear through browser dev tools
- Cleared when you clear browsing data

## 6.2 Session Storage

**What It Is:**
- Similar to local storage
- Automatically cleared when you close tab/browser

**How We Use:**
- Temporary data during your session
- Form progress
- Navigation state

## 6.3 Web Beacons/Pixels

**What They Are:**
- Tiny invisible images embedded in emails/pages
- Track when page viewed or email opened

**How We Use:**
- Email delivery confirmation
- Measure email engagement
- Track conversions from ads

**Found In:**
- Marketing emails (B2B)
- Thank you pages
- Advertising pixels (Google, Facebook, LinkedIn)

## 6.4 Device Fingerprinting

**What It Is:**
- Identifying devices by combining characteristics
- Browser type, screen size, fonts, etc.

**How We Use:**
- **Fraud Prevention:** Detect suspicious patterns
- **Security:** Identify unusual login attempts

**Not Used For:**
- Personal tracking
- Building user profiles
- Advertising (unless you consent)`,
  },
  {
    title: "7. Third-Party Services and Cookies",
    content: `## 7.1 Services That Set Cookies

When you use our website, these third-party services may set cookies:

**Google Analytics:**
- **Purpose:** Website traffic analysis
- **Data Collected:** Pages visited, device type, general location
- **Privacy:** https://policies.google.com/privacy
- **Opt-Out:** https://tools.google.com/dlpage/gaoptout

**Vercel Analytics:**
- **Purpose:** Website performance monitoring
- **Data Collected:** Page load times, errors, navigation
- **Privacy:** https://vercel.com/legal/privacy-policy
- **Opt-Out:** Through our cookie settings

**Google Ads/Tag Manager (If Marketing Cookies Enabled):**
- **Purpose:** Ad targeting and conversion tracking
- **Data Collected:** Site interaction, ad clicks
- **Privacy:** https://policies.google.com/privacy
- **Opt-Out:** https://adssettings.google.com

**Payment Processors (Razorpay/Stripe):**
- **Purpose:** Fraud prevention, secure payments
- **Only Active:** During payment process
- **Data:** Transaction data only, not browsing history

## 7.2 Third-Party Integrations

**WhatsApp Business API (Astro AI):**
- Doesn't use web cookies
- Has own privacy policy: https://www.whatsapp.com/legal/privacy-policy
- Message data handled per our Privacy Policy

**LinkedIn Insight Tag (If Marketing Cookies Enabled):**
- Tracks B2B audience
- Measures ad performance
- Privacy: https://www.linkedin.com/legal/privacy-policy

## 7.3 Social Media Plugins

If we add social sharing buttons:
- May set cookies when you interact with them
- Subject to their privacy policies
- Can disable in cookie settings

## 7.4 We Don't Control Third-Party Cookies

**Important:**
- We don't control how third parties use cookies
- Read their privacy policies
- Contact them directly with questions
- We select reputable, privacy-conscious providers`,
  },
  {
    title: "8. Cookie Retention and Deletion",
    content: `## 8.1 How Long Cookies Last

**Session Cookies:**
- Deleted when you close browser
- No manual deletion needed

**Persistent Cookies:**
- **Essential:** 1 year typically
- **Analytics:** 1-2 years
- **Functional:** 1 year
- **Marketing:** 90 days typically
- Automatically expire after duration

## 8.2 Deleting Cookies Manually

**In Your Browser:**

**Chrome:**
1. Settings → Privacy and Security → Cookies
2. "See all cookies and site data"
3. Find lightningaisolutions.in or click "Remove all"

**Firefox:**
1. Settings → Privacy & Security
2. "Cookies and Site Data" → "Manage Data"
3. Search for our site and remove

**Safari:**
1. Preferences → Privacy
2. "Manage Website Data"
3. Find and remove our cookies

**All Browsers:**
- "Clear Browsing Data" removes all cookies
- Can set to auto-clear on browser close

## 8.3 Effect of Deleting Cookies

**What Happens:**
- Logged out of account
- Preferences reset
- Will see cookie banner again
- May need to re-enter information

**What Doesn't Happen:**
- Your account isn't deleted
- Saved data (in database) remains
- Subscription continues normally`,
  },
  {
    title: "9. Updates to This Cookie Policy",
    content: `## 9.1 When We Update

**Reasons for changes:**
- New cookies added
- Third-party services change
- Legal requirements
- Improve clarity

## 9.2 How You'll Know

**For Significant Changes:**
- Update "Last Updated" date
- May show notice on website
- May email registered users (B2B clients)

**For Minor Changes:**
- Update document
- No active notification

## 9.3 Your Responsibility

**Good Practice:**
- Review this policy periodically
- Check "Last Updated" date
- Update cookie preferences if needed

## 9.4 Version History

- **Current Version:** 2.0
- **Last Updated:** October 30, 2025
- **Previous Updates:** [Initial version]`,
  },
  {
    title: "10. Contact Us About Cookies",
    content: `## 10.1 Questions or Concerns

If you have questions about our cookie practices:

**Email:** umang@lightningaisolutions.in
**Subject:** "Cookie Policy Inquiry"

**Include:**
- Your specific question
- Any cookies you're concerned about
- Browser and device info (if technical issue)

## 10.2 Managing Your Preferences

**To Update Cookie Settings:**
- Click cookie icon on our website
- Use "Cookie Settings" link in footer
- Email us if you need assistance

## 10.3 Privacy Concerns

For broader privacy questions, see our [Privacy Policy](#) or contact:

**Privacy Contact:**
- Email: umang@lightningaisolutions.in
- Subject: "Privacy Inquiry"

## 10.4 Technical Support

**If cookies causing technical issues:**
- Describe the problem
- Browser and device details
- Screenshots if applicable
- We'll help troubleshoot

## 10.5 Company Information

**Lightning AI Solutions**

**Address:**
6/A Chinar Gulnar
Anand Vidhyanagar Road
Anand, Gujarat, India - 388001

**Phone/WhatsApp:** +91 9426154668

**Email:** umang@lightningaisolutions.in

**Business Hours:**
Monday-Saturday: 10:00 AM - 7:00 PM IST
Sunday: Closed

**Response Time:**
- Typical: Within 2-3 business days
- Technical issues: Within 1 business day

---

**Last Updated:** October 30, 2025
**Version:** 2.0
**Effective Date:** October 30, 2025

This Cookie Policy is part of and incorporated into our [Privacy Policy](#) and [Terms of Service](#).`,
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated="October 30, 2025"
      sections={sections}
    />
  );
}
