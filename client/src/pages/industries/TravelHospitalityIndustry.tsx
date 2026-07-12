// TODO: David — confirm Travel & Hospitality-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function TravelHospitalityIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Travel & Hospitality"
      slug="travel-hospitality"
      heroSubtitle="We help airlines, hotels, cruise lines, and OTAs run leaner, more personalized operations — using AI-powered revenue management, modern guest data, and digital service design that protects unit economics while lifting the experience travelers actually remember."
      heroImage="/images/industries/travel-city-twilight.jpg"
      perspectiveImage="/images/industries/city-night.jpg"
      quoteImage="/images/industries/colleagues-walking.jpg"
      heroFocal="55% 50%"
      povParagraphs={[
        "The travel industry has emerged from unprecedented disruption with a renewed focus on resilience, efficiency, and customer experience. Travelers expect seamless digital journeys, personalized service, and flexible options. Companies that deliver on those expectations while protecting margin will own the next cycle of growth.",
        "We partner with travel and hospitality companies to build the digital capabilities the new environment requires. From AI-powered revenue management to contactless guest experiences, our work helps companies improve performance while creating the kind of memorable experiences that drive repeat demand.",
        "Beyond technology implementation, we help companies reimagine operating models. Labor optimization, supply-chain resilience, and sustainability initiatives all create new imperatives that require integrated solutions across the enterprise — not isolated investments that compete for budget."
      ]}
      challenges={[
        {
          title: "Revenue management precision",
          body: "Volatile demand and price transparency mean static pricing leaves revenue on the table — modern revenue management is now baseline."
        },
        {
          title: "Guest experience expectations",
          body: "Travelers expect end-to-end digital journeys and friction-free recovery; guest-data platforms convert expectation into loyalty."
        },
        {
          title: "Labor and operating productivity",
          body: "Frontline labor scarcity is squeezing service operations; AI scheduling and back-office automation protect both service and margin."
        },
        {
          title: "Loyalty and direct relationships",
          body: "OTAs capture the customer by default — loyalty programs and direct-channel investment rebuild ownership of the guest journey."
        }
      ]}
      capabilities={[
        {
          name: "Pricing & Revenue Management",
          href: "/capabilities/pricing-revenue",
          blurb: "The pricing, distribution, and channel decisions that protect RevPAR and unit economics in a volatile market."
        },
        {
          name: "Customer Intelligence",
          href: "/capabilities/customer-intelligence",
          blurb: "The guest-data foundation, journey analytics, and personalization that turn travel intent into loyalty and lifetime value."
        },
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Modernize property, network, and back-office operations with AI automation that protects margin and improves the guest experience."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify reservation, loyalty, and operations data into one fabric for modern AI across the customer and operating model."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "Top 10", label: "Global hospitality brands served"},
        {number: "50+", label: "Travel and hospitality engagements delivered"},
        {number: "8%", label: "Average RevPAR uplift on optimized portfolios"},
        {number: "12 mo", label: "Average travel-and-hospitality engagement length"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "Travel brands that win the next decade are the ones who treat the guest data they already have as the most valuable asset on the balance sheet — and reinvest in it accordingly.",
        author: "Sofia Lindqvist",
        role: "Partner, Travel & Hospitality Practice"
      }}
      featuredCases={[
        {
          slug: "consulting-knowledge-management",
          title: "Transforming knowledge management for a global consulting firm",
          industry: "Professional Services",
          metric: "3x",
          image: "/images/industries/city-night.jpg"
        },
        {
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+ hrs",
          image: "/images/industries/transport-bridge.jpg"
        },
        {
          slug: "fintech-payment-automation",
          title: "Building a scalable payment processing system for a fintech startup",
          industry: "Financial Services",
          metric: "100K+",
          image: "/images/industries/arch-glass-sphere.jpg"
        }
      ]}
    />
  );
}
