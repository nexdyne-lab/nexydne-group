import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, DollarSign, Clock, Target, CheckCircle, Zap } from "lucide-react";

export default function WealthDigitalAdvisoryMvp() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Digital Advisory MVP Validates in 90 Days, Kills Two of Four Features | Wealth Case Study"
      seoDescription="A wealth manager was about to invest heavily in a digital advisory product. An eight-week discovery and a controlled MVP validated the retention curve in 90 days and disqualified two of four planned features, saving nine months of build."
      canonical="/cases/wealth-digital-advisory-mvp"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Wealth Manager Saved Nine Months of Build by Validating in 90 Days"
      subtitle="The plan was to invest heavily in a digital advisory product built to a fixed feature list. Testing the core experience under controlled exposure proved what was worth building — and what was not."
      heroImage="/images/cases/wealth-digital-advisory-mvp-hero.jpg"
      metrics={[
        { value: "90 Days", label: "To Validation" },
        { value: "2 of 4", label: "Features Killed" },
        { value: "~9 Mo", label: "Build Time Saved" },
        { value: "8 Wks", label: "Discovery Compressed" }
      ]}
      clientContextTitle="About to Build on Assumptions"
      clientContextIntro="A wealth manager was preparing to commit serious capital to a digital advisory product, built to a plan with four major features already locked in. The business case rested on assumptions about what clients would use and stay for — assumptions no one had tested against real behavior."
      clientContextBody="The default path was to build the full feature set and launch, discovering only afterward which parts clients actually valued. That path risked spending most of a year constructing features that would prove unnecessary, and betting the product's success on a retention curve that existed only in a spreadsheet. The firm wanted to know, before the heavy investment, whether the core experience retained clients and which of the four planned features were worth building at all."
      clientProfile={{
        industry: "Wealth Manager",
        companySize: "~$420M Annual Revenue",
        projectDuration: "4 Months",
        additionalInfo: "Digital Advisory Product",
        additionalLabel: "New Offering"
      }}
      challengeTitle="Why the Original Plan Was Risky"
      challenges={[
        { icon: AlertTriangle, title: "Untested Assumptions", description: "The business case rested on beliefs about client behavior that had never been validated." },
        { icon: DollarSign, title: "Heavy Upfront Investment", description: "The plan committed major capital to a full feature build before any market signal." },
        { icon: Clock, title: "Learning Only After Launch", description: "The default path would reveal which features mattered only once they were already built." },
        { icon: Target, title: "A Spreadsheet Retention Curve", description: "The product's success hinged on a retention curve that existed only in the model." }
      ]}
      approachTitle="Validate Before You Build"
      approachIntro="We compressed discovery into eight weeks and shipped the MVP under controlled exposure — and within ninety days the validation framework confirmed the retention curve on the core experience and disqualified two of the four planned features, saving roughly nine months of build."
      steps={[
        { step: "01", title: "Compressing Discovery to Eight Weeks", description: "We ran a focused eight-week discovery to define the core experience worth testing, rather than a months-long planning exercise." },
        { step: "02", title: "Shipping Under Controlled Exposure", description: "We launched the MVP to a controlled set of clients so real behavior — not opinion — drove the learning." },
        { step: "03", title: "Validating the Retention Curve", description: "Within ninety days the framework confirmed that the core experience retained clients, de-risking the central assumption behind the investment." },
        { step: "04", title: "Killing What Didn't Earn Its Place", description: "The same evidence disqualified two of the four planned features, saving roughly nine months of build the original plan would have spent on them." }
      ]}
      resultsTitle="Building Only What Clients Value"
      results={[
        { icon: CheckCircle, value: "90 Days", label: "To validation", detail: "Retention curve confirmed on the core" },
        { icon: Target, value: "2 of 4", label: "Features killed", detail: "Disqualified by real behavior" },
        { icon: Clock, value: "~9 Mo", label: "Build saved", detail: "Not spent on features that failed" },
        { icon: Zap, value: "8 Wks", label: "Discovery", detail: "Compressed to move fast" }
      ]}
      quote="We were ready to spend the better part of a year building four features because a plan said so. Testing the core with real clients in ninety days told us the experience retained them and that two of those features were not worth building. That single quarter of validation saved us nine months of wasted engineering."
      quoteAuthor="Head of Digital"
      quoteRole="Wealth manager"
      relatedStudies={[
        { title: "How a Heritage Brand Launched an $18M DTC Business Without Hurting Wholesale", metric: "$18M", label: "first-year DTC revenue", link: "/cases/consumer-dtc-launch", image: "/images/cases/consumer-dtc-launch-hero.jpg" },
        { title: "How a B2B Distributor Moved a Third of Its Order Entry Off the Sales Desk", metric: "31%", label: "of order entry self-served", link: "/cases/b2b-ecommerce-launch", image: "/images/cases/b2b-ecommerce-launch-hero.jpg" }
      ]}
      ctaTitle="About to build a product on assumptions?"
      ctaDescription="Let's validate the core and the feature set with real users before you commit the capital."
    />
  );
}
