
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationalScaling() {
  return (
    <ServiceDetailTemplate
      hubName="Growth & Scaling"
      hubSlug="growth-scaling"
      hubHref="/capabilities/business-building/growth-scaling"
      serviceName="Operational Scaling"
      serviceSlug="operational-scaling"
      heroSubtitle="Build the infrastructure to support 10x growth. Processes, systems, and team structures that scale without breaking."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      heroFocal="50% 45%"
      experienceStats={[
        { number: "40+", label: "Operational Scaling engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate operational scaling from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, operational scaling compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Growth & Scaling team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where operational scaling earns its keep.",
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
        "A clear, prioritized roadmap that ties operational scaling to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", industry: "Retail", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg" },
        { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
      ]}
      relatedServices={[
        { slug: "customer-acquisition", name: "Customer Acquisition", href: "/capabilities/business-building/growth-scaling/customer-acquisition" },
        { slug: "retention-engagement", name: "Retention & Engagement", href: "/capabilities/business-building/growth-scaling/retention-engagement" },
        { slug: "revenue-optimization", name: "Revenue Optimization", href: "/capabilities/business-building/growth-scaling/revenue-optimization" },
      ]}
      ctaLeadName="Talk to our Growth & Scaling lead"
    />
  );
}
