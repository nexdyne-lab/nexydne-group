import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, DollarSign, BarChart3, TrendingUp, CheckCircle } from "lucide-react";

export default function FinancePersonalizationStrategyReroute() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Personalization Strategy Reroute Lifts Product Attach 22% | Consumer Finance Case Study"
      seoDescription="A consumer-finance app was personalizing email subject lines and a homepage hero — not where customers decided. Refocusing on three in-app moments lifted product attach 22% on a smaller tech footprint."
      canonical="/cases/finance-personalization-strategy-reroute"
      industry="Consumer Finance"
      industryLink="/industries/financial-services"
      title="How a Consumer-Finance App Lifted Product Attach 22% by Personalizing the Right Moments"
      subtitle="The personalization budget was going into email subject lines and a homepage banner — neither of which was where customers actually made decisions. Moving it to three in-app moments changed the outcome."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "22%", label: "Higher Product Attach" },
        { value: "3", label: "In-App Moments" },
        { value: "Smaller", label: "MarTech Footprint" },
        { value: "2 Qtrs", label: "To the Lift" }
      ]}
      clientContextTitle="Personalizing Everywhere Except Where It Mattered"
      clientContextIntro="A consumer-finance app had invested in personalization and pointed almost all of it at two surfaces: email subject lines and a personalized homepage hero. Both were easy to personalize and highly visible. Neither was where customers actually decided whether to take on a new product."
      clientContextBody="The decisions that drove product attach happened inside the app, in a handful of specific moments — reviewing a balance, completing a transaction, hitting a savings milestone. But the personalization strategy had grown up around the marketing channels the team already controlled, not around where customer intent was highest. The result was a busy, expensive program that touched customers constantly and moved the business very little. Leadership wanted the strategy rebuilt around where decisions were actually made, without simply spending more."
      clientProfile={{
        industry: "Consumer Finance App",
        companySize: "~$260M Annual Revenue",
        projectDuration: "4 Months",
        additionalInfo: "Several Million App Users",
        additionalLabel: "Active Base"
      }}
      challengeTitle="Why a Busy Program Moved So Little"
      challenges={[
        { icon: Target, title: "Personalizing the Visible, Not the Decisive", description: "Effort concentrated on email subject lines and a homepage hero because they were easy to personalize, not because they drove decisions." },
        { icon: TrendingDown, title: "Missing the Moments of Intent", description: "The moments where customers actually decided on new products lived inside the app and went untouched." },
        { icon: DollarSign, title: "Spend Without Return", description: "A constant, costly stream of personalization produced little movement in product attach." },
        { icon: BarChart3, title: "Strategy Shaped by Channels", description: "The program was built around the marketing surfaces the team controlled rather than around customer intent." }
      ]}
      approachTitle="Reallocate to Three Decisive Moments"
      approachIntro="We rebuilt the personalization strategy around three high-stakes in-app moments where customers actually decided, and reallocated the existing budget against them — improving the outcome on a smaller marketing-technology footprint rather than a larger one."
      steps={[
        { step: "01", title: "Finding Where Decisions Happened", description: "We analyzed behavior to identify the three in-app moments where product decisions were genuinely made, rather than where messaging was easiest to place." },
        { step: "02", title: "Rebuilding the Strategy Around Intent", description: "We refocused the personalization strategy on those moments, defining what each should say and do when customer intent was at its peak." },
        { step: "03", title: "Reallocating the Existing Budget", description: "We moved spend away from low-impact email and homepage personalization and into the three in-app moments, without asking for more budget." },
        { step: "04", title: "Simplifying the Stack", description: "Because the new strategy needed fewer surfaces done well, we retired parts of the marketing-technology footprint the old approach required." }
      ]}
      resultsTitle="More Attach, Less Machinery"
      results={[
        { icon: TrendingUp, value: "22%", label: "Higher product attach", detail: "On the priority cohort within two quarters" },
        { icon: Target, value: "3", label: "In-app moments", detail: "Where decisions were actually made" },
        { icon: CheckCircle, value: "Smaller", label: "MarTech footprint", detail: "Fewer surfaces, done properly" },
        { icon: DollarSign, value: "Flat", label: "Budget", detail: "Reallocated, not increased" }
      ]}
      quote="We had convinced ourselves that personalizing every email and the homepage meant we were doing personalization. We were just doing it where it was easy. When we moved the same budget to the three moments inside the app where people actually decide, attach went up and we were running less machinery, not more."
      quoteAuthor="Head of Growth"
      quoteRole="Consumer-finance app"
      relatedStudies={[
        { title: "How a DTC Retailer Went From One Personalization Release a Month to Nine", metric: "9x", label: "more releases per month", link: "/cases/dtc-personalization-stack-redesign", image: "/images/capabilities/cap-retail-apparel.jpg" },
        { title: "How a Streaming Operator Raised Its Retention Save-Rate by 31%", metric: "31%", label: "higher save-rate", link: "/cases/media-churn-uplift-model", image: "/images/industries/tech-datacenter.jpg" }
      ]}
      ctaTitle="Is your personalization where it's easy or where customers decide?"
      ctaDescription="Let's rebuild your strategy around the moments of real intent, on the budget you already have."
    />
  );
}
