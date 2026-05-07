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
      heroImage="/hero-bg-aerial.1d9ee9e9.jpg"
      povParagraphs={[
        "Aerospace and defense organizations are under sustained pressure to deliver more capability, faster, and at lower cost. Programs that historically took decades are being compressed into years. New technologies — AI, autonomous systems, advanced manufacturing — are simultaneously creating opportunity and raising the bar on engineering, security, and supplier readiness.",
        "We partner with A&D companies to build the digital capabilities that make this pace sustainable. From digital engineering and model-based systems engineering to AI-powered operations and multi-tier supply-chain resilience, our work helps primes and suppliers innovate faster while protecting the security, traceability, and compliance posture the mission demands.",
        "Our teams bring deep industry experience combined with cutting-edge technical capabilities. We understand the realities — complex program management, ITAR and CMMC obligations, decades-long product lifecycles — and we bring the engineering muscle and operating discipline that move programs from PowerPoint to production."
      ]}
      challenges={[
        {
          title: "Program cycle compression",
          body: "Customers want capability in years, not decades. Digital engineering, model-based systems engineering, and continuous integration of mission software are the only credible paths to that pace at A&D scale."
        },
        {
          title: "Supply-chain and supplier risk",
          body: "Concentrated suppliers, single-source components, and limited tier-N visibility leave programs exposed to schedule and cost shocks. Multi-tier visibility and supplier-quality programs now sit on the critical path."
        },
        {
          title: "Cyber and compliance posture",
          body: "CMMC, ITAR, and program-protection requirements are tightening — and primes are passing those obligations to the supplier base. The cost of failing an audit is no longer recoverable on the next contract."
        },
        {
          title: "Talent and engineering capacity",
          body: "Engineering talent is scarce, and competing demand from commercial tech is real. Augmenting engineers with AI copilots, codified design knowledge, and modern delivery practices is how programs are protecting throughput today."
        }
      ]}
      capabilities={[
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Stand up the digital engineering, MBSE, and program-management muscle that compress cycle times without sacrificing mission assurance."
        },
        {
          name: "Risk & Resilience",
          href: "/capabilities/risk-resilience",
          blurb: "Engineer the cyber, CMMC, and supply-chain visibility posture primes and government customers now require across the supplier base."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Connect engineering, manufacturing, and sustainment data into a single thread that supports AI use cases across the program lifecycle."
        },
        {
          name: "Strategy & Growth",
          href: "/capabilities/strategy-growth",
          blurb: "Identify, qualify, and stand up the new-program and adjacent-market plays the next budget cycle is going to reward."
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
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+ hrs",
          image: "/case-banker-meeting.c53f3999.jpg"
        },
        {
          slug: "consulting-knowledge-management",
          title: "Transforming knowledge management for a global consulting firm",
          industry: "Professional Services",
          metric: "3x",
          image: "/case-strategy-consulting.dfdd1294.jpg"
        },
        {
          slug: "accounting-audit-automation",
          title: "How audit automation helped an accounting firm scale 2x without hiring",
          industry: "Professional Services",
          metric: "2x",
          image: "/case-accountants-audit.1c87a151.jpg"
        }
      ]}
    />
  );
}
