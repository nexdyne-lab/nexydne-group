// TODO: David — confirm Public Sector-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function PublicSectorIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Public Sector"
      slug="public-sector"
      heroSubtitle="We help federal, state, and local government leaders deliver more capability with the resources they have — using digital service design, back-office automation, and data and AI capabilities tuned to the realities of public-sector procurement and accountability."
      heroImage="/case-study-government.03f0e049.png"
      povParagraphs={[
        "Government faces unprecedented pressure. Aging infrastructure, workforce constraints, and rising citizen expectations are forcing agencies to do more with less. At the same time, technology is creating real opportunity — to redesign service delivery, lift operational efficiency, and ground decision-making in better data.",
        "We partner with agencies at every level — federal, state, county, and city — to build the digital capabilities transformation requires. From citizen-facing digital services to back-office automation, our work helps agencies improve service while protecting the procurement, accessibility, and accountability obligations the public sector runs on.",
        "Beyond technology, we help agencies build the organizational capabilities required for sustained improvement. Change management, workforce development, and modern delivery practices ensure that transformation initiatives outlast leadership turnover and deliver lasting public value."
      ]}
      challenges={[
        {
          title: "Citizen experience expectations",
          body: "Citizens expect government services to feel like consumer apps — modern service design, identity, and content are now baseline."
        },
        {
          title: "Workforce and institutional knowledge",
          body: "Retirements and hiring constraints are eroding capacity; AI copilots and modern delivery are how agencies protect throughput."
        },
        {
          title: "Legacy systems and modernization risk",
          body: "Decades-old systems are costly and risky to replace — strangler-pattern modernization and modular procurement are the credible path."
        },
        {
          title: "Data, AI, and accountability",
          body: "Citizens and oversight bodies demand explainable decisions; public-sector AI needs governance and transparency built in from day one."
        }
      ]}
      capabilities={[
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Automate back-office work, modernize service delivery, and build the program-management muscle to execute at scale."
        },
        {
          name: "Customer Intelligence",
          href: "/capabilities/customer-intelligence",
          blurb: "Engineer citizen experiences with human-centered design, journey analytics, and accessibility built in, not bolted on."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify agency data into a governed platform for modern decisions, AI use cases, and credible public reporting."
        },
        {
          name: "Risk & Resilience",
          href: "/capabilities/risk-resilience",
          blurb: "The cyber, FedRAMP, and operational-resilience posture today's threats and oversight environment require."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "Federal, State, Local", label: "Engagements span all three levels of government"},
        {number: "60+", label: "Public-sector engagements delivered"},
        {number: "FedRAMP", label: "Cleared engagement experience across federal civilian and DoD"},
        {number: "12 mo", label: "Average public-sector engagement length"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The agencies that deliver real change are the ones that treat citizen experience and back-office discipline as the same problem — not as competing priorities owned by different deputies.",
        author: "Lauren Whitfield",
        role: "Partner, Public Sector Practice"
      }}
      featuredCases={[
        {
          slug: "consulting-knowledge-management",
          title: "Transforming knowledge management for a global consulting firm",
          industry: "Professional Services",
          metric: "3x",
          image: "/case-strategy-consulting.dfdd1294.jpg"
        },
        {
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+ hrs",
          image: "/case-banker-meeting.c53f3999.jpg"
        },
        {
          slug: "healthcare-data-analytics",
          title: "Unlocking healthcare insights with real-time data analytics",
          industry: "Healthcare",
          metric: "25%",
          image: "/case-healthcare-team.5797392b.jpg"
        }
      ]}
    />
  );
}
