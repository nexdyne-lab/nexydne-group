import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, DollarSign, Users, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";

export default function IndustrialMaIntegration() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Industrial Holding Company Integrates Three Acquisitions in 14 Months | Enterprise Transformation Case Study"
      seoDescription="An industrial holding company needed to integrate three acquisitions without stalling. A disciplined M&A integration playbook captured 110% of synergy targets while preserving capacity for the next deal."
      canonical="/cases/industrial-ma-integration"
      industry="Industrial Manufacturing"
      industryLink="/industries/manufacturing"
      title="How an Industrial Holding Company Integrated Three Acquisitions and Beat Its Synergy Targets"
      subtitle="Three acquisitions had to be integrated at once, without exhausting the organization or missing the synergies that justified the deals. A disciplined playbook delivered both."
      heroImage="/images/capabilities/cap-battery-factory.jpg"
      metrics={[
        { value: "110%", label: "Of Synergy Targets" },
        { value: "3", label: "Acquisitions" },
        { value: "14 Mo", label: "To Integrate" },
        { value: "Preserved", label: "Deal Capacity" }
      ]}
      clientContextTitle="Three Integrations at Once"
      clientContextIntro="An industrial holding company had acquired three businesses and now faced the hard part: integrating all three, more or less simultaneously, to capture the synergies that had justified the acquisitions. It also had a pipeline of further deals, so it could not afford to consume all its organizational capacity on these three."
      clientContextBody="Integration is where acquisition value is won or lost. Done poorly, integrations drag on, synergies evaporate, and the acquiring organization exhausts itself — leaving no capacity for the next deal. Three at once multiplied every risk: competing for the same integration resources, three sets of systems and cultures to reconcile, and three synergy cases to deliver. The holding company needed a disciplined, repeatable M&A integration playbook — clear governance, sequenced workstreams, and rigorous synergy tracking — to capture the value on schedule while keeping capacity intact for the deals still to come."
      clientProfile={{
        industry: "Industrial Holding Company",
        companySize: "~3,500 Employees",
        projectDuration: "14 Months",
        additionalInfo: "3 Acquisitions Integrated",
        additionalLabel: "M&A Program"
      }}
      challengeTitle="Why Three Integrations Was Hard"
      challenges={[
        { icon: Target, title: "Three at Once", description: "Integrating three acquisitions simultaneously multiplied every risk and resource conflict." },
        { icon: DollarSign, title: "Synergies at Stake", description: "Poor integration would let the synergies that justified the deals evaporate." },
        { icon: Users, title: "Finite Capacity", description: "The organization could not exhaust itself and leave nothing for the next deal." },
        { icon: AlertTriangle, title: "Three Systems and Cultures", description: "Three sets of systems, processes, and cultures had to be reconciled at once." }
      ]}
      approachTitle="Run a Disciplined Integration Playbook"
      approachIntro="We ran a disciplined M&A integration playbook — clear governance, sequenced workstreams, and rigorous synergy tracking — that captured 110 percent of synergy targets across the three acquisitions in fourteen months while preserving capacity for the next deal."
      steps={[
        { step: "01", title: "Establishing Integration Governance", description: "We stood up clear governance to steer three integrations at once without them competing chaotically for resources." },
        { step: "02", title: "Sequencing the Workstreams", description: "We sequenced the integration workstreams across the three deals to use finite capacity efficiently." },
        { step: "03", title: "Tracking Synergies Rigorously", description: "We tracked every synergy to realization, so value was captured rather than assumed." },
        { step: "04", title: "Preserving Capacity", description: "We ran the program to protect organizational capacity, so the holding company finished ready for its next acquisition." }
      ]}
      resultsTitle="Value Captured, Capacity Intact"
      results={[
        { icon: TrendingUp, value: "110%", label: "Of synergy targets", detail: "Across the three deals" },
        { icon: CheckCircle, value: "3", label: "Integrated", detail: "In fourteen months" },
        { icon: Users, value: "Preserved", label: "Capacity", detail: "Ready for the next deal" },
        { icon: Target, value: "Rigorous", label: "Synergy tracking", detail: "Captured, not assumed" }
      ]}
      quote="Integrating three acquisitions at once is where most of the value from those deals gets won or lost — and where organizations burn themselves out. A disciplined playbook let us capture a hundred and ten percent of our synergy targets in fourteen months and, just as importantly, come out of it with the capacity to do the next deal in our pipeline."
      quoteAuthor="Chief Executive Officer"
      quoteRole="Industrial holding company"
      relatedStudies={[
        { title: "How a Health-Tech Startup Scaled From 10K to 2M Users on a Single Codebase", metric: "10K → 2M", label: "users on one codebase", link: "/cases/healthtech-react-native", image: "/images/cases/healthtech-react-native-hero.jpg" },
        { title: "How a Regional Bank Cut Its Mobile App Crash Rate by 71%", metric: "71%", label: "lower crash rate", link: "/cases/bank-app-modernization", image: "/images/industries/fin-monitors.jpg" }
      ]}
      ctaTitle="Facing multiple integrations at once?"
      ctaDescription="Let's run a disciplined playbook that captures synergies and preserves capacity for the next deal."
    />
  );
}
