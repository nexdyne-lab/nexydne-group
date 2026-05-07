// TODO: David — confirm Urban Development-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function UrbanDevelopmentIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Urban Development"
      slug="urban-development"
      heroSubtitle="We help cities, developers, and infrastructure providers build more livable communities — pairing smart-city platforms, sustainable design, and modern citizen engagement with the operating discipline urban transformation actually requires."
      heroImage="/cityscape-hero.2b50986e.png"
      povParagraphs={[
        "By 2050, nearly 70% of the world's population will live in cities. That urban transformation creates both challenges and opportunity. Cities that harness technology, data, and innovative governance will create thriving communities. Those that cannot will struggle with congestion, affordability, and resilience — and the gap is going to compound.",
        "We partner with cities, developers, and infrastructure providers to build the capabilities urban transformation requires. From smart-city platforms and digital infrastructure to sustainable development and citizen engagement, our solutions help create communities where people want to live, work, and invest over the long term.",
        "Our approach integrates technology with urban planning, governance, and community engagement. We understand that successful urban development is more than technology — it requires a holistic vision that balances economic development, environmental sustainability, and social equity, and the operating discipline to follow through across multi-decade timelines."
      ]}
      challenges={[
        {
          title: "Smart-city platforms vs. point solutions",
          body: "Most cities have a portfolio of well-intended pilots that never connect. A platform approach to mobility, environmental, and citizen-service data is how leaders escape pilot-and-vendor lock-in."
        },
        {
          title: "Mobility and the curb",
          body: "Ride-share, delivery, micro-mobility, and EVs have made the curb the most contested asset in the city. Data-driven curb management, dynamic pricing, and modern permit systems are now decisive."
        },
        {
          title: "Sustainability and resilience",
          body: "Climate adaptation and net-zero commitments require operating data, not just plans. Auditable emissions, asset-resilience analytics, and credible scenario planning are how cities close the say-do gap."
        },
        {
          title: "Affordability and citizen trust",
          body: "Cost of living, housing supply, and trust in institutions are eroding in many urban markets at the same time. Transparent service delivery and modern citizen-engagement tools are how leaders rebuild the social contract."
        }
      ]}
      capabilities={[
        {
          name: "Strategy & Growth",
          href: "/capabilities/strategy-growth",
          blurb: "Develop the long-horizon urban strategies — economic, mobility, housing — that align infrastructure investment with community outcomes."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify city, developer, and infrastructure data into a governed platform that powers modern AI use cases across the urban operating model."
        },
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Modernize permitting, asset management, and constituent services with intelligent automation tuned to the realities of public-sector procurement."
        },
        {
          name: "Risk & Resilience",
          href: "/capabilities/risk-resilience",
          blurb: "Stand up the cyber, climate-resilience, and operational-continuity programs cities and infrastructure operators increasingly need."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "30+", label: "City and infrastructure engagements delivered"},
        {number: "Global", label: "Practice spans North America, Europe, and Asia-Pacific"},
        {number: "$8B+", label: "In urban capital programs supported"},
        {number: "Multi-year", label: "Typical horizon for urban transformation engagements"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The cities that pull ahead in this cycle are the ones that treat data as urban infrastructure — funded, operated, and governed like roads and water — not as a vendor pilot that ends with the next budget.",
        author: "Mei Chen",
        role: "Partner, Urban Development Practice"
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
          slug: "healthcare-data-analytics",
          title: "Unlocking healthcare insights with real-time data analytics",
          industry: "Healthcare",
          metric: "25%",
          image: "/case-healthcare-team.5797392b.jpg"
        },
        {
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+ hrs",
          image: "/case-banker-meeting.c53f3999.jpg"
        }
      ]}
    />
  );
}
