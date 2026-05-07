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
      heroImage="/hero-cityscape.b7c4f9e2.png"
      povParagraphs={[
        "The travel industry has emerged from unprecedented disruption with a renewed focus on resilience, efficiency, and customer experience. Travelers expect seamless digital journeys, personalized service, and flexible options. Companies that deliver on those expectations while protecting margin will own the next cycle of growth.",
        "We partner with travel and hospitality companies to build the digital capabilities the new environment requires. From AI-powered revenue management to contactless guest experiences, our work helps companies improve performance while creating the kind of memorable experiences that drive repeat demand.",
        "Beyond technology implementation, we help companies reimagine operating models. Labor optimization, supply-chain resilience, and sustainability initiatives all create new imperatives that require integrated solutions across the enterprise — not isolated investments that compete for budget."
      ]}
      challenges={[
        {
          title: "Revenue management precision",
          body: "Volatile demand, channel fragmentation, and competitive transparency mean static pricing leaves significant revenue on the table. Modern revenue management, dynamic pricing, and integrated channel strategy are now baseline."
        },
        {
          title: "Guest experience expectations",
          body: "Travelers expect end-to-end digital journeys, personalized service, and friction-free recovery when things go wrong. Modern guest-data platforms and journey-level orchestration are how leaders are converting expectation into loyalty."
        },
        {
          title: "Labor and operating productivity",
          body: "Frontline labor scarcity and rising cost are squeezing service operations. AI-assisted scheduling, intelligent automation of back-office work, and connected-worker tools are how leaders are protecting both service and margin."
        },
        {
          title: "Loyalty and direct relationships",
          body: "OTAs and aggregators capture the customer relationship by default. Modern loyalty programs and direct-channel investment are how brands rebuild ownership of the guest journey and the data behind it."
        }
      ]}
      capabilities={[
        {
          name: "Pricing & Revenue Management",
          href: "/capabilities/pricing-revenue",
          blurb: "Engineer the pricing, distribution, and channel decisions that protect RevPAR, RASM, and unit economics in a high-volatility environment."
        },
        {
          name: "Customer Intelligence",
          href: "/capabilities/customer-intelligence",
          blurb: "Build the guest-data foundation, journey analytics, and personalization that translate travel intent into loyalty and lifetime value."
        },
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Modernize property, network, and back-office operations with AI-powered automation that protects margin while improving the guest experience."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify reservation, loyalty, and operations data into a single fabric that powers modern AI use cases across the customer and operating model."
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
