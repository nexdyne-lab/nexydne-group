
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function FoundationBuild() {
  return (
    <ServiceDetailTemplate
      hubName="Digital Transformation Accelerator"
      hubSlug="digital-transformation-accelerator"
      hubHref="/capabilities/business-building/digital-transformation-accelerator"
      serviceName="Foundation Build"
      serviceSlug="foundation-build"
      heroSubtitle="We establish core architecture components including cloud infrastructure, data platforms, and integration frameworks. This phase focuses on building stable foundations that support subsequent business migrations."
      heroImage="/images/capabilities/cap-3d-printing.jpg"
      heroFocal="50% 45%"
      experienceStats={[
        { number: "40+", label: "Foundation Build engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate foundation build from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, foundation build compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Digital Transformation Accelerator team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where foundation build earns its keep.",
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
        "A clear, prioritized roadmap that ties foundation build to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "cloud-migration-health-system", title: "Moving core systems to the cloud without disruption", industry: "Healthcare", metric: "35%", image: "/images/industries/tech-datacenter.jpg" },
        { slug: "legacy-core-modernization", title: "Modernizing a legacy core without a big-bang rewrite", industry: "Insurance", metric: "70%", image: "/images/industries/ops-monitors-dark.jpg" },
        { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", industry: "Retail", metric: "85%", image: "/images/capabilities/cap-retail-apparel.jpg" },
      ]}
      relatedServices={[
        { slug: "architecture-assessment", name: "Architecture Assessment", href: "/capabilities/business-building/digital-transformation-accelerator/architecture-assessment" },
        { slug: "capability-migration", name: "Capability Migration", href: "/capabilities/business-building/digital-transformation-accelerator/capability-migration" },
        { slug: "optimization-governance", name: "Optimization & Governance", href: "/capabilities/business-building/digital-transformation-accelerator/optimization-governance" },
      ]}
      ctaLeadName="Talk to our Digital Transformation Accelerator lead"
    />
  );
}
