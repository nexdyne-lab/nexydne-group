import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Search, PhoneCall, Timer, Boxes, Sparkles, UserCog, ShoppingCart, TrendingUp } from "lucide-react";

export function LogisticsProductAccess() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Enabling 3.2x Faster Product Access With Personalized Search | Logistics Case Study"
      seoDescription="An industrial distributor's 180,000-SKU catalog overwhelmed B2B buyers, with 42% of orders needing rep help. AI search and personalization drove 3.2x faster discovery and $12M in revenue."
      canonical="/cases/logistics-product-access"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How an Industrial Distributor Enabled 3.2x Faster Product Access"
      subtitle="A national industrial-supply distributor deployed AI-powered search, merchandising, and personalization — helping B2B buyers find the right products 3.2x faster, driving 68% higher search conversion and $12M in revenue."
      heroImage="/images/cases/logistics-product-access-hero.jpg"
      metrics={[
        { value: "3.2x", label: "Faster Product Discovery" },
        { value: "68%", label: "Higher Search Conversion" },
        { value: "41%", label: "Larger Average Order" },
        { value: "$12M", label: "Incremental Revenue" }
      ]}
      clientContextTitle="A Catalog Too Big to Search"
      clientContextIntro="A national industrial-supply distributor with 180,000+ SKUs serving construction, manufacturing, and facilities customers faced a critical e-commerce problem: its vast catalog overwhelmed customers. Generic keyword search returned hundreds of irrelevant results, forcing buyers to filter through pages or call sales reps."
      clientContextBody="The distributor's B2B customers — procurement managers, maintenance supervisors, and contractors — needed to find specific products fast during time-sensitive projects. Poor search relevance and no personalized recommendations meant buyers abandoned searches or lost time navigating the catalog, often buying from competitors instead. 42% of orders required sales-rep assistance because customers couldn't self-serve."
      clientProfile={{
        industry: "Industrial Supply Distributor",
        companySize: "180,000+ SKUs",
        projectDuration: "4-Phase Rollout",
        additionalInfo: "Tweakwise",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Buyers Couldn't Find Products"
      challenges={[
        {
          icon: Search,
          title: "Irrelevant search results",
          description: "Generic keyword search returned hundreds of unranked results across a 180,000-SKU catalog."
        },
        {
          icon: PhoneCall,
          title: "42% of orders needed a rep",
          description: "Buyers who couldn't self-serve called sales reps, driving up support cost and slowing orders."
        },
        {
          icon: Timer,
          title: "Lost time on urgent jobs",
          description: "Procurement and maintenance buyers needed specific parts fast during time-sensitive projects."
        },
        {
          icon: Boxes,
          title: "No personalization",
          description: "Every buyer saw the same results regardless of role, history, or purchasing pattern."
        }
      ]}
      approachTitle="AI Search, Personalization, and Merchandising"
      approachIntro="NEXDYNE implemented Tweakwise's AI-powered search, merchandising, and personalization across four phases — turning an overwhelming catalog into fast, role-aware self-service."
      steps={[
        {
          step: "01",
          title: "Understand the query",
          description: "Semantic search handled natural language, synonyms, and industry terminology, learning from clicks and purchases to rank relevance."
        },
        {
          step: "02",
          title: "Personalize by role",
          description: "Behavioral personalization surfaced bulk pricing for procurement managers and technical specs for maintenance supervisors."
        },
        {
          step: "03",
          title: "Recommend complements",
          description: "\"Frequently bought together\" and cart recommendations surfaced complementary products from real purchase patterns."
        },
        {
          step: "04",
          title: "Automate merchandising",
          description: "Configurable rules promoted high-margin products, cleared excess inventory, and featured new arrivals, tuned by A/B testing."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Sparkles,
          value: "2.6 min",
          label: "Search to add-to-cart",
          detail: "Down from 8.4 minutes, with zero-result searches from 18% to 2%"
        },
        {
          icon: ShoppingCart,
          value: "87%",
          label: "Self-service orders",
          detail: "Up from 58%, cutting sales-support cost $1.8M a year"
        },
        {
          icon: TrendingUp,
          value: "$12M",
          label: "Incremental revenue",
          detail: "With average order value up 41% and satisfaction from 3.2 to 4.6"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Unifying 30+ Regional Brands With AI Optimization",
          metric: "$55M",
          label: "operational savings",
          link: "/cases/logistics-brand-consolidation",
          image: "/images/cases/logistics-brand-consolidation-hero.jpg"
        },
        {
          title: "Scaling E-Commerce Revenue 40% With AI Personalization",
          metric: "40%",
          label: "revenue growth",
          link: "/cases/global-retailer-ecommerce",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to make your catalog searchable?"
      ctaDescription="Let's talk about what AI search and personalization could do for your B2B conversion."
    />
  );
}

export default LogisticsProductAccess;
