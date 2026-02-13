import CaseStudiesListing from "@/components/CaseStudiesListing";

const caseStudies = [
  {
    title: "Private Equity-Backed Growth: From $40M to $120M Revenue",
    client:
      "A 150-employee healthcare services company executing post-acquisition growth plan",
    href: "/capabilities/strategy-corporate-finance/case-studies/pe-growth-healthcare",
    industry: "Healthcare",
    metrics: [
      { value: "3x", label: "Revenue Growth" },
      { value: "18 months", label: "Timeline" },
    ],
  },
  {
    title: "Strategic Acquisition Doubles Market Presence",
    client:
      "A 180-employee manufacturing company acquiring competitor",
    href: "/capabilities/strategy-corporate-finance/case-studies/manufacturing-acquisition",
    industry: "Manufacturing",
    metrics: [
      { value: "2x", label: "Market Share" },
      { value: "$45M", label: "Deal Value" },
    ],
  },
  {
    title: "FP&A Transformation Enables Data-Driven Decisions",
    client:
      "A 200-employee distribution company modernizing finance function",
    href: "/capabilities/strategy-corporate-finance/case-studies/distribution-fpa",
    industry: "Distribution",
    metrics: [
      { value: "5 days", label: "Faster Close" },
      { value: "Real-time", label: "Performance Visibility" },
    ],
  },
  {
    title: "Series B Fundraise Supports Technology Expansion",
    client:
      "A 120-employee B2B software company raising growth capital",
    href: "/capabilities/strategy-corporate-finance/case-studies/saas-series-b",
    industry: "Technology",
    metrics: [
      { value: "$35M", label: "Capital Raised" },
      { value: "8x", label: "Revenue Multiple" },
    ],
  },
  {
    title: "Turnaround Strategy Restores Profitability",
    client:
      "A 175-employee retail company recovering from market disruption",
    href: "/capabilities/strategy-corporate-finance/case-studies/retail-turnaround",
    industry: "Retail",
    metrics: [
      { value: "15%", label: "EBITDA Margin Restored" },
      { value: "$8M", label: "Cost Reduction" },
    ],
  },
  {
    title: "Exit Preparation Maximizes Founder Value",
    client:
      "A 140-employee professional services firm preparing for sale",
    href: "/capabilities/strategy-corporate-finance/case-studies/services-exit",
    industry: "Professional Services",
    metrics: [
      { value: "40%", label: "Valuation Premium" },
      { value: "6 months", label: "Preparation Time" },
    ],
  },
];

export default function StrategyFinanceCaseStudies() {
  return (
    <CaseStudiesListing
      title="Strategy & Corporate Finance Case Studies"
      subtitle="Real results from strategic finance engagements at mid-size companies. See how organizations like yours are driving growth, raising capital, and maximizing value."
      parentTitle="Strategy & Corporate Finance"
      parentHref="/capabilities/strategy-corporate-finance"
      caseStudies={caseStudies}
    />
  );
}
