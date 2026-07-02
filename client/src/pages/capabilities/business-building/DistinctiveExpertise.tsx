// TODO: David — confirm Distinctive Expertise experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Distinctive Expertise hub.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function DistinctiveExpertise() {
  return (
    <CapabilityHubTemplate
      hubName="Distinctive Expertise & Proven Methodologies"
      slug="distinctive-expertise"
      heroSubtitle="Access industry-specific playbooks, growth strategy templates, and best-practice repositories refined across hundreds of mid-market transformations — institutional knowledge without the Fortune 500 overhead."
      heroImage="/images/distinctive-expertise-abstract.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "200+", label: "Transformation playbooks across 12 core industries" },
        // TODO: confirm with practice lead before publish
        { number: "65%", label: "Faster time-to-value vs. custom approaches" },
        // TODO: confirm with practice lead before publish
        { number: "12", label: "Industry-specific frameworks refined from real implementations" },
      ]}
      ambitions={[
        {
          title: "Stop reinventing the wheel",
          description:
            "Replace months of custom framework development with proven playbooks adapted to your industry — the institutional knowledge of a Fortune 500 strategy team, on day one.",
        },
        {
          title: "Move with confidence in your industry",
          description:
            "Use playbooks built on real wins (and real failures) in your sector — so decisions are anchored in evidence about what actually works for companies like yours.",
        },
        {
          title: "Tailor proven frameworks to your context",
          description:
            "Customize standard methodologies to your competitive landscape and capability set without losing the discipline that makes them work in the first place.",
        },
        {
          title: "Build the muscle in-house",
          description:
            "Train your team to use and adapt our methodologies independently — so the capability stays after our engagement ends, instead of walking out the door with a consultant.",
        },
        {
          title: "Benchmark against the right peers",
          description:
            "See where you stand relative to companies that have done what you're trying to do — with data and patterns from our database, not anecdotes from one boardroom.",
        },
        {
          title: "Keep playbooks living and learning",
          description:
            "Update your frameworks as you implement them, capturing what's working in your context so the methodology evolves with your business.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Distinctive Expertise ambition →"
      howWeCanHelp={[
        {
          title: "Playbook Selection",
          description:
            "We match your business challenge to our library of 200+ proven playbooks, selecting the frameworks most relevant to your industry and growth stage.",
          href: "/capabilities/business-building/distinctive-expertise/playbook-selection",
        },
        {
          title: "Framework Customization",
          description:
            "We adapt our standard methodologies to your specific context, competitive landscape, and organizational capabilities.",
          href: "/capabilities/business-building/distinctive-expertise/framework-customization",
        },
        {
          title: "Implementation Support",
          description:
            "Our experts guide your team through playbook execution, providing coaching and troubleshooting at each phase.",
          href: "/capabilities/business-building/distinctive-expertise/implementation-support",
        },
        {
          title: "Knowledge Transfer",
          description:
            "We train your team to use and adapt our methodologies independently, building internal capability for future initiatives.",
          href: "/capabilities/business-building/distinctive-expertise/knowledge-transfer",
        },
        {
          title: "Benchmark Analysis",
          description:
            "We compare your performance against our database of similar transformations, identifying gaps and opportunities.",
          href: "/capabilities/business-building/distinctive-expertise/benchmark-analysis",
        },
        {
          title: "Continuous Refinement",
          description:
            "We update your playbooks based on implementation learnings, ensuring methodologies evolve with your business.",
          href: "/capabilities/business-building/distinctive-expertise/continuous-refinement",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Context Assessment",
          body: "We assess your industry context, competitive position, and growth objectives to select the most relevant playbooks and frameworks. This diagnostic phase ensures we deploy methodologies that align with your specific situation rather than forcing generic approaches.",
        },
        {
          step: "02",
          title: "Framework Deployment",
          body: "We deploy selected frameworks, adapting templates to your specific context while maintaining their proven structure. Your team receives training on framework application, ensuring they can leverage methodologies independently after our engagement concludes.",
        },
        {
          step: "03",
          title: "Optimization & Knowledge Transfer",
          body: "We refine frameworks based on initial results, document lessons learned, and establish continuous improvement processes. Your team operates independently with full ownership of methodologies and the ability to adapt them as conditions evolve.",
        },
      ]}
      featuredCases={[
        {
          slug: "wealth-adjacent",
          title: "Financial Services Firm Enters Adjacent Market",
          industry: "Financial Services · Business Building",
          metric: "65%",
          image: "/images/capabilities/cap-venturing.jpg",
        },
        {
          slug: "consulting-saas",
          title: "Professional Services Firm Builds SaaS Product",
          industry: "Professional Services · Business Building",
          metric: "200+",
          image: "/images/capabilities/cap-lightbulb-idea.jpg",
        },
        {
          slug: "distributor-marketplace",
          title: "Regional Distributor Launches Digital Marketplace",
          industry: "Distribution · Business Building",
          metric: "12",
          image: "/images/capabilities/cap-celebrate.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/growth-marketing-sales", name: "Growth, Marketing & Sales" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Distinctive Expertise lead"
    />
  );
}
