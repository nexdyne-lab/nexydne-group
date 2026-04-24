import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function ManufacturingErpModernization() {
  return (
    <CaseStudyTemplate
      client="Global Industrial Equipment Manufacturer"
      industry="Manufacturing · ERP Modernization"
      title="Manufacturer Transforms Legacy ERP to Cloud Platform"
      subtitle="Cloud ERP migration delivers 52% faster order processing and real-time supply chain visibility across 14 global manufacturing sites."
      heroImage="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1600&q=80"
      challenge={`A global manufacturer of industrial equipment operating 14 production facilities across North America, Europe, and Asia struggled with a fragmented ERP landscape that had evolved through decades of acquisitions and organic growth. Each facility ran a different version of legacy ERP software—some on-premises installations dating back to the early 2000s, others on heavily customized platforms that required specialized consultants to maintain.

Supply chain visibility was virtually nonexistent. When a customer placed an order, production planners couldn't see real-time inventory levels across facilities, leading to frequent stockouts of critical components while other locations held excess inventory. Order fulfillment averaged 18 days from placement to shipment, with 32% of orders experiencing delays due to material shortages that could have been avoided with better visibility.

The financial impact was severe. The company employed 47 full-time IT staff just to maintain the disparate ERP systems, with annual maintenance costs exceeding $8.4 million. Each system upgrade required custom development work, and integrating newly acquired facilities took 12-18 months of painful data migration and process harmonization.`}
      solution={`NEXDYNE partnered with the manufacturer to design and implement a unified cloud ERP platform that would standardize operations across all 14 facilities while maintaining flexibility for regional requirements. The solution centered on a modern, cloud-native ERP system with integrated modules for manufacturing, supply chain, finance, and CRM—replacing the patchwork of legacy systems with a single source of truth.

The team began with extensive process discovery and harmonization workshops involving stakeholders from every facility. Rather than simply replicating existing workflows, NEXDYNE facilitated the design of standardized best practices incorporating lessons from the company's highest-performing sites. The migration strategy prioritized business continuity through parallel processing—running both legacy and new systems simultaneously for three months at each facility to validate accuracy before cutover, ensuring zero data loss throughout the 22-month implementation.

NEXDYNE developed comprehensive training programs delivered in six languages for 2,340 employees across all facilities, established a global business process owner model, and executed change management initiatives to address cultural resistance.`}
      impact={`The unified cloud ERP platform transformed the manufacturer's operational capabilities and competitive position. Order processing time dropped from 18 days to 8.6 days—a 52% improvement—as real-time inventory visibility eliminated material shortages and enabled more efficient production scheduling. On-time delivery rates improved from 68% to 96%, with customer satisfaction scores increasing by 28 points.

Inventory carrying costs decreased by $4.7 million annually as the company balanced stock levels across facilities. Centralized procurement leveraging global scale saved an additional $3.2 million annually. Combined with reduced IT maintenance costs, total annual savings exceeded $6.2 million. Integration of newly acquired facilities—previously a 12-18 month ordeal—now completed in 8-12 weeks using standardized migration playbooks. The manufacturer completed three acquisitions in the two years following ERP modernization, growing revenue by 34%.`}
      metrics={[
        { value: "52%", label: "Faster order processing" },
        { value: "$6.2M", label: "Annual cost savings" },
        { value: "96%", label: "On-time delivery rate" }
      ]}
      tags={["Manufacturing", "ERP", "Legacy Modernization", "Technology"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}

export default ManufacturingErpModernization;
