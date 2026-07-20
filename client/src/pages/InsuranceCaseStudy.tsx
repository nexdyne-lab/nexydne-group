import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Split, ShieldQuestion, TrendingUp, ScanText, GitBranch, ShieldCheck, DollarSign } from "lucide-react";

export function InsuranceCaseStudy() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting the Claims Cycle 73% With Intelligent Automation | Insurance Case Study"
      seoDescription="A regional P&C insurer's claims took 14 days across manual channels with inconsistent decisions. Intelligent automation cut cycle time to 3.8 days, auto-adjudicated 85%, and paid for itself inside the first year."
      canonical="/case-studies/insurance-claims-automation"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a P&C Insurer Cut Its Claims Cycle 73%"
      subtitle="A regional property & casualty insurer automated claims intake and adjudication — cutting average processing time from 14 days to 3.8, auto-adjudicating 85% of claims, and paying for the platform inside its first year."
      heroImage="/case-insurance-office.f039a4a1.jpg"
      metrics={[
        { value: "73%", label: "Faster Processing" },
        { value: "85%", label: "Auto-Adjudication Rate" },
        { value: "<1 yr", label: "Payback Period" },
        { value: "45K+", label: "Claims Per Year" }
      ]}
      clientContextTitle="Volume Growing Faster Than Staff"
      clientContextIntro="A regional property & casualty insurer serving homeowners and businesses across six Southeastern states — 280 employees — processed roughly 45,000 claims a year. Claims arrived through email, fax, mail, and agent portals, requiring 45–60 minutes of manual data entry before adjudication could even begin."
      clientContextBody="With 18 adjusters across lines, decisions varied significantly — similar claims received different outcomes depending on the reviewer, creating compliance and fairness risks. As the company expanded, claims volume grew 60% over three years while staffing rose only 15%, creating backlogs. Fraud detection sat below 40% despite an estimated 3–4% of claims involving fraud, causing significant leakage."
      clientProfile={{
        industry: "P&C Insurance Company",
        companySize: "280 Employees",
        projectDuration: "45,000 Claims/Year",
        additionalInfo: "Document AI + ML",
        additionalLabel: "Solution"
      }}
      challengeTitle="Why Claims Were Slow and Inconsistent"
      challenges={[
        {
          icon: Clock,
          title: "45–60 minutes of manual entry",
          description: "Claims arrived across four channels, each requiring manual data extraction before adjudication."
        },
        {
          icon: Split,
          title: "Inconsistent decisions",
          description: "18 adjusters produced different outcomes on similar claims, creating compliance risk."
        },
        {
          icon: TrendingUp,
          title: "Volume up 60%, staff up 15%",
          description: "Rapid growth created backlogs and stretched processing times."
        },
        {
          icon: ShieldQuestion,
          title: "Sub-40% fraud detection",
          description: "Weak detection let an estimated 3–4% of fraudulent claims leak through."
        }
      ]}
      approachTitle="Document AI, Rules, and ML Fraud Detection"
      approachIntro="NEXDYNE implemented an intelligent claims-automation platform combining document AI, rules-based adjudication, and machine-learning fraud detection across the entire claims lifecycle."
      steps={[
        {
          step: "01",
          title: "Extract from any channel",
          description: "Document AI processed photos, PDFs, handwritten notes, and forms at 96% accuracy, cutting intake from 45 minutes to under 3."
        },
        {
          step: "02",
          title: "Adjudicate consistently",
          description: "A rules engine auto-approved or denied the 85% of straightforward claims by policy terms, routing complex cases to adjusters."
        },
        {
          step: "03",
          title: "Detect fraud with ML",
          description: "Models analyzed claim patterns, claimant history, and external data to flag fraud with risk scores and supporting evidence."
        },
        {
          step: "04",
          title: "Keep claimants informed",
          description: "Automated notifications and self-service tools let customers upload documents, check status, and schedule inspections without calling."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: GitBranch,
          value: "3.8 days",
          label: "Average cycle time",
          detail: "Down from 14, with simple claims resolved in under 24 hours"
        },
        {
          icon: ShieldCheck,
          value: "87%",
          label: "Fraud detection rate",
          detail: "Up from 38%, closing a long-standing leakage gap"
        },
        {
          icon: DollarSign,
          value: "<1 yr",
          label: "Payback period",
          detail: "With NPS up from 72 to 89 and call volume down 54%"
        }
      ]}
      quote="We were drowning in claims volume and our customers were suffering. NEXDYNE didn't just automate our processes — they transformed how we think about claims handling. Our adjusters now focus on the cases that truly need human judgment, while routine claims flow through automatically."
      quoteAuthor="Sarah Kim"
      quoteRole="Chief Claims Officer, Southeastern Mutual Insurance"
      relatedStudies={[
        {
          title: "Cutting Claims Processing Time 73% With Document AI",
          metric: "73%",
          label: "faster processing",
          link: "/capabilities/artificial-intelligence/case-studies/insurance-document-ai",
          image: "/case-insurance-office.f039a4a1.jpg"
        },
        {
          title: "AI-Driven Underwriting That Accelerated a Lender 5x",
          metric: "5x",
          label: "application throughput",
          link: "/capabilities/artificial-intelligence/case-studies/lender-ai-underwriting",
          image: "/images/industries/fin-handshake-city.jpg"
        }
      ]}
      ctaTitle="Ready to transform claims handling?"
      ctaDescription="Let's talk about what intelligent automation could do for your cycle times and fraud detection."
    />
  );
}

export default InsuranceCaseStudy;
