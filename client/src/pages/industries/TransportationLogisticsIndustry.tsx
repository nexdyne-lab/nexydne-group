//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function TransportationLogisticsIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Transportation & Logistics"
      slug="transportation-logistics"
      heroSubtitle="We help carriers, 3PLs, and shippers turn supply-chain volatility into advantage — using AI-powered visibility, route optimization, and modern operating models that deliver both service and margin in an industry historically forced to choose."
      heroImage="/images/industries/transport-traffic.jpg"
      perspectiveImage="/images/industries/transport-bridge.jpg"
      quoteImage="/images/industries/ops-monitors-dark.jpg"
      heroFocal="55% 45%"
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
          href: "/industries/transportation-logistics/operations-excellence",
          blurb: "Modernize network, dispatch, and warehouse operations with AI optimization and connected-worker tools."
        },
        {
          name: "Data Transformation",
          href: "/industries/transportation-logistics/data-transformation",
          blurb: "Unify TMS, WMS, and partner data into a real-time visibility platform for modern AI across the network."
        },
        {
          name: "Customer Intelligence",
          href: "/industries/transportation-logistics/customer-intelligence",
          blurb: "Engineer shipper, broker, and end-customer experiences with the digital, self-service tools buyers now expect."
        },
        {
          name: "Strategy & Growth",
          href: "/industries/transportation-logistics/strategy-growth",
          blurb: "The value-added services, platform, and pricing strategies that turn operational excellence into commercial advantage."
        }
      ]}
      experienceStats={[
        {number: "Top 10", label: "Global 3PLs served on at least one engagement"},
        {number: "60+", label: "Transportation and logistics engagements delivered"},
        {number: "18%", label: "Average reduction in cost-to-serve on optimized lanes"},
        {number: "12 mo", label: "Average T&L engagement length"}
      ]}
      povQuote={{
        text: "The carriers and 3PLs pulling ahead are the ones treating real-time data as the operating system of the network — not as a dashboard product the sales team uses to win the renewal.",
        author: "Transportation & Logistics Practice",
        role: "NexDyne Consulting Group"
      }}
      featuredCases={[
        {
          slug: "warehouse-optimization",
          title: "Lifting warehouse productivity 45% for a regional distributor",
          industry: "Transportation & Logistics",
          metric: "45%",
          image: "/images/cases/warehouse-optimization-hero.jpg"
        },
        {
          slug: "freight-optimization",
          title: "Cutting freight costs 18% for a consumer-goods shipper",
          industry: "Transportation & Logistics",
          metric: "18%",
          image: "/images/industries/transport-traffic.jpg"
        },
        {
          slug: "last-mile-optimization",
          title: "Cutting last-mile delivery costs 30% for a regional carrier",
          industry: "Transportation & Logistics",
          metric: "30%",
          image: "/images/industries/transport-bridge.jpg"
        }
      ]}
    />
  );
}
