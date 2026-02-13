import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Plane, Cpu, Clock, DollarSign, Target, Cog, BarChart3, Zap } from "lucide-react";

export default function AerospaceDigitalEngineering() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Digital Engineering Transformation | Aerospace Case Study"
      seoDescription="How an aerospace company achieved 40% faster development cycles through digital engineering, model-based systems engineering, and digital twins."
      canonical="/cases/aerospace-digital-engineering"
      industry="Aerospace & Defense"
      industryLink="/industries/aerospace-defense"
      title="Aerospace Company Accelerates Development 40% with Digital Engineering"
      subtitle="How model-based systems engineering, digital twins, and integrated digital threads transformed aircraft development from years to months."
      heroImage="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1920&q=80"
      metrics={[
        { value: "40%", label: "Faster Development" },
        { value: "60%", label: "Fewer Design Changes" },
        { value: "$500M", label: "Cost Avoidance" },
        { value: "90%", label: "First-Time Quality" }
      ]}
      clientContextTitle="An Aerospace Giant Stuck in Document-Based Engineering"
      clientContextIntro="A major aerospace manufacturer developed complex aircraft systems using traditional document-based engineering. Requirements lived in Word documents, designs in disconnected CAD systems, and test results in spreadsheets. Changes took months to propagate, and integration issues were discovered late—when they were expensive to fix."
      clientContextBody="Development programs routinely overran budgets by 30% and schedules by 2+ years. The root cause: disconnected engineering data that couldn't keep pace with complexity. Engineers spent more time searching for information and reconciling documents than engineering. The company needed a digital transformation of how it developed products."
      clientProfile={{
        industry: "Aerospace Manufacturing",
        companySize: "$40B Annual Revenue",
        projectDuration: "36 Months",
        additionalInfo: "50,000 Engineers",
        additionalLabel: "Engineering Workforce"
      }}
      challengeTitle="Document-Based Engineering in a Digital World"
      challenges={[
        {
          icon: Clock,
          title: "Slow Development",
          description: "Programs 2+ years behind schedule—document-based processes couldn't keep pace."
        },
        {
          icon: DollarSign,
          title: "Cost Overruns",
          description: "30% average budget overrun—late discovery of integration issues drove rework."
        },
        {
          icon: Target,
          title: "Disconnected Data",
          description: "Requirements, designs, and tests in separate systems—no single source of truth."
        },
        {
          icon: Cog,
          title: "Late Integration",
          description: "System integration issues found in test—expensive to fix, schedule-breaking."
        }
      ]}
      approachTitle="The Digital Engineering Enterprise"
      approachIntro="NexDyne led a comprehensive digital engineering transformation: model-based systems engineering, integrated digital threads, and digital twins that enabled virtual integration and testing before physical builds."
      steps={[
        {
          step: "01",
          title: "Model-Based Systems Engineering",
          description: "Transitioned from document-based to model-based requirements and architecture. SysML models became the authoritative source—automatically generating documents, enabling simulation, and maintaining traceability."
        },
        {
          step: "02",
          title: "Digital Thread Integration",
          description: "Built an integrated digital thread connecting requirements, design, manufacturing, and test data. Changes propagated automatically across the lifecycle. Engineers always worked with current, consistent information."
        },
        {
          step: "03",
          title: "Digital Twin Development",
          description: "Created high-fidelity digital twins that enabled virtual integration and testing. Systems could be integrated and tested digitally before physical builds—finding issues when they were cheap to fix."
        },
        {
          step: "04",
          title: "Agile Development",
          description: "Implemented agile practices enabled by digital engineering. Rapid iteration, continuous integration, and automated verification replaced waterfall development. Faster feedback, faster learning, faster delivery."
        }
      ]}
      resultsTitle="Engineering Excellence"
      results={[
        {
          icon: Clock,
          value: "40%",
          label: "Faster development",
          detail: "From concept to production"
        },
        {
          icon: Target,
          value: "60%",
          label: "Fewer design changes",
          detail: "Issues found earlier, fixed cheaper"
        },
        {
          icon: DollarSign,
          value: "$500M",
          label: "Cost avoidance",
          detail: "From reduced rework and faster cycles"
        },
        {
          icon: Zap,
          value: "90%",
          label: "First-time quality",
          detail: "Systems work right the first time"
        }
      ]}
      quote="Digital engineering transformed how we develop aircraft. We used to find integration problems in test—now we find them in simulation. We used to spend months propagating changes—now it's automatic. We're developing faster, with higher quality, at lower cost. This is the future of aerospace."
      quoteAuthor="Dr. Sarah Chen"
      quoteRole="VP of Engineering"
      relatedStudies={[
        {
          title: "Supply Chain Optimization for Defense",
          metric: "35%",
          label: "better parts availability",
          link: "/cases/defense-supply-chain",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
        },
        {
          title: "Predictive Maintenance for Aviation",
          metric: "50%",
          label: "reduction in unscheduled maintenance",
          link: "/cases/aviation-predictive-maintenance",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Engineering?"
      ctaDescription="Let's discuss how digital engineering can accelerate your development."
    />
  );
}
