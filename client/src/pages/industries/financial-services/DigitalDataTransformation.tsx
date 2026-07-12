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
  { name: "Customer & Growth Strategy", href: "/industries/financial-services/customer-growth-strategy" },
  { name: "Risk, Compliance & Resilience", href: "/industries/financial-services/risk-compliance-resilience" },
  { name: "Pricing & Revenue Management", href: "/industries/financial-services/pricing-revenue-management" },
];

export default function FinancialServicesDigitalDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Financial Services"
      industrySlug="financial-services"
      capability="Digital & Data Transformation"
      capabilitySlug="digital-data-transformation"
      heroSubtitle="Financial services runs on data — and most of it is trapped in core systems, spreadsheets, and vendor silos that were never designed to talk. We help banks, insurers, and wealth managers build the governed data foundation and digital capabilities that make AI personalization, real-time decisions, and straight-through processing actually possible."
      heroImage="/images/industries/fin-monitors.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The core is not the constraint. The data around it is.",
        image: "/images/cloud-data-abstract.jpg",
        paragraphs: [
          "Every institution has an AI ambition and a modernization budget. Far fewer have the one thing both depend on: a governed, connected data foundation. Customer data sits in the CRM, transactions in the core, risk data in a third system, and none of them share an identity or a definition — so the personalization, the real-time offer, and the automated decision all stall at “the data isn't ready.”",
          "We build the foundation and the digital layer on top of it: a modern data platform, engineering and identity resolution, governance that satisfies the regulator, and AI capabilities that turn it into decisions. Done once, it becomes the shared base every downstream use case draws on — the difference between a pile of pilots and a compounding capability.",
        ],
      }}
      offeringsHeading="How we build digital and data transformation for financial services."
      offeringsIntro="From strategy to a governed, production platform, each capability moves you toward one trusted data core."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Define the data ambition, use-case roadmap, and operating model that tie the foundation to real value.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up the modern, cloud-native platform that unifies customer, transaction, and risk data at scale.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Build the pipelines and identity resolution that turn scattered signals into one trusted, query-ready core.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Put the controls, lineage, and privacy posture in place so the data is trusted — and regulator-ready.",
          href: "/solutions/data-governance",
        },
        {
          title: "AI-Powered Recommendations",
          description:
            "Turn the data core into real-time, compliant recommendations across app, web, and advisor channels.",
          href: "/solutions/customer-intelligence/ai-powered-recommendations",
        },
        {
          title: "Digital Strategy",
          description:
            "Build the digital proposition and roadmap that make the modernization investment pay back.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/digital-strategy",
        },
      ]}
      stats={[
        { number: "30%", label: "of transformations succeed — we build for that 30%" },
        { number: "Real-time", label: "decisions on a governed, connected data core" },
        { number: "Months", label: "not years, to your first production AI use case" },
      ]}
      casesHeading="Digital and data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Financial Services leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Build the data foundation your AI roadmap assumes.",
        body: "Tell us which use case keeps stalling on data — personalization, real-time decisions, straight-through processing. Our Financial Services data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
