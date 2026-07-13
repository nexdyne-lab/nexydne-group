
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function SkuRationalization() {
  return (
    <ServiceDetailTemplate
      hubName="Portfolio Optimization"
      hubSlug="portfolio-optimization"
      hubHref="/capabilities/growth-marketing-sales/portfolio-optimization"
      serviceName="SKU Rationalization"
      serviceSlug="sku-rationalization"
      heroSubtitle="Identify and eliminate low-value SKUs that drain resources. Reduce complexity while protecting revenue and customer satisfaction."
      heroImage="/images/capabilities/cap-presenting-graphs.jpg"
      heroFocal="45% 50%"
      experienceStats={[
        { number: "40+", label: "SKU Rationalization engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate sku rationalization from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, sku rationalization compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Portfolio Optimization team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where sku rationalization earns its keep.",
        },
        {
          step: "02",
          title: "Design for production from day one",
          body: "We build with deployment, governance, and change management in mind from the first sprint — so the proof of concept is the v1, not a discardable demo.",
        },
        {
          step: "03",
          title: "Run, learn, scale",
          body: "We instrument every release, capture feedback from real users, and lock in what is working. The system you ship in month three is meaningfully better by month nine.",
        },
      ]}
      outcomes={[
        "A clear, prioritized roadmap that ties sku rationalization to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
        { slug: "insurance-ai-underwriting", title: "Quoting commercial business in a day, not a week", industry: "Insurance", metric: "40%", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedServices={[
        { slug: "portfolio-strategy", name: "Portfolio Strategy", href: "/capabilities/growth-marketing-sales/portfolio-optimization/portfolio-strategy" },
        { slug: "assortment-optimization", name: "Assortment Optimization", href: "/capabilities/growth-marketing-sales/portfolio-optimization/assortment-optimization" },
        { slug: "innovation-pipeline", name: "Innovation Pipeline", href: "/capabilities/growth-marketing-sales/portfolio-optimization/innovation-pipeline" },
      ]}
      ctaLeadName="Talk to our Portfolio Optimization lead"
    />
  );
}
