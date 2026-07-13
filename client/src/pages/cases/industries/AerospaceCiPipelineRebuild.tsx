import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, TrendingDown, Users, TrendingUp, DollarSign, CheckCircle, Zap } from "lucide-react";

export default function AerospaceCiPipelineRebuild() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="CI Program Redesign Moves Idea Closures From 8 to 71 a Quarter | Aerospace Case Study"
      seoDescription="An aerospace manufacturer's continuous-improvement program had healthy submissions but single-digit closures. Rebuilding intake, sizing, governance, and recognition moved closures from 8 to 71 per quarter within a year."
      canonical="/cases/aerospace-ci-pipeline-rebuild"
      industry="Aerospace Manufacturing"
      industryLink="/industries/aerospace-defense"
      title="How an Aerospace Manufacturer Unclogged Its Improvement Pipeline"
      subtitle="Employees kept submitting good improvement ideas, and almost none of them ever got done. The problem was not the ideas — it was the pipeline that was supposed to turn them into results."
      heroImage="/images/capabilities/cap-battery-factory.jpg"
      metrics={[
        { value: "8→71", label: "Closures per Quarter" },
        { value: "12 Mo", label: "To the Turnaround" },
        { value: "Q2", label: "Benefits Passed Cost" },
        { value: "Rebuilt", label: "Intake to Recognition" }
      ]}
      clientContextTitle="Plenty of Ideas, Almost No Closures"
      clientContextIntro="An aerospace manufacturer had a continuous-improvement program that looked healthy from one angle and broken from another. Submissions were strong — employees were engaged and clearly saw opportunities. But closures had stalled at single digits per quarter, and the gap between ideas raised and improvements delivered was demoralizing everyone involved."
      clientContextBody="The bottleneck was the pipeline, not the people. Ideas entered an intake with no consistent sizing or prioritization, stalled in unclear governance where no one owned the decision to proceed, and competed for attention through a recognition program that rewarded submission rather than results. Good ideas died waiting. Leadership knew the program was worth saving — engagement was real — but it needed the machinery between submission and closure rebuilt so that raising an idea actually led somewhere."
      clientProfile={{
        industry: "Aerospace Manufacturer",
        companySize: "~$620M Annual Revenue",
        projectDuration: "12 Months",
        additionalInfo: "Multi-Site CI Program",
        additionalLabel: "Improvement Function"
      }}
      challengeTitle="Why Good Ideas Died in the Pipeline"
      challenges={[
        { icon: Target, title: "No Consistent Sizing", description: "Ideas entered intake without a standard way to size or prioritize them, so nothing could be sequenced sensibly." },
        { icon: Clock, title: "Unclear Governance", description: "No one owned the decision to advance an idea, so submissions stalled in ambiguity." },
        { icon: TrendingDown, title: "Single-Digit Closures", description: "Despite strong submissions, only a handful of ideas reached completion each quarter." },
        { icon: Users, title: "Recognition for Submitting, Not Doing", description: "The legacy program rewarded raising ideas rather than delivering them, reinforcing the backlog." }
      ]}
      approachTitle="Rebuild the Machinery Between Idea and Result"
      approachIntro="We rebuilt the intake, sizing, and prioritization pipeline, clarified who owned governance decisions, and replaced the legacy recognition program with a visibility-based mechanic that rewarded closures — turning a stalled program into a delivery engine."
      steps={[
        { step: "01", title: "Standardizing Intake and Sizing", description: "We rebuilt intake so every idea was sized and prioritized consistently, giving the program a clear, workable queue instead of an undifferentiated pile." },
        { step: "02", title: "Clarifying Governance Ownership", description: "We defined who decided what and when, so ideas moved through clear decision points instead of stalling in ambiguity." },
        { step: "03", title: "Replacing the Recognition Mechanic", description: "We swapped the legacy submission-based recognition for a visibility-based mechanic that celebrated closures, aligning motivation with delivery." },
        { step: "04", title: "Proving Benefits Against Cost", description: "We tracked realized benefits, which exceeded the program's annual cost by the second quarter, giving leadership the evidence to keep investing." }
      ]}
      resultsTitle="A Pipeline That Finally Delivered"
      results={[
        { icon: TrendingUp, value: "8→71", label: "Closures per quarter", detail: "Within twelve months of the redesign" },
        { icon: DollarSign, value: "Q2", label: "Benefits > cost", detail: "Realized benefits exceeded annual program cost" },
        { icon: CheckCircle, value: "Clear", label: "Governance", detail: "Owned decisions replaced ambiguity" },
        { icon: Zap, value: "Visibility", label: "Recognition", detail: "Rewarding closures, not submissions" }
      ]}
      quote="Our people never stopped bringing us good ideas — we just could not turn them into anything. Rebuilding the pipeline from intake to recognition, and finally rewarding getting things done instead of just suggesting them, took us from eight closures a quarter to seventy-one. The program paid for itself by the second quarter."
      quoteAuthor="VP of Operational Excellence"
      quoteRole="Aerospace manufacturer"
      relatedStudies={[
        { title: "How a Retail Bank Took Continuous Improvement Out of the Center and Into the Branches", metric: "380", label: "practitioners trained", link: "/cases/retail-banking-ci-capability-scaling", image: "/images/industries/fin-trader.jpg" },
        { title: "How a P&C Carrier Moved From 4% to 38% Straight-Through Claims", metric: "4→38%", label: "straight-through processing", link: "/cases/insurance-hybrid-claims-automation", image: "/images/industries/fin-handshake-city.jpg" }
      ]}
      ctaTitle="Are good improvement ideas dying in your pipeline?"
      ctaDescription="Let's rebuild the machinery between a raised idea and a delivered result."
    />
  );
}
