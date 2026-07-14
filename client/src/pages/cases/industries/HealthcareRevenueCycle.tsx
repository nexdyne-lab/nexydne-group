import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, Clock, FileCheck, TrendingUp, Zap, Target, Shield } from "lucide-react";

export default function HealthcareRevenueCycle() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Recovering $32M in Lost Revenue | Healthcare Case Study"
      seoDescription="A regional health system was earning far less than it should on the care it delivered — bills rejected, payments delayed, work done twice. Fixing how it billed and collected recovered $32M a year."
      canonical="/cases/healthcare-revenue-cycle"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Health System Recovered $32M It Was Already Owed"
      subtitle="The system was doing the work but not being paid for all of it — claims rejected by insurers, payments dragging out for weeks, staff redoing work that should have been right the first time. Fixing how it billed and collected turned that leak into recovered revenue."
      heroImage="/case-healthcare-team.5797392b.jpg"
      metrics={[
        { value: "$32M", label: "Revenue Recovered" },
        { value: "45%", label: "Fewer Rejected Claims" },
        { value: "12 Days", label: "Faster Payment" },
        { value: "98.5%", label: "Bills Right First Time" }
      ]}
      clientContextTitle="Doing the Work, but Not Getting Paid for It"
      clientContextIntro="A regional health system was delivering excellent care but capturing far less of the revenue it had earned than it should. More than one claim in eight was rejected by insurers on first submission, payments took nearly two months to arrive, and the way care was translated into billing codes was inconsistent — sometimes understating the work and losing revenue, sometimes overstating it and creating compliance risk."
      clientContextBody="Behind the numbers was a team buried in manual work: reviewing rejections, appealing claims, correcting billing errors and chasing payments that should have arrived weeks earlier. Despite roughly 120 people dedicated to billing and collections, performance kept slipping. Leadership estimated the system was leaving more than $12 million on the table every year — money it had already earned, simply never collected."
      clientProfile={{
        industry: "Regional Health System",
        companySize: "~$700M Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "~120 Billing Staff",
        additionalLabel: "Team Size"
      }}
      challengeTitle="Where the Money Was Leaking"
      challenges={[
        {
          icon: DollarSign,
          title: "Too Many Claims Rejected",
          description: "More than 12% of claims were turned down by insurers on first submission, each one triggering costly rework and appeals."
        },
        {
          icon: Clock,
          title: "Payments Arriving Late",
          description: "Money owed took an average of 52 days to collect against a 38-day benchmark, tying up roughly $30 million the system could have been using."
        },
        {
          icon: FileCheck,
          title: "Inconsistent Billing",
          description: "Translating care into billing codes by hand meant lost revenue on one side and compliance risk on the other."
        },
        {
          icon: Target,
          title: "Buried in Manual Work",
          description: "The billing team spent most of its time on routine, repetitive tasks that added little value and could largely be automated."
        }
      ]}
      approachTitle="Getting Paid Properly for the Care Delivered"
      approachIntro="We helped the system fix its billing and collections end to end — making sure care was captured accurately, catching the problems that led to rejected claims before they were sent, automating the routine work, and pointing the team at the payments most worth chasing."
      steps={[
        {
          step: "01",
          title: "Getting the Bill Right the First Time",
          description: "We introduced tools that read the clinical notes and suggested the correct billing codes — catching missed diagnoses, prompting for the detail insurers require and flagging gaps in documentation. Bills became more accurate, and coders spent less time hunting for information."
        },
        {
          step: "02",
          title: "Catching Rejections Before They Happen",
          description: "We built a way to score each claim for the risk of rejection before it was ever submitted. The riskiest claims were pulled aside and corrected up front, turning would-be denials into clean, paid claims. The scoring flagged nine in ten of the claims that would otherwise have bounced."
        },
        {
          step: "03",
          title: "Automating the Routine",
          description: "We automated the repetitive work of submitting claims, checking their status and posting payments — around 70% of routine billing tasks — freeing the team to focus on the complex cases and appeals that actually needed a person."
        },
        {
          step: "04",
          title: "Chasing the Right Dollars First",
          description: "We gave staff prioritized worklists that put the most recoverable money at the top — ranked by how likely it was to be collected, how much was at stake and how long it had been outstanding — so effort went where it paid off."
        }
      ]}
      resultsTitle="A Stronger Bottom Line"
      results={[
        {
          icon: DollarSign,
          value: "$32M",
          label: "Revenue recovered each year",
          detail: "From more accurate billing and fewer rejected claims"
        },
        {
          icon: TrendingUp,
          value: "45%",
          label: "Fewer rejected claims",
          detail: "First-submission rejections cut from 12% to under 7%"
        },
        {
          icon: Zap,
          value: "12 Days",
          label: "Faster payment",
          detail: "Time to collect reduced from 52 days to 40"
        },
        {
          icon: Shield,
          value: "98.5%",
          label: "Bills right the first time",
          detail: "Up from 89% before the change"
        }
      ]}
      quote="We knew we were leaving money on the table, but we couldn't see where. Now we can — we catch the problems that lead to rejected claims before they go out, we bill accurately for the care we deliver, and the routine work that used to consume the team is handled automatically."
      quoteAuthor="Chief Financial Officer"
      quoteRole="Regional health system"
      relatedStudies={[
        {
          title: "Improving Patient Outcomes by 35%",
          metric: "35%",
          label: "better patient outcomes",
          link: "/cases/healthcare-transformation",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        },
        {
          title: "Cutting Avoidable Readmissions by 42%",
          metric: "42%",
          label: "fewer avoidable readmissions",
          link: "/cases/healthcare-readmission",
          image: "/case-doctor-consultation.799c1562.jpg"
        }
      ]}
      ctaTitle="Ready to collect what you've already earned?"
      ctaDescription="Let's talk about closing the gap between the care you deliver and the revenue you keep."
    />
  );
}
