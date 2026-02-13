import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Smartphone, Users, Star, DollarSign, Target, Heart, TrendingUp, Zap } from "lucide-react";

export default function InsuranceCustomerExperience() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Customer Experience Modernization | Insurance Case Study"
      seoDescription="How an insurer achieved 50% digital adoption through customer experience transformation and omnichannel service delivery."
      canonical="/cases/insurance-customer-experience"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="Insurer Achieves 50% Digital Adoption Through CX Transformation"
      subtitle="How omnichannel service, self-service capabilities, and personalized engagement transformed customer experience and reduced service costs."
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
      metrics={[
        { value: "50%", label: "Digital Adoption" },
        { value: "+28pts", label: "NPS Improvement" },
        { value: "40%", label: "Lower Service Costs" },
        { value: "92%", label: "Self-Service Success" }
      ]}
      clientContextTitle="An Insurer with Outdated Customer Experience"
      clientContextIntro="A large personal lines insurer served 5 million customers through call centers and agents—digital channels were an afterthought. Customers who expected Amazon-like experiences got hold queues and paper forms. NPS lagged competitors by 20 points, and service costs were 30% above industry benchmarks."
      clientContextBody="The mobile app had a 2.3-star rating. Simple tasks like updating an address required a phone call. Customers couldn't see their policy details, file claims, or make payments online. The insurer was losing customers to digital-first competitors who made insurance easy."
      clientProfile={{
        industry: "Personal Lines Insurance",
        companySize: "5M Customers",
        projectDuration: "24 Months",
        additionalInfo: "15% Digital Adoption",
        additionalLabel: "Starting Point"
      }}
      challengeTitle="Analog Experience in a Digital World"
      challenges={[
        {
          icon: Smartphone,
          title: "Poor Digital Experience",
          description: "2.3-star mobile app, limited online capabilities—customers forced to call."
        },
        {
          icon: Star,
          title: "Low NPS",
          description: "20 points below competitors—customers tolerating service, not advocating."
        },
        {
          icon: DollarSign,
          title: "High Service Costs",
          description: "30% above benchmarks—call center handling tasks that should be self-service."
        },
        {
          icon: Users,
          title: "Customer Defection",
          description: "Losing customers to digital-first competitors with better experiences."
        }
      ]}
      approachTitle="Digital-First Customer Experience"
      approachIntro="NexDyne led a comprehensive customer experience transformation: rebuilt digital channels, enabled self-service, and created omnichannel experiences that met customers where they were."
      steps={[
        {
          step: "01",
          title: "Digital Channel Rebuild",
          description: "Rebuilt mobile app and website from the ground up with customer-centered design. Intuitive navigation, fast performance, and complete policy management capabilities. App rating improved to 4.7 stars."
        },
        {
          step: "02",
          title: "Self-Service Enablement",
          description: "Enabled customers to complete common tasks without calling: policy changes, claims filing, payment management, and document access. 92% of self-service attempts successful."
        },
        {
          step: "03",
          title: "Omnichannel Integration",
          description: "Created seamless experiences across channels. Customers could start on mobile, continue on web, and finish with an agent—context preserved throughout. No more repeating information."
        },
        {
          step: "04",
          title: "Proactive Engagement",
          description: "Implemented proactive communications: policy renewal reminders, claim status updates, and personalized recommendations. Customers informed before they needed to ask."
        }
      ]}
      resultsTitle="Customer Experience Excellence"
      results={[
        {
          icon: Smartphone,
          value: "50%",
          label: "Digital adoption",
          detail: "Up from 15%—customers choosing digital"
        },
        {
          icon: Heart,
          value: "+28pts",
          label: "NPS improvement",
          detail: "Now above competitor average"
        },
        {
          icon: DollarSign,
          value: "40%",
          label: "Lower service costs",
          detail: "Self-service reducing call volume"
        },
        {
          icon: Star,
          value: "4.7",
          label: "App store rating",
          detail: "Up from 2.3 stars"
        }
      ]}
      quote="We went from digital laggard to digital leader. Our customers can now do everything on their phone—file a claim, change their coverage, pay their bill. They don't have to call unless they want to. NPS is up, costs are down, and we're winning customers from competitors."
      quoteAuthor="Jennifer Chen"
      quoteRole="Chief Customer Officer"
      relatedStudies={[
        {
          title: "Claims Automation",
          metric: "60%",
          label: "faster processing",
          link: "/cases/insurance-claims-automation",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
        },
        {
          title: "Underwriting Transformation",
          metric: "40%",
          label: "faster quote turnaround",
          link: "/cases/insurance-underwriting-transformation",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Customer Experience?"
      ctaDescription="Let's discuss how digital transformation can improve your customer relationships."
    />
  );
}
