import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function SaaSSeriesB() {
  return (
    <CaseStudyTemplate
      client="B2B SaaS Company"
      industry="Technology · Strategy & Finance"
      title="Series B Fundraise Supports Technology Expansion"
      subtitle="How a B2B software company prepared for and executed a successful growth capital raise at an 8x revenue multiple."
      heroImage="https://images.unsplash.com/photo-1553484771-371a605b060b?w=1600&q=80"
      challenge={`The company had achieved product-market fit and was ready to accelerate growth, but the founders had never raised institutional capital. They needed to prepare the company for investor scrutiny, develop compelling materials, and navigate the fundraising process.

A 120-employee B2B SaaS company providing workflow automation software to mid-size professional services firms had $15M ARR and strong unit economics. The readiness assessment revealed several areas requiring attention before approaching investors: financial reporting that didn't clearly show SaaS metrics, incomplete customer cohort data, a sales pipeline not systematically tracked, and legal housekeeping including option grants and IP assignments.`}
      solution={`NEXDYNE developed a comprehensive financial model telling the company's growth story—historical performance with clear SaaS metrics (ARR, MRR, churn, LTV/CAC), a bottoms-up revenue forecast based on sales capacity and conversion rates, expense projections tied to hiring plan and go-to-market investments, and scenario analysis showing different growth trajectories.

The investment narrative was crafted to resonate with growth investors: a large and growing market opportunity, differentiated product with strong customer retention, a proven go-to-market motion ready to scale, and an experienced team with relevant domain expertise. Pitch deck, executive summary, and detailed data room materials were created.

A structured fundraising process identified and prioritized 50+ potential investors, managed outreach and scheduling, prepared founders for investor meetings, coordinated due diligence requests, and negotiated term sheet provisions—designed to create competitive tension while minimizing distraction for the management team.`}
      impact={`The process generated strong investor interest, resulting in three competing term sheets. The final deal closed $35 million at an 8x revenue multiple within 12 weeks of launching the process. The lead investor took a board seat with founder-friendly governance and standard protective provisions without unusual terms; a secondary component allowed founders to take some liquidity while remaining fully invested in the outcome.

The preparation work paid measurable dividends: the clean SaaS metrics, complete cohort data, and proactive due diligence materials reduced investor friction and accelerated diligence timelines. Competing term sheets gave the founders genuine negotiating leverage on governance provisions that matter as much as valuation over the life of the investment.`}
      metrics={[
        { value: "$35M", label: "Capital raised" },
        { value: "8x", label: "Revenue multiple" },
        { value: "12 weeks", label: "Process duration" },
        { value: "3", label: "Competing term sheets" }
      ]}
      tags={["Technology", "SaaS", "Fundraising", "Strategy"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}
