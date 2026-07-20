import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

export default function ConsumerProductsDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Consumer Products"
      industrySlug="consumer-products"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="Consumer, commerce, and supply-chain data still live in silos that were never designed to talk. We help CPG companies unify them into one governed data fabric — the foundation every AI use case, from demand forecasting to retail-media measurement, actually depends on."
      heroImage="/images/industries/tech-datacenter.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "One data fabric — or a dozen AI pilots that never scale.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Every CPG AI ambition — demand forecasting, personalization, retail-media measurement, autonomous planning — quietly assumes a clean, governed, connected data foundation. Almost no one has it. Consumer data sits in marketing, shipment data in supply chain, syndicated data in a third system, and none of them share an identity or even a definition of a customer or a case.",
          "We build the fabric that makes the rest possible: a modern data platform and engineering, governance that survives an audit, and the visualization layer that turns it into decisions. Done once, it becomes the shared foundation every downstream use case draws on — the difference between a portfolio of stalled pilots and a capability that compounds.",
        ],
      }}
      offeringsHeading="How we build the CPG data foundation."
      offeringsIntro="From strategy to a governed platform, each capability moves you toward one trusted view of consumer, commerce, and supply chain."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Define the data ambition, use-case roadmap, and operating model that tie the foundation to real CPG value.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up the modern, cloud-native platform that unifies consumer, commerce, and supply-chain data at scale.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Build the pipelines and identity resolution that turn scattered signals into one trusted, query-ready fabric.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Put the controls, lineage, and privacy posture in place so the data is trusted — and audit-ready.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Turn the fabric into decisions with the dashboards and self-serve analytics commercial teams actually use.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Deploy the accelerators and reusable components that get the first CPG AI use cases live in months.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "30%", label: "of transformations succeed — we build for that 30%" },
        { number: "1 fabric", label: "unifying consumer, commerce, and supply-chain data" },
        { number: "Months", label: "not years, to your first production AI use case" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={[
        {
          slug: "consumer-electronics-demand-optimization",
          title: "Cutting Excess Stock for a Consumer Electronics Brand",
          industry: "Consumer Products",
          metric: "40%",
          image: "/images/cases/consumer-electronics-demand-optimization-hero.jpg",
        },
        {
          slug: "food-beverage-demand-forecasting",
          title: "Sharper Demand Forecasting for a Food and Beverage Maker",
          industry: "Consumer Products",
          metric: "30%",
          image: "/images/cases/food-beverage-demand-forecasting-hero.jpg",
        },
        {
          slug: "retail-assortment-optimization",
          title: "Tailoring Store Assortments Lifts a Retailer's Sales",
          industry: "Consumer Products",
          metric: "12%",
          image: "/images/cases/retail-assortment-optimization-hero.jpg",
        },
      ]}
      relatedHeading="Adjacent work for Consumer Products leaders."
      related={[
        { name: "Customer Intelligence", href: "/industries/consumer-products/customer-intelligence" },
        { name: "Pricing & Revenue Management", href: "/industries/consumer-products/pricing-revenue-management" },
        { name: "Operations Excellence", href: "/industries/consumer-products/operations-excellence" },
      ]}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Build the data fabric your AI roadmap assumes.",
        body: "Tell us which use case keeps stalling on data — forecasting, personalization, measurement. Our Consumer Products data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
