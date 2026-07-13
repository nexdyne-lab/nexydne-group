import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, AlertTriangle, TrendingDown, Users, TrendingUp, Zap, CheckCircle } from "lucide-react";

export default function HospitalDischargeWorkflowRedesign() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Discharge Workflow Redesign Frees 28% of Bed-Day Capacity | Hospital Case Study"
      seoDescription="A hospital system's discharge workflow ran approvals in series across pharmacy, transport, and case management, driving length-of-stay drift. Parallelizing clearance and front-loading pharmacy freed 28% of bed-day capacity."
      canonical="/cases/hospital-discharge-workflow-redesign"
      industry="Hospital System"
      industryLink="/industries/healthcare"
      title="How a Hospital System Freed a Quarter of Its Bed-Day Capacity by Redesigning Discharge"
      subtitle="Patients ready to leave were waiting on approvals that happened one after another. Running those steps in parallel — and doing the pharmacy review the afternoon before — opened up capacity the hospital thought it had to build."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "28%", label: "Bed-Day Capacity Freed" },
        { value: "Parallel", label: "Clearance Steps" },
        { value: "6 Mo", label: "System-Wide Rollout" },
        { value: "Same", label: "Beds and Staff" }
      ]}
      clientContextTitle="Ready to Go, Waiting on the Process"
      clientContextIntro="A regional hospital system was fighting length-of-stay drift on its inpatient units, and the usual suspects — acuity, staffing — were not the whole story. A meaningful share of the excess days came from patients who were medically ready to leave but stuck waiting on a discharge process that moved one step at a time."
      clientContextBody="Discharge required clearance from pharmacy, transport, and case management, and the workflow ran those steps in series: case management would finish, then pharmacy would begin, then transport would be arranged. Each hand-off added hours, and because the pharmacy review only started on the day of discharge, it routinely became the bottleneck that held a bed past noon. Every delayed discharge occupied a bed a waiting patient needed, so the hospital was effectively short of capacity it already had. Leadership wanted the length-of-stay drift addressed without adding beds or staff."
      clientProfile={{
        industry: "Regional Hospital System",
        companySize: "~$680M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "Multi-Unit Inpatient Base",
        additionalLabel: "Care Setting"
      }}
      challengeTitle="Why Discharge Held Beds Too Long"
      challenges={[
        { icon: Clock, title: "Serialized Approvals", description: "Pharmacy, transport, and case-management clearance ran one after another, each hand-off adding hours." },
        { icon: AlertTriangle, title: "Pharmacy as the Bottleneck", description: "The pharmacy review only began on discharge day, routinely holding a bed past noon." },
        { icon: TrendingDown, title: "Length-of-Stay Drift", description: "Medically ready patients occupied beds while the process caught up, inflating length of stay." },
        { icon: Users, title: "Phantom Capacity Shortage", description: "Delayed discharges kept beds full, so the hospital lacked capacity it technically already had." }
      ]}
      approachTitle="Parallelize Clearance, Front-Load Pharmacy"
      approachIntro="We redesigned the discharge workflow to run clearance steps in parallel rather than in series and to front-load the pharmacy review to the prior afternoon — freeing 28 percent of bed-day capacity on the pilot unit before rolling it out system-wide."
      steps={[
        { step: "01", title: "Mapping the Serial Bottlenecks", description: "We traced the discharge workflow and showed how running clearance in series, with pharmacy last, created the delay that held beds." },
        { step: "02", title: "Running Clearance in Parallel", description: "We redesigned the workflow so pharmacy, transport, and case-management clearance advanced simultaneously instead of waiting on each other." },
        { step: "03", title: "Front-Loading the Pharmacy Review", description: "We moved the pharmacy review to the afternoon before discharge, removing the day-of bottleneck that pushed beds past noon." },
        { step: "04", title: "Proving It, Then Scaling It", description: "We ran the redesign on a pilot unit, freed 28 percent of bed-day capacity, and rolled it across the system over the following six months." }
      ]}
      resultsTitle="Capacity Found, Not Built"
      results={[
        { icon: TrendingUp, value: "28%", label: "Bed-day capacity freed", detail: "On the pilot unit" },
        { icon: Zap, value: "Parallel", label: "Clearance", detail: "Steps advance simultaneously" },
        { icon: Clock, value: "Prior PM", label: "Pharmacy review", detail: "Front-loaded off the critical path" },
        { icon: CheckCircle, value: "6 Mo", label: "System-wide", detail: "Rolled out across all units" }
      ]}
      quote="We were talking about needing more beds, and it turned out we were holding the ones we had. Our discharge steps ran one after another, and pharmacy always came last on the very day the patient was leaving. Running them in parallel and doing the pharmacy review the afternoon before freed almost a third of our capacity on the pilot unit — with the same beds and the same staff."
      quoteAuthor="Chief Operating Officer"
      quoteRole="Regional hospital system"
      relatedStudies={[
        { title: "How a Manufacturer Cut Production Cycle Time by 22% Without New Equipment", metric: "22%", label: "faster production cycle", link: "/cases/manufacturing-optimization", image: "/images/capabilities/cap-robot-factory.jpg" },
        { title: "How a Financial-Services Firm Eliminated 98% of Its Compliance Deviations", metric: "98%", label: "fewer compliance deviations", link: "/cases/financial-services-compliance", image: "/images/industries/fin-monitors.jpg" }
      ]}
      ctaTitle="Is your discharge process holding beds you need?"
      ctaDescription="Let's redesign the workflow to free capacity you already have, without adding beds or staff."
    />
  );
}
