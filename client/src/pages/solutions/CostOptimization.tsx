// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CostOptimization() {
  return (
    <ServiceDetailTemplate
      hubName="Strategy & Advisory"
      hubSlug="strategy-advisory-hub"
      hubHref="/capabilities/technology/strategy-advisory-hub"
      serviceName="Cost Optimization"
      serviceSlug="cost-optimization"
      heroSubtitle="IT cost optimization that holds is not a one-time campaign. We rebuild the baseline, size the opportunity portfolio, run the execution alongside your teams, and embed the operating cadence so the savings still book in year two — not just in the announcement."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "15-30%", label: "Of in-scope spend retired in the first eighteen months" },
        { number: "Yr 2", label: "Gain holds because the cadence — not a campaign — produced it" },
        { number: "12-24 mo", label: "Reconstructed baseline reconciled by capability and product" },
        { number: "Monthly", label: "Cost reviews, quarterly vendor re-baselining, annual rationalization" },
      ]}
      challenge="Stop announcing IT cost programs that hit the headline number once and quietly unwind by year two. Most programs fail because they run as campaigns rather than as a permanent operating cadence with a defensible baseline behind every dollar."
      opportunity="We rebuild the IT cost baseline against a real unit-economic model, size the optimization portfolio, run the execution alongside your teams with a savings-tracking dashboard, and embed the operating cadence so cost discipline outlives the program."
      approachPillars={[
        {
          step: "01",
          title: "Baseline & Size the Opportunity",
          body: "We rebuild the IT cost baseline against a real unit-economic model — application run-cost, infrastructure, vendor and license fees, managed services, internal labor, and the indirect costs hiding in the GL. Against the baseline we size the portfolio: application rationalization, vendor and license consolidation, contract renegotiation, infrastructure right-sizing, sourcing transitions.",
        },
        {
          step: "02",
          title: "Sequence the Roadmap & Execute",
          body: "Opportunities get sequenced into a defensible roadmap — quick wins in ninety days, structural moves across four to six quarters, transformational plays beyond. We run the execution alongside your teams with vendor renegotiation playbooks, application retirement waves, contract restructuring, and the savings tracking dashboard reviewed monthly with the CFO.",
        },
        {
          step: "03",
          title: "Embed the Operating Cadence",
          body: "Cost optimization is a discipline, not a campaign. We embed the operating cadence — monthly cost reviews, quarterly vendor re-baselining, annual portfolio rationalization, and the architecture review gates that prevent cost from re-accreting. Year two looks better than year one because the cadence is what produced it.",
        },
      ]}
      outcomes={[
        "Reconstructed twelve to twenty-four month IT cost baseline reconciled by capability, business unit, and product — with the data lineage that makes every number defensible.",
        "Sized inventory of optimization opportunities across application rationalization, vendor and license consolidation, contract renegotiation, infrastructure right-sizing, sourcing transitions.",
        "Sequenced multi-wave prioritized roadmap covering quick wins, structural moves, and transformational plays — with the dependency graph, capacity model, and risk profile.",
        "Board-grade business case package per wave with assumptions traceable to the baseline, sensitivity analysis, NPV and payback, and a written risk register.",
        "Production-grade savings tracking dashboard tying forecast savings to realized actual — broken down by initiative, owner, and business unit, reviewed monthly with the CFO.",
        "IT cost governance framework — operating model with monthly reviews, quarterly vendor re-baselining, annual portfolio rationalization, and the architecture review gates that hold the gain.",
      ]}
      featuredCases={[
        { slug: "cloud-migration-health-system", title: "Moving core systems to the cloud without disruption", industry: "Healthcare", metric: "35%", image: "/images/industries/tech-datacenter.jpg" },
        { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/capabilities/cap-iot-network.jpg" },
        { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", industry: "Manufacturing", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg" },
      ]}
      relatedServices={[
        { slug: "cloud-cost-optimization", name: "Cloud Cost Optimization", href: "/capabilities/technology/cloud-cost-optimization" },
        { slug: "technology-strategy", name: "Technology Strategy", href: "/capabilities/technology/technology-strategy" },
        { slug: "technology-due-diligence", name: "Technology Due Diligence", href: "/capabilities/technology/technology-due-diligence" },
      ]}
      ctaLeadName="Talk to our Strategy & Advisory lead"
    />
  );
}
