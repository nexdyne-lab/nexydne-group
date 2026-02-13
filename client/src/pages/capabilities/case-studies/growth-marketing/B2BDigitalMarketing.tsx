import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function B2BDigitalMarketing() {
  return (
    <CaseStudyArticle
      industry="Growth, Marketing & Sales"
      industryHref="/capabilities/growth-marketing-sales"
      title="Digital Marketing Transformation Doubles Lead Generation"
      subtitle="How a B2B services company modernized their marketing to double lead volume while reducing customer acquisition costs"
      client="A 150-employee B2B professional services company with $45M in annual revenue, providing consulting and implementation services to mid-size businesses. The company had relied primarily on referrals and events for lead generation."
      challenge="The company's traditional marketing approach was no longer sufficient to support growth targets. Referrals were declining as key contacts retired or changed roles. Event-based marketing was expensive and unpredictable. The marketing team lacked digital capabilities, and the website generated fewer than 50 leads per month."
      metrics={[
        { value: "2x", label: "Lead Volume" },
        { value: "35%", label: "Lower CAC" },
        { value: "150+", label: "Monthly Leads" },
        { value: "42%", label: "Conversion Rate" },
      ]}
      relatedCaseStudies={[
        {
          title: "Sales Process Optimization Increases Win Rate",
          href: "/capabilities/growth-marketing-sales/case-studies/software-sales-optimization",
          industry: "Technology"
        },
        {
          title: "Account-Based Marketing Lands Enterprise Clients",
          href: "/capabilities/growth-marketing-sales/case-studies/tech-abm",
          industry: "Technology"
        },
        {
          title: "Customer Retention Program Reduces Churn by 40%",
          href: "/capabilities/growth-marketing-sales/case-studies/subscription-retention",
          industry: "Media & Entertainment"
        }
      ]}
    >
      <h2>Assessing the Marketing Foundation</h2>
      <p>
        Our diagnostic revealed a marketing function that had underinvested in digital capabilities for years. The website was outdated and not optimized for search engines. Content was limited to service descriptions with no thought leadership. Email marketing was sporadic and not integrated with the CRM. Social media presence was minimal and unfocused.
      </p>

      <h2>Building the Digital Foundation</h2>
      <p>
        We started by establishing the infrastructure for modern B2B marketing. We redesigned the website with conversion optimization and SEO best practices. We implemented marketing automation integrated with the CRM. We established analytics and attribution to measure performance. We also created a content management workflow for consistent publishing.
      </p>

      <h2>Developing Thought Leadership Content</h2>
      <p>
        Content became the engine for lead generation. We interviewed subject matter experts to identify unique insights and perspectives. We developed a content calendar aligned with buyer journey stages. We created cornerstone content pieces that established expertise in key areas. We also repurposed content across formats—blogs, whitepapers, webinars, and social posts.
      </p>

      <h2>Implementing Demand Generation</h2>
      <p>
        With content and infrastructure in place, we launched integrated demand generation campaigns. We implemented SEO strategies that improved organic rankings for target keywords. We launched LinkedIn advertising targeting decision-makers at ideal customer profiles. We created email nurture sequences that moved leads through the funnel. We also established webinar programs that generated qualified leads at scale.
      </p>

      <h2>Optimizing and Scaling</h2>
      <p>
        Continuous optimization improved performance over time. We implemented A/B testing on landing pages and email campaigns. We refined targeting based on conversion data and sales feedback. We expanded successful campaigns and retired underperformers. We also built dashboards that provided real-time visibility into marketing performance.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Digital infrastructure must be established before launching campaigns</li>
        <li>Thought leadership content differentiates B2B marketing</li>
        <li>Integration between marketing automation and CRM is essential</li>
        <li>Continuous optimization compounds results over time</li>
      </ul>
    </CaseStudyArticle>
  );
}
