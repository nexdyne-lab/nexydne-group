import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Target, Users, AlertTriangle, Zap, CheckCircle } from "lucide-react";

export default function ManufacturerContentDiscovery() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Manufacturer Cuts Engineering Document Search Time Two-Thirds | Content Services Case Study"
      seoDescription="A manufacturer's engineers wasted hours hunting a sprawling document archive. AI classification and semantic search cut document search time by two-thirds and made the archive self-service."
      canonical="/cases/manufacturer-content-discovery"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Cut Engineering Document Search Time by Two-Thirds"
      subtitle="Engineers spent hours hunting through a sprawling archive for the drawings and specs they needed. AI classification and semantic search turned that archive into a self-service knowledge surface."
      heroImage="/images/capabilities/cap-robot-factory.jpg"
      metrics={[
        { value: "2/3", label: "Less Search Time" },
        { value: "Semantic", label: "Search" },
        { value: "AI", label: "Classification" },
        { value: "Self-Service", label: "Knowledge Surface" }
      ]}
      clientContextTitle="Engineers Hunting for Their Own Documents"
      clientContextIntro="A manufacturer's engineering team worked from a vast archive of drawings, specifications, and technical documents accumulated over decades. Finding the right document meant navigating folder hierarchies and guessing at file names, and engineers routinely spent hours hunting for information that already existed."
      clientContextBody="The archive had grown far faster than any organizing scheme could keep up with. Documents were inconsistently named and filed, keyword search returned too much or nothing, and institutional knowledge about where things lived walked out the door with retiring staff. The cost was engineering time — expensive people spending hours searching instead of designing — and the risk of work being duplicated or done against outdated specs. The manufacturer needed AI-powered classification and semantic search to transform the sprawling archive into a surface engineers could actually self-serve from."
      clientProfile={{
        industry: "Industrial Manufacturer",
        companySize: "~$540M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Engineering Document Archive",
        additionalLabel: "Knowledge Estate"
      }}
      challengeTitle="Why the Archive Was Unsearchable"
      challenges={[
        { icon: Clock, title: "Hours Lost Searching", description: "Engineers routinely spent hours hunting for documents that already existed." },
        { icon: Target, title: "Inconsistent Filing", description: "Decades of inconsistent naming and foldering made keyword search unreliable." },
        { icon: Users, title: "Knowledge Walking Out", description: "Institutional knowledge of where documents lived left with retiring staff." },
        { icon: AlertTriangle, title: "Risk of Outdated Specs", description: "Hard-to-find documents meant work risked being duplicated or done against old specs." }
      ]}
      approachTitle="Classify With AI, Search by Meaning"
      approachIntro="We applied AI-powered classification and semantic search to the engineering archive, transforming it into a self-service knowledge surface and cutting document search time by two-thirds."
      steps={[
        { step: "01", title: "Classifying the Archive With AI", description: "We used AI to classify and tag the sprawling document set consistently, overcoming decades of inconsistent filing." },
        { step: "02", title: "Enabling Semantic Search", description: "We added semantic search so engineers could find documents by meaning and intent, not exact file names." },
        { step: "03", title: "Building a Self-Service Surface", description: "We turned the archive into a surface engineers could search themselves, independent of who knew where things lived." },
        { step: "04", title: "Cutting Search Time", description: "We reduced the time engineers spent hunting for documents by two-thirds, returning hours to actual design work." }
      ]}
      resultsTitle="An Archive Engineers Can Actually Use"
      results={[
        { icon: Zap, value: "2/3", label: "Less search time", detail: "Returned to design work" },
        { icon: CheckCircle, value: "Semantic", label: "Search", detail: "By meaning, not file name" },
        { icon: Target, value: "AI", label: "Classified", detail: "Consistent across the archive" },
        { icon: Users, value: "Self-Service", label: "Surface", detail: "No tribal knowledge needed" }
      ]}
      quote="Our engineers were spending hours digging through decades of documents just to find a spec that already existed. AI classification and search by meaning turned that mess into something they can self-serve from, and cut their search time by two-thirds. That is expensive engineering time going back into actual design."
      quoteAuthor="VP of Engineering"
      quoteRole="Industrial manufacturer"
      relatedStudies={[
        { title: "How a National Insurer Cut Claims Cycle Time 47% With End-to-End Orchestration", metric: "47%", label: "faster claims cycle", link: "/cases/insurer-claims-orchestration", image: "/images/industries/fin-monitors.jpg" },
        { title: "How a Bank Cut Loan Origination From 14 Days to 3", metric: "14 → 3 days", label: "loan origination", link: "/cases/bank-loan-orchestration", image: "/images/industries/fin-trader.jpg" }
      ]}
      ctaTitle="Are your experts hunting for documents that already exist?"
      ctaDescription="Let's turn your archive into a self-service surface with AI classification and semantic search."
    />
  );
}
