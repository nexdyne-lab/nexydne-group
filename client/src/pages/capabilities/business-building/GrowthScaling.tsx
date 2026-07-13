
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function GrowthScaling() {
  return (
    <CapabilityHubTemplate
      hubName="Growth & Scaling"
      slug="growth-scaling"
      insightsTopic="business"
      heroSubtitle="Cross the chasm from early traction to market leadership. We help growing companies scale revenue, operations, and teams without losing what made them successful."
      heroImage="/images/growth-scaling-abstract.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "4.2x", label: "Average revenue growth over 24-month engagements" },
        { number: "35+", label: "Companies scaled from $5M to $50M+ ARR" },
        { number: "12", label: "International market expansions across 4 continents" },
      ]}
      ambitions={[
        {
          title: "Get past the next plateau",
          description:
            "Diagnose what's actually blocking scale — unit economics, channel saturation, ops capacity — and design the next stage of the growth engine, not just patch the current one.",
        },
        {
          title: "Turn founder-led sales into a real GTM",
          description:
            "Build the playbooks, hiring profiles, and forecasting discipline that take you from heroic individual sellers to a repeatable, scalable revenue motion.",
        },
        {
          title: "Lift retention and lifetime value",
          description:
            "Engineer the engagement loops, onboarding flows, and account programs that make customers stay, expand, and advocate — the highest-leverage growth lever you have.",
        },
        {
          title: "Expand internationally with confidence",
          description:
            "Choose the right markets, design entry strategy, and stand up local operations — without the multi-year false starts that kill most expansion plans.",
        },
        {
          title: "Build the operating system for 10x",
          description:
            "Replace duct-taped processes with the systems, dashboards, and team structures that scale cleanly — so growth doesn't take the company down with it.",
        },
        {
          title: "Make growth decisions with real data",
          description:
            "Stand up the analytics infrastructure that reveals what's actually driving growth, not what the dashboard you inherited says is happening.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Growth & Scaling ambition →"
      howWeCanHelp={[
        {
          title: "Customer Acquisition",
          description:
            "Build scalable acquisition engines across paid, organic, and partnership channels. We optimize CAC while maintaining quality at scale.",
          href: "/capabilities/business-building/growth-scaling/customer-acquisition",
        },
        {
          title: "Retention & Engagement",
          description:
            "Keep customers coming back. We design retention programs, engagement loops, and loyalty systems that maximize lifetime value.",
          href: "/capabilities/business-building/growth-scaling/retention-engagement",
        },
        {
          title: "Revenue Optimization",
          description:
            "Unlock hidden revenue in your existing customer base. Pricing strategy, upsell/cross-sell programs, and monetization optimization.",
          href: "/capabilities/business-building/growth-scaling/revenue-optimization",
        },
        {
          title: "Operational Scaling",
          description:
            "Build the infrastructure to support 10x growth. Processes, systems, and team structures that scale without breaking.",
          href: "/capabilities/business-building/growth-scaling/operational-scaling",
        },
        {
          title: "International Expansion",
          description:
            "Take your business global. Market entry strategy, localization, regulatory navigation, and local team building.",
          href: "/capabilities/business-building/growth-scaling/international-expansion",
        },
        {
          title: "Growth Analytics",
          description:
            "Make data-driven growth decisions. We build analytics infrastructure and dashboards that reveal what's actually driving growth.",
          href: "/capabilities/business-building/growth-scaling/growth-analytics",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose",
          body: "We assess your current growth engine — what's working, what's not, and what's blocking scale. Honest analysis of unit economics, channel efficiency, and operational capacity.",
        },
        {
          step: "02",
          title: "Design",
          body: "We build a growth roadmap tailored to your stage and ambition. Clear priorities, realistic timelines, and the right sequence of investments to unlock the next level.",
        },
        {
          step: "03",
          title: "Execute",
          body: "We work alongside your team to implement the plan. Hands-on support for the hardest parts — building teams, launching channels, and establishing the systems for scale.",
        },
      ]}
      featuredCases={[
        { slug: "automotive-ev-transition", title: "Retooling a supplier line for electric-vehicle parts", industry: "Automotive", metric: "45%", image: "/images/industries/auto-robotics-team.jpg" },
        { slug: "pe-distribution-digital", title: "Standing up a carved-out distributor in six months", industry: "Private Equity", metric: "6 Months", image: "/images/industries/deal-handshake.jpg" },
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/growth-marketing-sales", name: "Growth, Marketing & Sales" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Growth & Scaling lead"
    />
  );
}
