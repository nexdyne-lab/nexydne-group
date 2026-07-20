
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function ServiceBlueprinting() {
  return (
    <ServiceDetailTemplate
      hubName="Service Design"
      hubSlug="service-design"
      hubHref="/capabilities/growth-marketing-sales/service-design"
      serviceName="Service Blueprinting"
      serviceSlug="service-blueprinting"
      heroSubtitle="We visualize the entire service ecosystem, mapping front-end customer actions against back-end support processes. This 'X-ray view' of your organization reveals bottlenecks, redundancies, and opportunities for automation, ensuring that every touchpoint is supported by robust infrastructure."
      heroImage="/images/capabilities/cap-diverse-team.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "40+", label: "Service Blueprinting engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate service blueprinting from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, service blueprinting compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Service Design team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where service blueprinting earns its keep.",
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
        "A clear, prioritized roadmap that ties service blueprinting to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "hotel-guest-experience", title: "Restoring personal service across a hotel group", industry: "Travel & Hospitality", metric: "+25pts", image: "/images/cases/hotel-guest-experience-hero.jpg" },
        { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/cases/telecom-customer-experience-hero.jpg" },
        { slug: "insurance-digital-distribution", title: "Turning a call-center insurer into a digital one", industry: "Insurance", metric: "50%", image: "/images/cases/insurance-digital-distribution-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "employee-experience-ex-design", name: "Employee Experience (EX) Design", href: "/capabilities/growth-marketing-sales/service-design/employee-experience-ex-design" },
        { slug: "physical-digital-integration", name: "Physical-Digital Integration", href: "/capabilities/growth-marketing-sales/service-design/physical-digital-integration" },
        { slug: "service-prototyping-and-piloting", name: "Service Prototyping & Piloting", href: "/capabilities/growth-marketing-sales/service-design/service-prototyping-and-piloting" },
      ]}
      ctaLeadName="Talk to our Service Design lead"
    />
  );
}
