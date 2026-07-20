import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function DataTransformation() {
  return (
    <CapabilityHubTemplate
      hubName="Data Transformation"
      slug="data-transformation"
      heroSubtitle="Unlock the true value of data. We build performance by making lasting improvements in technology, processes, and capabilities — turning siloed systems and unreliable pipelines into trusted foundations that move at the speed of the business."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "200+", label: "Data platforms shipped" },
        { number: "40%", label: "faster time-to-insight on unified data" },
        { number: "70%", label: "Average data-prep cycle reduction" },
        { number: "12-month", label: "Average engagement length" },
      ]}
      ambitions={[
        {
          title: "Modernize legacy data systems",
          description:
            "Replace siloed warehouses and stale dashboards with cloud-native platforms that scale with your business and surface insights in real time.",
        },
        {
          title: "Build a single source of truth",
          description:
            "Unify data across systems, departments, and business units so leaders make decisions from the same numbers.",
        },
        {
          title: "Enable real-time analytics",
          description:
            "Move from end-of-month reports to live dashboards that catch issues as they happen and turn data into a daily decision input.",
        },
        {
          title: "Activate data products at scale",
          description:
            "Turn raw data into reusable products — APIs, models, dashboards — that other teams consume on demand without bottlenecks on a central team.",
        },
        {
          title: "Establish data governance",
          description:
            "Set the policies, ownership, and quality standards that keep data trustworthy as the organization grows.",
        },
        {
          title: "Accelerate AI/ML enablement",
          description:
            "Build the clean, accessible, governed data foundations that take AI projects from POC to production.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Data Transformation ambition →"
      howWeCanHelp={[
        {
          title: "Value-Focused Execution",
          description:
            "We don't just build data systems; we build business value. Our approach prioritizes high-impact opportunities and ties every initiative to measurable returns from day one.",
          href: "/capabilities/data-transformation/value-focused",
        },
        {
          title: "Accelerated Impact",
          description:
            "We leverage proprietary accelerators, pre-built models, and industry playbooks to cut delivery times by up to 50% — getting working data products into your hands in weeks, not quarters.",
          href: "/capabilities/data-transformation/accelerated-impact",
        },
        {
          title: "Lasting Capabilities",
          description:
            "Technology is easy. People are hard. We build the skills, culture, and operating models your team needs to sustain innovation long after we leave.",
          href: "/capabilities/data-transformation/lasting-capabilities",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Value-focused execution",
          body: "We start with business outcomes, not technology. Every initiative is tied to measurable value — revenue growth, cost reduction, or risk mitigation — and we deliver quick wins in 90 days while building for the long term.",
        },
        {
          step: "02",
          title: "Sustainable architecture",
          body: "We design data platforms that scale with your business. Our architectures are built for flexibility, enabling you to adapt as requirements evolve without costly rework or technical debt.",
        },
        {
          step: "03",
          title: "Lasting capabilities",
          body: "We don't just build solutions — we build your team's capabilities. Knowledge transfer and training are embedded in every engagement to ensure you can operate and evolve independently.",
        },
      ]}
      featuredCases={[
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/images/cases/healthcare-transformation-hero.jpg" },
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/cases/bank-cross-sell-hero.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/artificial-intelligence", name: "Artificial Intelligence" },
        { href: "/capabilities/internet-of-things", name: "Internet of Things" },
        { href: "/capabilities/artificial-intelligence/risk-resilience", name: "Risk & Resilience" },
      ]}
      ctaLeadName="Talk to our Data Transformation lead"
    />
  );
}

