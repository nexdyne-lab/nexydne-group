import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Star, Users, TrendingUp, DollarSign, Target, Heart, Sparkles, Gift } from "lucide-react";

export default function RetailLoyaltyTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Loyalty Program Transformation | Retail Case Study"
      seoDescription="How a retailer increased member spend by 45% through AI-powered personalization and gamified loyalty program redesign."
      canonical="/cases/retail-loyalty-transformation"
      industry="Retail"
      industryLink="/industries/retail"
      title="Retailer Transforms Loyalty Program, Increases Member Spend 45%"
      subtitle="How AI-powered personalization and gamified engagement turned a stagnant points program into a competitive advantage."
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
      metrics={[
        { value: "45%", label: "Higher Member Spend" },
        { value: "3.2x", label: "Engagement Rate" },
        { value: "28%", label: "Member Growth" },
        { value: "$85M", label: "Incremental Revenue" }
      ]}
      clientContextTitle="A Loyalty Program That Wasn't Earning Loyalty"
      clientContextIntro="A national retailer's loyalty program had 15 million members—but engagement was declining. Only 30% of members were active, redemption rates were falling, and the program had become a discount mechanism rather than a relationship builder. Competitors were launching innovative programs that made theirs feel dated."
      clientContextBody="The program offered generic points-for-purchases with limited personalization. Members received the same offers regardless of preferences or behavior. The mobile app was transactional—check points, find coupons—with no emotional connection. The retailer was spending $200M annually on a program that wasn't driving incremental behavior."
      clientProfile={{
        industry: "Retail",
        companySize: "15M Loyalty Members",
        projectDuration: "12 Months",
        additionalInfo: "30% Active Members",
        additionalLabel: "Starting Engagement"
      }}
      challengeTitle="Points Without Purpose"
      challenges={[
        {
          icon: Users,
          title: "Low Engagement",
          description: "Only 30% of members active—70% enrolled but not engaging with the program."
        },
        {
          icon: Target,
          title: "Generic Offers",
          description: "Same promotions to all members regardless of preferences—low relevance, low response."
        },
        {
          icon: TrendingUp,
          title: "Declining Redemption",
          description: "Points redemption falling 8% annually—members not seeing value in earning."
        },
        {
          icon: DollarSign,
          title: "ROI Questions",
          description: "$200M annual program cost with unclear incremental revenue attribution."
        }
      ]}
      approachTitle="From Transactions to Relationships"
      approachIntro="NexDyne redesigned the loyalty program from the ground up: AI-powered personalization, gamified engagement mechanics, and emotional rewards that created genuine connection—not just discounts."
      steps={[
        {
          step: "01",
          title: "Member Segmentation",
          description: "Built ML models that segmented members by behavior, preferences, and potential value. Identified 12 distinct segments with different motivations—some driven by savings, others by exclusivity, others by experiences."
        },
        {
          step: "02",
          title: "Personalized Rewards",
          description: "Created a dynamic rewards catalog personalized to each member. AI recommended rewards based on purchase history, browsing behavior, and segment preferences. Members saw offers relevant to their lifestyle, not generic discounts."
        },
        {
          step: "03",
          title: "Gamified Engagement",
          description: "Introduced challenges, streaks, and surprise rewards that made earning fun. Members could complete missions for bonus points, unlock exclusive tiers, and earn badges. Engagement became a game, not a transaction."
        },
        {
          step: "04",
          title: "Emotional Rewards",
          description: "Added experiential rewards beyond discounts: early access to products, exclusive events, charity donations, and personalized surprises. Created emotional connection that transcended transactional loyalty."
        }
      ]}
      resultsTitle="Loyalty That Drives Business"
      results={[
        {
          icon: DollarSign,
          value: "45%",
          label: "Higher member spend",
          detail: "Active members spend 45% more than non-members"
        },
        {
          icon: Sparkles,
          value: "3.2x",
          label: "Engagement rate",
          detail: "Active member rate increased from 30% to 65%"
        },
        {
          icon: Users,
          value: "28%",
          label: "Member growth",
          detail: "New enrollments up 28% year-over-year"
        },
        {
          icon: Heart,
          value: "72",
          label: "NPS score",
          detail: "Up from 34—members now advocates"
        }
      ]}
      quote="We stopped thinking about loyalty as a discount program and started thinking about it as a relationship. The personalization makes members feel known. The gamification makes it fun. The experiential rewards create memories. Our members don't just shop with us—they love us."
      quoteAuthor="Jennifer Walsh"
      quoteRole="VP of Customer Experience"
      relatedStudies={[
        {
          title: "Digital Transformation for Fashion Retailer",
          metric: "85%",
          label: "e-commerce growth",
          link: "/cases/fashion-retail-digital-transformation",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
        },
        {
          title: "AI Demand Forecasting for Grocery Chain",
          metric: "35%",
          label: "reduction in waste",
          link: "/cases/grocery-demand-forecasting",
          image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Your Loyalty Program?"
      ctaDescription="Let's discuss how personalization and engagement can drive member value."
    />
  );
}
