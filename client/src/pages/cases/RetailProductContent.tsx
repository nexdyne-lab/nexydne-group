import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function RetailProductContent() {
  return (
    <CaseStudyTemplate
      client="Mid-Sized Home Goods Retailer"
      industry="Retail · Content Management"
      title="Retailer Launches Products 60% Faster with Content Platform"
      subtitle="Automated product content workflows across 15,000 SKUs, 8 regional websites, and print catalogs, reducing time-to-market from 6 weeks to 2.5 weeks."
      heroImage="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1600&q=80"
      challenge={`A mid-sized home goods retailer with 15,000 SKUs across 8 regional websites and quarterly print catalogs struggled with product content chaos. Product information lived in spreadsheets maintained by merchandising teams, images were scattered across shared drives, and marketing copy existed in email threads. When launching a new product, the process took 6 weeks: merchandising created the spreadsheet entry, photography shot product images, copywriters drafted descriptions, designers laid out catalog pages, and web teams manually entered everything into each regional site.

Content inconsistencies plagued customer experience. The same product had different descriptions on different regional sites, images didn't match across web and print, and pricing errors occurred when updates didn't propagate everywhere. Customer service fielded 200+ inquiries per month about conflicting product information, and returns spiked when products didn't match their online descriptions.

Seasonal launches were nightmares. The fall catalog required coordinating 2,000 new products across all channels simultaneously. Teams worked nights and weekends for 3 weeks before launch, manually copying content between systems. Despite the effort, 15% of products missed launch day because content wasn't ready, costing $400K in lost revenue per season.`}
      solution={`NEXDYNE implemented Contentful as the centralized product information management (PIM) system, creating a single source of truth for all product content. We modeled product data with structured fields: SKU, name, category, dimensions, materials, care instructions, pricing by region, and relationships to images, videos, and documents. Content creators update once in Contentful, and changes propagate to all channels automatically via API.

We built automated workflows that route new products through required steps: merchandising creates the product record, photography uploads images with automatic quality checks (resolution, color profile, file format), copywriters draft descriptions with built-in brand voice guidelines, and legal reviews claims before publication. Each stakeholder sees only their tasks in a dashboard, and the system tracks completion status across all products in the launch pipeline.

Multi-channel publishing happens automatically. Web teams configure templates that pull product content from Contentful via API, rendering responsive product pages with SEO-optimized metadata. Print designers use InDesign plugins that import product data and images directly from Contentful, auto-generating catalog layouts with consistent formatting. When merchandising updates a price or description, changes appear on all 8 websites and in the print layout within minutes.`}
      impact={`Product launch time dropped from 6 weeks to 2.5 weeks—a 60% improvement. The fall seasonal launch that previously took 3 weeks of manual work now completes in 5 days with zero missed products. Teams no longer work nights and weekends before launches, and the merchandising team can plan more frequent product drops to respond to market trends faster.

Content consistency improved dramatically across all 8 regional websites and print catalogs, eliminating customer confusion. Customer service inquiries about conflicting product details dropped 85%, and product returns due to description mismatches fell 40%. Customer satisfaction scores increased 12 points.

Revenue impact was significant: faster time-to-market allowed the retailer to launch 2 additional seasonal collections per year, generating $2.8M in incremental revenue. Operational savings totaled $600K annually through reduced manual content entry labor, eliminated overtime during launches, and decreased returns from inaccurate content. The content platform paid for itself in 8 months.`}
      metrics={[
        { value: "60%", label: "Faster product launches" },
        { value: "15,000", label: "SKUs managed" },
        { value: "8", label: "Regional websites automated" },
        { value: "$2.8M", label: "Annual revenue gain" }
      ]}
      tags={["Retail", "Content Management", "PIM", "Operations"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}

export default RetailProductContent;
