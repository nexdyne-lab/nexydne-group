import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function InsuranceClimateRisk() {
  return (
    <CaseStudyTemplate
      client="Global Property & Casualty Insurer"
      industry="Insurance · Risk Analytics"
      title="Insurer Models Climate Risk to Protect Portfolios"
      subtitle="Advanced geospatial analytics and climate modeling enabled more accurate underwriting and portfolio diversification, improving loss ratio by 15% and reducing capital requirements by 20%."
      heroImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80"
      challenge={`A global property and casualty insurer faced mounting losses from increasingly frequent and severe weather events. Historical loss data was no longer a reliable predictor of future risk due to climate change. The insurer's existing models failed to account for granular, localized risks like flash flooding or urban heat islands.

To remain solvent and competitive, they needed a forward-looking risk model that could quantify the impact of climate change on their property portfolio over 5, 10, and 20-year horizons. Without this capability, underwriting decisions were based on outdated assumptions, and portfolio concentration risks went undetected until catastrophic loss events materialized.`}
      solution={`NEXDYNE built a next-generation climate risk engine integrating terabytes of geospatial and environmental data. Hyper-local risk scoring combined satellite elevation data, soil permeability maps, and climate projections to assess flood and fire risk at the individual property level—not just by zip code.

The platform enabled portfolio stress testing that simulated thousands of climate scenarios (e.g., "1-in-100 year storm becomes 1-in-20 year storm") to identify concentration risks and capital requirements. Dynamic pricing models gave underwriters real-time risk adjustments for new policies, allowing them to price coverage accurately based on current and future climate exposure.`}
      impact={`The climate risk engine enabled the insurer to distinguish between high-risk and low-risk properties on the same street—a level of granularity that unlocked competitive advantage. The insurer could write business that competitors avoided (understanding the actual risk) while rejecting exposures competitors blindly accepted.

The loss ratio improved 15% through more accurate risk selection and pricing. Capital requirements fell 20% as portfolio stress testing revealed diversification opportunities and reduced unexpected concentration risk. The portfolio gained 100% visibility into climate exposure for the first time.`}
      metrics={[
        { value: "15%", label: "Improvement in loss ratio" },
        { value: "20%", label: "Reduction in capital requirements" },
        { value: "100%", label: "Portfolio visibility" }
      ]}
      tags={["Insurance", "Climate Risk", "Analytics", "Risk & Resilience"]}
      relatedCapability={{
        title: "Risk & Resilience",
        link: "/capabilities/risk-resilience"
      }}
    />
  );
}
