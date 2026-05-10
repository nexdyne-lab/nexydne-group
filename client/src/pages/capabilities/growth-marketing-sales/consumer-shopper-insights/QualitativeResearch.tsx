// TODO: confirm Qualitative Research content with Consumer & Shopper Insights practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function QualitativeResearch() {
  return (
    <ServiceDetailTemplate
      hubName="Consumer & Shopper Insights"
      hubSlug="consumer-shopper-insights"
      hubHref="/capabilities/growth-marketing-sales/consumer-shopper-insights"
      serviceName="Qualitative Research"
      serviceSlug="qualitative-research"
      heroSubtitle="Conduct in-depth customer research through interviews, focus groups, and ethnography. Uncover the 'why' behind customer behavior."
      heroImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "Qualitative Research engagements delivered" },
        // TODO: confirm with practice lead before publish
        { number: "8 wks", label: "Median time to first measurable result" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Average lift on the primary outcome metric" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      // TODO: confirm challenge framing with practice lead before publish
      challenge="Most mid-market teams underestimate how hard it is to translate qualitative research from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      // TODO: confirm opportunity framing with practice lead before publish
      opportunity="Done well, qualitative research compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Consumer & Shopper Insights team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where qualitative research earns its keep.",
        },
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "02",
          title: "Design for production from day one",
          body: "We build with deployment, governance, and change management in mind from the first sprint — so the proof of concept is the v1, not a discardable demo.",
        },
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "03",
          title: "Run, learn, scale",
          body: "We instrument every release, capture feedback from real users, and lock in what is working. The system you ship in month three is meaningfully better by month nine.",
        },
      ]}
      outcomes={[
        // TODO: confirm outcomes with practice lead before publish
        "A clear, prioritized roadmap that ties qualitative research to specific business outcomes leadership has signed off on.",
        // TODO: confirm outcomes with practice lead before publish
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        // TODO: confirm outcomes with practice lead before publish
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        // TODO: confirm outcomes with practice lead before publish
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        // TODO: confirm outcomes with practice lead before publish
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        // TODO: confirm outcomes with practice lead before publish
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        {
          slug: "healthcare-data-analytics",
          title: "Health system unifies patient data for population analytics",
          industry: "Healthcare · Consumer & Shopper Insights",
          metric: "3x",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
        },
        {
          slug: "consulting-knowledge-management",
          title: "Consultancy unlocks 30 years of IP with AI knowledge graph",
          industry: "Professional Services · Consumer & Shopper Insights",
          metric: "4x",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "customer-segmentation", name: "Customer Segmentation", href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/customer-segmentation" },
        { slug: "quantitative-research", name: "Quantitative Research", href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/quantitative-research" },
        { slug: "journey-mapping", name: "Journey Mapping", href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/journey-mapping" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Consumer & Shopper Insights lead"
    />
  );
}
