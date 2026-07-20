
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function BaselineAssessment() {
  return (
    <ServiceDetailTemplate
      hubName="Performance Intelligence & Benchmarking"
      hubSlug="performance-intelligence-benchmarking"
      hubHref="/capabilities/business-building/performance-intelligence-benchmarking"
      serviceName="Baseline Assessment"
      serviceSlug="baseline-assessment"
      heroSubtitle="We establish current state performance across key business dimensions and compare against industry benchmarks. This phase identifies performance gaps, quantifies improvement opportunities, and establishes the diagnostic foundation."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "40+", label: "Baseline Assessment engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate baseline assessment from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, baseline assessment compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Performance Intelligence & Benchmarking team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where baseline assessment earns its keep.",
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
        "A clear, prioritized roadmap that ties baseline assessment to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "industrial-connected-products", title: "Building a Recurring Services Business on Machines Already Sold", industry: "Manufacturing", metric: "2,700 machines on connected services", image: "/images/capabilities/cap-battery-factory.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "45% fewer rejected claims", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedServices={[
        { slug: "framework-development", name: "Framework Development", href: "/capabilities/business-building/performance-intelligence-benchmarking/framework-development" },
        { slug: "deployment-training", name: "Deployment & Training", href: "/capabilities/business-building/performance-intelligence-benchmarking/deployment-training" },
        { slug: "continuous-improvement", name: "Continuous Improvement", href: "/capabilities/business-building/performance-intelligence-benchmarking/continuous-improvement" },
      ]}
      ctaLeadName="Talk to our Performance Intelligence & Benchmarking lead"
    />
  );
}
