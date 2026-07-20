import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, TrendingDown, Target, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";

export default function MarketplaceUsagePricing() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Usage-Based Pricing Expands Net Revenue Retention to 134% | B2B Marketplace Case Study"
      seoDescription="A B2B marketplace on flat-rate pricing captured only a fraction of the value its largest customers extracted. Moving to usage-based pricing and redesigned packaging lifted net revenue retention from 108% to 134%."
      canonical="/cases/marketplace-usage-pricing"
      industry="B2B Marketplace"
      industryLink="/industries/technology-media-telecom"
      title="How a B2B Marketplace Grew Net Revenue Retention to 134% by Pricing on Value"
      subtitle="Flat-rate pricing meant the biggest customers paid the same as the smallest while extracting far more value. Aligning price to usage let revenue finally grow with the value delivered."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "134%", label: "Net Revenue Retention" },
        { value: "108%", label: "Where It Started" },
        { value: "0", label: "Logo Churn Impact" },
        { value: "2", label: "Rollout Cohorts" }
      ]}
      clientContextTitle="One Price, Wildly Different Value"
      clientContextIntro="A category-leading B2B marketplace was charging a flat rate — and quietly leaving enormous value uncaptured. Its largest customers, who extracted many times the value of the smallest, paid essentially the same price, so the marketplace's revenue was disconnected from the value it delivered."
      clientContextBody="Flat-rate pricing had been simple to sell in the early days, but at scale it had become a structural cap on growth. As customers grew and used the marketplace more, the marketplace saw none of that expansion in its revenue — net revenue retention was stuck at 108 percent, respectable but far below what a value-aligned model could produce. The challenge was to move to usage-based pricing and redesign the packaging without spooking customers into churn. Growth had to come from expansion within accounts, not at the cost of losing them."
      clientProfile={{
        industry: "B2B Marketplace",
        companySize: "20,000+ Marketplace Sellers",
        projectDuration: "7 Months",
        additionalInfo: "Flat-to-Usage Transition",
        additionalLabel: "Pricing Model"
      }}
      challengeTitle="Why Flat-Rate Capped Growth"
      challenges={[
        { icon: DollarSign, title: "Price Disconnected From Value", description: "Largest and smallest customers paid nearly the same despite vastly different value extracted." },
        { icon: TrendingDown, title: "No Expansion Revenue", description: "As customers grew their usage, the marketplace saw none of it, capping net revenue retention." },
        { icon: Target, title: "A Structural Growth Ceiling", description: "Flat-rate pricing, simple early on, had become a limit on how the business could grow." },
        { icon: AlertTriangle, title: "Churn Risk in the Transition", description: "Moving to usage-based pricing risked spooking customers if handled carelessly." }
      ]}
      approachTitle="Align Price to Usage"
      approachIntro="We re-engineered the pricing model from flat-rate to usage-based, redesigned the package architecture, and rolled out across two cohorts — expanding net revenue retention from 108 percent to 134 percent with no impact on logo retention."
      steps={[
        { step: "01", title: "Re-Engineering to Usage-Based", description: "We redesigned the pricing model so price scaled with the value customers extracted, connecting revenue to usage." },
        { step: "02", title: "Redesigning the Package Architecture", description: "We rebuilt the packaging so the usage-based model was clear, fair, and easy for customers to grow within." },
        { step: "03", title: "Rolling Out Across Two Cohorts", description: "We introduced the new model in two carefully managed cohorts, controlling the transition and protecting logo retention." },
        { step: "04", title: "Capturing Expansion Without Churn", description: "We tracked net revenue retention up to 134 percent while logo retention held, proving growth came from expansion, not attrition." }
      ]}
      resultsTitle="Revenue That Grows With Value"
      results={[
        { icon: TrendingUp, value: "134%", label: "Net revenue retention", detail: "Up from 108% within a year" },
        { icon: CheckCircle, value: "0", label: "Logo churn impact", detail: "Expansion, not attrition" },
        { icon: DollarSign, value: "Usage", label: "Aligned pricing", detail: "Price scales with value delivered" },
        { icon: Target, value: "2", label: "Cohorts", detail: "Controlled, low-risk rollout" }
      ]}
      quote="Our biggest customers were getting enormous value and paying about the same as our smallest ones. Moving to usage-based pricing — carefully, in cohorts — let our revenue finally grow as our customers grew. Net revenue retention went from a hundred and eight to a hundred and thirty-four percent, and we did not lose the logos doing it."
      quoteAuthor="Chief Executive Officer"
      quoteRole="B2B marketplace"
      relatedStudies={[
        { title: "How a Software Infrastructure Operator Made Its Forecast Trustworthy Again", metric: "62→91%", label: "forecast accuracy", link: "/cases/infra-forecast-rebuild", image: "/images/industries/tech-datacenter.jpg" },
        { title: "How a Professional Services Firm Cut a 15-Tool RevOps Stack Down to a Single Source of Truth", metric: "9", label: "tools removed", link: "/cases/services-revops-consolidation", image: "/images/capabilities/cap-conference-data.jpg" }
      ]}
      ctaTitle="Is flat-rate pricing capping your growth?"
      ctaDescription="Let's move to a usage-based model that grows with your customers, without triggering churn."
    />
  );
}
