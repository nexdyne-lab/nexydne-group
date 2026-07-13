import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, DollarSign, Target, BarChart3, TrendingUp, CheckCircle } from "lucide-react";

export default function TelecomActivationJourneyRedesign() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Activation Journey Redesign Cuts Repeat Calls 27% | Telecom Case Study"
      seoDescription="A telecom carrier's activation journey drove 1.4 avoidable calls per activation. Journey analytics traced 73% to two friction points; the redesign cut repeat calls 27% in two quarters."
      canonical="/cases/telecom-activation-journey-redesign"
      industry="Telecommunications"
      industryLink="/industries/technology-media-telecom"
      title="How a Telecom Carrier Cut Repeat Activation Calls by 27%"
      subtitle="Every new customer was generating well over a call to the contact center just to get activated. Tracing where the digital flow broke down showed that two friction points were causing most of them."
      heroImage="/images/industries/city-night.jpg"
      metrics={[
        { value: "27%", label: "Fewer Repeat Calls" },
        { value: "73%", label: "Calls From 2 Frictions" },
        { value: "4", label: "Tests Run" },
        { value: "2 Qtrs", label: "To the Result" }
      ]}
      clientContextTitle="An Activation Flow That Generated Calls"
      clientContextIntro="A national telecom carrier had a new-customer activation journey that looked fine on paper and behaved badly in practice. Every activation was generating an avoidable 1.4 calls to the contact center — customers who started in the digital flow but could not finish without a person."
      clientContextBody="Those calls were expensive twice over: they cost the contact center directly, and they undercut the whole point of the carrier's digital-channel strategy, which was to let customers self-serve. The operations team assumed the problem was spread thinly across a complicated journey and would take a major overhaul to fix. In reality the calls were concentrated. What the team lacked was the analytics to prove where, so they could fix the few moments that mattered instead of rebuilding everything."
      clientProfile={{
        industry: "National Telecom Carrier",
        companySize: "~$1.1B Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Digital-First Activation Goal",
        additionalLabel: "Channel Strategy"
      }}
      challengeTitle="Why New Customers Kept Calling"
      challenges={[
        { icon: Users, title: "1.4 Calls per Activation", description: "New customers could not complete activation in the digital flow, generating avoidable contact-center volume on every sign-up." },
        { icon: DollarSign, title: "Double the Cost", description: "The calls cost the contact center directly and undercut the carrier's investment in digital self-service." },
        { icon: Target, title: "Assumed to Be Everywhere", description: "The team believed the friction was spread across the whole journey and would need a full overhaul to address." },
        { icon: BarChart3, title: "No Proof of Where", description: "Without journey analytics, there was no way to locate the specific moments driving the calls." }
      ]}
      approachTitle="Find the Two Moments, Then Fix Them"
      approachIntro="We used journey analytics to trace the calls back to their source, found that two specific friction points caused 73 percent of them, and ran a focused four-test program to redesign exactly those moments rather than the whole flow."
      steps={[
        { step: "01", title: "Tracing Calls to the Journey", description: "We connected contact-center calls back to the digital steps that preceded them, pinpointing where in the activation flow customers gave up and dialed." },
        { step: "02", title: "Isolating the Two Real Culprits", description: "The analysis showed that two specific friction points accounted for 73 percent of the avoidable calls, turning a vague overhaul into two concrete fixes." },
        { step: "03", title: "Redesigning With a Four-Test Program", description: "We ran four controlled experiments to redesign those two moments, measuring the reduction in downstream calls rather than assuming the fixes worked." },
        { step: "04", title: "Tying It to the Cost-to-Serve Target", description: "We linked the improvement directly to the carrier's digital-channel cost-to-serve goal, making the redesign its primary contributor for the year." }
      ]}
      resultsTitle="Fewer Calls, Cheaper to Serve"
      results={[
        { icon: TrendingUp, value: "27%", label: "Fewer repeat calls", detail: "Within two quarters of the redesign" },
        { icon: Target, value: "73%", label: "Calls from two points", detail: "Concentrated, not spread across the flow" },
        { icon: CheckCircle, value: "4", label: "Tests run", detail: "On the two friction moments" },
        { icon: DollarSign, value: "#1", label: "Cost-to-serve driver", detail: "Primary contributor to the annual target" }
      ]}
      quote="We were bracing for a full rebuild of the activation journey. The analytics told a different story: two moments were generating almost three-quarters of the calls. We fixed those two, calls dropped by more than a quarter, and it became the single biggest reason we hit our digital cost-to-serve target."
      quoteAuthor="Director of Digital Operations"
      quoteRole="National telecom carrier"
      relatedStudies={[
        { title: "How a Consumer-Finance App Lifted Product Attach 22% by Personalizing the Right Moments", metric: "22%", label: "higher product attach", link: "/cases/finance-personalization-strategy-reroute", image: "/images/industries/fin-monitors.jpg" },
        { title: "How a DTC Retailer Went From One Personalization Release a Month to Nine", metric: "9x", label: "more releases per month", link: "/cases/dtc-personalization-stack-redesign", image: "/images/capabilities/cap-retail-apparel.jpg" }
      ]}
      ctaTitle="Do you know which two moments are driving your calls?"
      ctaDescription="Let's trace your contact-center volume back to the journey and fix what actually causes it."
    />
  );
}
