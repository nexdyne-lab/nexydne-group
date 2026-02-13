import CaseStudiesListing from "@/components/CaseStudiesListing";

const caseStudies = [
  {
    title: "Regional Distributor Launches Digital Marketplace",
    client:
      "A 150-employee industrial supplies distributor seeking new revenue streams",
    href: "/capabilities/business-building/case-studies/distributor-marketplace",
    industry: "Distribution",
    metrics: [
      { value: "$4.2M", label: "New Revenue (Year 1)" },
      { value: "340", label: "Marketplace Sellers" },
    ],
  },
  {
    title: "Professional Services Firm Builds SaaS Product",
    client:
      "A 120-employee consulting firm productizing their methodology",
    href: "/capabilities/business-building/case-studies/consulting-saas",
    industry: "Professional Services",
    metrics: [
      { value: "2,400", label: "Paying Subscribers" },
      { value: "45%", label: "Gross Margin" },
    ],
  },
  {
    title: "Manufacturer Creates Direct-to-Consumer Channel",
    client:
      "A 200-employee specialty manufacturer expanding beyond B2B",
    href: "/capabilities/business-building/case-studies/manufacturer-dtc",
    industry: "Manufacturing",
    metrics: [
      { value: "$8M", label: "D2C Revenue" },
      { value: "28%", label: "Higher Margins" },
    ],
  },
  {
    title: "Healthcare Provider Launches Telehealth Venture",
    client:
      "A regional healthcare network with 180 employees building virtual care",
    href: "/capabilities/business-building/case-studies/healthcare-telehealth",
    industry: "Healthcare",
    metrics: [
      { value: "15K", label: "Virtual Visits/Month" },
      { value: "3x", label: "Patient Reach" },
    ],
  },
  {
    title: "Logistics Company Builds Technology Spin-Off",
    client:
      "A 160-employee logistics firm commercializing internal technology",
    href: "/capabilities/business-building/case-studies/logistics-tech-spinoff",
    industry: "Logistics",
    metrics: [
      { value: "$12M", label: "Spin-Off Valuation" },
      { value: "18", label: "Enterprise Clients" },
    ],
  },
  {
    title: "Financial Services Firm Enters Adjacent Market",
    client:
      "A 140-employee wealth management firm expanding into business services",
    href: "/capabilities/business-building/case-studies/wealth-adjacent",
    industry: "Financial Services",
    metrics: [
      { value: "35%", label: "Revenue Growth" },
      { value: "220", label: "New Business Clients" },
    ],
  },
];

export default function BusinessBuildingCaseStudies() {
  return (
    <CaseStudiesListing
      title="Business Building Case Studies"
      subtitle="Real examples of mid-size companies successfully launching new ventures, products, and business lines. See how organizations like yours are building sustainable growth engines."
      parentTitle="Business Building"
      parentHref="/capabilities/business-building"
      caseStudies={caseStudies}
    />
  );
}
