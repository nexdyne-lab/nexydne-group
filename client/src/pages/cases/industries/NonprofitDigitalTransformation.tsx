import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Heart, Users, DollarSign, Target, Smartphone, TrendingUp, Globe, Zap } from "lucide-react";

export default function NonprofitDigitalTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Digital Transformation | Nonprofit Case Study"
      seoDescription="How a global nonprofit increased donor engagement by 60% through digital transformation and personalized outreach."
      canonical="/cases/nonprofit-digital-transformation"
      industry="Social Impact"
      industryLink="/industries/social-impact"
      title="Global Nonprofit Increases Donor Engagement 60% Through Digital"
      subtitle="How personalized digital experiences and data-driven outreach transformed fundraising and deepened donor relationships."
      heroImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
      metrics={[
        { value: "60%", label: "Higher Engagement" },
        { value: "45%", label: "More Donations" },
        { value: "3x", label: "Donor Retention" },
        { value: "$25M", label: "Revenue Growth" }
      ]}
      clientContextTitle="A Nonprofit Losing Connection with Donors"
      clientContextIntro="A global humanitarian organization with 2 million donors was struggling to maintain engagement. Donor retention had fallen to 35%—below the nonprofit average. Communications were generic mass mailings that didn't resonate. Younger donors expected digital experiences the organization couldn't deliver."
      clientContextBody="The organization had donor data scattered across systems with no unified view. Fundraising was campaign-driven, not relationship-driven. Staff couldn't tell which donors were at risk of lapsing or which were ready to give more. The organization needed to transform how it engaged donors."
      clientProfile={{
        industry: "Humanitarian Nonprofit",
        companySize: "2M Donors",
        projectDuration: "18 Months",
        additionalInfo: "$200M Annual Revenue",
        additionalLabel: "Fundraising Scale"
      }}
      challengeTitle="Disconnected from Donors"
      challenges={[
        {
          icon: Users,
          title: "Low Retention",
          description: "35% donor retention—losing donors faster than acquiring them."
        },
        {
          icon: Target,
          title: "Generic Communications",
          description: "Same message to all donors regardless of interests or history."
        },
        {
          icon: Smartphone,
          title: "Poor Digital Experience",
          description: "Outdated website, no mobile giving—losing younger donors."
        },
        {
          icon: Heart,
          title: "No Donor Intelligence",
          description: "Can't identify at-risk donors or upgrade opportunities."
        }
      ]}
      approachTitle="Donor-Centric Digital Transformation"
      approachIntro="NexDyne led a comprehensive digital transformation: unified donor platform, personalized engagement, and data-driven fundraising that deepened donor relationships."
      steps={[
        {
          step: "01",
          title: "Unified Donor Platform",
          description: "Built a single donor platform that unified data from all sources: giving history, event attendance, email engagement, and program interests. Created a complete view of each donor relationship."
        },
        {
          step: "02",
          title: "Personalized Engagement",
          description: "Implemented personalization that tailored communications to donor interests and history. Donors received updates on causes they cared about, not generic appeals."
        },
        {
          step: "03",
          title: "Digital Experience",
          description: "Rebuilt digital channels with modern, mobile-first experiences. Easy online giving, impact dashboards, and personalized content. Donation conversion improved 40%."
        },
        {
          step: "04",
          title: "Predictive Fundraising",
          description: "Deployed ML models that predicted donor behavior: lapse risk, upgrade potential, and optimal ask amounts. Fundraisers focused on right donors with right asks at right times."
        }
      ]}
      resultsTitle="Donor Relationships Transformed"
      results={[
        {
          icon: TrendingUp,
          value: "60%",
          label: "Higher engagement",
          detail: "Email opens, website visits, event attendance"
        },
        {
          icon: DollarSign,
          value: "45%",
          label: "More donations",
          detail: "From improved conversion and retention"
        },
        {
          icon: Heart,
          value: "3x",
          label: "Donor retention",
          detail: "From 35% to 55%"
        },
        {
          icon: Globe,
          value: "$25M",
          label: "Revenue growth",
          detail: "Funding more mission impact"
        }
      ]}
      quote="Digital transformation changed how we connect with donors. We went from mass mailings to personal relationships. Donors feel seen and valued—they know their giving makes a difference. Retention is up, giving is up, and most importantly, we're funding more impact in the world."
      quoteAuthor="Maria Santos"
      quoteRole="Chief Development Officer"
      relatedStudies={[
        {
          title: "Impact Measurement Platform",
          metric: "10x",
          label: "better outcome tracking",
          link: "/cases/nonprofit-impact-measurement",
          image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80"
        },
        {
          title: "Program Delivery Optimization",
          metric: "40%",
          label: "more beneficiaries served",
          link: "/cases/nonprofit-program-optimization",
          image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Donor Engagement?"
      ctaDescription="Let's discuss how digital can deepen your donor relationships."
    />
  );
}
