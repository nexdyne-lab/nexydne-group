import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, BarChart3, Users, TrendingDown, DollarSign, CheckCircle } from "lucide-react";

export default function HealthSystemDataStrategy() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Health System Resets Data Strategy, Unlocks $42M in Decision Value | Data Strategy Case Study"
      seoDescription="A health system treated data as compliance overhead. A 24-month roadmap, governance council, and federated operating model turned data into operational advantage worth $42M in decision value."
      canonical="/cases/health-system-data-strategy"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Health System Turned Data From Overhead Into $42M of Advantage"
      subtitle="Data was managed as a compliance cost, not an asset, so its value went untapped. A reset strategy, real governance, and a federated model turned it into operational advantage."
      heroImage="/case-healthcare-team.5797392b.jpg"
      metrics={[
        { value: "$42M", label: "Decision Value Unlocked" },
        { value: "24 Mo", label: "Data Roadmap" },
        { value: "Council", label: "Governance Established" },
        { value: "Federated", label: "Operating Model" }
      ]}
      clientContextTitle="Data Treated as Overhead"
      clientContextIntro="A health system regarded its data primarily as a compliance obligation — something to be stored, secured, and reported on to satisfy regulators. The idea that the same data could drive operational and clinical decisions had never taken hold, so its value went almost entirely untapped."
      clientContextBody="Without a strategy, data investment was defensive and fragmented: each department solved its own reporting need in isolation, governance was thin, and there was no shared roadmap or ownership model. The organization sat on data that could have improved throughput, staffing, and outcomes, but had no way to turn it into decisions. Leadership wanted to reset the relationship with data entirely — a clear multi-year roadmap, real governance, and an operating model that made data an operational advantage rather than a cost center."
      clientProfile={{
        industry: "Regional Health System",
        companySize: "~$680M Annual Revenue",
        projectDuration: "24 Months",
        additionalInfo: "Enterprise Data Strategy",
        additionalLabel: "Transformation Scope"
      }}
      challengeTitle="Why the Data Sat Idle"
      challenges={[
        { icon: Target, title: "Data as Compliance Only", description: "Data was managed to satisfy regulators, not to drive decisions, so its value went untapped." },
        { icon: BarChart3, title: "Fragmented Investment", description: "Each department solved its own reporting need in isolation, with no shared roadmap." },
        { icon: Users, title: "Thin Governance", description: "There was no council or ownership model to steward data as an enterprise asset." },
        { icon: TrendingDown, title: "Advantage Left on the Table", description: "Data that could improve throughput, staffing, and outcomes was never turned into decisions." }
      ]}
      approachTitle="Reset the Strategy, Build the Model"
      approachIntro="We built a 24-month data roadmap, established a governance council, and stood up a federated operating model — turning data from compliance overhead into operational advantage worth $42M in decision value."
      steps={[
        { step: "01", title: "Setting a 24-Month Roadmap", description: "We defined a clear multi-year roadmap that sequenced data investment against the decisions it would enable, not just compliance needs." },
        { step: "02", title: "Establishing a Governance Council", description: "We stood up a governance council to steward data as an enterprise asset, with real ownership and standards." },
        { step: "03", title: "Standing Up a Federated Model", description: "We built a federated operating model so departments could use data locally within enterprise governance, ending the fragmented silos." },
        { step: "04", title: "Turning Data Into Decisions", description: "We connected the data to the operational and clinical decisions it could improve, unlocking measurable decision value." }
      ]}
      resultsTitle="Data as an Operational Advantage"
      results={[
        { icon: DollarSign, value: "$42M", label: "Decision value", detail: "Unlocked from existing data" },
        { icon: CheckCircle, value: "24 Mo", label: "Roadmap", detail: "Investment tied to decisions" },
        { icon: Users, value: "Council", label: "Governance", detail: "Data stewarded as an asset" },
        { icon: Target, value: "Federated", label: "Model", detail: "Local use, enterprise standards" }
      ]}
      quote="We had been treating our data as a box to check for regulators. Resetting the whole strategy — a real roadmap, actual governance, and a model that let departments use data within guardrails — turned that overhead into forty-two million dollars of better decisions. Data went from a cost we managed to an advantage we compete on."
      quoteAuthor="Chief Operating Officer"
      quoteRole="Regional health system"
      relatedStudies={[
        { title: "How an Industrial Holding Company Turned Its Data Into a Third Revenue Stream", metric: "3rd", label: "revenue stream created", link: "/cases/industrial-data-monetization", image: "/images/capabilities/cap-battery-factory.jpg" },
        { title: "How a Regional Bank Tripled Self-Service Reporting by Training 600 People", metric: "3x", label: "more self-service reporting", link: "/cases/bank-data-literacy", image: "/images/industries/fin-monitors.jpg" }
      ]}
      ctaTitle="Is your data managed as overhead instead of an asset?"
      ctaDescription="Let's reset the strategy, governance, and operating model to unlock its decision value."
    />
  );
}
