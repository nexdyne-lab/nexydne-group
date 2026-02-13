import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileCheck, Clock, Target, DollarSign, Brain, Shield, BarChart3, Zap } from "lucide-react";

export default function InsuranceUnderwritingTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Underwriting Transformation | Insurance Case Study"
      seoDescription="How an insurer achieved 40% faster quote turnaround through AI-powered underwriting automation and risk assessment."
      canonical="/cases/insurance-underwriting-transformation"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="Insurer Achieves 40% Faster Quotes Through Underwriting Transformation"
      subtitle="How AI-powered risk assessment and automated workflows transformed underwriting from bottleneck to competitive advantage."
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
      metrics={[
        { value: "40%", label: "Faster Quotes" },
        { value: "70%", label: "Auto-Decisioned" },
        { value: "15%", label: "Better Loss Ratio" },
        { value: "$85M", label: "Premium Growth" }
      ]}
      clientContextTitle="An Underwriting Organization Under Pressure"
      clientContextIntro="A commercial lines insurer was losing business to faster competitors. Quote turnaround averaged 5 days—brokers wanted same-day responses. Underwriters were overwhelmed, manually gathering data and assessing risks for every submission. Hit ratios were declining as brokers placed business with faster carriers."
      clientContextBody="The underwriting process was paper-intensive and inconsistent. Each underwriter had their own approach to risk assessment. Pricing varied for similar risks depending on who handled the submission. The insurer needed to automate routine underwriting, ensure consistency, and free underwriters for complex risks."
      clientProfile={{
        industry: "Commercial Insurance",
        companySize: "$3B Premium",
        projectDuration: "15 Months",
        additionalInfo: "200 Underwriters",
        additionalLabel: "Underwriting Staff"
      }}
      challengeTitle="Underwriting as Bottleneck"
      challenges={[
        {
          icon: Clock,
          title: "Slow Turnaround",
          description: "5-day average quote time—brokers placing business with faster competitors."
        },
        {
          icon: Target,
          title: "Declining Hit Ratios",
          description: "Win rates falling as speed-to-quote became competitive differentiator."
        },
        {
          icon: FileCheck,
          title: "Manual Data Gathering",
          description: "Underwriters spending 70% of time gathering data, 30% on actual underwriting."
        },
        {
          icon: BarChart3,
          title: "Inconsistent Pricing",
          description: "Similar risks priced differently depending on underwriter—no systematic approach."
        }
      ]}
      approachTitle="Intelligent Underwriting"
      approachIntro="NexDyne implemented an AI-powered underwriting platform that automated data gathering, provided risk scoring, and enabled straight-through processing for standard risks."
      steps={[
        {
          step: "01",
          title: "Automated Data Enrichment",
          description: "Built integrations that automatically gathered underwriting data: company financials, loss history, property details, and third-party risk scores. Underwriters received complete submissions, not raw applications."
        },
        {
          step: "02",
          title: "AI Risk Assessment",
          description: "Developed ML models that scored risks and recommended pricing based on historical loss data and risk characteristics. Models learned from underwriter decisions and loss outcomes."
        },
        {
          step: "03",
          title: "Straight-Through Processing",
          description: "Enabled auto-quoting for standard risks that fell within appetite and pricing guidelines. 70% of submissions processed without underwriter touch—same-day quotes for routine business."
        },
        {
          step: "04",
          title: "Underwriter Workbench",
          description: "Created tools for complex risks: AI-prepared risk summaries, comparable account lookup, and pricing recommendations. Underwriters focused on judgment calls, not data gathering."
        }
      ]}
      resultsTitle="Underwriting Excellence"
      results={[
        {
          icon: Clock,
          value: "40%",
          label: "Faster quote turnaround",
          detail: "From 5 days to 3 days average"
        },
        {
          icon: Zap,
          value: "70%",
          label: "Auto-decisioned",
          detail: "Standard risks quoted same-day"
        },
        {
          icon: Shield,
          value: "15%",
          label: "Better loss ratio",
          detail: "More consistent, accurate pricing"
        },
        {
          icon: DollarSign,
          value: "$85M",
          label: "Premium growth",
          detail: "From improved hit ratios"
        }
      ]}
      quote="AI underwriting transformed our competitive position. We went from losing business on speed to winning it. Our underwriters now focus on complex risks where their expertise creates value. Standard business flows through automatically with consistent pricing. We're writing more premium with better results."
      quoteAuthor="Robert Martinez"
      quoteRole="Chief Underwriting Officer"
      relatedStudies={[
        {
          title: "Claims Automation",
          metric: "60%",
          label: "faster processing",
          link: "/cases/insurance-claims-automation",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
        },
        {
          title: "Customer Experience Modernization",
          metric: "50%",
          label: "digital adoption",
          link: "/cases/insurance-customer-experience",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Underwriting?"
      ctaDescription="Let's discuss how AI can accelerate your underwriting operations."
    />
  );
}
