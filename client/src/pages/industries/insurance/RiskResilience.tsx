import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "insurance-ai-underwriting",
    title: "Quoting Commercial Business in a Day, Not a Week",
    industry: "Insurance",
    metric: "40%",
    image: "/images/industries/fin-monitors.jpg",
  },
  {
    slug: "insurance-claims-automation",
    title: "Settling Straightforward Claims in Hours, Not Weeks",
    industry: "Insurance",
    metric: "60%",
    image: "/case-insurance-claims.399e5d4b.jpg",
  },
  {
    slug: "insurance-digital-distribution",
    title: "Turning a Call-Center Insurer Into a Digital One",
    industry: "Insurance",
    metric: "50%",
    image: "/images/industries/fin-handshake-city.jpg",
  },
];

const related = [
  { name: "Data Transformation", href: "/industries/insurance/data-transformation" },
  { name: "Operations Excellence", href: "/industries/insurance/operations-excellence" },
  { name: "Customer Intelligence", href: "/industries/insurance/customer-intelligence" },
];

export default function InsuranceRiskResilience() {
  return (
    <IndustryCapabilityTemplate
      industry="Insurance"
      industrySlug="insurance"
      capability="Risk & Resilience"
      capabilitySlug="risk-resilience"
      heroSubtitle="An insurer's whole business is priced risk — but the risk that ends careers now sits in the pricing models, the catastrophe assumptions, and the AI making underwriting calls no one can explain to a regulator. We help carriers and reinsurers govern their models, defend their loss picks, and prove control the way state DOIs, the NAIC, and rating agencies now expect."
      heroImage="/images/industries/fin-handshake-city.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Your loss ratio is only as trustworthy as the model behind it.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Underwriting and pricing have quietly become software. Rating plans, cat models, and GLM-and-now-gradient-boosting risk scores decide who gets bound and at what premium — but many carriers still cannot show a regulator how a rate was derived, whether a model discriminates, or when the vendor cat model last matched actual losses. When climate reprices whole property books and reserves prove short, that gap becomes a solvency and reputation problem, not a modeling footnote.",
          "We build the governance that lets you underwrite aggressively without flying blind: model-risk management and explainability for every pricing and fraud model, data governance so the exposure and claims data feeding them is trusted, and automated controls that catch leakage, unfair-discrimination, and reserving drift before an exam or a bad accident year does. Resilient in the way rating agencies reward — not merely compliant.",
        ],
      }}
      offeringsHeading="How we build risk and resilience for insurers."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Governance",
          description:
            "Certify the exposure, loss, and third-party data feeding pricing, cat, and reserving models so an actuary or examiner can trust every number.",
          href: "/solutions/data-governance",
        },
        {
          title: "Responsible AI & Model Risk",
          description:
            "Validate, document, and monitor underwriting, pricing, and fraud models for accuracy, drift, and unfair discrimination — ready for DOI and NAIC scrutiny.",
          href: "/capabilities/artificial-intelligence/responsible-ai",
        },
        {
          title: "Automated Controls",
          description:
            "Embed real-time controls into underwriting and claims that flag leakage, rate deviations, and reserving anomalies before they compound.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Close the loop between actual losses and model assumptions so rate adequacy and reserves are corrected every quarter, not every audit.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Process Discovery & Mining",
          description:
            "Map how underwriting authority, referrals, and claims decisions really flow to expose the control gaps that drive leakage and E&O exposure.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Change Management & Training",
          description:
            "Bring underwriters, actuaries, and claims leaders along so new controls and model governance become how the book is run, not shelfware.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "3–5 pts", label: "combined-ratio improvement from tighter risk selection and leakage control" },
        { number: "100%", label: "of pricing and fraud models documented and monitored for exam readiness" },
        { number: "40%+", label: "faster model validation and rate-filing support cycles" },
      ]}
      casesHeading="Risk and resilience, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Insurance leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Risk & Resilience practice",
        href: "/capabilities/risk-and-resilience",
      }}
      cta={{
        heading: "Underwrite with conviction, defend it with evidence.",
        body: "Tell us where the risk keeps you up — a cat book repricing, a model you cannot explain, a reserving surprise. Our Insurance team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
