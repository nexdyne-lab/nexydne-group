import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Layers, Megaphone, Timer, Flame, Grid3x3, Calculator, Scissors, TrendingUp } from "lucide-react";

export function InsuranceAnalyticsBacklog() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Prioritizing a 47-Project Analytics Backlog in 6 Weeks | Insurance Case Study"
      seoDescription="A P&C carrier's 8-person analytics team faced a 47-project backlog with no way to prioritize. A 6-week data-strategy sprint killed 23 projects and built a roadmap around the 8 highest-ROI initiatives."
      canonical="/cases/insurance-analytics-backlog"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How an Insurance Carrier Prioritized a 47-Project Analytics Backlog in 6 Weeks"
      subtitle="A data-strategy sprint identified high-ROI use cases, killed projects that wouldn't move the needle, and built an executable roadmap — focusing the analytics team on the eight highest-value initiatives."
      heroImage="/images/cases/insurance-analytics-backlog-hero.jpg"
      metrics={[
        { value: "47→8", label: "Backlog Cut to High-ROI Projects" },
        { value: "49%", label: "Backlog Reduction" },
        { value: "6 wks", label: "Chaos to Executable Roadmap" }
      ]}
      clientContextTitle="Everything Was 'Critical'"
      clientContextIntro="A regional P&C insurance carrier had accumulated a 47-project analytics backlog over three years — fraud detection, claims prediction, underwriting automation, churn prevention, pricing optimization, and more. An 8-person analytics team couldn't execute it all."
      clientContextBody="The Chief Data Officer faced impossible choices. Every business unit claimed its project was critical, and no objective framework existed to prioritize. The team worked on whichever project had the loudest sponsor, not the highest value. Projects took 9 months on average as scope kept expanding, stakeholders complained about slow delivery, and the team burned out from context-switching."
      clientProfile={{
        industry: "P&C Insurance Carrier",
        companySize: "Regional P&C Carrier",
        projectDuration: "6-Week Sprint",
        additionalInfo: "8-Person Team",
        additionalLabel: "Capacity"
      }}
      challengeTitle="Why the Backlog Was Unmanageable"
      challenges={[
        {
          icon: Layers,
          title: "47 projects, one small team",
          description: "A three-year backlog far exceeded what 8 analysts could realistically deliver."
        },
        {
          icon: Flame,
          title: "Loudest-sponsor prioritization",
          description: "Work went to whoever escalated hardest, not to the highest business value."
        },
        {
          icon: Timer,
          title: "9-month average delivery",
          description: "Ever-expanding scope stretched every project and eroded predictability."
        },
        {
          icon: Megaphone,
          title: "No objective framework",
          description: "Nothing let the CDO compare projects on value versus complexity."
        }
      ]}
      approachTitle="Score, Sequence, and Cut"
      approachIntro="NEXDYNE ran a 6-week Data Strategy Sprint that scored all 47 projects on value and complexity, identified 8 to execute, killed 23, and built a capacity-based 18-month roadmap."
      steps={[
        {
          step: "01",
          title: "Score every project",
          description: "Each was evaluated on financial impact, strategic alignment, demand, data readiness, difficulty, and change requirements."
        },
        {
          step: "02",
          title: "Plot value versus complexity",
          description: "All 47 went on a matrix — high-value/low-complexity first, high-value/high-complexity by dependency, low-value killed."
        },
        {
          step: "03",
          title: "Plan to real capacity",
          description: "The team's 14,400 annual hours were matched against estimated effort, keeping the roadmap achievable."
        },
        {
          step: "04",
          title: "Commit to eight, defer the rest",
          description: "Eight initiatives — fraud, claims cost, underwriting, pricing, churn — were sequenced; 23 killed and 16 deferred."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingUp,
          value: "8",
          label: "High-ROI projects greenlit",
          detail: "Projected to deliver more value than the full 47-project backlog"
        },
        {
          icon: Scissors,
          value: "49%",
          label: "Smaller backlog",
          detail: "23 low-value projects eliminated, escalations down 80%"
        },
        {
          icon: Calculator,
          value: "5 mo",
          label: "Average delivery time",
          detail: "Down from 9, with scope defined upfront"
        }
      ]}
      quote="We had 47 analytics projects in the backlog and no way to prioritize them objectively. Every business unit claimed their project was critical. NEXDYNE's prioritization framework was a revelation — scoring projects on business value and implementation complexity gave us an objective basis to make tough decisions. We killed 23 low-value projects that would have wasted resources. The 8 high-ROI initiatives we're executing will deliver more value than the entire original backlog would have."
      quoteAuthor="Lisa Chen"
      quoteRole="Chief Data Officer"
      relatedStudies={[
        {
          title: "Finding a New Recurring-Revenue Line Through Data Monetization",
          metric: "3x",
          label: "revenue potential",
          link: "/cases/manufacturer-data-monetization",
          image: "/images/industries/mfg-robotics.jpg"
        },
        {
          title: "Prioritizing an Analytics Roadmap With FP&A Discipline",
          metric: "5 days",
          label: "monthly close",
          link: "/capabilities/strategy-corporate-finance/case-studies/distribution-fpa",
          image: "/images/industries/fin-monitors.jpg"
        }
      ]}
      ctaTitle="Ready to focus on what matters?"
      ctaDescription="Let's talk about what a data-strategy sprint could do for your analytics roadmap."
    />
  );
}

export default InsuranceAnalyticsBacklog;
