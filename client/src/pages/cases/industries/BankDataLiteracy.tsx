import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Users, TrendingDown, Target, TrendingUp, CheckCircle } from "lucide-react";

export default function BankDataLiteracy() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Bank Trains 600 Staff, Triples Self-Service Reporting | Data Training Case Study"
      seoDescription="A regional bank's data team was buried in ad-hoc report requests. A tiered data-literacy program trained 600 employees, tripled self-service reporting, and cut ad-hoc requests over 60%."
      canonical="/cases/bank-data-literacy"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Tripled Self-Service Reporting by Training 600 People"
      subtitle="The data team was a bottleneck, buried under ad-hoc report requests it could never clear. Teaching the whole organization to answer its own questions changed who did the work."
      heroImage="/images/cases/bank-data-literacy-hero.jpg"
      metrics={[
        { value: "3x", label: "More Self-Service" },
        { value: "600", label: "Employees Trained" },
        { value: "-60%", label: "Ad-Hoc Requests" },
        { value: "Tiered", label: "Curriculum" }
      ]}
      clientContextTitle="A Data Team Buried in Requests"
      clientContextIntro="A regional bank's central data team spent most of its capacity answering a relentless stream of ad-hoc report requests. Executives, analysts, and front-line staff who needed a number had no way to get it themselves, so everything routed through a team that could never clear the queue."
      clientContextBody="The bottleneck was a skills problem, not a tooling one. The bank had reporting tools, but most employees lacked the literacy to use them, so they defaulted to asking the data team. That kept the data team stuck on low-value request-fulfillment instead of the higher-leverage work only it could do, and it left decision-makers waiting on simple answers. The bank needed to raise data literacy across the whole organization — with training pitched appropriately for executives, analysts, and front-line staff alike — so people could answer their own questions."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "~$430M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "600-Employee Program",
        additionalLabel: "Enablement Scope"
      }}
      challengeTitle="Why Everything Routed Through the Data Team"
      challenges={[
        { icon: Clock, title: "A Bottlenecked Team", description: "The central data team could never clear a relentless queue of ad-hoc requests." },
        { icon: Users, title: "Low Data Literacy", description: "Most employees lacked the skills to use the reporting tools, so they asked the data team instead." },
        { icon: TrendingDown, title: "High-Value Work Crowded Out", description: "Request-fulfillment kept the data team from the higher-leverage work only it could do." },
        { icon: Target, title: "Decision-Makers Waiting", description: "Leaders waited on simple numbers that they could have pulled themselves." }
      ]}
      approachTitle="Raise Literacy Across the Organization"
      approachIntro="We built and delivered a tiered data-literacy program that reached executives, analysts, and front-line staff — training 600 employees, tripling self-service reporting, and cutting ad-hoc requests to the data team by more than 60 percent."
      steps={[
        { step: "01", title: "Designing a Tiered Curriculum", description: "We built curriculum pitched at the right level for executives, analysts, and front-line staff, so each group learned what it actually needed." },
        { step: "02", title: "Training 600 Employees", description: "We delivered the program across the organization, giving 600 people the skills to answer their own data questions." },
        { step: "03", title: "Enabling Self-Service", description: "We paired the training with the reporting tools so newly literate staff could self-serve instead of routing to the data team." },
        { step: "04", title: "Refocusing the Data Team", description: "As requests fell, we redirected the central data team from fulfillment to the high-leverage work only it could do." }
      ]}
      resultsTitle="An Organization That Answers Itself"
      results={[
        { icon: TrendingUp, value: "3x", label: "Self-service", detail: "More reporting done by the business" },
        { icon: Users, value: "600", label: "Trained", detail: "Across all levels" },
        { icon: TrendingDown, value: "-60%", label: "Ad-hoc requests", detail: "To the central data team" },
        { icon: CheckCircle, value: "Refocused", label: "Data team", detail: "On high-leverage work" }
      ]}
      quote="Our data team was drowning in requests for simple numbers, and everyone else was waiting on them. Teaching six hundred people — from the front line to the executive floor — to answer their own questions tripled self-service and cut the requests to the data team by more than half. The team finally does the work only it can do."
      quoteAuthor="Chief Data Officer"
      quoteRole="Regional bank"
      relatedStudies={[
        { title: "How a Health System Built an Internal Bench of 80 Citizen Data Scientists", metric: "80", label: "citizen data scientists trained", link: "/cases/health-citizen-data-scientist", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { title: "How a Manufacturer Cut Executive Close-to-Decision Time From 6 Days to 6 Hours", metric: "6 days → 6 hrs", label: "close-to-decision time", link: "/cases/manufacturer-exec-dashboard", image: "/images/capabilities/cap-robot-factory.jpg" }
      ]}
      ctaTitle="Is your data team buried in ad-hoc requests?"
      ctaDescription="Let's raise literacy across the organization so people answer their own questions."
    />
  );
}
