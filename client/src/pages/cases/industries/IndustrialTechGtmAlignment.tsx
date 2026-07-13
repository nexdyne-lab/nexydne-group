import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, Users, TrendingDown, TrendingUp, CheckCircle, BarChart3 } from "lucide-react";

export default function IndustrialTechGtmAlignment() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Sales-Marketing Alignment Cuts Handoff Leakage 31% | Industrial Technology Case Study"
      seoDescription="A category-leading industrial technology firm was leaking opportunities at the marketing-to-sales handoff. Rebuilding the alignment surface — shared ICP, SLAs, and cadences — lifted handoff conversion 31% with no change in lead volume."
      canonical="/cases/industrial-tech-gtm-alignment"
      industry="Industrial Technology"
      industryLink="/industries/manufacturing"
      title="How an Industrial Technology Leader Stopped Leaking Deals at the Sales Handoff"
      subtitle="Marketing generated the leads and sales let a third of them slip at the handoff — a loss the leadership team had stopped even noticing. Rebuilding the alignment between the two closed the gap."
      heroImage="/images/industries/mfg-robot-arm.jpg"
      metrics={[
        { value: "31%", label: "Less Handoff Leakage" },
        { value: "1 Qtr", label: "To the Improvement" },
        { value: "No Change", label: "In Lead Volume" },
        { value: "Shared", label: "ICP & SLAs" }
      ]}
      clientContextTitle="A Leak Everyone Had Stopped Seeing"
      clientContextIntro="A category-leading industrial technology firm had a marketing engine that produced strong lead volume and a sales team that closed well — but between them lay a handoff that quietly lost a large share of opportunities. The leakage had persisted so long that leadership had stopped treating it as a problem and started treating it as a fact of life."
      clientContextBody="Marketing and sales operated on different definitions of a good lead, different expectations of follow-up, and no shared accountability for what happened at the seam. Leads passed from one function to the other and simply evaporated — not because they were bad, but because nothing held the handoff together. The firm did not need more leads; it needed the two functions aligned around a shared definition of the customer, clear service levels, and a rhythm that made the handoff a managed process instead of a hopeful toss over the wall."
      clientProfile={{
        industry: "Industrial Technology Firm",
        companySize: "~$550M Annual Revenue",
        projectDuration: "4 Months",
        additionalInfo: "Marketing-to-Sales Handoff",
        additionalLabel: "Revenue Seam"
      }}
      challengeTitle="Why Good Leads Kept Evaporating"
      challenges={[
        { icon: Target, title: "Different Definitions of a Lead", description: "Marketing and sales disagreed on what a good lead was, so handoffs started misaligned." },
        { icon: Clock, title: "No Follow-Up Standards", description: "Without shared SLAs, leads sat and cooled after the handoff." },
        { icon: Users, title: "No Shared Accountability", description: "Neither function owned what happened at the seam, so leakage went unaddressed." },
        { icon: TrendingDown, title: "A Normalized Loss", description: "The leakage had persisted so long that leadership no longer treated it as fixable." }
      ]}
      approachTitle="Rebuild the Alignment Surface"
      approachIntro="We rebuilt the alignment surface between the two functions — a shared ICP, shared SLAs, weekly pipeline reviews, and monthly campaign retros — and handoff conversion climbed 31 percent inside a quarter, with no change in lead volume."
      steps={[
        { step: "01", title: "Agreeing a Shared ICP", description: "We aligned marketing and sales on a single definition of the ideal customer, so both functions worked toward the same target." },
        { step: "02", title: "Setting Shared SLAs", description: "We established clear service levels for handoff and follow-up, so leads were worked promptly instead of cooling in a queue." },
        { step: "03", title: "Instituting Weekly Pipeline Reviews", description: "We put in place weekly joint pipeline reviews that made the handoff a managed process with shared visibility." },
        { step: "04", title: "Closing the Loop With Monthly Retros", description: "We ran monthly campaign retros so the two functions learned together and kept tightening the seam." }
      ]}
      resultsTitle="A Handoff That Holds"
      results={[
        { icon: TrendingUp, value: "31%", label: "Higher handoff conversion", detail: "Inside a single quarter" },
        { icon: CheckCircle, value: "Shared", label: "ICP & SLAs", detail: "One definition, clear standards" },
        { icon: Users, value: "Joint", label: "Cadences", detail: "Weekly reviews, monthly retros" },
        { icon: BarChart3, value: "Same", label: "Lead volume", detail: "More deals from the same leads" }
      ]}
      quote="We had accepted that we lost a chunk of every lead marketing sent us — it had been that way so long nobody questioned it. Rebuilding how the two teams work together, with one definition of a good lead and a real rhythm around the handoff, recovered a third of that loss in a single quarter, and we did not need a single extra lead."
      quoteAuthor="VP of Revenue"
      quoteRole="Industrial technology firm"
      relatedStudies={[
        { title: "How a DTC Operator Lifted New-Customer Margin 38% Without Spending a Dollar More", metric: "38%", label: "higher contribution margin", link: "/cases/dtc-channel-reallocation", image: "/images/capabilities/cap-retail-apparel.jpg" },
        { title: "How a Growth-Stage SaaS Team Cut a Quarter of Its Wasted Spend by Fixing Attribution", metric: "24%", label: "less wasted spend", link: "/cases/saas-attribution-rebuild", image: "/images/industries/tech-datacenter.jpg" }
      ]}
      ctaTitle="Are deals leaking at your sales-marketing handoff?"
      ctaDescription="Let's rebuild the alignment surface — shared ICP, SLAs, and cadences — and recover the loss."
    />
  );
}
