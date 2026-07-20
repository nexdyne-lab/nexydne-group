import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, PhoneCall, Frown, PackageX, Route, UserCog, MessageSquareWarning, TrendingUp } from "lucide-react";

export function PaymentTerminalOnboarding() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Speeding Terminal Onboarding 52% With Personalized Workflows | Fintech Case Study"
      seoDescription="A payment processor's generic setup left merchants 14 days to first transaction and 78% calling support. Personalized onboarding cut time-to-activation 52% and lifted satisfaction to 4.7/5."
      canonical="/cases/payment-terminal-onboarding"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Payment Processor Sped Terminal Onboarding 52%"
      subtitle="A payment processor deployed Sitecore DXP and journey mapping to personalize merchant onboarding — cutting time-to-activation 52%, lifting satisfaction from 2.9 to 4.7, and recovering $2.4M in revenue."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "52%", label: "Faster Onboarding" },
        { value: "38%", label: "Fewer Support Tickets" },
        { value: "4.7/5", label: "Merchant Satisfaction" },
        { value: "89%", label: "First-Time Completion" }
      ]}
      clientContextTitle="One Setup Guide for Everyone"
      clientContextIntro="A rapidly growing payment processor serving 45,000+ merchants across retail, restaurants, and professional services faced a critical problem: its terminal onboarding created friction that delayed activation and drove support costs. New merchants got generic setup instructions regardless of business type, technical skill, or hardware."
      clientContextBody="Merchants took an average of 14 days from terminal delivery to first transaction, wading through irrelevant instructions. 78% contacted support during onboarding, overwhelming the team with repetitive questions, and satisfaction averaged just 2.9/5. Worse, 12% of merchants who received terminals never activated — lost revenue and wasted hardware — and the company had no visibility into where merchants got stuck or why they abandoned."
      clientProfile={{
        industry: "Payment Processor",
        companySize: "45,000+ Merchants",
        projectDuration: "Journey-Mapped",
        additionalInfo: "Sitecore DXP",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Merchants Stalled"
      challenges={[
        {
          icon: Clock,
          title: "14 days to first transaction",
          description: "Generic setup guides forced every merchant through irrelevant instructions."
        },
        {
          icon: PhoneCall,
          title: "78% contacted support",
          description: "Repetitive onboarding questions overwhelmed the support team."
        },
        {
          icon: PackageX,
          title: "12% never activated",
          description: "More than one in ten merchants abandoned onboarding, wasting hardware and revenue."
        },
        {
          icon: Frown,
          title: "No visibility into friction",
          description: "The company couldn't see where merchants got stuck or why they gave up."
        }
      ]}
      approachTitle="Onboarding That Adapts to the Merchant"
      approachIntro="NEXDYNE built a personalized onboarding platform on Sitecore DXP that adapted content, workflows, and guidance to each merchant's business type, terminal model, technical experience, and real-time progress."
      steps={[
        {
          step: "01",
          title: "Map the merchant journeys",
          description: "Detailed journey mapping across segments and skill levels pinpointed where merchants abandoned onboarding."
        },
        {
          step: "02",
          title: "Personalize in real time",
          description: "A restaurant owner saw a quick countertop setup with tip config; a retail merchant got detailed POS inventory-sync steps."
        },
        {
          step: "03",
          title: "Replace PDFs with guided flows",
          description: "Interactive, step-by-step workflows with progress tracking, video, and conditional logic skipped irrelevant steps."
        },
        {
          step: "04",
          title: "Intervene before they quit",
          description: "Behavioral analytics triggered proactive chat and email for merchants showing signs of struggle."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Route,
          value: "6.7 days",
          label: "To first transaction",
          detail: "Down from 14, activating 3,200 more merchants a quarter"
        },
        {
          icon: MessageSquareWarning,
          value: "48%",
          label: "Contacted support",
          detail: "Down from 78%, cutting cost per onboarded merchant by $42"
        },
        {
          icon: TrendingUp,
          value: "3%",
          label: "Onboarding abandonment",
          detail: "Down from 12%, recovering $2.4M in annual revenue"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Launching a Credit Union Mobile App to 78% Adoption",
          metric: "78%",
          label: "member adoption",
          link: "/cases/fintech-mobile-banking",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Enabling 3.2x Faster Product Access With Personalized Search",
          metric: "3.2x",
          label: "faster discovery",
          link: "/cases/logistics-product-access",
          image: "/images/cases/logistics-product-access-hero.jpg"
        }
      ]}
      ctaTitle="Ready to make onboarding effortless?"
      ctaDescription="Let's talk about what personalized onboarding could do for your activation and support costs."
    />
  );
}

export default PaymentTerminalOnboarding;
