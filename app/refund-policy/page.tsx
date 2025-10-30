import { LegalPage } from "@/components/legal/legal-page";

export const metadata = {
  title: "Refund Policy - Lightning AI Solutions",
  description: "Refund and cancellation policy for AI development services and subscription products.",
};

const sections = [
  {
    title: "1. Overview",
    content: `This Refund Policy applies to all services and products offered by Lightning AI Solutions, including:

**Business Services (B2B):**
- Custom AI/automation development projects
- LLM fine-tuning services
- Voice AI agent development
- Consulting and technical services

**Consumer Products (B2C):**
- Astro AI WhatsApp subscription service
- Any other subscription-based products

By engaging our services or purchasing our products, you agree to this policy.`,
  },
  {
    title: "2. B2B Services - Client Development Work",
    content: `## 2.1 Service Types

Our refund policy varies based on engagement type:

**Fixed-Price Projects:** Projects with defined scope and deliverables
**Time & Materials:** Hourly or daily rate engagements
**Retainer Agreements:** Ongoing monthly engagements

## 2.2 Deposits and Initial Payments

**Project Deposit:** Most projects require a 30-50% deposit before work begins.

**Non-Refundable After Work Starts:** Deposits are non-refundable once any work has commenced (research, planning, setup, or development).

**Refundable Window:** Deposits are fully refundable if you cancel before any work begins AND within 7 days of payment.

**Purpose:** The deposit secures your project slot and compensates for initial research, planning, and setup work.`,
  },
  {
    title: "3. Fixed-Price Project Refunds",
    content: `**Milestone-Based Billing:** Projects are typically billed at milestones (e.g., 30% deposit, 30% at midpoint, 40% at completion).

**Completed Work Policy:**
- You pay only for completed and approved milestones
- If you cancel mid-project, you are responsible for completed work plus any work-in-progress
- Approved milestones are non-refundable

**Refund Calculation:**
- If you've paid for a milestone not yet completed, we will refund the portion not yet earned
- Work-in-progress will be charged proportionally
- No refunds after final deliverables are provided and accepted

**Example:**
Project cost: ₹100,000 (50% deposit, 50% on completion)
- Deposit paid: ₹50,000
- Project 70% complete when cancelled
- You owe: ₹70,000 total
- Refund: ₹0 (you've paid ₹50,000, owe ₹20,000 more)`,
  },
  {
    title: "4. Time & Materials Refunds",
    content: `**Hourly/Daily Billing:** You pay only for actual time worked.

**No Refunds Needed:** Since billing is for actual work done, refunds typically don't apply.

**Cancellation Process:**
1. You may cancel at any time
2. Provide 7 days' notice to wrap up current tasks
3. Final invoice covers all hours worked up to cancellation
4. You receive all work completed to date

**Transparency:** Regular timesheets and progress updates ensure you know exactly what you're paying for.`,
  },
  {
    title: "5. Retainer Agreement Refunds",
    content: `**Monthly Billing:** Retainers are billed monthly in advance for a set number of hours or deliverables.

**Cancellation Policy:**
- 30 days' written notice required
- Current month is non-refundable if work has started
- Notice period allows us to wrap up ongoing work

**Pro-Rated Refunds:**
- If you cancel mid-month and we haven't used your full hours, you may receive a pro-rated refund
- Calculation: (Unused days / Total days) × Monthly fee - Work completed

**Minimum Commitment:** Some retainers have 3-6 month minimum terms as specified in your agreement.

**Unused Hours:** Typically don't roll over month-to-month unless specified in your contract.`,
  },
  {
    title: "6. B2C Products - Subscription Services",
    content: `## 6.1 Astro AI WhatsApp Subscription

**Available Plans:**
- Monthly: ₹299/month
- Quarterly: ₹799/3 months (11% savings)
- Yearly: ₹2,999/year (17% savings)

## 6.2 Money-Back Guarantee

**7-Day Full Refund:**
- Request full refund within 7 days of first payment
- No questions asked
- Full amount refunded to original payment method
- Service access revoked upon refund

**How to Request:**
1. WhatsApp: +91 9426154668
2. Email: support@lightningaisolutions.in
3. In-app: "Request Refund" option in settings
4. Provide: Order ID, reason (optional)

## 6.3 After 7-Day Period

**No Refunds:**
- After 7 days, subscriptions are non-refundable
- You can cancel anytime to stop future billing
- Current subscription period remains active until expiry

**Cancellation Process:**
- Cancel through WhatsApp or in-app settings
- Takes effect at end of current billing period
- No partial month refunds

## 6.4 Multi-Month Subscriptions

**Quarterly (3 months):**
- 7-day money-back guarantee applies
- After 7 days: Pro-rated refund only in exceptional cases
- Must have used service less than 10% of total queries

**Yearly (12 months):**
- 7-day money-back guarantee applies
- After 7 days: Pro-rated refund only for:
  * Technical service failure lasting 7+ days
  * Service permanently discontinued
- Must request within 30 days of issue

**Pro-Rated Calculation:**
Refund = (Unused months / Total months) × Subscription price - Processing fee (10%)`,
  },
  {
    title: "7. Refund Eligibility - All Services",
    content: `## You ARE Eligible for Refund If:

**For B2B Services:**
- We fail to deliver agreed services without valid reason
- We materially breach our service agreement
- Both parties mutually agree to cancel
- Force majeure makes completion impossible
- Deliverables don't meet agreed specifications (subject to review)

**For B2C Products:**
- Within 7-day money-back guarantee period
- Technical service failure lasting 7+ days (pro-rated)
- Service permanently discontinued (pro-rated)
- Charged incorrectly (full refund of incorrect charge)

## You Are NOT Eligible for Refund If:

**For B2B Services:**
- You change requirements after work begins
- You fail to provide necessary information/materials
- You're dissatisfied with work that meets agreed specs
- You cancel without valid reason after work starts
- Delays caused by your actions

**For B2C Products:**
- Beyond 7-day guarantee period (unless exceptional case)
- You violated Terms of Service
- You simply changed your mind after 7 days
- You used significant portion of service already`,
  },
  {
    title: "8. Exceptional Circumstances",
    content: `We understand that unique situations arise. We may consider refunds outside standard policy for:

**Service Failures:**
- Extended downtime (7+ consecutive days)
- Critical features not working as advertised
- Data loss or security breach on our end

**Personal Circumstances:**
- Medical emergencies
- Financial hardship (case-by-case)
- Death of subscriber (full refund of unused period)

**How to Request Exception:**
1. Contact: umang@lightningaisolutions.in
2. Explain your situation with documentation
3. We'll review within 5 business days
4. Decision is final but fair`,
  },
  {
    title: "9. Requesting a Refund",
    content: `## Process for All Refund Requests:

**Step 1: Contact Us**
- Email: umang@lightningaisolutions.in
- WhatsApp: +91 9426154668 (for Astro AI)
- Subject: "Refund Request - [Order/Project ID]"

**Step 2: Provide Information**
- Your name and contact details
- Order ID or project reference
- Service/product purchased
- Reason for refund request
- Supporting documentation (if applicable)

**Step 3: Review**
- B2B Services: Response within 5 business days
- B2C Products: Response within 48 hours
- We may ask for additional information

**Step 4: Processing**
- Approved refunds processed within 10 business days
- Refund to original payment method only (same method used for payment)
- We do not issue cash refunds or refunds to alternate payment methods
- UPI/Card: 5-7 business days
- Bank transfer: 7-10 business days

**Step 5: Confirmation**
- You'll receive email confirmation
- Refund reference number provided
- Can track refund status`,
  },
  {
    title: "10. Partial Service Delivery",
    content: `**For B2B Projects:**
If we've delivered part of a project:
- You receive and own all completed work
- Pay only for work delivered and accepted
- Pro-rated refund for incomplete portions

**For B2C Subscriptions:**
If service partially delivered:
- Monthly: No partial refunds (you got access for the month)
- Quarterly/Yearly: Pro-rated for unused full months only
- Daily breakdown not provided

**Example (B2C):**
- Yearly subscription: ₹2,999
- Used 2 months, cancelled in month 3
- Eligible refund: (10 unused months / 12 months) × ₹2,999 = ₹2,499
- Less 10% processing: ₹2,249 refund`,
  },
  {
    title: "11. Dispute Resolution",
    content: `## If You Disagree with Refund Decision:

**Step 1: Contact Us**
- Email: umang@lightningaisolutions.in
- Clearly explain why you disagree
- Provide any new information

**Step 2: Review**
- We'll review your case again
- Provide detailed written response
- Explain decision reasoning

**Step 3: Escalation**
- If still unresolved, request escalation to founder
- Founder review within 7 business days
- Final decision made

**Step 4: Mediation**
- For amounts over ₹50,000, we may suggest mediation
- Both parties bear equal mediation costs
- Mediation in Anand, Gujarat, India

**Step 5: Legal**
- Last resort only
- Jurisdiction: Anand, Gujarat, India
- Governed by Indian consumer protection laws`,
  },
  {
    title: "12. Chargebacks and Payment Disputes",
    content: `## Our Position on Chargebacks:

**Please Contact Us First:**
- 95% of issues are resolved through direct communication
- Chargebacks hurt small businesses with fees
- We're reasonable and want to make things right

**If You File a Chargeback:**

**For B2B Services:**
- Immediate suspension of all services
- Withholding of deliverables and source code
- May pursue legal action for payment recovery
- Relationship termination

**For B2C Products:**
- Immediate account termination
- Loss of access to service
- Refund request should be made directly first

**Legitimate Disputes:**
- Fraudulent charge: File chargeback immediately
- Unauthorized use of card: Contact us + bank
- We'll cooperate fully with legitimate fraud cases

**After Chargeback:**
- If you win: Matter closed
- If we win: You owe original amount + chargeback fees
- No future services until resolved`,
  },
  {
    title: "13. Taxes and Fees",
    content: `**Refund Amounts:**
- Refunds are for service cost only
- Payment processing fees (2-3%) are non-refundable
- Bank charges or currency conversion fees not refunded

**Taxes (India):**
- GST (18%) included in B2C prices or added to B2B invoices
- If you've claimed tax input credit, you must reverse it
- We'll provide credit notes for B2B refunds

**International Taxes:**
- Prices displayed in INR (Indian Rupees)
- Your bank handles currency conversion at current rates
- You're responsible for applicable taxes in your country:
  * VAT (European Union)
  * GST (Australia, New Zealand, Singapore, etc.)
  * Sales Tax (USA - varies by state)
  * Any other local taxes or duties
- We don't collect taxes outside India - you must self-report if required

**Currency Conversion:**
- Charged by your payment provider/bank
- Conversion rates vary daily
- We have no control over exchange rates
- Refunds processed in INR; your bank converts back
- Refund amount may differ due to rate changes between payment and refund

**International Payment Fees:**
- Your bank may charge international transaction fees (typically 2-3%)
- These fees are NOT refundable
- Check with your bank for their fee structure

**Subscriptions (If Paid Through App Stores):**
- Apple App Store/Google Play (if applicable in future): Their refund policy applies
- Processing fees deducted from refunds
- International payments: No currency conversion refund`,
  },
  {
    title: "14. Service Credits (Alternative to Refund)",
    content: `## Instead of Refund, We May Offer:

**For B2B Clients:**
- Credit toward future services
- Extended support period
- Additional features at no cost
- Priority support access

**For B2C Subscribers:**
- Free month extension
- Upgrade to higher tier
- Credits for premium features
- Bonus queries or sessions

**Why Accept Credit:**
- Often more value than refund
- Maintains service relationship
- Faster resolution
- Flexibility in usage

**Your Choice:**
- We may suggest credit but never force it
- You can always request cash refund if eligible
- Credit doesn't expire for 12 months`,
  },
  {
    title: "15. Changes to This Policy",
    content: `**Policy Updates:**
- We may update this policy to reflect business changes
- Changes posted on website with "Last Updated" date
- Significant changes communicated via email

**Existing Contracts:**
- B2B: Governed by policy at engagement start
- B2C: Current policy applies to new purchases
- Active subscriptions: 30 days notice for policy changes

**Your Rights:**
- Don't like new policy? Cancel subscription
- B2B contracts: Original terms apply`,
  },
  {
    title: "16. Contact Information",
    content: `## For Refund Requests or Questions:

**Lightning AI Solutions**

**Email:** umang@lightningaisolutions.in

**Phone/WhatsApp:** +91 9426154668

**Address:** 
6/A Chinar Gulnar
Anand Vidhyanagar Road
Anand, Gujarat, India - 388001

**Business Hours:**
Monday-Saturday: 10:00 AM - 7:00 PM IST
Sunday: Closed (Emergency support available)

**Response Time:**
- Astro AI refunds: Within 48 hours
- B2B service refunds: Within 5 business days
- Emergencies: Within 24 hours

**Best Method:**
- Astro AI: WhatsApp for fastest response
- B2B Services: Email with full project details`,
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      lastUpdated="October 30, 2025"
      sections={sections}
    />
  );
}
