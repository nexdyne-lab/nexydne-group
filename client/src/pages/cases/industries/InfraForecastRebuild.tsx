import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Target, BarChart3, Clock, TrendingUp, CheckCircle } from "lucide-react";

export default function InfraForecastRebuild() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Forecast Accuracy Improves From 62% to 91% | Software Infrastructure Case Study"
      seoDescription="A software infrastructure operator missed forecast by double digits every quarter until leadership stopped trusting the number. Rebuilding the model on real conversion and stage-aging data moved accuracy from 62% to 91%."
      canonical="/cases/infra-forecast-rebuild"
      industry="Software Infrastructure"
      industryLink="/industries/technology-media-telecom"
      title="How a Software Infrastructure Operator Made Its Forecast Trustworthy Again"
      subtitle="The forecast missed by double digits every quarter until leadership stopped believing the pipeline number entirely. Rebuilding the model on real conversion behavior — and retiring the reports used to argue with it — restored trust."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "62→91%", label: "Forecast Accuracy" },
        { value: "2 Qtrs", label: "To the Improvement" },
        { value: "3", label: "Override Reports Retired" },
        { value: "Locked", label: "Operating Cadence" }
      ]}
      clientContextTitle="A Number No One Believed"
      clientContextIntro="A software infrastructure operator had a forecast that missed by double-digit percentages quarter after quarter, and the organization had responded the way organizations do — by quietly ceasing to trust it. Leadership meetings had devolved into debating whose gut number to believe, because the official forecast had lost all credibility."
      clientContextBody="The forecast was built on optimistic, one-size-fits-all assumptions rather than on how deals actually converted and aged by segment. Because it was unreliable, sales leaders had accumulated a set of side reports they used to override it — which meant there was no single number anyone stood behind, and no cadence that held people to it. The operator did not need a fancier forecasting tool; it needed the model rebuilt on real conversion and stage-aging data, the override reports retired, and an operating rhythm that made the rebuilt forecast the number of record."
      clientProfile={{
        industry: "Software Infrastructure Operator",
        companySize: "1,000 Employees",
        projectDuration: "4 Months",
        additionalInfo: "Multi-Segment Pipeline",
        additionalLabel: "Revenue Forecast"
      }}
      challengeTitle="Why the Forecast Couldn't Be Trusted"
      challenges={[
        { icon: TrendingDown, title: "Double-Digit Misses", description: "The forecast was off by double digits every quarter, destroying its credibility." },
        { icon: Target, title: "One-Size-Fits-All Assumptions", description: "The model ignored how deals actually converted and aged by segment." },
        { icon: BarChart3, title: "Override Reports Everywhere", description: "Sales leaders used side reports to override the forecast, so no single number held." },
        { icon: Clock, title: "No Enforcing Cadence", description: "Without an operating rhythm, nothing held the organization to a forecast of record." }
      ]}
      approachTitle="Rebuild the Model, Lock the Cadence"
      approachIntro="We rebuilt the forecast model on actual conversion rates and stage-aging patterns by segment, retired three reports the team used to override the data, and locked the operating cadence around the new model — moving forecast accuracy from 62 to 91 percent."
      steps={[
        { step: "01", title: "Rebuilding on Real Conversion Data", description: "We rebuilt the forecast on actual conversion rates and stage-aging patterns by segment, replacing optimistic blanket assumptions." },
        { step: "02", title: "Retiring the Override Reports", description: "We eliminated the three side reports the team used to argue with the forecast, so one number became authoritative." },
        { step: "03", title: "Locking the Operating Cadence", description: "We established a disciplined forecasting cadence that made the rebuilt model the number of record everyone worked to." },
        { step: "04", title: "Rebuilding Trust in the Number", description: "As accuracy climbed to 91 percent over two quarters, leadership stopped debating gut numbers and started trusting the forecast." }
      ]}
      resultsTitle="A Forecast Worth Trusting"
      results={[
        { icon: TrendingUp, value: "62→91%", label: "Forecast accuracy", detail: "Within two quarters" },
        { icon: CheckCircle, value: "3", label: "Reports retired", detail: "One authoritative number restored" },
        { icon: Target, value: "By Segment", label: "Real conversion", detail: "Modeled on how deals actually behave" },
        { icon: Clock, value: "Locked", label: "Cadence", detail: "The forecast became the number of record" }
      ]}
      quote="Our forecast was wrong by so much for so long that everyone had their own spreadsheet to argue with it. Rebuilding the model on how our deals actually convert, killing the side reports, and holding a real cadence took us from sixty-two to ninety-one percent accuracy. For the first time in years, the number in the room is the number we trust."
      quoteAuthor="Chief Revenue Officer"
      quoteRole="Software infrastructure operator"
      relatedStudies={[
        { title: "How a Professional Services Firm Cut a 15-Tool RevOps Stack Down to a Single Source of Truth", metric: "9", label: "tools removed", link: "/cases/services-revops-consolidation", image: "/images/capabilities/cap-conference-data.jpg" },
        { title: "How a Subscription Commerce Operator Turned a Stalled CRO Program Into a 28% Conversion Lift", metric: "28%", label: "higher checkout conversion", link: "/cases/subscription-checkout-cro", image: "/images/capabilities/cap-retail-data.jpg" }
      ]}
      ctaTitle="Has your team stopped trusting the forecast?"
      ctaDescription="Let's rebuild the model on real conversion data and lock a cadence that makes it the number of record."
    />
  );
}
