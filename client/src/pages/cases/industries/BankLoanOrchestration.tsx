import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Users, AlertTriangle, TrendingDown, Zap, CheckCircle, Shield, Target } from "lucide-react";

export default function BankLoanOrchestration() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Bank Automates Loan Origination Across 12 Systems, Cuts to 3 Days | Process Orchestration Case Study"
      seoDescription="A bank's loan origination spanned twelve systems and fourteen days. Human-in-the-loop orchestration with policy gates and audit trails cut it to three days without losing control."
      canonical="/cases/bank-loan-orchestration"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Bank Cut Loan Origination From 14 Days to 3"
      subtitle="Originating a loan meant threading twelve systems over two weeks, with people manually moving each application along. Orchestration with policy gates automated the flow while keeping control."
      heroImage="/images/cases/bank-loan-orchestration-hero.jpg"
      metrics={[
        { value: "14 → 3", label: "Days to Originate" },
        { value: "12", label: "Systems Orchestrated" },
        { value: "Policy", label: "Gates Enforced" },
        { value: "Audit", label: "Trail Built In" }
      ]}
      clientContextTitle="Two Weeks to Originate a Loan"
      clientContextIntro="A bank's loan origination process stretched across twelve systems and took fourteen days end to end. Each application was moved from one system to the next by hand, with staff manually checking policy at each step and re-keying information along the way."
      clientContextBody="The length and manual nature of the process cost the bank on every dimension. Borrowers waited two weeks and some abandoned; staff spent their time shepherding applications rather than making decisions; and the manual policy checks were inconsistent and hard to audit — a real concern in a regulated lending process. Speeding it up naively by removing checks was not an option, because the policy gates and audit trail existed for good reason. The bank needed orchestration that automated the flow across the twelve systems while keeping humans in the loop where judgment mattered, enforcing policy gates, and capturing a full audit trail."
      clientProfile={{
        industry: "Bank",
        companySize: "~$430M Annual Revenue",
        projectDuration: "7 Months",
        additionalInfo: "Loan Origination",
        additionalLabel: "Lending Operations"
      }}
      challengeTitle="Why Origination Took Two Weeks"
      challenges={[
        { icon: Clock, title: "Manual Threading of 12 Systems", description: "Applications were moved from system to system by hand over fourteen days." },
        { icon: Users, title: "Staff Shepherding, Not Deciding", description: "People spent their time moving applications along rather than making decisions." },
        { icon: AlertTriangle, title: "Inconsistent, Hard-to-Audit Policy Checks", description: "Manual policy checks varied and were difficult to audit in a regulated process." },
        { icon: TrendingDown, title: "Borrowers Abandoning", description: "A two-week wait cost the bank applications to abandonment." }
      ]}
      approachTitle="Automate the Flow, Keep the Control"
      approachIntro="We built human-in-the-loop orchestration across the twelve systems with policy gates and audit trails, turning a fourteen-day origination process into a three-day one without loosening control."
      steps={[
        { step: "01", title: "Modeling the Origination Flow", description: "We modeled the end-to-end origination process across the twelve systems as an orchestrated flow." },
        { step: "02", title: "Automating the Hand-Offs", description: "We automated the movement of applications between systems, removing the manual threading that consumed days." },
        { step: "03", title: "Enforcing Policy Gates", description: "We built policy gates into the flow so every application met requirements consistently, with humans in the loop where judgment was needed." },
        { step: "04", title: "Capturing the Audit Trail", description: "We recorded every step and decision, giving the bank a complete, defensible audit trail for the regulated process." }
      ]}
      resultsTitle="Faster Loans, Full Control"
      results={[
        { icon: Zap, value: "14 → 3", label: "Days", detail: "Origination time cut" },
        { icon: CheckCircle, value: "12", label: "Systems", detail: "Orchestrated end to end" },
        { icon: Shield, value: "Enforced", label: "Policy gates", detail: "Consistent, human-in-the-loop" },
        { icon: Target, value: "Auditable", label: "Every step", detail: "Complete regulated trail" }
      ]}
      quote="Originating a loan took two weeks of people hand-carrying applications through twelve systems, and borrowers were walking away. Orchestrating the flow — automating the hand-offs but keeping our policy gates and a full audit trail — got us to three days without giving up an ounce of control. Faster for the borrower, and more defensible for us."
      quoteAuthor="Head of Lending"
      quoteRole="Bank"
      relatedStudies={[
        { title: "How an Insurer Cut Claims Handle Time 68% With Unattended Bots", metric: "68%", label: "less handle time", link: "/cases/insurer-claims-rpa", image: "/images/cases/insurer-claims-rpa-hero.jpg" },
        { title: "How a Provider Network Reclaimed 90,000 Hours a Year on Eligibility Checks", metric: "90,000", label: "hours reclaimed a year", link: "/cases/healthcare-eligibility-rpa", image: "/images/cases/healthcare-eligibility-rpa-hero.jpg" }
      ]}
      ctaTitle="Is a multi-system process taking too long?"
      ctaDescription="Let's orchestrate the flow with policy gates and audit trails — faster without losing control."
    />
  );
}
