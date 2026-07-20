import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, BarChart3, DollarSign, Shield, CheckCircle } from "lucide-react";

export default function IndustrialDataMonetization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Industrial Holding Company Monetizes Data as New Revenue Line | Data Strategy Case Study"
      seoDescription="An industrial holding company sat on valuable operational data. We packaged anonymized data into a productized offering that became a measurable third revenue stream within 18 months."
      canonical="/cases/industrial-data-monetization"
      industry="Industrial"
      industryLink="/industries/manufacturing"
      title="How an Industrial Holding Company Turned Its Data Into a Third Revenue Stream"
      subtitle="The company generated operational data that its markets would pay for, and captured none of that value. Packaging it into a real product created an entirely new line of revenue."
      heroImage="/images/cases/industrial-data-monetization-hero.jpg"
      metrics={[
        { value: "3rd", label: "Revenue Stream" },
        { value: "18 Mo", label: "To Measurable Revenue" },
        { value: "Productized", label: "Data Offering" },
        { value: "Anonymized", label: "By Design" }
      ]}
      clientContextTitle="Sitting on Valuable Data"
      clientContextIntro="An industrial holding company generated enormous volumes of operational data across its portfolio — the kind of aggregated, anonymized insight into industrial activity that suppliers, financiers, and market participants would genuinely pay for. It was capturing none of that value."
      clientContextBody="The data was treated as exhaust, a byproduct of running the operating businesses rather than an asset in its own right. There was no view of which data had external market value, no product wrapped around it, no pricing, and no route to market. Turning data into revenue is also fraught — it has to be anonymized and packaged carefully to be both valuable and safe to sell. The company wanted to surface where its data had real market value and build a productized offering that could stand as a genuine, measurable revenue stream alongside its operating businesses."
      clientProfile={{
        industry: "Industrial Holding Company",
        companySize: "~$800M Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "Portfolio Operational Data",
        additionalLabel: "New Revenue Line"
      }}
      challengeTitle="Why the Value Went Uncaptured"
      challenges={[
        { icon: Target, title: "Data Treated as Exhaust", description: "Operational data was a byproduct of running the businesses, not managed as a sellable asset." },
        { icon: BarChart3, title: "No View of Market Value", description: "The company had not identified which data external buyers would actually pay for." },
        { icon: DollarSign, title: "No Product or Route to Market", description: "There was no packaging, pricing, or channel to turn data into revenue." },
        { icon: Shield, title: "Anonymization Required", description: "Selling data safely demanded careful anonymization and packaging." }
      ]}
      approachTitle="Surface It, Package It, Sell It"
      approachIntro="We surfaced where the company's data had external market value, packaged anonymized operational data into a productized offering, and took it to market — where it became a measurable third revenue stream within 18 months."
      steps={[
        { step: "01", title: "Identifying Market-Valuable Data", description: "We assessed the portfolio's data to find what aggregated, anonymized insight external buyers would genuinely pay for." },
        { step: "02", title: "Productizing the Offering", description: "We packaged that data into a defined product with clear value, safe anonymization, and a pricing model." },
        { step: "03", title: "Building the Route to Market", description: "We established how the offering would be sold and delivered, turning a concept into a sellable line." },
        { step: "04", title: "Scaling to a Real Revenue Stream", description: "We grew the offering into a measurable third revenue stream alongside the operating businesses within eighteen months." }
      ]}
      resultsTitle="A New Business From Existing Data"
      results={[
        { icon: DollarSign, value: "3rd", label: "Revenue stream", detail: "Alongside the operating businesses" },
        { icon: CheckCircle, value: "18 Mo", label: "To revenue", detail: "From concept to measurable line" },
        { icon: Target, value: "Productized", label: "Offering", detail: "Defined, priced, sellable" },
        { icon: Shield, value: "Anonymized", label: "Safe to sell", detail: "Packaged carefully by design" }
      ]}
      quote="We were generating data our markets would happily pay for and treating it as exhaust. Figuring out exactly which of it had real value, packaging it safely, and building a way to sell it turned that byproduct into a genuine third revenue stream in under two years. It is a real business now, built on data we already had."
      quoteAuthor="Chief Strategy Officer"
      quoteRole="Industrial holding company"
      relatedStudies={[
        { title: "How a Regional Bank Tripled Self-Service Reporting by Training 600 People", metric: "3x", label: "more self-service reporting", link: "/cases/bank-data-literacy", image: "/images/cases/bank-data-literacy-hero.jpg" },
        { title: "How a Health System Built an Internal Bench of 80 Citizen Data Scientists", metric: "80", label: "citizen data scientists trained", link: "/cases/health-citizen-data-scientist", image: "/case-medical-collaboration.9602cc8c.jpg" }
      ]}
      ctaTitle="Are you sitting on data your market would pay for?"
      ctaDescription="Let's surface where your data has value and productize it into a real revenue stream."
    />
  );
}
