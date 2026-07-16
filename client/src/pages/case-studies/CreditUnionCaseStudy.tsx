import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Database, Eye, Users, TrendingUp, Sparkles, Target, Clock, Gauge } from "lucide-react";

export default function CreditUnionCaseStudy() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Lifting Member Satisfaction 45% at a Community Credit Union | Financial Services Case Study"
      seoDescription="A 60-year-old credit union was losing younger members to digital-first banks. Unifying decades of member data lifted its NPS from 42 to 61 — a 45% gain in satisfaction."
      canonical="/capabilities/ai-technology-consulting/case-study/credit-union"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Community Credit Union Lifted Member Satisfaction 45%"
      subtitle="An 85-employee community credit union serving 45,000 members deployed NexDyne's Customer Intelligence Platform to personalize experiences and anticipate needs — turning decades of relationships into a measurable advantage."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "45%", label: "Higher Satisfaction (NPS 42→61)" },
        { value: "28%", label: "Cross-Sell Increase" },
        { value: "25%", label: "Faster Call Resolution" },
        { value: "12 wks", label: "To Full Deployment" }
      ]}
      clientContextTitle="Deep Relationships, Trapped in Silos"
      clientContextIntro="This community credit union had served its members for more than 60 years, building deep roots in the local community. But as national banks poured money into digital experiences and personalization, leadership worried they were falling behind."
      clientContextBody="Member data was scattered across core banking, loan origination, digital banking, and call-center logs, so relationship managers relied on memory and manual lookups to understand who they were talking to. When a member called, staff often couldn't see the full picture of the relationship. Satisfaction scores had plateaued and younger members were drifting to digital-first competitors — even though the credit union's real advantage was the decades-deep relationships it couldn't yet act on."
      clientProfile={{
        industry: "Community Credit Union",
        companySize: "45,000 Members",
        projectDuration: "12 Weeks to Deploy",
        additionalInfo: "85 Employees",
        additionalLabel: "Team Size"
      }}
      challengeTitle="Why the Data Advantage Went Unused"
      challenges={[
        {
          icon: Database,
          title: "Member data in silos",
          description: "Records lived across core banking, loan origination, digital channels, and call logs, with no unified view of any member."
        },
        {
          icon: Eye,
          title: "Staff working blind",
          description: "Relationship managers relied on memory and manual lookups, so they rarely saw a member's full history in the moment."
        },
        {
          icon: Users,
          title: "Younger members leaving",
          description: "Digital-first competitors were winning over the next generation while the credit union's satisfaction scores flatlined."
        },
        {
          icon: Target,
          title: "No way to anticipate needs",
          description: "Without predictive insight, the team could only react — never reach out before a member's life event created a need."
        }
      ]}
      approachTitle="A 360° View at the Frontline"
      approachIntro="NEXDYNE deployed its Customer Intelligence Platform to unify member data and put actionable insight directly in front of frontline staff — turning the credit union's relationship depth into something it could finally act on."
      steps={[
        {
          step: "01",
          title: "One unified member view",
          description: "We integrated data from core banking, loan origination, digital channels, and member-service records into a single analytics layer — with role-based access to satisfy privacy and compliance."
        },
        {
          step: "02",
          title: "Predict what members need next",
          description: "Models identified members likely to need a specific product — a first-time homebuyer, a family facing college costs, a retiree weighing wealth management — and flagged those at risk of leaving."
        },
        {
          step: "03",
          title: "Guide every conversation in real time",
          description: "When a member calls or visits, staff immediately see relevant insights and a suggested next-best action, so every interaction feels informed and personal."
        },
        {
          step: "04",
          title: "Replace batch reports with live dashboards",
          description: "Real-time dashboards replaced weekly batch reporting, giving managers an always-current picture of the membership."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Sparkles,
          value: "45%",
          label: "Higher member satisfaction",
          detail: "Net Promoter Score up from 42 to 61"
        },
        {
          icon: TrendingUp,
          value: "28%",
          label: "Cross-sell increase",
          detail: "With new-member acquisition up 15% via referrals"
        },
        {
          icon: Clock,
          value: "25%",
          label: "Faster call resolution",
          detail: "As staff saw the full relationship instantly"
        },
        {
          icon: Gauge,
          value: "30%",
          label: "More members per manager",
          detail: "With manual reporting time down 70%"
        }
      ]}
      quote="We've always known our members better than any big bank could. Now we have the tools to prove it. Our staff can anticipate needs before members even ask, and that's created a level of loyalty we haven't seen in years."
      quoteAuthor="Chief Experience Officer"
      quoteRole="Community Credit Union"
      relatedStudies={[
        {
          title: "Cutting Manual Document Processing 70% for an Accounting Firm",
          metric: "70%",
          label: "less manual work",
          link: "/capabilities/ai-technology-consulting/case-study/accounting-firm",
          image: "/images/capabilities/cap-conference-data.jpg"
        },
        {
          title: "Cutting Patient Wait Times 35% Across a Practice Network",
          metric: "35%",
          label: "shorter wait times",
          link: "/capabilities/ai-technology-consulting/case-study/medical-practice",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        }
      ]}
      ctaTitle="Ready to turn relationships into a measurable advantage?"
      ctaDescription="Let's talk about what a unified member view could do for satisfaction and growth."
    />
  );
}
