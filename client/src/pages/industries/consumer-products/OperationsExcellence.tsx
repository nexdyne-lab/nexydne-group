import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

export default function ConsumerProductsOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Consumer Products"
      industrySlug="consumer-products"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="Demand whiplash, SKU proliferation, and fragile multi-tier supply chains are stress-testing every CPG operator. We help you modernize planning, manufacturing, and logistics with AI-driven S&OP and the visibility to turn volatility into a service and cost advantage."
      heroImage="/images/industries/mfg-robotics.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Resilience is designed, not reacted to.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "The operating models that carried CPG through a decade of stable demand are cracking under whiplash, promotion-driven spikes, and SKU counts no planning team can hold in their heads. Firefighting fills the gap — expedited freight, safety stock, and heroics that quietly eat the margin the brand team just earned.",
          "We rebuild the operating core: AI-driven demand and supply planning, connected multi-tier visibility, and the automation that takes the manual work out of the day. The point is a supply chain that absorbs shocks and improves service and cost at the same time — not a dashboard that reports the problem after it already happened.",
        ],
      }}
      offeringsHeading="How we build operations excellence for CPG."
      offeringsIntro="From process discovery to automated planning, each capability is delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "Surface where planning, manufacturing, and logistics actually lose time and cost — from the system data, not the org chart.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Combine RPA, AI, and orchestration to take the manual work out of order-to-cash and supply planning.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Redesign end-to-end flows to cut handoffs, cycle time, and the exceptions that trigger expedites.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Give planners AI-driven demand and supply signals so S&OP decisions get ahead of the whiplash.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Stand up the operating cadence that keeps the gains compounding after the first wave ships.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Build the frontline capability and adoption that turn new tools into new operating behavior.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "4.2x", label: "faster end-to-end cycle times for our clients" },
        { number: "1.5–3x", label: "ROI achieved within the first 12 months" },
        { number: "20–40%", label: "reduction in expedite and stock-out cost" },
      ]}
      casesHeading="Operations, proved in outcomes."
      cases={[
        {
          slug: "consumer-electronics-demand-optimization",
          title: "Cutting Excess Stock for a Consumer Electronics Brand",
          industry: "Consumer Products",
          metric: "40%",
          image: "/images/capabilities/cap-conference-data.jpg",
        },
        {
          slug: "food-beverage-demand-forecasting",
          title: "Sharper Demand Forecasting for a Food and Beverage Maker",
          industry: "Consumer Products",
          metric: "30%",
          image: "/images/capabilities/cap-food.jpg",
        },
        {
          slug: "retail-assortment-optimization",
          title: "Tailoring Store Assortments Lifts a Retailer's Sales",
          industry: "Consumer Products",
          metric: "12%",
          image: "/images/capabilities/cap-retail-apparel.jpg",
        },
      ]}
      relatedHeading="Adjacent work for Consumer Products leaders."
      related={[
        { name: "Customer Intelligence", href: "/industries/consumer-products/customer-intelligence" },
        { name: "Pricing & Revenue Management", href: "/industries/consumer-products/pricing-revenue-management" },
        { name: "Data Transformation", href: "/industries/consumer-products/data-transformation" },
      ]}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Turn supply-chain volatility into advantage.",
        body: "Tell us what is breaking — a planning cycle, a launch, a service level. Our Consumer Products operations team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
