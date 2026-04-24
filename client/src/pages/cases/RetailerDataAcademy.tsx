import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function RetailerDataAcademy() {
  return (
    <CaseStudyTemplate
      client="Regional Retail Chain"
      industry="Retail · Data Strategy"
      title="Retailer Builds Internal Data Academy to Train 120 Employees"
      subtitle="Custom curriculum covering analytics fundamentals through ML deployment trained employees across 6 departments in 12 months, creating a data-literate organization."
      heroImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80"
      challenge={`A regional retail chain with 85 stores and $450M annual revenue recognized that data literacy was becoming a competitive differentiator. While they had invested in a modern data warehouse and BI tools, adoption remained low—only 15% of employees used data to inform decisions.

The problem wasn't technology—it was capability. Store managers didn't know how to interpret sales dashboards. Merchandising teams couldn't build custom reports. Marketing relied on external agencies for campaign analysis because internal teams lacked analytics skills.

Leadership wanted to build a "data-driven culture," but one-off training sessions hadn't worked. Employees attended generic webinars, forgot the content within weeks, and reverted to gut-feel decision-making. The company needed a structured, ongoing program that built real capability.`}
      solution={`NEXDYNE designed a multi-tier "Data Academy" with role-specific learning paths spanning 12 months. Rather than one-size-fits-all training, we created curricula tailored to job functions—store operations, merchandising, marketing, finance, supply chain, and IT.

Tier 1 (Data Literacy, All Employees): A 4-week foundation covering data concepts, dashboard interpretation, and basic Excel analytics, delivered as 1-hour weekly modules with practical exercises using real store performance data. Tier 2 (Self-Service Analytics, Business Users): An 8-week program teaching Looker, SQL basics, and report building. Store managers learned to create custom sales reports; merchandisers built inventory dashboards; marketers analyzed campaign performance independently. Tier 3 (Advanced Analytics, Analysts & Data Team): A 12-week intensive covering Python, statistical analysis, A/B testing, and ML fundamentals, with a final capstone requiring participants to deploy a production ML model that improves business KPIs.

The blended delivery model combined live workshops (monthly), self-paced online modules (weekly), and hands-on projects (continuous). NEXDYNE provided train-the-trainer sessions to build internal instructors who could sustain the academy after the engagement concluded.`}
      impact={`One year post-launch, employee data usage increased from 15% to 68% of the workforce making data-informed daily decisions. Store managers now optimize staffing schedules using traffic forecasts (reducing labor costs 8%). Merchandisers identify slow-moving inventory 3 weeks earlier, minimizing markdowns. Marketing runs A/B tests in-house instead of paying agencies $50K per campaign.

250+ custom dashboards and reports were built by business users, reducing dependence on the data team for standard analyses. Annual savings from reduced external analytics consulting reached $1.2M. The Data Academy became a permanent fixture in the talent development program—new hires complete Tier 1 during onboarding, and 3 Tier 3 graduates were promoted into newly created "Analytics Lead" roles.`}
      metrics={[
        { value: "120", label: "Employees trained across 6 departments" },
        { value: "68%", label: "Employees using data daily (from 15%)" },
        { value: "$1.2M", label: "Annual savings from reduced consulting" }
      ]}
      quote={{
        text: "The Data Academy transformed our organization. We went from data-averse to data-native in 12 months. Employees who were intimidated by spreadsheets now build ML models. This is the best talent investment we've made.",
        author: "Chief People Officer",
        role: "Regional Retail Chain"
      }}
      tags={["Retail", "Data Strategy", "Training", "Operations"]}
      relatedCapability={{
        title: "Data Transformation",
        link: "/capabilities/data-transformation"
      }}
    />
  );
}
