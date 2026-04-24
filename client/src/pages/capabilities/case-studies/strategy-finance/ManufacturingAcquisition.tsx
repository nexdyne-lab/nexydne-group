import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function ManufacturingAcquisition() {
  return (
    <CaseStudyTemplate
      client="Precision Manufacturing Company"
      industry="Manufacturing · Strategy & Finance"
      title="Strategic Acquisition Doubles Market Presence"
      subtitle="How a manufacturing company identified, acquired, and integrated a competitor to achieve market leadership."
      heroImage="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&q=80"
      challenge={`The company had grown organically for 25 years but was losing market share to larger competitors with broader capabilities. The founder wanted to accelerate growth through acquisition but had no M&A experience.

A 180-employee precision manufacturing company serving the aerospace and defense industry with $45M in annual revenue and a strong quality reputation needed expanded capabilities in CNC machining, geographic presence on the West Coast to reduce shipping costs for key customers, and capacity to handle larger orders that were currently being declined. The strategic rationale was clear; the execution pathway was not.`}
      solution={`NEXDYNE conducted systematic target screening across 200+ companies against criteria including capability fit, geographic location, financial health, and cultural alignment—narrowing the field to 12 serious candidates through detailed analysis and management conversations.

For the selected target—a $25M revenue competitor with complementary capabilities—comprehensive due diligence covered financial performance and quality of earnings, customer concentration and contract terms, equipment condition and capital requirements, employee capabilities and retention risk, and environmental and regulatory compliance.

The transaction was structured with a combination of cash and seller financing, earnout provisions tied to customer retention, employment agreements for key personnel, and representations and warranties insurance limiting post-closing risk. A detailed 100-day integration plan developed before close covered customer communication and retention, employee onboarding and cultural integration, systems and process harmonization, and synergy capture and tracking.`}
      impact={`Market share doubled as the combined entity offered a breadth of capabilities—CNC machining, precision fabrication, and West Coast presence—that neither company could have provided independently. Customer retention reached 95% through proactive communication and continuity planning that made the acquisition nearly invisible to existing accounts. EBITDA margin expanded to 18% as combined overhead was rationalized and cross-selling opportunities were realized.

The $45M deal created an entity capable of competing for programs that were previously inaccessible due to capability or capacity constraints. Two new Tier 1 customers contracted with the combined company within 12 months—relationships that would not have been possible without the acquisition's expanded capabilities.`}
      metrics={[
        { value: "2x", label: "Market share" },
        { value: "$45M", label: "Deal value" },
        { value: "95%", label: "Customer retention" },
        { value: "18%", label: "EBITDA margin" }
      ]}
      tags={["Manufacturing", "M&A", "Strategy", "Growth"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}
