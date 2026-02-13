import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileCheck, Brain, Clock, Users, DollarSign, Target, Shield, Heart } from "lucide-react";

export default function GovernmentBenefitsAI() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="AI for Benefits Administration | Government Case Study"
      seoDescription="How a state agency achieved 50% faster eligibility determination using AI-powered document processing and intelligent case management."
      canonical="/cases/government-benefits-ai"
      industry="Public Sector"
      industryLink="/industries/public-sector"
      title="State Agency Accelerates Benefits Processing 50% with AI"
      subtitle="How intelligent document processing and AI-powered eligibility determination transformed benefits administration, serving more citizens faster."
      heroImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80"
      metrics={[
        { value: "50%", label: "Faster Processing" },
        { value: "95%", label: "Accuracy Rate" },
        { value: "200K", label: "More Citizens Served" },
        { value: "$35M", label: "Annual Savings" }
      ]}
      clientContextTitle="An Agency Drowning in Applications"
      clientContextIntro="A state health and human services agency processed 2 million benefits applications annually for programs including Medicaid, food assistance, and childcare subsidies. But processing times had stretched to 45 days—far exceeding federal requirements—and a backlog of 300,000 cases was growing."
      clientContextBody="Case workers manually reviewed documents, verified information across systems, and made eligibility determinations. Each case required 4+ hours of work. Staff were overwhelmed, errors were common, and citizens in need waited weeks for benefits they desperately needed."
      clientProfile={{
        industry: "State Government",
        companySize: "2M Applications/Year",
        projectDuration: "18 Months",
        additionalInfo: "45 Days Processing",
        additionalLabel: "Starting Point"
      }}
      challengeTitle="Manual Processing at Scale"
      challenges={[
        {
          icon: Clock,
          title: "Long Wait Times",
          description: "45-day average processing time—citizens waiting weeks for critical benefits."
        },
        {
          icon: FileCheck,
          title: "Manual Document Review",
          description: "Case workers manually reviewing documents—4+ hours per case, error-prone."
        },
        {
          icon: Users,
          title: "Growing Backlog",
          description: "300,000 case backlog and growing—staff couldn't keep up with demand."
        },
        {
          icon: Target,
          title: "Compliance Risk",
          description: "Missing federal processing deadlines—risking funding and penalties."
        }
      ]}
      approachTitle="AI-Powered Benefits Administration"
      approachIntro="NexDyne implemented an AI-powered benefits processing platform that automated document review, verified information across systems, and recommended eligibility determinations—enabling case workers to focus on complex cases."
      steps={[
        {
          step: "01",
          title: "Intelligent Document Processing",
          description: "Deployed AI that automatically extracted information from submitted documents: pay stubs, tax returns, identity documents, and proof of residence. 90% of documents processed without human review."
        },
        {
          step: "02",
          title: "Automated Verification",
          description: "Built integrations that automatically verified information against authoritative sources: income with IRS, identity with DMV, employment with state wage records. Eliminated manual verification for most cases."
        },
        {
          step: "03",
          title: "Eligibility Recommendation",
          description: "Developed ML models that recommended eligibility determinations based on extracted and verified information. Case workers reviewed AI recommendations rather than building cases from scratch."
        },
        {
          step: "04",
          title: "Exception Handling",
          description: "Created intelligent routing that identified complex cases requiring human judgment. Simple cases processed automatically; complex cases routed to experienced workers with AI-prepared summaries."
        }
      ]}
      resultsTitle="Benefits That Reach Citizens"
      results={[
        {
          icon: Clock,
          value: "50%",
          label: "Faster processing",
          detail: "From 45 to 22 days average"
        },
        {
          icon: Shield,
          value: "95%",
          label: "Accuracy rate",
          detail: "AI recommendations highly accurate"
        },
        {
          icon: Heart,
          value: "200K",
          label: "More citizens served",
          detail: "Backlog eliminated, capacity increased"
        },
        {
          icon: DollarSign,
          value: "$35M",
          label: "Annual savings",
          detail: "From automation and efficiency"
        }
      ]}
      quote="AI transformed how we serve citizens. Our case workers used to spend hours on paperwork—now they spend time helping people with complex situations. We're processing faster, more accurately, and serving more citizens than ever. This is what government should be."
      quoteAuthor="Director Robert Chen"
      quoteRole="Department of Health and Human Services"
      relatedStudies={[
        {
          title: "Digital Services Transformation",
          metric: "40%",
          label: "higher citizen satisfaction",
          link: "/cases/government-digital-services",
          image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=600&q=80"
        },
        {
          title: "Smart City Infrastructure",
          metric: "30%",
          label: "reduction in traffic congestion",
          link: "/cases/smart-city-infrastructure",
          image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Modernize Benefits Administration?"
      ctaDescription="Let's discuss how AI can help you serve citizens faster and better."
    />
  );
}
