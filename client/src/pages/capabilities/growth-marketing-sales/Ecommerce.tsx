
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export function Ecommerce() {
  return (
    <CapabilityHubTemplate
      hubName="E-commerce"
      slug="ecommerce"
      insightsTopic="growth"
      heroSubtitle="Platform strategy, conversion optimization, and marketplace management. We architect high-performance digital commerce ecosystems that turn traffic into revenue and customers into advocates."
      heroImage="/images/industries/deal-handshake.jpg"
      heroFocal="55% 45%"
      experienceStats={[
        { number: "250+", label: "e-commerce transformations delivered across B2B and B2C" },
        { number: "40%", label: "average increase in conversion rates within 6 months" },
        { number: "3×", label: "median GMV growth across our platform implementations" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      ambitions={[
        {
          title: "Sharpen the e-commerce thesis",
          description:
            "Make clear, evidence-based choices about where e-commerce can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn e-commerce ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every e-commerce touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument e-commerce so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernize the e-commerce tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect e-commerce investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Platform Strategy",
          description:
            "Select and implement the right commerce platform for your business. Evaluate build vs. buy, monolithic vs. composable, and design architecture that scales.",
          href: "/capabilities/growth-marketing-sales/ecommerce/platform-strategy",
        },
        {
          title: "Conversion Optimization",
          description:
            "Increase conversion rates through systematic testing and optimization. Improve checkout flows, product pages, and user experience to maximize revenue.",
          href: "/capabilities/growth-marketing-sales/ecommerce/conversion-optimization",
        },
        {
          title: "Marketplace Management",
          description:
            "Expand reach through marketplace channels. Develop strategies for Amazon, eBay, and vertical marketplaces while maintaining brand control.",
          href: "/capabilities/growth-marketing-sales/ecommerce/marketplace-management",
        },
        {
          title: "Headless Commerce",
          description:
            "Build flexible, composable commerce architecture. Decouple frontend and backend to enable faster innovation and better customer experiences.",
          href: "/capabilities/growth-marketing-sales/ecommerce/headless-commerce",
        },
        {
          title: "Commerce Analytics",
          description:
            "Build analytics capabilities that drive decision-making. Track customer journeys, measure attribution, and optimize marketing spend.",
          href: "/capabilities/growth-marketing-sales/ecommerce/commerce-analytics",
        },
        {
          title: "Performance Engineering",
          description:
            "Optimize site speed and performance. Improve Core Web Vitals, reduce load times, and ensure your commerce platform can handle peak traffic.",
          href: "/capabilities/growth-marketing-sales/ecommerce/performance-engineering",
        },
      ]}
      ambitionsCTAText="Talk to us about your E-commerce ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Assess and architect",
          body: "We start by evaluating your current commerce capabilities, technology stack, and customer experience. We design target architecture that balances flexibility, performance, and total cost of ownership.",
        },
        {
          step: "02",
          title: "Build and integrate",
          body: "We implement commerce platforms using modern, composable approaches. We integrate with your existing systems—ERP, PIM, OMS—to create seamless data flows and unified customer experiences.",
        },
        {
          step: "03",
          title: "Optimize and scale",
          body: "We establish measurement frameworks and optimization processes. We help you build the capabilities to continuously test, learn, and improve conversion, AOV, and customer lifetime value.",
        },
      ]}
      featuredCases={[
        { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", industry: "Retail", metric: "85%", image: "/images/cases/fashion-retail-digital-transformation-hero.jpg" },
        { slug: "retail-assortment-optimization", title: "Tailoring store assortments to lift a retailer's sales", industry: "Retail", metric: "12%", image: "/images/cases/retail-assortment-optimization-hero.jpg" },
        { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our E-commerce lead"
    />
  );
}
