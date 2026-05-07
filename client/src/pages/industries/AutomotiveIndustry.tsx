// TODO: David — confirm Automotive-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function AutomotiveIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Automotive"
      slug="automotive"
      heroSubtitle="We help OEMs, suppliers, and mobility platforms move with the CASE shift — software-defined vehicles, EV programs, smart factories, and new mobility services — without losing the operational discipline that defines the industry."
      heroImage="/case-study-manufacturing.8d72bf05.jpg"
      povParagraphs={[
        "Automotive is being reshaped by four converging forces — electrification, autonomy, connectivity, and shared mobility. The CASE trends are rewriting competitive dynamics, demanding new capabilities, and creating real openings for the OEMs and suppliers willing to invest ahead of the curve.",
        "We partner with automotive companies to build the digital capabilities the next decade rewards. From software-defined vehicle platforms and EV programs to smart factories and new mobility services, our work helps OEMs and suppliers innovate faster while protecting the operating discipline the industry runs on.",
        "Our teams bring deep automotive experience combined with cutting-edge technical capabilities. We understand the realities — complex tier-N supply chains, safety-critical systems, multi-year platform cycles — and we bring the skills needed to move programs from concept through SOP without losing schedule or quality."
      ]}
      challenges={[
        {
          title: "Software-defined vehicle build-out",
          body: "Vehicles are becoming software platforms — and most OEMs are not yet organized to ship software at the cadence customers and competitors expect. New release engineering, OTA infrastructure, and developer tooling are now core to the product."
        },
        {
          title: "EV program economics",
          body: "Battery cost, charging infrastructure, and uncertain demand are stressing EV program P&Ls. Engineering decisions, supplier strategy, and pricing must be tightened to make platforms viable across the next cycle."
        },
        {
          title: "Tiered supply-chain risk",
          body: "Semiconductor, battery-material, and rare-earth dependencies are exposing programs to single-point-of-failure risk. Multi-tier visibility and supplier qualification are no longer optional."
        },
        {
          title: "Plant and product-launch readiness",
          body: "Launch curves are unforgiving in automotive. Smart factories, predictive quality, and digital launch management are how leading OEMs are protecting ramp-up productivity and warranty cost."
        }
      ]}
      capabilities={[
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Modernize plant operations, launch management, and supplier-quality programs with predictive analytics and connected-worker tools."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify vehicle, manufacturing, and connected-services data into a single platform that supports software-defined product, predictive quality, and AI-driven engineering."
        },
        {
          name: "Strategy & Growth",
          href: "/capabilities/strategy-growth",
          blurb: "Identify and validate the connected-services, EV, and mobility plays that will define the next product cycle and the commercial model behind it."
        },
        {
          name: "Risk & Resilience",
          href: "/capabilities/risk-resilience",
          blurb: "Engineer multi-tier supply-chain visibility, cyber posture for connected vehicles, and the regulatory readiness automotive programs increasingly require."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "Top 10", label: "Global OEMs served on at least one program"},
        {number: "50+", label: "Automotive engagements delivered"},
        {number: "18 mo", label: "Average platform-program engagement length"},
        {number: "$1.8M", label: "Average annual savings per plant transformation"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The OEMs who win the next cycle are the ones who treat software like a product line — with its own roadmap, its own talent, and its own P&L — not as an accessory bolted onto a hardware program.",
        author: "Henrik Larsson",
        role: "Partner, Automotive Practice"
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
          slug: "fintech-payment-automation",
          title: "Building a scalable payment processing system for a fintech startup",
          industry: "Financial Services",
          metric: "100K+",
          image: "/case-financial-advisor.7bb94f0c.jpg"
        }
      ]}
    />
  );
}
