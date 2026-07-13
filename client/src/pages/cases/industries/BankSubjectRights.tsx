import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, AlertTriangle, Target, BarChart3, Zap, CheckCircle } from "lucide-react";

export default function BankSubjectRights() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Bank Cuts Data Subject Request Turnaround 79% | Data Governance Case Study"
      seoDescription="A regional bank's manual data subject request process took six weeks. A subject-rights workflow wired into the catalog and CRM cut turnaround 79% to four days."
      canonical="/cases/bank-subject-rights"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Cut Data Subject Request Turnaround by 79%"
      subtitle="Every privacy request triggered a six-week manual hunt across systems. Wiring a subject-rights workflow into the data catalog and CRM turned it into a four-day operation."
      heroImage="/images/industries/fin-trader.jpg"
      metrics={[
        { value: "79%", label: "Faster Turnaround" },
        { value: "6 wks → 4 days", label: "Request Cycle" },
        { value: "Catalog", label: "Wired to CRM" },
        { value: "Auditable", label: "Every Request" }
      ]}
      clientContextTitle="Six Weeks to Answer One Request"
      clientContextIntro="A regional bank was struggling to meet its obligations on data subject requests — a customer's right to know what data the bank holds on them, or to have it deleted. Each request kicked off a manual, six-week hunt across dozens of systems, performed by hand because no one had a map of where a given customer's data actually lived."
      clientContextBody="The process was slow, expensive, and risky. Six weeks strained regulatory deadlines, the manual search was error-prone, and there was no reliable audit trail proving the bank had found and handled everything. Because the data landscape was undocumented, staff essentially rediscovered it on every request. The bank needed the subject-rights process wired into a data catalog that knew where customer data lived and into the CRM that anchored customer identity, turning a six-week manual hunt into a fast, repeatable, auditable operation."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "~$430M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Subject-Rights Compliance",
        additionalLabel: "Privacy Program"
      }}
      challengeTitle="Why Each Request Took Six Weeks"
      challenges={[
        { icon: Clock, title: "A Manual Cross-System Hunt", description: "Each request meant hand-searching dozens of systems because no map of customer data existed." },
        { icon: AlertTriangle, title: "Regulatory Deadline Pressure", description: "Six-week turnarounds strained the deadlines the bank was obligated to meet." },
        { icon: Target, title: "No Audit Trail", description: "There was no reliable record proving every instance of a customer's data had been found and handled." },
        { icon: BarChart3, title: "Rediscovering the Landscape", description: "With the data estate undocumented, staff essentially remapped it on every single request." }
      ]}
      approachTitle="Wire the Workflow Into Catalog and CRM"
      approachIntro="We built a subject-rights workflow wired into the data catalog and the CRM, turning a manual six-week process into a four-day operation with a full audit trail."
      steps={[
        { step: "01", title: "Cataloging Where Customer Data Lives", description: "We built a data catalog that recorded where customer data resided across systems, ending the hand-search on every request." },
        { step: "02", title: "Anchoring Identity in the CRM", description: "We connected the workflow to the CRM so a request resolved to a single customer identity spanning all their records." },
        { step: "03", title: "Automating the Subject-Rights Workflow", description: "We wired the catalog and CRM into an automated workflow that located, assembled, and actioned a customer's data on request." },
        { step: "04", title: "Building the Audit Trail", description: "We captured every step so the bank could prove exactly what was found and how it was handled, for every request." }
      ]}
      resultsTitle="Weeks Turned Into Days"
      results={[
        { icon: Zap, value: "79%", label: "Faster", detail: "Turnaround on subject requests" },
        { icon: Clock, value: "4 Days", label: "Cycle time", detail: "Down from six weeks" },
        { icon: CheckCircle, value: "Auditable", label: "End to end", detail: "Proof for every request" },
        { icon: Target, value: "Mapped", label: "Data estate", detail: "Catalog knows where data lives" }
      ]}
      quote="A single privacy request used to send us on a six-week hunt across dozens of systems by hand. Once the workflow knew where customer data lived and who each customer was, that hunt became a four-day, fully documented operation. We went from dreading these requests to handling them routinely."
      quoteAuthor="Head of Data Governance"
      quoteRole="Regional bank"
      relatedStudies={[
        { title: "How a National Retailer Cut Time-to-Insight by 70% With a Lakehouse", metric: "70%", label: "faster time-to-insight", link: "/cases/retailer-databricks-lakehouse", image: "/images/industries/retail-shelves.jpg" },
        { title: "How an Asset Manager Let Portfolio Teams Ship Analytics in Days, Not Quarters", metric: "Days", label: "not quarters to ship analytics", link: "/cases/asset-manager-data-mesh", image: "/images/industries/fin-handshake-city.jpg" }
      ]}
      ctaTitle="Are subject-rights requests a manual scramble?"
      ctaDescription="Let's wire the workflow into your catalog and CRM and make it fast and auditable."
    />
  );
}
