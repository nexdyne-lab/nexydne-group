import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, DollarSign, Target, Users, Calendar, TrendingUp } from "lucide-react";

export default function WorkforceSchedulingOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Matching Staffing to Demand for a Regional Logistics Operator | Transportation & Logistics Case Study"
      seoDescription="A regional distribution operator was swinging between costly overtime and understaffed shifts because schedules were built on gut feel a week ahead. Matching staffing to predicted demand cut overtime, closed coverage gaps, and steadied schedules for its workers."
      canonical="/cases/workforce-scheduling-optimization"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="Ending the Overtime-and-Gaps Cycle: Matching Staffing to Demand for a Regional Logistics Operator"
      subtitle="A regional distribution operator kept paying for overtime one week and running short-staffed the next, because schedules were built on gut feel days ahead of the work. Matching people to predicted demand, shift by shift, cut the overtime and closed the gaps at the same time."
      heroImage="/images/industries/people-commute.jpg"
      metrics={[
        { value: "22%", label: "Less Overtime" },
        { value: "31%", label: "Fewer Coverage Gaps" },
        { value: "6pts", label: "Better On-Time Service" },
        { value: "$4.5M", label: "Saved Each Year" }
      ]}
      clientContextTitle="Paying for Too Many People and Too Few, Often in the Same Week"
      clientContextIntro="A regional distribution and logistics operator moved goods through a network of warehouses and delivery hubs for retail and industrial customers. Its shift schedules were built by hand roughly a week ahead, drawn up by supervisors who leaned on experience and instinct to guess how busy each shift would be. When the guess was high, the operator paid overtime and idle time it did not need. When the guess was low, shifts ran short-handed, orders backed up, and trucks left late."
      clientContextBody="The pattern repeated itself constantly. A single missed forecast could mean a Tuesday of expensive overtime followed by a Thursday of missed delivery windows — and neither problem was anyone's fault, because the schedule had simply been set before anyone could know what the days would really bring. Overtime alone was running into the millions, on-time delivery was slipping below the levels customers expected, and the workforce bore the cost too: shifts were announced late, hours swung week to week, and the people doing the work could not plan their own lives around a schedule that kept changing. Leadership saw the same lever behind every symptom — schedules that were set too early, on too little information, to ever match the day's real demand."
      clientProfile={{
        industry: "Regional Distribution & Logistics",
        companySize: "~$400M Annual Revenue",
        projectDuration: "10 Months",
        additionalInfo: "~2,500 Shift Workers",
        additionalLabel: "Frontline Workforce"
      }}
      challengeTitle="Why the Numbers Never Lined Up"
      challenges={[
        {
          icon: DollarSign,
          title: "Overtime the Business Didn't Need",
          description: "When supervisors staffed for a busy day that never came, the operator paid millions a year in overtime and idle hours it could have avoided."
        },
        {
          icon: Users,
          title: "Shifts Left Short-Handed",
          description: "When the guess ran low, shifts started understaffed — orders backed up, trucks left late, and the day never recovered."
        },
        {
          icon: Calendar,
          title: "Schedules Built on Gut Feel",
          description: "Rosters were drawn up by hand a week ahead, set before anyone could know how much work each shift would actually bring."
        },
        {
          icon: Clock,
          title: "A Workforce Kept Guessing Too",
          description: "Late, ever-changing schedules and swinging hours made it hard for workers to plan their lives — and hard for the operator to keep them."
        }
      ]}
      approachTitle="Staffing Each Shift to the Work It Will Actually Bring"
      approachIntro="Working alongside the operator's operations and workforce leaders, we set out to build schedules around what each shift would really demand rather than what a supervisor guessed a week earlier — matching people to predicted volume, shift by shift, so the roster fit the work instead of fighting it."
      steps={[
        {
          step: "01",
          title: "Predicting the Work, Not Guessing at It",
          description: "Using order history, seasonality, customer patterns and known events, we built forecasts of how much work each site would see, broken down to the individual shift — turning a supervisor's instinct into a number everyone could plan around."
        },
        {
          step: "02",
          title: "Translating Demand Into People",
          description: "We converted each shift's predicted volume into the staffing it actually required — the right number of people, with the right skills, at the right hours — so the plan reflected the day's real workload rather than a flat headcount."
        },
        {
          step: "03",
          title: "Schedules That Are Fair as Well as Efficient",
          description: "We built the rosters to honor worker preferences, keep hours steady week to week and share the less popular shifts evenly — proving that a schedule can be cheaper for the business and better for the people at the same time."
        },
        {
          step: "04",
          title: "Adjusting as the Day Changes",
          description: "We gave supervisors a live view of demand against coverage, so when volume moved during the week they could shift people early — filling an emerging gap or standing down surplus hours before either turned into a cost."
        }
      ]}
      resultsTitle="Lower Cost, Steadier Service, Fairer Shifts"
      results={[
        {
          icon: DollarSign,
          value: "22%",
          label: "Less overtime",
          detail: "About $4.5M a year no longer spent on avoidable hours"
        },
        {
          icon: Target,
          value: "31%",
          label: "Fewer coverage gaps",
          detail: "Far fewer shifts starting short-handed"
        },
        {
          icon: TrendingUp,
          value: "6pts",
          label: "Better on-time service",
          detail: "More deliveries leaving and arriving on schedule"
        },
        {
          icon: Users,
          value: "2 weeks",
          label: "Earlier schedules",
          detail: "Rosters posted sooner, with steadier hours for workers"
        }
      ]}
      quote="We were never really short of people or paying too much — we were doing both at once, because the schedule was set before we knew what the week held. Once staffing followed the actual work instead of a guess, the overtime came down, the gaps closed, and our crews finally got a schedule they could count on. It turned out the same fix helped the business and the people doing the work."
      quoteAuthor="Vice President, Operations"
      quoteRole="Regional logistics operator"
      relatedStudies={[
        {
          title: "Cutting materials cost with strategic sourcing",
          metric: "12%",
          label: "lower materials spend",
          link: "/cases/strategic-sourcing-savings",
          image: "/images/industries/mfg-robotics.jpg"
        },
        {
          title: "Lifting warehouse productivity for a regional distributor",
          metric: "45%",
          label: "more productive",
          link: "/cases/warehouse-optimization",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to stop paying for overtime and gaps at once?"
      ctaDescription="Let's talk about what matching staffing to real demand could be worth."
    />
  );
}
