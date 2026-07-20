import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, CalendarX, Gauge, Boxes, LineChart, CalendarClock, MonitorDot, HeartPulse } from "lucide-react";

export function HealthcareProviderAI() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Reducing Patient Wait Times 35% With Predictive Analytics | Healthcare Case Study"
      seoDescription="A healthcare system serving 2M patients saw satisfaction fall three years running on 4+ hour ED waits. AI scheduling and forecasting cut waits 35% and lifted throughput 28%."
      canonical="/cases/healthcare-provider-ai"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Healthcare System Cut Patient Wait Times 35% With Predictive Analytics"
      subtitle="AI-powered scheduling and patient-flow forecasting transformed operations across the network — cutting wait times 35% and lifting throughput 28% without adding staff or facilities."
      heroImage="/images/cases/healthcare-provider-ai-hero.jpg"
      metrics={[
        { value: "35%", label: "Shorter Wait Times" },
        { value: "28%", label: "Higher Throughput" },
        { value: "92%", label: "Patient Satisfaction" },
        { value: "28%", label: "Higher Throughput" }
      ]}
      clientContextTitle="Satisfaction in Decline"
      clientContextIntro="A regional healthcare system serving 2 million patients a year had seen satisfaction fall for three straight years, with wait times cited as the primary concern. Emergency department waits exceeded four hours at peak, and outpatient no-show rates had climbed to 22%."
      clientContextBody="The issues were systemic: room and equipment utilization sat at just 65%, and staff scheduling ran on historical averages rather than predicted demand — creating chronic understaffing at peaks and overstaffing in valleys. Data stayed siloed across departments, blocking system-wide optimization. With healthcare consumerism rising and patients choosing on convenience, leadership recognized that improving patient flow was essential to market position and financial sustainability."
      clientProfile={{
        industry: "Regional Healthcare System",
        companySize: "2M Patients/Year",
        projectDuration: "24-Week Program",
        additionalInfo: "50+ Data Sources",
        additionalLabel: "Integrated"
      }}
      challengeTitle="Why Patient Flow Broke Down"
      challenges={[
        {
          icon: Clock,
          title: "4+ hour ED waits",
          description: "Peak-period emergency waits drove satisfaction down for three consecutive years."
        },
        {
          icon: CalendarX,
          title: "22% no-show rate",
          description: "Outpatient no-shows disrupted schedules and wasted capacity across the network."
        },
        {
          icon: Gauge,
          title: "65% resource utilization",
          description: "Rooms and equipment sat underused while staffing rarely matched real demand."
        },
        {
          icon: Boxes,
          title: "Siloed departmental data",
          description: "Fragmented data blocked the system-wide optimization modern operations require."
        }
      ]}
      approachTitle="Predict, Schedule, and Monitor Flow"
      approachIntro="NEXDYNE deployed a patient-flow platform combining predictive analytics, intelligent scheduling, and real-time monitoring — moving the system from reactive firefighting to proactive management."
      steps={[
        {
          step: "01",
          title: "Forecast demand by the hour",
          description: "ML models integrating 50+ data sources predicted patient volumes at 94% accuracy over 72 hours, tuned per department."
        },
        {
          step: "02",
          title: "Optimize the schedule",
          description: "An AI scheduling engine right-sized appointment slots, predicted no-shows, and overbooked strategically — cutting no-shows 40%."
        },
        {
          step: "03",
          title: "Run a real-time command center",
          description: "A network-wide dashboard monitored flow across facilities, flagged bottlenecks, and recommended bed and staff reallocation live."
        },
        {
          step: "04",
          title: "Act on the recommendations",
          description: "Automated bed management and staffing guidance gave administrators a complete, current picture of operations at any moment."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Clock,
          value: "35%",
          label: "Shorter wait times",
          detail: "ED peaks down from 4+ hours to under 2.5"
        },
        {
          icon: MonitorDot,
          value: "28%",
          label: "Higher throughput",
          detail: "Without adding staff or facilities"
        },
        {
          icon: HeartPulse,
          value: "82nd",
          label: "Satisfaction percentile",
          detail: "Up from the 45th, with the program repaying its cost many times over"
        }
      ]}
      quote="The predictive analytics platform has transformed how we think about operations. We've moved from reactive firefighting to proactive management. Our staff are happier, our patients are happier, and our financial performance has never been stronger."
      quoteAuthor="Dr. Jennifer Walsh"
      quoteRole="Chief Medical Officer"
      relatedStudies={[
        {
          title: "Automating Patient Data Management, Cutting Admin Work 40%",
          metric: "40%",
          label: "less admin overhead",
          link: "/cases/healthcare-provider",
          image: "/images/cases/healthcare-provider-hero.jpg"
        },
        {
          title: "Launching a Patient Portal That Cut Admin Calls 65%",
          metric: "65%",
          label: "fewer admin calls",
          link: "/cases/healthcare-patient-portal",
          image: "/images/cases/healthcare-patient-portal-hero.jpg"
        }
      ]}
      ctaTitle="Ready to get ahead of patient demand?"
      ctaDescription="Let's talk about what predictive analytics could do for your wait times and throughput."
    />
  );
}

export default HealthcareProviderAI;
