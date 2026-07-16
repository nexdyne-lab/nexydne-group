import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, FileStack, AlertTriangle, ScrollText, ScanText, GitBranch, Bot, DollarSign } from "lucide-react";

export function FinancialInstitutionAutomation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Automating 90% of Loan Processing Workflows | Banking Case Study"
      seoDescription="A $45B regional bank took 5–7 days to process loans with 15% error rates. Intelligent document processing automated 90% of workflows, cut decisions to under 4 hours, and saved $12M."
      canonical="/cases/financial-institution-automation"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Automated 90% of Its Loan Processing"
      subtitle="Intelligent document processing and workflow automation transformed lending operations — cutting standard decisions from 5–7 days to under 4 hours at 99.2% extraction accuracy, saving $12M a year."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "90%", label: "Process Automation" },
        { value: "85%", label: "Less Processing Time" },
        { value: "99.2%", label: "Extraction Accuracy" },
        { value: "$12M", label: "Annual Savings" }
      ]}
      clientContextTitle="Days to Decide a Loan"
      clientContextIntro="A regional bank with $45B in assets was struggling with manual loan processing that averaged 5–7 business days. Across 50,000+ annual applications spanning consumer, commercial, and mortgage products, manual review consumed enormous resources and left the bank behind digital-first lenders offering same-day decisions."
      clientContextBody="Loan officers manually reviewed dozens of documents per application and cross-referenced multiple systems, producing inconsistent decisions with error rates near 15% — with more than 200 full-time employees dedicated solely to document processing. Regulatory pressure compounded the problem: recent examinations had flagged documentation and decision inconsistencies requiring remediation. The bank needed efficiency, stronger compliance, and a complete audit trail for every decision."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "$45B in Assets",
        projectDuration: "50,000+ Loans/Year",
        additionalInfo: "OCR + NLP + HITL",
        additionalLabel: "Solution"
      }}
      challengeTitle="Why Lending Was Slow and Inconsistent"
      challenges={[
        {
          icon: Clock,
          title: "5–7 day decisions",
          description: "Manual processing left the bank uncompetitive against lenders offering same-day approvals."
        },
        {
          icon: FileStack,
          title: "200+ FTEs on documents",
          description: "Officers hand-reviewed dozens of documents per application across disconnected systems."
        },
        {
          icon: AlertTriangle,
          title: "15% error rates",
          description: "Manual review drove inconsistent decisions and wide variation in processing times."
        },
        {
          icon: ScrollText,
          title: "Regulatory findings",
          description: "Exams flagged documentation and decision inconsistencies that required remediation and a full audit trail."
        }
      ]}
      approachTitle="Intelligent Automation, Human-in-the-Loop"
      approachIntro="NEXDYNE built an end-to-end automation platform that combined document AI with human oversight for complex cases — extracting, routing, and documenting every application at machine speed and consistency."
      steps={[
        {
          step: "01",
          title: "Extract from 40+ document types",
          description: "OCR and NLP trained on financial documents pulled 200+ fields per application at 99.2% accuracy, flagging anomalies for review."
        },
        {
          step: "02",
          title: "Route by risk and product",
          description: "A flexible workflow engine with 15 product-specific templates routed applications through automated and manual steps by risk and regulation."
        },
        {
          step: "03",
          title: "Support the underwriter",
          description: "AI decision support pre-qualified applications, flagged compliance issues, and gave underwriters risk assessments."
        },
        {
          step: "04",
          title: "Document every decision",
          description: "Each decision captured complete rationale, creating comprehensive audit trails integrated with core banking and credit systems."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Bot,
          value: "90%",
          label: "Applications fully automated",
          detail: "Freeing officers for complex cases and relationships"
        },
        {
          icon: ScanText,
          value: "< 4 hrs",
          label: "Standard decision time",
          detail: "Down from 5–7 days, at 99.2% extraction accuracy"
        },
        {
          icon: DollarSign,
          value: "$12M",
          label: "Annual savings",
          detail: "From reduced manual work and higher productivity"
        }
      ]}
      quote="The automation platform has fundamentally changed how we operate. Our loan officers now spend their time building relationships and solving complex problems, not shuffling paper. Customer satisfaction has never been higher."
      quoteAuthor="Michael Torres"
      quoteRole="Chief Operating Officer"
      relatedStudies={[
        {
          title: "Automating KYC Compliance With RPA",
          metric: "80%",
          label: "less manual work",
          link: "/cases/financial-institution",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Scaling a Fintech Platform to 50M Transactions a Day",
          metric: "50M",
          label: "daily transactions",
          link: "/cases/fintech-microservices",
          image: "/images/industries/fin-monitors.jpg"
        }
      ]}
      ctaTitle="Ready to automate your lending?"
      ctaDescription="Let's talk about what intelligent document processing could do for your decision times."
    />
  );
}

export default FinancialInstitutionAutomation;
