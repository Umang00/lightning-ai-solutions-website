import { LegalPage } from "@/components/legal/legal-page";

export const metadata = {
  title: "Refund Policy - Lightning AI Solutions",
  description: "Understand our refund and cancellation policy for AI development services.",
};

const sections = [
  {
    title: "1. Overview",
    content: `This Refund Policy outlines the terms and conditions for refunds and cancellations of services provided by Lightning AI Solutions. By engaging our services, you agree to this policy.`,
  },
  {
    title: "2. Service Types",
    content: `Our refund policy varies based on the type of service engagement:

**Fixed-Price Projects:** Projects with defined scope and deliverables

**Time & Materials:** Hourly or daily rate engagements

**Retainer Agreements:** Ongoing monthly engagements`,
  },
  {
    title: "3. Deposit and Initial Payments",
    content: `**Project Deposit:** Most projects require a 30-50% deposit before work begins. This deposit is non-refundable once work has commenced.

**Purpose:** The deposit secures your project slot and compensates for initial research, planning, and setup work.

**Refundable Window:** Deposits are fully refundable if you cancel before any work begins (within 7 days of payment and before project kickoff).`,
  },
  {
    title: "4. Fixed-Price Project Refunds",
    content: `**Milestone-Based Billing:** Projects are typically billed at milestones (e.g., 30% deposit, 30% at midpoint, 40% at completion).

**Completed Work:** You pay only for completed milestones. If you cancel mid-project, you are responsible for completed work plus any work-in-progress.

**Refund Calculation:** If you've paid for a milestone not yet completed, we will refund the portion not yet earned minus any work-in-progress.

**Delivery Requirement:** No refunds after final deliverables are provided and accepted.`,
  },
  {
    title: "5. Time & Materials Refunds",
    content: `**Hourly Billing:** You pay only for hours worked. No refunds needed as you're billed for actual time.

**Cancellation:** You may cancel at any time. You'll receive a final invoice for hours worked up to the cancellation date.

**Notice Period:** We request 7 days' notice for cancellation to wrap up current tasks.`,
  },
  {
    title: "6. Retainer Agreements",
    content: `**Monthly Billing:** Retainers are billed monthly in advance.

**Cancellation:** You may cancel with 30 days' written notice.

**Partial Refunds:** If you cancel mid-month, we'll calculate a pro-rated refund based on unused days, minus any work already completed.

**Minimum Term:** Some retainers have a 3-month minimum commitment as specified in the agreement.`,
  },
  {
    title: "7. Refund Eligibility",
    content: `You may be eligible for a refund if:

**Non-Delivery:** We fail to deliver agreed-upon services without valid reason

**Breach of Contract:** We materially breach our service agreement

**Mutual Agreement:** Both parties agree to cancel the project

**Force Majeure:** Unforeseen circumstances make project completion impossible

You are NOT eligible for a refund if:

- You change requirements after work has begun
- You fail to provide necessary information or materials
- You are dissatisfied with delivered work that meets agreed specifications
- You cancel without valid reason after work has commenced`,
  },
  {
    title: "8. Requesting a Refund",
    content: `To request a refund:

1. Send a written request to umang@lightningaisolutions.in
2. Include your project details and reason for refund
3. Provide any supporting documentation
4. We will respond within 5 business days
5. Approved refunds are processed within 10 business days`,
  },
  {
    title: "9. Dispute Resolution",
    content: `If you disagree with a refund decision:

**Step 1:** Contact us to discuss the issue (umang@lightningaisolutions.in)

**Step 2:** We'll review your case and provide a detailed response

**Step 3:** If unresolved, we may engage in mediation before pursuing other remedies`,
  },
  {
    title: "10. Chargebacks",
    content: `**Direct Communication First:** Please contact us before initiating a chargeback. Most issues can be resolved through discussion.

**Consequences:** Unauthorized chargebacks may result in:
- Immediate termination of services
- Withholding of deliverables
- Legal action to recover costs

**Valid Disputes:** We respect legitimate payment disputes and will work with you to resolve them.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Refund Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Existing service agreements are governed by the policy in effect at the time of engagement.`,
  },
  {
    title: "12. Contact Us",
    content: `For questions about refunds or to request a refund, contact us:

**Lightning AI Solutions**
Email: umang@lightningaisolutions.in
Phone: +91 9426154668
Address: 6/A Chinar Gulnar, Anand Vidhyanagar Road, Anand, Gujarat, India - 388001`,
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      lastUpdated="October 26, 2025"
      sections={sections}
    />
  );
}
