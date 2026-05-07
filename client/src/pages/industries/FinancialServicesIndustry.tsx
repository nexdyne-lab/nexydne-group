import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

// TODO: David — confirm Financial Services-specific Experience & Impact numbers with practice lead before publish.
//   The pre-refactor file shipped boilerplate "40+ / 78% / 4-6 Mo" stats that are not Financial Services-specific.
//   Placeholders below are plausible-but-unverified directional figures based on the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

export default function FinancialServicesIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Financial Services"
      slug="financial-services"
      heroSubtitle="We help banks, insurers, and fintech leaders prove how data, AI, and digital channels create value before they are scaled across the operating model — automating what is transactional and rewiring teams to meet customers' changing demands."
      heroImage="/case-banker-meeting.c53f3999.jpg"
      povParagraphs={[
        "We begin our financial services consulting by partnering with you to define, test, and prove how advanced data collection and analysis, AI, digital channels, and other enhancements will create value — before expanding or embedding these capabilities in your operating model. We automate what is transactional and create cross-functional teams to harness the ingenuity and innovation needed to meet customers' changing demands.",
        "The financial services landscape is undergoing unprecedented transformation. Traditional institutions face pressure from fintech disruptors, evolving customer expectations, and an increasingly complex regulatory environment. Success requires not just adopting new technologies, but fundamentally rethinking how value is created and delivered.",
        "Our approach combines deep industry expertise with cutting-edge technology capabilities. We help financial institutions navigate the complexities of digital transformation — from core system modernization to AI-powered risk management — while maintaining the security, compliance, and trust that define the industry."
      ]}
      challenges={[
        {
          title: "Pressure on the core",
          body: "Legacy core systems were not built for real-time payments, embedded finance, or cloud-scale resilience. Leaders need a clear ROI framework for modernization that funds itself, rather than a multi-year rip-and-replace."
        },
        {
          title: "Rising customer expectations",
          body: "Retail and commercial customers expect digital-first journeys, personalized advice, and instant resolution. Meeting that bar at scale requires unified customer data, AI-assisted decisioning, and tighter feedback loops between product, marketing, and operations."
        },
        {
          title: "Regulatory and risk complexity",
          body: "Capital, conduct, AML, and AI-governance requirements are tightening simultaneously. Institutions need automated controls, model-risk management, and the data lineage to prove compliance without slowing the business down."
        },
        {
          title: "Competing for talent and tech",
          body: "Banks and insurers are competing for the same engineers, data scientists, and product talent as fintechs and big tech. Winning requires modern delivery models, partner ecosystems, and a clear story about the work itself."
        }
      ]}
      capabilities={[
        {
          name: "Customer & Growth Strategy",
          href: "/capabilities/strategy-growth",
          blurb: "From retail banking to wealth management, we map what is driving customer choice in each category so you can build advantaged positions — Demand-Centric Growth, segment redesign, and product investment guidance."
        },
        {
          name: "Digital & Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "We help banks and insurers integrate digital tools, collaborate with fintech partners, and blend new talent with current staff to drive measurable results across channels — including AI-powered personalization at scale."
        },
        {
          name: "Risk, Compliance & Resilience",
          href: "/capabilities/risk-resilience",
          blurb: "We rewire risk and compliance with automated controls, model-risk frameworks, and resilient operating models — so the business can move faster without expanding regulatory exposure."
        },
        {
          name: "Pricing & Revenue Management",
          href: "/capabilities/pricing-revenue",
          blurb: "Pricing optimizations drive significant impact for financial institutions. We help fund margin improvement through product portfolio pricing, fee-structure management, and dynamic pricing tuned to customer demand and competitive pressure."
        }
      ]}
      experienceStats={[
        // TODO: David — replace with verified Financial Services-specific numbers before publish.
        { number: "12 mo", label: "Average engagement length with FS clients" },
        { number: "$XX B", label: "In client transaction value processed" },
        { number: "8 of 10", label: "Top US banks served on at least one engagement" },
        { number: "40+", label: "FS digital-transformation programs delivered" }
      ]}
      povQuote={{
        // TODO: David — confirm practice-lead name + title before publish.
        text: "The institutions that will win the next decade are not the ones with the biggest tech budgets — they are the ones that can prove value on a single product or journey, then scale that proof across the operating model without breaking trust.",
        author: "Sarah Chen",
        role: "Partner, Financial Services Practice"
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
          slug: "wealth-management-automation",
          title: "Automating wealth management operations for better client experiences",
          industry: "Financial Services",
          metric: "45%",
          image: "/case-advisor-client.eb15e04e.jpg"
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
