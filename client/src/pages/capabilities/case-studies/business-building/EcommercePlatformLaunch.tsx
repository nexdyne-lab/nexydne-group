import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Swords, Phone, Users, Timer, SearchCheck, Rocket, TrendingUp, DollarSign } from "lucide-react";

export function EcommercePlatformLaunch() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Launching a B2B E-Commerce Platform That Drives 35% of Revenue | Business Building Case Study"
      seoDescription="A $200M industrial distributor took orders by phone and fax as Amazon Business took share. A venture-style e-commerce MVP built in 20 weeks now drives 35% of revenue and $28M in sales."
      canonical="/capabilities/business-building/case-studies/ecommerce-platform-launch"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How an Industrial Distributor Built a B2B E-Commerce Platform"
      subtitle="A $200M distributor built and scaled a digital commerce platform in months, not years — now driving 35% of revenue and $28M in annual sales at 2.4x the average order value of traditional channels."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "35%", label: "Revenue Through Digital" },
        { value: "$28M", label: "New Annual Revenue" },
        { value: "2.4x", label: "Average Order Value" },
        { value: "18 mo", label: "Time to Profitability" }
      ]}
      clientContextTitle="An Existential Digital Threat"
      clientContextIntro="A regional industrial distributor with $200M in revenue faced an existential threat. Amazon Business and other digital-first competitors were capturing share, especially among younger procurement professionals who expected consumer-grade digital experiences."
      clientContextBody="The company's digital presence was a basic product catalog with no e-commerce. Orders came via phone, fax, and email — slow, error-prone, and out of step with expectations. Leadership recognized the need but faced real constraints: no internal digital expertise, limited IT infrastructure, and no appetite for the multi-year, multi-million-dollar implementations typical of enterprise e-commerce."
      clientProfile={{
        industry: "Industrial Distributor",
        companySize: "$200M Revenue",
        projectDuration: "20-Week MVP",
        additionalInfo: "50,000+ SKUs",
        additionalLabel: "Catalog"
      }}
      challengeTitle="Why Digital Couldn't Wait"
      challenges={[
        {
          icon: Swords,
          title: "Losing to digital natives",
          description: "Amazon Business and digital-first rivals captured share among younger procurement buyers."
        },
        {
          icon: Phone,
          title: "Phone, fax, and email orders",
          description: "Manual order channels were slow, error-prone, and out of step with expectations."
        },
        {
          icon: Users,
          title: "No internal digital expertise",
          description: "The company lacked the skills and infrastructure to build commerce alone."
        },
        {
          icon: Timer,
          title: "No time for a mega-project",
          description: "Multi-year enterprise implementations were financially and strategically out of reach."
        }
      ]}
      approachTitle="A Venture-Style MVP in 20 Weeks"
      approachIntro="NEXDYNE used a venture-style approach to deliver a functional platform in months — starting from research with 45 customers that surfaced three priorities: real-time inventory, simplified reordering, and procurement integration."
      steps={[
        {
          step: "01",
          title: "Research the real needs",
          description: "Interviews with 45 customers across segments pinpointed the three capabilities that mattered most."
        },
        {
          step: "02",
          title: "Ship a focused MVP",
          description: "A small cross-functional team built real-time ERP inventory and pricing, contract-specific pricing, saved-list reordering, and catalog search in 20 weeks."
        },
        {
          step: "03",
          title: "Pilot, then scale on data",
          description: "A 50-customer pilot informed mobile optimization, punchout integration, automated reorder suggestions, and smarter search."
        },
        {
          step: "04",
          title: "Convert the sales team",
          description: "Change management turned skeptics into advocates by showing how digital enhanced rather than replaced relationships."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingUp,
          value: "35%",
          label: "Of revenue through digital",
          detail: "$28M in annual sales within 18 months"
        },
        {
          icon: SearchCheck,
          value: "2.4x",
          label: "Higher average order value",
          detail: "With 340 new accounts beyond the traditional footprint"
        },
        {
          icon: Rocket,
          value: "18 mo",
          label: "To profitability",
          detail: "Ahead of the 24-month projection, order costs down 60%"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Launching a B2B Marketplace for a Distributor",
          metric: "$4.2M",
          label: "new revenue",
          link: "/capabilities/business-building/case-studies/distributor-marketplace",
          image: "/images/industries/retail-warehouse.jpg"
        },
        {
          title: "Scaling E-Commerce Revenue 40% With AI Personalization",
          metric: "40%",
          label: "revenue growth",
          link: "/cases/global-retailer-ecommerce",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to launch digital commerce fast?"
      ctaDescription="Let's talk about what a venture-style build could do for your digital revenue."
    />
  );
}

export default EcommercePlatformLaunch;
