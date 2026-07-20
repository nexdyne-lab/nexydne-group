import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { EyeOff, Clock, FileSpreadsheet, Users, GraduationCap, LayoutDashboard, TrendingDown, Award } from "lucide-react";

export function HealthcareDashboardTraining() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Training 200 Clinicians to Build Their Own Tableau Dashboards | Healthcare Case Study"
      seoDescription="A 12-hospital network licensed Tableau for 500 users but only 20 in IT could use it. Half-day clinician workshops lifted outcome visibility 45% and cut 30 hours/week of manual reporting."
      canonical="/cases/healthcare-dashboard-training"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Healthcare Network Trained 200 Clinicians to Build Their Own Dashboards"
      subtitle="Half-day, healthcare-specific workshops taught clinical staff to build Tableau dashboards for patient outcomes — improving visibility 45% and eliminating 30 hours a week of manual reporting."
      heroImage="/images/cases/healthcare-dashboard-training-hero.jpg"
      metrics={[
        { value: "200", label: "Clinicians Trained" },
        { value: "45%", label: "Better Outcome Visibility" },
        { value: "180+", label: "Dashboards Built in 6 Months" },
        { value: "30 hrs/wk", label: "Less Manual Reporting" }
      ]}
      clientContextTitle="A Tool Nobody Could Use"
      clientContextIntro="A regional healthcare network with 12 hospitals and 45 outpatient clinics struggled with patient-outcome visibility. Clinicians wanted to track readmissions, infection rates, and length of stay — but relied on IT to generate reports that arrived weeks after the data was collected."
      clientContextBody="Pre-built dashboards were generic and didn't answer specific clinical questions, so staff resorted to exporting to Excel and emailing spreadsheets — consuming 30+ hours a week and introducing errors. The irony: Tableau was already deployed and licensed for 500 users, but only 20 people, all in IT, knew how to use it. If clinical staff could build their own dashboards, they'd get faster insight and free IT to focus on infrastructure."
      clientProfile={{
        industry: "Regional Healthcare Network",
        companySize: "12 Hospitals, 45 Clinics",
        projectDuration: "12 Onsite Sessions",
        additionalInfo: "500 Tableau Licenses",
        additionalLabel: "Already Deployed"
      }}
      challengeTitle="Why Insight Arrived Too Late"
      challenges={[
        {
          icon: EyeOff,
          title: "Reports weeks behind the data",
          description: "Clinicians depended on IT for every metric, receiving generic reports long after the moment for action had passed."
        },
        {
          icon: FileSpreadsheet,
          title: "30+ hours a week in Excel",
          description: "Manual exports and pivot tables consumed enormous time and broke when formulas failed or data went stale."
        },
        {
          icon: Users,
          title: "Only 20 of 500 licenses used",
          description: "Tableau was licensed for 500 users, but the skills sat entirely with a 20-person IT team."
        },
        {
          icon: Clock,
          title: "A growing IT request backlog",
          description: "Every clinical question became an IT ticket, crowding out infrastructure and strategic work."
        }
      ]}
      approachTitle="Training Built on Real Clinical Data"
      approachIntro="NEXDYNE designed a half-day “Tableau for Clinicians” workshop — not generic BI, but patient-outcome dashboards built on the network's own de-identified EHR data and everyday clinical questions."
      steps={[
        {
          step: "01",
          title: "Start with clinical scenarios",
          description: "A three-hour morning session taught data connections, visualizations, and filters using real questions like readmission rates by department."
        },
        {
          step: "02",
          title: "Build a dashboard that matters",
          description: "The afternoon covered calculated fields and dashboard actions, ending with each clinician building a dashboard for their own role."
        },
        {
          step: "03",
          title: "Go where the clinicians are",
          description: "Twelve onsite sessions ran at each hospital, capped at 15–20 people for hands-on support with real clinical data."
        },
        {
          step: "04",
          title: "Leave champions behind",
          description: "Five internal clinical-informatics \"Tableau Champions\" took over monthly office hours, a Q&A channel, and a library of reusable templates."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: LayoutDashboard,
          value: "420",
          label: "Active Tableau users",
          detail: "Up from 20, with 180+ custom dashboards in six months"
        },
        {
          icon: TrendingDown,
          value: "18%",
          label: "Fewer heart-failure readmissions",
          detail: "After physicians traced a 12% spike to discharge medication errors"
        },
        {
          icon: Award,
          value: "70%",
          label: "Smaller IT request backlog",
          detail: "As clinicians answered their own questions directly"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Upskilling 50 Analysts With a SQL & Python Bootcamp",
          metric: "60%",
          label: "smaller IT backlog",
          link: "/cases/financial-services-sql-bootcamp",
          image: "/images/cases/financial-services-sql-bootcamp-hero.jpg"
        },
        {
          title: "Launching a Patient Portal That Cut Admin Calls 65%",
          metric: "65%",
          label: "fewer admin calls",
          link: "/cases/healthcare-patient-portal",
          image: "/images/cases/healthcare-patient-portal-hero.jpg"
        }
      ]}
      ctaTitle="Ready to put analytics in your clinicians' hands?"
      ctaDescription="Let's talk about what role-based data training could do for your speed to insight."
    />
  );
}

export default HealthcareDashboardTraining;
