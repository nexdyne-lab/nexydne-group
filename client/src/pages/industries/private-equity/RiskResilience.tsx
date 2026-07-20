import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "pe-industrial-transformation",
    title: "How a Fund Added Seven Points of EBITDA Margin at an Industrial Manufacturer",
    industry: "Private Equity",
    metric: "7 pts EBITDA margin",
    image: "/images/cases/pe-industrial-transformation-hero.jpg",
  },
  {
    slug: "pe-healthcare-diligence",
    title: "Cutting healthcare diligence time by 40%",
    industry: "Private Equity",
    metric: "40%",
    image: "/images/cases/pe-healthcare-diligence-hero.jpg",
  },
  {
    slug: "pe-distribution-digital",
    title: "Standing up a carved-out distributor in six months",
    industry: "Private Equity",
    metric: "6 Months",
    image: "/images/cases/pe-distribution-digital-hero.jpg",
  },
];

const related = [
  { name: "Strategy & Growth", href: "/industries/private-equity/strategy-growth" },
  { name: "Operations Excellence", href: "/industries/private-equity/operations-excellence" },
  { name: "Data Transformation", href: "/industries/private-equity/data-transformation" },
];

export default function PrivateEquityRiskResilience() {
  return (
    <IndustryCapabilityTemplate
      industry="Private Equity"
      industrySlug="private-equity"
      capability="Risk & Resilience"
      capabilitySlug="risk-resilience"
      heroSubtitle="A single cyber event, compliance gap, or ESG surprise can wipe out a hold's worth of value creation and stall an exit. We surface those risks in diligence and remediate them inside the portco — cyber, controls, ESG, and model governance — so deals close cleanly and the equity story holds up to a buyer's scrutiny."
      heroImage="/images/industries/skyscraper.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The risk you don't diligence is the discount you take at exit.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Diligence still over-indexes on the numbers and under-weights the things that quietly destroy value in the hold: thin cyber posture, unremediated compliance exposure, ESG gaps LPs now ask about, and AI models nobody governs. Each one can re-price a deal on the way in or force a discount on the way out.",
          "We bring a risk lens to both sides of the transaction. In diligence we quantify cyber, regulatory, and operational exposure so it shapes the price and the 100-day plan; in the hold we stand up the controls, ESG posture, and model governance inside each portco that make the risk defensible — so the asset closes cleanly, survives a buyer's diligence, and holds its value.",
        ],
      }}
      offeringsHeading="How we build risk and resilience for private equity."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Governance",
          description:
            "Give the fund and each portco defensible ownership, lineage, and controls over the data that regulators, LPs, and buyers now scrutinize.",
          href: "/solutions/data-governance",
        },
        {
          title: "Responsible AI & Model Risk",
          description:
            "Govern the pricing and decisioning models a portco increasingly runs on, so an AI use case doesn't become an exit liability.",
          href: "/capabilities/artificial-intelligence/responsible-ai",
        },
        {
          title: "Automated Controls",
          description:
            "Embed automated financial and operational controls across the portfolio so compliance holds without adding headcount to the hold.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Keep risk and ESG posture improving every quarter of the hold, not just before an audit or a sale process opens.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Process Discovery & Mining",
          description:
            "Map where control gaps and compliance exposure actually live in a newly acquired portco before they surface as a loss.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Change Management & Training",
          description:
            "Build the risk and compliance discipline into management teams so remediation sticks all the way to exit diligence.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "Pre-close", label: "cyber, compliance, and ESG exposure quantified into price and plan" },
        { number: "100 days", label: "to remediate the diligence red flags that threaten the hold" },
        { number: "Clean", label: "exit diligence — risk defensible, not a discount lever for the buyer" },
      ]}
      casesHeading="Portfolio risk and resilience, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Private Equity leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Risk & Resilience practice",
        href: "/capabilities/risk-and-resilience",
      }}
      cta={{
        heading: "Keep risk from re-pricing the deal.",
        body: "Tell us where the exposure sits — a cyber gap in diligence, an ESG question from LPs, a portco with no model governance. Our Private Equity risk team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
