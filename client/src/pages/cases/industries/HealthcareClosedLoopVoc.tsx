import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Users, BarChart3, TrendingDown, TrendingUp, CheckCircle } from "lucide-react";

export default function HealthcareClosedLoopVoc() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Closed-Loop VoC Cuts Patient-Experience Escalations 34% | Healthcare Case Study"
      seoDescription="A health system's NPS program produced a score and no follow-up. Rebuilding it around closed-loop response cut patient-experience escalations 34% in three quarters and lifted NPS nine points."
      canonical="/cases/healthcare-closed-loop-voc"
      industry="Healthcare Services"
      industryLink="/industries/healthcare"
      title="How a Health System Turned a Dormant NPS Score Into Fewer Escalations"
      subtitle="The voice-of-customer program produced a number every quarter and changed nothing. Rebuilding it so that every detractor was reached and every theme owned made it start moving the outcomes that mattered."
      heroImage="/images/cases/healthcare-closed-loop-voc-hero.jpg"
      metrics={[
        { value: "-34%", label: "Fewer Escalations" },
        { value: "+9 pts", label: "Patient-Reported NPS" },
        { value: "72 hrs", label: "Detractor Response" },
        { value: "3 Qtrs", label: "To the Result" }
      ]}
      clientContextTitle="A Score That Led Nowhere"
      clientContextIntro="A regional health system ran a patient-experience program built around a net-promoter score. Every quarter it produced a number, that number was reported, and then nothing happened. Detractors went unheard, themes went unowned, and the same problems recurred."
      clientContextBody="The program had all the machinery of listening and none of the machinery of responding. A patient who reported a poor experience received no follow-up, so the system never closed the loop or fixed the underlying cause. Recurring issues surfaced quarter after quarter with no named owner accountable for resolving them. Meanwhile patient-experience escalations — the formal complaints that consume leadership time and erode trust — kept climbing. Leadership wanted a program that turned feedback into action, not a scoreboard."
      clientProfile={{
        industry: "Regional Health System",
        companySize: "Upper Mid-Market",
        projectDuration: "6 Months",
        additionalInfo: "Multi-Site Patient Base",
        additionalLabel: "Care Network"
      }}
      challengeTitle="Why Feedback Never Became Action"
      challenges={[
        { icon: Target, title: "Listening Without Responding", description: "The program measured experience but had no mechanism to follow up with patients or fix root causes." },
        { icon: Users, title: "Detractors Left Unheard", description: "Patients who reported a poor experience received no response, so the loop never closed." },
        { icon: BarChart3, title: "Themes Without Owners", description: "Recurring issues reappeared every quarter with no one accountable for resolving them." },
        { icon: TrendingDown, title: "Rising Escalations", description: "Formal patient-experience escalations kept climbing, consuming leadership time and eroding trust." }
      ]}
      approachTitle="Close Every Loop"
      approachIntro="We rebuilt the program around closed-loop response — every detractor reached within 72 hours, every theme routed to a named owner, and every action tracked to resolution — so feedback finally drove change instead of a slide."
      steps={[
        { step: "01", title: "Reaching Every Detractor Fast", description: "We put in place a process to contact every detractor within 72 hours, turning a silent survey into a genuine service recovery conversation." },
        { step: "02", title: "Assigning Every Theme an Owner", description: "We routed each recurring theme to a named owner accountable for resolving the root cause, ending the quarter-after-quarter recurrence." },
        { step: "03", title: "Tracking Actions to Resolution", description: "We tracked every committed action through to completion, so the program was measured on what got fixed, not just what got scored." },
        { step: "04", title: "Reporting Outcomes, Not Just Scores", description: "We shifted leadership reporting from the NPS number to escalations avoided and issues resolved, keeping the focus on results." }
      ]}
      resultsTitle="Feedback That Changes Care"
      results={[
        { icon: TrendingUp, value: "-34%", label: "Fewer escalations", detail: "Patient-experience escalations over three quarters" },
        { icon: BarChart3, value: "+9 pts", label: "Patient-reported NPS", detail: "On the same instrument" },
        { icon: CheckCircle, value: "72 hrs", label: "Detractor response", detail: "Every detractor reached within the window" },
        { icon: Users, value: "100%", label: "Themes owned", detail: "Every recurring issue routed to a named owner" }
      ]}
      quote="For years we produced a patient-experience score and filed it. The change was not measuring differently — it was responding. Once every unhappy patient heard back within three days and every recurring problem had a name attached to it, our formal escalations fell by a third and the score followed."
      quoteAuthor="VP of Patient Experience"
      quoteRole="Regional health system"
      relatedStudies={[
        { title: "How a B2B SaaS Provider Reordered Its Roadmap and Lifted Expansion Revenue 19%", metric: "19%", label: "more expansion revenue", link: "/cases/saas-voc-roadmap-reorder", image: "/images/capabilities/cap-conference-data.jpg" },
        { title: "How a Specialty Retailer Lifted Product-Page Revenue per Session by 23%", metric: "23%", label: "more PDP revenue per session", link: "/cases/retail-pdp-recommender", image: "/images/cases/retail-pdp-recommender-hero.jpg" }
      ]}
      ctaTitle="Does your VoC program produce a score or drive action?"
      ctaDescription="Let's rebuild it around closed-loop response so feedback actually changes the experience."
    />
  );
}
