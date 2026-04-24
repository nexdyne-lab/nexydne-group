import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function PEGrowthHealthcare() {
  return (
    <CaseStudyTemplate
      client="PE-Backed Healthcare Services Company"
      industry="Healthcare · Strategy & Finance"
      title="Private Equity-Backed Growth: From $40M to $120M Revenue"
      subtitle="How a healthcare services company executed a comprehensive post-acquisition growth strategy to triple revenue in 18 months."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
      challenge={`Following acquisition by a PE sponsor, the company faced pressure to execute an aggressive growth plan. The existing management team had deep clinical expertise but limited experience with rapid scaling.

A 150-employee healthcare services company backed by a mid-market private equity firm operates across three states with a focus on home health and hospice services. The comprehensive diagnostic revealed interconnected barriers: financial close processes taking 15+ days making it impossible to respond quickly to performance issues, no standardized KPIs across locations preventing meaningful performance comparison, sales relying on the founder's personal network with no documented processes or CRM, and an understaffed billing and collections function leaving significant revenue uncollected.`}
      solution={`NEXDYNE implemented a new FP&A function with standardized reporting across all locations: a cloud-based financial system reducing close time from 15 to 5 days, location-level P&Ls with consistent cost allocation, a weekly flash report tracking key operational and financial metrics, and a monthly business review cadence with location leaders.

A scalable sales engine was built with CRM implementation and documented sales process, a dedicated business development team complementing the founder's relationship-based approach, referral source analytics identifying high-potential accounts, and marketing materials and digital presence supporting outreach.

Revenue cycle restructuring reduced claim denials 60%, improved days sales outstanding from 65 to 42 days, and recovered $1.2M in previously written-off receivables. With the operational foundation in place, two tuck-in acquisitions adding $25M in revenue were executed—covering target identification, financial due diligence, integration planning, and synergy realization.`}
      impact={`Revenue tripled from $40M to $120M over 18 months—adding $80M in revenue through a combination of organic growth, revenue cycle improvement, and two strategic acquisitions. EBITDA margin stabilized at 14% as the combination of operational improvements and scale efficiencies offset the growth investment.

The financial visibility created by the FP&A transformation was foundational to everything else: location leaders could see their own performance weekly, the PE sponsor could track portfolio performance in near-real-time, and management could identify and respond to issues in days rather than months. The revenue cycle improvement alone recovered $1.2M in previously written-off receivables and improved cash conversion throughout the growth period.`}
      metrics={[
        { value: "3x", label: "Revenue growth" },
        { value: "$80M", label: "Revenue added" },
        { value: "18 months", label: "Timeline" },
        { value: "14%", label: "EBITDA margin" }
      ]}
      tags={["Healthcare", "Private Equity", "Growth", "Strategy"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}

export default PEGrowthHealthcare;
