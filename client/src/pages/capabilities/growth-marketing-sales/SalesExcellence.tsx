// TODO: David — confirm Sales Excellence experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Sales Excellence hub.
// TODO: confirm ambition copy with practice lead before publish

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function SalesExcellence() {
  return (
    <CapabilityHubTemplate
      hubName="Sales Excellence"
      slug="sales-excellence"
      insightsTopic="growth"
      heroSubtitle="Build high-performing sales organizations. We help you optimize sales processes, develop capabilities, and create incentive structures that drive sustainable revenue growth."
      heroImage="/images/capabilities/cap-woman-motion.jpg"
      heroFocal="45% 50%"
      experienceStats={[
        { number: "300+", label: "sales transformations delivered globally" },
        { number: "25%", label: "average improvement in sales productivity" },
        { number: "15%", label: "typical increase in win rates" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Sharpen the sales excellence thesis",
          description:
            "Make clear, evidence-based choices about where sales excellence can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn sales excellence ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every sales excellence touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument sales excellence so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the sales excellence tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect sales excellence investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Sales Strategy",
          description:
            "Develop go-to-market strategies that drive growth. Define target segments, value propositions, and channel strategies.",
          href: "/capabilities/growth-marketing-sales/sales-excellence/sales-strategy",
        },
        {
          title: "Sales Process",
          description:
            "Design and implement sales processes that improve win rates. Build methodologies that guide reps through complex sales cycles.",
          href: "/capabilities/growth-marketing-sales/sales-excellence/sales-process",
        },
        {
          title: "Sales Organization",
          description:
            "Design sales organizations that maximize coverage and effectiveness. Define roles, territories, and team structures.",
          href: "/capabilities/growth-marketing-sales/sales-excellence/sales-organization",
        },
        {
          title: "Sales Capability",
          description:
            "Build sales capabilities through training and coaching. Develop skills in prospecting, discovery, negotiation, and closing.",
          href: "/capabilities/growth-marketing-sales/sales-excellence/sales-capability",
        },
        {
          title: "Sales Analytics",
          description:
            "Build analytics capabilities that drive sales performance. Implement forecasting, pipeline management, and performance dashboards.",
          href: "/capabilities/growth-marketing-sales/sales-excellence/sales-analytics",
        },
        {
          title: "Incentive Design",
          description:
            "Design compensation and incentive programs that drive behavior. Align incentives with strategic priorities and performance goals.",
          href: "/capabilities/growth-marketing-sales/sales-excellence/incentive-design",
        },
      ]}
      ambitionsCTAText="Talk to us about your Sales Excellence ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose performance",
          body: "We analyze sales performance across dimensions—win rates, cycle times, productivity, and coverage. We identify root causes of underperformance and prioritize improvement opportunities.",
        },
        {
          step: "02",
          title: "Design the model",
          body: "We design sales models that align with your go-to-market strategy. We define roles, processes, and coverage models that maximize effectiveness and efficiency.",
        },
        {
          step: "03",
          title: "Build capabilities",
          body: "We develop sales capabilities through training, coaching, and tools. We implement performance management systems that sustain improvement over time.",
        },
      ]}
      featuredCases={[
        {
          slug: "bank-process-automation",
          title: "Regional Bank Automates Loan Origination End-to-End",
          industry: "Financial Services · Automation",
          metric: "70%",
          image: "/images/capabilities/cap-mobile-woman.jpg",
        },
        {
          slug: "wealth-management-automation",
          title: "Wealth Manager Automates Portfolio Reporting And Client Onboarding",
          industry: "Financial Services · Wealth",
          metric: "3x",
          image: "/images/capabilities/cap-peacock.jpg",
        },
        {
          slug: "fintech-payment-automation",
          title: "Fintech Cuts Payment Reconciliation Cost By Two Thirds",
          industry: "Financial Services · Payments",
          metric: "67%",
          image: "/images/capabilities/cap-data-bars.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Sales Excellence lead"
    />
  );
}
