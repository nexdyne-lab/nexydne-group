
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function PortfolioAnalytics() {
  return (
    <ServiceDetailTemplate
      hubName="Portfolio Optimization"
      hubSlug="portfolio-optimization"
      hubHref="/capabilities/growth-marketing-sales/portfolio-optimization"
      serviceName="Portfolio Analytics"
      serviceSlug="portfolio-analytics"
      heroSubtitle="Build analytics capabilities that track portfolio performance. Measure true profitability and identify optimization opportunities."
      heroImage="/images/capabilities/cap-strategy-spheres.jpg"
      heroFocal="50% 45%"
      experienceStats={[
        { number: "40+", label: "Portfolio Analytics engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate portfolio analytics from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, portfolio analytics compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Portfolio Optimization team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where portfolio analytics earns its keep.",
        },
        {
          step: "02",
          title: "Design for production from day one",
          body: "We build with deployment, governance, and change management in mind from the first sprint — so the proof of concept is the v1, not a discardable demo.",
        },
        {
          step: "03",
          title: "Run, learn, scale",
          body: "We instrument every release, capture feedback from real users, and lock in what is working. The system you ship in month three is meaningfully better by month nine.",
        },
      ]}
      outcomes={[
        "A clear, prioritized roadmap that ties portfolio analytics to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "hotel-revenue-transformation", title: "Lifting hotel revenue per room by 18%", industry: "Travel & Hospitality", metric: "18%", image: "/images/cases/hotel-revenue-transformation-hero.jpg" },
        { slug: "retail-assortment-optimization", title: "Tailoring store assortments to lift a retailer's sales", industry: "Retail", metric: "12%", image: "/images/cases/retail-assortment-optimization-hero.jpg" },
        { slug: "insurance-ai-underwriting", title: "Quoting commercial business in a day, not a week", industry: "Insurance", metric: "40%", image: "/images/cases/insurance-ai-underwriting-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "portfolio-strategy", name: "Portfolio Strategy", href: "/capabilities/growth-marketing-sales/portfolio-optimization/portfolio-strategy" },
        { slug: "sku-rationalization", name: "SKU Rationalization", href: "/capabilities/growth-marketing-sales/portfolio-optimization/sku-rationalization" },
        { slug: "assortment-optimization", name: "Assortment Optimization", href: "/capabilities/growth-marketing-sales/portfolio-optimization/assortment-optimization" },
      ]}
      ctaLeadName="Talk to our Portfolio Optimization lead"
    />
  );
}
