import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Smartphone, Users, TrendingDown, Heart, Zap, Target, DollarSign, Star } from "lucide-react";

export default function TelecomCustomerExperience() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Customer Experience Transformation | Telecom Case Study"
      seoDescription="How a telecom operator reduced churn by 40% through AI-powered customer experience transformation and proactive service management."
      canonical="/cases/telecom-customer-experience"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="Telecom Operator Reduces Churn 40% Through CX Transformation"
      subtitle="How AI-powered customer experience management and proactive service optimization transformed subscriber retention and satisfaction."
      heroImage="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1920&q=80"
      metrics={[
        { value: "40%", label: "Churn Reduction" },
        { value: "35pts", label: "NPS Improvement" },
        { value: "$120M", label: "Retained Revenue" },
        { value: "60%", label: "Fewer Complaints" }
      ]}
      clientContextTitle="A Telecom Fighting Customer Defection"
      clientContextIntro="A major wireless carrier with 25 million subscribers faced relentless churn pressure. Monthly churn exceeded 2%—industry-leading competitors were at 1.2%. Each percentage point of churn represented $300M in annual revenue walking out the door. Customer satisfaction scores lagged the industry by 15 points."
      clientContextBody="The root causes were clear: network issues went undetected until customers complained, billing problems created frustration, and service interactions were reactive rather than proactive. The carrier knew when customers left but couldn't predict or prevent defection. By the time retention offers were made, customers had already decided to switch."
      clientProfile={{
        industry: "Wireless Telecommunications",
        companySize: "25M Subscribers",
        projectDuration: "18 Months",
        additionalInfo: "2.0% Monthly Churn",
        additionalLabel: "Starting Point"
      }}
      challengeTitle="The Churn Crisis"
      challenges={[
        {
          icon: TrendingDown,
          title: "High Churn Rate",
          description: "2.0% monthly churn vs. 1.2% industry leaders—$300M annual revenue at risk per point."
        },
        {
          icon: Users,
          title: "Reactive Service",
          description: "Network and billing issues discovered only when customers complained—damage already done."
        },
        {
          icon: Heart,
          title: "Low Satisfaction",
          description: "NPS of 12 vs. industry average of 27—customers tolerating service, not advocating."
        },
        {
          icon: Target,
          title: "Late Intervention",
          description: "Retention offers made after customers decided to leave—too late to change minds."
        }
      ]}
      approachTitle="Proactive Customer Experience"
      approachIntro="NexDyne designed and implemented an AI-powered customer experience platform that predicted issues before they impacted customers, personalized interactions, and enabled proactive retention."
      steps={[
        {
          step: "01",
          title: "Experience Monitoring",
          description: "Built a real-time customer experience platform that monitored network quality, billing accuracy, and service interactions for every subscriber. Detected issues before customers noticed—dropped calls, slow data, billing errors."
        },
        {
          step: "02",
          title: "Churn Prediction",
          description: "Developed ML models that predicted churn probability 60 days in advance based on experience signals, usage patterns, and interaction history. Identified at-risk customers while there was still time to act."
        },
        {
          step: "03",
          title: "Proactive Outreach",
          description: "Implemented automated proactive outreach for experience issues. Customers received apologies and credits before they complained. High-risk customers received personalized retention offers tailored to their value and preferences."
        },
        {
          step: "04",
          title: "Service Transformation",
          description: "Redesigned customer service with AI-powered agent assist, intelligent routing, and first-contact resolution focus. Agents saw complete customer context and recommended next-best-actions."
        }
      ]}
      resultsTitle="Customer Loyalty Restored"
      results={[
        {
          icon: TrendingDown,
          value: "40%",
          label: "Churn reduction",
          detail: "From 2.0% to 1.2% monthly churn"
        },
        {
          icon: Heart,
          value: "35pts",
          label: "NPS improvement",
          detail: "From 12 to 47—above industry average"
        },
        {
          icon: DollarSign,
          value: "$120M",
          label: "Retained annual revenue",
          detail: "From reduced customer defection"
        },
        {
          icon: Star,
          value: "60%",
          label: "Fewer complaints",
          detail: "Proactive resolution before escalation"
        }
      ]}
      quote="We flipped from reactive to proactive. Now we know about network issues before customers do—and we reach out to apologize before they call to complain. Our retention team focuses on customers we can save, not ones who've already decided to leave. It's transformed how we think about customer experience."
      quoteAuthor="Maria Santos"
      quoteRole="Chief Customer Officer"
      relatedStudies={[
        {
          title: "Streaming Platform Launch for Media Company",
          metric: "8M",
          label: "subscribers in year one",
          link: "/cases/media-streaming-launch",
          image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=80"
        },
        {
          title: "Engineering Transformation for Tech Company",
          metric: "3x",
          label: "faster release velocity",
          link: "/cases/tech-engineering-transformation",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Customer Experience?"
      ctaDescription="Let's discuss how proactive CX can reduce churn and drive loyalty."
    />
  );
}
