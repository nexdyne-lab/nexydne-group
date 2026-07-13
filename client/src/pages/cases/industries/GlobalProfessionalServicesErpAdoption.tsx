import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, TrendingDown, Target, BarChart3, TrendingUp, CheckCircle } from "lucide-react";

export default function GlobalProfessionalServicesErpAdoption() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="ERP Rollout Hits 92% Adoption in 60 Days Across 38 Countries | Change Management Case Study"
      seoDescription="A global professional-services firm rolling out a new ERP across 38 countries reached 92% active usage within 60 days — versus a 65% benchmark — through role-based curriculum, an early champion network, and day-one adoption measurement."
      canonical="/cases/global-professional-services-erp-adoption"
      industry="Global Professional Services"
      industryLink="/industries"
      title="How a Global Firm Got 92% of 38 Countries Using a New ERP in 60 Days"
      subtitle="Prior rollouts had stalled at two-thirds adoption while people clung to the old ways of working. Preparing each region before go-live — not training it after — changed how fast the new system took hold."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "92%", label: "Active Usage in 60 Days" },
        { value: "65%", label: "Prior Benchmark" },
        { value: "38", label: "Countries" },
        { value: "Day 1", label: "Adoption Measured" }
      ]}
      clientContextTitle="Great Systems, Reluctant Users"
      clientContextIntro="A global professional-services firm was rolling out a new ERP across 38 countries. The technology was sound; the firm's track record on adoption was not. Prior rollouts had settled at roughly 65 percent active usage, with large pockets of the organization quietly running the old process alongside the new system."
      clientContextBody="Every previous program had treated training as a go-live event — teach people the new screens the week it launched, then hope usage followed. It rarely did. Users met the new system cold, fell back on familiar workarounds under deadline pressure, and the expensive platform ran at a fraction of its value. Leadership wanted this rollout to be different: adoption measured from day one, each region prepared before its wave rather than after, and a network of local champions in place early enough to actually influence behavior."
      clientProfile={{
        industry: "Global Professional-Services Firm",
        companySize: "~$900M Annual Revenue",
        projectDuration: "9 Months",
        additionalInfo: "38-Country Rollout",
        additionalLabel: "Program Scope"
      }}
      challengeTitle="Why Adoption Kept Stalling"
      challenges={[
        { icon: Users, title: "Training as an Afterthought", description: "Prior rollouts trained users at go-live, so people met the new system cold and reverted to workarounds under pressure." },
        { icon: TrendingDown, title: "Stuck at Two-Thirds", description: "Adoption plateaued around 65 percent, leaving large parts of the firm running the old process in parallel." },
        { icon: Target, title: "No Early Champions", description: "There was no local champion network in place early enough to shape behavior before each wave went live." },
        { icon: BarChart3, title: "Adoption Measured Late", description: "Usage was assessed after the fact, too late to intervene where regions were slipping." }
      ]}
      approachTitle="Prepare the Region Before the Wave"
      approachIntro="We built the rollout around readiness rather than go-live: role-based curriculum delivered in the four weeks before each wave, a champion network activated three months ahead, and adoption instrumented from day one so slippage could be caught early."
      steps={[
        { step: "01", title: "Delivering Role-Based Curriculum Early", description: "We built curriculum tailored to each role and delivered it in the four weeks before each region's go-live, so users arrived prepared rather than cold." },
        { step: "02", title: "Activating Champions Three Months Ahead", description: "We stood up a local champion network a full quarter before each wave, giving credible peers time to influence behavior before the switch." },
        { step: "03", title: "Instrumenting Adoption on Day One", description: "We measured active usage from the first day of each wave, turning adoption into a metric the program could manage in real time." },
        { step: "04", title: "Intervening Where Regions Slipped", description: "With early signal in hand, we directed champion effort and support to the specific regions lagging the curve, keeping the whole rollout on pace." }
      ]}
      resultsTitle="Adoption That Held From the Start"
      results={[
        { icon: TrendingUp, value: "92%", label: "Active usage", detail: "Within 60 days of each go-live" },
        { icon: BarChart3, value: "+27 pts", label: "Over the benchmark", detail: "Against the firm's 65% prior rate" },
        { icon: CheckCircle, value: "38", label: "Countries", detail: "On one readiness-first playbook" },
        { icon: Target, value: "Day 1", label: "Measured", detail: "Slippage caught early enough to fix" }
      ]}
      quote="Our systems were never the problem — getting people to actually use them was. The shift was preparing each country before we flipped the switch instead of training them the week of, and watching adoption from the very first day. We landed at ninety-two percent where we used to stall in the sixties."
      quoteAuthor="Global Program Director"
      quoteRole="Professional-services firm"
      relatedStudies={[
        { title: "How a Federal Agency Made Its Process Gains Actually Stick", metric: "88%", label: "of gains sustained", link: "/cases/public-sector-sustained-adoption", image: "/images/industries/city-night.jpg" },
        { title: "How an Aerospace Manufacturer Unclogged Its Improvement Pipeline", metric: "8→71", label: "idea closures per quarter", link: "/cases/aerospace-ci-pipeline-rebuild", image: "/images/capabilities/cap-battery-factory.jpg" }
      ]}
      ctaTitle="Does your adoption stall while the old process lingers?"
      ctaDescription="Let's build a readiness-first rollout that measures and drives adoption from day one."
    />
  );
}
