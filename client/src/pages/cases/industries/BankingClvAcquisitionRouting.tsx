import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, TrendingDown, BarChart3, Target, TrendingUp, CheckCircle } from "lucide-react";

export default function BankingClvAcquisitionRouting() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Lifetime-Value Model Reroutes Acquisition Spend | Retail Banking Case Study"
      seoDescription="A regional bank optimized acquisition cost, not value. A customer-lifetime-value model wired into bid management raised the share of spend reaching the top three value deciles from 38% to 71% on flat budget."
      canonical="/cases/banking-clv-acquisition-routing"
      industry="Retail Banking"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Sent Its Acquisition Budget to the Customers Worth Having"
      subtitle="Marketing was being judged on cost per account, so it bought the cheapest accounts it could find. A lifetime-value model changed what the budget was optimizing for."
      heroImage="/images/industries/fin-trader.jpg"
      metrics={[
        { value: "38→71%", label: "Spend to Top Deciles" },
        { value: "Flat", label: "Acquisition Budget" },
        { value: "3", label: "Value Deciles Targeted" },
        { value: "12 Mo", label: "To the Shift" }
      ]}
      clientContextTitle="Optimizing Cost per Account, Not Value per Account"
      clientContextIntro="A regional bank's marketing team was measured, like most, on cost per acquired account. The metric was clean and easy to report, and it quietly steered the entire budget toward whichever accounts were cheapest to acquire — regardless of what those customers were worth over their lifetime."
      clientContextBody="The consequence built up slowly. The bank was efficiently acquiring large numbers of low-value accounts while under-investing in the customers who would generate the balances, products, and tenure that actually drive a bank's economics. Because value never entered the optimization, no one could see the mix problem in the cost-per-account dashboard. Leadership wanted the same acquisition budget pointed at high-value customers, which meant getting a credible lifetime-value signal into the systems that decided where the money went."
      clientProfile={{
        industry: "Regional Retail Bank",
        companySize: "~$430M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "Digital Acquisition Program",
        additionalLabel: "Growth Engine"
      }}
      challengeTitle="Why the Budget Bought the Wrong Customers"
      challenges={[
        { icon: DollarSign, title: "A Cost Metric That Misled", description: "Optimizing cost per account rewarded the cheapest customers to acquire, not the most valuable ones." },
        { icon: TrendingDown, title: "Efficiently Acquiring Low Value", description: "The bank was winning many low-value accounts while under-investing in the customers who drive its economics." },
        { icon: BarChart3, title: "Value Invisible in the Dashboard", description: "Because lifetime value never entered the optimization, the mix problem could not be seen in the reporting." },
        { icon: Target, title: "No Value Signal in the Systems", description: "Bid management and channel allocation had no credible value score to route spend by." }
      ]}
      approachTitle="Put Lifetime Value Into the Decisions"
      approachIntro="We built a customer-lifetime-value model on first-party transaction signals and operational tenure data, then wired the score directly into bid-management and channel-allocation decisions so the budget started chasing value, not cost."
      steps={[
        { step: "01", title: "Modeling Value From First-Party Data", description: "We built a lifetime-value model on the bank's own transaction signals and tenure data, producing a credible value score for prospective customer segments." },
        { step: "02", title: "Getting the Score Into the Systems", description: "We wired the value score into bid-management and channel-allocation decisions so it shaped where money went automatically, not in a quarterly review." },
        { step: "03", title: "Reorienting the Optimization", description: "We shifted the acquisition objective from cost per account to value acquired, aligning the team's targets and reporting with the new goal." },
        { step: "04", title: "Monitoring the Mix Shift", description: "We tracked the share of spend reaching the top value deciles over twelve months, tuning the routing as the model proved itself in market." }
      ]}
      resultsTitle="The Same Budget, Far Better Customers"
      results={[
        { icon: TrendingUp, value: "38→71%", label: "Spend to top deciles", detail: "Share reaching the top three value deciles" },
        { icon: DollarSign, value: "Flat", label: "Acquisition budget", detail: "Reallocated, not increased" },
        { icon: Target, value: "3", label: "Value deciles", detail: "Prioritized in bid and channel decisions" },
        { icon: CheckCircle, value: "12 Mo", label: "To the shift", detail: "From model launch to the new mix" }
      ]}
      quote="We were brilliant at buying cheap accounts and blind to whether they were worth having. Once a lifetime-value score sat inside our bidding decisions, the same budget started finding the customers who actually build a bank. Nearly three-quarters of our spend now reaches our most valuable segments, up from barely a third."
      quoteAuthor="Head of Acquisition Marketing"
      quoteRole="Regional retail bank"
      relatedStudies={[
        { title: "How a Health System Turned a Dormant NPS Score Into Fewer Escalations", metric: "34%", label: "fewer experience escalations", link: "/cases/healthcare-closed-loop-voc", image: "/case-healthcare-team.5797392b.jpg" },
        { title: "How a B2B SaaS Provider Reordered Its Roadmap and Lifted Expansion Revenue 19%", metric: "19%", label: "more expansion revenue", link: "/cases/saas-voc-roadmap-reorder", image: "/images/capabilities/cap-conference-data.jpg" }
      ]}
      ctaTitle="Is your acquisition budget optimizing cost or value?"
      ctaDescription="Let's get a lifetime-value signal into the systems that decide where your spend goes."
    />
  );
}
