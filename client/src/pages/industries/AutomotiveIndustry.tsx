//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function AutomotiveIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Automotive"
      slug="automotive"
      heroSubtitle="We help OEMs, suppliers, and mobility platforms move with the CASE shift — software-defined vehicles, EV programs, smart factories, and new mobility services — without losing the operational discipline that defines the industry."
      heroImage="/images/industries/auto-robotics-team.jpg"
      perspectiveImage="/images/industries/mfg-robotics-tablet.jpg"
      quoteImage="/images/industries/mfg-robot-arm.jpg"
      heroFocal="60% 45%"
      povParagraphs={[
        "Automotive is being reshaped by four converging forces — electrification, autonomy, connectivity, and shared mobility. The CASE trends are rewriting competitive dynamics, demanding new capabilities, and creating real openings for the OEMs and suppliers willing to invest ahead of the curve.",
        "We partner with automotive companies to build the digital capabilities the next decade rewards. From software-defined vehicle platforms and EV programs to smart factories and new mobility services, our work helps OEMs and suppliers innovate faster while protecting the operating discipline the industry runs on.",
        "Our teams bring deep automotive experience combined with cutting-edge technical capabilities. We understand the realities — complex tier-N supply chains, safety-critical systems, multi-year platform cycles — and we bring the skills needed to move programs from concept through SOP without losing schedule or quality."
      ]}
      challenges={[
        {
          title: "Software-defined vehicle build-out",
          body: "Vehicles are becoming software platforms, and most OEMs aren't yet organized to ship software at the cadence customers expect."
        },
        {
          title: "EV program economics",
          body: "Battery cost, charging, and uncertain demand are stressing EV P&Ls — engineering, supplier, and pricing decisions must tighten."
        },
        {
          title: "Tiered supply-chain risk",
          body: "Semiconductor, battery-material, and rare-earth dependencies expose programs to single-point-of-failure risk."
        },
        {
          title: "Plant and product-launch readiness",
          body: "Launch curves are unforgiving; smart factories, predictive quality, and digital launch management protect ramp productivity."
        }
      ]}
      capabilities={[
        {
          name: "Operations Excellence",
          href: "/industries/automotive/operations-excellence",
          blurb: "Modernize plant operations, launch management, and supplier quality with predictive analytics and connected-worker tools."
        },
        {
          name: "Data Transformation",
          href: "/industries/automotive/data-transformation",
          blurb: "Unify vehicle, manufacturing, and connected-services data into one platform for software-defined product and AI engineering."
        },
        {
          name: "Strategy & Growth",
          href: "/industries/automotive/strategy-growth",
          blurb: "Validate the connected-services, EV, and mobility plays that will define the next product cycle and its commercial model."
        },
        {
          name: "Risk & Resilience",
          href: "/industries/automotive/risk-resilience",
          blurb: "Multi-tier supply-chain visibility, connected-vehicle cyber posture, and the regulatory readiness programs increasingly require."
        }
      ]}
      experienceStats={[
        {number: "Top 10", label: "Global OEMs served on at least one program"},
        {number: "50+", label: "Automotive engagements delivered"},
        {number: "18 mo", label: "Average platform-program engagement length"},
        {number: "40%", label: "Average reduction in launch defects on retooled lines"}
      ]}
      povQuote={{
        text: "The OEMs who win the next cycle are the ones who treat software like a product line — with its own roadmap, its own talent, and its own P&L — not as an accessory bolted onto a hardware program.",
        author: "Automotive Practice",
        role: "NexDyne Consulting Group"
      }}
      featuredCases={[
        {
          slug: "automotive-ev-transition",
          title: "Retooling a supplier line for electric-vehicle parts",
          industry: "Automotive",
          metric: "45%",
          image: "/images/cases/automotive-ev-transition-hero.jpg"
        },
        {
          slug: "automotive-connected-vehicle",
          title: "Turning connected-vehicle data into fewer warranty claims",
          industry: "Automotive",
          metric: "30%",
          image: "/images/cases/automotive-connected-vehicle-hero.jpg"
        },
        {
          slug: "automotive-supply-resilience",
          title: "De-risking parts supply and recall traceability for a supplier",
          industry: "Automotive",
          metric: "80%",
          image: "/images/cases/automotive-supply-resilience-hero.jpg"
        }
      ]}
    />
  );
}
