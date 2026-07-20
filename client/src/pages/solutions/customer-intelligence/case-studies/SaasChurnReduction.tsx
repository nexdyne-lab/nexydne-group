import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, DollarSign, Clock, Gauge, Eye, Users, Workflow } from "lucide-react";

export function SaasChurnReduction() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting SaaS Churn 38% with Predictive Intelligence | Technology Case Study"
      seoDescription="A B2B SaaS platform was losing customers faster than it could replace them. Predictive churn models flagged at-risk accounts 60 days early and cut annual churn 38%."
      canonical="/solutions/data-driven-customer-intelligence/case-studies/saas-churn-reduction"
      industry="Software & Technology"
      industryLink="/industries/technology-media-telecom"
      title="How a B2B SaaS Platform Cut Churn 38% with 60 Days of Early Warning"
      subtitle="A 280-employee B2B SaaS platform built predictive churn models to identify at-risk accounts 60 days before cancellation — cutting annual churn from 18% to roughly 11% and making its customer success team 3.2x more efficient."
      heroImage="/images/capabilities/cap-mobile-woman.jpg"
      metrics={[
        { value: "38%", label: "Lower Annual Churn" },
        { value: "7 pts", label: "Churn-Rate Reduction" },
        { value: "60 days", label: "Early-Warning Lead Time" },
        { value: "3.2x", label: "CS Team Efficiency" }
      ]}
      clientContextTitle="Growing Fast, but Leaking Customers"
      clientContextIntro="A B2B SaaS platform serving growing companies was experiencing annual churn of 18% — well above the 10–12% industry benchmark. With aggressive growth targets, the company was losing ground: for every two new customers it acquired, one walked out the door."
      clientContextBody="The customer success team was operating reactively, only engaging once a customer explicitly signaled dissatisfaction or asked to cancel — by which point it was usually too late. The team had no visibility into which accounts were at risk, no early-warning system, and no data-driven playbooks for intervention, all while stretched thin across more than 800 accounts."
      clientProfile={{
        industry: "B2B SaaS Platform",
        companySize: "800+ Accounts",
        projectDuration: "First-Year Impact",
        additionalInfo: "280 Employees",
        additionalLabel: "Team Size"
      }}
      challengeTitle="Why Customers Kept Slipping Away"
      challenges={[
        {
          icon: Eye,
          title: "No predictive visibility",
          description: "The team had only lagging indicators — by the time risk was obvious, the customer had usually already decided to leave."
        },
        {
          icon: Users,
          title: "A team stretched thin",
          description: "Customer success managers were spread across 800+ accounts with no way to know where to focus their limited time."
        },
        {
          icon: Workflow,
          title: "Disconnected systems",
          description: "Product-usage data sat apart from CRM and support, so no one could see the full health of an account in one place."
        },
        {
          icon: Gauge,
          title: "Generic retention offers",
          description: "Last-minute discounts treated the symptom, not the cause, and rarely changed a customer's mind."
        }
      ]}
      approachTitle="Sixty Days of Lead Time to Save an Account"
      approachIntro="NEXDYNE implemented an end-to-end churn prediction and prevention system that gave the customer success team 60 or more days of lead time to save at-risk accounts before they reached the cancellation decision."
      steps={[
        {
          step: "01",
          title: "One customer-health dataset",
          description: "We unified product-usage data, CRM records, support tickets, and billing into a single health dataset — 150+ behavioral features flowing through a real-time pipeline."
        },
        {
          step: "02",
          title: "Churn prediction 60–90 days out",
          description: "Machine-learning models predicted churn probability 60–90 days in advance with 87% accuracy, and surfaced the explainable risk factors behind every flagged account."
        },
        {
          step: "03",
          title: "A prioritized health dashboard",
          description: "A real-time health-score dashboard ranked accounts by risk and pinpointed the specific intervention each one needed, so the team always knew where to act first."
        },
        {
          step: "04",
          title: "Eight automated playbooks",
          description: "Automated playbooks triggered personalized interventions from the risk signals — handling routine cases on their own and freeing managers to focus on the high-value accounts that needed a human touch."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingDown,
          value: "38%",
          label: "Lower annual churn",
          detail: "From 18% down to roughly 11%"
        },
        {
          icon: DollarSign,
          value: "7 pts",
          label: "Churn-rate reduction",
          detail: "Recurring revenue that would otherwise have been lost to cancellations"
        },
        {
          icon: Clock,
          value: "60 days",
          label: "Early-warning lead time",
          detail: "At 87% prediction accuracy, well before the cancellation decision"
        },
        {
          icon: Gauge,
          value: "3.2x",
          label: "CS team efficiency",
          detail: "More accounts managed per rep as playbooks handled routine cases"
        }
      ]}
      quote="NEXDYNE's Customer Intelligence Maturity Model gave us a clear roadmap from fragmented data to predictive insights. We reduced churn by 38% and were flagging at-risk accounts before customers even thought about canceling."
      quoteAuthor="David Kim"
      quoteRole="Chief Revenue Officer"
      relatedStudies={[
        {
          title: "Doubling Cross-Sell for a Community Bank",
          metric: "2.1x",
          label: "cross-sell conversion",
          link: "/solutions/data-driven-customer-intelligence/case-studies/bank-cross-sell",
          image: "/images/capabilities/cap-mobile-woman.jpg"
        },
        {
          title: "Lifting Repeat Purchase 42% for an E-commerce Brand",
          metric: "42%",
          label: "more repeat purchases",
          link: "/solutions/data-driven-customer-intelligence/case-studies/ecommerce-repeat-purchase",
          image: "/images/capabilities/cap-celebrate.jpg"
        }
      ]}
      ctaTitle="Ready to see churn coming before it happens?"
      ctaDescription="Let's talk about what 60 days of early warning could be worth to your retention."
    />
  );
}

export default SaasChurnReduction;
