import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Building2, Users, Clock, DollarSign, Smartphone, Target, Shield, Star } from "lucide-react";

export default function GovernmentDigitalServices() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Digital Services Transformation | Government Case Study"
      seoDescription="How a state government improved citizen satisfaction 40% through digital service transformation and user-centered design."
      canonical="/cases/government-digital-services"
      industry="Public Sector"
      industryLink="/industries/public-sector"
      title="State Government Transforms Digital Services, Improves Satisfaction 40%"
      subtitle="How user-centered design and modern technology transformed citizen interactions from frustrating bureaucracy to seamless digital experiences."
      heroImage="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=1920&q=80"
      metrics={[
        { value: "40%", label: "Higher Satisfaction" },
        { value: "70%", label: "Digital Adoption" },
        { value: "60%", label: "Faster Processing" },
        { value: "$85M", label: "Annual Savings" }
      ]}
      clientContextTitle="A State Failing Its Citizens"
      clientContextIntro="A large state government served 12 million residents through 50+ agencies, but the citizen experience was fragmented and frustrating. Each agency had its own website, login, and processes. Residents navigated a maze of forms, waited in lines, and called overwhelmed call centers. Trust in government was eroding."
      clientContextBody="Digital services existed but were poorly designed—confusing navigation, broken links, and processes that required in-person visits to complete. Only 25% of eligible transactions happened online. The state was spending $200M annually on call centers and in-person service while citizens demanded better."
      clientProfile={{
        industry: "State Government",
        companySize: "12 Million Residents",
        projectDuration: "36 Months",
        additionalInfo: "50+ Agencies",
        additionalLabel: "Government Scope"
      }}
      challengeTitle="Bureaucracy in the Digital Age"
      challenges={[
        {
          icon: Users,
          title: "Fragmented Experience",
          description: "50+ agency websites with different logins, designs, and processes—no unified experience."
        },
        {
          icon: Clock,
          title: "Slow Processing",
          description: "Weeks to process applications that should take minutes—paper-based workflows."
        },
        {
          icon: Smartphone,
          title: "Low Digital Adoption",
          description: "Only 25% of transactions online—citizens forced into call centers and offices."
        },
        {
          icon: Star,
          title: "Poor Satisfaction",
          description: "32% citizen satisfaction with government services—eroding public trust."
        }
      ]}
      approachTitle="Citizen-Centered Government"
      approachIntro="NexDyne led a comprehensive digital transformation: unified citizen portal, redesigned services around citizen needs, and modernized back-end systems to enable seamless digital experiences."
      steps={[
        {
          step: "01",
          title: "Unified Citizen Portal",
          description: "Built a single digital front door for all government services. One login, one profile, one place to access services across all agencies. Citizens could complete transactions without knowing which agency was responsible."
        },
        {
          step: "02",
          title: "Service Redesign",
          description: "Redesigned top 50 citizen services using human-centered design. Simplified forms, eliminated unnecessary requirements, and created mobile-first experiences. Reduced average application time from 45 minutes to 8 minutes."
        },
        {
          step: "03",
          title: "Process Automation",
          description: "Automated back-end processing with intelligent document review, automated eligibility determination, and exception-based workflows. Processing that took weeks now completed in hours."
        },
        {
          step: "04",
          title: "Proactive Communication",
          description: "Implemented proactive notifications that kept citizens informed of application status, upcoming renewals, and available benefits. Citizens no longer had to call to check status."
        }
      ]}
      resultsTitle="Government That Works"
      results={[
        {
          icon: Star,
          value: "40%",
          label: "Improvement in satisfaction",
          detail: "From 32% to 72% citizen satisfaction"
        },
        {
          icon: Smartphone,
          value: "70%",
          label: "Digital adoption",
          detail: "Up from 25%—citizens choosing digital"
        },
        {
          icon: Clock,
          value: "60%",
          label: "Faster processing",
          detail: "From weeks to hours for most services"
        },
        {
          icon: DollarSign,
          value: "$85M",
          label: "Annual savings",
          detail: "From reduced call center and office costs"
        }
      ]}
      quote="We stopped thinking about government services from the agency perspective and started thinking from the citizen perspective. The unified portal means citizens don't need to know which agency does what—they just get what they need. We've restored trust by delivering services that actually work."
      quoteAuthor="Secretary Maria Santos"
      quoteRole="Department of Digital Services"
      relatedStudies={[
        {
          title: "AI for Benefits Administration",
          metric: "50%",
          label: "faster eligibility determination",
          link: "/cases/government-benefits-ai",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80"
        },
        {
          title: "Smart City Infrastructure",
          metric: "30%",
          label: "reduction in traffic congestion",
          link: "/cases/smart-city-infrastructure",
          image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Government Services?"
      ctaDescription="Let's discuss how digital transformation can improve citizen experience."
    />
  );
}
