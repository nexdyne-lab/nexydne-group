import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, AlertTriangle, BarChart3, Zap, CheckCircle } from "lucide-react";

export default function ManufacturerMulesoft() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Manufacturer Replaces 47 Point-to-Point Integrations With MuleSoft | iPaaS Case Study"
      seoDescription="An industrial manufacturer's 47 brittle point-to-point integrations made every change slow. An API-led MuleSoft architecture cut integration build time from 12 weeks to 3 and unlocked real-time supply-chain visibility."
      canonical="/cases/manufacturer-mulesoft"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Replaced 47 Point-to-Point Integrations With an API-Led Architecture"
      subtitle="Forty-seven brittle point-to-point connections meant every new integration took three months and every change risked breaking others. An API-led architecture made integration fast and reusable."
      heroImage="/images/capabilities/cap-warehouse-robot.jpg"
      metrics={[
        { value: "12w → 3w", label: "Per Integration" },
        { value: "47", label: "Point-to-Points Retired" },
        { value: "API-Led", label: "Architecture" },
        { value: "Real-Time", label: "Supply-Chain Visibility" }
      ]}
      clientContextTitle="A Tangle of 47 Connections"
      clientContextIntro="An industrial manufacturer had connected its systems the way many do over time — one point-to-point integration at a time, until there were forty-seven of them. Each was custom, brittle, and independent, and together they formed a tangle that made every change slow and risky."
      clientContextBody="With point-to-point integration, nothing was reusable: each new connection was built from scratch, taking about twelve weeks, and changing any system risked breaking every integration that touched it. The brittleness also meant the manufacturer had no reliable real-time view across its supply chain, because the connections could not be trusted to carry current data consistently. The manufacturer needed an API-led architecture — reusable APIs instead of one-off connections — so integration became fast and safe, and real-time visibility became possible."
      clientProfile={{
        industry: "Industrial Manufacturer",
        companySize: "~$540M Annual Revenue",
        projectDuration: "7 Months",
        additionalInfo: "47 Legacy Integrations",
        additionalLabel: "Integration Estate"
      }}
      challengeTitle="Why Integration Was Slow and Risky"
      challenges={[
        { icon: Target, title: "47 Brittle Connections", description: "Point-to-point integrations were custom, independent, and formed an unmanageable tangle." },
        { icon: Clock, title: "Twelve Weeks Each", description: "Every new integration was built from scratch, taking about three months." },
        { icon: AlertTriangle, title: "Change Broke Things", description: "Altering any system risked breaking every integration that touched it." },
        { icon: BarChart3, title: "No Real-Time Visibility", description: "Brittle connections could not carry reliable current data across the supply chain." }
      ]}
      approachTitle="Move to API-Led Integration"
      approachIntro="We replaced the 47 point-to-point integrations with an API-led MuleSoft architecture, cutting new-integration build time from twelve weeks to three and unlocking real-time supply-chain visibility."
      steps={[
        { step: "01", title: "Designing the API-Led Layers", description: "We architected reusable system, process, and experience APIs to replace the one-off connections." },
        { step: "02", title: "Retiring the Point-to-Points", description: "We migrated the 47 brittle integrations onto the reusable API layer, ending the tangle." },
        { step: "03", title: "Speeding New Integrations", description: "With reusable APIs, new integrations composed from existing building blocks in three weeks instead of twelve." },
        { step: "04", title: "Unlocking Real-Time Visibility", description: "The reliable API layer carried current data across systems, giving the manufacturer real-time supply-chain visibility." }
      ]}
      resultsTitle="Integration That's Fast and Safe"
      results={[
        { icon: Zap, value: "12w → 3w", label: "Per integration", detail: "Reusable APIs, not one-offs" },
        { icon: CheckCircle, value: "47", label: "Retired", detail: "Point-to-point connections" },
        { icon: Target, value: "API-Led", label: "Architecture", detail: "Reusable building blocks" },
        { icon: BarChart3, value: "Real-Time", label: "Visibility", detail: "Across the supply chain" }
      ]}
      quote="We had forty-seven hand-built connections, and every new one took three months while every change threatened to break the others. Moving to reusable APIs cut integration time to three weeks and finally gave us a real-time view of our supply chain. We build integrations from blocks now instead of from scratch."
      quoteAuthor="VP of IT"
      quoteRole="Industrial manufacturer"
      relatedStudies={[
        { title: "How a Health System United 12 Systems Behind One API Layer", metric: "12", label: "systems unified behind one API layer", link: "/cases/health-system-boomi", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { title: "How a National Retailer Cut Data-Pipeline Failures by 84%", metric: "84%", label: "fewer pipeline failures", link: "/cases/retail-data-pipeline-reliability", image: "/images/capabilities/cap-retail-data.jpg" }
      ]}
      ctaTitle="Is a tangle of point-to-point integrations slowing you down?"
      ctaDescription="Let's move to an API-led architecture that makes integration fast, safe, and reusable."
    />
  );
}
