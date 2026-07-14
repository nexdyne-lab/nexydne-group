import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, FileCheck, Shield, Users, Zap, DollarSign, Star } from "lucide-react";

export default function WealthOnboarding() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Wealth Onboarding from Weeks to Days | Financial Services Case Study"
      seoDescription="A wealth manager promised white-glove service, then made new clients wait three weeks in paperwork. Streamlining the first experience cut onboarding to five days."
      canonical="/cases/wealth-onboarding"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Wealth Manager Cut Client Onboarding from Weeks to Days"
      subtitle="A wealth manager built its name on personal service, then made every new client begin with three weeks of paperwork. Rebuilding that first experience freed advisers to do what clients actually pay them for."
      heroImage="/images/industries/fin-handshake-city.jpg"
      metrics={[
        { value: "60%", label: "Faster Onboarding" },
        { value: "95%", label: "Documents Right First Time" },
        { value: "$4.2M", label: "Saved Each Year" },
        { value: "92%", label: "Client Satisfaction" }
      ]}
      clientContextTitle="A Premium Promise Undone by Paperwork"
      clientContextIntro="A wealth management firm looked after the finances of wealthy individuals and families, and its whole reputation rested on attentive, personal service. Yet the very first thing a new client experienced told the opposite story: three weeks of collecting documents, keying in details by hand, running background checks and going back and forth over anything that was missing. The relationship began not with advice but with an apology for the delay."
      clientContextBody="Behind the scenes, advisers were spending around 40% of their time on administrative work rather than with clients — chasing the same paperwork more than once, since the average new relationship involved close to fifty separate documents, many resubmitted because they arrived incomplete or unreadable. The checks that regulators require were done one after another by hand, creating bottlenecks and no small amount of compliance risk. A firm that prided itself on a white-glove touch was letting a paper-bound process quietly undercut the very promise it was built on."
      clientProfile={{
        industry: "Wealth Management Firm",
        companySize: "~$3.5B Client Assets",
        projectDuration: "15 Months",
        additionalInfo: "Wealthy Families",
        additionalLabel: "Clients Served"
      }}
      challengeTitle="When the First Impression Is a Filing Cabinet"
      challenges={[
        {
          icon: Clock,
          title: "Three Weeks to Get Started",
          description: "New clients waited weeks before they could begin investing while documents were gathered, checked and processed entirely by hand."
        },
        {
          icon: FileCheck,
          title: "The Same Documents, Again and Again",
          description: "Close to fifty documents per client, many resubmitted more than once because they arrived incomplete or too poor to read."
        },
        {
          icon: Shield,
          title: "Checks Done One at a Time",
          description: "The identity and background checks regulators require were run manually and in sequence, creating bottlenecks and real compliance risk."
        },
        {
          icon: Users,
          title: "Advisers Buried in Admin",
          description: "Around 40% of an adviser's time went to paperwork instead of the client relationships that are the whole point of the firm."
        }
      ]}
      approachTitle="Quiet Technology, Personal Service"
      approachIntro="Working with the firm's advisers and compliance team, we rebuilt the first weeks of the client relationship so the administrative work happened quietly in the background — fast, accurate and largely invisible — leaving the human part of the service front and center where it belonged."
      steps={[
        {
          step: "01",
          title: "Asking Only Once, and Only for What's Needed",
          description: "We built a secure online space where each client is asked for exactly the documents their situation requires and nothing more — no duplicate requests, no guessing, with clear guidance at every step."
        },
        {
          step: "02",
          title: "Reading Documents Automatically",
          description: "As documents arrive, the system reads the details straight off them — from identification, tax records and financial statements — capturing the information correctly about 95% of the time and setting aside only the genuine exceptions for a person to check."
        },
        {
          step: "03",
          title: "Running the Required Checks in Parallel",
          description: "The identity and background checks were connected to the relevant sources and run side by side rather than one after another, clearing the compliance bottleneck without ever cutting a corner."
        },
        {
          step: "04",
          title: "Giving Advisers a Clear Line of Sight",
          description: "A simple live view showed each adviser exactly where every new client stood and what, if anything, was outstanding — so they could spend their attention on the client's goals while the process looked after itself."
        }
      ]}
      resultsTitle="A First Impression Worthy of the Service"
      results={[
        {
          icon: Zap,
          value: "60%",
          label: "Faster onboarding",
          detail: "From three weeks to about five days"
        },
        {
          icon: FileCheck,
          value: "95%",
          label: "Documents right the first time",
          detail: "Details captured automatically, with people checking only the exceptions"
        },
        {
          icon: DollarSign,
          value: "$4.2M",
          label: "Saved each year",
          detail: "From far less manual handling and rework"
        },
        {
          icon: Star,
          value: "92%",
          label: "Client satisfaction",
          detail: "Up from 71% before the change"
        }
      ]}
      quote="Our clients expect the very best from the moment they meet us. Instead of opening the relationship with an apology for paperwork, our advisers now spend that time understanding what a family is really trying to achieve. The technology does its work out of sight — the client simply experiences a calm, quick, genuinely premium start."
      quoteAuthor="Chief Operating Officer"
      quoteRole="Wealth management firm"
      relatedStudies={[
        {
          title: "Catching Card Fraud Before the Money Moves",
          metric: "73%",
          label: "lower fraud losses",
          link: "/cases/financial-fraud-detection",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Turning Single Accounts into Real Relationships",
          metric: "$24M",
          label: "in new revenue",
          link: "/cases/bank-cross-sell",
          image: "/images/industries/fin-trader.jpg"
        }
      ]}
      ctaTitle="Ready to make the first weeks feel as good as the advice?"
      ctaDescription="Let's talk about letting the paperwork run itself so your people can focus on clients."
    />
  );
}
