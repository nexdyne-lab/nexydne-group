// TODO: David — confirm Go-To-Market at Scale experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Go-To-Market at Scale hub.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function GoToMarketScale() {
  return (
    <CapabilityHubTemplate
      hubName="Go-To-Market at Scale"
      slug="go-to-market-scale"
      insightsTopic="business"
      heroSubtitle="Accelerate market entry and expansion with curated partnership ecosystems, distribution-channel optimization, and systematic go-to-market frameworks built for mid-market scale."
      heroImage="/images/go-to-market-abstract.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "85+", label: "GTM programs across tech, healthcare, and professional services" },
        // TODO: confirm with practice lead before publish
        { number: "55%", label: "Average reduction in customer acquisition cost" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Faster time-to-market with proven GTM frameworks" },
      ]}
      ambitions={[
        {
          title: "Pick the right channels for your product",
          description:
            "Design a multi-channel GTM strategy optimized for your customer profile and competitive landscape — direct, partner, marketplace, or hybrid — with the math to back it up.",
        },
        {
          title: "Plug into a proven partner network",
          description:
            "Tap a curated ecosystem of 500+ distribution partners, technology integrators, and channel resellers — instead of cold-starting partnership development from scratch.",
        },
        {
          title: "Cut customer acquisition cost",
          description:
            "Rebalance the funnel across paid, organic, ABM, and partnerships so every dollar of acquisition spend works harder — and unit economics stop getting tighter as you scale.",
        },
        {
          title: "Compress the sales cycle",
          description:
            "Deploy proven sales process and enablement methodologies that shorten time-to-close, lift win rates, and turn heroic deals into a repeatable motion.",
        },
        {
          title: "Enter new geographies",
          description:
            "Sequence international expansion the right way — market selection, localized GTM, partner discovery, and the operational footprint to actually serve new customers well.",
        },
        {
          title: "Open adjacent customer segments",
          description:
            "Move into new buyer personas or industry verticals with positioning, pricing, and channel strategy designed for that segment, not bolted onto your current motion.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Go-To-Market ambition →"
      howWeCanHelp={[
        {
          title: "Partner Network Access",
          description:
            "Leverage our curated network of 500+ distribution partners, technology integrators, and channel resellers across key industries.",
          href: "/capabilities/business-building/go-to-market-scale/partner-network-access",
        },
        {
          title: "Channel Strategy Design",
          description:
            "We design multi-channel go-to-market strategies optimized for your product, customer profile, and competitive landscape.",
          href: "/capabilities/business-building/go-to-market-scale/channel-strategy-design",
        },
        {
          title: "Partner Enablement",
          description:
            "We build comprehensive partner programs including training, co-marketing resources, and deal-registration systems.",
          href: "/capabilities/business-building/go-to-market-scale/partner-enablement",
        },
        {
          title: "Demand Generation",
          description:
            "Integrated campaigns combining content marketing, digital advertising, ABM, and events to generate qualified pipeline at scale.",
          href: "/capabilities/business-building/go-to-market-scale/demand-generation",
        },
        {
          title: "Sales Process Optimization",
          description:
            "We deploy proven methodologies that compress sales cycles and improve win rates through systematic process improvement.",
          href: "/capabilities/business-building/go-to-market-scale/sales-process-optimization",
        },
        {
          title: "Market Expansion",
          description:
            "We help you enter new geographic markets and customer segments with localized GTM strategies and partner networks.",
          href: "/capabilities/business-building/go-to-market-scale/market-expansion",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Market & Channel Assessment",
          body: "We analyze your target markets, assess potential distribution channels, and identify partnership opportunities. This diagnostic phase ensures we design go-to-market strategies optimized for your specific competitive context.",
        },
        {
          step: "02",
          title: "Partnership & Channel Development",
          body: "We facilitate partner introductions, negotiate partnership agreements, and establish channel programs. Simultaneously, we build demand generation systems and sales enablement infrastructure to support coordinated GTM execution.",
        },
        {
          step: "03",
          title: "Optimization & Scale",
          body: "We optimize channel performance, refine demand generation campaigns, and scale successful programs. Your team operates go-to-market systems independently with established processes for continuous improvement.",
        },
      ]}
      featuredCases={[
        {
          slug: "manufacturer-dtc",
          title: "Manufacturer Creates Direct-to-Consumer Channel",
          industry: "Manufacturing · Business Building",
          metric: "55%",
          image: "/images/capabilities/cap-venturing.jpg",
        },
        {
          slug: "distributor-marketplace",
          title: "Regional Distributor Launches Digital Marketplace",
          industry: "Distribution · Business Building",
          metric: "85+",
          image: "/images/capabilities/cap-lightbulb-idea.jpg",
        },
        {
          slug: "ecommerce-platform-launch",
          title: "Industrial Distributor Launches B2B E-commerce Platform",
          industry: "Industrial Distribution · Business Building",
          metric: "3x",
          image: "/images/capabilities/cap-celebrate.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/growth-marketing-sales", name: "Growth, Marketing & Sales" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Go-To-Market at Scale lead"
    />
  );
}
