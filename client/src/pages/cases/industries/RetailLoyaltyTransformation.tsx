import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, TrendingUp, DollarSign, Target, Heart, Sparkles } from "lucide-react";

export default function RetailLoyaltyTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Turning a Stale Loyalty Program Into Growth | Retail Case Study"
      seoDescription="A retailer's loyalty program had become an expensive discount habit. Rebuilding it around what each member actually valued lifted member spend 45% and more than doubled active membership."
      canonical="/cases/retail-loyalty-transformation"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Retailer Turned a Stale Loyalty Program Into 45% More Spend"
      subtitle="A familiar points scheme had quietly become an expensive discount habit that changed little about how customers behaved. Rebuilding it around what members actually valued made it a genuine driver of growth."
      heroImage="/images/capabilities/cap-retail-data.jpg"
      metrics={[
        { value: "45%", label: "Higher Member Spend" },
        { value: "3.2x", label: "More Engagement" },
        { value: "28%", label: "Member Growth" },
        { value: "72", label: "Advocacy Score (from 34)" }
      ]}
      clientContextTitle="A Loyalty Program That Wasn't Earning Much Loyalty"
      clientContextIntro="A regional retailer's loyalty program had about 1.5 million members on paper, but only around three in ten were active in any given month. Redemptions were falling year after year, and the scheme had drifted into being little more than a way to hand out discounts — not the relationship with customers it was meant to be. Newer programs from competitors were making it look tired."
      clientContextBody="Every member, whatever they bought or valued, received the same points and the same offers. The app was purely functional — check a balance, find a coupon — with nothing to make anyone want to open it. The retailer was spending heavily on a program that, by its own analysis, was doing little to change what customers actually did. The question leadership put to us was blunt: was the money buying any real loyalty at all, and if not, could the program be rebuilt into something that did?"
      clientProfile={{
        industry: "Retail",
        companySize: "~1.5M Loyalty Members",
        projectDuration: "12 Months",
        additionalInfo: "~30% Active Members",
        additionalLabel: "Starting Engagement"
      }}
      challengeTitle="Points Without Purpose"
      challenges={[
        {
          icon: Users,
          title: "Members in Name Only",
          description: "Only about 30% of members were active in a given month; the rest had signed up and quietly stopped paying attention."
        },
        {
          icon: Target,
          title: "The Same Offer for Everyone",
          description: "Every member saw identical promotions regardless of what they liked or bought, so most offers landed as noise."
        },
        {
          icon: TrendingUp,
          title: "Fading Redemptions",
          description: "Points redemptions were falling around 8% a year — a sign members no longer saw much worth earning."
        },
        {
          icon: DollarSign,
          title: "Spending Without a Return",
          description: "The program was a heavy annual expense, with little clear evidence it changed how members shopped."
        }
      ]}
      approachTitle="From a Discount Scheme to a Relationship"
      approachIntro="We helped the retailer rebuild the program around a simple idea: reward members for the things they personally value, not with the same blanket discount for everyone. The aim was to make membership feel worth having — and worth using."
      steps={[
        {
          step: "01",
          title: "Understanding What Members Actually Want",
          description: "We grouped members by how they shop and what motivates them — some chase savings, others value early access or exclusive experiences — and found around a dozen distinct groups, each better served in a different way than a single offer for all."
        },
        {
          step: "02",
          title: "Rewards That Fit the Member",
          description: "We built a rewards catalogue that adjusted to each member, drawing on what they had bought and browsed, so the offers someone saw reflected their own tastes rather than a lowest-common-denominator coupon."
        },
        {
          step: "03",
          title: "Making Everyday Earning Enjoyable",
          description: "We added light, game-like touches — simple challenges, streaks and occasional surprise rewards — that gave members a reason to come back and made earning feel rewarding rather than routine."
        },
        {
          step: "04",
          title: "Rewards Money Can't Usually Buy",
          description: "Beyond discounts, we introduced experiences members genuinely valued — early access to new ranges, invitations to exclusive events, and the option to direct rewards to a charity they cared about — building a connection that a price cut never could."
        }
      ]}
      resultsTitle="A Program That Finally Pays Its Way"
      results={[
        {
          icon: DollarSign,
          value: "45%",
          label: "Higher member spend",
          detail: "Active members now spend 45% more than non-members"
        },
        {
          icon: Sparkles,
          value: "3.2x",
          label: "More engagement",
          detail: "Active members rose from about 30% to 65%"
        },
        {
          icon: Users,
          value: "28%",
          label: "Membership growth",
          detail: "New sign-ups up 28% year on year"
        },
        {
          icon: Heart,
          value: "72",
          label: "Customer advocacy score",
          detail: "Up from 34 — members now recommend the brand"
        }
      ]}
      quote="We had been running the program as a discount machine and wondering why it wasn't buying us any loyalty. The moment we started rewarding people for what they actually valued — not everyone with the same coupon — members began to feel known. That is when they started spending more, and staying."
      quoteAuthor="Vice President, Customer Experience"
      quoteRole="Regional retailer"
      relatedStudies={[
        {
          title: "Growing a Fashion Retailer's Online Sales by 85%",
          metric: "85%",
          label: "online sales growth",
          link: "/cases/fashion-retail-digital-transformation",
          image: "/images/cases/fashion-retail-digital-transformation-hero.jpg"
        },
        {
          title: "Cutting a Grocer's Fresh-Food Waste by a Third",
          metric: "35%",
          label: "less fresh-food waste",
          link: "/cases/grocery-demand-forecasting",
          image: "/images/cases/grocery-demand-forecasting-hero.jpg"
        }
      ]}
      ctaTitle="Ready to make your loyalty program earn its keep?"
      ctaDescription="Let's talk about rewarding members for what they truly value — and what that could be worth."
    />
  );
}
