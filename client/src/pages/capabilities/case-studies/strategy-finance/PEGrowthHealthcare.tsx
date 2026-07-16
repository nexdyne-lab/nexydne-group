import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { CalendarClock, BarChart3, UserSquare, Receipt, LineChart, Workflow, Building2, TrendingUp } from "lucide-react";

export function PEGrowthHealthcare() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Tripling Revenue From $40M to $120M Post-Acquisition | Healthcare Case Study"
      seoDescription="A PE-backed home-health company had clinical depth but 15-day closes, no CRM, and uncollected revenue. A post-acquisition growth program tripled revenue to $120M in 18 months."
      canonical="/capabilities/strategy-corporate-finance/case-studies/pe-growth-healthcare"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a PE-Backed Healthcare Company Tripled Revenue in 18 Months"
      subtitle="A private-equity-backed home-health company executed a comprehensive post-acquisition growth strategy — a new FP&A function, a scalable sales engine, and revenue-cycle fixes — tripling revenue from $40M to $120M."
      heroImage="/case-healthcare-team.5797392b.jpg"
      metrics={[
        { value: "3x", label: "Revenue Growth" },
        { value: "$80M", label: "Revenue Added" },
        { value: "18 mo", label: "Timeline" },
        { value: "14%", label: "EBITDA Margin" }
      ]}
      clientContextTitle="Clinical Depth, Scaling Gaps"
      clientContextIntro="A 150-employee healthcare services company backed by a PE firm operates across three states in home health and hospice. Following acquisition, it faced pressure to execute an aggressive growth plan — but the management team had deep clinical expertise and limited experience with rapid scaling."
      clientContextBody="The diagnostic revealed interconnected barriers: financial close taking 15+ days, no standardized KPIs across locations preventing comparison, sales relying on the founder's personal network with no documented process or CRM, and an understaffed billing and collections function leaving significant revenue uncollected."
      clientProfile={{
        industry: "Home Health & Hospice",
        companySize: "PE-Backed",
        projectDuration: "18-Month Program",
        additionalInfo: "Three States",
        additionalLabel: "Footprint"
      }}
      challengeTitle="Why Scaling Was Blocked"
      challenges={[
        {
          icon: CalendarClock,
          title: "15+ day close",
          description: "Slow financials made it impossible to respond quickly to performance issues."
        },
        {
          icon: BarChart3,
          title: "No standardized KPIs",
          description: "Locations couldn't be compared, blocking meaningful performance management."
        },
        {
          icon: UserSquare,
          title: "Founder-dependent sales",
          description: "Sales relied on personal relationships with no documented process or CRM."
        },
        {
          icon: Receipt,
          title: "Uncollected revenue",
          description: "An understaffed billing and collections function left significant revenue on the table."
        }
      ]}
      approachTitle="Build the Engine, Then Grow"
      approachIntro="NEXDYNE built the financial and commercial infrastructure first — a standardized FP&A function, a scalable sales engine, and a restructured revenue cycle — then executed tuck-in acquisitions."
      steps={[
        {
          step: "01",
          title: "Stand up FP&A",
          description: "A cloud financial system cut close from 15 to 5 days, with location P&Ls, weekly flash reports, and monthly business reviews."
        },
        {
          step: "02",
          title: "Build a sales engine",
          description: "A CRM, documented process, dedicated business development, and referral-source analytics complemented the founder's network."
        },
        {
          step: "03",
          title: "Fix the revenue cycle",
          description: "Restructuring cut claim denials 60%, improved DSO from 65 to 42 days, and recovered $1.2M in written-off receivables."
        },
        {
          step: "04",
          title: "Execute tuck-ins",
          description: "Two acquisitions adding $25M in revenue covered targeting, diligence, integration, and synergy realization."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingUp,
          value: "$120M",
          label: "Revenue, up from $40M",
          detail: "Adding $80M through organic growth and two acquisitions"
        },
        {
          icon: Building2,
          value: "14%",
          label: "EBITDA margin",
          detail: "Stabilized as operational gains offset growth investment"
        },
        {
          icon: LineChart,
          value: "Near real-time",
          label: "Portfolio visibility",
          detail: "Letting the sponsor and managers act in days, not months"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "FP&A Transformation That Cut Monthly Close to 5 Days",
          metric: "5 days",
          label: "monthly close",
          link: "/capabilities/strategy-corporate-finance/case-studies/distribution-fpa",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Reducing Patient Wait Times 35% With Predictive Analytics",
          metric: "35%",
          label: "shorter waits",
          link: "/cases/healthcare-provider-ai",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        }
      ]}
      ctaTitle="Ready to scale a portfolio company?"
      ctaDescription="Let's talk about what a post-acquisition growth program could do for your value creation."
    />
  );
}

export default PEGrowthHealthcare;
