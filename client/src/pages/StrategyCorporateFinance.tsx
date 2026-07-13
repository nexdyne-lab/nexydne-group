import MarketingMasterTemplate from "@/components/MarketingMasterTemplate";

export default function StrategyCorporateFinance() {
  return (
    <MarketingMasterTemplate
      capabilityName="Strategy & Corporate Finance"
      capabilitySlug="strategy-corporate-finance"
      // PRESERVED VERBATIM from source hero subtitle
      heroSubtitle="Align financial resources with strategic vision to unlock sustainable growth. We provide the financial leadership that ambitious SMEs need to compete and win."
      heroImage="/images/industries/fin-monitors.jpg"
      // PRESERVED CTA labels from source (Schedule a Consultation + View Case Studies)
      heroPrimaryCTA={{
        label: "Schedule a Consultation",
        href: "/contact",
      }}
      heroSecondaryCTA={{
        label: "View Case Studies",
        href: "/cases?capability=strategy-corporate-finance",
      }}
      // PRESERVED 3 source stats verbatim ($2B+ / 200+ / 40%); 4th is AUTHORED with TODO marker
      experienceStats={[
        {
          number: "$2B+",
          label:
            "capital raised for clients across equity, debt, and hybrid instruments",
        },
        {
          number: "200+",
          label:
            "strategic engagements completed for growing organizations competing with larger rivals",
        },
        {
          number: "40%",
          label:
            "average valuation uplift achieved through our strategic interventions",
        },
        // TODO: confirm with practice lead before publish
        {
          number: "12+",
          label:
            "M&A and Series-stage transactions advised on across the past 24 months",
        },
      ]}
      // AUTHORED — featured uses source insight #1 title + AUTHORED summary; secondary uses source insights #2, #3
      // TODO: confirm with practice lead before publish (featured summary + image paths)
      thoughtLeadership={{
        featured: {
          tag: "Strategy",
          title:
            "The CFO's Guide to Strategic Growth in Uncertain Markets",
          summary:
            // TODO: confirm with practice lead before publish
            "Financial leadership has shifted from reactive number-management to building proactive strategic finance functions that turn capital into competitive advantage. We outline how top-performing CFOs are balancing risk management with growth ambition — combining real-time visibility, predictive decision-making, and capital optimization to compete and win in an era of economic uncertainty.",
          image: "/images/insight-cfo-strategic-growth.jpg",
          href: "/insights/cfo-strategic-growth",
        },
        secondary: [
          {
            tag: "Capital Markets",
            title:
              "Preparing for Your Series B: Lessons from 50+ Funding Rounds",
            href: "/insights/series-b-lessons",
          },
          {
            tag: "Performance",
            title:
              "Working Capital Optimization: Quick Wins for Cash Flow",
            href: "/insights/working-capital-optimization",
          },
        ],
      }}
      // PRESERVED 3 approach pillars verbatim from source ("Diagnose / Design / Deploy")
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the position",
          body: "We conduct deep-dive analysis of your financial position, market dynamics, and strategic objectives to understand where you are and where you need to go. We map value streams, identify bottlenecks, and benchmark against best-in-class performers.",
        },
        {
          step: "02",
          title: "Design the architecture",
          body: "We develop a target operating model that balances efficiency, control, and agility. We prioritize initiatives by impact and feasibility, creating a clear roadmap that aligns financial resources with business goals.",
        },
        {
          step: "03",
          title: "Deploy and iterate",
          body: "We implement changes in agile sprints, measuring impact at each stage and iterating based on real-world results. We build internal capabilities and governance structures to sustain improvement over time.",
        },
      ]}
      // 6 ambitions mapped to 6 of the 8 level-2 hubs (locked spec).
      // Titles use the spec-suggested phrasing; descriptions DISTILLED from each hub's source description.
      // TODO: confirm with practice lead before publish (ambition descriptions)
      ambitions={[
        {
          title: "Build a winning growth strategy",
          description:
            "Define your path to victory. Clarify your vision, identify growth engines, and restructure for scalability with strategies grounded in financial reality — not slideware.",
          href: "/capabilities/strategy-corporate-finance/business-strategy",
        },
        {
          title: "Get strategic CFO firepower",
          description:
            "Access high-level financial leadership without the full-time cost. Strategic financial planning, cash flow management, and board-level reporting tailored for growing SMEs.",
          href: "/capabilities/strategy-corporate-finance/cfo-services",
        },
        {
          title: "Forecast and plan with confidence",
          description:
            "Turn data into decisions. Robust budgeting, forecasting, and variance analysis processes that give you clear visibility into performance and future scenarios.",
          href: "/capabilities/strategy-corporate-finance/fpa",
        },
        {
          title: "Raise capital that scales",
          description:
            "Prepare for your next funding round with confidence. Valuation, pitch deck creation, financial modeling, and due diligence preparation that positions you for success.",
          href: "/capabilities/strategy-corporate-finance/capital-raising",
        },
        {
          title: "Execute M&A that creates value",
          description:
            "Navigate complex transactions with expert guidance. From target identification and valuation to negotiation and post-merger integration — without the value leakage.",
          href: "/capabilities/strategy-corporate-finance/mergers-acquisitions",
        },
        {
          title: "Embed AI in every finance workflow",
          description:
            "Harness artificial intelligence to transform your finance function. Automated reporting, predictive cash flow modeling, and AI-assisted budgeting that delivers enterprise-grade insights for growing companies.",
          href: "/capabilities/strategy-corporate-finance/ai-powered-finance",
        },
      ]}
      // PRESERVED in-practice intro (distilled from source 4-paragraph thought-leadership block)
      // realOutcomes / howWeHelp DISTILLED from source case studies + approach copy
      // TODO: confirm with practice lead before publish (image path + realOutcomes / howWeHelp framing)
      inPractice={{
        image:
          "/images/industries/fin-trader.jpg",
        intro:
          "In today's complex business environment, financial leadership is not just about managing numbers — it is about aligning resources with strategic vision to unlock sustainable growth. The most successful organizations have moved beyond reactive financial management to build proactive strategic finance functions that operate with the precision of a well-tuned engine, combining real-time visibility, predictive decision-making, and capital optimization. We don't just implement tools; we refactor the entire financial operating model — from capital structure to performance management — so finance becomes a competitive weapon, not a cost center.",
        realOutcomes: [
          "Logistics tech company secured Series B at a valuation 40% above target through rigorous financial modeling and investor positioning",
          "Regional manufacturing merger captured $12M in synergies within 18 months via integrated cost optimization and operational alignment",
          "Growing companies consistently achieve 40% average valuation uplift through our strategic finance interventions",
          "Over $2B raised for clients across equity, debt, and hybrid instruments over the past decade",
        ],
        howWeHelp: [
          "Map the financial position, market dynamics, and strategic objectives before committing capital — and benchmark against best-in-class performers",
          "Design a target operating model that balances efficiency, control, and agility across capital structure, planning, and performance",
          "Deploy in agile sprints with measurable impact at every stage rather than a single big-bang transformation",
          "Build internal finance capability and governance structures so the improvement sustains long after we leave",
        ],
      }}
      // PRESERVED all 8 service cards verbatim from source `capabilities[]` array (titles + descriptions)
      // Hrefs match the locked /capabilities/strategy-corporate-finance/<hub> nesting (post Phase 2 MAPartnerships promotion)
      howWeCanHelp={[
        {
          title: "Business Strategy & Transformation",
          description:
            "Define your path to victory. Clarify your vision, identify growth engines, and restructure for scalability with strategies grounded in financial reality.",
          href: "/capabilities/strategy-corporate-finance/business-strategy",
        },
        {
          title: "Fractional CFO Services",
          description:
            "Access high-level financial leadership without the full-time cost. Strategic financial planning, cash flow management, and board-level reporting tailored for growing SMEs.",
          href: "/capabilities/strategy-corporate-finance/cfo-services",
        },
        {
          title: "Financial Planning & Analysis",
          description:
            "Turn data into decisions. Robust budgeting, forecasting, and variance analysis processes that give you clear visibility into performance and future scenarios.",
          href: "/capabilities/strategy-corporate-finance/fpa",
        },
        {
          title: "Capital Raising & Investment",
          description:
            "Prepare for your next funding round with confidence. Valuation, pitch deck creation, financial modeling, and due diligence preparation that positions you for success.",
          href: "/capabilities/strategy-corporate-finance/capital-raising",
        },
        {
          title: "Mergers & Acquisitions Advisory",
          description:
            "Navigate complex transactions with expert guidance. From target identification and valuation to negotiation and post-merger integration.",
          href: "/capabilities/strategy-corporate-finance/mergers-acquisitions",
        },
        {
          title: "Performance Improvement",
          description:
            "Unlock hidden value in your operations. Cost-saving opportunities, working capital optimization, and process streamlining that improve margins and cash flow.",
          href: "/capabilities/strategy-corporate-finance/performance-improvement",
        },
        {
          title: "AI-Powered Finance",
          description:
            "Harness artificial intelligence to transform your finance function. Automated reporting, predictive cash flow modeling, and AI-assisted budgeting that delivers enterprise-grade insights for growing companies.",
          href: "/capabilities/strategy-corporate-finance/ai-powered-finance",
        },
        {
          title: "M&A & Strategic Partnerships",
          description:
            "Navigate complex transactions with confidence. From target identification to post-merger integration — and the joint ventures, alliances, and partnerships that unlock growth without a full acquisition.",
          href: "/capabilities/strategy-corporate-finance/ma-partnerships",
        },
      ]}
      // AUTHORED case-tab metrics distilled from Cat 11a 12-case pool, grouped into 3 industry tabs.
      // Same pattern as AI / BB / Ops master refactors. All 12 case slugs verified live in App.tsx under /cases/<slug>.
      // TODO: confirm with practice lead before publish (per-card metric blurbs + image paths)
      clientResults={[
        {
          industry: "Private Equity & Value Creation",
          cases: [
            { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", metric: "$18M added EBITDA", image: "/images/industries/transport-traffic.jpg" },
            { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", metric: "40% faster diligence", image: "/images/capabilities/cap-conference-data.jpg" },
            { slug: "pe-distribution-digital", title: "Standing up a carved-out distributor in six months", metric: "Standalone in 6 months", image: "/images/industries/deal-handshake.jpg" },
          ],
        },
        {
          industry: "Financial Services",
          cases: [
            { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", metric: "$24M new revenue", image: "/images/industries/fin-trader.jpg" },
            { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", metric: "60% faster onboarding", image: "/images/industries/fin-handshake-city.jpg" },
            { slug: "insurance-digital-distribution", title: "Turning a call-center insurer into a digital one", metric: "50% shift to digital", image: "/images/industries/fin-monitors.jpg" },
          ],
        },
        {
          industry: "Growth & Transformation",
          cases: [
            { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", metric: "750K subscribers won", image: "/images/industries/tech-datacenter.jpg" },
            { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", metric: "3x faster releases", image: "/images/capabilities/cap-conference-data.jpg" },
            { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", metric: "New services line", image: "/images/capabilities/cap-battery-factory.jpg" },
          ],
        },
      ]}
      // SOURCE has no partner / ecosystem section — pass empty array (template hides section)
      ecosystemLogos={[]}
      // SOURCE has no named NexDyne practice leaders for Strategy & Corporate Finance.
      // Per content authoring rule, do not invent staff identities. Pass empty array; section renders conditionally.
      // TODO: confirm with practice lead before publish (replace with real practice leadership headshots + LinkedIn URLs)
      leaders={[]}
      // PRESERVED 3 insight cards verbatim from source (titles + categories + readTime + slugified hrefs)
      // TODO: confirm with practice lead before publish (image paths + final href slugs)
      insights={[
        {
          tag: "Strategy",
          title:
            "The CFO's Guide to Strategic Growth in Uncertain Markets",
          readTime: "8 min read",
          image: "/images/insight-cfo-strategic-growth.jpg",
          href: "/insights/cfo-strategic-growth",
        },
        {
          tag: "Capital Markets",
          title:
            "Preparing for Your Series B: Lessons from 50+ Funding Rounds",
          readTime: "6 min read",
          image: "/images/insight-series-b-lessons.jpg",
          href: "/insights/series-b-lessons",
        },
        {
          tag: "Performance",
          title:
            "Working Capital Optimization: Quick Wins for Cash Flow",
          readTime: "5 min read",
          image: "/images/insight-working-capital-optimization.jpg",
          href: "/insights/working-capital-optimization",
        },
      ]}
      // AUTHORED — source closing CTA was generic "Ready to transform your financial strategy?" copy with no named lead
      // TODO: confirm with practice lead before publish (real lead name + photo + email + LinkedIn)
      closingCTA={{
        leadName: "Our Strategy & Corporate Finance Practice Lead",
        leadTitle:
          "Head of Strategy & Corporate Finance, NexDyne Consulting Group",
        leadPhoto:
          "/images/ai-team-collaboration.jpg",
        leadEmail: "strategy@nexdyne.tech",
        leadLinkedinUrl: "https://www.linkedin.com/company/nexdyne",
      }}
    />
  );
}
