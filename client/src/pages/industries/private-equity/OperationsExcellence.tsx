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
  { name: "Data Transformation", href: "/industries/private-equity/data-transformation" },
  { name: "Risk & Resilience", href: "/industries/private-equity/risk-resilience" },
];

export default function PrivateEquityOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Private Equity"
      industrySlug="private-equity"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="In a compressed hold, EBITDA gains have to be real and fast — not a synergy slide that never reaches the P&L. We work alongside portfolio-company management to take cost out, fix margin, and stand up shared services, with the delivery muscle operating partners need to make the value-creation plan land in the first quarters."
      heroImage="/images/industries/advisor-charts.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Operational alpha is where the return actually comes from now.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "When entry multiples are rich and debt is expensive, the return has to be built inside the business. That means margin, working capital, and productivity — the operational levers a lean deal team and a busy management team rarely have the bandwidth to execute at pace on their own.",
          "We give the operating-partner model delivery capacity. We find the cost and margin opportunity in diligence, then work shoulder-to-shoulder with the portco to run it: process re-engineering, automation, shared services, and a continuous-improvement rhythm that keeps compounding EBITDA every quarter of the hold — with the numbers instrumented so the lift is provable at exit.",
        ],
      }}
      offeringsHeading="How we drive operations excellence for private equity."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "See how the portco actually runs in its first weeks and quantify the cost, margin, and working-capital opportunity behind the deal model.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Automate the manual, headcount-heavy back office to take cost out fast without breaking the operation you just bought.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Re-engineer order-to-cash, procurement, and service flows to lift throughput and free the working capital financing sponsors care about.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Put pricing, demand, and cost intelligence in the hands of portco managers so margin decisions stop relying on gut and spreadsheets.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Install the operating cadence that keeps compounding EBITDA every quarter of the hold, not just in the first 100 days.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Make the improvements stick inside management teams stretched thin by the deal, so the gains survive to the exit process.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "15–25%", label: "cost-to-serve reduction typical on a hold-period efficiency program" },
        { number: "First 100 days", label: "to a quantified, owner-assigned EBITDA improvement plan" },
        { number: "Every quarter", label: "of provable, instrumented margin gain through the hold" },
      ]}
      casesHeading="Operational value creation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Private Equity leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Make the EBITDA lift real and fast.",
        body: "Tell us about the portco — a margin gap, a bloated back office, a synergy case you need to actually deliver. Our Private Equity operations team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
