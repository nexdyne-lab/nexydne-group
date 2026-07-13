// TODO: David — confirm Production & Asset Optimization experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Production Optimization hub.
// TODO: confirm hero image asset — using fallback Unsplash URL until /images/production-optimization-abstract.jpg lands.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function ProductionOptimization() {
  return (
    <CapabilityHubTemplate
      hubName="Production & Asset Optimization"
      slug="operations/production-optimization"
      heroSubtitle="Maximize throughput and equipment effectiveness. Deploy predictive maintenance, production scheduling, and lean manufacturing principles."
      heroImage="/images/industries/mfg-robotics.jpg"
      experienceStats={[
        { number: "80+", label: "Production optimization programs across manufacturing sectors" },
        { number: "15-30%", label: "Typical improvement in Overall Equipment Effectiveness (OEE)" },
        { number: "25-40%", label: "Reduction in unplanned downtime through predictive maintenance" },
        // TODO: confirm with practice lead before publish
        { number: "Plant-wide", label: "Lean manufacturing and asset reliability programs" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Drive OEE step-changes",
          description:
            "Attack availability, performance, and quality losses systematically — typical clients gain 10-25 OEE points across constraint assets within 12 months.",
        },
        {
          title: "Move maintenance from reactive to predictive",
          description:
            "Use sensor data, condition monitoring, and AI to predict failures before they cost you a shift — slashing unplanned downtime and emergency labor.",
        },
        {
          title: "Sweat your assets",
          description:
            "Squeeze more output from existing capacity before you buy more. Bottleneck analysis, line balancing, and changeover reduction that defer capex and lift gross margin.",
        },
        {
          title: "Cut energy intensity",
          description:
            "Energy is one of the largest controllable costs in production. Real-time monitoring, AI-driven optimization, and process tuning that hit cost and ESG targets together.",
        },
        {
          title: "Accelerate throughput",
          description:
            "Re-engineer flow, scheduling, and constraints management so the same plant ships meaningfully more product — without sacrificing quality or safety.",
        },
        {
          title: "Engineer production flexibility",
          description:
            "Build the ability to switch products, scale volume, and absorb demand swings without chaos — a critical capability in volatile, customized markets.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "OEE Improvement",
          description:
            "Systematic approach to improving Overall Equipment Effectiveness. Address availability, performance, and quality losses with data-driven interventions.",
          href: "/capabilities/operations/production-optimization/oee-improvement",
        },
        {
          title: "Predictive Maintenance",
          description:
            "Move from reactive to predictive maintenance. Deploy sensors, analytics, and AI to anticipate failures before they occur and optimize maintenance schedules.",
          href: "/capabilities/operations/production-optimization/predictive-maintenance",
        },
        {
          title: "Production Scheduling",
          description:
            "Optimize production planning and scheduling. Balance demand, capacity, and constraints for maximum efficiency and customer service.",
          href: "/capabilities/operations/production-optimization/production-scheduling",
        },
        {
          title: "Lean Manufacturing",
          description:
            "Apply lean principles to eliminate waste. Value stream mapping, 5S, TPM, and continuous improvement programs that engage frontline teams.",
          href: "/capabilities/operations/production-optimization/lean-manufacturing",
        },
        {
          title: "Changeover Optimization",
          description:
            "Reduce changeover time with SMED methodology. Increase flexibility while maintaining efficiency and reducing batch sizes.",
          href: "/capabilities/operations/production-optimization/changeover-optimization",
        },
        {
          title: "Asset Lifecycle Management",
          description:
            "Optimize asset performance across the lifecycle. Capital planning, reliability engineering, and end-of-life decisions that maximize ROI.",
          href: "/capabilities/operations/production-optimization/asset-lifecycle-management",
        },
      ]}
      ambitionsCTAText="Talk to us about your Production Optimization ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the losses",
          body: "We analyze your production data to identify the biggest sources of OEE loss — availability, performance, and quality. We quantify the opportunity and prioritize improvements by impact and feasibility.",
        },
        {
          step: "02",
          title: "Optimize the system",
          body: "We implement lean manufacturing principles and digital solutions to address root causes. We optimize scheduling, reduce changeovers, implement predictive maintenance, and eliminate quality defects.",
        },
        {
          step: "03",
          title: "Sustain the gains",
          body: "We build internal capabilities to maintain and extend improvements. We establish performance management systems, train operators, and create a culture of continuous improvement.",
        },
      ]}
      featuredCases={[
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { slug: "healthcare-readmission", title: "Cutting avoidable readmissions with better prediction", industry: "Healthcare", metric: "42%", image: "/case-doctor-consultation.799c1562.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Production Optimization lead"
    />
  );
}
