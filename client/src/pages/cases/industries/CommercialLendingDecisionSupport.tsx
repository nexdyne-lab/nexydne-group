import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Users, Shield, Clock, TrendingUp, CheckCircle } from "lucide-react";

export default function CommercialLendingDecisionSupport() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Underwriting Decision Support Lifts Approval Consistency 32% | Commercial Lending Case Study"
      seoDescription="A commercial lender embedded a calibrated classifier into the underwriter workflow as a recommendation with an explanation — not an automated decision. Approval-quality consistency rose 32% with a regulator-ready override trail."
      canonical="/cases/commercial-lending-decision-support"
      industry="Commercial Lending"
      industryLink="/industries/financial-services"
      title="How a Commercial Lender Made Its Underwriting Decisions More Consistent — Without Automating Them Away"
      subtitle="Different underwriters were reaching different conclusions on similar deals. A model that recommends and explains, rather than decides, brought the whole team onto the same page while keeping people in charge."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "32%", label: "More Decision Consistency" },
        { value: "18%", label: "Less Time per Deal" },
        { value: "100%", label: "Overrides Reviewable" },
        { value: "Sign-Off", label: "From Model Risk" }
      ]}
      clientContextTitle="Same Deal, Different Answers"
      clientContextIntro="A growing commercial lender had built a capable underwriting team, but as it scaled, an uncomfortable pattern emerged: two underwriters looking at broadly similar deals would often reach materially different conclusions. Consistency, not capability, had become the constraint."
      clientContextBody="The team had experimented with the obvious fix — automating the decision outright — and hit two walls. Underwriters distrusted a black box that overrode their judgment, and model-risk and compliance had no way to sign off on a system that made credit decisions no one could explain. The lender did not want to remove underwriters from the loop; it wanted every underwriter to reason from the same well-calibrated starting point, and it needed whatever it built to satisfy a regulator who would ask exactly how each decision was reached."
      clientProfile={{
        industry: "Commercial Lender",
        companySize: "~$310M Annual Revenue",
        projectDuration: "7 Months",
        additionalInfo: "Regulated Credit Portfolio",
        additionalLabel: "Risk Environment"
      }}
      challengeTitle="Why Pure Automation Was the Wrong Tool"
      challenges={[
        { icon: Target, title: "Inconsistent Judgments", description: "Similar deals drew different conclusions depending on which underwriter reviewed them, undermining portfolio quality." },
        { icon: Users, title: "Distrust of a Black Box", description: "Underwriters resisted any system that overrode their judgment without showing its reasoning." },
        { icon: Shield, title: "No Path to Sign-Off", description: "Model risk and compliance could not approve an automated decision they were unable to explain to a regulator." },
        { icon: Clock, title: "Slow, Variable Deal Times", description: "Without a shared starting point, time per deal varied widely and reviews dragged." }
      ]}
      approachTitle="Recommend and Explain, Never Decide"
      approachIntro="Working with the lender's credit and model-risk teams, we embedded a calibrated classifier into the underwriter workflow as a recommendation paired with an explanation — never an automated decision — and built the override-review surface that gave model risk a path to sign-off."
      steps={[
        { step: "01", title: "Calibrating the Model to the Portfolio", description: "We trained and calibrated a classifier on the lender's own credit outcomes so its recommendations reflected the actual portfolio, not a generic score." },
        { step: "02", title: "Delivering It as a Recommendation Plus Reason", description: "We surfaced the model inside the underwriter's existing workflow as a suggested outcome with a plain-language explanation, keeping the underwriter as the decision-maker." },
        { step: "03", title: "Building the Override-Review Surface", description: "Every time an underwriter overrode the model, the system captured the reason and routed it into a review surface model risk could audit — the piece pure automation could never offer." },
        { step: "04", title: "Earning Model-Risk Sign-Off", description: "Because every decision and override was explainable and reviewable, model risk could sign off and the regulator had a clear line of sight into how decisions were made." }
      ]}
      resultsTitle="One Standard, People Still in Charge"
      results={[
        { icon: TrendingUp, value: "32%", label: "More consistency", detail: "In approval quality across underwriters" },
        { icon: Clock, value: "18%", label: "Less time per deal", detail: "From a shared, calibrated starting point" },
        { icon: CheckCircle, value: "100%", label: "Overrides reviewable", detail: "Captured with reasons for audit" },
        { icon: Shield, value: "Sign-Off", label: "From model risk", detail: "A path pure automation lacked" }
      ]}
      quote="We had tried to automate the credit decision and it went nowhere — the underwriters would not trust it and compliance could not approve it. Giving each underwriter the same calibrated recommendation, with the reasoning attached and every override on the record, got us the consistency we wanted and a system the regulator could actually understand."
      quoteAuthor="Chief Credit Officer"
      quoteRole="Commercial lender"
      relatedStudies={[
        { title: "How a Manufacturer Cut Unplanned Downtime in Half by Listening to Its Machines", metric: "51%", label: "less unplanned downtime", link: "/cases/industrial-iot-anomaly-detection", image: "/images/industries/mfg-robot-arm.jpg" },
        { title: "How a Global Firm Got 92% of 38 Countries Using a New ERP in 60 Days", metric: "92%", label: "adoption in 60 days", link: "/cases/global-professional-services-erp-adoption", image: "/images/capabilities/cap-conference-data.jpg" }
      ]}
      ctaTitle="Do your experts reach different answers on similar decisions?"
      ctaDescription="Let's talk about decision support that standardizes judgment while keeping your people — and your regulator — comfortable."
    />
  );
}
