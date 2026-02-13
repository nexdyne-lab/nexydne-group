import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { BookOpen, Brain, TrendingUp, Users, Target, Award, BarChart3, Sparkles } from "lucide-react";

export default function K12AdaptiveLearning() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Adaptive Learning for K-12 | Education Case Study"
      seoDescription="How a school district improved learning outcomes by 25% through AI-powered adaptive learning that personalizes instruction for each student."
      canonical="/cases/k12-adaptive-learning"
      industry="Education"
      industryLink="/industries/education"
      title="School District Improves Learning Outcomes 25% with Adaptive Learning"
      subtitle="How AI-powered personalized learning paths meet each student where they are, accelerating growth and closing achievement gaps."
      heroImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
      metrics={[
        { value: "25%", label: "Better Outcomes" },
        { value: "40%", label: "Gap Reduction" },
        { value: "92%", label: "Student Engagement" },
        { value: "2.5x", label: "Learning Velocity" }
      ]}
      clientContextTitle="A District Struggling with Achievement Gaps"
      clientContextIntro="A large urban school district serving 120,000 students faced persistent achievement gaps. Students entered classrooms at vastly different levels, but instruction was designed for the middle—leaving advanced students bored and struggling students behind. State test scores had plateaued despite increased spending."
      clientContextBody="Teachers were overwhelmed trying to differentiate instruction for 30 students with different needs. They lacked visibility into individual student progress and the tools to personalize learning paths. The district needed a way to meet each student where they were and accelerate growth for all."
      clientProfile={{
        industry: "K-12 Education",
        companySize: "120,000 Students",
        projectDuration: "24 Months",
        additionalInfo: "85 Schools",
        additionalLabel: "District Size"
      }}
      challengeTitle="One-Size-Fits-None Instruction"
      challenges={[
        {
          icon: Users,
          title: "Achievement Gaps",
          description: "30-point gap between highest and lowest performing subgroups—widening each year."
        },
        {
          icon: Target,
          title: "Middle-Focused Teaching",
          description: "Instruction designed for average students—advanced bored, struggling left behind."
        },
        {
          icon: BookOpen,
          title: "Teacher Overload",
          description: "30 students per class with different needs—impossible to personalize manually."
        },
        {
          icon: BarChart3,
          title: "Limited Visibility",
          description: "Teachers couldn't see real-time progress or identify specific skill gaps."
        }
      ]}
      approachTitle="Personalized Learning at Scale"
      approachIntro="NexDyne implemented an AI-powered adaptive learning platform that assessed each student's knowledge state, created personalized learning paths, and provided teachers with actionable insights to guide instruction."
      steps={[
        {
          step: "01",
          title: "Diagnostic Assessment",
          description: "Deployed adaptive assessments that identified each student's knowledge state across learning standards. Assessments pinpointed specific skill gaps and strengths—not just overall proficiency levels."
        },
        {
          step: "02",
          title: "Personalized Learning Paths",
          description: "AI generated individualized learning paths that addressed each student's gaps while building on strengths. Content difficulty and pacing adjusted in real-time based on student performance."
        },
        {
          step: "03",
          title: "Teacher Dashboard",
          description: "Built dashboards that showed teachers class-wide and individual progress, common misconceptions, and recommended interventions. Teachers could see who needed help and with what specific skills."
        },
        {
          step: "04",
          title: "Blended Learning Model",
          description: "Designed a blended model where students worked on personalized digital content while teachers provided targeted small-group instruction to students with similar needs."
        }
      ]}
      resultsTitle="Every Student Growing"
      results={[
        {
          icon: TrendingUp,
          value: "25%",
          label: "Improvement in outcomes",
          detail: "On state assessments across subjects"
        },
        {
          icon: Target,
          value: "40%",
          label: "Achievement gap reduction",
          detail: "Between highest and lowest subgroups"
        },
        {
          icon: Sparkles,
          value: "92%",
          label: "Student engagement",
          detail: "Students actively using the platform"
        },
        {
          icon: Brain,
          value: "2.5x",
          label: "Learning velocity",
          detail: "For students working at personalized pace"
        }
      ]}
      quote="Adaptive learning changed everything. My students aren't all doing the same thing anymore—they're each working on exactly what they need. I can see who's struggling and with what, so my small group instruction is targeted. Every student is growing, not just the ones in the middle."
      quoteAuthor="Maria Rodriguez"
      quoteRole="5th Grade Teacher"
      relatedStudies={[
        {
          title: "Student Success Platform for University",
          metric: "18%",
          label: "higher graduation rate",
          link: "/cases/university-student-success",
          image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"
        },
        {
          title: "Online Programs Transformation",
          metric: "3x",
          label: "enrollment growth",
          link: "/cases/university-online-programs",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Personalize Learning?"
      ctaDescription="Let's discuss how adaptive learning can help every student succeed."
    />
  );
}
