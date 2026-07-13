// TODO: David — confirm Private Equity-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

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
        // TODO: confirm with practice lead before publish.
        {number: "$50B+", label: "In transaction value advised on diligence and value-creation"},
        {number: "100+", label: "Portfolio-company engagements delivered"},
        {number: "First 100 days", label: "Standard delivery cadence on PE value-creation programs"},
        {number: "Top 20", label: "PE firms served as repeat clients"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The funds that win the next cycle are the ones that treat tech and data diligence as part of underwriting — not as a check-the-box workstream that runs in parallel and never changes the deal.",
        author: "Stephen Becker",
        role: "Partner, Private Equity Practice"
      }}
      featuredCases={[
        {
          slug: "consulting-knowledge-management",
          title: "Transforming knowledge management for a global consulting firm",
          industry: "Professional Services",
          metric: "3x",
          image: "/images/industries/biz-meeting.jpg"
        },
        {
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+ hrs",
          image: "/images/industries/meeting-topview.jpg"
        },
        {
          slug: "wealth-management-automation",
          title: "Automating wealth management operations for better client experiences",
          industry: "Financial Services",
          metric: "45%",
          image: "/images/industries/fin-handshake-city.jpg"
        }
      ]}
    />
  );
}
