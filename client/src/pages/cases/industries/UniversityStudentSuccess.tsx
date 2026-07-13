import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { GraduationCap, Users, TrendingUp, Target, Heart, Award } from "lucide-react";

export default function UniversityStudentSuccess() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Helping More Students Reach Graduation | Education Case Study"
      seoDescription="A regional university was losing capable students before they finished. Seeing who needed help early — and acting in time — lifted its graduation rate and retained millions in tuition."
      canonical="/cases/university-student-success"
      industry="Education"
      industryLink="/industries/education"
      title="How a Regional University Helped 18% More Students Reach Graduation"
      subtitle="A regional public university was losing capable students long before they earned a degree — usually before anyone noticed they were struggling. Seeing trouble early, and reaching out in time, changed the odds for thousands of them."
      heroImage="/images/industries/edu-whiteboard.jpg"
      metrics={[
        { value: "18%", label: "Higher Graduation Rate" },
        { value: "85%", label: "Early-Warning Accuracy" },
        { value: "40%", label: "Fewer Dropouts" },
        { value: "$25M", label: "Tuition Retained" }
      ]}
      clientContextTitle="When Help Arrives Too Late to Matter"
      clientContextIntro="A regional public university educated around 12,000 students, many of them the first in their families to attend college. Its people cared deeply about those students, yet only a little over half earned a degree within six years — short of comparable universities and well short of the university's own ambitions. Every student who left partway through was a personal setback, a future unrealized, and tuition the institution would never recover."
      clientContextBody="The problem was rarely a shortage of support to offer; it was that help arrived too late. Advisors each looked after several hundred students and had no reliable way to tell which ones were quietly slipping. By the time a student surfaced on anyone's radar — a failed course, a term of missed classes — the moment to intervene had usually passed. The university held a great deal of information about how its students were doing, but almost none of it reached an advisor in time to act on it."
      clientProfile={{
        industry: "Regional Public University",
        companySize: "~12,000 Students",
        projectDuration: "18 Months",
        additionalInfo: "52% Graduation Rate",
        additionalLabel: "Starting Point"
      }}
      challengeTitle="Too Many Students Slipping Away Unseen"
      challenges={[
        {
          icon: TrendingUp,
          title: "A Graduation Rate Below Its Peers",
          description: "Only 52% of students earned a degree within six years — behind comparable universities and well short of the institution's goals."
        },
        {
          icon: Users,
          title: "Advisors Stretched Too Thin",
          description: "Each advisor was responsible for several hundred students, with no practical way to spot the ones who were beginning to struggle."
        },
        {
          icon: Target,
          title: "Problems Found Too Late",
          description: "Students were usually flagged as at risk only after they had failed a course or stopped attending — long past the point where help could still change the outcome."
        },
        {
          icon: Heart,
          title: "The Same Support for Everyone",
          description: "Every struggling student was offered much the same help, whether the real obstacle was academic, financial, or personal."
        }
      ]}
      approachTitle="Reaching Students Before They Fall Behind"
      approachIntro="Working alongside the university's advisors and student-support teams, we set out to turn the information the institution already held into early, practical warning — so an advisor could reach a student while there was still time to change the outcome, and offer the kind of help that particular student actually needed."
      steps={[
        {
          step: "01",
          title: "Learning the Early Signs of a Student in Trouble",
          description: "We studied years of the university's own records to understand what the earliest signs of a struggling student looked like — a dip in engagement, a difficult first term, growing financial strain. Taken together, these signals could flag a student at risk months before a failing grade, and did so correctly in roughly five cases out of six."
        },
        {
          step: "02",
          title: "Putting the Right Names in Front of Advisors",
          description: "We gave advisors a simple, current view of which of their students most needed attention and why. Instead of waiting for a crisis, they could begin each week knowing exactly who to reach out to first."
        },
        {
          step: "03",
          title: "Matching Help to the Actual Problem",
          description: "Because the signals showed why a student was struggling, the university could offer the right response — tutoring for an academic gap, aid counseling for financial pressure, wellbeing support when the strain was personal — rather than the same generic referral for everyone."
        },
        {
          step: "04",
          title: "Learning What Actually Worked",
          description: "We tracked what happened after each outreach, so the university could see which kinds of support helped which students — and steadily do more of what worked and less of what did not."
        }
      ]}
      resultsTitle="More Students Making It to the Finish"
      results={[
        {
          icon: GraduationCap,
          value: "18%",
          label: "Higher graduation rate",
          detail: "From 52% to 61% finishing within six years"
        },
        {
          icon: Target,
          value: "85%",
          label: "Early-warning accuracy",
          detail: "Correctly flagging students who needed help"
        },
        {
          icon: Users,
          value: "40%",
          label: "Fewer dropouts",
          detail: "Students who stayed and kept progressing"
        },
        {
          icon: Award,
          value: "$25M",
          label: "Tuition retained",
          detail: "From students who stayed enrolled through graduation"
        }
      ]}
      quote="We used to wait for a student to fail before we knew they needed us — and by then it was often too late. Now our advisors can see who is beginning to struggle and reach out while it still makes a difference. We are not just moving a graduation rate. We are changing what happens to real students' lives."
      quoteAuthor="Vice Provost for Student Success"
      quoteRole="Regional public university"
      relatedStudies={[
        {
          title: "Growing a University's Online Programs Threefold",
          metric: "3x",
          label: "enrollment growth",
          link: "/cases/university-online-programs",
          image: "/images/industries/women-laptops.jpg"
        },
        {
          title: "Personalized Learning Lifts District Outcomes 25%",
          metric: "25%",
          label: "better learning outcomes",
          link: "/cases/k12-adaptive-learning",
          image: "/images/industries/team-strategy-board.jpg"
        }
      ]}
      ctaTitle="Ready to help more of your students graduate?"
      ctaDescription="Let's talk about turning the information you already have into help that arrives in time."
    />
  );
}
