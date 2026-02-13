import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Scissors, Clock, Building2, Cog, DollarSign, Target, Shield, Users } from "lucide-react";

export default function PECarveoutExecution() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Carve-Out Execution | Private Equity Case Study"
      seoDescription="How a PE firm achieved standalone operations in 6 months for a $2B carve-out, avoiding TSA extensions and capturing synergies faster."
      canonical="/cases/pe-carveout-execution"
      industry="Private Equity & Principal Investors"
      industryLink="/industries/private-equity"
      title="PE Firm Executes $2B Carve-Out in 6 Months"
      subtitle="How systematic separation planning and execution achieved standalone operations faster than industry benchmarks, avoiding costly TSA extensions."
      heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
      metrics={[
        { value: "6 Months", label: "To Standalone" },
        { value: "$45M", label: "TSA Costs Avoided" },
        { value: "Zero", label: "Business Disruption" },
        { value: "18 Months", label: "Ahead of Plan" }
      ]}
      clientContextTitle="A Complex Carve-Out Under Time Pressure"
      clientContextIntro="A private equity firm acquired a $2B division from a Fortune 500 conglomerate. The division had been deeply integrated with the parent—shared IT systems, combined back-office functions, and intertwined supply chains. The TSA provided 24 months of support, but every month cost $4M and delayed value creation."
      clientContextBody="Carve-outs typically take 18-24 months to achieve standalone operations. The PE firm wanted to move faster—capturing synergies sooner and avoiding TSA costs. But speed couldn't come at the cost of business disruption. The division needed to separate cleanly while maintaining customer service and operational performance."
      clientProfile={{
        industry: "Private Equity",
        companySize: "$2B Acquisition",
        projectDuration: "6 Months",
        additionalInfo: "5,000 Employees",
        additionalLabel: "Carved-Out Division"
      }}
      challengeTitle="Separation at Speed"
      challenges={[
        {
          icon: Clock,
          title: "TSA Costs",
          description: "$4M monthly TSA costs—every month of delay eroded deal value."
        },
        {
          icon: Cog,
          title: "Deep Integration",
          description: "Shared IT, finance, HR, and supply chain—everything intertwined with parent."
        },
        {
          icon: Shield,
          title: "Business Continuity",
          description: "Must maintain customer service and operations during separation—no disruption."
        },
        {
          icon: Building2,
          title: "Standalone Capabilities",
          description: "Division lacked independent capabilities—had to build from scratch."
        }
      ]}
      approachTitle="Accelerated Separation"
      approachIntro="NexDyne led an accelerated carve-out program that achieved standalone operations in 6 months through systematic planning, parallel workstreams, and relentless execution focus."
      steps={[
        {
          step: "01",
          title: "Day One Readiness",
          description: "Established critical Day One capabilities before close: legal entity structure, banking, insurance, and regulatory compliance. Division could operate independently from the moment the deal closed."
        },
        {
          step: "02",
          title: "IT Separation",
          description: "Executed rapid IT separation through a combination of lift-and-shift, cloud migration, and new system implementation. Prioritized customer-facing systems first, back-office second."
        },
        {
          step: "03",
          title: "Functional Standup",
          description: "Built standalone capabilities in finance, HR, legal, and procurement. Combined internal hires, parent company transfers, and outsourcing to build functions quickly."
        },
        {
          step: "04",
          title: "TSA Exit Management",
          description: "Managed systematic TSA exit with clear milestones and accountability. Weekly tracking of separation progress. Aggressive but achievable timelines for each service."
        }
      ]}
      resultsTitle="Separation Success"
      results={[
        {
          icon: Clock,
          value: "6 Months",
          label: "To standalone operations",
          detail: "vs. 18-24 month industry average"
        },
        {
          icon: DollarSign,
          value: "$45M",
          label: "TSA costs avoided",
          detail: "From accelerated separation"
        },
        {
          icon: Shield,
          value: "Zero",
          label: "Business disruption",
          detail: "Customer service maintained throughout"
        },
        {
          icon: Target,
          value: "100%",
          label: "TSA services exited",
          detail: "Complete independence achieved"
        }
      ]}
      quote="Most carve-outs take 2 years to achieve standalone. We did it in 6 months without missing a beat on customer service. The systematic approach—parallel workstreams, clear accountability, relentless focus—made the difference. We started creating value 18 months earlier than typical."
      quoteAuthor="David Kim"
      quoteRole="Operating Partner"
      relatedStudies={[
        {
          title: "Portfolio Operations Excellence",
          metric: "3.2x",
          label: "average returns",
          link: "/cases/pe-portfolio-operations",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
        },
        {
          title: "Due Diligence Acceleration",
          metric: "50%",
          label: "faster deal evaluation",
          link: "/cases/pe-due-diligence",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Execute a Carve-Out?"
      ctaDescription="Let's discuss how we can accelerate your separation timeline."
    />
  );
}
