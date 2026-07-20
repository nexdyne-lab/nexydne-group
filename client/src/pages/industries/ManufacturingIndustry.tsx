//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function ManufacturingIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Manufacturing"
      slug="manufacturing"
      heroSubtitle="We help manufacturers build the smart, resilient operations the next cycle demands — using digital twins, predictive maintenance, and AI-powered planning to lift uptime, compress lead times, and turn factories into a source of advantage rather than a cost line."
      heroImage="/images/industries/mfg-robotics.jpg"
      perspectiveImage="/images/industries2/manufacturing-pov.jpg"
      quoteImage="/images/industries/ops-gears.jpg"
      heroFocal="60% 45%"
      povParagraphs={[
        "Manufacturing sits at a pivotal moment. Supply-chain shocks, labor scarcity, and sustainability mandates are forcing companies to rethink how they design, produce, and deliver. At the same time, advances in automation, AI, and digital twins are creating real opportunities to lift productivity and resilience at the same time.",
        "We partner with manufacturers across discrete and process industries — from heavy equipment to high-tech, from Tier-1 OEMs to specialty producers. Our approach combines deep operational expertise with cutting-edge technology, helping companies build the smart factories, connected supply chains, and data-driven operating models the next decade will reward.",
        "Beyond uptime and yield, we help manufacturers create new sources of value. Connected products, predictive services, and outcome-based commercial models are reshaping how manufacturers monetize what they build — and we help leaders identify, prove, and scale those plays without disrupting the core business."
      ]}
      challenges={[
        {
          title: "Supply-chain fragility",
          body: "Concentrated suppliers, opaque tier-N visibility, and volatile demand are exposing risk that legacy planning can't see."
        },
        {
          title: "Asset uptime and yield",
          body: "Aging equipment and reactive maintenance leave capacity and margin on the table; predictive maintenance and digital twins now pay back in months."
        },
        {
          title: "Labor and skills gap",
          body: "Frontline and engineering talent are scarce — AI copilots and connected-worker tools are how leaders protect throughput today."
        },
        {
          title: "Sustainability and reporting",
          body: "Scope 1–3 disclosure is tightening, and manufacturers need auditable emissions data wired into operating decisions, not bolt-on reports."
        }
      ]}
      capabilities={[
        {
          name: "Operations Excellence",
          href: "/industries/manufacturing/operations-excellence",
          blurb: "Smart-factory transformation, predictive maintenance, and digital twins that lift uptime and yield with faster payback."
        },
        {
          name: "Data Transformation",
          href: "/industries/manufacturing/data-transformation",
          blurb: "Connect OT and IT into one industrial data fabric that powers AI-driven planning, quality, and asset performance."
        },
        {
          name: "Strategy & Growth",
          href: "/industries/manufacturing/strategy-growth",
          blurb: "Connected-product and outcome-based models that turn installed bases into recurring-revenue businesses."
        },
        {
          name: "Risk & Resilience",
          href: "/industries/manufacturing/risk-resilience",
          blurb: "Multi-tier supply-chain visibility, OT cyber-resilience, and audit-grade sustainability data your customers and regulators expect."
        }
      ]}
      experienceStats={[
        {number: "150+", label: "Plant transformations delivered"},
        {number: "40%", label: "Average productivity lift on optimized plants"},
        {number: "30%", label: "Average uptime improvement on instrumented assets"},
        {number: "Tier 1", label: "OEM and specialty-producer client base"}
      ]}
      povQuote={{
        text: "The manufacturers pulling ahead are not the ones running the most pilots — they are the ones who pick one bottleneck per plant, prove the economics, and make the digital case impossible to argue with.",
        author: "Manufacturing Practice",
        role: "NexDyne Consulting Group"
      }}
      featuredCases={[
        {
          slug: "automotive-smart-factory",
          title: "Lifting plant productivity by 40% at a vehicle maker",
          industry: "Manufacturing",
          metric: "40%",
          image: "/images/industries/mfg-robotics.jpg"
        },
        {
          slug: "semiconductor-quality-prediction",
          title: "Catching chip defects weeks before they appear",
          industry: "Manufacturing",
          metric: "92%",
          image: "/images/cases/semiconductor-quality-prediction-hero.jpg"
        },
        {
          slug: "industrial-connected-products",
          title: "Building a Recurring Services Business on Machines Already Sold",
          industry: "Manufacturing",
          metric: "2,700 machines on connected services",
          image: "/images/capabilities/cap-battery-factory.jpg"
        }
      ]}
    />
  );
}
