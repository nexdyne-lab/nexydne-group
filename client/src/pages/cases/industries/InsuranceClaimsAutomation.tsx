import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, FileCheck, Users, Target, Zap, DollarSign, Shield } from "lucide-react";

export default function InsuranceClaimsAutomation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Settling Straightforward Claims in Hours, Not Weeks | Insurance Case Study"
      seoDescription="A property and casualty insurer took two weeks to settle even simple claims while rivals paid in hours. Automating the routine claims cut cycle time by 60% and saved $14M a year."
      canonical="/cases/insurance-claims-automation"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a P&C Insurer Cut Its Claims Cycle by 60%"
      subtitle="A property and casualty carrier was settling even simple claims in two weeks while nimbler rivals paid in hours. Handling the routine claims automatically freed adjusters for the cases that needed them."
      heroImage="/images/cases/insurance-claims-automation-hero.jpg"
      metrics={[
        { value: "60%", label: "Faster Processing" },
        { value: "85%", label: "Settled Automatically" },
        { value: "$14M", label: "Saved Each Year" },
        { value: "+30pts", label: "Satisfaction Gain" }
      ]}
      clientContextTitle="Simple Claims Stuck in the Same Line as Hard Ones"
      clientContextIntro="A property and casualty insurer handled around 200,000 claims a year, and it took fifteen days on average to settle one — a minor fender-bender treated no differently from a disputed total loss. Customers noticed. Newer competitors were paying straightforward claims within hours, and every slow settlement chipped away at the carrier's reputation at the exact moment a policyholder was deciding whether to renew."
      clientContextBody="Claims was the carrier's largest operating cost, staffed by around 150 adjusters, and most of their day went to work that required no real expertise — collecting documents, keying in details, checking coverage line by line. Simple, clear-cut claims waited in the same queue as genuinely complicated ones, so nothing moved quickly and the hardest cases got less attention than they deserved. The carrier needed the routine claims to handle themselves, so its adjusters could concentrate where judgment truly mattered."
      clientProfile={{
        industry: "Property & Casualty Insurer",
        companySize: "~200,000 Claims a Year",
        projectDuration: "18 Months",
        additionalInfo: "~150 Adjusters",
        additionalLabel: "Claims Team"
      }}
      challengeTitle="Manual Work at Every Step"
      challenges={[
        {
          icon: Clock,
          title: "A Two-Week Wait",
          description: "Even simple claims took fifteen days to settle, while competitors were paying comparable claims within hours."
        },
        {
          icon: FileCheck,
          title: "Reviewing Every Document by Hand",
          description: "Adjusters read and re-keyed every document that arrived, spending most of their time on administration rather than the claim itself."
        },
        {
          icon: Users,
          title: "The Largest Cost Center",
          description: "Around 150 adjusters processed the entire book, making claims by far the carrier's biggest operating expense."
        },
        {
          icon: Target,
          title: "No Fast Lane for Easy Claims",
          description: "Simple and complex claims sat in the same queue, so straightforward cases never moved any faster than the hardest ones."
        }
      ]}
      approachTitle="Letting the Routine Claims Settle Themselves"
      approachIntro="Working with the carrier's claims leaders, we set out to move the simple, clear-cut claims through without manual effort — and to give adjusters a real head start on the complex ones — so speed and accuracy improved together rather than at each other's expense."
      steps={[
        {
          step: "01",
          title: "Reading the Paperwork Automatically",
          description: "We put software in place that pulled the key facts out of the documents a claim generates — repair estimates, reports, photos and forms — and organized them without an adjuster having to key anything in. Nearly every structured document was read correctly the first time."
        },
        {
          step: "02",
          title: "Settling the Clear-Cut Claims on Their Own",
          description: "For claims where coverage was plain and the amount was reasonable, the system checked the details and settled them straight through. The genuinely complex cases were routed to the right adjuster with the groundwork already done."
        },
        {
          step: "03",
          title: "Flagging the Claims That Don't Add Up",
          description: "We added a check that scored each claim for signs of possible fraud, learning from the carrier's own past cases and setting aside anything unusual for a person to review — so faster settlement did not mean paying claims it shouldn't."
        },
        {
          step: "04",
          title: "Adjusters Set Up to Focus",
          description: "On the claims that needed them, adjusters opened a prepared summary, a suggested reserve and similar past cases — the legwork finished — so their attention went to investigating and settling, not assembling the file."
        }
      ]}
      resultsTitle="Faster Claims, Lower Cost"
      results={[
        {
          icon: Clock,
          value: "60%",
          label: "Faster processing",
          detail: "From fifteen days to six on average"
        },
        {
          icon: Zap,
          value: "85%",
          label: "Settled automatically",
          detail: "Simple claims closed without manual work"
        },
        {
          icon: DollarSign,
          value: "$14M",
          label: "Saved each year",
          detail: "From lower handling cost and fewer errors"
        },
        {
          icon: Shield,
          value: "+30pts",
          label: "Higher customer satisfaction",
          detail: "Policyholders rewarded the faster settlements"
        }
      ]}
      quote="Our adjusters were spending their days on paperwork, and our customers were waiting two weeks for a check they should have had in a day. Now the simple claims settle on their own, and my best people spend their time on the cases that actually need them. Costs came down and, for the first time in years, our customers are telling us our claims experience is a reason to stay."
      quoteAuthor="Vice President, Claims"
      quoteRole="Property and casualty insurer"
      relatedStudies={[
        {
          title: "Quoting Commercial Business in a Day, Not a Week",
          metric: "40%",
          label: "faster quote turnaround",
          link: "/cases/insurance-ai-underwriting",
          image: "/images/cases/insurance-ai-underwriting-hero.jpg"
        },
        {
          title: "Turning a Call-Center Insurer Into a Digital One",
          metric: "50%",
          label: "digital adoption",
          link: "/cases/insurance-digital-distribution",
          image: "/images/cases/insurance-digital-distribution-hero.jpg"
        }
      ]}
      ctaTitle="Ready to settle the easy claims in hours?"
      ctaDescription="Let's talk about clearing the routine work out of your claims operation."
    />
  );
}
