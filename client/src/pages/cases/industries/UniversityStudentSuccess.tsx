import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { GraduationCap, Users, TrendingUp, Target, Heart, BookOpen, BarChart3, Award } from "lucide-react";

export default function UniversityStudentSuccess() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Student Success Platform | Education Case Study"
      seoDescription="How a university improved graduation rates by 18% through AI-powered early warning systems and personalized student support interventions."
      canonical="/cases/university-student-success"
      industry="Education"
      industryLink="/industries/education"
      title="University Improves Graduation Rates 18% with Student Success Platform"
      subtitle="How AI-powered early warning systems identify at-risk students and trigger personalized interventions that keep them on track to graduation."
      heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
      metrics={[
        { value: "18%", label: "Higher Graduation Rate" },
        { value: "85%", label: "Prediction Accuracy" },
        { value: "40%", label: "Fewer Dropouts" },
        { value: "$25M", label: "Retained Tuition" }
      ]}
      clientContextTitle="A University Fighting Student Attrition"
      clientContextIntro="A large public university with 45,000 students faced a graduation crisis. Only 52% of students graduated within six years—below peer institutions and far below the university's aspirations. Each student who dropped out represented lost tuition, unfulfilled potential, and a failure of the institution's mission."
      clientContextBody="Advisors were overwhelmed—each managing 500+ students with no way to identify who needed help. By the time struggling students appeared on radar, they were already failing or had stopped attending. The university had data on student performance but no way to translate it into proactive intervention."
      clientProfile={{
        industry: "Higher Education",
        companySize: "45,000 Students",
        projectDuration: "18 Months",
        additionalInfo: "52% Graduation Rate",
        additionalLabel: "Starting Point"
      }}
      challengeTitle="Too Many Students, Too Little Insight"
      challenges={[
        {
          icon: TrendingUp,
          title: "Low Graduation Rate",
          description: "52% six-year graduation rate—below peer institutions and strategic targets."
        },
        {
          icon: Users,
          title: "Advisor Overload",
          description: "500+ students per advisor—impossible to proactively identify struggling students."
        },
        {
          icon: Target,
          title: "Late Detection",
          description: "At-risk students identified after failing—too late for effective intervention."
        },
        {
          icon: Heart,
          title: "Generic Support",
          description: "Same interventions for all students regardless of individual circumstances and needs."
        }
      ]}
      approachTitle="Predictive Student Success"
      approachIntro="NexDyne built an AI-powered student success platform that predicted risk, prioritized advisor attention, and recommended personalized interventions—transforming reactive advising into proactive student support."
      steps={[
        {
          step: "01",
          title: "Risk Prediction Models",
          description: "Developed ML models that predicted dropout and academic difficulty risk based on 200+ factors: academic performance, engagement signals, financial indicators, and demographic patterns. Models achieved 85% accuracy in identifying at-risk students."
        },
        {
          step: "02",
          title: "Early Warning System",
          description: "Built real-time dashboards that surfaced at-risk students to advisors before problems escalated. Advisors saw prioritized lists with risk scores and contributing factors—enabling targeted outreach."
        },
        {
          step: "03",
          title: "Intervention Recommendations",
          description: "Created an intervention recommendation engine that suggested appropriate support based on risk factors: tutoring for academic struggles, financial aid counseling for economic stress, mental health resources for wellness concerns."
        },
        {
          step: "04",
          title: "Outcome Tracking",
          description: "Implemented closed-loop tracking that measured intervention effectiveness. Models learned which interventions worked for which student profiles, continuously improving recommendations."
        }
      ]}
      resultsTitle="Student Success Transformed"
      results={[
        {
          icon: GraduationCap,
          value: "18%",
          label: "Improvement in graduation rate",
          detail: "From 52% to 61% six-year graduation"
        },
        {
          icon: Target,
          value: "85%",
          label: "Risk prediction accuracy",
          detail: "Identifying at-risk students early"
        },
        {
          icon: Users,
          value: "40%",
          label: "Reduction in dropouts",
          detail: "Students staying and succeeding"
        },
        {
          icon: Award,
          value: "$25M",
          label: "Retained tuition revenue",
          detail: "From students who stayed enrolled"
        }
      ]}
      quote="We went from reactive to proactive advising. Our advisors used to wait for students to fail—now they reach out before problems escalate. The AI helps us see which students need help and what kind of help they need. We're not just improving graduation rates—we're changing lives."
      quoteAuthor="Dr. Patricia Johnson"
      quoteRole="Vice Provost for Student Success"
      relatedStudies={[
        {
          title: "Adaptive Learning for K-12 District",
          metric: "25%",
          label: "improvement in learning outcomes",
          link: "/cases/k12-adaptive-learning",
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80"
        },
        {
          title: "Online Programs Transformation",
          metric: "3x",
          label: "enrollment growth",
          link: "/cases/university-online-programs",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Improve Student Success?"
      ctaDescription="Let's discuss how predictive analytics can help more students graduate."
    />
  );
}
