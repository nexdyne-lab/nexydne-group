import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Heart, Clock, TrendingUp, Users, Database, Activity, DollarSign } from "lucide-react";

export default function HealthcareTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Turning Scattered Patient Data Into Better Care | Healthcare Case Study"
      seoDescription="A regional health system had invested heavily in digital records, yet its patient information stayed locked in separate systems. Bringing it together improved patient outcomes by 35%."
      canonical="/cases/healthcare-transformation"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Regional Health System Improved Patient Outcomes by 35%"
      subtitle="The system had spent years digitising its records, yet its clinicians still could not see the whole patient. Bringing that information together — and putting it in front of the care team when it mattered — changed the quality of care it could deliver."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "35%", label: "Better Patient Outcomes" },
        { value: "28%", label: "Fewer Readmissions" },
        { value: "$45M", label: "Saved Each Year" },
        { value: "4.8/5", label: "Patient Satisfaction" }
      ]}
      clientContextTitle="Digital Records, but Still No Full Picture of the Patient"
      clientContextIntro="A regional health system — four hospitals and a network of outpatient clinics caring for around 350,000 patients a year — had invested heavily in electronic records. Yet a patient's information still lived in a dozen separate systems that did not talk to one another. A physician looking at a chart saw only part of the story, and the pieces that mattered most were often the hardest to find."
      clientContextBody="The cost of that fragmentation showed up in the numbers that count. Readmissions ran well above comparable systems, patients stayed longer than they needed to, and satisfaction scores had stalled despite years of effort to lift them. Warning signs that a patient was deteriorating were often present in the data but scattered across systems, so they were noticed late or not at all. Leadership concluded the problem was not the quality of its people or its records; it was that no one could see the whole patient in one place, at the moment a decision had to be made."
      clientProfile={{
        industry: "Regional Health System",
        companySize: "~$650M Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "~350K Patients a Year",
        additionalLabel: "Patient Volume"
      }}
      challengeTitle="Rich in Data, Short on Insight"
      challenges={[
        {
          icon: Database,
          title: "A Patient in Pieces",
          description: "A single patient's history was spread across roughly fifteen systems, so no one could see a complete, up-to-date view of their health in one place."
        },
        {
          icon: Clock,
          title: "Warnings Seen Too Late",
          description: "The early signs of a patient going downhill were often buried in the data, so care teams reacted to complications instead of preventing them."
        },
        {
          icon: Heart,
          title: "Care That Did Not Connect",
          description: "Hospital, clinic and follow-up care worked from different records, leaving gaps every time a patient moved from one setting to the next."
        },
        {
          icon: TrendingUp,
          title: "Costs Moving the Wrong Way",
          description: "Longer stays and avoidable readmissions were driving costs up faster than the system could sustain."
        }
      ]}
      approachTitle="From Scattered Records to a Clear Picture"
      approachIntro="Working alongside the system's clinical and operational leaders, we set out to bring a patient's information together into one current, trustworthy view — and to put the insights that mattered directly in front of the care team, inside the tools they already used."
      steps={[
        {
          step: "01",
          title: "One Record for the Whole Patient",
          description: "We connected the system's records, lab results, imaging, pharmacy and remote monitoring into a single patient view. For the first time a clinician could see a patient's full, current history in one place rather than piecing it together across screens."
        },
        {
          step: "02",
          title: "Spotting Trouble Before It Arrives",
          description: "We built early-warning tools that read the signals already in the data to flag patients at rising risk — of readmission, of a serious infection, of a bad reaction between medicines — and alerted the care team while there was still time to act."
        },
        {
          step: "03",
          title: "Care That Follows the Patient",
          description: "We put in place a way to track patients as they moved between hospital, clinic and home, keeping care plans current and making sure nothing was dropped in the handoff. Gaps in follow-up care fell by 60%."
        },
        {
          step: "04",
          title: "Insight at the Point of Care",
          description: "Rather than add another system to log into, we surfaced the right guidance inside the physician's existing workflow — relevant history, suggested next steps and safety checks — so better decisions took no extra effort."
        }
      ]}
      resultsTitle="Better Care, at Lower Cost"
      results={[
        {
          icon: Heart,
          value: "35%",
          label: "Better patient outcomes",
          detail: "Across the system's core quality measures"
        },
        {
          icon: Activity,
          value: "28%",
          label: "Fewer readmissions",
          detail: "Patients returning within 30 days"
        },
        {
          icon: DollarSign,
          value: "$45M",
          label: "Saved each year",
          detail: "From shorter stays and avoided complications"
        },
        {
          icon: Users,
          value: "4.8/5",
          label: "Patient satisfaction",
          detail: "Up from 3.9 out of 5 before the change"
        }
      ]}
      quote="This changed how we practise medicine. Our physicians finally have what they need in front of them, instead of buried in charts or scattered across systems. We are catching problems before they become emergencies, and our patients are healthier for it."
      quoteAuthor="Chief Medical Officer"
      quoteRole="Regional health system"
      relatedStudies={[
        {
          title: "Cutting Avoidable Readmissions by 42%",
          metric: "42%",
          label: "fewer avoidable readmissions",
          link: "/cases/healthcare-readmission",
          image: "/case-doctor-consultation.799c1562.jpg"
        },
        {
          title: "Recovering $32M in Lost Revenue",
          metric: "$32M",
          label: "revenue recovered each year",
          link: "/cases/healthcare-revenue-cycle",
          image: "/case-healthcare-team.5797392b.jpg"
        }
      ]}
      ctaTitle="Ready to see the whole patient?"
      ctaDescription="Let's talk about what bringing your clinical information together could be worth."
    />
  );
}
