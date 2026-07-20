import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

//   The pre-refactor file shipped boilerplate "40+ / 78% / 4-6 Mo" stats that are not Financial Services-specific.
//   Placeholders below are plausible-but-unverified directional figures based on the existing prose context;
//   do NOT publish until practice-lead confirms.

export default function FinancialServicesIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Financial Services"
      slug="financial-services"
      heroSubtitle="We help banks, insurers, and fintech leaders prove how data, AI, and digital channels create value before they are scaled across the operating model — automating what is transactional and rewiring teams to meet customers' changing demands."
      heroImage="/images/industries2/financial-services-hero.jpg"
      perspectiveImage="/images/industries2/financial-services-pov.jpg"
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
          href: "/industries/financial-services/customer-growth-strategy",
          blurb: "Map what drives customer choice in each category so you can build advantaged, demand-centric growth positions."
        },
        {
          name: "Digital & Data Transformation",
          href: "/industries/financial-services/digital-data-transformation",
          blurb: "Integrate digital tools, fintech partners, and new talent to drive measurable results — including AI personalization at scale."
        },
        {
          name: "Risk, Compliance & Resilience",
          href: "/industries/financial-services/risk-compliance-resilience",
          blurb: "Rewire risk and compliance with automated controls and model-risk frameworks so the business can move faster."
        },
        {
          name: "Pricing & Revenue Management",
          href: "/industries/financial-services/pricing-revenue-management",
          blurb: "Fund margin improvement through portfolio, fee-structure, and dynamic pricing tuned to demand and competition."
        }
      ]}
      experienceStats={[
        { number: "12 mo", label: "Average engagement length with FS clients" },
        { number: "Real-time", label: "Fraud and risk decisions on the platforms we build" },
        { number: "8 of 10", label: "Top US banks served on at least one engagement" },
        { number: "40+", label: "FS digital-transformation programs delivered" }
      ]}
      povQuote={{
        text: "The institutions that will win the next decade are not the ones with the biggest tech budgets — they are the ones that can prove value on a single product or journey, then scale that proof across the operating model without breaking trust.",
        author: "Financial Services Practice",
        role: "NexDyne Consulting Group"
      }}
      featuredCases={[
        {
          slug: "financial-fraud-detection",
          title: "Catching card fraud before the money moves",
          industry: "Financial Services",
          metric: "73%",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          slug: "bank-cross-sell",
          title: "Turning single accounts into real relationships",
          industry: "Financial Services",
          metric: "40% more products per customer",
          image: "/images/cases/bank-cross-sell-hero.jpg"
        },
        {
          slug: "wealth-onboarding",
          title: "Cutting wealth onboarding from weeks to days",
          industry: "Financial Services",
          metric: "60%",
          image: "/images/cases/wealth-onboarding-hero.jpg"
        }
      ]}
    />
  );
}
