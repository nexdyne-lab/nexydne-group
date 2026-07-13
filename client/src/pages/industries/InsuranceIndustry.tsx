//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function InsuranceIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Insurance"
      slug="insurance"
      heroSubtitle="We help carriers, brokers, and reinsurers build the digital capabilities the next decade demands — AI-powered underwriting, automated claims, embedded distribution, and the data infrastructure to make all of it auditable and explainable."
      heroImage="/images/industries/fin-handshake-city.jpg"
      perspectiveImage="/images/industries/advisor-charts.jpg"
      quoteImage="/images/industries/fin-monitors.jpg"
      heroFocal="55% 50%"
      povParagraphs={[
        "Insurance has always been about managing risk — but the risks themselves are changing. Climate is reshaping property and casualty exposures. Cyber is creating new categories of loss. And customers expect the same seamless digital experiences they get from their tech-company peers. The carriers that thrive will be those that turn that pressure into opportunity.",
        "We partner with insurers to build the digital capabilities that enable transformation. From AI-powered underwriting that improves risk selection to claims automation that compresses cost and cycle time, our solutions help carriers improve combined ratios while delivering the experiences customers and brokers now expect.",
        "Beyond operational improvements, we help insurers reimagine their business models. Usage-based products, embedded insurance, and ecosystem partnerships are creating new growth opportunities for carriers willing to innovate — and we help leaders prove the economics before scaling."
      ]}
      challenges={[
        {
          title: "Underwriting precision",
          body: "Volatile loss patterns and richer data are rewriting underwriting; AI risk selection and modern actuarial tooling are now table stakes."
        },
        {
          title: "Claims cost and experience",
          body: "Customers want claims paid faster while carriers manage leakage — intelligent claims automation and fraud analytics do both."
        },
        {
          title: "Distribution shifts",
          body: "Embedded insurance and direct channels are reshaping where premium is written; carriers need a clear channel strategy."
        },
        {
          title: "Model and data governance",
          body: "Regulatory scrutiny on AI decisions means model-risk management and explainability must be built in, not retrofitted."
        }
      ]}
      capabilities={[
        {
          name: "Risk & Resilience",
          href: "/industries/insurance/risk-resilience",
          blurb: "The model-risk, regulatory, and operational-resilience programs regulators and reinsurers expect of credible carriers."
        },
        {
          name: "Data Transformation",
          href: "/industries/insurance/data-transformation",
          blurb: "Unify policy, claims, and third-party data into one fabric for AI-driven underwriting, claims, and pricing."
        },
        {
          name: "Operations Excellence",
          href: "/industries/insurance/operations-excellence",
          blurb: "Automate underwriting, claims, and policy operations to lower expense ratio and improve the broker experience."
        },
        {
          name: "Customer Intelligence",
          href: "/industries/insurance/customer-intelligence",
          blurb: "Engineer broker, distribution, and customer experiences with the digital tools modern insurance buyers expect."
        }
      ]}
      experienceStats={[
        {number: "Top 10", label: "P&C and life carriers served"},
        {number: "70+", label: "Insurance engagements delivered"},
        {number: "85%", label: "Average claims-cycle-time reduction on automated lines"},
        {number: "60%", label: "Average straight-through processing on automated claims"}
      ]}
      povQuote={{
        text: "The carriers leading the next cycle are the ones who treat underwriting and claims as software products — continuously improved, instrumented, and governed — not as tribal craft to be defended.",
        author: "Insurance Practice",
        role: "NexDyne Consulting Group"
      }}
      featuredCases={[
        {
          slug: "insurance-ai-underwriting",
          title: "Quoting Commercial Business in a Day, Not a Week",
          industry: "Insurance",
          metric: "40%",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          slug: "insurance-claims-automation",
          title: "Settling Straightforward Claims in Hours, Not Weeks",
          industry: "Insurance",
          metric: "60%",
          image: "/case-insurance-claims.399e5d4b.jpg"
        },
        {
          slug: "insurance-digital-distribution",
          title: "Turning a Call-Center Insurer Into a Digital One",
          industry: "Insurance",
          metric: "50%",
          image: "/images/industries/fin-handshake-city.jpg"
        }
      ]}
    />
  );
}
