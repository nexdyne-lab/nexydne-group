import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Users, Heart, Target, DollarSign, Star } from "lucide-react";

export default function TelecomCustomerExperience() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting a Regional Carrier's Churn by 40% | Technology, Media & Telecom Case Study"
      seoDescription="A regional mobile carrier was losing customers faster than its rivals and only learned they were unhappy once they complained. Getting ahead of problems cut churn by 40% and complaints by 60%."
      canonical="/cases/telecom-customer-experience"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Regional Carrier Cut Customer Churn by 40%"
      subtitle="A mobile carrier was losing customers faster than its competitors and only found out they were unhappy after they had already decided to leave. Seeing trouble coming — and acting on it early — turned defection into loyalty."
      heroImage="/images/cases/telecom-customer-experience-hero.jpg"
      metrics={[
        { value: "40%", label: "Lower Churn" },
        { value: "35pts", label: "Higher Satisfaction" },
        { value: "2.0% → 1.2%", label: "Monthly Churn" },
        { value: "60%", label: "Fewer Complaints" }
      ]}
      clientContextTitle="Learning Customers Were Unhappy Only Once They Left"
      clientContextIntro="A regional mobile carrier served around 1.5 million customers and was losing too many of them. Every month it lost about 2% of its base, while the strongest operators in the market held that figure closer to 1.2%. On a business this size, each point of monthly churn represented a serious share of annual revenue. Its customer satisfaction trailed the wider industry by a wide margin, and the carrier could feel it in the numbers."
      clientContextBody="The pattern was always the same, and always too late. Network problems went unnoticed until a customer rang to complain. Billing mistakes bred frustration before anyone spotted them. Service was something the carrier did in response to a problem, never ahead of one. The company could tell you exactly who had left, but not who was about to — and by the time a retention offer reached a wavering customer, that customer had usually already made up their mind."
      clientProfile={{
        industry: "Wireless Telecommunications",
        companySize: "Regional Mobile Carrier",
        projectDuration: "18 Months",
        additionalInfo: "~1.5M Customers",
        additionalLabel: "Subscriber Base"
      }}
      challengeTitle="Losing Customers Faster Than Rivals"
      challenges={[
        {
          icon: TrendingDown,
          title: "Churn Above the Market",
          description: "Monthly losses ran at 2% against 1.2% for the best operators — with each point of churn a serious drag on annual revenue."
        },
        {
          icon: Users,
          title: "Always Reacting, Never Ahead",
          description: "Network and billing problems came to light only when a customer complained, by which point the damage was already done."
        },
        {
          icon: Heart,
          title: "Customers Who Tolerated the Service",
          description: "Satisfaction sat well below the industry norm — customers were putting up with the carrier rather than recommending it."
        },
        {
          icon: Target,
          title: "Help That Arrived Too Late",
          description: "Retention offers went out after a customer had already decided to leave, far too late to change anyone's mind."
        }
      ]}
      approachTitle="Getting Ahead of the Problem"
      approachIntro="Working with the carrier, we shifted the company from reacting to problems to anticipating them — spotting the customers who were quietly heading for the exit while there was still time to win them back, and fixing the everyday problems before they turned into complaints."
      steps={[
        {
          step: "01",
          title: "Watching the Experience, Customer by Customer",
          description: "We built a view of service quality for every customer — call quality, data speeds and billing accuracy — so the carrier could see a dropped call, a slow connection or a billing error as it happened, rather than waiting for the phone to ring."
        },
        {
          step: "02",
          title: "Spotting the Customers About to Leave",
          description: "We built models that flagged which customers were likely to leave, around two months ahead, by reading the signals in how they used the service and how their recent experience had been. That gave the carrier a real window to act."
        },
        {
          step: "03",
          title: "Reaching Out First",
          description: "When something went wrong, customers now heard from the carrier first — an apology and a credit before they thought to complain. Those most at risk of leaving received offers shaped around what they actually valued."
        },
        {
          step: "04",
          title: "A Better Call When It Counts",
          description: "We redesigned customer service so agents saw the full picture of each customer, were guided to the best next step, and could resolve most issues on the first call rather than passing them along."
        }
      ]}
      resultsTitle="Loyalty Rebuilt"
      results={[
        {
          icon: TrendingDown,
          value: "40%",
          label: "Lower churn",
          detail: "Trouble spotted and fixed before customers decided to leave"
        },
        {
          icon: Heart,
          value: "35pts",
          label: "Higher satisfaction",
          detail: "Now above the industry average"
        },
        {
          icon: DollarSign,
          value: "2.0% → 1.2%",
          label: "Monthly churn",
          detail: "Revenue protected as customers stayed"
        },
        {
          icon: Star,
          value: "60%",
          label: "Fewer complaints",
          detail: "Problems resolved before they escalated"
        }
      ]}
      quote="We used to find out our customers were unhappy when they called to cancel. Now we know about a network problem before they do, and we reach out to put it right before they complain. Our retention team spends its time on customers we can still save, not on ones who have already gone. It changed the way we think about the whole relationship."
      quoteAuthor="Chief Customer Officer"
      quoteRole="Regional wireless carrier"
      relatedStudies={[
        {
          title: "Launching a Streaming Service That Won 750K Subscribers",
          metric: "750K",
          label: "subscribers in year one",
          link: "/cases/media-streaming-launch",
          image: "/images/industries/tech-datacenter.jpg"
        },
        {
          title: "Tripling a Software Company's Release Speed",
          metric: "3x",
          label: "faster releases",
          link: "/cases/tech-engineering-transformation",
          image: "/images/capabilities/cap-conference-data.jpg"
        }
      ]}
      ctaTitle="Ready to keep the customers you already have?"
      ctaDescription="Let's talk about seeing churn coming in time to do something about it."
    />
  );
}
