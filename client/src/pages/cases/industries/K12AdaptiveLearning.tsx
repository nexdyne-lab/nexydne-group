import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { BookOpen, Brain, TrendingUp, Users, Target, BarChart3, Sparkles } from "lucide-react";

export default function K12AdaptiveLearning() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Personalized Learning Lifts Outcomes 25% | Education Case Study"
      seoDescription="A mid-sized school district was teaching to the middle while achievement gaps widened. Helping teachers meet each student at their own level lifted results 25% and narrowed the gap."
      canonical="/cases/k12-adaptive-learning"
      industry="Education"
      industryLink="/industries/education"
      title="How a School District Lifted Learning Outcomes 25% by Teaching Each Student Where They Are"
      subtitle="A district was designing lessons for the average student — leaving stronger ones unchallenged and struggling ones further behind. Helping teachers meet each child at their own level lifted results and began to close a stubborn gap."
      heroImage="/images/cases/k12-adaptive-learning-hero.jpg"
      metrics={[
        { value: "25%", label: "Better Outcomes" },
        { value: "40%", label: "Gap Narrowed" },
        { value: "92%", label: "Student Engagement" },
        { value: "2.5x", label: "Learning Pace" }
      ]}
      clientContextTitle="When One Lesson Has to Fit Thirty Different Students"
      clientContextIntro="A public school district served around 18,000 students across roughly 25 schools, in classrooms where children arrived at very different levels. Lessons, though, were largely pitched to the middle of the room — which left the strongest students coasting and those who had fallen behind quietly falling further. Despite steady increases in spending, the district's test results had flattened."
      clientContextBody="The teachers were not the problem; the task was. Asked to tailor a single lesson to thirty students with thirty different needs, even excellent teachers could only do so much. They had little visibility into exactly where each child was struggling and few practical tools to give thirty students thirty different paths at once. The district needed a way to meet every student at their own level and move each of them forward."
      clientProfile={{
        industry: "Public School District",
        companySize: "~18,000 Students",
        projectDuration: "24 Months",
        additionalInfo: "~25 Schools",
        additionalLabel: "District Size"
      }}
      challengeTitle="One-Size-Fits-None Instruction"
      challenges={[
        {
          icon: Users,
          title: "A Widening Achievement Gap",
          description: "A large and growing gap separated the district's highest- and lowest-performing groups of students, widening a little more each year."
        },
        {
          icon: Target,
          title: "Lessons Aimed at the Middle",
          description: "Instruction built for the average student left the strongest unchallenged and the struggling ones further behind."
        },
        {
          icon: BookOpen,
          title: "An Impossible Ask for Teachers",
          description: "A single teacher with thirty students of differing needs simply could not tailor the lesson to each one by hand."
        },
        {
          icon: BarChart3,
          title: "Little Sight of Each Child's Progress",
          description: "Teachers had no clear, current view of where an individual student was struggling or which specific skills were missing."
        }
      ]}
      approachTitle="Meeting Every Student at Their Own Level"
      approachIntro="Working closely with the district's teachers, we introduced a way of learning that adjusts to each child — understanding where every student stood, giving each a path suited to them, and putting clear, practical information in the teacher's hands to guide the class."
      steps={[
        {
          step: "01",
          title: "Finding Out Where Each Student Really Stands",
          description: "We began with assessments that adjust to each child's answers, pinpointing the exact skills a student had mastered and the specific ones they were missing — a far sharper picture than a single overall score."
        },
        {
          step: "02",
          title: "A Learning Path for Each Child",
          description: "From that picture, each student received their own path — work that filled their particular gaps while stretching their strengths, with the difficulty and pace adjusting automatically as they went."
        },
        {
          step: "03",
          title: "Giving Teachers a Clear View",
          description: "We gave teachers a straightforward view of how their class and each student were doing, where common misunderstandings lay, and where to step in — so their time went exactly where it was needed most."
        },
        {
          step: "04",
          title: "Blending Technology with the Teacher",
          description: "We designed a model where students worked through their personalized material while teachers led focused small groups of children with similar needs — technology handling the routine, teachers doing what only teachers can."
        }
      ]}
      resultsTitle="Every Student Moving Forward"
      results={[
        {
          icon: TrendingUp,
          value: "25%",
          label: "Better learning outcomes",
          detail: "On state assessments, across subjects"
        },
        {
          icon: Target,
          value: "40%",
          label: "Achievement gap narrowed",
          detail: "Between the highest- and lowest-performing groups"
        },
        {
          icon: Sparkles,
          value: "92%",
          label: "Student engagement",
          detail: "Students actively working within the program"
        },
        {
          icon: Brain,
          value: "2.5x",
          label: "Faster learning pace",
          detail: "For students working at their own personalized level"
        }
      ]}
      quote="This changed how my classroom works. My students are not all doing the same page at the same time anymore — each one is working on exactly what they need next. I can see who is stuck and on what, so the time I spend with a small group really counts. Every child is moving forward now, not just the ones in the middle."
      quoteAuthor="Fifth-Grade Teacher"
      quoteRole="Public school district"
      relatedStudies={[
        {
          title: "Helping 18% More Students Reach Graduation",
          metric: "18%",
          label: "higher graduation rate",
          link: "/cases/university-student-success",
          image: "/images/cases/university-student-success-hero.jpg"
        },
        {
          title: "Growing a University's Online Programs Threefold",
          metric: "3x",
          label: "enrollment growth",
          link: "/cases/university-online-programs",
          image: "/images/industries/women-laptops.jpg"
        }
      ]}
      ctaTitle="Ready to reach every student, not just the middle?"
      ctaDescription="Let's talk about helping each of your students learn at their own level."
    />
  );
}
