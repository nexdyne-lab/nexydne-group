import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, DollarSign, Target, BarChart3, Users, Cog, Building2, Zap } from "lucide-react";

export default function PEPortfolioOperations() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Portfolio Operations Excellence | Private Equity Case Study"
      seoDescription="How a PE firm achieved 3.2x returns through systematic operational improvement across a $5B portfolio of 25 companies."
      canonical="/cases/pe-portfolio-operations"
      industry="Private Equity & Principal Investors"
      industryLink="/industries/private-equity"
      title="PE Firm Achieves 3.2x Returns Through Portfolio Operations Excellence"
      subtitle="How systematic operational improvement, shared services, and digital transformation created value across a $5B portfolio."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      metrics={[
        { value: "3.2x", label: "Average Returns" },
        { value: "$1.2B", label: "Value Created" },
        { value: "800bps", label: "Margin Improvement" },
        { value: "25", label: "Portfolio Companies" }
      ]}
      clientContextTitle="A PE Firm Seeking Operational Alpha"
      clientContextIntro="A middle-market private equity firm with $5B AUM and 25 portfolio companies had built returns primarily through financial engineering and multiple expansion. But as competition intensified and multiples compressed, the firm needed a new source of value creation: operational improvement."
      clientContextBody="The firm had operating partners but no systematic approach to value creation. Each portfolio company operated independently with no shared learnings or services. Best practices at one company were unknown at others. The firm needed to transform from financial sponsor to operational partner."
      clientProfile={{
        industry: "Private Equity",
        companySize: "$5B AUM",
        projectDuration: "36 Months",
        additionalInfo: "25 Portfolio Companies",
        additionalLabel: "Portfolio Size"
      }}
      challengeTitle="From Financial Engineering to Operational Value"
      challenges={[
        {
          icon: TrendingUp,
          title: "Multiple Compression",
          description: "Entry multiples rising, exit multiples flat—financial engineering no longer enough."
        },
        {
          icon: Cog,
          title: "No Systematic Approach",
          description: "Operational improvement ad hoc—no playbooks, no shared services, no best practices."
        },
        {
          icon: Building2,
          title: "Isolated Companies",
          description: "Portfolio companies operating independently—no leverage of scale or shared learnings."
        },
        {
          icon: Target,
          title: "Limited Visibility",
          description: "No real-time view into portfolio performance—surprises instead of early intervention."
        }
      ]}
      approachTitle="Building the Operating Platform"
      approachIntro="NexDyne helped build a comprehensive portfolio operations capability: value creation playbooks, shared services, digital transformation support, and real-time performance monitoring."
      steps={[
        {
          step: "01",
          title: "Value Creation Playbooks",
          description: "Developed systematic playbooks for common value creation levers: pricing optimization, procurement excellence, sales effectiveness, and operational efficiency. Playbooks enabled rapid deployment at new acquisitions."
        },
        {
          step: "02",
          title: "Shared Services Platform",
          description: "Built shared services that portfolio companies could access: group purchasing, shared technology platforms, talent acquisition, and back-office services. Created scale advantages across the portfolio."
        },
        {
          step: "03",
          title: "Digital Transformation Support",
          description: "Established a digital transformation capability that helped portfolio companies modernize. Shared technology investments, implementation resources, and best practices accelerated digital initiatives."
        },
        {
          step: "04",
          title: "Performance Monitoring",
          description: "Implemented real-time portfolio monitoring with standardized KPIs across companies. Early warning systems identified underperformance before it became critical. Operating partners intervened proactively."
        }
      ]}
      resultsTitle="Operational Alpha Delivered"
      results={[
        {
          icon: TrendingUp,
          value: "3.2x",
          label: "Average returns",
          detail: "Up from 2.1x before operational focus"
        },
        {
          icon: DollarSign,
          value: "$1.2B",
          label: "Value created",
          detail: "Through operational improvement"
        },
        {
          icon: BarChart3,
          value: "800bps",
          label: "Average margin improvement",
          detail: "Across portfolio companies"
        },
        {
          icon: Zap,
          value: "40%",
          label: "Faster value creation",
          detail: "Playbooks accelerate improvement"
        }
      ]}
      quote="We transformed from a financial sponsor to an operational partner. Our portfolio companies now have access to capabilities they couldn't build alone—shared services, digital expertise, best practices from across the portfolio. We're not just providing capital; we're providing competitive advantage."
      quoteAuthor="Robert Chen"
      quoteRole="Managing Partner"
      relatedStudies={[
        {
          title: "Due Diligence Acceleration",
          metric: "50%",
          label: "faster deal evaluation",
          link: "/cases/pe-due-diligence",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
        },
        {
          title: "Carve-Out Execution",
          metric: "6 Months",
          label: "to standalone operations",
          link: "/cases/pe-carveout-execution",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Build Operational Capability?"
      ctaDescription="Let's discuss how operational excellence can drive portfolio returns."
    />
  );
}
