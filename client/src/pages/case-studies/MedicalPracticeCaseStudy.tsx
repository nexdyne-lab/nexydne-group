import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, CalendarX, Gauge, Layers, Bell, Activity, TrendingUp, Stethoscope } from "lucide-react";

export default function MedicalPracticeCaseStudy() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Patient Wait Times 35% Across a Practice Network | Healthcare Case Study"
      seoDescription="A 12-clinic practice network was losing capacity to no-shows and uneven scheduling. Predictive scheduling cut wait times 35% and recovered capacity worth two providers."
      canonical="/capabilities/ai-technology-consulting/case-study/medical-practice"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Medical Practice Network Cut Patient Wait Times 35%"
      subtitle="A network of 12 primary care and specialty clinics with 180 staff deployed AI-powered scheduling optimization — cutting patient wait times 35% and recovering capacity equal to two full-time providers."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "35%", label: "Shorter Wait Times" },
        { value: "22%", label: "Higher Utilization" },
        { value: "18→11%", label: "No-Show Rate" },
        { value: "10 wks", label: "To Full Deployment" }
      ]}
      clientContextTitle="Twelve Clinics, Twelve Ways of Scheduling"
      clientContextIntro="This physician-owned network had grown through acquisition over 15 years, bringing primary care, internal medicine, and specialty clinics under one management. But each clinic kept its own scheduling habits, creating inconsistent patient experiences and operational drag."
      clientContextBody="Patients complained about long waits while providers felt rushed or underused depending on the day. No-shows averaged 18% across the network — as high as 25% at some clinics — and front-desk staff burned hours on reminder calls and schedule changes. Leadership calculated that scheduling inefficiency was costing the network the equivalent of two full-time providers in lost capacity, exactly the capacity a growing region needed."
      clientProfile={{
        industry: "Regional Medical Practice Network",
        companySize: "12 Clinics",
        projectDuration: "10 Weeks to Deploy",
        additionalInfo: "180 Staff",
        additionalLabel: "Team Size"
      }}
      challengeTitle="Where Capacity Was Leaking"
      challenges={[
        {
          icon: CalendarX,
          title: "No-shows draining the day",
          description: "An 18% average no-show rate — up to 25% at some clinics — left providers with gaps that couldn't be recovered."
        },
        {
          icon: Clock,
          title: "Long, uneven waits",
          description: "Patients waited an average of 23 minutes, while inconsistent scheduling left some providers slammed and others idle."
        },
        {
          icon: Layers,
          title: "Twelve incompatible systems",
          description: "Each clinic kept its own scheduling practices, so there was no consistent patient experience or shared view across the network."
        },
        {
          icon: Bell,
          title: "Manual reminders eating time",
          description: "Front-desk staff spent hours a day on reminder calls and last-minute schedule changes instead of caring for patients."
        }
      ]}
      approachTitle="Predictive Scheduling Across the Network"
      approachIntro="NEXDYNE deployed a predictive scheduling system that reshaped how the network manages patient flow — anticipating no-shows, sequencing appointments intelligently, and giving managers a live view of the day ahead."
      steps={[
        {
          step: "01",
          title: "Predict no-shows before they happen",
          description: "Trained on 200,000+ historical appointments, the system scores each booking's no-show probability and recommends the optimal scheduling sequence."
        },
        {
          step: "02",
          title: "Reach patients on their terms",
          description: "For high-risk appointments, automated outreach goes out through each patient's preferred channel — text, email, or call — to confirm or reschedule."
        },
        {
          step: "03",
          title: "Shape the schedule intelligently",
          description: "High-risk slots are strategically overbooked while complex cases get appropriate time buffers, and appointment durations flex to visit type and history."
        },
        {
          step: "04",
          title: "Give managers a live cockpit",
          description: "Real-time dashboards surface the day's likely bottlenecks before they happen, after a phased rollout from three pilot clinics to the full network."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Clock,
          value: "35%",
          label: "Shorter patient waits",
          detail: "Average wait down from 23 minutes to 15"
        },
        {
          icon: Activity,
          value: "72→88%",
          label: "Provider utilization",
          detail: "As idle gaps were filled and no-shows fell to 11%"
        },
        {
          icon: TrendingUp,
          value: "15%",
          label: "Higher revenue per provider",
          detail: "With staff overtime down 25%"
        },
        {
          icon: Stethoscope,
          value: "2",
          label: "Providers' worth of capacity",
          detail: "Recovered without adding headcount"
        }
      ]}
      quote="Our providers used to dread looking at their schedules — some days were impossibly packed, others had gaps that cost us revenue. Now the schedule flows naturally, patients wait less, and our team goes home on time. It's transformed how we practice medicine."
      quoteAuthor="Chief Medical Officer"
      quoteRole="Regional Medical Practice Network"
      relatedStudies={[
        {
          title: "Cutting Manual Document Processing 70% for an Accounting Firm",
          metric: "70%",
          label: "less manual work",
          link: "/capabilities/ai-technology-consulting/case-study/accounting-firm",
          image: "/images/capabilities/cap-conference-data.jpg"
        },
        {
          title: "Lifting Member Satisfaction 45% at a Credit Union",
          metric: "45%",
          label: "higher satisfaction",
          link: "/capabilities/ai-technology-consulting/case-study/credit-union",
          image: "/images/industries/fin-monitors.jpg"
        }
      ]}
      ctaTitle="Ready to recover the capacity you already have?"
      ctaDescription="Let's talk about what predictive scheduling could unlock across your clinics."
    />
  );
}
