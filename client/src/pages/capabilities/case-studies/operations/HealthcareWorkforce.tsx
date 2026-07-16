import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, Clock, Car, UserMinus, MapPinned, Smartphone, Gauge, HeartPulse } from "lucide-react";

export function HealthcareWorkforce() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Workforce Optimization That Improved Productivity 28% | Healthcare Case Study"
      seoDescription="A $48M home-health company spent 72% of revenue on labor with clinicians driving 35% of the day and 35% turnover. Scheduling optimization lifted productivity 28% and saved $1.4M."
      canonical="/capabilities/operations/case-studies/healthcare-workforce"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Healthcare Services Company Improved Productivity 28%"
      subtitle="A home-health services company optimized staffing with geographic routing, redesigned territories, and mobile documentation — improving clinician productivity 28%, cutting overtime 15%, and saving $1.4M."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "28%", label: "Productivity Gain" },
        { value: "15%", label: "Overtime Reduction" },
        { value: "$1.4M", label: "Annual Savings" },
        { value: "22%", label: "Turnover Reduction" }
      ]}
      clientContextTitle="Labor Eating the Business"
      clientContextIntro="A 190-employee healthcare services company with $48M in revenue provides home health, hospice, and personal care across a three-state region with 150 field clinicians. Labor costs consumed 72% of revenue — well above benchmark — and overtime had become chronic, with some staff working 50+ hours a week."
      clientContextBody="Scheduling was manual and reactive, causing inefficient routing and missed visits, and turnover ran 35% annually, driven partly by unpredictable schedules. The diagnostic found multiple sources of productivity loss: schedulers assigning visits without regard to geography, clinicians spending 35% of their time driving, paper documentation entered at day's end, and no-shows leaving gaps rather than being backfilled."
      clientProfile={{
        industry: "Home Health Services",
        companySize: "150 Clinicians",
        projectDuration: "Three-State Region",
        additionalInfo: "Route Optimization",
        additionalLabel: "Core"
      }}
      challengeTitle="Why Productivity Suffered"
      challenges={[
        {
          icon: DollarSign,
          title: "72% of revenue on labor",
          description: "Labor costs ran well above industry benchmarks, squeezing the business."
        },
        {
          icon: Clock,
          title: "Chronic overtime",
          description: "Manual, reactive scheduling pushed some staff past 50 hours a week."
        },
        {
          icon: Car,
          title: "35% of the day driving",
          description: "Visits assigned without geographic logic sent clinicians backtracking across territories."
        },
        {
          icon: UserMinus,
          title: "35% annual turnover",
          description: "Unpredictable schedules drove attrition in a skilled clinical workforce."
        }
      ]}
      approachTitle="Optimize Routes, Territories, and Tools"
      approachIntro="NEXDYNE deployed scheduling optimization, redesigned service territories, and put documentation on mobile — cutting drive time and giving clinicians predictable, manageable schedules."
      steps={[
        {
          step: "01",
          title: "Optimize scheduling and routes",
          description: "A system matched clinician skills, patient needs, and proximity, auto-optimizing routes and enabling patient self-scheduling."
        },
        {
          step: "02",
          title: "Redesign territories",
          description: "Territories grouped patients geographically while balancing caseloads, with primary and backup assignments for continuity."
        },
        {
          step: "03",
          title: "Go mobile at point of care",
          description: "Mobile devices, point-of-care documentation, electronic visit verification, and integrated GPS eliminated end-of-day data entry."
        },
        {
          step: "04",
          title: "Engage the workforce",
          description: "Schedule preferences, transparent metrics, recognition, and team huddles improved communication and buy-in."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "28%",
          label: "Higher productivity",
          detail: "Drive time cut from 35% to under 20% of the workday"
        },
        {
          icon: HeartPulse,
          value: "22%",
          label: "Lower turnover",
          detail: "As schedule predictability improved, compounding savings over time"
        },
        {
          icon: Smartphone,
          value: "$1.4M",
          label: "Annual savings",
          detail: "From labor efficiency and a 15% overtime reduction"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Reducing Patient Wait Times 35% With Predictive Analytics",
          metric: "35%",
          label: "shorter waits",
          link: "/cases/healthcare-provider-ai",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        },
        {
          title: "Automating Patient Data Management, Cutting Admin Work 40%",
          metric: "40%",
          label: "less admin overhead",
          link: "/cases/healthcare-provider",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        }
      ]}
      ctaTitle="Ready to get more from your workforce?"
      ctaDescription="Let's talk about what scheduling optimization could do for your productivity and retention."
    />
  );
}

export default HealthcareWorkforce;
