import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function EcommercePlatformLaunch() {
  return (
    <CaseStudyTemplate
      client="Industrial Distributor"
      industry="Industrial Distribution · Business Building"
      title="Industrial Distributor Launches B2B E-commerce Platform"
      subtitle="How a $200M industrial distributor built and scaled a digital commerce platform that now drives 35% of revenue."
      heroImage="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80"
      challenge={`A regional industrial distributor with $200M in annual revenue faced an existential threat. Amazon Business and other digital-first competitors were capturing market share, particularly among younger procurement professionals who expected consumer-grade digital experiences.

The company's existing digital presence was limited to a basic product catalog with no e-commerce capability. Orders came through phone calls, faxes, and emails—processes that were slow, error-prone, and increasingly out of step with customer expectations. Leadership recognized the need to build a digital commerce capability but faced significant constraints: no internal digital expertise, limited IT infrastructure, and an inability to undertake the multi-year, multi-million-dollar implementations typical of enterprise e-commerce projects.`}
      solution={`NEXDYNE designed a venture-style approach to deliver a functional e-commerce platform in months rather than years. Intensive customer research with 45 customers across segments revealed three priorities above all: accurate real-time inventory visibility, simplified reordering of frequently purchased items, and integration with procurement systems.

The MVP was built by a small cross-functional team in 20 weeks: real-time inventory and pricing from the ERP system, customer-specific pricing based on negotiated contracts, simplified reordering with saved lists and order history, and basic search and filtering across the 50,000+ SKU catalog. The platform launched to a pilot group of 50 digitally sophisticated customers who provided feedback before broader rollout.

Following successful pilot results, the platform scaled to all customers with additions informed by usage data: mobile-optimized experience, punchout catalog integration for enterprise customers, automated reorder suggestions based on purchase history, and enhanced search with synonym handling and typo tolerance. Change management investment focused on converting the sales team from skeptics to advocates by demonstrating how digital enhanced rather than replaced customer relationships.`}
      impact={`Within 18 months of launch, digital channels drove 35% of total revenue—$28 million in annual sales flowing through the platform. Digital customers showed 2.4x higher average order values than traditional channels, as the platform enabled easy discovery of complementary products and simplified large, complex orders.

The platform enabled the company to serve customers outside their traditional geographic footprint, adding 340 new accounts in the first year. Order processing costs dropped 60% for digital orders compared to phone and fax orders. Customer service calls related to order status decreased 75%. The company became a digital leader in their regional market, winning business from competitors who had been slower to digitize. The e-commerce platform reached profitability at 18 months, ahead of the 24-month projection.`}
      metrics={[
        { value: "35%", label: "Revenue through digital" },
        { value: "$28M", label: "New annual revenue" },
        { value: "2.4x", label: "Average order value" },
        { value: "18mo", label: "Time to profitability" }
      ]}
      tags={["Industrial Distribution", "E-commerce", "Business Building", "Technology"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
