import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Link2, DollarSign, Headphones, Swords, Building2, PlugZap, Rocket, TrendingUp } from "lucide-react";

export function LogisticsTechSpinoff() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Commercializing Internal Tech Into a $12M Spin-Off | Business Building Case Study"
      seoDescription="A logistics firm's route-optimization software was a competitive advantage locked inside operations. A spin-off reached a $12M valuation with 18 enterprise clients and $2.4M ARR in two years."
      canonical="/capabilities/business-building/case-studies/logistics-tech-spinoff"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Logistics Firm Built a $12M Technology Spin-Off"
      subtitle="A last-mile logistics firm commercialized its internal route-optimization software into a standalone SaaS company — reaching a $12M valuation, 18 enterprise clients, and $2.4M ARR in two years."
      heroImage="/images/industries/transport-bridge.jpg"
      metrics={[
        { value: "$12M", label: "Spin-Off Valuation" },
        { value: "18", label: "Enterprise Clients" },
        { value: "$2.4M", label: "ARR" },
        { value: "35%", label: "Client Efficiency Gain" }
      ]}
      clientContextTitle="Advantage Locked Inside Operations"
      clientContextIntro="A 160-employee logistics firm specializing in last-mile delivery had built proprietary route-optimization software over 10 years. The technology was a significant competitive advantage, and leadership saw its potential value serving the broader market."
      clientContextBody="The core tension: the very qualities that made the software powerful internally — deep integration with proprietary operations data and workflows — made it hard to package for external sale. Monetizing it also meant, in some cases, selling to direct competitors. The company lacked software sales and support capabilities and needed to balance spin-off investment with core business focus."
      clientProfile={{
        industry: "Last-Mile Logistics Firm",
        companySize: "160 Employees",
        projectDuration: "Spin-Off Structure",
        additionalInfo: "Multi-Tenant SaaS",
        additionalLabel: "Rebuild"
      }}
      challengeTitle="Why Commercializing Was Hard"
      challenges={[
        {
          icon: Link2,
          title: "Tightly coupled to operations",
          description: "Deep integration with proprietary data made the software hard to package externally."
        },
        {
          icon: DollarSign,
          title: "Heavy productization cost",
          description: "Turning internal tooling into a commercial product required significant investment."
        },
        {
          icon: Headphones,
          title: "No software GTM muscle",
          description: "The firm lacked software sales and customer-success capabilities."
        },
        {
          icon: Swords,
          title: "Customers were competitors",
          description: "Monetizing the technology meant in some cases selling to direct rivals."
        }
      ]}
      approachTitle="A Spin-Off Built to Move Fast"
      approachIntro="NEXDYNE designed a spin-off structure balancing multiple objectives — a separate entity with governance, parent licensing, team equity incentives, and service agreements leveraging parent expertise."
      steps={[
        {
          step: "01",
          title: "Structure the entity",
          description: "A separate company with appropriate governance let the parent keep access via licensing while the team held equity upside."
        },
        {
          step: "02",
          title: "Rebuild for commercial SaaS",
          description: "The software was rebuilt as configurable multi-tenant SaaS with integration APIs and full documentation and training."
        },
        {
          step: "03",
          title: "Assemble a GTM team",
          description: "A team with logistics-software sales and customer-success experience was hired, backed by efficiency-focused marketing."
        },
        {
          step: "04",
          title: "Navigate competition",
          description: "Initial focus on non-competing segments and mutual-benefit value propositions defused the competitor dynamic."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Building2,
          value: "$12M",
          label: "Spin-off valuation",
          detail: "Within two years, with 18 enterprise clients"
        },
        {
          icon: TrendingUp,
          value: "35%",
          label: "Client efficiency gain",
          detail: "Driving strong retention and expansion"
        },
        {
          icon: Rocket,
          value: "Upside",
          label: "For the parent, too",
          detail: "Full technology access plus venture equity value"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Turning a Consulting Methodology Into a $3.2M ARR Product",
          metric: "$3.2M",
          label: "ARR",
          link: "/capabilities/business-building/case-studies/consulting-saas",
          image: "/images/capabilities/cap-team-screens.jpg"
        },
        {
          title: "Unifying 30+ Regional Brands With AI Optimization",
          metric: "$55M",
          label: "operational savings",
          link: "/cases/logistics-brand-consolidation",
          image: "/images/cases/logistics-brand-consolidation-hero.jpg"
        }
      ]}
      ctaTitle="Ready to commercialize your technology?"
      ctaDescription="Let's talk about what a spin-off could unlock from the software you've already built."
    />
  );
}

export default LogisticsTechSpinoff;
