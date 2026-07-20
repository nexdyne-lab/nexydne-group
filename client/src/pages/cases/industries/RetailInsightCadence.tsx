import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, Clock, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function RetailInsightCadence() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Insight Cadence Shift Recovers 14 Weeks of Analyst Time | Customer Insights Case Study"
      seoDescription="A multi-channel retailer produced twelve dashboards and a quarterly readout that operators ignored. Rebuilding around weekly operator briefs and monthly readouts recovered 14 weeks of analyst time and tripled brief engagement."
      canonical="/cases/retail-insight-cadence"
      industry="Multi-Channel Retail"
      industryLink="/industries/retail"
      title="How a Retailer Recovered 14 Weeks of Analyst Time by Fixing Its Insight Cadence"
      subtitle="Twelve dashboards and a quarterly readout produced a lot of work and almost no engagement. Switching to weekly operator briefs and monthly readouts changed what got used — and freed the team."
      heroImage="/images/cases/retail-insight-cadence-hero.jpg"
      metrics={[
        { value: "3x", label: "Higher Engagement" },
        { value: "14 Wks", label: "Analyst Time Recovered" },
        { value: "12 → 4", label: "Dashboards" },
        { value: "Weekly", label: "Operator Briefs" }
      ]}
      clientContextTitle="A Lot of Output, Almost No Uptake"
      clientContextIntro="A multi-channel retailer's insight team produced twelve dashboards and one quarterly readout, and the operators who were supposed to act on them ignored almost all of it. The team was busy and the business was uninformed — a frustrating gap that no amount of additional output was closing."
      clientContextBody="The mismatch was one of cadence and audience. Operators making daily merchandising and inventory calls needed timely, relevant nudges, not twelve dashboards to monitor or a quarterly deck that arrived long after the decisions it discussed. Eight of the twelve dashboards were barely opened, yet maintaining them consumed a large share of analyst capacity. The retailer needed to match the rhythm of insight to the rhythm of decisions: frequent, digestible operator briefs for the front line and a monthly readout for executives, retiring the dashboards nobody used."
      clientProfile={{
        industry: "Multi-Channel Retailer",
        companySize: "~$620M Annual Revenue",
        projectDuration: "4 Months",
        additionalInfo: "Insight Function Redesign",
        additionalLabel: "Analytics Cadence"
      }}
      challengeTitle="Why the Insight Went Unused"
      challenges={[
        { icon: Target, title: "Wrong Cadence for Decisions", description: "Daily operators got twelve dashboards and a quarterly deck, not timely nudges." },
        { icon: TrendingDown, title: "Dashboards Barely Opened", description: "Eight of the twelve were rarely used, yet consumed analyst time to maintain." },
        { icon: Clock, title: "Quarterly Readout Too Late", description: "The quarterly deck arrived long after the decisions it discussed." },
        { icon: Users, title: "Operators Ignoring Output", description: "The front line ignored almost all of the team's work." }
      ]}
      approachTitle="Match Cadence to Decisions"
      approachIntro="We rebuilt the function around weekly operator briefs and monthly executive readouts, retiring eight of the twelve dashboards — recovering 14 weeks of analyst time and tripling weekly brief engagement."
      steps={[
        { step: "01", title: "Aligning Rhythm to Decisions", description: "We matched the cadence of insight to how often operators and executives actually decide — weekly and monthly." },
        { step: "02", title: "Launching Weekly Operator Briefs", description: "We introduced frequent, digestible briefs that gave the front line timely, relevant nudges instead of dashboards to monitor." },
        { step: "03", title: "Retiring Unused Dashboards", description: "We retired eight of the twelve dashboards nobody used, freeing the analyst capacity they consumed." },
        { step: "04", title: "Recovering and Redirecting Time", description: "The retired work freed fourteen weeks of analyst time, and weekly brief engagement tripled in the first quarter." }
      ]}
      resultsTitle="Insight That Gets Used"
      results={[
        { icon: TrendingUp, value: "3x", label: "Higher engagement", detail: "On weekly briefs" },
        { icon: Clock, value: "14 Wks", label: "Time recovered", detail: "From retired work" },
        { icon: CheckCircle, value: "12 → 4", label: "Dashboards", detail: "Retired the unused" },
        { icon: Target, value: "Weekly", label: "Operator briefs", detail: "Matched to decisions" }
      ]}
      quote="We were producing twelve dashboards and a quarterly deck, and our operators ignored nearly all of it. Switching to weekly briefs they actually read and a monthly executive readout tripled engagement and gave my analysts back fourteen weeks by retiring the dashboards nobody opened. We stopped producing output and started informing decisions."
      quoteAuthor="Director of Customer Insights"
      quoteRole="Multi-channel retailer"
      relatedStudies={[
        { title: "How a National Retailer Drove a 34% Revenue Lift With AI Personalization", metric: "34%", label: "revenue lift", link: "/cases/retail-personalization", image: "/images/capabilities/cap-retail-apparel.jpg" },
        { title: "How a Financial-Services Firm Cut Churn 28% by Predicting It", metric: "28%", label: "lower churn", link: "/cases/financial-churn-prediction", image: "/images/industries/fin-trader.jpg" }
      ]}
      ctaTitle="Is your insight output going unused?"
      ctaDescription="Let's match the cadence of insight to the rhythm of decisions and free your analysts."
    />
  );
}
