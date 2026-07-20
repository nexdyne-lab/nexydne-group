import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Waves, UserCog, Ban, Shield, SlidersHorizontal, BarChart3, Users, Percent } from "lucide-react";

export function ConsultingSaaS() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Turning a Consulting Methodology Into a 2,400-Subscriber SaaS Product | Business Building Case Study"
      seoDescription="A consulting firm's project-based revenue swung feast-or-famine and priced out smaller clients. Productizing its methodology reached 2,400 subscribers at 92% retention within two years."
      canonical="/capabilities/business-building/case-studies/consulting-saas"
      industry="Professional Services"
      industryLink="/industries"
      title="How a Consulting Firm Built a 2,400-Subscriber SaaS Product"
      subtitle="A management consulting firm productized its 15-year methodology into subscription software — reaching 2,400 subscribers at 45% gross margin and 92% retention within two years, without cannibalizing its core business."
      heroImage="/images/capabilities/cap-team-screens.jpg"
      metrics={[
        { value: "2,400", label: "Paying Subscribers" },
        { value: "45%", label: "Gross Margin" },
        { value: "2 yrs", label: "Launch to Scale" },
        { value: "92%", label: "Retention Rate" }
      ]}
      clientContextTitle="Valuable Methodology, Volatile Revenue"
      clientContextIntro="A 120-employee management consulting firm specializing in operational excellence had developed a proprietary assessment methodology over 15 years. Revenue was entirely project-based and highly seasonal, creating feast-or-famine cycles, while delivery required expensive senior consultants."
      clientContextBody="Smaller companies couldn't afford full engagements, and leadership wanted recurring revenue and broader reach while protecting their IP. The challenge was translating a methodology that depended on experienced human judgment into software delivering meaningful self-service value — without cannibalizing the core consulting business or watering the product down enough to damage the firm's reputation."
      clientProfile={{
        industry: "Management Consulting Firm",
        companySize: "120 Employees",
        projectDuration: "Multi-Tenant SaaS",
        additionalInfo: "15-Year Methodology",
        additionalLabel: "IP"
      }}
      challengeTitle="Why Productizing Was Hard"
      challenges={[
        {
          icon: Waves,
          title: "Feast-or-famine revenue",
          description: "Entirely project-based, seasonal revenue created volatile cash flows."
        },
        {
          icon: UserCog,
          title: "Expensive to deliver",
          description: "The methodology required senior consultants, pricing out smaller companies."
        },
        {
          icon: Ban,
          title: "Cannibalization risk",
          description: "A self-service product could undercut the core consulting business if mishandled."
        },
        {
          icon: Shield,
          title: "Reputation on the line",
          description: "A watered-down product could damage 15 years of brand equity."
        }
      ]}
      approachTitle="80% of the Value, Self-Service"
      approachIntro="NEXDYNE mapped the assessment process to separate self-service components from those needing human expertise — designing a product that delivered 80% of the value at 20% of the cost, with upgrade paths to consulting."
      steps={[
        {
          step: "01",
          title: "Split self-service from expertise",
          description: "Process mapping identified which assessment components could be automated and which required a consultant's judgment."
        },
        {
          step: "02",
          title: "Build the platform",
          description: "Diagnostic questionnaires, benchmarking from anonymized engagement data, action planning, and progress dashboards ran on multi-tenant SaaS."
        },
        {
          step: "03",
          title: "Go to market on content",
          description: "Free assessment tools generated qualified leads, with pricing tiers by company size and sales training on SaaS motions."
        },
        {
          step: "04",
          title: "Make the channels reinforce",
          description: "Software users could engage consultants when needed, while consultants used the platform to deliver more efficient engagements."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Users,
          value: "2,400",
          label: "Paying subscribers",
          detail: "Building a material recurring-revenue stream within two years of launch"
        },
        {
          icon: Percent,
          value: "92%",
          label: "Retention rate",
          detail: "Proving sustained value, not one-time novelty"
        },
        {
          icon: BarChart3,
          value: "45%",
          label: "Gross margin",
          detail: "A recurring stream that smoothed project seasonality"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Commercializing Internal Tech Into a Standalone Spin-Off",
          metric: "18",
          label: "enterprise clients",
          link: "/capabilities/business-building/case-studies/logistics-tech-spinoff",
          image: "/images/industries/transport-bridge.jpg"
        },
        {
          title: "Launching a B2B Marketplace for a Distributor",
          metric: "9%",
          label: "added to revenue",
          link: "/capabilities/business-building/case-studies/distributor-marketplace",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to productize your expertise?"
      ctaDescription="Let's talk about what a SaaS product could do for your recurring revenue and reach."
    />
  );
}

export default ConsultingSaaS;
