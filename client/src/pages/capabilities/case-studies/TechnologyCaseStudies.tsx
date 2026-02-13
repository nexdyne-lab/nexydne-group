import CaseStudiesListing from "@/components/CaseStudiesListing";

const caseStudies = [
  {
    title: "Cloud Migration Enables 3x Growth for Regional Bank",
    client:
      "A 180-employee community bank modernizing legacy infrastructure",
    href: "/capabilities/technology/case-studies/bank-cloud-migration",
    industry: "Financial Services",
    metrics: [
      { value: "65%", label: "Infrastructure Cost Reduction" },
      { value: "99.9%", label: "System Uptime" },
    ],
  },
  {
    title: "ERP Modernization Streamlines Manufacturing Operations",
    client:
      "A 220-employee precision manufacturer replacing legacy systems",
    href: "/capabilities/technology/case-studies/manufacturing-erp",
    industry: "Manufacturing",
    metrics: [
      { value: "40%", label: "Process Efficiency Gain" },
      { value: "8 weeks", label: "Month-End Close Reduction" },
    ],
  },
  {
    title: "API Platform Accelerates Partner Integration",
    client:
      "A 150-employee logistics company building partner ecosystem",
    href: "/capabilities/technology/case-studies/logistics-api-platform",
    industry: "Logistics",
    metrics: [
      { value: "85%", label: "Faster Partner Onboarding" },
      { value: "45", label: "API Integrations" },
    ],
  },
  {
    title: "Security Transformation Protects Healthcare Data",
    client:
      "A 200-employee healthcare services company achieving compliance",
    href: "/capabilities/technology/case-studies/healthcare-security",
    industry: "Healthcare",
    metrics: [
      { value: "Zero", label: "Security Incidents" },
      { value: "HIPAA", label: "Full Compliance" },
    ],
  },
  {
    title: "Legacy System Modernization for Insurance Carrier",
    client:
      "A 175-employee specialty insurance company updating core systems",
    href: "/capabilities/technology/case-studies/insurance-modernization",
    industry: "Insurance",
    metrics: [
      { value: "70%", label: "Processing Speed Improvement" },
      { value: "$2.1M", label: "Annual Savings" },
    ],
  },
  {
    title: "Data Platform Enables Analytics for Retailer",
    client:
      "A 160-employee retail chain building data capabilities",
    href: "/capabilities/technology/case-studies/retail-data-platform",
    industry: "Retail",
    metrics: [
      { value: "Real-time", label: "Inventory Visibility" },
      { value: "25%", label: "Stockout Reduction" },
    ],
  },
];

export default function TechnologyCaseStudies() {
  return (
    <CaseStudiesListing
      title="Technology Case Studies"
      subtitle="Real results from technology transformations at mid-size companies. See how organizations like yours are modernizing infrastructure and building competitive advantage."
      parentTitle="Technology"
      parentHref="/capabilities/technology"
      caseStudies={caseStudies}
    />
  );
}
