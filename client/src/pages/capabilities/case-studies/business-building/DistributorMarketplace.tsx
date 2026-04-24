import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function DistributorMarketplace() {
  return (
    <CaseStudyTemplate
      client="Industrial Supplies Distributor"
      industry="Distribution · Business Building"
      title="Regional Distributor Launches Digital Marketplace"
      subtitle="How an industrial supplies distributor created a new revenue stream by building a B2B marketplace connecting buyers with specialized vendors."
      heroImage="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80"
      challenge={`Traditional distribution margins were declining as customers gained price transparency. The company's product catalog couldn't match larger competitors. Customer acquisition costs were rising. The leadership team needed a differentiated strategy that leveraged existing relationships while creating new value.

A 150-employee industrial supplies distributor with $45M annual revenue serves manufacturing and construction customers across the Midwest. Analysis revealed that customers frequently needed specialized products outside the existing catalog and were spending significant time finding and vetting new suppliers. The distributor had relationships with hundreds of specialty vendors who struggled to reach mid-size buyers—a two-sided market inefficiency that created the foundation for a curated marketplace opportunity.`}
      solution={`NEXDYNE designed a marketplace model that leveraged the distributor's strengths: curated vendors vetted by the distributor's procurement team, consolidated invoicing and credit terms for buyers, access to qualified buyers without direct sales investment for sellers, and transaction fee revenue for the distributor while strengthening customer relationships.

NEXDYNE built a B2B marketplace platform tailored to industrial supplies with robust search and filtering for technical specifications, integration with the distributor's existing ERP for seamless operations, seller onboarding tools simplifying catalog management, and buyer tools for RFQ management and order tracking.

Seller recruitment targeted specialty vendors who complemented rather than competed with existing inventory, emphasizing access to qualified buyers and providing onboarding support to help sellers succeed. Buyer adoption was driven through targeted outreach to existing customers with frequent specialty purchasing needs, early adoption incentives, integration into existing customer portals, and sales team training on marketplace benefits.`}
      impact={`In its first year, the marketplace generated $4.2 million in new revenue from 340 marketplace sellers serving 2,800 active buyers at an 18% take rate. The curated model—with vendors vetted by the distributor's procurement team—differentiated the marketplace from open platforms and maintained the distributor's reputation for quality.

The marketplace transformed the company's competitive position. Rather than competing on price against larger distributors with broader catalogs, the company now offered a solution that no competitor could replicate: access to a curated network of specialty vendors, combined with the consolidated invoicing, credit terms, and relationship trust that the distributor had built over decades. Existing customer relationships strengthened as the marketplace solved a genuine pain point, and new buyer accounts joined the platform seeking access to the curated vendor network.`}
      metrics={[
        { value: "$4.2M", label: "New revenue (Year 1)" },
        { value: "340", label: "Marketplace sellers" },
        { value: "2,800", label: "Active buyers" },
        { value: "18%", label: "Take rate" }
      ]}
      tags={["Distribution", "Marketplace", "Business Building", "Technology"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}
