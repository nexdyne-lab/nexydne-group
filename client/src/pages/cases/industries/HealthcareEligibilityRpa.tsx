import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Users, AlertTriangle, Target, CheckCircle, Zap, TrendingDown } from "lucide-react";

export default function HealthcareEligibilityRpa() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Provider Network Reclaims 90,000 Hours a Year on Eligibility Checks | RPA Case Study"
      seoDescription="A provider network's eligibility checks were a slow, multi-step manual process. Attended bots plus intelligent document processing collapsed it into a single screen, reclaiming 90,000 staff hours a year."
      canonical="/cases/healthcare-eligibility-rpa"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Provider Network Reclaimed 90,000 Hours a Year on Eligibility Checks"
      subtitle="Verifying a patient's insurance eligibility meant staff toggling between systems through a multi-step manual process. Bots and document automation collapsed it into a single screen."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "90,000", label: "Hours Reclaimed / Yr" },
        { value: "Single", label: "Screen" },
        { value: "Attended", label: "Bots" },
        { value: "IDP", label: "Document Processing" }
      ]}
      clientContextTitle="A Multi-Step Check, Thousands of Times a Day"
      clientContextIntro="A provider network's revenue-cycle staff verified patient insurance eligibility as a slow, multi-step manual process — logging into multiple payer portals and internal systems, copying information between them, and interpreting documents by hand, for every patient encounter."
      clientContextBody="Multiplied across thousands of encounters a day, that manual effort added up to an enormous amount of staff time spent on rote work, and it introduced errors that led to denied claims downstream. Eligibility verification is exactly the kind of repetitive, rules-and-documents work that consumes staff capacity without needing human judgment. The provider network needed to collapse the multi-step process into a single, streamlined action — using attended bots to work alongside staff and intelligent document processing to read the documents automatically — reclaiming the tens of thousands of hours the manual process consumed."
      clientProfile={{
        industry: "Provider Network",
        companySize: "~$680M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "Eligibility Automation",
        additionalLabel: "Revenue Cycle"
      }}
      challengeTitle="Why Eligibility Checks Ate So Much Time"
      challenges={[
        { icon: Clock, title: "A Multi-Step Manual Process", description: "Staff toggled between payer portals and internal systems, copying data by hand for every patient." },
        { icon: Users, title: "Enormous Aggregate Effort", description: "Across thousands of daily encounters, the manual work consumed vast staff capacity." },
        { icon: AlertTriangle, title: "Errors Driving Denials", description: "Manual copying and interpretation introduced errors that led to denied claims." },
        { icon: Target, title: "Rote Work, No Judgment", description: "Eligibility verification is repetitive rules-and-documents work that does not need a human." }
      ]}
      approachTitle="Collapse the Process to One Screen"
      approachIntro="We combined attended bots with intelligent document processing to collapse the multi-step eligibility check into a single screen for revenue-cycle staff — reclaiming 90,000 hours a year."
      steps={[
        { step: "01", title: "Mapping the Eligibility Steps", description: "We mapped the multi-step verification across portals and systems to find what could be automated." },
        { step: "02", title: "Deploying Attended Bots", description: "We built attended bots that worked alongside staff, gathering eligibility information across systems automatically." },
        { step: "03", title: "Adding Document Processing", description: "We used intelligent document processing to read and interpret eligibility documents without manual keying." },
        { step: "04", title: "Delivering a Single Screen", description: "We collapsed the whole process into one streamlined screen, reclaiming 90,000 staff hours annually and cutting errors." }
      ]}
      resultsTitle="Hours Returned, Errors Cut"
      results={[
        { icon: Clock, value: "90,000", label: "Hours reclaimed", detail: "Per year, for the network" },
        { icon: CheckCircle, value: "Single", label: "Screen", detail: "Multi-step process collapsed" },
        { icon: Zap, value: "IDP", label: "Documents", detail: "Read automatically" },
        { icon: TrendingDown, value: "Fewer", label: "Denials", detail: "From manual errors" }
      ]}
      quote="Our staff were logging into a stack of systems and copying eligibility details by hand for every single patient, thousands of times a day. Putting bots and document automation behind a single screen gave us back ninety thousand hours a year and cut the errors that were causing denials. That is capacity we redirected straight back to patient-facing work."
      quoteAuthor="VP of Revenue Cycle"
      quoteRole="Provider network"
      relatedStudies={[
        { title: "How a Global Bank Captured $400M in Value by Reorganizing Around Customer Journeys", metric: "$400M", label: "in annual value", link: "/cases/bank-operating-model-transformation", image: "/images/industries/fin-monitors.jpg" },
        { title: "How an Industrial Holding Company Integrated Three Acquisitions and Beat Its Synergy Targets", metric: "110%", label: "of synergy targets captured", link: "/cases/industrial-ma-integration", image: "/images/capabilities/cap-battery-factory.jpg" }
      ]}
      ctaTitle="Is a manual verification process eating your capacity?"
      ctaDescription="Let's collapse it into a single screen with attended bots and document automation."
    />
  );
}
