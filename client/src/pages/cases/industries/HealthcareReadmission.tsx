import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Activity, AlertTriangle, Brain, Clock, DollarSign, Heart, TrendingDown, Users } from "lucide-react";

export default function HealthcareReadmission() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="AI-Powered Readmission Prediction | Healthcare Case Study"
      seoDescription="How a hospital network reduced preventable readmissions by 42% using machine learning to identify high-risk patients and trigger proactive interventions."
      canonical="/cases/healthcare-readmission"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="Hospital Network Reduces Readmissions 42% with Predictive AI"
      subtitle="How machine learning models identify high-risk patients at discharge and trigger proactive interventions that prevent costly readmissions."
      heroImage="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80"
      metrics={[
        { value: "42%", label: "Reduction in Readmissions" },
        { value: "85%", label: "Prediction Accuracy" },
        { value: "$28M", label: "Annual Penalty Avoidance" },
        { value: "72hrs", label: "Early Intervention Window" }
      ]}
      clientContextTitle="A Network Facing Readmission Penalties"
      clientContextIntro="A five-hospital network serving a diverse urban population faced mounting pressure from CMS readmission penalties. Their 30-day readmission rate for heart failure, pneumonia, and hip/knee replacement exceeded national benchmarks, resulting in $12M in annual Medicare penalties."
      clientContextBody="Existing risk stratification relied on basic clinical rules that flagged too many patients as high-risk while missing others who actually readmitted. Care managers were overwhelmed with alerts, unable to focus resources on patients who would benefit most from intervention. The network needed precision—the ability to identify the right patients at the right time."
      clientProfile={{
        industry: "Healthcare",
        companySize: "5-Hospital Network",
        projectDuration: "14 Weeks",
        additionalInfo: "180,000 Discharges/Year",
        additionalLabel: "Annual Volume"
      }}
      challengeTitle="The Readmission Prediction Problem"
      challenges={[
        {
          icon: AlertTriangle,
          title: "Penalty Pressure",
          description: "$12M in annual CMS penalties for excess readmissions across heart failure, pneumonia, and surgical conditions."
        },
        {
          icon: Brain,
          title: "Prediction Failure",
          description: "Rule-based risk scores had 45% false positive rate, overwhelming care managers with low-value alerts."
        },
        {
          icon: Clock,
          title: "Late Identification",
          description: "High-risk patients often identified too late for meaningful intervention before discharge."
        },
        {
          icon: Users,
          title: "Resource Constraints",
          description: "Limited care management capacity required precise targeting to maximize impact."
        }
      ]}
      approachTitle="Precision Prediction, Targeted Intervention"
      approachIntro="NexDyne developed a machine learning system that predicted readmission risk with 85% accuracy, integrated predictions into discharge workflows, and triggered automated care pathways for high-risk patients."
      steps={[
        {
          step: "01",
          title: "Feature Engineering",
          description: "Analyzed 5 years of admission data to identify 200+ predictive features: clinical indicators, social determinants, prior utilization patterns, medication complexity, and discharge disposition. Social factors proved as predictive as clinical ones."
        },
        {
          step: "02",
          title: "Model Development",
          description: "Built condition-specific gradient boosting models for heart failure, pneumonia, COPD, and surgical conditions. Ensemble approach achieved 85% accuracy with 30% false positive rate—half the existing system."
        },
        {
          step: "03",
          title: "Workflow Integration",
          description: "Embedded risk scores into EHR discharge workflows. High-risk patients automatically triggered care management referrals, pharmacy consultations, and post-discharge follow-up scheduling before leaving the hospital."
        },
        {
          step: "04",
          title: "Intervention Protocols",
          description: "Designed evidence-based intervention protocols for each risk tier: enhanced discharge education, medication reconciliation, 48-hour follow-up calls, home health referrals, and transitional care clinic appointments."
        }
      ]}
      resultsTitle="Measurable Clinical and Financial Impact"
      results={[
        {
          icon: TrendingDown,
          value: "42%",
          label: "Reduction in readmissions",
          detail: "Across all CMS penalty conditions"
        },
        {
          icon: Brain,
          value: "85%",
          label: "Prediction accuracy",
          detail: "With 30% false positive rate"
        },
        {
          icon: DollarSign,
          value: "$28M",
          label: "Annual savings",
          detail: "Penalty avoidance + reduced readmission costs"
        },
        {
          icon: Heart,
          value: "18%",
          label: "Improved patient outcomes",
          detail: "Fewer complications post-discharge"
        }
      ]}
      quote="The predictive model transformed how we think about discharge. We're no longer reacting to readmissions—we're preventing them. Our care managers now focus on patients who truly need intervention, and the results speak for themselves."
      quoteAuthor="Dr. Amanda Foster"
      quoteRole="Chief Quality Officer"
      relatedStudies={[
        {
          title: "Digital Transformation for Health System",
          metric: "35%",
          label: "improved patient outcomes",
          link: "/cases/healthcare-transformation",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
        },
        {
          title: "Revenue Cycle Optimization",
          metric: "$32M",
          label: "recovered annual revenue",
          link: "/cases/healthcare-revenue-cycle",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Reduce Readmissions?"
      ctaDescription="Let's discuss how predictive AI can help you identify and intervene with high-risk patients."
    />
  );
}
