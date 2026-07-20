import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, PackageSearch, DollarSign, Users, ShieldCheck, Store, ShoppingBag, Percent } from "lucide-react";

export function DistributorMarketplace() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Launching a B2B Marketplace for a Distributor | Business Building Case Study"
      seoDescription="A regional distributor faced eroding margins and a catalog it couldn't match. A curated B2B marketplace added revenue equal to 9% of the core business in year one from 340 sellers and 2,800 buyers."
      canonical="/capabilities/business-building/case-studies/distributor-marketplace"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Regional Distributor Launched a Digital Marketplace"
      subtitle="An industrial-supplies distributor built a curated B2B marketplace connecting buyers with specialized vendors — adding revenue equal to 9% of the core business from 340 sellers and 2,800 buyers at an 18% take rate."
      heroImage="/images/industries/retail-warehouse.jpg"
      metrics={[
        { value: "9%", label: "Added to Revenue (Year 1)" },
        { value: "340", label: "Marketplace Sellers" },
        { value: "2,800", label: "Active Buyers" },
        { value: "18%", label: "Take Rate" }
      ]}
      clientContextTitle="Margins Under Pressure"
      clientContextIntro="A 150-employee industrial-supplies distributor serves manufacturing and construction customers across the Midwest. Traditional distribution margins were declining as customers gained price transparency, and its catalog couldn't match larger competitors while acquisition costs rose."
      clientContextBody="Analysis revealed customers frequently needed specialized products outside the existing catalog and spent significant time finding and vetting new suppliers. The distributor had relationships with hundreds of specialty vendors who struggled to reach mid-size buyers — a two-sided market inefficiency that created the foundation for a curated marketplace leveraging existing relationships while creating new value."
      clientProfile={{
        industry: "Industrial Supplies Distributor",
        companySize: "150 Employees",
        projectDuration: "ERP-Integrated",
        additionalInfo: "Curated B2B",
        additionalLabel: "Model"
      }}
      challengeTitle="Why the Core Model Was Squeezed"
      challenges={[
        {
          icon: TrendingDown,
          title: "Declining margins",
          description: "Price transparency eroded traditional distribution margins across the catalog."
        },
        {
          icon: PackageSearch,
          title: "Catalog gaps",
          description: "Customers needed specialty products the distributor didn't stock, sending them elsewhere."
        },
        {
          icon: DollarSign,
          title: "Rising acquisition costs",
          description: "Winning new business grew more expensive against larger, broader competitors."
        },
        {
          icon: Users,
          title: "Vendors couldn't reach buyers",
          description: "Hundreds of specialty vendors struggled to reach the distributor's mid-size buyers."
        }
      ]}
      approachTitle="A Curated Two-Sided Marketplace"
      approachIntro="NEXDYNE designed a marketplace that leveraged the distributor's strengths — procurement-vetted vendors, consolidated invoicing and credit for buyers, and transaction-fee revenue that strengthened relationships."
      steps={[
        {
          step: "01",
          title: "Curate the supply side",
          description: "Vendors were vetted by the distributor's procurement team, differentiating from open platforms and protecting its quality reputation."
        },
        {
          step: "02",
          title: "Build for industrial supply",
          description: "The platform offered technical-spec search, ERP integration, seller catalog tools, and buyer RFQ and order tracking."
        },
        {
          step: "03",
          title: "Recruit complementary sellers",
          description: "Onboarding targeted specialty vendors that complemented rather than competed with existing inventory."
        },
        {
          step: "04",
          title: "Drive buyer adoption",
          description: "Targeted outreach, early-adoption incentives, portal integration, and sales training brought existing customers onto the platform."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: DollarSign,
          value: "9%",
          label: "Added to revenue in year one",
          detail: "At an 18% take rate across the marketplace"
        },
        {
          icon: Store,
          value: "340",
          label: "Marketplace sellers",
          detail: "Serving 2,800 active buyers in a curated network"
        },
        {
          icon: ShieldCheck,
          value: "Moat",
          label: "No competitor could replicate",
          detail: "Curated vendors plus consolidated invoicing and decades of trust"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Launching a B2B E-Commerce Platform That Drives 35% of Revenue",
          metric: "35%",
          label: "of revenue digital",
          link: "/capabilities/business-building/case-studies/ecommerce-platform-launch",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        },
        {
          title: "Turning a Consulting Methodology Into a 2,400-Subscriber SaaS Product",
          metric: "2,400",
          label: "paying subscribers",
          link: "/capabilities/business-building/case-studies/consulting-saas",
          image: "/images/capabilities/cap-team-screens.jpg"
        }
      ]}
      ctaTitle="Ready to build a new revenue stream?"
      ctaDescription="Let's talk about what a curated marketplace could do for your margins and relationships."
    />
  );
}

export default DistributorMarketplace;
