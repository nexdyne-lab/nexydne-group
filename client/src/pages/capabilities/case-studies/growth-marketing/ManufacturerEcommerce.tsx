import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function ManufacturerEcommerce() {
  return (
    <CaseStudyTemplate
      client="Specialty Outdoor Equipment Manufacturer"
      industry="Manufacturing · Growth Marketing"
      title="E-commerce Launch Drives $5M New Revenue"
      subtitle="How a manufacturer successfully launched a direct-to-consumer channel to diversify revenue and capture higher margins."
      heroImage="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=80"
      challenge={`Retail consolidation was squeezing margins and limiting growth. The company had no direct consumer data or relationships. Competitors were launching DTC channels and building brand loyalty. The company needed to establish e-commerce without alienating existing channel partners.

A 200-employee manufacturer with $95M in annual revenue produces specialty outdoor equipment sold through distributors and retailers. The company had strong brand recognition but no direct relationship with end consumers—meaning product feedback arrived weeks late through retailer sell-through data, marketing was filtered through third-party brand representations, and margin was perpetually squeezed by retail intermediaries whose consolidation gave them increasing leverage.`}
      solution={`NEXDYNE developed a DTC strategy complementing rather than competing with existing channels, identifying product categories where DTC made sense—limited editions, customization, and accessories—and establishing pricing that maintained channel parity while capturing margin. A communication plan addressed retail partners transparently before launch.

A modern e-commerce platform was implemented designed for brand experience, integrating with existing ERP and inventory systems alongside analytics and personalization capabilities. Digital marketing launched across SEO targeting product and category keywords, paid advertising across search, social, and display channels, content marketing building brand awareness, and email marketing for customer acquisition and retention.

Dedicated fulfillment and customer service capabilities were built for consumer orders, along with returns and exchange processes maintaining customer satisfaction. After launch, loyalty and subscription programs increased retention while customer acquisition cost optimization directed spend to highest-lifetime-value segments.`}
      impact={`The DTC channel generated $5 million in Year 1 revenue from 15,000 new direct customers at 45% gross margin—significantly higher than wholesale distribution margins. Repeat purchase rate reached 12% in the first year as loyalty programs and post-purchase engagement drove return visits.

Direct consumer data became an immediate strategic advantage: product feedback arrived in days rather than weeks, top-performing product attributes informed wholesale catalog decisions, and customer segments identified through DTC analytics guided marketing investment across all channels. The retail partner communication plan succeeded—no significant partner conflicts materialized, and several retailers reported increased sell-through on products that received DTC marketing investment.`}
      metrics={[
        { value: "$5M", label: "Year 1 DTC revenue" },
        { value: "15K", label: "New direct customers" },
        { value: "45%", label: "Gross margin" },
        { value: "12%", label: "Repeat purchase rate" }
      ]}
      tags={["Manufacturing", "E-commerce", "DTC", "Growth"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}
