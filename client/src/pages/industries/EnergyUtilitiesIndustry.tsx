// TODO: David — confirm Energy & Utilities-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function EnergyUtilitiesIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Energy & Utilities"
      slug="energy-utilities"
      heroSubtitle="We help utilities, oil-and-gas operators, and renewables developers run the energy transition as a transformation program — using AI-powered asset performance, smart grid technologies, and operating discipline tuned to the realities of a regulated capital-heavy industry."
      heroImage="/hero-cityscape.b7c4f9e2.png"
      povParagraphs={[
        "The energy transition is accelerating. Renewables economics have improved sharply, electric vehicles are driving load growth, and customers are demanding cleaner, more reliable power. At the same time, aging infrastructure, regulatory pressure, and cyber threats are creating execution risk that legacy operating models were not designed to absorb.",
        "We partner with energy companies and utilities to build the digital capabilities the transition requires. From smart grid technology that orchestrates distributed energy resources to AI-powered asset management that extends equipment life, our work helps organizations modernize while respecting the safety, reliability, and regulatory obligations the business runs on.",
        "Beyond operations, we help energy companies reimagine the commercial model. New revenue streams from energy services, customer-engagement platforms that drive loyalty, and data-monetization plays are creating real growth opportunities for organizations willing to operate at the intersection of physical and digital."
      ]}
      challenges={[
        {
          title: "Aging asset base",
          body: "Most utilities are operating on infrastructure built decades ago — and capital plans cannot replace it all. AI-powered asset performance management, predictive maintenance, and risk-based capital allocation are how leading operators stretch each capital dollar further."
        },
        {
          title: "DER and grid orchestration",
          body: "Rooftop solar, batteries, EV charging, and demand response are making the distribution edge an active system. Grid orchestration, ADMS, and DERMS investments are now non-negotiable for credible transition planning."
        },
        {
          title: "Cyber and OT resilience",
          body: "Ransomware and nation-state threats against energy infrastructure are escalating. NERC-CIP, IEC 62443, and a converged IT/OT cyber program are baseline expectations from regulators and boards."
        },
        {
          title: "Customer expectations and rate cases",
          body: "Customers expect digital-first experiences from their utility. Regulators expect demonstrable outcomes from rate-case investments. Modern customer platforms and credible data are now the bridge between the two."
        }
      ]}
      capabilities={[
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Modernize asset performance, work management, and field operations with AI-powered analytics and connected-worker tools tuned for utility realities."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify OT, asset, and customer data into a single platform that supports DERMS, predictive maintenance, and AI-driven planning across the network."
        },
        {
          name: "Risk & Resilience",
          href: "/capabilities/risk-resilience",
          blurb: "Stand up the cyber, NERC-CIP, and operational-resilience posture regulators and customers increasingly demand of critical-infrastructure operators."
        },
        {
          name: "Customer Intelligence",
          href: "/capabilities/customer-intelligence",
          blurb: "Engineer the customer experience — from billing to outage to programs — with the personalization and digital tools modern utility customers expect."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "Top 20", label: "US utilities served on at least one engagement"},
        {number: "50+", label: "Energy and utilities engagements delivered"},
        {number: "$2.1M", label: "Average annual savings per asset-performance program"},
        {number: "18 mo", label: "Average energy engagement length"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "Utilities that lead the transition are the ones that treat data and operating discipline as a single system — not as a digital roadmap that competes with the rate case.",
        author: "Aisha Thompson",
        role: "Partner, Energy & Utilities Practice"
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
