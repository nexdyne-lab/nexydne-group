import CaseStudiesListing from "@/components/CaseStudiesListing";

const caseStudies = [
  {
    title: "Supply Chain Optimization Reduces Costs by 25%",
    client:
      "A 200-employee consumer goods manufacturer streamlining operations",
    href: "/capabilities/operations/case-studies/consumer-goods-supply-chain",
    industry: "Manufacturing",
    metrics: [
      { value: "25%", label: "Cost Reduction" },
      { value: "40%", label: "Lead Time Improvement" },
    ],
  },
  {
    title: "Process Automation Transforms Order Fulfillment",
    client:
      "A 175-employee e-commerce company scaling operations",
    href: "/capabilities/operations/case-studies/ecommerce-fulfillment",
    industry: "E-commerce",
    metrics: [
      { value: "3x", label: "Order Capacity" },
      { value: "60%", label: "Labor Cost Reduction" },
    ],
  },
  {
    title: "Quality System Implementation Achieves ISO Certification",
    client:
      "A 150-employee aerospace supplier meeting customer requirements",
    href: "/capabilities/operations/case-studies/aerospace-quality",
    industry: "Aerospace",
    metrics: [
      { value: "ISO 9001", label: "Certification Achieved" },
      { value: "45%", label: "Defect Reduction" },
    ],
  },
  {
    title: "Warehouse Optimization Doubles Throughput",
    client:
      "A 180-employee distribution company expanding capacity",
    href: "/capabilities/operations/case-studies/distribution-warehouse",
    industry: "Distribution",
    metrics: [
      { value: "2x", label: "Throughput Increase" },
      { value: "30%", label: "Space Utilization Gain" },
    ],
  },
  {
    title: "Production Planning Reduces Inventory by 35%",
    client:
      "A 160-employee food manufacturer improving working capital",
    href: "/capabilities/operations/case-studies/food-production-planning",
    industry: "Food & Beverage",
    metrics: [
      { value: "35%", label: "Inventory Reduction" },
      { value: "98%", label: "On-Time Delivery" },
    ],
  },
  {
    title: "Workforce Optimization Improves Productivity by 28%",
    client:
      "A 190-employee healthcare services company optimizing staffing",
    href: "/capabilities/operations/case-studies/healthcare-workforce",
    industry: "Healthcare",
    metrics: [
      { value: "28%", label: "Productivity Gain" },
      { value: "15%", label: "Overtime Reduction" },
    ],
  },
];

export default function OperationsCaseStudies() {
  return (
    <CaseStudiesListing
      title="Operations Case Studies"
      subtitle="Real results from operations transformations at mid-size companies. See how organizations like yours are achieving operational excellence."
      parentTitle="Operations"
      parentHref="/capabilities/operations"
      caseStudies={caseStudies}
    />
  );
}
