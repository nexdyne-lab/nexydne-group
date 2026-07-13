// TODO: David — confirm Insurance-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

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
        // TODO: confirm with practice lead before publish.
        {number: "Top 10", label: "P&C and life carriers served"},
        {number: "70+", label: "Insurance engagements delivered"},
        {number: "85%", label: "Average claims-cycle-time reduction on automated lines"},
        {number: "$XX M", label: "Loss-adjustment-expense impact across portfolio"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The carriers leading the next cycle are the ones who treat underwriting and claims as software products — continuously improved, instrumented, and governed — not as tribal craft to be defended.",
        author: "Jonathan Pierce",
        role: "Partner, Insurance Practice"
      }}
      featuredCases={[
        {
          slug: "insurance-claims-processing",
          title: "Accelerating insurance claims processing with intelligent automation",
          industry: "Financial Services",
          metric: "85%",
          image: "/case-insurance-office.f039a4a1.jpg"
        },
        {
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+ hrs",
          image: "/images/industries/advisor-charts.jpg"
        },
        {
          slug: "fintech-payment-automation",
          title: "Building a scalable payment processing system for a fintech startup",
          industry: "Financial Services",
          metric: "100K+",
          image: "/images/industries/biz-team-bright.jpg"
        }
      ]}
    />
  );
}
