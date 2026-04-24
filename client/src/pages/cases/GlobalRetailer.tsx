import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function GlobalRetailer() {
  return (
    <CaseStudyTemplate
      client="Global Retailer"
      industry="Retail · Supply Chain Automation"
      title="Global Retailer: Supply Chain Automation"
      subtitle="Deployed RPA bots to automate order processing and inventory management across 200+ retail locations, eliminating manual data entry and reducing processing time by 45%."
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
      challenge={`A multinational retail chain with 200+ locations was drowning in manual order processing. Their procurement team spent 40+ hours weekly transferring data between their legacy ERP system, supplier portals, and inventory management platform. Each order required manual entry across three systems, creating bottlenecks that delayed restocking and frustrated store managers.

The manual process introduced errors that cascaded through the supply chain—incorrect quantities, wrong SKUs, duplicate orders. These mistakes cost the company $2M+ annually in expedited shipping fees, stockouts, and excess inventory. Traditional integration wasn't viable because their ERP system was scheduled for replacement within 18 months, making API development economically unjustifiable.`}
      solution={`NEXDYNE deployed UiPath RPA bots that automated the entire order-to-inventory workflow. The bots logged into each system, extracted order data, validated quantities against inventory levels, and submitted purchase orders to suppliers—executing in minutes what previously took hours of manual work.

Process discovery workshops with the procurement team identified all edge cases and exception handling needs. Bots were developed and tested in a 6-week sprint, then rolled out in phases across 50 locations per week. UiPath Orchestrator enabled centralized bot management and monitoring. OCR extracted data from supplier invoices, and an exception handling dashboard routed edge cases to human reviewers.`}
      impact={`The RPA implementation delivered measurable results across every operational dimension. Processing time dropped 45%, freeing the procurement team from 40 hours of weekly data entry for strategic supplier negotiations and vendor relationship management. Order error rates fell 60%, eliminating the downstream costs of incorrect quantities, wrong SKUs, and duplicate orders.

Annual cost savings reached $1.8M through reduced labor, lower expedited shipping fees, and fewer stockouts. Inventory accuracy improvements reduced stockouts by 35%, improving customer satisfaction and sales conversion. The bot infrastructure was architected to support 500+ locations without additional headcount, with full investment recovered in 7 months.`}
      metrics={[
        { value: "45%", label: "Reduction in processing time" },
        { value: "60%", label: "Decrease in order errors" },
        { value: "$1.8M", label: "Annual cost savings" }
      ]}
      tags={["RPA", "Supply Chain", "Retail", "Operations"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
