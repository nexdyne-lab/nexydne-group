import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, TrendingDown, Target, Users, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function DistributionDealerPortal() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="B2B Distributor Lifts Repeat Order Rate 23% With Dealer Portal | Customer Portal Case Study"
      seoDescription="A B2B distributor's 1,200 dealers had to call or email to reorder. A dealer portal with reorder, account history, and pricing transparency drove a durable 23% lift in repeat order rate."
      canonical="/cases/distribution-dealer-portal"
      industry="Industrial Distribution"
      industryLink="/industries/manufacturing"
      title="How a B2B Distributor Lifted Repeat Orders 23% With a Dealer Portal"
      subtitle="Twelve hundred dealers reordered by phone and email, so reordering was slow and friction-heavy. A self-service portal made it easy — and changed dealer behavior for good."
      heroImage="/images/capabilities/cap-warehouse-robot.jpg"
      metrics={[
        { value: "23%", label: "Higher Repeat Rate" },
        { value: "1,200", label: "Dealer Network" },
        { value: "Durable", label: "Behavior Change" },
        { value: "Self-Service", label: "Reorder" }
      ]}
      clientContextTitle="Reordering by Phone and Email"
      clientContextIntro="A B2B distributor served a network of 1,200 dealers who reordered products the only way available to them — by calling or emailing a sales rep. Every reorder required a human on both ends, and the friction meant dealers often delayed, consolidated, or took their routine business elsewhere."
      clientContextBody="The manual reorder process quietly suppressed repeat business. A dealer who wanted to place a quick reorder had to reach a rep, confirm pricing, and wait for the order to be entered — enough friction that reordering was a chore rather than a habit. Dealers also lacked visibility into their own account history and pricing, which slowed decisions and eroded trust. The distributor needed a dealer portal offering self-service reorder, account history, and pricing transparency — removing the friction so reordering became easy and frequent across the 1,200-dealer network."
      clientProfile={{
        industry: "Industrial Distributor",
        companySize: "~$470M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "1,200-Dealer Portal",
        additionalLabel: "Channel Platform"
      }}
      challengeTitle="Why Repeat Orders Lagged"
      challenges={[
        { icon: Clock, title: "Manual Reordering", description: "Every reorder required a phone call or email and a rep to enter it." },
        { icon: TrendingDown, title: "Friction Suppressing Repeat Business", description: "The hassle led dealers to delay, consolidate, or buy elsewhere." },
        { icon: Target, title: "No Account Visibility", description: "Dealers could not see their own history or pricing, slowing decisions." },
        { icon: Users, title: "Reps as a Bottleneck", description: "Routine reorders consumed rep time and gated dealer purchasing." }
      ]}
      approachTitle="Make Reordering Effortless"
      approachIntro="We built a dealer portal with self-service reorder, account history, and pricing transparency that removed the friction from routine purchasing — driving a durable 23 percent lift in repeat order rate across the 1,200-dealer network."
      steps={[
        { step: "01", title: "Enabling Self-Service Reorder", description: "We built reorder into the portal so dealers could place routine orders themselves in seconds." },
        { step: "02", title: "Exposing Account History", description: "We gave dealers visibility into their own order history, making reordering fast and informed." },
        { step: "03", title: "Adding Pricing Transparency", description: "We surfaced dealer-specific pricing so purchasing decisions were quick and trusted." },
        { step: "04", title: "Driving Durable Behavior Change", description: "We rolled the portal across the 1,200 dealers, and the reduced friction lifted repeat order rate 23 percent for good." }
      ]}
      resultsTitle="Reordering Became a Habit"
      results={[
        { icon: TrendingUp, value: "23%", label: "Higher repeat rate", detail: "Across the dealer network" },
        { icon: CheckCircle, value: "1,200", label: "Dealers", detail: "On self-service reorder" },
        { icon: Target, value: "Durable", label: "Behavior change", detail: "Not a one-time bump" },
        { icon: Zap, value: "Seconds", label: "To reorder", detail: "Friction removed" }
      ]}
      quote="Twelve hundred dealers were reordering by calling a rep, and that friction was quietly costing us repeat business — reordering was a chore, so they did less of it. A portal with self-service reorder, their own history, and clear pricing lifted our repeat order rate twenty-three percent and, more importantly, it stuck. Reordering finally became a habit instead of a hassle."
      quoteAuthor="VP of Sales"
      quoteRole="Industrial distributor"
      relatedStudies={[
        { title: "How a Consumer-Finance CMO Turned a 92-Page Pack Nobody Read Into Six Decisions a Quarter", metric: "38%", label: "less executive review time", link: "/cases/financial-services-insight-redesign", image: "/images/industries/fin-monitors.jpg" },
        { title: "How a Retailer Recovered 14 Weeks of Analyst Time by Fixing Its Insight Cadence", metric: "3x", label: "higher brief engagement", link: "/cases/retail-insight-cadence", image: "/images/industries/retail-shelves.jpg" }
      ]}
      ctaTitle="Is manual reordering suppressing your repeat business?"
      ctaDescription="Let's build a dealer portal that makes reordering effortless and drives durable growth."
    />
  );
}
