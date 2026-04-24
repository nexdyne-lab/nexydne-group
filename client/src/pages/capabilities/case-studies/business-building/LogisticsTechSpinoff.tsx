import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function LogisticsTechSpinoff() {
  return (
    <CaseStudyTemplate
      client="Last-Mile Logistics Firm"
      industry="Logistics · Business Building"
      title="Logistics Company Builds Technology Spin-Off"
      subtitle="How a logistics firm commercialized their internal route optimization technology into a standalone software company serving the broader market."
      heroImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80"
      challenge={`The internal technology was tightly coupled with company operations. Significant investment would be needed to create a commercial product. The company lacked software sales and support capabilities. Potential customers were also competitors. The leadership needed to balance spin-off investment with core business focus.

A 160-employee logistics firm specializing in last-mile delivery had built proprietary route optimization software over 10 years. The technology provided significant competitive advantage, and leadership recognized its potential value in serving the broader market. The core tension: the very qualities that made the software powerful for internal use—deep integration with proprietary operations data and workflows—made it difficult to package for external sale, and monetizing the technology meant in some cases selling to direct competitors.`}
      solution={`NEXDYNE designed a spin-off structure that balanced multiple objectives: a separate entity with appropriate governance, licensing arrangements for the parent company's continued use, equity structures incentivizing the spin-off team, and service agreements leveraging parent company expertise.

The internal software was rebuilt for commercial-grade multi-tenant SaaS delivery, with configuration capabilities for different customer needs, integration APIs for common logistics systems, and documentation and training materials. A go-to-market team was assembled with logistics software sales and customer success experience, supported by marketing that demonstrated measurable efficiency gains. Competitive dynamics were navigated by identifying non-competing segments for initial focus and creating value propositions emphasizing mutual benefit for customers who were also potential competitors.`}
      impact={`The spin-off achieved a $12 million valuation within two years of launch, with 18 enterprise clients generating $2.4 million in ARR. Customers using the platform realized an average 35% efficiency gain in their own routing operations, driving strong retention and expansion.

The parent company retained full access to the technology through the licensing arrangement while generating venture upside through its equity stake in the spin-off. The spin-off team, freed from the constraints of operating within a logistics company, moved faster on product development and commercial expansion than would have been possible as an internal initiative.`}
      metrics={[
        { value: "$12M", label: "Spin-off valuation" },
        { value: "18", label: "Enterprise clients" },
        { value: "$2.4M", label: "ARR" },
        { value: "35%", label: "Efficiency gain for clients" }
      ]}
      tags={["Logistics", "Software", "Business Building", "Technology"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}
