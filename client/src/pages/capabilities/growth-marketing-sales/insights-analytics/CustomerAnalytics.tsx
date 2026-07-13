
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CustomerAnalytics() {
  return (
    <ServiceDetailTemplate
      hubName="Insights & Analytics"
      hubSlug="insights-analytics"
      hubHref="/capabilities/growth-marketing-sales/insights-analytics"
      serviceName="Customer Analytics"
      serviceSlug="customer-analytics"
      heroSubtitle="Analyze customer behavior, preferences, and value. Build segmentation models and customer lifetime value frameworks."
      heroImage="/images/capabilities/cap-data-presentation.jpg"
      heroFocal="55% 45%"
      experienceStats={[
        { number: "40+", label: "Customer Analytics engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate customer analytics from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, customer analytics compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Insights & Analytics team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where customer analytics earns its keep.",
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
        "A clear, prioritized roadmap that ties customer analytics to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedServices={[
        { slug: "marketing-measurement", name: "Marketing Measurement", href: "/capabilities/growth-marketing-sales/insights-analytics/marketing-measurement" },
        { slug: "attribution-modeling", name: "Attribution Modeling", href: "/capabilities/growth-marketing-sales/insights-analytics/attribution-modeling" },
        { slug: "data-infrastructure", name: "Data Infrastructure", href: "/capabilities/growth-marketing-sales/insights-analytics/data-infrastructure" },
      ]}
      ctaLeadName="Talk to our Insights & Analytics lead"
    />
  );
}
