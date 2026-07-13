import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, AlertTriangle, TrendingDown, Target, Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function LogisticsShipmentAutomation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Regional Manufacturer Cuts Order Processing Time by 78% | Process Optimization Case Study"
      seoDescription="A regional manufacturer's order-to-fulfillment process was slow, manual, and error-prone. A multifaceted redesign automating intake and orchestration cut order processing time 78% and turned service levels around."
      canonical="/cases/logistics-shipment-automation"
      industry="Manufacturing & Services"
      industryLink="/industries/manufacturing"
      title="How a Regional Manufacturer Cut Order Processing Time by 78%"
      subtitle="Orders crawled through a manual, error-prone process that no amount of effort could speed up. A redesign that automated intake and orchestration turned a chronic bottleneck into a competitive advantage."
      heroImage="/images/capabilities/cap-robot-factory.jpg"
      metrics={[
        { value: "78%", label: "Faster Order Processing" },
        { value: "Fewer", label: "Manual Errors" },
        { value: "Automated", label: "Intake & Orchestration" },
        { value: "Turnaround", label: "In Service Levels" }
      ]}
      clientContextTitle="An Order Process That Couldn't Keep Up"
      clientContextIntro="A regional manufacturer had a fulfillment problem that started long before the shop floor. Orders arrived through a patchwork of email, phone, and fax, were re-keyed by hand into multiple systems, and crawled through a manual process that added days before production even began."
      clientContextBody="Every order passed through the same gauntlet — manual entry, manual validation, manual routing — and every hand-off was a chance for a delay or an error. Customers noticed the slow acknowledgements and the mistakes, and competitors with tighter operations were winning on responsiveness. The manufacturer had squeezed the existing process as hard as it could; the constraint was the process itself, not the people running it. Leadership wanted order processing dramatically faster and more reliable, achieved through a genuine redesign rather than another round of working harder."
      clientProfile={{
        industry: "Regional Manufacturer",
        companySize: "~$410M Annual Revenue",
        projectDuration: "8 Months",
        additionalInfo: "Order-to-Fulfillment Process",
        additionalLabel: "Operating Scope"
      }}
      challengeTitle="Why Orders Moved So Slowly"
      challenges={[
        { icon: Clock, title: "Manual, Multi-System Entry", description: "Orders were re-keyed by hand into several systems, adding days before production could start." },
        { icon: AlertTriangle, title: "Errors at Every Hand-Off", description: "A chain of manual steps meant each hand-off risked a delay or a mistake." },
        { icon: TrendingDown, title: "Losing on Responsiveness", description: "Slow acknowledgements and errors let tighter-run competitors win on service." },
        { icon: Target, title: "The Process Was the Constraint", description: "The team had optimized effort as far as it could; the bottleneck was the workflow itself." }
      ]}
      approachTitle="Automate Intake, Orchestrate the Flow"
      approachIntro="We ran a multifaceted redesign of the order-to-fulfillment process — automating intake, eliminating re-keying, and orchestrating the flow across systems — that cut order processing time 78 percent and turned service levels around."
      steps={[
        { step: "01", title: "Mapping the Order Journey", description: "We mapped the full order-to-fulfillment flow, exposing the manual entry, redundant validation, and hand-offs that consumed the days." },
        { step: "02", title: "Automating Intake", description: "We automated order intake so orders entered the systems once, cleanly, without the hand re-keying that had introduced delay and error." },
        { step: "03", title: "Orchestrating Across Systems", description: "We orchestrated the flow across the systems that had been bridged by hand, so an order moved through validation and routing automatically." },
        { step: "04", title: "Building In Reliability", description: "We built validation into the automated flow so errors were caught early, turning a fragile process into a dependable one." }
      ]}
      resultsTitle="A Bottleneck Turned Advantage"
      results={[
        { icon: Zap, value: "78%", label: "Faster processing", detail: "Order-to-fulfillment cycle time" },
        { icon: CheckCircle, value: "Fewer", label: "Errors", detail: "Validation built into the flow" },
        { icon: TrendingUp, value: "Turnaround", label: "Service levels", detail: "From a liability to a strength" },
        { icon: Target, value: "Once", label: "Order entry", detail: "No more manual re-keying" }
      ]}
      quote="Our orders were stuck in days of manual typing and checking before we ever made anything, and no amount of pushing our people harder fixed it. Redesigning the process — automating how orders come in and flow through our systems — cut our processing time by nearly four-fifths and turned our responsiveness from a weakness into something we compete on."
      quoteAuthor="Chief Operating Officer"
      quoteRole="Regional manufacturer"
      relatedStudies={[
        { title: "How a Professional-Services Firm Won Back Its Leadership Position", metric: "40%", label: "faster delivery cycle", link: "/cases/saas-customer-onboarding", image: "/images/capabilities/cap-conference-data.jpg" },
        { title: "How a B2B Distributor Built a Direct-to-Consumer Engine From Scratch", metric: "340%", label: "DTC channel growth", link: "/cases/b2b-distributor-dtc-launch", image: "/images/capabilities/cap-warehouse-robot.jpg" }
      ]}
      ctaTitle="Is a manual order process holding you back?"
      ctaDescription="Let's redesign intake and orchestration so orders move in a fraction of the time, with fewer errors."
    />
  );
}
