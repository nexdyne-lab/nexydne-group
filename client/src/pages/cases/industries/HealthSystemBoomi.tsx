import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, AlertTriangle, BarChart3, Clock, CheckCircle, Zap } from "lucide-react";

export default function HealthSystemBoomi() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Health System Connects 12 Systems Behind a Unified API Layer | iPaaS Case Study"
      seoDescription="A health system's registration, claims, and analytics ran on disconnected systems. A Boomi integration platform unified 12 systems behind a single orchestrated API layer as one source of truth."
      canonical="/cases/health-system-boomi"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Health System United 12 Systems Behind One API Layer"
      subtitle="Registration, claims, and analytics each ran on their own systems that didn't share data cleanly. A unified integration platform made them one orchestrated source of truth."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "12", label: "Systems Unified" },
        { value: "One", label: "API Layer" },
        { value: "Orchestrated", label: "Source of Truth" },
        { value: "Boomi", label: "Platform" }
      ]}
      clientContextTitle="Twelve Systems That Didn't Agree"
      clientContextIntro="A health system ran its core operations — patient registration, claims, analytics, and more — across twelve systems that had been integrated only loosely, through a patchwork of point connections and manual reconciliation. The same patient could look different depending on which system you asked."
      clientContextBody="The lack of clean integration meant data had to be reconciled by hand, errors crept in at the seams, and there was no single orchestrated source of truth spanning registration through claims to analytics. Every new connection was bespoke, and the fragility slowed any change. Patient registration, claims processing, and analytics each operated on their own version of reality. The health system needed an integration platform to connect the twelve systems behind a unified API layer, so data flowed cleanly and every function worked from one orchestrated source of truth."
      clientProfile={{
        industry: "Regional Health System",
        companySize: "~$680M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "12 Core Systems",
        additionalLabel: "Integration Estate"
      }}
      challengeTitle="Why the Systems Didn't Agree"
      challenges={[
        { icon: Target, title: "Loosely Connected Systems", description: "Twelve core systems were joined by a patchwork of point connections and manual reconciliation." },
        { icon: AlertTriangle, title: "Errors at the Seams", description: "Hand reconciliation let errors creep in wherever systems met." },
        { icon: BarChart3, title: "No Single Source of Truth", description: "Registration, claims, and analytics each operated on their own version of reality." },
        { icon: Clock, title: "Fragile, Bespoke Connections", description: "Every integration was custom, so change was slow and risky." }
      ]}
      approachTitle="Unify Behind One Orchestrated API Layer"
      approachIntro="We used a Boomi integration platform to connect the twelve systems behind a single API layer, so patient registration, claims, and analytics all run from one orchestrated source of truth."
      steps={[
        { step: "01", title: "Mapping the Twelve Systems", description: "We mapped how registration, claims, analytics, and the other systems needed to share data cleanly." },
        { step: "02", title: "Building the Unified API Layer", description: "We stood up a Boomi-based integration layer to connect the systems through reusable, orchestrated APIs." },
        { step: "03", title: "Establishing One Source of Truth", description: "We orchestrated the data flows so every function drew from one consistent, reconciled source." },
        { step: "04", title: "Retiring the Patchwork", description: "We replaced the manual reconciliation and bespoke connections with a maintainable integration platform." }
      ]}
      resultsTitle="One Orchestrated Source of Truth"
      results={[
        { icon: CheckCircle, value: "12", label: "Systems unified", detail: "Behind one API layer" },
        { icon: Target, value: "One", label: "Source of truth", detail: "Registration to claims to analytics" },
        { icon: Zap, value: "Orchestrated", label: "Data flows", detail: "Clean and reliable" },
        { icon: BarChart3, value: "Retired", label: "Patchwork", detail: "Manual reconciliation gone" }
      ]}
      quote="The same patient could look like three different people depending on which of our twelve systems you asked. Connecting them behind one orchestrated API layer meant registration, claims, and analytics finally worked from the same truth. The manual reconciliation — and the errors that came with it — simply went away."
      quoteAuthor="VP of Information Technology"
      quoteRole="Regional health system"
      relatedStudies={[
        { title: "How a National Retailer Cut Data-Pipeline Failures by 84%", metric: "84%", label: "fewer pipeline failures", link: "/cases/retail-data-pipeline-reliability", image: "/images/capabilities/cap-retail-data.jpg" },
        { title: "How an Insurer Moved 1,400 Pipelines to the Cloud Without the Business Noticing", metric: "1,400", label: "pipelines migrated to cloud", link: "/cases/insurer-pipeline-migration", image: "/images/industries/fin-monitors.jpg" }
      ]}
      ctaTitle="Do your core systems each hold a different version of the truth?"
      ctaDescription="Let's unify them behind one orchestrated API layer with a single source of truth."
    />
  );
}
