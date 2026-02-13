import CaseStudiesListing from "@/components/CaseStudiesListing";

const caseStudies = [
  {
    title: "Digital Marketing Transformation Doubles Lead Generation",
    client:
      "A 150-employee B2B services company modernizing marketing",
    href: "/capabilities/growth-marketing-sales/case-studies/b2b-digital-marketing",
    industry: "Professional Services",
    metrics: [
      { value: "2x", label: "Lead Volume" },
      { value: "35%", label: "Lower CAC" },
    ],
  },
  {
    title: "Sales Process Optimization Increases Win Rate",
    client:
      "A 180-employee software company improving sales effectiveness",
    href: "/capabilities/growth-marketing-sales/case-studies/software-sales-optimization",
    industry: "Technology",
    metrics: [
      { value: "45%", label: "Win Rate Improvement" },
      { value: "28%", label: "Shorter Sales Cycle" },
    ],
  },
  {
    title: "Customer Retention Program Reduces Churn by 40%",
    client:
      "A 120-employee subscription business improving retention",
    href: "/capabilities/growth-marketing-sales/case-studies/subscription-retention",
    industry: "Media & Entertainment",
    metrics: [
      { value: "40%", label: "Churn Reduction" },
      { value: "$2.4M", label: "Retained Revenue" },
    ],
  },
  {
    title: "E-commerce Launch Drives $5M New Revenue",
    client:
      "A 200-employee manufacturer launching direct-to-consumer channel",
    href: "/capabilities/growth-marketing-sales/case-studies/manufacturer-ecommerce",
    industry: "Manufacturing",
    metrics: [
      { value: "$5M", label: "Year 1 Revenue" },
      { value: "15K", label: "New Customers" },
    ],
  },
  {
    title: "Pricing Optimization Improves Margins by 8 Points",
    client:
      "A 160-employee distribution company optimizing pricing",
    href: "/capabilities/growth-marketing-sales/case-studies/distribution-pricing",
    industry: "Distribution",
    metrics: [
      { value: "8pts", label: "Margin Improvement" },
      { value: "3%", label: "Customer Retention" },
    ],
  },
  {
    title: "Account-Based Marketing Lands Enterprise Clients",
    client:
      "A 140-employee technology company moving upmarket",
    href: "/capabilities/growth-marketing-sales/case-studies/tech-abm",
    industry: "Technology",
    metrics: [
      { value: "12", label: "Enterprise Wins" },
      { value: "4x", label: "Deal Size Increase" },
    ],
  },
];

export default function GrowthMarketingCaseStudies() {
  return (
    <CaseStudiesListing
      title="Growth, Marketing & Sales Case Studies"
      subtitle="Real results from growth initiatives at mid-size companies. See how organizations like yours are accelerating revenue and improving customer acquisition."
      parentTitle="Growth, Marketing & Sales"
      parentHref="/capabilities/growth-marketing-sales"
      caseStudies={caseStudies}
    />
  );
}
