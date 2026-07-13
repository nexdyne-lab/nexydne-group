import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Shield, Target, AlertTriangle, Clock, CheckCircle } from "lucide-react";

export default function LawFirmCspMigration() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Global Law Firm Migrates 12M Documents to a Modern CSP in 9 Months | Content Services Case Study"
      seoDescription="A global law firm's legacy ECM was untenable. A phased migration of 12M documents to a cloud content services platform preserved matter security, ethical walls, and 30 years of metadata."
      canonical="/cases/law-firm-csp-migration"
      industry="Legal Services"
      industryLink="/industries"
      title="How a Global Law Firm Migrated 12M Documents Without Losing a Single Ethical Wall"
      subtitle="Twelve million documents, thirty years of metadata, and strict matter-security rules made this migration unusually unforgiving. A phased approach moved it all to a modern platform intact."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "12M", label: "Documents Migrated" },
        { value: "9 Mo", label: "Phased Migration" },
        { value: "Preserved", label: "Ethical Walls" },
        { value: "30 Yrs", label: "Metadata Intact" }
      ]}
      clientContextTitle="A Migration With No Room for Error"
      clientContextIntro="A global law firm needed to move twelve million documents off an aging enterprise content-management system onto a modern cloud content services platform. In most industries a document migration is routine; in a law firm it is unusually unforgiving, because the documents carry strict security and ethical constraints that cannot be violated even briefly."
      clientContextBody="Legal documents live inside matter security and ethical walls — rules governing exactly who can see what, which exist to prevent conflicts of interest and protect client confidentiality. A migration that dropped or mis-applied a single permission could breach confidentiality or create a conflict, with serious professional consequences. Layered on top were thirty years of accumulated metadata that the firm relied on to find and manage matters. The firm needed the entire corpus moved to the new platform with every security rule, ethical wall, and piece of metadata preserved exactly — and it had to happen in phases to keep the firm operating throughout."
      clientProfile={{
        industry: "Global Law Firm",
        companySize: "Large Professional-Services Firm",
        projectDuration: "9 Months",
        additionalInfo: "12M-Document Migration",
        additionalLabel: "Content Estate"
      }}
      challengeTitle="Why This Migration Was Unforgiving"
      challenges={[
        { icon: Shield, title: "Matter Security and Ethical Walls", description: "Strict rules govern who can see each document; a single mis-applied permission risks a breach or conflict." },
        { icon: Target, title: "30 Years of Metadata", description: "Decades of accumulated metadata the firm relied on had to survive the move intact." },
        { icon: AlertTriangle, title: "No Tolerance for Error", description: "A dropped permission could breach confidentiality with serious professional consequences." },
        { icon: Clock, title: "The Firm Had to Keep Running", description: "The migration could not interrupt active legal work." }
      ]}
      approachTitle="Migrate in Phases, Preserve Everything"
      approachIntro="We ran a phased migration of all twelve million documents from the legacy ECM to a cloud content services platform, preserving matter security, ethical walls, and thirty years of metadata exactly."
      steps={[
        { step: "01", title: "Mapping Security and Metadata", description: "We catalogued the matter-security rules, ethical walls, and metadata schema so every constraint could be carried across faithfully." },
        { step: "02", title: "Designing a Preservation-First Migration", description: "We built the migration to move documents with their permissions and metadata intact, verifying constraints at every step." },
        { step: "03", title: "Migrating in Phases", description: "We moved the corpus in phases so the firm kept operating and each batch could be validated before the next." },
        { step: "04", title: "Verifying Integrity", description: "We validated that ethical walls, security, and metadata came across exactly, with no breach or loss." }
      ]}
      resultsTitle="Everything Moved, Nothing Compromised"
      results={[
        { icon: CheckCircle, value: "12M", label: "Documents", detail: "Migrated to the modern CSP" },
        { icon: Shield, value: "Preserved", label: "Ethical walls", detail: "Every permission intact" },
        { icon: Target, value: "30 Yrs", label: "Metadata", detail: "Carried across faithfully" },
        { icon: Clock, value: "9 Mo", label: "Phased", detail: "Firm operated throughout" }
      ]}
      quote="For a law firm, a document migration is not routine — one mis-applied permission can breach a confidence or create a conflict. Moving twelve million documents in phases, with every ethical wall and thirty years of metadata preserved exactly, meant we modernized our platform without ever putting a matter at risk. That precision was the whole job."
      quoteAuthor="Chief Information Officer"
      quoteRole="Global law firm"
      relatedStudies={[
        { title: "How a Manufacturer Cut Engineering Document Search Time by Two-Thirds", metric: "2/3", label: "less document search time", link: "/cases/manufacturer-content-discovery", image: "/images/capabilities/cap-robot-factory.jpg" },
        { title: "How a National Insurer Cut Claims Cycle Time 47% With End-to-End Orchestration", metric: "47%", label: "faster claims cycle", link: "/cases/insurer-claims-orchestration", image: "/images/industries/fin-monitors.jpg" }
      ]}
      ctaTitle="Facing a migration where nothing can be lost?"
      ctaDescription="Let's plan a phased, preservation-first migration that keeps every rule and record intact."
    />
  );
}
