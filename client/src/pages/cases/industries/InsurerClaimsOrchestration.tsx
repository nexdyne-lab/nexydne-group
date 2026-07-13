import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, AlertTriangle, BarChart3, Zap, CheckCircle } from "lucide-react";

export default function InsurerClaimsOrchestration() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="National Insurer Orchestrates Claims End-to-End, Cuts Cycle 47% | Process Orchestration Case Study"
      seoDescription="A national insurer's claims ran across six disconnected tools. A Camunda-based orchestration layer unified intake-to-payout in one executable model and cut cycle time 47%."
      canonical="/cases/insurer-claims-orchestration"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a National Insurer Cut Claims Cycle Time 47% With End-to-End Orchestration"
      subtitle="A claim passed through six disconnected tools with no one system owning the whole journey. A single executable orchestration model spanned intake to payout and cut cycle time nearly in half."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "47%", label: "Faster Claims Cycle" },
        { value: "6 → 1", label: "Tools Orchestrated" },
        { value: "Intake→Payout", label: "One Model" },
        { value: "Camunda", label: "Orchestration" }
      ]}
      clientContextTitle="A Claim With No Owner"
      clientContextIntro="A national insurer processed claims across six disconnected systems — intake, validation, adjudication, and payout each lived in a different tool, with hand-offs between them managed by people and spreadsheets. No single system owned the end-to-end journey, so no one could see or control a claim's full path."
      clientContextBody="The gaps between the tools were where time and errors accumulated. A claim would wait in one system for someone to notice it needed to move to the next, status was invisible across the whole flow, and there was no way to enforce the process consistently. Because the journey was stitched together by hand, cycle times were long and unpredictable, and improving the process was nearly impossible without a model of what the process actually was. The insurer needed an orchestration layer that expressed the whole claims journey — intake to payout — as a single executable model coordinating the six tools."
      clientProfile={{
        industry: "National Insurer",
        companySize: "~$1.1B Annual Revenue",
        projectDuration: "7 Months",
        additionalInfo: "Claims Orchestration",
        additionalLabel: "Process Estate"
      }}
      challengeTitle="Why Claims Moved So Slowly"
      challenges={[
        { icon: Target, title: "Six Disconnected Tools", description: "Intake, validation, adjudication, and payout each lived in a separate system." },
        { icon: Clock, title: "Manual Hand-Offs", description: "Claims waited for someone to move them to the next tool, adding delay." },
        { icon: AlertTriangle, title: "No End-to-End Visibility", description: "No system owned the whole journey, so a claim's full status was invisible." },
        { icon: BarChart3, title: "No Enforceable Process", description: "Stitched together by hand, the process could not be enforced or improved." }
      ]}
      approachTitle="Orchestrate the Whole Journey"
      approachIntro="We built a Camunda-based orchestration layer that replaced the coordination across six disconnected tools with a single executable model spanning intake to payout — cutting claims cycle time 47 percent."
      steps={[
        { step: "01", title: "Modeling the End-to-End Journey", description: "We expressed the full claims process — intake to payout — as a single executable orchestration model." },
        { step: "02", title: "Orchestrating the Six Tools", description: "We wired the orchestration layer to coordinate the six systems, replacing manual hand-offs with automated flow." },
        { step: "03", title: "Making Status Visible", description: "We gave the insurer end-to-end visibility of every claim's position in the journey for the first time." },
        { step: "04", title: "Enforcing and Improving the Process", description: "With the process now an executable model, it could be enforced consistently and continuously improved, cutting cycle time 47 percent." }
      ]}
      resultsTitle="Claims That Flow End to End"
      results={[
        { icon: Zap, value: "47%", label: "Faster cycle", detail: "Intake to payout" },
        { icon: CheckCircle, value: "6 → 1", label: "Tools orchestrated", detail: "One executable model" },
        { icon: BarChart3, value: "Visible", label: "Every claim", detail: "End-to-end status" },
        { icon: Target, value: "Enforced", label: "Process", detail: "Consistent and improvable" }
      ]}
      quote="A claim used to pass through six systems with nobody owning the whole journey, so it sat waiting between tools and we could never see its full status. Modeling the entire process as one orchestrated flow cut our cycle time nearly in half and, for the first time, we can actually see and control a claim from intake to payout."
      quoteAuthor="SVP of Claims Operations"
      quoteRole="National insurer"
      relatedStudies={[
        { title: "How a Bank Cut Loan Origination From 14 Days to 3", metric: "14 → 3 days", label: "loan origination", link: "/cases/bank-loan-orchestration", image: "/images/industries/fin-trader.jpg" },
        { title: "How an Insurer Cut Claims Handle Time 68% With Unattended Bots", metric: "68%", label: "less handle time", link: "/cases/insurer-claims-rpa", image: "/images/industries/fin-handshake-city.jpg" }
      ]}
      ctaTitle="Does your process span disconnected tools with no owner?"
      ctaDescription="Let's orchestrate the whole journey as one model and take control end to end."
    />
  );
}
