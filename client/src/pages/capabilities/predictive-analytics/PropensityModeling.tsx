
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function PropensityModeling() {
  return (
    <ServiceDetailTemplate
      hubName="Predictive Analytics"
      hubSlug="predictive-analytics"
      hubHref="/capabilities/artificial-intelligence/predictive-analytics"
      serviceName="Propensity Modeling"
      serviceSlug="propensity-modeling"
      heroSubtitle="Predict which customers are most likely to buy, respond to campaigns, or take specific actions. Prioritize outreach for maximum impact. Our team brings engineering depth, design sensibility, and operating-model rigor to make this capability durable, measurable, and trusted across your business."
      heroImage="/images/capabilities/cap-circuit-green.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "40+", label: "Propensity Modeling engagements delivered" },
        { number: "8 wks", label: "Median time to first production milestone" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate propensity modeling from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, propensity modeling compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our Predictive Analytics team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where propensity modeling earns its keep.",
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
        "A clear, prioritized roadmap that ties propensity modeling to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "semiconductor-quality-prediction", title: "Catching chip defects weeks before they appear", industry: "Manufacturing", metric: "92%", image: "/images/industries/mfg-robot-arm.jpg" },
        { slug: "healthcare-readmission", title: "Cutting avoidable readmissions with better prediction", industry: "Healthcare", metric: "42%", image: "/case-doctor-consultation.799c1562.jpg" },
      ]}
      relatedServices={[
        { slug: "demand-forecasting", name: "Demand Forecasting", href: "/capabilities/artificial-intelligence/predictive-analytics/demand-forecasting" },
        { slug: "churn-prediction", name: "Churn Prediction", href: "/capabilities/artificial-intelligence/predictive-analytics/churn-prediction" },
        { slug: "risk-scoring", name: "Risk Scoring", href: "/capabilities/artificial-intelligence/predictive-analytics/risk-scoring" },
      ]}
      ctaLeadName="Talk to our Predictive Analytics lead"
    />
  );
}
