import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Timer, ShieldCheck, UserPlus, FileText, Search, Bot, Gauge } from "lucide-react";

export default function FinancialInstitution() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Automating KYC Compliance with RPA and Document AI | Banking Case Study"
      seoDescription="A bank processing 10,000+ KYC applications a month faced 5–7 day delays and audit findings. RPA and document AI cut manual compliance work 80% at 99.9% accuracy."
      canonical="/cases/financial-institution"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Bank Automated KYC Compliance and Cut Manual Work 80%"
      subtitle="RPA and document AI automated KYC document processing and regulatory reporting — reducing manual compliance work 80% while improving accuracy to 99.9% and approvals from days to hours."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "80%", label: "Less Manual Compliance Work" },
        { value: "10K+", label: "Applications / Month" },
        { value: "99.9%", label: "Accuracy" }
      ]}
      clientContextTitle="A Compliance Bottleneck Costing Customers"
      clientContextIntro="A regional bank processing 10,000+ KYC applications monthly was choked by compliance bottlenecks. Its team manually reviewed identity documents, verified information across databases, and generated regulatory reports — consuming 200+ hours a week and creating 5–7 day approval delays."
      clientContextBody="Manual review introduced inconsistencies that triggered audit findings, exposing the bank to potential fines and reputational risk. The slow process also cost new business: 30% of applicants abandoned before completion because of the wait. The bank needed to make KYC fast and consistent without weakening its controls."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "10,000+ KYC / Month",
        projectDuration: "Production + HITL",
        additionalInfo: "RPA + Document AI",
        additionalLabel: "Solution"
      }}
      challengeTitle="Why KYC Was Slow and Risky"
      challenges={[
        {
          icon: Timer,
          title: "5–7 day approval delays",
          description: "Manual review took days per application, frustrating customers and slowing onboarding."
        },
        {
          icon: FileText,
          title: "200+ hours a week of manual work",
          description: "The compliance team hand-reviewed documents and generated reports, consuming enormous capacity."
        },
        {
          icon: Search,
          title: "Inconsistencies and audit findings",
          description: "Manual review introduced errors that triggered regulatory findings and fine exposure."
        },
        {
          icon: UserPlus,
          title: "Lost customers",
          description: "30% of applicants abandoned the process before completion because of the long wait."
        }
      ]}
      approachTitle="Intelligent Automation with a Human in the Loop"
      approachIntro="NEXDYNE combined RPA with document AI to automate the routine while keeping humans on the complex cases — extracting, verifying, and reporting at machine speed and consistency."
      steps={[
        {
          step: "01",
          title: "Extract and verify automatically",
          description: "Bots used OCR to extract data from identity documents and cross-referenced it against sanctions lists and credit bureaus."
        },
        {
          step: "02",
          title: "Flag the high-risk cases",
          description: "The system routed high-risk applications to human reviewers and generated compliance reports automatically."
        },
        {
          step: "03",
          title: "Train on real history, then pilot",
          description: "Document AI was trained on 50,000+ historical applications, validated in a 1,000-application pilot, then rolled to production."
        },
        {
          step: "04",
          title: "Keep humans on the hard cases",
          description: "Human-in-the-loop oversight handled complex cases, backed by UiPath Document Understanding and sanctions-screening APIs."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Bot,
          value: "80%",
          label: "Less manual compliance work",
          detail: "160 hours a week returned to complex reviews and strategy"
        },
        {
          icon: Timer,
          value: "24 hrs",
          label: "Approval time",
          detail: "Down from 5–7 days, with a 25% higher completion rate"
        },
        {
          icon: ShieldCheck,
          value: "99.9%",
          label: "Accuracy",
          detail: "Zero audit findings in the first 12 months"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Automating Regulatory Compliance with Fine-Tuned LLMs",
          metric: "60%",
          label: "fewer false positives",
          link: "/case-studies/financial-compliance-automation",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Cutting Manual Document Processing 70% for an Accounting Firm",
          metric: "70%",
          label: "less manual work",
          link: "/capabilities/ai-technology-consulting/case-study/accounting-firm",
          image: "/images/capabilities/cap-conference-data.jpg"
        }
      ]}
      ctaTitle="Ready to make compliance fast and consistent?"
      ctaDescription="Let's talk about what intelligent automation could do for your KYC and reporting."
    />
  );
}
