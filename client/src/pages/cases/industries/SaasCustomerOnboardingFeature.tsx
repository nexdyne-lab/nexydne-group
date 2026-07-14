import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Zap, TrendingUp, Users, CheckCircle } from "lucide-react";

export default function SaasCustomerOnboardingFeature() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Launching the NexDyne Digital Product Arm | Internal Case Study"
      seoDescription="NexDyne built its own digital product arm from the ground up, scaling from five employees to hundreds by applying the same venture-building discipline it brings to clients."
      canonical="/case-studies/saas-customer-onboarding"
      industry="Technology"
      industryLink="/industries/technology-media-telecom"
      title="How NexDyne Built Its Digital Product Arm From Five People to Hundreds"
      subtitle="We built our own digital product business the way we build ventures for clients — validating fast, shipping real product, and scaling what worked. It grew from five people to hundreds."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "5 → hundreds", label: "Team Scaled" },
        { value: "Ground-Up", label: "Venture Build" },
        { value: "Product", label: "Led Growth" },
        { value: "Proven", label: "On Ourselves" }
      ]}
      clientContextTitle="Building the Venture We Sell"
      clientContextIntro="NexDyne set out to build its own digital product arm from the ground up — not as a side project, but as a real business. It was an opportunity to prove the venture-building discipline we bring to clients on the hardest possible test: ourselves, starting from five people."
      clientContextBody="Starting a product business from scratch faces every challenge we help clients navigate — validating the opportunity before over-investing, shipping real product rather than endless planning, building an operating model that scales, and growing the team without losing the culture that made the early days work. There was no external client to blame if it stalled; the discipline had to be real. We applied the same approach we advocate: validate fast, build for production, and scale what works, deliberately and with the same rigor we bring to client ventures."
      clientProfile={{
        industry: "NexDyne Consulting Group",
        companySize: "5 → Hundreds of Employees",
        projectDuration: "Multi-Year Build",
        additionalInfo: "Digital Product Arm",
        additionalLabel: "Internal Venture"
      }}
      challengeTitle="Why Building It Ourselves Was the Real Test"
      challenges={[
        { icon: Target, title: "Validate Before Over-Investing", description: "We had to prove the opportunity before committing serious resources, just as we advise clients." },
        { icon: Zap, title: "Ship Real Product", description: "Success required shipping production product, not endless planning." },
        { icon: TrendingUp, title: "Build to Scale", description: "The operating model had to grow from five people to hundreds without breaking." },
        { icon: Users, title: "Grow Without Losing Culture", description: "Scaling the team risked the culture that made the early days work." }
      ]}
      approachTitle="Apply Our Own Playbook"
      approachIntro="We built the product arm using the same venture-building discipline we bring to clients — validating fast, building for production, and scaling what worked — growing from five people to hundreds."
      steps={[
        { step: "01", title: "Validating the Opportunity", description: "We validated the product opportunity before over-investing, exactly as we advise clients to do." },
        { step: "02", title: "Shipping Production Product", description: "We built and shipped real product early, learning from the market rather than planning in a vacuum." },
        { step: "03", title: "Building a Scalable Operating Model", description: "We built the operating model and team to scale, so growth did not break what worked." },
        { step: "04", title: "Scaling to Hundreds", description: "We grew the arm from five people to hundreds, proving the discipline on ourselves." }
      ]}
      resultsTitle="Our Playbook, Proven on Ourselves"
      results={[
        { icon: TrendingUp, value: "5 → hundreds", label: "Team scaled", detail: "From founding to scale" },
        { icon: CheckCircle, value: "Validated", label: "First", detail: "Before over-investing" },
        { icon: Zap, value: "Product", label: "Led growth", detail: "Real product, shipped early" },
        { icon: Target, value: "Proven", label: "Discipline", detail: "On the hardest test — ourselves" }
      ]}
      quote="We tell clients to validate fast, ship real product, and scale what works — so we built our own product arm exactly that way, starting from five people. Growing it to hundreds proved the discipline is real, because there was no one else to hold accountable for it. It is the venture we are proudest of, because it is ours."
      quoteAuthor="Head of Business Building"
      quoteRole="NexDyne Consulting Group"
      relatedStudies={[
        { title: "How We Helped Career Connect Reach 15,000 Students", metric: "15,000", label: "students enrolled and inspired", link: "/case-studies/career-connect-education", image: "/images/capabilities/cap-coder.jpg" },
        { title: "How an Innovative Public-Private Partnership Built More Resilient Local Food Systems", metric: "PPP", label: "public-private partnership", link: "/case-studies/sustainable-food-systems", image: "/images/capabilities/cap-food.jpg" }
      ]}
      ctaTitle="Want to build a venture the way we built ours?"
      ctaDescription="Let's apply the same validate-build-scale discipline to your new product business."
    />
  );
}
