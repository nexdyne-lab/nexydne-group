import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, EyeOff, Swords, Users, Gem, Megaphone, Database, Repeat } from "lucide-react";

export function ManufacturerEcommerce() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="An E-Commerce Launch That Won 15,000 Direct Customers | Manufacturing Case Study"
      seoDescription="A specialty outdoor-equipment maker sold only through retailers, with no consumer data and squeezed margins. A DTC e-commerce launch won 15,000 direct customers in year one at 45% gross margin."
      canonical="/capabilities/growth-marketing-sales/case-studies/manufacturer-ecommerce"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer's E-Commerce Launch Won 15,000 Direct Customers"
      subtitle="A specialty outdoor-equipment maker launched a direct-to-consumer channel to diversify revenue and capture higher margins — winning 15,000 customers in year one at 45% gross margin."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "Days", label: "To Product Feedback" },
        { value: "15K", label: "New Direct Customers" },
        { value: "45%", label: "Gross Margin" },
        { value: "12%", label: "Repeat Purchase Rate" }
      ]}
      clientContextTitle="Squeezed by the Middle"
      clientContextIntro="A 200-employee manufacturer produces specialty outdoor equipment sold through distributors and retailers. It had strong brand recognition but no direct relationship with end consumers — product feedback arrived weeks late through retailer sell-through data."
      clientContextBody="Marketing was filtered through third-party brand representations, and margin was perpetually squeezed by retail intermediaries whose consolidation gave them growing leverage. Competitors were launching DTC channels and building brand loyalty. The company needed to establish e-commerce without alienating existing channel partners."
      clientProfile={{
        industry: "Outdoor Equipment Manufacturer",
        companySize: "200 Employees",
        projectDuration: "DTC Launch",
        additionalInfo: "Channel Parity",
        additionalLabel: "Strategy"
      }}
      challengeTitle="Why Retail-Only Held Them Back"
      challenges={[
        {
          icon: TrendingDown,
          title: "Margins squeezed by retail",
          description: "Retail consolidation gave intermediaries growing leverage over pricing."
        },
        {
          icon: EyeOff,
          title: "No consumer data",
          description: "Feedback arrived weeks late through retailer sell-through, never directly."
        },
        {
          icon: Swords,
          title: "Competitors going DTC",
          description: "Rivals were building direct brand loyalty the company couldn't match."
        },
        {
          icon: Users,
          title: "Channel-conflict risk",
          description: "Any DTC move had to avoid alienating existing distributor and retail partners."
        }
      ]}
      approachTitle="A Complementary DTC Channel"
      approachIntro="NEXDYNE developed a DTC strategy that complemented existing channels — focusing on limited editions, customization, and accessories, with channel-parity pricing and transparent partner communication."
      steps={[
        {
          step: "01",
          title: "Pick the right categories",
          description: "Limited editions, customization, and accessories let DTC thrive while maintaining channel parity on overlapping products."
        },
        {
          step: "02",
          title: "Build for brand experience",
          description: "A modern e-commerce platform integrated with ERP and inventory, plus analytics and personalization."
        },
        {
          step: "03",
          title: "Launch digital marketing",
          description: "SEO, paid search and social, content, and email drove customer acquisition and retention."
        },
        {
          step: "04",
          title: "Stand up fulfillment and loyalty",
          description: "Dedicated consumer fulfillment and service, plus loyalty and subscription programs, lifted retention and directed spend to high-LTV segments."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gem,
          value: "15,000",
          label: "Direct customers in year one",
          detail: "Buying at 45% gross margin — well above wholesale"
        },
        {
          icon: Database,
          value: "Days",
          label: "To product feedback",
          detail: "Down from weeks, guiding catalog and marketing decisions"
        },
        {
          icon: Repeat,
          value: "12%",
          label: "Repeat purchase rate",
          detail: "With no significant retail partner conflict"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Building a Direct-to-Consumer Channel for a Manufacturer",
          metric: "45K",
          label: "direct customers",
          link: "/capabilities/business-building/case-studies/manufacturer-dtc",
          image: "/images/industries/mfg-robot-arm.jpg"
        },
        {
          title: "Scaling E-Commerce Revenue 40% With AI Personalization",
          metric: "40%",
          label: "revenue growth",
          link: "/cases/global-retailer-ecommerce",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to launch a direct channel?"
      ctaDescription="Let's talk about what DTC e-commerce could do for your margins and customer data."
    />
  );
}

export default ManufacturerEcommerce;
