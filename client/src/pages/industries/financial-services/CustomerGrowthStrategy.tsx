import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/fin-monitors.jpg",
  },
  {
    slug: "wealth-management-automation",
    title: "Automating wealth management operations for better client experiences",
    industry: "Financial Services",
    metric: "45%",
    image: "/images/industries/fin-handshake-city.jpg",
  },
  {
    slug: "fintech-payment-automation",
    title: "Building a scalable payment processing system for a fintech startup",
    industry: "Financial Services",
    metric: "100K+",
    image: "/images/industries/advisor-charts.jpg",
  },
];

const related = [
  { name: "Digital & Data Transformation", href: "/industries/financial-services/digital-data-transformation" },
  { name: "Risk, Compliance & Resilience", href: "/industries/financial-services/risk-compliance-resilience" },
  { name: "Pricing & Revenue Management", href: "/industries/financial-services/pricing-revenue-management" },
];

export default function FinancialServicesCustomerGrowthStrategy() {
  return (
    <IndustryCapabilityTemplate
      industry="Financial Services"
      industrySlug="financial-services"
      capability="Customer & Growth Strategy"
      capabilitySlug="customer-growth-strategy"
      heroSubtitle="In financial services the product is a commodity and the relationship is everything — yet most institutions still market to segments they defined a decade ago. We help banks, insurers, and wealth managers understand what actually drives customer choice, and build advantaged, demand-centric growth positions around it."
      heroImage="/images/industries/advisor-charts.jpg"
      heroFocal="60% 40%"
      perspective={{
        heading: "Growth in financial services is won on relevance, not rate.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "Rate and fee competition is a race to the bottom, and everyone is running it. The institutions pulling ahead compete on relevance instead — they know which life events, behaviors, and unmet needs actually move a customer to consolidate, refinance, or switch, and they organize the whole growth engine around that.",
          "We help you find those signals and act on them: behavioral segmentation that goes beyond age and balance, predictive models that surface the next best conversation, and the growth and digital strategy to turn insight into advantaged positions — not another undifferentiated product push.",
        ],
      }}
      offeringsHeading="How we build customer and growth strategy for financial services."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Behavioral Segmentation",
          description:
            "Segment on real financial behavior and life events, not the demographic buckets everyone else uses.",
          href: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Predictive Analytics & Modeling",
          description:
            "Model propensity, attrition, and lifetime value to surface the next best conversation before a competitor does.",
          href: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Personalization Strategy",
          description:
            "Deploy relevant, compliant personalization across app, web, and advisor channels.",
          href: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Growth Strategy",
          description:
            "Define where to play and how to win across segments, products, and geographies.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy",
        },
        {
          title: "Digital Strategy",
          description:
            "Build the digital proposition and roadmap that make the relationship stickier, not just cheaper.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/digital-strategy",
        },
        {
          title: "Business Model Innovation",
          description:
            "Design embedded-finance, platform, and ecosystem plays that open new growth pools.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/business-model-innovation",
        },
      ]}
      stats={[
        { number: "20%+", label: "lift in cross-sell conversion on next-best-action programs" },
        { number: "15–30%", label: "reduction in attrition among high-value clients" },
        { number: "2–3x", label: "return on targeted growth and personalization programs" },
      ]}
      casesHeading="Growth strategy, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Financial Services leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Strategy & Corporate Finance practice",
        href: "/capabilities/strategy-corporate-finance",
      }}
      cta={{
        heading: "Compete on relevance, not rate.",
        body: "Tell us where growth has stalled — a segment, a product, a channel. Our Financial Services team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
