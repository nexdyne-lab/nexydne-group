// TODO: David — confirm Transportation & Logistics-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function TransportationLogisticsIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Transportation & Logistics"
      slug="transportation-logistics"
      heroSubtitle="We help carriers, 3PLs, and shippers turn supply-chain volatility into advantage — using AI-powered visibility, route optimization, and modern operating models that deliver both service and margin in an industry historically forced to choose."
      heroImage="/process-orchestration-workflow.a6bc5b2e.jpg"
      povParagraphs={[
        "Global supply chains have never been more complex — or more vulnerable. The pandemic exposed fragilities that had been compounding for decades, and e-commerce has fundamentally rewritten customer expectations. Today's shippers demand real-time visibility, flexible delivery, and the data to plan around disruption rather than react to it.",
        "We partner with transportation and logistics companies to build the digital capabilities that environment requires. From AI-powered route optimization to real-time supply-chain visibility platforms, our work helps companies reduce cost, improve service, and build the resilience the next cycle of shocks is going to test.",
        "Beyond operational improvements, we help logistics companies create new sources of competitive advantage. Data monetization, value-added services, and platform-business models are creating real growth opportunities in an industry historically defined by thin margins and commodity service."
      ]}
      challenges={[
        {
          title: "Visibility and exception management",
          body: "Most shippers still can't see across modes and tiers in real time — AI visibility and predictive ETAs are now baseline expectations."
        },
        {
          title: "Driver and asset productivity",
          body: "Driver shortages and equipment cost are squeezing operating ratios; smart dispatching and route optimization protect productivity."
        },
        {
          title: "Last-mile economics",
          body: "E-commerce shifted volume to the most expensive part of the network — density routing and modern depots now decide unit economics."
        },
        {
          title: "Sustainability and fleet transition",
          body: "Customer scope-3 obligations and electrification timelines demand auditable emissions data and credible transition plans."
        }
      ]}
      capabilities={[
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Modernize network, dispatch, and warehouse operations with AI optimization and connected-worker tools."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify TMS, WMS, and partner data into a real-time visibility platform for modern AI across the network."
        },
        {
          name: "Customer Intelligence",
          href: "/capabilities/customer-intelligence",
          blurb: "Engineer shipper, broker, and end-customer experiences with the digital, self-service tools buyers now expect."
        },
        {
          name: "Strategy & Growth",
          href: "/capabilities/strategy-growth",
          blurb: "The value-added services, platform, and pricing strategies that turn operational excellence into commercial advantage."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "Top 10", label: "Global 3PLs served on at least one engagement"},
        {number: "60+", label: "Transportation and logistics engagements delivered"},
        {number: "18%", label: "Average reduction in cost-to-serve on optimized lanes"},
        {number: "12 mo", label: "Average T&L engagement length"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The carriers and 3PLs pulling ahead are the ones treating real-time data as the operating system of the network — not as a dashboard product the sales team uses to win the renewal.",
        author: "Carlos Mendez",
        role: "Partner, Transportation & Logistics Practice"
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
