import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, TrendingDown, AlertTriangle, Users, CheckCircle, Zap, TrendingUp } from "lucide-react";

export default function FinancialInstitutionLoanAutomationFeature() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Automating 90% of Loan Processing Workflows | Case Study"
      seoDescription="A financial institution's loan processing was manual and slow. Automating 90% of the workflows reduced processing time from days to hours."
      canonical="/case-studies/financial-institution-loan-automation"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Financial Institution Automated 90% of Its Loan Processing"
      subtitle="Loan processing crawled through manual steps that took days. Automating the vast majority of the workflow collapsed that to hours."
      heroImage="/images/industries/fin-trader.jpg"
      metrics={[
        { value: "90%", label: "Of Workflow Automated" },
        { value: "Days → Hours", label: "Processing Time" },
        { value: "Manual", label: "Steps Removed" },
        { value: "Faster", label: "For Borrowers" }
      ]}
      clientContextTitle="Loans That Took Days to Process"
      clientContextIntro="A financial institution processed loans through a largely manual workflow. Applications moved from step to step by hand — data entry, verification, checks, approvals — and the whole process took days, frustrating borrowers and consuming staff time on repetitive work."
      clientContextBody="Most of the loan workflow was deterministic and rules-based, exactly the kind of work that does not require human judgment yet was being done entirely by people. The manual approach made processing slow, capped throughput at the team's capacity, and introduced errors that caused rework. Borrowers waited days for decisions, and some abandoned the process for faster competitors. The institution needed to automate the large majority of the workflow — the deterministic steps — so processing collapsed from days to hours while people focused on the exceptions that genuinely needed them."
      clientProfile={{
        industry: "Financial Institution",
        companySize: "~1,500 Employees",
        projectDuration: "6 Months",
        additionalInfo: "Loan Processing Automation",
        additionalLabel: "Lending Operations"
      }}
      challengeTitle="Why Processing Took Days"
      challenges={[
        { icon: Clock, title: "Manual, Step-by-Step", description: "Applications moved through data entry, verification, and approvals entirely by hand." },
        { icon: TrendingDown, title: "Capped Throughput", description: "Processing capacity was limited by the team's headcount." },
        { icon: AlertTriangle, title: "Errors and Rework", description: "Manual handling introduced errors that caused rework and further delay." },
        { icon: Users, title: "Borrowers Waiting", description: "Days-long decisions frustrated borrowers, and some left for faster competitors." }
      ]}
      approachTitle="Automate the Deterministic Workflow"
      approachIntro="We automated 90 percent of the loan processing workflow — the deterministic, rules-based steps — reducing processing time from days to hours while people focused on the exceptions."
      steps={[
        { step: "01", title: "Mapping the Workflow", description: "We mapped the end-to-end loan process to separate the deterministic steps from those needing judgment." },
        { step: "02", title: "Automating the Rules-Based Steps", description: "We automated the 90 percent of the workflow that was deterministic — data entry, verification, checks." },
        { step: "03", title: "Routing Exceptions to People", description: "We designed the automation to route genuine exceptions to staff with full context." },
        { step: "04", title: "Collapsing Processing Time", description: "We cut processing from days to hours, lifting throughput and speeding decisions for borrowers." }
      ]}
      resultsTitle="Days Collapsed Into Hours"
      results={[
        { icon: CheckCircle, value: "90%", label: "Automated", detail: "Of the loan workflow" },
        { icon: Zap, value: "Days → Hours", label: "Processing", detail: "Decisions far faster" },
        { icon: TrendingUp, value: "Higher", label: "Throughput", detail: "No longer capped by headcount" },
        { icon: Users, value: "Exceptions", label: "To people", detail: "Where judgment is needed" }
      ]}
      quote="Our loan processing was almost entirely manual, so a decision took days and our team spent its time on repetitive steps. Automating ninety percent of the workflow collapsed that to hours and let our people focus on the applications that actually need a human. Borrowers get answers the same day now instead of waiting a week."
      quoteAuthor="Head of Lending Operations"
      quoteRole="Financial institution"
      relatedStudies={[
        { title: "How Predictive Analytics Cut Patient Wait Times by 35%", metric: "35%", label: "shorter patient wait times", link: "/case-studies/healthcare-predictive-analytics", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { title: "How a Regional Logistics Provider Cut Shipment Errors by 92%", metric: "92%", label: "fewer shipment errors", link: "/case-studies/logistics-shipment-automation", image: "/images/capabilities/cap-robot-factory.jpg" }
      ]}
      ctaTitle="Is manual processing slowing your workflows?"
      ctaDescription="Let's automate the deterministic steps and collapse processing from days to hours."
    />
  );
}
