import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, BarChart3, DollarSign, AlertTriangle, TrendingDown, TrendingUp, CheckCircle } from "lucide-react";

export default function ServicesRevopsConsolidation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="RevOps Stack Consolidation Removes 9 Tools, Lifts Data Quality 41 Points | Professional Services Case Study"
      seoDescription="A professional services firm had a 15-tool RevOps stack across three acquisitions and no single source of truth. Retiring nine duplicated tools and rebuilding the data spine lifted data quality 41 points and paid for itself in a year."
      canonical="/cases/services-revops-consolidation"
      industry="Professional Services"
      industryLink="/industries"
      title="How a Professional Services Firm Cut a 15-Tool RevOps Stack Down to a Single Source of Truth"
      subtitle="Three acquisitions had left fifteen overlapping tools and no reliable pipeline number. Retiring the duplicates and rebuilding the data spine turned a tangle into one trustworthy view."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "9", label: "Tools Removed" },
        { value: "+41 pts", label: "Data-Quality Score" },
        { value: "15→6", label: "RevOps Stack" },
        { value: "<1 Yr", label: "Consolidation Paid Back" }
      ]}
      clientContextTitle="Fifteen Tools, No Single Truth"
      clientContextIntro="A professional services firm had grown through three acquisitions, and its revenue-operations stack showed every seam. Fifteen tools, accumulated as each acquired company brought its own, overlapped in function and disagreed in data — and the firm could not produce a single trustworthy number for its own pipeline."
      clientContextBody="The proliferation was expensive twice: in licensing for tools whose jobs duplicated one another, and in the daily cost of a data spine so fragmented that no report could be trusted. Every pipeline question triggered a reconciliation exercise, and leadership made decisions on figures it quietly doubted. The firm did not need another tool to unify the others; it needed a hard-nosed diagnostic of what each tool actually did, the courage to retire the redundant ones, and a rebuilt data spine on the consolidated stack that could finally serve as a single source of truth."
      clientProfile={{
        industry: "Professional Services Firm",
        companySize: "2,500 Employees",
        projectDuration: "6 Months",
        additionalInfo: "Post-Acquisition RevOps",
        additionalLabel: "Operating Stack"
      }}
      challengeTitle="Why the Stack Couldn't Tell the Truth"
      challenges={[
        { icon: Target, title: "Fifteen Overlapping Tools", description: "Three acquisitions left a stack of tools that duplicated function and disagreed on data." },
        { icon: BarChart3, title: "No Single Source of Truth", description: "The firm could not produce one trustworthy pipeline number without a reconciliation exercise." },
        { icon: DollarSign, title: "Duplicated Licensing Cost", description: "The firm paid repeatedly for tools whose jobs overlapped." },
        { icon: AlertTriangle, title: "Decisions on Doubted Data", description: "Leadership made calls on figures it quietly did not trust." }
      ]}
      approachTitle="Diagnose, Retire, Rebuild the Spine"
      approachIntro="We ran the stack diagnostic, retired nine tools whose function was duplicated elsewhere, and rebuilt the data spine on the consolidated stack — lifting the data-quality score 41 points, with the licensing savings paying for the effort inside the first year."
      steps={[
        { step: "01", title: "Running the Stack Diagnostic", description: "We mapped what each of the fifteen tools actually did and where functions overlapped, exposing the true redundancy." },
        { step: "02", title: "Retiring Nine Redundant Tools", description: "We removed the nine tools whose function was duplicated elsewhere, cutting cost and complexity in one move." },
        { step: "03", title: "Rebuilding the Data Spine", description: "We rebuilt the data architecture on the consolidated stack so the firm finally had one reliable source of truth." },
        { step: "04", title: "Proving the Payback", description: "We tracked the licensing savings, which paid for the consolidation effort inside the first year, alongside a 41-point data-quality gain." }
      ]}
      resultsTitle="One Stack, One Truth"
      results={[
        { icon: TrendingDown, value: "9", label: "Tools removed", detail: "Redundant function retired" },
        { icon: TrendingUp, value: "+41 pts", label: "Data quality", detail: "On the consolidated spine" },
        { icon: CheckCircle, value: "15→6", label: "Stack size", detail: "Simplified to what's needed" },
        { icon: DollarSign, value: "<1 Yr", label: "Payback", detail: "Licensing savings covered the effort" }
      ]}
      quote="Three acquisitions had left us with fifteen tools that argued with each other and a pipeline number nobody believed. We did not buy a sixteenth tool to fix it — we cut nine, rebuilt the data underneath, and finally got one version of the truth. The licensing we saved paid for the whole project in under a year."
      quoteAuthor="VP of Revenue Operations"
      quoteRole="Professional services firm"
      relatedStudies={[
        { title: "How a Subscription Commerce Operator Turned a Stalled CRO Program Into a 28% Conversion Lift", metric: "28%", label: "higher checkout conversion", link: "/cases/subscription-checkout-cro", image: "/images/capabilities/cap-retail-data.jpg" },
        { title: "How a Digital Lender Added 1,400 Funded Accounts a Month Without Spending More on Traffic", metric: "1,400", label: "more funded accounts a month", link: "/cases/lender-application-funnel-cro", image: "/images/industries/fin-monitors.jpg" }
      ]}
      ctaTitle="Is an overgrown RevOps stack hiding your single source of truth?"
      ctaDescription="Let's diagnose the stack, retire the duplicates, and rebuild the data spine that tells the truth."
    />
  );
}
