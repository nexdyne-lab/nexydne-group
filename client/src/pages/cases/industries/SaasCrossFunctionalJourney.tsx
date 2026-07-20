import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Users, AlertTriangle, BarChart3, TrendingDown, CheckCircle } from "lucide-react";

export default function SaasCrossFunctionalJourney() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Journey Maps Unify Product, Support, CS Around 6 Moments of Truth | Customer Journey Case Study"
      seoDescription="A B2B SaaS company had product, support, and CS running three different mental models of the customer journey. Persona-level journey maps converged them on six moments of truth and cut renewal escalations a third."
      canonical="/cases/saas-cross-functional-journey"
      industry="B2B SaaS"
      industryLink="/industries/technology-media-telecom"
      title="How a B2B SaaS Company Aligned Three Teams Around Six Moments of Truth"
      subtitle="Product thought in feature adoption, support in tickets, and CS in renewals — three teams, three versions of the customer. Shared journey maps gave them one, and changed how CS acted."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "1/3", label: "Fewer Escalations" },
        { value: "6", label: "Moments of Truth" },
        { value: "3 → 1", label: "Mental Models" },
        { value: "Persona", label: "Level Maps" }
      ]}
      clientContextTitle="Three Teams, Three Customers"
      clientContextIntro="A B2B SaaS company had three teams that all served the same customers and understood them completely differently. Product thought about the customer in terms of feature adoption, support in terms of tickets, and customer success in terms of renewal. Each was right within its own frame, and together they had no shared picture."
      clientContextBody="The fragmentation had real consequences. Because the three teams operated on different mental models, they missed the moments that actually mattered to the customer — the points in the relationship where satisfaction and renewal were won or lost. Customer success, in particular, triggered its outreach on signals that did not reliably predict trouble, so renewals were escalating into crises that could have been prevented. The company needed persona-level journey maps that converged the three teams on a shared, small set of moments of truth — so everyone was watching, and acting on, the same critical points."
      clientProfile={{
        industry: "B2B SaaS Company",
        companySize: "~2,000 Enterprise Customers",
        projectDuration: "4 Months",
        additionalInfo: "Cross-Functional Journey Maps",
        additionalLabel: "Customer Operations"
      }}
      challengeTitle="Why the Teams Missed What Mattered"
      challenges={[
        { icon: Target, title: "Three Mental Models", description: "Product, support, and CS each understood the customer through a different, partial frame." },
        { icon: Users, title: "No Shared Picture", description: "Each team was right in its own view but there was no converged picture of the customer." },
        { icon: AlertTriangle, title: "Renewals Escalating to Crises", description: "CS triggered outreach on weak signals, so preventable problems became renewal crises." },
        { icon: BarChart3, title: "Missing the Moments That Matter", description: "The teams missed the points where satisfaction and renewal were actually decided." }
      ]}
      approachTitle="Converge on Moments of Truth"
      approachIntro="We built persona-level journey maps that converged product, support, and customer success on six shared moments of truth — changing which signals trigger CS outreach and cutting unplanned renewal escalations by a third."
      steps={[
        { step: "01", title: "Mapping the Journey by Persona", description: "We built persona-level journey maps that captured the real customer experience across the three teams' domains." },
        { step: "02", title: "Identifying Six Moments of Truth", description: "We converged the teams on six shared moments where the relationship is genuinely won or lost." },
        { step: "03", title: "Retriggering CS Outreach", description: "We changed which signals trigger customer-success outreach to the moments of truth, so intervention happened when it mattered." },
        { step: "04", title: "Aligning the Three Teams", description: "We gave product, support, and CS one shared view, so they worked from the same picture of the customer." }
      ]}
      resultsTitle="One View, Fewer Crises"
      results={[
        { icon: TrendingDown, value: "1/3", label: "Fewer escalations", detail: "Unplanned renewal escalations" },
        { icon: Target, value: "6", label: "Moments of truth", detail: "Shared across teams" },
        { icon: CheckCircle, value: "3 → 1", label: "Mental models", detail: "Converged into one" },
        { icon: Users, value: "Aligned", label: "Product, support, CS", detail: "Same view of the customer" }
      ]}
      quote="Our product, support, and customer-success teams each had a completely different idea of the customer, so we kept missing the moments that actually decide a renewal. Shared journey maps converged everyone on six moments of truth and changed when CS reaches out. Preventable renewal crises dropped by a third — because for the first time we were all watching the same thing."
      quoteAuthor="VP of Customer Success"
      quoteRole="B2B SaaS company"
      relatedStudies={[
        { title: "How an E-Commerce Operator Lifted Revenue per Customer 21% With Real Personalization", metric: "21%", label: "more revenue per customer", link: "/cases/ecommerce-personalization-execution", image: "/images/capabilities/cap-retail-data.jpg" },
        { title: "How a Hospitality Loyalty Program Raised Booking Conversion 14%", metric: "14%", label: "higher booking conversion", link: "/cases/hospitality-personalization-execution", image: "/images/cases/hospitality-personalization-execution-hero.jpg" }
      ]}
      ctaTitle="Do your teams each see a different customer?"
      ctaDescription="Let's converge them on shared moments of truth and act where it matters."
    />
  );
}
