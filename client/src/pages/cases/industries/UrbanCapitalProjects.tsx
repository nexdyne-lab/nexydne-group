import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { HardHat, DollarSign, Target, Clock, AlertTriangle, CalendarClock } from "lucide-react";

export default function UrbanCapitalProjects() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Delivering Capital Projects On Time and On Budget | Urban Development Case Study"
      seoDescription="A developer kept learning about delays and cost overruns only after they had happened. Getting ahead of change orders and schedule slips lifted on-time delivery to 95% and kept the program on budget."
      canonical="/cases/urban-capital-projects"
      industry="Urban Development"
      industryLink="/industries/urban-development"
      title="How a Developer Got Ahead of Delays and Delivered 95% of Projects On Time"
      subtitle="A developer running a dozen construction projects at once kept finding out about delays and cost overruns only after they had already hit. Seeing trouble coming — weeks earlier — changed how every project finished."
      heroImage="/images/industries/city-digital.jpg"
      metrics={[
        { value: "95%", label: "On-Time Delivery" },
        { value: "35%", label: "Fewer Change Orders" },
        { value: "On Budget", label: "Across the Program" },
        { value: "6 Wks", label: "Earlier Warning" }
      ]}
      clientContextTitle="Always the Last to Know"
      clientContextIntro="A developer had roughly a dozen construction projects underway at any given time — apartments, offices and public spaces spread across a broad, multi-year program. Each project was run by its own team, its own contractors and its own set of spreadsheets, and progress was reported up to leadership in monthly meetings. On paper it was organized. In practice, by the time a problem reached those meetings it had usually been growing for weeks, and the moment to do something cheap about it had already passed."
      clientContextBody="Two problems did most of the damage. Schedules slipped quietly — a late permit here, a delayed delivery there — and because no one saw the slip until it showed up in a monthly report, small delays compounded into missed opening dates. And change orders, the mid-project revisions that are a normal part of construction, were being approved one at a time without anyone seeing the pattern or the mounting cost. Projects that had looked healthy would suddenly land months late and well over budget. Leadership was not short of information; it was short of information in time to act on it."
      clientProfile={{
        industry: "Real-Estate Developer",
        companySize: "~12 Concurrent Projects",
        projectDuration: "14 Months",
        additionalInfo: "~12 Active Projects",
        additionalLabel: "Construction Program"
      }}
      challengeTitle="Why Projects Kept Landing Late"
      challenges={[
        {
          icon: Clock,
          title: "Delays Seen Too Late",
          description: "Schedule slips surfaced only in monthly reports — weeks after they began, when the cheap window to recover had already closed."
        },
        {
          icon: AlertTriangle,
          title: "Change Orders Out of Control",
          description: "Mid-project changes were approved one by one with no view of the pattern, so costs mounted quietly until they became overruns."
        },
        {
          icon: Target,
          title: "Every Project on Its Own Island",
          description: "Each project reported differently and kept its own records, so leadership could not compare projects or spot the same risk repeating."
        },
        {
          icon: DollarSign,
          title: "Budgets That Held Until They Didn't",
          description: "Projects looked on track right up until a cluster of problems surfaced together and pushed them months late and well over budget."
        }
      ]}
      approachTitle="Seeing Trouble While There's Still Time to Fix It"
      approachIntro="Working with the developer's project and finance leaders, we replaced the monthly rear-view report with a live, shared picture of every project — so a delay or a rising cost was visible the week it started, not the month after, and the whole program could be steered rather than simply reported on."
      steps={[
        {
          step: "01",
          title: "One Common Way to Track Every Project",
          description: "We put all projects on the same simple set of milestones and measures, so for the first time leadership could see them side by side and compare progress on a like-for-like basis."
        },
        {
          step: "02",
          title: "A Live Read on Schedule and Cost",
          description: "We connected the information that showed how each project was really tracking — permits, deliveries, contractor progress, spending — into one current view, updated continuously instead of monthly."
        },
        {
          step: "03",
          title: "Early Warning on Slips and Overruns",
          description: "The system watched for the early signs that a project was drifting — a milestone about to be missed, change orders piling up — and raised a flag typically about six weeks before the impact would have landed."
        },
        {
          step: "04",
          title: "Getting Ahead of Change Orders",
          description: "We gave the team a clear view of every change request across all projects, so recurring causes could be designed out early and decisions made with the full cost in sight rather than one revision at a time."
        }
      ]}
      resultsTitle="Projects That Finish When They Should"
      results={[
        {
          icon: CalendarClock,
          value: "95%",
          label: "On-time delivery",
          detail: "Up from about 60% of projects"
        },
        {
          icon: HardHat,
          value: "35%",
          label: "Fewer change orders",
          detail: "Recurring causes caught and designed out"
        },
        {
          icon: DollarSign,
          value: "On Budget",
          label: "Program delivery",
          detail: "Overruns headed off across the portfolio"
        },
        {
          icon: Clock,
          value: "6 Wks",
          label: "Earlier warning of trouble",
          detail: "Time to act while a fix is still cheap"
        }
      ]}
      quote="We were never short of reports — we were short of time to do anything with them. Once we could see a project starting to slip six weeks out, a late opening became a problem we solved instead of one we explained. Almost everything we build now finishes on time, and the surprises at the end are gone."
      quoteAuthor="Vice President, Development"
      quoteRole="Real-estate developer"
      relatedStudies={[
        {
          title: "Phasing a Mixed-Use District for Stronger Returns",
          metric: "18%",
          label: "higher projected returns",
          link: "/cases/urban-master-planning",
          image: "/images/industries/skyscraper.jpg"
        },
        {
          title: "Cutting Building Operating Costs with Connected Data",
          metric: "22%",
          label: "lower operating costs",
          link: "/cases/urban-smart-buildings",
          image: "/images/industries/arch-glass-sphere.jpg"
        }
      ]}
      ctaTitle="Ready to see trouble before it costs you?"
      ctaDescription="Let's talk about getting ahead of delays and change orders on your next program."
    />
  );
}
