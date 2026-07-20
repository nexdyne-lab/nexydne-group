import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileSpreadsheet, Split, ShieldQuestion, Timer, Database, BookOpen, Brain, Gauge } from "lucide-react";

export function HealthcareDataMaturity() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Reaching Level 3 Data Maturity in 18 Months | Healthcare Case Study"
      seoDescription="A 12-hospital system sat at Level 1 data maturity — ad-hoc Excel reports, analysts spending 80% of time extracting data. A phased roadmap reached self-service analytics and cut IT requests 75%."
      canonical="/cases/healthcare-data-maturity"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Healthcare System Reached Level 3 Data Maturity in 18 Months"
      subtitle="A maturity assessment and phased roadmap turned an ad-hoc reporting culture into a self-service analytics organization — cutting IT reporting requests 75% and embedding predictive models in care."
      heroImage="/images/cases/healthcare-data-maturity-hero.jpg"
      metrics={[
        { value: "Level 3", label: "Data Maturity (from Level 1)" },
        { value: "75%", label: "Fewer IT Reporting Requests" },
        { value: "18 mo", label: "Ad-Hoc to Self-Service" }
      ]}
      clientContextTitle="Every Question Went Through IT"
      clientContextIntro="A 12-hospital healthcare system with 3,000 physicians struggled with data-driven decisions. Clinical quality, population health, and operational leaders needed data to improve outcomes and cut costs — but every analysis required IT support, and analysts spent 80% of their time extracting data and only 20% analyzing it."
      clientContextBody="A maturity assessment revealed Level 1 (ad-hoc reporting): no centralized platform, each department building its own Excel reports pulled manually from EHRs, billing, and labs. Data definitions were inconsistent — “readmission rate” was calculated differently across departments — with no governance, self-service, or predictive analytics. The system needed a strategy to assess current maturity, define a Level 3 target, and close the gap without disrupting clinical operations."
      clientProfile={{
        industry: "12-Hospital Healthcare System",
        companySize: "3,000 Physicians",
        projectDuration: "18-Month Roadmap",
        additionalInfo: "Snowflake + Tableau",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Data Stayed Stuck at Level 1"
      challenges={[
        {
          icon: FileSpreadsheet,
          title: "Ad-hoc Excel reporting",
          description: "Each department pulled data manually from EHRs, billing, and labs into its own spreadsheets."
        },
        {
          icon: Split,
          title: "Inconsistent definitions",
          description: "\"Readmission rate\" was calculated differently across departments, undermining trust."
        },
        {
          icon: Timer,
          title: "80% of time on extraction",
          description: "Analysts spent most of their effort pulling data rather than analyzing it."
        },
        {
          icon: ShieldQuestion,
          title: "No governance or prediction",
          description: "There was no data governance, self-service, or predictive capability at all."
        }
      ]}
      approachTitle="Assess, Standardize, Then Predict"
      approachIntro="NEXDYNE ran a 4-week maturity assessment across 8 dimensions, then executed a three-phase roadmap from a data warehouse to self-service analytics to embedded prediction."
      steps={[
        {
          step: "01",
          title: "Build the foundation",
          description: "Months 1–6 deployed Snowflake, migrated clinical and financial data, stood up a governance council, and defined standard metrics."
        },
        {
          step: "02",
          title: "Enable self-service",
          description: "Months 7–12 launched Tableau dashboards, certified 50 business users, and added a data catalog — cutting IT requests."
        },
        {
          step: "03",
          title: "Embed prediction",
          description: "Months 13–18 built ML models for 30-day readmission, ED forecasting, and high-risk identification, deployed into clinical workflows."
        },
        {
          step: "04",
          title: "Reach Level 3",
          description: "Self-service analytics with predictive capabilities became embedded in day-to-day operations."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "75%",
          label: "Fewer IT reporting requests",
          detail: "Clinical teams now answer their own questions"
        },
        {
          icon: Brain,
          value: "24%",
          label: "Fewer avoidable readmissions",
          detail: "By flagging high-risk patients before discharge"
        },
        {
          icon: BookOpen,
          value: "2 hrs",
          label: "Quality reporting time",
          detail: "Down from 3 weeks, with data errors down 65%"
        }
      ]}
      quote="The maturity assessment was a wake-up call. We were at Level 1 — every analysis required IT support, data definitions were inconsistent, no one could answer their own questions. The roadmap gave us a clear path to Level 3. In 18 months we built a data warehouse, launched self-service dashboards, and deployed predictive models for readmission risk. IT reporting requests dropped 75%, and the readmission prediction model alone cut avoidable readmissions 24% by identifying high-risk patients before discharge."
      quoteAuthor="Dr. Michael Rodriguez"
      quoteRole="Chief Medical Information Officer"
      relatedStudies={[
        {
          title: "Unifying Patient Records for Better Care Outcomes",
          metric: "20%",
          label: "fewer readmissions",
          link: "/cases/healthcare-data-platform",
          image: "/images/cases/healthcare-data-platform-hero.jpg"
        },
        {
          title: "Training 200 Clinicians to Build Their Own Dashboards",
          metric: "45%",
          label: "better visibility",
          link: "/cases/healthcare-dashboard-training",
          image: "/images/cases/healthcare-dashboard-training-hero.jpg"
        }
      ]}
      ctaTitle="Ready to move up the maturity curve?"
      ctaDescription="Let's talk about what a data strategy could do for your self-service analytics."
    />
  );
}

export default HealthcareDataMaturity;
