//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function PrivateEquityIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Private Equity"
      slug="private-equity"
      heroSubtitle="We help private equity firms create operational value — across diligence, hold, and exit — with rigorous tech and data diligence, value-creation playbooks, and the digital execution muscle today's hold periods demand."
      heroImage="/images/industries/deal-handshake.jpg"
      perspectiveImage="/images/industries/advisor-charts.jpg"
      quoteImage="/images/industries/biz-meeting.jpg"
      heroFocal="55% 50%"
      povParagraphs={[
        "The private-equity playbook is evolving. Financial engineering alone no longer delivers the returns LPs expect. Today's top-performing funds are the ones that can identify operational improvement during diligence and execute transformational change in the hold — and prove it with data at exit.",
        "We partner with PE firms across the investment lifecycle. During diligence, we help identify value-creation opportunities and assess execution risk on tech, data, and operating models. Post-acquisition, we work alongside management teams to implement the digital, commercial, and operational programs that drive EBITDA and multiple expansion.",
        "Our approach combines deep operational expertise with digital capabilities that accelerate transformation. From revenue growth and cost optimization to digital transformation and organizational effectiveness, we bring the skills and pace needed to create value in complex, time-bound environments."
      ]}
      challenges={[
        {
          title: "Tech and data diligence",
          body: "Most diligence under-weights legacy tech, data debt, and AI-readiness — a rigorous tech lens can change valuation and the 100-day plan."
        },
        {
          title: "100-day execution",
          body: "Hold periods are compressing; pre-baked operating-model, commercial, and digital playbooks make value creation land in the first quarter."
        },
        {
          title: "Digital value creation",
          body: "Cloud, ERP, and data programs dominate value-creation plans — operating partners need delivery muscle, not just oversight."
        },
        {
          title: "Exit storytelling and proof",
          body: "Buyers increasingly diligence digital maturity; funds must instrument portfolio companies so the lift is provable, not narrated."
        }
      ]}
      capabilities={[
        {
          name: "Strategy & Growth",
          href: "/industries/private-equity/strategy-growth",
          blurb: "Commercial value-creation plans across pricing, segmentation, and go-to-market that lift growth in the hold."
        },
        {
          name: "Operations Excellence",
          href: "/industries/private-equity/operations-excellence",
          blurb: "Cost, working-capital, and operating-model improvement with delivery rigor tuned to hold-period economics."
        },
        {
          name: "Data Transformation",
          href: "/industries/private-equity/data-transformation",
          blurb: "The data foundations and AI use cases that lift EBITDA in the hold and survive diligence at exit."
        },
        {
          name: "Risk & Resilience",
          href: "/industries/private-equity/risk-resilience",
          blurb: "Diligence and remediate cyber, regulatory, and operational risk so deals close cleanly and exit value holds."
        }
      ]}
      experienceStats={[
        {number: "40%", label: "Average reduction in commercial diligence time"},
        {number: "100+", label: "Portfolio-company engagements delivered"},
        {number: "First 100 days", label: "Standard delivery cadence on PE value-creation programs"},
        {number: "Top 20", label: "PE firms served as repeat clients"}
      ]}
      povQuote={{
        text: "The funds that win the next cycle are the ones that treat tech and data diligence as part of underwriting — not as a check-the-box workstream that runs in parallel and never changes the deal.",
        author: "Private Equity Practice",
        role: "NexDyne Consulting Group"
      }}
      featuredCases={[
        {
          slug: "pe-industrial-transformation",
          title: "Adding $18M in EBITDA at an industrial manufacturer",
          industry: "Private Equity",
          metric: "$18M",
          image: "/images/industries/transport-traffic.jpg"
        },
        {
          slug: "pe-healthcare-diligence",
          title: "Cutting healthcare diligence time by 40%",
          industry: "Private Equity",
          metric: "40%",
          image: "/images/capabilities/cap-conference-data.jpg"
        },
        {
          slug: "pe-distribution-digital",
          title: "Standing up a carved-out distributor in six months",
          industry: "Private Equity",
          metric: "6 Months",
          image: "/images/industries/deal-handshake.jpg"
        }
      ]}
    />
  );
}
