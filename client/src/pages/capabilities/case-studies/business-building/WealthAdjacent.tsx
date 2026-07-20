import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, Users, Swords, Scale, UserPlus, GraduationCap, Handshake, Percent } from "lucide-react";

export function WealthAdjacent() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Entering an Adjacent Market to Grow Revenue 35% | Business Building Case Study"
      seoDescription="A wealth firm's growth was capped by the personal-wealth market while business-owner clients used separate advisors. Expanding into business financial services grew revenue 35% and made business services the firm's fastest-growing practice."
      canonical="/capabilities/business-building/case-studies/wealth-adjacent"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Wealth Management Firm Entered an Adjacent Market"
      subtitle="A wealth management firm expanded into business financial services — leveraging existing relationships to grow revenue 35%, build a meaningful business-services book, and reach a 78% cross-sell rate."
      heroImage="/images/industries/deal-handshake.jpg"
      metrics={[
        { value: "35%", label: "Revenue Growth" },
        { value: "220", label: "New Business Clients" },
        { value: "#1", label: "Fastest-Growing Practice" },
        { value: "78%", label: "Cross-Sell Rate" }
      ]}
      clientContextTitle="Capped by the Core Market"
      clientContextIntro="A 140-employee wealth management firm serving high-net-worth individuals found revenue growth limited by the addressable market for personal wealth. Many clients were business owners with both personal and business financial needs — yet the firm focused exclusively on personal wealth."
      clientContextBody="Those clients used separate advisors for business finances, and competitors were offering integrated personal and business services. Analysis revealed key clients regularly made consequential business decisions — exit planning, cash flow, succession — without integrated advice, creating risk to both the clients and the firm's relationship assets. The firm needed to expand without diluting core expertise."
      clientProfile={{
        industry: "Wealth Management Firm",
        companySize: "140 Employees",
        projectDuration: "Adjacent Expansion",
        additionalInfo: "Business + Personal",
        additionalLabel: "Integrated"
      }}
      challengeTitle="Why Growth Was Constrained"
      challenges={[
        {
          icon: Scale,
          title: "A capped addressable market",
          description: "Growth was limited by the size of the personal wealth-management market."
        },
        {
          icon: Users,
          title: "Clients using other advisors",
          description: "Business-owner clients handled business finances through separate advisors."
        },
        {
          icon: Swords,
          title: "Integrated competitors",
          description: "Rivals were winning with combined personal and business service offerings."
        },
        {
          icon: TrendingUp,
          title: "Relationship assets at risk",
          description: "Consequential business decisions made without integrated advice risked the firm's core relationships."
        }
      ]}
      approachTitle="Expand Where Personal and Business Meet"
      approachIntro="NEXDYNE identified services where personal and business finances intersect as the most natural expansion — succession and exit planning, cash-flow optimization, and integrated retirement planning."
      steps={[
        {
          step: "01",
          title: "Target the intersection",
          description: "Expansion focused on business succession, exit planning, cash-flow optimization, and integrated retirement planning."
        },
        {
          step: "02",
          title: "Build the capability",
          description: "The firm recruited business-planning advisors, trained existing ones, added analytical tools, and formed partnerships for specialized services."
        },
        {
          step: "03",
          title: "Launch to existing clients",
          description: "Outreach highlighting integrated benefits, complimentary business assessments, and cross-sell training drove initial engagement."
        },
        {
          step: "04",
          title: "Acquire through referrals",
          description: "New-client acquisition leveraged referrals from business advisors and attorneys plus content on integrated planning."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: UserPlus,
          value: "220",
          label: "New business clients",
          detail: "Making business financial services the firm's fastest-growing practice"
        },
        {
          icon: Percent,
          value: "78%",
          label: "Cross-sell rate",
          detail: "Validating that integrated advice deepens relationships"
        },
        {
          icon: Handshake,
          value: "Stickier",
          label: "Client relationships",
          detail: "Integrated clients showed materially lower attrition"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "AI-Driven Underwriting That Accelerated a Lender 5x",
          metric: "5x",
          label: "application throughput",
          link: "/capabilities/artificial-intelligence/case-studies/lender-ai-underwriting",
          image: "/images/industries/fin-handshake-city.jpg"
        },
        {
          title: "Turning a Consulting Methodology Into a 2,400-Subscriber SaaS Product",
          metric: "2,400",
          label: "paying subscribers",
          link: "/capabilities/business-building/case-studies/consulting-saas",
          image: "/images/capabilities/cap-team-screens.jpg"
        }
      ]}
      ctaTitle="Ready to expand into an adjacent market?"
      ctaDescription="Let's talk about what an adjacency could do for your revenue and client stickiness."
    />
  );
}

export default WealthAdjacent;
