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
      heroImage="/images/industries/fin-trader.jpg"
      perspectiveImage="/images/industries/fin-monitors.jpg"
      quoteImage="/images/industries/advisor-charts.jpg"
      heroFocal="62% 45%"
      povParagraphs={[
        "We begin our financial services consulting by partnering with you to define, test, and prove how advanced data collection and analysis, AI, digital channels, and other enhancements will create value — before expanding or embedding these capabilities in your operating model. We automate what is transactional and create cross-functional teams to harness the ingenuity and innovation needed to meet customers' changing demands.",
        "The financial services landscape is undergoing unprecedented transformation. Traditional institutions face pressure from fintech disruptors, evolving customer expectations, and an increasingly complex regulatory environment. Success requires not just adopting new technologies, but fundamentally rethinking how value is created and delivered.",
        "Our approach combines deep industry expertise with cutting-edge technology capabilities. We help financial institutions navigate the complexities of digital transformation — from core system modernization to AI-powered risk management — while maintaining the security, compliance, and trust that define the industry."
      ]}
      challenges={[
        {
          title: "Pressure on the core",
          body: "Legacy cores weren't built for real-time payments or cloud-scale resilience — leaders need modernization that funds itself, not a multi-year rip-and-replace."
        },
        {
          title: "Rising customer expectations",
          body: "Customers expect digital-first journeys and instant resolution; meeting that bar at scale needs unified data and AI-assisted decisioning."
        },
        {
          title: "Regulatory and risk complexity",
          body: "Capital, conduct, AML, and AI-governance rules are tightening at once — automated controls and model-risk management are now essential."
        },
        {
          title: "Competing for talent and tech",
          body: "Banks and insurers compete with fintechs for the same talent; winning needs modern delivery and a clear story about the work itself."
        }
      ]}
      capabilities={[
        {
          name: "Customer & Growth Strategy",
          href: "/capabilities/strategy-growth",
          blurb: "Map what drives customer choice in each category so you can build advantaged, demand-centric growth positions."
        },
        {
          name: "Digital & Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Integrate digital tools, fintech partners, and new talent to drive measurable results — including AI personalization at scale."
        },
        {
          name: "Risk, Compliance & Resilience",
          href: "/capabilities/risk-resilience",
          blurb: "Rewire risk and compliance with automated controls and model-risk frameworks so the business can move faster."
        },
        {
          name: "Pricing & Revenue Management",
          href: "/capabilities/pricing-revenue",
          blurb: "Fund margin improvement through portfolio, fee-structure, and dynamic pricing tuned to demand and competition."
        }
      ]}
      experienceStats={[
        // TODO: David — replace with verified Financial Services-specific numbers before publish.
        { number: "12 mo", label: "Average engagement length with FS clients" },
        { number: "2B+", label: "Annual transactions processed on platforms we've built" },
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
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          slug: "wealth-management-automation",
          title: "Automating wealth management operations for better client experiences",
          industry: "Financial Services",
          metric: "45%",
          image: "/images/industries/fin-handshake-city.jpg"
        },
        {
          slug: "fintech-payment-automation",
          title: "Building a scalable payment processing system for a fintech startup",
          industry: "Financial Services",
          metric: "100K+",
          image: "/images/industries/advisor-charts.jpg"
        }
      ]}
    />
  );
}
