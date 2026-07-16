import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Globe, MailX, Users, Wrench, PenLine, Megaphone, Target } from "lucide-react";

export function B2BDigitalMarketing() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Digital Marketing Transformation That Doubled Lead Generation | B2B Case Study"
      seoDescription="A $45M B2B services firm relied on fading referrals and events, generating under 50 leads a month. A modern digital engine doubled leads to 150+ and cut acquisition cost 35%."
      canonical="/capabilities/growth-marketing-sales/case-studies/b2b-digital-marketing"
      industry="Professional Services"
      industryLink="/industries"
      title="How a B2B Services Firm Doubled Lead Generation"
      subtitle="A B2B professional-services company modernized its marketing — a rebuilt website, automation, and thought-leadership content — doubling monthly leads to 150+ while cutting acquisition cost 35%."
      heroImage="/images/capabilities/cap-mobile-woman.jpg"
      metrics={[
        { value: "2x", label: "Lead Volume" },
        { value: "35%", label: "Lower CAC" },
        { value: "150+", label: "Monthly Leads" },
        { value: "42%", label: "Lead-to-Opportunity Rate" }
      ]}
      clientContextTitle="Referrals Running Dry"
      clientContextIntro="A 150-employee B2B professional-services company with $45M in revenue had relied primarily on referrals and events for leads. But referrals were declining as key contacts retired or changed roles, and event marketing was expensive and unpredictable."
      clientContextBody="The diagnostic revealed a marketing function that had underinvested in digital for years: an outdated, non-SEO website generating under 50 leads a month, content limited to service descriptions with no thought leadership, sporadic email disconnected from the CRM, and minimal social presence. The team lacked digital capabilities entirely."
      clientProfile={{
        industry: "B2B Professional Services",
        companySize: "$45M Revenue",
        projectDuration: "Full-Funnel Build",
        additionalInfo: "SEO + Automation",
        additionalLabel: "Infrastructure"
      }}
      challengeTitle="Why Growth Stalled"
      challenges={[
        {
          icon: TrendingDown,
          title: "Declining referrals",
          description: "Retiring and departing contacts eroded the firm's primary lead source."
        },
        {
          icon: Globe,
          title: "An invisible website",
          description: "An outdated, non-SEO site generated fewer than 50 leads a month."
        },
        {
          icon: MailX,
          title: "Disconnected marketing",
          description: "Sporadic email wasn't integrated with the CRM, and social presence was minimal."
        },
        {
          icon: Users,
          title: "No digital capability",
          description: "The marketing team lacked the skills to run modern demand generation."
        }
      ]}
      approachTitle="A Modern B2B Marketing Engine"
      approachIntro="NEXDYNE built the infrastructure for modern B2B marketing and made thought-leadership content the engine — turning an unpredictable referral function into a scalable growth machine."
      steps={[
        {
          step: "01",
          title: "Rebuild the foundation",
          description: "A redesigned, conversion-optimized, SEO-ready website with CRM-integrated automation, analytics, and attribution."
        },
        {
          step: "02",
          title: "Build thought leadership",
          description: "SME interviews surfaced unique insights, mapped to buyer-journey stages and repurposed across blogs, whitepapers, and webinars."
        },
        {
          step: "03",
          title: "Run integrated demand gen",
          description: "SEO, LinkedIn advertising to ICP decision-makers, email nurture, and webinar programs generated qualified leads at scale."
        },
        {
          step: "04",
          title: "Optimize continuously",
          description: "A/B testing, targeting refinement, and performance dashboards improved results over time."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Megaphone,
          value: "150+",
          label: "Monthly leads",
          detail: "More than double the previous fewer-than-50"
        },
        {
          icon: Target,
          value: "42%",
          label: "Lead-to-opportunity rate",
          detail: "From better top-of-funnel qualification"
        },
        {
          icon: PenLine,
          value: "35%",
          label: "Lower acquisition cost",
          detail: "As digital outperformed events and referrals"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Landing Enterprise Clients With Account-Based Marketing",
          metric: "$18M",
          label: "pipeline created",
          link: "/capabilities/growth-marketing-sales/case-studies/tech-abm",
          image: "/images/industries/tech-datacenter.jpg"
        },
        {
          title: "Predictive Lead Scoring That Lifted Conversion 20%",
          metric: "20%",
          label: "higher conversion",
          link: "/cases/marketing-conversion-boost",
          image: "/images/capabilities/cap-conference-data.jpg"
        }
      ]}
      ctaTitle="Ready to build a real demand engine?"
      ctaDescription="Let's talk about what modern B2B marketing could do for your lead volume and CAC."
    />
  );
}

export default B2BDigitalMarketing;
