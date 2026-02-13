import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function LogisticsTechSpinoff() {
  return (
    <CaseStudyArticle
      industry="Business Building"
      industryHref="/capabilities/business-building"
      title="Logistics Company Builds Technology Spin-Off"
      subtitle="How a logistics firm commercialized their internal route optimization technology into a standalone software company serving the broader market"
      client="A 160-employee logistics firm specializing in last-mile delivery. The company had built proprietary route optimization software over 10 years. The technology provided significant competitive advantage. Leadership recognized potential value in commercializing the technology."
      challenge="The internal technology was tightly coupled with company operations. Significant investment would be needed to create a commercial product. The company lacked software sales and support capabilities. Potential customers were also competitors. The leadership needed to balance spin-off investment with core business focus."
      metrics={[
        { value: "$12M", label: "Spin-Off Valuation" },
        { value: "18", label: "Enterprise Clients" },
        { value: "$2.4M", label: "ARR" },
        { value: "35%", label: "Efficiency Gain" },
      ]}
      relatedCaseStudies={[
        {
          title: "Regional Distributor Launches Digital Marketplace",
          href: "/capabilities/business-building/case-studies/distributor-marketplace",
          industry: "Distribution"
        },
        {
          title: "Manufacturer Creates Direct-to-Consumer Channel",
          href: "/capabilities/business-building/case-studies/manufacturer-dtc",
          industry: "Manufacturing"
        },
        {
          title: "Financial Services Firm Enters Adjacent Market",
          href: "/capabilities/business-building/case-studies/wealth-adjacent",
          industry: "Financial Services"
        }
      ]}
    >
      <h2>Assessing Commercial Potential</h2>
      <p>
        We conducted thorough assessment of the technology's commercial viability. We analyzed the competitive landscape for route optimization software. We evaluated the technology's differentiation and defensibility. We assessed the investment required to create a commercial product. We also identified target customer segments and their willingness to pay.
      </p>

      <h2>Designing the Spin-Off Structure</h2>
      <p>
        We designed a spin-off structure that balanced multiple objectives. We created a separate entity with appropriate governance. We established licensing arrangements for the parent company's continued use. We developed equity structures that incentivized the spin-off team. We also created service agreements that leveraged parent company expertise.
      </p>

      <h2>Building the Commercial Product</h2>
      <p>
        We transformed internal software into a commercial-grade product. We rebuilt the architecture for multi-tenant SaaS delivery. We created configuration capabilities for different customer needs. We built integration APIs for common logistics systems. We also developed documentation and training materials.
      </p>

      <h2>Building the Go-to-Market Team</h2>
      <p>
        We assembled a team with software sales and support capabilities. We recruited sales leadership with logistics software experience. We built customer success capabilities for enterprise clients. We created marketing that demonstrated technology value. We also established partnerships that accelerated market access.
      </p>

      <h2>Navigating Competitive Dynamics</h2>
      <p>
        We developed strategies for selling to potential competitors. We created value propositions that emphasized mutual benefit. We designed pricing that made adoption attractive. We built trust through transparent data practices. We also identified non-competing segments for initial focus.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Internal technology often has broader commercial value</li>
        <li>Spin-off structure must balance parent and new entity interests</li>
        <li>Commercial product requires significant investment beyond internal tool</li>
        <li>Competitive dynamics require careful go-to-market strategy</li>
      </ul>
    </CaseStudyArticle>
  );
}
