import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function TechABM() {
  return (
    <CaseStudyArticle
      industry="Growth, Marketing & Sales"
      industryHref="/capabilities/growth-marketing-sales"
      title="Account-Based Marketing Lands Enterprise Clients"
      subtitle="How a technology company implemented ABM to successfully move upmarket and win enterprise deals"
      client="A 140-employee technology company with $42M in annual revenue, selling workflow automation software to mid-size businesses. The company wanted to expand into enterprise accounts but lacked the marketing approach to reach larger buyers."
      challenge="The company's inbound marketing approach wasn't reaching enterprise decision-makers. Larger companies had longer, more complex buying cycles. Multiple stakeholders needed to be engaged and aligned. The sales team lacked the relationships and credibility to access C-suite executives."
      metrics={[
        { value: "12", label: "Enterprise Wins" },
        { value: "4x", label: "Deal Size Increase" },
        { value: "$18M", label: "Pipeline Created" },
        { value: "65%", label: "Target Account Engagement" },
      ]}
      relatedCaseStudies={[
        {
          title: "Digital Marketing Transformation Doubles Lead Generation",
          href: "/capabilities/growth-marketing-sales/case-studies/b2b-digital-marketing",
          industry: "Professional Services"
        },
        {
          title: "Sales Process Optimization Increases Win Rate",
          href: "/capabilities/growth-marketing-sales/case-studies/software-sales-optimization",
          industry: "Technology"
        },
        {
          title: "Customer Retention Program Reduces Churn by 40%",
          href: "/capabilities/growth-marketing-sales/case-studies/subscription-retention",
          industry: "Media & Entertainment"
        }
      ]}
    >
      <h2>Defining the Target Account Strategy</h2>
      <p>
        We developed a rigorous approach to identifying and prioritizing target accounts. We analyzed firmographic and technographic data to identify ideal enterprise profiles. We scored accounts based on fit, intent signals, and relationship strength. We created tiered account lists with differentiated investment levels. We also aligned sales and marketing on target account selection and coverage.
      </p>

      <h2>Building Account Intelligence</h2>
      <p>
        We established deep intelligence on each target account. We mapped organizational structures and identified key stakeholders. We researched business priorities, challenges, and strategic initiatives. We monitored intent signals and trigger events. We also created account plans that documented insights and engagement strategies.
      </p>

      <h2>Developing Personalized Content</h2>
      <p>
        We created content tailored to enterprise buyer needs and concerns. We developed industry-specific use cases and ROI models. We created executive-level content addressing strategic priorities. We built personalized landing pages for top-tier accounts. We also produced thought leadership that established credibility with C-suite audiences.
      </p>

      <h2>Orchestrating Multi-Channel Engagement</h2>
      <p>
        We implemented coordinated campaigns across multiple channels. We launched targeted advertising to reach stakeholders at target accounts. We implemented personalized email sequences for different personas. We coordinated sales outreach with marketing air cover. We also hosted exclusive events and roundtables for enterprise executives.
      </p>

      <h2>Measuring and Optimizing</h2>
      <p>
        We built measurement systems designed for ABM success metrics. We tracked account engagement across all touchpoints. We measured pipeline creation and velocity by account tier. We analyzed which tactics drove the highest engagement. We also established regular reviews to optimize account coverage and investment.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Account selection is the foundation of ABM success</li>
        <li>Deep account intelligence enables personalization at scale</li>
        <li>Sales and marketing alignment is essential for enterprise selling</li>
        <li>ABM metrics differ from traditional demand generation</li>
      </ul>
    </CaseStudyArticle>
  );
}
