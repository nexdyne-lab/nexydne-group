import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Activity, AlertTriangle, Target, Clock, DollarSign, Heart, TrendingDown, Users } from "lucide-react";

export default function HealthcareReadmission() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Avoidable Readmissions by 42% | Healthcare Case Study"
      seoDescription="A community hospital network was paying heavy federal penalties for patients who kept coming back. Predicting who was truly at risk — and acting before discharge — cut avoidable readmissions by 42%."
      canonical="/cases/healthcare-readmission"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Hospital Network Cut Avoidable Readmissions by 42%"
      subtitle="The network was paying heavy penalties for patients who returned within weeks of going home. Learning to tell — before a patient left — who was genuinely at risk let its care teams put their effort where it would do the most good."
      heroImage="/images/cases/healthcare-readmission-hero.jpg"
      metrics={[
        { value: "42%", label: "Fewer Readmissions" },
        { value: "85%", label: "Prediction Accuracy" },
        { value: "50%", label: "Fewer False Alarms" },
        { value: "72 hrs", label: "Head Start on Risk" }
      ]}
      clientContextTitle="Paying for Patients Who Came Back"
      clientContextIntro="A community hospital network — five hospitals serving a diverse population — was under growing financial pressure from federal penalties tied to readmissions. Too many patients treated for heart failure, pneumonia or a hip or knee replacement were back in a hospital bed within a month, and the resulting Medicare penalties had become a heavy annual burden."
      clientContextBody="The tools meant to catch these patients were doing the opposite. A simple set of rules flagged so many people as high-risk that care managers could not tell where to focus, while some of the patients who actually came back were never flagged at all. The network was spreading a limited care-management team thin across the wrong patients. What it needed was precision — a reliable way to know, before a patient walked out the door, which ones truly needed extra support."
      clientProfile={{
        industry: "Community Hospital Network",
        companySize: "5-Hospital Network",
        projectDuration: "12 Months",
        additionalInfo: "~180K Discharges a Year",
        additionalLabel: "Annual Volume"
      }}
      challengeTitle="The Trouble With Predicting Readmissions"
      challenges={[
        {
          icon: AlertTriangle,
          title: "Penalties Adding Up",
          description: "A heavy annual federal penalty for patients readmitted within 30 days of going home, growing year over year."
        },
        {
          icon: Target,
          title: "Flagging the Wrong Patients",
          description: "The existing risk scores raised so many false alarms that care managers were buried in alerts that led nowhere."
        },
        {
          icon: Clock,
          title: "Recognized Too Late",
          description: "Patients who genuinely needed extra help were often identified only after discharge — too late to change the outcome."
        },
        {
          icon: Users,
          title: "A Team Spread Too Thin",
          description: "A limited care-management team could only help so many patients, so getting the targeting right was everything."
        }
      ]}
      approachTitle="The Right Patient, at the Right Moment"
      approachIntro="We helped the network replace guesswork with a dependable read on risk — one accurate enough to trust, delivered early enough to act on, and wired straight into the moment a patient was being discharged."
      steps={[
        {
          step: "01",
          title: "Learning What Actually Predicts a Return",
          description: "We studied five years of the network's own admissions to find the signals that really preceded a readmission. Tellingly, a patient's circumstances outside the hospital — support at home, ability to get to follow-up care, complexity of their medicines — mattered as much as their clinical condition."
        },
        {
          step: "02",
          title: "A Risk Score Teams Could Trust",
          description: "We built prediction models tuned to each major condition, from heart failure to chronic lung disease to surgical recovery. The result identified who would return with 85% accuracy and roughly half the false alarms of the old approach — precise enough that a flag meant something."
        },
        {
          step: "03",
          title: "Built Into the Discharge Itself",
          description: "We placed the risk score directly into the discharge process. A high-risk patient automatically set the right steps in motion — a care-management referral, a pharmacist review, a follow-up appointment booked — before they ever left the building."
        },
        {
          step: "04",
          title: "A Clear Plan for Each Level of Risk",
          description: "We matched each risk level to a proven set of actions: clearer instructions at discharge, a check that medicines lined up, a call within 48 hours, home visits and early clinic appointments for those who needed them most."
        }
      ]}
      resultsTitle="Fewer Patients Coming Back"
      results={[
        {
          icon: TrendingDown,
          value: "42%",
          label: "Fewer avoidable readmissions",
          detail: "Across the conditions that carried penalties"
        },
        {
          icon: Target,
          value: "85%",
          label: "Prediction accuracy",
          detail: "With half the false alarms of the old system"
        },
        {
          icon: DollarSign,
          value: "Year one",
          label: "Payback on the program",
          detail: "Penalties avoided plus the cost of readmissions prevented"
        },
        {
          icon: Heart,
          value: "18%",
          label: "Better patient outcomes",
          detail: "Fewer complications in the weeks after discharge"
        }
      ]}
      quote="This changed how we think about sending a patient home. We are no longer reacting to readmissions — we are preventing them. Our care managers now spend their time on the patients who genuinely need them, and the results speak for themselves."
      quoteAuthor="Chief Quality Officer"
      quoteRole="Community hospital network"
      relatedStudies={[
        {
          title: "Improving Patient Outcomes by 35%",
          metric: "35%",
          label: "better patient outcomes",
          link: "/cases/healthcare-transformation",
          image: "/images/cases/healthcare-transformation-hero.jpg"
        },
        {
          title: "Collecting What Was Already Owed",
          metric: "45%",
          label: "fewer rejected claims",
          link: "/cases/healthcare-revenue-cycle",
          image: "/case-healthcare-team.5797392b.jpg"
        }
      ]}
      ctaTitle="Ready to keep more patients from coming back?"
      ctaDescription="Let's talk about spotting the patients who need help while there's still time to give it."
    />
  );
}
