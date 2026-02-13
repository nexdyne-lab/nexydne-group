import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { BarChart3, Target, TrendingUp, Users, Sparkles, Database, Brain, DollarSign } from "lucide-react";

export default function BankCrossSell() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="AI-Powered Cross-Sell Transformation | Financial Services Case Study"
      seoDescription="How a multinational bank achieved $200M increase in cross-sell revenue through unified customer data platform and AI-powered recommendations."
      canonical="/cases/bank-cross-sell"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="Multinational Bank Unlocks $200M in Cross-Sell Revenue"
      subtitle="How a unified customer data platform and AI-powered recommendation engine transformed product attachment rates across 12 million retail banking customers."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
      metrics={[
        { value: "$200M", label: "Revenue Increase" },
        { value: "40%", label: "Higher Attachment Rate" },
        { value: "12M", label: "Customers Analyzed" },
        { value: "3.2x", label: "Campaign ROI" }
      ]}
      clientContextTitle="A Global Bank with Fragmented Customer Intelligence"
      clientContextIntro="A multinational bank with operations across 15 countries served 12 million retail customers through checking, savings, credit cards, mortgages, and investment products. Despite this breadth, the average customer held only 1.8 products—well below the industry benchmark of 2.5."
      clientContextBody="Customer data lived in silos: transaction history in the core banking system, credit card activity in a separate platform, mortgage applications in another. Marketing campaigns were based on basic demographics and product holdings, missing the behavioral signals that indicate purchase intent. The bank knew it was leaving money on the table but couldn't see where."
      clientProfile={{
        industry: "Multinational Banking",
        companySize: "12 Million Retail Customers",
        projectDuration: "18 Months",
        additionalInfo: "15 Countries",
        additionalLabel: "Geographic Reach"
      }}
      challengeTitle="Millions of Customers, Zero Unified View"
      challenges={[
        {
          icon: Database,
          title: "Data Fragmentation",
          description: "Customer data scattered across 7 different systems with no unified identity resolution."
        },
        {
          icon: Target,
          title: "Generic Campaigns",
          description: "Marketing based on demographics and product holdings, missing behavioral purchase signals."
        },
        {
          icon: TrendingUp,
          title: "Low Attachment",
          description: "Average 1.8 products per customer vs. 2.5 industry benchmark—$500M revenue gap."
        },
        {
          icon: Users,
          title: "Timing Blindness",
          description: "No ability to identify life events or moments of intent that drive product decisions."
        }
      ]}
      approachTitle="Building the 360° Customer Brain"
      approachIntro="NexDyne created a unified customer data platform that consolidated all customer touchpoints into a single golden record, then layered AI-powered recommendation engines to identify the right product, for the right customer, at the right moment."
      steps={[
        {
          step: "01",
          title: "Identity Resolution",
          description: "Built a customer data platform that matched records across 7 source systems using probabilistic identity matching. Created a single golden record for each of 12 million customers with complete product, transaction, and interaction history."
        },
        {
          step: "02",
          title: "Behavioral Feature Engineering",
          description: "Engineered 200+ behavioral features from transaction data: spending patterns, savings velocity, payment timing, merchant categories, geographic patterns. These features revealed intent signals invisible in demographic data."
        },
        {
          step: "03",
          title: "Life Event Detection",
          description: "Built ML models to detect life events from transaction patterns: new job (direct deposit changes), new baby (baby store purchases), home purchase intent (furniture shopping + savings increase). These moments drive 60% of financial product decisions."
        },
        {
          step: "04",
          title: "Next-Best-Action Engine",
          description: "Deployed a recommendation engine that scored every customer for every product daily. The engine optimized for customer lifetime value, not just immediate conversion, balancing short-term revenue with long-term relationship health."
        }
      ]}
      resultsTitle="From Data Silos to Revenue Engine"
      results={[
        {
          icon: DollarSign,
          value: "$200M",
          label: "Annual revenue increase",
          detail: "From improved cross-sell and upsell conversion"
        },
        {
          icon: Target,
          value: "40%",
          label: "Higher attachment rate",
          detail: "Products per customer increased from 1.8 to 2.5"
        },
        {
          icon: Sparkles,
          value: "3.2x",
          label: "Campaign ROI improvement",
          detail: "Personalized offers vs. generic campaigns"
        },
        {
          icon: Users,
          value: "25%",
          label: "Reduction in churn",
          detail: "Proactive retention offers at risk moments"
        }
      ]}
      quote="For the first time, we can see our customers as complete human beings, not fragmented account holders. When someone's transaction patterns suggest they're about to buy a home, we can offer a mortgage before they start shopping. That's not marketing—that's service."
      quoteAuthor="Michael Chen"
      quoteRole="Chief Marketing Officer"
      relatedStudies={[
        {
          title: "AI-Powered Fraud Detection Transformation",
          metric: "73%",
          label: "reduction in fraud losses",
          link: "/cases/financial-fraud-detection",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80"
        },
        {
          title: "Wealth Management Digital Onboarding",
          metric: "60%",
          label: "reduction in onboarding time",
          link: "/cases/wealth-onboarding",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Unlock Your Customer Intelligence?"
      ctaDescription="Let's discuss how unified customer data and AI can transform your cross-sell performance."
    />
  );
}
