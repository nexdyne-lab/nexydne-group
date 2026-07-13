// TODO: David — confirm Aerospace & Defense-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function AerospaceDefenseIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Aerospace & Defense"
      slug="aerospace-defense"
      heroSubtitle="We help A&D primes, suppliers, and government programs deliver more capability, faster — using digital engineering, AI-powered operations, and resilient supply chains to compress cycle times without compromising security or compliance."
      heroImage="/images/industries/aero-rocket.jpg"
      perspectiveImage="/images/industries/aero-astronaut.jpg"
      quoteImage="/images/industries/ops-monitors-dark.jpg"
      heroFocal="55% 40%"
      povParagraphs={[
        "Aerospace and defense organizations are under sustained pressure to deliver more capability, faster, and at lower cost. Programs that historically took decades are being compressed into years. New technologies — AI, autonomous systems, advanced manufacturing — are simultaneously creating opportunity and raising the bar on engineering, security, and supplier readiness.",
        "We partner with A&D companies to build the digital capabilities that make this pace sustainable. From digital engineering and model-based systems engineering to AI-powered operations and multi-tier supply-chain resilience, our work helps primes and suppliers innovate faster while protecting the security, traceability, and compliance posture the mission demands.",
        "Our teams bring deep industry experience combined with cutting-edge technical capabilities. We understand the realities — complex program management, ITAR and CMMC obligations, decades-long product lifecycles — and we bring the engineering muscle and operating discipline that move programs from PowerPoint to production."
      ]}
      challenges={[
        {
          title: "Program cycle compression",
          body: "Customers want capability in years, not decades — and digital engineering and MBSE are the only credible way there at scale."
        },
        {
          title: "Supply-chain and supplier risk",
          body: "Concentrated, single-source suppliers and thin tier-N visibility leave programs exposed to schedule and cost shocks."
        },
        {
          title: "Cyber and compliance posture",
          body: "CMMC, ITAR, and program-protection rules are tightening — and primes are pushing them down to the supplier base."
        },
        {
          title: "Talent and engineering capacity",
          body: "Engineering talent is scarce; AI copilots and codified design knowledge are how programs protect throughput today."
        }
      ]}
      capabilities={[
        {
          name: "Operations Excellence",
          href: "/industries/aerospace-defense/operations-excellence",
          blurb: "Digital engineering, MBSE, and program-management muscle that compress cycle times without sacrificing mission assurance."
        },
        {
          name: "Risk & Resilience",
          href: "/industries/aerospace-defense/risk-resilience",
          blurb: "The cyber, CMMC, and supply-chain visibility posture primes and government now require across the base."
        },
        {
          name: "Data Transformation",
          href: "/industries/aerospace-defense/data-transformation",
          blurb: "One data thread across engineering, manufacturing, and sustainment that powers AI through the program lifecycle."
        },
        {
          name: "Strategy & Growth",
          href: "/industries/aerospace-defense/strategy-growth",
          blurb: "The new-program and adjacent-market plays the next budget cycle will reward."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "Top 5", label: "Primes served on at least one program"},
        {number: "60+", label: "A&D programs supported"},
        {number: "25%", label: "Average program-schedule compression"},
        {number: "CMMC L2", label: "Engagements delivered to date"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The A&D programs that ship on time are the ones that treat digital engineering as the program of record — not as a parallel modernization track that competes with delivery.",
        author: "Colonel (ret.) David Reyes",
        role: "Partner, Aerospace & Defense Practice"
      }}
      featuredCases={[
        {
          slug: "aerospace-digital-engineering",
          title: "How a global aircraft maker brought new programs to market 40% faster",
          industry: "Aerospace & Defense",
          metric: "40%",
          image: "/images/industries/aero-rocket.jpg"
        },
        {
          slug: "supply-chain-visibility",
          title: "98% fleet readiness for a defense prime by getting ahead of demand",
          industry: "Aerospace & Defense",
          metric: "98%",
          image: "/images/industries/retail-warehouse.jpg"
        },
        {
          slug: "logistics-optimization",
          title: "Halving surprise aircraft groundings for a major airline",
          industry: "Aerospace & Defense",
          metric: "50%",
          image: "/images/industries/ops-monitors-dark.jpg"
        }
      ]}
    />
  );
}
