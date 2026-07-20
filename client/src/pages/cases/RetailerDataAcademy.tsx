import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { EyeOff, GraduationCap, Repeat, Users, BookOpen, Layers, TrendingUp, DollarSign } from "lucide-react";

export function RetailerDataAcademy() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Building an Internal Data Academy to Train 120 Employees | Retail Case Study"
      seoDescription="A retail chain invested in a data warehouse but only 15% of staff used data. A tiered, role-specific Data Academy lifted data usage to 68% and brought campaign analytics fully in-house."
      canonical="/cases/retailer-data-academy"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Retailer Built an Internal Data Academy to Train 120 Employees"
      subtitle="A custom, role-specific curriculum — from analytics fundamentals to ML deployment — trained employees across 6 departments in 12 months, taking data usage from 15% to 68% of the workforce."
      heroImage="/images/cases/retailer-data-academy-hero.jpg"
      metrics={[
        { value: "120", label: "Employees Trained" },
        { value: "68%", label: "Using Data Daily (from 15%)" },
        { value: "In-House", label: "Campaign Analytics, No Agencies" }
      ]}
      clientContextTitle="Tools, But No Capability"
      clientContextIntro="A regional retail chain with 85 stores recognized data literacy as a competitive differentiator. It had invested in a modern data warehouse and BI tools — but adoption stayed low, with only 15% of employees using data to inform decisions."
      clientContextBody="The problem wasn't technology, it was capability. Store managers couldn't interpret sales dashboards, merchandising couldn't build custom reports, and marketing relied on external agencies for campaign analysis. Leadership wanted a data-driven culture, but one-off training hadn't worked: employees attended generic webinars, forgot the content within weeks, and reverted to gut-feel decisions. The company needed a structured, ongoing program that built real capability."
      clientProfile={{
        industry: "Regional Retail Chain",
        companySize: "85 Stores",
        projectDuration: "12-Month Program",
        additionalInfo: "6 Departments",
        additionalLabel: "Coverage"
      }}
      challengeTitle="Why Data Went Unused"
      challenges={[
        {
          icon: EyeOff,
          title: "Only 15% used data",
          description: "Despite a modern warehouse and BI tools, most decisions stayed gut-feel."
        },
        {
          icon: Users,
          title: "A capability gap",
          description: "Managers couldn't read dashboards and merchandising couldn't build reports."
        },
        {
          icon: DollarSign,
          title: "Reliance on agencies",
          description: "Marketing paid external agencies for every campaign analysis internal teams couldn't do."
        },
        {
          icon: Repeat,
          title: "One-off training failed",
          description: "Generic webinars were forgotten within weeks, with no lasting behavior change."
        }
      ]}
      approachTitle="A Tiered, Role-Specific Academy"
      approachIntro="NEXDYNE designed a multi-tier Data Academy with role-specific learning paths over 12 months — curricula tailored to store operations, merchandising, marketing, finance, supply chain, and IT."
      steps={[
        {
          step: "01",
          title: "Data literacy for everyone",
          description: "A 4-week foundation covered data concepts, dashboard interpretation, and Excel analytics using real store data."
        },
        {
          step: "02",
          title: "Self-service analytics for business users",
          description: "An 8-week program taught Looker, SQL basics, and report building so teams answered their own questions."
        },
        {
          step: "03",
          title: "Advanced analytics for the data team",
          description: "A 12-week intensive covered Python, statistics, A/B testing, and ML — capstoned by deploying a production model."
        },
        {
          step: "04",
          title: "Make it self-sustaining",
          description: "Blended live workshops, self-paced modules, and train-the-trainer sessions built internal instructors to run the academy after the engagement."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingUp,
          value: "68%",
          label: "Using data daily",
          detail: "Up from 15%, cutting store labor costs 8% via traffic forecasts"
        },
        {
          icon: BookOpen,
          value: "250+",
          label: "Dashboards built by business users",
          detail: "Reducing dependence on the central data team"
        },
        {
          icon: GraduationCap,
          value: "In-house",
          label: "Campaign analytics, agency spend eliminated",
          detail: "As the academy became a permanent talent-development fixture"
        }
      ]}
      quote="The Data Academy transformed our organization. We went from data-averse to data-native in 12 months. Employees who were intimidated by spreadsheets now build ML models. This is the best talent investment we've made."
      quoteAuthor="Chief People Officer"
      quoteRole="Regional Retail Chain"
      relatedStudies={[
        {
          title: "Upskilling 50 Analysts With a SQL & Python Bootcamp",
          metric: "60%",
          label: "smaller IT backlog",
          link: "/cases/financial-services-sql-bootcamp",
          image: "/images/cases/financial-services-sql-bootcamp-hero.jpg"
        },
        {
          title: "Training 200 Clinicians to Build Their Own Dashboards",
          metric: "45%",
          label: "better visibility",
          link: "/cases/healthcare-dashboard-training",
          image: "/images/cases/healthcare-dashboard-training-hero.jpg"
        }
      ]}
      ctaTitle="Ready to build a data-driven culture?"
      ctaDescription="Let's talk about what a role-based data academy could do for your organization."
    />
  );
}

export default RetailerDataAcademy;
