import CaseStudiesListing from "@/components/CaseStudiesListing";

const caseStudies = [
  {
    title: "AI-Powered Document Processing Transforms Regional Insurance Firm",
    client:
      "A 200-employee regional insurance company processing 50,000+ claims annually",
    href: "/capabilities/artificial-intelligence/case-studies/insurance-document-ai",
    industry: "Insurance",
    metrics: [
      { value: "73%", label: "Faster Processing" },
      { value: "$1.2M", label: "Annual Savings" },
    ],
  },
  {
    title: "Predictive Maintenance Reduces Downtime for Manufacturing SMB",
    client:
      "A mid-size manufacturing company with 150 employees and 3 production facilities",
    href: "/capabilities/artificial-intelligence/case-studies/manufacturing-predictive-maintenance",
    industry: "Manufacturing",
    metrics: [
      { value: "45%", label: "Downtime Reduction" },
      { value: "28%", label: "Maintenance Cost Savings" },
    ],
  },
  {
    title: "Customer Service AI Scales Support for Growing SaaS Company",
    client:
      "A B2B SaaS company with 120 employees serving 2,000+ business customers",
    href: "/capabilities/artificial-intelligence/case-studies/saas-customer-service-ai",
    industry: "Technology",
    metrics: [
      { value: "60%", label: "Ticket Deflection" },
      { value: "4.5x", label: "Support Capacity" },
    ],
  },
  {
    title: "Demand Forecasting AI Optimizes Inventory for Regional Distributor",
    client:
      "A wholesale distribution company with 180 employees and $75M annual revenue",
    href: "/capabilities/artificial-intelligence/case-studies/distributor-demand-forecasting",
    industry: "Distribution",
    metrics: [
      { value: "35%", label: "Inventory Reduction" },
      { value: "92%", label: "Forecast Accuracy" },
    ],
  },
  {
    title: "AI-Driven Underwriting Accelerates Growth for Specialty Lender",
    client:
      "A specialty lending firm with 100 employees focused on small business loans",
    href: "/capabilities/artificial-intelligence/case-studies/lender-ai-underwriting",
    industry: "Financial Services",
    metrics: [
      { value: "5x", label: "Application Throughput" },
      { value: "22%", label: "Default Rate Reduction" },
    ],
  },
  {
    title: "Quality Inspection AI Improves Yield for Food Processor",
    client:
      "A regional food processing company with 200 employees and multiple product lines",
    href: "/capabilities/artificial-intelligence/case-studies/food-quality-ai",
    industry: "Food & Beverage",
    metrics: [
      { value: "40%", label: "Defect Detection Improvement" },
      { value: "18%", label: "Yield Increase" },
    ],
  },
];

export default function AICaseStudies() {
  return (
    <CaseStudiesListing
      title="Artificial Intelligence Case Studies"
      subtitle="Real results from AI implementations at mid-size companies across industries. See how organizations like yours are leveraging AI to drive measurable business outcomes."
      parentTitle="Artificial Intelligence"
      parentHref="/capabilities/artificial-intelligence"
      caseStudies={caseStudies}
    />
  );
}
