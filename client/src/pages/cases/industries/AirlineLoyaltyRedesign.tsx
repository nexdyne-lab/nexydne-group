import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Plane, Star, Users, DollarSign, Heart, Target, TrendingUp, Gift } from "lucide-react";

export default function AirlineLoyaltyRedesign() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Loyalty Program Redesign | Airline Case Study"
      seoDescription="How an airline increased loyalty program engagement by 40% through personalized rewards, gamification, and emotional benefits."
      canonical="/cases/airline-loyalty-redesign"
      industry="Travel & Hospitality"
      industryLink="/industries/travel-hospitality"
      title="Airline Transforms Loyalty Program, Increases Engagement 40%"
      subtitle="How personalized rewards, gamified earning, and emotional benefits turned a stagnant mileage program into a competitive advantage."
      heroImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
      metrics={[
        { value: "40%", label: "Higher Engagement" },
        { value: "25%", label: "More Redemptions" },
        { value: "$200M", label: "Revenue Impact" },
        { value: "3.5x", label: "Member Spend" }
      ]}
      clientContextTitle="An Airline with a Stale Loyalty Program"
      clientContextIntro="A major airline's frequent flyer program had 50 million members—but engagement was declining. Only 20% of members were active. Miles sat unredeemed as members questioned their value. Competitors were launching innovative programs while this airline's felt stuck in the 1990s."
      clientContextBody="The program was purely transactional: fly miles, earn miles, redeem for flights. No personalization, no emotional connection, no differentiation. High-value members received the same generic communications as occasional flyers. The program was a cost center, not a competitive advantage."
      clientProfile={{
        industry: "Commercial Aviation",
        companySize: "50M Loyalty Members",
        projectDuration: "15 Months",
        additionalInfo: "20% Active Members",
        additionalLabel: "Starting Engagement"
      }}
      challengeTitle="Miles Without Meaning"
      challenges={[
        {
          icon: Users,
          title: "Low Engagement",
          description: "Only 20% of 50M members active—80% enrolled but not engaging."
        },
        {
          icon: Gift,
          title: "Unredeemed Miles",
          description: "$2B in unredeemed miles on books—members not seeing value in earning."
        },
        {
          icon: Target,
          title: "No Personalization",
          description: "Same offers to all members regardless of preferences or value—low relevance."
        },
        {
          icon: Heart,
          title: "No Emotional Connection",
          description: "Purely transactional program—no differentiation from competitors."
        }
      ]}
      approachTitle="Loyalty Reimagined"
      approachIntro="NexDyne redesigned the loyalty program from the ground up: personalized rewards, gamified engagement, emotional benefits, and partner ecosystem that created genuine connection—not just transactions."
      steps={[
        {
          step: "01",
          title: "Member Segmentation",
          description: "Built ML models that segmented members by behavior, preferences, and potential value. Identified distinct segments: road warriors, vacation travelers, aspirational flyers—each with different motivations."
        },
        {
          step: "02",
          title: "Personalized Rewards",
          description: "Created a dynamic rewards catalog personalized to each member. AI recommended rewards based on travel patterns, redemption history, and segment preferences. Every member saw relevant options."
        },
        {
          step: "03",
          title: "Gamified Earning",
          description: "Introduced challenges, bonuses, and surprise rewards that made earning engaging. Members could complete missions for bonus miles, unlock status faster, and earn badges. Loyalty became a game."
        },
        {
          step: "04",
          title: "Emotional Benefits",
          description: "Added experiential rewards beyond flights: exclusive events, partner experiences, charity donations, and surprise upgrades. Created emotional moments that members remembered and shared."
        }
      ]}
      resultsTitle="Loyalty That Inspires"
      results={[
        {
          icon: TrendingUp,
          value: "40%",
          label: "Increase in engagement",
          detail: "Active member rate from 20% to 45%"
        },
        {
          icon: Gift,
          value: "25%",
          label: "More redemptions",
          detail: "Members using miles, seeing value"
        },
        {
          icon: DollarSign,
          value: "$200M",
          label: "Revenue impact",
          detail: "From increased member spend and retention"
        },
        {
          icon: Star,
          value: "3.5x",
          label: "Member spend vs. non-members",
          detail: "Loyalty driving real behavior change"
        }
      ]}
      quote="We transformed loyalty from a points program to a relationship. Our members don't just earn miles—they engage, they play, they feel special. The personalization makes every interaction relevant. The experiences create memories. Our members aren't just loyal—they're advocates."
      quoteAuthor="Sarah Thompson"
      quoteRole="VP of Loyalty & Partnerships"
      relatedStudies={[
        {
          title: "AI Revenue Management for Hotels",
          metric: "18%",
          label: "RevPAR increase",
          link: "/cases/hotel-revenue-management",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
        },
        {
          title: "Guest Experience Transformation",
          metric: "25pts",
          label: "NPS improvement",
          link: "/cases/hotel-guest-experience",
          image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Your Loyalty Program?"
      ctaDescription="Let's discuss how personalization can drive member engagement."
    />
  );
}
