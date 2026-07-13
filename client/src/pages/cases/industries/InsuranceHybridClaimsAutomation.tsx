import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, AlertTriangle, Shield, TrendingUp, Zap, CheckCircle } from "lucide-react";

export default function InsuranceHybridClaimsAutomation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Hybrid Orchestration Moves Claims to 38% Straight-Through | Insurance Case Study"
      seoDescription="A P&C carrier had stalled at low single-digit straight-through processing because every automation push was pure RPA. A hybrid design — ML, BPM, RPA, and human review — moved straight-through claims from 4% to 38% in nine months."
      canonical="/cases/insurance-hybrid-claims-automation"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a P&C Carrier Moved From 4% to 38% Straight-Through Claims"
      subtitle="Years of bolting robots onto a broken process had barely moved the needle. The problem was the pattern, not the effort — claims needed more than RPA to flow through on their own."
      heroImage="/images/industries/fin-handshake-city.jpg"
      metrics={[
        { value: "4→38%", label: "Straight-Through Rate" },
        { value: "9 Mo", label: "To the Result" },
        { value: "4", label: "Techniques Combined" },
        { value: "Kept", label: "Humans on High Severity" }
      ]}
      clientContextTitle="Robots on a Process That Couldn't Flow"
      clientContextIntro="A national property-and-casualty carrier had been trying to automate its claims process for years, and had almost nothing to show for it. Straight-through processing — claims that resolve without human touch — sat stuck in the low single digits despite repeated, well-funded automation pushes."
      clientContextBody="Every one of those pushes had reached for the same tool: robotic process automation. RPA is excellent at deterministic, rule-based actions, but a claim is not a deterministic thing. It arrives as unstructured documents, needs orchestration across systems, and carries genuine risk on high-severity cases. Bolting robots onto that reality automated the easy 4 percent and left the rest exactly as manual as before. The carrier needed to stop treating claims automation as a single-technique problem and start matching the right technique to each part of the process."
      clientProfile={{
        industry: "National P&C Carrier",
        companySize: "~$1.1B Annual Revenue",
        projectDuration: "9 Months",
        additionalInfo: "High-Volume Claims Operation",
        additionalLabel: "Process Scope"
      }}
      challengeTitle="Why Pure RPA Kept Stalling"
      challenges={[
        { icon: Target, title: "One Tool for Every Problem", description: "Every prior push used RPA alone, which could only handle the deterministic slice of the process." },
        { icon: TrendingDown, title: "Stuck at 4 Percent", description: "Straight-through processing barely moved despite repeated, well-funded automation efforts." },
        { icon: AlertTriangle, title: "Unstructured Intake", description: "Claims arrived as documents RPA could not read, so most work still needed a person up front." },
        { icon: Shield, title: "Real Risk on Severe Claims", description: "High-severity claims carried genuine exposure that no one wanted a rule-bound bot deciding." }
      ]}
      approachTitle="Match the Technique to the Task"
      approachIntro="We re-architected the program around a hybrid pattern — machine learning for unstructured intake, business-process management for orchestration, RPA for deterministic system actions, and human review for high-severity exceptions — so each part of the claim was handled by the right tool."
      steps={[
        { step: "01", title: "ML for the Front Door", description: "We applied machine learning to read and structure the unstructured intake that had always forced a human first step, opening the process to automation." },
        { step: "02", title: "BPM to Orchestrate the Flow", description: "We used business-process management to orchestrate the claim across systems, coordinating the steps RPA alone could never sequence." },
        { step: "03", title: "RPA Where It Excels", description: "We reserved robotic automation for the deterministic system actions it handles reliably, rather than asking it to carry the whole process." },
        { step: "04", title: "Humans on High-Severity Exceptions", description: "We routed high-severity and ambiguous claims to human review, keeping people on exactly the cases where judgment and risk demanded them." }
      ]}
      resultsTitle="Claims That Finally Flow"
      results={[
        { icon: TrendingUp, value: "4→38%", label: "Straight-through rate", detail: "Within nine months of the redesign" },
        { icon: Zap, value: "ML", label: "Unstructured intake", detail: "Read automatically at the front door" },
        { icon: CheckCircle, value: "BPM", label: "Orchestration", detail: "Claims coordinated across systems" },
        { icon: Shield, value: "Human", label: "On severe cases", detail: "Judgment kept where risk is real" }
      ]}
      quote="We had spent years and a lot of money putting robots on a process that was never going to flow with robots alone. Once we matched the right technique to each part of the claim — reading the documents with ML, orchestrating with BPM, automating the mechanical steps, and keeping our people on the serious cases — straight-through processing went from four percent to thirty-eight."
      quoteAuthor="SVP of Claims"
      quoteRole="National P&C carrier"
      relatedStudies={[
        { title: "How a Health Plan Turned 12 Orphaned Bots Into 140 Working Automations", metric: "12→140", label: "automations in 18 months", link: "/cases/payer-automation-coe-scale", image: "/case-healthcare-team.5797392b.jpg" },
        { title: "How a Specialty Distributor Cut Order Cycle Time From 9 Days to Under Six", metric: "41%", label: "faster order cycle", link: "/cases/distribution-order-fulfillment-redesign", image: "/images/capabilities/cap-warehouse-robot.jpg" }
      ]}
      ctaTitle="Has pure RPA stalled your automation?"
      ctaDescription="Let's match the right technique to each part of the process so the work actually flows."
    />
  );
}
