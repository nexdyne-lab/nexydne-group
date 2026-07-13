import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Smartphone, Star, DollarSign, Users, Heart } from "lucide-react";

export default function InsuranceCustomerExperience() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Turning a Call-Center Insurer Into a Digital One | Insurance Case Study"
      seoDescription="A personal lines insurer ran on phone calls and paper while rivals sold and served online. Rebuilding its digital channels moved half of customers to self-service and lifted satisfaction."
      canonical="/cases/insurance-digital-distribution"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a Personal Lines Insurer Moved Half Its Customers Online"
      subtitle="A regional carrier still ran on phone calls and paper forms while newer rivals sold and served entirely online. Rebuilding its digital channels let customers do for themselves what they used to have to call about."
      heroImage="/images/industries/fin-handshake-city.jpg"
      metrics={[
        { value: "50%", label: "Now Self-Serve" },
        { value: "+28pts", label: "Satisfaction Gain" },
        { value: "40%", label: "Lower Service Cost" },
        { value: "4.7", label: "App Rating" }
      ]}
      clientContextTitle="A Digital Afterthought in a Digital Market"
      clientContextIntro="A personal lines insurer served around 600,000 policyholders, almost entirely through call centers and local agents. Its digital channels had been bolted on as an afterthought, and it showed: customers who were used to handling everything else on their phones found themselves waiting on hold and filling in paper forms to do the simplest things. Its customer-satisfaction scores trailed competitors by a wide margin, and it was quietly losing policyholders to insurers that had made buying and managing a policy effortless."
      clientContextBody="The carrier's mobile app rated barely two stars. Updating an address meant a phone call. Customers could not view their policy, file a claim or make a payment online, so nearly every routine request landed in a call center that cost far more to run than it needed to. Only about one customer in seven ever used a digital channel. The carrier was paying premium prices to deliver an experience its customers actively disliked."
      clientProfile={{
        industry: "Personal Lines Insurer",
        companySize: "~600,000 Policyholders",
        projectDuration: "24 Months",
        additionalInfo: "15% Digital Adoption",
        additionalLabel: "Starting Point"
      }}
      challengeTitle="An Experience Out of Step With Its Customers"
      challenges={[
        {
          icon: Smartphone,
          title: "A Two-Star App",
          description: "The mobile app rated barely two stars and did little, so customers who wanted to serve themselves simply could not."
        },
        {
          icon: Star,
          title: "Trailing on Satisfaction",
          description: "Customer-satisfaction scores sat well below competitors — policyholders tolerated the service rather than recommending it."
        },
        {
          icon: DollarSign,
          title: "Costly to Serve",
          description: "Service costs ran far above the industry norm, because the call center was handling routine tasks that should have been self-service."
        },
        {
          icon: Users,
          title: "Losing Customers",
          description: "Policyholders were steadily leaving for insurers that made buying and managing a policy effortless."
        }
      ]}
      approachTitle="Building Digital That Customers Actually Use"
      approachIntro="Working with the carrier's leadership, we rebuilt the digital experience around what customers actually wanted to do for themselves — and made sure that whenever they did need a person, the handoff was seamless — so digital became the easy choice rather than the last resort."
      steps={[
        {
          step: "01",
          title: "A Digital Experience Worth Using",
          description: "We rebuilt the mobile app and website from scratch around the customer, not the org chart — simple to navigate, quick, and able to handle a policy end to end. The app's rating climbed from just above two stars to 4.7."
        },
        {
          step: "02",
          title: "Everyday Tasks, Handled by the Customer",
          description: "We put the common jobs — changing a policy, filing a claim, making a payment, finding a document — fully in customers' hands. More than nine in ten who tried to serve themselves finished without needing to call."
        },
        {
          step: "03",
          title: "One Conversation Across Every Channel",
          description: "We tied the channels together so a customer could start on their phone, pick up on the web and finish with an agent without repeating themselves — the context carried across, so no one had to explain their situation twice."
        },
        {
          step: "04",
          title: "Reaching Out Before Customers Have to Ask",
          description: "We added proactive updates — renewal reminders, claim-status notes and relevant suggestions — so customers heard from the carrier at the right moments instead of having to chase it down."
        }
      ]}
      resultsTitle="A Carrier Customers Choose to Deal With"
      results={[
        {
          icon: Smartphone,
          value: "50%",
          label: "Now self-serve",
          detail: "Up from 15% — half of customers choosing digital"
        },
        {
          icon: Heart,
          value: "+28pts",
          label: "Higher customer satisfaction",
          detail: "Now ahead of the competitor average"
        },
        {
          icon: DollarSign,
          value: "40%",
          label: "Lower service cost",
          detail: "As self-service took routine calls out of the center"
        },
        {
          icon: Star,
          value: "4.7",
          label: "App store rating",
          detail: "Up from just above two stars"
        }
      ]}
      quote="We had spent years treating digital as a side project, and our customers noticed. Now they can do almost everything from their phone — file a claim, change their coverage, pay a bill — and they only call us when they want to. Our satisfaction scores are ahead of the field, our cost to serve is down, and we are keeping customers we used to lose."
      quoteAuthor="Vice President, Customer Experience"
      quoteRole="Personal lines insurer"
      relatedStudies={[
        {
          title: "Quoting Commercial Business in a Day, Not a Week",
          metric: "40%",
          label: "faster quote turnaround",
          link: "/cases/insurance-ai-underwriting",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Settling Straightforward Claims in Hours, Not Weeks",
          metric: "60%",
          label: "faster claims processing",
          link: "/cases/insurance-claims-automation",
          image: "/case-insurance-claims.399e5d4b.jpg"
        }
      ]}
      ctaTitle="Ready to make digital the easy choice?"
      ctaDescription="Let's talk about building digital channels your customers actually want to use."
    />
  );
}
