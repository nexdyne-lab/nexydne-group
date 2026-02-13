import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, FileCheck, Shield, Users, Zap, TrendingUp, DollarSign, Star } from "lucide-react";

export default function WealthOnboarding() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Digital Wealth Onboarding Transformation | Financial Services Case Study"
      seoDescription="How a wealth management firm reduced client onboarding time by 60% through intelligent document processing and automated compliance workflows."
      canonical="/cases/wealth-onboarding"
      industry="Wealth Management"
      industryLink="/industries/financial-services"
      title="Wealth Manager Transforms Client Onboarding Experience"
      subtitle="How intelligent document processing and automated compliance workflows reduced onboarding time from 3 weeks to 5 days while improving accuracy."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
      metrics={[
        { value: "60%", label: "Faster Onboarding" },
        { value: "95%", label: "Document Accuracy" },
        { value: "$4.2M", label: "Annual Savings" },
        { value: "92%", label: "Client Satisfaction" }
      ]}
      clientContextTitle="A Premium Experience Undermined by Paper"
      clientContextIntro="A boutique wealth management firm serving high-net-worth individuals prided itself on personalized service. Yet the client onboarding experience told a different story: three weeks of document collection, manual data entry, compliance checks, and back-and-forth with clients for missing information."
      clientContextBody="Advisors spent 40% of their time on administrative tasks instead of client relationships. New clients grew frustrated with repeated requests for the same documents. The firm's reputation for white-glove service was being eroded by a process that felt anything but premium."
      clientProfile={{
        industry: "Wealth Management",
        companySize: "$8.5 Billion AUM",
        projectDuration: "16 Weeks",
        additionalInfo: "UHNW Individuals",
        additionalLabel: "Client Segment"
      }}
      challengeTitle="When Premium Service Meets Paper Processes"
      challenges={[
        {
          icon: Clock,
          title: "3-Week Onboarding",
          description: "New clients waited weeks to begin investing while documents were collected, verified, and processed manually."
        },
        {
          icon: FileCheck,
          title: "Document Chaos",
          description: "Average of 47 documents per client, often submitted multiple times due to quality issues or missing information."
        },
        {
          icon: Shield,
          title: "Compliance Burden",
          description: "KYC/AML checks required manual review of each document, creating bottlenecks and compliance risk."
        },
        {
          icon: Users,
          title: "Advisor Distraction",
          description: "40% of advisor time spent on administrative tasks instead of building client relationships."
        }
      ]}
      approachTitle="Intelligent Automation, Human Touch"
      approachIntro="NexDyne designed an intelligent onboarding platform that automated document processing and compliance workflows while preserving the personalized experience that defined the firm's brand."
      steps={[
        {
          step: "01",
          title: "Digital Document Collection",
          description: "Built a secure client portal with intelligent document requests. The system identified required documents based on client profile and investment objectives, eliminating redundant requests and guiding clients through the process."
        },
        {
          step: "02",
          title: "AI-Powered Document Processing",
          description: "Deployed intelligent document processing (IDP) to extract data from passports, tax returns, trust documents, and financial statements. OCR with ML validation achieved 95% accuracy, flagging only exceptions for human review."
        },
        {
          step: "03",
          title: "Automated Compliance Workflows",
          description: "Integrated with KYC/AML databases for automated screening. Built workflow orchestration that routed documents through compliance checks in parallel rather than sequentially, reducing bottlenecks."
        },
        {
          step: "04",
          title: "Advisor Dashboard",
          description: "Created a real-time dashboard showing onboarding status, pending items, and client communication history. Advisors could focus on relationship-building while the system handled administrative coordination."
        }
      ]}
      resultsTitle="Premium Experience, Operational Excellence"
      results={[
        {
          icon: Zap,
          value: "60%",
          label: "Faster onboarding",
          detail: "From 3 weeks to 5 days average"
        },
        {
          icon: FileCheck,
          value: "95%",
          label: "Document accuracy",
          detail: "Automated extraction with ML validation"
        },
        {
          icon: DollarSign,
          value: "$4.2M",
          label: "Annual cost savings",
          detail: "Reduced manual processing and rework"
        },
        {
          icon: Star,
          value: "92%",
          label: "Client satisfaction",
          detail: "Up from 71% pre-transformation"
        }
      ]}
      quote="Our clients expect exceptional service from the first interaction. Now, instead of apologizing for paperwork delays, our advisors can focus on understanding client goals and building portfolios. The technology is invisible to clients—they just experience a seamless, premium onboarding."
      quoteAuthor="Sarah Mitchell"
      quoteRole="Chief Operating Officer"
      relatedStudies={[
        {
          title: "AI-Powered Fraud Detection Transformation",
          metric: "73%",
          label: "reduction in fraud losses",
          link: "/cases/financial-fraud-detection",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80"
        },
        {
          title: "Multinational Bank Cross-Sell Transformation",
          metric: "$200M",
          label: "increase in cross-sell revenue",
          link: "/cases/bank-cross-sell",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Your Client Experience?"
      ctaDescription="Let's discuss how intelligent automation can elevate your client onboarding."
    />
  );
}
