
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function IncentiveDesign() {
  return (
    <ServiceDetailTemplate
      hubName="Sales Excellence"
      hubSlug="sales-excellence"
      hubHref="/capabilities/growth-marketing-sales/sales-excellence"
      serviceName="Incentive Design"
      serviceSlug="incentive-design"
      heroSubtitle="Design compensation and incentive programs that drive behavior. Align incentives with strategic priorities and performance goals."
      heroImage="/images/capabilities/cap-presenting-graphs.jpg"
      heroFocal="60% 50%"
      experienceStats={[
        { number: "40+", label: "Incentive Design engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate incentive design from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, incentive design compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Sales Excellence team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where incentive design earns its keep.",
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
        "A clear, prioritized roadmap that ties incentive design to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "healthcare-readmission", title: "Cutting avoidable readmissions with better prediction", industry: "Healthcare", metric: "42%", image: "/case-doctor-consultation.799c1562.jpg" },
        { slug: "insurance-ai-underwriting", title: "Quoting commercial business in a day, not a week", industry: "Insurance", metric: "40%", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedServices={[
        { slug: "sales-strategy", name: "Sales Strategy", href: "/capabilities/growth-marketing-sales/sales-excellence/sales-strategy" },
        { slug: "sales-process", name: "Sales Process", href: "/capabilities/growth-marketing-sales/sales-excellence/sales-process" },
        { slug: "sales-organization", name: "Sales Organization", href: "/capabilities/growth-marketing-sales/sales-excellence/sales-organization" },
      ]}
      ctaLeadName="Talk to our Sales Excellence lead"
    />
  );
}
