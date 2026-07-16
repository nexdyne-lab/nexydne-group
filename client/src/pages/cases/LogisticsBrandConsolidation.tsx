import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Split, Users, Boxes, TrendingDown, Layers, Route, Globe, Award } from "lucide-react";

export function LogisticsBrandConsolidation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Unifying 30+ Regional Brands With AI-Driven Optimization | Logistics Case Study"
      seoDescription="A global logistics provider had diluted its equity across 30+ acquired brands. A dual-track brand consolidation and AI route optimization reached a Top 50 global ranking and $55M in savings."
      canonical="/cases/logistics-brand-consolidation"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Global Logistics Provider Unified 30+ Brands and Saved $55M"
      subtitle="A dual-track transformation — data-driven brand consolidation plus AI route optimization — unified 30+ regional brands into one network, reaching a Top 50 global ranking and $55M in operational savings."
      heroImage="/images/industries/retail-warehouse.jpg"
      metrics={[
        { value: "Top 50", label: "Global Brand Ranking" },
        { value: "18%", label: "More Cross-Selling" },
        { value: "$55M", label: "Operational Savings" }
      ]}
      clientContextTitle="Scale Without a Brand"
      clientContextIntro="A global logistics provider had grown rapidly through aggressive acquisitions, leaving a fragmented portfolio of 30+ regional brands. Despite significant global reach, its brand equity was diluted across these disparate entities."
      clientContextBody="Customers were confused by varying service levels and identities, and the company struggled to cross-sell services between regions. Operational data was siloed too, preventing global route optimization and eroding margins. The company needed to consolidate its portfolio into a unified global brand without alienating local customer bases — while leveraging its scale to improve operational performance."
      clientProfile={{
        industry: "Global Logistics Provider",
        companySize: "30+ Regional Brands",
        projectDuration: "Dual-Track Program",
        additionalInfo: "One Network",
        additionalLabel: "Strategy"
      }}
      challengeTitle="Why Acquisitions Held Them Back"
      challenges={[
        {
          icon: Split,
          title: "30+ fragmented brands",
          description: "Aggressive M&A diluted equity across disparate regional identities and service levels."
        },
        {
          icon: Users,
          title: "Customer confusion",
          description: "Varying identities made it hard to cross-sell services between regions."
        },
        {
          icon: Boxes,
          title: "Siloed operational data",
          description: "Disconnected systems prevented global route optimization and eroded margins."
        },
        {
          icon: TrendingDown,
          title: "Local bases at risk",
          description: "Any consolidation had to unify the brand without alienating loyal regional customers."
        }
      ]}
      approachTitle="Consolidate the Brand, Optimize the Network"
      approachIntro="NEXDYNE ran a dual-track transformation — a data-driven brand consolidation alongside AI-powered operational optimization — using machine learning to analyze sentiment and route efficiency into one unified network."
      steps={[
        {
          step: "01",
          title: "Define one brand architecture",
          description: "A monolithic architecture built on “Reliability & Speed” replaced the fragmented portfolio."
        },
        {
          step: "02",
          title: "Migrate on sentiment data",
          description: "A phased migration roadmap used customer-sentiment analysis, launched via a programmatic “One Network” campaign."
        },
        {
          step: "03",
          title: "Optimize routing with AI",
          description: "Predictive routing algorithms optimized fleet utilization across the newly unified network."
        },
        {
          step: "04",
          title: "Unify the digital experience",
          description: "A single global portal with real-time tracking harmonized service portfolios across regions using demand forecasting."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Award,
          value: "Top 50",
          label: "Global brand ranking",
          detail: "Unlocking premium pricing and stronger loyalty"
        },
        {
          icon: Globe,
          value: "18%",
          label: "More cross-region selling",
          detail: "As customers recognized a single unified brand"
        },
        {
          icon: Route,
          value: "$55M",
          label: "Operational savings",
          detail: "From AI-optimized routing and harmonized service portfolios"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Enabling 3.2x Faster Product Access With Personalized Search",
          metric: "3.2x",
          label: "faster discovery",
          link: "/cases/logistics-product-access",
          image: "/images/industries/retail-warehouse.jpg"
        },
        {
          title: "Automating a Retailer's Supply Chain With RPA",
          metric: "45%",
          label: "faster processing",
          link: "/cases/global-retailer",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to turn scale into advantage?"
      ctaDescription="Let's talk about what unifying your brand and network could do for margins and loyalty."
    />
  );
}

export default LogisticsBrandConsolidation;
