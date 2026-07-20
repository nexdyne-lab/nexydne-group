
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function ServiceDesign() {
  return (
    <CapabilityHubTemplate
      hubName="Service Design"
      slug="service-design"
      insightsTopic="growth"
      heroSubtitle="Orchestrate the invisible. We align people, infrastructure, and technology to deliver services that are seamless, scalable, and human-centered."
      heroImage="/images/capabilities/cap-mobile-woman.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "End-to-end", label: "Service Design engagements from diagnostic through execution" },
        { number: "Right-sized", label: "Sized for ambitious growing companies — not Fortune 500 only" },
        { number: "90 days", label: "From kickoff to first measurable outcome on most engagements" },
        { number: "Senior-led", label: "Every engagement led by a partner with 15+ years of practitioner experience" },
      ]}
      ambitions={[
        {
          title: "Sharpen the service design thesis",
          description:
            "Make clear, evidence-based choices about where service design can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn service design ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every service design touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument service design so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernize the service design tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect service design investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Service Blueprinting",
          description:
            'We visualize the entire service ecosystem, mapping front-end customer actions against back-end support processes. This "X-ray view" of your organization reveals bottlenecks, redundancies, and opportunities for automation, ensuring that every touchpoint is supported by robust infrastructure.',
          href: "/capabilities/growth-marketing-sales/service-design/service-blueprinting",
        },
        {
          title: "Employee Experience (EX) Design",
          description:
            "Your employees are the delivery mechanism of your service. We design tools, workflows, and environments that empower your team to deliver excellence. By removing internal friction, we liberate your staff to focus on high-value customer interactions rather than administrative drudgery.",
          href: "/capabilities/growth-marketing-sales/service-design/employee-experience-ex-design",
        },
        {
          title: "Physical-Digital Integration",
          description:
            "The boundary between online and offline is dissolving. We design hybrid experiences where digital intelligence enhances physical interactions. From smart retail spaces to connected field services, we ensure continuity and context across the physical-digital divide.",
          href: "/capabilities/growth-marketing-sales/service-design/physical-digital-integration",
        },
        {
          title: "Service Prototyping & Piloting",
          description:
            "We de-risk innovation through rigorous testing. Before full-scale rollout, we simulate service scenarios, build low-fidelity environments, and run live pilots. This iterative approach allows us to validate assumptions, refine mechanics, and ensure operational readiness.",
          href: "/capabilities/growth-marketing-sales/service-design/service-prototyping-and-piloting",
        },
        {
          title: "Customer Experience",
          description:
            "Turn customers into advocates. We map journeys, identify friction points, and design seamless experiences that drive loyalty and retention.",
          href: "/capabilities/growth-marketing-sales/service-design/customer-experience",
        },
        {
          title: "Personalization at Scale",
          description:
            "Leveraging data and AI to deliver relevant content and offers to millions of users individually, in real-time, without compromising privacy or performance.",
          href: "/capabilities/growth-marketing-sales/service-design/personalization-at-scale",
        },
      ]}
      ambitionsCTAText="Talk to us about your Service Design ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose what's actually blocking growth",
          body: "Build a clear picture of where the friction lives in your service design system — across data, process, talent, and incentives — before prescribing solutions.",
        },
        {
          step: "02",
          title: "Design the next-stage operating model",
          body: "Translate strategic intent into the playbooks, governance, and capabilities that turn ambition into a repeatable service design motion.",
        },
        {
          step: "03",
          title: "Embed and prove the system",
          body: "Deploy with your team, instrument the metrics that matter, and prove the impact in the first two reporting cycles — not the first two years.",
        },
      ]}
      featuredCases={[
        { slug: "hotel-guest-experience", title: "Restoring personal service across a hotel group", industry: "Travel & Hospitality", metric: "+25pts", image: "/images/cases/hotel-guest-experience-hero.jpg" },
        { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/cases/telecom-customer-experience-hero.jpg" },
        { slug: "insurance-digital-distribution", title: "Turning a call-center insurer into a digital one", industry: "Insurance", metric: "50%", image: "/images/cases/insurance-digital-distribution-hero.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Service Design lead"
    />
  );
}
