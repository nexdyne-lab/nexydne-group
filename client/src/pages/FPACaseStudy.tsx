import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileSpreadsheet, Clock, HelpCircle, LineChart, GitBranch, Layers, Gauge, DollarSign } from "lucide-react";

export function FPACaseStudy() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Scenario Planning That Headed Off a Costly Hiring Misstep | SaaS FP&A Case Study"
      seoDescription="A growth-stage SaaS company ran static Excel budgets that went stale in weeks and couldn't model churn or hiring scenarios. Driver-based FP&A cut forecast error 35% and headed off a costly hiring misstep."
      canonical="/case-studies/fpa-scenario-planning"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How Scenario Planning Helped a SaaS Company Navigate Uncertainty"
      subtitle="A growth-stage B2B SaaS company moved from reactive budgeting to driver-based scenario modeling — improving forecast accuracy 35%, accelerating decisions by 10 days, and heading off a hiring plan that would have shortened runway."
      heroImage="/images/capabilities/cap-presenting-graphs.jpg"
      metrics={[
        { value: "35%", label: "Better Forecast Accuracy" },
        { value: "10 days", label: "Faster Strategic Response" },
        { value: "< 2 days", label: "Monthly Forecast Prep" }
      ]}
      clientContextTitle="Budgets Obsolete in Weeks"
      clientContextIntro="A growth-stage B2B SaaS company providing marketing-automation software — 85–110 employees — was scaling from product-market fit to market leadership post-Series B. But its financial planning hadn't evolved: static annual Excel budgets were disconnected from real-time drivers and obsolete within weeks of approval."
      clientContextBody="Revenue forecasts lived in the CRM, expense budgets in Excel, and actuals in the accounting system — consolidating for variance analysis took 5–7 days a month, leaving no time for strategy. Leadership couldn't answer critical questions: what happens if churn rises 2%? How does a 20% sales-hiring acceleration hit runway? Board meetings explained historical variances from outdated budgets instead of discussing strategic options."
      clientProfile={{
        industry: "B2B SaaS Company",
        companySize: "85–110 Employees",
        projectDuration: "Driver-Based Model",
        additionalInfo: "3-Scenario Framework",
        additionalLabel: "Planning"
      }}
      challengeTitle="Why Planning Fell Behind"
      challenges={[
        {
          icon: FileSpreadsheet,
          title: "Static Excel budgets",
          description: "Annual budgets disconnected from real-time drivers went obsolete within weeks."
        },
        {
          icon: Clock,
          title: "5–7 day monthly close",
          description: "Consolidating CRM, Excel, and accounting data left little time for strategic analysis."
        },
        {
          icon: HelpCircle,
          title: "Unanswerable what-ifs",
          description: "Leadership couldn't model churn increases or hiring changes against cash runway."
        },
        {
          icon: LineChart,
          title: "Backward-looking board reviews",
          description: "Meetings explained past variances instead of weighing forward options."
        }
      ]}
      approachTitle="Driver-Based Modeling and Rolling Forecasts"
      approachIntro="NEXDYNE implemented a driver-based revenue model integrating CRM pipeline with historical conversion metrics — decomposing revenue into levers and replacing the annual budget with a rolling forecast."
      steps={[
        {
          step: "01",
          title: "Model the real drivers",
          description: "Revenue decomposed into lead volume, stage conversion, contract value, and expansion/churn, revealing which levers moved outcomes most."
        },
        {
          step: "02",
          title: "Unify the data",
          description: "Automated pipelines connected CRM, accounting, and HR into one analytical layer, cutting close-to-forecast from 7 days to under 2."
        },
        {
          step: "03",
          title: "Plan in three scenarios",
          description: "A Base, Upside, and Downside framework with sensitivity analysis let leadership stress-test decisions before committing resources."
        },
        {
          step: "04",
          title: "Forecast on a rolling basis",
          description: "A rolling 18-month forecast updated quarterly turned budgeting into a continuous strategic dialogue, with redesigned board reporting."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "±12%",
          label: "Forecast error",
          detail: "Down from ±18%, a 35% accuracy improvement"
        },
        {
          icon: DollarSign,
          value: "10 days",
          label: "Faster strategic decisions",
          detail: "Including deferring a hiring plan that barely extended runway"
        },
        {
          icon: Layers,
          value: "< 2 days",
          label: "Monthly forecast prep",
          detail: "Down from 7, and the foundation for a successful Series C"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "A Series B Raise at an 8x Revenue Multiple",
          metric: "8x",
          label: "revenue multiple",
          link: "/capabilities/strategy-corporate-finance/case-studies/saas-series-b",
          image: "/images/capabilities/cap-celebrate.jpg"
        },
        {
          title: "FP&A Transformation That Cut Monthly Close to 5 Days",
          metric: "5 days",
          label: "monthly close",
          link: "/capabilities/strategy-corporate-finance/case-studies/distribution-fpa",
          image: "/images/industries/fin-monitors.jpg"
        }
      ]}
      ctaTitle="Ready to plan for what's next, not what's past?"
      ctaDescription="Let's talk about what driver-based scenario planning could do for your decision-making."
    />
  );
}

export default FPACaseStudy;
