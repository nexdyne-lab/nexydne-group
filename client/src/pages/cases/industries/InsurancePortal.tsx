import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Users, Target, TrendingDown, CheckCircle, Zap } from "lucide-react";

export default function InsurancePortal() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Regional Insurer Cuts Inbound Call Volume 47% With Portal | Customer Portal Case Study"
      seoDescription="A regional insurer's call center was flooded with routine requests. A self-service portal for claims status, billing, and document upload absorbed the top three contact reasons and cut call volume 47%."
      canonical="/cases/insurance-portal"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a Regional Insurer Cut Inbound Calls 47% With a Self-Service Portal"
      subtitle="Customers called for the same three things — claim status, billing, documents — because there was no other way to get them. A self-service portal absorbed that volume within six months."
      heroImage="/images/industries/fin-handshake-city.jpg"
      metrics={[
        { value: "47%", label: "Lower Call Volume" },
        { value: "Top 3", label: "Reasons Absorbed" },
        { value: "6 Mo", label: "To Impact" },
        { value: "Self-Service", label: "24/7" }
      ]}
      clientContextTitle="A Call Center Flooded With the Routine"
      clientContextIntro="A regional insurer's call center was overwhelmed, and the reasons were remarkably consistent: customers called to check claim status, ask about billing, or submit documents. They called because there was no other way — the insurer offered no self-service, so every routine need became a phone call."
      clientContextBody="The call volume was expensive and largely avoidable. Agents spent their days reading out claim statuses and taking billing questions that a portal could answer instantly, while customers waited on hold for information that should have been a click away. The top three contact reasons alone accounted for a huge share of the volume. The insurer needed a self-service portal that let customers check claim status, manage billing, and upload documents themselves — absorbing the routine contact reasons and freeing agents for the interactions that genuinely need a person."
      clientProfile={{
        industry: "Regional Insurer",
        companySize: "~$470M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "Self-Service Portal",
        additionalLabel: "Customer Operations"
      }}
      challengeTitle="Why Customers Kept Calling"
      challenges={[
        { icon: Clock, title: "No Self-Service Option", description: "Every routine need became a phone call because there was no alternative." },
        { icon: Users, title: "Agents on Routine Requests", description: "Agents spent their days reading claim statuses and taking billing questions." },
        { icon: Target, title: "Three Reasons, Most Volume", description: "Claim status, billing, and documents drove a huge share of all calls." },
        { icon: TrendingDown, title: "Customers on Hold", description: "People waited on hold for information that should have been a click away." }
      ]}
      approachTitle="Give Customers Self-Service"
      approachIntro="We launched a self-service portal for claims status, billing, and document upload that absorbed the top three contact reasons within six months — cutting inbound call volume 47 percent."
      steps={[
        { step: "01", title: "Targeting the Top Contact Reasons", description: "We confirmed claim status, billing, and document submission as the routine reasons driving most call volume." },
        { step: "02", title: "Building the Self-Service Portal", description: "We built a portal that let customers check claim status, manage billing, and upload documents themselves, any time." },
        { step: "03", title: "Driving Adoption", description: "We guided customers to the portal so the routine volume genuinely shifted off the phones." },
        { step: "04", title: "Freeing the Call Center", description: "With the top reasons absorbed, agents were freed for interactions that truly need a person, and call volume fell 47 percent." }
      ]}
      resultsTitle="Routine Requests Off the Phones"
      results={[
        { icon: TrendingDown, value: "47%", label: "Lower calls", detail: "Inbound volume cut" },
        { icon: CheckCircle, value: "Top 3", label: "Reasons absorbed", detail: "Claims, billing, documents" },
        { icon: Zap, value: "24/7", label: "Self-service", detail: "Any time, no hold" },
        { icon: Users, value: "Freed", label: "Agents", detail: "For interactions that need a person" }
      ]}
      quote="Our customers called us for the same three things constantly — claim status, billing, documents — simply because we gave them no other way to get them. A portal that lets them do all three themselves cut our inbound calls by nearly half in six months. Our agents stopped reading out statuses and started helping the customers who actually needed a conversation."
      quoteAuthor="VP of Customer Operations"
      quoteRole="Regional insurer"
      relatedStudies={[
        { title: "How a B2B Distributor Lifted Repeat Orders 23% With a Dealer Portal", metric: "23%", label: "higher repeat order rate", link: "/cases/distribution-dealer-portal", image: "/images/capabilities/cap-warehouse-robot.jpg" },
        { title: "How a Consumer-Finance CMO Turned a 92-Page Pack Nobody Read Into Six Decisions a Quarter", metric: "38%", label: "less executive review time", link: "/cases/financial-services-insight-redesign", image: "/images/industries/fin-monitors.jpg" }
      ]}
      ctaTitle="Is your call center flooded with routine requests?"
      ctaDescription="Let's launch self-service for the top contact reasons and take that volume off the phones."
    />
  );
}
