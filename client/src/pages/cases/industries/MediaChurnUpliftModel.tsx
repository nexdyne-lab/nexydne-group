import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Users, TrendingDown, BarChart3, TrendingUp, Zap } from "lucide-react";

export default function MediaChurnUpliftModel() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Uplift Model Lifts Retention Save-Rate 31% | Subscription Media Case Study"
      seoDescription="A streaming operator's tenure-based churn rule flagged the wrong customers. An uplift model scored weekly into the marketing platform lifted top-decile save-rate 31% and halved contact to low-risk customers."
      canonical="/cases/media-churn-uplift-model"
      industry="Subscription Media"
      industryLink="/industries/technology-media-telecom"
      title="How a Streaming Operator Raised Its Retention Save-Rate by 31%"
      subtitle="A tenure-based rule was telling the retention team who was about to churn, and it was usually wrong. An uplift model changed both who got contacted and how often."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "31%", label: "Higher Save-Rate" },
        { value: "14→18.4%", label: "Top-Decile Save-Rate" },
        { value: "-50%", label: "Contact to Low-Risk" },
        { value: "Weekly", label: "Scoring Cadence" }
      ]}
      clientContextTitle="A Churn Rule That Flagged the Wrong People"
      clientContextIntro="A streaming-media operator was running its retention program off a simple heuristic: flag customers by tenure and offer them a save. It was easy to operate and quietly ineffective, because tenure is a weak predictor of who is actually about to leave."
      clientContextBody="The retention team was working hard against a bad list. Long-tenured but perfectly happy customers were being interrupted with save offers they did not need, while genuinely at-risk viewers slipped away unflagged. Worse, the program was measuring the wrong thing — who churned — rather than who could be persuaded to stay by an intervention. Leadership wanted the team pointed at the customers where a save attempt would actually change the outcome, and wanted to stop bothering the customers who were never going to leave."
      clientProfile={{
        industry: "Streaming Media Operator",
        companySize: "~$540M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Weekly Retention Program",
        additionalLabel: "Lifecycle Motion"
      }}
      challengeTitle="Why Retention Effort Was Misspent"
      challenges={[
        { icon: Target, title: "Tenure Is a Weak Signal", description: "Flagging by tenure surfaced the wrong customers, missing genuine risk and interrupting the content." },
        { icon: Users, title: "Bothering Happy Customers", description: "Long-tenured, satisfied viewers received save offers they did not need, adding cost and annoyance." },
        { icon: TrendingDown, title: "Measuring Churn, Not Persuadability", description: "The program optimized for who left rather than who could be persuaded to stay by an intervention." },
        { icon: BarChart3, title: "No Weekly Signal", description: "There was no regular, model-driven score to route retention effort where it would pay off." }
      ]}
      approachTitle="Model Uplift, Not Just Risk"
      approachIntro="We replaced the tenure rule with an uplift model trained on engagement, billing, and content-affinity features, scored weekly into the marketing automation platform, so the team targeted the customers a save attempt would actually move."
      steps={[
        { step: "01", title: "Reframing the Question as Uplift", description: "We shifted the target from predicting churn to predicting persuadability — which customers an intervention would actually change — so effort went where it moved the outcome." },
        { step: "02", title: "Training on the Right Signals", description: "We built the model on engagement, billing, and content-affinity features that genuinely separated at-risk-and-persuadable customers from the rest." },
        { step: "03", title: "Scoring Weekly Into Automation", description: "We wired weekly scores directly into the marketing automation platform so the retention team always worked a current, model-driven list." },
        { step: "04", title: "Pulling Back on Low-Risk Contact", description: "We used the model to stop contacting customers who were not going to leave, cutting unnecessary outreach in half." }
      ]}
      resultsTitle="The Right Customers, at the Right Time"
      results={[
        { icon: TrendingUp, value: "31%", label: "Higher save-rate", detail: "On the top-decile at-risk segment" },
        { icon: BarChart3, value: "14→18.4%", label: "Top-decile save-rate", detail: "Up from the tenure-rule baseline" },
        { icon: Users, value: "-50%", label: "Contact to low-risk", detail: "Happy customers left alone" },
        { icon: Zap, value: "Weekly", label: "Fresh scores", detail: "Delivered into the automation platform" }
      ]}
      quote="Our old rule was interrupting our happiest customers and missing the ones walking out the door. Modeling who we could actually persuade — not just who might leave — meant we saved more people while bothering far fewer. That is the trade every retention team wants and rarely gets."
      quoteAuthor="Director of Retention"
      quoteRole="Streaming media operator"
      relatedStudies={[
        { title: "How a Regional Bank Sent Its Acquisition Budget to the Customers Worth Having", metric: "71%", label: "spend to top value deciles", link: "/cases/banking-clv-acquisition-routing", image: "/images/industries/fin-trader.jpg" },
        { title: "How a Health System Turned a Dormant NPS Score Into Fewer Escalations", metric: "34%", label: "fewer experience escalations", link: "/cases/healthcare-closed-loop-voc", image: "/images/cases/healthcare-closed-loop-voc-hero.jpg" }
      ]}
      ctaTitle="Is your retention team working the wrong list?"
      ctaDescription="Let's build an uplift model that targets the customers a save attempt will actually move."
    />
  );
}
