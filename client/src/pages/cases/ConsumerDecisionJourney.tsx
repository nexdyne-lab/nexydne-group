import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { PackageCheck, TrendingUp, Trophy, Target, Radio, Users, Sparkles } from "lucide-react";

export default function ConsumerDecisionJourney() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="AI-Powered Journey Orchestration for a Product Launch | Consumer Products Case Study"
      seoDescription="A consumer electronics giant was wasting launch budget on broad awareness. Mapping the decision journey and reallocating spend sold out inventory in two weeks at 3x ROAS."
      canonical="/cases/consumer-decision-journey"
      industry="Consumer Products"
      industryLink="/industries/consumer-products"
      title="How a Consumer Electronics Giant Sold Out a Launch with AI Journey Orchestration"
      subtitle="Granular data and AI mapped the decision journey — reallocating media spend to the moments that mattered and selling out flagship inventory in record time."
      heroImage="/images/cases/consumer-decision-journey-hero.jpg"
      metrics={[
        { value: "Sold Out", label: "Inventory in 2 Weeks" },
        { value: "3x", label: "ROAS vs. Previous Launch" },
        { value: "#1", label: "Category Market Share" }
      ]}
      clientContextTitle="A Budget Spread Too Thin"
      clientContextIntro="A global consumer electronics manufacturer was preparing to launch a flagship smart-home device. In previous launches, it had spread marketing budget thinly across TV, print, and broad digital display — producing mediocre sales and low brand recall."
      clientContextBody="The team knew the path to purchase had become a complex, non-linear journey, but their marketing mix hadn't kept pace. They lacked visibility into which touchpoints actually influenced decisions, and were spending on channels that didn't drive conversion. They needed to know exactly when and where buyers were most influenceable — from discovery to purchase — to spend a limited launch budget for maximum impact."
      clientProfile={{
        industry: "Global Consumer Electronics Manufacturer",
        companySize: "Flagship Product Launch",
        projectDuration: "Launch Campaign",
        additionalInfo: "70% of Decisions in Evaluation",
        additionalLabel: "Key Insight"
      }}
      challengeTitle="Why Launches Underperformed"
      challenges={[
        {
          icon: Target,
          title: "Budget on the wrong phase",
          description: "80% of spend went to broad awareness, while 70% of decisions were actually made during active evaluation."
        },
        {
          icon: Radio,
          title: "No touchpoint visibility",
          description: "The team couldn't see which touchpoints influenced decisions, so budget flowed to channels that didn't convert."
        },
        {
          icon: Users,
          title: "A non-linear journey",
          description: "Buyers moved through a complex, non-linear path the traditional marketing mix simply couldn't address."
        },
        {
          icon: Sparkles,
          title: "Low recall, mediocre sales",
          description: "Thinly spread spend produced weak brand recall and disappointing results in prior launches."
        }
      ]}
      approachTitle="Mapping the Consumer Decision Journey"
      approachIntro="NEXDYNE mapped the Consumer Decision Journey using advanced attribution modeling and AI-driven sentiment analysis — then reallocated budget to the moments that actually moved buyers."
      steps={[
        {
          step: "01",
          title: "Find the influence moment",
          description: "Attribution modeling revealed that 70% of decisions were made in the 'active evaluation' phase — where consumers compared specs and read reviews online."
        },
        {
          step: "02",
          title: "Move the money to where it works",
          description: "We shifted 60% of media spend to high-impact digital channels and partnered with key tech influencers and review sites for social proof."
        },
        {
          step: "03",
          title: "Optimize for conversion",
          description: "Product detail pages were optimized through A/B testing, and AI-generated creative variations were deployed to combat ad fatigue."
        },
        {
          step: "04",
          title: "Run a real-time launch war room",
          description: "A cross-functional war room used real-time sentiment monitoring to address concerns instantly and adjust the campaign on the fly."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: PackageCheck,
          value: "Sold Out",
          label: "Initial inventory in 2 weeks",
          detail: "The launch shattered internal benchmarks"
        },
        {
          icon: TrendingUp,
          value: "3x",
          label: "ROAS vs. previous launch",
          detail: "By spending at the moment of influence"
        },
        {
          icon: Trophy,
          value: "#1",
          label: "Category market share",
          detail: "Establishing the brand as a serious smart-home contender"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
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
      ctaTitle="Ready to spend where decisions are actually made?"
      ctaDescription="Let's talk about what journey orchestration could do for your next launch."
    />
  );
}
