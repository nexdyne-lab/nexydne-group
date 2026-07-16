import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Shuffle, CalendarX, FileSpreadsheet, Database, GitBranch, Send, DollarSign } from "lucide-react";

export function RetailProductContent() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Launching Products 60% Faster With a Content Platform | Retail Case Study"
      seoDescription="A home-goods retailer's product launches took 6 weeks across spreadsheets, drives, and email, with 15% missing launch day. A PIM platform cut launch time to 2.5 weeks and added $2.8M."
      canonical="/cases/retail-product-content"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Retailer Launched Products 60% Faster With a Content Platform"
      subtitle="Automated product-content workflows across 15,000 SKUs, 8 regional websites, and print catalogs cut time-to-market from 6 weeks to 2.5 — generating $2.8M in incremental revenue."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "60%", label: "Faster Launches" },
        { value: "15,000", label: "SKUs Managed" },
        { value: "8", label: "Regional Sites Automated" },
        { value: "$2.8M", label: "Annual Revenue Gain" }
      ]}
      clientContextTitle="Product Content Chaos"
      clientContextIntro="A mid-sized home-goods retailer with 15,000 SKUs across 8 regional websites and quarterly print catalogs struggled with product-content chaos. Product info lived in spreadsheets, images sat on shared drives, and marketing copy hid in email threads."
      clientContextBody="Launching a product took 6 weeks of sequential handoffs across merchandising, photography, copywriting, design, and web teams manually entering everything into each site. Inconsistencies plagued the experience — the same product had different descriptions across regional sites, images didn't match between web and print, and pricing errors slipped through. Seasonal launches were nightmares: the fall catalog meant coordinating 2,000 products at once, and 15% still missed launch day, costing $400K per season."
      clientProfile={{
        industry: "Home-Goods Retailer",
        companySize: "15,000 SKUs",
        projectDuration: "8 Sites + Print",
        additionalInfo: "Contentful PIM",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Launches Took Six Weeks"
      challenges={[
        {
          icon: FileSpreadsheet,
          title: "Content scattered everywhere",
          description: "Product data in spreadsheets, images on drives, and copy in email threads with no single source of truth."
        },
        {
          icon: Clock,
          title: "Sequential six-week handoffs",
          description: "Merchandising, photography, copy, design, and web each waited on the previous team."
        },
        {
          icon: Shuffle,
          title: "Inconsistent across channels",
          description: "The same product had conflicting descriptions, mismatched images, and pricing errors."
        },
        {
          icon: CalendarX,
          title: "15% missed launch day",
          description: "Seasonal launches forced nights and weekends, and still lost $400K a season to unready content."
        }
      ]}
      approachTitle="One Source of Truth, Auto-Published"
      approachIntro="NEXDYNE implemented Contentful as the central PIM — a single source of truth where content creators update once and changes propagate to every channel via API."
      steps={[
        {
          step: "01",
          title: "Model the product data",
          description: "Structured fields for SKU, category, dimensions, materials, care, and regional pricing linked to images, video, and documents."
        },
        {
          step: "02",
          title: "Route launches through required steps",
          description: "Automated workflows moved products through merchandising, photography QA, copy with brand-voice guidelines, and legal review."
        },
        {
          step: "03",
          title: "Publish to web automatically",
          description: "Templates pulled content via API to render responsive, SEO-optimized product pages across all 8 sites."
        },
        {
          step: "04",
          title: "Feed print from the same source",
          description: "InDesign plugins imported product data and images directly, auto-generating catalog layouts with consistent formatting."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: GitBranch,
          value: "2.5 wks",
          label: "Product launch time",
          detail: "Down from 6 weeks, with the fall launch now taking 5 days"
        },
        {
          icon: Send,
          value: "85%",
          label: "Fewer content inquiries",
          detail: "With description-mismatch returns down 40%"
        },
        {
          icon: DollarSign,
          value: "$2.8M",
          label: "Incremental revenue",
          detail: "From two extra seasonal collections a year"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Unlocking 34% Revenue Growth With AI Personalization",
          metric: "34%",
          label: "revenue growth",
          link: "/cases/retail-modernization-personalization",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        },
        {
          title: "Centralizing 2M Media Assets With a DAM Platform",
          metric: "$3.2M",
          label: "annual savings",
          link: "/cases/media-company-dam",
          image: "/images/industries/tech-datacenter.jpg"
        }
      ]}
      ctaTitle="Ready to launch products faster?"
      ctaDescription="Let's talk about what a PIM platform could do for your time-to-market and consistency."
    />
  );
}

export default RetailProductContent;
