import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Heart, Clock, TrendingUp, Users, Shield, Database, Activity, DollarSign } from "lucide-react";

export default function HealthcareTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Digital Transformation for Health System | Healthcare Case Study"
      seoDescription="How a regional health system achieved 35% improvement in patient outcomes through integrated digital health platform and AI-powered clinical decision support."
      canonical="/cases/healthcare-transformation"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="Regional Health System Achieves Clinical Excellence Through Digital Transformation"
      subtitle="How an integrated digital health platform and AI-powered clinical decision support improved patient outcomes by 35% while reducing care costs."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80"
      metrics={[
        { value: "35%", label: "Improved Patient Outcomes" },
        { value: "28%", label: "Reduction in Readmissions" },
        { value: "$45M", label: "Annual Cost Savings" },
        { value: "4.8/5", label: "Patient Satisfaction" }
      ]}
      clientContextTitle="A Health System at a Crossroads"
      clientContextIntro="A regional health system with 12 hospitals and 200+ outpatient facilities served 2.5 million patients annually. Despite significant investments in electronic health records, clinical data remained siloed, care coordination was fragmented, and physicians lacked the real-time insights needed to optimize treatment decisions."
      clientContextBody="Readmission rates exceeded national benchmarks by 15%. Length of stay was 1.2 days longer than peer institutions. Patient satisfaction scores had plateaued despite continuous improvement efforts. The system knew it needed to transform but struggled to translate data investments into clinical value."
      clientProfile={{
        industry: "Healthcare",
        companySize: "12 Hospitals, 200+ Facilities",
        projectDuration: "24 Months",
        additionalInfo: "2.5M Patients Annually",
        additionalLabel: "Patient Volume"
      }}
      challengeTitle="Data Rich, Insight Poor"
      challenges={[
        {
          icon: Database,
          title: "Siloed Clinical Data",
          description: "Patient information scattered across 15 different systems with no unified longitudinal view of patient health."
        },
        {
          icon: Clock,
          title: "Delayed Interventions",
          description: "Critical clinical signals buried in data, leading to delayed interventions and preventable complications."
        },
        {
          icon: Heart,
          title: "Care Fragmentation",
          description: "Poor coordination between inpatient, outpatient, and post-acute care leading to gaps in treatment."
        },
        {
          icon: TrendingUp,
          title: "Rising Costs",
          description: "Inefficient resource utilization and preventable readmissions driving unsustainable cost growth."
        }
      ]}
      approachTitle="From Data to Clinical Intelligence"
      approachIntro="NexDyne designed and implemented an integrated digital health platform that unified clinical data, enabled real-time analytics, and delivered AI-powered clinical decision support at the point of care."
      steps={[
        {
          step: "01",
          title: "Clinical Data Platform",
          description: "Built a FHIR-compliant data platform that integrated data from EHRs, lab systems, imaging, pharmacy, and wearables. Created a unified patient record with complete longitudinal health history accessible in real-time."
        },
        {
          step: "02",
          title: "Predictive Risk Models",
          description: "Developed ML models to predict readmission risk, sepsis onset, deterioration, and medication interactions. Models integrated directly into clinical workflows, alerting care teams before adverse events occurred."
        },
        {
          step: "03",
          title: "Care Coordination Hub",
          description: "Implemented a care coordination platform that tracked patients across care settings, automated care plan updates, and ensured seamless handoffs between providers. Reduced care gaps by 60%."
        },
        {
          step: "04",
          title: "Clinical Decision Support",
          description: "Deployed AI-powered clinical decision support that surfaced relevant evidence, suggested treatment protocols, and identified potential drug interactions—all within the physician's existing workflow."
        }
      ]}
      resultsTitle="Transforming Care Delivery"
      results={[
        {
          icon: Heart,
          value: "35%",
          label: "Improved patient outcomes",
          detail: "Measured by composite quality metrics"
        },
        {
          icon: Activity,
          value: "28%",
          label: "Reduction in readmissions",
          detail: "30-day all-cause readmission rate"
        },
        {
          icon: DollarSign,
          value: "$45M",
          label: "Annual cost savings",
          detail: "From reduced LOS and preventable events"
        },
        {
          icon: Users,
          value: "4.8/5",
          label: "Patient satisfaction",
          detail: "Up from 3.9/5 pre-transformation"
        }
      ]}
      quote="This transformation changed how we practice medicine. Our physicians now have the insights they need at their fingertips—not buried in charts or scattered across systems. We're catching problems before they become crises, and our patients are healthier because of it."
      quoteAuthor="Dr. Robert Williams"
      quoteRole="Chief Medical Officer"
      relatedStudies={[
        {
          title: "AI-Powered Readmission Prediction",
          metric: "42%",
          label: "reduction in preventable readmissions",
          link: "/cases/healthcare-readmission",
          image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80"
        },
        {
          title: "Revenue Cycle Optimization",
          metric: "$32M",
          label: "recovered annual revenue",
          link: "/cases/healthcare-revenue-cycle",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Your Health System?"
      ctaDescription="Let's discuss how digital transformation can improve patient outcomes and operational efficiency."
    />
  );
}
