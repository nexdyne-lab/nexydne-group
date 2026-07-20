import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Users, Target, Shield, Zap, CheckCircle } from "lucide-react";

export default function AssetManagerDataMesh() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Asset Manager Stands Up Real-Time Data Mesh Across 5 Domains | Data Platform Case Study"
      seoDescription="An asset manager's central data team was a bottleneck. Domain-owned Snowflake data products with federated governance let portfolio teams ship analytics in days instead of quarters."
      canonical="/cases/asset-manager-data-mesh"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How an Asset Manager Let Portfolio Teams Ship Analytics in Days, Not Quarters"
      subtitle="Every analytics request queued behind one central data team, so answers took quarters. A domain-owned data mesh put the data — and the speed — in the hands of the teams that needed it."
      heroImage="/images/industries/fin-handshake-city.jpg"
      metrics={[
        { value: "Days", label: "Not Quarters" },
        { value: "5", label: "Domains Own Data" },
        { value: "Federated", label: "Governance" },
        { value: "Real-Time", label: "Data Products" }
      ]}
      clientContextTitle="A Central Team That Couldn't Keep Up"
      clientContextIntro="An asset manager ran all of its data through a single central team. However capable, that team was a bottleneck: every portfolio group's analytics request joined one queue, and the wait to get a new dataset or model into production stretched into quarters."
      clientContextBody="The centralized model did not scale with the firm's ambitions. Portfolio teams understood their own data best but could not act on it without routing through the central team, and the central team could not possibly know every domain deeply enough to serve them all quickly. The result was slow analytics and frustrated investors-facing teams. The firm needed to distribute ownership — letting each domain own and publish its own governed data products — while keeping governance coherent across the whole, so speed did not come at the cost of control."
      clientProfile={{
        industry: "Asset Manager",
        companySize: "300+ Institutional Clients",
        projectDuration: "7 Months",
        additionalInfo: "5 Data Domains",
        additionalLabel: "Operating Model"
      }}
      challengeTitle="Why Analytics Took Quarters"
      challenges={[
        { icon: Clock, title: "One Central Bottleneck", description: "Every analytics request queued behind a single central team, so delivery stretched into quarters." },
        { icon: Users, title: "Domain Knowledge Stranded", description: "Portfolio teams understood their data best but could not act without routing through the center." },
        { icon: Target, title: "Central Team Spread Thin", description: "No central team could know every domain deeply enough to serve them all quickly." },
        { icon: Shield, title: "Governance vs. Speed", description: "Distributing ownership risked losing the governance coherence a regulated firm requires." }
      ]}
      approachTitle="Distribute Ownership, Keep Governance Federated"
      approachIntro="We stood up domain-owned Snowflake data products under federated governance, so each of five domains could publish and consume real-time data itself — letting portfolio teams ship analytics in days instead of quarters."
      steps={[
        { step: "01", title: "Defining Domain Data Products", description: "We modeled each domain's data as governed, discoverable products the domain itself owned and published." },
        { step: "02", title: "Standing Up the Mesh on Snowflake", description: "We built the real-time data mesh on Snowflake so domains could produce and consume each other's products without a central handoff." },
        { step: "03", title: "Federating Governance", description: "We established federated governance — global standards, local ownership — so distribution did not sacrifice control." },
        { step: "04", title: "Enabling the Domains", description: "We equipped the five domains to build and ship their own analytics, collapsing the delivery timeline from quarters to days." }
      ]}
      resultsTitle="Speed Without Losing Control"
      results={[
        { icon: Zap, value: "Days", label: "To ship", detail: "Down from quarters" },
        { icon: Users, value: "5", label: "Domains own data", detail: "No central bottleneck" },
        { icon: Shield, value: "Federated", label: "Governance", detail: "Global standards, local ownership" },
        { icon: CheckCircle, value: "Real-Time", label: "Data products", detail: "Produced and consumed across domains" }
      ]}
      quote="Our central data team was excellent and completely overwhelmed — everything queued behind them for a quarter. Giving each domain ownership of its own governed data products, on a mesh, let our portfolio teams move in days. And because governance stayed federated, we got the speed without losing the control a firm like ours has to have."
      quoteAuthor="Chief Data Officer"
      quoteRole="Asset manager"
      relatedStudies={[
        { title: "How a Manufacturer Cut Its Reporting Cycle From 14 Days to 6 Hours", metric: "14 days → 6 hrs", label: "reporting cycle", link: "/cases/manufacturing-data-platform", image: "/images/industries/mfg-robot-arm.jpg" },
        { title: "How a Health System Recovered 1.3% of Net Revenue a Year by Fixing Its Data Quality", metric: "1.3%", label: "of net revenue recovered annually", link: "/cases/healthcare-data-quality", image: "/images/cases/healthcare-data-quality-hero.jpg" }
      ]}
      ctaTitle="Is a central data team your bottleneck?"
      ctaDescription="Let's stand up a governed data mesh so domains ship analytics in days, not quarters."
    />
  );
}
