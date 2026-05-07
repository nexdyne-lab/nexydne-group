// TODO: David — confirm Manufacturing-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function ManufacturingIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Manufacturing"
      slug="manufacturing"
      heroSubtitle="We help manufacturers build the smart, resilient operations the next cycle demands — using digital twins, predictive maintenance, and AI-powered planning to lift uptime, compress lead times, and turn factories into a source of advantage rather than a cost line."
      heroImage="/case-study-manufacturing.8d72bf05.jpg"
      povParagraphs={[
        "Manufacturing sits at a pivotal moment. Supply-chain shocks, labor scarcity, and sustainability mandates are forcing companies to rethink how they design, produce, and deliver. At the same time, advances in automation, AI, and digital twins are creating real opportunities to lift productivity and resilience at the same time.",
        "We partner with manufacturers across discrete and process industries — from heavy equipment to high-tech, from Tier-1 OEMs to specialty producers. Our approach combines deep operational expertise with cutting-edge technology, helping companies build the smart factories, connected supply chains, and data-driven operating models the next decade will reward.",
        "Beyond uptime and yield, we help manufacturers create new sources of value. Connected products, predictive services, and outcome-based commercial models are reshaping how manufacturers monetize what they build — and we help leaders identify, prove, and scale those plays without disrupting the core business."
      ]}
      challenges={[
        {
          title: "Supply-chain fragility",
          body: "Concentrated suppliers, opaque tier-N visibility, and volatile demand are exposing risk that legacy planning systems cannot see. Multi-tier visibility and AI-powered S&OP are the new minimum bar."
        },
        {
          title: "Asset uptime and yield",
          body: "Aging equipment and reactive maintenance regimes are leaving capacity and margin on the table. Predictive-maintenance and digital-twin programs that pay back in months — not years — are now table stakes."
        },
        {
          title: "Labor and skills gap",
          body: "Frontline and engineering talent are scarce and expensive. Augmenting workers with AI copilots, codified tribal knowledge, and connected-worker tools is how leaders are protecting throughput today."
        },
        {
          title: "Sustainability and reporting",
          body: "Scope 1, 2, and 3 disclosure obligations are tightening — and customers, lenders, and regulators are watching. Manufacturers need auditable energy, emissions, and circularity data wired into operating decisions, not bolt-on reports."
        }
      ]}
      capabilities={[
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Smart-factory transformation, predictive maintenance, and digital-twin programs that lift uptime and yield while compressing payback periods."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Connect OT and IT data into a single industrial data fabric that powers AI-driven planning, quality, and asset performance at scale."
        },
        {
          name: "Strategy & Growth",
          href: "/capabilities/strategy-growth",
          blurb: "Identify and validate connected-product and outcome-based commercial models that turn installed bases into recurring-revenue businesses."
        },
        {
          name: "Risk & Resilience",
          href: "/capabilities/risk-resilience",
          blurb: "Engineer multi-tier supply-chain visibility, OT cyber-resilience, and the audit-grade sustainability data your customers and regulators now expect."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "150+", label: "Plant transformations delivered"},
        {number: "$2.4M", label: "Average annual savings per engagement"},
        {number: "30%", label: "Average uptime improvement on instrumented assets"},
        {number: "Tier 1", label: "OEM and specialty-producer client base"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The manufacturers pulling ahead are not the ones running the most pilots — they are the ones who pick one bottleneck per plant, prove the economics, and make the digital case impossible to argue with.",
        author: "Marcus Webb",
        role: "Partner, Manufacturing Practice"
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
