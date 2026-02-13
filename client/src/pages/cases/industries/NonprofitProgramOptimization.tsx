import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Heart, Users, Target, DollarSign, TrendingUp, Cog, Globe, Zap } from "lucide-react";

export default function NonprofitProgramOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Program Delivery Optimization | Nonprofit Case Study"
      seoDescription="How a nonprofit served 40% more beneficiaries through operational excellence and data-driven program optimization."
      canonical="/cases/nonprofit-program-optimization"
      industry="Social Impact"
      industryLink="/industries/social-impact"
      title="Nonprofit Serves 40% More Beneficiaries Through Optimization"
      subtitle="How operational excellence, data-driven decisions, and process improvement expanded reach without expanding budget."
      heroImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
      metrics={[
        { value: "40%", label: "More Served" },
        { value: "35%", label: "Lower Cost/Person" },
        { value: "25%", label: "Better Outcomes" },
        { value: "Zero", label: "Budget Increase" }
      ]}
      clientContextTitle="A Nonprofit Hitting Capacity Limits"
      clientContextIntro="A workforce development nonprofit served 10,000 job seekers annually through job training and placement programs. Demand far exceeded capacity—5,000 people on waiting lists. But budgets were flat. The organization needed to serve more people without more money."
      clientContextBody="Programs had evolved organically over years, with inefficiencies baked in. Staff time was consumed by administration. Participants dropped out due to scheduling conflicts. The organization knew it could do better but didn't know where to start."
      clientProfile={{
        industry: "Workforce Development",
        companySize: "10K Participants/Year",
        projectDuration: "12 Months",
        additionalInfo: "5K on Waiting List",
        additionalLabel: "Unmet Demand"
      }}
      challengeTitle="Demand Exceeds Capacity"
      challenges={[
        {
          icon: Users,
          title: "Capacity Constraints",
          description: "5,000 people on waiting lists—demand far exceeds ability to serve."
        },
        {
          icon: DollarSign,
          title: "Flat Budgets",
          description: "No new funding available—must do more with existing resources."
        },
        {
          icon: Cog,
          title: "Operational Inefficiency",
          description: "Programs evolved organically—inefficiencies never addressed."
        },
        {
          icon: Target,
          title: "High Dropout",
          description: "30% of participants drop out—wasted capacity and lost outcomes."
        }
      ]}
      approachTitle="Operational Excellence"
      approachIntro="NexDyne applied operational excellence principles to nonprofit program delivery: process optimization, data-driven decisions, and continuous improvement that expanded reach without expanding budget."
      steps={[
        {
          step: "01",
          title: "Process Mapping",
          description: "Mapped end-to-end participant journey from application to job placement. Identified bottlenecks, redundancies, and waste. Found 40% of staff time spent on non-value-adding activities."
        },
        {
          step: "02",
          title: "Workflow Redesign",
          description: "Redesigned processes to eliminate waste: streamlined intake, automated scheduling, and simplified reporting. Freed staff time for direct participant support."
        },
        {
          step: "03",
          title: "Retention Intervention",
          description: "Analyzed dropout patterns and implemented targeted interventions: flexible scheduling, childcare support, and proactive outreach to at-risk participants. Dropout fell from 30% to 15%."
        },
        {
          step: "04",
          title: "Continuous Improvement",
          description: "Established data-driven improvement culture: regular outcome reviews, staff-driven problem solving, and rapid testing of new approaches. Organization learned to optimize continuously."
        }
      ]}
      resultsTitle="More Impact, Same Budget"
      results={[
        {
          icon: Users,
          value: "40%",
          label: "More people served",
          detail: "From 10K to 14K annually"
        },
        {
          icon: DollarSign,
          value: "35%",
          label: "Lower cost per person",
          detail: "From efficiency gains"
        },
        {
          icon: TrendingUp,
          value: "25%",
          label: "Better outcomes",
          detail: "Higher job placement rates"
        },
        {
          icon: Heart,
          value: "Zero",
          label: "Budget increase",
          detail: "Did more with same resources"
        }
      ]}
      quote="We thought we needed more money to serve more people. What we needed was to work smarter. By eliminating waste and focusing on what matters, we serve 40% more people with the same budget. Our staff are less burned out, our participants get better service, and our outcomes have improved."
      quoteAuthor="Angela Thompson"
      quoteRole="Executive Director"
      relatedStudies={[
        {
          title: "Digital Transformation for Nonprofits",
          metric: "60%",
          label: "higher donor engagement",
          link: "/cases/nonprofit-digital-transformation",
          image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
        },
        {
          title: "Impact Measurement Platform",
          metric: "10x",
          label: "better outcome tracking",
          link: "/cases/nonprofit-impact-measurement",
          image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Optimize Programs?"
      ctaDescription="Let's discuss how operational excellence can expand your impact."
    />
  );
}
