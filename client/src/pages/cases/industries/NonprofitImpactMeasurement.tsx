import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { BarChart3, Target, Users, DollarSign, FileCheck, TrendingUp, Heart, Zap } from "lucide-react";

export default function NonprofitImpactMeasurement() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Impact Measurement Platform | Nonprofit Case Study"
      seoDescription="How a foundation achieved 10x better outcome tracking through a unified impact measurement platform and data-driven program evaluation."
      canonical="/cases/nonprofit-impact-measurement"
      industry="Social Impact"
      industryLink="/industries/social-impact"
      title="Foundation Achieves 10x Better Outcome Tracking with Impact Platform"
      subtitle="How unified data, standardized metrics, and real-time dashboards transformed how a foundation measures and maximizes social impact."
      heroImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80"
      metrics={[
        { value: "10x", label: "Better Tracking" },
        { value: "200+", label: "Grantees Connected" },
        { value: "50%", label: "Less Reporting Burden" },
        { value: "30%", label: "More Effective Grants" }
      ]}
      clientContextTitle="A Foundation Flying Blind on Impact"
      clientContextIntro="A major foundation distributed $500M annually to 200+ grantees across education, health, and economic development. But measuring impact was nearly impossible. Each grantee reported differently. Data sat in spreadsheets and PDFs. The foundation couldn't answer basic questions about what was working and what wasn't."
      clientContextBody="Board members asked about outcomes; staff could only report outputs. Grants were renewed based on relationships, not results. High-performing programs looked the same as struggling ones in the data. The foundation needed to transform how it measured, learned, and improved."
      clientProfile={{
        industry: "Private Foundation",
        companySize: "$500M Annual Grants",
        projectDuration: "24 Months",
        additionalInfo: "200+ Grantees",
        additionalLabel: "Portfolio Size"
      }}
      challengeTitle="Impact Invisible"
      challenges={[
        {
          icon: BarChart3,
          title: "No Outcome Data",
          description: "Could report outputs (people served) but not outcomes (lives changed)."
        },
        {
          icon: FileCheck,
          title: "Inconsistent Reporting",
          description: "200 grantees reporting in 200 different ways—no comparability."
        },
        {
          icon: Target,
          title: "No Learning",
          description: "Can't identify what works—grants renewed on faith, not evidence."
        },
        {
          icon: Users,
          title: "Grantee Burden",
          description: "Grantees spending more time reporting than delivering programs."
        }
      ]}
      approachTitle="Impact Measurement Platform"
      approachIntro="NexDyne built a comprehensive impact measurement platform: standardized metrics, unified data collection, real-time dashboards, and learning systems that transformed how the foundation understood its impact."
      steps={[
        {
          step: "01",
          title: "Outcome Framework",
          description: "Developed standardized outcome frameworks for each program area. Defined what success looked like and how to measure it. Created common language across diverse grantees."
        },
        {
          step: "02",
          title: "Data Platform",
          description: "Built a unified platform where grantees reported outcomes through simple interfaces. Automated data validation and aggregation. Reduced reporting burden while improving data quality."
        },
        {
          step: "03",
          title: "Impact Dashboards",
          description: "Created real-time dashboards that visualized outcomes across the portfolio. Foundation staff could see impact by program, geography, and population—finally answering 'what's working?'"
        },
        {
          step: "04",
          title: "Learning Systems",
          description: "Implemented continuous learning processes: regular outcome reviews, grantee convenings, and evidence synthesis. Insights from data drove strategy and grant decisions."
        }
      ]}
      resultsTitle="Impact Visible"
      results={[
        {
          icon: BarChart3,
          value: "10x",
          label: "Better outcome tracking",
          detail: "From outputs to outcomes"
        },
        {
          icon: Users,
          value: "200+",
          label: "Grantees connected",
          detail: "All reporting on common platform"
        },
        {
          icon: FileCheck,
          value: "50%",
          label: "Less reporting burden",
          detail: "Streamlined data collection"
        },
        {
          icon: TrendingUp,
          value: "30%",
          label: "More effective grants",
          detail: "Evidence-based decisions"
        }
      ]}
      quote="We finally know what's working. Before, we had faith that our grants made a difference. Now we have evidence. We can see which programs deliver outcomes and which need support. Our board gets real impact data, not just stories. We're making better decisions and creating more impact."
      quoteAuthor="Dr. James Wilson"
      quoteRole="President"
      relatedStudies={[
        {
          title: "Digital Transformation for Nonprofits",
          metric: "60%",
          label: "higher donor engagement",
          link: "/cases/nonprofit-digital-transformation",
          image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
        },
        {
          title: "Program Delivery Optimization",
          metric: "40%",
          label: "more beneficiaries served",
          link: "/cases/nonprofit-program-optimization",
          image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Measure Impact?"
      ctaDescription="Let's discuss how to build your impact measurement capability."
    />
  );
}
