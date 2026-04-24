import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function B2BDigitalMarketing() {
  return (
    <CaseStudyTemplate
      client="B2B Professional Services Company"
      industry="Professional Services · Growth Marketing"
      title="Digital Marketing Transformation Doubles Lead Generation"
      subtitle="How a B2B services company modernized their marketing to double lead volume while reducing customer acquisition costs."
      heroImage="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1600&q=80"
      challenge={`The company's traditional marketing approach was no longer sufficient to support growth targets. Referrals were declining as key contacts retired or changed roles. Event-based marketing was expensive and unpredictable. The marketing team lacked digital capabilities, and the website generated fewer than 50 leads per month.

A 150-employee B2B professional services company with $45M in annual revenue had relied primarily on referrals and events for lead generation. The diagnostic revealed a marketing function that had underinvested in digital capabilities for years: an outdated website not optimized for search engines, content limited to service descriptions with no thought leadership, sporadic email marketing not integrated with the CRM, and minimal social media presence.`}
      solution={`NEXDYNE established the infrastructure for modern B2B marketing—redesigning the website with conversion optimization and SEO best practices, implementing marketing automation integrated with the CRM, establishing analytics and attribution to measure performance, and creating a content management workflow for consistent publishing.

Thought leadership content became the engine for lead generation. Subject matter experts were interviewed to identify unique insights, a content calendar was developed aligned with buyer journey stages, and cornerstone content established expertise in key areas. Content was repurposed across formats—blogs, whitepapers, webinars, and social posts. Integrated demand generation campaigns combined SEO for organic rankings, LinkedIn advertising targeting decision-makers at ideal customer profiles, email nurture sequences, and webinar programs generating qualified leads at scale. Continuous A/B testing, targeting refinement, and performance dashboards optimized results over time.`}
      impact={`Monthly leads more than doubled from fewer than 50 to 150+, driven by organic search, paid campaigns, and content downloads. Customer acquisition cost decreased 35% as digital channels proved more efficient than events and referral programs. Lead-to-opportunity conversion rate reached 42% as better qualification at the top of funnel produced more sales-ready pipeline.

The marketing function transformed from a cost center dependent on unpredictable referrals into a reliable, scalable growth engine. The company's new digital presence and thought leadership content established credibility with prospects before the first sales conversation, shortening sales cycles and improving close rates for the sales team.`}
      metrics={[
        { value: "2x", label: "Lead volume" },
        { value: "35%", label: "Lower CAC" },
        { value: "150+", label: "Monthly leads" },
        { value: "42%", label: "Conversion rate" }
      ]}
      tags={["Professional Services", "Digital Marketing", "Lead Generation", "Growth"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}
