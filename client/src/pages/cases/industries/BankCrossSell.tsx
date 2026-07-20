import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingUp, Users, Sparkles, Database } from "lucide-react";

export default function BankCrossSell() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Turning Single Accounts into Real Relationships | Financial Services Case Study"
      seoDescription="A regional bank knew its customers well on paper but couldn't act on it. Bringing scattered records into one view lifted products per customer 40% and deepened relationships."
      canonical="/cases/bank-cross-sell"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Turned Single Accounts into Lasting Relationships"
      subtitle="A regional bank held years of insight about its customers, but it sat locked in separate systems that never spoke to one another. Bringing it into one view let the bank serve people at the moments that mattered."
      heroImage="/images/cases/bank-cross-sell-hero.jpg"
      metrics={[
        { value: "40%", label: "More Products Per Customer" },
        { value: "25%", label: "Less Customer Churn" },
        { value: "600K", label: "Customers Understood" },
        { value: "3.2x", label: "Return on Campaigns" }
      ]}
      clientContextTitle="Knowing Your Customers, but Not Being Able to Act on It"
      clientContextIntro="A regional bank served around 600,000 households with the full range of everyday banking — checking and savings accounts, credit cards, mortgages and modest investment products. For all that breadth of relationship, the typical customer held just 1.8 of the bank's products, well short of the 2.5 that peers of its size routinely achieved. The bank was clearly leaving business on the table; it simply could not see where."
      clientContextBody="The reason was that what the bank knew about each customer was scattered. Everyday transactions lived in the core banking system, card activity in another platform, mortgage records in a third — and nothing tied them together into a single picture of a person. Marketing therefore ran on blunt information, targeting broad age and income groups rather than the everyday signals that reveal when someone is actually ready for a new product. A customer whose spending pointed clearly toward a first home might get a credit-card offer instead of a mortgage conversation. The relationships were real; the ability to act on them was not."
      clientProfile={{
        industry: "Regional Retail Bank",
        companySize: "Full-Service Retail Bank",
        projectDuration: "18 Months",
        additionalInfo: "~600,000 Households",
        additionalLabel: "Customers Served"
      }}
      challengeTitle="One Customer, Scattered Across the Bank"
      challenges={[
        {
          icon: Database,
          title: "A Customer in Pieces",
          description: "What the bank knew about each person was split across separate systems, with no reliable way to recognize it was all the same customer."
        },
        {
          icon: Target,
          title: "Marketing by Guesswork",
          description: "Offers were aimed at broad demographic groups, missing the everyday behavior that signals when someone is genuinely ready to buy."
        },
        {
          icon: TrendingUp,
          title: "Shallow Relationships",
          description: "At 1.8 products per customer against a peer norm of 2.5, the bank was earning a fraction of the relationships it already had."
        },
        {
          icon: Users,
          title: "Missing the Moment",
          description: "With no view of life events, the bank routinely missed the windows — a move, a new job, a growing family — when people choose new products."
        }
      ]}
      approachTitle="Bringing Every Customer into a Single View"
      approachIntro="Working with the bank's marketing and data teams, we pulled together everything the bank already knew about each customer into one reliable picture, then used it to offer the right thing at the right time — a genuine act of service rather than another generic campaign."
      steps={[
        {
          step: "01",
          title: "One Reliable Picture of Each Customer",
          description: "We brought together records from across the bank's systems and worked out, carefully, which ones belonged to the same person — giving each of the 600,000 customers a single, complete profile spanning their accounts, transactions and history with the bank."
        },
        {
          step: "02",
          title: "Reading the Everyday Signals",
          description: "From ordinary account activity we drew out the patterns that hint at what a customer needs next — how they save, how they spend, where their money goes — the kind of insight that plain age-and-income data can never reveal."
        },
        {
          step: "03",
          title: "Recognizing Life's Turning Points",
          description: "We taught the system to spot the moments that drive financial decisions — a change in regular pay, spending that points to a new baby or a home in prospect — so the bank could be genuinely useful precisely when it mattered."
        },
        {
          step: "04",
          title: "Offering the Right Thing at the Right Time",
          description: "Each day the system suggested the single most relevant next product for each customer, weighing the long-term health of the relationship rather than a quick sale — so an offer felt like good advice, not a pitch."
        }
      ]}
      resultsTitle="From Scattered Records to Deeper Relationships"
      results={[
        {
          icon: Database,
          value: "600K",
          label: "Customers in a single view",
          detail: "Every account, transaction and history tied to one person"
        },
        {
          icon: Target,
          value: "40%",
          label: "More products per customer",
          detail: "Up from 1.8 to 2.5 — in line with the strongest peers"
        },
        {
          icon: Sparkles,
          value: "3.2x",
          label: "Return on campaigns",
          detail: "Well-timed, relevant offers far outperformed generic ones"
        },
        {
          icon: Users,
          value: "25%",
          label: "Less customer churn",
          detail: "Timely, relevant service gave people reasons to stay"
        }
      ]}
      quote="For the first time we can see a customer as a whole person rather than a set of separate accounts. When someone's everyday banking quietly signals they're heading toward buying a home, we can open a mortgage conversation before they start shopping around. That isn't a marketing campaign — it's the kind of service a good local bank is supposed to offer."
      quoteAuthor="Chief Marketing Officer"
      quoteRole="Regional retail bank"
      relatedStudies={[
        {
          title: "Catching Card Fraud Before the Money Moves",
          metric: "73%",
          label: "lower fraud losses",
          link: "/cases/financial-fraud-detection",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Cutting Wealth Onboarding from Weeks to Days",
          metric: "60%",
          label: "faster onboarding",
          link: "/cases/wealth-onboarding",
          image: "/images/cases/wealth-onboarding-hero.jpg"
        }
      ]}
      ctaTitle="Ready to earn more from the customers you already have?"
      ctaDescription="Let's talk about turning scattered records into relationships you can act on."
    />
  );
}
