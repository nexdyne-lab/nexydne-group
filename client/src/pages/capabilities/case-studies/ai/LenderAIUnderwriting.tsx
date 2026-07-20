import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Gauge, TrendingDown, ScanText, Brain, ShieldCheck, Layers, DollarSign } from "lucide-react";

export function LenderAIUnderwriting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="AI-Driven Underwriting That Accelerated a Lender 5x | Financial Services Case Study"
      seoDescription="A specialty lender was capped at 200 applications a month with inconsistent decisions. An explainable ML credit model lifted throughput 5x, cut defaults 22%, and enabled $45M in new volume."
      canonical="/capabilities/artificial-intelligence/case-studies/lender-ai-underwriting"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Specialty Lender Accelerated Underwriting 5x With AI"
      subtitle="A specialty lending firm deployed an explainable ML credit model with tiered human oversight — processing 5x more applications while cutting default rates 22% and enabling $45M in new loan volume."
      heroImage="/images/industries/fin-handshake-city.jpg"
      metrics={[
        { value: "5x", label: "Application Throughput" },
        { value: "22%", label: "Lower Default Rate" },
        { value: "4 hrs", label: "Decision Time" },
        { value: "$45M", label: "New Loan Volume" }
      ]}
      clientContextTitle="Underwriting as the Bottleneck"
      clientContextIntro="A specialty lending firm with 100 employees provides working-capital loans of $25,000–$500,000 to small businesses with 2–10 years of history. Manual underwriting capped the company at 200 applications a month — underwriter capacity was the bottleneck to growth."
      clientContextBody="Inconsistent decision-making led to higher-than-expected default rates. Yet analysis of five years of loan performance revealed patterns humans couldn't consistently identify: certain combinations of financial metrics predicted default better than credit scores, industry-specific factors influenced repayment, and cash-flow patterns beat balance-sheet metrics for small businesses. The company needed to scale while maintaining or improving credit quality."
      clientProfile={{
        industry: "Specialty Lending Firm",
        companySize: "100 Employees",
        projectDuration: "Tiered Workflow",
        additionalInfo: "Explainable AI",
        additionalLabel: "Compliance"
      }}
      challengeTitle="Why Growth Stalled"
      challenges={[
        {
          icon: Gauge,
          title: "Capped at 200 apps a month",
          description: "Underwriter capacity was the single constraint limiting growth."
        },
        {
          icon: TrendingDown,
          title: "Inconsistent decisions",
          description: "Variable underwriting drove higher-than-expected default rates."
        },
        {
          icon: Brain,
          title: "Hidden risk patterns",
          description: "Cash-flow and industry signals predicted default better than credit scores, but humans applied them inconsistently."
        },
        {
          icon: ShieldCheck,
          title: "Regulatory scrutiny",
          description: "Any automated model had to be explainable and fair-lending compliant from day one."
        }
      ]}
      approachTitle="An Explainable Credit Model With Human Tiers"
      approachIntro="NEXDYNE developed a machine-learning credit model on historical performance — using explainable AI for regulatory defensibility and a tiered workflow that balanced automation with human oversight."
      steps={[
        {
          step: "01",
          title: "Model the real risk drivers",
          description: "The ML model combined traditional financial metrics with alternative data, with monitoring to detect drift and hold accuracy."
        },
        {
          step: "02",
          title: "Automate document handling",
          description: "OCR and NLP extracted and spread data from bank statements and tax returns, flagging inconsistencies and detecting fraud."
        },
        {
          step: "03",
          title: "Tier the decisions",
          description: "Low-risk applications auto-approved in hours, medium-risk got pre-scored recommendations, and high-risk received full manual review with AI insights."
        },
        {
          step: "04",
          title: "Bake in compliance",
          description: "Adverse-action analysis, disparate-impact testing, and examination documentation were built in from the start."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Layers,
          value: "5x",
          label: "Application throughput",
          detail: "From 200 to 1,000+ a month with no added headcount"
        },
        {
          icon: ScanText,
          value: "22%",
          label: "Lower default rate",
          detail: "As the model caught risks humans missed, decisions in 4 hours"
        },
        {
          icon: DollarSign,
          value: "$45M",
          label: "New loan volume",
          detail: "In year one, with credit quality improving alongside growth"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting Claims Processing Time 73% With Document AI",
          metric: "73%",
          label: "faster processing",
          link: "/capabilities/artificial-intelligence/case-studies/insurance-document-ai",
          image: "/case-insurance-office.f039a4a1.jpg"
        },
        {
          title: "Automating 90% of Loan Processing Workflows",
          metric: "90%",
          label: "process automation",
          link: "/cases/financial-institution-automation",
          image: "/images/cases/financial-institution-automation-hero.jpg"
        }
      ]}
      ctaTitle="Ready to scale underwriting without adding risk?"
      ctaDescription="Let's talk about what explainable AI underwriting could do for your throughput and credit quality."
    />
  );
}

export default LenderAIUnderwriting;
