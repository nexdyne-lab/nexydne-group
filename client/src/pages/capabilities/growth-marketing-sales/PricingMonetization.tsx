
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function PricingMonetization() {
  return (
    <CapabilityHubTemplate
      hubName="Pricing & Monetization"
      slug="pricing-monetization"
      insightsTopic="growth"
      heroSubtitle="Unlock hidden value through strategic pricing. We help you optimize pricing strategies, improve monetization, and capture the full value of your products and services."
      heroImage="/images/capabilities/cap-telescope.jpg"
      heroFocal="50% 45%"
      experienceStats={[
        { number: "200+", label: "pricing transformations delivered globally" },
        { number: "15%", label: "average improvement in gross margin" },
        { number: "5-15%", label: "average margin lift from pricing" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
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
          title: "Modernize the pricing & monetization tech and talent stack",
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
        { slug: "hotel-revenue-transformation", title: "Lifting hotel revenue per room by 18%", industry: "Travel & Hospitality", metric: "18%", image: "/images/cases/hotel-revenue-transformation-hero.jpg" },
        { slug: "retail-assortment-optimization", title: "Tailoring store assortments to lift a retailer's sales", industry: "Retail", metric: "12%", image: "/images/cases/retail-assortment-optimization-hero.jpg" },
        { slug: "insurance-ai-underwriting", title: "Quoting commercial business in a day, not a week", industry: "Insurance", metric: "40%", image: "/images/cases/insurance-ai-underwriting-hero.jpg" },
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
