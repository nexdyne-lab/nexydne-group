import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, Target, TrendingDown, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";

export default function EnterpriseSoftwarePricingRebuild() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Tier Rebuild Lifts Realized ASP 19% With No Lost Renewals | Enterprise Software Case Study"
      seoDescription="An enterprise software operator was leaving margin in the discount field on every deal. Rebuilding the tier architecture and repackaging value-anchored features lifted realized ASP 19% without losing a single renewal."
      canonical="/cases/enterprise-software-pricing-rebuild"
      industry="Enterprise Software"
      industryLink="/industries/technology-media-telecom"
      title="How an Enterprise Software Operator Lifted Realized ASP 19% Without Losing a Renewal"
      subtitle="The list price was fine; the realized price was not, because every deal leaked margin into the discount field. Rebuilding the tiers and migrating the base carefully captured the value that was being given away."
      heroImage="/images/capabilities/cap-coder.jpg"
      metrics={[
        { value: "19%", label: "Higher Realized ASP" },
        { value: "0", label: "Renewals Lost" },
        { value: "3 Qtrs", label: "To the Lift" },
        { value: "Flat", label: "Renewal Rate" }
      ]}
      clientContextTitle="Margin Leaking Into the Discount Field"
      clientContextIntro="An enterprise software operator had a pricing problem that never showed up on the price list. List prices looked healthy, but the realized average selling price told a different story: on nearly every deal, margin leaked away through discretionary discounting, and the tier architecture gave sales every reason to reach for the discount field."
      clientContextBody="The tiers were not anchored to value, so the highest-value features were bundled indiscriminately and reps had no structured way to hold price. Discounting had become the path of least resistance, and years of it had reset customer expectations. Fixing this was delicate: raise price the wrong way and renewals wobble. The operator needed the tier architecture rebuilt around value, the packaging repackaged so the features customers valued most anchored the price, and a rollout engineered so customer success could migrate the installed base without putting renewals at risk."
      clientProfile={{
        industry: "Enterprise Software Operator",
        companySize: "2,000+ Enterprise Customers",
        projectDuration: "6 Months",
        additionalInfo: "Subscription Licensing",
        additionalLabel: "Revenue Model"
      }}
      challengeTitle="Why Realized Price Kept Slipping"
      challenges={[
        { icon: DollarSign, title: "Discretionary Discounting", description: "Margin leaked into the discount field on nearly every deal, dragging realized ASP below list." },
        { icon: Target, title: "Tiers Not Anchored to Value", description: "The architecture bundled high-value features indiscriminately, giving reps no structured way to hold price." },
        { icon: TrendingDown, title: "Discounting as Default", description: "Years of discretionary discounts had reset customer price expectations." },
        { icon: AlertTriangle, title: "Renewal Risk on Any Change", description: "Raising price carelessly would put the installed base's renewals at risk." }
      ]}
      approachTitle="Rebuild Tiers, Migrate Carefully"
      approachIntro="We rebuilt the tier architecture, repackaged the value-anchored features, and engineered the rollout so customer success could migrate the existing base without renewal risk — lifting realized ASP 19 percent while renewal rate held flat."
      steps={[
        { step: "01", title: "Rebuilding the Tier Architecture", description: "We redesigned the tiers around customer value, so the features buyers valued most anchored the price instead of being given away." },
        { step: "02", title: "Repackaging Value-Anchored Features", description: "We repackaged the offering so the value story was clear and reps had a structured way to hold price instead of discounting." },
        { step: "03", title: "Engineering a Safe Rollout", description: "We built the migration so customer success could move existing customers onto the new tiers without triggering renewal risk." },
        { step: "04", title: "Migrating the Base", description: "We supported the base migration deal by deal, capturing higher realized ASP while every renewal held." }
      ]}
      resultsTitle="Value Captured, Base Intact"
      results={[
        { icon: TrendingUp, value: "19%", label: "Higher realized ASP", detail: "Within three quarters" },
        { icon: CheckCircle, value: "0", label: "Renewals lost", detail: "Base migrated without churn" },
        { icon: Target, value: "Value", label: "Anchored tiers", detail: "Price held on the features that matter" },
        { icon: DollarSign, value: "Flat", label: "Renewal rate", detail: "Margin gained without attrition" }
      ]}
      quote="Our list prices were fine — it was the discount field that was killing us, deal after deal. Rebuilding the tiers around what customers actually value and migrating the base carefully lifted our realized price nineteen percent, and we did not lose a single renewal doing it. That is margin we had been handing away for years."
      quoteAuthor="Chief Revenue Officer"
      quoteRole="Enterprise software operator"
      relatedStudies={[
        { title: "How a B2B Marketplace Grew Net Revenue Retention to 134% by Pricing on Value", metric: "134%", label: "net revenue retention", link: "/cases/marketplace-usage-pricing", image: "/images/capabilities/cap-conference-data.jpg" },
        { title: "How a Software Infrastructure Operator Made Its Forecast Trustworthy Again", metric: "62→91%", label: "forecast accuracy", link: "/cases/infra-forecast-rebuild", image: "/images/industries/tech-datacenter.jpg" }
      ]}
      ctaTitle="Is margin leaking into your discount field?"
      ctaDescription="Let's rebuild value-anchored tiers and migrate your base without putting renewals at risk."
    />
  );
}
