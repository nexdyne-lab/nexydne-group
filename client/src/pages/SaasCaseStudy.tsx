import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Split, Database, TrendingUp, Bot, ArrowLeftRight, GraduationCap, DollarSign } from "lucide-react";

export function SaasCaseStudy() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Customer Onboarding Time 78% With AI | SaaS Case Study"
      seoDescription="A B2B SaaS platform's manual onboarding took 5 days and backlogged 3 weeks as it scaled from 80 to 400+ customers a quarter. AI automation cut setup to 26 hours and saved $420K."
      canonical="/cases/saas-platform-optimization"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a B2B SaaS Platform Cut Onboarding Time 78%"
      subtitle="A fast-growing B2B SaaS platform automated onboarding and provisioning with AI agents — cutting setup from 5 days to 26 hours while scaling to 400+ new customers a quarter and saving $420K."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "78%", label: "Faster Onboarding" },
        { value: "26 hrs", label: "Setup Time" },
        { value: "$420K", label: "Annual Savings" },
        { value: "400+", label: "Quarterly Customers" }
      ]}
      clientContextTitle="Onboarding Couldn't Keep Up"
      clientContextIntro="A rapidly scaling B2B SaaS company providing project-management software to growth-stage professional-services firms — 85–110 employees and 2,400+ active customers — accelerated acquisition from 80 to 400+ customers a quarter after Series B funding grew the sales team from 8 to 35 reps."
      clientContextBody="Manual onboarding designed for slower growth became a critical bottleneck. Customer success managers hand-created accounts, configured permissions, and set up integrations — 8–12 hours per customer across 5 days, backlogging 3 weeks at peak. With 12 different managers, configuration quality varied wildly, driving different adoption rates. Data migrations took 15–20 hours per customer and often required rework, and revenue couldn't be recognized until customers were fully onboarded."
      clientProfile={{
        industry: "B2B SaaS Company",
        companySize: "2,400+ Customers",
        projectDuration: "AI-Orchestrated",
        additionalInfo: "95% Auto-Migration",
        additionalLabel: "Data"
      }}
      challengeTitle="Why Onboarding Bottlenecked Growth"
      challenges={[
        {
          icon: Clock,
          title: "5 days, 8–12 hours each",
          description: "Manual setup backlogged three weeks during peak quarters."
        },
        {
          icon: Split,
          title: "Inconsistent by manager",
          description: "12 different CSMs produced wildly varying configuration and adoption."
        },
        {
          icon: Database,
          title: "15–20 hour migrations",
          description: "Data migrations from competing platforms were slow and often needed rework."
        },
        {
          icon: TrendingUp,
          title: "Delayed revenue recognition",
          description: "Revenue couldn't be recognized until onboarding finished, pushing Q1 sales into Q2."
        }
      ]}
      approachTitle="AI Agents That Onboard Autonomously"
      approachIntro="NEXDYNE built an intelligent onboarding-automation platform that provisioned accounts, migrated data, and delivered personalized training — orchestrated by AI agents with minimal human intervention."
      steps={[
        {
          step: "01",
          title: "Provision on contract signature",
          description: "AI agents created accounts, configured role-based permissions, and set up Slack, Teams, and Google Workspace integrations in under 2 hours."
        },
        {
          step: "02",
          title: "Migrate data autonomously",
          description: "ML models mapped legacy fields to the new schema and flagged quality issues before import, handling 95% of migrations without humans."
        },
        {
          step: "03",
          title: "Personalize the training",
          description: "AI-driven sequences adapted to industry, team size, and use case, delivering role-specific content and scheduling check-ins."
        },
        {
          step: "04",
          title: "Escalate by exception",
          description: "Adoption monitoring escalated to customer success only when engagement dropped, with churn-risk models triggering proactive outreach."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Bot,
          value: "26 hrs",
          label: "Onboarding time",
          detail: "Down from 120, accelerating time-to-value and revenue recognition"
        },
        {
          icon: GraduationCap,
          value: "3%",
          label: "First-90-day churn",
          detail: "Down from 12%, with onboarding CSAT from 3.9 to 4.8"
        },
        {
          icon: DollarSign,
          value: "$420K",
          label: "Annual savings",
          detail: "With customer-success capacity effectively up 5x, no new headcount"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Scaling Support With AI, Deflecting 60% of Tickets",
          metric: "60%",
          label: "ticket deflection",
          link: "/capabilities/artificial-intelligence/case-studies/saas-customer-service-ai",
          image: "/images/capabilities/cap-office-women.jpg"
        },
        {
          title: "Speeding Terminal Onboarding 52% With Personalized Workflows",
          metric: "52%",
          label: "faster onboarding",
          link: "/cases/payment-terminal-onboarding",
          image: "/images/industries/fin-monitors.jpg"
        }
      ]}
      ctaTitle="Ready to automate onboarding?"
      ctaDescription="Let's talk about what AI-orchestrated onboarding could do for your time-to-value and retention."
    />
  );
}

export default SaasCaseStudy;
