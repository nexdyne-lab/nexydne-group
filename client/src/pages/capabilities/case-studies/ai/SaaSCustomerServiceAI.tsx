import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, Clock, Frown, Users, Bot, BookOpen, Route, Smile } from "lucide-react";

export function SaaSCustomerServiceAI() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Customer Service AI That Deflected 60% of Tickets | SaaS Case Study"
      seoDescription="A B2B SaaS company's ticket volume tripled in 18 months while response times hit 8 hours. A multi-tier AI support system deflected 60% of tickets and cut response time to 15 minutes."
      canonical="/capabilities/artificial-intelligence/case-studies/saas-customer-service-ai"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a SaaS Company Scaled Support With AI, Deflecting 60% of Tickets"
      subtitle="A B2B SaaS company deployed a multi-tier AI support system — deflecting 60% of tickets, giving the team 4.5x capacity, and cutting average response time from 8 hours to 15 minutes."
      heroImage="/images/capabilities/cap-office-women.jpg"
      metrics={[
        { value: "60%", label: "Ticket Deflection" },
        { value: "4.5x", label: "Support Capacity" },
        { value: "92%", label: "CSAT Score" },
        { value: "15 min", label: "Avg Response Time" }
      ]}
      clientContextTitle="Support Buckling Under Growth"
      clientContextIntro="A B2B SaaS company with 120 employees serves 2,000+ business customers with project-management software. Rapid growth strained its support team: ticket volume tripled in 18 months while the team grew only 50%, pushing average response time from 2 hours to 8."
      clientContextBody="Customer satisfaction was declining, and the company needed to scale support without proportionally scaling headcount. Analysis of 50,000 historical tickets showed 70% fell into predictable categories — password and access issues (25%), feature questions (30%), and billing (15%) — leaving 30% of complex issues genuinely needing human judgment."
      clientProfile={{
        industry: "B2B SaaS Company",
        companySize: "2,000+ Customers",
        projectDuration: "3-Tier System",
        additionalInfo: "50,000 Tickets Analyzed",
        additionalLabel: "Training Data"
      }}
      challengeTitle="Why Support Couldn't Keep Up"
      challenges={[
        {
          icon: TrendingUp,
          title: "Volume tripled, team grew 50%",
          description: "Ticket growth badly outpaced hiring during an 18-month surge."
        },
        {
          icon: Clock,
          title: "Response time to 8 hours",
          description: "Average first response stretched from 2 hours to 8 as the backlog grew."
        },
        {
          icon: Frown,
          title: "Declining satisfaction",
          description: "Slow responses eroded CSAT during the company's most important growth phase."
        },
        {
          icon: Users,
          title: "Headcount couldn't scale linearly",
          description: "The company needed to absorb volume without proportionally growing the team."
        }
      ]}
      approachTitle="A Multi-Layered AI Support System"
      approachIntro="NEXDYNE designed a three-tier AI support system trained on the company's own history — a chatbot for common questions, an AI knowledge base, and intelligent routing for complex issues, with sentiment analysis for frustrated customers."
      steps={[
        {
          step: "01",
          title: "Deflect the predictable",
          description: "An NLU chatbot handled common questions while an AI knowledge base surfaced relevant articles by intent."
        },
        {
          step: "02",
          title: "Route the complex",
          description: "Intelligent routing directed hard issues to the right specialist, with sentiment analysis prioritizing frustrated customers."
        },
        {
          step: "03",
          title: "Train on real tickets",
          description: "Intent models learned from thousands of labeled examples, with responses matched to the company's voice and clear escalation triggers."
        },
        {
          step: "04",
          title: "Integrate and measure",
          description: "CRM, product, and billing integrations gave full context, while dashboards tracked deflection, accuracy, and cost per ticket."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Bot,
          value: "60%",
          label: "Tickets deflected",
          detail: "Giving the team 4.5x capacity for issues needing humans"
        },
        {
          icon: Route,
          value: "15 min",
          label: "Average response time",
          detail: "Down from 8 hours"
        },
        {
          icon: Smile,
          value: "92%",
          label: "CSAT recovered",
          detail: "Without hiring the staff linear growth would have required"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Predictive Lead Scoring That Lifted Conversion 20%",
          metric: "20%",
          label: "higher conversion",
          link: "/cases/marketing-conversion-boost",
          image: "/images/capabilities/cap-conference-data.jpg"
        },
        {
          title: "Cutting Telecom Churn 22% With a Predictive Model",
          metric: "22%",
          label: "lower churn",
          link: "/cases/telecom-churn-prediction",
          image: "/images/cases/telecom-churn-prediction-hero.jpg"
        }
      ]}
      ctaTitle="Ready to scale support without scaling headcount?"
      ctaDescription="Let's talk about what an AI support system could do for your response times and CSAT."
    />
  );
}

export default SaaSCustomerServiceAI;
