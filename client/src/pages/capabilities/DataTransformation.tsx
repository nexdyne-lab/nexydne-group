import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function DataTransformation() {
  return (
    <CapabilityHubTemplate
      hubName="Data Transformation"
      slug="data-transformation"
      heroSubtitle="Unlock the true value of data. We build performance by making lasting improvements in technology, processes, and capabilities — turning siloed systems and unreliable pipelines into trusted foundations that move at the speed of the business."
      // TODO: confirm hero image asset matches Data Transformation theme
      heroImage="/case-data-platform.jpg"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "200+", label: "Data platforms shipped" },
        // TODO: confirm with practice lead before publish
        { number: "$120M+", label: "Client revenue impacted via data products" },
        // TODO: confirm with practice lead before publish
        { number: "70%", label: "Average data-prep cycle reduction" },
        // TODO: confirm with practice lead before publish
        { number: "12-month", label: "Average engagement length" },
      ]}
      // TODO: David — populate 2-3 thought-leadership insights for Data Transformation hub
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
        {
          slug: "healthcare-data-analytics",
          title: "Unlocking healthcare insights with real-time data analytics",
          industry: "Healthcare",
          metric: "25%",
          image: "/case-healthcare-team.5797392b.jpg",
        },
        {
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+",
          image: "/case-banker-meeting.c53f3999.jpg",
        },
        {
          slug: "consulting-knowledge-management",
          title: "Transforming knowledge management for a global consulting firm",
          industry: "Professional Services",
          metric: "3x",
          image: "/case-strategy-consulting.dfdd1294.jpg",
        },
      ]}
      relatedCapabilities={[
        { slug: "artificial-intelligence", name: "Artificial Intelligence" },
        { slug: "internet-of-things", name: "Internet of Things" },
        { slug: "risk-and-resilience", name: "Risk & Resilience" },
      ]}
      ctaLeadName="Talk to our Data Transformation lead"
    />
  );
}
