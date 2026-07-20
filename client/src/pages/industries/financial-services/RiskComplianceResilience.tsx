import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "financial-fraud-detection",
    title: "Catching card fraud before the money moves",
    industry: "Financial Services",
    metric: "73%",
    image: "/images/industries/fin-monitors.jpg",
  },
  {
    slug: "bank-cross-sell",
    title: "Turning single accounts into real relationships",
    industry: "Financial Services",
    metric: "$24M",
    image: "/images/cases/bank-cross-sell-hero.jpg",
  },
  {
    slug: "wealth-onboarding",
    title: "Cutting wealth onboarding from weeks to days",
    industry: "Financial Services",
    metric: "60%",
    image: "/images/cases/wealth-onboarding-hero.jpg",
  },
];

const related = [
  { name: "Customer & Growth Strategy", href: "/industries/financial-services/customer-growth-strategy" },
  { name: "Digital & Data Transformation", href: "/industries/financial-services/digital-data-transformation" },
  { name: "Pricing & Revenue Management", href: "/industries/financial-services/pricing-revenue-management" },
];

export default function FinancialServicesRiskComplianceResilience() {
  return (
    <IndustryCapabilityTemplate
      industry="Financial Services"
      industrySlug="financial-services"
      capability="Risk, Compliance & Resilience"
      capabilitySlug="risk-compliance-resilience"
      heroSubtitle="Regulators, fraud, model risk, and operational fragility are all rising at once — and the controls most institutions rely on are still manual, periodic, and backward-looking. We help financial services firms rewire risk and compliance with automated controls, model-risk frameworks, and real-time monitoring so the business can move faster, not slower."
      heroImage="/images/industries/ops-monitors-dark.jpg"
      heroFocal="55% 50%"
      perspective={{
        heading: "Controls should let the business move faster — not slower.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "In most institutions, risk and compliance are a tax on speed: manual checks, periodic reviews, and control frameworks built for a world of quarterly change. That worked when the threats were slow too. It does not work against real-time fraud, models that drift silently, and regulators who now expect continuous evidence, not an annual binder.",
          "We rewire the function around automation and monitoring: automated controls embedded in the workflow, model-risk and responsible-AI frameworks that hold up under examination, anomaly detection that flags problems as they happen, and governance the regulator and the front line see the same way. The goal is a control environment that earns trust and speed at once.",
        ],
      }}
      offeringsHeading="How we rewire risk, compliance, and resilience for financial services."
      offeringsIntro="Each capability moves control from periodic and manual to continuous, automated, and examiner-ready."
      offerings={[
        {
          title: "Model Risk & Responsible AI",
          description:
            "Frameworks and controls that keep AI and models compliant, explainable, and examiner-ready.",
          href: "/capabilities/artificial-intelligence/responsible-ai",
        },
        {
          title: "Financial Anomaly Detection",
          description:
            "Real-time detection of fraud, error, and control breaks — before they become losses.",
          href: "/capabilities/strategy-corporate-finance/ai-powered-finance/financial-anomaly-detection",
        },
        {
          title: "Data Governance",
          description:
            "Lineage, privacy, and controls that make the data trusted and audit-ready.",
          href: "/solutions/data-governance",
        },
        {
          title: "Automated Controls",
          description:
            "Embed controls directly in the workflow so compliance is continuous, not periodic.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "The operating cadence that keeps the control environment sharp as risk evolves.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Build the frontline capability that turns new controls into real behavior.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "Real-time", label: "continuous control monitoring in place of periodic reviews" },
        { number: "40%+", label: "reduction in manual compliance effort" },
        { number: "On demand", label: "examiner-ready model-risk and control evidence" },
      ]}
      casesHeading="Risk and compliance, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Financial Services leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Risk & Resilience practice",
        href: "/capabilities/risk-and-resilience",
      }}
      cta={{
        heading: "Make risk and compliance a source of speed.",
        body: "Tell us where control is slowing the business down — an approval, a model, an audit. Our Financial Services risk team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
