import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Target, FileCheck, BarChart3, Shield, DollarSign, Zap } from "lucide-react";

export default function InsuranceUnderwritingTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Quoting Commercial Business in a Day, Not a Week | Insurance Case Study"
      seoDescription="A commercial lines insurer was losing broker business to faster rivals. Automating the routine underwriting decisions cut quote turnaround by 40% and grew premium."
      canonical="/cases/insurance-ai-underwriting"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a Commercial Insurer Started Quoting in a Day Instead of a Week"
      subtitle="A commercial lines carrier was losing broker business because it was slow to quote. Letting software handle the routine risks — and freeing underwriters for the hard ones — turned speed into an advantage."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "40%", label: "Faster Quotes" },
        { value: "70%", label: "Quoted Automatically" },
        { value: "15%", label: "Better Loss Ratio" },
        { value: "$85M", label: "Premium Growth" }
      ]}
      clientContextTitle="Losing Business Not on Price, but on Speed"
      clientContextIntro="A commercial lines insurer — a carrier that writes property and liability coverage for businesses, sold through independent brokers — was steadily losing accounts to quicker rivals. A broker with a client to place would send the same submission to several carriers and generally bind with whoever came back first with a workable quote. This insurer took five days on average. By the time its quote arrived, the business was often already placed elsewhere."
      clientContextBody="Behind the delay was a process that had barely changed in years. Every submission arrived as a stack of documents, and an underwriter had to assemble the full picture by hand — pulling financials, loss history and property details from separate sources before any real judgment could begin. Underwriters spent the bulk of their week gathering information rather than weighing risk. Worse, with no shared method, two underwriters could look at near-identical accounts and price them differently, so the carrier was sometimes winning the risks it should have declined and losing the ones it wanted. Leadership saw that the problem was not the quality of its underwriters but the amount of routine work standing between them and a decision."
      clientProfile={{
        industry: "Commercial Lines Insurer",
        companySize: "~$450M in Premium",
        projectDuration: "15 Months",
        additionalInfo: "~90 Underwriters",
        additionalLabel: "Underwriting Team"
      }}
      challengeTitle="Why Quotes Took Too Long"
      challenges={[
        {
          icon: Clock,
          title: "Five Days to a Quote",
          description: "Brokers wanted an answer the same day; the carrier averaged five, and often lost the account before it could respond."
        },
        {
          icon: Target,
          title: "Winning the Wrong Risks",
          description: "With no shared approach to pricing, the carrier too often wrote the accounts it should have passed on and lost the ones it wanted."
        },
        {
          icon: FileCheck,
          title: "Underwriters Buried in Paperwork",
          description: "Underwriters spent most of their time gathering documents and keying in data, leaving only a fraction for the judgment that actually mattered."
        },
        {
          icon: BarChart3,
          title: "Inconsistent Pricing",
          description: "Similar accounts were priced differently depending on who handled them, so results were hard to predict and harder to improve."
        }
      ]}
      approachTitle="Clearing the Routine Work Out of the Way"
      approachIntro="Working alongside the carrier's underwriting leaders, we set out to take the routine, repeatable submissions off the desk entirely — handling them automatically to a consistent standard — so underwriters could spend their time on the complex accounts where their experience earns its keep."
      steps={[
        {
          step: "01",
          title: "A Complete Submission, Ready to Read",
          description: "We built connections that gathered the information an underwriter needs — company financials, prior losses, property details and outside risk scores — and assembled it automatically. Instead of a raw application, underwriters opened a complete, organized picture of the account."
        },
        {
          step: "02",
          title: "One Consistent View of Risk",
          description: "We captured the carrier's own pricing logic and loss experience into a scoring approach that rated each account and suggested a price the same way every time. The carrier's best underwriting judgment became a standard everyone worked from, not a matter of who picked up the file."
        },
        {
          step: "03",
          title: "Straightforward Business, Quoted on the Spot",
          description: "For accounts that fell squarely within the carrier's appetite and pricing, the system produced a quote without an underwriter ever touching it. Roughly seven in ten submissions were handled this way — turning a five-day wait into a same-day answer."
        },
        {
          step: "04",
          title: "Underwriters Freed for the Hard Calls",
          description: "For the accounts that needed real judgment, underwriters worked from a prepared summary, comparable accounts and a pricing recommendation — the analysis done for them, so their time went to the decision itself."
        }
      ]}
      resultsTitle="Speed That Won Business"
      results={[
        {
          icon: Clock,
          value: "40%",
          label: "Faster quote turnaround",
          detail: "From five days to three on average"
        },
        {
          icon: Zap,
          value: "70%",
          label: "Quoted automatically",
          detail: "Routine submissions answered the same day"
        },
        {
          icon: Shield,
          value: "15%",
          label: "Better loss ratio",
          detail: "From more consistent, disciplined pricing"
        },
        {
          icon: DollarSign,
          value: "$85M",
          label: "Premium growth",
          detail: "As the carrier won more of the business it wanted"
        }
      ]}
      quote="We were never losing business because our pricing was wrong — we were losing it because we were slow. Now the routine accounts quote themselves, in minutes, priced the way we would price them. My underwriters spend their day on the risks that actually need a human, and we are winning far more of the business we set out to write."
      quoteAuthor="Chief Underwriting Officer"
      quoteRole="Commercial lines insurer"
      relatedStudies={[
        {
          title: "Settling Straightforward Claims in Hours, Not Weeks",
          metric: "60%",
          label: "faster claims processing",
          link: "/cases/insurance-claims-automation",
          image: "/case-insurance-claims.399e5d4b.jpg"
        },
        {
          title: "Turning a Call-Center Insurer Into a Digital One",
          metric: "50%",
          label: "digital adoption",
          link: "/cases/insurance-digital-distribution",
          image: "/images/industries/fin-handshake-city.jpg"
        }
      ]}
      ctaTitle="Ready to quote faster without adding risk?"
      ctaDescription="Let's talk about taking the routine work off your underwriters' desks."
    />
  );
}
