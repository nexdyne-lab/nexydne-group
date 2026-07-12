import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/retail-shelves.jpg",
  },
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/team-workshop.jpg",
  },
  {
    slug: "accounting-audit-automation",
    title: "How audit automation helped an accounting firm scale 2x without hiring",
    industry: "Professional Services",
    metric: "2x",
    image: "/images/industries/women-laptops.jpg",
  },
];

const related = [
  { name: "Customer Intelligence", href: "/industries/retail/customer-intelligence" },
  { name: "Pricing & Revenue Management", href: "/industries/retail/pricing-revenue-management" },
  { name: "Data Transformation", href: "/industries/retail/data-transformation" },
];

export default function RetailOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Retail"
      industrySlug="retail"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="Stores, fulfillment, and supply chain are where retail promises are kept or broken — and omnichannel has made all three harder at once. We help retailers modernize allocation, fulfillment, and store operations with AI-driven planning and the automation to serve every channel profitably."
      heroImage="/images/industries/retail-warehouse.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Omnichannel didn't add a channel. It rewired every operation.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "The moment a store became a fulfillment center and a website became a returns desk, every operation you had — allocation, replenishment, labor, last mile — started fighting a job it was not designed for. The result is the retail paradox: too much of the wrong inventory in the wrong place, and stockouts on the one thing the shopper actually wanted.",
          "We rebuild the operating core for omnichannel reality: AI-driven allocation and replenishment, fulfillment and last-mile redesign, and the automation that takes the manual work out of the store. The goal is a network that serves every channel at the service level shoppers expect — and the cost you can actually afford.",
        ],
      }}
      offeringsHeading="How we build operations excellence for retail."
      offeringsIntro="From process discovery to AI-driven allocation, each capability is delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "Surface where allocation, fulfillment, and store ops actually lose time and margin.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Automate replenishment, order routing, and back-office work end to end.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Redesign store and fulfillment flows to cut cycle time and cost to serve.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Give merchants and planners AI-driven allocation and demand signals across the network.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "The operating cadence that keeps service and cost improving season over season.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Build the store and DC capability that turns new tools into new behavior.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "4.2x", label: "faster end-to-end cycle times for our clients" },
        { number: "20–40%", label: "reduction in cost to serve across the network" },
        { number: "Higher", label: "in-stock at lower total inventory" },
      ]}
      casesHeading="Operations, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Retail leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Serve every channel profitably.",
        body: "Tell us what is breaking — an allocation model, a fulfillment promise, a cost-to-serve number. Our Retail operations team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
