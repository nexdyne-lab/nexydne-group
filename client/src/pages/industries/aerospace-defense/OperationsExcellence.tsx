import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "aerospace-digital-engineering",
    title: "How a global aircraft maker brought new programs to market 40% faster",
    industry: "Aerospace & Defense",
    metric: "40%",
    image: "/images/industries/aero-rocket.jpg",
  },
  {
    slug: "supply-chain-visibility",
    title: "98% fleet readiness for a defense prime by getting ahead of demand",
    industry: "Aerospace & Defense",
    metric: "98%",
    image: "/images/industries/retail-warehouse.jpg",
  },
  {
    slug: "logistics-optimization",
    title: "Halving surprise aircraft groundings for a major airline",
    industry: "Aerospace & Defense",
    metric: "50%",
    image: "/images/industries/ops-monitors-dark.jpg",
  },
];

const related = [
  { name: "Risk & Resilience", href: "/industries/aerospace-defense/risk-resilience" },
  { name: "Data Transformation", href: "/industries/aerospace-defense/data-transformation" },
  { name: "Strategy & Growth", href: "/industries/aerospace-defense/strategy-growth" },
];

export default function AerospaceDefenseOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Aerospace & Defense"
      industrySlug="aerospace-defense"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="The customer keeps moving the delivery date left, and programs that once took decades now have to ship in years. We help A&D primes and suppliers compress program schedule with digital engineering and MBSE, get production and supplier rate-ready, and keep MRO and sustainment cost falling long after fielding."
      heroImage="/images/industries/aero-rocket.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "In A&D, the schedule is the program. Protect it like one.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "Every program lives and dies by schedule, and the government keeps compressing it. The primes and suppliers that actually hold their dates aren't working longer hours — they have made digital engineering and model-based systems engineering the program of record, so a design change propagates to analysis, tooling, and the shop floor without a six-week paper chase and a stack of change boards.",
          "We bring the operating discipline that makes that real: mining how work truly flows from design release to first article and rate, automating the nonconformance dispositions, first-article inspections, and export reviews that pull engineers off engineering, and standing up the MRO and continuous-improvement cadence that keeps sustainment cost per tail and depot turn time falling long after the platform is fielded.",
        ],
      }}
      offeringsHeading="How we build operations excellence for aerospace and defense."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "Map how a program actually moves from design release to first article and rate, and expose the review gates, rework loops, and long-lead queues quietly eating schedule.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Automate the paperwork-heavy work of A&D — nonconformance dispositions, first-article inspection, quality records, and export screening — so engineers stay on engineering.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Re-sequence engineering, procurement, and production flow so long-lead parts and gated reviews stop dictating the delivery date.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Give program managers a live read on schedule risk, supplier commit, and rate readiness instead of a spreadsheet that is always a status meeting behind.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Stand up the lean and sustainment cadence that keeps MRO turn time and cost per tail falling year over year, not just at the kaizen event.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Move digital engineering and MBSE out of the pilot cell and into how the whole program and its suppliers actually work.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "20–30%", label: "compression of program schedule with digital engineering and MBSE" },
        { number: "40%+", label: "less rework and scrap across first-article and rate builds" },
        { number: "25%", label: "faster MRO turn time on fielded sustainment fleets" },
      ]}
      casesHeading="Operations excellence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Aerospace & Defense leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Put the schedule back under program control.",
        body: "Tell us where a program is slipping — a review gate, a single supplier, a rate ramp, a depot line. Our Aerospace & Defense team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
