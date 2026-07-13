import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "fashion-retail-digital-transformation",
    title: "Growing a fashion retailer's online sales by 85%",
    industry: "Retail",
    metric: "85%",
    image: "/images/capabilities/cap-retail-apparel.jpg",
  },
  {
    slug: "grocery-demand-forecasting",
    title: "Cutting a grocer's fresh-food waste by a third",
    industry: "Retail",
    metric: "35%",
    image: "/images/capabilities/cap-food.jpg",
  },
  {
    slug: "retail-loyalty-transformation",
    title: "Turning a stale loyalty program into 45% more spend",
    industry: "Retail",
    metric: "45%",
    image: "/images/capabilities/cap-retail-data.jpg",
  },
];

const related = [
  { name: "Customer Intelligence", href: "/industries/retail/customer-intelligence" },
  { name: "Pricing & Revenue Management", href: "/industries/retail/pricing-revenue-management" },
  { name: "Operations Excellence", href: "/industries/retail/operations-excellence" },
];

export default function RetailDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Retail"
      industrySlug="retail"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="Commerce, marketing, and supply-chain data still live in systems that were never designed to talk — which is exactly why retail's AI ambitions keep stalling. We help retailers unify them into one governed data platform: the foundation personalization, forecasting, and retail media all depend on."
      heroImage="/images/industries/tech-datacenter.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "One platform — or a decade of retail AI pilots that never scale.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Personalization, demand forecasting, retail media, dynamic pricing — every retail AI ambition quietly assumes a clean, connected, governed data foundation. Almost no retailer has it. Commerce data sits in one system, loyalty in another, supply chain in a third, and none of them share an identity or a definition of a shopper, a SKU, or a store.",
          "We build the platform that makes the rest possible: a modern data foundation, engineering and identity resolution, governance that survives an audit, and the visualization layer that turns it into merchant decisions. Done once, it becomes the base every downstream use case — and every dollar of retail-media revenue — draws on.",
        ],
      }}
      offeringsHeading="How we build the retail data foundation."
      offeringsIntro="From strategy to a governed platform, each capability moves you toward one trusted view of shopper, product, and supply chain."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Define the data ambition, use-case roadmap, and operating model that tie the platform to real retail value.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up the modern, cloud-native platform that unifies commerce, loyalty, and supply-chain data at scale.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Build the pipelines and identity resolution that turn scattered signals into one query-ready fabric.",
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
            "Turn the platform into decisions with the dashboards and self-serve analytics merchants actually use.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Deploy the accelerators and reusable components that get the first retail AI use cases live in months.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "30%", label: "of transformations succeed — we build for that 30%" },
        { number: "1 platform", label: "unifying commerce, loyalty, and supply chain" },
        { number: "Months", label: "not years, to your first retail AI use case" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Retail leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Build the data platform retail AI assumes.",
        body: "Tell us which use case keeps stalling on data — personalization, forecasting, retail media. Our Retail data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
