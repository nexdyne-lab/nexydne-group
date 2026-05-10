// TODO: David — confirm Pricing & Monetization experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Pricing & Monetization hub.
// TODO: confirm ambition copy with practice lead before publish

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function PricingMonetization() {
  return (
    <CapabilityHubTemplate
      hubName="Pricing & Monetization"
      slug="pricing-monetization"
      heroSubtitle="Unlock hidden value through strategic pricing. We help you optimize pricing strategies, improve monetization, and capture the full value of your products and services."
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
      experienceStats={[
        { number: "200+", label: "pricing transformations delivered globally" },
        { number: "15%", label: "average improvement in gross margin" },
        { number: "$500M+", label: "cumulative profit improvement for clients" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Sharpen the pricing & monetization thesis",
          description:
            "Make clear, evidence-based choices about where pricing & monetization can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn pricing & monetization ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every pricing & monetization touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument pricing & monetization so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the pricing & monetization tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect pricing & monetization investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Pricing Strategy",
          description:
            "Develop pricing strategies that capture value and support growth. Align pricing with competitive positioning and customer willingness to pay.",
          href: "/capabilities/growth-marketing-sales/pricing-monetization/pricing-strategy",
        },
        {
          title: "Value-Based Pricing",
          description:
            "Price based on customer value rather than cost-plus. Quantify value drivers and develop pricing that reflects differentiated value.",
          href: "/capabilities/growth-marketing-sales/pricing-monetization/value-based-pricing",
        },
        {
          title: "Dynamic Pricing",
          description:
            "Implement dynamic pricing that responds to market conditions. Build revenue management capabilities that optimize yield.",
          href: "/capabilities/growth-marketing-sales/pricing-monetization/dynamic-pricing",
        },
        {
          title: "Pricing Analytics",
          description:
            "Build analytics capabilities that drive pricing decisions. Develop price elasticity models and optimization algorithms.",
          href: "/capabilities/growth-marketing-sales/pricing-monetization/pricing-analytics",
        },
        {
          title: "Monetization Models",
          description:
            "Design monetization strategies for new business models. Develop subscription, usage-based, and hybrid pricing approaches.",
          href: "/capabilities/growth-marketing-sales/pricing-monetization/monetization-models",
        },
        {
          title: "Pricing Operations",
          description:
            "Build pricing operations that ensure consistent execution. Implement pricing tools, governance, and performance management.",
          href: "/capabilities/growth-marketing-sales/pricing-monetization/pricing-operations",
        },
      ]}
      ambitionsCTAText="Talk to us about your Pricing & Monetization ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and quantify",
          body: "We analyze your pricing performance to identify value leakage and improvement opportunities. We quantify the profit impact of pricing changes and prioritize actions.",
        },
        {
          step: "02",
          title: "Design the strategy",
          body: "We develop pricing strategies aligned with your competitive position and customer value. We design pricing structures, policies, and governance frameworks.",
        },
        {
          step: "03",
          title: "Build capabilities",
          body: "We implement pricing tools, processes, and organizational capabilities. We build analytics infrastructure and train teams to sustain pricing excellence.",
        },
      ]}
      featuredCases={[
        {
          slug: "fintech-payment-automation",
          title: "Fintech Cuts Payment Reconciliation Cost By Two Thirds",
          industry: "Financial Services · Payments",
          metric: "67%",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80",
        },
        {
          slug: "bank-process-automation",
          title: "Regional Bank Automates Loan Origination End-to-End",
          industry: "Financial Services · Automation",
          metric: "70%",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
        },
        {
          slug: "telehealth-platform",
          title: "Telehealth Platform Scales To Two Million Monthly Visits",
          industry: "Healthcare · Telehealth",
          metric: "2M",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Pricing & Monetization lead"
    />
  );
}
