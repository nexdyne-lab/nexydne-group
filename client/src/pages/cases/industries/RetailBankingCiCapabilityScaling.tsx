import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, Clock, Target, BarChart3, TrendingUp, DollarSign, CheckCircle } from "lucide-react";

export default function RetailBankingCiCapabilityScaling() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Bank-Wide CI Capability Scales From 22 to 380 Practitioners | Retail Banking Case Study"
      seoDescription="A retail bank's continuous-improvement capability sat trapped in a small center of excellence. A capability-scaling program trained 380 practitioners in 18 months and reached 4.2x the prior year's run-rate benefits."
      canonical="/cases/retail-banking-ci-capability-scaling"
      industry="Retail Banking"
      industryLink="/industries/financial-services"
      title="How a Retail Bank Took Continuous Improvement Out of the Center and Into the Branches"
      subtitle="Improvement capability lived in a small central team and never reached the people doing the work. Scaling it into the operating teams changed both the reach and the returns."
      heroImage="/images/industries/fin-trader.jpg"
      metrics={[
        { value: "22→380", label: "Trained Practitioners" },
        { value: "18 Mo", label: "To Scale" },
        { value: "4.2x", label: "Prior-Year Run-Rate" },
        { value: "Branch", label: "Daily Management Embedded" }
      ]}
      clientContextTitle="Capability Trapped in the Center"
      clientContextIntro="A retail bank had built a genuine continuous-improvement capability — but it lived almost entirely inside a small center of excellence. Twenty-two skilled practitioners did good work, and the other several thousand people in branch and back-office operations had no way to solve problems themselves."
      clientContextBody="The CoE model had a hard ceiling. A central team, however capable, could only touch a fraction of the bank's processes, and every improvement had to route through it. The people closest to the problems — branch staff who saw the same friction every day — had neither the tools nor the training to fix them. The bank did not need a bigger central team; it needed the capability distributed into the operating teams, with everyday problem-solving embedded where the work happened, so improvement stopped being something a special unit did and became something everyone did."
      clientProfile={{
        industry: "Retail Bank",
        companySize: "~$780M Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "Branch & Back-Office Network",
        additionalLabel: "Operating Base"
      }}
      challengeTitle="Why the CoE Model Hit a Ceiling"
      challenges={[
        { icon: Users, title: "Capability in a Small CoE", description: "Improvement skill sat with 22 central practitioners and never reached the thousands doing the daily work." },
        { icon: Clock, title: "Everything Routed Through the Center", description: "Every improvement had to pass through the CoE, capping how much the bank could ever address." },
        { icon: Target, title: "Frontline Without Tools", description: "Branch staff who saw the friction every day had no training or method to fix it themselves." },
        { icon: BarChart3, title: "Limited Reach, Limited Return", description: "A central team could only touch a fraction of processes, holding down the returns the program could generate." }
      ]}
      approachTitle="Distribute the Capability, Embed the Habit"
      approachIntro="We ran a capability-scaling program that trained 380 practitioners across yellow- and green-belt levels in 18 months and embedded daily-management problem-solving in branch operations — turning improvement from a central service into an everyday habit."
      steps={[
        { step: "01", title: "Training Across Belt Levels", description: "We built and delivered a tiered curriculum, training 380 practitioners at yellow- and green-belt levels so capability reached deep into the operating teams." },
        { step: "02", title: "Embedding Daily Management", description: "We put daily-management problem-solving routines into branch operations, so frontline teams could surface and solve issues where the work happened." },
        { step: "03", title: "Repositioning the CoE", description: "We shifted the central team from doing the improvements to enabling them — coaching, standards, and support for the newly trained practitioners." },
        { step: "04", title: "Tracking Run-Rate Benefits", description: "We instrumented sustained run-rate benefits, which the steering committee reported at 4.2 times the prior year by month fifteen." }
      ]}
      resultsTitle="Improvement Everyone Owns"
      results={[
        { icon: TrendingUp, value: "22→380", label: "Trained practitioners", detail: "Across yellow- and green-belt levels in 18 months" },
        { icon: DollarSign, value: "4.2x", label: "Prior-year run-rate", detail: "Sustained benefits by month fifteen" },
        { icon: Users, value: "Branch", label: "Daily management", detail: "Problem-solving embedded on the frontline" },
        { icon: CheckCircle, value: "Enabler", label: "CoE role", detail: "Shifted from doing to coaching" }
      ]}
      quote="Our improvement capability was excellent and completely stuck in one small team. Training hundreds of people across the branches and giving them a daily way to solve their own problems changed everything — the returns came in at more than four times the prior year, because improvement was finally happening everywhere instead of only where the central team could reach."
      quoteAuthor="Head of Operational Excellence"
      quoteRole="Retail bank"
      relatedStudies={[
        { title: "How a P&C Carrier Moved From 4% to 38% Straight-Through Claims", metric: "4→38%", label: "straight-through processing", link: "/cases/insurance-hybrid-claims-automation", image: "/images/cases/insurance-hybrid-claims-automation-hero.jpg" },
        { title: "How a Health Plan Turned 12 Orphaned Bots Into 140 Working Automations", metric: "12→140", label: "automations in 18 months", link: "/cases/payer-automation-coe-scale", image: "/images/cases/payer-automation-coe-scale-hero.jpg" }
      ]}
      ctaTitle="Is your improvement capability stuck in a central team?"
      ctaDescription="Let's scale it into the operating teams and embed problem-solving where the work happens."
    />
  );
}
