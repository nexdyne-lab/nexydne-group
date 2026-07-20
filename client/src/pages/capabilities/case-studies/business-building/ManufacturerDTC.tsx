import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Tag, TrendingDown, EyeOff, Swords, Gem, HeartHandshake, Database, Star } from "lucide-react";

export function ManufacturerDTC() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Building a Direct-to-Consumer Channel for a Manufacturer | Business Building Case Study"
      seoDescription="A premium outdoor-equipment maker sold only through retailers, with no customer data and squeezed margins. A D2C channel won 45,000 direct customers in its first year at 28% higher margins than wholesale."
      canonical="/capabilities/business-building/case-studies/manufacturer-dtc"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Built a Direct-to-Consumer Channel"
      subtitle="A specialty outdoor-equipment maker built a D2C business alongside its B2B channel — winning 45,000 direct customers in year one at 28% higher margins than wholesale, without alienating retail partners."
      heroImage="/images/industries/mfg-robot-arm.jpg"
      metrics={[
        { value: "Year 1", label: "Channel Profitable" },
        { value: "28%", label: "Higher Margins vs. Wholesale" },
        { value: "45K", label: "Direct Customers" },
        { value: "4.8", label: "Customer Rating" }
      ]}
      clientContextTitle="Flying Blind on Customers"
      clientContextIntro="A 200-employee specialty manufacturer producing premium outdoor equipment sold exclusively through retailers and distributors. It had strong brand recognition among enthusiasts but no direct customer relationships — retail partners controlled pricing and the customer experience."
      clientContextBody="Retail consolidation was reducing leverage and squeezing margins, while larger competitors used D2C channel data to make faster product decisions. Without direct relationships, the company was flying blind on true end-user preferences. It needed to build D2C without alienating existing retail partners."
      clientProfile={{
        industry: "Outdoor Equipment Manufacturer",
        companySize: "200 Employees",
        projectDuration: "Channel Parity",
        additionalInfo: "D2C Exclusives",
        additionalLabel: "Strategy"
      }}
      challengeTitle="Why Retail-Only Was Risky"
      challenges={[
        {
          icon: Tag,
          title: "Retailers controlled the experience",
          description: "Partners set pricing and owned the customer experience end to end."
        },
        {
          icon: TrendingDown,
          title: "Squeezed margins",
          description: "Retail consolidation reduced leverage and intensified margin pressure."
        },
        {
          icon: EyeOff,
          title: "No customer data",
          description: "Without direct relationships, the company couldn't see true end-user preferences."
        },
        {
          icon: Swords,
          title: "Competitors going D2C",
          description: "Rivals used direct-channel data to make faster, better product decisions."
        }
      ]}
      approachTitle="D2C That Complements Retail"
      approachIntro="NEXDYNE developed a D2C strategy that complemented rather than competed with retail — D2C-exclusive products, limited editions, and customization where the direct channel could thrive without threatening partnerships."
      steps={[
        {
          step: "01",
          title: "Differentiate the channel",
          description: "Exclusives, limited editions, and customization gave D2C room to grow, with channel-parity pricing on overlapping products."
        },
        {
          step: "02",
          title: "Deliver a premium experience",
          description: "Rich media, product customization, made-to-order manufacturing integration, and enthusiast content set the brand apart."
        },
        {
          step: "03",
          title: "Build the relationship",
          description: "Expert consultation, premium packaging, post-purchase community, and loyalty programs drove repeat purchases."
        },
        {
          step: "04",
          title: "Capture the data",
          description: "A CRM captured direct customer data to inform product development and personalized recommendations, while a proactive plan addressed retailer concerns."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gem,
          value: "45K",
          label: "Direct customers in year one",
          detail: "At 28% higher margins than wholesale, with the channel profitable inside its first year"
        },
        {
          icon: Star,
          value: "4.8/5",
          label: "Customer satisfaction",
          detail: "Delivering customization and community retail couldn't match"
        },
        {
          icon: Database,
          value: "Data",
          label: "As a strategic asset",
          detail: "Informing product decisions faster than sell-through data ever could"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "How a Manufacturer's E-Commerce Launch Won 15,000 Direct Customers",
          metric: "15K",
          label: "direct customers",
          link: "/capabilities/growth-marketing-sales/case-studies/manufacturer-ecommerce",
          image: "/images/industries/mfg-robotics.jpg"
        },
        {
          title: "Launching a B2B E-Commerce Platform That Drives 35% of Revenue",
          metric: "35%",
          label: "of revenue digital",
          link: "/capabilities/business-building/case-studies/ecommerce-platform-launch",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to own your customer relationship?"
      ctaDescription="Let's talk about what a D2C channel could do for your margins and brand data."
    />
  );
}

export default ManufacturerDTC;
