import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, DollarSign, TrendingDown, Users, CheckCircle, BarChart3 } from "lucide-react";

export default function FraudDetection() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Card Issuer Cuts Fraud Losses 44% While Reducing False Positives | Machine Learning Case Study"
      seoDescription="A card issuer's fraud system forced a trade-off between losses and blocked good customers. A gradient-boosted ensemble with reviewer-in-the-loop tuning cut fraud losses 44% and reduced false positives at once."
      canonical="/cases/fraud-detection"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Card Issuer Cut Fraud Losses 44% and False Positives at the Same Time"
      subtitle="The old system made every gain in fraud detection cost a wave of blocked good customers. A modern ensemble with reviewer feedback moved both dials in the right direction at once."
      heroImage="/images/industries/fin-trader.jpg"
      metrics={[
        { value: "44%", label: "Lower Fraud Losses" },
        { value: "Fewer", label: "False Positives" },
        { value: "Both", label: "Dials Improved" },
        { value: "Reviewer", label: "In the Loop" }
      ]}
      clientContextTitle="A Trade-Off That Punished Good Customers"
      clientContextIntro="A card issuer was stuck on the classic fraud trade-off. Its detection system was tuned so that catching more fraud meant declining more legitimate transactions, and reducing those false declines meant letting more fraud through. Every improvement in one direction cost the other."
      clientContextBody="Both sides of that trade-off were expensive. Fraud losses hit the bottom line directly, while false positives — good customers declined at the register — drove complaints, attrition, and lost interchange. The legacy rules-and-simple-model approach could only slide along a single unfavorable curve. The issuer needed a fundamentally better model that could shift the entire precision-recall frontier — catching more fraud while approving more good transactions — and a way to keep it sharp using the judgment of its human reviewers."
      clientProfile={{
        industry: "Card Issuer",
        companySize: "~$450M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "Transaction Fraud Detection",
        additionalLabel: "Risk Operations"
      }}
      challengeTitle="Why Every Gain Cost a Loss"
      challenges={[
        { icon: Target, title: "A Zero-Sum Trade-Off", description: "Catching more fraud meant declining more good transactions, and vice versa." },
        { icon: DollarSign, title: "Losses on Both Sides", description: "Fraud hit the bottom line while false declines drove complaints, attrition, and lost interchange." },
        { icon: TrendingDown, title: "A Single Unfavorable Curve", description: "The legacy rules-and-simple-model approach could only slide along one bad frontier." },
        { icon: Users, title: "Reviewer Judgment Untapped", description: "The expertise of human reviewers was not being used to keep the model sharp." }
      ]}
      approachTitle="Shift the Frontier, Keep a Human in the Loop"
      approachIntro="We replaced the legacy approach with a gradient-boosted ensemble and reviewer-in-the-loop tuning, shifting the precision-recall curve in both dimensions — cutting fraud losses 44 percent while reducing false positives."
      steps={[
        { step: "01", title: "Building the Ensemble", description: "We built a gradient-boosted ensemble that learned far richer fraud patterns than the legacy rules could express." },
        { step: "02", title: "Shifting the Precision-Recall Curve", description: "We moved the entire frontier so the issuer could catch more fraud and approve more good transactions at once." },
        { step: "03", title: "Putting Reviewers in the Loop", description: "We fed human reviewer decisions back into tuning, so the model stayed sharp against evolving fraud." },
        { step: "04", title: "Balancing Losses and Approvals", description: "We tuned the operating point to cut fraud losses 44 percent while lowering the false-positive rate that had been punishing good customers." }
      ]}
      resultsTitle="Both Dials Moving the Right Way"
      results={[
        { icon: TrendingDown, value: "44%", label: "Lower losses", detail: "On fraud, versus the legacy system" },
        { icon: CheckCircle, value: "Fewer", label: "False positives", detail: "Good customers approved" },
        { icon: BarChart3, value: "Shifted", label: "P-R frontier", detail: "Improved in both dimensions" },
        { icon: Users, value: "Reviewer", label: "In the loop", detail: "Model kept sharp by human feedback" }
      ]}
      quote="For years, catching more fraud meant turning away more of our best customers at the register — it was a trade we hated making. A proper ensemble, kept sharp by our own reviewers, moved both dials the right way: fraud losses down forty-four percent and fewer good customers declined. We stopped choosing between the two."
      quoteAuthor="Head of Fraud Risk"
      quoteRole="Card issuer"
      relatedStudies={[
        { title: "How a Manufacturer Replaced 47 Point-to-Point Integrations With an API-Led Architecture", metric: "12 wks → 3 wks", label: "per integration", link: "/cases/manufacturer-mulesoft", image: "/images/capabilities/cap-warehouse-robot.jpg" },
        { title: "How a Health System United 12 Systems Behind One API Layer", metric: "12", label: "systems unified behind one API layer", link: "/cases/health-system-boomi", image: "/images/cases/health-system-boomi-hero.jpg" }
      ]}
      ctaTitle="Is your fraud system forcing a bad trade-off?"
      ctaDescription="Let's build a model that catches more fraud and approves more good customers at once."
    />
  );
}
