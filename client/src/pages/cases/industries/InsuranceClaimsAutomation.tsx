import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileCheck, Clock, DollarSign, Users, Brain, Target, Shield, Zap } from "lucide-react";

export default function InsuranceClaimsAutomation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Claims Automation | Insurance Case Study"
      seoDescription="How an insurer reduced claims processing time by 60% through AI-powered automation while improving accuracy and customer satisfaction."
      canonical="/cases/insurance-claims-automation"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="Insurer Reduces Claims Processing Time 60% with AI Automation"
      subtitle="How intelligent document processing and automated decisioning transformed claims operations, improving speed, accuracy, and customer experience."
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
      metrics={[
        { value: "60%", label: "Faster Processing" },
        { value: "85%", label: "Straight-Through Rate" },
        { value: "$120M", label: "Annual Savings" },
        { value: "+30pts", label: "NPS Improvement" }
      ]}
      clientContextTitle="An Insurer Drowning in Claims"
      clientContextIntro="A major P&C insurer processed 2 million claims annually with an average cycle time of 15 days. Customers were frustrated—competitors were settling simple claims in hours. The claims organization was the largest cost center, with 3,000 adjusters manually reviewing documents and making decisions."
      clientContextBody="Simple claims that should be auto-approved sat in queues alongside complex cases. Adjusters spent 60% of their time on administrative tasks—gathering documents, entering data, checking coverage—instead of investigating and negotiating. The insurer needed to automate routine work and free adjusters for high-value activities."
      clientProfile={{
        industry: "Property & Casualty Insurance",
        companySize: "2M Claims/Year",
        projectDuration: "18 Months",
        additionalInfo: "3,000 Adjusters",
        additionalLabel: "Claims Staff"
      }}
      challengeTitle="Manual Processing at Scale"
      challenges={[
        {
          icon: Clock,
          title: "Slow Cycle Times",
          description: "15-day average claims cycle—competitors settling simple claims in hours."
        },
        {
          icon: FileCheck,
          title: "Manual Document Review",
          description: "Adjusters manually reviewing every document—60% of time on administrative tasks."
        },
        {
          icon: Users,
          title: "High Costs",
          description: "3,000 adjusters processing claims—largest operational cost center."
        },
        {
          icon: Target,
          title: "No Differentiation",
          description: "Simple and complex claims in same queue—no intelligent routing or automation."
        }
      ]}
      approachTitle="Intelligent Claims Automation"
      approachIntro="NexDyne implemented an AI-powered claims platform that automated document processing, enabled straight-through processing for simple claims, and augmented adjusters for complex cases."
      steps={[
        {
          step: "01",
          title: "Intelligent Document Processing",
          description: "Deployed AI that automatically extracted information from claims documents: police reports, medical records, repair estimates, and photos. 95% accuracy on structured documents, 85% on unstructured."
        },
        {
          step: "02",
          title: "Automated Decisioning",
          description: "Built ML models that assessed claims and recommended decisions. Simple claims with clear coverage and reasonable amounts processed straight-through. Complex claims routed to appropriate adjusters with AI-prepared summaries."
        },
        {
          step: "03",
          title: "Fraud Detection",
          description: "Implemented real-time fraud scoring that identified suspicious claims for investigation. Models learned patterns from historical fraud cases and flagged anomalies for human review."
        },
        {
          step: "04",
          title: "Adjuster Workbench",
          description: "Created tools that augmented adjusters on complex claims: AI-prepared case summaries, recommended reserves, similar case lookup, and negotiation guidance. Adjusters focused on judgment, not data gathering."
        }
      ]}
      resultsTitle="Claims Excellence"
      results={[
        {
          icon: Clock,
          value: "60%",
          label: "Faster processing",
          detail: "From 15 days to 6 days average"
        },
        {
          icon: Zap,
          value: "85%",
          label: "Straight-through rate",
          detail: "Simple claims auto-processed"
        },
        {
          icon: DollarSign,
          value: "$120M",
          label: "Annual savings",
          detail: "From automation and efficiency"
        },
        {
          icon: Shield,
          value: "+30pts",
          label: "NPS improvement",
          detail: "Customers love faster settlements"
        }
      ]}
      quote="AI transformed our claims operation. Simple claims that used to take days now settle in hours—automatically. Our adjusters focus on complex cases where their expertise matters. Customers are happier, costs are lower, and our adjusters are doing more meaningful work."
      quoteAuthor="Patricia Williams"
      quoteRole="Chief Claims Officer"
      relatedStudies={[
        {
          title: "Underwriting Transformation",
          metric: "40%",
          label: "faster quote turnaround",
          link: "/cases/insurance-underwriting-transformation",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
        },
        {
          title: "Customer Experience Modernization",
          metric: "50%",
          label: "digital adoption",
          link: "/cases/insurance-customer-experience",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Claims?"
      ctaDescription="Let's discuss how AI can accelerate your claims operations."
    />
  );
}
