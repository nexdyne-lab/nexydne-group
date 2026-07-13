import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Target, AlertTriangle, BarChart3, TrendingDown, Zap, CheckCircle } from "lucide-react";

export default function DistributionOrderFulfillmentRedesign() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Order-Fulfillment Redesign Cuts Cycle Time 41% in 14 Weeks | Distribution Case Study"
      seoDescription="A specialty distributor's order-to-ship had drifted to 9.2 days. Value-stream mapping exposed unmanaged hand-offs, duplicate approvals, and a serial credit check. The redesign cut cycle time to 5.4 days without added headcount."
      canonical="/cases/distribution-order-fulfillment-redesign"
      industry="Specialty Distribution"
      industryLink="/industries/transportation-logistics"
      title="How a Specialty Distributor Cut Order Cycle Time From 9 Days to Under Six"
      subtitle="Orders were taking more than nine days to ship, and no one could say quite why. Mapping the actual flow exposed the hand-offs, duplicate approvals, and a credit check running in the wrong place."
      heroImage="/images/capabilities/cap-warehouse-robot.jpg"
      metrics={[
        { value: "9.2→5.4", label: "Days, Order-to-Ship" },
        { value: "41%", label: "Faster Cycle Time" },
        { value: "14 Wks", label: "To Deliver" },
        { value: "0", label: "Added Headcount" }
      ]}
      clientContextTitle="Nine Days and No Clear Reason"
      clientContextIntro="A specialty distributor's order-to-ship workflow had quietly drifted to a 9.2-day average across its distribution centers. Customers noticed, competitors were faster, and yet inside the business no one could point to a single cause — the delay was spread across a process nobody had mapped end to end."
      clientContextBody="The workflow had accreted over years, each hand-off and approval added for a reason that had since been forgotten. Orders passed between teams with no service-level expectations, waited in queues nobody monitored, and — most damaging — sat through a credit check that ran in series with picking rather than alongside it, so every order paid for the delay whether or not it needed the check. The distributor wanted the cycle time cut meaningfully and fast, without hiring, and without the disruption of a systems overhaul."
      clientProfile={{
        industry: "Specialty Distributor",
        companySize: "~$460M Annual Revenue",
        projectDuration: "14 Weeks",
        additionalInfo: "Multiple Distribution Centers",
        additionalLabel: "Fulfillment Network"
      }}
      challengeTitle="Where the Nine Days Were Going"
      challenges={[
        { icon: Clock, title: "Hand-Offs With No SLA", description: "Eleven hand-offs between teams ran with no service-level expectations, so orders waited in unmonitored queues." },
        { icon: Target, title: "Duplicate Approval Gates", description: "Three redundant approval gates each added delay without adding control." },
        { icon: AlertTriangle, title: "A Serial Credit Check", description: "The credit-check loop ran in series with picking rather than in parallel, taxing every order with avoidable wait." },
        { icon: BarChart3, title: "No End-to-End View", description: "The delay was invisible because no one had mapped the workflow from order to ship." }
      ]}
      approachTitle="Map It, Then Collapse the Waste"
      approachIntro="We ran value-stream mapping to expose exactly where the time went — 11 unmanaged hand-offs, three duplicate approvals, and a serial credit check — then collapsed the workflow to 5.4 days end to end without adding a single person."
      steps={[
        { step: "01", title: "Mapping the Real Value Stream", description: "We mapped the order-to-ship flow end to end, making the eleven hand-offs, duplicate gates, and serial credit check visible for the first time." },
        { step: "02", title: "Removing Redundant Gates", description: "We eliminated the three duplicate approval gates that added delay without adding control, and set SLAs on the hand-offs that remained." },
        { step: "03", title: "Parallelizing the Credit Check", description: "We moved the credit check to run alongside picking rather than before it, removing a delay every order had been paying regardless of need." },
        { step: "04", title: "Publishing a Path to Under Four Days", description: "We delivered 5.4 days in the first wave and left a mapped, published path to under four days at the second wave." }
      ]}
      resultsTitle="Faster Fulfillment, Same Team"
      results={[
        { icon: TrendingDown, value: "9.2→5.4", label: "Days to ship", detail: "Average cycle time, order-to-ship" },
        { icon: Zap, value: "41%", label: "Faster", detail: "End-to-end, without added headcount" },
        { icon: CheckCircle, value: "14 Wks", label: "To deliver", detail: "From kickoff to the new workflow" },
        { icon: Target, value: "<4 Days", label: "Next-wave path", detail: "Published and ready to execute" }
      ]}
      quote="We knew we were slow and could not have told you why. Mapping the whole flow was almost embarrassing — a credit check running in series with picking, approvals we had duplicated, hand-offs with no clock on them. We took nine days to under six in fourteen weeks and did not hire a soul."
      quoteAuthor="VP of Operations"
      quoteRole="Specialty distributor"
      relatedStudies={[
        { title: "How a Hospital System Freed a Quarter of Its Bed-Day Capacity by Redesigning Discharge", metric: "28%", label: "more bed-day capacity", link: "/cases/hospital-discharge-workflow-redesign", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { title: "How a Manufacturer Cut Production Cycle Time by 22% Without New Equipment", metric: "22%", label: "faster production cycle", link: "/cases/manufacturing-optimization", image: "/images/capabilities/cap-robot-factory.jpg" }
      ]}
      ctaTitle="Do you know where your cycle time actually goes?"
      ctaDescription="Let's map the flow and collapse the waste — often without adding headcount."
    />
  );
}
