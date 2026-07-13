import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/tech-circuit.jpg",
  },
  {
    slug: "fintech-payment-automation",
    title: "Building a scalable payment processing system for a fintech startup",
    industry: "Financial Services",
    metric: "100K+",
    image: "/images/industries/tech-glasses.jpg",
  },
  {
    slug: "legal-document-intelligence",
    title: "Transforming legal research with AI-powered document intelligence",
    industry: "Professional Services",
    metric: "70%",
    image: "/images/industries/ops-monitors-dark.jpg",
  },
];

const related = [
  { name: "Strategy & Growth", href: "/industries/technology-media-telecom/strategy-growth" },
  { name: "Data Transformation", href: "/industries/technology-media-telecom/data-transformation" },
  { name: "Customer Intelligence", href: "/industries/technology-media-telecom/customer-intelligence" },
];

export default function TechnologyMediaTelecomOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Technology, Media & Telecom"
      industrySlug="technology-media-telecom"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="Running a network is an operational grind: provisioning that takes days, truck rolls that eat margin, NOC teams drowning in alarms, and a cost-to-serve that climbs while ARPU falls. We help carriers and platforms automate service operations, field and provisioning workflows, and network decision-making with AI — so the network runs leaner and the customer feels it less."
      heroImage="/images/industries/tech-circuit.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "In a business where revenue per user only falls, cost-to-serve is where the margin is won.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "Network and service operations are where a TMT operator quietly bleeds margin. Orders route through provisioning systems that were stitched together across generations of technology; field techs get dispatched on truck rolls that a remote fix could have avoided; and NOC engineers face alarm storms where the real fault is buried under thousands of correlated events. Each of these is a cost line that grows with the network even as the revenue per subscriber shrinks.",
          "We attack it with process and AI. We mine the actual provisioning, dispatch, and assurance workflows to find where cycles and cost go, then automate the repeatable paths — order fallout, service activation, field scheduling — and put AIOps decision support in the hands of the engineers who run the network, so anomalies are correlated and triaged before they become outages. The goal is a lower cost-to-serve, faster provisioning and restoration, and operations teams spending their time on the calls that actually need a human.",
        ],
      }}
      offeringsHeading="How we build operations excellence for TMT."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "Mine the real provisioning, dispatch, and assurance workflows to find where cycle time, fallout, and cost actually accumulate.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Automate the repeatable paths — order fallout, service activation, field scheduling — that today depend on manual handoffs across OSS and BSS.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Redesign end-to-end provisioning and field operations so a service order flows to activation without the truck roll it never needed.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Put AIOps in the NOC — correlating alarm storms and surfacing root cause — so engineers triage the real fault instead of the noise.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Stand up the operating rhythm that keeps cost-to-serve, provisioning time, and first-time-fix improving after the project ends.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Bring NOC, field, and care teams onto the new automated and AI-assisted workflows so the operating model actually sticks.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "30–50%", label: "reduction in manual effort across provisioning and assurance" },
        { number: "40%+", label: "fewer avoidable truck rolls through remote diagnosis and automation" },
        { number: "60%", label: "less NOC alarm noise through AIOps correlation" },
      ]}
      casesHeading="Operations excellence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Technology, Media & Telecom leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Lower the cost to run the network.",
        body: "Tell us where operations strain — provisioning fallout, truck-roll cost, an overloaded NOC. Our TMT operations team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
