import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Monitor, Users, TrendingUp, Globe, DollarSign, Award, Target } from "lucide-react";

export default function UniversityOnlinePrograms() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Growing a University's Online Programs Threefold | Education Case Study"
      seoDescription="A regional university's online programs had stalled while competitors pulled ahead. Rebuilding them around the working-adult learner tripled enrollment and lifted completion sharply."
      canonical="/cases/university-online-programs"
      industry="Education"
      industryLink="/industries/education"
      title="How a Regional University Tripled Enrollment in Its Online Programs"
      subtitle="A well-regarded regional university had treated online learning as an afterthought while working adults quietly enrolled elsewhere. Rebuilding its programs around how those learners actually study turned a stalled offering into the university's fastest-growing one."
      heroImage="/images/industries/women-laptops.jpg"
      metrics={[
        { value: "3x", label: "Enrollment Growth" },
        { value: "88%", label: "Completion Rate" },
        { value: "$45M", label: "New Revenue" },
        { value: "4.6/5", label: "Student Satisfaction" }
      ]}
      clientContextTitle="A Strong Campus, a Neglected Online Offering"
      clientContextIntro="A respected regional university had built its name on residential, on-campus education. But the students it most wanted to reach next — working adults balancing jobs and families — needed to learn on their own time, and the university's online offering was not built for them. Its online courses were little more than recorded lectures bolted onto a dated learning system, with scant support once a student enrolled."
      clientContextBody="The results showed it. Online enrollment had been stuck at around 5,000 students while nearby institutions grew their own programs at more than 20% a year. Barely 60% of the university's online students finished what they started. A generation of capable learners was choosing other schools, and the university was watching an obvious opportunity pass it by."
      clientProfile={{
        industry: "Regional University",
        companySize: "~5,000 Online Students",
        projectDuration: "24 Months",
        additionalInfo: "60% Completion Rate",
        additionalLabel: "Starting Point"
      }}
      challengeTitle="Online as an Afterthought"
      challenges={[
        {
          icon: Monitor,
          title: "An Experience Built for the Classroom",
          description: "Online courses were recorded lectures delivered through a dated system — never designed for someone studying at night after work."
        },
        {
          icon: Users,
          title: "Too Many Students Not Finishing",
          description: "Only 60% of online students completed their programs, most drifting away for lack of engagement and support."
        },
        {
          icon: TrendingUp,
          title: "Growth That Had Stalled",
          description: "Enrollment sat flat while competing institutions grew more than 20% a year and took the learners the university wanted."
        },
        {
          icon: Globe,
          title: "Unknown Beyond the Region",
          description: "The university had little presence outside its immediate area, missing learners across the country who would have valued its programs."
        }
      ]}
      approachTitle="Rebuilding Online Around the Adult Learner"
      approachIntro="Working with the university's faculty and student-support staff, we rebuilt its online programs around the reality of an adult learner's life — courses designed for how they actually study, support that kept them enrolled, and outreach that finally told the university's story beyond its own region."
      steps={[
        {
          step: "01",
          title: "Courses Designed for Online, Not Adapted to It",
          description: "We rebuilt the coursework specifically for online study: short, focused lessons students could fit around work, practical exercises, real interaction with classmates, and material that worked as well on a phone as a laptop — not lectures recorded in a hall."
        },
        {
          step: "02",
          title: "Support That Keeps Adults Enrolled",
          description: "We surrounded online students with the help that keeps busy adults from dropping out: a dedicated coach for each learner, tutoring available around the clock, and early outreach the moment someone started to fall behind. Online students ended up better supported than those on campus, not worse."
        },
        {
          step: "03",
          title: "One Platform That Works Anywhere",
          description: "We put the programs on a modern, straightforward platform that worked on any device and connected to career services — so students could learn wherever they were, whenever they had time."
        },
        {
          step: "04",
          title: "Telling the Story Beyond the Region",
          description: "We built a disciplined, data-guided approach to reaching working adults across the country, simplified a once-cumbersome enrollment process, and formed employer partnerships that brought the university to learners it had never reached before."
        }
      ]}
      resultsTitle="From Afterthought to Growth Engine"
      results={[
        {
          icon: Users,
          value: "3x",
          label: "Enrollment growth",
          detail: "From about 5,000 to 15,000 online students"
        },
        {
          icon: Award,
          value: "88%",
          label: "Completion rate",
          detail: "Up from 60% — now ahead of its peers"
        },
        {
          icon: DollarSign,
          value: "$45M",
          label: "New annual revenue",
          detail: "From the expanded online programs"
        },
        {
          icon: Target,
          value: "4.6/5",
          label: "Student satisfaction",
          detail: "Online students rating their experience above on-campus"
        }
      ]}
      quote="Online used to be something we did on the side. Now it is how we reach the students who need us most — and they finish at a higher rate than our students on campus. We did not just catch up in online learning. We built something we are genuinely proud to put our name on."
      quoteAuthor="Provost"
      quoteRole="Regional university"
      relatedStudies={[
        {
          title: "Helping 18% More Students Reach Graduation",
          metric: "18%",
          label: "higher graduation rate",
          link: "/cases/university-student-success",
          image: "/images/industries/edu-whiteboard.jpg"
        },
        {
          title: "Personalized Learning Lifts District Outcomes 25%",
          metric: "25%",
          label: "better learning outcomes",
          link: "/cases/k12-adaptive-learning",
          image: "/images/industries/team-strategy-board.jpg"
        }
      ]}
      ctaTitle="Ready to grow your online programs?"
      ctaDescription="Let's talk about building online learning your students will actually finish."
    />
  );
}
