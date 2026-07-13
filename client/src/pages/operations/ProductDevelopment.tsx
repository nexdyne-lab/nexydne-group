
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function ProductDevelopment() {
  return (
    <CapabilityHubTemplate
      hubName="Product Development"
      slug="operations/product-development"
      heroSubtitle="Accelerate innovation and time-to-market. Transform your product development process to deliver winning products faster and more efficiently."
      heroImage="/images/product-strategy-abstract.jpg"
      experienceStats={[
        { number: "80+", label: "Product development transformations for midmarket companies" },
        { number: "30-50%", label: "Typical reduction in time-to-market" },
        { number: "25-40%", label: "Improvement in new product success rates" },
        { number: "Stage-gate", label: "Disciplined pipeline from idea to launch" },
      ]}
      ambitions={[
        {
          title: "Compress time-to-market",
          description:
            "Re-engineer the front end of innovation, parallelize critical paths, and apply modern tooling so launch dates shrink from years to quarters — without sacrificing quality.",
        },
        {
          title: "Design for cost, manufacturability, and sustainability",
          description:
            "Bake DFx disciplines into early design so products hit cost, quality, and ESG targets by construction — not by painful re-work after launch.",
        },
        {
          title: "Run a portfolio that bets right",
          description:
            "Apply venture-style portfolio discipline to your innovation pipeline — clear stage gates, evidence thresholds, and the courage to kill projects that no longer earn investment.",
        },
        {
          title: "Co-create with customers",
          description:
            "Embed customers, partners, and lead users into the development process — accelerating learning, de-risking launches, and producing products people actually want to buy.",
        },
        {
          title: "Lift R&D ROI",
          description:
            "Measure and manage R&D as a value-creating investment, not a fixed cost. Better project selection, throughput, and commercial success rates that move the P&L.",
        },
        {
          title: "Reuse platforms ruthlessly",
          description:
            "Architect modular platforms and shared technology blocks so each new product launches faster, cheaper, and with less risk than the one before it.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "NPD Process Design",
          description:
            "Design and implement new product development processes that balance speed with rigor, from ideation through launch.",
          href: "/capabilities/operations/product-development/npd-process-design",
        },
        {
          title: "Stage-Gate Optimization",
          description:
            "Streamline your stage-gate process to accelerate decision-making while maintaining appropriate governance and risk management.",
          href: "/capabilities/operations/product-development/stage-gate-optimization",
        },
        {
          title: "Agile Product Development",
          description:
            "Implement agile methodologies adapted for physical product development, enabling faster iteration and customer feedback.",
          href: "/capabilities/operations/product-development/agile-product-development",
        },
        {
          title: "Portfolio Management",
          description:
            "Build portfolio management capabilities that optimize resource allocation and ensure strategic alignment across your product pipeline.",
          href: "/capabilities/operations/product-development/portfolio-management",
        },
        {
          title: "Design for Manufacturing",
          description:
            "Integrate manufacturing considerations early in development to reduce costs, improve quality, and accelerate production ramp-up.",
          href: "/capabilities/operations/product-development/design-for-manufacturing",
        },
        {
          title: "Innovation Management",
          description:
            "Develop innovation processes and culture that generate a steady stream of new product ideas aligned with market opportunities.",
          href: "/capabilities/operations/product-development/innovation-management",
        },
      ]}
      ambitionsCTAText="Talk to us about your Product Development ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Process assessment & optimization",
          body: "We analyze your current development process to identify bottlenecks, waste, and opportunities — then design streamlined workflows that accelerate time-to-market.",
        },
        {
          step: "02",
          title: "Portfolio & pipeline management",
          body: "We help you build portfolio management capabilities that ensure you're investing in the right products and managing your development pipeline effectively.",
        },
        {
          step: "03",
          title: "Cross-functional collaboration",
          body: "We design organizational structures and collaboration mechanisms that break down silos and enable faster, more effective product development.",
        },
      ]}
      featuredCases={[
        { slug: "automotive-ev-transition", title: "Retooling a supplier line for electric-vehicle parts", industry: "Automotive", metric: "45%", image: "/images/industries/auto-robotics-team.jpg" },
        { slug: "aerospace-digital-engineering", title: "How a global aircraft maker brought new programs to market 40% faster", industry: "Aerospace & Defense", metric: "40%", image: "/images/industries/aero-rocket.jpg" },
        { slug: "semiconductor-quality-prediction", title: "Catching chip defects weeks before they appear", industry: "Manufacturing", metric: "92%", image: "/images/industries/mfg-robot-arm.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Product Development lead"
    />
  );
}
